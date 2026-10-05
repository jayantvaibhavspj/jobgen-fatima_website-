import React, { useState, useEffect } from 'react';
import { 
  Calendar, ShoppingBag, Menu, X, 
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
    { label: 'Book', page: 'book', section: 'book', icon: BookOpen, desc: 'Be The Reason You Thrive' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent ${
      isScrolled ? 'py-2.5 sm:py-3' : 'py-4 sm:py-5'
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
              <span className="font-serif-heading text-lg sm:text-xl font-bold tracking-tight block leading-tight text-slate-950 group-hover:text-amber-600 transition-colors">
                Care to Voice
              </span>
              <div className="flex items-center gap-1.5 text-[10px] tracking-wider uppercase font-semibold opacity-90 mt-0.5">
                <span className="text-slate-800">by Fatima</span>
              </div>
            </div>
          </a>
        </div>

        {/* Right Side: Navigation Links & Action Controls Grouped Together */}
        <div className="flex items-center gap-3 sm:gap-4 ml-auto">
          {/* Navigation Links in Words (Clean Transparent, Black Text) */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navItems.map((item) => {
              const isActive = activeView === item.page;

              return (
                <a
                  key={item.label}
                  href={`#${item.section}`}
                  onClick={(e) => handleLinkClick(e, item.page, item.section, item.tab)}
                  className={`px-3 xl:px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 tracking-wide ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 shadow-md'
                      : 'text-slate-950 hover:text-amber-600 hover:bg-slate-900/5'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Action Controls: Book Clarity Call & Cart */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Book Clarity Call Button */}
            <button 
              onClick={onOpenBooking}
              className="gradient-btn px-3.5 py-2 sm:px-4 sm:py-2 rounded-full text-xs font-extrabold flex items-center gap-1.5 shrink-0 shadow-md hover:scale-105 transition-transform cursor-pointer h-9"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Book Clarity Call</span>
              <span className="sm:hidden">Book Call</span>
            </button>

            {/* Cart Icon */}
            <button 
              onClick={onOpenCart}
              className="relative p-2 rounded-full transition-colors shrink-0 cursor-pointer h-9 w-9 flex items-center justify-center bg-slate-900/5 hover:bg-slate-900/10 text-slate-950 hover:text-amber-600"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4.5 h-4.5 rounded-full bg-amber-500 text-slate-950 font-bold text-[10px] flex items-center justify-center shadow-md">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Trigger (For screens below LG) */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-950 transition-colors"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
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
              <Compass className="w-4 h-4 text-amber-600" />
              <span>Take Career Alignment Quiz</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
