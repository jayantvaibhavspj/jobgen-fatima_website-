import React, { useState } from 'react';
import { Play, Eye, Clock, Sparkles, ExternalLink, X, Film, CheckCircle2, Volume2 } from 'lucide-react';

const YouTubeIcon = ({ className = "w-4 h-4" }) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const YOUTUBE_VIDEOS = [
  {
    id: 'video-1',
    title: 'Finding Executive Clarity in a Changing Workplace & AI Shift',
    youtubeId: '4d6M_4052rM',
    videoStreamUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    videoUrl: 'https://www.youtube.com/@FatimaCaretoVoice',
    thumbnail: 'https://static.wixstatic.com/media/68c1c8_4c4ba09289284e7f9711a6eb51186fbb~mv2.jpg/v1/crop/x_0,y_123,w_1067,h_1276/fill/w_856,h_1053,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/68c1c8_4c4ba09289284e7f9711a6eb51186fbb~mv2.jpg',
    duration: '14:25',
    views: '4.8k views',
    category: 'Executive Clarity',
    description: 'Fatima explores how senior professionals navigate organizational restructures, AI integration, and personal direction without losing core values.'
  },
  {
    id: 'video-2',
    title: 'Be The Reason You Thrive — Chapter 1 Deep Dive & Author Reflection',
    youtubeId: 'iCvmsMzlF7o',
    videoStreamUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    videoUrl: 'https://www.youtube.com/@FatimaCaretoVoice',
    thumbnail: 'https://static.wixstatic.com/media/68c1c8_ba18aae42a4143ae829b2ff0693662bc~mv2.avif/v1/fill/w_532,h_848,al_c,q_85,enc_avif,quality_auto/Be%20the%20Reason%20You%20Thrive%20-%20Book.avif',
    duration: '18:10',
    views: '6.2k views',
    category: 'Book Keynote',
    description: 'An exclusive walkthrough of the foundational principles in "Be The Reason You Thrive" — self-leadership, purpose, and overcoming career noise.'
  },
  {
    id: 'video-3',
    title: 'Overcoming Career Friction & Navigating Mid-Career Pivots',
    youtubeId: '2b-A4o3l1oA',
    videoStreamUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    videoUrl: 'https://www.youtube.com/@FatimaCaretoVoice',
    thumbnail: 'https://static.wixstatic.com/media/68c1c8_0efff5a6c443434889e0a67e1c3b46cc~mv2.avif/v1/fill/w_722,h_924,al_c,q_85,enc_avif,quality_auto/Choose%20Direction%20Process.avif',
    duration: '12:45',
    views: '3.9k views',
    category: 'Workforce Advisory',
    description: 'Practical strategies for leaders feeling stuck. Learn how to audit your career momentum and build a sustainable 90-day action plan.'
  },
  {
    id: 'video-4',
    title: 'Care to Voice Podcast: No Noise. Just Perspective',
    youtubeId: '2K_sQ1q2dFA',
    videoStreamUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyplays.mp4',
    videoUrl: 'https://www.youtube.com/@FatimaCaretoVoice',
    thumbnail: 'https://static.wixstatic.com/media/68c1c8_1342928a601641e7ac4e5a3fecf67179~mv2.avif/v1/fill/w_600,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Care%20to%20Voice%20Podcast%20-%20Hero%20image.avif',
    duration: '22:30',
    views: '7.5k views',
    category: 'Podcast Episode',
    description: 'Unfiltered conversations on organizational rewards, employee engagement, and empowering leadership voices.'
  }
];

export default function YouTubeSection() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeTab, setActiveTab] = useState('All');
  const [useYouTubeEmbed, setUseYouTubeEmbed] = useState(false);

  const categories = ['All', 'Executive Clarity', 'Book Keynote', 'Workforce Advisory', 'Podcast Episode'];

  const filteredVideos = activeTab === 'All'
    ? YOUTUBE_VIDEOS
    : YOUTUBE_VIDEOS.filter((v) => v.category === activeTab);

  return (
    <section id="youtube" className="py-24 relative overflow-hidden border-t border-[var(--border-subtle)]">
      
      {/* Background Subtle Red Radial Accent Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-bold uppercase tracking-widest text-red-500 mb-3 shadow-md">
              <Film className="w-4 h-4 text-red-500" />
              <span>Direct HD Video Masterclasses</span>
            </div>

            <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold tracking-tight">
              Watch Masterclasses in <span className="text-red-500">1080p HD</span>
            </h2>
            <p className="text-sm opacity-80 max-w-2xl mt-2 leading-relaxed">
              Play Fatima’s official masterclasses, book deep dives, and podcast episodes directly on this website in ultra high definition.
            </p>
          </div>

          <a
            href="https://www.youtube.com/@FatimaCaretoVoice"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs flex items-center justify-center gap-2.5 shadow-xl transition-all duration-300 transform hover:scale-105 shrink-0"
          >
            <YouTubeIcon className="w-4 h-4 fill-white" />
            <span>Official YouTube Channel</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all shrink-0 border ${
                activeTab === cat
                  ? 'bg-red-600 text-white border-red-500 shadow-lg shadow-red-600/30'
                  : 'glass-panel text-[var(--text-main)] border-[var(--border-subtle)] hover:border-red-500/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="glass-panel glass-panel-hover rounded-3xl overflow-hidden flex flex-col justify-between group border border-[var(--border-subtle)] shadow-xl"
            >
              {/* Thumbnail Container */}
              <div
                className="relative aspect-video overflow-hidden cursor-pointer group"
                onClick={() => {
                  setSelectedVideo(video);
                  setUseYouTubeEmbed(false);
                }}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-white ml-1" />
                  </div>
                </div>

                {/* HD Quality Badge */}
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-red-600 text-white text-[9px] font-black tracking-widest shadow-md">
                  1080p HD
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-black/80 text-white text-[10px] font-bold flex items-center gap-1">
                  <Clock className="w-3 h-3 text-red-400" />
                  <span>{video.duration}</span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-red-400 text-[9px] font-extrabold uppercase tracking-wider border border-red-500/30">
                  {video.category}
                </div>
              </div>

              {/* Info Body */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-bold text-sm leading-snug line-clamp-2 mb-2 group-hover:text-red-400 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-xs opacity-75 line-clamp-2 leading-relaxed mb-4">
                    {video.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[var(--border-subtle)] text-[11px] font-semibold opacity-80">
                  <span className="flex items-center gap-1.5 text-amber-500">
                    <Eye className="w-3.5 h-3.5" />
                    {video.views}
                  </span>

                  <button
                    onClick={() => {
                      setSelectedVideo(video);
                      setUseYouTubeEmbed(false);
                    }}
                    className="text-red-500 hover:text-red-400 font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <span>Play HD Video</span>
                    <Play className="w-3 h-3 fill-current" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Video Player Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
            <div className="glass-panel w-full max-w-5xl rounded-3xl overflow-hidden border border-red-500/40 shadow-2xl relative flex flex-col max-h-[92vh]">
              
              {/* Modal Header Bar */}
              <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center text-white shrink-0 shadow-md">
                    <Play className="w-4 h-4 fill-white ml-0.5" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-red-600/30 border border-red-500/40 text-red-400 text-[10px] font-black uppercase tracking-wider">
                        1080p Ultra HD
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium hidden sm:inline">• Care to Voice Masterclasses</span>
                    </div>
                    <h4 className="font-bold text-sm text-white truncate mt-0.5">{selectedVideo.title}</h4>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setUseYouTubeEmbed(!useYouTubeEmbed)}
                    className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700 transition-all border border-slate-700"
                  >
                    {useYouTubeEmbed ? 'Switch to Native HD Video' : 'Switch to YouTube Embed'}
                  </button>
                  <button
                    onClick={() => setSelectedVideo(null)}
                    className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Direct HD Video Player Frame */}
              <div className="relative aspect-video bg-slate-950 flex items-center justify-center overflow-hidden">
                {useYouTubeEmbed ? (
                  <iframe
                    className="w-full h-full border-0"
                    src={`https://www.youtube.com/embed/${selectedVideo.youtubeId || '4d6M_4052rM'}?autoplay=1&rel=0`}
                    title={selectedVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-contain bg-black"
                    poster={selectedVideo.thumbnail}
                    src={selectedVideo.videoStreamUrl}
                  >
                    Your browser does not support HD video playback.
                  </video>
                )}
              </div>

              {/* Modal Footer Bar */}
              <div className="p-4 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Playing directly on <strong>Care to Voice Website</strong> in High Definition.</span>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="https://www.youtube.com/@FatimaCaretoVoice"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-lg transition-all hover:scale-105"
                  >
                    <YouTubeIcon className="w-4 h-4 fill-white" />
                    <span>Visit @FatimaCaretoVoice</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
