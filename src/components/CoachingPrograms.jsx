import React, { useState } from 'react';
import { Target, Users, Zap, CheckCircle2, ArrowRight, ShieldCheck, Award, Sparkles, Calculator } from 'lucide-react';

const SERVICES = [
  {
    id: 'coaching',
    tabTitle: '1-on-1 Future Clarity Coaching',
    icon: Target,
    badge: 'For Professionals & Leaders',
    heading: 'Redefine Your Career Path with Precision and Confidence',
    subtitle: 'Tailored 1-on-1 guidance to help you make high-conviction decisions, align your work with your purpose, and navigate the uncertainties of evolving markets and AI.',
    image: 'https://static.wixstatic.com/media/68c1c8_0efff5a6c443434889e0a67e1c3b46cc~mv2.avif/v1/fill/w_722,h_924,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Choose%20Direction%20Process.avif',
    features: [
      'Comprehensive Career Direction Audit & Friction Identification',
      'Customized 90-Day Future Growth & Positioning Roadmap',
      '1-on-1 Strategic Coaching Sessions with Fatima',
      'Personal Branding & Leadership Narrative Alignment',
      'Decision-Making Frameworks for Complex Career Shifts',
      'Direct Email & Voice Note Accountability Support'
    ],
    outcome: 'Gain unshakeable clarity on your next move, eliminate career burnout, and command your true value in the market.',
    ctaText: 'Book Clarity Call'
  },
  {
    id: 'consulting',
    tabTitle: 'Total Rewards & Workforce Consulting',
    icon: Users,
    badge: 'For Enterprises & Organizations',
    heading: 'Navigate Workforce Change & Strategic Reward Alignment',
    subtitle: 'Strategic consulting for corporate leaders and HR executives to structure competitive reward systems, retain top talent, and navigate workforce shifts driven by AI.',
    image: 'https://static.wixstatic.com/media/68c1c8_82d056f3a13343a4a83525b098ec1584~mv2.avif/v1/fill/w_834,h_556,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Total%20Rewards%20%26%20Worforce%20Services.avif',
    features: [
      'Total Rewards Strategy & Value Proposition Redesign',
      'Workforce Alignment & Performance Management Systems',
      'AI & Technology Impact Assessment on Talent Roles',
      'Employee Engagement & Organizational Purpose Alignment',
      'Change Management Advisory for Leadership Teams',
      'Global Reward Governance & Benchmarking'
    ],
    outcome: 'Build an agile, future-ready workforce aligned with organizational goals and evolving employee expectations.',
    ctaText: 'Inquire Corporate Services'
  },
  {
    id: 'executive',
    tabTitle: 'Executive Leadership Alignment',
    icon: Zap,
    badge: 'For Senior Executives & Founders',
    heading: 'High-Impact Strategic Advisory for Senior Executives',
    subtitle: 'Exclusive mentorship for executives balancing high-stakes decision making, organizational leadership, personal wellbeing, and long-term legacy.',
    image: 'https://static.wixstatic.com/media/68c1c8_c27262177a194681bba463560ce6ddcf~mv2.avif/v1/fill/w_752,h_891,al_c,q_85,enc_avif,quality_auto/Ways%20to%20work%20together.avif',
    features: [
      'Executive Presence & Authentic Leadership Voice',
      'Strategic Decision Advisory in High-Pressure Transitions',
      'Wellbeing & Resilience Integration for Senior Leaders',
      'Board & Stakeholder Communication Alignment',
      'Legacy & Long-Term Professional Positioning'
    ],
    outcome: 'Lead with authentic clarity, maintain personal wellbeing under pressure, and drive sustainable executive impact.',
    ctaText: 'Schedule Executive Consultation'
  }
];

export default function CoachingPrograms({ onOpenBooking, onOpenCalculator }) {
  const [activeTab, setActiveTab] = useState('coaching');

  const currentService = SERVICES.find(s => s.id === activeTab);

  return (
    <section id="coaching" className="py-24 relative overflow-hidden border-t border-[var(--border-subtle)]">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold uppercase tracking-widest text-amber-500 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tailored Solutions</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold mb-6">
            Empowering Your <span className="gradient-text-primary">Career & Workforce</span>
          </h2>

          <p className="text-base sm:text-lg opacity-85">
            Whether you are a professional seeking career clarity or an organization adapting to workforce evolution, Care to Voice provides high-conviction strategic support.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {SERVICES.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-5 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2.5 ${
                  isActive
                    ? 'gradient-btn shadow-lg shadow-amber-500/20'
                    : 'glass-panel opacity-80 hover:opacity-100 hover:border-amber-500/50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-amber-500'}`} />
                <span>{item.tabTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        {currentService && (
          <div className="glass-panel rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-7">
                <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold uppercase tracking-widest text-amber-500 mb-4">
                  {currentService.badge}
                </span>

                <h3 className="font-serif-heading text-2xl sm:text-4xl font-bold mb-4 leading-tight">
                  {currentService.heading}
                </h3>

                <p className="text-sm sm:text-base opacity-85 mb-8 leading-relaxed">
                  {currentService.subtitle}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {currentService.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
                      <span className="text-xs sm:text-sm opacity-90 font-medium">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={onOpenBooking}
                    className="gradient-btn px-7 py-3.5 rounded-full text-sm font-bold flex items-center gap-2 shadow-xl"
                  >
                    <span>{currentService.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={onOpenCalculator}
                    className="gradient-btn-outline px-6 py-3.5 rounded-full text-xs font-semibold flex items-center gap-2"
                  >
                    <Calculator className="w-4 h-4 text-amber-500" />
                    <span>Calculate 90-Day Trajectory Score</span>
                  </button>
                </div>
              </div>

              {/* Right Official Image & Outcome Box */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                
                {/* Official Service Image */}
                <div className="rounded-2xl overflow-hidden glass-panel shadow-xl max-h-56">
                  <img
                    src={currentService.image}
                    alt={currentService.heading}
                    className="w-full h-56 object-cover object-center"
                  />
                </div>

                <div className="glass-panel p-5 rounded-2xl relative">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-500 mb-2">
                    <Award className="w-4 h-4" />
                    <span>Key Outcome</span>
                  </div>
                  <p className="text-xs sm:text-sm opacity-85 leading-relaxed mb-4">
                    "{currentService.outcome}"
                  </p>

                  <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] opacity-75 font-medium">
                    <span className="flex items-center gap-1 text-amber-500">
                      <ShieldCheck className="w-3.5 h-3.5" /> Verified Program
                    </span>
                    <span>Direct Access to Fatima</span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
