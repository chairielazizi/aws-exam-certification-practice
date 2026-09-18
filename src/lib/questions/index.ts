import { Question } from '../types';
import { domain1Questions } from './domain1';
import { domain2Questions } from './domain2';
import { domain3Questions } from './domain3';
import { domain4Questions } from './domain4';
import { unscoredQuestions } from './unscored';
import { scenarioQuestions } from './scenarios';
import { examtopicsPart1Questions } from './examtopics_part1';
import { examtopicsPart2Questions } from './examtopics_part2';

// All questions combined
export const allQuestions: Question[] = [
  ...domain1Questions,
  ...domain2Questions,
  ...domain3Questions,
  ...domain4Questions,
  ...scenarioQuestions,
  ...examtopicsPart1Questions,
  ...examtopicsPart2Questions,
  ...unscoredQuestions,
];

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
