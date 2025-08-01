'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  Home,
  Shield,
  Award,
  Users,
  Globe,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Clock,
  Star,
  Calendar,
  Phone,
  Mail,
  Target,
  Zap,
  Brain,
  Bot,
  Sparkles,
  Network,
  FileText,
  Building,
  MapPin,
  Heart,
} from 'lucide-react';

// PR stats
const permanentResidenceStats = {
  totalApplications: '0',
  successRate: '88.7%',
  averageProcessing: '12-24 months',
  countriesSupported: '8+',
  pathwaysAvailable: '25+',
  citizenshipEligible: 'Yes',
  familyInclusion: '100%',
  averagePoints: '450+',
};

// PR pathways
const prPathways = [
  {
    id: 'skilled',
    title: 'Skilled Worker Programs',
    icon: Building,
    description: 'Points-based systems for skilled professionals and trades workers',
    color: 'from-blue-500 to-cyan-600',
    countries: [
      { name: 'Canada Express Entry', points: '470+', timeline: '6-8 months' },
      { name: 'Australia SkillSelect', points: '65+', timeline: '8-12 months' },
      { name: 'New Zealand SMC', points: '160+', timeline: '6-9 months' },
    ],
    requirements: [
      'University degree or trade qualification',
      'Language proficiency (IELTS/CELPIP)',
      'Work experience in eligible occupation',
      'Age under 45 (varies by country)',
      'Meet health and character requirements',
    ],
    successRate: '91.2%',
  },
  {
    id: 'investment',
    title: 'Investment & Business',
    icon: TrendingUp,
    description: 'Business ownership, investment, and entrepreneur programs',
    color: 'from-emerald-500 to-teal-600',
    countries: [
      { name: 'Canada Start-up Visa', points: 'N/A', timeline: '12-16 months' },
      { name: 'Australia Business Innovation', points: '65+', timeline: '18-24 months' },
      { name: 'Portugal Golden Visa', points: 'N/A', timeline: '6-8 months' },
    ],
    requirements: [
      'Minimum investment threshold',
      'Business experience or plan',
      'Job creation requirements',
      'Financial source verification',
      'Management experience',
    ],
    successRate: '84.3%',
  },
  {
    id: 'family',
    title: 'Family Sponsorship',
    icon: Heart,
    description: 'Sponsored by family members who are citizens or permanent residents',
    color: 'from-pink-500 to-rose-600',
    countries: [
      { name: 'Canada Family Class', points: 'N/A', timeline: '12-24 months' },
      { name: 'Australia Family Stream', points: 'N/A', timeline: '15-30 months' },
      { name: 'UK Family Route', points: 'N/A', timeline: '6-12 months' },
    ],
    requirements: [
      'Eligible sponsor relationship',
      'Sponsor financial capacity',
      'Genuine relationship evidence',
      'Health and character clearance',
      'Undertaking agreements',
    ],
    successRate: '89.6%',
  },
  {
    id: 'humanitarian',
    title: 'Humanitarian & Protection',
    icon: Shield,
    description: 'Refugee, asylum, and humanitarian protection programs',
    color: 'from-purple-500 to-indigo-600',
    countries: [
      { name: 'Canada Protected Persons', points: 'N/A', timeline: '12-20 months' },
      { name: 'Australia Humanitarian', points: 'N/A', timeline: '18-36 months' },
      { name: 'Germany Asylum', points: 'N/A', timeline: '6-18 months' },
    ],
    requirements: [
      'Protection needs assessment',
      'Country conditions evidence',
      'Personal circumstances',
      'Identity documentation',
      'Health screening',
    ],
    successRate: '76.8%',
  },
];

// AI PR services
const aiPrServices = [
  {
    icon: Brain,
    title: 'PR Pathway Optimizer',
    description: 'AI analyzes your profile to recommend the best permanent residence pathway',
    color: 'from-purple-500 to-indigo-600',
  },
  {
    icon: Target,
    title: 'Points Calculator AI',
    description: 'Smart calculation and optimization of points for maximum PR success',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: Zap,
    title: 'Timeline Predictor',
    description: 'Machine learning predicts processing times and optimal application timing',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Network,
    title: 'Document Assistant',
    description: 'AI-powered document preparation and verification for PR applications',
    color: 'from-orange-500 to-red-600',
  },
];

export default function PermanentResidencePage() {
  const [selectedPathway, setSelectedPathway] = useState(prPathways[0]);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const pathwaysRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const pathwaysInView = useInView(pathwaysRef, { once: true, amount: 0.2 });
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
      {/* AI Neural Network Background */}
      <motion.div
        style={{ y: backgroundY }}
        className='fixed inset-0 pointer-events-none'
      >
        <div className='absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/30' />
        <div className='absolute inset-0'>
          {Array.from({ length: 60 }, (_, i) => (
            <motion.div
              key={i}
              className='absolute w-1 h-1 bg-gradient-to-r from-purple-400/30 to-cyan-400/30 rounded-full'
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
      <nav className='fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-purple-500/10'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <Link href='/' className='flex items-center gap-2'>
              <div className='w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center'>
                <Bot className='w-6 h-6 text-white' />
              </div>
              <span className='text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent'>
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
                className='inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 backdrop-blur-xl mb-8'
              >
                <Home className='w-6 h-6 text-purple-400' />
                <span className='text-purple-300 font-medium'>AI-Powered Permanent Residence</span>
                <Globe className='w-6 h-6 text-cyan-400' />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                className='text-5xl md:text-7xl lg:text-8xl font-bold mb-8'
              >
                <span className='bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-pulse'>
                  Your New Home
                </span>
                <br />
                <span className='text-white'>Awaits</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className='text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-4xl mx-auto'
              >
                Secure your permanent residence with AI-powered pathway optimization and expert guidance. 
                Make your dreams of living abroad a permanent reality.
              </motion.p>

              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
                className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-12'
              >
                <div className='text-center'>
                  <div className='text-3xl md:text-4xl font-bold text-purple-400 mb-2'>
                    {permanentResidenceStats.totalApplications}
                  </div>
                  <div className='text-white/60 text-sm'>PR Applications</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl md:text-4xl font-bold text-cyan-400 mb-2'>
                    {permanentResidenceStats.successRate}
                  </div>
                  <div className='text-white/60 text-sm'>Success Rate</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl md:text-4xl font-bold text-purple-400 mb-2'>
                    {permanentResidenceStats.pathwaysAvailable}
                  </div>
                  <div className='text-white/60 text-sm'>PR Pathways</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl md:text-4xl font-bold text-cyan-400 mb-2'>
                    {permanentResidenceStats.citizenshipEligible}
                  </div>
                  <div className='text-white/60 text-sm'>Citizenship Path</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
                className='flex flex-col sm:flex-row gap-6 justify-center items-center'
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(147, 51, 234, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className='px-8 py-4 bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 rounded-full text-white font-bold text-lg shadow-2xl border border-purple-400/30'
                >
                  <span className='flex items-center gap-2'>
                    <Target className='w-6 h-6' />
                    Find My Pathway
                    <ArrowRight className='w-6 h-6' />
                  </span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white font-medium text-lg hover:bg-white/20 transition-all'
                >
                  <span className='flex items-center gap-2'>
                    <Globe className='w-6 h-6' />
                    Explore Countries
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* PR Pathways */}
        <section ref={pathwaysRef} className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={pathwaysInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-center mb-20'
            >
              <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='text-white'>PR </span>
                <span className='bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent'>
                  Pathways
                </span>
              </h2>
              <p className='text-xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
                Multiple routes to permanent residence tailored to your unique circumstances.
              </p>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
              {prPathways.map((pathway, index) => (
                <motion.div
                  key={pathway.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={pathwaysInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  onClick={() => setSelectedPathway(pathway)}
                  className={`group cursor-pointer ${selectedPathway.id === pathway.id ? 'scale-105' : ''} transition-all duration-500`}
                >
                  <div className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border rounded-3xl p-8 h-full transition-all duration-500 ${
                    selectedPathway.id === pathway.id ? 'border-purple-500/50 shadow-lg shadow-purple-500/25' : 'border-white/10 hover:border-purple-500/30'
                  }`}>
                    <div className={`w-16 h-16 bg-gradient-to-r ${pathway.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <pathway.icon className='w-8 h-8 text-white' />
                    </div>
                    <h3 className='text-xl font-bold text-white mb-4'>{pathway.title}</h3>
                    <p className='text-white/70 leading-relaxed mb-4'>{pathway.description}</p>
                    <div className='text-emerald-400 font-medium text-sm'>
                      {pathway.successRate} Success Rate
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Selected Pathway Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPathway.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12'
              >
                <div className='flex items-center gap-4 mb-8'>
                  <div className={`w-16 h-16 bg-gradient-to-r ${selectedPathway.color} rounded-2xl flex items-center justify-center`}>
                    <selectedPathway.icon className='w-8 h-8 text-white' />
                  </div>
                  <div>
                    <h3 className='text-3xl font-bold text-white mb-2'>{selectedPathway.title}</h3>
                    <p className='text-white/70'>{selectedPathway.description}</p>
                  </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                  <div>
                    <h4 className='text-white font-semibold mb-6 flex items-center gap-2'>
                      <FileText className='w-5 h-5 text-purple-400' />
                      Key Requirements
                    </h4>
                    <div className='space-y-3'>
                      {selectedPathway.requirements.map((req, index) => (
                        <div key={index} className='flex items-center gap-3'>
                          <CheckCircle className='w-5 h-5 text-emerald-400 flex-shrink-0' />
                          <span className='text-white/80'>{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className='text-white font-semibold mb-6 flex items-center gap-2'>
                      <Globe className='w-5 h-5 text-cyan-400' />
                      Available Programs
                    </h4>
                    <div className='space-y-4'>
                      {selectedPathway.countries.map((country, index) => (
                        <div key={index} className='bg-white/5 rounded-xl p-4'>
                          <div className='flex items-center justify-between mb-2'>
                            <h5 className='text-white font-medium'>{country.name}</h5>
                            <span className='text-cyan-400 text-sm'>{country.timeline}</span>
                          </div>
                          <div className='text-white/60 text-sm'>
                            Points Required: <span className='text-purple-400'>{country.points}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* AI PR Services */}
        <section ref={servicesRef} className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-center mb-20'
            >
              <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent'>
                  AI PR
                </span>
                <br />
                <span className='text-white'>Services</span>
              </h2>
              <p className='text-xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
                Advanced AI technology to optimize your permanent residence application.
              </p>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {aiPrServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className='group'
                >
                  <div className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full hover:border-purple-500/30 transition-all duration-500'>
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
                  <span className='text-white'>Ready to Make It </span>
                  <span className='bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent'>
                    Permanent
                  </span>
                  <span className='text-white'>?</span>
                </h2>
                <p className='text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed'>
                  Let our AI-powered platform find the perfect permanent residence pathway for your future.
                </p>

                <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-12'>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(147, 51, 234, 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    className='px-10 py-5 bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 rounded-full text-white font-bold text-xl shadow-2xl border border-purple-400/30'
                  >
                    <span className='flex items-center gap-3'>
                      <Target className='w-6 h-6' />
                      Find My Pathway
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
                      PR Consultation
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
                    <span>pr@vanhsya.com</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Shield className='w-5 h-5' />
                    <span>Lifetime Support</span>
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
