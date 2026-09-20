'use client';

import { useState } from 'react';
import Flashcard from '@/components/Flashcard';
import { clfC02Flashcards } from '@/lib/flashcards/clf_c02';

export default function FlashcardsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [deck, setDeck] = useState(clfC02Flashcards);

  const currentCard = deck[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % deck.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + deck.length) % deck.length);
  };

  const handleShuffle = () => {
    const shuffled = [...deck].sort(() => Math.random() - 0.5);
    setDeck(shuffled);
    setCurrentIndex(0);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-white tracking-tight mb-3">
          Flashcards
        </h1>
        <p className="text-gray-400 text-lg">
          Master the concepts for your CLF-C02 exam with active recall.
        </p>
      </div>

      <div className="mb-8">
        <div className="flex items-center justify-between text-sm text-gray-400 mb-4 px-2">
          <span>Card {currentIndex + 1} of {deck.length}</span>
          <button 
            onClick={handleShuffle}
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            Shuffle Deck
          </button>
        </div>
        
        {/* The Flashcard */}
        <div key={currentCard.id}>
          <Flashcard term={currentCard.term} definition={currentCard.definition} />
        </div>
      </div>

      <div className="flex justify-center items-center gap-6 mt-8">
        <button
          onClick={handlePrev}
          className="btn-secondary w-32 justify-center"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="btn-primary w-32 justify-center"
        >
          Next
        </button>
      </div>
    </div>
  );
}
