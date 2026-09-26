import React from 'react';

export default function WhatsAppButton() {
  const whatsappNumber = "15551234567";
  const defaultMessage = encodeURIComponent("Hi Fatima & Care to Voice team, I would like to inquire about Career Clarity Coaching / Workforce Consulting.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start group">
      
      {/* Animated Speech Bubble Tooltip */}
      <div 
        className="mb-3 px-3.5 py-1.5 rounded-2xl bg-slate-950/95 text-slate-100 border border-emerald-500/50 shadow-2xl backdrop-blur-xl transition-all duration-300 transform group-hover:-translate-y-1 group-hover:scale-105 flex items-center gap-2 pointer-events-auto cursor-pointer animate-float-slow"
        onClick={() => window.open(whatsappUrl, '_blank')}
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
          Direct WhatsApp 💬
        </span>
      </div>

      {/* Official WhatsApp Vector Logo Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="relative w-14 h-14 rounded-full bg-slate-950 border-2 border-emerald-500/80 shadow-2xl flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 active:scale-95 group-hover:border-emerald-400"
        aria-label="Contact via WhatsApp"
      >
        {/* Glowing Emerald Aura */}
        <span className="absolute -inset-1.5 rounded-full bg-emerald-500/40 blur-md group-hover:opacity-100 opacity-70 animate-pulse pointer-events-none" />

        {/* Official WhatsApp Vector SVG */}
        <svg className="w-7 h-7 fill-[#25D366] relative z-10 drop-shadow-[0_0_8px_rgba(37,211,102,0.5)]" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.099 4.019 4.012-1.052z"/>
        </svg>
      </a>

    </div>
  );
}
