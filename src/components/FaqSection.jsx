import React, { useState } from 'react';
import { Search, ChevronDown, Sparkles, HelpCircle, Calendar } from 'lucide-react';
import logger from '../utils/logger';

const FAQS = [
  {
    id: 1,
    category: 'Coaching',
    question: 'What is the 1-on-1 Future Career Clarity Program?',
    answer: 'The program is a high-conviction 90-day coaching experience tailored for executives, senior leaders, and high-achieving professionals. It combines strategic workforce insights with deep self-leadership coaching to resolve career friction and build a clear 3-year direction.'
  },
  {
    id: 2,
    category: 'Coaching',
    question: 'How do I know if I am ready for Fatima’s coaching?',
    answer: 'If you have achieved professional momentum but feel a disconnect between your achievements and genuine purpose, or if you are preparing for a major executive pivot amid AI workplace shifts, this program is designed for you.'
  },
  {
    id: 3,
    category: 'Workforce Consulting',
    question: 'What corporate consulting services does Care to Voice offer?',
    answer: 'Fatima supports international organizations in Reward Strategy, Employee Value Proposition (EVP) alignment, Performance Management frameworks, and Workforce Change management during AI technology integration.'
  },
  {
    id: 4,
    category: 'The Book',
    question: 'Where can I purchase "Be The Reason You Thrive"?',
    answer: 'You can order the Hardcover and Digital editions directly from the Care to Voice Store on this website, or find it on major global online booksellers including Amazon & Barnes & Noble.'
  },
  {
    id: 5,
    category: 'Podcast & Merch',
    question: 'Is the Care to Voice Podcast free to listen to?',
    answer: 'Yes! The Care to Voice Podcast is available on Spotify, Apple Podcasts, and embedded directly on our website. Each episode offers high-value, actionable insights with no fluff.'
  },
  {
    id: 6,
    category: 'Booking & Payment',
    question: 'What happens during the initial 15-Minute Clarity Call?',
    answer: 'The Clarity Call is a confidential 1-on-1 conversation with Fatima to understand your current context, evaluate program fit, and map out recommended next steps. There is no pressure or hard sell.'
  }
];

export default function FaqSection({ onOpenBooking }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [openId, setOpenId] = useState(1);

  const categories = ['All', 'Coaching', 'Workforce Consulting', 'The Book', 'Booking & Payment'];

  const filteredFaqs = FAQS.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id) => {
    const nextId = openId === id ? null : id;
    setOpenId(nextId);
    logger.event('faq_toggled', { id, isOpening: !!nextId });
  };

  return (
    <section className="py-24 relative overflow-hidden border-t border-[var(--border-subtle)] bg-[#D8CFC0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold mb-4">
            Got Questions? <span className="gradient-text-emerald">We Have Answers</span>
          </h2>
          <p className="text-sm text-slate-400">
            Find details on Fatima's 1-on-1 coaching, corporate workforce consulting, book ordering, and booking process.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto mb-8">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-4" />
          <input
            type="text"
            placeholder="Search questions or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full glass-panel border border-[var(--border-subtle)] rounded-full pl-11 pr-4 py-3.5 text-xs focus:outline-none focus:border-emerald-500"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-md'
                  : 'glass-panel border border-[var(--border-subtle)] text-[var(--text-sub)] hover:border-emerald-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="glass-panel rounded-2xl border border-[var(--border-subtle)] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[var(--text-main)] hover:text-emerald-500 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-emerald-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-[var(--text-sub)] leading-relaxed border-t border-[var(--border-subtle)] animate-fadeIn">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="glass-panel p-8 rounded-2xl text-center text-[var(--text-sub)] text-xs">
              No matching questions found for "{searchQuery}". Try a different search term or book a call directly.
            </div>
          )}
        </div>

        {/* Bottom Booking CTA */}
        <div className="mt-12 text-center glass-panel p-6 rounded-3xl border border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-serif-heading text-lg font-bold text-[var(--text-main)]">Have a specific question for Fatima?</h4>
            <p className="text-xs text-[var(--text-sub)]">Schedule a 15-minute 1-on-1 Clarity Call to discuss directly.</p>
          </div>
          <button
            onClick={onOpenBooking}
            className="gradient-btn px-6 py-3 rounded-full text-xs font-bold shrink-0 shadow-lg flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Clarity Call</span>
          </button>
        </div>

      </div>
    </section>
  );
}
