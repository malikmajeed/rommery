'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext(null);

function getStoredLocale() {
  if (typeof window === 'undefined') return 'en';
  try {
    const stored = localStorage.getItem('rommery-locale');
    return stored === 'de' ? 'de' : 'en';
  } catch {
    return 'en';
  }
}

export function LanguageProvider({ children, translations }) {
  const [locale, setLocaleState] = useState('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = getStoredLocale();
    setLocaleState(stored);
    setMounted(true);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = stored === 'de' ? 'de' : 'en';
    }
  }, []);

  const setLocale = (next) => {
    setLocaleState(next);
    try {
      localStorage.setItem('rommery-locale', next);
    } catch {}
    if (typeof document !== 'undefined') {
      document.documentElement.lang = next === 'de' ? 'de' : 'en';
    }
  };

  const t = (key) => {
    if (!key || typeof key !== 'string') return '';
    const dict = translations?.[locale] ?? translations?.en;
    const value = key.split('.').reduce((o, k) => (o && o[k]) ?? null, dict);
    return value ?? key;
  };

  const value = { t, locale, setLocale, mounted, translations };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
