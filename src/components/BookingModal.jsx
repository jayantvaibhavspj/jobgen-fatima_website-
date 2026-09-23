import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, User, Mail, Phone, MessageSquare, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

const TIME_SLOTS = [
  '09:30 AM', '11:00 AM', '01:30 PM', '03:00 PM', '04:30 PM', '06:00 PM'
];

export default function BookingModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [selectedObjective, setSelectedObjective] = useState('Career Direction & Alignment');
  const [selectedDate, setSelectedDate] = useState('2026-09-25');
  const [selectedTime, setSelectedTime] = useState('11:00 AM');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', note: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.5 }
    });
  };

  const handleReset = () => {
    setStep(1);
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl glass-panel rounded-3xl p-6 sm:p-8 border border-[var(--border-subtle)] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Background Ambient Glow */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full opacity-70 hover:opacity-100"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-5 h-5 text-amber-500" />
              <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
                15-Min Complimentary Call
              </span>
            </div>

            <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold mb-2">
              Book Your Clarity Consultation
            </h3>
            <p className="text-sm opacity-85 mb-6">
              Select your goal and preferred time to speak directly with Fatima.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Objective Selector */}
              <div>
                <label className="block text-xs font-semibold uppercase opacity-85 mb-2">
                  Primary Focus / Goal
                </label>
                <select
                  value={selectedObjective}
                  onChange={(e) => setSelectedObjective(e.target.value)}
                  className="w-full glass-panel border border-[var(--border-subtle)] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500"
                >
                  <option className="bg-slate-900 text-white">Career Direction & Alignment</option>
                  <option className="bg-slate-900 text-white">1-on-1 Executive Coaching</option>
                  <option className="bg-slate-900 text-white">Total Rewards & Workforce Consulting</option>
                  <option className="bg-slate-900 text-white">Book & Publication Collaboration</option>
                </select>
              </div>

              {/* Date & Time Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase opacity-85 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    min="2026-09-23"
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full glass-panel border border-[var(--border-subtle)] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase opacity-85 mb-2">
                    Time Slot (UTC / EST)
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {TIME_SLOTS.map((slot) => (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setSelectedTime(slot)}
                        className={`py-2 text-xs font-semibold rounded-lg border transition-all ${
                          selectedTime === slot
                            ? 'bg-amber-500 text-slate-950 border-amber-500 font-bold shadow-md'
                            : 'glass-panel opacity-80 hover:opacity-100 hover:border-amber-500/50'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Information inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase opacity-85 mb-1">
                    Your Full Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 opacity-50 absolute left-3 top-3.5" />
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full glass-panel border border-[var(--border-subtle)] rounded-xl pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase opacity-85 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 opacity-50 absolute left-3 top-3.5" />
                    <input
                      type="email"
                      placeholder="jane@example.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full glass-panel border border-[var(--border-subtle)] rounded-xl pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase opacity-85 mb-1">
                  Brief Note on Your Current Situation (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="Share a brief overview of what you'd like to discuss..."
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  className="w-full glass-panel border border-[var(--border-subtle)] rounded-xl p-3 text-sm focus:outline-none focus:border-amber-500"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full gradient-btn py-3.5 rounded-full text-sm font-bold flex items-center justify-center gap-2 shadow-xl"
              >
                <CheckCircle2 className="w-5 h-5" />
                <span>Confirm & Reserve Call Slot</span>
              </button>

            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-rose-500 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-amber-500/20">
              <CheckCircle2 className="w-10 h-10 text-slate-950" />
            </div>

            <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/40 text-xs font-bold text-amber-500 uppercase tracking-widest mb-3">
              Consultation Confirmed
            </span>

            <h3 className="text-2xl sm:text-3xl font-serif-heading font-bold mb-2">
              You're All Set, {formData.name || 'Friend'}!
            </h3>

            <p className="text-sm opacity-85 max-w-md mx-auto mb-6">
              A calendar invite and Zoom link for <strong className="text-amber-500">{selectedDate} at {selectedTime}</strong> has been dispatched to <strong>{formData.email}</strong>.
            </p>

            <div className="glass-panel p-4 rounded-xl border border-[var(--border-subtle)] text-left max-w-sm mx-auto mb-6 text-xs opacity-85 space-y-1">
              <div><strong>Focus Area:</strong> {selectedObjective}</div>
              <div><strong>Host:</strong> Fatima (Care to Voice)</div>
              <div><strong>Duration:</strong> 15 Minutes</div>
              <div><strong>Date & Time:</strong> {selectedDate} at {selectedTime}</div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  const icsData = `BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Care to Voice//EN\nBEGIN:VEVENT\nSUMMARY:15-Min Clarity Call with Fatima (${selectedObjective})\nDESCRIPTION:Care to Voice Clarity Call with Fatima. Focus: ${selectedObjective}\nDTSTART:${selectedDate.replace(/-/g, '')}T110000Z\nDTEND:${selectedDate.replace(/-/g, '')}T111500Z\nLOCATION:Zoom Video Call\nEND:VEVENT\nEND:VCALENDAR`;
                  const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
                  const url = URL.createObjectURL(blob);
                  const link = document.createElement('a');
                  link.href = url;
                  link.download = `CareToVoice_ClarityCall_${selectedDate}.ics`;
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="px-6 py-3 rounded-full glass-panel border border-emerald-500/40 text-xs font-bold text-emerald-400 hover:bg-emerald-500/10 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-emerald-400" />
                <span>Add to Calendar (.ICS)</span>
              </button>

              <button
                onClick={handleReset}
                className="gradient-btn px-8 py-3 rounded-full text-xs font-bold"
              >
                Done & Return to Site
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
