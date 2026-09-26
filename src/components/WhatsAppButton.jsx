import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappNumber = "15551234567"; // Replace with Fatima's official WhatsApp number if needed
  const defaultMessage = encodeURIComponent("Hi Fatima & Care to Voice team, I would like to inquire about Career Clarity Coaching / Workforce Consulting.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start group">
      {/* Animated Speech Bubble Tooltip */}
      <div className="mb-3 px-3.5 py-1.5 rounded-2xl bg-slate-900/95 light:bg-white text-slate-100 light:text-slate-900 border border-emerald-500/40 shadow-2xl backdrop-blur-xl transition-all duration-300 transform group-hover:-translate-y-1 group-hover:scale-105 flex items-center gap-2 pointer-events-auto cursor-pointer animate-float-slow">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span className="text-xs font-bold text-emerald-400 light:text-emerald-700 flex items-center gap-1">
          Chat on WhatsApp 💬
        </span>
        {/* Tail */}
        <div className="absolute -bottom-1.5 left-5 w-3 h-3 bg-slate-900 light:bg-white border-l border-b border-emerald-500/40 rotate-45" />
      </div>

      {/* WhatsApp Trigger Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="relative p-3.5 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 active:scale-95 border-2 border-white/20"
        aria-label="Contact via WhatsApp"
      >
        <span className="absolute -inset-1.5 rounded-full bg-[#25D366]/40 blur-md group-hover:opacity-100 opacity-75 animate-pulse pointer-events-none" />
        <MessageCircle className="w-6 h-6 fill-white text-[#25D366] relative z-10" />
      </a>
    </div>
  );
}
