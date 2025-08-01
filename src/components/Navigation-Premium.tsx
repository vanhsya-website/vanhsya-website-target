'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bars3Icon,
  XMarkIcon,
  SparklesIcon,
  GlobeAmericasIcon,
  WrenchScrewdriverIcon,
  BookOpenIcon,
  PhoneIcon,
  ChevronDownIcon,
  RocketLaunchIcon,
  TrophyIcon,
  MagnifyingGlassIcon,
  BellIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useDeviceType, useViewport } from './ResponsiveUtils';

interface NavigationItem {
  label: string;
  href?: string;
  icon?: React.ComponentType<{ className?: string }>;
  badge?: string;
  children?: NavigationItem[];
  description?: string;
  featured?: boolean;
}

const navigationItems: NavigationItem[] = [
  {
    label: 'AI Tools',
    icon: SparklesIcon,
    badge: 'NEW',
    description: 'Cutting-edge AI-powered immigration tools',
    children: [
      {
        label: 'VanHologram Consultant',
        href: '/ai-tools/vanhologram',
        description: 'AI-powered personal immigration consultant',
        featured: true,
      },
      {
        label: 'Document Analyzer',
        href: '/ai-tools/document-wizard',
        description: 'Intelligent document validation and processing',
      },
      {
        label: 'Immigration Calculator',
        href: '/ai-tools/immigration-calculator',
        description: 'Calculate your immigration score instantly',
      },
      {
        label: 'Country Comparison',
        href: '/ai-tools/country-comparison',
        description: 'AI-driven country matching system',
      },
      {
        label: 'Eligibility Checker',
        href: '/ai-tools/eligibility-bot',
        description: 'Smart eligibility assessment tool',
      },
      {
        label: 'ImmigrationDNA',
        href: '/ai-tools/immigration-dna',
        description: 'Advanced profile matching algorithm',
        badge: 'BETA',
      },
    ],
  },
  {
    label: 'Countries',
    href: '/countries',
    icon: GlobeAmericasIcon,
    description: 'Explore immigration destinations worldwide',
    children: [
      { label: 'Canada', href: '/countries/canada' },
      { label: 'Australia', href: '/countries/australia' },
      { label: 'New Zealand', href: '/countries/new-zealand' },
      { label: 'Germany', href: '/countries/germany' },
      { label: 'United Kingdom', href: '/countries/uk' },
      { label: 'Netherlands', href: '/countries/netherlands' },
      { label: 'All Countries', href: '/countries', featured: true },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    icon: WrenchScrewdriverIcon,
    description: 'Comprehensive immigration services',
    children: [
      {
        label: 'Skilled Migration',
        href: '/services/skilled-migration',
        description: 'Professional immigration pathways',
      },
      {
        label: 'Family Sponsorship',
        href: '/services/family-sponsorship',
        description: 'Reunite with your loved ones',
      },
      {
        label: 'Student Visas',
        href: '/services/student-visas',
        description: 'Education-based immigration',
      },
      {
        label: 'Business Immigration',
        href: '/services/business-immigration',
        description: 'Investment and entrepreneur visas',
      },
      {
        label: 'Express Entry',
        href: '/services/express-entry',
        description: 'Fast-track immigration programs',
      },
    ],
  },
  {
    label: 'Success Stories',
    href: '/success-stories',
    icon: TrophyIcon,
    description: 'Real client immigration journeys',
  },
  {
    label: 'Resources',
    icon: BookOpenIcon,
    description: 'Guides, tools, and immigration insights',
    children: [
      {
        label: 'Immigration Guides',
        href: '/resources/guides',
        description: 'Step-by-step immigration guides',
      },
      {
        label: 'Document Checklists',
        href: '/resources/documents',
        description: 'Required documents by country',
      },
      { label: 'FAQ', href: '/faq', description: 'Frequently asked questions' },
      {
        label: 'Blog',
        href: '/blog',
        description: 'Latest immigration news and insights',
      },
      {
        label: 'Webinars',
        href: '/resources/webinars',
        description: 'Live immigration seminars',
        badge: 'LIVE',
      },
    ],
  },
  {
    label: 'Careers',
    href: '/careers',
    icon: BriefcaseIcon,
    description: 'Join our mission to transform immigration',
    children: [
      {
        label: 'Open Positions',
        href: '/careers#positions',
        description: 'Current job openings at VANHSYA',
      },
      {
        label: 'Life at VANHSYA',
        href: '/careers#culture',
        description: 'Our culture, values, and benefits',
      },
      {
        label: 'Remote Opportunities',
        href: '/careers#remote',
        description: 'Work from anywhere positions',
      },
      {
        label: 'Internships',
        href: '/careers#internships',
        description: 'Student and graduate opportunities',
      },
      {
        label: 'Contact HR',
        href: 'mailto:careers@vanhsya.com',
        description: 'Send your resume to careers@vanhsya.com',
        featured: true,
      },
    ],
  },
];

const quickActions = [
  {
    label: 'Free Assessment',
    href: '/ai-tools/immigration-calculator',
    icon: RocketLaunchIcon,
    color: 'bg-purple-600 hover:bg-purple-700',
  },
  {
    label: 'Book Consultation',
    href: '/consultation',
    icon: PhoneIcon,
    color: 'bg-green-600 hover:bg-green-700',
  },
];

export default function NavigationEnhanced() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [_isScrolled, _setIsScrolled] = useState(false);
  const [hideStatsBar, setHideStatsBar] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  // Responsive hooks
  const { deviceType: _deviceType, isTouchDevice: _isTouchDevice } = useDeviceType();
  const { width: viewportWidth } = useViewport();

  // Enhanced active link detection
  const isActiveLink = (item: NavigationItem) => {
    if (!item.href) return false;
    
    // Exact match
    if (pathname === item.href) return true;
    
    // Check if current path starts with the item's href (for section highlighting)
    if (item.href !== '/' && pathname.startsWith(item.href)) return true;
    
    // Special handling for careers page and its anchors
    if (item.href === '/careers' && pathname === '/careers') return true;
    
    // Check children for active state (for dropdown highlighting)
    if (item.children) {
      return item.children.some(child => 
        child.href && (pathname === child.href || (child.href !== '/' && pathname.startsWith(child.href)))
      );
    }
    
    return false;
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercent = scrollY / (documentHeight - windowHeight);

      _setIsScrolled(scrollY > 20);
      setHideStatsBar(scrollY > 100);
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Close mobile menu on screen size change
  useEffect(() => {
    if (viewportWidth >= 1024) {
      setIsOpen(false);
    }
  }, [viewportWidth]);

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  // Touch-optimized dropdown for mobile
  const _TouchMegaMenu = ({ item }: { item: NavigationItem }) => (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className='bg-white border-t border-gray-200'
    >
      <div className='px-4 py-4 space-y-3'>
        {item.children?.map((child, index) => (
          <Link
            key={index}
            href={child.href || '#'}
            className='flex items-center gap-4 py-3 px-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors min-h-[56px] active:scale-[0.98]'
            onClick={() => {
              setActiveDropdown(null);
              setIsOpen(false);
            }}
          >
            <div className='flex items-center justify-center w-8 h-8 bg-purple-100 rounded-lg'>
              {child.featured ? (
                <div className='w-3 h-3 bg-purple-600 rounded-full'></div>
              ) : (
                <div className='w-2 h-2 bg-gray-400 rounded-full'></div>
              )}
            </div>
            <div className='flex-1'>
              <div className='flex items-center gap-2'>
                <span className='font-medium text-gray-900'>{child.label}</span>
                {child.badge && (
                  <span className='px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full'>
                    {child.badge}
                  </span>
                )}
              </div>
              {child.description && (
                <p className='text-sm text-gray-500 mt-1'>
                  {child.description}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );

  // Desktop compact dropdown (existing)
  const CompactMegaMenu = ({ item }: { item: NavigationItem }) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      className='absolute z-50 mt-1 transform -translate-x-1/2 top-full left-1/2'
    >
      {/* Compact Apple-Style Dropdown */}
      <div className='bg-white/98 backdrop-blur-xl border border-gray-200/60 rounded-xl shadow-lg overflow-hidden min-w-[280px] max-w-[320px]'>
        {/* Clean Header */}
        <div className='px-4 py-3 border-b border-gray-100/80 bg-gray-50/50'>
          <div className='flex items-center gap-2'>
            {item.icon && (
              <div className='flex items-center justify-center w-6 h-6 bg-purple-100 rounded-lg'>
                <item.icon className='w-4 h-4 text-purple-600' />
              </div>
            )}
            <span className='text-sm font-semibold text-gray-900'>
              {item.label}
            </span>
            {item.badge && (
              <span className='px-2 py-0.5 bg-purple-600 text-white text-xs font-medium rounded-md'>
                {item.badge}
              </span>
            )}
          </div>
        </div>

        {/* Compact Menu Items */}
        <div className='py-2'>
          {item.children?.map((child, index) => (
            <Link
              key={index}
              href={child.href || '#'}
              className='group flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors duration-150'
              onClick={() => setActiveDropdown(null)}
            >
              <div className='flex items-center justify-center w-6 h-6'>
                {child.featured ? (
                  <div className='w-2 h-2 bg-purple-600 rounded-full'></div>
                ) : (
                  <div className='w-1.5 h-1.5 bg-gray-400 rounded-full group-hover:bg-purple-600 transition-colors'></div>
                )}
              </div>
              <div className='flex-1 min-w-0'>
                <div className='flex items-center gap-2'>
                  <span className='text-sm font-medium text-gray-900 truncate group-hover:text-purple-900'>
                    {child.label}
                  </span>
                  {child.badge && (
                    <span className='px-1.5 py-0.5 bg-orange-100 text-orange-700 text-xs font-medium rounded'>
                      {child.badge}
                    </span>
                  )}
                  {child.featured && (
                    <span className='px-1.5 py-0.5 bg-purple-100 text-purple-700 text-xs font-medium rounded'>
                      ⭐
                    </span>
                  )}
                </div>
                {child.description && (
                  <p className='text-xs text-gray-500 mt-0.5 truncate'>
                    {child.description}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Action Footer */}
        {item.label === 'AI Tools' && (
          <div className='px-4 py-3 border-t border-gray-100 bg-gradient-to-r from-purple-50 to-blue-50'>
            <Link
              href='/ai-innovations'
              className='flex items-center justify-between w-full text-sm font-medium text-purple-700 hover:text-purple-900'
              onClick={() => setActiveDropdown(null)}
            >
              <span>Explore All AI Tools</span>
              <div className='flex items-center justify-center w-4 h-4 bg-purple-600 rounded'>
                <span className='text-xs text-white'>→</span>
              </div>
            </Link>
          </div>
        )}

        {item.label === 'Countries' && (
          <div className='px-4 py-3 border-t border-gray-100 bg-gradient-to-r from-green-50 to-blue-50'>
            <Link
              href='/countries'
              className='flex items-center justify-between w-full text-sm font-medium text-green-700 hover:text-green-900'
              onClick={() => setActiveDropdown(null)}
            >
              <span>View All Countries</span>
              <div className='flex items-center justify-center w-4 h-4 bg-green-600 rounded'>
                <span className='text-xs text-white'>→</span>
              </div>
            </Link>
          </div>
        )}

        {item.label === 'Services' && (
          <div className='px-4 py-3 border-t border-gray-100 bg-gradient-to-r from-indigo-50 to-purple-50'>
            <Link
              href='/consultation'
              className='flex items-center justify-between w-full text-sm font-medium text-indigo-700 hover:text-indigo-900'
              onClick={() => setActiveDropdown(null)}
            >
              <span>Free Consultation</span>
              <div className='flex items-center justify-center w-4 h-4 bg-indigo-600 rounded'>
                <span className='text-xs text-white'>📞</span>
              </div>
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
  const SearchModal = () => (
    <AnimatePresence>
      {' '}
      {searchOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='fixed inset-0 z-50 bg-black/50 backdrop-blur-sm'
          onClick={() => setSearchOpen(false)}
        >
          {' '}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className='max-w-2xl mx-auto mt-20 overflow-hidden bg-white border border-gray-200 shadow-xl rounded-xl'
            onClick={e => e.stopPropagation()}
          >
            {' '}
            <div className='p-6'>
              {' '}
              <div className='flex items-center gap-3 mb-4'>
                {' '}
                <MagnifyingGlassIcon className='w-6 h-6 text-gray-400' />{' '}
                <input
                  type='text'
                  placeholder='Search countries, services, tools...'
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className='flex-1 text-lg font-medium text-gray-900 placeholder-gray-400 border-none outline-none'
                  autoFocus
                />
              </div>
              {/* Quick Suggestions */}
              <div className='space-y-3'>
                <h3 className='text-sm font-medium tracking-wide text-gray-500 uppercase'>
                  Quick Access
                </h3>
                <div className='grid grid-cols-2 gap-2'>
                  {[
                    {
                      label: 'Immigration Calculator',
                      href: '/ai-tools/immigration-calculator',
                    },
                    { label: 'Canada Immigration', href: '/countries/canada' },
                    {
                      label: 'Document Analyzer',
                      href: '/ai-tools/document-wizard',
                    },
                    { label: 'Book Consultation', href: '/consultation' },
                  ].map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className='p-3 transition-all border border-gray-200 rounded-lg hover:border-purple-200 hover:bg-purple-50'
                      onClick={() => setSearchOpen(false)}
                    >
                      <span className='text-sm font-medium text-gray-900'>
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {/* Apple-Style Top Stats Bar */}
      <motion.div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          hideStatsBar
            ? 'transform -translate-y-full opacity-0'
            : 'transform translate-y-0 opacity-100'
        }`}
      >
        <div className='text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600'>
          <div className='container px-4 py-2 mx-auto'>
            <motion.div
              className='flex items-center justify-center gap-8 text-sm font-medium'
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className='flex items-center gap-2 cursor-pointer group'
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <div className='flex items-center gap-1'>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    ⭐
                  </motion.div>
                  <span className='font-bold text-yellow-300'>99.8%</span>
                  <span className='opacity-90'>Success Rate</span>
                </div>
              </motion.div>

              <div className='hidden w-px h-4 sm:block bg-white/30'></div>

              <motion.div
                className='flex items-center gap-2 cursor-pointer group'
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <CheckCircleIcon className='w-4 h-4 text-green-300' />
                <span className='font-bold'>50K+</span>
                <span className='hidden opacity-90 sm:inline'>
                  Visas Approved
                </span>
              </motion.div>

              <div className='hidden w-px h-4 sm:block bg-white/30'></div>

              <motion.div
                className='flex items-center gap-2 cursor-pointer group'
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <UsersIcon className='w-4 h-4 text-blue-300' />
                <span className='font-bold'>195+</span>
                <span className='hidden opacity-90 sm:inline'>Countries</span>
              </motion.div>

              <div className='hidden w-px h-4 lg:block bg-white/30'></div>

              <motion.div
                className='items-center hidden gap-2 cursor-pointer lg:flex group'
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  🚀
                </motion.div>
                <span className='font-semibold text-gold-300'>
                  Leading the New Migration Era
                </span>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                >
                  ⭐
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Progress Bar */}
          <motion.div
            className='h-0.5 bg-white/20'
            style={{
              scaleX: scrollProgress,
              transformOrigin: 'left',
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 40 }}
          />
        </div>
      </motion.div>

      {/* Apple-Style Main Navigation */}
      <motion.nav
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
          hideStatsBar
            ? 'top-0 bg-white/98 backdrop-blur-lg shadow-lg border-b border-gray-100'
            : 'top-14 bg-white/98 backdrop-blur-lg shadow-lg border-b border-gray-100'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Scroll Progress Bar */}
        <motion.div
          className='absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600'
          style={{
            width: `${scrollProgress * 100}%`,
            opacity: hideStatsBar ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
        />

        <div className='container px-6 mx-auto'>
          <div className='flex items-center justify-between h-16'>
            {/* Logo */}
            <Link href='/' className='flex items-center gap-3 group'>
              <motion.div
                className='flex items-center justify-center rounded-lg w-9 h-9 bg-gradient-to-r from-purple-600 to-blue-600'
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <SparklesIcon className='w-5 h-5 text-white' />
              </motion.div>
              <div>
                <span className='text-xl font-bold text-gray-900'>VANHSYA</span>
                <div className='text-xs font-medium text-purple-600'>
                  AI-Powered Immigration
                </div>
              </div>
            </Link>

            {/* World-Class Desktop Navigation */}
            <div className='items-center hidden gap-1 lg:flex'>
              {navigationItems.map((item, index) => (
                <div
                  key={index}
                  className='relative group'
                  onMouseEnter={() =>
                    item.children && setActiveDropdown(item.label)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all duration-200 ${
                        isActiveLink(item)
                          ? 'text-white bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg shadow-purple-200 font-semibold'
                          : 'text-gray-700 hover:text-purple-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 font-medium'
                      }`}
                    >
                      {item.icon && <item.icon className='w-5 h-5' />}
                      <span className='font-semibold'>{item.label}</span>
                      {item.badge && (
                        <span className='px-2 py-1 text-xs font-bold text-orange-700 bg-orange-100 rounded-lg'>
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  ) : (
                    <button className='flex items-center gap-2 px-4 py-3 font-semibold text-gray-700 transition-all duration-200 rounded-xl hover:text-purple-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50'>
                      {item.icon && <item.icon className='w-5 h-5' />}
                      <span className='font-semibold'>{item.label}</span>
                      {item.badge && (
                        <span className='px-2 py-1 text-xs font-bold text-orange-700 bg-orange-100 rounded-lg'>
                          {item.badge}
                        </span>
                      )}
                      {item.children && (
                        <ChevronDownIcon
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      )}
                    </button>
                  )}

                  {/* Compact Apple-Style Mega Menu */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
                      <CompactMegaMenu item={item} />
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right Actions */}
            <div className='flex items-center gap-3'>
              {/* Language & Currency Selector */}
              <div className='hidden lg:flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-lg border border-gray-200'>
                <span className='text-sm font-medium text-gray-700'>🇺🇸 EN</span>
                <span className='text-gray-300'>|</span>
                <span className='text-sm font-medium text-gray-700'>
                  💰 USD
                </span>
              </div>

              {/* Search Button */}
              <motion.button
                onClick={() => setSearchOpen(true)}
                className='p-2 text-gray-600 transition-all rounded-lg hover:text-purple-600 hover:bg-purple-50'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MagnifyingGlassIcon className='w-5 h-5' />
              </motion.button>

              {/* Notifications */}
              <motion.button
                className='relative p-2 text-gray-600 transition-all rounded-lg hover:text-purple-600 hover:bg-purple-50'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BellIcon className='w-5 h-5' />
                <div className='absolute w-3 h-3 bg-red-500 rounded-full -top-1 -right-1'></div>
              </motion.button>

              {/* World-Class Quick Actions - Desktop */}
              <div className='items-center hidden gap-3 lg:flex'>
                {quickActions.map((action, index) => {
                  const Icon = action.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 20,
                      }}
                    >
                      <Link
                        href={action.href}
                        className={`px-6 py-3 text-white font-bold rounded-xl flex items-center gap-2 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${action.color} text-sm backdrop-blur-sm border border-white/20`}
                      >
                        <Icon className='w-5 h-5' />
                        {action.label}
                        <div className='w-1 h-1 ml-1 rounded-full bg-white/50 animate-pulse'></div>
                      </Link>
                    </motion.div>
                  );
                })}

                {/* Premium Indicator */}
                <div className='items-center hidden gap-2 px-3 py-2 border xl:flex bg-gradient-to-r from-amber-100 to-yellow-100 border-amber-200 rounded-xl'>
                  <div className='w-2 h-2 rounded-full bg-amber-500 animate-pulse'></div>
                  <span className='text-xs font-bold text-amber-700'>
                    PREMIUM
                  </span>
                </div>
              </div>

              {/* Mobile Menu Toggle */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className='p-2 text-gray-600 transition-all rounded-lg lg:hidden hover:text-purple-600 hover:bg-purple-50'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isOpen ? (
                  <XMarkIcon className='w-6 h-6' />
                ) : (
                  <Bars3Icon className='w-6 h-6' />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className='bg-white border-t border-gray-100 shadow-xl lg:hidden'
            >
              <div className='container px-6 py-6 mx-auto'>
                <div className='space-y-4'>
                  {navigationItems.map((item, index) => (
                    <div key={index} className='space-y-2'>
                      {item.href ? (
                        <Link
                          href={item.href}
                          className={`flex items-center gap-3 p-3 transition-all rounded-lg ${
                            isActiveLink(item)
                              ? 'text-white bg-gradient-to-r from-purple-600 to-blue-600 font-semibold'
                              : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50 font-medium'
                          }`}
                        >
                          {item.icon && <item.icon className='w-5 h-5' />}
                          <span className='font-medium'>{item.label}</span>
                          {item.badge && (
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                              isActiveLink(item)
                                ? 'text-purple-100 bg-white/20'
                                : 'text-purple-600 bg-purple-100'
                            }`}>
                              {item.badge}
                            </span>
                          )}
                        </Link>
                      ) : (
                        <button
                          onClick={() => handleDropdownToggle(item.label)}
                          className='flex items-center justify-between w-full p-3 text-gray-700 transition-all rounded-lg hover:text-purple-600 hover:bg-purple-50'
                        >
                          <div className='flex items-center gap-3'>
                            {item.icon && <item.icon className='w-5 h-5' />}
                            <span className='font-medium'>{item.label}</span>
                            {item.badge && (
                              <span className='px-2 py-1 text-xs font-medium text-purple-600 bg-purple-100 rounded-full'>
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <ChevronDownIcon
                            className={`w-4 h-4 transition-transform ${
                              activeDropdown === item.label ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      )}

                      {/* Mobile Dropdown */}
                      <AnimatePresence>
                        {item.children && activeDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className='ml-8 space-y-2'
                          >
                            {item.children.map((child, childIndex) => (
                              <Link
                                key={childIndex}
                                href={child.href || '#'}
                                className='block p-3 text-gray-600 transition-all rounded-lg hover:text-purple-600 hover:bg-purple-50'
                              >
                                <div className='flex items-center justify-between'>
                                  <span className='font-medium'>
                                    {child.label}
                                  </span>
                                  {child.badge && (
                                    <span className='px-2 py-1 text-xs font-medium text-orange-600 bg-orange-100 rounded-full'>
                                      {child.badge}
                                    </span>
                                  )}
                                  {child.featured && (
                                    <SparklesIcon className='w-4 h-4 text-purple-600' />
                                  )}
                                </div>
                                {child.description && (
                                  <p className='mt-1 text-sm text-gray-500'>
                                    {child.description}
                                  </p>
                                )}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}

                  {/* Mobile Quick Actions */}
                  <div className='pt-4 space-y-3 border-t border-gray-200'>
                    {quickActions.map((action, index) => {
                      const Icon = action.icon;
                      return (
                        <Link
                          key={index}
                          href={action.href}
                          className={`w-full px-4 py-3 text-white font-medium rounded-lg flex items-center gap-2 transition-all ${action.color}`}
                        >
                          <Icon className='w-5 h-5' />
                          {action.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Search Modal */}
      <SearchModal />
    </>
  );
}
