'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Shield,
  Globe,
  Zap,
  Brain,
  Award,
  Clock,
  CheckCircle2,
  Star,
  Crown,
  Rocket,
  Heart,
} from 'lucide-react';

const WhyChooseVanhsya = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Quantum Intelligence',
      description:
        'Revolutionary quantum processing with 500+ pattern analysis for unmatched accuracy and speed.',
      stats: '99.8% Accuracy',
      gradient: 'from-blue-500 to-cyan-500',
      particles: true,
    },
    {
      icon: Shield,
      title: 'Military-Grade Security',
      description:
        'Blockchain-powered protection with zero-knowledge encryption ensuring your data remains sovereign.',
      stats: 'ISO 27001 Certified',
      gradient: 'from-green-500 to-emerald-500',
      particles: true,
    },
    {
      icon: Globe,
      title: 'Global Network Excellence',
      description:
        'Connected to 195+ countries with real-time embassy updates and diplomatic intelligence.',
      stats: '195+ Countries',
      gradient: 'from-purple-500 to-pink-500',
      particles: true,
    },
    {
      icon: Zap,
      title: 'Lightning-Fast Processing',
      description:
        'Quantum-speed document processing and instant eligibility assessment in real-time.',
      stats: '<1 Second Response',
      gradient: 'from-yellow-500 to-orange-500',
      particles: true,
    },
    {
      icon: Award,
      title: 'World-Class Success Rate',
      description:
        'Industry-leading 99.8% success rate with guaranteed outcomes and full transparency.',
      stats: '50,000+ Success Stories',
      gradient: 'from-red-500 to-pink-500',
      particles: true,
    },
    {
      icon: Clock,
      title: '24/7 AI-Powered Support',
      description:
        'Never-sleeping quantum AI support system providing instant assistance across all time zones.',
      stats: '24/7 Availability',
      gradient: 'from-indigo-500 to-blue-500',
      particles: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      rotateX: -45,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        type: 'spring' as const,
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const cardVariants = {
    hover: {
      y: -20,
      rotateY: 5,
      scale: 1.05,
      transition: {
        duration: 0.4,
        type: 'spring' as const,
        stiffness: 300,
      },
    },
  };

  return (
    <section className='relative py-32 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 overflow-hidden'>
      {/* Background Effects */}
      <div className='absolute inset-0'>
        <motion.div
          className='absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl'
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl'
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.7, 0.3, 0.7],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        className='relative z-10 max-w-7xl mx-auto px-6'
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className='text-center mb-20'>
          <motion.div
            className='inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full border border-blue-500/30 backdrop-blur-sm mb-6'
            animate={{
              boxShadow: [
                '0 0 20px rgba(99, 102, 241, 0.3)',
                '0 0 40px rgba(99, 102, 241, 0.6)',
                '0 0 20px rgba(99, 102, 241, 0.3)',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Crown className='w-5 h-5 text-yellow-400' />
            <span className='text-white font-semibold'>
              The New Migration Era
            </span>
            <Star className='w-5 h-5 text-yellow-400' />
          </motion.div>

          <motion.h2
            className='text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight mb-6'
            style={{ backgroundSize: '200% 100%' }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            VANHSYA
            <br />
            <motion.span
              animate={{ rotateY: [0, 360] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              className='inline-block'
            >
              LEADS
            </motion.span>
            <br />
            THE FUTURE
          </motion.h2>

          <motion.p
            className='text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed'
            variants={itemVariants}
          >
            Pioneering the new era of global migration with VANHSYA's
            revolutionary AI technology, breakthrough security systems, and
            industry-transforming success rates that reshape the world.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover='hover'
              className='group relative'
            >
              <motion.div
                variants={cardVariants}
                className='relative p-8 bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-3xl border border-slate-700/50 backdrop-blur-sm overflow-hidden'
              >
                {/* Floating Particles */}
                {feature.particles && (
                  <div className='absolute inset-0'>
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className='absolute w-1 h-1 bg-blue-400 rounded-full'
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          y: [-10, 10, -10],
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: i * 0.5,
                          ease: 'easeInOut',
                        }}
                      />
                    ))}
                  </div>
                )}

                {/* Gradient Overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Icon */}
                <motion.div
                  className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 relative`}
                  whileHover={{
                    scale: 1.1,
                    rotate: 360,
                    boxShadow: `0 20px 40px rgba(59, 130, 246, 0.4)`,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className='w-10 h-10 text-white' />

                  {/* Rotating Ring */}
                  <motion.div
                    className='absolute inset-0 border-2 border-white/20 rounded-2xl'
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                </motion.div>

                {/* Content */}
                <div className='relative z-10'>
                  <h3 className='text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors'>
                    {feature.title}
                  </h3>

                  <p className='text-slate-300 mb-6 leading-relaxed group-hover:text-slate-200 transition-colors'>
                    {feature.description}
                  </p>

                  {/* Stats Badge */}
                  <motion.div
                    className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${feature.gradient} rounded-full text-white font-bold text-sm`}
                    whileHover={{ scale: 1.05 }}
                    animate={{
                      boxShadow: [
                        '0 0 10px rgba(59, 130, 246, 0.3)',
                        '0 0 20px rgba(59, 130, 246, 0.6)',
                        '0 0 10px rgba(59, 130, 246, 0.3)',
                      ],
                    }}
                    transition={{
                      boxShadow: {
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      },
                    }}
                  >
                    <CheckCircle2 className='w-4 h-4' />
                    {feature.stats}
                  </motion.div>
                </div>

                {/* Hover Effect Border */}
                <motion.div className='absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-500/50 transition-colors duration-500' />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div variants={itemVariants} className='text-center mt-20'>
          <motion.div
            className='inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/30 backdrop-blur-sm'
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(59, 130, 246, 0.2)',
              boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)',
            }}
          >
            <Heart className='w-6 h-6 text-red-500' />
            <span className='text-white font-semibold text-lg'>
              Join 50,000+ successful migrants who chose excellence
            </span>
            <Rocket className='w-6 h-6 text-blue-400' />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyChooseVanhsya;
