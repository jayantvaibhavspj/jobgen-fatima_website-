/**
 * Care to Voice - Structured Event & Interaction Logger Utility
 * Handles formatted console logging & persistent browser storage for user actions, 
 * chatbot interactions, bookings, quizzes, cart actions, and theme updates.
 */

const MAX_STORED_LOGS = 100;
const STORAGE_KEY = 'care_to_voice_app_logs';

class AppLogger {
  constructor() {
    this.logs = this.loadLogsFromStorage();
  }

  loadLogsFromStorage() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.warn('[Logger] Failed to read logs from localStorage:', e);
      return [];
    }
  }

  saveLogsToStorage() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.logs.slice(-MAX_STORED_LOGS)));
    } catch (e) {
      console.warn('[Logger] Failed to persist logs to localStorage:', e);
    }
  }

  createLogEntry(level, category, message, data = null) {
    const entry = {
      id: `log_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
      timestamp: new Date().toISOString(),
      displayTime: new Date().toLocaleTimeString(),
      level,
      category,
      message,
      data
    };

    this.logs.push(entry);
    this.saveLogsToStorage();
    return entry;
  }

  info(category, message, data = null) {
    const entry = this.createLogEntry('INFO', category, message, data);
    console.log(
      `%c[CareToVoice INFO] %c[${category}] %c${message}`,
      'color: #10B981; font-weight: bold;',
      'color: #06B6D4; font-weight: bold;',
      'color: inherit;',
      data || ''
    );
    return entry;
  }

  event(eventName, data = null) {
    const entry = this.createLogEntry('EVENT', eventName, `User triggered event: ${eventName}`, data);
    console.log(
      `%c[CareToVoice EVENT] %c${eventName}`,
      'color: #F59E0B; font-weight: bold;',
      'color: #10B981; font-weight: bold;',
      data || ''
    );
    return entry;
  }

  chat(sender, message, data = null) {
    const entry = this.createLogEntry('CHAT', sender, message, data);
    console.log(
      `%c[CareToVoice CHAT] %c[${sender}] %c${message}`,
      'color: #8B5CF6; font-weight: bold;',
      'color: #EC4899; font-weight: bold;',
      'color: inherit;',
      data || ''
    );
    return entry;
  }

  warn(category, message, data = null) {
    const entry = this.createLogEntry('WARN', category, message, data);
    console.warn(`[CareToVoice WARN] [${category}] ${message}`, data || '');
    return entry;
  }

  error(category, message, error = null) {
    const entry = this.createLogEntry('ERROR', category, message, { error: error?.toString(), stack: error?.stack });
    console.error(`[CareToVoice ERROR] [${category}] ${message}`, error || '');
    return entry;
  }

  getStoredLogs() {
    return this.logs;
  }

  clearLogs() {
    this.logs = [];
    localStorage.removeItem(STORAGE_KEY);
    console.log('%c[CareToVoice Logger] All logs cleared.', 'color: #EF4444; font-weight: bold;');
  }
}

export const logger = new AppLogger();
export default logger;
