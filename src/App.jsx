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
        isAudioPlaying={isAudioPlaying}
        toggleAudio={toggleAudio}
      />

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

      {/* Footer */}
      <Footer
        onOpenBooking={handleOpenBooking}
      />

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
