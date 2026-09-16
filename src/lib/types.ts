// ============================================================
// AWS Cloud Practitioner Exam Practice — Type Definitions
// ============================================================

export type QuestionType = 'single_choice' | 'multiple_choice';
export type Difficulty = 'easy' | 'medium' | 'hard';
export type QuizMode = 'practice' | 'exam';
export type QuizScope = 'full_exam' | 'domain_1' | 'domain_2' | 'domain_3' | 'domain_4';

// --- Question & Domain Models ---

export interface QuestionOption {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  domainId: number;
  questionText: string;
  questionType: QuestionType;
  options: QuestionOption[];
  correctAnswers: string[];
  explanation: string;
  referenceLinks: { text: string; url: string }[];
  difficulty: Difficulty;
  isUnscored: boolean;
  tags: string[];
}

export interface Domain {
  id: number;
  name: string;
  shortName: string;
  description: string;
  weightPercentage: number;
  scoredQuestionCount: number;
  color: string;
  gradient: string;
  icon: string;
  topics: string[];
}

// --- Quiz State ---

export interface QuizConfig {
  mode: QuizMode;
  scope: QuizScope;
  questionCount: number;
  timeLimit: number | null; // seconds, null = no limit
}

export interface QuizState {
  config: QuizConfig;
  questions: Question[];
  currentIndex: number;
  answers: Record<string, string[]>; // questionId -> selected option IDs
  flagged: Set<string>;
  startTime: number;
  isSubmitted: boolean;
  isPaused: boolean;
}

// --- Results ---

export interface QuizResult {
  config: QuizConfig;
  totalQuestions: number;
  scoredQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  unanswered: number;
  scorePercentage: number;
  scaledScore: number;
  passed: boolean;
  timeTaken: number; // seconds
  domainBreakdown: DomainResult[];
  questionResults: QuestionResult[];
  completedAt: string; // ISO timestamp
}

export interface DomainResult {
  domainId: number;
  domainName: string;
  color: string;
  totalQuestions: number;
  correctAnswers: number;
  scorePercentage: number;
}

export interface QuestionResult {
  question: Question;
  selectedAnswers: string[];
  isCorrect: boolean;
  isScored: boolean;
}

// --- Supabase DB Types ---

export interface DbExamAttempt {
  id?: string;
  user_id?: string | null;
  session_id: string;
  mode: QuizMode;
  scope: QuizScope;
  total_questions: number;
  correct_answers: number;
  score_percentage: number;
  scaled_score: number;
  passed: boolean;
  time_taken_seconds: number;
  started_at: string;
  completed_at: string;
}

export interface DbUserAnswer {
  id?: string;
  attempt_id: string;
  question_id: string;
  selected_answers: string[];
  is_correct: boolean;
  question_order: number;
}
