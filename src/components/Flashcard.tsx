'use client';

import { useState } from 'react';

interface FlashcardProps {
  term: string;
  definition: string;
}

export default function Flashcard({ term, definition }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="w-full max-w-2xl h-[400px] sm:h-96 mx-auto group cursor-pointer"
      style={{ perspective: '1000px' }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className="relative w-full h-full transition-transform duration-500 ease-out"
        style={{ 
          transformStyle: 'preserve-3d', 
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' 
        }}
      >
        {/* Front (Term) */}
        <div 
          className="absolute inset-0 w-full h-full rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-2xl transition-colors hover:bg-white/[0.08]"
          style={{ 
            backfaceVisibility: 'hidden', 
            WebkitBackfaceVisibility: 'hidden',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <div className="absolute top-6 right-8 text-sm text-gray-500 font-medium tracking-wide">TERM</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight px-4">
            {term}
          </h2>
          <div className="absolute bottom-6 text-sm text-gray-500 opacity-60 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
            </svg>
            Click to flip
          </div>
        </div>

        {/* Back (Definition) */}
        <div 
          className="absolute inset-0 w-full h-full rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-2xl overflow-y-auto"
          style={{ 
            backfaceVisibility: 'hidden', 
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: 'linear-gradient(135deg, rgba(255,153,0,0.1) 0%, rgba(232,136,0,0.05) 100%)', 
            border: '1px solid rgba(255,153,0,0.2)' 
          }}
        >
          <div className="absolute top-6 left-8 text-sm text-[#FF9900] font-medium tracking-wide">DEFINITION</div>
          <p className="text-xl sm:text-2xl text-gray-100 leading-relaxed font-medium mt-6 px-2">
            {definition}
          </p>
        </div>
      </div>
    </div>
  );
}
