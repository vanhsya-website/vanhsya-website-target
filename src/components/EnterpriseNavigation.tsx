'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X, Globe, Shield, Users, Award, ArrowRight, Phone, Mail } from 'lucide-react';

interface NavigationItem {
  label: string;
  href?: string;
  children?: NavigationItem[];
  description?: string;
  icon?: React.ElementType;
}

interface EnterpriseNavigationProps {
  className?: string;
}

const EnterpriseNavigation: React.FC<EnterpriseNavigationProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation: NavigationItem[] = [
    {
      label: 'Services',
      children: [
        {
          label: 'Visa Consultation',
          href: '/services/visa-consultation',
          description: 'Expert guidance for all visa types',
          icon: Shield
        },
        {
          label: 'Document Preparation',
          href: '/services/document-preparation',
          description: 'Professional document assistance',
          icon: Users
        },
        {
          label: 'Application Support',
          href: '/services/application-support',
          description: 'End-to-end application management',
          icon: Award
        },
        {
          label: 'AI Tools',
          href: '/ai-tools',
          description: 'AI-powered immigration tools',
          icon: Globe
        }
      ]
    },
    {
      label: 'Countries',
      children: [
        {
          label: 'Canada',
          href: '/countries/canada',
          description: 'Express Entry & Provincial Programs'
        },
        {
          label: 'Australia',
          href: '/countries/australia',
          description: 'SkillSelect & State Nominations'
        },
        {
          label: 'United States',
          href: '/countries/usa',
          description: 'Work Visas & Green Cards'
        },
        {
          label: 'United Kingdom',
          href: '/countries/uk',
          description: 'Points-based Immigration'
        },
        {
          label: 'New Zealand',
          href: '/countries/new-zealand',
          description: 'Skilled Migrant Category'
        },
        {
          label: 'View All Countries',
          href: '/countries',
          description: '195+ destinations available'
        }
      ]
    },
    {
      label: 'Tools',
      children: [
        {
          label: 'Eligibility Calculator',
          href: '/tools/eligibility-calculator',
          description: 'Check your eligibility instantly'
        },
        {
          label: 'Document Checklist',
          href: '/tools/document-checklist',
          description: 'Personalized document requirements'
        },
        {
          label: 'AI Chatbot',
          href: '/tools/ai-chatbot',
          description: '24/7 immigration assistance'
        },
        {
          label: 'Success Stories',
          href: '/success-stories',
          description: 'Real client experiences'
        }
      ]
    },
    {
      label: 'Resources',
      children: [
        {
          label: 'Blog',
          href: '/blog',
          description: 'Latest immigration insights'
        },
        {
          label: 'FAQ',
          href: '/faq',
          description: 'Frequently asked questions'
        },
        {
          label: 'Webinars',
          href: '/resources/webinars',
          description: 'Educational seminars'
        },
        {
          label: 'Guides',
          href: '/resources/guides',
          description: 'Step-by-step guides'
        }
      ]
    },
    {
      label: 'About',
      href: '/about'
    },
    {
      label: 'Contact',
      href: '/contact'
    }
  ];

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-900/95 backdrop-blur-xl border-b border-slate-800/50 shadow-2xl'
            : 'bg-transparent'
        } ${className}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  VANHSYA
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.label} className="relative">
                  {item.children ? (
                    <motion.button
                      className="flex items-center space-x-1 text-slate-300 hover:text-white transition-colors duration-200 font-medium"
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={closeDropdown}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} />
                    </motion.button>
                  ) : (
                    <Link
                      href={item.href || '#'}
                      className="text-slate-300 hover:text-white transition-colors duration-200 font-medium"
                    >
                      <motion.span whileHover={{ scale: 1.05 }}>
                        {item.label}
                      </motion.span>
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden"
                        onMouseEnter={() => setActiveDropdown(item.label)}
                        onMouseLeave={closeDropdown}
                      >
                        <div className="p-6">
                          <div className="space-y-1">
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href || '#'}
                                className="block group"
                                onClick={closeDropdown}
                              >
                                <motion.div
                                  className="flex items-start space-x-3 p-3 rounded-xl hover:bg-slate-800/50 transition-colors duration-200"
                                  whileHover={{ x: 4 }}
                                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                  {child.icon && (
                                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center mt-0.5">
                                      <child.icon className="w-4 h-4 text-blue-400" />
                                    </div>
                                  )}
                                  <div className="flex-1 min-w-0">
                                    <div className="text-white font-medium group-hover:text-blue-400 transition-colors">
                                      {child.label}
                                    </div>
                                    {child.description && (
                                      <div className="text-sm text-slate-400 mt-1">
                                        {child.description}
                                      </div>
                                    )}
                                  </div>
                                  <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-blue-400 transition-colors opacity-0 group-hover:opacity-100" />
                                </motion.div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link href="/contact">
                <motion.button
                  className="px-6 py-2.5 text-slate-300 hover:text-white border border-slate-600 hover:border-slate-500 rounded-xl transition-all duration-200 font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Consultation
                </motion.button>
              </Link>
              <Link href="/portal">
                <motion.button
                  className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Client Portal
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden w-10 h-10 bg-slate-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-white border border-slate-700/50"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-800/50"
            >
              <div className="container mx-auto px-4 sm:px-6 py-6 max-h-[80vh] overflow-y-auto">
                <div className="space-y-6">
                  {navigation.map((item) => (
                    <div key={item.label}>
                      {item.children ? (
                        <div>
                          <button
                            className="flex items-center justify-between w-full text-left text-white font-medium py-2"
                            onClick={() => handleDropdownToggle(item.label)}
                          >
                            {item.label}
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                              activeDropdown === item.label ? 'rotate-180' : ''
                            }`} />
                          </button>
                          <AnimatePresence>
                            {activeDropdown === item.label && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="mt-2 space-y-2 pl-4"
                              >
                                {item.children.map((child) => (
                                  <Link
                                    key={child.label}
                                    href={child.href || '#'}
                                    className="block py-2 text-slate-300 hover:text-white transition-colors"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href || '#'}
                          className="block text-white font-medium py-2"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}

                  {/* Mobile CTA Buttons */}
                  <div className="pt-6 border-t border-slate-700/50 space-y-4">
                    <Link href="/contact">
                      <motion.button
                        className="w-full px-6 py-3 text-slate-300 border border-slate-600 rounded-xl font-medium"
                        onClick={() => setIsOpen(false)}
                        whileTap={{ scale: 0.95 }}
                      >
                        Get Consultation
                      </motion.button>
                    </Link>
                    <Link href="/portal">
                      <motion.button
                        className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium"
                        onClick={() => setIsOpen(false)}
                        whileTap={{ scale: 0.95 }}
                      >
                        Client Portal
                      </motion.button>
                    </Link>
                  </div>

                  {/* Contact Info */}
                  <div className="pt-6 border-t border-slate-700/50">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 text-slate-300">
                        <Phone className="w-4 h-4" />
                        <span className="text-sm">+1 (555) 123-4567</span>
                      </div>
                      <div className="flex items-center space-x-3 text-slate-300">
                        <Mail className="w-4 h-4" />
                        <span className="text-sm">info@vanhsya.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Overlay to close mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default EnterpriseNavigation;
