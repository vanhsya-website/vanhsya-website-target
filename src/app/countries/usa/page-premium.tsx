'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  MapPin,
  Flag,
  Users,
  Building,
  GraduationCap,
  Heart,
  Plane,
  Shield,
  Star,
  Clock,
  ArrowRight,
  CheckCircle,
  Globe,
  Zap,
  Target,
  Brain,
  Bot,
  Sparkles,
  Network,
  TrendingUp,
  Award,
  Phone,
  Mail,
  Briefcase,
  Home,
  Mountain,
  DollarSign,
  Trophy,
} from 'lucide-react';

// USA immigration stats
const usaStats = {
  applications: '0',
  successRate: '52.3%',
  avgProcessingTime: '10-33 months',
  immigrantsPerYear: '1M+',
  h1bApprovals: '85K',
  greenCards: '1M+',
  familyBased: '480K+',
  employmentBased: '140K+',
};

// Immigration programs
const immigrationPrograms = [
  {
    id: 'employment',
    title: 'Employment-Based',
    icon: Briefcase,
    description: 'Work-based permanent residence categories',
    color: 'from-blue-500 to-blue-600',
    programs: [
      { name: 'EB-1: Priority Workers', points: 'Extraordinary ability', timeline: '8-33 months' },
      { name: 'EB-2: Advanced Degree', points: 'Masters/PERM', timeline: '1-8 years' },
      { name: 'EB-3: Skilled Workers', points: 'Bachelor/PERM', timeline: '1-8 years' },
    ],
    requirements: [
      'Job offer from US employer',
      'Labor certification (PERM)',
      'Priority date availability',
      'Education/experience requirements',
      'Medical examination',
    ],
    benefits: [
      'Permanent residence (Green Card)',
      'Work authorization for spouse',
      'Path to US citizenship',
      'Social Security benefits',
      'Travel freedom',
    ],
    quota: '140,000 annually',
  },
  {
    id: 'family',
    title: 'Family-Based',
    icon: Heart,
    description: 'Reunite with US citizen or LPR family',
    color: 'from-red-500 to-red-600',
    programs: [
      { name: 'Immediate Relatives', points: 'No cap', timeline: '8-15 months' },
      { name: 'F1: Unmarried Children', points: 'US citizens', timeline: '1-7 years' },
      { name: 'F2: Spouses/Children LPR', points: 'Green card holders', timeline: '2-5 years' },
    ],
    requirements: [
      'Qualifying family relationship',
      'US citizen or LPR petitioner',
      'Financial sponsorship (I-864)',
      'Background checks',
      'Medical examination',
    ],
    benefits: [
      'Family reunification',
      'Permanent residence status',
      'Work authorization',
      'Social benefits access',
      'Citizenship eligibility',
    ],
    quota: '480,000 annually',
  },
  {
    id: 'investor',
    title: 'Investor Visas',
    icon: DollarSign,
    description: 'Investment-based immigration programs',
    color: 'from-emerald-500 to-emerald-600',
    programs: [
      { name: 'EB-5: Regional Center', points: '$800K investment', timeline: '2-5 years' },
      { name: 'EB-5: Direct Investment', points: '$1.05M investment', timeline: '2-5 years' },
      { name: 'E-2: Treaty Investor', points: 'Substantial investment', timeline: '2-6 months' },
    ],
    requirements: [
      'Minimum investment amount',
      'Job creation requirements',
      'Source of funds documentation',
      'Business plan development',
      'At-risk investment',
    ],
    benefits: [
      'Permanent residence pathway',
      'Business ownership rights',
      'Family inclusion',
      'No language requirements',
      'Global mobility',
    ],
    quota: '10,000 annually',
  },
  {
    id: 'diversity',
    title: 'Diversity Visa',
    icon: Globe,
    description: 'Annual lottery for underrepresented countries',
    color: 'from-purple-500 to-purple-600',
    programs: [
      { name: 'DV Lottery', points: 'Random selection', timeline: '1-2 years' },
      { name: 'Asylum/Refugee', points: 'Protection basis', timeline: '1-5 years' },
      { name: 'Special Programs', points: 'Various criteria', timeline: '1-3 years' },
    ],
    requirements: [
      'High school education minimum',
      'Country eligibility',
      'Photo and application',
      'No criminal history',
      'Medical examination',
    ],
    benefits: [
      'Free application process',
      'Permanent residence',
      'Random selection basis',
      'Family inclusion',
      'Work authorization',
    ],
    quota: '55,000 annually',
  },
];

// US states (major immigration destinations)
const states = [
  {
    id: 'california',
    name: 'California',
    capital: 'Sacramento',
    population: '39.5M',
    majorCities: ['Los Angeles', 'San Francisco', 'San Diego', 'San Jose'],
    keyIndustries: ['Technology', 'Entertainment', 'Agriculture', 'Aerospace'],
    climate: 'Mediterranean/Desert',
    highlights: ['Hollywood', 'Silicon Valley', 'Golden Gate', 'Disneyland'],
  },
  {
    id: 'newyork',
    name: 'New York',
    capital: 'Albany',
    population: '19.5M',
    majorCities: ['New York City', 'Buffalo', 'Rochester', 'Syracuse'],
    keyIndustries: ['Finance', 'Real Estate', 'Technology', 'Media'],
    climate: 'Continental',
    highlights: ['Statue of Liberty', 'Times Square', 'Central Park', 'Niagara Falls'],
  },
  {
    id: 'texas',
    name: 'Texas',
    capital: 'Austin',
    population: '30.0M',
    majorCities: ['Houston', 'Dallas', 'San Antonio', 'Austin'],
    keyIndustries: ['Energy', 'Technology', 'Aerospace', 'Agriculture'],
    climate: 'Continental/Subtropical',
    highlights: ['Space Center', 'Big Bend', 'South by Southwest', 'Alamo'],
  },
  {
    id: 'florida',
    name: 'Florida',
    capital: 'Tallahassee',
    population: '22.6M',
    majorCities: ['Miami', 'Tampa', 'Orlando', 'Jacksonville'],
    keyIndustries: ['Tourism', 'Aerospace', 'Agriculture', 'International Trade'],
    climate: 'Subtropical/Tropical',
    highlights: ['Disney World', 'Everglades', 'Key West', 'South Beach'],
  },
];

// AI USA services
const aiUsaServices = [
  {
    icon: Brain,
    title: 'Visa Category Matcher',
    description: 'AI determines the best US visa pathway for your profile',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Target,
    title: 'Priority Date Tracker',
    description: 'Smart tracking and prediction of visa bulletin movement',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: Network,
    title: 'PERM Process Guide',
    description: 'AI-guided labor certification and application process',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: TrendingUp,
    title: 'H-1B Lottery Optimizer',
    description: 'Maximize H-1B lottery chances with strategic preparation',
    color: 'from-purple-500 to-purple-600',
  },
];

export default function USAPage() {
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
    <div
      ref={containerRef}
      className='min-h-screen bg-gradient-to-b from-black via-neutral-950 to-neutral-900 text-white overflow-hidden'
    >
      {/* American Flag Colors Background */}
      <motion.div
        style={{ y: backgroundY }}
        className='fixed inset-0 pointer-events-none'
      >
        <div className='absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-red-900/30' />
        <div className='absolute inset-0'>
          {Array.from({ length: 60 }, (_, i) => (
            <motion.div
              key={i}
              className='absolute w-1 h-1 bg-gradient-to-r from-blue-400/30 to-red-400/30 rounded-full'
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
        
        {/* Star pattern */}
        <div className='absolute inset-0 opacity-10'>
          {Array.from({ length: 50 }, (_, i) => (
            <motion.div
              key={i}
              className='absolute text-white text-2xl'
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
              animate={{
                rotate: [0, 360],
                opacity: [0.1, 0.5, 0.1],
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            >
              ⭐
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Navigation */}
      <nav className='fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-blue-500/10'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <Link href='/' className='flex items-center gap-2'>
              <div className='w-10 h-10 bg-gradient-to-r from-blue-500 to-red-500 rounded-lg flex items-center justify-center'>
                <Bot className='w-6 h-6 text-white' />
              </div>
              <span className='text-xl font-bold bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent'>
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
          <motion.div
            style={{ y: heroY }}
            className='container mx-auto px-4 sm:px-6 lg:px-8'
          >
            <div className='text-center max-w-6xl mx-auto'>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, type: 'spring' }}
                className='inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-red-500/20 border border-blue-500/30 backdrop-blur-xl mb-8'
              >
                <Flag className='w-6 h-6 text-blue-400' />
                <span className='text-blue-300 font-medium'>Immigration to USA</span>
                <span className='text-4xl'>🦅</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                className='text-5xl md:text-7xl lg:text-8xl font-bold mb-8'
              >
                <span className='bg-gradient-to-r from-blue-400 via-white to-red-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-pulse'>
                  Land of the
                </span>
                <br />
                <span className='text-white'>Free</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className='text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-4xl mx-auto'
              >
                Pursue the American Dream with AI-powered immigration solutions. 
                From H-1B to Green Cards, we'll navigate your journey to the United States.
              </motion.p>

              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
                className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-12'
              >
                <div className='text-center'>
                  <div className='text-3xl md:text-4xl font-bold text-blue-400 mb-2'>
                    {usaStats.applications}
                  </div>
                  <div className='text-white/60 text-sm'>Applications</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl md:text-4xl font-bold text-red-400 mb-2'>
                    {usaStats.successRate}
                  </div>
                  <div className='text-white/60 text-sm'>Success Rate</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl md:text-4xl font-bold text-blue-400 mb-2'>
                    {usaStats.immigrantsPerYear}
                  </div>
                  <div className='text-white/60 text-sm'>Immigrants/Year</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl md:text-4xl font-bold text-red-400 mb-2'>
                    {usaStats.h1bApprovals}
                  </div>
                  <div className='text-white/60 text-sm'>H-1B Approved</div>
                </div>
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
                  className='px-8 py-4 bg-gradient-to-r from-blue-600 via-white to-red-600 rounded-full text-black font-bold text-lg shadow-2xl border border-blue-400/30'
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
                    Visa Matcher
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
                <span className='bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent'>
                  Pathways
                </span>
              </h2>
              <p className='text-xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
                Multiple routes to US permanent residence and citizenship.
              </p>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
              {immigrationPrograms.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={programsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  onClick={() => setSelectedProgram(program)}
                  className={`group cursor-pointer ${selectedProgram.id === program.id ? 'scale-105' : ''} transition-all duration-500`}
                >
                  <div className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border rounded-3xl p-8 h-full transition-all duration-500 ${
                    selectedProgram.id === program.id ? 'border-blue-500/50 shadow-lg shadow-blue-500/25' : 'border-white/10 hover:border-blue-500/30'
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
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProgram.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12'
              >
                <div className='flex items-center gap-4 mb-8'>
                  <div className={`w-16 h-16 bg-gradient-to-r ${selectedProgram.color} rounded-2xl flex items-center justify-center`}>
                    <selectedProgram.icon className='w-8 h-8 text-white' />
                  </div>
                  <div>
                    <h3 className='text-3xl font-bold text-white mb-2'>{selectedProgram.title}</h3>
                    <p className='text-white/70'>{selectedProgram.description}</p>
                  </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                  <div>
                    <h4 className='text-white font-semibold mb-6 flex items-center gap-2'>
                      <Building className='w-5 h-5 text-blue-400' />
                      Available Categories
                    </h4>
                    <div className='space-y-4'>
                      {selectedProgram.programs.map((prog, index) => (
                        <div key={index} className='bg-white/5 rounded-xl p-4'>
                          <div className='flex items-center justify-between mb-2'>
                            <h5 className='text-white font-medium'>{prog.name}</h5>
                            <span className='text-blue-400 text-sm'>{prog.timeline}</span>
                          </div>
                          <div className='text-white/60 text-sm'>
                            Requirement: <span className='text-white'>{prog.points}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className='text-white font-semibold mb-6 flex items-center gap-2'>
                      <CheckCircle className='w-5 h-5 text-red-400' />
                      Requirements
                    </h4>
                    <div className='space-y-3'>
                      {selectedProgram.requirements.map((req, index) => (
                        <div key={index} className='flex items-center gap-3'>
                          <CheckCircle className='w-5 h-5 text-emerald-400 flex-shrink-0' />
                          <span className='text-white/80 text-sm'>{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className='text-white font-semibold mb-6 flex items-center gap-2'>
                      <Star className='w-5 h-5 text-blue-400' />
                      Benefits
                    </h4>
                    <div className='space-y-3'>
                      {selectedProgram.benefits.map((benefit, index) => (
                        <div key={index} className='flex items-center gap-3'>
                          <Star className='w-5 h-5 text-blue-400 flex-shrink-0' />
                          <span className='text-white/80 text-sm'>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* States Section */}
        <section ref={statesRef} className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={statesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-center mb-20'
            >
              <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent'>
                  Popular
                </span>
                <br />
                <span className='text-white'>States</span>
              </h2>
              <p className='text-xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
                Explore top immigration destinations across America.
              </p>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
              {states.map((state, index) => (
                <motion.div
                  key={state.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={statesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  onClick={() => setSelectedState(state)}
                  className={`group cursor-pointer ${selectedState.id === state.id ? 'scale-105' : ''} transition-all duration-500`}
                >
                  <div className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border rounded-3xl p-8 h-full transition-all duration-500 ${
                    selectedState.id === state.id ? 'border-blue-500/50 shadow-lg shadow-blue-500/25' : 'border-white/10 hover:border-blue-500/30'
                  }`}>
                    <div className='w-16 h-16 bg-gradient-to-r from-blue-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
                      <MapPin className='w-8 h-8 text-white' />
                    </div>
                    <h3 className='text-xl font-bold text-white mb-4'>{state.name}</h3>
                    <p className='text-white/70 leading-relaxed mb-4'>Capital: {state.capital}</p>
                    <div className='text-blue-400 font-medium text-sm'>
                      Population: {state.population}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Selected State Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedState.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12'
              >
                <h3 className='text-3xl font-bold text-white mb-8'>{selectedState.name}</h3>
                
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                  <div className='space-y-6'>
                    <div>
                      <h4 className='text-white font-semibold mb-3'>Major Cities</h4>
                      <div className='flex flex-wrap gap-2'>
                        {selectedState.majorCities.map((city, index) => (
                          <span key={index} className='px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm'>
                            {city}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className='text-white font-semibold mb-3'>Key Industries</h4>
                      <div className='flex flex-wrap gap-2'>
                        {selectedState.keyIndustries.map((industry, index) => (
                          <span key={index} className='px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm'>
                            {industry}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className='space-y-6'>
                    <div>
                      <h4 className='text-white font-semibold mb-3'>Climate</h4>
                      <p className='text-white/70'>{selectedState.climate}</p>
                    </div>
                    
                    <div>
                      <h4 className='text-white font-semibold mb-3'>Top Attractions</h4>
                      <div className='space-y-2'>
                        {selectedState.highlights.map((highlight, index) => (
                          <div key={index} className='flex items-center gap-2'>
                            <Star className='w-4 h-4 text-blue-400' />
                            <span className='text-white/80 text-sm'>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* AI USA Services */}
        <section ref={servicesRef} className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-center mb-20'
            >
              <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent'>
                  AI USA
                </span>
                <br />
                <span className='text-white'>Services</span>
              </h2>
              <p className='text-xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
                AI-powered tools specifically designed for US immigration.
              </p>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {aiUsaServices.map((service, index) => (
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
                  <span className='text-white'>Ready for the </span>
                  <span className='bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent'>
                    American Dream
                  </span>
                  <span className='text-white'>?</span>
                </h2>
                <p className='text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed'>
                  Start your US immigration journey with AI-powered guidance and expert support.
                </p>

                <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-12'>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    className='px-10 py-5 bg-gradient-to-r from-blue-600 via-white to-red-600 rounded-full text-black font-bold text-xl shadow-2xl'
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
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Mail className='w-5 h-5' />
                    <span>usa@vanhsya.com</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <span className='text-2xl'>🦅</span>
                    <span>In God We Trust!</span>
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
