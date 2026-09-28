import React, { useState, useEffect } from 'react';
import { Calendar, ShoppingBag, Menu, X, Sparkles, Layout, Layers, Heart } from 'lucide-react';
import jobgenLogo from '../assets/jobgen_logo.png';

export default function Navbar({
  onOpenBooking,
  onOpenQuiz,
  cartCount,
  onOpenCart,
  activeView = 'all',
  onNavigate,
  viewMode = 'all',
  onToggleViewMode
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, targetPage, targetSection, coachingTab) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(targetPage, targetSection, coachingTab);
    }
  };

  const navItems = [
    { label: 'Home', page: 'all', section: 'home' },
    { label: 'About', page: 'about', section: 'about' },
    { label: 'Coaching', page: 'coaching', section: 'coaching', tab: 'coaching' },
    { label: 'Consulting', page: 'consulting', section: 'consulting', tab: 'consulting' },
    { label: 'Book', page: 'book', section: 'book' },
    { label: 'Shop', page: 'shop', section: 'shop' },
    { label: 'Journal', page: 'journal', section: 'journal' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[var(--border-subtle)] py-3 shadow-md' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, 'all', 'home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-12 h-12 relative shrink-0 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center translate-x-3.5">
              <img 
                src="https://static.wixstatic.com/media/68c1c8_573e9a752ee44101ac84e7049dc439b0~mv2.png/v1/fill/w_210,h_210,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/68c1c8_573e9a752ee44101ac84e7049dc439b0~mv2.png" 
                alt="Care to Voice Heart Emblem"
                className="w-full h-auto object-contain scale-110"
                style={{ clipPath: 'inset(4% 12% 33% 12%)' }}
              />
            </div>
            <div>
              <span className="font-serif-heading text-lg sm:text-xl font-bold tracking-tight logo-brand-text block leading-tight group-hover:text-amber-600 transition-colors">
                Care to Voice
              </span>
              <div className="text-[9px] sm:text-[10px] tracking-widest uppercase font-bold text-amber-600 block leading-none my-0.5">
                VOICE . LEAD . THRIVE.
              </div>
              <div className="flex items-center gap-1.5 text-[9px] tracking-wider uppercase font-medium opacity-85">
                <span className="logo-sub-text">by Fatima</span>
              </div>
            </div>
          </a>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-5 text-xs lg:text-sm font-semibold opacity-90 mx-2">
          {navItems.map((item) => {
            const isActive = activeView === item.page;
            return (
              <a
                key={item.label}
                href={`#${item.section}`}
                onClick={(e) => handleLinkClick(e, item.page, item.section, item.tab)}
                className={`px-3 py-1.5 rounded-full transition-all ${
                  isActive
                    ? 'bg-amber-500/10 text-amber-700 font-bold border border-amber-500/30 shadow-xs'
                    : 'hover:text-amber-600 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-2 lg:gap-2.5 shrink-0">

          {/* Alignment Quiz Button */}
          <button
            onClick={onOpenQuiz}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-semibold text-amber-700 hover:bg-amber-500/20 transition-all shadow-xs shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Career Quiz</span>
          </button>

          {/* Cart Icon */}
          <button 
            onClick={onOpenCart}
            className="relative p-2 opacity-90 hover:opacity-100 hover:text-amber-600 transition-colors shrink-0"
            aria-label="View Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-amber-500 text-slate-950 font-bold text-[10px] flex items-center justify-center shadow-lg">
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
        <div className="flex items-center gap-2 lg:hidden">
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
            className="p-2 opacity-90 hover:opacity-100 text-slate-800"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF9F6] border-b border-slate-200 px-4 pt-4 pb-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-2 text-base font-semibold text-slate-800">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={`#${item.section}`}
                onClick={(e) => handleLinkClick(e, item.page, item.section, item.tab)}
                className={`py-2 px-3 rounded-xl transition-colors ${
                  activeView === item.page ? 'bg-amber-500/10 text-amber-700 font-bold' : 'hover:bg-slate-100'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenQuiz(); }}
              className="w-full py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/40 text-sm font-semibold text-amber-700 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-600" />
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

