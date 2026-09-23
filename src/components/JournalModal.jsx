import React from 'react';
import { X, Clock, Calendar, Share2, Sparkles, BookOpen, CheckCircle2 } from 'lucide-react';
import logger from '../utils/logger';

export default function JournalModal({ article, onClose, onOpenBooking }) {
  if (!article) return null;

  const handleShare = () => {
    logger.event('article_shared', { title: article.title });
    if (navigator.share) {
      navigator.share({ title: article.title, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[90vh] glass-panel rounded-3xl border border-[var(--border-subtle)] shadow-2xl bg-slate-900 text-white flex flex-col overflow-hidden">
        
        {/* Top Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              {article.category || 'Executive Perspective'}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime || '5 min read'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              title="Share Article"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 font-sans leading-relaxed text-slate-200">
          
          <h1 className="font-serif-heading text-2xl sm:text-4xl font-bold text-white leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center gap-3 pt-1 pb-4 border-b border-slate-800">
            <img
              src="https://static.wixstatic.com/media/68c1c8_4c4ba09289284e7f9711a6eb51186fbb~mv2.jpg/v1/crop/x_0,y_123,w_1067,h_1276/fill/w_856,h_1053,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/68c1c8_4c4ba09289284e7f9711a6eb51186fbb~mv2.jpg"
              alt="Fatima"
              className="w-10 h-10 rounded-full object-cover border border-emerald-500/40"
            />
            <div>
              <span className="text-xs font-bold text-white block">By Fatima</span>
              <span className="text-[10px] text-slate-400">Author & Founder, Care to Voice</span>
            </div>
          </div>

          {article.image && (
            <div className="rounded-2xl overflow-hidden max-h-72 border border-slate-800">
              <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
            </div>
          )}

          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 italic font-serif-heading text-base">
            "{article.excerpt || 'Real clarity is not about moving faster—it is about ensuring your direction matches your core purpose in a world of evolving work.'}"
          </div>

          <div className="space-y-4 text-sm sm:text-base text-slate-300">
            <p>
              In today's fast-moving corporate environment, high achievers often hit a plateau where traditional indicators of success—promotions, salary increases, title upgrades—no longer bring the same fulfillment.
            </p>
            <p>
              Navigating workforce change requires shifting from reactive adaptation to proactive self-leadership. As artificial intelligence automates transactional tasks, human qualities like emotional intelligence, strategic purpose, and strategic alignment become your primary competitive advantage.
            </p>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 my-4 space-y-3">
              <span className="font-bold text-white block uppercase tracking-wider text-xs font-mono">Key Executive Takeaways:</span>
              <div className="flex items-start gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Focus on direction before momentum—speed in the wrong direction leads to faster burnout.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Build employee value propositions that integrate purpose with modern workforce expectations.</span>
              </div>
            </div>

            <p>
              Whether you are an enterprise HR leader re-architecting your people practices or an executive considering your next major pivot, taking time to reflect on your voice is the first step toward lasting alignment.
            </p>
          </div>

          {/* Footer CTA */}
          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-white">Ready for your own clarity breakthrough?</h4>
              <p className="text-xs text-slate-400">Book a 1-on-1 consultation with Fatima.</p>
            </div>
            <button
              onClick={() => {
                onClose();
                if (onOpenBooking) onOpenBooking();
              }}
              className="gradient-btn px-6 py-3 rounded-full text-xs font-bold shadow-lg"
            >
              Book Clarity Call
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
