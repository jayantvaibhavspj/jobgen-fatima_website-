import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { BookOpen, Star, Download, ShoppingCart, Check, X, ChevronRight, ExternalLink } from 'lucide-react';
import SectionBackground from './SectionBackground';

const CORE_SKILLS = [
  "Understand What’s Driving Your Internal Tension",
  "Strengthen Your Inner Voice in a Noisy World",
  "Navigate Uncertainty with Greater Emotional Clarity",
  "Make More Intentional Decisions About Work & Life",
  "Redefine Success Beyond External Expectations",
  "Adapt to Change Without Losing Yourself",
  "Navigate Reinvention with Greater Confidence",
  "Create a More Balanced & Intentional Life"
];

const CHAPTERS = [
  { num: '01', title: 'Uncovering What Drives Your Decisions', summary: 'Identify hidden friction points, emotional conditioning, and core values.' },
  { num: '02', title: 'Self-Leadership in Times of Uncertainty', summary: 'How to build psychological safety, clarity, and internal grounding.' },
  { num: '03', title: 'Navigating Career Alignment & Pivots', summary: 'Practical frameworks for evaluating opportunities in the modern workforce.' },
  { num: '04', title: 'Choosing Courage Over Comfort', summary: 'Breaking free from golden handcuffs and stepping into meaningful impact.' }
];

export default function BookSection({ onAddToCart, onOpenBooking }) {
  const [showSampleModal, setShowSampleModal] = useState(false);
  const bookImageUrl = "https://static.wixstatic.com/media/68c1c8_ba18aae42a4143ae829b2ff0693662bc~mv2.avif/v1/fill/w_532,h_848,al_c,q_85,enc_avif,quality_auto/Be%20the%20Reason%20You%20Thrive%20-%20Book.avif";

  // Lock background scroll when sample modal is open and handle Escape key
  useEffect(() => {
    if (!showSampleModal) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setShowSampleModal(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showSampleModal]);

  return (
    <section id="book" className="py-24 relative overflow-hidden border-t border-amber-500/20">
      
      {/* Bespoke Dynamic Living Background */}
      <SectionBackground variant="light" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Book Display */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group max-w-sm w-full">
              
              {/* Golden Ambient Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-amber-500/30 to-amber-600/20 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-500 pointer-events-none" />
              
              {/* Book Artwork Card */}
              <div className="relative rounded-3xl overflow-hidden glass-panel shadow-2xl border-2 border-amber-500/40 p-3 bg-white">
                <img
                  src={bookImageUrl}
                  alt="Be The Reason You Thrive by Fatima Abreu"
                  className="w-full h-auto object-cover rounded-2xl transform group-hover:scale-102 transition-transform duration-500"
                />
              </div>

              {/* Verified Author Badge */}
              <div className="absolute -bottom-4 right-4 bg-slate-950/95 backdrop-blur-md px-4 py-2 rounded-full border border-amber-500/40 text-xs font-bold text-amber-400 shadow-xl flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span>#1 Career Clarity Guide</span>
              </div>
            </div>

            {/* Social Proof */}
            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500" />
                ))}
              </div>
              <span className="text-xs font-semibold opacity-85 text-slate-700">4.9 / 5.0 (250+ Reader Reviews)</span>
            </div>
          </div>

          {/* Right Book Details */}
          <div className="lg:col-span-7">
            
            <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold mb-3 leading-tight text-slate-900">
              "Be the Reason You Thrive"
            </h2>
            <p className="text-sm font-semibold text-amber-700 uppercase tracking-widest mb-6">
              Emotional Clarity, Honest Boundaries and Intentional Life
            </p>

            <p className="text-base sm:text-lg opacity-85 mb-8 leading-relaxed text-slate-700">
              If you prefer to start on your own self-reflection journey, this book helps you understand what’s driving your internal tension, uncover emotional patterns, and begin shaping your next direction with unshakeable clarity.
            </p>

            {/* Chapters list */}
            <div className="space-y-3 mb-8">
              {CHAPTERS.map((ch) => (
                <div key={ch.num} className="glass-panel p-4 rounded-2xl flex items-start gap-4 border border-[var(--border-subtle)] hover:border-amber-500/50 transition-colors shadow-xs">
                  <span className="font-mono text-sm font-bold text-amber-600 shrink-0 mt-0.5">
                    {ch.num}
                  </span>
                  <div>
                    <h4 className="font-serif-heading text-sm font-bold mb-0.5 text-slate-900">{ch.title}</h4>
                    <p className="text-xs opacity-75 text-slate-700">{ch.summary}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Book CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onAddToCart({ id: 'book-physical', name: 'Be The Reason You Thrive (Hardcover)', price: 24.99, image: bookImageUrl })}
                className="gradient-btn px-6 py-3.5 rounded-full text-xs font-bold flex items-center gap-2 shadow-xl cursor-pointer"
              >
                <ShoppingCart className="w-4 h-4 text-white" />
                <span>Order Physical Copy ($24.99)</span>
              </button>

              <button
                onClick={() => setShowSampleModal(true)}
                className="gradient-btn-outline px-6 py-3.5 rounded-full text-xs font-semibold flex items-center gap-2 text-slate-900 border-slate-300 hover:border-amber-600 hover:text-amber-700 cursor-pointer"
              >
                <Download className="w-4 h-4 text-amber-600" />
                <span>Read Free Sample</span>
              </button>
            </div>
          </div>

        </div>

        {/* 8 Core Skills Walkaways Grid */}
        <div className="pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-serif-heading text-2xl font-bold mb-2 text-slate-900">8 Skills You Will Walk Away With</h3>
            <p className="text-xs sm:text-sm text-slate-600">Transformational skills developed through the chapters of this book.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CORE_SKILLS.map((skill, idx) => (
              <div key={idx} className="glass-panel p-4 rounded-xl border border-slate-200 flex items-start gap-3 hover:border-amber-500/40 transition-all shadow-xs">
                <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span className="text-xs font-medium text-slate-700 leading-snug">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Screen-Centered Free Sample Chapter Popup Modal mounted directly to document.body */}
      {showSampleModal && typeof document !== 'undefined' && createPortal(
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-xl animate-fadeIn"
          onClick={() => setShowSampleModal(false)}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <div 
            className="relative w-full max-w-2xl rounded-3xl p-6 sm:p-8 border-2 border-amber-500/50 shadow-[0_0_60px_rgba(217,119,6,0.35)] bg-slate-900 text-white max-h-[90vh] overflow-y-auto my-auto animate-scaleUp flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Modal Close Button */}
            <button
              onClick={() => setShowSampleModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Close Sample Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Badge */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                <BookOpen className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 block">
                  Free Sample Chapter • Be the Reason You Thrive
                </span>
                <span className="text-xs text-slate-400 font-medium">By Fátima Y. Abreu Arellano</span>
              </div>
            </div>

            {/* Chapter Heading */}
            <h3 
              className="font-serif-heading text-2xl sm:text-3xl font-bold mb-4 tracking-tight"
              style={{ color: '#FFFFFF' }}
            >
              Chapter 1: Uncovering What Drives Your Decisions
            </h3>

            {/* Sample Content */}
            <div 
              className="text-sm sm:text-base space-y-4 leading-relaxed mb-6 font-serif-heading border-l-2 border-amber-400 pl-4 py-1"
              style={{ color: '#F8FAFC' }}
            >
              <p style={{ color: '#F8FAFC', lineHeight: '1.75' }}>
                "Clarity is not something you passively wait for; it is something you actively cultivate by stripping away external noise. For years, most of us operate on momentum, fulfilling expectations set by our industries, peers, or past versions of ourselves."
              </p>
              <p style={{ color: '#F8FAFC', lineHeight: '1.75' }}>
                "When you reach a moment where high achievement no longer produces fulfillment, it is not a sign of failure. It is an invitation to evaluate your alignment. What drove your choices five years ago may no longer serve the person you are becoming today."
              </p>
              <p style={{ color: '#F8FAFC', lineHeight: '1.75' }}>
                "To thrive, you must become willing to examine the quiet assumptions behind your daily effort. Who are you performing for? And what would change if you decided to be the primary reason you thrive?"
              </p>
            </div>

            {/* Footer Action Bar */}
            <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3 mt-auto">
              <button
                onClick={() => {
                  const content = `BE THE REASON YOU THRIVE by Fatima Abreu\n==================================================\nCHAPTER 1: Uncovering What Drives Your Decisions\n\n"Clarity is not something you passively wait for; it is something you actively cultivate by stripping away external noise. For years, most of us operate on momentum, fulfilling expectations set by our industries, peers, or past versions of ourselves."\n\n"When you reach a moment where high achievement no longer produces fulfillment, it is not a sign of failure. It is an invitation to evaluate your alignment. What drove your choices five years ago may no longer serve the person you are becoming today."\n\n"To thrive, you must become willing to examine the quiet assumptions behind your daily effort. Who are you performing for? And what would change if you decided to be the primary reason you thrive?"\n\n--------------------------------------------------\nCopyright (c) Care to Voice by Fatima Abreu.\nPowered by JOBGEN.AI\n`;
                  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'BeTheReasonYouThrive_Chapter1_Sample.txt';
                  document.body.appendChild(a);
                  a.click();
                  document.body.removeChild(a);
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-amber-500/40 bg-amber-500/10 text-xs font-bold text-amber-300 hover:bg-amber-500/20 flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>Download Sample (.TXT)</span>
              </button>

              <button
                onClick={() => {
                  setShowSampleModal(false);
                  onAddToCart({ id: 'book-physical', name: 'Be The Reason You Thrive (Hardcover)', price: 24.99, image: bookImageUrl });
                }}
                className="w-full sm:w-auto gradient-btn px-6 py-2.5 rounded-full text-xs font-bold flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <ShoppingCart className="w-4 h-4 text-white" />
                <span>Order Full Book ($24.99)</span>
              </button>
            </div>

          </div>
        </div>,
        document.body
      )}

    </section>
  );
}
