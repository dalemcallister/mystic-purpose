import React, { useState } from 'react';
import { Sparkles, Stars, Moon, Sun, Heart } from 'lucide-react';
import { Questions } from './components/Questions';
import { PurposeReveal } from './components/PurposeReveal';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const questions = [
    "What brings your heart the most joy?",
    "In your dreams, what role do you play?",
    "What gift would you give to the world if you could?",
    "When do you feel most alive?",
    "What calling whispers to your soul at night?"
  ];

  const handleAnswer = (answer: string) => {
    setAnswers([...answers, answer]);
    setCurrentStep(currentStep + 1);
  };

  const generatePurpose = () => {
    const themes = answers.join(' ').toLowerCase();
    let purpose = '';

    if (themes.includes('help') || themes.includes('care')) {
      purpose = "You are destined to be a healer of souls, bringing light to those in darkness.";
    } else if (themes.includes('create') || themes.includes('art')) {
      purpose = "Your path leads to creating beauty that awakens hearts and inspires dreams.";
    } else if (themes.includes('teach') || themes.includes('guide')) {
      purpose = "You are meant to be a wisdom keeper, guiding others to their own truth.";
    } else if (themes.includes('nature') || themes.includes('earth')) {
      purpose = "Your destiny is intertwined with nature, protecting and nurturing life's sacred dance.";
    } else {
      purpose = "You are a cosmic bridge between dreams and reality, here to transform the world through your unique light.";
    }

    return purpose;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-900 to-pink-900 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3}px`,
                height: `${Math.random() * 3}px`,
                animation: `twinkle ${Math.random() * 5 + 3}s infinite`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="relative min-h-screen flex items-center justify-center p-6">
        <div className="max-w-xl w-full bg-black/30 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-white/10">
          <div className="flex justify-center mb-6">
            {currentStep < questions.length ? (
              <Stars className="w-12 h-12 text-yellow-300" />
            ) : (
              <Moon className="w-12 h-12 text-yellow-300" />
            )}
          </div>
          
          <h1 className="text-3xl font-serif text-center mb-8 text-yellow-100">
            The Mystic's Oracle
          </h1>

          {currentStep < questions.length ? (
            <Questions
              question={questions[currentStep]}
              onAnswer={handleAnswer}
              questionNumber={currentStep + 1}
              totalQuestions={questions.length}
            />
          ) : (
            <PurposeReveal purpose={generatePurpose()} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;