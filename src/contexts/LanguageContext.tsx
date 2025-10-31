import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Language types
export type Language = 'en' | 'ar';

// Translation keys
export interface Translations {
  // Navbar
  nav: {
    products: string;
    designs: string;
    features: string;
    startDesigning: string;
  };

  // Hero
  hero: {
    title1: string;
    title2: string;
    title3: string;
    subtitle1: string;
    subtitle2: string;
    subtitle3: string;
    startDesigning: string;
    watchDemo: string;
  };

  // About Us
  about: {
    title: string;
    subtitle1: string;
    subtitle2: string;
    startCreating: string;
  };

  // Features
  features: {
    creativeFreedom: {
      title: string;
      description: string;
    };
    fastDelivery: {
      title: string;
      description: string;
    };
    globalCommunity: {
      title: string;
      description: string;
    };
    threeDPreview: {
      title: string;
      description: string;
    };
  };

  // Products
  products: {
    title: string;
    subtitle: string;
    tshirt: {
      name: string;
      description: string;
    };
    hoodie: {
      name: string;
      description: string;
    };
    cup: {
      name: string;
      description: string;
    };
    bag: {
      name: string;
      description: string;
    };
    customize: string;
    viewAll: string;
  };

  // Designs
  designs: {
    title: string;
    subtitle: string;
    useTemplate: string;
    viewAllTemplates: string;
  };

  // Testimonials
  testimonials: {
    headerBadge: string;
    title: string;
    subtitle: string;
  };

  // Footer
  footer: {
    about: string;
    contact: string;
    privacy: string;
    terms: string;
    followUs: string;
    madeWith: string;
    forCreators: string;
  };
}

// Load translations from JSON files
import enTranslations from '@/translations/en.json';
import arTranslations from '@/translations/ar.json';

// Translations data
const translations: Record<Language, Translations> = {
  en: enTranslations as Translations,
  ar: arTranslations as Translations,
};

// Context interface
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  isRTL: boolean;
}

// Create context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Provider component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('yome-language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ar')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language to localStorage when it changes
  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('yome-language', lang);

    // Update document direction for RTL support
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  // Set initial direction
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const value: LanguageContextType = {
    language,
    setLanguage: changeLanguage,
    t: translations[language],
    isRTL: language === 'ar'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;