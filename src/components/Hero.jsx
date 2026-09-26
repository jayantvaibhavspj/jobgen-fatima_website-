import React from 'react';
import { ArrowRight, Sparkles, Calendar, Mic, Award } from 'lucide-react';

export default function Hero({ onOpenBooking, onOpenQuiz, isAudioPlaying, toggleAudio }) {
  const profilePhotoUrl = "https://static.wixstatic.com/media/68c1c8_4c4ba09289284e7f9711a6eb51186fbb~mv2.jpg/v1/crop/x_0,y_123,w_1067,h_1276/fill/w_856,h_1053,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/68c1c8_4c4ba09289284e7f9711a6eb51186fbb~mv2.jpg";
  const signatureUrl = "https://static.wixstatic.com/media/68c1c8_45dc32b7aa9b4f4483c9cc92bb2b8db4~mv2.png/v1/fill/w_619,h_240,al_c,lg_1,q_85,enc_avif,quality_auto/68c1c8_45dc32b7aa9b4f4483c9cc92bb2b8db4~mv2.png";

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 backdrop-blur-md mb-6 shadow-xl">
              <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-ping" />
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">
                Career Clarity Coaching & Corporate Consulting
              </span>
            </div>

            {/* Hero Title */}
            <h1 className="font-serif-heading text-4xl sm:text-6xl lg:text-6xl font-bold tracking-tight leading-[1.15] mb-6">
              Find Your True Direction in a World of <br className="hidden sm:inline" />
              <span className="gradient-text-primary">Evolving Work & AI.</span>
            </h1>

            {/* Hero Subtitle */}
            <p className="text-base sm:text-lg opacity-85 max-w-2xl leading-relaxed mb-8 font-normal">
              Helping professionals find clearer direction and supporting organisations as they navigate workforce change and evolving expectations. You’ve achieved a lot—now it’s time for future career clarity.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto gradient-btn px-8 py-4 rounded-full text-base font-bold flex items-center justify-center gap-3 shadow-xl"
              >
                <Calendar className="w-5 h-5" />
                <span>Book a Clarity Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenQuiz}
                className="w-full sm:w-auto gradient-btn-outline px-8 py-4 rounded-full text-base font-semibold flex items-center justify-center gap-3 backdrop-blur-md"
              >
                <Sparkles className="w-5 h-5 text-amber-500" />
                <span>Take Career Alignment Quiz</span>
              </button>
            </div>
          </div>

          {/* Right Column: Fatima Official Photo Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group max-w-sm sm:max-w-md w-full">
              
              <div className="absolute -inset-4 bg-gradient-to-tr from-amber-500/30 via-rose-500/20 to-amber-500/20 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-500" />

              <div className="relative rounded-3xl overflow-hidden glass-panel shadow-2xl">
                <img
                  src={profilePhotoUrl}
                  alt="Fatima - Author of a personal development book reflecting on self leadership"
                  className="w-full h-80 sm:h-96 object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                />

                <div className="p-5 founder-card-footer border-t border-[var(--border-subtle)]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
                      Founder & Principal Coach
                    </span>
                    <Award className="w-4 h-4 text-amber-500" />
                  </div>
                  <h3 className="font-serif-heading text-xl font-bold mb-1">
                    Fatima
                  </h3>
                  <p className="text-xs opacity-75 leading-relaxed mb-3">
                    Author of <em>"Be The Reason You Thrive"</em> & Creator of Care to Voice.
                  </p>

                  <div className="w-36 pt-1">
                    <img src={signatureUrl} alt="Fatima Signature" className="w-full h-auto founder-signature-img" />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto mt-16">
          <div className="glass-panel p-5 rounded-2xl text-center shadow-lg transition-transform hover:-translate-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold font-serif-heading metric-number-val mb-1">
              500<span className="text-amber-500 font-bold ml-0.5">+</span>
            </div>
            <div className="text-xs metric-label-text font-bold uppercase tracking-wider">
              Professionals Coached
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl text-center shadow-lg transition-transform hover:-translate-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold font-serif-heading metric-number-val mb-1">
              98<span className="text-amber-500 font-bold ml-0.5">%</span>
            </div>
            <div className="text-xs metric-label-text font-bold uppercase tracking-wider">
              Career Clarity Rate
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl text-center shadow-lg transition-transform hover:-translate-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold font-serif-heading metric-number-val mb-1">
              50<span className="text-amber-500 font-bold ml-0.5">+</span>
            </div>
            <div className="text-xs metric-label-text font-bold uppercase tracking-wider">
              Corporate Clients
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl text-center shadow-lg transition-transform hover:-translate-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold font-serif-heading metric-number-val mb-1">
              10k<span className="text-amber-500 font-bold ml-0.5">+</span>
            </div>
            <div className="text-xs metric-label-text font-bold uppercase tracking-wider">
              Podcast Listeners
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
