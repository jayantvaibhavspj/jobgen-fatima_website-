import React from 'react';

/**
 * SectionBackground
 * Bespoke dynamic luxury background system for Fatima's "Care to Voice"
 * Inspired by architectural liquid glass, harmonic voice resonance waves & ambient lighting
 * Variants:
 *  - "light" (or "pearl"): Luminous Ivory Pearl Sanctuary
 *  - "deep" (or "cashmere"): Rich Warm Obsidian Bronze (Halka Deep, warm & elegant, NOT dark blue)
 */
export default function SectionBackground({ variant = 'light' }) {
  const isDeep = variant === 'deep' || variant === 'cashmere';

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      
      {/* 1. Base Subtle Architectural Resonance Grid */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: isDeep
            ? `
              linear-gradient(90deg, rgba(245, 158, 11, 0.06) 1px, transparent 1px),
              linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px)
            `
            : `
              linear-gradient(90deg, rgba(217, 119, 6, 0.035) 1px, transparent 1px),
              linear-gradient(rgba(15, 23, 42, 0.025) 1px, transparent 1px)
            `,
          backgroundSize: '54px 54px',
          WebkitMaskImage: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 75%, transparent 100%)',
          maskImage: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 75%, transparent 100%)',
          opacity: isDeep ? 0.85 : 0.65
        }}
      />

      {/* 2. Morphing Organic Ambient Liquid Auras */}
      {/* Primary Warm Radiant Gold / Amber Aura */}
      <div 
        className={`absolute rounded-full pointer-events-none animate-morph-gold ${
          isDeep 
            ? 'top-[-10%] right-[-5%] w-[60vw] max-w-[680px] h-[60vw] max-h-[680px] bg-gradient-to-br from-amber-500/20 via-orange-500/12 to-transparent blur-[110px] opacity-75' 
            : 'top-[-5%] left-[-5%] w-[50vw] max-w-[580px] h-[50vw] max-h-[580px] bg-gradient-to-br from-amber-300/22 via-yellow-200/15 to-transparent blur-[90px] opacity-60'
        }`}
      />

      {/* Secondary Velvet Ruby / Rose Pearl Aura */}
      <div 
        className={`absolute rounded-full pointer-events-none animate-morph-pearl ${
          isDeep
            ? 'bottom-[-10%] left-[-8%] w-[58vw] max-w-[650px] h-[58vw] max-h-[650px] bg-gradient-to-tr from-rose-500/16 via-amber-600/10 to-transparent blur-[120px] opacity-70'
            : 'bottom-[-8%] right-[-6%] w-[54vw] max-w-[640px] h-[54vw] max-h-[640px] bg-gradient-to-tr from-amber-200/20 via-slate-100/30 to-transparent blur-[100px] opacity-55'
        }`}
      />

      {/* 3. Twinkling Stardust / Clarity Constellation Nodes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[22%] left-[35%] w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b] animate-stardust" style={{ animationDelay: '0s' }} />
        <div className="absolute top-[68%] left-[12%] w-2 h-2 rounded-full bg-amber-300 shadow-[0_0_10px_#fbbf24] animate-stardust" style={{ animationDelay: '1.2s' }} />
        <div className="absolute top-[38%] right-[18%] w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b] animate-stardust" style={{ animationDelay: '2.4s' }} />
        <div className="absolute bottom-[28%] right-[32%] w-2 h-2 rounded-full bg-yellow-200 shadow-[0_0_10px_#fde047] animate-stardust" style={{ animationDelay: '3.6s' }} />
      </div>

      {/* 5. Harmonic Voice Frequency Waveform Ribbon (Bottom Soundwaves for Voice & Clarity) */}
      <div className="absolute bottom-0 left-0 right-0 h-[140px] overflow-hidden pointer-events-none opacity-45">
        <svg className="w-full h-full block" viewBox="0 0 1440 140" fill="none" preserveAspectRatio="none">
          <path 
            className="animate-wave-motion-1"
            d="M0 60C240 10 480 110 720 60C960 10 1200 110 1440 60V140H0V60Z" 
            fill={isDeep ? 'rgba(245, 158, 11, 0.09)' : 'rgba(217, 119, 6, 0.05)'}
          />
          <path 
            className="animate-wave-motion-2"
            d="M0 80C320 120 640 40 960 90C1280 140 1380 60 1440 70V140H0V80Z" 
            fill={isDeep ? 'rgba(244, 63, 94, 0.06)' : 'rgba(245, 158, 11, 0.04)'}
          />
        </svg>
      </div>

      {/* 6. Dynamic Caustic Light Sweep Beam */}
      <div 
        className={`absolute inset-0 pointer-events-none animate-caustic-sweep ${
          isDeep 
            ? 'bg-gradient-to-r from-transparent via-amber-200/10 to-transparent opacity-40' 
            : 'bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-40'
        }`} 
      />

    </div>
  );
}
