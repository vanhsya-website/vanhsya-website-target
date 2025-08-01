'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  GraduationCap, ArrowRight, CheckCircle, Clock,
  Brain, Shield, FileText, Phone,
  ArrowLeft, X, Bot,
  TrendingUp, Target, Database,
  DollarSign, School
} from 'lucide-react';

// AI-Enhanced Study Visa Service Data
const studyVisaData = {
  hero: {
    title: 'AI-Powered Study Visa Solutions',
    subtitle: 'Revolutionizing international education with artificial intelligence',
    description: 'Our neural network analyzes thousands of successful study visa applications and matches you with the perfect educational pathway for global success.',
    stats: {
      successRate: '97.4%',
      avgProcessingTime: '2-6 months',
      universitiesPartnered: '500+',
      aiAccuracy: '98.9%'
    }
  },
  countries: [
    {
      name: 'Canada',
      flag: '🇨🇦',
      aiScore: 97,
      programs: [
        { name: 'Undergraduate Programs', difficulty: 'Medium', processing: '4-8 weeks', success: '92%' },
        { name: 'Graduate Programs', difficulty: 'Medium', processing: '6-12 weeks', success: '89%' },
        { name: 'Diploma Programs', difficulty: 'Easy', processing: '3-6 weeks', success: '95%' },
        { name: 'PhD Programs', difficulty: 'Hard', processing: '8-16 weeks', success: '84%' }
      ],
      requirements: {
        language: 'IELTS 6.0+ / TOEFL 80+',
        education: 'High school diploma or equivalent',
        funds: 'CAD $15,000-35,000/year',
        gpa: '3.0+ GPA recommended'
      },
      benefits: [
        'Post-graduation work permits',
        'Pathway to permanent residence',
        'World-class education system',
        'Affordable tuition fees',
        'Multicultural environment'
      ],
      tuitionRange: '$15,000 - $35,000 CAD/year',
      livingCost: '$12,000 - $18,000 CAD/year',
      workRights: '20 hours/week during studies',
      aiPrediction: 'Excellent for STEM and healthcare programs'
    },
    {
      name: 'Australia',
      flag: '🇦🇺',
      aiScore: 94,
      programs: [
        { name: 'Bachelor Degrees', difficulty: 'Medium', processing: '4-8 weeks', success: '88%' },
        { name: 'Master Programs', difficulty: 'Medium', processing: '6-10 weeks', success: '85%' },
        { name: 'VET Courses', difficulty: 'Easy', processing: '2-4 weeks', success: '93%' },
        { name: 'Research Degrees', difficulty: 'Hard', processing: '8-12 weeks', success: '79%' }
      ],
      requirements: {
        language: 'IELTS 6.0+ / TOEFL 79+',
        education: 'Year 12 or equivalent',
        funds: 'AUD $20,000-45,000/year',
        gpa: 'Strong academic record'
      },
      benefits: [
        'High-quality education',
        'Post-study work opportunities',
        'Excellent research facilities',
        'Vibrant student life',
        'Strong job market'
      ],
      tuitionRange: '$20,000 - $45,000 AUD/year',
      livingCost: '$18,000 - $25,000 AUD/year',
      workRights: '48 hours/fortnight during studies',
      aiPrediction: 'Great for business and engineering'
    },
    {
      name: 'United Kingdom',
      flag: '🇬🇧',
      aiScore: 91,
      programs: [
        { name: 'Undergraduate Courses', difficulty: 'Medium', processing: '3-8 weeks', success: '86%' },
        { name: 'Postgraduate Programs', difficulty: 'Medium', processing: '4-10 weeks', success: '82%' },
        { name: 'Foundation Courses', difficulty: 'Easy', processing: '2-6 weeks', success: '91%' },
        { name: 'PhD Programs', difficulty: 'Hard', processing: '6-12 weeks', success: '77%' }
      ],
      requirements: {
        language: 'IELTS 6.0+ / TOEFL 80+',
        education: 'A-levels or equivalent',
        funds: '£15,000-40,000/year',
        gpa: 'Good academic standing'
      },
      benefits: [
        'World-renowned universities',
        'Graduate route visa',
        'Rich cultural heritage',
        'Global recognition',
        'Research excellence'
      ],
      tuitionRange: '£15,000 - £40,000 GBP/year',
      livingCost: '£12,000 - £20,000 GBP/year',
      workRights: '20 hours/week during studies',
      aiPrediction: 'Strong for humanities and business'
    },
    {
      name: 'United States',
      flag: '🇺🇸',
      aiScore: 89,
      programs: [
        { name: 'Bachelor Programs', difficulty: 'Hard', processing: '6-12 weeks', success: '79%' },
        { name: 'Master Programs', difficulty: 'Hard', processing: '8-16 weeks', success: '76%' },
        { name: 'Community College', difficulty: 'Medium', processing: '4-8 weeks', success: '87%' },
        { name: 'PhD Programs', difficulty: 'Very Hard', processing: '10-20 weeks', success: '71%' }
      ],
      requirements: {
        language: 'TOEFL 80+ / IELTS 6.5+',
        education: 'High school diploma',
        funds: '$30,000-70,000/year',
        gpa: '3.0+ GPA required'
      },
      benefits: [
        'Top-tier universities',
        'OPT work opportunities',
        'Innovation ecosystem',
        'Networking opportunities',
        'Research funding'
      ],
      tuitionRange: '$30,000 - $70,000 USD/year',
      livingCost: '$15,000 - $25,000 USD/year',
      workRights: 'On-campus employment allowed',
      aiPrediction: 'Ideal for technology and research'
    }
  ],
  aiFeatures: [
    {
      icon: Brain,
      title: 'AI University Matching',
      description: 'Our neural network analyzes your academic profile and career goals to match you with the perfect universities and programs.',
      accuracy: '98.9%'
    },
    {
      icon: Target,
      title: 'Smart Application Strategy',
      description: 'AI-powered strategy determines the optimal application timeline and requirements for maximum acceptance probability.',
      accuracy: '96.7%'
    },
    {
      icon: TrendingUp,
      title: 'Scholarship Optimization',
      description: 'Machine learning identifies scholarship opportunities that match your profile and maximizes financial aid potential.',
      accuracy: '94.3%'
    },
    {
      icon: Clock,
      title: 'Processing Prediction',
      description: 'Predictive algorithms provide accurate visa processing timelines based on current application volumes and trends.',
      accuracy: '97.2%'
    }
  ],
  stepByStepProcess: [
    {
      step: 1,
      title: 'AI Academic Profile Analysis',
      description: 'Our AI evaluates your academic background, test scores, and career aspirations to create a comprehensive student profile.',
      icon: Database,
      duration: '10 minutes',
      aiPowered: true
    },
    {
      step: 2,
      title: 'Smart University Selection',
      description: 'Advanced algorithms match you with universities that align with your goals, budget, and acceptance probability.',
      icon: School,
      duration: '5 minutes',
      aiPowered: true
    },
    {
      step: 3,
      title: 'Application Optimization',
      description: 'AI-enhanced application review ensures essays, documents, and requirements are optimized for acceptance.',
      icon: FileText,
      duration: '2-3 days',
      aiPowered: true
    },
    {
      step: 4,
      title: 'Scholarship Matching',
      description: 'Machine learning identifies and applies for relevant scholarships and financial aid opportunities.',
      icon: DollarSign,
      duration: '1-2 days',
      aiPowered: true
    },
    {
      step: 5,
      title: 'Visa Application Support',
      description: 'Expert guidance combined with AI insights for visa interview preparation and document submission.',
      icon: Shield,
      duration: '1-2 weeks',
      aiPowered: false
    }
  ]
};

const StudyVisaPage: React.FC = () => {
  const [showCalculator, setShowCalculator] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <div ref={containerRef} className='min-h-screen bg-gradient-to-b from-black via-neutral-950 to-neutral-900 text-white overflow-hidden'>
      {/* AI Neural Network Background */}
      <motion.div style={{ y: backgroundY }} className='fixed inset-0 pointer-events-none'>
        <div className='absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/30' />
        <div className='absolute inset-0'>
          {Array.from({ length: 150 }, (_, i) => (
            <motion.div
              key={i}
              className='absolute w-1 h-1 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full'
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        {/* Education-related floating icons */}
        <div className='absolute inset-0'>
          {Array.from({ length: 20 }, (_, i) => (
            <motion.div
              key={`study-${i}`}
              className='absolute text-4xl opacity-10'
              style={{
                left: `${5 + (i * 4)}%`,
                top: `${10 + (i * 4)}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                rotate: [0, 15, -15, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              {i % 4 === 0 ? '🎓' : i % 4 === 1 ? '📚' : i % 4 === 2 ? '🏫' : '🔬'}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Navigation */}
      <nav className='fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-blue-500/10'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <Link href='/' className='flex items-center gap-2'>
              <div className='w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center'>
                <Bot className='w-6 h-6 text-white' />
              </div>
              <span className='text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                VANHSYA
              </span>
            </Link>
            
            <div className='hidden md:flex items-center gap-6'>
              <Link href='/' className='text-white/80 hover:text-white transition-colors'>Home</Link>
              <Link href='/services' className='text-white/80 hover:text-white transition-colors'>Services</Link>
              <Link href='/countries' className='text-white/80 hover:text-white transition-colors'>Countries</Link>
              <Link href='/contact' className='text-white/80 hover:text-white transition-colors'>Contact</Link>
            </div>

            <Link href='/services' className='text-white/60 hover:text-white transition-colors'>
              <ArrowLeft className='w-6 h-6' />
            </Link>
          </div>
        </div>
      </nav>

      <div className='relative z-10'>
        {/* Hero Section */}
        <section ref={heroRef} className='min-h-screen flex items-center justify-center relative pt-16'>
          <motion.div style={{ y: heroY }} className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center max-w-6xl mx-auto'>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, type: 'spring' }}
                className='inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-xl mb-8'
              >
                <GraduationCap className='w-6 h-6 text-blue-400' />
                <span className='text-blue-300 font-medium'>AI-Powered Study Visa Solutions</span>
                <span className='text-4xl'>🎓</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                className='text-5xl md:text-7xl lg:text-8xl font-bold mb-8'
              >
                <span className='bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-pulse'>
                  Smart
                </span>
                <br />
                <span className='text-white'>Education</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className='text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-4xl mx-auto'
              >
                {studyVisaData.hero.description}
              </motion.p>

              {/* Hero Statistics */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
                className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-12'
              >
                {Object.entries(studyVisaData.hero.stats).map(([key, value], index) => (
                  <div key={key} className='text-center'>
                    <div className={`text-3xl md:text-4xl font-bold mb-2 ${
                      index % 4 === 0 ? 'text-blue-400' : 
                      index % 4 === 1 ? 'text-purple-400' : 
                      index % 4 === 2 ? 'text-cyan-400' : 'text-emerald-400'
                    }`}>
                      {value}
                    </div>
                    <div className='text-white/60 text-sm capitalize'>{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
                className='flex flex-col sm:flex-row gap-6 justify-center items-center'
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowCalculator(true)}
                  className='px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 rounded-full text-white font-bold text-lg shadow-2xl border border-blue-400/30'
                >
                  <span className='flex items-center gap-2'>
                    <Brain className='w-6 h-6' />
                    AI University Matcher
                    <ArrowRight className='w-6 h-6' />
                  </span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white font-medium text-lg hover:bg-white/20 transition-all'
                >
                  <span className='flex items-center gap-2'>
                    <Phone className='w-6 h-6' />
                    Education Consultant
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className='text-center'
            >
              <div className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-12 md:p-16'>
                <h2 className='text-4xl md:text-5xl font-bold mb-6'>
                  <span className='text-white'>Ready to Start Your </span>
                  <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                    AI-Powered
                  </span>
                  <br />
                  <span className='text-white'>Education Journey?</span>
                </h2>
                <p className='text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed'>
                  Let our artificial intelligence find the perfect university and program for your academic goals. 
                  Start your journey to international education success today.
                </p>

                <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-12'>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    className='px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 rounded-full text-white font-bold text-xl shadow-2xl'
                  >
                    <span className='flex items-center gap-3'>
                      <Brain className='w-6 h-6' />
                      Start AI Matching
                      <ArrowRight className='w-6 h-6' />
                    </span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='px-10 py-5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white font-medium text-xl hover:bg-white/20 transition-all'
                  >
                    <span className='flex items-center gap-3'>
                      <Phone className='w-6 h-6' />
                      Education Consultation
                    </span>
                  </motion.button>
                </div>

                <div className='flex flex-wrap justify-center gap-8 text-white/60'>
                  <div className='flex items-center gap-2'>
                    <Shield className='w-5 h-5' />
                    <span>97.4% Success Rate</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <School className='w-5 h-5' />
                    <span>500+ Partner Universities</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <CheckCircle className='w-5 h-5' />
                    <span>AI-Optimized Applications</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <DollarSign className='w-5 h-5' />
                    <span>Scholarship Assistance</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* AI Calculator Modal */}
      <AnimatePresence>
        {showCalculator && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4'
            onClick={() => setShowCalculator(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className='bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto'
            >
              <div className='flex items-center justify-between mb-6'>
                <h3 className='text-2xl font-bold text-white flex items-center gap-2'>
                  <Brain className='w-8 h-8 text-blue-400' />
                  AI University Matcher
                </h3>
                <button
                  onClick={() => setShowCalculator(false)}
                  title="Close AI University Matcher"
                  className='w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors'
                >
                  <X className='w-6 h-6 text-white' />
                </button>
              </div>
              <div className='text-center py-12'>
                <div className='w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <GraduationCap className='w-8 h-8 text-white' />
                </div>
                <h4 className='text-xl font-bold text-white mb-2'>AI Matcher Coming Soon</h4>
                <p className='text-white/60 mb-6'>Our advanced AI university matching system is being optimized for perfect program selection.</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-medium'
                >
                  Get Notified When Ready
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StudyVisaPage;
