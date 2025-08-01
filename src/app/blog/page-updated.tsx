'use client';

import React, { useState, useMemo, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import {
  Search,
  Filter,
  Clock,
  User,
  Eye,
  Heart,
  ArrowRight,
  Calendar,
  TrendingUp,
  Star,
  BookOpen,
  Globe,
  FileText,
  Lightbulb,
  Tag,
  Bookmark,
  Share2,
} from 'lucide-react';
import Link from 'next/link';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('recent');
  
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const categories = [
    { id: 'all', label: 'All Posts', icon: BookOpen, count: 0 },
    { id: 'country-guides', label: 'Country Guides', icon: Globe, count: 0 },
    { id: 'visa-processes', label: 'Visa Processes', icon: FileText, count: 0 },
    { id: 'success-stories', label: 'Success Stories', icon: Star, count: 0 },
    { id: 'policy-updates', label: 'Policy Updates', icon: TrendingUp, count: 0 },
    { id: 'tips-advice', label: 'Tips & Advice', icon: Lightbulb, count: 0 },
  ];

  // Placeholder blog posts (will be populated as content is created)
  const blogPosts: any[] = [
    // Currently empty - will be populated with actual blog content
  ];

  const featuredPosts = [
    // Currently empty - will be populated with featured content
  ];

  const stats = [
    { number: '0', label: 'Blog Posts', icon: FileText, color: 'text-blue-400' },
    { number: '0', label: 'Total Readers', icon: Eye, color: 'text-emerald-400' },
    { number: '0', label: 'Featured Articles', icon: Star, color: 'text-purple-400' },
    { number: '6', label: 'Categories', icon: Tag, color: 'text-orange-400' },
  ];

  const upcomingTopics = [
    {
      title: 'Complete Guide to Canadian Express Entry',
      description: 'Comprehensive walkthrough of the Express Entry system',
      category: 'country-guides',
      estimatedDate: 'Coming Soon',
      icon: Globe,
    },
    {
      title: 'Australia PR Success Stories',
      description: 'Real client experiences and immigration journeys',
      category: 'success-stories',
      estimatedDate: 'Coming Soon',
      icon: Star,
    },
    {
      title: 'UK Work Visa Requirements 2025',
      description: 'Updated requirements and application process',
      category: 'visa-processes',
      estimatedDate: 'Coming Soon',
      icon: FileText,
    },
    {
      title: 'Immigration Policy Updates',
      description: 'Latest changes in immigration policies worldwide',
      category: 'policy-updates',
      estimatedDate: 'Coming Soon',
      icon: TrendingUp,
    },
  ];

  const filteredPosts = useMemo(() => {
    let posts = blogPosts;

    if (selectedCategory !== 'all') {
      posts = posts.filter(post => post.category === selectedCategory);
    }

    if (searchTerm) {
      posts = posts.filter(
        post =>
          post.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return posts;
  }, [selectedCategory, searchTerm, sortBy, blogPosts]);

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
            <BookOpen className='w-4 h-4' />
            Immigration Blog
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6'
          >
            Immigration
            <span className='block bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent'>
              Insights & Guides
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='text-xl text-neutral-300 leading-relaxed mb-8'
          >
            Stay informed with the latest immigration news, comprehensive guides, success stories, and expert advice to help you navigate your global mobility journey.
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
              placeholder='Search articles...'
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
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white'
                  : 'bg-gradient-to-r from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 text-neutral-300 hover:border-neutral-700/50'
              }`}
            >
              <category.icon className='w-4 h-4' />
              <span>{category.label}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                selectedCategory === category.id ? 'bg-white/20' : 'bg-neutral-700/50'
              }`}>
                {category.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Blog Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          {filteredPosts.length === 0 ? (
            <div className='text-center py-16'>
              <div className='bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-12'>
                <div className='w-16 h-16 bg-gradient-to-r from-neutral-800 to-neutral-700 rounded-full flex items-center justify-center mx-auto mb-6'>
                  <BookOpen className='w-8 h-8 text-neutral-400' />
                </div>
                <h3 className='text-2xl font-bold text-white mb-4'>Blog Content Coming Soon</h3>
                <p className='text-neutral-400 max-w-lg mx-auto leading-relaxed mb-8'>
                  We're working on creating comprehensive immigration guides, success stories, and expert insights. Check back soon for valuable content to help with your immigration journey.
                </p>

                {/* Upcoming Topics Preview */}
                <div className='text-left max-w-2xl mx-auto'>
                  <h4 className='text-lg font-semibold text-white mb-6'>Upcoming Topics</h4>
                  <div className='grid gap-4'>
                    {upcomingTopics.map((topic, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className='flex items-center gap-4 p-4 bg-neutral-800/30 rounded-xl'
                      >
                        <div className='w-10 h-10 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg flex items-center justify-center flex-shrink-0'>
                          <topic.icon className='w-5 h-5 text-white' />
                        </div>
                        <div className='flex-1'>
                          <h5 className='text-white font-medium mb-1'>{topic.title}</h5>
                          <p className='text-neutral-400 text-sm'>{topic.description}</p>
                        </div>
                        <span className='text-xs text-purple-400 font-medium px-3 py-1 bg-purple-500/10 rounded-full'>
                          {topic.estimatedDate}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {/* Blog posts will be rendered here when available */}
            </div>
          )}
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.4 }}
          className='text-center max-w-4xl mx-auto mt-16'
        >
          <div className='bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-8'>
            <h2 className='text-3xl font-bold text-white mb-4'>Stay Updated</h2>
            <p className='text-xl text-neutral-300 mb-8 leading-relaxed'>
              Be the first to know when we publish new immigration guides, policy updates, and success stories.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6'>
              <input
                type='email'
                placeholder='Enter your email address'
                className='flex-1 px-4 py-3 bg-neutral-800/50 border border-neutral-700/50 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:border-purple-500/50 transition-all duration-300'
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className='px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white font-medium rounded-xl transition-all duration-300'
              >
                Subscribe
              </motion.button>
            </div>

            <p className='text-neutral-500 text-sm'>
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
