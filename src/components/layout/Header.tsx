'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const isQuizActive = pathname === '/quiz';

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06]"
      style={{ background: 'rgba(10, 14, 23, 0.85)', backdropFilter: 'blur(16px)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-lg"
              style={{ background: 'linear-gradient(135deg, #FF9900 0%, #E88800 100%)' }}>
              ☁️
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white tracking-tight leading-tight">
                AWS Exam Practice
              </span>
              <span className="text-[10px] text-gray-500 leading-tight">
                Cloud Practitioner CLF-C02
              </span>
            </div>
          </Link>

          {/* Navigation — hidden during quiz to avoid distractions */}
          {!isQuizActive && (
            <nav className="hidden sm:flex items-center gap-1">
              <Link href="/" className={`btn-ghost ${pathname === '/' ? 'text-white bg-white/[0.06]' : ''}`}>
                Home
              </Link>
              <Link href="/practice/1" className={`btn-ghost ${pathname.startsWith('/practice') ? 'text-white bg-white/[0.06]' : ''}`}>
                Practice
              </Link>
            </nav>
          )}

          {/* Quiz indicator */}
          {isQuizActive && (
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Exam in progress
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
