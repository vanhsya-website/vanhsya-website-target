'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomScrollSection: React.FC = () => {
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

    const element = document.getElementById('custom-scroll-section');
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
      id='custom-scroll-section'
      className='scroll-smooth py-12 px-4 md:px-8 lg:px-16 bg-gray-50'
    >
      <div className='max-w-7xl mx-auto'>
        {/* Your Custom Content Goes Here */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='text-center mb-12'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            Custom Content Section
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            This is your custom content area. Replace this content with anything
            you need - text, images, cards, forms, or any other components.
          </p>
        </motion.div>

        {/* Flexible Content Area */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='space-y-8'
        >
          {/* Content Block 1 - Replace with your content */}
          <div className='bg-white rounded-xl p-8 shadow-sm'>
            <h3 className='text-2xl font-semibold text-gray-900 mb-4'>
              Content Block 1
            </h3>
            <p className='text-gray-600 leading-relaxed'>
              Replace this with your own content. You can add text, images,
              buttons, forms, or any other elements you need for your specific
              use case.
            </p>
          </div>

          {/* Content Block 2 - Replace with your content */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='bg-white rounded-xl p-6 shadow-sm'>
              <h4 className='text-xl font-semibold text-gray-900 mb-3'>
                Left Column
              </h4>
              <p className='text-gray-600'>
                Add your content here. This could be text, images, or any other
                components.
              </p>
            </div>
            <div className='bg-white rounded-xl p-6 shadow-sm'>
              <h4 className='text-xl font-semibold text-gray-900 mb-3'>
                Right Column
              </h4>
              <p className='text-gray-600'>
                Add your content here. This could be text, images, or any other
                components.
              </p>
            </div>
          </div>

          {/* Content Block 3 - Replace with your content */}
          <div className='bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8'>
            <div className='text-center'>
              <h3 className='text-3xl font-bold text-gray-900 mb-4'>
                Call to Action Area
              </h3>
              <p className='text-lg text-gray-600 mb-6'>
                This is a perfect spot for a call-to-action, newsletter signup,
                contact form, or any other important content.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300'
              >
                Your CTA Button
              </motion.button>
            </div>
          </div>

          {/* Content Block 4 - Replace with your content */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='bg-white rounded-lg p-6 shadow-sm text-center'>
              <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-blue-600 text-xl'>🎯</span>
              </div>
              <h5 className='font-semibold text-gray-900 mb-2'>Feature 1</h5>
              <p className='text-gray-600 text-sm'>
                Replace with your feature description
              </p>
            </div>
            <div className='bg-white rounded-lg p-6 shadow-sm text-center'>
              <div className='w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-green-600 text-xl'>⚡</span>
              </div>
              <h5 className='font-semibold text-gray-900 mb-2'>Feature 2</h5>
              <p className='text-gray-600 text-sm'>
                Replace with your feature description
              </p>
            </div>
            <div className='bg-white rounded-lg p-6 shadow-sm text-center'>
              <div className='w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-purple-600 text-xl'>🚀</span>
              </div>
              <h5 className='font-semibold text-gray-900 mb-2'>Feature 3</h5>
              <p className='text-gray-600 text-sm'>
                Replace with your feature description
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomScrollSection;
