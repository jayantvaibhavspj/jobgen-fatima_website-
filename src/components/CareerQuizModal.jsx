import React, { useState } from 'react';
import { X, Compass, Target, CheckCircle2, ArrowRight, RotateCcw, Calendar, BookOpen, UserCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

const QUESTIONS = [
  {
    id: 1,
    question: "How aligned do you feel with your current career trajectory?",
    options: [
      { text: "Completely misaligned - I need a fundamental shift.", points: 1 },
      { text: "Somewhat aligned, but feeling stuck or unfulfilled.", points: 2 },
      { text: "High achiever, but unsure what my next strategic step is.", points: 3 },
      { text: "Very aligned, looking to scale my impact or lead others.", points: 4 }
    ]
  },
  {
    id: 2,
    question: "How is AI & changing technology affecting your industry or role?",
    options: [
      { text: "Causing high uncertainty - I need to future-proof my skillset.", points: 1 },
      { text: "Creating new expectations that I'm eager to adapt to.", points: 2 },
      { text: "Unlocking opportunities, but I need clear strategic direction.", points: 3 },
      { text: "Minimal impact yet, but preparing for long-term shifts.", points: 4 }
    ]
  },
  {
    id: 3,
    question: "What is your primary goal right now?",
    options: [
      { text: "Gaining emotional clarity and discovering my core purpose.", points: 1 },
      { text: "Reinventing my professional path or switching sectors.", points: 2 },
      { text: "Enhancing leadership, influence, and workforce strategy.", points: 3 },
      { text: "Building resilience & balancing wellbeing with performance.", points: 4 }
    ]
  },
  {
    id: 4,
    question: "How do you prefer to approach your growth?",
    options: [
      { text: "Direct 1-on-1 coaching with customized accountability.", points: 3 },
      { text: "Self-guided reading, workbooks, and deep reflection.", points: 1 },
      { text: "Corporate consulting or organizational leadership support.", points: 4 },
      { text: "Listening to podcasts, articles, and expert discussions.", points: 2 }
    ]
  }
];

export default function CareerQuizModal({ isOpen, onClose, onOpenBooking }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);

  if (!isOpen) return null;

  const handleSelectOption = (index) => {
    setSelectedOption(index);
  };

  const handleNext = () => {
    if (selectedOption === null) return;
    const newAnswers = [...answers, QUESTIONS[currentStep].options[selectedOption].points];
    setAnswers(newAnswers);
    setSelectedOption(null);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setSelectedOption(null);
    setIsCompleted(false);
  };

  const totalScore = answers.reduce((a, b) => a + b, 0);

  const getResult = () => {
    if (totalScore <= 6) {
      return {
        title: "Emotional & Foundational Clarity",
        badge: "High Priority Shift",
        description: "You are experiencing significant friction or misalignment in your current role. Starting with self-leadership and emotional clarity is your most powerful step right now.",
        action: "Book a Complimentary Clarity Call",
        recommendation: "Care to Voice 1-on-1 Future Clarity Coaching & 'Be The Reason You Thrive' Book."
      };
    } else if (totalScore <= 11) {
      return {
        title: "Career Pivot & Future-Proofing",
        badge: "Strategic Reinvention",
        description: "You've built solid experience, but evolving job markets and AI mean it's time to redefine your positioning and align your career with future growth opportunities.",
        action: "Book a 1-on-1 Strategy Session",
        recommendation: "1-on-1 Future Clarity Coaching & Care to Voice Podcast Series."
      };
    } else {
      return {
        title: "Leadership & Workforce Transformation",
        badge: "Executive Elevation",
        description: "You possess strong momentum and vision. Your focus is now on enabling others, driving total rewards strategies, or leading workforce adaptation.",
        action: "Explore Corporate Workforce Consulting",
        recommendation: "Workforce Strategy & Executive Total Rewards Consulting."
      };
    }
  };

  const result = isCompleted ? getResult() : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl glass-panel rounded-3xl p-6 sm:p-8 border border-[var(--border-subtle)] shadow-2xl overflow-hidden">
        
        {/* Glowing Ambient Background */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full opacity-70 hover:opacity-100"
        >
          <X className="w-5 h-5" />
        </button>

        {!isCompleted ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
              <Compass className="w-5 h-5 text-amber-500" />
              <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
                Career Alignment Assessment ({currentStep + 1} of {QUESTIONS.length})
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full glass-panel h-2 rounded-full mb-8 overflow-hidden">
              <div
                className="bg-gradient-to-r from-amber-500 to-rose-500 h-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
              />
            </div>

            {/* Question */}
            <h3 className="text-xl sm:text-2xl font-serif-heading font-bold mb-6 leading-snug">
              {QUESTIONS[currentStep].question}
            </h3>

            {/* Options */}
            <div className="space-y-3 mb-8">
              {QUESTIONS[currentStep].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                    selectedOption === idx
                      ? 'bg-amber-500/10 border-amber-500 text-amber-500 shadow-lg shadow-amber-500/10 font-medium'
                      : 'glass-panel opacity-80 hover:opacity-100 hover:border-amber-500/50'
                  }`}
                >
                  <span className="text-sm font-medium pr-4">{opt.text}</span>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                    selectedOption === idx ? 'border-amber-500 bg-amber-500' : 'opacity-40 border-current'
                  }`}>
                    {selectedOption === idx && <CheckCircle2 className="w-4 h-4 text-slate-950" />}
                  </div>
                </button>
              ))}
            </div>

            {/* Footer buttons */}
            <div className="flex items-center justify-between">
              <button
                onClick={onClose}
                className="text-xs font-semibold opacity-70 hover:opacity-100"
              >
                Cancel
              </button>

              <button
                onClick={handleNext}
                disabled={selectedOption === null}
                className={`gradient-btn px-6 py-3 rounded-full text-xs font-bold flex items-center gap-2 ${
                  selectedOption === null ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <span>{currentStep === QUESTIONS.length - 1 ? 'Get Results' : 'Next Question'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Results view */
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-rose-500 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-amber-500/20">
              <UserCheck className="w-8 h-8 text-slate-950" />
            </div>

            <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/40 text-xs font-bold text-amber-500 uppercase tracking-widest mb-3">
              {result.badge}
            </span>

            <h3 className="text-2xl sm:text-3xl font-serif-heading font-bold mb-3">
              {result.title}
            </h3>

            <p className="text-sm opacity-85 max-w-lg mx-auto mb-6 leading-relaxed">
              {result.description}
            </p>

            <div className="glass-panel p-4 rounded-xl text-left border border-[var(--border-subtle)] mb-8 max-w-md mx-auto">
              <div className="text-xs font-bold uppercase text-amber-500 mb-1 flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5" />
                Recommended Focus Area:
              </div>
              <div className="text-sm font-semibold">
                {result.recommendation}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                className="w-full sm:w-auto gradient-btn px-6 py-3 rounded-full text-xs font-bold flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>{result.action}</span>
              </button>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3 rounded-full glass-panel text-xs font-semibold opacity-80 hover:opacity-100 transition-colors flex items-center justify-center gap-2 border border-[var(--border-subtle)]"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retake Quiz</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
