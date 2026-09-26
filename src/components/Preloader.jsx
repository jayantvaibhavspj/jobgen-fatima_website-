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
      className={`fixed inset-0 z-[9999] bg-[#0B0F17] flex flex-col items-center justify-center transition-opacity duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center justify-center p-6 text-center space-y-5 animate-fadeIn">
        {/* Glowing Emblem */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/40 via-cyan-400/30 to-blue-500/40 rounded-full blur-2xl animate-pulse" />
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-slate-950 border border-blue-500/40 shadow-2xl flex items-center justify-center p-3">
            <img
              src={jobgenLogo}
              alt="JOBGEN.AI Logo"
              className="w-full h-full object-contain drop-shadow-[0_0_12px_rgba(59,130,246,0.6)] animate-pulse"
            />
          </div>
        </div>

        {/* Brand & Powered by Text */}
        <div className="space-y-1.5">
          <h2 className="font-serif-heading text-xl sm:text-2xl font-bold tracking-tight text-white">
            Care to Voice
          </h2>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-md">
            <span className="text-xs font-semibold text-slate-300">Powered by</span>
            <span className="text-xs font-extrabold tracking-wider text-blue-400 uppercase">
              JOBGEN.AI
            </span>
          </div>
        </div>

        {/* Progress Loading Bar */}
        <div className="w-40 h-1 bg-slate-800 rounded-full overflow-hidden mt-4">
          <div className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 rounded-full animate-pulse" style={{ width: fadeOut ? '100%' : '75%', transition: 'width 1.5s ease-in-out' }} />
        </div>
      </div>
    </div>
  );
}
