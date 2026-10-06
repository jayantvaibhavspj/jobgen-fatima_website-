import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, ExternalLink, Award, Headphones, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionBackground from './SectionBackground';

import ep1Img from '../assets/podcast_episodes/ep1.jpg';
import ep2Img from '../assets/podcast_episodes/ep2.jpg';
import ep3Img from '../assets/podcast_episodes/ep3.jpg';
import ep4Img from '../assets/podcast_episodes/ep4.jpg';
import ep5Img from '../assets/podcast_episodes/ep5.jpg';
import ep6Img from '../assets/podcast_episodes/ep6.jpg';
import ep7Img from '../assets/podcast_episodes/ep7.jpg';
import ep8Img from '../assets/podcast_episodes/ep8.jpg';

const EPISODES = [
  {
    id: 1,
    title: 'Why Care to Voice Matters',
    guest: 'Fatima Abreu',
    role: 'Founder & Career Clarity Coach',
    duration: '7 min 40 sec',
    date: 'May 2026',
    thumbnail: ep1Img,
    spotifyUrl: 'https://open.spotify.com/episode/7gzTMXApwqbrkKSOLD9r5a',
    audioUrl: 'https://p.scdn.co/mp3-preview/c1a99952faf933d8aa2329940701fe8623627079.mp3',
    description: 'What happens when your career looks successful on the outside… but you’re no longer sure it’s the right path for you? Welcome to the Care to Voice podcast: Career Clarity in a Changing World. I’m Fatima Abreu, Career Clarity Coach, founder of Care to Voice, and author of Be the Reason You Thrive.'
  },
  {
    id: 2,
    title: 'What Does Success Look Like in Your Story',
    guest: 'Tim Chilvers',
    role: 'Guest Speaker',
    duration: '25 min 4 sec',
    date: 'May 2026',
    thumbnail: ep2Img,
    spotifyUrl: 'https://open.spotify.com/episode/1CYX8VKULsDXmc6X7Zd3LI',
    audioUrl: 'https://p.scdn.co/mp3-preview/101af1be20ed38f1c5f60e526ebbfe3ff1536f8b.mp3',
    description: 'Success That Evolves. What if your success is evolving… and your expectations can evolve with it? In this episode of the Care to Voice Podcast, we explore how success evolves, and what it really means to adjust your expectations without losing your ambition.'
  },
  {
    id: 3,
    title: 'Expanding Your Career',
    guest: 'Sonali Dua',
    role: 'Guest Speaker',
    duration: '24 min 38 sec',
    date: 'May 2026',
    thumbnail: ep3Img,
    spotifyUrl: 'https://open.spotify.com/episode/7r63a7TujMLwDBmjBlZ77r',
    audioUrl: 'https://p.scdn.co/mp3-preview/111668e0e569d483d0d54f071f125c3133f1fe0e.mp3',
    description: 'What happens when your career looks successful on the outside… but you start to feel it’s time for more? In this episode of the Care to Voice Podcast, we explore the moment when you realise it’s time to expand your career, and what that really means for professionals navigating change, growth, and leadership.'
  },
  {
    id: 4,
    title: 'The Unbreakable Relationship with Yourself',
    guest: 'Igor Vainshtein',
    role: 'Guest Speaker',
    duration: '24 min 32 sec',
    date: 'May 2026',
    thumbnail: ep4Img,
    spotifyUrl: 'https://open.spotify.com/episode/16LfoDVEjDsctm5d6sjJ1B',
    audioUrl: 'https://p.scdn.co/mp3-preview/78c53638e1f1285114aba52451d2136c11a55be5.mp3',
    description: 'Unbreakable Bond: The Relationship with Yourself. What happens when the relationship with yourself is not as strong as it needs to be… and it starts to affect the way you think, decide, and move in your career? In this episode of the Care to Voice Podcast, we explore self-leadership and emotional clarity.'
  },
  {
    id: 5,
    title: 'AI Is Changing Hiring, What It Means for You',
    guest: 'Kush Bhatia',
    role: 'CEO & Co-founder, JobGen.AI',
    duration: '33 min',
    date: 'May 2026',
    thumbnail: ep5Img,
    spotifyUrl: 'https://open.spotify.com/episode/1yp4prKNML7hAaAAZKncOJ',
    audioUrl: 'https://p.scdn.co/mp3-preview/8fd7690803526beb28f50e77d77ae8dfaa896c23.mp3',
    description: 'How AI Is Changing Hiring: Your Next Move. What happens when the way you’ve always approached your career… no longer works? As AI reshapes how companies hire, many professionals are starting to feel uncertain about where they stand and what to do next. Fatima is joined by Kush Bhatia, CEO and Co-founder of JobGen.AI.'
  },
  {
    id: 6,
    title: 'The Real Reason You Feel Exhausted At Work',
    guest: 'Camilla Thompson',
    role: 'Guest Speaker',
    duration: '28 min 26 sec',
    date: 'May 2026',
    thumbnail: ep6Img,
    spotifyUrl: 'https://open.spotify.com/episode/4WAXhP2TVB0zJCqDy9QhQ6',
    audioUrl: 'https://p.scdn.co/mp3-preview/4e1fbc45daedf89b24386039fea54de6b31b9345.mp3',
    description: 'What if the reason you feel exhausted at work… isn’t about how much you’re doing, but how disconnected you’ve become from yourself? In this episode of the Care to Voice Podcast, Fatima Abreu explores the real reason professionals feel exhausted at work and what this means for navigating executive performance.'
  },
  {
    id: 7,
    title: 'Reinventing Your Career When You Feel Stuck',
    guest: 'Ross Reekie',
    role: 'Guest Speaker',
    duration: '29 min 55 sec',
    date: 'May 2026',
    thumbnail: ep7Img,
    spotifyUrl: 'https://open.spotify.com/episode/7J39F3riuqC02fotvJr5eS',
    audioUrl: 'https://p.scdn.co/mp3-preview/d9e373557a78e448f52da7af8aa2b5e18e6c5d46.mp3',
    description: 'What if joy isn’t something you find… but something you build? In this episode of the Care to Voice Podcast, we explore what it really means to reinvent your career when you feel stuck and how to reconnect with meaning and purpose in your daily work.'
  },
  {
    id: 8,
    title: 'The Hidden Influence of Money on Your Career Choices',
    guest: 'Alex Isaías',
    role: 'Guest Speaker',
    duration: '29 min 50 sec',
    date: 'May 2026',
    thumbnail: ep8Img,
    spotifyUrl: 'https://open.spotify.com/episode/6EwdmfX7Pv25Owe5MGIE5x',
    audioUrl: 'https://p.scdn.co/mp3-preview/2fc23fa5c6568170030a2e1c342888860f01373b.mp3',
    description: 'What if your career decisions aren’t just about opportunity… but about money in ways you haven’t fully realised? In this episode of the Care to Voice Podcast, we explore the hidden influence of money on your career choices and what it really means for navigating change in today\'s world.'
  }
];

export default function PodcastPlayer({ isAudioPlaying, toggleAudio }) {
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const sectionRef = useRef(null);

  const activeEp = EPISODES[currentEpisodeIndex] || EPISODES[0];

  // Auto-switch episodes every 2.5 seconds when audio is not playing
  useEffect(() => {
    if (isPlaying) return;

    const timer = setInterval(() => {
      setCurrentEpisodeIndex((prev) => (prev + 1) % EPISODES.length);
    }, 2500);

    return () => clearInterval(timer);
  }, [isPlaying]);

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
    if (toggleAudio && isAudioPlaying) {
      toggleAudio();
    }
  };

  // Auto-pause audio when user scrolls away to next or previous section
  useEffect(() => {
    if (!isPlaying) return;

    const currentSection = sectionRef.current;
    if (!currentSection) return;

    // 1. IntersectionObserver to detect when section leaves viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || entry.intersectionRatio < 0.2) {
            pauseAudio();
          }
        });
      },
      {
        threshold: [0, 0.2],
      }
    );

    observer.observe(currentSection);

    // 2. Active scroll listener fallback for instant response during fast scroll
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const visibleHeight = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0));
      if (visibleHeight < 120) {
        pauseAudio();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isPlaying, isAudioPlaying, toggleAudio]);

  // Clean up audio on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const handleTogglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      pauseAudio();
    } else {
      audioRef.current.play().catch(e => console.log('Audio play error:', e));
      setIsPlaying(true);
      if (toggleAudio && !isAudioPlaying) {
        toggleAudio();
      }
    }
  };

  const handleSelectEpisode = (index) => {
    setCurrentEpisodeIndex(index);
    if (isPlaying) {
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.load();
          audioRef.current.play().catch(e => console.log('Audio autoplay error:', e));
        }
      }, 50);
    }
  };

  const handlePrev = () => {
    setCurrentEpisodeIndex((prev) => (prev - 1 + EPISODES.length) % EPISODES.length);
    if (isPlaying) {
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.load();
          audioRef.current.play().catch(e => console.log('Audio autoplay error:', e));
        }
      }, 50);
    }
  };

  const handleNext = () => {
    setCurrentEpisodeIndex((prev) => (prev + 1) % EPISODES.length);
    if (isPlaying) {
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.load();
          audioRef.current.play().catch(e => console.log('Audio autoplay error:', e));
        }
      }, 50);
    }
  };

  const handleAudioEnded = () => {
    pauseAudio();
    setCurrentEpisodeIndex((prev) => (prev + 1) % EPISODES.length);
  };

  return (
    <section id="podcast" ref={sectionRef} className="py-24 relative overflow-hidden border-t border-amber-500/20 text-slate-900">
      
      {/* Bespoke Dynamic Background */}
      <SectionBackground variant="light" />

      <audio
        ref={audioRef}
        src={activeEp.audioUrl}
        onEnded={handleAudioEnded}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold mb-4 text-slate-900">
            Conversations That Shift Your <span className="gradient-text-primary">Perspective</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto">
            No noise. Just high-conviction insights on navigating change, making hard career decisions, and choosing your next direction with clarity.
          </p>
        </div>

        {/* Podcast Player Container (Featured Artwork + Episode Details & Controls) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Interactive Episode Artwork Card (Auto-switching Thumbnail) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group max-w-sm w-full">
              {/* Golden Ambient Glow */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-amber-500/30 to-amber-600/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500 pointer-events-none" />
              
              <div className="relative rounded-3xl overflow-hidden glass-panel shadow-2xl border-2 border-amber-500/40 bg-slate-950/5">
                {/* Dynamically Changes with Selected Episode */}
                <img
                  key={activeEp.id}
                  src={activeEp.thumbnail}
                  alt={activeEp.title}
                  className="w-full aspect-square object-cover transform group-hover:scale-102 transition-all duration-700 animate-fadeIn"
                />

                {/* Floating Episode Number Badge */}
                <div 
                  className="absolute top-4 left-4 bg-slate-950/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-amber-500/50 text-[11px] font-extrabold flex items-center gap-1.5 shadow-xl dark-overlay-badge"
                  style={{ color: '#F59E0B' }}
                >
                  <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-amber-400 animate-ping' : 'bg-amber-400 animate-pulse'}`} />
                  <span style={{ color: '#F59E0B' }}>EPISODE 0{activeEp.id}</span>
                </div>

                {/* Bottom Guest Bar */}
                <div 
                  className="absolute bottom-4 inset-x-4 bg-slate-950/95 backdrop-blur-md p-3.5 rounded-2xl border border-amber-500/30 shadow-2xl dark-overlay-badge"
                  style={{ color: '#FFFFFF' }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] uppercase font-extrabold tracking-wider" style={{ color: '#FBBF24' }}>
                      Featured Guest
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-amber-500/15 border border-amber-500/30 text-amber-400 font-bold">
                      {activeEp.duration}
                    </span>
                  </div>
                  <div className="text-sm font-bold truncate" style={{ color: '#FFFFFF' }}>
                    {activeEp.guest}
                  </div>
                  <div className="text-[11px] font-medium truncate" style={{ color: '#CBD5E1' }}>
                    {activeEp.role}
                  </div>
                </div>
              </div>
            </div>

            {/* Spotify link under card */}
            <div className="mt-4 w-full max-w-sm">
              <a
                href={activeEp.spotifyUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full text-center py-3.5 px-5 rounded-2xl text-white text-xs sm:text-sm font-extrabold hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 shadow-xl shadow-amber-500/25 border border-amber-400/40 cursor-pointer group/spot"
                style={{
                  background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 50%, #B45309 100%)',
                  color: '#FFFFFF'
                }}
              >
                <Headphones className="w-4 h-4 text-white group-hover/spot:rotate-12 transition-transform" />
                <span className="text-white font-bold tracking-wide">Listen to Full Episode on Spotify</span>
                <ExternalLink className="w-3.5 h-3.5 text-white/90 group-hover/spot:translate-x-0.5 group-hover/spot:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Active Episode Player + Carousel Controls (Matching Customer Review style) */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-10 shadow-2xl relative border border-[var(--border-subtle)] flex flex-col justify-between">
            
            <div>
              {/* Player Header status */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-widest flex items-center gap-2 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                  <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-amber-500 animate-ping' : 'bg-slate-400'}`} />
                  {isPlaying ? 'Now Playing' : 'Auto Preview'}: Episode {activeEp.id} of {EPISODES.length}
                </span>
                <span className="text-xs font-mono text-slate-500 font-semibold">{activeEp.duration} • {activeEp.date}</span>
              </div>

              {/* Episode Title */}
              <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold mb-3 text-slate-900 leading-snug">
                {activeEp.title}
              </h3>

              {/* Guest / Topic Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/10 text-amber-800 text-xs font-semibold mb-4">
                <Award className="w-3.5 h-3.5 text-amber-600" />
                <span>{activeEp.guest} • {activeEp.role}</span>
              </div>

              {/* Episode Description */}
              <p className="text-sm sm:text-base text-slate-700 mb-8 leading-relaxed">
                "{activeEp.description}"
              </p>

              {/* Audio Waveform Player Bar */}
              <div className="glass-panel rounded-2xl p-4 border border-amber-500/20 mb-8 flex items-center justify-between gap-4 bg-slate-950/5">
                
                <button
                  onClick={handleTogglePlay}
                  className="w-13 h-13 rounded-2xl gradient-btn text-slate-950 flex items-center justify-center shadow-lg shadow-amber-500/30 hover:scale-105 transition-transform shrink-0 cursor-pointer"
                  title={isPlaying ? "Pause Preview" : "Play Official Preview"}
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 fill-slate-950 text-slate-950" />
                  ) : (
                    <Play className="w-5 h-5 fill-slate-950 text-slate-950 ml-0.5" />
                  )}
                </button>

                {/* Dynamic waveform bars */}
                <div className="flex items-center gap-1 sm:gap-1.5 h-10 flex-1 justify-center px-2 sm:px-4 overflow-hidden">
                  {[40, 65, 30, 85, 45, 95, 60, 35, 75, 50, 90, 40, 70, 80, 45, 60, 85, 35, 90, 50, 65].map((h, i) => (
                    <span
                      key={i}
                      className={`w-1 rounded-full transition-all duration-300 ${
                        isPlaying ? 'bg-gradient-to-t from-amber-500 to-amber-600 animate-wave-bar' : 'bg-slate-300'
                      }`}
                      style={{
                        height: isPlaying ? `${h}%` : '20%',
                        animationDelay: `${i * 0.05}s`
                      }}
                    />
                  ))}
                </div>

                <span className="text-[11px] font-bold text-amber-700 px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 shrink-0">
                  {isPlaying ? 'Streaming Audio' : 'Official Preview'}
                </span>

              </div>
            </div>

            {/* Navigation Controls (Identical to Customer Review style) */}
            <div className="flex items-center justify-between pt-5 border-t border-[var(--border-subtle)]">
              {/* Pagination Dots/Pills */}
              <div className="flex items-center gap-1.5">
                {EPISODES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectEpisode(idx)}
                    aria-label={`Go to episode ${idx + 1}`}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      idx === currentEpisodeIndex
                        ? 'w-6 bg-amber-500 shadow-sm shadow-amber-500/50'
                        : 'w-2 bg-slate-300 hover:bg-amber-400/60'
                    }`}
                  />
                ))}
              </div>

              {/* Prev / Next Arrow Buttons (Exact Match to Customer Reviews) */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-full glass-panel hover:border-amber-500 text-slate-700 hover:text-slate-950 transition-all cursor-pointer shadow-sm"
                  aria-label="Previous Episode"
                  title="Previous Episode"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-full glass-panel hover:border-amber-500 text-slate-700 hover:text-slate-950 transition-all cursor-pointer shadow-sm"
                  aria-label="Next Episode"
                  title="Next Episode"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
