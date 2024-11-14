import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface QuestionsProps {
  question: string;
  onAnswer: (answer: string) => void;
  questionNumber: number;
  totalQuestions: number;
}

export function Questions({ question, onAnswer, questionNumber, totalQuestions }: QuestionsProps) {
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (answer.trim()) {
      onAnswer(answer.trim());
      setAnswer('');
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center text-sm text-yellow-200/80">
        Question {questionNumber} of {totalQuestions}
      </div>
      
      <h2 className="text-xl text-center font-serif text-yellow-100">
        {question}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-300/50"
          placeholder="Share your truth..."
          autoFocus
        />
        
        <button
          type="submit"
          disabled={!answer.trim()}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg px-6 py-3 transition-all duration-200 disabled:opacity-50"
        >
          <Sparkles className="w-4 h-4" />
          <span>Reveal Next Question</span>
        </button>
      </form>
    </div>
  );
}