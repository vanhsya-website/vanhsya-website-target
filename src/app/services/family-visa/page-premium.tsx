'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  Heart,
  Users,
  Home,
  Baby,
  UserPlus,
  Shield,
  Award,
  ArrowRight,
  CheckCircle,
  Clock,
  Star,
  Calendar,
  Phone,
  Mail,
  Globe,
  Target,
  Zap,
  Brain,
  Bot,
  Sparkles,
  Network,
  FileText,
  Building,
} from 'lucide-react';

// Family visa stats
const familyVisaStats = {
  totalApplications: '0',
  successRate: '93.5%',
  averageProcessing: '6-18 months',
  familyTypesSupported: '15+',
  reunificationRate: '89.2%',
  averageWaitTime: '8-12 months',
  appealSuccessRate: '76.8%',
  childrenReunited: '2500+',
};

// Family visa categories
const familyVisaCategories = [
  {
    id: 'spouse',
    title: 'Spouse & Partner Visas',
    icon: Heart,
    description: 'Reunite with your married partner or long-term relationship partner',
    color: 'from-pink-500 to-rose-600',
    requirements: [
      'Valid marriage certificate or proof of relationship',
      'Financial sponsorship requirements',
      'English language proficiency (if required)',
      'Character and health assessments',
      'Genuine relationship evidence',
    ],
    processingTime: '6-12 months',
    successRate: '94.8%',
  },
  {
    id: 'children',
    title: 'Child & Dependent Visas',
    icon: Baby,
    description: 'Bring your children and dependent family members',
    color: 'from-blue-500 to-cyan-600',
    requirements: [
      'Birth certificates and custody documents',
      'Proof of dependency',
      'Sponsor relationship evidence',
      'Financial support documentation',
      'Best interests of child assessment',
    ],
    processingTime: '4-8 months',
    successRate: '91.2%',
  },
  {
    id: 'parents',
    title: 'Parent & Grandparent Visas',
    icon: Users,
    description: 'Sponsor your parents and grandparents for family reunification',
    color: 'from-emerald-500 to-teal-600',
    requirements: [
      'Proof of family relationship',
      'Financial undertaking',
      'Health insurance arrangements',
      'No other family in home country',
      'Long-term financial commitment',
    ],
    processingTime: '12-24 months',
    successRate: '87.3%',
  },
  {
    id: 'other',
    title: 'Other Family Members',
    icon: UserPlus,
    description: 'Sponsor siblings, relatives, and other eligible family members',
    color: 'from-purple-500 to-indigo-600',
    requirements: [
      'Proof of family connection',
      'Sponsor eligibility criteria',
      'No other family support available',
      'Financial and accommodation arrangements',
      'Compelling and compassionate circumstances',
    ],
    processingTime: '18-36 months',
    successRate: '78.9%',
  },
];

// Country-specific family visa programs
const countryPrograms = [
  {
    id: 'canada',
    country: 'Canada',
    flag: '🇨🇦',
    color: 'from-red-500 to-red-600',
    programs: [
      {
        name: 'Family Class Sponsorship',
        description: 'Sponsor spouse, children, parents, and grandparents',
        timeline: '6-24 months',
        requirements: [
          'Canadian citizen or permanent resident',
          'Meet minimum income requirements',
          'Sign undertaking agreement',
          'Pass medical and security checks',
        ],
      },
    ],
  },
  {
    id: 'australia',
    country: 'Australia',
    flag: '🇦🇺',
    color: 'from-blue-500 to-blue-600',
    programs: [
      {
        name: 'Family Stream Migration',
        description: 'Partner, child, parent, and other family visas',
        timeline: '8-18 months',
        requirements: [
          'Sponsorship by eligible relative',
          'Meet health and character requirements',
          'Adequate financial support arrangements',
          'English language requirements (some visas)',
        ],
      },
    ],
  },
  {
    id: 'uk',
    country: 'United Kingdom',
    flag: '🇬🇧',
    color: 'from-blue-600 to-indigo-600',
    programs: [
      {
        name: 'Family Route Visas',
        description: 'Spouse, civil partner, fiancé, and dependent visas',
        timeline: '6-12 months',
        requirements: [
          'British citizen or settled person sponsor',
          'Minimum income threshold £18,600',
          'English language requirement',
          'Genuine and subsisting relationship',
        ],
      },
    ],
  },
];

// AI-powered family services
const aiFamilyServices = [
  {
    icon: Brain,
    title: 'Relationship Assessment AI',
    description: 'Advanced analysis of relationship evidence and documentation strength',
    color: 'from-purple-500 to-indigo-600',
  },
  {
    icon: Target,
    title: 'Timeline Optimizer',
    description: 'Smart planning to minimize separation time and maximize success probability',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: Shield,
    title: 'Document Validator',
    description: 'AI-powered verification of family documents and evidence requirements',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Network,
    title: 'Family Matching',
    description: 'Connect with families who have successful reunification experiences',
    color: 'from-orange-500 to-red-600',
  },
];

export default function FamilyVisaPage() {
  const [selectedCategory, setSelectedCategory] = useState(familyVisaCategories[0]);
  const [selectedCountry, setSelectedCountry] = useState(countryPrograms[0]);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const programsRef = useRef<HTMLDivElement>(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const categoriesInView = useInView(categoriesRef, { once: true, amount: 0.2 });
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 });
  const programsInView = useInView(programsRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  // Auto-rotate categories
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedCategory(prev => {
        const currentIndex = familyVisaCategories.findIndex(c => c.id === prev.id);
        const nextIndex = (currentIndex + 1) % familyVisaCategories.length;
        return familyVisaCategories[nextIndex];
      });
    }, 8000);
    return () => clearInterval(interval);
  }, []);

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
                <Heart className='w-6 h-6 text-purple-400' />
                <span className='text-purple-300 font-medium'>AI-Powered Family Reunification</span>
                <Users className='w-6 h-6 text-cyan-400' />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                className='text-5xl md:text-7xl lg:text-8xl font-bold mb-8'
              >
                <span className='bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-pulse'>
                  Family First
                </span>
                <br />
                <span className='text-white'>Reunification AI</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className='text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-4xl mx-auto'
              >
                Reunite with your loved ones using our AI-powered family visa solutions. 
                Smart planning, faster processing, and successful family reunification.
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
                    {familyVisaStats.totalApplications}
                  </div>
                  <div className='text-white/60 text-sm'>Families Reunited</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl md:text-4xl font-bold text-cyan-400 mb-2'>
                    {familyVisaStats.successRate}
                  </div>
                  <div className='text-white/60 text-sm'>Success Rate</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl md:text-4xl font-bold text-purple-400 mb-2'>
                    {familyVisaStats.familyTypesSupported}
                  </div>
                  <div className='text-white/60 text-sm'>Family Types</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl md:text-4xl font-bold text-cyan-400 mb-2'>
                    {familyVisaStats.averageWaitTime}
                  </div>
                  <div className='text-white/60 text-sm'>Average Timeline</div>
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
                    <Heart className='w-6 h-6' />
                    Start Reunification
                    <ArrowRight className='w-6 h-6' />
                  </span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white font-medium text-lg hover:bg-white/20 transition-all'
                >
                  <span className='flex items-center gap-2'>
                    <Users className='w-6 h-6' />
                    Family Assessment
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Family Visa Categories */}
        <section ref={categoriesRef} className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={categoriesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-center mb-20'
            >
              <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='text-white'>Family Visa </span>
                <span className='bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent'>
                  Categories
                </span>
              </h2>
              <p className='text-xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
                Comprehensive family reunification options for every relationship type.
              </p>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {familyVisaCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={categoriesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`group cursor-pointer ${selectedCategory.id === category.id ? 'scale-105' : ''} transition-all duration-500`}
                >
                  <div className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border rounded-3xl p-8 h-full transition-all duration-500 ${
                    selectedCategory.id === category.id ? 'border-purple-500/50 shadow-lg shadow-purple-500/25' : 'border-white/10 hover:border-purple-500/30'
                  }`}>
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className='w-8 h-8 text-white' />
                    </div>
                    <h3 className='text-xl font-bold text-white mb-4'>{category.title}</h3>
                    <p className='text-white/70 leading-relaxed mb-6'>{category.description}</p>
                    
                    <div className='space-y-2 mb-4'>
                      <div className='flex items-center justify-between text-sm'>
                        <span className='text-white/60'>Processing Time:</span>
                        <span className='text-cyan-400 font-medium'>{category.processingTime}</span>
                      </div>
                      <div className='flex items-center justify-between text-sm'>
                        <span className='text-white/60'>Success Rate:</span>
                        <span className='text-emerald-400 font-medium'>{category.successRate}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Family Services */}
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
                  AI Family
                </span>
                <br />
                <span className='text-white'>Services</span>
              </h2>
              <p className='text-xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
                Advanced AI technology to optimize your family reunification journey.
              </p>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {aiFamilyServices.map((service, index) => (
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
                  <span className='text-white'>Ready to </span>
                  <span className='bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent'>
                    Reunite
                  </span>
                  <br />
                  <span className='text-white'>Your Family?</span>
                </h2>
                <p className='text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed'>
                  Let our AI-powered platform guide you through the family visa process and bring your loved ones home.
                </p>

                <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-12'>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(147, 51, 234, 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    className='px-10 py-5 bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 rounded-full text-white font-bold text-xl shadow-2xl border border-purple-400/30'
                  >
                    <span className='flex items-center gap-3'>
                      <Heart className='w-6 h-6' />
                      Start Assessment
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
                      Family Consultation
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
                    <span>family@vanhsya.com</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Shield className='w-5 h-5' />
                    <span>Confidential & Secure</span>
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
