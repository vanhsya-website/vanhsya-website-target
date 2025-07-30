'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Menu, 
  X, 
  Globe,
  ChevronDown,
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  Zap,
  Shield,
  Award,
  Users
} from 'lucide-react';

const navigationItems = [
  {
    label: 'Services',
    href: '/services',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Express Entry', href: '/services/express-entry', icon: Zap },
      { label: 'Provincial Nominee', href: '/services/pnp', icon: Globe },
      { label: 'Family Sponsorship', href: '/services/family', icon: Users },
      { label: 'Business Immigration', href: '/services/business', icon: Award },
      { label: 'Study Permits', href: '/services/study', icon: Shield }
    ]
  },
  {
    label: 'Countries',
    href: '/countries',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Canada', href: '/countries/canada', flag: '🇨🇦' },
      { label: 'Australia', href: '/countries/australia', flag: '🇦🇺' },
      { label: 'United Kingdom', href: '/countries/uk', flag: '🇬🇧' },
      { label: 'Germany', href: '/countries/germany', flag: '🇩🇪' },
      { label: 'New Zealand', href: '/countries/new-zealand', flag: '🇳🇿' }
    ]
  },
  {
    label: 'Tools',
    href: '/tools',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Eligibility Calculator', href: '/tools/eligibility', icon: Zap },
      { label: 'Points Calculator', href: '/tools/points', icon: Award },
      { label: 'Document Checklist', href: '/tools/checklist', icon: Shield },
      { label: 'Cost Calculator', href: '/tools/cost', icon: Globe }
    ]
  },
  {
    label: 'Success Stories',
    href: '/success-stories'
  },
  {
    label: 'About',
    href: '/about'
  },
  {
    label: 'Blog',
    href: '/blog'
  }
];

export default function PremiumNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-neutral-950/95 backdrop-blur-xl border-b border-neutral-800/50 shadow-2xl'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3"
            >
              <Link href="/" className="flex items-center gap-3">
                <div className="relative">
                  <Image
                    src="/images/logo-transparent.png"
                    alt="VANHSYA Immigration"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                  <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full" />
                </div>
                <div className="hidden sm:block">
                  <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                    VANHSYA
                  </div>
                  <div className="text-xs text-neutral-400 -mt-1">
                    Immigration Experts
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.label} className="relative">
                  {item.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button className="flex items-center gap-1 text-neutral-300 hover:text-white transition-colors duration-200 font-medium">
                        {item.label}
                        <ChevronDown className="w-4 h-4" />
                      </button>

                      <AnimatePresence>
                        {activeDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 pt-2"
                          >
                            <div className="bg-neutral-900/95 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-4 min-w-[250px] shadow-2xl">
                              {item.dropdownItems?.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.label}
                                  href={dropdownItem.href}
                                  className="flex items-center gap-3 px-4 py-3 text-neutral-300 hover:text-white hover:bg-neutral-800/50 rounded-xl transition-all duration-200"
                                >
                                  {'icon' in dropdownItem && dropdownItem.icon && <dropdownItem.icon className="w-4 h-4 text-purple-400" />}
                                  {'flag' in dropdownItem && dropdownItem.flag && <span className="text-lg">{dropdownItem.flag}</span>}
                                  {dropdownItem.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-neutral-300 hover:text-white transition-colors duration-200 font-medium"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 text-neutral-300 hover:text-white transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center gap-2"
              >
                Free Consultation
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-neutral-300 hover:text-white transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-neutral-950/98 backdrop-blur-xl border-t border-neutral-800/50"
            >
              <div className="container mx-auto px-4 py-6">
                <div className="space-y-4">
                  {navigationItems.map((item) => (
                    <div key={item.label}>
                      {item.hasDropdown ? (
                        <div>
                          <button
                            onClick={() => handleDropdownToggle(item.label)}
                            className="flex items-center justify-between w-full text-left text-neutral-300 hover:text-white transition-colors duration-200 font-medium py-2"
                          >
                            {item.label}
                            <ChevronDown 
                              className={`w-4 h-4 transition-transform duration-200 ${
                                activeDropdown === item.label ? 'rotate-180' : ''
                              }`} 
                            />
                          </button>
                          
                          <AnimatePresence>
                            {activeDropdown === item.label && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="pl-4 mt-2 space-y-2"
                              >
                                {item.dropdownItems?.map((dropdownItem) => (
                                  <Link
                                    key={dropdownItem.label}
                                    href={dropdownItem.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors duration-200 py-2"
                                  >
                                    {'icon' in dropdownItem && dropdownItem.icon && <dropdownItem.icon className="w-4 h-4 text-purple-400" />}
                                    {'flag' in dropdownItem && dropdownItem.flag && <span>{dropdownItem.flag}</span>}
                                    {dropdownItem.label}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-neutral-300 hover:text-white transition-colors duration-200 font-medium py-2"
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}

                  {/* Mobile Contact Info */}
                  <div className="pt-6 mt-6 border-t border-neutral-800/50 space-y-4">
                    <div className="flex items-center gap-3 text-neutral-400">
                      <Phone className="w-4 h-4" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-3 text-neutral-400">
                      <Mail className="w-4 h-4" />
                      <span>contact@vanhsya.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-neutral-400">
                      <MessageCircle className="w-4 h-4" />
                      <span>24/7 Support</span>
                    </div>
                  </div>

                  {/* Mobile CTA */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-6 px-6 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Free Consultation
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-20" />
    </>
  );
}
