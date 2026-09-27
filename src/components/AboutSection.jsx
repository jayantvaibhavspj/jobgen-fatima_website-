import React from 'react';
import { Award, CheckCircle2, HeartHandshake, Sparkles } from 'lucide-react';
import fatimaThrivePhoto from '../assets/fatima_thrive.png';

export default function AboutSection({ onOpenBooking }) {
  const profilePhotoUrl = fatimaThrivePhoto;
  const signatureUrl = "https://static.wixstatic.com/media/68c1c8_45dc32b7aa9b4f4483c9cc92bb2b8db4~mv2.png/v1/fill/w_619,h_240,al_c,lg_1,q_85,enc_avif,quality_auto/68c1c8_45dc32b7aa9b4f4483c9cc92bb2b8db4~mv2.png";

  return (
    <section id="about" className="py-24 relative overflow-hidden border-t border-[var(--border-subtle)]">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Official Profile Image */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group max-w-sm sm:max-w-md w-full">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/30 via-rose-500/20 to-amber-500/30 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition duration-500" />
              
              <div className="relative rounded-3xl overflow-hidden glass-panel shadow-2xl">
                <img
                  src={profilePhotoUrl}
                  alt="Fatima - Author & Founder of Care to Voice"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-6 founder-card-footer border-t border-[var(--border-subtle)]">
                  <h4 className="text-xl font-bold font-serif-heading">Fatima</h4>
                  <p className="text-xs font-semibold text-amber-500">Founder & Principal Coach, Care to Voice</p>
                </div>
              </div>
            </div>

            {/* Signature */}
            <div className="mt-6 w-48 opacity-90">
              <img src={signatureUrl} alt="Fatima Signature" className="w-full h-auto founder-signature-img" />
            </div>
          </div>

          {/* Right Column: Bio & Experience */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold uppercase tracking-widest text-amber-500 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Meet Your Guide</span>
            </div>

            <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold mb-6 leading-tight">
              Empowering Professionals to <span className="gradient-text-primary">Thrive with Purpose</span>
            </h2>

            <div className="space-y-4 text-base opacity-85 leading-relaxed font-sans mb-8">
              <p>
                Built on global experience leading Reward, Performance, and Workforce initiatives across international organizations, I help high-achieving professionals find clearer direction when momentum alone is no longer enough.
              </p>
              <p>
                In a world shaped by rapid AI evolution, evolving job expectations, and shifting priorities, I combine strategic workforce consulting with deep 1-on-1 career coaching to help you align your work with your core purpose.
              </p>
            </div>

            {/* Experience Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="glass-panel p-4 rounded-xl flex items-start gap-3">
                <Award className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold">Global Rewards Expertise</h4>
                  <p className="text-xs opacity-75">Strategic support for enterprise reward strategy & people practices.</p>
                </div>
              </div>

              <div className="glass-panel p-4 rounded-xl flex items-start gap-3">
                <HeartHandshake className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold">High-Conviction Coaching</h4>
                  <p className="text-xs opacity-75">Helping leaders navigate pivots and overcome career friction.</p>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="gradient-btn px-8 py-4 rounded-full text-sm font-bold shadow-xl"
            >
              Book a Clarity Call with Fatima
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
