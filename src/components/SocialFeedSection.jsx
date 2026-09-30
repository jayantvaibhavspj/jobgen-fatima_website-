import React from 'react';
import { ExternalLink, Heart, MessageCircle, Sparkles } from 'lucide-react';

const INSTA_POSTS = [
  {
    id: 1,
    image: 'https://static.wixstatic.com/media/68c1c8_4c4ba09289284e7f9711a6eb51186fbb~mv2.jpg/v1/crop/x_0,y_123,w_1067,h_1276/fill/w_856,h_1053,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/68c1c8_4c4ba09289284e7f9711a6eb51186fbb~mv2.jpg',
    caption: 'Reflecting on self-leadership, career direction, and why choosing purpose over comfort changes everything. #CareToVoice #CareerClarity',
    likes: 142,
    comments: 18,
    url: 'https://www.instagram.com/caretovoice/'
  },
  {
    id: 2,
    image: 'https://static.wixstatic.com/media/68c1c8_ba18aae42a4143ae829b2ff0693662bc~mv2.avif/v1/fill/w_532,h_848,al_c,q_85,enc_avif,quality_auto/Be%20the%20Reason%20You%20Thrive%20-%20Book.avif',
    caption: '“Be The Reason You Thrive” - Now available. A guide to uncovering what drives your decisions. 📖✨ #BeTheReasonYouThrive',
    likes: 210,
    comments: 34,
    url: 'https://www.instagram.com/caretovoice/'
  },
  {
    id: 3,
    image: 'https://static.wixstatic.com/media/68c1c8_1342928a601641e7ac4e5a3fecf67179~mv2.avif/v1/fill/w_600,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Care%20to%20Voice%20Podcast%20-%20Hero%20image.avif',
    caption: 'New episode alert 🎙️: "Navigating AI Transformation & Career Alignment". Listen now on Spotify & Apple Podcasts.',
    likes: 189,
    comments: 22,
    url: 'https://open.spotify.com/show/2LuHJAZ3Kc1DDHOAyAib2x'
  },
  {
    id: 4,
    image: 'https://static.wixstatic.com/media/68c1c8_0efff5a6c443434889e0a67e1c3b46cc~mv2.avif/v1/fill/w_722,h_924,al_c,q_85,enc_avif,quality_auto/Choose%20Direction%20Process.avif',
    caption: 'The Choose Direction Framework: Identifying friction points and building a 90-day trajectory. #WorkforceStrategy',
    likes: 165,
    comments: 15,
    url: 'https://www.facebook.com/caretovoice'
  }
];

export default function SocialFeedSection() {
  return (
    <section className="py-20 relative overflow-hidden border-t border-[var(--border-subtle)] bg-[#D4CBB9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold uppercase tracking-widest text-amber-500 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Social Community</span>
            </div>

            <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold">
              Follow <span className="gradient-text-primary">@caretovoice</span> on Instagram & Facebook
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://www.youtube.com/@FatimaCaretoVoice"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full text-xs font-bold text-white flex items-center gap-2.5 shadow-lg bg-[#FF0000] hover:bg-[#e60000] hover:scale-105 transition-transform"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>YouTube</span>
            </a>

            <a
              href="https://www.instagram.com/caretovoice/"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full text-xs font-bold text-white flex items-center gap-2.5 shadow-lg bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] hover:scale-105 transition-transform"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Instagram</span>
            </a>

            <a
              href="https://www.facebook.com/caretovoice"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full text-xs font-bold text-white flex items-center gap-2.5 shadow-lg bg-[#1877F2] hover:bg-[#166fe5] hover:scale-105 transition-transform"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Facebook</span>
            </a>
          </div>
        </div>

        {/* Feed Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTA_POSTS.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noreferrer"
              className="glass-panel glass-panel-hover rounded-3xl overflow-hidden flex flex-col justify-between group"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay hover badge */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 text-white font-bold text-sm">
                  <span className="flex items-center gap-1.5">
                    <Heart className="w-5 h-5 fill-white text-white" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageCircle className="w-5 h-5 fill-white text-white" />
                    {post.comments}
                  </span>
                </div>
              </div>

              <div className="p-4 flex flex-col justify-between flex-1">
                <p className="text-xs opacity-85 line-clamp-2 leading-relaxed mb-3">
                  {post.caption}
                </p>

                <div className="flex items-center justify-between text-[11px] font-bold text-amber-500 pt-2 border-t border-[var(--border-subtle)]">
                  <span>View Post</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
