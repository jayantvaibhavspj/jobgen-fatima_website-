import React, { useState, useEffect } from 'react';
import { Radio, Calendar, ShoppingBag, Menu, X, Sparkles, Volume2 } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import jobgenLogo from '../assets/jobgen_logo.png';

export default function Navbar({ onOpenBooking, onOpenQuiz, cartCount, onOpenCart, isAudioPlaying, toggleAudio }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[var(--bg-main)]/90 backdrop-blur-md border-b border-[var(--border-subtle)] py-3 shadow-md' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo & Powered By JOBGEN.AI */}
        <div className="flex items-center gap-3 shrink-0">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300 border border-amber-500/30 bg-slate-900 flex items-center justify-center p-0.5">
              <img 
                src="https://static.wixstatic.com/media/68c1c8_573e9a752ee44101ac84e7049dc439b0~mv2.png/v1/fill/w_210,h_210,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/68c1c8_573e9a752ee44101ac84e7049dc439b0~mv2.png" 
                alt="Care to Voice Logo"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <div>
              <span className="font-serif-heading text-lg sm:text-xl font-bold tracking-tight logo-brand-text block leading-tight group-hover:text-amber-500 transition-colors">
                Care to Voice
              </span>
              <div className="flex items-center gap-1.5 text-[10px] tracking-wider uppercase font-medium">
                <span className="logo-sub-text">by Fatima</span>
                <span className="opacity-40 text-amber-500">•</span>
                <span className="text-amber-500 font-bold flex items-center gap-1">
                  <img src={jobgenLogo} alt="JOBGEN.AI" className="w-3 h-3 object-contain inline" />
                  JOBGEN.AI
                </span>
              </div>
            </div>
          </a>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-7 text-xs lg:text-sm font-semibold opacity-90 mx-2">
          <a href="#about" className="hover:text-amber-500 transition-colors">About</a>
          <a href="#coaching" className="hover:text-amber-500 transition-colors">Coaching</a>
          <a href="#consulting" className="hover:text-amber-500 transition-colors">Consulting</a>
          <a href="#book" className="hover:text-amber-500 transition-colors">Book</a>
          <a href="#shop" className="hover:text-amber-500 transition-colors">Shop</a>
          <a href="#journal" className="hover:text-amber-500 transition-colors">Journal</a>
        </div>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-2 lg:gap-2.5 xl:gap-3 shrink-0">
          
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Alignment Quiz Button */}
          <button
            onClick={onOpenQuiz}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-500 hover:bg-emerald-500/20 transition-all shadow-sm shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
            <span>Career Quiz</span>
          </button>

          {/* Cart Icon */}
          <button 
            onClick={onOpenCart}
            className="relative p-2 opacity-90 hover:opacity-100 hover:text-emerald-500 transition-colors shrink-0"
            aria-label="View Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 text-slate-950 font-bold text-[10px] flex items-center justify-center shadow-lg">
                {cartCount}
              </span>
            )}
          </button>

          {/* Book Clarity Call Button */}
          <button 
            onClick={onOpenBooking}
            className="gradient-btn px-3.5 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 shrink-0"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Clarity Call</span>
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />

          <button 
            onClick={onOpenCart}
            className="relative p-2 opacity-90 hover:opacity-100"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-500 text-slate-950 font-bold text-[10px] flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 opacity-90 hover:opacity-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[var(--bg-main)]/95 backdrop-blur-xl border-b border-[var(--border-subtle)] px-4 pt-4 pb-6 space-y-4">
          <div className="flex flex-col space-y-3 text-base font-medium opacity-90">
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#coaching" onClick={() => setMobileMenuOpen(false)}>Coaching</a>
            <a href="#consulting" onClick={() => setMobileMenuOpen(false)}>Consulting</a>
            <a href="#book" onClick={() => setMobileMenuOpen(false)}>Book</a>
            <a href="#shop" onClick={() => setMobileMenuOpen(false)}>Shop</a>
            <a href="#journal" onClick={() => setMobileMenuOpen(false)}>Journal</a>
          </div>

          <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-col gap-3">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenQuiz(); }}
              className="w-full py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/40 text-sm font-semibold text-amber-500 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Take Career Alignment Quiz</span>
            </button>

            <button
              onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
              className="w-full gradient-btn py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Clarity Call</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
