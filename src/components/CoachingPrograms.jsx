import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Target, Users, Zap, CheckCircle2, ArrowRight, ShieldCheck, Award, Calculator, Maximize2, X, Compass, Lightbulb, TrendingUp } from 'lucide-react';
import careerFramework from '../assets/career_framework.jpg';
import careerRoadmap from '../assets/career_clarity_roadmap.jpg';
import SectionBackground from './SectionBackground';

const SERVICES = [
  {
    id: 'coaching',
    tabTitle: 'Career Clarity Coaching Programs',
    icon: Target,
    badge: 'For Professionals & Leaders',
    heading: 'Gain Unshakeable Direction in a Changing World',
    subtitle: 'Explore personalized coaching and structured programs designed to help you gain clarity, define direction, and move forward with confidence.',
    image: careerFramework,
    secondaryImage: careerRoadmap,
    packages: [
      {
        title: 'Single Coaching Session (1-on-1)',
        desc: 'A focused 1-on-1 session to navigate immediate career decisions, overcome current challenges, or gain targeted clarity on an upcoming pivot.',
        badge: 'Focused 1-on-1'
      },
      {
        title: 'Package Coaching Sessions (3-Sessions)',
        desc: 'Ongoing 1-on-1 coaching support across 3 structured sessions for deep transition, accountability, strategic positioning, and goal achievement.',
        badge: 'Deep Transition'
      },
      {
        title: 'Choose Direction Program',
        desc: 'A comprehensive, step-by-step career clarity program designed to discover your core voice, realign your trajectory, and build an actionable plan fitting your reality.',
        badge: 'Signature Program'
      }
    ],
    frameworkSteps: [
      {
        step: '01',
        title: 'SELF-LEADERSHIP',
        desc: 'Cultivating Internal Clarity & Leadership Identity',
        points: ['Uncover Core Values & Strengths', 'Develop Self-Awareness', 'Establish Vision & Purpose', 'Build Executive Presence']
      },
      {
        step: '02',
        title: 'CAREER ALIGNMENT',
        desc: 'Matching Ambitions with Strategic Opportunities',
        points: ['Evaluate Current Career Path', 'Define Target Roles & Industries', 'Assess Market Opportunities', 'Identify Gaps & Synergies']
      },
      {
        step: '03',
        title: 'HIGH-IMPACT POSITIONING',
        desc: 'Strategic Personal Branding & Visibility',
        points: ['Articulate Unique Value Proposition (UVP)', 'Enhance LinkedIn & Executive CV', 'Build Strategic Networks & Influence', 'Position for Key Roles & Boards']
      },
      {
        step: '04',
        title: 'SUSTAINABLE GROWTH',
        desc: 'Ensuring Continuous Progress & Long-Term Success',
        points: ['Create a Strategic Action Plan', 'Secure Stakeholder Buy-in', 'Scale Leadership Impact', 'Maintain Peak Performance & Resilience']
      }
    ],
    features: [
      'Comprehensive Career Direction Audit & Friction Identification',
      'Customized 90-Day Future Growth & Positioning Roadmap',
      '1-on-1 Strategic Coaching Sessions with Fatima Abreu',
      'Personal Branding & Leadership Narrative Alignment',
      'Decision-Making Frameworks for Complex Career Shifts',
      'Direct Email & Voice Note Accountability Support'
    ],
    outcome: 'Gain unshakeable clarity on your next move, eliminate career burnout, and command your true value in the market.',
    ctaText: 'Book a Clarity Call'
  },
  {
    id: 'consulting',
    tabTitle: 'Total Rewards & Workforce Consulting',
    icon: Users,
    badge: 'STRATEGY. PEOPLE. IMPACT.',
    heading: 'Consulting that Creates Real Organizational Value',
    subtitle: 'Strategic solutions in total rewards and people strategy to help your organisation attract, engage, retain top talent, and grow with purpose.',
    image: 'https://static.wixstatic.com/media/68c1c8_82d056f3a13343a4a83525b098ec1584~mv2.avif/v1/fill/w_834,h_556,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Total%20Rewards%20%26%20Worforce%20Services.avif',
    linkedinUrl: 'https://www.linkedin.com/in/fatima-abreu-arellano/',
    consultingPillars: [
      {
        title: '1. REWARD & PAY STRATEGY',
        desc: 'Structuring competitive pay frameworks, incentive plans, grading systems, market benchmarking, and fair pay alignment.'
      },
      {
        title: '2. EMPLOYEE BENEFITS & WELLBEING',
        desc: 'Designing holistic employee benefit packages, health & wellbeing initiatives, vendor management, and employee value proposition.'
      },
      {
        title: '3. GLOBAL MOBILITY & WORKFORCE SUPPORT',
        desc: 'International transfer policies, expat compensation, cross-border compliance advisory, and relocation support.'
      },
      {
        title: '4. GOVERNANCE & ADVISORY',
        desc: 'Board & executive compensation governance, equity compliance, committee advisory, and risk management.'
      },
      {
        title: '5. HR ANALYTICS & OPTIMISATION',
        desc: 'Compensation analytics, gender pay equity audits, retention insights, and data-driven workforce planning.'
      },
      {
        title: '6. STAKEHOLDER & PROJECT MANAGEMENT',
        desc: 'Cross-functional alignment, HR transformations, change management advisory, and executive communications.'
      }
    ],
    features: [
      'Total Rewards Strategy & Value Proposition Redesign',
      'Workforce Alignment & Performance Management Systems',
      'AI & Technology Impact Assessment on Talent Roles',
      'Employee Engagement & Organizational Purpose Alignment',
      'Change Management Advisory for Leadership Teams',
      'Global Reward Governance & Benchmarking'
    ],
    outcome: 'Build an agile, future-ready workforce aligned with organizational goals and evolving employee expectations.',
    ctaText: 'Inquire Corporate Consulting'
  }
];

export default function CoachingPrograms({ onOpenBooking, onOpenCalculator, activeTabProp, onTabChange }) {
  const [activeTab, setActiveTab] = useState(activeTabProp || 'coaching');
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);
  const [activeZoomImage, setActiveZoomImage] = useState(null);

  React.useEffect(() => {
    if (activeTabProp) {
      setActiveTab(activeTabProp);
    }
  }, [activeTabProp]);

  const handleTabClick = (id) => {
    setActiveTab(id);
    if (onTabChange) onTabChange(id);
  };

  const openZoomImage = (imgSrc) => {
    setActiveZoomImage(imgSrc);
    setIsZoomModalOpen(true);
  };

  const currentService = SERVICES.find(s => s.id === activeTab) || SERVICES[0];

  return (
    <section id="coaching" className="py-24 relative overflow-hidden border-t border-amber-500/20">
      <div id="consulting" className="absolute -top-24 left-0" />
      
      {/* Bespoke Dynamic Living Background */}
      <SectionBackground variant="deep" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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
                onClick={() => handleTabClick(item.id)}
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

              {/* Right Image Display & Outcome Box */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                
                {/* Clickable Image Box with Zoom Hint */}
                <div 
                  className="rounded-2xl overflow-hidden glass-panel shadow-xl cursor-pointer group/img transition-all hover:shadow-2xl border border-slate-200 relative"
                  onClick={() => openZoomImage(currentService.image)}
                >
                  <img
                    src={currentService.image}
                    alt={currentService.heading}
                    className="w-full h-auto max-h-[380px] object-contain bg-white/95 p-2 transform group-hover/img:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-slate-900/80 text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 backdrop-blur-md opacity-90 group-hover/img:opacity-100">
                    <Maximize2 className="w-3 h-3 text-amber-400" />
                    <span>Click to Zoom HD</span>
                  </div>
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

              {/* Special Render for 4-Step Framework Points (Coaching) */}
              {currentService.frameworkSteps && (
                <div className="lg:col-span-12 col-span-full mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-sm font-extrabold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                      <Compass className="w-4 h-4 text-amber-400" />
                      <span>Executive Career Clarity 4-Step Framework:</span>
                    </h4>
                    {currentService.secondaryImage && (
                      <button
                        onClick={() => openZoomImage(currentService.secondaryImage)}
                        className="text-xs font-bold text-amber-400 hover:text-amber-300 underline flex items-center gap-1 cursor-pointer"
                      >
                        <Maximize2 className="w-3 h-3" />
                        <span>View 7-Phase Roadmap Diagram</span>
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {currentService.frameworkSteps.map((step, sIdx) => (
                      <div key={sIdx} className="p-5 rounded-2xl bg-white/5 border border-white/15 shadow-md hover:border-amber-400/50 hover:bg-white/10 transition-all flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center shadow-xs">
                              {step.step}
                            </span>
                            <CheckCircle2 className="w-4 h-4 text-amber-400" />
                          </div>
                          <h5 className="font-serif-heading text-sm font-extrabold text-white mb-1">
                            {step.title}
                          </h5>
                          <p className="text-[11px] font-semibold text-amber-300 mb-3 leading-snug">
                            {step.desc}
                          </p>
                          <ul className="space-y-1.5 border-t border-white/10 pt-3">
                            {step.points.map((pt, pIdx) => (
                              <li key={pIdx} className="text-xs text-slate-200 font-medium flex items-start gap-1.5">
                                <span className="text-amber-400 font-bold">•</span>
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Special Render for Packages (Coaching) */}
              {currentService.packages && (
                <div className="lg:col-span-12 col-span-full mt-8 pt-6 border-t border-white/10">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 mb-4">Core Program Pathways:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {currentService.packages.map((pkg, pIdx) => (
                      <div key={pIdx} className="p-4 rounded-2xl bg-white/5 border border-white/15 text-left hover:border-amber-400/50 hover:bg-white/10 transition-all">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 block mb-1">{pkg.badge}</span>
                        <h5 className="font-serif-heading text-sm font-bold mb-1 text-white">{pkg.title}</h5>
                        <p className="text-xs opacity-90 text-slate-200 leading-snug">{pkg.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Special Render for Pillars (Consulting) */}
              {currentService.consultingPillars && (
                <div className="lg:col-span-12 col-span-full mt-8 pt-6 border-t border-white/10">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-amber-400 mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                    <span>6 Core Consulting Pillars:</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {currentService.consultingPillars.map((pil, pIdx) => (
                      <div key={pIdx} className="p-5 rounded-2xl bg-white/5 border border-white/15 text-left shadow-lg hover:border-amber-400/50 hover:bg-white/10 transition-all">
                        <h5 className="font-serif-heading text-xs font-bold mb-2 text-amber-300 tracking-wide uppercase">{pil.title}</h5>
                        <p className="text-xs text-slate-200 leading-relaxed font-normal">{pil.desc}</p>
                      </div>
                    ))}
                  </div>
                  {currentService.linkedinUrl && (
                    <div className="mt-5 text-right">
                      <a
                        href={currentService.linkedinUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 underline"
                      >
                        <span>Visit Fatima's LinkedIn Profile & Advisory background &rarr;</span>
                      </a>
                    </div>
                  )}
                </div>
              )}

            </div>
          </div>
        )}

      </div>

      {/* FULLSCREEN IMAGE ZOOM MODAL (Mounted directly to document.body) */}
      {isZoomModalOpen && activeZoomImage && typeof document !== 'undefined' && createPortal(
        <div 
          className="fixed inset-0 z-[99999] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setIsZoomModalOpen(false)}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center animate-scaleUp">
            <button
              onClick={() => setIsZoomModalOpen(false)}
              className="absolute -top-12 right-0 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 text-xs font-bold flex items-center gap-1 backdrop-blur-md transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
              <span>Close View</span>
            </button>
            <img
              src={activeZoomImage}
              alt="High Definition Framework & Roadmap Diagram"
              className="w-full h-auto max-h-[80vh] object-contain rounded-2xl bg-white shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-white/80 text-xs font-semibold mt-4 text-center">
              Executive Career Clarity Framework & Roadmap | Care to Voice by Fatima Abreu
            </p>
          </div>
        </div>,
        document.body
      )}

    </section>
  );
}
