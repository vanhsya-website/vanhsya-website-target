'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SmoothScrollSection: React.FC = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('smooth-scroll-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section
      id='smooth-scroll-section'
      className='scroll-smooth py-12 px-4 md:px-8 lg:px-16 bg-white'
    >
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='text-center mb-12'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            Your Content Section
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            This is a responsive section with smooth scrolling behavior and
            adaptive padding for all screen sizes.
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        >
          {/* Content Card 1 */}
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
            className='bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300'
          >
            <div className='w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6'>
              <svg
                className='w-8 h-8 text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M13 10V3L4 14h7v7l9-11h-7z'
                />
              </svg>
            </div>
            <h3 className='text-2xl font-semibold text-gray-900 mb-4'>
              Fast Performance
            </h3>
            <p className='text-gray-600'>
              Optimized for speed with smooth scrolling and responsive design
              that works seamlessly across all devices.
            </p>
          </motion.div>

          {/* Content Card 2 */}
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
            className='bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300'
          >
            <div className='w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mb-6'>
              <svg
                className='w-8 h-8 text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </div>
            <h3 className='text-2xl font-semibold text-gray-900 mb-4'>
              Responsive Design
            </h3>
            <p className='text-gray-600'>
              Adaptive padding and layout that adjusts perfectly from mobile to
              desktop, ensuring great user experience.
            </p>
          </motion.div>

          {/* Content Card 3 */}
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
            className='bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300'
          >
            <div className='w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-6'>
              <svg
                className='w-8 h-8 text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4'
                />
              </svg>
            </div>
            <h3 className='text-2xl font-semibold text-gray-900 mb-4'>
              Smooth Scrolling
            </h3>
            <p className='text-gray-600'>
              Enhanced with scroll-smooth class for buttery smooth navigation
              and seamless user interactions.
            </p>
          </motion.div>
        </motion.div>

        {/* Additional Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='mt-16 text-center'
        >
          <div className='bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12'>
            <h3 className='text-3xl font-bold text-gray-900 mb-6'>
              Ready to Get Started?
            </h3>
            <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
              Experience the perfect combination of responsive design, smooth
              scrolling, and modern aesthetics.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300'
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SmoothScrollSection;
