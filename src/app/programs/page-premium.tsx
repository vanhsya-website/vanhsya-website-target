'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import {
  Award, Globe, Users, TrendingUp, Star, CheckCircle, ArrowRight, Clock,
  Brain, Bot, Zap, Network, Target, Shield, Building, Home, Heart,
  Trophy, Sparkles, UserCheck, Crown, Cpu, Layers, Phone, Mail,
  Calendar, MapPin, DollarSign, Briefcase, GraduationCap, Flag,
} from 'lucide-react';

// Immigration programs with AI enhancement
const programs = [
  {
    id: 'express-entry',
    title: 'Express Entry Program',
    category: 'permanent',
    description: 'AI-optimized Express Entry system for skilled workers seeking Canadian permanent residence',
    icon: TrendingUp,
    color: 'from-blue-500 to-blue-600',
    successRate: '96%',
    processingTime: '6-8 months',
    eligibilityScore: '67+ CRS points',
    participants: '15,000+',
    countries: ['🇨🇦 Canada'],
    investment: 'No investment required',
    ageRange: '18-45 years',
    features: [
      'AI-powered CRS optimization',
      'Federal Skilled Worker Program',
      'Canadian Experience Class',
      'Federal Skilled Trades',
      'Provincial Nominee Program',
      'Real-time application tracking',
    ],
    benefits: [
      'Permanent residence for entire family',
      'Access to Canadian healthcare',
      'Education benefits for children',
      'Path to Canadian citizenship',
      'Work anywhere in Canada',
    ],
    requirements: [
      'Language proficiency (English/French)',
      'Educational credential assessment',
      'Work experience documentation',
      'Medical examinations',
      'Police clearance certificates',
    ],
  },
  {
    id: 'skilled-migration',
    title: 'Australian Skilled Migration',
    category: 'permanent',
    description: 'Points-based skilled migration program for professionals and trades people',
    icon: Building,
    color: 'from-emerald-500 to-emerald-600',
    successRate: '91%',
    processingTime: '8-12 months',
    eligibilityScore: '65+ points',
    participants: '8,500+',
    countries: ['🇦🇺 Australia'],
    investment: 'No investment required',
    ageRange: '18-45 years',
    features: [
      'SkillSelect Expression of Interest',
      'State nomination opportunities',
      'Regional skilled migration',
      'Professional year programs',
      'Skills assessment guidance',
      'Visa subclass optimization',
    ],
    benefits: [
      'Australian permanent residence',
      'Medicare healthcare access',
      'Free public education',
      'Social security benefits',
      'Pathway to citizenship',
    ],
    requirements: [
      'Skilled occupation assessment',
      'English language proficiency',
      'Age under 45 years',
      'Health and character requirements',
      'Points test requirements',
    ],
  },
  {
    id: 'investor-visa',
    title: 'Investor Visa Program',
    category: 'business',
    description: 'High-net-worth individual programs for business investors and entrepreneurs',
    icon: DollarSign,
    color: 'from-purple-500 to-purple-600',
    successRate: '88%',
    processingTime: '12-18 months',
    eligibilityScore: 'Investment threshold',
    participants: '2,800+',
    countries: ['🇨🇦 Canada', '🇦🇺 Australia', '🇺🇸 USA', '🇬🇧 UK', '🇦🇪 UAE'],
    investment: '$200K - $5M+',
    ageRange: '21+ years',
    features: [
      'Startup visa programs',
      'Self-employed persons program',
      'Quebec investor program',
      'Business innovation streams',
      'Real estate investment options',
      'Due diligence support',
    ],
    benefits: [
      'Residence through investment',
      'Business expansion opportunities',
      'Tax optimization strategies',
      'Global mobility benefits',
      'Family inclusion programs',
    ],
    requirements: [
      'Minimum investment amount',
      'Business experience proof',
      'Net worth documentation',
      'Language requirements',
      'Medical and security checks',
    ],
  },
  {
    id: 'family-sponsorship',
    title: 'Family Reunification',
    category: 'family',
    description: 'AI-assisted family sponsorship programs to reunite families across borders',
    icon: Heart,
    color: 'from-pink-500 to-pink-600',
    successRate: '94%',
    processingTime: '12-24 months',
    eligibilityScore: 'Relationship proof',
    participants: '12,000+',
    countries: ['🇨🇦 Canada', '🇦🇺 Australia', '🇺🇸 USA', '🇳🇿 New Zealand'],
    investment: 'Financial support',
    ageRange: 'All ages',
    features: [
      'Spouse and partner sponsorship',
      'Parent and grandparent program',
      'Dependent children sponsorship',
      'Super visa applications',
      'Adoption programs',
      'Relationship verification',
    ],
    benefits: [
      'Family reunification',
      'Permanent residence pathway',
      'Work and study permits',
      'Healthcare access',
      'Social integration support',
    ],
    requirements: [
      'Sponsorship undertaking',
      'Financial requirements',
      'Relationship documentation',
      'Criminal background checks',
      'Medical examinations',
    ],
  },
  {
    id: 'student-pathway',
    title: 'Study-to-Residence Pathway',
    category: 'study',
    description: 'Education-focused immigration programs with post-graduation work opportunities',
    icon: GraduationCap,
    color: 'from-cyan-500 to-cyan-600',
    successRate: '89%',
    processingTime: '4-6 months',
    eligibilityScore: 'Academic acceptance',
    participants: '25,000+',
    countries: ['🇨🇦 Canada', '🇦🇺 Australia', '🇬🇧 UK', '🇳🇿 New Zealand'],
    investment: 'Tuition + living costs',
    ageRange: '17+ years',
    features: [
      'Study permit applications',
      'Post-graduation work permits',
      'Co-op and internship programs',
      'Provincial nominee pathways',
      'Express Entry transition',
      'Academic institution partnerships',
    ],
    benefits: [
      'Quality education access',
      'Work during studies',
      'Post-graduation work rights',
      'Permanent residence pathway',
      'Career development opportunities',
    ],
    requirements: [
      'Letter of acceptance',
      'Language proficiency',
      'Financial proof',
      'Statement of purpose',
      'Academic transcripts',
    ],
  },
  {
    id: 'digital-nomad',
    title: 'Digital Nomad Visas',
    category: 'work',
    description: 'Modern visa programs for remote workers and digital professionals',
    icon: Cpu,
    color: 'from-orange-500 to-orange-600',
    successRate: '85%',
    processingTime: '2-4 months',
    eligibilityScore: 'Income threshold',
    participants: '5,500+',
    countries: ['🇦🇪 UAE', '🇵🇹 Portugal', '🇪🇪 Estonia', '🇧🇧 Barbados', '🇲🇽 Mexico'],
    investment: 'Minimum income',
    ageRange: '18+ years',
    features: [
      'Remote work authorization',
      'Flexible residence requirements',
      'Tax optimization benefits',
      'Family inclusion options',
      'Renewal pathways',
      'Multi-country access',
    ],
    benefits: [
      'Location independence',
      'Tax benefits',
      'Quality of life improvement',
      'Business networking',
      'Cultural experiences',
    ],
    requirements: [
      'Proof of remote employment',
      'Minimum income threshold',
      'Health insurance coverage',
      'Clean criminal record',
      'Technology infrastructure',
    ],
  },
];

// Program categories
const categories = [
  { id: 'all', label: 'All Programs', icon: Globe, count: programs.length },
  { id: 'permanent', label: 'Permanent Residence', icon: Home, count: programs.filter(p => p.category === 'permanent').length },
  { id: 'business', label: 'Business & Investment', icon: Briefcase, count: programs.filter(p => p.category === 'business').length },
  { id: 'family', label: 'Family Sponsorship', icon: Heart, count: programs.filter(p => p.category === 'family').length },
  { id: 'study', label: 'Study Programs', icon: GraduationCap, count: programs.filter(p => p.category === 'study').length },
  { id: 'work', label: 'Work Visas', icon: Building, count: programs.filter(p => p.category === 'work').length },
];

// Success metrics
const programStats = {
  programs: '25+',
  clients: '0',
  successRate: '92.5%',
  countries: '15+',
  avgTime: '8 months',
  satisfaction: '98.8%',
};

export default function ProgramsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const programsRef = useRef<HTMLDivElement>(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const categoriesInView = useInView(categoriesRef, { once: true, amount: 0.2 });
  const programsInView = useInView(programsRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  const filteredPrograms = selectedCategory === 'all' 
    ? programs 
    : programs.filter(program => program.category === selectedCategory);

  return (
    <div ref={containerRef} className='min-h-screen bg-gradient-to-b from-black via-neutral-950 to-neutral-900 text-white overflow-hidden'>
      {/* AI Neural Network Background */}
      <motion.div style={{ y: backgroundY }} className='fixed inset-0 pointer-events-none'>
        <div className='absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/30' />
        <div className='absolute inset-0'>
          {Array.from({ length: 120 }, (_, i) => (
            <motion.div
              key={i}
              className='absolute w-1 h-1 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full'
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
        {/* Program and pathway icons */}
        <div className='absolute inset-0'>
          {Array.from({ length: 18 }, (_, i) => (
            <motion.div
              key={`pathway-${i}`}
              className='absolute text-4xl opacity-10'
              style={{
                left: `${5 + (i * 5)}%`,
                top: `${10 + (i * 4)}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                rotate: [0, 10, -10, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              {i % 6 === 0 ? '🚀' : i % 6 === 1 ? '🎯' : i % 6 === 2 ? '🏆' : i % 6 === 3 ? '✈️' : i % 6 === 4 ? '🏠' : '⚡'}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Navigation */}
      <nav className='fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-blue-500/10'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <Link href='/' className='flex items-center gap-2'>
              <div className='w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center'>
                <Bot className='w-6 h-6 text-white' />
              </div>
              <span className='text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
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
                className='inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-xl mb-8'
              >
                <Trophy className='w-6 h-6 text-blue-400' />
                <span className='text-blue-300 font-medium'>Immigration Programs</span>
                <span className='text-4xl'>🚀</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                className='text-5xl md:text-7xl lg:text-8xl font-bold mb-8'
              >
                <span className='bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-pulse'>
                  Smart
                </span>
                <br />
                <span className='text-white'>Pathways</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className='text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-4xl mx-auto'
              >
                Discover AI-optimized immigration programs tailored to your unique profile. 
                From permanent residence to business visas, find your perfect pathway to global success.
              </motion.p>

              {/* Program Stats */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
                className='grid grid-cols-2 md:grid-cols-3 gap-8 mb-12'
              >
                {Object.entries(programStats).map(([key, value], index) => (
                  <div key={key} className='text-center'>
                    <div className={`text-3xl md:text-4xl font-bold mb-2 ${
                      index % 3 === 0 ? 'text-blue-400' : 
                      index % 3 === 1 ? 'text-purple-400' : 'text-cyan-400'
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
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className='px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 rounded-full text-white font-bold text-lg shadow-2xl border border-blue-400/30'
                >
                  <span className='flex items-center gap-2'>
                    <Brain className='w-6 h-6' />
                    Find My Program
                    <ArrowRight className='w-6 h-6' />
                  </span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white font-medium text-lg hover:bg-white/20 transition-all'
                >
                  <span className='flex items-center gap-2'>
                    <Calendar className='w-6 h-6' />
                    Book Consultation
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Categories Section */}
        <section ref={categoriesRef} className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={categoriesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-center mb-20'
            >
              <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='text-white'>Program </span>
                <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                  Categories
                </span>
              </h2>
            </motion.div>

            <div className='flex flex-wrap justify-center gap-4 mb-16'>
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={categoriesInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 border-blue-400 text-white'
                      : 'bg-white/5 border-white/20 text-white/70 hover:border-blue-500/50 hover:text-white'
                  }`}
                >
                  <span className='flex items-center gap-2'>
                    <category.icon className='w-5 h-5' />
                    {category.label}
                    <span className='bg-white/20 px-2 py-1 rounded-full text-xs'>
                      {category.count}
                    </span>
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section ref={programsRef} className='pb-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
              {filteredPrograms.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={programsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className='group'
                >
                  <div className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full hover:border-blue-500/30 transition-all duration-500'>
                    {/* Header */}
                    <div className='flex items-start gap-4 mb-6'>
                      <div className={`w-16 h-16 bg-gradient-to-r ${program.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <program.icon className='w-8 h-8 text-white' />
                      </div>
                      <div className='flex-1'>
                        <h3 className='text-2xl font-bold text-white mb-2'>{program.title}</h3>
                        <p className='text-white/70 leading-relaxed'>{program.description}</p>
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className='grid grid-cols-2 gap-4 mb-6'>
                      <div className='bg-white/5 rounded-xl p-3'>
                        <div className='text-emerald-400 font-bold'>{program.successRate}</div>
                        <div className='text-white/60 text-sm'>Success Rate</div>
                      </div>
                      <div className='bg-white/5 rounded-xl p-3'>
                        <div className='text-blue-400 font-bold'>{program.processingTime}</div>
                        <div className='text-white/60 text-sm'>Processing Time</div>
                      </div>
                      <div className='bg-white/5 rounded-xl p-3'>
                        <div className='text-purple-400 font-bold'>{program.participants}</div>
                        <div className='text-white/60 text-sm'>Participants</div>
                      </div>
                      <div className='bg-white/5 rounded-xl p-3'>
                        <div className='text-cyan-400 font-bold'>{program.investment}</div>
                        <div className='text-white/60 text-sm'>Investment</div>
                      </div>
                    </div>

                    {/* Countries */}
                    <div className='mb-6'>
                      <h4 className='text-white font-semibold mb-3'>Available Countries:</h4>
                      <div className='flex flex-wrap gap-2'>
                        {program.countries.map((country, idx) => (
                          <span key={idx} className='px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm'>
                            {country}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className='mb-6'>
                      <h4 className='text-white font-semibold mb-3'>Key Features:</h4>
                      <div className='space-y-2'>
                        {program.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className='flex items-center gap-2'>
                            <CheckCircle className='w-4 h-4 text-emerald-400 flex-shrink-0' />
                            <span className='text-white/70 text-sm'>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className='flex gap-3'>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white font-semibold text-sm'
                      >
                        Learn More
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white font-semibold text-sm hover:bg-white/20 transition-all'
                      >
                        Apply Now
                      </motion.button>
                    </div>
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
                  <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                    Immigration Journey
                  </span>
                  <span className='text-white'> Today</span>
                </h2>
                <p className='text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed'>
                  Let our AI-powered system match you with the perfect immigration program. 
                  Start your consultation and take the first step toward your global future.
                </p>

                <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-12'>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    className='px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 rounded-full text-white font-bold text-xl shadow-2xl'
                  >
                    <span className='flex items-center gap-3'>
                      <Brain className='w-6 h-6' />
                      AI Program Matcher
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
                    <Shield className='w-5 h-5' />
                    <span>92.5% Success Rate</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Clock className='w-5 h-5' />
                    <span>Free Consultation</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <CheckCircle className='w-5 h-5' />
                    <span>AI-Powered Matching</span>
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
