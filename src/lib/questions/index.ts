import { Question } from '../types';
import { domain1Questions } from './domain1';
import { domain2Questions } from './domain2';
import { domain3Questions } from './domain3';
import { domain4Questions } from './domain4';
import { unscoredQuestions } from './unscored';
import { scenarioQuestions } from './scenarios';
import { examtopicsPart1Questions } from './examtopics_part1';
import { examtopicsPart2Questions } from './examtopics_part2';
import explanationsMap from './option_explanations.json';

// Helper function to infer style
function assignStylesAndExplanations(questions: Question[]): Question[] {
  return questions.map(q => {
    const lowerText = q.questionText.toLowerCase();
    const isScenario = lowerText.includes('a company') || 
                       lowerText.includes('a user') || 
                       lowerText.includes('an organization') || 
                       lowerText.includes('a developer') ||
                       lowerText.includes('a team') ||
                       lowerText.includes('wants to') ||
                       lowerText.includes('needs to');

    const style = q.style || (q.id.startsWith('sc-') ? 'scenario' : (isScenario ? 'scenario' : 'factual'));
    const optionExplanations = q.optionExplanations || (explanationsMap as Record<string, Record<string, string>>)[q.id];
    let explanation = q.explanation;
    
    // Replace placeholder explanation with actual explanation combined from the correct options
    if (explanation === 'Extracted from ExamTopics.' && optionExplanations) {
      explanation = q.correctAnswers.map(ansId => optionExplanations[ansId]).join(' ');
    }

    return {
      ...q,
      style,
      explanation,
      ...(optionExplanations ? { optionExplanations } : {})
    };
  });
}

// All questions combined
export const allQuestions: Question[] = assignStylesAndExplanations([
  ...domain1Questions,
  ...domain2Questions,
  ...domain3Questions,
  ...domain4Questions,
  ...scenarioQuestions,
  ...examtopicsPart1Questions,
  ...examtopicsPart2Questions,
  ...unscoredQuestions,
]);

// Get questions by domain ID
export function getQuestionsByDomain(domainId: number): Question[] {
  if (domainId === 0) return unscoredQuestions;
  return allQuestions.filter(
    (q) => q.domainId === domainId && !q.isUnscored
  );
}

// Get scored questions only
export function getScoredQuestions(): Question[] {
  return allQuestions.filter((q) => !q.isUnscored);
}

// Get question stats
export function getQuestionStats() {
  return {
    total: allQuestions.length,
    domain1: domain1Questions.length,
    domain2: domain2Questions.length,
    domain3: domain3Questions.length,
    domain4: domain4Questions.length,
    scenarios: scenarioQuestions.length,
    examtopics: examtopicsPart1Questions.length + examtopicsPart2Questions.length,
    unscored: unscoredQuestions.length,
    scored: allQuestions.filter((q) => !q.isUnscored).length,
  };
}

export {
  domain1Questions,
  domain2Questions,
  domain3Questions,
  domain4Questions,
  scenarioQuestions,
  examtopicsPart1Questions,
  examtopicsPart2Questions,
  unscoredQuestions,
};
