'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, Rocket } from 'lucide-react';

interface BackToTopButtonProps {
  threshold?: number;
}

const BackToTopButton: React.FC<BackToTopButtonProps> = ({ threshold = 300 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 100 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          whileHover={{ 
            scale: 1.1, 
            boxShadow: '0 15px 35px rgba(139, 92, 246, 0.4)',
            y: -2
          }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white rounded-full shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex items-center justify-center group"
          aria-label="Back to top"
        >
          {/* Animated background glow */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 group-hover:opacity-20"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Icon with hover animation */}
          <motion.div
            className="relative z-10"
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronUp className="w-6 h-6" />
          </motion.div>

          {/* Rocket trail effect on hover */}
          <motion.div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100"
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <Rocket className="w-4 h-4 text-gold-400" />
          </motion.div>

          {/* Floating particles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold-400 rounded-full opacity-0 group-hover:opacity-60"
              animate={{
                y: [0, -20, -40],
                x: [0, Math.random() * 10 - 5, Math.random() * 20 - 10],
                opacity: [0, 0.6, 0],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: 'easeOut'
              }}
              style={{
                left: `${40 + i * 10}%`,
                top: '20%'
              }}
            />
          ))}
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTopButton;
