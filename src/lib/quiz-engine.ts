import { Question, QuizConfig, QuizResult, QuestionResult, DomainResult, QuizScope } from './types';
import { getQuestionsByDomain, getScoredQuestions, unscoredQuestions } from './questions';
import { DOMAINS, EXAM_CONFIG } from './domains';

// ============================================================
// Quiz Engine — Question selection, scoring, and result calculation
// ============================================================

/**
 * Shuffle an array using Fisher-Yates algorithm
 */
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Pick N random items from an array
 */
function pickRandom<T>(array: T[], count: number): T[] {
  const shuffled = shuffleArray(array);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

/**
 * Generate questions for a full exam simulation.
 * Selects 50 scored questions weighted by domain % + 15 unscored,
 * then shuffles everything together so the user can't distinguish them.
 */
export function generateFullExam(): Question[] {
  const scoredQuestions: Question[] = [];

  // Pick scored questions weighted by domain percentage
  for (const domain of DOMAINS) {
    const domainQuestions = getQuestionsByDomain(domain.id);
    const count = domain.scoredQuestionCount;
    scoredQuestions.push(...pickRandom(domainQuestions, count));
  }

  // Pick unscored questions
  const unscoredPick = pickRandom(unscoredQuestions, EXAM_CONFIG.unscoredQuestions);

  // Combine and shuffle so user can't distinguish scored vs unscored
  return shuffleArray([...scoredQuestions, ...unscoredPick]);
}

/**
 * Generate questions for domain-specific practice.
 */
export function generateDomainPractice(domainId: number, count: number): Question[] {
  const domainQuestions = getQuestionsByDomain(domainId);
  return shuffleArray(pickRandom(domainQuestions, count));
}

/**
 * Generate questions based on a quiz configuration.
 */
export function generateQuestions(config: QuizConfig): Question[] {
  if (config.scope === 'full_exam') {
    return generateFullExam();
  }

  const domainId = parseInt(config.scope.replace('domain_', ''));
  return generateDomainPractice(domainId, config.questionCount);
}

/**
 * Check if a question was answered correctly.
 */
export function isAnswerCorrect(question: Question, selectedAnswers: string[]): boolean {
  if (selectedAnswers.length === 0) return false;

  const correct = new Set(question.correctAnswers);
  const selected = new Set(selectedAnswers);

  if (correct.size !== selected.size) return false;
  for (const answer of correct) {
    if (!selected.has(answer)) return false;
  }
  return true;
}

/**
 * Calculate a simulated scaled score (100–1000).
 * Uses a simple linear mapping from percentage to the scaled range.
 * The actual AWS scoring algorithm is proprietary and uses IRT (Item Response Theory).
 */
export function calculateScaledScore(percentage: number): number {
  const { minScaledScore, maxScaledScore } = EXAM_CONFIG;
  const range = maxScaledScore - minScaledScore;
  const scaled = Math.round(minScaledScore + (percentage / 100) * range);
  return Math.max(minScaledScore, Math.min(maxScaledScore, scaled));
}

/**
 * Calculate complete quiz results.
 */
export function calculateResults(
  questions: Question[],
  answers: Record<string, string[]>,
  config: QuizConfig,
  timeTaken: number
): QuizResult {
  const questionResults: QuestionResult[] = questions.map((question) => {
    const selectedAnswers = answers[question.id] || [];
    const correct = isAnswerCorrect(question, selectedAnswers);

    return {
      question,
      selectedAnswers,
      isCorrect: correct,
      isScored: !question.isUnscored,
    };
  });

  // Only count scored questions for the final score
  const scoredResults = questionResults.filter((r) => r.isScored);
  const correctAnswers = scoredResults.filter((r) => r.isCorrect).length;
  const incorrectAnswers = scoredResults.filter((r) => !r.isCorrect && r.selectedAnswers.length > 0).length;
  const unanswered = scoredResults.filter((r) => r.selectedAnswers.length === 0).length;
  const scorePercentage = scoredResults.length > 0
    ? Math.round((correctAnswers / scoredResults.length) * 100)
    : 0;

  const scaledScore = config.scope === 'full_exam'
    ? calculateScaledScore(scorePercentage)
    : calculateScaledScore(scorePercentage);

  // Domain breakdown
  const domainBreakdown: DomainResult[] = DOMAINS.map((domain) => {
    const domainResults = scoredResults.filter(
      (r) => r.question.domainId === domain.id
    );
    const domainCorrect = domainResults.filter((r) => r.isCorrect).length;

    return {
      domainId: domain.id,
      domainName: domain.name,
      color: domain.color,
      totalQuestions: domainResults.length,
      correctAnswers: domainCorrect,
      scorePercentage: domainResults.length > 0
        ? Math.round((domainCorrect / domainResults.length) * 100)
        : 0,
    };
  }).filter((d) => d.totalQuestions > 0);

  return {
    config,
    totalQuestions: questions.length,
    scoredQuestions: scoredResults.length,
    correctAnswers,
    incorrectAnswers,
    unanswered,
    scorePercentage,
    scaledScore,
    passed: scaledScore >= EXAM_CONFIG.passingScaledScore,
    timeTaken,
    domainBreakdown,
    questionResults,
    completedAt: new Date().toISOString(),
  };
}

/**
 * Format seconds as MM:SS
 */
export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Get the scope display name
 */
export function getScopeDisplayName(scope: QuizScope): string {
  if (scope === 'full_exam') return 'Full Exam Simulation';
  const domainId = parseInt(scope.replace('domain_', ''));
  const domain = DOMAINS.find((d) => d.id === domainId);
  return domain ? `Domain ${domainId}: ${domain.name}` : scope;
}
