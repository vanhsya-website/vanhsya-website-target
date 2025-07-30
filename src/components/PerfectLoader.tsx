'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Loader2 } from 'lucide-react';

interface PerfectLoaderProps {
  isLoading?: boolean;
  text?: string;
}

const PerfectLoader: React.FC<PerfectLoaderProps> = ({
  isLoading = true,
  text = 'Loading Quantum Intelligence...',
}) => {
  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950'
    >
      {/* Background Particles */}
      <div className='absolute inset-0'>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-1 h-1 bg-blue-400 rounded-full'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              y: [-20, 20, -20],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.1,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className='relative z-10 text-center'>
        {/* Logo */}
        <motion.div
          className='w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mb-8 mx-auto'
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            boxShadow: [
              '0 0 30px rgba(99, 102, 241, 0.3)',
              '0 0 60px rgba(99, 102, 241, 0.8)',
              '0 0 30px rgba(99, 102, 241, 0.3)',
            ],
          }}
          transition={{
            rotate: { duration: 2, repeat: Infinity, ease: 'linear' },
            scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
            boxShadow: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <Sparkles className='w-10 h-10 text-white' />
        </motion.div>

        {/* Spinning Loader */}
        <motion.div className='mb-6'>
          <Loader2 className='w-8 h-8 text-blue-400 mx-auto animate-spin' />
        </motion.div>

        {/* Loading Text */}
        <motion.h2
          className='text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          {text}
        </motion.h2>

        {/* Progress Dots */}
        <div className='flex justify-center gap-2 mt-4'>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className='w-2 h-2 bg-blue-400 rounded-full'
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PerfectLoader;
