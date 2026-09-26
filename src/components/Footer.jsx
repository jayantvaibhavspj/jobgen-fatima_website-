import React, { useState } from 'react';
import { Send, CheckCircle2, Mail, Sparkles, Globe, Radio } from 'lucide-react';
import jobgenLogo from '../assets/jobgen_logo.png';

export default function Footer({ onOpenBooking }) {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="border-t border-[var(--border-subtle)] opacity-90 pt-16 pb-12 relative overflow-hidden">
      
      {/* Glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-48 bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Newsletter CTA Section */}
        <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-[var(--border-subtle)] mb-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-500 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Weekly Clarity Newsletter</span>
              </div>
              <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold mb-2">
                Join 5,000+ Professionals & Leaders
              </h3>
              <p className="text-xs sm:text-sm opacity-85">
                Receive high-value perspectives on career navigation, workforce strategies, and purpose-driven leadership directly to your inbox.
              </p>
            </div>

            <div className="lg:col-span-6">
              {subscribed ? (
                <div className="glass-panel border border-amber-500/50 p-4 rounded-2xl flex items-center gap-3 text-amber-500 text-sm font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                  <span>Thank you! You are officially subscribed to the Care to Voice newsletter.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Mail className="w-4 h-4 opacity-50 absolute left-4 top-4" />
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full glass-panel border border-[var(--border-subtle)] rounded-full pl-11 pr-4 py-3.5 text-sm focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="gradient-btn px-7 py-3.5 rounded-full text-xs font-bold flex items-center justify-center gap-2 shrink-0 shadow-lg"
                  >
                    <span>Subscribe</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16 text-xs">
          
          {/* Brand Info */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl overflow-hidden border border-emerald-500/30 bg-slate-900 flex items-center justify-center p-0.5">
                <img 
                  src="https://static.wixstatic.com/media/68c1c8_573e9a752ee44101ac84e7049dc439b0~mv2.png/v1/fill/w_210,h_210,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/68c1c8_573e9a752ee44101ac84e7049dc439b0~mv2.png" 
                  alt="Care to Voice Logo"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <span className="font-serif-heading text-lg font-bold">Care to Voice</span>
            </div>

            <p className="opacity-75 leading-relaxed max-w-sm">
              Helping professionals find clearer direction and supporting organisations as they navigate workforce change, evolving expectations, and the impact of AI.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://www.youtube.com/@FatimaCaretoVoice" target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-[#FF0000] text-white hover:scale-110 transition-transform shadow-md" aria-label="YouTube">
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/caretovoice/" target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white hover:scale-110 transition-transform shadow-md" aria-label="Instagram">
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/caretovoice" target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-[#1877F2] text-white hover:scale-110 transition-transform shadow-md" aria-label="Facebook">
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://open.spotify.com/show/2LuHJAZ3Kc1DDHOAyAib2x" target="_blank" rel="noreferrer" className="p-2.5 rounded-xl bg-[#1DB954] text-white hover:scale-110 transition-transform shadow-md" aria-label="Spotify">
                <Radio className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 1: Services */}
          <div>
            <h4 className="font-bold uppercase tracking-wider mb-4 font-mono">Services</h4>
            <ul className="space-y-2.5 font-medium">
              <li><a href="#coaching" className="hover:text-amber-500 transition-colors">1-on-1 Coaching</a></li>
              <li><a href="#consulting" className="hover:text-amber-500 transition-colors">Workforce Consulting</a></li>
              <li><a href="#coaching" className="hover:text-amber-500 transition-colors">Executive Advisory</a></li>
              <li><button onClick={onOpenBooking} className="hover:text-amber-500 transition-colors text-left">Book Clarity Call</button></li>
            </ul>
          </div>

          {/* Column 2: Topics */}
          <div>
            <h4 className="font-bold uppercase tracking-wider mb-4 font-mono">Topics</h4>
            <ul className="space-y-2.5 font-medium">
              <li><a href="#journal" className="hover:text-amber-500 transition-colors">Emotional Clarity</a></li>
              <li><a href="#journal" className="hover:text-amber-500 transition-colors">Inner Balance</a></li>
              <li><a href="#journal" className="hover:text-amber-500 transition-colors">Enabling Leadership</a></li>
              <li><a href="#journal" className="hover:text-amber-500 transition-colors">Reinvention</a></li>
              <li><a href="#journal" className="hover:text-amber-500 transition-colors">Resilience</a></li>
            </ul>
          </div>

          {/* Column 3: Platform */}
          <div>
            <h4 className="font-bold uppercase tracking-wider mb-4 font-mono">Platform</h4>
            <ul className="space-y-2.5 font-medium">
              <li><a href="#book" className="hover:text-amber-500 transition-colors">The Book</a></li>
              <li><a href="#podcast" className="hover:text-amber-500 transition-colors">The Podcast</a></li>
              <li><a href="#shop" className="hover:text-amber-500 transition-colors">Shop Merch</a></li>
              <li><a href="#journal" className="hover:text-amber-500 transition-colors">Journal Hub</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--border-subtle)] flex flex-col md:flex-row items-center justify-between text-xs gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-[var(--text-muted)]">
            <span>© {new Date().getFullYear()} Care to Voice by Fatima. All Rights Reserved.</span>
            <span className="hidden sm:inline opacity-30">•</span>
            
            {/* Powered by JOBGEN.AI Footer Badge */}
            <a
              href="https://jobgen.ai"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--bg-card)] border border-amber-500/30 text-xs font-semibold shadow-md hover:border-amber-400 hover:scale-105 transition-all group"
            >
              <span className="text-[var(--text-muted)] text-[11px]">Powered by</span>
              <img src={jobgenLogo} alt="JOBGEN.AI" className="w-4 h-4 object-contain" />
              <span className="text-amber-500 font-extrabold tracking-wide text-[11px] group-hover:text-amber-400">
                JOBGEN.AI
              </span>
            </a>
          </div>

          <div className="flex items-center gap-6 opacity-75">
            <a href="#" className="hover:opacity-100">Privacy Policy</a>
            <a href="#" className="hover:opacity-100">Terms of Service</a>
            <a href="#" className="hover:opacity-100">Cookie Settings</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
