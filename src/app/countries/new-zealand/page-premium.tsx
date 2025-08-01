'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import {
  MapPin, Flag, Users, Building, GraduationCap, Heart, Shield, Star, Clock, ArrowRight,
  CheckCircle, Globe, Zap, Target, Brain, Bot, Network, TrendingUp, Award, Phone, Mail,
  Briefcase, Home, DollarSign, Factory, TreePine, Sparkles, Mountain,
} from 'lucide-react';

// New Zealand immigration stats
const nzStats = {
  applications: '0',
  successRate: '75.8%',
  avgProcessingTime: '6-12 months',
  workVisas: '210K',
  residenceApprovals: '45K+',
  students: '80K+',
  investors: '800+',
  familyVisas: '25K+',
};

// Immigration programs
const immigrationPrograms = [
  {
    id: 'skilled',
    title: 'Skilled Migrant',
    icon: Briefcase,
    description: 'Points-based skilled worker immigration',
    color: 'from-blue-500 to-blue-600',
    programs: [
      { name: 'Skilled Migrant Category', points: '160+ points', timeline: '8-12 months' },
      { name: 'Skilled Worker Visa', points: 'Job offer required', timeline: '4-6 months' },
      { name: 'Essential Skills Visa', points: 'Skills shortage', timeline: '3-6 months' },
    ],
    quota: 'Points-based',
  },
  {
    id: 'investment',
    title: 'Investor Category',
    icon: DollarSign,
    description: 'Investment and entrepreneur visas',
    color: 'from-emerald-500 to-emerald-600',
    programs: [
      { name: 'Investor 1 Category', points: 'NZ$10M+', timeline: '6-9 months' },
      { name: 'Investor 2 Category', points: 'NZ$3M+', timeline: '9-12 months' },
      { name: 'Entrepreneur Work Visa', points: 'Business plan', timeline: '6-12 months' },
    ],
    quota: 'Investment-based',
  },
  {
    id: 'student',
    title: 'Student Visa',
    icon: GraduationCap,
    description: 'Study pathway to residence',
    color: 'from-purple-500 to-purple-600',
    programs: [
      { name: 'Student Visa', points: 'Course enrollment', timeline: '4-8 weeks' },
      { name: 'Post-Study Work Visa', points: 'Graduate level', timeline: '6-8 weeks' },
    ],
    quota: 'Education-based',
  },
  {
    id: 'family',
    title: 'Family Category',
    icon: Heart,
    description: 'Join family members in New Zealand',
    color: 'from-rose-500 to-rose-600',
    programs: [
      { name: 'Partnership Visa', points: 'NZ partner', timeline: '12-24 months' },
      { name: 'Parent Category', points: 'Adult children', timeline: '24+ months' },
      { name: 'Dependent Child', points: 'Resident parent', timeline: '6-12 months' },
    ],
    quota: 'Family-based',
  },
];

// New Zealand regions
const nzRegions = [
  { name: 'Auckland', icon: Building, description: 'Largest city, business hub' },
  { name: 'Wellington', icon: Star, description: 'Capital city, government' },
  { name: 'Christchurch', icon: TreePine, description: 'South Island gateway' },
  { name: 'Hamilton', icon: Factory, description: 'Agricultural center' },
  { name: 'Queenstown', icon: Mountain, description: 'Tourism and adventure' },
  { name: 'Dunedin', icon: GraduationCap, description: 'University city' },
];

// AI New Zealand services
const aiNzServices = [
  {
    icon: Brain,
    title: 'Points Calculator',
    description: 'AI-powered SMC points assessment and optimization',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Target,
    title: 'Skills Match',
    description: 'Match your skills to New Zealand shortage lists',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: Network,
    title: 'Pathway Planner',
    description: 'Custom immigration pathway recommendations',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: TrendingUp,
    title: 'Investment Guide',
    description: 'Investor category eligibility and requirements',
    color: 'from-rose-500 to-rose-600',
  },
];

export default function NewZealandPage() {
  const [selectedProgram, setSelectedProgram] = useState(immigrationPrograms[0]);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const programsRef = useRef<HTMLDivElement>(null);
  const regionsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const programsInView = useInView(programsRef, { once: true, amount: 0.2 });
  const regionsInView = useInView(regionsRef, { once: true, amount: 0.2 });
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <div ref={containerRef} className='min-h-screen bg-gradient-to-b from-black via-neutral-950 to-neutral-900 text-white overflow-hidden'>
      {/* New Zealand Colors Background */}
      <motion.div style={{ y: backgroundY }} className='fixed inset-0 pointer-events-none'>
        <div className='absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-white/5' />
        <div className='absolute inset-0'>
          {Array.from({ length: 60 }, (_, i) => (
            <motion.div
              key={i}
              className='absolute w-1 h-1 bg-gradient-to-r from-blue-400/30 to-white/30 rounded-full'
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
        {/* Kiwi and Fern Animations */}
        <div className='absolute inset-0'>
          {Array.from({ length: 8 }, (_, i) => (
            <motion.div
              key={`kiwi-${i}`}
              className='absolute text-4xl opacity-20'
              style={{
                left: `${10 + (i * 12)}%`,
                top: `${20 + (i * 8)}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            >
              🥝
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Navigation */}
      <nav className='fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-blue-500/10'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <Link href='/' className='flex items-center gap-2'>
              <div className='w-10 h-10 bg-gradient-to-r from-blue-500 to-white rounded-lg flex items-center justify-center'>
                <Bot className='w-6 h-6 text-black' />
              </div>
              <span className='text-xl font-bold bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent'>
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
                className='inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-white/20 border border-blue-500/30 backdrop-blur-xl mb-8'
              >
                <Flag className='w-6 h-6 text-blue-400' />
                <span className='text-blue-300 font-medium'>Immigration to New Zealand</span>
                <span className='text-4xl'>🥝</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                className='text-5xl md:text-7xl lg:text-8xl font-bold mb-8'
              >
                <span className='bg-gradient-to-r from-blue-400 via-white to-blue-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-pulse'>
                  Aotearoa
                </span>
                <br />
                <span className='text-white'>Dreams</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className='text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-4xl mx-auto'
              >
                Experience the land of the long white cloud with AI-powered immigration guidance. 
                From skilled migration to investment visas, your New Zealand adventure awaits.
              </motion.p>

              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
                className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-12'
              >
                {Object.entries(nzStats).slice(0, 4).map(([key, value], index) => (
                  <div key={key} className='text-center'>
                    <div className={`text-3xl md:text-4xl font-bold mb-2 ${index % 2 === 0 ? 'text-blue-400' : 'text-white'}`}>
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
                  className='px-8 py-4 bg-gradient-to-r from-blue-600 via-white/20 to-blue-600 rounded-full text-white font-bold text-lg shadow-2xl border border-blue-400/30'
                >
                  <span className='flex items-center gap-2'>
                    <Target className='w-6 h-6' />
                    Start Points Assessment
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
                    Skills Calculator
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
                <span className='text-white'>Immigration </span>
                <span className='bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent'>
                  Pathways
                </span>
              </h2>
              <p className='text-xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
                Multiple routes to make New Zealand your home.
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
                    selectedProgram.id === program.id ? 'border-blue-500/50 shadow-lg shadow-blue-500/20' : 'border-white/10 hover:border-blue-500/30'
                  }`}>
                    <div className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <program.icon className='w-8 h-8 text-white' />
                    </div>
                    <h3 className='text-xl font-bold text-white mb-4'>{program.title}</h3>
                    <p className='text-white/70 leading-relaxed mb-4'>{program.description}</p>
                    <div className='text-blue-400 font-medium text-sm'>
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
                        <span className='text-blue-400'>{program.points}</span>
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

        {/* New Zealand Regions */}
        <section ref={regionsRef} className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={regionsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-center mb-20'
            >
              <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent'>
                  Regional
                </span>
                <br />
                <span className='text-white'>Opportunities</span>
              </h2>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {nzRegions.map((region, index) => (
                <motion.div
                  key={region.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={regionsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className='group'
                >
                  <div className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full hover:border-blue-500/30 transition-all duration-500'>
                    <div className='w-16 h-16 bg-gradient-to-r from-blue-500 to-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
                      <region.icon className='w-8 h-8 text-white' />
                    </div>
                    <h3 className='text-xl font-bold text-white mb-4'>{region.name}</h3>
                    <p className='text-white/70 leading-relaxed'>{region.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI New Zealand Services */}
        <section ref={servicesRef} className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-center mb-20'
            >
              <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent'>
                  AI New Zealand
                </span>
                <br />
                <span className='text-white'>Services</span>
              </h2>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {aiNzServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className='group'
                >
                  <div className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full hover:border-blue-500/30 transition-all duration-500'>
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
                  <span className='text-white'>Start Your </span>
                  <span className='bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent'>
                    NZ Journey
                  </span>
                </h2>
                <p className='text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed'>
                  Begin your New Zealand immigration process with AI-powered guidance and expert support.
                </p>

                <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-12'>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    className='px-10 py-5 bg-gradient-to-r from-blue-600 via-white/20 to-blue-600 rounded-full text-white font-bold text-xl shadow-2xl'
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
                    <span>+64 9 123 4567</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Mail className='w-5 h-5' />
                    <span>newzealand@vanhsya.com</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <span className='text-2xl'>🥝</span>
                    <span>Kia Ora!</span>
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
