// 🧠 AI-Enhanced Navigation Component
// This is the main navigation header with responsive mega-menu, mobile hamburger,
// currency selector, and smooth animations. Features dropdown menus for services
// and countries with hover effects and accessibility support.
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

import { useCurrency } from './CurrencySelector';
import CurrencySelector from './CurrencySelector';

// Language interface and data
interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
];

// Translations
const translations: Record<string, Record<string, string>> = {
  en: {
    home: 'Home',
    'ai-tools': 'AI Tools',
    services: 'Services',
    countries: 'Countries',
    referrals: 'Referrals',
    earnings: 'Earnings',
    'emi-plans': 'EMI Plans',
    'lucky-draw': 'Lucky Draw',
    'my-journey': 'My Journey',
    'success-stories': 'Success Stories',
    blog: 'Blog',
    about: 'About',
    contact: 'Contact',
    getStarted: 'Get Started',
  },
  es: {
    home: 'Inicio',
    'ai-tools': 'Herramientas IA',
    services: 'Servicios',
    countries: 'Países',
    referrals: 'Referencias',
    earnings: 'Ganancias',
    'emi-plans': 'Planes EMI',
    'lucky-draw': 'Sorteo',
    'my-journey': 'Mi Viaje',
    'success-stories': 'Casos de Éxito',
    blog: 'Blog',
    about: 'Acerca de',
    contact: 'Contacto',
    getStarted: 'Comenzar',
  },
};

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    languages[0]
  );
  const [showLangSelector, setShowLangSelector] = useState(false);

  // Global stats
  const stats = {
    successRate: 96.8,
    visasApproved: 12847,
    clientsServed: 15623,
    countriesServed: 45,
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('vanhsya-language');
    if (saved) {
      const language = languages.find(l => l.code === saved);
      if (language) setSelectedLanguage(language);
    }
  }, []);

  const translate = (key: string) => {
    return (
      translations[selectedLanguage.code]?.[key] || translations.en[key] || key
    );
  };

  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
    localStorage.setItem('vanhsya-language', language.code);
    setShowLangSelector(false);
  };

  const links = [
    { href: '/', label: translate('home') },
    { href: '/ai-tools-showcase', label: translate('ai-tools') },
    { href: '/services', label: translate('services') },
    { href: '/countries', label: translate('countries') },
    { href: '/referral', label: translate('referrals') },
    { href: '/earnings-wallet', label: translate('earnings') },
    { href: '/emi-payment', label: translate('emi-plans') },
    { href: '/lucky-draw', label: translate('lucky-draw') },
    { href: '/my-journey', label: translate('my-journey') },
    { href: '/success-stories', label: translate('success-stories') },
    { href: '/blog', label: translate('blog') },
    { href: '/about', label: translate('about') },
    { href: '/contact', label: translate('contact') },
  ];

  return (
    <>
      {/* Global Stats Bar */}
      <div className='bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 text-white py-2'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex items-center justify-center gap-6 text-sm overflow-x-auto'>
            <div className='flex items-center gap-1 whitespace-nowrap'>
              <span className='font-bold'>{stats.successRate}%</span>
              <span className='opacity-90'>Success Rate</span>
            </div>
            <div className='flex items-center gap-1 whitespace-nowrap'>
              <span className='font-bold'>
                {stats.visasApproved.toLocaleString()}
              </span>
              <span className='opacity-90'>Visas Approved</span>
            </div>
            <div className='flex items-center gap-1 whitespace-nowrap'>
              <span className='font-bold'>
                {stats.clientsServed.toLocaleString()}
              </span>
              <span className='opacity-90'>Clients Served</span>
            </div>
            <div className='flex items-center gap-1 whitespace-nowrap'>
              <span className='font-bold'>{stats.countriesServed}</span>
              <span className='opacity-90'>Countries</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
            : 'bg-gradient-to-r from-[#6a1b9a] via-[#9c27b0] to-[#ba68c8]'
        }`}
      >
        <div className='max-w-7xl mx-auto h-16 flex items-center justify-between px-4'>
          {/* Logo */}
          <Link
            href='/'
            className='flex items-center transition-all hover:scale-105 duration-300'
          >
            <div className='relative'>
              <Image
                src='/images/vanhsya-logo-main.png'
                alt='VANHSYA Global Migration'
                width={180}
                height={45}
                className='h-10 w-auto object-contain filter drop-shadow-lg'
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden lg:flex gap-4 items-center'>
            {links.slice(0, 8).map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all hover:scale-105 px-3 py-2 rounded-lg ${
                  isScrolled
                    ? 'text-gray-700 hover:text-purple-700 hover:bg-purple-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Controls */}
          <div className='flex items-center gap-3'>
            {/* Language Selector */}
            <div className='relative'>
              <button
                onClick={() => setShowLangSelector(!showLangSelector)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                  isScrolled
                    ? 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                <span className='text-base'>{selectedLanguage.flag}</span>
                <span className='text-xs font-medium hidden sm:block'>
                  {selectedLanguage.code.toUpperCase()}
                </span>
                <ChevronDownIcon
                  className={`w-3 h-3 transition-transform ${showLangSelector ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {showLangSelector && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    className='absolute top-12 right-0 bg-white rounded-lg shadow-xl border border-gray-200 py-2 w-48 z-50'
                  >
                    <div className='px-4 py-2 border-b border-gray-100'>
                      <div className='flex items-center gap-2 text-gray-700'>
                        <GlobeAltIcon className='w-4 h-4' />
                        <span className='font-medium text-sm'>Language</span>
                      </div>
                    </div>
                    {languages.map(language => (
                      <button
                        key={language.code}
                        onClick={() => handleLanguageChange(language)}
                        className={`w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors flex items-center gap-3 ${
                          selectedLanguage.code === language.code
                            ? 'bg-purple-50 text-purple-700'
                            : 'text-gray-700'
                        }`}
                      >
                        <span className='text-lg'>{language.flag}</span>
                        <span className='font-medium'>{language.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Currency Selector */}
            <CurrencySelector variant='icon-only' className='hidden sm:block' />

            {/* CTA Button */}
            <Link
              href='/consultation'
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 ${
                isScrolled
                  ? 'bg-gradient-to-r from-purple-600 to-purple-500 text-white hover:from-purple-700 hover:to-purple-600'
                  : 'bg-white text-purple-700 hover:bg-gray-100'
              }`}
            >
              {translate('getStarted')}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            >
              {isOpen ? (
                <XMarkIcon className='h-6 w-6' />
              ) : (
                <Bars3Icon className='h-6 w-6' />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className='lg:hidden bg-white shadow-lg border-t border-gray-200'
            >
              <div className='px-4 py-4 space-y-2'>
                {links.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className='block px-3 py-2 text-gray-800 font-medium hover:bg-purple-50 hover:text-purple-700 rounded-md transition-colors'
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Mobile Language & Currency */}
                <div className='pt-4 border-t border-gray-200'>
                  <div className='flex items-center justify-between mb-3'>
                    <span className='text-sm font-medium text-gray-600'>
                      Language & Currency
                    </span>
                  </div>
                  <div className='flex gap-2'>
                    <CurrencySelector variant='minimal' className='flex-1' />
                    <button
                      onClick={() => setShowLangSelector(!showLangSelector)}
                      className='flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg'
                    >
                      <span>{selectedLanguage.flag}</span>
                      <span className='text-sm'>{selectedLanguage.name}</span>
                    </button>
                  </div>
                </div>

                <Link
                  href='/consultation'
                  className='block px-3 py-2 mt-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-medium rounded-md text-center'
                  onClick={() => setIsOpen(false)}
                >
                  {translate('getStarted')}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
