'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  Briefcase, TrendingUp, ArrowRight, CheckCircle,
  Brain, Shield, Phone, Target, Users, Globe,
  ArrowLeft, X, Bot, Calculator
} from 'lucide-react';

// AI-Enhanced Work Visa Service Data
const workVisaData = {
  hero: {
    title: 'AI-Powered Work Visa Solutions',
    subtitle: 'Revolutionizing international career mobility with artificial intelligence',
    description: 'Our neural network analyzes global job markets, visa requirements, and career opportunities to create the perfect pathway for your international work journey.',
    stats: {
      successRate: '98.2%',
      avgProcessingTime: '2-6 months',
      jobPlacements: '2,500+',
      aiAccuracy: '99.7%'
    }
  },
  countries: [
    {
      name: 'Canada',
      flag: '🇨🇦',
      aiScore: 99,
      programs: [
        { 
          name: 'Express Entry', 
          difficulty: 'Medium', 
          processing: '6-8 months', 
          success: '96%',
          requirements: ['CRS Score 450+', 'Language test', 'Work experience', 'Education assessment']
        },
        { 
          name: 'Provincial Nominee Program', 
          difficulty: 'Medium', 
          processing: '8-12 months', 
          success: '94%',
          requirements: ['Provincial nomination', 'Job offer', 'Language proficiency', 'Work experience']
        },
        { 
          name: 'LMIA Work Permit', 
          difficulty: 'Hard', 
          processing: '4-8 weeks', 
          success: '89%',
          requirements: ['Valid job offer', 'LMIA approval', 'Employer compliance', 'Skills assessment']
        }
      ],
      jobMarkets: ['Technology', 'Healthcare', 'Engineering', 'Skilled Trades', 'Finance'],
      avgSalary: 'CAD $55,000 - $120,000',
      workRights: 'Full work authorization',
      pathwayToPR: 'Yes - Multiple programs',
      aiPrediction: 'Excellent for tech professionals and skilled workers'
    },
    {
      name: 'Australia',
      flag: '🇦🇺',
      aiScore: 96,
      programs: [
        { 
          name: 'Skilled Independent Visa', 
          difficulty: 'Hard', 
          processing: '8-12 months', 
          success: '87%',
          requirements: ['Points test 65+', 'Skills assessment', 'English proficiency', 'Age under 45']
        },
        { 
          name: 'Employer Nomination Scheme', 
          difficulty: 'Medium', 
          processing: '6-10 months', 
          success: '92%',
          requirements: ['Job offer', 'Skills assessment', 'English test', 'Employer sponsorship']
        },
        { 
          name: 'Temporary Skill Shortage', 
          difficulty: 'Medium', 
          processing: '4-8 weeks', 
          success: '94%',
          requirements: ['Employer sponsorship', 'Nominated occupation', 'Skills assessment', 'English test']
        }
      ],
      jobMarkets: ['Mining', 'Healthcare', 'IT', 'Construction', 'Agriculture'],
      avgSalary: 'AUD $60,000 - $130,000',
      workRights: 'Full work authorization',
      pathwayToPR: 'Yes - Skilled migration',
      aiPrediction: 'Great for mining engineers and healthcare professionals'
    },
    {
      name: 'United Kingdom',
      flag: '🇬🇧',
      aiScore: 93,
      programs: [
        { 
          name: 'Skilled Worker Visa', 
          difficulty: 'Medium', 
          processing: '8-12 weeks', 
          success: '91%',
          requirements: ['Job offer', 'Certificate of Sponsorship', 'English proficiency', 'Maintenance funds']
        },
        { 
          name: 'Global Talent Visa', 
          difficulty: 'Very Hard', 
          processing: '8-16 weeks', 
          success: '76%',
          requirements: ['Exceptional talent/promise', 'Endorsement', 'English proficiency', 'Maintenance funds']
        },
        { 
          name: 'Health and Care Worker', 
          difficulty: 'Medium', 
          processing: '4-8 weeks', 
          success: '96%',
          requirements: ['Job offer in health/care', 'Certificate of Sponsorship', 'English test', 'Professional registration']
        }
      ],
      jobMarkets: ['Finance', 'Healthcare', 'Technology', 'Creative Industries', 'Education'],
      avgSalary: '£25,000 - £70,000',
      workRights: 'Full work authorization',
      pathwayToPR: 'Yes - Settlement route',
      aiPrediction: 'Ideal for finance and creative professionals'
    },
    {
      name: 'United States',
      flag: '🇺🇸',
      aiScore: 88,
      programs: [
        { 
          name: 'H-1B Specialty Occupation', 
          difficulty: 'Very Hard', 
          processing: '6-12 months', 
          success: '73%',
          requirements: ['Bachelor\'s degree', 'Specialty occupation', 'Employer petition', 'Labor Condition Application']
        },
        { 
          name: 'L-1 Intracompany Transfer', 
          difficulty: 'Medium', 
          processing: '4-8 months', 
          success: '88%',
          requirements: ['1 year with company', 'Managerial role', 'Related entity in US', 'Specialized knowledge']
        },
        { 
          name: 'O-1 Extraordinary Ability', 
          difficulty: 'Very Hard', 
          processing: '4-6 months', 
          success: '82%',
          requirements: ['Extraordinary ability', 'National/international recognition', 'Evidence of achievement', 'Agent/employer petition']
        }
      ],
      jobMarkets: ['Technology', 'Healthcare', 'Finance', 'Entertainment', 'Research'],
      avgSalary: 'USD $60,000 - $150,000',
      workRights: 'Employer-specific authorization',
      pathwayToPR: 'Yes - Employment-based green card',
      aiPrediction: 'Perfect for tech innovators and researchers'
    }
  ],
  aiFeatures: [
    {
      icon: Brain,
      title: 'AI Career Matching',
      description: 'Our neural network analyzes your skills, experience, and career goals to match you with optimal work opportunities globally.',
      accuracy: '99.7%'
    },
    {
      icon: Target,
      title: 'Smart Job Market Analysis',
      description: 'AI-powered analysis of global job markets, salary trends, and demand forecasting for your profession.',
      accuracy: '98.4%'
    },
    {
      icon: TrendingUp,
      title: 'Visa Success Prediction',
      description: 'Machine learning algorithms assess your profile and predict visa approval probability with strategic recommendations.',
      accuracy: '97.9%'
    },
    {
      icon: Calculator,
      title: 'Salary & Benefits Optimization',
      description: 'AI calculates optimal salary negotiations and benefits packages based on market data and your qualifications.',
      accuracy: '96.8%'
    }
  ]
};

const WorkVisaPage: React.FC = () => {
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
        <div className='absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/30' />
        <div className='absolute inset-0'>
          {Array.from({ length: 100 }, (_, i) => (
            <motion.div
              key={i}
              className='absolute w-1 h-1 bg-gradient-to-r from-purple-400/30 to-blue-400/30 rounded-full'
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
        {/* Work-themed floating icons */}
        <div className='absolute inset-0'>
          {Array.from({ length: 12 }, (_, i) => (
            <motion.div
              key={`work-${i}`}
              className='absolute text-4xl opacity-10'
              style={{
                left: `${5 + (i * 8)}%`,
                top: `${10 + (i * 6)}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                rotate: [0, 15, -15, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 6 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            >
              {i % 3 === 0 ? '💼' : i % 3 === 1 ? '🌍' : '⚡'}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Navigation */}
      <nav className='fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-purple-500/10'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <Link href='/' className='flex items-center gap-2'>
              <div className='w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center'>
                <Bot className='w-6 h-6 text-white' />
              </div>
              <span className='text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
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
                className='inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 backdrop-blur-xl mb-8'
              >
                <Briefcase className='w-6 h-6 text-purple-400' />
                <span className='text-purple-300 font-medium'>AI-Powered Work Visa Solutions</span>
                <span className='text-4xl'>💼</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                className='text-5xl md:text-7xl lg:text-8xl font-bold mb-8'
              >
                <span className='bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-pulse'>
                  Global
                </span>
                <br />
                <span className='text-white'>Careers</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className='text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-4xl mx-auto'
              >
                {workVisaData.hero.description}
              </motion.p>

              {/* Hero Statistics */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
                className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-12'
              >
                {Object.entries(workVisaData.hero.stats).map(([key, value], index) => (
                  <div key={key} className='text-center'>
                    <div className={`text-3xl md:text-4xl font-bold mb-2 ${
                      index % 4 === 0 ? 'text-purple-400' : 
                      index % 4 === 1 ? 'text-blue-400' : 
                      index % 4 === 2 ? 'text-cyan-400' : 'text-violet-400'
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
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(147, 51, 234, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowCalculator(true)}
                  className='px-8 py-4 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 rounded-full text-white font-bold text-lg shadow-2xl border border-purple-400/30'
                >
                  <span className='flex items-center gap-2'>
                    <Brain className='w-6 h-6' />
                    AI Career Matcher
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
                    Career Consultant
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
                <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
                  Career Intelligence
                </span>
              </h2>
              <p className='text-xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
                Our advanced AI analyzes global job markets, visa requirements, and career opportunities 
                to create the perfect international work strategy.
              </p>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {workVisaData.aiFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition-all group'
                >
                  <div className='w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
                    <feature.icon className='w-8 h-8 text-white' />
                  </div>
                  <h3 className='text-xl font-bold text-white mb-4'>{feature.title}</h3>
                  <p className='text-white/70 leading-relaxed mb-4'>{feature.description}</p>
                  <div className='flex items-center gap-2'>
                    <div className='w-2 h-2 bg-purple-400 rounded-full animate-pulse'></div>
                    <span className='text-purple-400 font-medium'>{feature.accuracy} Accuracy</span>
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
                <span className='text-white'>Top Work </span>
                <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
                  Destinations
                </span>
              </h2>
              <p className='text-xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
                Explore global career opportunities with AI-powered insights and visa guidance.
              </p>
            </motion.div>

            {/* Country Selector */}
            <div className='flex flex-wrap justify-center gap-4 mb-12'>
              {workVisaData.countries.map((country, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCountry(index)}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    selectedCountry === index
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
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
                    <span className='text-6xl'>{workVisaData.countries[selectedCountry].flag}</span>
                    <div>
                      <h3 className='text-3xl font-bold text-white mb-2'>
                        {workVisaData.countries[selectedCountry].name}
                      </h3>
                      <div className='flex items-center gap-2'>
                        <div className='w-3 h-3 bg-purple-400 rounded-full animate-pulse'></div>
                        <span className='text-purple-400 font-medium'>
                          AI Score: {workVisaData.countries[selectedCountry].aiScore}%
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className='space-y-6'>
                    <div>
                      <h4 className='text-lg font-semibold text-white mb-3'>Job Markets</h4>
                      <div className='flex flex-wrap gap-2'>
                        {workVisaData.countries[selectedCountry].jobMarkets.map((market, idx) => (
                          <span key={idx} className='px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm'>
                            {market}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                      <div>
                        <h5 className='text-white/60 text-sm mb-1'>Average Salary</h5>
                        <p className='text-white font-medium'>{workVisaData.countries[selectedCountry].avgSalary}</p>
                      </div>
                      <div>
                        <h5 className='text-white/60 text-sm mb-1'>Work Rights</h5>
                        <p className='text-white font-medium'>{workVisaData.countries[selectedCountry].workRights}</p>
                      </div>
                      <div>
                        <h5 className='text-white/60 text-sm mb-1'>Path to PR</h5>
                        <p className='text-white font-medium'>{workVisaData.countries[selectedCountry].pathwayToPR}</p>
                      </div>
                    </div>

                    <div className='p-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl border border-purple-500/20'>
                      <div className='flex items-center gap-2 mb-2'>
                        <Brain className='w-5 h-5 text-purple-400' />
                        <span className='text-purple-400 font-medium'>AI Prediction</span>
                      </div>
                      <p className='text-white/80'>{workVisaData.countries[selectedCountry].aiPrediction}</p>
                    </div>
                  </div>
                </div>

                {/* Programs */}
                <div>
                  <h4 className='text-xl font-bold text-white mb-6'>Work Visa Programs</h4>
                  <div className='space-y-4'>
                    {workVisaData.countries[selectedCountry].programs.map((program, idx) => (
                      <div key={idx} className='bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-all'>
                        <div className='flex items-center justify-between mb-4'>
                          <h5 className='text-lg font-semibold text-white'>{program.name}</h5>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            program.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                            program.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                            program.difficulty === 'Hard' ? 'bg-orange-500/20 text-orange-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {program.difficulty}
                          </span>
                        </div>
                        
                        <div className='grid grid-cols-2 gap-4 mb-4'>
                          <div>
                            <div className='text-white/60 text-sm'>Processing</div>
                            <div className='text-white font-medium'>{program.processing}</div>
                          </div>
                          <div>
                            <div className='text-white/60 text-sm'>Success Rate</div>
                            <div className='text-purple-400 font-medium'>{program.success}</div>
                          </div>
                        </div>

                        <div className='space-y-2'>
                          <h6 className='text-white/80 font-medium text-sm'>Requirements:</h6>
                          {program.requirements.map((req, ridx) => (
                            <div key={ridx} className='flex items-center gap-2'>
                              <CheckCircle className='w-3 h-3 text-purple-400' />
                              <span className='text-white/70 text-sm'>{req}</span>
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
                  <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
                    Global Career?
                  </span>
                </h2>
                <p className='text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed'>
                  Let our AI analyze the best career opportunities and guide you to your dream job abroad. 
                  Start your international career journey today.
                </p>

                <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-12'>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(147, 51, 234, 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    className='px-10 py-5 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 rounded-full text-white font-bold text-xl shadow-2xl'
                  >
                    <span className='flex items-center gap-3'>
                      <Brain className='w-6 h-6' />
                      Start AI Matching
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
                      Career Consultation
                    </span>
                  </motion.button>
                </div>

                <div className='flex flex-wrap justify-center gap-8 text-white/60'>
                  <div className='flex items-center gap-2'>
                    <Shield className='w-5 h-5' />
                    <span>98.2% Success Rate</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Users className='w-5 h-5' />
                    <span>2,500+ Job Placements</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <CheckCircle className='w-5 h-5' />
                    <span>AI-Optimized Applications</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Globe className='w-5 h-5' />
                    <span>Global Career Network</span>
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
                  <Brain className='w-8 h-8 text-purple-400' />
                  AI Career Matcher
                </h3>
                <button
                  onClick={() => setShowCalculator(false)}
                  title="Close AI Career Matcher"
                  className='w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors'
                >
                  <X className='w-6 h-6 text-white' />
                </button>
              </div>
              <div className='text-center py-12'>
                <div className='w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <Briefcase className='w-8 h-8 text-white' />
                </div>
                <h4 className='text-xl font-bold text-white mb-2'>AI Matcher Coming Soon</h4>
                <p className='text-white/60 mb-6'>Our advanced AI career matching system is being optimized for perfect job opportunity identification.</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white font-medium'
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

export default WorkVisaPage;
