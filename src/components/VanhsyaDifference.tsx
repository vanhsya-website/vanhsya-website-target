// 🌟 VANHSYA Difference Premium Component
// Elegant showcase of 5 core company strengths with premium Apple-style design
'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShieldCheck, PlaneTakeoff, Bot, Lock, Brain } from 'lucide-react';

interface StrengthPoint {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export default function VanhsyaDifference() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const strengths: StrengthPoint[] = [
    {
      icon: ShieldCheck,
      title: 'Trust & Transparency',
      description:
        'Complete visibility into your immigration journey with real-time updates',
    },
    {
      icon: PlaneTakeoff,
      title: 'Global Migration Experts',
      description:
        '75+ countries covered with verified government partnerships',
    },
    {
      icon: Bot,
      title: 'AI-Powered Tools',
      description:
        'Advanced AI algorithms optimizing your application success rates',
    },
    {
      icon: Lock,
      title: '100% Secure Documents',
      description: 'Bank-grade security protecting your sensitive information',
    },
    {
      icon: Brain,
      title: 'Smarter Client Strategy',
      description: 'Personalized strategies tailored to your unique profile',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className='relative py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden'
    >
      {/* Subtle background pattern */}
      <div className='absolute inset-0 opacity-30'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.15)_1px,transparent_0)] bg-[size:50px_50px]' />
      </div>

      <div className='container mx-auto px-4 relative'>
        {/* Section Header */}
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            The{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'>
              Vanhsya
            </span>{' '}
            Difference
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Five core strengths that set us apart in the global immigration
            landscape
          </p>
        </motion.div>

        {/* Strength Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto'>
          {strengths.map((strength, index) => {
            const IconComponent = strength.icon;

            return (
              <motion.div
                key={index}
                className='group relative'
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <div className='relative h-full p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-white/90'>
                  {/* Gradient overlay on hover */}
                  <div className='absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

                  <div className='relative z-10'>
                    {/* Icon */}
                    <div className='w-14 h-14 mx-auto mb-6 p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg'>
                      <IconComponent className='w-full h-full text-white' />
                    </div>

                    {/* Title */}
                    <h3 className='text-lg font-bold text-gray-900 mb-3 text-center'>
                      {strength.title}
                    </h3>

                    {/* Description */}
                    <p className='text-sm text-gray-600 text-center leading-relaxed'>
                      {strength.description}
                    </p>
                  </div>

                  {/* Subtle shine effect */}
                  <div
                    className='absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full'
                    style={{ animation: 'shine 2s ease-in-out infinite' }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className='text-center mt-16'
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className='text-lg text-gray-700 font-medium'>
            Experience the future of immigration services today
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }
      `}</style>
    </section>
  );
}
