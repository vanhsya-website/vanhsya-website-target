'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import {
  Star,
  Users,
  CheckCircle,
  Award,
  Globe,
  TrendingUp,
  Clock,
  Target,
  ArrowRight,
  Zap,
  Shield,
  BookOpen,
  Briefcase,
  Home,
  Filter,
  Search,
} from 'lucide-react';

export default function ProgramsPage() {
  const [selectedTab, setSelectedTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const programs = [
    {
      id: 1,
      title: 'Express Entry Program',
      category: 'permanent',
      description: 'Fast-track permanent residence program for skilled workers seeking Canadian immigration',
      successRate: '94%',
      processingTime: '6-8 months',
      eligibilityScore: '67+ CRS points',
      participants: '0',
      icon: Star,
      color: 'from-emerald-500 to-emerald-600',
      features: [
        'Comprehensive profile assessment',
        'Document preparation assistance',
        'Language test preparation',
        'Job offer assistance',
        'Provincial nomination support',
      ],
    },
    {
      id: 2,
      title: 'Provincial Nominee Program',
      category: 'permanent',
      description: 'Province-specific immigration pathway for targeted skilled workers',
      successRate: '91%',
      processingTime: '8-12 months',
      eligibilityScore: 'Province specific',
      participants: '0',
      icon: Globe,
      color: 'from-blue-500 to-blue-600',
      features: [
        'Province selection guidance',
        'Nomination certificate assistance',
        'Application submission support',
        'Settlement planning',
        'Regional job market analysis',
      ],
    },
    {
      id: 3,
      title: 'Student Visa Program',
      category: 'temporary',
      description: 'Study permit for international students pursuing education abroad',
      successRate: '88%',
      processingTime: '4-6 weeks',
      eligibilityScore: 'Letter of acceptance',
      participants: '0',
      icon: BookOpen,
      color: 'from-purple-500 to-purple-600',
      features: [
        'Institution selection',
        'Application preparation',
        'Financial documentation',
        'Study permit processing',
        'Post-graduation pathways',
      ],
    },
    {
      id: 4,
      title: 'Work Permit Program',
      category: 'temporary',
      description: 'Temporary work authorization for skilled professionals',
      successRate: '85%',
      processingTime: '2-4 weeks',
      eligibilityScore: 'Job offer required',
      participants: '0',
      icon: Briefcase,
      color: 'from-orange-500 to-orange-600',
      features: [
        'Job market analysis',
        'Work permit application',
        'LMIA support',
        'Employer liaison',
        'Career transition support',
      ],
    },
    {
      id: 5,
      title: 'Family Sponsorship Program',
      category: 'family',
      description: 'Reunite with family members through sponsorship programs',
      successRate: '96%',
      processingTime: '12-18 months',
      eligibilityScore: 'Relationship proof',
      participants: '0',
      icon: Home,
      color: 'from-pink-500 to-pink-600',
      features: [
        'Relationship documentation',
        'Financial sponsorship support',
        'Application processing',
        'Settlement assistance',
        'Family reunification planning',
      ],
    },
    {
      id: 6,
      title: 'Business Investment Program',
      category: 'business',
      description: 'Investment-based immigration for entrepreneurs and investors',
      successRate: '89%',
      processingTime: '10-15 months',
      eligibilityScore: 'Investment threshold',
      participants: '0',
      icon: TrendingUp,
      color: 'from-cyan-500 to-cyan-600',
      features: [
        'Business plan development',
        'Investment guidance',
        'Legal compliance support',
        'Market entry assistance',
        'Ongoing business support',
      ],
    },
  ];

  const categories = [
    { id: 'all', label: 'All Programs', count: programs.length },
    { id: 'permanent', label: 'Permanent Residence', count: programs.filter(p => p.category === 'permanent').length },
    { id: 'temporary', label: 'Temporary Visas', count: programs.filter(p => p.category === 'temporary').length },
    { id: 'family', label: 'Family Visas', count: programs.filter(p => p.category === 'family').length },
    { id: 'business', label: 'Business Visas', count: programs.filter(p => p.category === 'business').length },
  ];

  const filteredPrograms = programs.filter(program => {
    const matchesCategory = selectedTab === 'all' || program.category === selectedTab;
    const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const stats = [
    { number: '0', label: 'Total Participants', icon: Users, color: 'text-blue-400' },
    { number: '94%', label: 'Average Success Rate', icon: Award, color: 'text-emerald-400' },
    { number: '6', label: 'Active Programs', icon: Target, color: 'text-purple-400' },
    { number: '15+', label: 'Countries Supported', icon: Globe, color: 'text-orange-400' },
  ];

  return (
    <div
      ref={containerRef}
      className='min-h-screen bg-gradient-to-b from-neutral-950 to-neutral-900 text-white'
    >
      {/* Animated Background */}
      <motion.div
        style={{ y: backgroundY }}
        className='absolute inset-0 overflow-hidden'
      >
        <div className='absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 rounded-full blur-3xl' />
        <div className='absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-emerald-600/10 to-cyan-600/10 rounded-full blur-3xl' />
      </motion.div>

      {/* Floating Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        {Array.from({ length: 12 }, (_, i) => (
          <motion.div
            key={i}
            className='absolute w-2 h-2 bg-purple-400/20 rounded-full'
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative z-10'>
        {/* Hero Section */}
        <div className='text-center max-w-4xl mx-auto mb-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 text-purple-300 font-medium text-sm mb-6'
          >
            <Award className='w-4 h-4' />
            Immigration Programs
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6'
          >
            Explore Our
            <span className='block bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent'>
              Immigration Programs
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='text-xl text-neutral-300 leading-relaxed mb-8'
          >
            Discover the perfect immigration pathway for your goals. From permanent residence to temporary visas, we offer comprehensive programs to help you achieve your global mobility dreams.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className='relative max-w-lg mx-auto mb-8'
          >
            <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400' />
            <input
              type='text'
              placeholder='Search programs...'
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className='w-full pl-12 pr-4 py-4 bg-gradient-to-r from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-2xl text-white placeholder-neutral-400 focus:outline-none focus:border-purple-500/50 transition-all duration-300'
            />
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-16'
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className='bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-6 text-center hover:border-neutral-700/50 transition-all duration-300'
            >
              <div className='flex justify-center mb-3'>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className='text-neutral-400 text-sm font-medium'>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className='flex flex-wrap justify-center gap-4 mb-16'
        >
          {categories.map(category => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedTab(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedTab === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white'
                  : 'bg-gradient-to-r from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 text-neutral-300 hover:border-neutral-700/50'
              }`}
            >
              <span>{category.label}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                selectedTab === category.id ? 'bg-white/20' : 'bg-neutral-700/50'
              }`}>
                {category.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Programs Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className='text-center mb-8'>
            <h2 className='text-2xl font-bold text-white mb-2'>
              {filteredPrograms.length} {filteredPrograms.length === 1 ? 'Program' : 'Programs'} Available
            </h2>
            <p className='text-neutral-400'>
              {selectedTab !== 'all' && `Showing ${categories.find(c => c.id === selectedTab)?.label} programs`}
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {filteredPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className='bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-6 hover:border-neutral-700/50 transition-all duration-300'
              >
                <div className='flex items-center gap-3 mb-4'>
                  <div className={`w-12 h-12 bg-gradient-to-r ${program.color} rounded-xl flex items-center justify-center`}>
                    <program.icon className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-white'>{program.title}</h3>
                    <p className='text-neutral-400 text-sm capitalize'>{program.category} Program</p>
                  </div>
                </div>

                <p className='text-neutral-300 mb-4 leading-relaxed'>{program.description}</p>

                {/* Stats Grid */}
                <div className='grid grid-cols-2 gap-4 mb-4'>
                  <div className='bg-neutral-800/30 rounded-xl p-3'>
                    <div className='flex items-center gap-2 mb-1'>
                      <TrendingUp className='w-4 h-4 text-emerald-400' />
                      <span className='text-xs text-neutral-400'>Success Rate</span>
                    </div>
                    <span className='text-white font-semibold'>{program.successRate}</span>
                  </div>
                  <div className='bg-neutral-800/30 rounded-xl p-3'>
                    <div className='flex items-center gap-2 mb-1'>
                      <Clock className='w-4 h-4 text-blue-400' />
                      <span className='text-xs text-neutral-400'>Processing</span>
                    </div>
                    <span className='text-white font-semibold'>{program.processingTime}</span>
                  </div>
                  <div className='bg-neutral-800/30 rounded-xl p-3'>
                    <div className='flex items-center gap-2 mb-1'>
                      <Target className='w-4 h-4 text-purple-400' />
                      <span className='text-xs text-neutral-400'>Requirement</span>
                    </div>
                    <span className='text-white font-semibold text-sm'>{program.eligibilityScore}</span>
                  </div>
                  <div className='bg-neutral-800/30 rounded-xl p-3'>
                    <div className='flex items-center gap-2 mb-1'>
                      <Users className='w-4 h-4 text-orange-400' />
                      <span className='text-xs text-neutral-400'>Participants</span>
                    </div>
                    <span className='text-white font-semibold'>{program.participants}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className='mb-6'>
                  <h4 className='text-white font-semibold mb-3'>Program Features</h4>
                  <div className='space-y-2'>
                    {program.features.slice(0, 3).map((feature, i) => (
                      <div key={i} className='flex items-center gap-2 text-sm'>
                        <CheckCircle className='w-4 h-4 text-emerald-400 flex-shrink-0' />
                        <span className='text-neutral-300'>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className='w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white font-medium rounded-xl transition-all duration-300'
                >
                  <span>Learn More</span>
                  <ArrowRight className='w-4 h-4' />
                </motion.button>
              </motion.div>
            ))}
          </div>

          {filteredPrograms.length === 0 && (
            <div className='text-center py-12'>
              <div className='w-16 h-16 bg-gradient-to-r from-neutral-800 to-neutral-700 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Search className='w-8 h-8 text-neutral-400' />
              </div>
              <h3 className='text-xl font-bold text-white mb-2'>No Programs Found</h3>
              <p className='text-neutral-400'>Try adjusting your search or filter criteria</p>
            </div>
          )}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.4 }}
          className='text-center max-w-4xl mx-auto mt-16'
        >
          <div className='bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-8'>
            <h2 className='text-3xl font-bold text-white mb-4'>Ready to Start Your Journey?</h2>
            <p className='text-xl text-neutral-300 mb-8 leading-relaxed'>
              Choose the right immigration program for your goals and let our experts guide you through every step of the process.
            </p>

            <div className='flex flex-wrap justify-center gap-4'>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className='flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:via-violet-500 hover:to-indigo-500 text-white font-bold rounded-xl transition-all duration-300'
              >
                <Zap className='w-5 h-5' />
                Get Started Now
                <ArrowRight className='w-5 h-5' />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className='flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 hover:border-neutral-700/50 text-white font-medium rounded-xl transition-all duration-300'
              >
                <Shield className='w-5 h-5' />
                Free Consultation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
