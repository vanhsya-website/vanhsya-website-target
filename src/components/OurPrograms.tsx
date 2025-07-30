'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const OurPrograms: React.FC = () => {
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

    const element = document.getElementById('programs-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const programs = [
    {
      id: 1,
      title: 'Skilled Worker Visa',
      description: 'Get your skills recognized globally.',
      image: '/images/program1.jpg',
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      id: 2,
      title: 'Student Exchange Program',
      description: 'Study abroad with comprehensive support.',
      image: '/images/program2.jpg',
      gradient: 'from-purple-500 to-purple-700',
    },
    {
      id: 3,
      title: 'Business Immigration',
      description: 'Invest and immigrate with confidence.',
      image: '/images/program3.jpg',
      gradient: 'from-green-500 to-green-700',
    },
    {
      id: 4,
      title: 'Family Reunification',
      description: 'Bring your loved ones together.',
      image: '/images/program4.jpg',
      gradient: 'from-pink-500 to-pink-700',
    },
    {
      id: 5,
      title: 'Permanent Residency',
      description: 'Make your new country home.',
      image: '/images/program5.jpg',
      gradient: 'from-indigo-500 to-indigo-700',
    },
    {
      id: 6,
      title: 'Express Entry Program',
      description: 'Fast-track your immigration journey.',
      image: '/images/program6.jpg',
      gradient: 'from-orange-500 to-orange-700',
    },
  ];

  return (
    <section
      id='programs-section'
      className='py-20 px-4 text-center bg-gray-50'
    >
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='mb-12'
        >
          <h2 className='text-3xl font-bold mb-8 text-gray-900'>
            Our Programs
          </h2>
        </motion.div>

        {/* Programs Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
              className='program-card bg-white shadow-md hover:shadow-lg rounded-lg p-6 transition-all duration-300 transform hover:-translate-y-2'
            >
              {/* Program Image */}
              <div className='relative w-full h-40 mb-4 rounded-lg overflow-hidden'>
                <Image
                  src={program.image}
                  alt={program.title}
                  width={500}
                  height={300}
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                  onError={e => {
                    // Fallback to placeholder if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                {/* Fallback placeholder - shown if image fails to load */}
                <div className='absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center'>
                  <span className='text-gray-400 text-sm'>Program Image</span>
                </div>
              </div>

              {/* Program Content */}
              <div className='space-y-4'>
                <h3 className='text-xl font-semibold text-gray-900'>
                  {program.title}
                </h3>
                <p className='text-gray-600'>{program.description}</p>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`mt-4 bg-gradient-to-r ${program.gradient} text-white rounded-full py-2 px-4 font-medium transition-all duration-300 hover:shadow-lg`}
                >
                  Explore
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPrograms;
