'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  MapPin, Flag, Users, Building, GraduationCap, Heart, Shield, Star, Clock, ArrowRight,
  CheckCircle, Globe, Zap, Target, Brain, Bot, Network, TrendingUp, Award, Phone, Mail,
  Briefcase, Home, Euro, Factory, TreePine, Castle,
} from 'lucide-react';

// Germany immigration stats
const germanyStats = {
  applications: '0',
  successRate: '71.5%',
  avgProcessingTime: '6-18 months',
  immigrantsPerYear: '2M+',
  euBlueCard: '35K+',
  familyReunion: '105K+',
  students: '400K+',
  workPermits: '65K+',
};

// Immigration programs
const immigrationPrograms = [
  {
    id: 'skilled',
    title: 'Skilled Worker Programs',
    icon: Briefcase,
    description: 'Work-based residence permits for qualified professionals',
    color: 'from-red-500 to-red-600',
    programs: [
      { name: 'EU Blue Card', points: 'University degree', timeline: '1-3 months' },
      { name: 'Skilled Worker Visa', points: 'Vocational training', timeline: '2-4 months' },
      { name: 'Job Seeker Visa', points: 'Points system', timeline: '6 months' },
    ],
    requirements: [
      'University degree or vocational qualification',
      'Job offer from German employer',
      'German language skills (A1-B1)',
      'Financial proof',
      'Health insurance',
    ],
    benefits: [
      'Path to permanent residence',
      'EU-wide mobility',
      'Family reunification rights',
      'Access to social benefits',
      'Citizenship after 8 years',
    ],
    quota: 'No annual cap',
  },
  {
    id: 'student',
    title: 'Student & Research',
    icon: GraduationCap,
    description: 'Study and research opportunities in Germany',
    color: 'from-blue-500 to-blue-600',
    programs: [
      { name: 'Student Visa', points: 'University admission', timeline: '6-12 weeks' },
      { name: 'Research Visa', points: 'Research agreement', timeline: '4-8 weeks' },
      { name: 'Au Pair Visa', points: 'Host family', timeline: '4-6 weeks' },
    ],
    requirements: [
      'University admission/research agreement',
      'Financial proof (€11,208/year)',
      'German language certificate',
      'Health insurance',
      'Academic transcripts',
    ],
    benefits: [
      'Work 120 full days/year',
      'Post-study work opportunities',
      'EU travel rights',
      'Student discounts',
      'Pathway to skilled worker visa',
    ],
    quota: 'Unlimited',
  },
  {
    id: 'family',
    title: 'Family Reunification',
    icon: Heart,
    description: 'Join family members living in Germany',
    color: 'from-emerald-500 to-emerald-600',
    programs: [
      { name: 'Spouse Visa', points: 'Marriage certificate', timeline: '6-12 months' },
      { name: 'Child Visa', points: 'Under 18', timeline: '3-6 months' },
      { name: 'Parent Visa', points: 'Exceptional cases', timeline: '6-18 months' },
    ],
    requirements: [
      'Family relationship proof',
      'German language skills (A1)',
      'Financial sponsorship',
      'Adequate housing',
      'Health insurance',
    ],
    benefits: [
      'Unlimited residence permit',
      'Work authorization',
      'Access to education',
      'Social benefits',
      'Citizenship pathway',
    ],
    quota: 'No restrictions',
  },
  {
    id: 'investment',
    title: 'Investment & Business',
    icon: Euro,
    description: 'Start a business or invest in Germany',
    color: 'from-purple-500 to-purple-600',
    programs: [
      { name: 'Self-Employment Visa', points: 'Business plan', timeline: '3-6 months' },
      { name: 'Investor Visa', points: '€350K investment', timeline: '6-12 months' },
      { name: 'Freelancer Visa', points: 'Professional skills', timeline: '2-4 months' },
    ],
    requirements: [
      'Viable business plan',
      'Sufficient capital',
      'Relevant qualifications',
      'Economic interest to Germany',
      'German language skills',
    ],
    benefits: [
      'Business ownership rights',
      'Residence permit renewal',
      'Family inclusion',
      'EU market access',
      'Permanent residence pathway',
    ],
    quota: 'Case-by-case',
  },
];

// German states (Länder)
const states = [
  {
    id: 'bavaria',
    name: 'Bavaria',
    capital: 'Munich',
    population: '13.1M',
    majorCities: ['Munich', 'Nuremberg', 'Augsburg', 'Regensburg'],
    keyIndustries: ['Automotive', 'Technology', 'Aerospace', 'Tourism'],
    climate: 'Continental',
    highlights: ['Neuschwanstein', 'Oktoberfest', 'Alps', 'Beer Gardens'],
  },
  {
    id: 'nrw',
    name: 'North Rhine-Westphalia',
    capital: 'Düsseldorf',
    population: '17.9M',
    majorCities: ['Cologne', 'Düsseldorf', 'Dortmund', 'Essen'],
    keyIndustries: ['Manufacturing', 'Energy', 'Technology', 'Logistics'],
    climate: 'Oceanic',
    highlights: ['Cologne Cathedral', 'Rhine Valley', 'Industrial Heritage', 'Museums'],
  },
  {
    id: 'berlin',
    name: 'Berlin',
    capital: 'Berlin',
    population: '3.7M',
    majorCities: ['Berlin'],
    keyIndustries: ['Technology', 'Media', 'Tourism', 'Government'],
    climate: 'Continental',
    highlights: ['Brandenburg Gate', 'Museum Island', 'Berlin Wall', 'Startup Scene'],
  },
  {
    id: 'hamburg',
    name: 'Hamburg',
    capital: 'Hamburg',
    population: '1.9M',
    majorCities: ['Hamburg'],
    keyIndustries: ['Maritime', 'Media', 'Logistics', 'Aviation'],
    climate: 'Oceanic',
    highlights: ['Port of Hamburg', 'Speicherstadt', 'Reeperbahn', 'Miniatur Wunderland'],
  },
];

// AI Germany services
const aiGermanyServices = [
  {
    icon: Brain,
    title: 'Visa Type Selector',
    description: 'AI determines the best German visa type for your profile',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: Target,
    title: 'Language Level Guide',
    description: 'Personalized German language learning pathway',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Network,
    title: 'Document Checker',
    description: 'AI verification of required documents for German immigration',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: TrendingUp,
    title: 'Blue Card Calculator',
    description: 'Salary and qualification assessment for EU Blue Card',
    color: 'from-purple-500 to-purple-600',
  },
];

export default function GermanyPage() {
  const [selectedProgram, setSelectedProgram] = useState(immigrationPrograms[0]);
  const [selectedState, setSelectedState] = useState(states[0]);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const programsRef = useRef<HTMLDivElement>(null);
  const statesRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const programsInView = useInView(programsRef, { once: true, amount: 0.2 });
  const statesInView = useInView(statesRef, { once: true, amount: 0.2 });
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <div ref={containerRef} className='min-h-screen bg-gradient-to-b from-black via-neutral-950 to-neutral-900 text-white overflow-hidden'>
      {/* German Flag Colors Background */}
      <motion.div style={{ y: backgroundY }} className='fixed inset-0 pointer-events-none'>
        <div className='absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-yellow-900/30' />
        <div className='absolute inset-0'>
          {Array.from({ length: 60 }, (_, i) => (
            <motion.div
              key={i}
              className='absolute w-1 h-1 bg-gradient-to-r from-red-400/30 to-yellow-400/30 rounded-full'
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
              <div className='w-10 h-10 bg-gradient-to-r from-red-500 to-yellow-500 rounded-lg flex items-center justify-center'>
                <Bot className='w-6 h-6 text-white' />
              </div>
              <span className='text-xl font-bold bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent'>
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
                className='inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-red-500/20 to-yellow-500/20 border border-red-500/30 backdrop-blur-xl mb-8'
              >
                <Flag className='w-6 h-6 text-red-400' />
                <span className='text-red-300 font-medium'>Immigration to Germany</span>
                <span className='text-4xl'>🏰</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                className='text-5xl md:text-7xl lg:text-8xl font-bold mb-8'
              >
                <span className='bg-gradient-to-r from-red-400 via-yellow-400 to-red-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-pulse'>
                  Willkommen
                </span>
                <br />
                <span className='text-white'>Deutschland</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className='text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-4xl mx-auto'
              >
                Experience German excellence with AI-powered immigration solutions. 
                From EU Blue Cards to family reunification, we'll guide your journey to the heart of Europe.
              </motion.p>

              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
                className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-12'
              >
                <div className='text-center'>
                  <div className='text-3xl md:text-4xl font-bold text-red-400 mb-2'>
                    {germanyStats.applications}
                  </div>
                  <div className='text-white/60 text-sm'>Applications</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl md:text-4xl font-bold text-yellow-400 mb-2'>
                    {germanyStats.successRate}
                  </div>
                  <div className='text-white/60 text-sm'>Success Rate</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl md:text-4xl font-bold text-red-400 mb-2'>
                    {germanyStats.immigrantsPerYear}
                  </div>
                  <div className='text-white/60 text-sm'>Immigrants/Year</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl md:text-4xl font-bold text-yellow-400 mb-2'>
                    {germanyStats.euBlueCard}
                  </div>
                  <div className='text-white/60 text-sm'>Blue Cards</div>
                </div>
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
                  className='px-8 py-4 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 rounded-full text-white font-bold text-lg shadow-2xl border border-red-400/30'
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
                    Blue Card Calculator
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Quick implementation of other sections */}
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
                <span className='bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent'>
                  Programs
                </span>
              </h2>
              <p className='text-xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
                Multiple pathways to German residence and citizenship.
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

        {/* AI Germany Services */}
        <section ref={servicesRef} className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-center mb-20'
            >
              <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent'>
                  AI Deutschland
                </span>
                <br />
                <span className='text-white'>Services</span>
              </h2>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {aiGermanyServices.map((service, index) => (
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
                  <span className='bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent'>
                    Germany
                  </span>
                  <span className='text-white'>?</span>
                </h2>
                <p className='text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed'>
                  Start your German immigration journey with AI-powered guidance and expert support.
                </p>

                <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-12'>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(239, 68, 68, 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    className='px-10 py-5 bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 rounded-full text-white font-bold text-xl shadow-2xl'
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
                    <span>+49 30 1234 5678</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Mail className='w-5 h-5' />
                    <span>germany@vanhsya.com</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <span className='text-2xl'>🏰</span>
                    <span>Sehr Gut Service!</span>
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
