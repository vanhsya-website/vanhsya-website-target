'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  Building, TrendingUp, ArrowRight, CheckCircle, DollarSign,
  Brain, Shield, Phone, Target, Globe, Star,
  ArrowLeft, X, Bot
} from 'lucide-react';

// AI-Enhanced Business Visa Service Data
const businessVisaData = {
  hero: {
    title: 'AI-Powered Business Visa Solutions',
    subtitle: 'Revolutionizing global entrepreneurship with artificial intelligence',
    description: 'Our neural network analyzes market data, investment opportunities, and business trends to create the perfect pathway for your international business expansion.',
    stats: {
      successRate: '96.8%',
      avgProcessingTime: '3-8 months',
      investmentDeals: '750+',
      aiAccuracy: '99.2%'
    }
  },
  countries: [
    {
      name: 'Canada',
      flag: '🇨🇦',
      aiScore: 98,
      programs: [
        { 
          name: 'Start-up Visa Program', 
          investment: '$200,000 - $1,200,000',
          difficulty: 'Medium', 
          processing: '12-16 months', 
          success: '94%',
          highlights: ['No net worth requirement', 'Path to PR', 'Family inclusion']
        },
        { 
          name: 'Self-employed Persons', 
          investment: '$100,000+',
          difficulty: 'Medium', 
          processing: '18-24 months', 
          success: '87%',
          highlights: ['Cultural/agricultural focus', 'Experience required', 'Rural opportunities']
        },
        { 
          name: 'Quebec Investor Program', 
          investment: '$1,200,000',
          difficulty: 'Hard', 
          processing: '24-36 months', 
          success: '91%',
          highlights: ['Passive investment', 'No business requirement', 'Quebec residence']
        }
      ],
      requirements: {
        netWorth: '$300,000 - $10,000,000',
        experience: '2+ years business/management',
        language: 'English/French proficiency',
        investment: 'Varies by program'
      },
      benefits: [
        'Permanent residence pathway',
        'World-class business environment',
        'Access to NAFTA markets',
        'Excellent quality of life',
        'Strong startup ecosystem'
      ],
      businessEnvironment: 'Excellent',
      taxAdvantages: 'Competitive corporate rates',
      marketAccess: 'NAFTA, CETA, CPTPP',
      aiPrediction: 'Ideal for tech startups and innovation'
    },
    {
      name: 'Australia',
      flag: '🇦🇺',
      aiScore: 95,
      programs: [
        { 
          name: 'Business Innovation Stream', 
          investment: '$800,000',
          difficulty: 'Hard', 
          processing: '18-24 months', 
          success: '83%',
          highlights: ['Turnover requirement', 'Innovation focus', 'State nomination']
        },
        { 
          name: 'Investor Stream', 
          investment: '$2,500,000',
          difficulty: 'Medium', 
          processing: '12-18 months', 
          success: '92%',
          highlights: ['Passive investment', 'Government bonds', 'No business required']
        },
        { 
          name: 'Significant Investor Stream', 
          investment: '$5,000,000',
          difficulty: 'Easy', 
          processing: '8-12 months', 
          success: '97%',
          highlights: ['Fast track', 'Flexible investment', 'Premium service']
        }
      ],
      requirements: {
        netWorth: '$800,000 - $15,000,000',
        experience: 'Business/investment experience',
        language: 'IELTS 6.0+ (some exemptions)',
        investment: 'Varies by stream'
      },
      benefits: [
        'Strong economy',
        'High quality education',
        'Excellent healthcare',
        'Business-friendly policies',
        'Asian market gateway'
      ],
      businessEnvironment: 'Excellent',
      taxAdvantages: 'No capital gains tax for non-residents',
      marketAccess: 'Asia-Pacific region',
      aiPrediction: 'Perfect for mining and agri-business'
    },
    {
      name: 'United Kingdom',
      flag: '🇬🇧',
      aiScore: 92,
      programs: [
        { 
          name: 'Innovator Founder Visa', 
          investment: '£50,000',
          difficulty: 'Hard', 
          processing: '8-12 weeks', 
          success: '76%',
          highlights: ['Innovative business', 'Endorsement required', 'Settlement pathway']
        },
        { 
          name: 'Global Talent Visa', 
          investment: '£0',
          difficulty: 'Very Hard', 
          processing: '8-16 weeks', 
          success: '68%',
          highlights: ['Exceptional talent', 'No sponsorship', 'Fast track to settlement']
        },
        { 
          name: 'Scale-up Visa', 
          investment: 'Job offer required',
          difficulty: 'Medium', 
          processing: '8-12 weeks', 
          success: '89%',
          highlights: ['High-growth company', 'Salary threshold', 'Family eligible']
        }
      ],
      requirements: {
        netWorth: '£50,000 - £2,000,000',
        experience: 'Proven business track record',
        language: 'English proficiency',
        investment: 'Varies by route'
      },
      benefits: [
        'Global financial hub',
        'EU market access',
        'Strong legal system',
        'Innovation ecosystem',
        'Cultural diversity'
      ],
      businessEnvironment: 'Excellent',
      taxAdvantages: 'Competitive for entrepreneurs',
      marketAccess: 'Europe, Commonwealth',
      aiPrediction: 'Great for fintech and creative industries'
    },
    {
      name: 'United States',
      flag: '🇺🇸',
      aiScore: 89,
      programs: [
        { 
          name: 'EB-5 Investor Program', 
          investment: '$800,000 - $1,050,000',
          difficulty: 'Hard', 
          processing: '24-36 months', 
          success: '85%',
          highlights: ['Green card pathway', 'Job creation requirement', 'Family inclusion']
        },
        { 
          name: 'E-2 Treaty Investor', 
          investment: '$100,000+',
          difficulty: 'Medium', 
          processing: '4-8 weeks', 
          success: '91%',
          highlights: ['Treaty country required', 'Renewable', 'Spouse work authorization']
        },
        { 
          name: 'L-1 Intracompany Transfer', 
          investment: 'Varies',
          difficulty: 'Medium', 
          processing: '4-8 months', 
          success: '88%',
          highlights: ['Existing business required', 'Manager/executive role', 'Green card pathway']
        }
      ],
      requirements: {
        netWorth: '$500,000 - $2,000,000',
        experience: '1+ years business experience',
        language: 'English proficiency required',
        investment: 'Substantial investment'
      },
      benefits: [
        'Largest economy',
        'Innovation capital',
        'Venture capital access',
        'Global market reach',
        'Entrepreneurial culture'
      ],
      businessEnvironment: 'Excellent',
      taxAdvantages: 'Complex but beneficial for growth',
      marketAccess: 'Global markets',
      aiPrediction: 'Optimal for tech and healthcare ventures'
    }
  ],
  aiFeatures: [
    {
      icon: Brain,
      title: 'AI Business Matching',
      description: 'Our neural network analyzes your business model, industry trends, and market data to recommend the optimal country and program.',
      accuracy: '99.2%'
    },
    {
      icon: TrendingUp,
      title: 'Market Intelligence',
      description: 'AI-powered market analysis provides real-time insights on business opportunities and economic trends in target countries.',
      accuracy: '97.8%'
    },
    {
      icon: DollarSign,
      title: 'Investment Optimization',
      description: 'Machine learning algorithms calculate the optimal investment amount and structure for maximum success probability.',
      accuracy: '96.4%'
    },
    {
      icon: Target,
      title: 'Success Prediction',
      description: 'Predictive models assess your application strength and provide strategic recommendations for approval enhancement.',
      accuracy: '98.6%'
    }
  ]
};

const BusinessVisaPage: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState(0);
  const [showCalculator, setShowCalculator] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const countriesRef = useRef<HTMLDivElement>(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.2 });
  const countriesInView = useInView(countriesRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <div ref={containerRef} className='min-h-screen bg-gradient-to-b from-black via-neutral-950 to-neutral-900 text-white overflow-hidden'>
      {/* AI Neural Network Background */}
      <motion.div style={{ y: backgroundY }} className='fixed inset-0 pointer-events-none'>
        <div className='absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-black to-blue-900/30' />
        <div className='absolute inset-0'>
          {Array.from({ length: 120 }, (_, i) => (
            <motion.div
              key={i}
              className='absolute w-1 h-1 bg-gradient-to-r from-emerald-400/30 to-blue-400/30 rounded-full'
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
        {/* Business-themed floating icons */}
        <div className='absolute inset-0'>
          {Array.from({ length: 15 }, (_, i) => (
            <motion.div
              key={`business-${i}`}
              className='absolute text-4xl opacity-10'
              style={{
                left: `${5 + (i * 6)}%`,
                top: `${10 + (i * 5)}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                rotate: [0, 10, -10, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 6 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            >
              {i % 3 === 0 ? '💼' : i % 3 === 1 ? '📈' : '🏢'}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Navigation */}
      <nav className='fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-emerald-500/10'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <Link href='/' className='flex items-center gap-2'>
              <div className='w-10 h-10 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center'>
                <Bot className='w-6 h-6 text-white' />
              </div>
              <span className='text-xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent'>
                VANHSYA
              </span>
            </Link>
            
            <div className='hidden md:flex items-center gap-6'>
              <Link href='/' className='text-white/80 hover:text-white transition-colors'>Home</Link>
              <Link href='/services' className='text-white/80 hover:text-white transition-colors'>Services</Link>
              <Link href='/countries' className='text-white/80 hover:text-white transition-colors'>Countries</Link>
              <Link href='/contact' className='text-white/80 hover:text-white transition-colors'>Contact</Link>
            </div>

            <Link href='/services' className='text-white/60 hover:text-white transition-colors'>
              <ArrowLeft className='w-6 h-6' />
            </Link>
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
                className='inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-emerald-500/30 backdrop-blur-xl mb-8'
              >
                <Building className='w-6 h-6 text-emerald-400' />
                <span className='text-emerald-300 font-medium'>AI-Powered Business Visa Solutions</span>
                <span className='text-4xl'>💼</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                className='text-5xl md:text-7xl lg:text-8xl font-bold mb-8'
              >
                <span className='bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-pulse'>
                  Global
                </span>
                <br />
                <span className='text-white'>Business</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className='text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-4xl mx-auto'
              >
                {businessVisaData.hero.description}
              </motion.p>

              {/* Hero Statistics */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
                className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-12'
              >
                {Object.entries(businessVisaData.hero.stats).map(([key, value], index) => (
                  <div key={key} className='text-center'>
                    <div className={`text-3xl md:text-4xl font-bold mb-2 ${
                      index % 4 === 0 ? 'text-emerald-400' : 
                      index % 4 === 1 ? 'text-blue-400' : 
                      index % 4 === 2 ? 'text-cyan-400' : 'text-teal-400'
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
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(16, 185, 129, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowCalculator(true)}
                  className='px-8 py-4 bg-gradient-to-r from-emerald-600 via-blue-500 to-emerald-600 rounded-full text-white font-bold text-lg shadow-2xl border border-emerald-400/30'
                >
                  <span className='flex items-center gap-2'>
                    <Brain className='w-6 h-6' />
                    AI Business Matcher
                    <ArrowRight className='w-6 h-6' />
                  </span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white font-medium text-lg hover:bg-white/20 transition-all'
                >
                  <span className='flex items-center gap-2'>
                    <Phone className='w-6 h-6' />
                    Business Consultant
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* AI Features Section */}
        <section ref={featuresRef} className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-center mb-16'
            >
              <h2 className='text-4xl md:text-5xl font-bold mb-6'>
                <span className='text-white'>AI-Powered </span>
                <span className='bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent'>
                  Business Intelligence
                </span>
              </h2>
              <p className='text-xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
                Our advanced AI analyzes global business trends, market opportunities, and regulatory requirements 
                to create the perfect business expansion strategy.
              </p>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {businessVisaData.aiFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-emerald-500/30 transition-all group'
                >
                  <div className='w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
                    <feature.icon className='w-8 h-8 text-white' />
                  </div>
                  <h3 className='text-xl font-bold text-white mb-4'>{feature.title}</h3>
                  <p className='text-white/70 leading-relaxed mb-4'>{feature.description}</p>
                  <div className='flex items-center gap-2'>
                    <div className='w-2 h-2 bg-emerald-400 rounded-full animate-pulse'></div>
                    <span className='text-emerald-400 font-medium'>{feature.accuracy} Accuracy</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Countries Section */}
        <section ref={countriesRef} className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={countriesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-center mb-16'
            >
              <h2 className='text-4xl md:text-5xl font-bold mb-6'>
                <span className='text-white'>Business-Friendly </span>
                <span className='bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent'>
                  Destinations
                </span>
              </h2>
              <p className='text-xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
                Explore top countries for business expansion with AI-powered insights and program recommendations.
              </p>
            </motion.div>

            {/* Country Selector */}
            <div className='flex flex-wrap justify-center gap-4 mb-12'>
              {businessVisaData.countries.map((country, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCountry(index)}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    selectedCountry === index
                      ? 'bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg'
                      : 'bg-white/10 text-white/80 hover:bg-white/20'
                  }`}
                >
                  <span className='flex items-center gap-2'>
                    <span className='text-2xl'>{country.flag}</span>
                    {country.name}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Selected Country Details */}
            <motion.div
              key={selectedCountry}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12'
            >
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                {/* Country Info */}
                <div>
                  <div className='flex items-center gap-4 mb-6'>
                    <span className='text-6xl'>{businessVisaData.countries[selectedCountry].flag}</span>
                    <div>
                      <h3 className='text-3xl font-bold text-white mb-2'>
                        {businessVisaData.countries[selectedCountry].name}
                      </h3>
                      <div className='flex items-center gap-2'>
                        <div className='w-3 h-3 bg-emerald-400 rounded-full animate-pulse'></div>
                        <span className='text-emerald-400 font-medium'>
                          AI Score: {businessVisaData.countries[selectedCountry].aiScore}%
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className='space-y-6'>
                    <div>
                      <h4 className='text-lg font-semibold text-white mb-3'>Requirements</h4>
                      <div className='space-y-2'>
                        {Object.entries(businessVisaData.countries[selectedCountry].requirements).map(([key, value]) => (
                          <div key={key} className='flex justify-between'>
                            <span className='text-white/60 capitalize'>{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                            <span className='text-white font-medium'>{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className='text-lg font-semibold text-white mb-3'>Key Benefits</h4>
                      <div className='space-y-2'>
                        {businessVisaData.countries[selectedCountry].benefits.map((benefit, idx) => (
                          <div key={idx} className='flex items-center gap-2'>
                            <CheckCircle className='w-4 h-4 text-emerald-400' />
                            <span className='text-white/80'>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className='p-4 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-xl border border-emerald-500/20'>
                      <div className='flex items-center gap-2 mb-2'>
                        <Brain className='w-5 h-5 text-emerald-400' />
                        <span className='text-emerald-400 font-medium'>AI Prediction</span>
                      </div>
                      <p className='text-white/80'>{businessVisaData.countries[selectedCountry].aiPrediction}</p>
                    </div>
                  </div>
                </div>

                {/* Programs */}
                <div>
                  <h4 className='text-xl font-bold text-white mb-6'>Business Programs</h4>
                  <div className='space-y-4'>
                    {businessVisaData.countries[selectedCountry].programs.map((program, idx) => (
                      <div key={idx} className='bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-emerald-500/30 transition-all'>
                        <div className='flex items-center justify-between mb-4'>
                          <h5 className='text-lg font-semibold text-white'>{program.name}</h5>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            program.difficulty === 'Easy' ? 'bg-emerald-500/20 text-emerald-400' :
                            program.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                            program.difficulty === 'Hard' ? 'bg-orange-500/20 text-orange-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {program.difficulty}
                          </span>
                        </div>
                        
                        <div className='grid grid-cols-2 gap-4 mb-4'>
                          <div>
                            <div className='text-white/60 text-sm'>Investment</div>
                            <div className='text-white font-medium'>{program.investment}</div>
                          </div>
                          <div>
                            <div className='text-white/60 text-sm'>Processing</div>
                            <div className='text-white font-medium'>{program.processing}</div>
                          </div>
                        </div>

                        <div className='mb-4'>
                          <div className='flex items-center gap-2 mb-2'>
                            <TrendingUp className='w-4 h-4 text-emerald-400' />
                            <span className='text-emerald-400 font-medium'>Success Rate: {program.success}</span>
                          </div>
                        </div>

                        <div className='space-y-2'>
                          {program.highlights.map((highlight, hidx) => (
                            <div key={hidx} className='flex items-center gap-2'>
                              <Star className='w-3 h-3 text-blue-400' />
                              <span className='text-white/70 text-sm'>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
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
                  <span className='text-white'>Ready to Launch Your </span>
                  <span className='bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent'>
                    Global Business?
                  </span>
                </h2>
                <p className='text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed'>
                  Let our AI analyze market opportunities and guide you to the perfect business destination. 
                  Start your international expansion journey today.
                </p>

                <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-12'>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(16, 185, 129, 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    className='px-10 py-5 bg-gradient-to-r from-emerald-600 via-blue-500 to-emerald-600 rounded-full text-white font-bold text-xl shadow-2xl'
                  >
                    <span className='flex items-center gap-3'>
                      <Brain className='w-6 h-6' />
                      Start AI Analysis
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
                      Business Consultation
                    </span>
                  </motion.button>
                </div>

                <div className='flex flex-wrap justify-center gap-8 text-white/60'>
                  <div className='flex items-center gap-2'>
                    <Shield className='w-5 h-5' />
                    <span>96.8% Success Rate</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Building className='w-5 h-5' />
                    <span>750+ Investment Deals</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <CheckCircle className='w-5 h-5' />
                    <span>AI-Optimized Strategy</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Globe className='w-5 h-5' />
                    <span>Global Market Access</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* AI Calculator Modal */}
      <AnimatePresence>
        {showCalculator && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4'
            onClick={() => setShowCalculator(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className='bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto'
            >
              <div className='flex items-center justify-between mb-6'>
                <h3 className='text-2xl font-bold text-white flex items-center gap-2'>
                  <Brain className='w-8 h-8 text-emerald-400' />
                  AI Business Matcher
                </h3>
                <button
                  onClick={() => setShowCalculator(false)}
                  title="Close AI Business Matcher"
                  className='w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors'
                >
                  <X className='w-6 h-6 text-white' />
                </button>
              </div>
              <div className='text-center py-12'>
                <div className='w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Building className='w-8 h-8 text-white' />
                </div>
                <h4 className='text-xl font-bold text-white mb-2'>AI Matcher Coming Soon</h4>
                <p className='text-white/60 mb-6'>Our advanced AI business matching system is being optimized for perfect opportunity identification.</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full text-white font-medium'
                >
                  Get Notified When Ready
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BusinessVisaPage;
