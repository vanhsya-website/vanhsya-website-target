'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import {
  MapPin, Flag, Users, Building, GraduationCap, Heart, Shield, Star, Clock, ArrowRight,
  CheckCircle, Globe, Zap, Target, Brain, Bot, Network, TrendingUp, Award, Phone, Mail,
  Briefcase, Home, DollarSign, Factory, TreePine, Sparkles, Palmtree, Crown,
} from 'lucide-react';

// UAE immigration stats
const uaeStats = {
  applications: '0',
  successRate: '89.5%',
  avgProcessingTime: '2-6 weeks',
  workVisas: '9.2M',
  investors: '15K+',
  students: '75K+',
  familyVisas: '200K+',
  goldCards: '100K+',
};

// Immigration programs
const immigrationPrograms = [
  {
    id: 'employment',
    title: 'Work Permits',
    icon: Briefcase,
    description: 'Employment visas for UAE opportunities',
    color: 'from-green-500 to-green-600',
    programs: [
      { name: 'Employment Visa', points: 'Job offer', timeline: '2-4 weeks' },
      { name: 'Skilled Worker Visa', points: 'Skills-based', timeline: '3-6 weeks' },
      { name: 'Mission Visa', points: 'Specialized roles', timeline: '1-3 weeks' },
    ],
    quota: 'Employment-based',
  },
  {
    id: 'investment',
    title: 'Investor Visas',
    icon: DollarSign,
    description: 'Investment and business opportunities',
    color: 'from-red-500 to-red-600',
    programs: [
      { name: 'Golden Visa (10 years)', points: 'AED 10M+', timeline: '4-8 weeks' },
      { name: 'Investor Visa (5 years)', points: 'AED 5M+', timeline: '6-10 weeks' },
      { name: 'Entrepreneur Visa', points: 'Business plan', timeline: '4-12 weeks' },
    ],
    quota: 'Investment-based',
  },
  {
    id: 'student',
    title: 'Student Visas',
    icon: GraduationCap,
    description: 'Study in UAE universities',
    color: 'from-blue-500 to-blue-600',
    programs: [
      { name: 'Student Visa', points: 'University admission', timeline: '2-4 weeks' },
      { name: 'Research Visa', points: 'PhD/Research', timeline: '3-6 weeks' },
    ],
    quota: 'Education-based',
  },
  {
    id: 'family',
    title: 'Family Visas',
    icon: Heart,
    description: 'Sponsor family members',
    color: 'from-purple-500 to-purple-600',
    programs: [
      { name: 'Family Sponsorship', points: 'AED 4K+ salary', timeline: '2-6 weeks' },
      { name: 'Spouse Visa', points: 'Marriage certificate', timeline: '2-4 weeks' },
      { name: 'Dependent Visa', points: 'Family relations', timeline: '2-4 weeks' },
    ],
    quota: 'Family-based',
  },
];

// UAE Emirates
const uaeEmirates = [
  { name: 'Dubai', icon: Building, description: 'Business and tourism hub' },
  { name: 'Abu Dhabi', icon: Crown, description: 'Capital and oil center' },
  { name: 'Sharjah', icon: GraduationCap, description: 'Cultural capital' },
  { name: 'Ajman', icon: Factory, description: 'Manufacturing center' },
  { name: 'Ras Al Khaimah', icon: TreePine, description: 'Adventure tourism' },
  { name: 'Fujairah', icon: Palmtree, description: 'East coast gateway' },
  { name: 'Umm Al Quwain', icon: Star, description: 'Peaceful emirate' },
];

// AI UAE services
const aiUaeServices = [
  {
    icon: Brain,
    title: 'Visa Type Selector',
    description: 'AI determines the best UAE visa for your profile',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Target,
    title: 'Golden Visa Checker',
    description: 'Assess eligibility for UAE Golden Visa programs',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: Network,
    title: 'Business Setup Guide',
    description: 'AI-powered business formation and licensing',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: TrendingUp,
    title: 'Investment Calculator',
    description: 'Personalized investment pathway analysis',
    color: 'from-purple-500 to-purple-600',
  },
];

export default function UAEPage() {
  const [selectedProgram, setSelectedProgram] = useState(immigrationPrograms[0]);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const programsRef = useRef<HTMLDivElement>(null);
  const emiratesRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const programsInView = useInView(programsRef, { once: true, amount: 0.2 });
  const emiratesInView = useInView(emiratesRef, { once: true, amount: 0.2 });
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <div ref={containerRef} className='min-h-screen bg-gradient-to-b from-black via-neutral-950 to-neutral-900 text-white overflow-hidden'>
      {/* UAE Flag Colors Background */}
      <motion.div style={{ y: backgroundY }} className='fixed inset-0 pointer-events-none'>
        <div className='absolute inset-0 bg-gradient-to-br from-green-900/20 via-black via-red-900/10 to-white/5' />
        <div className='absolute inset-0'>
          {Array.from({ length: 60 }, (_, i) => (
            <motion.div
              key={i}
              className='absolute w-1 h-1 bg-gradient-to-r from-green-400/30 via-red-400/30 to-white/30 rounded-full'
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
        {/* Palm Trees and Falcons */}
        <div className='absolute inset-0'>
          {Array.from({ length: 10 }, (_, i) => (
            <motion.div
              key={`palm-${i}`}
              className='absolute text-4xl opacity-20'
              style={{
                left: `${5 + (i * 10)}%`,
                top: `${15 + (i * 7)}%`,
              }}
              animate={{
                y: [-15, 15, -15],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              {i % 2 === 0 ? '🌴' : '🦅'}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Navigation */}
      <nav className='fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-green-500/10'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <Link href='/' className='flex items-center gap-2'>
              <div className='w-10 h-10 bg-gradient-to-r from-green-500 via-red-500 to-white rounded-lg flex items-center justify-center'>
                <Bot className='w-6 h-6 text-black' />
              </div>
              <span className='text-xl font-bold bg-gradient-to-r from-green-400 via-red-400 to-white bg-clip-text text-transparent'>
                VANHSYA
              </span>
            </Link>
            
            <div className='hidden md:flex items-center gap-6'>
              <Link href='/' className='text-white/80 hover:text-white transition-colors'>Home</Link>
              <Link href='/services' className='text-white/80 hover:text-white transition-colors'>Services</Link>
              <Link href='/countries' className='text-white/80 hover:text-white transition-colors'>Countries</Link>
              <Link href='/contact' className='text-white/80 hover:text-white transition-colors'>Contact</Link>
            </div>
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
                className='inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 via-red-500/20 to-white/20 border border-green-500/30 backdrop-blur-xl mb-8'
              >
                <Flag className='w-6 h-6 text-green-400' />
                <span className='text-green-300 font-medium'>Immigration to UAE</span>
                <span className='text-4xl'>🦅</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                className='text-5xl md:text-7xl lg:text-8xl font-bold mb-8'
              >
                <span className='bg-gradient-to-r from-green-400 via-red-400 to-white bg-clip-text text-transparent bg-[length:300%_100%] animate-pulse'>
                  Emirates
                </span>
                <br />
                <span className='text-white'>Gateway</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className='text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-4xl mx-auto'
              >
                Experience the future in the UAE with AI-powered immigration solutions. 
                From Golden Visas to business opportunities, your Emirates dream starts here.
              </motion.p>

              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
                className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-12'
              >
                {Object.entries(uaeStats).slice(0, 4).map(([key, value], index) => (
                  <div key={key} className='text-center'>
                    <div className={`text-3xl md:text-4xl font-bold mb-2 ${
                      index === 0 ? 'text-green-400' : 
                      index === 1 ? 'text-red-400' : 
                      index === 2 ? 'text-white' : 'text-yellow-400'
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
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34, 197, 94, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className='px-8 py-4 bg-gradient-to-r from-green-600 via-red-500 to-white/20 rounded-full text-white font-bold text-lg shadow-2xl border border-green-400/30'
                >
                  <span className='flex items-center gap-2'>
                    <Target className='w-6 h-6' />
                    Start Golden Visa
                    <ArrowRight className='w-6 h-6' />
                  </span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white font-medium text-lg hover:bg-white/20 transition-all'
                >
                  <span className='flex items-center gap-2'>
                    <Brain className='w-6 h-6' />
                    Visa Calculator
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Immigration Programs */}
        <section ref={programsRef} className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={programsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-center mb-20'
            >
              <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='text-white'>UAE </span>
                <span className='bg-gradient-to-r from-green-400 via-red-400 to-white bg-clip-text text-transparent'>
                  Visas
                </span>
              </h2>
              <p className='text-xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
                Multiple pathways to live, work, and invest in the Emirates.
              </p>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {immigrationPrograms.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={programsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className='group cursor-pointer'
                  onClick={() => setSelectedProgram(program)}
                >
                  <div className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border rounded-3xl p-8 h-full transition-all duration-500 ${
                    selectedProgram.id === program.id ? 'border-green-500/50 shadow-lg shadow-green-500/20' : 'border-white/10 hover:border-green-500/30'
                  }`}>
                    <div className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <program.icon className='w-8 h-8 text-white' />
                    </div>
                    <h3 className='text-xl font-bold text-white mb-4'>{program.title}</h3>
                    <p className='text-white/70 leading-relaxed mb-4'>{program.description}</p>
                    <div className='text-green-400 font-medium text-sm'>
                      {program.quota}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Selected Program Details */}
            <motion.div
              key={selectedProgram.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='mt-16 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8'
            >
              <h3 className='text-2xl font-bold text-white mb-6'>{selectedProgram.title} Programs</h3>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {selectedProgram.programs.map((program, index) => (
                  <div key={program.name} className='bg-white/5 rounded-2xl p-6 border border-white/10'>
                    <h4 className='text-lg font-semibold text-white mb-3'>{program.name}</h4>
                    <div className='space-y-2 text-sm'>
                      <div className='flex justify-between'>
                        <span className='text-white/70'>Requirement:</span>
                        <span className='text-green-400'>{program.points}</span>
                      </div>
                      <div className='flex justify-between'>
                        <span className='text-white/70'>Timeline:</span>
                        <span className='text-white'>{program.timeline}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* UAE Emirates */}
        <section ref={emiratesRef} className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={emiratesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-center mb-20'
            >
              <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='bg-gradient-to-r from-green-400 via-red-400 to-white bg-clip-text text-transparent'>
                  Seven
                </span>
                <br />
                <span className='text-white'>Emirates</span>
              </h2>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
              {uaeEmirates.map((emirate, index) => (
                <motion.div
                  key={emirate.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={emiratesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className='group'
                >
                  <div className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 h-full hover:border-green-500/30 transition-all duration-500'>
                    <div className='w-12 h-12 bg-gradient-to-r from-green-500 to-red-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
                      <emirate.icon className='w-6 h-6 text-white' />
                    </div>
                    <h3 className='text-lg font-bold text-white mb-2'>{emirate.name}</h3>
                    <p className='text-white/70 text-sm leading-relaxed'>{emirate.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI UAE Services */}
        <section ref={servicesRef} className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-center mb-20'
            >
              <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='bg-gradient-to-r from-green-400 via-red-400 to-white bg-clip-text text-transparent'>
                  AI UAE
                </span>
                <br />
                <span className='text-white'>Services</span>
              </h2>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {aiUaeServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className='group'
                >
                  <div className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full hover:border-green-500/30 transition-all duration-500'>
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className='w-8 h-8 text-white' />
                    </div>
                    <h3 className='text-xl font-bold text-white mb-4'>{service.title}</h3>
                    <p className='text-white/70 leading-relaxed'>{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
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
                  <span className='text-white'>Ready for the </span>
                  <span className='bg-gradient-to-r from-green-400 via-red-400 to-white bg-clip-text text-transparent'>
                    UAE
                  </span>
                  <span className='text-white'>?</span>
                </h2>
                <p className='text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed'>
                  Start your UAE journey with AI-powered visa guidance and Golden Visa opportunities.
                </p>

                <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-12'>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34, 197, 94, 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    className='px-10 py-5 bg-gradient-to-r from-green-600 via-red-500 to-white/20 rounded-full text-white font-bold text-xl shadow-2xl'
                  >
                    <span className='flex items-center gap-3'>
                      <Target className='w-6 h-6' />
                      Begin Application
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
                      Expert Consultation
                    </span>
                  </motion.button>
                </div>

                <div className='flex flex-wrap justify-center gap-8 text-white/60'>
                  <div className='flex items-center gap-2'>
                    <Phone className='w-5 h-5' />
                    <span>+971 4 123 4567</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Mail className='w-5 h-5' />
                    <span>uae@vanhsya.com</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <span className='text-2xl'>🦅</span>
                    <span>Marhaba!</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
