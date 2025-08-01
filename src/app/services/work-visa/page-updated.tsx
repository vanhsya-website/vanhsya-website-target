'use client';

import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import {
  Briefcase,
  Clock,
  Users,
  ArrowRight,
  Star,
  Shield,
  CheckCircle,
  Globe,
  Award,
  TrendingUp,
  FileText,
  Target,
  Zap,
  Phone,
  Mail,
} from 'lucide-react';

export default function WorkVisaPage() {
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
      programs: [
        'Express Entry',
        'Provincial Nominee Program',
        'Quebec Skilled Worker',
        'Atlantic Immigration Pilot',
      ],
      processing: '6-12 months',
      successRate: '94%',
      color: 'from-red-500 to-red-600',
    },
    {
      name: 'Australia',
      flag: '🇦🇺',
      programs: [
        'Skilled Independent',
        'Employer Sponsored',
        'Regional Skilled',
        'Global Talent Visa',
      ],
      processing: '8-15 months',
      successRate: '91%',
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'United States',
      flag: '🇺🇸',
      programs: ['H-1B', 'L-1', 'O-1', 'TN Visa'],
      processing: '3-8 months',
      successRate: '87%',
      color: 'from-blue-600 to-indigo-600',
    },
    {
      name: 'United Kingdom',
      flag: '🇬🇧',
      programs: [
        'Skilled Worker',
        'Global Talent',
        'Intra-company Transfer',
        'Health and Care Worker',
      ],
      processing: '3-8 weeks',
      successRate: '89%',
      color: 'from-blue-700 to-blue-800',
    },
    {
      name: 'Germany',
      flag: '🇩🇪',
      programs: [
        'EU Blue Card',
        'Skilled Immigration Act',
        'Job Seeker Visa',
        'ICT Card',
      ],
      processing: '2-4 months',
      successRate: '92%',
      color: 'from-gray-600 to-gray-700',
    },
    {
      name: 'Singapore',
      flag: '🇸🇬',
      programs: [
        'Employment Pass',
        'Tech.Pass',
        'Personalised Employment Pass',
        'S Pass',
      ],
      processing: '3-8 weeks',
      successRate: '88%',
      color: 'from-emerald-500 to-emerald-600',
    },
  ];

  const requirements = [
    {
      title: 'Educational Qualifications',
      description: 'Minimum bachelor\'s degree or equivalent professional qualification',
      icon: Award,
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Work Experience',
      description: 'Relevant work experience in your field of expertise',
      icon: Briefcase,
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      title: 'Language Proficiency',
      description: 'English language test scores (IELTS/PTE/TOEFL)',
      icon: Globe,
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Skills Assessment',
      description: 'Professional skills assessment by relevant authority',
      icon: Target,
      color: 'from-orange-500 to-orange-600',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Initial Assessment',
      description: 'Comprehensive evaluation of your profile and eligibility',
      duration: '1-2 days',
    },
    {
      step: '02',
      title: 'Documentation',
      description: 'Preparation and verification of required documents',
      duration: '2-3 weeks',
    },
    {
      step: '03',
      title: 'Application Submission',
      description: 'Filing your complete application with immigration authorities',
      duration: '1 week',
    },
    {
      step: '04',
      title: 'Processing & Follow-up',
      description: 'Monitoring application status and handling queries',
      duration: 'Varies by country',
    },
    {
      step: '05',
      title: 'Visa Approval',
      description: 'Receive your work visa and pre-departure guidance',
      duration: '1-2 days',
    },
  ];

  const stats = [
    { number: '0', label: 'Successful Applications', icon: CheckCircle, color: 'text-emerald-400' },
    { number: '6', label: 'Countries Supported', icon: Globe, color: 'text-blue-400' },
    { number: '90%', label: 'Average Success Rate', icon: TrendingUp, color: 'text-purple-400' },
    { number: '24/7', label: 'Support Available', icon: Shield, color: 'text-orange-400' },
  ];

  const benefits = [
    'Professional career advancement opportunities',
    'Legal authorization to work in destination country',
    'Path to permanent residence in many countries',
    'Access to social benefits and healthcare',
    'Opportunity to sponsor family members',
    'Higher earning potential and quality of life',
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
            <Briefcase className='w-4 h-4' />
            Work Visa Services
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6'
          >
            Global Work
            <span className='block bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent'>
              Visa Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='text-xl text-neutral-300 leading-relaxed mb-8'
          >
            Advance your career globally with our comprehensive work visa services. We help skilled professionals secure work authorization in top destinations worldwide.
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

        {/* Countries Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='mb-16'
        >
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              Work Visa Destinations
            </h2>
            <p className='text-neutral-400 max-w-2xl mx-auto leading-relaxed'>
              Explore work opportunities in top global destinations with our expert visa assistance.
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
                    <p className='text-neutral-400 text-sm'>Work Visa Programs</p>
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

                <div className='mb-6'>
                  <h4 className='text-white font-semibold mb-3'>Available Programs</h4>
                  <div className='space-y-2'>
                    {country.programs.slice(0, 3).map((program, i) => (
                      <div key={i} className='flex items-center gap-2 text-sm'>
                        <CheckCircle className='w-4 h-4 text-emerald-400 flex-shrink-0' />
                        <span className='text-neutral-300'>{program}</span>
                      </div>
                    ))}
                    {country.programs.length > 3 && (
                      <div className='text-sm text-purple-400'>
                        +{country.programs.length - 3} more programs
                      </div>
                    )}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className='w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white font-medium rounded-xl transition-all duration-300'
                >
                  <span>Explore {country.name}</span>
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
          transition={{ duration: 0.6, delay: 1 }}
          className='mb-16'
        >
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              General Requirements
            </h2>
            <p className='text-neutral-400 max-w-2xl mx-auto leading-relaxed'>
              Essential requirements for work visa applications across most destinations.
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
          transition={{ duration: 0.6, delay: 1.2 }}
          className='mb-16'
        >
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              Our Process
            </h2>
            <p className='text-neutral-400 max-w-2xl mx-auto leading-relaxed'>
              A streamlined 5-step process to secure your work visa efficiently.
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
                    <span className='text-purple-400 text-sm font-medium'>Duration: {step.duration}</span>
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
          transition={{ duration: 0.6, delay: 1.4 }}
          className='mb-16'
        >
          <div className='bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-8'>
            <div className='text-center mb-8'>
              <h2 className='text-3xl font-bold text-white mb-4'>Work Visa Benefits</h2>
              <p className='text-neutral-400 max-w-2xl mx-auto leading-relaxed'>
                Discover the advantages of obtaining a work visa for your career and personal growth.
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
          transition={{ duration: 0.6, delay: 1.6 }}
          className='text-center max-w-4xl mx-auto'
        >
          <div className='bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-8'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              Ready to Advance Your Career?
            </h2>
            <p className='text-xl text-neutral-300 mb-8 leading-relaxed'>
              Let our immigration experts help you secure a work visa and take your career to the next level globally.
            </p>

            <div className='flex flex-wrap justify-center gap-4 mb-8'>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className='flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:via-violet-500 hover:to-indigo-500 text-white font-bold rounded-xl transition-all duration-300'
              >
                <Zap className='w-5 h-5' />
                Start Your Application
                <ArrowRight className='w-5 h-5' />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className='flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 hover:border-neutral-700/50 text-white font-medium rounded-xl transition-all duration-300'
              >
                <Phone className='w-5 h-5' />
                Free Consultation
              </motion.button>
            </div>

            <div className='flex flex-wrap justify-center gap-6 text-sm text-neutral-400'>
              <div className='flex items-center gap-2'>
                <Phone className='w-4 h-4' />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className='flex items-center gap-2'>
                <Mail className='w-4 h-4' />
                <span>workvisas@vanhsya.com</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
