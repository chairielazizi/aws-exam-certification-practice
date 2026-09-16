'use client';

import Link from 'next/link';
import { DOMAINS, EXAM_CONFIG } from '@/lib/domains';
import { getQuestionStats } from '@/lib/questions';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const stats = getQuestionStats();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="bg-gradient-animated min-h-[calc(100vh-64px)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6"
            style={{ background: 'rgba(255, 153, 0, 0.1)', border: '1px solid rgba(255, 153, 0, 0.2)', color: '#FF9900' }}>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            CLF-C02 · {stats.total} Questions Available
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-white">AWS Cloud Practitioner</span>
            <br />
            <span style={{ color: '#FF9900' }}>Exam Practice</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Master the CLF-C02 certification with realistic practice questions,
            timed exam simulations, and detailed explanations with AWS documentation references.
          </p>

          {/* CTA: Full Exam */}
          <Link href="/quiz?mode=exam&scope=full_exam" className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4">
            📝 Start Full Exam Simulation
            <span className="text-sm opacity-70">({EXAM_CONFIG.totalQuestions} questions · {EXAM_CONFIG.timeLimitMinutes} min)</span>
          </Link>
        </div>

        {/* Exam Info Bar */}
        <div className="glass-card-static p-6 mb-12 animate-slide-up">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-white">{EXAM_CONFIG.totalQuestions}</div>
              <div className="text-xs text-gray-400 mt-1">Questions</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{EXAM_CONFIG.timeLimitMinutes} min</div>
              <div className="text-xs text-gray-400 mt-1">Time Limit</div>
            </div>
            <div>
              <div className="text-2xl font-bold" style={{ color: '#FF9900' }}>{EXAM_CONFIG.passingScaledScore}/1000</div>
              <div className="text-xs text-gray-400 mt-1">Passing Score</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{stats.scored}</div>
              <div className="text-xs text-gray-400 mt-1">Scored Questions</div>
            </div>
          </div>
        </div>

        {/* Domain Cards */}
        <h2 className="text-xl font-semibold text-white mb-6">Practice by Domain</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 stagger-children">
          {DOMAINS.map((domain) => {
            const domainQuestionCount = stats[`domain${domain.id}` as keyof typeof stats] as number;

            return (
              <Link key={domain.id} href={`/practice/${domain.id}`}>
                <div className="glass-card p-6 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{domain.icon}</span>
                      <div>
                        <div className="text-xs font-medium text-gray-400">
                          Domain {domain.id}
                        </div>
                        <div className="text-base font-semibold text-white">
                          {domain.name}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold" style={{ color: domain.color }}>
                        {domain.weightPercentage}%
                      </div>
                      <div className="text-[10px] text-gray-500">of exam</div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                    {domain.description}
                  </p>

                  {/* Topics preview */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {domain.topics.slice(0, 3).map((topic) => (
                      <span key={topic} className="text-[10px] px-2 py-0.5 rounded-full"
                        style={{
                          background: `${domain.color}15`,
                          color: domain.color,
                          border: `1px solid ${domain.color}30`,
                        }}>
                        {topic}
                      </span>
                    ))}
                    {domain.topics.length > 3 && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full text-gray-500 bg-white/5">
                        +{domain.topics.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">
                      {domainQuestionCount} questions available
                    </span>
                    <span style={{ color: domain.color }} className="font-medium">
                      Practice →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Quick Actions */}
        <h2 className="text-xl font-semibold text-white mb-6">Quick Start</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 stagger-children">
          <Link href="/quiz?mode=practice&scope=full_exam">
            <div className="glass-card p-5 text-center">
              <div className="text-3xl mb-3">🎓</div>
              <div className="text-sm font-semibold text-white mb-1">Practice Mode</div>
              <div className="text-xs text-gray-400">
                See answers after each question. All domains, no timer.
              </div>
            </div>
          </Link>
          <Link href="/quiz?mode=exam&scope=full_exam">
            <div className="glass-card p-5 text-center">
              <div className="text-3xl mb-3">⏱️</div>
              <div className="text-sm font-semibold text-white mb-1">Exam Mode</div>
              <div className="text-xs text-gray-400">
                Realistic simulation. {EXAM_CONFIG.totalQuestions} questions, {EXAM_CONFIG.timeLimitMinutes}-min timer.
              </div>
            </div>
          </Link>
          <Link href="/practice/1">
            <div className="glass-card p-5 text-center">
              <div className="text-3xl mb-3">📚</div>
              <div className="text-sm font-semibold text-white mb-1">Domain Drill</div>
              <div className="text-xs text-gray-400">
                Focus on a specific domain. Choose your own pace.
              </div>
            </div>
          </Link>
        </div>

        {/* Footer info */}
        <div className="mt-16 text-center text-xs text-gray-600">
          <p>
            Questions are based on the official{' '}
            <a href="https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html"
              target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-400 transition-colors">
              AWS CLF-C02 Exam Guide
            </a>
            . This is an independent practice tool and is not affiliated with Amazon Web Services.
          </p>
        </div>
      </div>
    </div>
  );
}
