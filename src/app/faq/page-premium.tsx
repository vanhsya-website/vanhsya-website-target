'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import {
  HelpCircle, ChevronDown, ChevronUp, Search, Filter, Clock, CheckCircle,
  Brain, Bot, Zap, Network, Target, Shield, Building, Sparkles, Crown,
  Trophy, Star, Users, Mail, Phone, Globe, Briefcase, GraduationCap,
  Heart, Home, Plane, DollarSign, FileText, Calendar, MapPin, ArrowRight,
} from 'lucide-react';

// Enhanced FAQ data with AI categorization
const faqData = [
  // General Questions
  {
    id: 'gen-1',
    category: 'general',
    question: 'How accurate is your AI-powered eligibility assessment?',
    answer: 'Our AI system achieves 99.8% accuracy in eligibility assessments by analyzing thousands of successful cases and current immigration policies. The neural network continuously learns from new data and policy updates, providing you with the most precise evaluation available.',
    popular: true,
    aiPowered: true,
    tags: ['accuracy', 'assessment', 'AI'],
  },
  {
    id: 'gen-2',
    category: 'general',
    question: 'What makes VANHSYA different from other immigration consultants?',
    answer: 'We combine human expertise with advanced AI technology to deliver unprecedented accuracy and efficiency. Our neural network analyzes patterns from successful applications, predicts approval chances, and optimizes your application strategy for maximum success.',
    popular: true,
    aiPowered: true,
    tags: ['difference', 'AI', 'technology'],
  },
  {
    id: 'gen-3',
    category: 'general',
    question: 'How long does the visa application process typically take?',
    answer: 'Processing times vary by visa type and country. Our AI system provides accurate timeline predictions based on current processing trends: Tourist visas (1-3 weeks), Work visas (2-6 months), Permanent residence (6-18 months). We provide real-time updates throughout your journey.',
    popular: true,
    aiPowered: false,
    tags: ['timeline', 'processing', 'duration'],
  },
  {
    id: 'gen-4',
    category: 'general',
    question: 'Can you guarantee visa approval?',
    answer: 'While no consultant can guarantee approval, our AI-optimized approach achieves a 98.5% success rate. We use predictive modeling to identify potential issues early and optimize your application for the highest probability of success.',
    popular: false,
    aiPowered: true,
    tags: ['guarantee', 'success rate', 'approval'],
  },

  // AI & Technology
  {
    id: 'ai-1',
    category: 'technology',
    question: 'How does your AI document analysis work?',
    answer: 'Our neural network scans and analyzes documents for completeness, accuracy, and compliance. It detects potential errors, suggests improvements, and ensures all requirements are met before submission. The system learns from thousands of successful applications.',
    popular: true,
    aiPowered: true,
    tags: ['documents', 'analysis', 'compliance'],
  },
  {
    id: 'ai-2',
    category: 'technology',
    question: 'What is the Immigration Scam Detector?',
    answer: 'Our AI-powered scam detection system analyzes communication patterns, identifies fraudulent schemes, and protects clients from immigration fraud. It cross-references known scam databases and provides real-time threat alerts.',
    popular: true,
    aiPowered: true,
    tags: ['scam detection', 'fraud protection', 'security'],
  },
  {
    id: 'ai-3',
    category: 'technology',
    question: 'How does predictive timeline modeling work?',
    answer: 'Our AI analyzes historical processing data, current case volumes, and seasonal patterns to predict accurate timelines. The system updates predictions in real-time based on new data from immigration authorities.',
    popular: false,
    aiPowered: true,
    tags: ['prediction', 'timeline', 'modeling'],
  },

  // Services & Process
  {
    id: 'serv-1',
    category: 'services',
    question: 'What services do you offer?',
    answer: 'We provide comprehensive immigration services including visa applications, permanent residence, work permits, student visas, family sponsorship, business immigration, and AI-powered tools for assessment and document preparation.',
    popular: true,
    aiPowered: false,
    tags: ['services', 'visa types', 'comprehensive'],
  },
  {
    id: 'serv-2',
    category: 'services',
    question: 'Do you offer consultation services?',
    answer: 'Yes, we provide AI-enhanced consultations combining expert human advice with data-driven insights. Our consultants use AI tools to provide personalized strategies and accurate assessments during your session.',
    popular: true,
    aiPowered: true,
    tags: ['consultation', 'expert advice', 'personalized'],
  },
  {
    id: 'serv-3',
    category: 'services',
    question: 'What documents do I need for my application?',
    answer: 'Required documents vary by visa type and country. Our AI Document Wizard generates personalized checklists based on your specific situation, ensuring you have everything needed for a successful application.',
    popular: true,
    aiPowered: true,
    tags: ['documents', 'checklist', 'requirements'],
  },

  // Countries & Programs
  {
    id: 'country-1',
    category: 'countries',
    question: 'Which countries do you help with?',
    answer: 'We assist with immigration to 15+ countries including Canada, Australia, USA, UK, Germany, Singapore, UAE, New Zealand, and more. Our AI system is trained on the immigration policies of all supported countries.',
    popular: true,
    aiPowered: true,
    tags: ['countries', 'destinations', 'global'],
  },
  {
    id: 'country-2',
    category: 'countries',
    question: 'What is Express Entry and how can AI help?',
    answer: 'Express Entry is Canada\'s points-based immigration system. Our AI analyzes your profile, predicts your CRS score, identifies improvement strategies, and optimizes your application for maximum points and faster processing.',
    popular: true,
    aiPowered: true,
    tags: ['Express Entry', 'Canada', 'CRS score'],
  },
  {
    id: 'country-3',
    category: 'countries',
    question: 'How does the Australian points system work?',
    answer: 'Australia uses a points-based system for skilled migration. Our AI evaluates your qualifications, experience, and other factors to calculate your points score and recommend pathways for improvement.',
    popular: false,
    aiPowered: true,
    tags: ['Australia', 'points system', 'skilled migration'],
  },

  // Costs & Pricing
  {
    id: 'cost-1',
    category: 'pricing',
    question: 'How much do your services cost?',
    answer: 'Our pricing varies by service complexity and country. We offer transparent, competitive pricing with no hidden fees. AI-powered services provide additional value through higher accuracy and faster processing.',
    popular: true,
    aiPowered: false,
    tags: ['pricing', 'costs', 'transparent'],
  },
  {
    id: 'cost-2',
    category: 'pricing',
    question: 'Do you offer free consultations?',
    answer: 'Yes, we offer free initial consultations to understand your needs. Our AI assessment tools are also available for free to give you an immediate overview of your eligibility.',
    popular: true,
    aiPowered: true,
    tags: ['free consultation', 'assessment', 'eligibility'],
  },
  {
    id: 'cost-3',
    category: 'pricing',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, bank transfers, and digital payment methods. Our secure payment system ensures your financial information is protected.',
    popular: false,
    aiPowered: false,
    tags: ['payment', 'methods', 'secure'],
  },
];

// FAQ categories
const categories = [
  { id: 'all', label: 'All Questions', icon: HelpCircle, count: faqData.length },
  { id: 'general', label: 'General', icon: Globe, count: faqData.filter(f => f.category === 'general').length },
  { id: 'technology', label: 'AI & Technology', icon: Brain, count: faqData.filter(f => f.category === 'technology').length },
  { id: 'services', label: 'Services', icon: Briefcase, count: faqData.filter(f => f.category === 'services').length },
  { id: 'countries', label: 'Countries', icon: MapPin, count: faqData.filter(f => f.category === 'countries').length },
  { id: 'pricing', label: 'Pricing', icon: DollarSign, count: faqData.filter(f => f.category === 'pricing').length },
];

// FAQ statistics
const faqStats = {
  totalQuestions: '150+',
  aiPowered: '85%',
  avgResponse: '< 24hrs',
  satisfaction: '98.9%',
  categories: '6',
  languages: '8+',
};

export default function FAQPagePremium() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const categoriesInView = useInView(categoriesRef, { once: true, amount: 0.2 });
  const faqInView = useInView(faqRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  // Filter FAQs
  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  // Sort by popular first
  const sortedFAQs = filteredFAQs.sort((a, b) => {
    if (a.popular && !b.popular) return -1;
    if (!a.popular && b.popular) return 1;
    return 0;
  });

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

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
        {/* Question mark icons floating */}
        <div className='absolute inset-0'>
          {Array.from({ length: 15 }, (_, i) => (
            <motion.div
              key={`question-${i}`}
              className='absolute text-4xl opacity-10'
              style={{
                left: `${5 + (i * 6)}%`,
                top: `${10 + (i * 5)}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                rotate: [0, 15, -15, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            >
              {i % 3 === 0 ? '❓' : i % 3 === 1 ? '💡' : '🎯'}
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
                <HelpCircle className='w-6 h-6 text-blue-400' />
                <span className='text-blue-300 font-medium'>Frequently Asked Questions</span>
                <span className='text-4xl'>❓</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                className='text-5xl md:text-7xl lg:text-8xl font-bold mb-8'
              >
                <span className='bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-pulse'>
                  Get
                </span>
                <br />
                <span className='text-white'>Answers</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className='text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-4xl mx-auto'
              >
                Find instant answers to your immigration questions with our AI-powered FAQ system. 
                Get expert insights and comprehensive guidance for your immigration journey.
              </motion.p>

              {/* FAQ Statistics */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
                className='grid grid-cols-2 md:grid-cols-3 gap-8 mb-12'
              >
                {Object.entries(faqStats).map(([key, value], index) => (
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

              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
                className='max-w-2xl mx-auto mb-8'
              >
                <div className='relative'>
                  <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50' />
                  <input
                    type='text'
                    placeholder='Search your immigration questions...'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className='w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-blue-500 transition-all'
                  />
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
                    AI Assistant
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
                    Expert Help
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
                <span className='text-white'>Question </span>
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

        {/* FAQ List */}
        <section ref={faqRef} className='pb-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='max-w-4xl mx-auto'>
              {sortedFAQs.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className='text-center py-16'
                >
                  <HelpCircle className='w-16 h-16 text-white/30 mx-auto mb-4' />
                  <h3 className='text-2xl font-bold text-white mb-2'>No questions found</h3>
                  <p className='text-white/60'>Try adjusting your search or category filter.</p>
                </motion.div>
              ) : (
                <div className='space-y-4'>
                  {sortedFAQs.map((faq, index) => (
                    <motion.div
                      key={faq.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={faqInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300'
                    >
                      <button
                        onClick={() => toggleFAQ(faq.id)}
                        className='w-full p-6 text-left flex items-start gap-4 hover:bg-white/5 transition-colors'
                      >
                        <div className='flex-1'>
                          <div className='flex items-center gap-3 mb-2'>
                            <h3 className='text-lg font-semibold text-white'>{faq.question}</h3>
                            {faq.popular && (
                              <span className='px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-full'>
                                POPULAR
                              </span>
                            )}
                            {faq.aiPowered && (
                              <span className='px-2 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 text-xs font-bold rounded-full border border-blue-500/30'>
                                AI POWERED
                              </span>
                            )}
                          </div>
                          <div className='flex flex-wrap gap-2'>
                            {faq.tags.map((tag, idx) => (
                              <span key={idx} className='text-xs text-white/50 bg-white/10 px-2 py-1 rounded'>
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <motion.div
                          animate={{ rotate: openFAQ === faq.id ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className='w-6 h-6 text-white/60' />
                        </motion.div>
                      </button>
                      
                      <AnimatePresence>
                        {openFAQ === faq.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className='border-t border-white/10'
                          >
                            <div className='p-6 pt-4'>
                              <p className='text-white/80 leading-relaxed'>{faq.answer}</p>
                              
                              {faq.aiPowered && (
                                <div className='mt-4 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl'>
                                  <div className='flex items-center gap-2 mb-2'>
                                    <Brain className='w-4 h-4 text-blue-400' />
                                    <span className='text-blue-400 font-semibold text-sm'>AI Enhancement</span>
                                  </div>
                                  <p className='text-white/70 text-sm'>
                                    This answer is enhanced by our AI system with real-time data and predictive insights.
                                  </p>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              )}
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
                  <span className='text-white'>Still Have </span>
                  <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                    Questions
                  </span>
                  <span className='text-white'>?</span>
                </h2>
                <p className='text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed'>
                  Our AI-powered support system and expert consultants are here to help. 
                  Get personalized answers to your specific immigration questions.
                </p>

                <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-12'>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    className='px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 rounded-full text-white font-bold text-xl shadow-2xl'
                  >
                    <span className='flex items-center gap-3'>
                      <Brain className='w-6 h-6' />
                      Ask AI Assistant
                      <ArrowRight className='w-6 h-6' />
                    </span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='px-10 py-5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white font-medium text-xl hover:bg-white/20 transition-all'
                  >
                    <span className='flex items-center gap-3'>
                      <Calendar className='w-6 h-6' />
                      Book Expert Call
                    </span>
                  </motion.button>
                </div>

                <div className='flex flex-wrap justify-center gap-8 text-white/60'>
                  <div className='flex items-center gap-2'>
                    <Clock className='w-5 h-5' />
                    <span>24/7 AI Support</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <CheckCircle className='w-5 h-5' />
                    <span>Expert Verified</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Shield className='w-5 h-5' />
                    <span>98.9% Satisfaction</span>
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
