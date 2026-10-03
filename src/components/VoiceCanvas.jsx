import React, { useState, useEffect } from 'react';

export default function VoiceCanvas({ isPlaying }) {
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const [hasMoved, setHasMoved] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!hasMoved) setHasMoved(true);
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [hasMoved]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      
      {/* 1. Interactive Cursor Ambient Spotlight (Follows mouse smoothly) */}
      {hasMoved && (
        <div 
          className="fixed pointer-events-none z-10 w-[500px] h-[500px] rounded-full blur-[100px] transition-transform duration-150 ease-out transform-gpu -translate-x-1/2 -translate-y-1/2 opacity-30"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.35) 0%, rgba(217, 119, 6, 0.12) 50%, transparent 70%)'
          }}
        />
      )}

      {/* 2. Multi-Color Gradient Ambient Orbs (Soft Mesh Blobs) */}
      
      {/* Orb 1: Warm Amber Gold - Top Left */}
      <div 
        className={`absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-amber-400/25 via-orange-300/20 to-yellow-200/10 blur-[110px] transform-gpu transition-all duration-1000 ${
          isPlaying ? 'animate-pulse scale-125 opacity-70' : 'animate-ambient-glow-1 opacity-55'
        }`} 
      />

      {/* Orb 2: Elegant Crimson & Rose - Top Right */}
      <div 
        className="absolute top-1/6 -right-20 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-rose-400/25 via-pink-400/20 to-red-300/10 blur-[120px] transform-gpu animate-ambient-glow-2 opacity-50" 
      />

      {/* Orb 3: Emerald & Mint Teal - Middle Left */}
      <div 
        className="absolute top-1/2 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-emerald-400/20 via-teal-300/18 to-cyan-200/10 blur-[130px] transform-gpu animate-ambient-glow-3 opacity-45" 
      />

      {/* Orb 4: Royal Violet & Indigo - Center Right */}
      <div 
        className="absolute top-2/3 -right-28 w-[580px] h-[580px] rounded-full bg-gradient-to-bl from-violet-400/22 via-indigo-300/18 to-purple-200/10 blur-[125px] transform-gpu animate-ambient-glow-4 opacity-50" 
      />

      {/* Orb 5: Warm Coral & Golden Peach - Bottom Center */}
      <div 
        className="absolute -bottom-32 left-1/3 w-[650px] h-[650px] rounded-full bg-gradient-to-t from-orange-400/22 via-amber-300/18 to-rose-200/10 blur-[135px] transform-gpu animate-ambient-glow-5 opacity-50" 
      />

      {/* Subtle Dynamic Mesh Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#d97706_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.03]" />

    </div>
  );
}
