import React, { useState } from 'react';
import { BookOpen, Tag, ArrowUpRight, Clock, Sparkles } from 'lucide-react';

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
    snippet: 'Modern leadership isn’t about control—it’s about creating psychological safety and aligning total rewards with team purpose.',
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
    <section id="journal" className="py-24 relative overflow-hidden border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4">
            <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
            <span>Care to Voice Journal</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold mb-6">
            Insights on <span className="gradient-text-emerald">Growth & Leadership</span>
          </h2>

          <p className="text-base sm:text-lg opacity-85">
            Articles, perspectives, and practical frameworks designed to sharpen your thinking and elevate your career trajectory.
          </p>
        </div>

        {/* Tag Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedTag === tag
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/20'
                  : 'glass-panel opacity-80 hover:opacity-100 hover:border-emerald-500/50'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => onSelectArticle && onSelectArticle(article)}
              className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between text-xs opacity-75 mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 font-bold uppercase text-emerald-400">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 font-mono">
                    <Clock className="w-3.5 h-3.5 opacity-60" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="font-serif-heading text-xl sm:text-2xl font-bold mb-3 leading-snug group-hover:text-emerald-400 transition-colors">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm opacity-85 leading-relaxed mb-6">
                  {article.snippet}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-semibold text-emerald-400 group-hover:translate-x-1 transition-transform">
                <span>Read Article & Key Insights</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
