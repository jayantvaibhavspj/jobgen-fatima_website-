import React, { useState, useEffect } from 'react';
import { Sun, Moon, ChevronDown } from 'lucide-react';
import logger from '../utils/logger';

export default function ThemeToggle() {
  const [themeMode, setThemeMode] = useState(() => {
    const saved = localStorage.getItem('care-theme-mode');
    return (saved === 'light' || saved === 'dark') ? saved : 'dark';
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    root.classList.remove('light', 'dark');
    root.classList.add(themeMode);
    root.setAttribute('data-theme', themeMode);

    if (body) {
      body.classList.remove('light', 'dark');
      body.classList.add(themeMode);
    }

    localStorage.setItem('care-theme-mode', themeMode);
    logger.event('theme_updated', { themeMode });
  }, [themeMode]);

  const modes = [
    { id: 'light', label: 'Light Mode', icon: Sun },
    { id: 'dark', label: 'Dark Mode', icon: Moon }
  ];

  const currentModeObj = modes.find(m => m.id === themeMode) || modes[1];
  const CurrentIcon = currentModeObj.icon;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="theme-toggle-btn flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold hover:border-emerald-500 transition-all shadow-sm"
        title="Toggle Theme Mode (Light / Dark)"
      >
        <CurrentIcon className="w-3.5 h-3.5 text-emerald-500" />
        <span className="capitalize">{currentModeObj.label}</span>
        <ChevronDown className="w-3 h-3 opacity-70" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 glass-panel rounded-2xl p-1.5 shadow-2xl z-50 animate-fadeIn">
          {modes.map((m) => {
            const Icon = m.icon;
            const isSelected = themeMode === m.id;
            return (
              <button
                key={m.id}
                onClick={() => {
                  setThemeMode(m.id);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                  isSelected
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-md'
                    : 'opacity-80 hover:opacity-100 hover:bg-white/10'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-slate-950' : 'text-emerald-500'}`} />
                <span>{m.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
