'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  Building,
  TrendingUp,
  DollarSign,
  Globe,
  Users,
  Award,
  ArrowRight,
  CheckCircle,
  Clock,
  Star,
  Calculator,
  Phone,
  Mail,
  Briefcase,
  Target,
  Zap,
  Brain,
  Bot,
  Sparkles,
  Shield,
  Network,
  ChevronDown,
  ChevronUp,
  MapPin,
  Calendar,
  FileText,
} from 'lucide-react';

// Business visa stats
const businessVisaStats = {
  totalApplications: '0',
  successRate: '91.8%',
  averageProcessing: '8-16 months',
  countriesSupported: '12+',
  minInvestment: '$50,000',
  maxInvestment: '$5M+',
  averageROI: '15-25%',
  jobsCreated: '1000+',
};

// Investment programs by country
const investmentPrograms = [
  {
    id: 'canada',
    country: 'Canada',
    flag: '🇨🇦',
    color: 'from-red-500 to-red-600',
    programs: [
      {
        name: 'Start-up Visa Program',
        investment: '$200,000 - $1,200,000',
        timeline: '12-16 months',
        successRate: 89.2,
        requirements: [
          'Qualifying business from designated organization',
          'Meet language requirements',
          'Sufficient settlement funds',
          'Pass medical and security checks',
        ],
        benefits: [
          'Pathway to permanent residence',
          'Access to universal healthcare',
          'World-class education system',
          'Business-friendly environment',
        ],
      },
      {
        name: 'Self-employed Persons Program',
        investment: '$100,000 - $500,000',
        timeline: '18-24 months',
        successRate: 85.7,
        requirements: [
          'Self-employment experience',
          'Intention to be self-employed',
          'Meet selection criteria',
          'Contribute to Canadian economy',
        ],
        benefits: [
          'Permanent residence eligibility',
          'Family inclusion in application',
          'No job offer required',
          'Cultural/agricultural focus',
        ],
      },
    ],
  },
  {
    id: 'usa',
    country: 'United States',
    flag: '🇺🇸',
    color: 'from-blue-600 to-blue-700',
    programs: [
      {
        name: 'EB-5 Investor Visa',
        investment: '$800,000 - $1,050,000',
        timeline: '24-36 months',
        successRate: 82.4,
        requirements: [
          'Minimum investment amount',
          'Create 10 full-time jobs',
          'Lawful source of funds',
          'Active management role',
        ],
        benefits: [
          'Green card eligibility',
          'Family inclusion',
          'Path to citizenship',
          'Business ownership',
        ],
      },
      {
        name: 'E-2 Treaty Investor',
        investment: '$50,000 - $200,000',
        timeline: '3-6 months',
        successRate: 88.9,
        requirements: [
          'Treaty country nationality',
          'Substantial investment',
          'Control of enterprise',
          'Develop and direct business',
        ],
        benefits: [
          'Renewable visa status',
          'Spouse work authorization',
          'Multiple entry permitted',
          'Fast processing times',
        ],
      },
    ],
  },
  {
    id: 'uk',
    country: 'United Kingdom',
    flag: '🇬🇧',
    color: 'from-blue-700 to-indigo-700',
    programs: [
      {
        name: 'Innovator Founder Visa',
        investment: '£50,000+',
        timeline: '8-12 months',
        successRate: 90.1,
        requirements: [
          'Innovative business idea',
          'Endorsement from approved body',
          'English language proficiency',
          'Maintenance funds',
        ],
        benefits: [
          'Settlement eligibility after 3 years',
          'Bring family members',
          'Work only on endorsed business',
          'Switch to other visa categories',
        ],
      },
    ],
  },
  {
    id: 'australia',
    country: 'Australia',
    flag: '🇦🇺',
    color: 'from-emerald-500 to-emerald-600',
    programs: [
      {
        name: 'Business Innovation (188A)',
        investment: 'AUD $1.25M+',
        timeline: '12-18 months',
        successRate: 86.3,
        requirements: [
          'Points test (65+ points)',
          'Business experience',
          'Net business assets',
          'Age under 55',
        ],
        benefits: [
          'Pathway to permanent residence',
          'Include family in application',
          'Access to Medicare',
          'Business establishment support',
        ],
      },
    ],
  },
];

// AI-powered business services
const aiBusinessServices = [
  {
    icon: Brain,
    title: 'AI Business Plan Generator',
    description: 'Advanced algorithms create comprehensive business plans tailored to visa requirements',
    color: 'from-purple-500 to-indigo-600',
  },
  {
    icon: Calculator,
    title: 'Investment Calculator',
    description: 'Smart ROI predictions and investment optimization for maximum visa success',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: Target,
    title: 'Market Analysis AI',
    description: 'Deep market insights and opportunity analysis for business establishment',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Network,
    title: 'Business Matching',
    description: 'AI connects you with local partners, investors, and business opportunities',
    color: 'from-orange-500 to-red-600',
  },
];

export default function BusinessVisaPage() {
  const [selectedCountry, setSelectedCountry] = useState(investmentPrograms[0]);
  const [expandedProgram, setExpandedProgram] = useState<string | null>(null);
  
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

  // Auto-rotate countries
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedCountry(prev => {
        const currentIndex = investmentPrograms.findIndex(c => c.id === prev.id);
        const nextIndex = (currentIndex + 1) % investmentPrograms.length;
        return investmentPrograms[nextIndex];
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
                <Building className='w-6 h-6 text-purple-400' />
                <span className='text-purple-300 font-medium'>AI-Powered Business Visas</span>
                <TrendingUp className='w-6 h-6 text-cyan-400' />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                className='text-5xl md:text-7xl lg:text-8xl font-bold mb-8'
              >
                <span className='bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-pulse'>
                  Global Business
                </span>
                <br />
                <span className='text-white'>Investment AI</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className='text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-4xl mx-auto'
              >
                Transform your entrepreneurial vision into international success with AI-powered business visa solutions 
                and investment optimization.
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
                    {businessVisaStats.totalApplications}
                  </div>
                  <div className='text-white/60 text-sm'>Applications Processed</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl md:text-4xl font-bold text-cyan-400 mb-2'>
                    {businessVisaStats.successRate}
                  </div>
                  <div className='text-white/60 text-sm'>Success Rate</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl md:text-4xl font-bold text-purple-400 mb-2'>
                    {businessVisaStats.minInvestment}
                  </div>
                  <div className='text-white/60 text-sm'>Min Investment</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl md:text-4xl font-bold text-cyan-400 mb-2'>
                    {businessVisaStats.averageROI}
                  </div>
                  <div className='text-white/60 text-sm'>Average ROI</div>
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
                    <Calculator className='w-6 h-6' />
                    Calculate Investment
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
                    Explore Programs
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* AI Business Services */}
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
                  AI Business
                </span>
                <br />
                <span className='text-white'>Services</span>
              </h2>
              <p className='text-xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
                Leverage artificial intelligence to optimize your business visa strategy and maximize investment success.
              </p>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {aiBusinessServices.map((service, index) => (
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

        {/* Investment Programs */}
        <section ref={programsRef} className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={programsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-center mb-20'
            >
              <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='text-white'>Investment </span>
                <span className='bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent'>
                  Programs
                </span>
              </h2>
              <p className='text-xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
                Discover business visa opportunities across top investment destinations.
              </p>
            </motion.div>

            {/* Country Tabs */}
            <div className='flex flex-wrap justify-center gap-4 mb-16'>
              {investmentPrograms.map((program, index) => (
                <motion.button
                  key={program.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={programsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setSelectedCountry(program)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCountry.id === program.id
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg'
                      : 'bg-white/10 backdrop-blur-xl border border-white/20 text-white/80 hover:bg-white/20'
                  }`}
                >
                  <span className='text-2xl'>{program.flag}</span>
                  <span>{program.country}</span>
                </motion.button>
              ))}
            </div>

            {/* Selected Country Programs */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCountry.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12'
              >
                <div className='flex items-center gap-4 mb-8'>
                  <span className='text-6xl'>{selectedCountry.flag}</span>
                  <div>
                    <h3 className='text-3xl font-bold text-white mb-2'>{selectedCountry.country}</h3>
                    <p className='text-white/70'>Business Investment Programs</p>
                  </div>
                </div>

                <div className='space-y-6'>
                  {selectedCountry.programs.map((program, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className='bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300'
                    >
                      <div className='flex items-center justify-between mb-4'>
                        <h4 className='text-xl font-semibold text-white'>{program.name}</h4>
                        <span className='text-xs px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full'>
                          {program.successRate}% Success Rate
                        </span>
                      </div>

                      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
                        <div className='bg-white/5 rounded-xl p-4'>
                          <div className='flex items-center gap-2 mb-2'>
                            <DollarSign className='w-5 h-5 text-emerald-400' />
                            <span className='text-white/70 text-sm'>Investment</span>
                          </div>
                          <span className='text-white font-semibold'>{program.investment}</span>
                        </div>
                        <div className='bg-white/5 rounded-xl p-4'>
                          <div className='flex items-center gap-2 mb-2'>
                            <Clock className='w-5 h-5 text-blue-400' />
                            <span className='text-white/70 text-sm'>Timeline</span>
                          </div>
                          <span className='text-white font-semibold'>{program.timeline}</span>
                        </div>
                        <div className='bg-white/5 rounded-xl p-4'>
                          <div className='flex items-center gap-2 mb-2'>
                            <Star className='w-5 h-5 text-yellow-400' />
                            <span className='text-white/70 text-sm'>Success Rate</span>
                          </div>
                          <span className='text-emerald-400 font-semibold'>{program.successRate}%</span>
                        </div>
                      </div>

                      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div>
                          <h5 className='text-white font-semibold mb-3 flex items-center gap-2'>
                            <FileText className='w-5 h-5 text-purple-400' />
                            Requirements
                          </h5>
                          <div className='space-y-2'>
                            {program.requirements.map((req, idx) => (
                              <div key={idx} className='flex items-center gap-2 text-sm text-white/70'>
                                <CheckCircle className='w-4 h-4 text-emerald-400 flex-shrink-0' />
                                <span>{req}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h5 className='text-white font-semibold mb-3 flex items-center gap-2'>
                            <Award className='w-5 h-5 text-cyan-400' />
                            Benefits
                          </h5>
                          <div className='space-y-2'>
                            {program.benefits.map((benefit, idx) => (
                              <div key={idx} className='flex items-center gap-2 text-sm text-white/70'>
                                <Star className='w-4 h-4 text-yellow-400 flex-shrink-0' />
                                <span>{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
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
                    Invest
                  </span>
                  <br />
                  <span className='text-white'>Globally?</span>
                </h2>
                <p className='text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed'>
                  Let our AI-powered platform analyze the best business visa opportunities for your investment goals.
                </p>

                <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-12'>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(147, 51, 234, 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    className='px-10 py-5 bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 rounded-full text-white font-bold text-xl shadow-2xl border border-purple-400/30'
                  >
                    <span className='flex items-center gap-3'>
                      <Calculator className='w-6 h-6' />
                      Calculate Investment
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
                    <span>business@vanhsya.com</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Shield className='w-5 h-5' />
                    <span>100% Secure Investment</span>
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
