'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  Bot,
  BarChart3,
  Calendar,
  Shield,
  Zap,
  ArrowRight,
  Sparkles,
  Brain,
  Target,
  Award,
  Activity,
} from 'lucide-react';

import { VanhsyaTheme } from '@/styles/theme';

const AIFeaturesShowcase: React.FC = () => {
  const features = [
    {
      id: 'heatmap',
      title: 'Global Migration Heatmap',
      description:
        'Real-time migration trends and analytics across 150+ countries with live data visualization.',
      icon: BarChart3,
      href: '/migration-heatmap',
      badge: 'LIVE',
      color: 'from-blue-500 to-cyan-600',
      stats: ['Real-time data', '150+ Countries', 'Live analytics'],
    },
    {
      id: 'consultation',
      title: 'AI-Powered Consultation',
      description:
        'Get expert immigration advice enhanced by AI analysis and personalized recommendations.',
      icon: Bot,
      href: '/consultation-booking',
      badge: 'NEW',
      color: 'from-violet-500 to-purple-600',
      stats: ['AI Analysis', 'Expert Consultants', 'Instant booking'],
    },
    {
      id: 'dashboard',
      title: 'Real-Time Dashboard',
      description:
        'Monitor live immigration analytics, success rates, and processing times with advanced metrics.',
      icon: Activity,
      href: '/dashboard',
      badge: 'LIVE',
      color: 'from-green-500 to-emerald-600',
      stats: ['Live monitoring', 'Success tracking', 'Performance metrics'],
    },
    {
      id: 'scam-detector',
      title: 'ScamShield AI Detector',
      description:
        'Advanced AI-powered fraud detection system protecting you from immigration scams.',
      icon: Shield,
      href: '/scam-detector',
      badge: 'HOT',
      color: 'from-red-500 to-pink-600',
      stats: ['99.7% Accuracy', '500K+ Protected', 'Real-time scanning'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      className={`py-24 ${VanhsyaTheme.backgrounds.main} relative overflow-hidden`}
    >
      {/* Animated Background */}
      <div className='absolute inset-0'>
        <motion.div
          className='absolute -top-40 -right-40 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl'
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className='absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl'
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <div className='flex items-center justify-center gap-3 mb-6'>
            <motion.div
              className={`p-4 bg-gradient-to-r ${VanhsyaTheme.gradients.primary} rounded-2xl ${VanhsyaTheme.effects.glow}`}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <Brain className='w-10 h-10 text-white' />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className='p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl'
            >
              <Sparkles className='w-8 h-8 text-white' />
            </motion.div>
          </div>

          <h2
            className={`text-5xl md:text-6xl font-bold ${VanhsyaTheme.text.gradient} mb-6`}
          >
            AI-Powered Immigration Suite
          </h2>
          <p
            className={`text-xl ${VanhsyaTheme.text.secondary} max-w-4xl mx-auto mb-8`}
          >
            Experience the future of immigration with our comprehensive
            AI-powered platform. From real-time analytics to expert
            consultations, everything you need for successful migration.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid grid-cols-1 lg:grid-cols-2 gap-8'
        >
          {features.map(feature => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              className='group cursor-pointer'
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className={`${VanhsyaTheme.backgrounds.glass} rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 h-full ${VanhsyaTheme.effects.glow} group-hover:shadow-2xl`}
              >
                {/* Header */}
                <div className='flex items-start justify-between mb-6'>
                  <div
                    className={`p-4 bg-gradient-to-r ${feature.color} rounded-2xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className='w-8 h-8 text-white' />
                  </div>
                  <div className='flex items-center gap-2'>
                    <span
                      className={`px-3 py-1 text-xs font-bold rounded-full ${
                        feature.badge === 'LIVE'
                          ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                          : feature.badge === 'NEW'
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                            : feature.badge === 'HOT'
                              ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                              : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }`}
                    >
                      {feature.badge}
                    </span>
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Zap className='w-4 h-4 text-yellow-400' />
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className='mb-8'>
                  <h3
                    className={`text-2xl font-bold ${VanhsyaTheme.text.primary} mb-4 group-hover:text-white transition-colors`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`${VanhsyaTheme.text.secondary} leading-relaxed mb-6`}
                  >
                    {feature.description}
                  </p>

                  {/* Stats */}
                  <div className='grid grid-cols-3 gap-4 mb-6'>
                    {feature.stats.map((stat, statIndex) => (
                      <div
                        key={statIndex}
                        className={`${VanhsyaTheme.backgrounds.glass} rounded-xl p-3 border border-white/10 text-center`}
                      >
                        <div
                          className={`text-xs font-medium ${VanhsyaTheme.text.secondary}`}
                        >
                          {stat}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <motion.a
                  href={feature.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r ${feature.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 group-hover:shadow-xl`}
                >
                  <span>Explore {feature.title.split(' ')[0]}</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className='w-5 h-5' />
                  </motion.div>
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className='text-center mt-16'
        >
          <div
            className={`${VanhsyaTheme.backgrounds.glass} rounded-3xl p-8 border border-white/20 mx-auto max-w-4xl`}
          >
            <div className='flex items-center justify-center gap-4 mb-6'>
              <Award className='w-8 h-8 text-gold-400' />
              <Target className='w-8 h-8 text-green-400' />
              <Globe className='w-8 h-8 text-blue-400' />
            </div>

            <h3
              className={`text-3xl font-bold ${VanhsyaTheme.text.primary} mb-4`}
            >
              Ready to Experience the Future of Immigration?
            </h3>
            <p className={`text-lg ${VanhsyaTheme.text.secondary} mb-8`}>
              Join thousands of successful migrants who trust VANHSYA's
              AI-powered immigration platform. Start your journey with our
              comprehensive suite of intelligent tools.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <motion.a
                href='/consultation-booking'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${VanhsyaTheme.gradients.primary} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300`}
              >
                <Calendar className='w-5 h-5' />
                Book AI Consultation
              </motion.a>
              <motion.a
                href='/dashboard'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-8 py-4 ${VanhsyaTheme.backgrounds.glass} border border-white/20 ${VanhsyaTheme.text.primary} font-semibold rounded-xl hover:bg-white/20 transition-all duration-300`}
              >
                <Activity className='w-5 h-5' />
                View Live Dashboard
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIFeaturesShowcase;
