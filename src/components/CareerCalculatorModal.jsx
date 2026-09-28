import React, { useState } from 'react';
import { X, Sparkles, Calculator, CheckCircle2, ArrowRight, RotateCcw, Calendar } from 'lucide-react';
import logger from '../utils/logger';

export default function CareerCalculatorModal({ isOpen, onClose, onOpenBooking }) {
  const [step, setStep] = useState(1);
  const [experience, setExperience] = useState('');
  const [friction, setFriction] = useState('');
  const [goal, setGoal] = useState('');
  const [result, setResult] = useState(null);

  if (!isOpen) return null;

  const experiences = [
    { id: 'exec', label: 'Executive / C-Suite Leader (15+ yrs)' },
    { id: 'senior', label: 'Senior Manager / Director (8-15 yrs)' },
    { id: 'mid', label: 'Mid-Career Professional (3-8 yrs)' },
    { id: 'consultant', label: 'Entrepreneur / Independent Advisor' }
  ];

  const frictions = [
    { id: 'momentum', label: 'Achieved momentum, but lacking clear purpose direction' },
    { id: 'ai', label: 'Adapting to AI shifts & changing workforce expectations' },
    { id: 'burnout', label: 'High performance burnout & work-life imbalance' },
    { id: 'pivot', label: 'Considering major executive pivot or industry transition' }
  ];

  const goals = [
    { id: 'roadmap', label: 'Clear 3-year executive career trajectory' },
    { id: 'rewards', label: 'Align leadership purpose with compensation/rewards' },
    { id: 'thrive', label: 'Master self-leadership based on Fatima’s Thrive Framework' },
    { id: 'corporate', label: 'Transform organization’s people & reward strategy' }
  ];

  const calculateScore = () => {
    logger.event('career_calculator_completed', { experience, friction, goal });
    
    // Calculate custom clarity index
    let score = 65;
    if (experience === 'exec') score += 15;
    if (experience === 'senior') score += 10;
    if (friction === 'ai') score += 12;
    if (friction === 'momentum') score += 8;
    if (goal === 'thrive') score += 10;

    setResult({
      score: Math.min(score, 94),
      urgency: score > 80 ? 'High Readiness for Transformation' : 'Moderate Alignment Potential',
      recommendation: experience === 'exec' || friction === 'ai'
        ? 'Executive 1-on-1 Clarity Coaching & Workforce Advisory'
        : 'Care to Voice 90-Day Purpose Coaching Program',
      actionSteps: [
        'Complete the 15-Minute Future Clarity Call with Fatima',
        'Review Chapter 1 of "Be The Reason You Thrive"',
        'Identify top 3 friction drivers in current role'
      ]
    });
    setStep(4);
  };

  const resetCalculator = () => {
    setStep(1);
    setExperience('');
    setFriction('');
    setGoal('');
    setResult(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl glass-panel rounded-3xl p-6 sm:p-8 border border-[var(--border-subtle)] shadow-2xl bg-white text-slate-900">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-rose-500 flex items-center justify-center text-white shadow-lg">
              <Calculator className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-serif-heading font-bold text-lg text-slate-900">
                Career Clarity & Alignment Calculator
              </h3>
              <p className="text-xs text-slate-500">Evaluate your current trajectory in 60 seconds</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator */}
        {step < 4 && (
          <div className="py-4 flex items-center justify-between text-xs font-semibold text-slate-500 border-b border-slate-200 mb-6">
            <span className={step >= 1 ? 'text-amber-600 font-bold' : ''}>1. Experience</span>
            <span className={step >= 2 ? 'text-amber-600 font-bold' : ''}>2. Friction</span>
            <span className={step >= 3 ? 'text-amber-600 font-bold' : ''}>3. Outcome</span>
          </div>
        )}

        {/* Step 1: Experience */}
        {step === 1 && (
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-600">Step 1 of 3</h4>
            <h3 className="font-serif-heading text-xl font-bold mb-4">What is your current leadership experience level?</h3>
            
            <div className="space-y-2.5">
              {experiences.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => setExperience(exp.id)}
                  className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm font-semibold transition-all flex items-center justify-between ${
                    experience === exp.id
                      ? 'border-amber-500 bg-amber-500/10 text-amber-900 font-bold shadow-sm'
                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <span>{exp.label}</span>
                  {experience === exp.id && <CheckCircle2 className="w-4 h-4 text-amber-600" />}
                </button>
              ))}
            </div>

            <button
              disabled={!experience}
              onClick={() => setStep(2)}
              className="w-full mt-6 gradient-btn py-3.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 disabled:opacity-40 shadow-lg"
            >
              <span>Next: Identify Friction</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Step 2: Friction */}
        {step === 2 && (
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-600">Step 2 of 3</h4>
            <h3 className="font-serif-heading text-xl font-bold mb-4">What is your primary career or workforce friction point?</h3>
            
            <div className="space-y-2.5">
              {frictions.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFriction(f.id)}
                  className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm font-semibold transition-all flex items-center justify-between ${
                    friction === f.id
                      ? 'border-amber-500 bg-amber-500/10 text-amber-900 font-bold shadow-sm'
                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <span>{f.label}</span>
                  {friction === f.id && <CheckCircle2 className="w-4 h-4 text-amber-600" />}
                </button>
              ))}
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setStep(1)}
                className="px-4 py-3.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                Back
              </button>
              <button
                disabled={!friction}
                onClick={() => setStep(3)}
                className="flex-1 gradient-btn py-3.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 disabled:opacity-40 shadow-lg"
              >
                <span>Next: Desired Outcome</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Outcome */}
        {step === 3 && (
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-600">Step 3 of 3</h4>
            <h3 className="font-serif-heading text-xl font-bold mb-4">What is your desired 90-day trajectory?</h3>
            
            <div className="space-y-2.5">
              {goals.map((g) => (
                <button
                  key={g.id}
                  onClick={() => setGoal(g.id)}
                  className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm font-semibold transition-all flex items-center justify-between ${
                    goal === g.id
                      ? 'border-amber-500 bg-amber-500/10 text-amber-900 font-bold shadow-sm'
                      : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300'
                  }`}
                >
                  <span>{g.label}</span>
                  {goal === g.id && <CheckCircle2 className="w-4 h-4 text-amber-600" />}
                </button>
              ))}
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setStep(2)}
                className="px-4 py-3.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                Back
              </button>
              <button
                disabled={!goal}
                onClick={calculateScore}
                className="flex-1 gradient-btn py-3.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 disabled:opacity-40 shadow-lg"
              >
                <Sparkles className="w-4 h-4" />
                <span>Calculate Alignment Score</span>
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Results */}
        {step === 4 && result && (
          <div className="space-y-6 text-center animate-fadeIn">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-500 to-rose-500 p-1 mx-auto shadow-xl shadow-amber-500/20">
              <div className="w-full h-full bg-white rounded-full flex flex-col items-center justify-center shadow-inner">
                <span className="font-serif-heading text-3xl font-extrabold text-amber-600">{result.score}%</span>
                <span className="text-[9px] uppercase font-bold tracking-widest text-slate-400">Score</span>
              </div>
            </div>

            <div>
              <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 text-xs font-bold uppercase tracking-wider inline-block mb-2">
                {result.urgency}
              </span>
              <h3 className="font-serif-heading text-2xl font-bold mb-2">Recommended Program</h3>
              <p className="text-sm font-semibold text-amber-700">{result.recommendation}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2">
              <span className="font-bold text-slate-800 block uppercase tracking-wider text-[10px]">Your 30-Day Clarity Action Steps:</span>
              {result.actionSteps.map((stepItem, idx) => (
                <div key={idx} className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>{stepItem}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={resetCalculator}
                className="px-4 py-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Recalculate</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  if (onOpenBooking) onOpenBooking();
                }}
                className="flex-1 gradient-btn py-3.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-xl"
              >
                <Calendar className="w-4 h-4" />
                <span>Book 1-on-1 Call with Fatima</span>
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
