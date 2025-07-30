'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  X,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Shield,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

const AIIntelligenceAnnouncement: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user has already dismissed this announcement
    const dismissed = localStorage.getItem(
      'ai-intelligence-announcement-dismissed'
    );
    if (!dismissed) {
      // Show announcement after a delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('ai-intelligence-announcement-dismissed', 'true');
  };

  const handleClearStorage = () => {
    localStorage.removeItem('ai-intelligence-announcement-dismissed');
    setIsVisible(true);
    setIsDismissed(false);
  };

  if (isDismissed) {
    return (
      <button
        onClick={handleClearStorage}
        className='fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 p-3 bg-blue-600/20 backdrop-blur-lg rounded-full border border-blue-500/30 text-blue-400 hover:bg-blue-600/30 transition-all duration-300 shadow-lg'
        title='Show AI Intelligence Announcement'
      >
        <Brain className='w-6 h-6' />
      </button>
    );
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{
            opacity: 0,
            y: 200,
            scale: 0.3,
            rotateX: -90,
            transformPerspective: 1000,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            transformPerspective: 1000,
          }}
          exit={{
            opacity: 0,
            y: 200,
            scale: 0.3,
            rotateX: 90,
          }}
          transition={{
            type: 'spring',
            damping: 20,
            stiffness: 300,
            duration: 1.5,
          }}
          className='fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 max-w-md'
          whileHover={{
            scale: 1.02,
            y: -5,
            transition: { duration: 0.3 },
          }}
        >
          <motion.div
            className='relative bg-gradient-to-r from-blue-900/95 via-purple-900/95 to-red-900/95 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden'
            animate={{
              borderColor: [
                'rgba(255,255,255,0.2)',
                'rgba(59,130,246,0.5)',
                'rgba(139,92,246,0.5)',
                'rgba(239,68,68,0.5)',
                'rgba(255,255,255,0.2)',
              ],
              boxShadow: [
                '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                '0 25px 50px -12px rgba(59, 130, 246, 0.3)',
                '0 25px 50px -12px rgba(139, 92, 246, 0.3)',
                '0 25px 50px -12px rgba(239, 68, 68, 0.3)',
                '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {/* REVOLUTIONARY AI-POWERED ANIMATED BACKGROUND */}
            <div className='absolute inset-0 overflow-hidden'>
              <motion.div
                className='absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-red-500/30'
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                  scale: [1, 1.05, 1],
                  rotate: [0, 1, 0, -1, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* QUANTUM AI ENERGY GRID */}
              <motion.div
                className='absolute inset-0 opacity-20'
                style={{
                  backgroundImage: `
                    linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%),
                    linear-gradient(-45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)
                  `,
                  backgroundSize: '20px 20px',
                }}
                animate={{
                  backgroundPosition: ['0px 0px', '40px 40px', '0px 0px'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              {/* FLOATING AI POWER PARTICLES */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className='absolute rounded-full'
                  style={{
                    width: Math.random() * 6 + 2,
                    height: Math.random() * 6 + 2,
                    background: [
                      '#3b82f6',
                      '#8b5cf6',
                      '#ef4444',
                      '#10b981',
                      '#f59e0b',
                    ][Math.floor(Math.random() * 5)],
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    x: [
                      0,
                      Math.random() * 200 - 100,
                      Math.random() * 200 - 100,
                      0,
                    ],
                    y: [
                      0,
                      Math.random() * 150 - 75,
                      Math.random() * 150 - 75,
                      0,
                    ],
                    opacity: [0.2, 0.8, 0.4, 0.8, 0.2],
                    scale: [0.5, 1.5, 0.8, 1.2, 0.5],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 5 + Math.random() * 3,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: 'easeInOut',
                  }}
                />
              ))}

              {/* CIRCUIT BOARD EFFECT */}
              <motion.div
                className='absolute inset-0'
                style={{
                  backgroundImage: `radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                                   radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
                                   radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.2) 0%, transparent 50%)`,
                }}
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>

            {/* Content */}
            <div className='relative p-6'>
              {/* Header */}
              <div className='flex items-start justify-between mb-3'>
                <div className='flex items-center gap-3'>
                  <motion.div
                    className='p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg'
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    <Brain className='w-5 h-5 text-white' />
                  </motion.div>
                  <div className='flex items-center gap-2'>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Sparkles className='w-4 h-4 text-yellow-400' />
                    </motion.div>
                    <span className='text-xs font-bold text-red-400 uppercase tracking-wider'>
                      Revolutionary Update
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleDismiss}
                  className='p-1 text-slate-400 hover:text-white transition-colors'
                >
                  <X className='w-4 h-4' />
                </button>
              </div>
              {/* Title */}
              <h3 className='text-lg font-bold text-white mb-2'>
                AI Migration Intelligence is Live!
              </h3>
              {/* Description */}
              <p className='text-sm text-slate-300 mb-4 leading-relaxed'>
                Experience the world's first AI-powered migration intelligence
                platform with real-time insights, predictive analytics, and
                revolutionary ScamShield protection.
              </p>{' '}
              {/* CTA Button */}
              <Link href='/ai-intelligence'>
                <motion.div
                  className='flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 cursor-pointer'
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleDismiss}
                >
                  <span>Explore Now</span>
                  <ArrowRight className='w-4 h-4' />
                </motion.div>
              </Link>
              {/* REVOLUTIONARY AI-POWERED FEATURES with MIND-BLOWING ANIMATIONS */}
              <div className='mt-4 pt-4 border-t border-white/10'>
                <div className='grid grid-cols-3 gap-3'>
                  {[
                    {
                      icon: TrendingUp,
                      label: 'Real-time Analytics',
                      color: 'text-green-400',
                      bgColor: 'from-green-500/20 to-green-600/30',
                    },
                    {
                      icon: Shield,
                      label: 'ScamShield Protection',
                      color: 'text-blue-400',
                      bgColor: 'from-blue-500/20 to-blue-600/30',
                    },
                    {
                      icon: Zap,
                      label: 'Success Optimization',
                      color: 'text-yellow-400',
                      bgColor: 'from-yellow-500/20 to-yellow-600/30',
                    },
                  ].map((feature, index) => (
                    <motion.div
                      key={feature.label}
                      initial={{
                        opacity: 0,
                        y: 50,
                        scale: 0,
                        rotateY: -180,
                        z: -100,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        rotateY: 0,
                        z: 0,
                      }}
                      transition={{
                        delay: 1 + index * 0.4,
                        type: 'spring',
                        bounce: 0.6,
                        duration: 1.2,
                      }}
                      className={`relative flex flex-col items-center p-3 bg-gradient-to-br ${feature.bgColor} backdrop-blur-sm rounded-xl border border-white/20 hover:border-white/40 transition-all duration-500 overflow-hidden group cursor-pointer`}
                      whileHover={{
                        scale: 1.15,
                        y: -8,
                        rotateY: 15,
                        rotateX: 5,
                        zIndex: 10,
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* MAGICAL BACKGROUND ENERGY WAVES */}
                      <motion.div
                        className='absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent'
                        animate={{
                          x: ['-100%', '100%'],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.7,
                          ease: 'easeInOut',
                        }}
                      />

                      {/* FLOATING ENERGY PARTICLES */}
                      {[...Array(4)].map((_, particleIndex) => (
                        <motion.div
                          key={particleIndex}
                          className={`absolute w-1 h-1 ${feature.color.replace('text-', 'bg-')} rounded-full opacity-60`}
                          animate={{
                            x: [
                              Math.random() * 60 - 30,
                              Math.random() * 60 - 30,
                              Math.random() * 60 - 30,
                            ],
                            y: [
                              Math.random() * 60 - 30,
                              Math.random() * 60 - 30,
                              Math.random() * 60 - 30,
                            ],
                            opacity: [0.3, 0.8, 0.3],
                            scale: [0.5, 1.5, 0.5],
                          }}
                          transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: particleIndex * 0.5 + index * 0.3,
                            ease: 'easeInOut',
                          }}
                          style={{
                            left: '50%',
                            top: '50%',
                          }}
                        />
                      ))}

                      {/* POWER RING EFFECT */}
                      <motion.div
                        className={`absolute inset-0 rounded-xl border-2 ${feature.color.replace('text-', 'border-')} opacity-0 group-hover:opacity-100`}
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0, 0.5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                      />

                      {/* MAIN ICON with EXTREME ANIMATIONS */}
                      <motion.div
                        animate={{
                          scale: [1, 1.3, 1.1, 1.3, 1],
                          rotate: [0, 15, -10, 5, 0],
                          y: [0, -5, 0, -3, 0],
                          filter: [
                            'brightness(1) saturate(1)',
                            'brightness(1.3) saturate(1.5)',
                            'brightness(1.1) saturate(1.2)',
                            'brightness(1.3) saturate(1.5)',
                            'brightness(1) saturate(1)',
                          ],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.8,
                          ease: 'easeInOut',
                        }}
                        whileHover={{
                          scale: 1.5,
                          rotate: 360,
                          filter:
                            'brightness(1.5) saturate(2) drop-shadow(0 0 20px currentColor)',
                        }}
                        className={`${feature.color} mb-2 relative z-10`}
                      >
                        <feature.icon className='w-8 h-8' />

                        {/* ICON GLOW EFFECT */}
                        <motion.div
                          className={`absolute inset-0 ${feature.color} opacity-50 blur-sm`}
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 0.7, 0.3],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.4,
                          }}
                        >
                          <feature.icon className='w-8 h-8' />
                        </motion.div>
                      </motion.div>

                      {/* AI-POWERED TEXT with MATRIX EFFECT */}
                      <motion.span
                        className='text-xs text-center text-slate-300 font-medium leading-tight relative z-10'
                        animate={{
                          opacity: [0.7, 1, 0.7],
                          textShadow: [
                            '0 0 0px currentColor',
                            '0 0 8px currentColor',
                            '0 0 0px currentColor',
                          ],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          delay: index * 0.6,
                        }}
                        whileHover={{
                          scale: 1.1,
                          textShadow: '0 0 12px currentColor',
                        }}
                      >
                        {feature.label}
                      </motion.span>

                      {/* QUANTUM ENERGY BORDER */}
                      <motion.div
                        className='absolute inset-0 rounded-xl'
                        style={{
                          background: `conic-gradient(from ${index * 120}deg, transparent, ${feature.color.replace('text-', '')}, transparent)`,
                          padding: '1px',
                          opacity: 0,
                        }}
                        animate={{
                          rotate: [0, 360],
                          opacity: [0, 0.6, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: index * 0.5,
                          ease: 'linear',
                        }}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* AI POWER STATUS INDICATOR */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.5, type: 'spring', bounce: 0.5 }}
                  className='mt-3 flex items-center justify-center gap-2'
                >
                  <motion.div
                    className='w-2 h-2 bg-green-400 rounded-full'
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  />
                  <motion.span
                    className='text-xs text-green-400 font-bold tracking-wider'
                    animate={{
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  >
                    AI SYSTEMS ONLINE
                  </motion.span>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    <Brain className='w-3 h-3 text-green-400' />
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Enhanced Glow Effect */}
            <div className='absolute -inset-2 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-red-500/30 rounded-2xl blur-xl -z-10' />
            <motion.div
              className='absolute -inset-1 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-red-400/20 rounded-2xl blur-lg -z-10'
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AIIntelligenceAnnouncement;
