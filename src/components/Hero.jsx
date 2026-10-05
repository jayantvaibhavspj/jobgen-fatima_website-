import React from 'react';
import { ArrowRight, Compass, Calendar } from 'lucide-react';

export default function Hero({ onOpenBooking, onOpenQuiz }) {
  return (
    <section id="home" className="relative min-h-[90vh] sm:min-h-screen pt-36 sm:pt-40 pb-16 flex items-center justify-center overflow-hidden bg-slate-950 text-white">
      
      {/* Responsive Full-Screen Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <video
          src="/hero_video.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover object-center min-w-full min-h-full opacity-90 transition-transform duration-300 ease-out"
        />
        
        {/* Soft Luxury Vignette Overlay for 100% Crisp Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/50 to-slate-950/85 backdrop-blur-[0.5px]" />
      </div>

      <div 
        className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full transition-transform duration-300"
        style={{ transform: 'translateX(1cm)' }}
      >
        
        {/* Centered Luxury Hero Banner Content */}
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          

          {/* Hero Main Headline */}
          <h1 className="mb-5 drop-shadow-md text-center">
            <div className="flex flex-col items-center justify-center">
              <span 
                className="font-serif-heading text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] font-extrabold tracking-tight leading-[1.1] block"
                style={{ 
                  color: '#FB923C', 
                  textShadow: '0 3px 20px rgba(0,0,0,0.85)' 
                }}
              >
                Find Your Direction
              </span>
              <span 
                className="text-xs sm:text-lg lg:text-xl font-extrabold uppercase tracking-[0.24em] mt-2 block"
                style={{ 
                  color: '#FDE68A', 
                  textShadow: '0 2px 10px rgba(0,0,0,0.85)' 
                }}
              >
                IN AI ERA
              </span>
            </div>
          </h1>

          {/* Hero Subtitle in exactly 2 lines (concise & punchy) */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-200 max-w-3xl mx-auto leading-relaxed mb-8 font-normal opacity-95">
            <span className="block">
              Helping professionals find clear direction and navigate workforce change.
            </span>
            <span className="block mt-1 sm:mt-1.5">
              You’ve achieved a lot. Now it’s time for career clarity.
            </span>
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-12 w-full sm:w-auto">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 px-7 py-3 rounded-full text-sm font-extrabold flex items-center justify-center gap-2.5 shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Clarity Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenQuiz}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/25 hover:border-white/40 px-7 py-3 rounded-full text-sm font-bold flex items-center justify-center gap-2.5 backdrop-blur-md transition-all cursor-pointer"
            >
              <Compass className="w-4 h-4 text-amber-300" />
              <span>Take Career Alignment Quiz</span>
            </button>
          </div>

        </div>

        {/* Bottom Key Achievement Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-5 max-w-4xl mx-auto mt-8 sm:mt-14 lg:mt-20">
          <div className="bg-slate-900/60 backdrop-blur-xl border border-white/15 p-4 rounded-2xl text-center shadow-2xl transition-transform hover:-translate-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold font-serif-heading text-amber-300 mb-0.5">
              500<span className="text-amber-200 font-bold ml-0.5">+</span>
            </div>
            <div className="text-[11px] text-slate-200 font-medium uppercase tracking-wider">
              Professionals Coached
            </div>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-xl border border-white/15 p-4 rounded-2xl text-center shadow-2xl transition-transform hover:-translate-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold font-serif-heading text-amber-300 mb-0.5">
              98<span className="text-amber-200 font-bold ml-0.5">%</span>
            </div>
            <div className="text-[11px] text-slate-200 font-medium uppercase tracking-wider">
              Career Clarity Rate
            </div>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-xl border border-white/15 p-4 rounded-2xl text-center shadow-2xl transition-transform hover:-translate-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold font-serif-heading text-amber-300 mb-0.5">
              50<span className="text-amber-200 font-bold ml-0.5">+</span>
            </div>
            <div className="text-[11px] text-slate-200 font-medium uppercase tracking-wider">
              Corporate Clients
            </div>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-xl border border-white/15 p-4 rounded-2xl text-center shadow-2xl transition-transform hover:-translate-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold font-serif-heading text-amber-300 mb-0.5">
              10k<span className="text-amber-200 font-bold ml-0.5">+</span>
            </div>
            <div className="text-[11px] text-slate-200 font-medium uppercase tracking-wider">
              Podcast Listeners
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
