import React, { useState } from 'react';
import { BookOpen, Star, Download, ShoppingCart, Check, Sparkles, X, ChevronRight } from 'lucide-react';

const CHAPTERS = [
  { num: '01', title: 'Uncovering What Drives Your Decisions', summary: 'Identify hidden friction points, emotional conditioning, and core values.' },
  { num: '02', title: 'Self-Leadership in Times of Uncertainty', summary: 'How to build psychological safety, clarity, and internal grounding.' },
  { num: '03', title: 'Navigating Career Alignment & Pivots', summary: 'Practical frameworks for evaluating opportunities in the modern workforce.' },
  { num: '04', title: 'Choosing Courage Over Comfort', summary: 'Breaking free from golden handcuffs and stepping into meaningful impact.' }
];

export default function BookSection({ onAddToCart, onOpenBooking }) {
  const [showSampleModal, setShowSampleModal] = useState(false);
  const bookImageUrl = "https://static.wixstatic.com/media/68c1c8_ba18aae42a4143ae829b2ff0693662bc~mv2.avif/v1/fill/w_532,h_848,al_c,q_85,enc_avif,quality_auto/Be%20the%20Reason%20You%20Thrive%20-%20Book.avif";

  return (
    <section id="book" className="py-24 relative overflow-hidden border-t border-[var(--border-subtle)]">
      
      {/* Glow Effects */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Book Render Graphic */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group cursor-pointer max-w-xs sm:max-w-sm">
              
              {/* Outer Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/30 via-rose-500/20 to-amber-500/20 rounded-3xl blur-2xl opacity-80 group-hover:opacity-100 transition duration-500" />

              {/* Real Book Cover Container */}
              <div className="relative rounded-2xl overflow-hidden glass-panel border-amber-500/40 shadow-2xl transform group-hover:scale-105 group-hover:-rotate-1 transition-all duration-500">
                <img
                  src={bookImageUrl}
                  alt="Be The Reason You Thrive Book Cover"
                  className="w-full h-auto object-cover max-h-[460px]"
                />
              </div>

            </div>

            {/* Rating */}
            <div className="mt-6 flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs font-semibold opacity-85">4.9 / 5.0 (250+ Reader Reviews)</span>
            </div>
          </div>

          {/* Right Book Details */}
          <div className="lg:col-span-7">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/40 text-xs font-bold uppercase tracking-widest text-amber-500 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Published Work</span>
            </div>

            <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold mb-6 leading-tight">
              Begin Your Journey with <br className="hidden sm:inline" />
              <span className="gradient-text-primary">"Be The Reason You Thrive"</span>
            </h2>

            <p className="text-base sm:text-lg opacity-85 mb-8 leading-relaxed">
              If you prefer to start on your own self-reflection journey, this book helps you understand what’s driving your decisions, uncover emotional patterns, and begin shaping your next direction with unshakeable clarity.
            </p>

            {/* Chapters list */}
            <div className="space-y-3 mb-8">
              {CHAPTERS.map((ch, idx) => (
                <div key={idx} className="glass-panel p-4 rounded-xl flex items-start gap-4 hover:border-amber-500/50 transition-colors">
                  <span className="text-sm font-bold text-amber-500 font-mono shrink-0 pt-0.5">{ch.num}</span>
                  <div>
                    <h4 className="text-sm font-semibold">{ch.title}</h4>
                    <p className="text-xs opacity-75 mt-0.5">{ch.summary}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onAddToCart({ id: 'book-physical', name: 'Be The Reason You Thrive (Hardcover)', price: 24.99, image: bookImageUrl })}
                className="gradient-btn px-6 py-3.5 rounded-full text-xs font-bold flex items-center gap-2 shadow-xl"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Buy Book ($24.99)</span>
              </button>

              <button
                onClick={() => setShowSampleModal(true)}
                className="gradient-btn-outline px-6 py-3.5 rounded-full text-xs font-semibold flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-amber-500" />
                <span>Read Free Chapter Sample</span>
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Free Sample Chapter Modal */}
      {showSampleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl glass-panel rounded-3xl p-6 sm:p-8 border border-amber-500/40 shadow-2xl max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setShowSampleModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full opacity-70 hover:opacity-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-amber-500" />
              <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
                Chapter 1 Excerpt
              </span>
            </div>

            <h3 className="font-serif-heading text-2xl font-bold mb-4">
              Uncovering What Drives Your Decisions
            </h3>

            <div className="text-sm opacity-90 space-y-4 leading-relaxed mb-6 font-serif-heading">
              <p>
                "Clarity is not something you passively wait for; it is something you actively cultivate by stripping away external noise. For years, most of us operate on momentum—fulfilling expectations set by our industries, peers, or past versions of ourselves."
              </p>
              <p>
                "When you reach a moment where high achievement no longer produces fulfillment, it is not a sign of failure. It is an invitation to evaluate your alignment. What drove your choices five years ago may no longer serve the person you are becoming today."
              </p>
              <p>
                "To thrive, you must become willing to examine the quiet assumptions behind your daily effort. Who are you performing for? And what would change if you decided to be the primary reason you thrive?"
              </p>
            </div>

            <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs opacity-75">Want to read the rest? Get your copy today.</span>
              <button
                onClick={() => {
                  setShowSampleModal(false);
                  onAddToCart({ id: 'book-physical', name: 'Be The Reason You Thrive (Hardcover)', price: 24.99, image: bookImageUrl });
                }}
                className="gradient-btn px-6 py-2.5 rounded-full text-xs font-bold flex items-center gap-2"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Order Full Book</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
