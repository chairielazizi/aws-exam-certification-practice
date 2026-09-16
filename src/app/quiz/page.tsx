'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect, useCallback, useRef, Suspense } from 'react';
import { Question, QuizMode, QuizScope, QuizConfig, QuizResult } from '@/lib/types';
import { generateQuestions, calculateResults, formatTime, isAnswerCorrect, getScopeDisplayName } from '@/lib/quiz-engine';
import { EXAM_CONFIG, getDomainById } from '@/lib/domains';

// ============================================================
// Quiz Page — Core exam interface
// ============================================================

function QuizContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const mode = (searchParams.get('mode') || 'practice') as QuizMode;
  const scope = (searchParams.get('scope') || 'full_exam') as QuizScope;
  const countParam = searchParams.get('count');

  // Determine question count and time limit
  const isFullExam = scope === 'full_exam';
  const requestedCount = countParam ? parseInt(countParam) : (isFullExam ? EXAM_CONFIG.totalQuestions : 10);
  const timeLimit = mode === 'exam'
    ? (isFullExam ? EXAM_CONFIG.timeLimitSeconds : requestedCount * 90)
    : null;

  // State
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [flagged, setFlagged] = useState<Set<string>>(new Set());
  const [timeRemaining, setTimeRemaining] = useState<number | null>(timeLimit);
  const [startTime] = useState<number>(Date.now());
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [practiceSubmitted, setPracticeSubmitted] = useState<Set<string>>(new Set());
  const [result, setResult] = useState<QuizResult | null>(null);
  const [showNav, setShowNav] = useState(false);
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);

  const timerRef = useRef<ReturnType<typeof setInterval>>(null);

  // Generate questions on mount
  useEffect(() => {
    const config: QuizConfig = {
      mode,
      scope,
      questionCount: requestedCount,
      timeLimit,
    };
    const generatedQuestions = generateQuestions(config);
    setQuestions(generatedQuestions);
  }, [mode, scope, requestedCount, timeLimit]);

  // Timer
  useEffect(() => {
    if (mode !== 'exam' || !timeLimit || isSubmitted) return;

    timerRef.current = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev === null) return null;
        if (prev <= 1) {
          // Time's up — auto-submit
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, timeLimit, isSubmitted, questions.length]);

  // Current question
  const currentQuestion = questions[currentIndex];

  // Answer selection
  const selectAnswer = useCallback((questionId: string, optionId: string) => {
    if (isSubmitted) return;
    if (mode === 'practice' && practiceSubmitted.has(questionId)) return;

    setAnswers((prev) => {
      const current = prev[questionId] || [];
      const question = questions.find((q) => q.id === questionId);
      if (!question) return prev;

      if (question.questionType === 'single_choice') {
        return { ...prev, [questionId]: [optionId] };
      }

      // Multiple choice — toggle
      const isSelected = current.includes(optionId);
      const updated = isSelected
        ? current.filter((id) => id !== optionId)
        : [...current, optionId];
      return { ...prev, [questionId]: updated };
    });
  }, [isSubmitted, mode, practiceSubmitted, questions]);

  // Flag toggle
  const toggleFlag = useCallback((questionId: string) => {
    setFlagged((prev) => {
      const next = new Set(prev);
      if (next.has(questionId)) {
        next.delete(questionId);
      } else {
        next.add(questionId);
      }
      return next;
    });
  }, []);

  // Practice mode — submit single question
  const submitPracticeAnswer = useCallback(() => {
    if (!currentQuestion) return;
    setPracticeSubmitted((prev) => new Set(prev).add(currentQuestion.id));
    setShowExplanation(true);
  }, [currentQuestion]);

  // Navigate to next question
  const nextQuestion = useCallback(() => {
    setShowExplanation(false);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex, questions.length]);

  // Navigate to prev question
  const prevQuestion = useCallback(() => {
    setShowExplanation(false);
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  // Jump to question
  const goToQuestion = useCallback((index: number) => {
    setShowExplanation(false);
    setCurrentIndex(index);
    setShowNav(false);
  }, []);

  // Submit all answers (exam mode)
  const handleSubmit = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsSubmitted(true);
    setShowConfirmSubmit(false);

    const config: QuizConfig = { mode, scope, questionCount: requestedCount, timeLimit };
    const timeTaken = Math.floor((Date.now() - startTime) / 1000);
    const quizResult = calculateResults(questions, answers, config, timeTaken);
    setResult(quizResult);
  }, [answers, mode, questions, requestedCount, scope, startTime, timeLimit]);

  // Count answered questions
  const answeredCount = Object.keys(answers).filter(
    (id) => answers[id] && answers[id].length > 0
  ).length;

  // Loading state
  if (questions.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl animate-pulse mb-4">☁️</div>
          <p className="text-gray-400">Generating questions...</p>
        </div>
      </div>
    );
  }

  // Results view (after exam submission)
  if (isSubmitted && result) {
    return <ResultsView result={result} onRetry={() => window.location.reload()} onHome={() => router.push('/')} />;
  }

  const isPracticeAnswered = mode === 'practice' && currentQuestion && practiceSubmitted.has(currentQuestion.id);
  const currentAnswers = currentQuestion ? (answers[currentQuestion.id] || []) : [];
  const hasCurrentAnswer = currentAnswers.length > 0;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Top Bar */}
      <div className="glass-card-static p-4 mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-sm">
            <span className="text-gray-400">Question</span>{' '}
            <span className="text-white font-bold">{currentIndex + 1}</span>
            <span className="text-gray-500">/{questions.length}</span>
          </div>

          {/* Progress bar */}
          <div className="hidden sm:block w-32">
            <div className="progress-bar-track">
              <div className="progress-bar-fill"
                style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }} />
            </div>
          </div>

          <div className="text-xs text-gray-500">
            {answeredCount}/{questions.length} answered
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Timer */}
          {timeRemaining !== null && (
            <div className={`timer text-lg font-bold ${timeRemaining < 300 ? (timeRemaining < 60 ? 'critical' : 'warning') : 'text-white'}`}>
              {formatTime(timeRemaining)}
            </div>
          )}

          {/* Mode badge */}
          <span className="text-[10px] px-2 py-1 rounded-full font-medium"
            style={{
              background: mode === 'practice' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 153, 0, 0.15)',
              color: mode === 'practice' ? '#10B981' : '#FF9900',
            }}>
            {mode === 'practice' ? 'PRACTICE' : 'EXAM'}
          </span>

          {/* Nav toggle (mobile) */}
          <button onClick={() => setShowNav(!showNav)} className="btn-ghost !p-2 sm:hidden">
            ☰
          </button>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Question Area */}
        <div className="flex-1 min-w-0">
          <div className="animate-fade-in" key={currentQuestion.id}>
            {/* Question type badge */}
            <div className="flex items-center gap-2 mb-3">
              {currentQuestion.questionType === 'multiple_choice' && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/20">
                  Select {currentQuestion.correctAnswers.length} answers
                </span>
              )}
              {currentQuestion.domainId > 0 && (() => {
                const d = getDomainById(currentQuestion.domainId);
                return d ? (
                  <span className="text-xs px-2 py-0.5 rounded-full"
                    style={{ background: `${d.color}15`, color: d.color, border: `1px solid ${d.color}30` }}>
                    {d.shortName}
                  </span>
                ) : null;
              })()}
            </div>

            {/* Question text */}
            <h2 className="text-lg sm:text-xl font-medium text-white mb-6 leading-relaxed">
              {currentQuestion.questionText}
            </h2>

            {/* Options */}
            <div className="space-y-3 mb-6">
              {currentQuestion.options.map((option) => {
                const isSelected = currentAnswers.includes(option.id);
                const showResult = isPracticeAnswered || isSubmitted;
                const isCorrectOption = currentQuestion.correctAnswers.includes(option.id);

                let optionClass = 'option-card';
                let indicatorClass = `option-indicator ${currentQuestion.questionType === 'multiple_choice' ? 'checkbox' : ''}`;

                if (showResult) {
                  optionClass += ' disabled';
                  if (isCorrectOption) {
                    optionClass += ' correct';
                    indicatorClass += ' correct';
                  } else if (isSelected && !isCorrectOption) {
                    optionClass += ' incorrect';
                    indicatorClass += ' incorrect';
                  }
                } else if (isSelected) {
                  optionClass += ' selected';
                  indicatorClass += ' selected';
                }

                return (
                  <button key={option.id} className={optionClass}
                    onClick={() => selectAnswer(currentQuestion.id, option.id)}
                    disabled={showResult}>
                    <div className={indicatorClass}>
                      {(showResult && isCorrectOption) && (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                      {(showResult && isSelected && !isCorrectOption) && (
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 2L8 8M8 2L2 8" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      )}
                      {(!showResult && isSelected) && (
                        <div className="w-2.5 h-2.5 rounded-full bg-white" />
                      )}
                    </div>
                    <div className="flex-1 text-left">
                      <span className="text-xs font-medium text-gray-400 mr-2">
                        {option.id.toUpperCase()}.
                      </span>
                      <span className={`text-sm ${showResult ? (isCorrectOption ? 'text-emerald-300' : (isSelected ? 'text-red-300' : 'text-gray-400')) : 'text-gray-200'}`}>
                        {option.text}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Explanation (practice mode) */}
            {isPracticeAnswered && (
              <div className="animate-slide-up glass-card-static p-5 mb-6"
                style={{ borderLeft: `3px solid ${isAnswerCorrect(currentQuestion, currentAnswers) ? '#10B981' : '#EF4444'}` }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-sm font-semibold ${isAnswerCorrect(currentQuestion, currentAnswers) ? 'text-emerald-400' : 'text-red-400'}`}>
                    {isAnswerCorrect(currentQuestion, currentAnswers) ? '✓ Correct!' : '✗ Incorrect'}
                  </span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed mb-3">
                  {currentQuestion.explanation}
                </p>
                {currentQuestion.referenceLinks.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {currentQuestion.referenceLinks.map((link, i) => (
                      <a key={i} href={link.url} target="_blank" rel="noopener noreferrer"
                        className="text-xs px-3 py-1 rounded-full transition-colors"
                        style={{ background: 'rgba(20, 110, 180, 0.15)', color: '#60A5FA', border: '1px solid rgba(20, 110, 180, 0.3)' }}>
                        📖 {link.text} ↗
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Action buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button onClick={prevQuestion} disabled={currentIndex === 0}
                  className="btn-secondary !py-2 !px-4 text-sm disabled:opacity-30">
                  ← Prev
                </button>

                {mode === 'practice' && !isPracticeAnswered && (
                  <button onClick={submitPracticeAnswer} disabled={!hasCurrentAnswer}
                    className="btn-primary !py-2 !px-4 text-sm">
                    Check Answer
                  </button>
                )}

                {(mode === 'exam' || isPracticeAnswered) && currentIndex < questions.length - 1 && (
                  <button onClick={nextQuestion} className="btn-primary !py-2 !px-4 text-sm">
                    Next →
                  </button>
                )}

                {mode === 'practice' && isPracticeAnswered && currentIndex === questions.length - 1 && (
                  <button onClick={() => {
                    const config: QuizConfig = { mode, scope, questionCount: requestedCount, timeLimit };
                    const timeTaken = Math.floor((Date.now() - startTime) / 1000);
                    const quizResult = calculateResults(questions, answers, config, timeTaken);
                    setResult(quizResult);
                    setIsSubmitted(true);
                  }} className="btn-primary !py-2 !px-4 text-sm">
                    Finish & See Results
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button onClick={() => toggleFlag(currentQuestion.id)}
                  className={`btn-ghost !py-2 !px-3 text-sm ${flagged.has(currentQuestion.id) ? 'text-yellow-400' : ''}`}>
                  {flagged.has(currentQuestion.id) ? '🚩 Flagged' : '🏳️ Flag'}
                </button>

                {mode === 'exam' && (
                  <button onClick={() => setShowConfirmSubmit(true)} className="btn-ghost !py-2 !px-3 text-sm text-orange-400">
                    Submit Exam
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Question Navigation Sidebar (desktop) */}
        <div className="hidden sm:block w-56 flex-shrink-0">
          <div className="glass-card-static p-4 sticky top-24">
            <div className="text-xs text-gray-400 mb-3 font-medium">Question Navigator</div>
            <div className="grid grid-cols-5 gap-1.5">
              {questions.map((q, i) => {
                const isAnswered = answers[q.id] && answers[q.id].length > 0;
                const isFlagged = flagged.has(q.id);
                const isCurrent = i === currentIndex;

                let pillClass = 'nav-pill';
                if (isCurrent) pillClass += ' current';
                else if (isAnswered) pillClass += ' answered';
                if (isFlagged) pillClass += ' flagged';

                return (
                  <button key={q.id} className={pillClass} onClick={() => goToQuestion(i)}>
                    {i + 1}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-white/[0.06] space-y-1 text-[10px] text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-white/[0.06] border border-white/10" />
                Unanswered
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm" style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-border-default)' }} />
                Answered
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm border border-yellow-500/50" />
                Flagged
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {showNav && (
        <div className="fixed inset-0 z-50 sm:hidden" onClick={() => setShowNav(false)}>
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute right-0 top-0 bottom-0 w-72 p-4"
            style={{ background: 'var(--color-surface-1)' }}
            onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-medium text-white">Question Navigator</div>
              <button onClick={() => setShowNav(false)} className="text-gray-400">✕</button>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {questions.map((q, i) => {
                const isAnswered = answers[q.id] && answers[q.id].length > 0;
                const isFlagged = flagged.has(q.id);
                const isCurrent = i === currentIndex;

                let pillClass = 'nav-pill';
                if (isCurrent) pillClass += ' current';
                else if (isAnswered) pillClass += ' answered';
                if (isFlagged) pillClass += ' flagged';

                return (
                  <button key={q.id} className={pillClass} onClick={() => goToQuestion(i)}>
                    {i + 1}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Confirm Submit Modal */}
      {showConfirmSubmit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setShowConfirmSubmit(false)}>
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative glass-card-static p-6 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-lg font-bold text-white mb-2">Submit Exam?</h3>
            <p className="text-sm text-gray-400 mb-4">
              You have answered <span className="text-white font-semibold">{answeredCount}</span> of{' '}
              <span className="text-white font-semibold">{questions.length}</span> questions.
              {answeredCount < questions.length && (
                <span className="text-yellow-400"> {questions.length - answeredCount} questions are unanswered.</span>
              )}
            </p>
            {flagged.size > 0 && (
              <p className="text-sm text-yellow-400 mb-4">
                🚩 You have {flagged.size} flagged question{flagged.size > 1 ? 's' : ''}.
              </p>
            )}
            <div className="flex gap-3">
              <button onClick={() => setShowConfirmSubmit(false)} className="btn-secondary flex-1">
                Review Answers
              </button>
              <button onClick={handleSubmit} className="btn-primary flex-1">
                Submit Exam
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================
// Results View Component
// ============================================================

function ResultsView({
  result,
  onRetry,
  onHome,
}: {
  result: QuizResult;
  onRetry: () => void;
  onHome: () => void;
}) {
  const [showDetails, setShowDetails] = useState(false);
  const circumference = 2 * Math.PI * 80;
  const strokeDashoffset = circumference - (result.scorePercentage / 100) * circumference;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Score Hero */}
      <div className="glass-card-static p-8 mb-8 text-center animate-fade-in">
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 ${result.passed ? 'glow-green' : 'glow-red'}`}
          style={{
            background: result.passed ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
            color: result.passed ? '#10B981' : '#EF4444',
            border: `1px solid ${result.passed ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`,
          }}>
          {result.passed ? '🎉 PASSED' : '📚 NEEDS IMPROVEMENT'}
        </div>

        {/* Score Circle */}
        <div className="relative inline-block mb-6">
          <svg className="score-circle" width="200" height="200" viewBox="0 0 200 200">
            <circle className="score-circle-track" cx="100" cy="100" r="80" />
            <circle className="score-circle-fill" cx="100" cy="100" r="80"
              stroke={result.passed ? '#10B981' : '#EF4444'}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset} />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-4xl font-bold text-white">{result.scaledScore}</div>
            <div className="text-xs text-gray-400">/1000</div>
          </div>
        </div>

        <div className="text-sm text-gray-400 mb-6">
          Passing score: {EXAM_CONFIG.passingScaledScore}/1000
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-3 rounded-xl bg-white/[0.03]">
            <div className="text-xl font-bold text-emerald-400">{result.correctAnswers}</div>
            <div className="text-[10px] text-gray-400">Correct</div>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.03]">
            <div className="text-xl font-bold text-red-400">{result.incorrectAnswers}</div>
            <div className="text-[10px] text-gray-400">Incorrect</div>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.03]">
            <div className="text-xl font-bold text-yellow-400">{result.unanswered}</div>
            <div className="text-[10px] text-gray-400">Unanswered</div>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.03]">
            <div className="text-xl font-bold text-white">{formatTime(result.timeTaken)}</div>
            <div className="text-[10px] text-gray-400">Time Taken</div>
          </div>
        </div>
      </div>

      {/* Domain Breakdown */}
      {result.domainBreakdown.length > 0 && (
        <div className="glass-card-static p-6 mb-8 animate-slide-up">
          <h3 className="text-sm font-semibold text-white mb-4">Domain Breakdown</h3>
          <div className="space-y-4">
            {result.domainBreakdown.map((domain) => (
              <div key={domain.domainId}>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-300">{domain.domainName}</span>
                  <span className="font-mono text-xs">
                    <span className="text-white font-bold">{domain.correctAnswers}</span>
                    <span className="text-gray-500">/{domain.totalQuestions}</span>
                    <span className="ml-2" style={{ color: domain.color }}>
                      {domain.scorePercentage}%
                    </span>
                  </span>
                </div>
                <div className="progress-bar-track">
                  <div className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: `${domain.scorePercentage}%`,
                      background: domain.color,
                    }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-3 mb-8">
        <button onClick={onRetry} className="btn-primary flex-1">🔄 Retry</button>
        <button onClick={onHome} className="btn-secondary flex-1">🏠 Back to Home</button>
        <button onClick={() => setShowDetails(!showDetails)} className="btn-secondary flex-1">
          {showDetails ? '🔼 Hide' : '🔽 Review'} Answers
        </button>
      </div>

      {/* Question Review */}
      {showDetails && (
        <div className="space-y-4 animate-slide-up">
          <h3 className="text-sm font-semibold text-white">Question Review</h3>
          {result.questionResults.map((qr, index) => (
            <div key={qr.question.id} className="glass-card-static p-5"
              style={{
                borderLeft: `3px solid ${qr.isCorrect ? '#10B981' : (qr.selectedAnswers.length === 0 ? '#F59E0B' : '#EF4444')}`,
              }}>
              <div className="flex items-start gap-3">
                <span className={`text-xs px-2 py-0.5 rounded-full font-mono ${qr.isCorrect ? 'bg-emerald-500/15 text-emerald-400' : 'bg-red-500/15 text-red-400'}`}>
                  Q{index + 1}
                </span>
                {!qr.isScored && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-500/15 text-gray-400">
                    Unscored
                  </span>
                )}
              </div>

              <p className="text-sm text-gray-200 mt-3 mb-3">{qr.question.questionText}</p>

              <div className="space-y-1.5 mb-3">
                {qr.question.options.map((opt) => {
                  const isCorrect = qr.question.correctAnswers.includes(opt.id);
                  const wasSelected = qr.selectedAnswers.includes(opt.id);

                  return (
                    <div key={opt.id} className={`text-xs px-3 py-2 rounded-lg flex items-center gap-2 ${isCorrect ? 'bg-emerald-500/10 text-emerald-300' : wasSelected ? 'bg-red-500/10 text-red-300' : 'text-gray-500'}`}>
                      <span className="font-medium">{opt.id.toUpperCase()}.</span>
                      <span>{opt.text}</span>
                      {isCorrect && <span className="ml-auto">✓</span>}
                      {wasSelected && !isCorrect && <span className="ml-auto">✗</span>}
                    </div>
                  );
                })}
              </div>

              <p className="text-xs text-gray-400 leading-relaxed mb-2">{qr.question.explanation}</p>

              {qr.question.referenceLinks.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {qr.question.referenceLinks.map((link, i) => (
                    <a key={i} href={link.url} target="_blank" rel="noopener noreferrer"
                      className="text-[10px] px-2 py-0.5 rounded-full"
                      style={{ background: 'rgba(20, 110, 180, 0.15)', color: '#60A5FA', border: '1px solid rgba(20, 110, 180, 0.3)' }}>
                      📖 {link.text} ↗
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ============================================================
// Page Export with Suspense boundary
// ============================================================

export default function QuizPage() {
  return (
    <Suspense fallback={
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl animate-pulse mb-4">☁️</div>
          <p className="text-gray-400">Loading quiz...</p>
        </div>
      </div>
    }>
      <QuizContent />
    </Suspense>
  );
}
