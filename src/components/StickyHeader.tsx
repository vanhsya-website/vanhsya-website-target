'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const StickyHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`sticky top-0 bg-white shadow-md z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : 'shadow-md'
      }`}
    >
      <nav className='flex justify-between items-center p-6 max-w-7xl mx-auto'>
        {/* Logo Section */}
        <motion.div
          className='logo'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Link href='/'>
            <div className='relative'>
              {/* Fallback div in case logo image doesn't exist */}
              <div className='h-12 w-auto flex items-center'>
                <div className='bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2 rounded-lg font-bold text-xl'>
                  VANHSYA
                </div>
              </div>
              {/* Uncomment this when you have the logo image */}
              {/* <Image 
                src="/logo.png" 
                alt="VANHSYA" 
                width={120}
                height={48}
                className="h-12 w-auto"
                priority
              /> */}
            </div>
          </Link>
        </motion.div>

        {/* Navigation Menu */}
        <ul className='hidden md:flex space-x-8 items-center'>
          <motion.li whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
            <button
              onClick={() => scrollToSection('enhanced-services-section')}
              className='text-xl text-gray-800 hover:text-blue-600 transition-colors duration-300 font-medium'
            >
              Services
            </button>
          </motion.li>

          <motion.li whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
            <button
              onClick={() => scrollToSection('programs-section')}
              className='text-xl text-gray-800 hover:text-blue-600 transition-colors duration-300 font-medium'
            >
              Programs
            </button>
          </motion.li>

          <motion.li whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
            <button
              onClick={() => scrollToSection('smooth-scroll-section')}
              className='text-xl text-gray-800 hover:text-blue-600 transition-colors duration-300 font-medium'
            >
              Features
            </button>
          </motion.li>

          <motion.li whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
            <button
              onClick={() => scrollToSection('custom-scroll-section')}
              className='text-xl text-gray-800 hover:text-blue-600 transition-colors duration-300 font-medium'
            >
              About
            </button>
          </motion.li>

          <motion.li whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
            <Link
              href='/contact'
              className='text-xl text-gray-800 hover:text-blue-600 transition-colors duration-300 font-medium'
            >
              Contact
            </Link>
          </motion.li>

          <motion.li
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Link href='/get-started'>
              <button className='bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full px-6 py-2 font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-700 hover:to-blue-900'>
                Get Started
              </button>
            </Link>
          </motion.li>
        </ul>

        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          <button
            className='text-gray-800 hover:text-blue-600 transition-colors duration-300'
            aria-label='Open mobile menu'
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className='md:hidden bg-white border-t border-gray-200'>
        <div className='px-6 py-4 space-y-4'>
          <button
            onClick={() => scrollToSection('enhanced-services-section')}
            className='block w-full text-left text-lg text-gray-800 hover:text-blue-600 transition-colors duration-300 py-2'
          >
            Services
          </button>

          <button
            onClick={() => scrollToSection('programs-section')}
            className='block w-full text-left text-lg text-gray-800 hover:text-blue-600 transition-colors duration-300 py-2'
          >
            Programs
          </button>

          <button
            onClick={() => scrollToSection('smooth-scroll-section')}
            className='block w-full text-left text-lg text-gray-800 hover:text-blue-600 transition-colors duration-300 py-2'
          >
            Features
          </button>

          <button
            onClick={() => scrollToSection('custom-scroll-section')}
            className='block w-full text-left text-lg text-gray-800 hover:text-blue-600 transition-colors duration-300 py-2'
          >
            About
          </button>

          <Link
            href='/contact'
            className='block text-lg text-gray-800 hover:text-blue-600 transition-colors duration-300 py-2'
          >
            Contact
          </Link>

          <Link href='/get-started'>
            <button className='w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full px-6 py-2 font-medium mt-4'>
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </motion.header>
  );
};

export default StickyHeader;
