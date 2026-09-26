import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Bot, User, Calendar, BookOpen, Mic, ShoppingBag, ArrowRight, RefreshCw } from 'lucide-react';
import logger from '../utils/logger';

export default function Chatbot({ onOpenBooking, onOpenQuiz, onOpenCart }) {
  const fatimaPhotoUrl = "https://static.wixstatic.com/media/68c1c8_4c4ba09289284e7f9711a6eb51186fbb~mv2.jpg/v1/crop/x_0,y_123,w_1067,h_1276/fill/w_856,h_1053,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/68c1c8_4c4ba09289284e7f9711a6eb51186fbb~mv2.jpg";
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'bot',
      text: "Hello! I'm Fatima's Care to Voice AI Assistant. How can I help you today? Ask me anything about our coaching programs, workforce consulting, book, podcast, or booking a clarity call!",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      actionButtons: [
        { label: '📅 Book Clarity Call', type: 'booking' },
        { label: '✨ Career Quiz', type: 'quiz' },
        { label: '📖 Read Book Sample', type: 'book' }
      ]
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      logger.event('chatbot_opened');
    }
  }, [isOpen, messages, isTyping]);

  const quickPrompts = [
    "What coaching programs are offered?",
    "Tell me about Fatima and Care to Voice",
    "How do I buy the book 'Be The Reason You Thrive'?",
    "Tell me about the Care to Voice Podcast",
    "How can I book a 15-min Clarity Call?"
  ];

  // Comprehensive Intelligent AI Brain & Semantic Intent Engine
  const generateBotResponse = (userQuery) => {
    const q = userQuery.toLowerCase().trim();

    // 1. Direct Booking Intent
    if (q.includes('book') && (q.includes('call') || q.includes('clarity') || q.includes('session') || q.includes('appointment') || q.includes('schedule') || q.includes('meeting') || q.includes('time') || q.includes('talk'))) {
      return {
        text: "You can book a 15-minute 1-on-1 Future Career Clarity Call directly with Fatima. It's designed to help high-achieving professionals find clear direction in an evolving landscape.",
        actionButtons: [{ label: '📅 Open Booking Calendar', type: 'booking' }]
      };
    }

    // 2. Career Confusion / Stress / Burnout / Job Switch
    if (q.includes('stress') || q.includes('burnout') || q.includes('stuck') || q.includes('frustrated') || q.includes('confused') || q.includes('tired') || q.includes('hate') || q.includes('quit') || q.includes('switch') || q.includes('direction') || q.includes('sad') || q.includes('lost') || q.includes('purpose') || q.includes('help') || q.includes('problem')) {
      return {
        text: "Feeling stuck or overwhelmed in your current role is a powerful signal that your work is no longer aligned with your core purpose or growth trajectory.\n\nFatima’s *Choose Direction Framework* helps professionals cut through workplace noise, restore inner clarity, and build a structured 90-day action plan.",
        actionButtons: [
          { label: '✨ Take 3-Min Alignment Quiz', type: 'quiz' },
          { label: '📅 Book 1-on-1 Clarity Call', type: 'booking' }
        ]
      };
    }

    // 3. AI & Future of Work / Automation Concerns
    if (q.includes('ai') || q.includes('artificial intelligence') || q.includes('robot') || q.includes('automation') || q.includes('replace') || q.includes('future') || q.includes('skill') || q.includes('technology')) {
      return {
        text: "As AI automates routine tasks, **human self-leadership, strategic voice, and emotional clarity** become your greatest competitive advantage.\n\nFatima works with senior leaders and organizations to navigate AI shifts without losing purpose or human connection.",
        actionButtons: [
          { label: '📖 Read Book Sample', type: 'book' },
          { label: '📅 Schedule Discovery Call', type: 'booking' }
        ]
      };
    }

    // 4. Salary / Promotion / Career Growth / Money / Compensation
    if (q.includes('salary') || q.includes('pay') || q.includes('money') || q.includes('promotion') || q.includes('raise') || q.includes('compensation') || q.includes('reward') || q.includes('negotiate') || q.includes('growth') || q.includes('income')) {
      return {
        text: "Fatima brings over 15+ years of enterprise experience leading Global Reward & Workforce Strategy across international organizations.\n\nTrue financial & career advancement comes from clearly articulating your strategic value, not just working longer hours.",
        actionButtons: [
          { label: '📅 Book Executive Call', type: 'booking' },
          { label: '✨ Take Alignment Quiz', type: 'quiz' }
        ]
      };
    }

    // 5. Boss / Leadership / Toxic Workplace / Team Conflict
    if (q.includes('boss') || q.includes('manager') || q.includes('toxic') || q.includes('politics') || q.includes('team') || q.includes('leader') || q.includes('leadership') || q.includes('conflict') || q.includes('environment')) {
      return {
        text: "Workplace politics and toxic environments often stem from unaligned leadership and compromised boundaries.\n\nFatima’s book *'Be The Reason You Thrive'* provides practical frameworks to command executive respect, protect your peace, and lead with authentic voice.",
        actionButtons: [
          { label: '📖 Explore Fatima\'s Book', type: 'book' },
          { label: '📅 Book Clarity Session', type: 'booking' }
        ]
      };
    }

    // 6. Fatima's Coaching & Programs
    if (q.includes('coaching') || q.includes('program') || q.includes('service') || q.includes('advisory') || q.includes('pricing') || q.includes('cost') || q.includes('offer') || q.includes('detail')) {
      return {
        text: "Care to Voice offers 3 primary coaching & consulting paths:\n\n1. **1-on-1 Future Career Clarity**: Personalized coaching for leaders navigating pivots or career friction.\n2. **Executive Advisory**: Strategic leadership alignment & self-leadership.\n3. **Workforce & Rewards Consulting**: Enterprise advisory for organizations adapting to AI & reward shifts.\n\nAll journeys begin with a 15-minute Clarity Call.",
        actionButtons: [
          { label: '📅 Book a Clarity Call', type: 'booking' },
          { label: '✨ Take Alignment Quiz', type: 'quiz' }
        ]
      };
    }

    // 7. About Fatima & Background
    if (q.includes('fatima') || q.includes('who') || q.includes('about') || q.includes('founder') || q.includes('author') || q.includes('background') || q.includes('bio') || q.includes('experience')) {
      return {
        text: "Fatima Abreu is the Founder & Principal Coach of Care to Voice and Author of *'Be The Reason You Thrive'*. She brings extensive global experience leading Reward, Performance, and Workforce initiatives across enterprise companies, empowering leaders to align work with purpose.",
        actionButtons: [
          { label: '📖 View Fatima\'s Book', type: 'book' },
          { label: '📅 Book Call with Fatima', type: 'booking' }
        ]
      };
    }

    // 8. Book Info
    if (q.includes('book') || q.includes('thrive') || q.includes('chapter') || q.includes('read') || q.includes('author') || q.includes('buy book')) {
      return {
        text: "*'Be The Reason You Thrive'* by Fatima is a practical guide to self-leadership, career clarity, and thriving amid workplace noise and AI evolution.\n\nIt features 6 core chapters focusing on purpose, resilience, emotional balance, and intentional direction.",
        actionButtons: [
          { label: '🛍️ Order Hardcover in Shop', type: 'shop' },
          { label: '📖 Read Sample Chapter', type: 'book' }
        ]
      };
    }

    // 9. Podcast & Audio
    if (q.includes('podcast') || q.includes('listen') || q.includes('audio') || q.includes('episode') || q.includes('spotify')) {
      return {
        text: "The **Care to Voice Podcast** ('No noise. Just perspective.') explores intentional career navigation, workforce trends, and self-leadership. Available on Spotify, Apple Podcasts, and our website!",
        actionButtons: [
          { label: '🎙️ Listen to Podcast', type: 'audio' }
        ]
      };
    }

    // 10. YouTube Videos
    if (q.includes('youtube') || q.includes('video') || q.includes('watch') || q.includes('channel') || q.includes('masterclass')) {
      return {
        text: "Fatima's official YouTube channel **@FatimaCaretoVoice** features video masterclasses on Executive Career Clarity, Book Chapter Deep Dives, and Workforce Transformation keynotes!",
        actionButtons: [
          { label: '📺 View YouTube Section', type: 'youtube' }
        ]
      };
    }

    // 11. Quiz / Assessment
    if (q.includes('quiz') || q.includes('test') || q.includes('alignment') || q.includes('assessment')) {
      return {
        text: "Our 3-minute **Career Alignment Quiz** analyzes your current career momentum, friction points, and leadership clarity to give you personalized recommendations.",
        actionButtons: [
          { label: '✨ Start 3-Min Quiz Now', type: 'quiz' }
        ]
      };
    }

    // 12. Shop & E-Commerce
    if (q.includes('shop') || q.includes('buy') || q.includes('merch') || q.includes('cart') || q.includes('order') || q.includes('price') || q.includes('store')) {
      return {
        text: "Our Care to Voice Store offers:\n• *Be The Reason You Thrive* (Hardcover & Digital)\n• Purpose & Clarity Daily Journal\n• Executive Reflection Prompt Cards\n• Care to Voice Official Merch",
        actionButtons: [
          { label: '🛍️ Open Shop & Cart', type: 'cart' }
        ]
      };
    }

    // 13. Friendly Greetings & Casual Chitchat
    if (q.includes('hi') || q.includes('hello') || q.includes('hey') || q.includes('namaste') || q.includes('good morning') || q.includes('good evening') || q.includes('greetings')) {
      return {
        text: "Hello! Welcome to Care to Voice. I'm your AI Clarity Guide. Whether you're exploring career pivots, leadership growth, or Fatima's book, I'm here to help you!",
        actionButtons: [
          { label: '📅 Book Clarity Call', type: 'booking' },
          { label: '✨ Take Alignment Quiz', type: 'quiz' }
        ]
      };
    }

    // 14. Off-Topic / Fun / Quirky Queries (Smart Intent Redirect)
    if (q.includes('joke') || q.includes('game') || q.includes('movie') || q.includes('weather') || q.includes('food') || q.includes('song') || q.includes('love') || q.includes('who are you') || q.includes('bot')) {
      return {
        text: "That’s an interesting topic! While I’m programmed as Fatima’s Care to Voice AI Guide, I believe every great question starts with curiosity.\n\nIn work and life, taking control of your personal direction is what truly brings joy and clarity. Would you like to test your Career Alignment or book a clarity call with Fatima?",
        actionButtons: [
          { label: '✨ Take Career Quiz', type: 'quiz' },
          { label: '📅 Book a Clarity Call', type: 'booking' },
          { label: '📖 Read Book Sample', type: 'book' }
        ]
      };
    }

    // 15. Intelligent Fallback (Gracefully ties ANY question back to Care to Voice)
    return {
      text: `I see you're asking about "${userQuery}". While that's a unique topic, Care to Voice is all about helping you find clarity, purpose, and executive direction in your career and workplace.\n\nHow would you like to proceed?`,
      actionButtons: [
        { label: '📅 Book 15-Min Clarity Call', type: 'booking' },
        { label: '✨ Take 3-Min Alignment Quiz', type: 'quiz' },
        { label: '📖 Read Book Sample', type: 'book' }
      ]
    };
  };

  const handleSend = (textToSend = inputText) => {
    const trimmed = textToSend.trim();
    if (!trimmed) return;

    const userMessage = {
      id: `usr_${Date.now()}`,
      sender: 'user',
      text: trimmed,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    logger.chat('User', trimmed);

    setTimeout(() => {
      const response = generateBotResponse(trimmed);
      const botMessage = {
        id: `bot_${Date.now()}`,
        sender: 'bot',
        text: response.text,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actionButtons: response.actionButtons
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
      logger.chat('CareToVoice Bot', response.text, { actionButtons: response.actionButtons });
    }, 700);
  };

  const handleActionButtonClick = (actionType) => {
    logger.event('chatbot_action_clicked', { actionType });
    if (actionType === 'booking' && onOpenBooking) {
      onOpenBooking();
      setIsOpen(false);
    } else if (actionType === 'quiz' && onOpenQuiz) {
      onOpenQuiz();
      setIsOpen(false);
    } else if (actionType === 'cart' || actionType === 'shop') {
      if (onOpenCart) onOpenCart();
      const shopEl = document.getElementById('shop');
      if (shopEl) shopEl.scrollIntoView({ behavior: 'smooth' });
    } else if (actionType === 'book') {
      const bookEl = document.getElementById('book');
      if (bookEl) bookEl.scrollIntoView({ behavior: 'smooth' });
    } else if (actionType === 'audio') {
      const podcastEl = document.getElementById('podcast');
      if (podcastEl) podcastEl.scrollIntoView({ behavior: 'smooth' });
    } else if (actionType === 'youtube') {
      const youtubeEl = document.getElementById('youtube');
      if (youtubeEl) youtubeEl.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Floating Interactive Fatima Avatar Trigger */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end group">
        
        {/* Animated Hover Speech Bubble - "Ask Fatima AI" */}
        <div className="mb-3 px-4 py-2 rounded-2xl bg-slate-900/95 light:bg-white text-slate-100 light:text-slate-900 border border-amber-500/40 shadow-2xl backdrop-blur-xl transition-all duration-300 transform group-hover:-translate-y-1 group-hover:scale-105 group-hover:border-amber-400 flex items-center gap-2 pointer-events-auto cursor-pointer animate-float-slow"
             onClick={() => setIsOpen(!isOpen)}>
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
          </span>
          <span className="text-xs font-extrabold tracking-wide text-amber-400 light:text-amber-700 flex items-center gap-1.5">
            Ask Fatima AI <span className="text-sm">✨</span>
          </span>
          <span className="hidden group-hover:inline text-[11px] font-medium opacity-90 text-slate-300 light:text-slate-700 transition-opacity">
            anything!
          </span>
          {/* Speech bubble tail */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-slate-900 light:bg-white border-r border-b border-amber-500/40 rotate-45" />
        </div>

        {/* Fatima Photo Avatar Trigger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative p-0.5 rounded-full transition-all duration-300 transform group-hover:scale-110 active:scale-95 focus:outline-none"
          aria-label="Toggle Care to Voice AI Assistant"
        >
          {/* Concentric Glowing Soundwave Aura */}
          <span className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-amber-500/50 via-rose-500/40 to-amber-500/50 blur-md group-hover:opacity-100 opacity-75 animate-pulse pointer-events-none" />

          {isOpen ? (
            /* Close Button inside futuristic orb */
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-slate-950 border-2 border-amber-500/80 flex items-center justify-center text-amber-400 shadow-2xl relative z-10 hover:rotate-90 transition-transform duration-300">
              <X className="w-7 h-7" />
            </div>
          ) : (
            /* Circular Fatima Photo Avatar */
            <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-amber-500/80 shadow-2xl overflow-hidden bg-slate-950 p-0.5 group-hover:border-amber-400 transition-all duration-300 flex items-center justify-center">
              <img
                src={fatimaPhotoUrl}
                alt="Fatima Care to Voice AI Guide"
                className="w-full h-full object-cover object-top rounded-full"
              />
              <span className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-slate-950 rounded-full flex items-center justify-center text-[9px] font-bold text-white shadow-md">
                ✓
              </span>
            </div>
          )}
        </button>
      </div>

      {/* Chatbot Modal Dialog */}
      {isOpen && (
        <div className="fixed bottom-28 right-4 sm:right-6 w-[92vw] sm:w-[420px] h-[580px] max-h-[82vh] glass-panel rounded-3xl border border-[var(--border-subtle)] shadow-2xl z-50 flex flex-col overflow-hidden animate-fadeIn backdrop-blur-2xl">
          
          {/* Header with Fatima Photo */}
          <div className="p-4 bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-950 border-b border-[var(--border-subtle)] flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Fatima Header Avatar */}
              <div className="w-10 h-10 rounded-full border-2 border-amber-500/80 overflow-hidden shadow-lg relative shrink-0">
                <img src={fatimaPhotoUrl} alt="Fatima" className="w-full h-full object-cover object-top" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-slate-950" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-serif-heading font-bold text-sm text-white">Fatima's AI Assistant</h3>
                  <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-[9px] font-bold uppercase tracking-wider">
                    Online ✨
                  </span>
                </div>
                <p className="text-[10px] text-slate-400">Care to Voice • Executive Clarity Guide</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 font-sans text-xs leading-relaxed">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 shadow-md ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-medium rounded-br-none'
                      : 'glass-panel border border-[var(--border-subtle)] text-[var(--text-main)] rounded-bl-none'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>

                  {/* Interactive Action Buttons in Bot Messages */}
                  {msg.actionButtons && msg.actionButtons.length > 0 && (
                    <div className="mt-3 pt-2.5 border-t border-white/10 flex flex-wrap gap-2">
                      {msg.actionButtons.map((btn, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleActionButtonClick(btn.type)}
                          className="gradient-btn px-3 py-1.5 rounded-full text-[11px] font-bold flex items-center gap-1.5 shadow-md transition-transform hover:scale-105"
                        >
                          <span>{btn.label}</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <span className="text-[9px] opacity-40 px-1 pt-1">{msg.time}</span>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 text-slate-400 text-xs p-2">
                <Bot className="w-4 h-4 text-amber-400 animate-bounce" />
                <span className="italic text-amber-400/90 font-medium">CareBot is thinking...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Bar */}
          <div className="px-3 py-2 border-t border-[var(--border-subtle)] bg-[var(--bg-card)] overflow-x-auto whitespace-nowrap scrollbar-none flex items-center gap-2">
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt)}
                className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[10px] font-bold text-amber-500 light:text-amber-700 hover:border-amber-400 transition-colors shrink-0"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Footer */}
          <div className="p-3 border-t border-[var(--border-subtle)] bg-[var(--bg-main)]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask Care to Voice AI Guide..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="flex-1 glass-panel border border-[var(--border-subtle)] rounded-full px-4 py-2.5 text-xs focus:outline-none focus:border-amber-500"
              />
              <button
                type="submit"
                disabled={!inputText.trim()}
                className="gradient-btn p-2.5 rounded-full text-slate-950 disabled:opacity-40 disabled:cursor-not-allowed shadow-md"
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </form>
          </div>

        </div>
      )}
    </>
  );
}
