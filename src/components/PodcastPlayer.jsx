import React, { useState, useRef } from 'react';
import { Mic, Play, Pause, SkipForward, SkipBack, Volume2, ExternalLink, Radio, FileText, Sparkles, X } from 'lucide-react';

const EPISODES = [
  {
    id: 1,
    title: 'EP 01: Navigating AI Transformation & Career Re-alignment',
    duration: '24 min',
    date: 'Sep 2026',
    description: 'How to maintain your strategic edge when technology shifts the landscape. Finding confidence amidst evolving expectations.',
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=ambient-piano-amp-strings-10711.mp3'
  },
  {
    id: 2,
    title: 'EP 02: Breaking Free From Golden Handcuffs',
    duration: '19 min',
    date: 'Aug 2026',
    description: 'Recognizing when high financial rewards no longer compensate for emotional misalignment, and how to plan a safe exit strategy.',
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a8e169.mp3?filename=soft-ambient-11003.mp3'
  },
  {
    id: 3,
    title: 'EP 03: Enabling Leadership & Total Rewards Strategy',
    duration: '31 min',
    date: 'Jul 2026',
    description: 'For corporate managers & HR leaders: Structuring compensation and culture that truly retains peak performers.',
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=inspire-10495.mp3'
  }
];

export default function PodcastPlayer({ isAudioPlaying, toggleAudio }) {
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const audioRef = useRef(null);

  const podcastHeroImageUrl = "https://static.wixstatic.com/media/68c1c8_1342928a601641e7ac4e5a3fecf67179~mv2.avif/v1/fill/w_600,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Care%20to%20Voice%20Podcast%20-%20Hero%20image.avif";

  const activeEp = EPISODES[currentEpisodeIndex];

  const handleTogglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleSelectEpisode = (index) => {
    setCurrentEpisodeIndex(index);
    setIsPlaying(true);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    }, 100);
  };

  return (
    <section id="podcast" className="py-24 relative overflow-hidden border-t border-[var(--border-subtle)]">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />

      <audio
        ref={audioRef}
        src={activeEp.audioUrl}
        onEnded={() => setIsPlaying(false)}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold uppercase tracking-widest text-amber-500 mb-4">
            <Radio className="w-3.5 h-3.5" />
            <span>Care to Voice Podcast</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold mb-6">
            Conversations That Shift Your <span className="gradient-text-primary">Perspective</span>
          </h2>

          <p className="text-base sm:text-lg opacity-85">
            No noise. Just high-conviction insights on navigating change, making hard career decisions, and choosing your next direction.
          </p>
        </div>

        {/* Podcast Player Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Podcast Hero Artwork Card */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative group max-w-xs w-full">
              <div className="absolute -inset-3 bg-gradient-to-tr from-amber-500/30 to-rose-500/30 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
              <div className="relative rounded-2xl overflow-hidden glass-panel shadow-2xl">
                <img
                  src={podcastHeroImageUrl}
                  alt="Care to Voice Podcast Official Hero Artwork"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Active Episode Player Card */}
          <div className="lg:col-span-8 glass-panel rounded-3xl p-6 sm:p-8 shadow-2xl relative">
            
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-bold text-amber-500 uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
                Now Playing Episode {activeEp.id}
              </span>
              <span className="text-xs font-mono opacity-75">{activeEp.duration} • {activeEp.date}</span>
            </div>

            <h3 className="font-serif-heading text-xl sm:text-2xl font-bold mb-3 leading-snug">
              {activeEp.title}
            </h3>

            <p className="text-sm opacity-85 mb-8 leading-relaxed">
              {activeEp.description}
            </p>

            {/* Audio Waveform Graphic */}
            <div className="glass-panel rounded-2xl p-4 border border-[var(--border-subtle)] mb-6 flex items-center justify-between gap-4">
              
              <button
                onClick={handleTogglePlay}
                className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 to-rose-500 text-slate-950 flex items-center justify-center shadow-lg shadow-amber-500/20 hover:scale-105 transition-transform shrink-0"
              >
                {isPlaying ? <Pause className="w-6 h-6 fill-slate-950 text-slate-950" /> : <Play className="w-6 h-6 fill-slate-950 text-slate-950 ml-0.5" />}
              </button>

              {/* Dynamic waveform bars */}
              <div className="flex items-center gap-1.5 h-10 flex-1 justify-center px-4 overflow-hidden">
                {[40, 65, 30, 85, 45, 95, 60, 35, 75, 50, 90, 40, 70, 80, 45, 60, 85, 35, 90, 50, 65].map((h, i) => (
                  <span
                    key={i}
                    className={`w-1 rounded-full transition-all duration-300 ${
                      isPlaying ? 'bg-gradient-to-t from-amber-500 to-rose-500 animate-wave-bar' : 'opacity-30 bg-current'
                    }`}
                    style={{
                      height: isPlaying ? `${h}%` : '20%',
                      animationDelay: `${i * 0.05}s`
                    }}
                  />
                ))}
              </div>

              <button
                onClick={() => setShowTranscript(true)}
                className="p-3 rounded-xl glass-panel hover:border-amber-500 transition-colors shrink-0"
                title="View Episode Transcript"
              >
                <FileText className="w-5 h-5 text-amber-500" />
              </button>

            </div>

            {/* Playlist Episode Switcher */}
            <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-500 block mb-2">Select Podcast Episode:</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {EPISODES.map((ep, idx) => (
                  <button
                    key={ep.id}
                    onClick={() => handleSelectEpisode(idx)}
                    className={`p-3 rounded-xl border text-left text-xs transition-all ${
                      currentEpisodeIndex === idx
                        ? 'border-amber-500 bg-amber-500/10 text-amber-400 font-bold shadow-md'
                        : 'glass-panel opacity-80 hover:opacity-100 hover:border-amber-500/40'
                    }`}
                  >
                    <div className="font-bold line-clamp-1">{ep.title}</div>
                    <div className="text-[10px] opacity-75 mt-0.5">{ep.duration} • {ep.date}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* External Platform Links */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[var(--border-subtle)]">
              <span className="text-xs font-semibold opacity-75">Available on:</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://open.spotify.com/show/2LuHJAZ3Kc1DDHOAyAib2x"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/40 text-xs font-semibold text-amber-500 hover:bg-amber-500/20 transition-colors flex items-center gap-1.5"
                >
                  <span>Listen on Spotify</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://podcasts.apple.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-full glass-panel text-xs font-semibold hover:border-amber-500 transition-colors flex items-center gap-1.5"
                >
                  <span>Apple Podcasts</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Transcript Modal */}
      {showTranscript && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl glass-panel rounded-3xl p-6 sm:p-8 border border-amber-500/40 shadow-2xl max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setShowTranscript(false)}
              className="absolute top-5 right-5 p-2 rounded-full opacity-70 hover:opacity-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-5 h-5 text-amber-500" />
              <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
                Episode Transcript Excerpt
              </span>
            </div>

            <h3 className="font-serif-heading text-xl font-bold mb-4">
              {activeEp.title}
            </h3>

            <div className="text-sm opacity-90 space-y-4 leading-relaxed font-sans border-t border-[var(--border-subtle)] pt-4">
              <p><strong className="text-amber-500">Fatima:</strong> "Welcome back to Care to Voice. Today, we're addressing one of the most frequent conversations I have with leaders: how do you navigate career choices when AI and market disruptions are reshaping what valuable skills look like?"</p>
              <p><strong className="text-amber-500">Fatima:</strong> "The mistake most professionals make is trying to compete with automation on raw execution. Real alignment comes from doubling down on your strategic judgment, emotional clarity, and decision-making framework."</p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
