import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Play, ExternalLink, X, Film, CheckCircle2 } from 'lucide-react';
import SectionBackground from './SectionBackground';

import short1Thumb from '../assets/youtube_shorts/short_1.jpg';
import short2Thumb from '../assets/youtube_shorts/short_2.jpg';
import short3Thumb from '../assets/youtube_shorts/short_3.jpg';
import short4Thumb from '../assets/youtube_shorts/short_4.jpg';
import short5Thumb from '../assets/youtube_shorts/short_5.jpg';

const YouTubeIcon = ({ className = "w-4 h-4" }) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const ShortsIcon = ({ className = "w-4 h-4" }) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24">
    <path d="M17.77 10.32l-1.2-.5L18 9.06a3.74 3.74 0 0 0-3.5-5.38c-.76 0-1.48.23-2.09.64L6.68 7.74a3.75 3.75 0 0 0 1.95 6.94l1.2.5-1.43.76a3.75 3.75 0 0 0 3.5 5.38c.76 0 1.48-.23 2.09-.64l5.73-3.42a3.75 3.75 0 0 0-1.95-6.94zM10 14.65v-5.3l4.58 2.65L10 14.65z"/>
  </svg>
);

const YOUTUBE_SHORTS = [
  {
    id: 1,
    videoId: 'D_qpDFjbpU0',
    title: 'When Success Does not Feel Like Thriving',
    quote: "Can the life you're building also support the person you're becoming?",
    thumbnail: short1Thumb,
    url: 'https://www.youtube.com/shorts/D_qpDFjbpU0',
    category: 'Career Clarity'
  },
  {
    id: 2,
    videoId: 'lrFsHNfIPqI',
    title: 'Leadership Is Sustainable Only When We Name the Invisible Weight',
    quote: 'I think it asks us to be more self-aware',
    thumbnail: short2Thumb,
    url: 'https://www.youtube.com/shorts/lrFsHNfIPqI',
    category: 'Leadership'
  },
  {
    id: 3,
    videoId: 'xHAx9XMdj_k',
    title: 'Clarity isn’t certainty, it’s honesty.',
    quote: 'I have seen this again and again in senior roles.',
    thumbnail: short3Thumb,
    url: 'https://www.youtube.com/shorts/xHAx9XMdj_k',
    category: 'Honest Boundaries'
  },
  {
    id: 4,
    videoId: 'zHDQoEyvfEA',
    title: 'You Can Be Doing Well and Still Feel Off',
    quote: 'Be the Reason You Thrive • The Best Version of YOU',
    thumbnail: short4Thumb,
    url: 'https://www.youtube.com/shorts/zHDQoEyvfEA',
    category: 'Emotional Clarity'
  },
  {
    id: 5,
    videoId: 'irBGnpgrFP4',
    title: 'Book - Be the Reason You Thrive',
    quote: 'Author of the Book "Be the Reason You Thrive"',
    thumbnail: short5Thumb,
    url: 'https://www.youtube.com/shorts/irBGnpgrFP4',
    category: 'Published Author'
  }
];

export default function YouTubeSection() {
  const [selectedShort, setSelectedShort] = useState(null);

  // Close modal on Escape key and prevent background page scroll while open
  useEffect(() => {
    if (!selectedShort) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedShort(null);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedShort]);

  return (
    <section id="youtube" className="py-24 relative overflow-hidden border-t border-amber-500/20 text-slate-900">
      
      {/* Dynamic Background */}
      <SectionBackground variant="deep" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Watch Insights on <span className="text-red-500">YouTube Shorts</span>
            </h2>
            <p className="text-sm opacity-85 max-w-2xl mt-2 leading-relaxed text-slate-300">
              High-impact perspective shifts on career friction, leadership self-awareness, and intentional living. Direct from Fatima's official channel <strong className="text-red-400">@FatimaCaretoVoice</strong>.
            </p>
          </div>

          <a
            href="https://www.youtube.com/@FatimaCaretoVoice/shorts"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs flex items-center justify-center gap-2.5 shadow-xl transition-all duration-300 transform hover:scale-105 shrink-0"
          >
            <YouTubeIcon className="w-4 h-4 fill-white" />
            <span>Visit @FatimaCaretoVoice/shorts</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

        {/* 5 Vertical Shorts Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {YOUTUBE_SHORTS.map((short) => (
            <div
              key={short.id}
              className="group relative rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-red-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between bg-slate-900/60"
            >
              {/* Vertical 9:16 Video Thumbnail Container */}
              <div 
                onClick={() => setSelectedShort(short)}
                className="relative aspect-[9/16] overflow-hidden cursor-pointer"
              >
                <img
                  src={short.thumbnail}
                  alt={short.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Gradient Shadows Top & Bottom for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-slate-950/60 opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Badge: Category & Shorts Icon */}
                <div className="absolute top-3.5 inset-x-3 flex items-center justify-between z-10">
                  <span className="px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-bold text-amber-300 border border-amber-500/30 shadow-md">
                    {short.category}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg">
                    <ShortsIcon className="w-3.5 h-3.5 fill-white" />
                  </div>
                </div>

                {/* Center Hover Play Button */}
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <div className="w-13 h-13 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-2xl group-hover:scale-115 transition-transform duration-300 border-2 border-white/40">
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </div>
                </div>

                {/* Bottom Overlay Info (Title) */}
                <div className="absolute bottom-3 inset-x-3 z-10">
                  <h3 className="text-white font-bold text-sm leading-snug line-clamp-2 drop-shadow-md group-hover:text-red-300 transition-colors">
                    {short.title}
                  </h3>
                </div>
              </div>

              {/* Card Footer: Play / Open in YouTube */}
              <div className="p-3 bg-slate-950/80 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => setSelectedShort(short)}
                  className="text-xs font-bold text-white hover:text-red-400 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-red-500 text-red-500" />
                  <span>Play Video</span>
                </button>

                <a
                  href={short.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] font-bold text-slate-300 hover:text-red-400 flex items-center gap-1 transition-colors"
                  title="Open in YouTube Shorts"
                >
                  <span>YouTube</span>
                  <ExternalLink className="w-3 h-3 text-red-400" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Channel Banner Callout */}
        <div className="mt-12 p-6 rounded-3xl glass-panel border border-red-500/30 bg-gradient-to-r from-red-950/40 via-slate-950/60 to-slate-950/80 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-red-600/30">
              <YouTubeIcon className="w-6 h-6 fill-white" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base sm:text-lg">
                Explore More Shorts & Keynotes on YouTube
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                Subscribe to @FatimaCaretoVoice for weekly executive reflections and career strategies.
              </p>
            </div>
          </div>

          <a
            href="https://www.youtube.com/@FatimaCaretoVoice/shorts"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs flex items-center gap-2 shadow-lg transition-transform hover:scale-105 shrink-0"
          >
            <span>Subscribe on YouTube</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Screen-Centered Popup Video Player Modal (Mounted directly to document.body via Portal) */}
      {selectedShort && typeof document !== 'undefined' && createPortal(
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-4 bg-slate-950/90 backdrop-blur-xl animate-fadeIn"
          onClick={() => setSelectedShort(null)}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <div 
            className="relative w-full max-w-[390px] rounded-3xl overflow-hidden glass-panel border-2 border-red-500/50 shadow-[0_0_60px_rgba(239,68,68,0.4)] bg-slate-950 flex flex-col my-auto max-h-[92vh] animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Modal Top Header Bar */}
            <div className="p-3.5 bg-slate-900/95 border-b border-white/10 flex items-center justify-between text-white shrink-0">
              <div className="flex items-center gap-2 pr-2 min-w-0">
                <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center shrink-0">
                  <ShortsIcon className="w-3.5 h-3.5 fill-white" />
                </div>
                <h4 className="text-xs font-bold truncate text-white">
                  {selectedShort.title}
                </h4>
              </div>

              <button
                onClick={() => setSelectedShort(null)}
                className="p-1.5 rounded-full hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Embedded 9:16 Shorts Video Screen */}
            <div className="relative aspect-[9/16] w-full bg-black shrink">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${selectedShort.videoId}?autoplay=1&rel=0&modestbranding=1`}
                title={selectedShort.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>

            {/* Modal Bottom Footer Bar */}
            <div className="p-3 bg-slate-900/95 border-t border-white/10 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full bg-red-600/20 border border-red-500/40 text-[10px] font-bold text-red-400">
                  {selectedShort.category}
                </span>
                <span className="text-[11px] text-slate-300 font-medium hidden sm:inline">Care to Voice</span>
              </div>

              <a
                href={selectedShort.url}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-1.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold flex items-center gap-1.5 transition-transform hover:scale-105 shadow-md"
              >
                <span>Open in YouTube</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>
        </div>,
        document.body
      )}

    </section>
  );
}
