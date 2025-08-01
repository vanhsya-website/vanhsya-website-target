'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import {
  MapPin, Flag, Users, Building, GraduationCap, Heart, Shield, Star, Clock, ArrowRight,
  CheckCircle, Globe, Zap, Target, Brain, Bot, Network, TrendingUp, Award, Phone, Mail,
  Briefcase, Home, DollarSign, Factory, TreePine, Sparkles,
} from 'lucide-react';

// Singapore immigration stats
const singaporeStats = {
  applications: '0',
  successRate: '84.2%',
  avgProcessingTime: '4-8 weeks',
  workPermits: '1.4M',
  prApplications: '32K+',
  students: '100K+',
  investors: '2.5K+',
  familyVisas: '15K+',
};

// Immigration programs
const immigrationPrograms = [
  {
    id: 'employment',
    title: 'Employment Pass',
    icon: Briefcase,
    description: 'For professionals, managers and executives',
    color: 'from-red-500 to-red-600',
    programs: [
      { name: 'Employment Pass', points: 'S$5,000/month', timeline: '3-4 weeks' },
      { name: 'S Pass', points: 'S$2,500/month', timeline: '3-4 weeks' },
      { name: 'Tech.Pass', points: 'Tech talent', timeline: '4-6 weeks' },
    ],
    quota: 'Skills-based',
  },
  {
    id: 'investment',
    title: 'Investor Schemes',
    icon: DollarSign,
    description: 'For investors and entrepreneurs',
    color: 'from-emerald-500 to-emerald-600',
    programs: [
      { name: 'Global Investor Programme', points: 'S$2.5M', timeline: '6-9 months' },
      { name: 'EntrePass', points: 'Startup/Innovation', timeline: '8-12 weeks' },
      { name: 'One Pass', points: 'High earners', timeline: '4-8 weeks' },
    ],
    quota: 'Investment-based',
  },
  {
    id: 'student',
    title: 'Student Pass',
    icon: GraduationCap,
    description: 'Study at Singapore institutions',
    color: 'from-blue-500 to-blue-600',
    programs: [
      { name: 'Student Pass', points: 'Institution offer', timeline: '2-4 weeks' },
      { name: 'Training Pass', points: 'Skills training', timeline: '2-3 weeks' },
    ],
    quota: 'Institution-based',
  },
  {
    id: 'family',
    title: 'Family Visas',
    icon: Heart,
    description: 'Join family members in Singapore',
    color: 'from-purple-500 to-purple-600',
    programs: [
      { name: 'Dependant Pass', points: 'EP/S Pass holder', timeline: '2-3 weeks' },
      { name: 'Long Term Visit Pass', points: 'Family relations', timeline: '4-6 weeks' },
    ],
    quota: 'Family-based',
  },
];

// AI Singapore services
const aiSingaporeServices = [
  {
    icon: Brain,
    title: 'Pass Type Selector',
    description: 'AI determines the best Singapore pass for your profile',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: Target,
    title: 'Salary Calculator',
    description: 'Smart salary assessment for EP and S Pass eligibility',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: Network,
    title: 'PR Readiness Check',
    description: 'AI evaluation of permanent residence application readiness',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: TrendingUp,
    title: 'Investment Guide',
    description: 'Personalized investment pathway recommendations',
    color: 'from-purple-500 to-purple-600',
  },
];

export default function SingaporePage() {
  const [selectedProgram, setSelectedProgram] = useState(immigrationPrograms[0]);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const programsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const programsInView = useInView(programsRef, { once: true, amount: 0.2 });
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <div ref={containerRef} className='min-h-screen bg-gradient-to-b from-black via-neutral-950 to-neutral-900 text-white overflow-hidden'>
      {/* Singapore Colors Background */}
      <motion.div style={{ y: backgroundY }} className='fixed inset-0 pointer-events-none'>
        <div className='absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-emerald-900/30' />
        <div className='absolute inset-0'>
          {Array.from({ length: 60 }, (_, i) => (
            <motion.div
              key={i}
              className='absolute w-1 h-1 bg-gradient-to-r from-red-400/30 to-emerald-400/30 rounded-full'
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
      </motion.div>

      {/* Navigation */}
      <nav className='fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-red-500/10'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <Link href='/' className='flex items-center gap-2'>
              <div className='w-10 h-10 bg-gradient-to-r from-red-500 to-emerald-500 rounded-lg flex items-center justify-center'>
                <Bot className='w-6 h-6 text-white' />
              </div>
              <span className='text-xl font-bold bg-gradient-to-r from-red-400 to-emerald-400 bg-clip-text text-transparent'>
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
                className='inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-red-500/20 to-emerald-500/20 border border-red-500/30 backdrop-blur-xl mb-8'
              >
                <Flag className='w-6 h-6 text-red-400' />
                <span className='text-red-300 font-medium'>Immigration to Singapore</span>
                <span className='text-4xl'>🦁</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                className='text-5xl md:text-7xl lg:text-8xl font-bold mb-8'
              >
                <span className='bg-gradient-to-r from-red-400 via-emerald-400 to-red-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-pulse'>
                  Lion City
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
                Access Asia's business hub with AI-powered immigration solutions. 
                From Employment Passes to investment schemes, your Singapore journey starts here.
              </motion.p>

              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
                className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-12'
              >
                {Object.entries(singaporeStats).slice(0, 4).map(([key, value], index) => (
                  <div key={key} className='text-center'>
                    <div className={`text-3xl md:text-4xl font-bold mb-2 ${index % 2 === 0 ? 'text-red-400' : 'text-emerald-400'}`}>
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
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(239, 68, 68, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className='px-8 py-4 bg-gradient-to-r from-red-600 via-emerald-500 to-red-600 rounded-full text-white font-bold text-lg shadow-2xl border border-red-400/30'
                >
                  <span className='flex items-center gap-2'>
                    <Target className='w-6 h-6' />
                    Start My Application
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
                    Pass Calculator
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
                <span className='text-white'>Singapore </span>
                <span className='bg-gradient-to-r from-red-400 to-emerald-400 bg-clip-text text-transparent'>
                  Passes
                </span>
              </h2>
              <p className='text-xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
                Multiple pathways to work, invest, and live in Singapore.
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
                >
                  <div className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full hover:border-red-500/30 transition-all duration-500'>
                    <div className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <program.icon className='w-8 h-8 text-white' />
                    </div>
                    <h3 className='text-xl font-bold text-white mb-4'>{program.title}</h3>
                    <p className='text-white/70 leading-relaxed mb-4'>{program.description}</p>
                    <div className='text-red-400 font-medium text-sm'>
                      {program.quota}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Singapore Services */}
        <section ref={servicesRef} className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-center mb-20'
            >
              <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='bg-gradient-to-r from-red-400 to-emerald-400 bg-clip-text text-transparent'>
                  AI Singapore
                </span>
                <br />
                <span className='text-white'>Services</span>
              </h2>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {aiSingaporeServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className='group'
                >
                  <div className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full hover:border-red-500/30 transition-all duration-500'>
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
                  <span className='text-white'>Ready for </span>
                  <span className='bg-gradient-to-r from-red-400 to-emerald-400 bg-clip-text text-transparent'>
                    Singapore
                  </span>
                  <span className='text-white'>?</span>
                </h2>
                <p className='text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed'>
                  Start your Singapore immigration journey with AI-powered guidance and expert support.
                </p>

                <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-12'>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(239, 68, 68, 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    className='px-10 py-5 bg-gradient-to-r from-red-600 via-emerald-500 to-red-600 rounded-full text-white font-bold text-xl shadow-2xl'
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
                    <span>+65 6123 4567</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Mail className='w-5 h-5' />
                    <span>singapore@vanhsya.com</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <span className='text-2xl'>🦁</span>
                    <span>Majulah Singapura!</span>
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
