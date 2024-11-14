import React from 'react';
import { Heart } from 'lucide-react';

interface PurposeRevealProps {
  purpose: string;
}

export function PurposeReveal({ purpose }: PurposeRevealProps) {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <Heart className="w-8 h-8 text-pink-400" />
        </div>
        <h2 className="text-2xl font-serif text-yellow-100">
          Your Divine Purpose
        </h2>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur" />
        <p className="relative text-xl text-center font-serif leading-relaxed p-6 text-yellow-50">
          {purpose}
        </p>
      </div>

      <div className="text-center text-sm text-yellow-200/80 italic">
        "Let this wisdom guide your journey through the cosmos"
      </div>
    </div>
  );
}