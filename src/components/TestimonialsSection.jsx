import React, { useState } from 'react';
import { Star, Quote, Building2, UserCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionBackground from './SectionBackground';
import clientSarah from '../assets/client_sarah.jpg';
import clientDavid from '../assets/client_david.jpg';
import clientElena from '../assets/client_elena.jpg';
import clientMarcus from '../assets/client_marcus_test.jpg';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'VP of People & Culture',
    company: 'Macquarie Technology Group, Sydney',
    category: 'Workforce Change',
    rating: 5,
    avatar: clientSarah,
    quote: 'Fatima’s strategic insights on workforce alignment during our AI transition were transformative for our Sydney teams. She helped us preserve our human-centric culture while modernizing enterprise roles with genuine clarity.',
    highlight: 'Transformed our workforce culture during AI pivot'
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'Managing Director, Strategy & Capital',
    company: 'Melbourne Advisory Partners, Melbourne',
    category: 'Executive Advisory',
    rating: 5,
    avatar: clientDavid,
    quote: 'Coaching with Fatima gave me the clarity I needed after 15 years in corporate finance across Australia and APAC. I went from feeling stuck in momentum to stepping into an executive board position aligned with genuine conviction.',
    highlight: 'Found clear 3-year direction after 15 years in corporate'
  },
  {
    id: 3,
    name: 'Elena Rostova',
    role: 'Chief Operations Officer',
    company: 'Aurora BioTech Innovations, Brisbane',
    category: 'Career Pivots',
    rating: 5,
    avatar: clientElena,
    quote: 'Care to Voice is different from any coaching I’ve experienced in Australia. Fatima brings deep corporate rewards rigor combined with acute empathy. Her 90-day framework reshaped my leadership trajectory and executive presence.',
    highlight: 'Enterprise rigor combined with deep coaching empathy'
  },
  {
    id: 4,
    name: 'Marcus Vance',
    role: 'Head of Total Rewards & Workforce Strategy',
    company: 'ANZ Logistics & Supply Chain, Sydney',
    category: 'Workforce Change',
    rating: 5,
    avatar: clientMarcus,
    quote: 'Fatima’s reward strategy framework helped our Australian executive team align compensation metrics with actual employee purpose. Leadership retention improved by 34% in 6 months.',
    highlight: 'Improved executive retention by 34%'
  }
];

export default function TestimonialsSection({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = ['All', 'Workforce Change', 'Executive Advisory', 'Career Pivots'];

  const filtered = activeCategory === 'All'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.category === activeCategory);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filtered.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
  };

  const currentItem = filtered[currentIndex] || filtered[0];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden border-t border-amber-500/20 text-slate-900">
      {/* Bespoke Dynamic Background */}
      <SectionBackground variant="light" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold uppercase tracking-widest text-amber-600 mb-4">
            <Quote className="w-3.5 h-3.5" />
            <span>Executive Testimonials</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold text-[var(--text-main)] mb-4">
            Trusted by <span className="gradient-text-primary">Leaders & Enterprise Organisations</span>
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-sub)]">
            Discover how Fatima’s coaching and workforce consulting empower high-achieving leaders and companies to thrive with clarity.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setCurrentIndex(0);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/20'
                  : 'glass-panel border border-[var(--border-subtle)] text-slate-700 hover:text-slate-950 hover:border-amber-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Testimonial Card */}
        {currentItem && (
          <div className="max-w-4xl mx-auto glass-panel p-8 sm:p-12 rounded-3xl border border-[var(--border-subtle)] shadow-2xl relative">
            <Quote className="w-12 h-12 text-amber-500/15 absolute top-6 right-6 pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Author Bio & Avatar */}
              <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-[var(--border-subtle)] pb-6 md:pb-0 md:pr-8">
                <div className="relative mb-4 group">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-amber-500/50 shadow-xl bg-slate-100 flex items-center justify-center">
                    <img
                      src={currentItem.avatar}
                      alt={currentItem.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <h3 className="font-serif-heading text-lg font-bold text-slate-900 mb-1">
                  {currentItem.name}
                </h3>
                <p className="text-xs font-semibold text-amber-700 mb-1">{currentItem.role}</p>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-600 mb-3">
                  <Building2 className="w-3.5 h-3.5 text-slate-500" />
                  <span>{currentItem.company}</span>
                </div>

                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(currentItem.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>
              </div>

              {/* Right Column: Quote & Highlight */}
              <div className="md:col-span-8 flex flex-col justify-between">
                <span className="inline-block px-3 py-1 rounded-md bg-amber-500/10 text-amber-800 text-xs font-semibold mb-4 w-max">
                  "{currentItem.highlight}"
                </span>
                
                <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-serif-heading italic mb-6">
                  "{currentItem.quote}"
                </p>

                {/* Controls */}
                <div className="flex items-center justify-between pt-4 border-t border-[var(--border-subtle)]">
                  <div className="flex items-center gap-2">
                    {filtered.map((_, idx) => (
                      <span
                        key={idx}
                        className={`h-2 rounded-full transition-all ${
                          idx === currentIndex ? 'w-6 bg-amber-500' : 'w-2 bg-slate-300'
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={prevSlide}
                      className="p-2 rounded-full glass-panel hover:border-amber-500 text-slate-700 hover:text-slate-950 transition-all cursor-pointer"
                      aria-label="Previous Testimonial"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="p-2 rounded-full glass-panel hover:border-amber-500 text-slate-700 hover:text-slate-950 transition-all cursor-pointer"
                      aria-label="Next Testimonial"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* CTA Banner */}
        <div className="text-center mt-12">
          <button
            onClick={onOpenBooking}
            className="gradient-btn px-8 py-4 rounded-full text-xs font-bold text-slate-950 shadow-xl hover:scale-105 transition-transform"
          >
            Schedule Your Clarity Consultation with Fatima
          </button>
        </div>

      </div>
    </section>
  );
}
