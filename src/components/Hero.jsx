import React from 'react';
import { ArrowRight, Sparkles, Calendar } from 'lucide-react';

export default function Hero({ onOpenBooking, onOpenQuiz }) {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-slate-950 text-white">
      
      {/* Full-Screen Background Video for Hero Section */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          src="/hero_video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center scale-105 transform transition-transform duration-1000 opacity-95"
        />
        
        {/* Soft Vignette Overlay for 100% Crisp White & Gold Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/45 to-slate-950/60 backdrop-blur-[1px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        
        {/* Centered Main Hero Banner Content */}
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/15 border border-amber-300/35 backdrop-blur-md mb-6 shadow-xl">
            <span className="flex h-2 w-2 rounded-full bg-amber-300 animate-ping" />
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-200">
              Career Clarity Coaching & Corporate Consulting
            </span>
          </div>

          {/* Hero Title */}
          <h1 className="font-serif-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.15] mb-6">
            Find Your True Direction in a World of <br className="hidden sm:inline" />
            Evolving Work & AI.
          </h1>

          {/* Hero Subtitle */}
          <p className="text-base sm:text-xl text-slate-100 max-w-3xl mx-auto leading-relaxed mb-10 font-normal opacity-95">
            Helping professionals find clearer direction and supporting organisations as they navigate workforce change and evolving expectations. You’ve achieved a lot—now it’s time for future career clarity.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 px-9 py-4 rounded-full text-base font-extrabold flex items-center justify-center gap-3 shadow-2xl shadow-amber-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-5 h-5" />
              <span>Book a Clarity Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenQuiz}
              className="w-full sm:w-auto bg-white/15 hover:bg-white/25 text-white border border-white/35 px-9 py-4 rounded-full text-base font-bold flex items-center justify-center gap-3 backdrop-blur-md transition-all"
            >
              <Sparkles className="w-5 h-5 text-amber-300" />
              <span>Take Career Alignment Quiz</span>
            </button>
          </div>

        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto mt-6">
          <div className="bg-slate-900/60 backdrop-blur-xl border border-white/20 p-5 rounded-2xl text-center shadow-2xl transition-transform hover:-translate-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold font-serif-heading text-amber-300 mb-1">
              500<span className="text-amber-200 font-bold ml-0.5">+</span>
            </div>
            <div className="text-xs text-slate-100 font-semibold uppercase tracking-wider">
              Professionals Coached
            </div>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-xl border border-white/20 p-5 rounded-2xl text-center shadow-2xl transition-transform hover:-translate-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold font-serif-heading text-amber-300 mb-1">
              98<span className="text-amber-200 font-bold ml-0.5">%</span>
            </div>
            <div className="text-xs text-slate-100 font-semibold uppercase tracking-wider">
              Career Clarity Rate
            </div>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-xl border border-white/15 p-5 rounded-2xl text-center shadow-2xl transition-transform hover:-translate-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold font-serif-heading text-amber-300 mb-1">
              50<span className="text-amber-200 font-bold ml-0.5">+</span>
            </div>
            <div className="text-xs text-slate-100 font-semibold uppercase tracking-wider">
              Corporate Clients
            </div>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-xl border border-white/15 p-5 rounded-2xl text-center shadow-2xl transition-transform hover:-translate-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold font-serif-heading text-amber-300 mb-1">
              10k<span className="text-amber-200 font-bold ml-0.5">+</span>
            </div>
            <div className="text-xs text-slate-100 font-semibold uppercase tracking-wider">
              Podcast Listeners
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
