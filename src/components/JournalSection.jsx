import React, { useState } from 'react';
import { Tag, ArrowUpRight, Clock } from 'lucide-react';
import SectionBackground from './SectionBackground';

const ARTICLES = [
  {
    id: 1,
    title: 'Navigating Career Alignment in the Age of AI Transformation',
    category: 'Future of Work',
    readTime: '5 min read',
    date: 'Sep 18, 2026',
    snippet: 'Why technical skills alone aren’t enough to stay relevant, and how emotional clarity becomes your greatest competitive advantage.',
    link: 'https://www.caretovoice.com/professional-growth'
  },
  {
    id: 2,
    title: 'The Art of Reinvention: Leaving Comfort for True Purpose',
    category: 'Reinvention',
    readTime: '7 min read',
    date: 'Sep 12, 2026',
    snippet: 'Recognizing when past success turns into present stagnation, and how to execute a high-conviction transition.',
    link: 'https://www.caretovoice.com/reinvention'
  },
  {
    id: 3,
    title: 'Enabling Leadership: How High-Performing Managers Build Trust',
    category: 'Leadership',
    readTime: '6 min read',
    date: 'Aug 29, 2026',
    snippet: 'Modern leadership isn’t about control, it’s about creating psychological safety and aligning total rewards with team purpose.',
    link: 'https://www.caretovoice.com/enabling-leadership'
  },
  {
    id: 4,
    title: 'Cultivating Inner Balance Amidst High-Stakes Demands',
    category: 'Wellbeing',
    readTime: '4 min read',
    date: 'Aug 15, 2026',
    snippet: 'How corporate executives prevent burnout by anchoring decisions in core personal values rather than reactive fire-fighting.',
    link: 'https://www.caretovoice.com/inner-balance'
  }
];

export default function JournalSection({ onSelectArticle }) {
  const [selectedTag, setSelectedTag] = useState('All');

  const tags = ['All', 'Future of Work', 'Reinvention', 'Leadership', 'Wellbeing'];

  const filteredArticles = selectedTag === 'All'
    ? ARTICLES
    : ARTICLES.filter(a => a.category === selectedTag);

  return (
    <section id="journal" className="py-24 relative overflow-hidden border-t border-slate-200/80 text-slate-900">
      
      {/* Bespoke Dynamic Background */}
      <SectionBackground variant="light" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold mb-6 text-slate-900">
            Insights on <span className="gradient-text-primary">Growth & Leadership</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium">
            Articles, perspectives, and practical frameworks designed to sharpen your thinking and elevate your career trajectory.
          </p>
        </div>

        {/* Tag Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-5 py-2.5 rounded-full text-xs transition-all cursor-pointer ${
                selectedTag === tag
                  ? 'journal-tag-active text-white shadow-lg border border-amber-600'
                  : 'journal-tag-inactive text-slate-800 hover:border-amber-500 hover:text-amber-700 shadow-xs'
              }`}
            >
              <span className={selectedTag === tag ? 'text-white font-extrabold tracking-wide' : 'text-slate-800 font-bold'}>
                {tag}
              </span>
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => onSelectArticle && onSelectArticle(article)}
              className="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between group cursor-pointer border border-slate-200/90 shadow-xl hover:shadow-2xl hover:border-amber-500/50 transition-all text-slate-900"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 font-bold uppercase text-amber-700">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 font-mono">
                    <Clock className="w-3.5 h-3.5 opacity-70 text-amber-600" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="font-serif-heading text-xl sm:text-2xl font-bold mb-3 leading-snug text-slate-900 group-hover:text-amber-600 transition-colors">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {article.snippet}
                </p>
              </div>

              <div className="pt-4 border-t border-amber-500/20 flex items-center justify-between text-xs font-bold text-amber-700 group-hover:text-amber-800 group-hover:translate-x-1 transition-transform">
                <span>Read Article & Key Insights</span>
                <ArrowUpRight className="w-4 h-4 text-amber-600" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
