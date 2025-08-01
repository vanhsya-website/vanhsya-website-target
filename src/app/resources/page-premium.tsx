'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import {
  Search, Filter, Download, ExternalLink, BookOpen, FileText, Calculator,
  CheckSquare, Users, Star, Eye, ChevronDown, ChevronUp, Play, Bookmark,
  Share2, Calendar, Brain, Bot, Zap, Network, Target, Shield, Building,
  Sparkles, Crown, Trophy, Clock, Award, TrendingUp, Globe, Briefcase,
  GraduationCap, Heart, Home, Plane, DollarSign, Mail, Phone, ArrowRight,
  Layers, Database, BarChart3, PieChart, LineChart, Activity
} from 'lucide-react';

// Enhanced Resource data with AI categorization
interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'guide' | 'checklist' | 'calculator' | 'template' | 'video' | 'webinar' | 'ai-tool' | 'dataset';
  category: string;
  downloadUrl?: string;
  externalUrl?: string;
  image: string;
  downloads: number;
  rating: number;
  duration?: string;
  fileSize?: string;
  featured: boolean;
  lastUpdated: string;
  tags: string[];
  aiPowered: boolean;
  premium: boolean;
  accuracy?: string;
}

const resourceCategories = [
  { id: 'all', name: 'All Resources', icon: BookOpen, count: 85, color: 'from-blue-500 to-purple-500' },
  { id: 'guides', name: 'Immigration Guides', icon: FileText, count: 24, color: 'from-emerald-500 to-teal-500' },
  { id: 'calculators', name: 'AI Calculators', icon: Calculator, count: 12, color: 'from-orange-500 to-red-500' },
  { id: 'checklists', name: 'Smart Checklists', icon: CheckSquare, count: 18, color: 'from-purple-500 to-pink-500' },
  { id: 'templates', name: 'Document Templates', icon: Layers, count: 15, color: 'from-cyan-500 to-blue-500' },
  { id: 'videos', name: 'Video Training', icon: Play, count: 10, color: 'from-indigo-500 to-purple-500' },
  { id: 'ai-tools', name: 'AI Tools', icon: Brain, count: 6, color: 'from-pink-500 to-rose-500' },
];

const resourceData: Resource[] = [
  {
    id: 'ai-eligibility-calculator',
    title: 'AI-Powered Immigration Eligibility Calculator',
    description: 'Advanced neural network system that analyzes your profile across 15+ countries with 99.8% accuracy. Provides personalized pathway recommendations and timeline predictions.',
    type: 'ai-tool',
    category: 'calculators',
    image: '/images/ai-calculator.jpg',
    downloads: 45230,
    rating: 4.9,
    featured: true,
    lastUpdated: '2025-07-28',
    tags: ['AI', 'eligibility', 'prediction', 'accuracy'],
    aiPowered: true,
    premium: true,
    accuracy: '99.8%',
    externalUrl: '/ai-tools/eligibility-calculator',
  },
  {
    id: 'express-entry-guide-2025',
    title: 'Complete Canada Express Entry Guide 2025',
    description: 'Comprehensive AI-enhanced guide covering latest Express Entry changes, CRS optimization strategies, and success patterns from 10,000+ successful applications.',
    type: 'guide',
    category: 'guides',
    image: '/images/canada-guide.jpg',
    downloads: 38750,
    rating: 4.8,
    duration: '45 min read',
    fileSize: '2.4 MB',
    featured: true,
    lastUpdated: '2025-07-25',
    tags: ['Canada', 'Express Entry', 'CRS', 'optimization'],
    aiPowered: true,
    premium: false,
    downloadUrl: '/downloads/express-entry-guide-2025.pdf',
  },
  {
    id: 'australia-points-calculator',
    title: 'Australia SkillSelect AI Points Calculator',
    description: 'Intelligent points calculator with real-time policy updates, occupation demand analysis, and pathway optimization for Australian immigration.',
    type: 'calculator',
    category: 'calculators',
    image: '/images/australia-calculator.jpg',
    downloads: 29840,
    rating: 4.7,
    featured: true,
    lastUpdated: '2025-07-26',
    tags: ['Australia', 'SkillSelect', 'points', 'occupation'],
    aiPowered: true,
    premium: false,
    accuracy: '98.5%',
    externalUrl: '/calculators/australia-points',
  },
  {
    id: 'document-verification-ai',
    title: 'AI Document Verification & Analysis Tool',
    description: 'Advanced AI system that scans, verifies, and analyzes immigration documents for completeness, accuracy, and compliance across all countries.',
    type: 'ai-tool',
    category: 'ai-tools',
    image: '/images/document-ai.jpg',
    downloads: 22150,
    rating: 4.9,
    featured: true,
    lastUpdated: '2025-07-30',
    tags: ['AI', 'documents', 'verification', 'compliance'],
    aiPowered: true,
    premium: true,
    accuracy: '99.2%',
    externalUrl: '/ai-tools/document-analyzer',
  },
  {
    id: 'universal-checklist',
    title: 'Universal Immigration Document Checklist',
    description: 'AI-generated personalized checklists for any visa type and country. Automatically updated with latest requirements and policy changes.',
    type: 'checklist',
    category: 'checklists',
    image: '/images/universal-checklist.jpg',
    downloads: 52100,
    rating: 4.8,
    fileSize: '850 KB',
    featured: false,
    lastUpdated: '2025-07-29',
    tags: ['checklist', 'universal', 'requirements', 'updated'],
    aiPowered: true,
    premium: false,
    downloadUrl: '/downloads/universal-checklist.pdf',
  },
  {
    id: 'sop-ai-generator',
    title: 'AI Statement of Purpose Generator',
    description: 'Revolutionary AI tool that creates compelling, personalized statements of purpose based on your unique background and target program.',
    type: 'template',
    category: 'templates',
    image: '/images/sop-generator.jpg',
    downloads: 18650,
    rating: 4.8,
    featured: true,
    lastUpdated: '2025-07-31',
    tags: ['SOP', 'AI', 'personalized', 'generator'],
    aiPowered: true,
    premium: true,
    externalUrl: '/ai-tools/sop-generator',
  },
  {
    id: 'ielts-prediction-system',
    title: 'IELTS Score Prediction & Preparation System',
    description: 'AI-powered system that predicts your IELTS score, identifies improvement areas, and provides personalized study plans.',
    type: 'ai-tool',
    category: 'ai-tools',
    image: '/images/ielts-ai.jpg',
    downloads: 31200,
    rating: 4.7,
    featured: false,
    lastUpdated: '2025-07-27',
    tags: ['IELTS', 'prediction', 'preparation', 'AI'],
    aiPowered: true,
    premium: true,
    accuracy: '94.5%',
    externalUrl: '/ai-tools/ielts-predictor',
  },
  {
    id: 'visa-timeline-predictor',
    title: 'AI Visa Processing Timeline Predictor',
    description: 'Machine learning model that predicts accurate visa processing times based on current case loads, historical data, and seasonal patterns.',
    type: 'ai-tool',
    category: 'calculators',
    image: '/images/timeline-predictor.jpg',
    downloads: 27890,
    rating: 4.6,
    featured: false,
    lastUpdated: '2025-07-30',
    tags: ['timeline', 'prediction', 'processing', 'ML'],
    aiPowered: true,
    premium: false,
    accuracy: '96.8%',
    externalUrl: '/ai-tools/timeline-predictor',
  },
  {
    id: 'immigration-cost-calculator',
    title: 'Comprehensive Immigration Cost Calculator',
    description: 'AI-enhanced calculator providing accurate cost estimates for entire immigration process including hidden fees and regional variations.',
    type: 'calculator',
    category: 'calculators',
    image: '/images/cost-calculator.jpg',
    downloads: 41300,
    rating: 4.8,
    featured: false,
    lastUpdated: '2025-07-28',
    tags: ['cost', 'calculator', 'fees', 'budget'],
    aiPowered: true,
    premium: false,
    downloadUrl: '/tools/cost-calculator',
  },
  {
    id: 'scam-detection-system',
    title: 'Immigration Scam Detection System',
    description: 'AI-powered protection system that identifies fraudulent immigration schemes, fake consultants, and suspicious communications.',
    type: 'ai-tool',
    category: 'ai-tools',
    image: '/images/scam-detector.jpg',
    downloads: 19750,
    rating: 4.9,
    featured: true,
    lastUpdated: '2025-07-31',
    tags: ['scam', 'detection', 'fraud', 'protection'],
    aiPowered: true,
    premium: false,
    accuracy: '99.1%',
    externalUrl: '/ai-tools/scam-detector',
  },
];

// Resource statistics
const resourceStats = {
  totalResources: '85+',
  totalDownloads: '500K+',
  avgRating: '4.8',
  aiPowered: '78%',
  countries: '15+',
  languages: '8',
};

export default function ResourcesPagePremium() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured'); // featured, downloads, rating, recent
  const [showFilters, setShowFilters] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const categoriesInView = useInView(categoriesRef, { once: true, amount: 0.2 });
  const resourcesInView = useInView(resourcesRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  // Filter and sort resources
  const filteredResources = resourceData.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  // Sort resources
  const sortedResources = [...filteredResources].sort((a, b) => {
    switch (sortBy) {
      case 'downloads':
        return b.downloads - a.downloads;
      case 'rating':
        return b.rating - a.rating;
      case 'recent':
        return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
      case 'featured':
      default:
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return b.downloads - a.downloads;
    }
  });

  return (
    <div ref={containerRef} className='min-h-screen bg-gradient-to-b from-black via-neutral-950 to-neutral-900 text-white overflow-hidden'>
      {/* AI Neural Network Background */}
      <motion.div style={{ y: backgroundY }} className='fixed inset-0 pointer-events-none'>
        <div className='absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/30' />
        <div className='absolute inset-0'>
          {Array.from({ length: 150 }, (_, i) => (
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
        {/* Resource icons floating */}
        <div className='absolute inset-0'>
          {Array.from({ length: 20 }, (_, i) => (
            <motion.div
              key={`resource-${i}`}
              className='absolute text-4xl opacity-10'
              style={{
                left: `${5 + (i * 4.5)}%`,
                top: `${10 + (i * 4)}%`,
              }}
              animate={{
                y: [-25, 25, -25],
                rotate: [0, 20, -20, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 6 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              {i % 5 === 0 ? '📚' : i % 5 === 1 ? '🧠' : i % 5 === 2 ? '📊' : i % 5 === 3 ? '📝' : '🎯'}
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
                <BookOpen className='w-6 h-6 text-blue-400' />
                <span className='text-blue-300 font-medium'>AI-Powered Resource Hub</span>
                <span className='text-4xl'>📚</span>
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
                <span className='text-white'>Resources</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className='text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-4xl mx-auto'
              >
                Access our comprehensive library of AI-powered immigration tools, guides, and calculators. 
                Everything you need for a successful immigration journey, enhanced by cutting-edge technology.
              </motion.p>

              {/* Resource Statistics */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
                className='grid grid-cols-2 md:grid-cols-3 gap-8 mb-12'
              >
                {Object.entries(resourceStats).map(([key, value], index) => (
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

              {/* Search and Filter Bar */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
                className='max-w-4xl mx-auto mb-8'
              >
                <div className='flex flex-col md:flex-row gap-4'>
                  <div className='relative flex-1'>
                    <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50' />
                    <input
                      type='text'
                      placeholder='Search resources, guides, tools...'
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className='w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-blue-500 transition-all'
                    />
                  </div>
                  
                  <div className='flex gap-2'>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      title='Sort resources'
                      className='px-4 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white focus:outline-none focus:border-blue-500 transition-all'
                    >
                      <option value='featured' className='bg-black'>Featured</option>
                      <option value='downloads' className='bg-black'>Most Downloaded</option>
                      <option value='rating' className='bg-black'>Highest Rated</option>
                      <option value='recent' className='bg-black'>Most Recent</option>
                    </select>
                    
                    <button
                      onClick={() => setShowFilters(!showFilters)}
                      title='Toggle filters'
                      className='px-4 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white hover:bg-white/20 transition-all'
                    >
                      <Filter className='w-5 h-5' />
                    </button>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 1 }}
                className='flex flex-col sm:flex-row gap-6 justify-center items-center'
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className='px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 rounded-full text-white font-bold text-lg shadow-2xl border border-blue-400/30'
                >
                  <span className='flex items-center gap-2'>
                    <Brain className='w-6 h-6' />
                    AI Tools
                    <ArrowRight className='w-6 h-6' />
                  </span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white font-medium text-lg hover:bg-white/20 transition-all'
                >
                  <span className='flex items-center gap-2'>
                    <Download className='w-6 h-6' />
                    Free Resources
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Categories */}
        <section ref={categoriesRef} className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={categoriesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-center mb-20'
            >
              <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='text-white'>Resource </span>
                <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                  Categories
                </span>
              </h2>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
              {resourceCategories.map((category, index) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={categoriesInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-6 rounded-2xl border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-br ${category.color} border-white/20 text-white shadow-2xl`
                      : 'bg-white/5 border-white/10 text-white/70 hover:border-blue-500/50 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <category.icon className='w-8 h-8 mx-auto mb-4' />
                  <h3 className='font-semibold mb-2'>{category.name}</h3>
                  <div className='bg-white/20 px-3 py-1 rounded-full text-sm font-bold'>
                    {category.count} items
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section ref={resourcesRef} className='pb-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {sortedResources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={resourcesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 group'
                >
                  {/* Resource Header */}
                  <div className='relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 overflow-hidden'>
                    <div className='absolute inset-0 flex items-center justify-center'>
                      {resource.type === 'ai-tool' && <Brain className='w-16 h-16 text-blue-400' />}
                      {resource.type === 'calculator' && <Calculator className='w-16 h-16 text-purple-400' />}
                      {resource.type === 'guide' && <BookOpen className='w-16 h-16 text-emerald-400' />}
                      {resource.type === 'checklist' && <CheckSquare className='w-16 h-16 text-orange-400' />}
                      {resource.type === 'template' && <FileText className='w-16 h-16 text-cyan-400' />}
                      {resource.type === 'video' && <Play className='w-16 h-16 text-pink-400' />}
                    </div>
                    
                    {/* Badges */}
                    <div className='absolute top-4 left-4 flex flex-wrap gap-2'>
                      {resource.featured && (
                        <span className='px-2 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full'>
                          FEATURED
                        </span>
                      )}
                      {resource.premium && (
                        <span className='px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full'>
                          PREMIUM
                        </span>
                      )}
                      {resource.aiPowered && (
                        <span className='px-2 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold rounded-full'>
                          AI
                        </span>
                      )}
                    </div>

                    {/* Stats */}
                    <div className='absolute top-4 right-4 flex items-center gap-2 text-white/80'>
                      <div className='flex items-center gap-1'>
                        <Star className='w-4 h-4 text-yellow-400 fill-current' />
                        <span className='text-sm font-medium'>{resource.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Resource Content */}
                  <div className='p-6'>
                    <h3 className='text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors'>
                      {resource.title}
                    </h3>
                    
                    <p className='text-white/70 mb-4 line-clamp-3 text-sm leading-relaxed'>
                      {resource.description}
                    </p>

                    {/* Accuracy for AI tools */}
                    {resource.accuracy && (
                      <div className='mb-4 p-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl'>
                        <div className='flex items-center gap-2'>
                          <Target className='w-4 h-4 text-blue-400' />
                          <span className='text-blue-400 font-semibold text-sm'>Accuracy: {resource.accuracy}</span>
                        </div>
                      </div>
                    )}

                    {/* Tags */}
                    <div className='flex flex-wrap gap-2 mb-4'>
                      {resource.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className='text-xs text-white/50 bg-white/10 px-2 py-1 rounded'>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className='flex items-center justify-between text-white/60 text-sm mb-4'>
                      <div className='flex items-center gap-1'>
                        <Download className='w-4 h-4' />
                        <span>{resource.downloads.toLocaleString()}</span>
                      </div>
                      <div className='flex items-center gap-1'>
                        <Calendar className='w-4 h-4' />
                        <span>{new Date(resource.lastUpdated).toLocaleDateString()}</span>
                      </div>
                      {resource.fileSize && (
                        <div className='flex items-center gap-1'>
                          <Database className='w-4 h-4' />
                          <span>{resource.fileSize}</span>
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className='flex gap-3'>
                      {resource.downloadUrl && (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className='flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white font-medium text-sm hover:shadow-lg transition-all'
                        >
                          <span className='flex items-center justify-center gap-2'>
                            <Download className='w-4 h-4' />
                            Download
                          </span>
                        </motion.button>
                      )}
                      
                      {resource.externalUrl && (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className='flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white font-medium text-sm hover:bg-white/20 transition-all'
                        >
                          <span className='flex items-center justify-center gap-2'>
                            <ExternalLink className='w-4 h-4' />
                            Open Tool
                          </span>
                        </motion.button>
                      )}
                      
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className='px-3 py-3 bg-white/10 border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all'
                      >
                        <Bookmark className='w-4 h-4' />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Load More */}
            {sortedResources.length > 9 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='text-center mt-16'
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-bold hover:shadow-lg transition-all'
                >
                  Load More Resources
                </motion.button>
              </motion.div>
            )}
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
                  <span className='text-white'>Need Custom </span>
                  <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                    AI Tools
                  </span>
                  <span className='text-white'>?</span>
                </h2>
                <p className='text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed'>
                  Our AI development team can create personalized immigration tools tailored to your specific needs. 
                  Get enterprise-grade solutions with cutting-edge technology.
                </p>

                <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-12'>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    className='px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 rounded-full text-white font-bold text-xl shadow-2xl'
                  >
                    <span className='flex items-center gap-3'>
                      <Brain className='w-6 h-6' />
                      Request Custom AI
                      <ArrowRight className='w-6 h-6' />
                    </span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='px-10 py-5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white font-medium text-xl hover:bg-white/20 transition-all'
                  >
                    <span className='flex items-center gap-3'>
                      <Mail className='w-6 h-6' />
                      Enterprise Solutions
                    </span>
                  </motion.button>
                </div>

                <div className='flex flex-wrap justify-center gap-8 text-white/60'>
                  <div className='flex items-center gap-2'>
                    <Shield className='w-5 h-5' />
                    <span>99.8% AI Accuracy</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Users className='w-5 h-5' />
                    <span>500K+ Downloads</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Trophy className='w-5 h-5' />
                    <span>Award-Winning Tools</span>
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
