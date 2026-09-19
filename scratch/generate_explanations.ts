import { allQuestions } from '../src/lib/questions/index';
import * as fs from 'fs';
import * as path from 'path';
import { GoogleGenAI } from '@google/genai';

// Usage: 
// npx tsx scratch/generate_explanations.ts

// Load .env.local manually
const envPath = path.join(__dirname, '../.env.local');
if (fs.existsSync(envPath)) {
  const envFile = fs.readFileSync(envPath, 'utf8');
  envFile.split('\n').forEach(line => {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (match) {
      let val = match[2] || '';
      if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
      process.env[match[1]] = val;
    }
  });
}

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("ERROR: Please set GEMINI_API_KEY in .env.local or environment variable.");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });
const outputFile = path.join(__dirname, '../src/lib/questions/option_explanations.json');

async function run() {
  let explanations: Record<string, Record<string, string>> = {};
  if (fs.existsSync(outputFile)) {
    const raw = fs.readFileSync(outputFile, 'utf8');
    if (raw.trim() !== '') {
      explanations = JSON.parse(raw);
    }
  }

  let count = 0;
  for (const q of allQuestions) {
    if (q.optionExplanations) continue; // Already hardcoded
    if (explanations[q.id]) continue; // Already generated
    
    // Find incorrect options
    const incorrectOptions = q.options.filter(opt => !q.correctAnswers.includes(opt.id));
    if (incorrectOptions.length === 0) continue;

    console.log(`Generating explanations for ${q.id} (${incorrectOptions.length} incorrect options)...`);
    
    const prompt = `
You are an expert AWS Cloud Practitioner instructor.

Question: ${q.questionText}
Correct Answers: ${q.correctAnswers.join(', ')}
General Explanation: ${q.explanation}

Incorrect Options:
${incorrectOptions.map(o => `${o.id}: ${o.text}`).join('\n')}

For each INCORRECT option listed above, provide a concise explanation (1-2 sentences) of why it is incorrect in the context of the question. Do not explain the correct answer.

Return ONLY valid JSON in this exact format:
{
${incorrectOptions.map(o => `  "${o.id}": "explanation"`).join(',\n')}
}
`;

    let success = false;
    let retries = 0;
    const maxRetries = 5;

    while (!success && retries < maxRetries) {
      try {
        const response = await ai.models.generateContent({
          model: 'gemini-3.6-flash-8b',
          contents: prompt,
          config: {
            temperature: 0.7,
            responseMimeType: "application/json",
          }
        });

        const resultText = response.text;
        if (resultText) {
          const generatedJson = JSON.parse(resultText);
          explanations[q.id] = generatedJson;
          
          // Save incrementally so we don't lose progress if it crashes
          fs.writeFileSync(outputFile, JSON.stringify(explanations, null, 2));
          console.log(`✅ Saved ${q.id}`);
          count++;
          success = true;
          
          // Delay to respect 15 RPM free tier limit
          await new Promise(resolve => setTimeout(resolve, 5000));
        }
      } catch (err: any) {
        retries++;
        console.error(`⚠️ Attempt ${retries} failed for ${q.id}:`, err.message);
        
        if (err.message && err.message.includes('429')) {
           console.log(`Rate limit hit. Waiting 65 seconds before retrying...`);
           await new Promise(resolve => setTimeout(resolve, 65000));
           continue;
        }

        if (retries >= maxRetries) {
          console.error(`❌ Giving up on ${q.id} after ${maxRetries} retries.`);
          process.exit(1);
        }
        // Exponential backoff
        console.log(`Waiting ${retries * 5} seconds before retrying...`);
        await new Promise(resolve => setTimeout(resolve, retries * 5000));
      }
    }
  }

  console.log(`\nFinished! Generated explanations for ${count} new questions.`);
  console.log(`Run again to continue if stopped due to errors/rate limits.`);
}

run();
