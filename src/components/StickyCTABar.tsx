'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Play, Shield, Sparkles } from 'lucide-react';

interface StickyCTABarProps {
  threshold?: number;
}

const StickyCTABar: React.FC<StickyCTABarProps> = ({ threshold = 200 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className='fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-slate-900/95 via-purple-900/95 to-slate-900/95 backdrop-blur-xl border-t border-purple-500/30 shadow-2xl'
        >
          <div className='container mx-auto px-4 py-4'>
            <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
              {/* Left side - Call to action text */}
              <div className='flex items-center space-x-3'>
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                >
                  <Sparkles className='w-6 h-6 text-gold-400' />
                </motion.div>
                <div>
                  <h3 className='text-white font-bold text-sm sm:text-base'>
                    Ready to Start Your Immigration Journey?
                  </h3>
                  <p className='text-slate-300 text-xs sm:text-sm'>
                    Join 50,000+ successful migrants with AI-powered guidance
                  </p>
                </div>
              </div>

              {/* Right side - Action buttons */}
              <div className='flex items-center space-x-3'>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 10px 25px rgba(139, 92, 246, 0.3)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  className='flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25'
                  onClick={() => {
                    document
                      .getElementById('hero')
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Rocket className='w-4 h-4' />
                  <span>Start Journey</span>
                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 10px 25px rgba(196, 155, 51, 0.3)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  className='flex items-center space-x-2 bg-gradient-to-r from-gold-600 to-yellow-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/25'
                  onClick={() => {
                    document
                      .getElementById('success-stories')
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Play className='w-4 h-4' />
                  <span className='hidden sm:inline'>Watch Stories</span>
                  <span className='sm:hidden'>Stories</span>
                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 10px 25px rgba(16, 185, 129, 0.3)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  className='flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25'
                  onClick={() => {
                    document
                      .getElementById('ai-tools')
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Shield className='w-4 h-4' />
                  <span className='hidden sm:inline'>AI Tools</span>
                  <span className='sm:hidden'>AI</span>
                </motion.button>
              </div>
            </div>
          </div>

          {/* Animated glow effect */}
          <motion.div
            className='absolute -top-1 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-gold-500 to-purple-500'
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTABar;
