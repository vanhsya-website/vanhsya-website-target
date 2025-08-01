'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  MapPin,
  Users,
  Award,
  ArrowRight,
  CheckCircle,
  Globe,
  Clock,
  Star,
  Calendar,
  Building,
  GraduationCap,
  Briefcase,
  Heart,
  Shield,
  Zap,
  FileText,
  Phone,
  Calculator,
  ChevronDown,
  ChevronUp,
  Gift,
  CreditCard,
  Trophy,
  UserPlus,
  Percent,
  Wallet,
  Crown,
  Home,
  ArrowLeft,
  Menu,
  X,
  Bot,
  Cpu,
  Brain,
  Sparkles,
  TrendingUp,
  Target,
  Database,
  Network,
  Layers,
  Mail,
} from 'lucide-react';

// Multi-language support
const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
];

const workVisaStats = {
  totalApplications: '0',
  successRate: '94.2%',
  averageProcessing: '6-12 weeks',
  countriesSupported: '8+',
  expertConsultants: '50+',
  globalOffices: '12',
  clientSatisfaction: '98.7%',
  fastTrackAvailable: 'Yes',
};

const countries = [
  {
    id: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    capital: 'Ottawa',
    currency: 'CAD',
    averageSalary: 'CAD 55,000',
    programs: [
      {
        name: 'Express Entry',
        category: 'Federal Skilled Worker',
        processingTime: '6-8 months',
        successRate: 94.5,
        minCRS: 470,
        requirements: [
          'Bachelor\'s degree or equivalent',
          'IELTS 6.0+ in all bands',
          'Minimum 1 year skilled work experience',
          'NOC skill level A, B, or 0',
        ],
      },
      {
        name: 'Provincial Nominee Program',
        category: 'Provincial nomination',
        processingTime: '8-12 months',
        successRate: 91.2,
        minCRS: 'Varies by province',
        requirements: [
          'Provincial nomination certificate',
          'Meet provincial criteria',
          'Job offer (preferred)',
          'Language proficiency',
        ],
      },
    ],
    highlights: [
      'Universal healthcare system',
      'Pathway to permanent residence',
      'High quality of life',
      'Multicultural society',
      'Strong social safety net',
    ],
    workRights: 'Full work authorization',
    pathwayToPR: 'Direct pathway available',
    color: 'from-red-500 to-red-600',
  },
  {
    id: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    capital: 'Canberra',
    currency: 'AUD',
    averageSalary: 'AUD 70,000',
    programs: [
      {
        name: 'Skilled Independent (189)',
        category: 'Points-based system',
        processingTime: '8-15 months',
        successRate: 89.7,
        minPoints: 65,
        requirements: [
          'Skills assessment',
          'IELTS 6.0+ or equivalent',
          'Age under 45',
          'Occupation on skilled list',
        ],
      },
      {
        name: 'Employer Sponsored (186)',
        category: 'Employer nomination',
        processingTime: '6-10 months',
        successRate: 92.1,
        minPoints: 'No points test',
        requirements: [
          'Employer nomination',
          'Skills assessment',
          'English proficiency',
          'Work experience',
        ],
      },
    ],
    highlights: [
      'High standard of living',
      'Points-based immigration',
      'Strong job market',
      'Excellent climate',
      'Modern infrastructure',
    ],
    workRights: 'Full work authorization',
    pathwayToPR: 'Points-based system',
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    capital: 'London',
    currency: 'GBP',
    averageSalary: 'GBP 31,000',
    programs: [
      {
        name: 'Skilled Worker Visa',
        category: 'Employer sponsored',
        processingTime: '3-8 weeks',
        successRate: 87.3,
        minSalary: 'GBP 25,600',
        requirements: [
          'Job offer from UK employer',
          'Certificate of Sponsorship',
          'English level B1+',
          'Minimum salary threshold',
        ],
      },
      {
        name: 'Global Talent Visa',
        category: 'Exceptional talent',
        processingTime: '3-8 weeks',
        successRate: 91.8,
        minSalary: 'No minimum',
        requirements: [
          'Exceptional talent endorsement',
          'Leader in technology/arts/research',
          'Proven track record',
          'English proficiency',
        ],
      },
    ],
    highlights: [
      'Global financial hub',
      'World-class education',
      'Rich cultural heritage',
      'NHS healthcare system',
      'Strategic location',
    ],
    workRights: 'Full work authorization',
    pathwayToPR: 'Settlement after 5 years',
    color: 'from-blue-600 to-indigo-600',
  },
  {
    id: 'usa',
    name: 'United States',
    flag: '🇺🇸',
    capital: 'Washington D.C.',
    currency: 'USD',
    averageSalary: 'USD 65,000',
    programs: [
      {
        name: 'H-1B Specialty Occupation',
        category: 'Employer petition',
        processingTime: '2-6 months',
        successRate: 84.2,
        minDegree: 'Bachelor\'s required',
        requirements: [
          'Bachelor\'s degree or higher',
          'Specialty occupation',
          'Employer petition',
          'Labor condition application',
        ],
      },
      {
        name: 'L-1 Intracompany Transfer',
        category: 'Internal transfer',
        processingTime: '2-4 months',
        successRate: 91.5,
        minExperience: '1 year abroad',
        requirements: [
          '1 year with foreign company',
          'Managerial/executive role',
          'Related company in US',
          'Qualifying relationship',
        ],
      },
    ],
    highlights: [
      'World\'s largest economy',
      'Innovation ecosystem',
      'Career opportunities',
      'Educational excellence',
      'Cultural diversity',
    ],
    workRights: 'Authorized for specific employer',
    pathwayToPR: 'Green card sponsorship available',
    color: 'from-blue-700 to-blue-800',
  },
  {
    id: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    capital: 'Berlin',
    currency: 'EUR',
    averageSalary: 'EUR 47,000',
    programs: [
      {
        name: 'EU Blue Card',
        category: 'Highly skilled workers',
        processingTime: '2-4 months',
        successRate: 93.1,
        minSalary: 'EUR 56,400',
        requirements: [
          'University degree',
          'Job offer in Germany',
          'Minimum salary threshold',
          'Health insurance',
        ],
      },
      {
        name: 'Skilled Immigration Act',
        category: 'Skilled workers',
        processingTime: '3-6 months',
        successRate: 88.7,
        minQualification: 'Vocational training',
        requirements: [
          'Recognized qualification',
          'Job offer or job search',
          'German language skills',
          'Financial resources',
        ],
      },
    ],
    highlights: [
      'Strongest EU economy',
      'Work-life balance',
      'Free higher education',
      'Central European location',
      'High social security',
    ],
    workRights: 'Full work authorization',
    pathwayToPR: 'Settlement permit after 5 years',
    color: 'from-gray-600 to-gray-700',
  },
  {
    id: 'singapore',
    name: 'Singapore',
    flag: '🇸🇬',
    capital: 'Singapore',
    currency: 'SGD',
    averageSalary: 'SGD 55,000',
    programs: [
      {
        name: 'Employment Pass',
        category: 'Professionals/managers',
        processingTime: '3-8 weeks',
        successRate: 89.3,
        minSalary: 'SGD 5,000',
        requirements: [
          'Monthly salary SGD 5,000+',
          'University degree',
          'Relevant work experience',
          'Acceptable qualifications',
        ],
      },
      {
        name: 'Tech.Pass',
        category: 'Tech professionals',
        processingTime: '4-8 weeks',
        successRate: 85.6,
        minSalary: 'SGD 25,000',
        requirements: [
          'Fixed monthly salary SGD 25,000+',
          'Tech sector experience',
          'Leadership/expertise',
          'Innovation contribution',
        ],
      },
    ],
    highlights: [
      'Global financial hub',
      'Strategic Asian location',
      'Excellent infrastructure',
      'Low tax rates',
      'Multicultural society',
    ],
    workRights: 'Full work authorization',
    pathwayToPR: 'Permanent residence available',
    color: 'from-emerald-500 to-emerald-600',
  },
];

const aiFeatures = [
  {
    icon: Brain,
    title: 'AI-Powered Assessment',
    description: 'Advanced algorithms analyze your profile for optimal country matching',
    color: 'from-purple-500 to-indigo-600',
  },
  {
    icon: Bot,
    title: 'Smart Documentation',
    description: 'AI assists in document preparation and verification processes',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: Cpu,
    title: 'Predictive Analytics',
    description: 'Machine learning predicts success rates and processing times',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Network,
    title: 'Intelligent Matching',
    description: 'Neural networks match you with the best visa programs',
    color: 'from-orange-500 to-red-600',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'AI Profile Analysis',
    description: 'Our advanced AI algorithms analyze your complete profile, work experience, education, and goals to identify the best work visa opportunities across multiple countries.',
    aiFeature: 'Neural network assessment',
    duration: '15 minutes',
    icon: Brain,
  },
  {
    step: '02',
    title: 'Smart Country Matching',
    description: 'Intelligent matching system compares your profile against visa requirements and success rates to recommend the optimal destination countries.',
    aiFeature: 'Predictive modeling',
    duration: '1-2 days',
    icon: Globe,
  },
  {
    step: '03',
    title: 'Automated Documentation',
    description: 'AI-powered document preparation system guides you through required paperwork, ensuring completeness and compliance with immigration standards.',
    aiFeature: 'Document verification',
    duration: '1-2 weeks',
    icon: FileText,
  },
  {
    step: '04',
    title: 'Application Optimization',
    description: 'Machine learning algorithms optimize your application for maximum success probability, identifying potential issues before submission.',
    aiFeature: 'Success optimization',
    duration: '3-5 days',
    icon: Target,
  },
  {
    step: '05',
    title: 'Real-time Tracking',
    description: 'AI monitoring system tracks your application status across multiple touchpoints, providing real-time updates and next-step recommendations.',
    aiFeature: 'Status monitoring',
    duration: 'Ongoing',
    icon: Zap,
  },
];

export default function WorkVisaPage() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [expandedProgram, setExpandedProgram] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState('overview');
  
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const countriesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const aiRef = useRef<HTMLDivElement>(null);
  
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const countriesInView = useInView(countriesRef, { once: true, amount: 0.2 });
  const processInView = useInView(processRef, { once: true, amount: 0.2 });
  const aiInView = useInView(aiRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const aiY = useTransform(scrollYProgress, [0.2, 0.8], [-50, 50]);

  // Smooth scroll navigation
  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement | null>) => {
    sectionRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  // Auto-scroll through countries
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedCountry(prev => {
        const currentIndex = countries.findIndex(c => c.id === prev.id);
        const nextIndex = (currentIndex + 1) % countries.length;
        return countries[nextIndex];
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
        {/* Cosmic gradient */}
        <div className='absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/30' />
        
        {/* Neural network particles */}
        <div className='absolute inset-0'>
          {Array.from({ length: 100 }, (_, i) => (
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

        {/* AI aurora effect */}
        <div className='absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-cyan-500/5 animate-pulse' />
        
        {/* Floating geometric shapes */}
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className='absolute w-4 h-4 border border-purple-400/20 rotate-45'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              rotate: [45, 225, 45],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
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
              <button
                onClick={() => scrollToSection(heroRef)}
                className='text-white/80 hover:text-white transition-colors'
              >
                Overview
              </button>
              <button
                onClick={() => scrollToSection(countriesRef)}
                className='text-white/80 hover:text-white transition-colors'
              >
                Countries
              </button>
              <button
                onClick={() => scrollToSection(aiRef)}
                className='text-white/80 hover:text-white transition-colors'
              >
                AI Features
              </button>
              <button
                onClick={() => scrollToSection(processRef)}
                className='text-white/80 hover:text-white transition-colors'
              >
                Process
              </button>
            </div>

            <div className='flex items-center gap-4'>
              <select
                title="Select Language"
                value={selectedLanguage.code}
                onChange={(e) => {
                  const lang = languages.find(l => l.code === e.target.value);
                  if (lang) setSelectedLanguage(lang);
                }}
                className='bg-white/10 border border-white/20 rounded-lg px-3 py-1 text-sm text-white'
              >
                {languages.map(lang => (
                  <option key={lang.code} value={lang.code} className='bg-black text-white'>
                    {lang.flag} {lang.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </nav>

      <div className='relative z-10'>
        {/* Hero Section */}
        <section ref={heroRef} className='min-h-screen flex items-center justify-center relative'>
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
                <Brain className='w-6 h-6 text-purple-400' />
                <span className='text-purple-300 font-medium'>AI-Powered Work Visa Solutions</span>
                <Sparkles className='w-6 h-6 text-cyan-400' />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                className='text-5xl md:text-7xl lg:text-8xl font-bold mb-8'
              >
                <span className='bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-pulse'>
                  Global Work
                </span>
                <br />
                <span className='text-white'>
                  Migration AI
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className='text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-4xl mx-auto'
              >
                Experience the future of immigration with our revolutionary AI-powered platform. 
                Smart matching, predictive analytics, and automated processes for your global career journey.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
                className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-16'
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(147, 51, 234, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(aiRef)}
                  className='px-8 py-4 bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 rounded-full text-white font-bold text-lg shadow-2xl border border-purple-400/30'
                >
                  <span className='flex items-center gap-2'>
                    <Brain className='w-6 h-6' />
                    Start AI Assessment
                    <ArrowRight className='w-6 h-6' />
                  </span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(countriesRef)}
                  className='px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white font-medium text-lg hover:bg-white/20 transition-all'
                >
                  <span className='flex items-center gap-2'>
                    <Globe className='w-6 h-6' />
                    Explore Countries
                  </span>
                </motion.button>
              </motion.div>

              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
                className='grid grid-cols-2 md:grid-cols-4 gap-8'
              >
                <div className='text-center'>
                  <div className='text-3xl md:text-4xl font-bold text-purple-400 mb-2'>
                    {workVisaStats.totalApplications}
                  </div>
                  <div className='text-white/60 text-sm'>Applications Processed</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl md:text-4xl font-bold text-cyan-400 mb-2'>
                    {workVisaStats.successRate}
                  </div>
                  <div className='text-white/60 text-sm'>Success Rate</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl md:text-4xl font-bold text-purple-400 mb-2'>
                    {workVisaStats.countriesSupported}
                  </div>
                  <div className='text-white/60 text-sm'>Countries</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl md:text-4xl font-bold text-cyan-400 mb-2'>
                    {workVisaStats.clientSatisfaction}
                  </div>
                  <div className='text-white/60 text-sm'>Client Satisfaction</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className='flex flex-col items-center gap-2 text-white/60'
            >
              <span className='text-sm'>Scroll to explore</span>
              <ChevronDown className='w-6 h-6' />
            </motion.div>
          </motion.div>
        </section>

        {/* AI Features Section */}
        <section ref={aiRef} className='py-32 relative'>
          <motion.div
            style={{ y: aiY }}
            className='container mx-auto px-4 sm:px-6 lg:px-8'
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={aiInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-center mb-20'
            >
              <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 text-purple-300 font-medium text-sm mb-6'>
                <Cpu className='w-4 h-4' />
                AI Technology
              </div>
              <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent'>
                  Intelligent Migration
                </span>
                <br />
                <span className='text-white'>Technology</span>
              </h2>
              <p className='text-xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
                Harness the power of artificial intelligence to revolutionize your work visa journey with predictive analytics and smart automation.
              </p>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {aiFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={aiInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className='group'
                >
                  <div className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full hover:border-purple-500/30 transition-all duration-500'>
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className='w-8 h-8 text-white' />
                    </div>
                    <h3 className='text-xl font-bold text-white mb-4'>{feature.title}</h3>
                    <p className='text-white/70 leading-relaxed'>{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Countries Section */}
        <section ref={countriesRef} className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={countriesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-center mb-20'
            >
              <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='text-white'>Global </span>
                <span className='bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent'>
                  Opportunities
                </span>
              </h2>
              <p className='text-xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
                Explore work visa opportunities across top destinations with AI-powered matching and success prediction.
              </p>
            </motion.div>

            {/* Country Selection Tabs */}
            <div className='flex flex-wrap justify-center gap-4 mb-16'>
              {countries.map((country, index) => (
                <motion.button
                  key={country.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={countriesInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setSelectedCountry(country)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCountry.id === country.id
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg'
                      : 'bg-white/10 backdrop-blur-xl border border-white/20 text-white/80 hover:bg-white/20'
                  }`}
                >
                  <span className='text-2xl'>{country.flag}</span>
                  <span>{country.name}</span>
                </motion.button>
              ))}
            </div>

            {/* Selected Country Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCountry.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12'
              >
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                  {/* Country Info */}
                  <div>
                    <div className='flex items-center gap-4 mb-8'>
                      <span className='text-6xl'>{selectedCountry.flag}</span>
                      <div>
                        <h3 className='text-3xl font-bold text-white mb-2'>{selectedCountry.name}</h3>
                        <p className='text-white/70'>Capital: {selectedCountry.capital}</p>
                      </div>
                    </div>

                    <div className='grid grid-cols-2 gap-6 mb-8'>
                      <div className='bg-white/5 rounded-2xl p-4'>
                        <div className='flex items-center gap-2 mb-2'>
                          <Wallet className='w-5 h-5 text-emerald-400' />
                          <span className='text-white/70 text-sm'>Average Salary</span>
                        </div>
                        <span className='text-white font-semibold'>{selectedCountry.averageSalary}</span>
                      </div>
                      <div className='bg-white/5 rounded-2xl p-4'>
                        <div className='flex items-center gap-2 mb-2'>
                          <Shield className='w-5 h-5 text-blue-400' />
                          <span className='text-white/70 text-sm'>Work Rights</span>
                        </div>
                        <span className='text-white font-semibold text-sm'>{selectedCountry.workRights}</span>
                      </div>
                    </div>

                    <div className='mb-8'>
                      <h4 className='text-white font-semibold mb-4 flex items-center gap-2'>
                        <Star className='w-5 h-5 text-yellow-400' />
                        Key Highlights
                      </h4>
                      <div className='space-y-3'>
                        {selectedCountry.highlights.map((highlight, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className='flex items-center gap-3'
                          >
                            <CheckCircle className='w-5 h-5 text-emerald-400 flex-shrink-0' />
                            <span className='text-white/80'>{highlight}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Programs */}
                  <div>
                    <h4 className='text-white font-semibold mb-6 flex items-center gap-2'>
                      <Briefcase className='w-5 h-5 text-purple-400' />
                      Available Programs
                    </h4>
                    <div className='space-y-4'>
                      {selectedCountry.programs.map((program, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className='bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300'
                        >
                          <div className='flex items-center justify-between mb-4'>
                            <h5 className='text-lg font-semibold text-white'>{program.name}</h5>
                            <span className='text-xs px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full'>
                              {program.category}
                            </span>
                          </div>
                          
                          <div className='grid grid-cols-2 gap-4 mb-4'>
                            <div>
                              <span className='text-white/60 text-sm'>Processing Time</span>
                              <div className='text-white font-medium'>{program.processingTime}</div>
                            </div>
                            <div>
                              <span className='text-white/60 text-sm'>Success Rate</span>
                              <div className='text-emerald-400 font-medium'>{program.successRate}%</div>
                            </div>
                          </div>

                          <button
                            onClick={() => setExpandedProgram(expandedProgram === `${selectedCountry.id}-${index}` ? null : `${selectedCountry.id}-${index}`)}
                            className='flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors'
                          >
                            <span>View Requirements</span>
                            {expandedProgram === `${selectedCountry.id}-${index}` ? (
                              <ChevronUp className='w-4 h-4' />
                            ) : (
                              <ChevronDown className='w-4 h-4' />
                            )}
                          </button>

                          <AnimatePresence>
                            {expandedProgram === `${selectedCountry.id}-${index}` && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className='mt-4 space-y-2'
                              >
                                {program.requirements.map((req, reqIndex) => (
                                  <div key={reqIndex} className='flex items-center gap-2 text-sm text-white/70'>
                                    <CheckCircle className='w-4 h-4 text-emerald-400 flex-shrink-0' />
                                    <span>{req}</span>
                                  </div>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Process Section */}
        <section ref={processRef} className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-center mb-20'
            >
              <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent'>
                  AI-Powered
                </span>
                <br />
                <span className='text-white'>Process</span>
              </h2>
              <p className='text-xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
                Experience our revolutionary 5-step AI-driven process that maximizes your work visa success rate.
              </p>
            </motion.div>

            <div className='space-y-12'>
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  animate={processInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex items-center gap-12 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
                >
                  <div className='flex-1'>
                    <div className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition-all duration-500'>
                      <div className='flex items-center gap-4 mb-6'>
                        <div className='w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center'>
                          <span className='text-white font-bold text-xl'>{step.step}</span>
                        </div>
                        <div>
                          <h3 className='text-2xl font-bold text-white mb-1'>{step.title}</h3>
                          <div className='flex items-center gap-2 text-purple-400 text-sm'>
                            <Bot className='w-4 h-4' />
                            <span>{step.aiFeature}</span>
                          </div>
                        </div>
                      </div>
                      <p className='text-white/80 leading-relaxed mb-4'>{step.description}</p>
                      <div className='flex items-center gap-2 text-cyan-400 text-sm'>
                        <Clock className='w-4 h-4' />
                        <span>Duration: {step.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className='w-24 h-24 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full flex items-center justify-center border border-purple-500/30'>
                    <step.icon className='w-12 h-12 text-purple-400' />
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
                    Transform
                  </span>
                  <br />
                  <span className='text-white'>Your Career?</span>
                </h2>
                <p className='text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed'>
                  Let our AI-powered platform analyze your profile and match you with the perfect work visa opportunity. 
                  Start your global career journey today.
                </p>

                <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-12'>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(147, 51, 234, 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    className='px-10 py-5 bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 rounded-full text-white font-bold text-xl shadow-2xl border border-purple-400/30'
                  >
                    <span className='flex items-center gap-3'>
                      <Brain className='w-6 h-6' />
                      Start AI Assessment
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
                      Book Consultation
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
                    <span>ai@vanhsya.com</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Shield className='w-5 h-5' />
                    <span>100% Secure & Confidential</span>
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
