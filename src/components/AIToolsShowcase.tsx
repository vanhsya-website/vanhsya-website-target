// 🧠 AI Tools Showcase Section
// This section displays VANHSYA's AI-powered immigration tools with interactive cards,
// live demos, hover animations, and feature explanations. Showcases cutting-edge
// AI technology for eligibility checking, document analysis, and consultation.
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  FileCheck,
  Calculator,
  MessageSquare,
  CheckSquare,
  Shield,
  Sparkles,
  Zap,
  Crown,
  ArrowRight,
  Play,
  X,
  Monitor,
  Smartphone,
  Tablet,
} from 'lucide-react';

const AIToolsShowcase = () => {
  const [selectedTool, setSelectedTool] = useState<number | null>(null);
  const [previewMode, setPreviewMode] = useState<
    'desktop' | 'tablet' | 'mobile'
  >('desktop');

  const tools = [
    {
      icon: Brain,
      title: 'VANHSYA AI Assistant',
      description:
        'Leading the new migration era with personalized AI strategies and breakthrough pattern recognition technology.',
      features: ['New Era Processing', 'Real-time Analysis', '99.8% Accuracy'],
      href: '/ai-tools/migration-assistant',
      badge: 'NEW ERA',
      gradient: 'from-blue-600 to-cyan-500',
      particles: 12,
      preview: {
        desktop: '/images/previews/ai-assistant-desktop.jpg',
        tablet: '/images/previews/ai-assistant-tablet.jpg',
        mobile: '/images/previews/ai-assistant-mobile.jpg',
        demo: 'https://demo.vanhsya.com/ai-assistant',
      },
    },
    {
      icon: FileCheck,
      title: 'Document Revolution',
      description:
        'VANHSYA transforms document processing with next-generation AI and blockchain security systems.',
      features: [
        'Era-defining Generation',
        'Blockchain Verified',
        'Instant Processing',
      ],
      href: '/ai-tools/document-wizard',
      badge: 'REVOLUTIONARY',
      gradient: 'from-purple-600 to-pink-500',
      particles: 10,
      preview: {
        desktop: '/images/previews/document-wizard-desktop.jpg',
        tablet: '/images/previews/document-wizard-tablet.jpg',
        mobile: '/images/previews/document-wizard-mobile.jpg',
        demo: 'https://demo.vanhsya.com/document-wizard',
      },
    },
    {
      icon: Calculator,
      title: 'Eligibility Calculator',
      description:
        'Advanced quantum algorithms calculating eligibility across 195+ countries with real-time updates.',
      features: ['195+ Countries', 'Real-time Updates', 'Precision Analysis'],
      href: '/ai-tools/eligibility-calculator',
      badge: 'PREMIUM',
      gradient: 'from-green-600 to-emerald-500',
      particles: 8,
      preview: {
        desktop: '/images/previews/eligibility-calc-desktop.jpg',
        tablet: '/images/previews/eligibility-calc-tablet.jpg',
        mobile: '/images/previews/eligibility-calc-mobile.jpg',
        demo: 'https://demo.vanhsya.com/eligibility-calculator',
      },
    },
    {
      icon: MessageSquare,
      title: 'AI Chatbot',
      description:
        'Never-sleeping quantum AI providing instant support with human-like understanding and responses.',
      features: ['24/7 Available', 'Human-like AI', 'Instant Responses'],
      href: '/ai-tools/chatbot',
      badge: 'LIVE',
      gradient: 'from-yellow-600 to-orange-500',
      particles: 15,
      preview: {
        desktop: '/images/previews/chatbot-desktop.jpg',
        tablet: '/images/previews/chatbot-tablet.jpg',
        mobile: '/images/previews/chatbot-mobile.jpg',
        demo: 'https://demo.vanhsya.com/chatbot',
      },
    },
    {
      icon: CheckSquare,
      title: 'Checklist Assistant',
      description:
        'Intelligent checklist generation with smart reminders and progress tracking for perfect applications.',
      features: [
        'Smart Reminders',
        'Progress Tracking',
        'Perfect Applications',
      ],
      href: '/ai-tools/checklist-assistant',
      badge: 'SMART',
      gradient: 'from-indigo-600 to-blue-500',
      particles: 6,
    },
    {
      icon: Shield,
      title: 'Scam Shield Verifier',
      description:
        'Military-grade protection against migration scams with blockchain verification and threat detection.',
      features: [
        'Military-grade Security',
        'Threat Detection',
        'Blockchain Verified',
      ],
      href: '/ai-tools/scam-shield',
      badge: 'SECURE',
      gradient: 'from-red-600 to-pink-500',
      particles: 9,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.9,
      rotateY: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.7,
        type: 'spring' as const,
        stiffness: 120,
        damping: 15,
      },
    },
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'QUANTUM':
        return 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white';
      case 'AI POWERED':
        return 'bg-gradient-to-r from-purple-500 to-pink-400 text-white';
      case 'PREMIUM':
        return 'bg-gradient-to-r from-green-500 to-emerald-400 text-white';
      case 'LIVE':
        return 'bg-gradient-to-r from-yellow-500 to-orange-400 text-white animate-pulse';
      case 'SMART':
        return 'bg-gradient-to-r from-indigo-500 to-blue-400 text-white';
      case 'SECURE':
        return 'bg-gradient-to-r from-red-500 to-pink-400 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <section className='relative py-32 bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950 overflow-hidden'>
      {/* Background Effects */}
      <div className='absolute inset-0'>
        <motion.div
          className='absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-3xl'
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.8, 0.3],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className='absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl'
          animate={{
            scale: [1.4, 1, 1.4],
            opacity: [0.8, 0.3, 0.8],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.1 }}
        className='relative z-10 max-w-7xl mx-auto px-6'
      >
        {/* Header */}
        <motion.div variants={itemVariants} className='text-center mb-20'>
          <motion.div
            className='inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full border border-purple-500/30 backdrop-blur-sm mb-6'
            animate={{
              boxShadow: [
                '0 0 20px rgba(147, 51, 234, 0.3)',
                '0 0 40px rgba(147, 51, 234, 0.6)',
                '0 0 20px rgba(147, 51, 234, 0.3)',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Brain className='w-5 h-5 text-purple-400' />
            <span className='text-white font-semibold'>
              VANHSYA AI Revolution
            </span>
            <Zap className='w-5 h-5 text-purple-400' />
          </motion.div>

          <motion.h2
            className='text-5xl md:text-7xl font-black bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight mb-6'
            style={{ backgroundSize: '200% 100%' }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            NEW ERA
            <br />
            <motion.span
              animate={{ rotateX: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className='inline-block'
            >
              AI TOOLS
            </motion.span>
          </motion.h2>

          <motion.p
            className='text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed'
            variants={itemVariants}
          >
            VANHSYA pioneers the new migration era with revolutionary AI tools
            that transform possibilities. Each innovation represents
            breakthrough technology designed to reshape global migration
            forever.
          </motion.p>
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          variants={containerVariants}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        >
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className='group relative'
            >
              <motion.div
                className='relative p-8 bg-gradient-to-br from-slate-900/60 to-slate-800/60 rounded-3xl border border-slate-700/50 backdrop-blur-sm overflow-hidden h-full'
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  rotateY: 5,
                  transition: { duration: 0.4 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Preview Button */}
                <motion.button
                  onClick={() => setSelectedTool(index)}
                  className='absolute top-4 left-4 flex items-center gap-2 px-3 py-2 bg-black/50 hover:bg-black/70 rounded-lg backdrop-blur-sm border border-slate-600/50 transition-all duration-300 opacity-0 group-hover:opacity-100'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className='w-4 h-4 text-blue-400' />
                  <span className='text-sm text-white font-medium'>
                    Preview
                  </span>
                </motion.button>
                {/* Floating Particles */}
                <div className='absolute inset-0'>
                  {[...Array(tool.particles)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 bg-gradient-to-r ${tool.gradient} rounded-full`}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [-15, 15, -15],
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: 'easeInOut',
                      }}
                    />
                  ))}
                </div>

                {/* Gradient Overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}
                />

                {/* Badge */}
                <motion.div
                  className={`absolute top-6 right-6 px-3 py-1 ${getBadgeColor(tool.badge)} rounded-full text-xs font-bold`}
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  {tool.badge}
                </motion.div>

                {/* Icon */}
                <motion.div
                  className={`w-20 h-20 bg-gradient-to-br ${tool.gradient} rounded-3xl flex items-center justify-center mb-6 relative`}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, 10, -10, 0],
                    boxShadow: `0 25px 50px rgba(59, 130, 246, 0.4)`,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <tool.icon className='w-10 h-10 text-white' />

                  {/* Rotating Rings */}
                  <motion.div
                    className='absolute inset-0 border-2 border-white/20 rounded-3xl'
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                  <motion.div
                    className='absolute inset-2 border border-white/10 rounded-2xl'
                    animate={{ rotate: [360, 0] }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                </motion.div>

                {/* Content */}
                <div className='relative z-10'>
                  <h3 className='text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors'>
                    {tool.title}
                  </h3>

                  <p className='text-slate-300 mb-6 leading-relaxed group-hover:text-slate-200 transition-colors'>
                    {tool.description}
                  </p>

                  {/* Features */}
                  <div className='space-y-2 mb-6'>
                    {tool.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className='flex items-center gap-2 text-sm text-slate-400'
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                      >
                        <Sparkles className='w-3 h-3 text-purple-400' />
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.a
                    href={tool.href}
                    className={`group/btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${tool.gradient} rounded-xl text-white font-bold text-sm relative overflow-hidden`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className='absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0'
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                    <span className='relative flex items-center gap-2'>
                      Explore Tool
                      <ArrowRight className='w-4 h-4 group-hover/btn:translate-x-1 transition-transform' />
                    </span>
                  </motion.a>
                </div>

                {/* Hover Border Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-purple-500/30 transition-colors duration-500`}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div variants={itemVariants} className='text-center mt-20'>
          <motion.div
            className='inline-flex items-center gap-4 px-8 py-6 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl border border-purple-500/30 backdrop-blur-sm'
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(147, 51, 234, 0.3)',
              boxShadow: '0 25px 50px rgba(147, 51, 234, 0.4)',
            }}
          >
            <Crown className='w-8 h-8 text-yellow-400' />
            <div className='text-center'>
              <h3 className='text-2xl font-bold text-white mb-1'>
                VANHSYA: Pioneering the New Migration Era
              </h3>
              <p className='text-purple-200'>
                Leading humanity into the future of global migration and
                opportunity
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Interactive Preview Modal */}
      <AnimatePresence>
        {selectedTool !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4'
            onClick={() => setSelectedTool(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className='bg-slate-900 rounded-2xl border border-slate-700 max-w-6xl w-full max-h-[90vh] overflow-hidden'
              onClick={e => e.stopPropagation()}
            >
              {/* Header */}
              <div className='flex items-center justify-between p-6 border-b border-slate-700'>
                <div className='flex items-center gap-4'>
                  <div
                    className={`p-3 bg-gradient-to-r ${tools[selectedTool].gradient} rounded-xl`}
                  >
                    {React.createElement(tools[selectedTool].icon, {
                      className: 'w-6 h-6 text-white',
                    })}
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-white'>
                      {tools[selectedTool].title}
                    </h3>
                    <p className='text-slate-400 text-sm'>
                      Interactive Preview
                    </p>
                  </div>
                </div>

                {/* Device Toggle */}
                <div className='flex items-center gap-2'>
                  <div className='flex bg-slate-800 rounded-lg p-1'>
                    {(['desktop', 'tablet', 'mobile'] as const).map(device => (
                      <button
                        key={device}
                        onClick={() => setPreviewMode(device)}
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                          previewMode === device
                            ? 'bg-blue-600 text-white'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {device === 'desktop' && (
                          <Monitor className='w-4 h-4' />
                        )}
                        {device === 'tablet' && <Tablet className='w-4 h-4' />}
                        {device === 'mobile' && (
                          <Smartphone className='w-4 h-4' />
                        )}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedTool(null)}
                    className='p-2 hover:bg-slate-800 rounded-lg transition-colors'
                  >
                    <X className='w-5 h-5 text-slate-400' />
                  </button>
                </div>
              </div>

              {/* Preview Content */}
              <div className='p-6'>
                <div
                  className={`mx-auto bg-slate-800 rounded-xl overflow-hidden shadow-2xl ${
                    previewMode === 'desktop'
                      ? 'max-w-full aspect-video'
                      : previewMode === 'tablet'
                        ? 'max-w-md aspect-[4/3]'
                        : 'max-w-xs aspect-[9/16]'
                  }`}
                >
                  <div className='bg-slate-700 px-4 py-2 flex items-center gap-2'>
                    <div className='flex gap-1'>
                      <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                      <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
                      <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                    </div>
                    <div className='flex-1 bg-slate-600 rounded px-3 py-1 text-xs text-slate-300'>
                      {tools[selectedTool]?.preview?.demo ||
                        'https://demo.vanhsya.com'}
                    </div>
                  </div>

                  {/* Demo iframe would go here */}
                  <div className='h-full bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center'>
                    <div className='text-center'>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                        className='w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full mx-auto mb-4'
                      />
                      <p className='text-slate-400'>
                        Loading interactive preview...
                      </p>
                      <p className='text-xs text-slate-500 mt-2'>
                        Demo: {tools[selectedTool].title}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tool Info */}
                <div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <h4 className='text-lg font-semibold text-white mb-3'>
                      Features
                    </h4>
                    <ul className='space-y-2'>
                      {tools[selectedTool].features.map((feature, index) => (
                        <li
                          key={index}
                          className='flex items-center gap-2 text-slate-300'
                        >
                          <CheckSquare className='w-4 h-4 text-green-400' />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className='text-lg font-semibold text-white mb-3'>
                      Try It Now
                    </h4>
                    <p className='text-slate-400 mb-4'>
                      {tools[selectedTool].description}
                    </p>
                    <motion.a
                      href={tools[selectedTool].href}
                      className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${tools[selectedTool].gradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Open Tool
                      <ArrowRight className='w-4 h-4' />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AIToolsShowcase;
