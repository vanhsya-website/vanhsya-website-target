'use client';

import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import {
  GraduationCap,
  Clock,
  Users,
  ArrowRight,
  Star,
  Shield,
  CheckCircle,
  Globe,
  Award,
  TrendingUp,
  BookOpen,
  Target,
  Zap,
  Phone,
  Mail,
  University,
  FileText,
} from 'lucide-react';

export default function StudyVisaPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const countries = [
    {
      name: 'Canada',
      flag: '🇨🇦',
      highlights: [
        'Post-graduation work permits',
        'Pathway to permanent residence',
        'Quality education system',
        'Multicultural environment',
      ],
      processing: '4-12 weeks',
      successRate: '96%',
      workRights: '20 hrs/week during studies',
      color: 'from-red-500 to-red-600',
    },
    {
      name: 'Australia',
      flag: '🇦🇺',
      highlights: [
        'World-class universities',
        'Post-study work visa opportunities',
        'Research excellence',
        'Vibrant student life',
      ],
      processing: '4-8 weeks',
      successRate: '94%',
      workRights: '48 hrs/fortnight during studies',
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'United Kingdom',
      flag: '🇬🇧',
      highlights: [
        'Historic universities',
        'Graduate route visa',
        'Research opportunities',
        'Rich cultural heritage',
      ],
      processing: '3-6 weeks',
      successRate: '92%',
      workRights: '20 hrs/week during studies',
      color: 'from-blue-600 to-indigo-600',
    },
    {
      name: 'United States',
      flag: '🇺🇸',
      highlights: [
        'Top-ranked institutions',
        'OPT work opportunities',
        'Innovation ecosystem',
        'Diverse academic programs',
      ],
      processing: '2-8 weeks',
      successRate: '89%',
      workRights: 'On-campus work allowed',
      color: 'from-blue-700 to-blue-800',
    },
    {
      name: 'Germany',
      flag: '🇩🇪',
      highlights: [
        'Tuition-free public universities',
        'Strong engineering programs',
        'Job search visa available',
        'Central European location',
      ],
      processing: '6-12 weeks',
      successRate: '91%',
      workRights: '120 full days/year',
      color: 'from-gray-600 to-gray-700',
    },
    {
      name: 'New Zealand',
      flag: '🇳🇿',
      highlights: [
        'Safe and peaceful environment',
        'Post-study work rights',
        'Quality education',
        'Beautiful landscapes',
      ],
      processing: '4-8 weeks',
      successRate: '93%',
      workRights: '20 hrs/week during studies',
      color: 'from-emerald-500 to-emerald-600',
    },
  ];

  const requirements = [
    {
      title: 'Academic Qualifications',
      description: 'Completed previous education with required grades and certificates',
      icon: Award,
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Language Proficiency',
      description: 'English language test scores (IELTS/PTE/TOEFL/Duolingo)',
      icon: Globe,
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      title: 'Financial Proof',
      description: 'Demonstrate sufficient funds for tuition and living expenses',
      icon: Shield,
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'University Acceptance',
      description: 'Letter of acceptance from a recognized educational institution',
      icon: University,
      color: 'from-orange-500 to-orange-600',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'University Selection',
      description: 'Choose the right institution and program based on your goals',
      duration: '1-2 weeks',
    },
    {
      step: '02',
      title: 'Application Preparation',
      description: 'Prepare and submit university applications with required documents',
      duration: '2-4 weeks',
    },
    {
      step: '03',
      title: 'Acceptance & Enrollment',
      description: 'Receive acceptance letter and complete enrollment process',
      duration: '2-8 weeks',
    },
    {
      step: '04',
      title: 'Visa Application',
      description: 'Submit student visa application with all supporting documents',
      duration: '1-2 weeks',
    },
    {
      step: '05',
      title: 'Visa Approval & Travel',
      description: 'Receive visa approval and prepare for departure',
      duration: '1-2 weeks',
    },
  ];

  const stats = [
    { number: '0', label: 'Student Visas Processed', icon: GraduationCap, color: 'text-emerald-400' },
    { number: '6', label: 'Study Destinations', icon: Globe, color: 'text-blue-400' },
    { number: '93%', label: 'Average Success Rate', icon: TrendingUp, color: 'text-purple-400' },
    { number: '24/7', label: 'Student Support', icon: Shield, color: 'text-orange-400' },
  ];

  const benefits = [
    'Access to world-class education and research facilities',
    'International exposure and cultural experience',
    'Post-graduation work opportunities in most countries',
    'Pathway to permanent residence and citizenship',
    'Enhanced career prospects and earning potential',
    'Global network of professional connections',
    'Personal growth and independence',
    'Language skills and cross-cultural competency',
  ];

  const studyLevels = [
    {
      level: 'Foundation Programs',
      description: 'Preparatory courses for international students',
      duration: '6-12 months',
      icon: BookOpen,
    },
    {
      level: 'Undergraduate Degrees',
      description: 'Bachelor\'s degree programs in various fields',
      duration: '3-4 years',
      icon: GraduationCap,
    },
    {
      level: 'Postgraduate Degrees',
      description: 'Master\'s and PhD programs for advanced study',
      duration: '1-4 years',
      icon: Award,
    },
    {
      level: 'Professional Courses',
      description: 'Specialized certifications and diplomas',
      duration: '6 months - 2 years',
      icon: Target,
    },
  ];

  return (
    <div
      ref={containerRef}
      className='min-h-screen bg-gradient-to-b from-neutral-950 to-neutral-900 text-white'
    >
      {/* Animated Background */}
      <motion.div
        style={{ y: backgroundY }}
        className='absolute inset-0 overflow-hidden'
      >
        <div className='absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 rounded-full blur-3xl' />
        <div className='absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-emerald-600/10 to-cyan-600/10 rounded-full blur-3xl' />
      </motion.div>

      {/* Floating Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        {Array.from({ length: 12 }, (_, i) => (
          <motion.div
            key={i}
            className='absolute w-2 h-2 bg-purple-400/20 rounded-full'
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative z-10'>
        {/* Hero Section */}
        <div className='text-center max-w-4xl mx-auto mb-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 text-purple-300 font-medium text-sm mb-6'
          >
            <GraduationCap className='w-4 h-4' />
            Study Visa Services
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6'
          >
            Study Abroad
            <span className='block bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent'>
              Dream Destinations
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='text-xl text-neutral-300 leading-relaxed mb-8'
          >
            Transform your future with world-class education. We help students secure study visas for top universities and institutions globally.
          </motion.p>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-16'
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className='bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-6 text-center hover:border-neutral-700/50 transition-all duration-300'
            >
              <div className='flex justify-center mb-3'>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className='text-neutral-400 text-sm font-medium'>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Study Levels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'
        >
          {studyLevels.map((level, index) => (
            <motion.div
              key={level.level}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className='bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-6 text-center hover:border-neutral-700/50 transition-all duration-300'
            >
              <div className='w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl flex items-center justify-center mx-auto mb-4'>
                <level.icon className='w-6 h-6 text-white' />
              </div>
              <h3 className='text-white font-semibold mb-2'>{level.level}</h3>
              <p className='text-neutral-400 text-sm mb-2'>{level.description}</p>
              <span className='text-purple-400 text-xs font-medium'>{level.duration}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Countries Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className='mb-16'
        >
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              Study Destinations
            </h2>
            <p className='text-neutral-400 max-w-2xl mx-auto leading-relaxed'>
              Explore top study destinations with excellent education systems and post-study opportunities.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {countries.map((country, index) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className='bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-6 hover:border-neutral-700/50 transition-all duration-300'
              >
                <div className='flex items-center gap-3 mb-4'>
                  <span className='text-3xl'>{country.flag}</span>
                  <div>
                    <h3 className='text-xl font-bold text-white'>{country.name}</h3>
                    <p className='text-neutral-400 text-sm'>Study Destination</p>
                  </div>
                </div>

                <div className='grid grid-cols-2 gap-4 mb-4'>
                  <div className='bg-neutral-800/30 rounded-xl p-3'>
                    <div className='flex items-center gap-2 mb-1'>
                      <Clock className='w-4 h-4 text-blue-400' />
                      <span className='text-xs text-neutral-400'>Processing</span>
                    </div>
                    <span className='text-white font-semibold text-sm'>{country.processing}</span>
                  </div>
                  <div className='bg-neutral-800/30 rounded-xl p-3'>
                    <div className='flex items-center gap-2 mb-1'>
                      <TrendingUp className='w-4 h-4 text-emerald-400' />
                      <span className='text-xs text-neutral-400'>Success Rate</span>
                    </div>
                    <span className='text-white font-semibold text-sm'>{country.successRate}</span>
                  </div>
                </div>

                <div className='mb-4'>
                  <h4 className='text-white font-semibold mb-2 text-sm'>Work Rights</h4>
                  <p className='text-neutral-300 text-sm'>{country.workRights}</p>
                </div>

                <div className='mb-6'>
                  <h4 className='text-white font-semibold mb-3'>Key Highlights</h4>
                  <div className='space-y-2'>
                    {country.highlights.slice(0, 3).map((highlight, i) => (
                      <div key={i} className='flex items-center gap-2 text-sm'>
                        <CheckCircle className='w-4 h-4 text-emerald-400 flex-shrink-0' />
                        <span className='text-neutral-300'>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className='w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white font-medium rounded-xl transition-all duration-300'
                >
                  <span>Study in {country.name}</span>
                  <ArrowRight className='w-4 h-4' />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Requirements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className='mb-16'
        >
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              General Requirements
            </h2>
            <p className='text-neutral-400 max-w-2xl mx-auto leading-relaxed'>
              Essential requirements for student visa applications across most destinations.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {requirements.map((requirement, index) => (
              <motion.div
                key={requirement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-6 text-center hover:border-neutral-700/50 transition-all duration-300'
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${requirement.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <requirement.icon className='w-6 h-6 text-white' />
                </div>
                <h3 className='text-white font-semibold mb-2'>{requirement.title}</h3>
                <p className='text-neutral-400 text-sm leading-relaxed'>{requirement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.4 }}
          className='mb-16'
        >
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              Our Process
            </h2>
            <p className='text-neutral-400 max-w-2xl mx-auto leading-relaxed'>
              A comprehensive 5-step process to secure your student visa and university admission.
            </p>
          </div>

          <div className='space-y-6'>
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-6 hover:border-neutral-700/50 transition-all duration-300'
              >
                <div className='flex items-center gap-6'>
                  <div className='w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl flex items-center justify-center flex-shrink-0'>
                    <span className='text-white font-bold text-lg'>{step.step}</span>
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-xl font-bold text-white mb-2'>{step.title}</h3>
                    <p className='text-neutral-300 mb-2'>{step.description}</p>
                    <span className='text-purple-400 text-sm font-medium'>Timeline: {step.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.6 }}
          className='mb-16'
        >
          <div className='bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-8'>
            <div className='text-center mb-8'>
              <h2 className='text-3xl font-bold text-white mb-4'>Study Abroad Benefits</h2>
              <p className='text-neutral-400 max-w-2xl mx-auto leading-relaxed'>
                Discover the life-changing advantages of pursuing education internationally.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='flex items-center gap-3'
                >
                  <CheckCircle className='w-5 h-5 text-emerald-400 flex-shrink-0' />
                  <span className='text-neutral-300'>{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.8 }}
          className='text-center max-w-4xl mx-auto'
        >
          <div className='bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-8'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              Ready to Start Your Educational Journey?
            </h2>
            <p className='text-xl text-neutral-300 mb-8 leading-relaxed'>
              Let our education consultants help you choose the right university and secure your student visa for a bright future.
            </p>

            <div className='flex flex-wrap justify-center gap-4 mb-8'>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className='flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:via-violet-500 hover:to-indigo-500 text-white font-bold rounded-xl transition-all duration-300'
              >
                <Zap className='w-5 h-5' />
                Apply Now
                <ArrowRight className='w-5 h-5' />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className='flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 hover:border-neutral-700/50 text-white font-medium rounded-xl transition-all duration-300'
              >
                <Phone className='w-5 h-5' />
                Free Counseling
              </motion.button>
            </div>

            <div className='flex flex-wrap justify-center gap-6 text-sm text-neutral-400'>
              <div className='flex items-center gap-2'>
                <Phone className='w-4 h-4' />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className='flex items-center gap-2'>
                <Mail className='w-4 h-4' />
                <span>study@vanhsya.com</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
