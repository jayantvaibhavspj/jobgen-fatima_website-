import React, { useState } from 'react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);
  const whatsappNumber = "15551234567"; // Customize with active WhatsApp number
  const defaultMessage = encodeURIComponent("Hi Fatima & Care to Voice team, I would like to inquire about Career Clarity Coaching / Workforce Consulting.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start select-none group">
      
      {/* Speech Bubble Tooltip */}
      {showTooltip && (
        <div 
          className="mb-2 px-3.5 py-1.5 rounded-full bg-white text-slate-800 border border-emerald-500/30 shadow-lg shadow-emerald-900/5 backdrop-blur-md flex items-center gap-2 cursor-pointer transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-xl"
          onClick={() => window.open(whatsappUrl, '_blank')}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-semibold text-slate-700 tracking-wide flex items-center gap-1.5">
            Need Help? <span className="text-emerald-600 font-bold">Chat on WhatsApp</span>
          </span>
          <button 
            onClick={(e) => { e.stopPropagation(); setShowTooltip(false); }} 
            className="ml-1 text-slate-400 hover:text-slate-600 text-xs font-bold px-1"
            title="Close hint"
          >
            ✕
          </button>
          
          {/* Subtle arrow tail */}
          <div className="absolute -bottom-1 left-5 w-2.5 h-2.5 bg-white border-r border-b border-emerald-500/30 rotate-45" />
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="relative w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-600/30 flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 hover:bg-[#20ba5a] hover:shadow-xl hover:shadow-emerald-600/40 border-2 border-white/90"
        aria-label="Contact via WhatsApp"
      >
        {/* Glow Aura */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 blur-md opacity-75 animate-pulse pointer-events-none group-hover:opacity-100" />

        {/* Authentic WhatsApp Vector Icon */}
        <svg 
          className="w-8 h-8 fill-white relative z-10 drop-shadow-sm" 
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.157 4.228 4.228-1.157zm12.353-5.28c-.347-.174-2.055-1.014-2.373-1.13-.318-.116-.549-.174-.78.174-.231.348-.897 1.13-1.1 1.362-.203.232-.405.261-.752.087-.348-.174-1.472-.543-2.804-1.731-1.037-.925-1.737-2.067-1.94-2.414-.203-.348-.022-.536.152-.709.157-.156.348-.405.521-.608.174-.203.231-.348.348-.579.116-.232.058-.435-.029-.608-.087-.174-.78-1.88-1.07-2.574-.283-.675-.57-.584-.78-.594-.201-.009-.434-.01-.667-.01-.232 0-.608.087-.927.435-.319.348-1.216 1.189-1.216 2.9 0 1.711 1.246 3.364 1.419 3.596.174.232 2.453 3.746 5.942 5.253.83.358 1.478.572 1.984.733.834.265 1.593.228 2.193.138.669-.1 2.055-.84 2.344-1.653.29-.812.29-1.508.203-1.653-.087-.145-.319-.232-.667-.406z"/>
        </svg>
      </a>

    </div>
  );
}

