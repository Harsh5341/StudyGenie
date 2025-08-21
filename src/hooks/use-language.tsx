
"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

const translations = {
  en: {
    "header.title": "StudyGenie",
    "header.logout": "Log out",
  },
  hi: {
    "header.title": "स्टडीजीनी",
    "header.logout": "लॉग आउट",
  },
  mr: {
    "header.title": "स्टडीजीनी",
    "header.logout": "लॉग आउट",
  }
};

type Language = keyof typeof translations;

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  getTranslation: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const getTranslation = (key: string) => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  const value = {
    language,
    setLanguage: (lang: Language) => setLanguage(lang),
    getTranslation,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
