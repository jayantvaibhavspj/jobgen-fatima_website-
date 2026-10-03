import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import CoachingPrograms from './components/CoachingPrograms';
import BookSection from './components/BookSection';
import PodcastPlayer from './components/PodcastPlayer';
import YouTubeSection from './components/YouTubeSection';
import ShopSection from './components/ShopSection';
import JournalSection from './components/JournalSection';
import SocialFeedSection from './components/SocialFeedSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import CareerQuizModal from './components/CareerQuizModal';
import BookingModal from './components/BookingModal';
import CareerCalculatorModal from './components/CareerCalculatorModal';
import JournalModal from './components/JournalModal';
import Chatbot from './components/Chatbot';
import VoiceCanvas from './components/VoiceCanvas';
import logger from './utils/logger';
import { ArrowLeft, Layers, Layout } from 'lucide-react';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [selectedJournalArticle, setSelectedJournalArticle] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    { id: 'book-hardcover', title: 'Be The Reason You Thrive (Hardcover)', price: 24.99, quantity: 1 }
  ]);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [activeView, setActiveView] = useState('all');
  const [coachingTab, setCoachingTab] = useState('coaching');
  const [viewMode, setViewMode] = useState('all'); // 'all' (Full Landing Page) or 'pages' (Dedicated Views)

  useEffect(() => {
    logger.info('System', 'Care to Voice application initialized');
  }, []);

  const handleOpenBooking = () => {
    logger.event('booking_modal_opened');
    setIsBookingOpen(true);
  };

  const handleOpenQuiz = () => {
    logger.event('quiz_modal_opened');
    setIsQuizOpen(true);
  };

  const handleOpenCalculator = () => {
    logger.event('calculator_modal_opened');
    setIsCalculatorOpen(true);
  };

  const handleOpenCart = () => {
    logger.event('cart_drawer_opened');
    setIsCartOpen(true);
  };

  const handleAddToCart = (product) => {
    logger.event('item_added_to_cart', product);
    setCartItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity = (updated[existingIndex].quantity || 1) + 1;
        return updated;
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (index) => {
    logger.event('item_removed_from_cart', { index });
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const toggleAudio = () => {
    const nextState = !isAudioPlaying;
    logger.event('audio_teaser_toggled', { isPlaying: nextState });
    setIsAudioPlaying(nextState);
  };

  const handleNavigate = (pageId, sectionId, tabId) => {
    setActiveView(pageId);
    if (tabId) {
      setCoachingTab(tabId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] font-sans selection:bg-amber-500 selection:text-slate-950 transition-colors duration-300">
      
      {/* Global Dynamic Interactive Background Canvas */}
      <VoiceCanvas isPlaying={isAudioPlaying} />

      {/* Navigation */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onOpenQuiz={handleOpenQuiz}
        cartCount={cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0)}
        onOpenCart={handleOpenCart}
        activeView={activeView}
        onNavigate={handleNavigate}
      />

      {/* MAIN CONTENT DISPLAY */}
      {activeView === 'all' ? (
        /* ========================================================= */
        /* FULL LANDING PAGE MODE (ALL SECTIONS TOGETHER)            */
        /* ========================================================= */
        <>
          {/* Hero Section */}
          <Hero
            onOpenBooking={handleOpenBooking}
            onOpenQuiz={handleOpenQuiz}
            isAudioPlaying={isAudioPlaying}
            toggleAudio={toggleAudio}
          />

          {/* About Fatima Founder Spotlight */}
          <AboutSection
            onOpenBooking={handleOpenBooking}
          />

          {/* Coaching & Corporate Workforce Consulting */}
          <CoachingPrograms
            onOpenBooking={handleOpenBooking}
            onOpenCalculator={handleOpenCalculator}
            activeTabProp={coachingTab}
            onTabChange={(tab) => setCoachingTab(tab)}
          />

          {/* Executive Testimonials Carousel */}
          <TestimonialsSection
            onOpenBooking={handleOpenBooking}
          />

          {/* Book Showcase */}
          <BookSection
            onAddToCart={handleAddToCart}
            onOpenBooking={handleOpenBooking}
          />

          {/* Podcast Player */}
          <PodcastPlayer
            isAudioPlaying={isAudioPlaying}
            toggleAudio={toggleAudio}
          />

          {/* Official YouTube Channel Masterclasses */}
          <YouTubeSection />

          {/* Shop & Merchandise */}
          <ShopSection
            onAddToCart={handleAddToCart}
            cartItems={cartItems}
            isCartOpen={isCartOpen}
            setIsCartOpen={setIsCartOpen}
            onRemoveFromCart={handleRemoveFromCart}
            isHomePage={true}
            onNavigate={handleNavigate}
          />

          {/* Social Media Feed (Instagram & Facebook) */}
          <SocialFeedSection />

          {/* Journal & Articles */}
          <JournalSection
            onSelectArticle={(article) => setSelectedJournalArticle(article)}
          />

          {/* Frequently Asked Questions */}
          <FaqSection
            onOpenBooking={handleOpenBooking}
          />
        </>
      ) : (
        /* ========================================================= */
        /* DEDICATED DETAILED PAGE VIEW MODE                         */
        /* ========================================================= */
        <div className="pt-28 pb-16 min-h-[75vh]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Top Page Header & Breadcrumb */}
            <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 glass-panel p-5 sm:p-6 rounded-3xl border border-[var(--border-subtle)] shadow-sm">
              <div>
                <div className="flex items-center gap-2 text-xs text-amber-700 font-bold uppercase tracking-wider mb-1">
                  <button onClick={() => handleNavigate('all')} className="hover:underline text-amber-700">Home</button>
                  <span>/</span>
                  <span className="capitalize text-slate-900 font-bold">{activeView}</span>
                </div>
                <h1 className="font-serif-heading text-2xl sm:text-3xl font-bold text-slate-900 capitalize">
                  {activeView === 'about' && 'About Fátima Y. Abreu Arellano & Philosophy'}
                  {activeView === 'coaching' && 'Career Clarity Coaching Programs'}
                  {activeView === 'consulting' && 'Total Rewards & Workforce Consulting'}
                  {activeView === 'book' && 'Be The Reason You Thrive: Published Book'}
                  {activeView === 'shop' && 'Thrive Collection & Store'}
                  {activeView === 'journal' && 'Reflections, Articles & Journal'}
                </h1>
              </div>

              <button
                onClick={() => handleNavigate('all')}
                className="px-4 py-2.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-800 hover:border-amber-500 hover:text-amber-700 transition-all flex items-center gap-2 shadow-xs shrink-0"
              >
                <ArrowLeft className="w-4 h-4 text-amber-600" />
                <span>Back to Full Home Landing Page</span>
              </button>
            </div>

            {/* Detailed View Component Content */}
            {activeView === 'about' && (
              <div className="space-y-12">
                <AboutSection onOpenBooking={handleOpenBooking} />
                <TestimonialsSection onOpenBooking={handleOpenBooking} />
                <FaqSection onOpenBooking={handleOpenBooking} />
              </div>
            )}

            {activeView === 'coaching' && (
              <div className="space-y-12">
                <CoachingPrograms
                  onOpenBooking={handleOpenBooking}
                  onOpenCalculator={handleOpenCalculator}
                  activeTabProp="coaching"
                  onTabChange={(tab) => setCoachingTab(tab)}
                />
                <TestimonialsSection onOpenBooking={handleOpenBooking} />
                <FaqSection onOpenBooking={handleOpenBooking} />
              </div>
            )}

            {activeView === 'consulting' && (
              <div className="space-y-12">
                <CoachingPrograms
                  onOpenBooking={handleOpenBooking}
                  onOpenCalculator={handleOpenCalculator}
                  activeTabProp="consulting"
                  onTabChange={(tab) => setCoachingTab(tab)}
                />
                <TestimonialsSection onOpenBooking={handleOpenBooking} />
                <FaqSection onOpenBooking={handleOpenBooking} />
              </div>
            )}

            {activeView === 'book' && (
              <div className="space-y-12">
                <BookSection onAddToCart={handleAddToCart} onOpenBooking={handleOpenBooking} />
                <PodcastPlayer isAudioPlaying={isAudioPlaying} toggleAudio={toggleAudio} />
                <YouTubeSection />
              </div>
            )}

            {activeView === 'shop' && (
              <div className="space-y-12">
                <ShopSection
                  onAddToCart={handleAddToCart}
                  cartItems={cartItems}
                  isCartOpen={isCartOpen}
                  setIsCartOpen={setIsCartOpen}
                  onRemoveFromCart={handleRemoveFromCart}
                  isHomePage={false}
                  onNavigate={handleNavigate}
                />
                <TestimonialsSection onOpenBooking={handleOpenBooking} />
              </div>
            )}

            {activeView === 'journal' && (
              <div className="space-y-12">
                <JournalSection onSelectArticle={(article) => setSelectedJournalArticle(article)} />
                <SocialFeedSection />
              </div>
            )}

            {/* Bottom Return to Home Button */}
            <div className="mt-16 text-center pt-8 border-t border-[var(--border-subtle)]">
              <button
                onClick={() => handleNavigate('all')}
                className="gradient-btn-outline px-8 py-3.5 rounded-full text-xs font-bold inline-flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4 text-amber-600" />
                <span>Return to Full Home Landing Page</span>
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Interactive AI Chatbot Assistant */}
      <Chatbot
        onOpenBooking={handleOpenBooking}
        onOpenQuiz={handleOpenQuiz}
        onOpenCart={handleOpenCart}
      />

      {/* Modals */}
      <CareerQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onOpenBooking={handleOpenBooking}
      />

      <CareerCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        onOpenBooking={handleOpenBooking}
      />

      <JournalModal
        article={selectedJournalArticle}
        onClose={() => setSelectedJournalArticle(null)}
        onOpenBooking={handleOpenBooking}
      />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

    </div>
  );
}

