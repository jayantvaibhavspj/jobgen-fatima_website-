import React, { useEffect, useState } from 'react';
import jobgenLogo from '../assets/jobgen_logo.png';

export default function Preloader({ onComplete }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFadeOut(true);
    }, 1800);

    const timer2 = setTimeout(() => {
      if (onComplete) onComplete();
    }, 2200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#FAF9F6] flex flex-col items-center justify-center transition-opacity duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center justify-center p-6 text-center space-y-5 animate-fadeIn">
        {/* Glowing Emblem */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-amber-500/20 via-orange-400/20 to-amber-500/20 rounded-full blur-2xl animate-pulse" />
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-white border border-amber-500/30 shadow-xl flex items-center justify-center p-3">
            <img
              src={jobgenLogo}
              alt="JOBGEN.AI Logo"
              className="w-full h-full object-contain drop-shadow-[0_0_12px_rgba(217,119,6,0.3)] animate-pulse"
            />
          </div>
        </div>

        {/* Brand & Powered by Text */}
        <div className="space-y-1.5">
          <h2 className="font-serif-heading text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
            Care to Voice
          </h2>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 backdrop-blur-md">
            <span className="text-xs font-semibold text-slate-600">Powered by</span>
            <span className="text-xs font-extrabold tracking-wider text-amber-600 uppercase">
              JOBGEN.AI
            </span>
          </div>
        </div>

        {/* Progress Loading Bar */}
        <div className="w-40 h-1 bg-slate-200 rounded-full overflow-hidden mt-4">
          <div className="h-full bg-gradient-to-r from-amber-500 via-rose-500 to-amber-600 rounded-full animate-pulse" style={{ width: fadeOut ? '100%' : '75%', transition: 'width 1.5s ease-in-out' }} />
        </div>
      </div>
    </div>
  );
}
