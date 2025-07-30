'use client';

import React, { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, LanguageIcon } from '@heroicons/react/24/outline';

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  rtl?: boolean;
}

const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇵🇹' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦', rtl: true },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', flag: '🇹🇷' },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', flag: '🇳🇱' },
  { code: 'sv', name: 'Swedish', nativeName: 'Svenska', flag: '🇸🇪' },
  { code: 'no', name: 'Norwegian', nativeName: 'Norsk', flag: '🇳🇴' },
  { code: 'da', name: 'Danish', nativeName: 'Dansk', flag: '🇩🇰' },
  { code: 'fi', name: 'Finnish', nativeName: 'Suomi', flag: '🇫🇮' },
  { code: 'pl', name: 'Polish', nativeName: 'Polski', flag: '🇵🇱' },
  { code: 'cs', name: 'Czech', nativeName: 'Čeština', flag: '🇨🇿' },
  { code: 'sk', name: 'Slovak', nativeName: 'Slovenčina', flag: '🇸🇰' },
  { code: 'hu', name: 'Hungarian', nativeName: 'Magyar', flag: '🇭🇺' },
  { code: 'ro', name: 'Romanian', nativeName: 'Română', flag: '🇷🇴' },
  { code: 'bg', name: 'Bulgarian', nativeName: 'Български', flag: '🇧🇬' },
  { code: 'hr', name: 'Croatian', nativeName: 'Hrvatski', flag: '🇭🇷' },
  { code: 'sr', name: 'Serbian', nativeName: 'Српски', flag: '🇷🇸' },
  { code: 'sl', name: 'Slovenian', nativeName: 'Slovenščina', flag: '🇸🇮' },
  { code: 'et', name: 'Estonian', nativeName: 'Eesti', flag: '🇪🇪' },
  { code: 'lv', name: 'Latvian', nativeName: 'Latviešu', flag: '🇱🇻' },
  { code: 'lt', name: 'Lithuanian', nativeName: 'Lietuvių', flag: '🇱🇹' },
  { code: 'mt', name: 'Maltese', nativeName: 'Malti', flag: '🇲🇹' },
  { code: 'el', name: 'Greek', nativeName: 'Ελληνικά', flag: '🇬🇷' },
  { code: 'he', name: 'Hebrew', nativeName: 'עברית', flag: '🇮🇱', rtl: true },
  { code: 'th', name: 'Thai', nativeName: 'ไทย', flag: '🇹🇭' },
  { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'ms', name: 'Malay', nativeName: 'Bahasa Melayu', flag: '🇲🇾' },
  { code: 'tl', name: 'Filipino', nativeName: 'Filipino', flag: '🇵🇭' },
  { code: 'sw', name: 'Swahili', nativeName: 'Kiswahili', flag: '🇰🇪' },
  { code: 'am', name: 'Amharic', nativeName: 'አማርኛ', flag: '🇪🇹' },
  { code: 'zu', name: 'Zulu', nativeName: 'isiZulu', flag: '🇿🇦' },
  { code: 'af', name: 'Afrikaans', nativeName: 'Afrikaans', flag: '🇿🇦' }
];

interface LanguageContextType {
  selectedLanguage: Language;
  setLanguage: (language: Language) => void;
  translate: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Basic translations (in a real app, this would come from a translation service)
const translations: Record<string, Record<string, string>> = {
  en: {
    home: 'Home',
    services: 'Services',
    countries: 'Countries',
    about: 'About',
    contact: 'Contact',
    getStarted: 'Get Started',
    'ai-tools': 'AI Tools',
    referrals: 'Referrals',
    earnings: 'Earnings',
    'emi-plans': 'EMI Plans',
    'lucky-draw': 'Lucky Draw',
    'my-journey': 'My Journey',
    'success-stories': 'Success Stories',
    blog: 'Blog'
  },
  es: {
    home: 'Inicio',
    services: 'Servicios',
    countries: 'Países',
    about: 'Acerca de',
    contact: 'Contacto',
    getStarted: 'Comenzar',
    'ai-tools': 'Herramientas IA',
    referrals: 'Referencias',
    earnings: 'Ganancias',
    'emi-plans': 'Planes EMI',
    'lucky-draw': 'Sorteo',
    'my-journey': 'Mi Viaje',
    'success-stories': 'Casos de Éxito',
    blog: 'Blog'
  },
  fr: {
    home: 'Accueil',
    services: 'Services',
    countries: 'Pays',
    about: 'À propos',
    contact: 'Contact',
    getStarted: 'Commencer',
    'ai-tools': 'Outils IA',
    referrals: 'Références',
    earnings: 'Revenus',
    'emi-plans': 'Plans EMI',
    'lucky-draw': 'Tirage au sort',
    'my-journey': 'Mon Voyage',
    'success-stories': 'Témoignages',
    blog: 'Blog'
  }
  // Add more translations as needed
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);

  useEffect(() => {
    const saved = localStorage.getItem('vanhsya-language');
    if (saved) {
      const language = languages.find(l => l.code === saved);
      if (language) setSelectedLanguage(language);
    }
  }, []);

  const setLanguage = (language: Language) => {
    setSelectedLanguage(language);
    localStorage.setItem('vanhsya-language', language.code);
    // Update document direction for RTL languages
    document.documentElement.setAttribute('dir', language.rtl ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', language.code);
  };

  const translate = (key: string) => {
    return translations[selectedLanguage.code]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ 
      selectedLanguage, 
      setLanguage, 
      translate, 
      isRTL: selectedLanguage.rtl || false 
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

interface LanguageSelectorProps {
  className?: string;
  variant?: 'default' | 'minimal' | 'icon-only';
}

export default function LanguageSelector({ className = '', variant = 'default' }: LanguageSelectorProps) {
  const { selectedLanguage, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = () => setIsOpen(false);
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isOpen]);

  if (variant === 'icon-only') {
    return (
      <div className={`relative ${className}`}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          className="flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200"
          title={`Language: ${selectedLanguage.name}`}
        >
          <span className="text-lg">{selectedLanguage.flag}</span>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.15 }}
              className="absolute top-12 right-0 z-50 bg-white rounded-lg shadow-xl border border-gray-200 py-2 w-64 max-h-80 overflow-y-auto"
            >
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => {
                    setLanguage(language);
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors flex items-center gap-3 ${
                    selectedLanguage.code === language.code ? 'bg-purple-50 text-purple-700' : 'text-gray-700'
                  }`}
                >
                  <span className="text-lg">{language.flag}</span>
                  <div className="flex-1">
                    <div className="font-medium">{language.name}</div>
                    <div className="text-sm text-gray-500">{language.nativeName}</div>
                  </div>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
          variant === 'minimal' 
            ? 'bg-transparent hover:bg-white/10 text-gray-700 hover:text-gray-900' 
            : 'bg-white/10 hover:bg-white/20 text-white'
        }`}
      >
        <span className="text-lg">{selectedLanguage.flag}</span>
        {variant !== 'minimal' && (
          <>
            <span className="font-medium text-sm">{selectedLanguage.name}</span>
            <ChevronDownIcon className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute top-12 right-0 z-50 bg-white rounded-lg shadow-xl border border-gray-200 py-2 w-72 max-h-80 overflow-y-auto"
          >
            <div className="px-4 py-2 border-b border-gray-100">
              <div className="flex items-center gap-2 text-gray-700">
                <LanguageIcon className="w-4 h-4" />
                <span className="font-medium text-sm">Select Language</span>
              </div>
            </div>
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => {
                  setLanguage(language);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors flex items-center gap-3 ${
                  selectedLanguage.code === language.code ? 'bg-purple-50 text-purple-700' : 'text-gray-700'
                }`}
              >
                <span className="text-lg">{language.flag}</span>
                <div className="flex-1">
                  <div className="font-medium">{language.name}</div>
                  <div className="text-sm text-gray-500">{language.nativeName}</div>
                </div>
                {selectedLanguage.code === language.code && (
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
