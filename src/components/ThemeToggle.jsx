import { useEffect } from 'react';
import logger from '../utils/logger';

export default function ThemeToggle() {
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    root.classList.remove('dark');
    root.classList.add('light');
    root.setAttribute('data-theme', 'light');

    if (body) {
      body.classList.remove('dark');
      body.classList.add('light');
    }

    localStorage.setItem('care-theme-mode', 'light');
    logger.event('theme_updated', { themeMode: 'light' });
  }, []);

  return null;
}

