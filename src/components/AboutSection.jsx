import React from 'react';
import { Award, CheckCircle2, HeartHandshake, Sparkles, Compass, Lightbulb, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react';
import fatimaThrivePhoto from '../assets/fatima_thrive.png';

const PHILOSOPHY_PILLARS = [
  {
    title: '1. Care to Voice Positioning (CARE™ Framework)',
    desc: 'Structured reflection model to align internal purpose with external career strategy, giving you a clear, authentic voice in your industry.'
  },
  {
    title: '2. What We Believe',
    desc: 'Career direction is non-linear. True progress requires self-awareness, emotional clarity, and intention over rigid, outdated career paths.'
  },
  {
    title: '3. The Shift We’re Creating',
    desc: 'Moving professionals from overthinking and external pressure to aligned, high-conviction decision making and sustainable growth.'
  },
  {
    title: '4. Our Promise',
    desc: 'Actionable frameworks, customized 1-on-1 coaching, corporate advisory, and high-impact workshops designed for real-world impact.'
  },
  {
    title: '5. Our Call to Action',
    desc: 'Encouraging leaders and professionals to take full ownership of their trajectory and thrive amid evolving workforce and AI changes.'
  }
];

export default function AboutSection({ onOpenBooking }) {
  const profilePhotoUrl = "https://static.wixstatic.com/media/68c1c8_4c4ba09289284e7f9711a6eb51186fbb~mv2.jpg/v1/crop/x_0,y_123,w_1067,h_1276/fill/w_856,h_1053,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/68c1c8_4c4ba09289284e7f9711a6eb51186fbb~mv2.jpg";
  const signatureUrl = "https://static.wixstatic.com/media/68c1c8_45dc32b7aa9b4f4483c9cc92bb2b8db4~mv2.png/v1/fill/w_619,h_240,al_c,lg_1,q_85,enc_avif,quality_auto/68c1c8_45dc32b7aa9b4f4483c9cc92bb2b8db4~mv2.png";

  return (
    <section id="about" className="py-24 relative overflow-hidden border-t border-amber-500/20 bg-[#022C22] text-white section-multicolor-about">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Official Profile Image */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group max-w-sm sm:max-w-md w-full">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/30 via-rose-500/20 to-amber-500/30 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition duration-500" />
              
              <div className="relative rounded-3xl overflow-hidden glass-panel shadow-2xl">
                <img
                  src={profilePhotoUrl}
                  alt="Fátima Y. Abreu Arellano - Author & Founder of Care to Voice"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-6 founder-card-footer border-t border-[var(--border-subtle)]">
                  <h4 className="text-xl font-bold font-serif-heading">Fátima Y. Abreu Arellano</h4>
                  <p className="text-xs font-semibold text-amber-600">Founder & Principal Coach, Care to Voice</p>
                  <p className="text-[11px] opacity-75 mt-1">Author of <em>"Be the Reason You Thrive"</em></p>
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold uppercase tracking-widest text-amber-600 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Meet Your Guide</span>
            </div>

            <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold mb-6 leading-tight">
              Empowering Professionals to <span className="gradient-text-primary">Thrive with Purpose</span>
            </h2>

            <div className="space-y-4 text-base opacity-85 leading-relaxed font-sans mb-8">
              <p>
                Welcome! I’m <strong>Fátima Y. Abreu Arellano</strong>, Founder of Care to Voice. Built on extensive global experience leading Reward, Performance, and Workforce Strategy initiatives across international corporate organizations, I help high-achieving leaders find clearer direction when momentum alone is no longer enough.
              </p>
              <p>
                In a world shaped by rapid AI evolution, shifting market dynamics, and changing workforce expectations, I combine strategic enterprise consulting with deep 1-on-1 career coaching to help you realign your work with authentic purpose.
              </p>
            </div>

            {/* Experience Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="glass-panel p-4 rounded-xl flex items-start gap-3">
                <Award className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold">Global Rewards Expertise</h4>
                  <p className="text-xs opacity-75">Strategic total rewards & people practices for corporate organizations.</p>
                </div>
              </div>

              <div className="glass-panel p-4 rounded-xl flex items-start gap-3">
                <HeartHandshake className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
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

        {/* 5 Core Philosophy Pillars */}
        <div className="mt-16 pt-16 border-t border-[var(--border-subtle)]">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="font-serif-heading text-2xl sm:text-4xl font-bold mb-3">
              Our Core Philosophy & <span className="gradient-text-primary">CARE™ Framework</span>
            </h3>
            <p className="text-sm sm:text-base opacity-85">
              The fundamental principles guiding every coaching session, consulting engagement, and workshop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PHILOSOPHY_PILLARS.map((p, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-2xl border border-[var(--border-subtle)] hover:border-amber-500/40 transition-all shadow-sm">
                <h4 className="font-serif-heading text-base font-bold text-amber-700 mb-2">{p.title}</h4>
                <p className="text-xs leading-relaxed opacity-85 text-slate-700">{p.desc}</p>
              </div>
            ))}

            {/* Featured Book Callout Card */}
            <div className="glass-panel p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 via-rose-500/5 to-amber-500/10 border border-amber-500/40 flex flex-col justify-between shadow-md">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-700 block mb-1">Featured Book</span>
                <h4 className="font-serif-heading text-base font-bold mb-2">Be the Reason You Thrive</h4>
                <p className="text-xs opacity-85 mb-4 text-slate-700">"If you've ever felt stuck, stretched, or searching—this book hands you the keys to thrive."</p>
              </div>
              <a href="#book" className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800">
                <span>Explore Book & Chapters</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

