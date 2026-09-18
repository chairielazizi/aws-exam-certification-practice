'use client';

import Link from 'next/link';
import { DOMAINS } from '@/lib/domains';
import { getQuestionsByDomain } from '@/lib/questions';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function DomainPracticePage() {
  const params = useParams();
  const domainId = parseInt(params.domain as string);
  const domain = DOMAINS.find((d) => d.id === domainId);
  const questions = domain ? getQuestionsByDomain(domainId) : [];
  const [styleFilter, setStyleFilter] = useState<'all' | 'factual' | 'scenario'>('all');

  const filteredQuestions = questions.filter(q => styleFilter === 'all' || q.style === styleFilter);

  if (!domain) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">❌</div>
          <h1 className="text-xl font-bold text-white mb-2">Domain Not Found</h1>
          <Link href="/" className="text-sm underline" style={{ color: '#FF9900' }}>
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const questionCounts = [5, 10, 15, 20, filteredQuestions.length];
  const uniqueCounts = [...new Set(questionCounts.filter((c) => c <= filteredQuestions.length))];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8 animate-fade-in">
        <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
        <span>›</span>
        <span className="text-gray-300">Domain {domain.id}: {domain.name}</span>
      </div>

      {/* Domain Header */}
      <div className="glass-card-static p-8 mb-8 animate-slide-up">
        <div className="flex items-start gap-4">
          <div className="text-4xl">{domain.icon}</div>
          <div className="flex-1">
            <div className="text-xs font-medium text-gray-400 mb-1">
              Domain {domain.id} · {domain.weightPercentage}% of exam
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">{domain.name}</h1>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">{domain.description}</p>

            <div className="flex flex-wrap gap-2">
              {domain.topics.map((topic) => (
                <span key={topic} className="text-xs px-3 py-1 rounded-full"
                  style={{
                    background: `${domain.color}15`,
                    color: domain.color,
                    border: `1px solid ${domain.color}30`,
                  }}>
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/[0.06] flex items-center gap-8 text-sm">
          <div>
            <span className="text-gray-400">Available Questions:</span>{' '}
            <span className="text-white font-semibold">{questions.length}</span>
          </div>
          <div>
            <span className="text-gray-400">Exam Weight:</span>{' '}
            <span className="font-semibold" style={{ color: domain.color }}>
              {domain.weightPercentage}%
            </span>
          </div>
          <div>
            <span className="text-gray-400">Scored Questions:</span>{' '}
            <span className="text-white font-semibold">{domain.scoredQuestionCount}</span>
          </div>
        </div>
      </div>

      {/* Style Filter */}
      <div className="glass-card-static p-6 mb-8 animate-slide-up">
        <h3 className="text-sm font-semibold text-white mb-4">Question Style</h3>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setStyleFilter('all')}
            className={`px-4 py-2 rounded-lg text-sm transition-all ${styleFilter === 'all' ? 'bg-blue-600 text-white' : 'btn-secondary'}`}
          >
            Mixed (All)
          </button>
          <button
            onClick={() => setStyleFilter('factual')}
            className={`px-4 py-2 rounded-lg text-sm transition-all ${styleFilter === 'factual' ? 'bg-blue-600 text-white' : 'btn-secondary'}`}
          >
            Factual Only
          </button>
          <button
            onClick={() => setStyleFilter('scenario')}
            className={`px-4 py-2 rounded-lg text-sm transition-all ${styleFilter === 'scenario' ? 'bg-blue-600 text-white' : 'btn-secondary'}`}
          >
            Scenario-based Only
          </button>
        </div>
        <div className="mt-4 text-xs text-gray-400">
          Showing {filteredQuestions.length} {styleFilter !== 'all' ? styleFilter : ''} questions in this domain.
        </div>
      </div>

      {/* Mode Selection */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 stagger-children">
        {/* Practice Mode */}
        <div className="glass-card-static p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
              style={{ background: 'rgba(16, 185, 129, 0.15)' }}>
              🎓
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">Practice Mode</h2>
              <p className="text-xs text-gray-400">Learn as you go</p>
            </div>
          </div>
          <p className="text-sm text-gray-400 mb-6">
            Answer one question at a time. See the correct answer and explanation immediately after each submission. No timer.
          </p>

          <div className="space-y-2">
            <div className="text-xs text-gray-500 mb-2">Choose number of questions:</div>
            <div className="flex flex-wrap gap-2">
              {uniqueCounts.map((count) => (
                <Link key={count}
                  href={`/quiz?mode=practice&scope=domain_${domainId}&count=${count}&style=${styleFilter}`}
                  className="btn-secondary text-sm !py-2 !px-4 !rounded-lg">
                  {count === filteredQuestions.length ? `All (${count})` : count}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Exam Mode */}
        <div className="glass-card-static p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
              style={{ background: 'rgba(255, 153, 0, 0.15)' }}>
              ⏱️
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">Exam Mode</h2>
              <p className="text-xs text-gray-400">Test yourself</p>
            </div>
          </div>
          <p className="text-sm text-gray-400 mb-6">
            Answer all questions, then submit to see your results. Timed to simulate real exam pressure. Review all answers at the end.
          </p>

          <div className="space-y-2">
            <div className="text-xs text-gray-500 mb-2">Choose number of questions:</div>
            <div className="flex flex-wrap gap-2">
              {uniqueCounts.map((count) => (
                <Link key={count}
                  href={`/quiz?mode=exam&scope=domain_${domainId}&count=${count}&style=${styleFilter}`}
                  className="btn-secondary text-sm !py-2 !px-4 !rounded-lg">
                  {count === filteredQuestions.length ? `All (${count})` : count}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Domain Navigation */}
      <div className="glass-card-static p-6">
        <h3 className="text-sm font-medium text-gray-400 mb-4">Other Domains</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {DOMAINS.filter((d) => d.id !== domainId).map((d) => (
            <Link key={d.id} href={`/practice/${d.id}`}
              className="p-3 rounded-xl text-center transition-all hover:bg-white/[0.04]"
              style={{ border: `1px solid ${d.color}20` }}>
              <div className="text-xl mb-1">{d.icon}</div>
              <div className="text-xs font-medium text-white">{d.shortName}</div>
              <div className="text-[10px] text-gray-500">{d.weightPercentage}%</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
