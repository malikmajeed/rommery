'use client';

import { LanguageProvider } from '@/context/LanguageContext';

export function LanguageProviderWrapper({ children, translations }) {
  return (
    <LanguageProvider translations={translations}>
      {children}
    </LanguageProvider>
  );
}
