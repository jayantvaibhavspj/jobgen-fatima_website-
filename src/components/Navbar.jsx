import React, { useState, useEffect } from 'react';
import { 
  Calendar, ShoppingBag, Menu, X, Sparkles, 
  Home, User, Compass, Briefcase, BookOpen, Newspaper
} from 'lucide-react';
import careToVoiceLogo from '../assets/care_to_voice_heart_logo.png';

export default function Navbar({
  onOpenBooking,
  onOpenQuiz,
  cartCount,
  onOpenCart,
  activeView = 'all',
  onNavigate
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
    { label: 'Home', page: 'all', section: 'home', icon: Home, desc: 'Overview & Main Portal' },
    { label: 'About', page: 'about', section: 'about', icon: User, desc: 'Fatima’s Mission & Philosophy' },
    { label: 'Coaching', page: 'coaching', section: 'coaching', tab: 'coaching', icon: Compass, desc: '1-on-1 Executive Coaching' },
    { label: 'Consulting', page: 'consulting', section: 'consulting', tab: 'consulting', icon: Briefcase, desc: 'Workforce & AI Strategy' },
    { label: 'Book', page: 'book', section: 'book', icon: BookOpen, desc: 'Be The Reason You Thrive' },
    { label: 'Shop', page: 'shop', section: 'shop', icon: ShoppingBag, desc: 'Workbooks, Journals & Merch' },
    { label: 'Journal', page: 'journal', section: 'journal', icon: Newspaper, desc: 'Articles & Masterclasses' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[var(--border-subtle)] py-3 shadow-md' : 'bg-transparent py-4 sm:py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Top Left: Logo & Brand Name */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, 'all', 'home')}
            className="flex items-center gap-3 group shrink-0"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 relative shrink-0 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
              <img 
                src={careToVoiceLogo} 
                alt="Care to Voice Logo"
                className="w-full h-full object-contain filter drop-shadow-sm"
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

        {/* Top Right: Combined Action Controls & Sleek Compact Icon Capsule */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">

          {/* Compact Icon Capsule Rail (Sized matching Career Quiz button height ~36px) */}
          <div className="hidden lg:flex items-center gap-1 p-1 bg-white/95 backdrop-blur-xl border border-amber-500/30 rounded-full shadow-xs">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeView === item.page;

              return (
                <a
                  key={item.label}
                  href={`#${item.section}`}
                  onClick={(e) => handleLinkClick(e, item.page, item.section, item.tab)}
                  className={`relative group w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-tr from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-extrabold shadow-xs border border-amber-300/60 scale-105'
                      : 'text-slate-600 hover:text-amber-700 hover:bg-amber-500/15 hover:scale-105'
                  }`}
                  aria-label={item.label}
                >
                  <IconComponent className="w-3.5 h-3.5" />

                  {/* Hover Pop-Up Tooltip */}
                  <div className="absolute top-full mt-2 px-2.5 py-1 rounded-xl bg-slate-900/95 border border-amber-500/40 text-white text-[11px] font-medium shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 translate-y-1 group-hover:translate-y-0 z-50 flex flex-col items-center backdrop-blur-md">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span className="font-bold text-amber-300 tracking-wide">{item.label}</span>
                    </div>
                    {/* Tooltip top arrow */}
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45 border-t border-l border-amber-500/40" />
                  </div>
                </a>
              );
            })}
          </div>

          {/* Alignment Quiz Button */}
          <button
            onClick={onOpenQuiz}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-semibold text-amber-700 hover:bg-amber-500/20 transition-all shadow-xs shrink-0 cursor-pointer h-9"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Career Quiz</span>
          </button>

          {/* Cart Icon */}
          <button 
            onClick={onOpenCart}
            className="relative p-2 rounded-full bg-slate-900/5 hover:bg-slate-900/10 opacity-90 hover:opacity-100 hover:text-amber-600 transition-colors shrink-0 cursor-pointer h-9 w-9 flex items-center justify-center"
            aria-label="View Cart"
          >
            <ShoppingBag className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4.5 h-4.5 rounded-full bg-amber-500 text-slate-950 font-bold text-[10px] flex items-center justify-center shadow-md">
                {cartCount}
              </span>
            )}
          </button>

          {/* Book Clarity Call Button */}
          <button 
            onClick={onOpenBooking}
            className="gradient-btn px-3.5 py-2 sm:px-4 sm:py-2 rounded-full text-xs font-extrabold flex items-center gap-1.5 shrink-0 shadow-md hover:scale-105 transition-transform cursor-pointer h-9"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Book Clarity Call</span>
            <span className="sm:hidden">Book Call</span>
          </button>

          {/* Mobile Menu Trigger (For screens below LG) */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-800"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu (Screens below LG) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF9F6] border-b border-slate-200 px-4 pt-4 pb-6 space-y-4 shadow-2xl animate-fadeIn">
          <div className="flex flex-col space-y-2 text-sm font-semibold text-slate-800">
            {navItems.map((item) => {
              const IconComp = item.icon;
              const isActive = activeView === item.page;

              return (
                <a
                  key={item.label}
                  href={`#${item.section}`}
                  onClick={(e) => handleLinkClick(e, item.page, item.section, item.tab)}
                  className={`flex items-center gap-3 py-2.5 px-3 rounded-xl transition-colors ${
                    isActive ? 'bg-amber-500/10 text-amber-700 font-bold border border-amber-500/30' : 'hover:bg-slate-100'
                  }`}
                >
                  <IconComp className="w-4 h-4 text-amber-600" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenQuiz(); }}
              className="w-full py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/40 text-xs font-bold text-amber-700 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Take Career Alignment Quiz</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
