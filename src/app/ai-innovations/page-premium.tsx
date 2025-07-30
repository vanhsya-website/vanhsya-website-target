'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import {
  Brain,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Calendar,
  Shield,
  FileText,
  Phone,
  Calculator,
  ChevronDown,
  ChevronUp,
  Gift,
  CreditCard,
  Trophy,
  UserPlus,
  Crown,
  Sparkles,
  Cpu,
  Bot,
  Network,
  Eye,
  MessageSquare,
  BarChart3,
  Target,
  Rocket,
  Home,
  ArrowLeft,
  Menu,
  X,
} from 'lucide-react';

// Multi-language support
const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
];

// Multi-currency support
const currencies = [
  { code: 'USD', symbol: '$', name: 'US Dollar', rate: 1.0 },
  { code: 'GBP', symbol: '£', name: 'British Pound', rate: 0.79 },
  { code: 'EUR', symbol: '€', name: 'Euro', rate: 0.92 },
  { code: 'INR', symbol: '₹', name: 'Indian Rupee', rate: 83.12 },
  { code: 'AED', symbol: 'د.إ', name: 'UAE Dirham', rate: 3.67 },
  { code: 'SAR', symbol: 'ر.س', name: 'Saudi Riyal', rate: 3.75 },
  { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar', rate: 1.35 },
  { code: 'AUD', symbol: 'A$', name: 'Australian Dollar', rate: 1.51 },
];

const aiInnovationStats = {
  totalUsers: '2.5M+',
  aiAccuracy: '99.7%',
  successRate: '96.8%',
  processingSpeed: '0.3 seconds',
  languagesSupported: '50+',
  countriesServed: '195',
  documentsProcessed: '15M+',
  satisfactionRate: '98.9%',
};

const aiFeatures = [
  {
    id: 'document-ai',
    name: 'AI Document Analyzer',
    category: 'Processing',
    type: 'analysis',
    description:
      'Advanced AI technology that analyzes immigration documents with 99.7% accuracy, ensuring compliance and detecting potential issues.',
    processingTime: '0.3 seconds',
    accuracyRate: 99.7,
    basePrice: 99,
    emiOptions: [
      { months: 3, monthlyPayment: 35, totalCost: 105, interest: '5%' },
      { months: 6, monthlyPayment: 20, totalCost: 120, interest: '8%' },
    ],
    features: [
      'Real-time document validation',
      'Multi-language OCR support',
      'Fraud detection algorithms',
      'Compliance checking',
      'Smart error identification',
    ],
    benefits: [
      'Instant document verification',
      '99.7% accuracy guarantee',
      'Fraud prevention',
      'Time-saving automation',
      'Multi-format support',
    ],
    technologies: [
      'Computer Vision',
      'Natural Language Processing',
      'Machine Learning',
      'OCR Technology',
      'Pattern Recognition',
    ],
    icon: FileText,
    color: 'from-blue-600 to-cyan-500',
    bgGlow: 'bg-blue-500/10',
    popular: true,
  },
  {
    id: 'eligibility-ai',
    name: 'Smart Eligibility Calculator',
    category: 'Assessment',
    type: 'calculation',
    description:
      'AI-powered eligibility assessment that evaluates your immigration prospects across 50+ countries with personalized recommendations.',
    processingTime: '1.2 seconds',
    accuracyRate: 96.8,
    basePrice: 149,
    emiOptions: [
      { months: 3, monthlyPayment: 55, totalCost: 165, interest: '5%' },
      { months: 6, monthlyPayment: 30, totalCost: 180, interest: '8%' },
    ],
    features: [
      'Multi-country assessment',
      'Real-time score calculation',
      'Personalized recommendations',
      'Success probability analysis',
      'Alternative pathway suggestions',
    ],
    benefits: [
      'Accurate eligibility scoring',
      'Multiple country options',
      'Personalized guidance',
      'Time-efficient assessment',
      'Strategic planning support',
    ],
    technologies: [
      'Predictive Analytics',
      'Decision Trees',
      'Scoring Algorithms',
      'Data Mining',
      'Statistical Modeling',
    ],
    icon: Calculator,
    color: 'from-purple-600 to-violet-500',
    bgGlow: 'bg-purple-500/10',
  },
  {
    id: 'chatbot-ai',
    name: 'VanHologram AI Assistant',
    category: 'Support',
    type: 'communication',
    description:
      'Advanced AI chatbot providing 24/7 immigration consultation with human-like understanding and expert-level responses.',
    processingTime: '0.1 seconds',
    accuracyRate: 98.5,
    basePrice: 199,
    emiOptions: [
      { months: 3, monthlyPayment: 70, totalCost: 210, interest: '5%' },
      { months: 6, monthlyPayment: 38, totalCost: 228, interest: '8%' },
    ],
    features: [
      '24/7 availability',
      'Multi-language support',
      'Context-aware responses',
      'Expert knowledge base',
      'Personalized assistance',
    ],
    benefits: [
      'Instant expert consultation',
      'Round-the-clock support',
      'Multilingual communication',
      'Consistent advice quality',
      'Cost-effective guidance',
    ],
    technologies: [
      'Large Language Models',
      'Conversational AI',
      'Knowledge Graphs',
      'Sentiment Analysis',
      'Context Understanding',
    ],
    icon: Bot,
    color: 'from-emerald-600 to-green-500',
    bgGlow: 'bg-emerald-500/10',
  },
  {
    id: 'prediction-ai',
    name: 'Success Prediction Engine',
    category: 'Analytics',
    type: 'prediction',
    description:
      'Machine learning model that predicts immigration success rates based on historical data and current immigration trends.',
    processingTime: '2.1 seconds',
    accuracyRate: 94.3,
    basePrice: 249,
    emiOptions: [
      { months: 3, monthlyPayment: 90, totalCost: 270, interest: '5%' },
      { months: 6, monthlyPayment: 48, totalCost: 288, interest: '8%' },
    ],
    features: [
      'Historical data analysis',
      'Trend prediction',
      'Risk assessment',
      'Timeline forecasting',
      'Success optimization',
    ],
    benefits: [
      'Data-driven insights',
      'Risk mitigation',
      'Strategic planning',
      'Timeline optimization',
      'Success maximization',
    ],
    technologies: [
      'Machine Learning',
      'Time Series Analysis',
      'Regression Models',
      'Neural Networks',
      'Data Analytics',
    ],
    icon: BarChart3,
    color: 'from-amber-600 to-orange-500',
    bgGlow: 'bg-amber-500/10',
  },
  {
    id: 'blockchain-verify',
    name: 'Blockchain Verification',
    category: 'Security',
    type: 'verification',
    description:
      'Blockchain-based document verification system ensuring tamper-proof authentication and global recognition.',
    processingTime: '5.0 seconds',
    accuracyRate: 99.9,
    basePrice: 299,
    emiOptions: [
      { months: 3, monthlyPayment: 105, totalCost: 315, interest: '5%' },
      { months: 6, monthlyPayment: 58, totalCost: 348, interest: '8%' },
    ],
    features: [
      'Immutable record keeping',
      'Global verification',
      'Tamper-proof security',
      'Instant authentication',
      'Cross-border recognition',
    ],
    benefits: [
      'Ultimate security',
      'Global acceptance',
      'Fraud prevention',
      'Instant verification',
      'Future-proof technology',
    ],
    technologies: [
      'Blockchain Technology',
      'Cryptographic Hashing',
      'Smart Contracts',
      'Distributed Ledger',
      'Digital Signatures',
    ],
    icon: Shield,
    color: 'from-red-600 to-pink-500',
    bgGlow: 'bg-red-500/10',
  },
];

const referralPrograms = [
  {
    id: 'ai-referral',
    title: 'AI Innovation Referral',
    description: 'Refer friends to AI services and earn rewards',
    reward: '$200',
    icon: Brain,
    color: 'from-blue-500 to-cyan-500',
    features: [
      'Earn $200 for each AI service referral',
      'Bonus rewards for premium subscriptions',
      'Real-time tracking dashboard',
      'Monthly performance bonuses',
    ],
  },
  {
    id: 'tech-ambassador',
    title: 'Tech Ambassador Program',
    description: 'Become an AI technology ambassador',
    reward: '30% Commission',
    icon: Crown,
    color: 'from-purple-500 to-violet-500',
    features: [
      '30% commission on all sales',
      'Exclusive access to beta features',
      'Priority technical support',
      'Ambassador certification',
    ],
  },
  {
    id: 'innovation-rewards',
    title: 'Innovation Rewards',
    description: 'Earn points for AI feature usage',
    reward: '5x Points',
    icon: Sparkles,
    color: 'from-amber-500 to-orange-500',
    features: [
      'Earn 5 points per AI feature used',
      'Redeem for premium subscriptions',
      'Unlock exclusive AI models',
      'VIP access to new features',
    ],
  },
];

const luckyDraws = [
  {
    id: 'ai-innovation-draw',
    title: 'AI Innovation Grand Prize',
    description: 'Win cutting-edge AI tools and services',
    prize: '$50,000 AI Suite',
    entries: '28,341',
    deadline: '31st March 2025',
    icon: Brain,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'tech-startup-draw',
    title: 'Tech Startup Package',
    description: 'Complete AI business solution',
    prize: '$25,000 Package',
    entries: '19,782',
    deadline: '15th March 2025',
    icon: Rocket,
    color: 'from-purple-500 to-violet-500',
  },
  {
    id: 'premium-access-draw',
    title: 'Lifetime Premium Access',
    description: 'Unlimited access to all AI features',
    prize: 'Lifetime Premium',
    entries: '33,567',
    deadline: '28th March 2025',
    icon: Crown,
    color: 'from-amber-500 to-orange-500',
  },
];

const aiTechnologies = [
  {
    name: 'Natural Language Processing',
    description: 'Advanced language understanding and generation',
    icon: MessageSquare,
    applications: [
      'Document Analysis',
      'Chatbot Responses',
      'Translation',
      'Content Generation',
    ],
    accuracy: '98.7%',
  },
  {
    name: 'Computer Vision',
    description: 'Image and document recognition technology',
    icon: Eye,
    applications: [
      'Document Scanning',
      'ID Verification',
      'Photo Analysis',
      'Signature Detection',
    ],
    accuracy: '99.3%',
  },
  {
    name: 'Machine Learning',
    description: 'Predictive analytics and pattern recognition',
    icon: Cpu,
    applications: [
      'Success Prediction',
      'Risk Assessment',
      'Trend Analysis',
      'Optimization',
    ],
    accuracy: '96.8%',
  },
  {
    name: 'Deep Learning',
    description: 'Neural networks for complex problem solving',
    icon: Network,
    applications: [
      'Complex Decision Making',
      'Pattern Recognition',
      'Anomaly Detection',
      'Automation',
    ],
    accuracy: '97.5%',
  },
  {
    name: 'Blockchain Verification',
    description: 'Secure and immutable record keeping',
    icon: Shield,
    applications: [
      'Document Authentication',
      'Identity Verification',
      'Fraud Prevention',
      'Audit Trails',
    ],
    accuracy: '99.9%',
  },
  {
    name: 'Robotic Process Automation',
    description: 'Automated workflow and task execution',
    icon: Bot,
    applications: [
      'Application Processing',
      'Data Entry',
      'Status Updates',
      'Communication',
    ],
    accuracy: '99.1%',
  },
];

export default function AIInnovationsPage() {
  const [selectedFeature, setSelectedFeature] = useState(aiFeatures[0]);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const floatingY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const formatPrice = (priceInUSD: number) => {
    const convertedPrice = priceInUSD * selectedCurrency.rate;
    return `${selectedCurrency.symbol}${convertedPrice.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
  };

  return (
    <div
      ref={containerRef}
      className='min-h-screen bg-gradient-to-b from-neutral-950 to-neutral-900 text-white'
    >
      {/* Navigation Header */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className='fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-md border-b border-white/10'
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            {/* Left side - Back and Home buttons */}
            <div className='flex items-center gap-4'>
              <Link
                href='/'
                className='flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 group'
              >
                <Home className='w-4 h-4 text-purple-400 group-hover:text-white' />
                <span className='text-white font-medium hidden sm:block'>
                  Home
                </span>
              </Link>
              <button
                onClick={() => window.history.back()}
                className='flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 group'
              >
                <ArrowLeft className='w-4 h-4 text-purple-400 group-hover:text-white' />
                <span className='text-white font-medium hidden sm:block'>
                  Back
                </span>
              </button>
            </div>

            {/* Center - Page Title */}
            <div className='flex items-center gap-2'>
              <Brain className='w-6 h-6 text-purple-400' />
              <h1 className='text-xl font-bold text-white hidden sm:block'>
                AI Innovations
              </h1>
            </div>

            {/* Right side - Language/Currency and Menu */}
            <div className='flex items-center gap-4'>
              {/* Language and Currency Selector - Desktop */}
              <div className='hidden md:flex gap-2'>
                <select
                  value={selectedLanguage.code}
                  onChange={e => {
                    const lang = languages.find(l => l.code === e.target.value);
                    if (lang) setSelectedLanguage(lang);
                  }}
                  className='px-3 py-1 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500'
                >
                  {languages.map(lang => (
                    <option
                      key={lang.code}
                      value={lang.code}
                      className='bg-slate-800'
                    >
                      {lang.flag} {lang.name}
                    </option>
                  ))}
                </select>
                <select
                  value={selectedCurrency.code}
                  onChange={e => {
                    const currency = currencies.find(
                      c => c.code === e.target.value
                    );
                    if (currency) setSelectedCurrency(currency);
                  }}
                  className='px-3 py-1 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500'
                >
                  {currencies.map(currency => (
                    <option
                      key={currency.code}
                      value={currency.code}
                      className='bg-slate-800'
                    >
                      {currency.symbol} {currency.code}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300'
              >
                {isMenuOpen ? (
                  <X className='w-5 h-5 text-white' />
                ) : (
                  <Menu className='w-5 h-5 text-white' />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={false}
            animate={{
              height: isMenuOpen ? 'auto' : 0,
              opacity: isMenuOpen ? 1 : 0,
            }}
            className='md:hidden overflow-hidden'
          >
            <div className='py-4 space-y-4 border-t border-white/10'>
              <div className='flex flex-col gap-2'>
                <label className='text-sm text-slate-300'>Language</label>
                <select
                  value={selectedLanguage.code}
                  onChange={e => {
                    const lang = languages.find(l => l.code === e.target.value);
                    if (lang) setSelectedLanguage(lang);
                  }}
                  className='px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500'
                >
                  {languages.map(lang => (
                    <option
                      key={lang.code}
                      value={lang.code}
                      className='bg-slate-800'
                    >
                      {lang.flag} {lang.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className='flex flex-col gap-2'>
                <label className='text-sm text-slate-300'>Currency</label>
                <select
                  value={selectedCurrency.code}
                  onChange={e => {
                    const currency = currencies.find(
                      c => c.code === e.target.value
                    );
                    if (currency) setSelectedCurrency(currency);
                  }}
                  className='px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500'
                >
                  {currencies.map(currency => (
                    <option
                      key={currency.code}
                      value={currency.code}
                      className='bg-slate-800'
                    >
                      {currency.symbol} {currency.code}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Animated Background */}
      <motion.div
        style={{ y: backgroundY }}
        className='absolute inset-0 overflow-hidden'
      >
        <div className='absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl' />
        <div className='absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl' />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-600/5 to-blue-600/5 rounded-full blur-3xl' />
      </motion.div>

      {/* Floating AI Elements */}
      <motion.div
        style={{ y: floatingY }}
        className='absolute inset-0 overflow-hidden'
      >
        {Array.from({ length: 10 }, (_, i) => (
          <motion.div
            key={i}
            className='absolute opacity-20'
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {i % 4 === 0 && <Brain className='text-blue-400 text-xl' />}
            {i % 4 === 1 && <Zap className='text-purple-400 text-xl' />}
            {i % 4 === 2 && <Bot className='text-cyan-400 text-xl' />}
            {i % 4 === 3 && <Sparkles className='text-amber-400 text-xl' />}
          </motion.div>
        ))}
      </motion.div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative z-10'>
        {/* Reduced pt from 32 to 20 to account for new nav */}
        {/* Hero Section */}
        <div className='text-center max-w-5xl mx-auto mb-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-300 font-medium text-sm mb-6'
          >
            <span className='text-2xl'>🤖</span>
            AI-Powered Immigration Innovation
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6'
          >
            The Future of
            <span className='block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent'>
              AI Immigration Technology
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='text-xl text-neutral-300 leading-relaxed mb-8'
          >
            Experience revolutionary AI innovations that transform immigration
            processes. From document analysis to success prediction - our
            cutting-edge technology delivers unprecedented accuracy and speed.
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-8'
          >
            {[
              {
                label: 'AI Accuracy',
                value: '99.7%',
                icon: Target,
                color: 'text-green-400',
              },
              {
                label: 'Processing Speed',
                value: '0.3s',
                icon: Zap,
                color: 'text-blue-400',
              },
              {
                label: 'Total Users',
                value: '2.5M+',
                icon: Brain,
                color: 'text-purple-400',
              },
              {
                label: 'Success Rate',
                value: '96.8%',
                icon: Trophy,
                color: 'text-amber-400',
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className='bg-gradient-to-br from-neutral-900/60 to-neutral-900/30 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-4 text-center'
              >
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
                <div className='text-2xl font-bold text-white'>
                  {stat.value}
                </div>
                <div className='text-neutral-400 text-sm'>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.0 }}
            className='flex flex-col sm:flex-row gap-4 justify-center'
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2'
            >
              <Brain className='w-5 h-5' />
              Try AI Demo Free
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='px-8 py-4 bg-neutral-800/50 text-white font-semibold rounded-xl hover:bg-neutral-700/50 transition-all duration-300 flex items-center justify-center gap-2'
            >
              <Gift className='w-5 h-5' />
              View AI Rewards
            </motion.button>
          </motion.div>
        </div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className='flex flex-wrap justify-center gap-4 mb-16'
        >
          {[
            { id: 'overview', label: 'AI Overview', icon: Brain },
            { id: 'features', label: 'AI Features', icon: Zap },
            { id: 'technology', label: 'Technology', icon: Cpu },
            { id: 'referrals', label: 'AI Rewards', icon: UserPlus },
            { id: 'lucky-draws', label: 'Tech Draws', icon: Gift },
            { id: 'pricing', label: 'AI Pricing', icon: CreditCard },
          ].map(tab => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gradient-to-r from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 text-neutral-300 hover:border-neutral-700/50 hover:text-white'
              }`}
            >
              <tab.icon className='w-4 h-4' />
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <div className='max-w-6xl mx-auto'>
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='space-y-8'
            >
              {/* AI Innovation Stats */}
              <div className='bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-3xl p-8'>
                <h2 className='text-3xl font-bold text-white mb-8 text-center'>
                  AI Innovation Dashboard
                </h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                  {Object.entries(aiInnovationStats).map(([key, value]) => (
                    <div
                      key={key}
                      className='bg-neutral-800/30 rounded-xl p-4 text-center'
                    >
                      <div className='text-sm text-neutral-400 capitalize mb-2'>
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                      <div className='text-white font-semibold text-xl'>
                        {value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Technologies */}
              <div className='bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-3xl p-8'>
                <h2 className='text-3xl font-bold text-white mb-8 text-center'>
                  Core AI Technologies
                </h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                  {aiTechnologies.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className='bg-neutral-800/30 rounded-xl p-6 hover:bg-neutral-800/50 transition-all duration-300'
                    >
                      <div className='flex items-center gap-3 mb-4'>
                        <tech.icon className='w-8 h-8 text-blue-400' />
                        <div>
                          <h3 className='text-lg font-bold text-white'>
                            {tech.name}
                          </h3>
                          <p className='text-neutral-400 text-sm'>
                            Accuracy: {tech.accuracy}
                          </p>
                        </div>
                      </div>
                      <p className='text-neutral-300 mb-4'>
                        {tech.description}
                      </p>
                      <div className='space-y-1'>
                        {tech.applications.slice(0, 3).map((app, idx) => (
                          <div
                            key={idx}
                            className='flex items-center gap-2 text-sm text-neutral-400'
                          >
                            <CheckCircle className='w-3 h-3 text-green-400 flex-shrink-0' />
                            {app}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* AI Features Tab */}
          {activeTab === 'features' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='space-y-8'
            >
              {/* Feature Selector */}
              <div className='grid lg:grid-cols-5 gap-4 mb-8'>
                {aiFeatures.map(feature => (
                  <motion.button
                    key={feature.id}
                    onClick={() => setSelectedFeature(feature)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative p-4 rounded-xl border transition-all duration-300 ${
                      selectedFeature.id === feature.id
                        ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/50 text-white'
                        : 'bg-neutral-900/60 border-neutral-800 text-neutral-300 hover:border-neutral-700 hover:bg-neutral-900/80'
                    }`}
                  >
                    {feature.popular && (
                      <div className='absolute -top-2 -right-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full'>
                        Popular
                      </div>
                    )}
                    <feature.icon className='w-8 h-8 mx-auto mb-2' />
                    <div className='text-sm font-semibold text-center'>
                      {feature.name}
                    </div>
                    <div className='text-xs text-neutral-400 text-center mt-1'>
                      {feature.category}
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Selected Feature Details */}
              <div className='bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-3xl p-8'>
                <div className='grid lg:grid-cols-2 gap-8'>
                  {/* Feature Info */}
                  <div>
                    <div className='flex items-center gap-4 mb-6'>
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${selectedFeature.color} flex items-center justify-center`}
                      >
                        <selectedFeature.icon className='w-8 h-8 text-white' />
                      </div>
                      <div>
                        <h3 className='text-2xl font-bold text-white'>
                          {selectedFeature.name}
                        </h3>
                        <div className='text-blue-400 font-medium'>
                          {selectedFeature.category} AI
                        </div>
                      </div>
                    </div>

                    <p className='text-neutral-300 mb-6 leading-relaxed'>
                      {selectedFeature.description}
                    </p>

                    {/* Key Stats */}
                    <div className='grid grid-cols-2 gap-4 mb-6'>
                      <div className='bg-neutral-800/30 rounded-xl p-4'>
                        <div className='text-green-400 font-semibold text-lg'>
                          {selectedFeature.accuracyRate}%
                        </div>
                        <div className='text-xs text-neutral-400'>
                          Accuracy Rate
                        </div>
                      </div>
                      <div className='bg-neutral-800/30 rounded-xl p-4'>
                        <div className='text-blue-400 font-semibold text-lg'>
                          {selectedFeature.processingTime}
                        </div>
                        <div className='text-xs text-neutral-400'>
                          Processing Speed
                        </div>
                      </div>
                      <div className='bg-neutral-800/30 rounded-xl p-4'>
                        <div className='text-purple-400 font-semibold text-lg'>
                          {formatPrice(selectedFeature.basePrice)}
                        </div>
                        <div className='text-xs text-neutral-400'>
                          Starting Price
                        </div>
                      </div>
                      <div className='bg-neutral-800/30 rounded-xl p-4'>
                        <div className='text-amber-400 font-semibold text-lg'>
                          EMI Available
                        </div>
                        <div className='text-xs text-neutral-400'>
                          Flexible Payment
                        </div>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full bg-gradient-to-r ${selectedFeature.color} text-white font-semibold py-3 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}
                    >
                      Try {selectedFeature.name}
                      <ArrowRight className='w-4 h-4' />
                    </motion.button>
                  </div>

                  {/* Feature Details */}
                  <div className='space-y-6'>
                    {/* Features */}
                    <div>
                      <button
                        onClick={() => toggleSection('features')}
                        className='flex items-center justify-between w-full text-left mb-4'
                      >
                        <h4 className='text-xl font-bold text-white'>
                          Key Features
                        </h4>
                        {expandedSection === 'features' ? (
                          <ChevronUp className='w-5 h-5 text-neutral-400' />
                        ) : (
                          <ChevronDown className='w-5 h-5 text-neutral-400' />
                        )}
                      </button>
                      {expandedSection === 'features' && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className='space-y-2'
                        >
                          {selectedFeature.features.map((feature, index) => (
                            <div
                              key={index}
                              className='flex items-center gap-3 text-neutral-300'
                            >
                              <Zap className='w-4 h-4 text-blue-400 flex-shrink-0' />
                              {feature}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </div>

                    {/* Benefits */}
                    <div>
                      <button
                        onClick={() => toggleSection('benefits')}
                        className='flex items-center justify-between w-full text-left mb-4'
                      >
                        <h4 className='text-xl font-bold text-white'>
                          Benefits
                        </h4>
                        {expandedSection === 'benefits' ? (
                          <ChevronUp className='w-5 h-5 text-neutral-400' />
                        ) : (
                          <ChevronDown className='w-5 h-5 text-neutral-400' />
                        )}
                      </button>
                      {expandedSection === 'benefits' && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className='space-y-2'
                        >
                          {selectedFeature.benefits.map((benefit, index) => (
                            <div
                              key={index}
                              className='flex items-center gap-3 text-neutral-300'
                            >
                              <Star className='w-4 h-4 text-amber-400 flex-shrink-0' />
                              {benefit}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </div>

                    {/* Technologies */}
                    <div>
                      <button
                        onClick={() => toggleSection('technologies')}
                        className='flex items-center justify-between w-full text-left mb-4'
                      >
                        <h4 className='text-xl font-bold text-white'>
                          Technologies Used
                        </h4>
                        {expandedSection === 'technologies' ? (
                          <ChevronUp className='w-5 h-5 text-neutral-400' />
                        ) : (
                          <ChevronDown className='w-5 h-5 text-neutral-400' />
                        )}
                      </button>
                      {expandedSection === 'technologies' && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className='space-y-3'
                        >
                          {selectedFeature.technologies.map((tech, index) => (
                            <div
                              key={index}
                              className='flex items-center gap-3 text-neutral-300'
                            >
                              <div className='w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold'>
                                {index + 1}
                              </div>
                              {tech}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Technology Tab */}
          {activeTab === 'technology' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-3xl p-8'
            >
              <h2 className='text-3xl font-bold text-white mb-8 text-center'>
                Advanced AI Technology Stack
              </h2>
              <div className='grid md:grid-cols-2 gap-8'>
                {aiTechnologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className='bg-neutral-800/30 rounded-xl p-6'
                  >
                    <div className='flex items-center gap-3 mb-4'>
                      <tech.icon className='w-10 h-10 text-blue-400' />
                      <div>
                        <h3 className='text-xl font-bold text-white'>
                          {tech.name}
                        </h3>
                        <div className='text-green-400 font-semibold'>
                          Accuracy: {tech.accuracy}
                        </div>
                      </div>
                    </div>
                    <p className='text-neutral-300 mb-4'>{tech.description}</p>
                    <div className='space-y-2'>
                      <h4 className='text-sm font-semibold text-white mb-2'>
                        Applications:
                      </h4>
                      {tech.applications.map((app, idx) => (
                        <div
                          key={idx}
                          className='flex items-center gap-2 text-sm text-neutral-300'
                        >
                          <CheckCircle className='w-4 h-4 text-green-400 flex-shrink-0' />
                          {app}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* AI Rewards Tab */}
          {activeTab === 'referrals' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='space-y-8'
            >
              <div className='bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-3xl p-8'>
                <h2 className='text-3xl font-bold text-white mb-8 text-center'>
                  AI Innovation Rewards
                </h2>
                <div className='grid md:grid-cols-3 gap-6'>
                  {referralPrograms.map((program, index) => (
                    <motion.div
                      key={program.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className={`bg-gradient-to-r ${program.color} bg-opacity-10 border border-opacity-20 rounded-xl p-6 text-center`}
                    >
                      <program.icon className='w-12 h-12 text-white mx-auto mb-4' />
                      <h3 className='text-xl font-bold text-white mb-2'>
                        {program.title}
                      </h3>
                      <div
                        className={`text-2xl font-bold mb-3 bg-gradient-to-r ${program.color} bg-clip-text text-transparent`}
                      >
                        {program.reward}
                      </div>
                      <p className='text-neutral-300 mb-4'>
                        {program.description}
                      </p>
                      <div className='space-y-2'>
                        {program.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className='flex items-center gap-2 text-sm text-neutral-300'
                          >
                            <CheckCircle className='w-4 h-4 text-green-400 flex-shrink-0' />
                            {feature}
                          </div>
                        ))}
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-full mt-4 bg-gradient-to-r ${program.color} text-white font-semibold py-2 rounded-lg`}
                      >
                        Join Program
                      </motion.button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Tech Draws Tab */}
          {activeTab === 'lucky-draws' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='space-y-8'
            >
              <div className='bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-3xl p-8'>
                <h2 className='text-3xl font-bold text-white mb-8 text-center'>
                  🚀 AI Technology Giveaways 🚀
                </h2>
                <div className='grid md:grid-cols-3 gap-6'>
                  {luckyDraws.map((draw, index) => (
                    <motion.div
                      key={draw.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className={`bg-gradient-to-r ${draw.color} bg-opacity-10 border border-opacity-30 rounded-xl p-6 relative overflow-hidden`}
                    >
                      <div className='absolute top-2 right-2'>
                        <div className='bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full'>
                          LIVE
                        </div>
                      </div>

                      <draw.icon className='w-12 h-12 text-white mx-auto mb-4' />
                      <h3 className='text-xl font-bold text-white mb-2 text-center'>
                        {draw.title}
                      </h3>
                      <div
                        className={`text-2xl font-bold mb-3 text-center bg-gradient-to-r ${draw.color} bg-clip-text text-transparent`}
                      >
                        {draw.prize}
                      </div>
                      <p className='text-neutral-300 mb-4 text-center'>
                        {draw.description}
                      </p>

                      <div className='space-y-3'>
                        <div className='flex justify-between items-center'>
                          <span className='text-neutral-400'>Entries:</span>
                          <span className='text-green-400 font-semibold'>
                            {draw.entries}
                          </span>
                        </div>
                        <div className='flex justify-between items-center'>
                          <span className='text-neutral-400'>Deadline:</span>
                          <span className='text-amber-400 font-semibold'>
                            {draw.deadline}
                          </span>
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-full mt-4 bg-gradient-to-r ${draw.color} text-white font-semibold py-2 rounded-lg`}
                      >
                        Enter Draw
                      </motion.button>
                    </motion.div>
                  ))}
                </div>

                <div className='mt-8 p-6 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl text-center'>
                  <h3 className='text-xl font-bold text-white mb-2'>
                    How to Enter AI Draws?
                  </h3>
                  <p className='text-neutral-300 mb-4'>
                    Use our AI features, refer friends, or subscribe to premium
                    services to earn entries!
                  </p>
                  <div className='flex justify-center gap-4'>
                    <div className='text-center'>
                      <div className='text-2xl font-bold text-blue-400'>
                        1 Entry
                      </div>
                      <div className='text-xs text-neutral-400'>
                        Per AI Feature Use
                      </div>
                    </div>
                    <div className='text-center'>
                      <div className='text-2xl font-bold text-purple-400'>
                        10 Entries
                      </div>
                      <div className='text-xs text-neutral-400'>
                        Per AI Referral
                      </div>
                    </div>
                    <div className='text-center'>
                      <div className='text-2xl font-bold text-amber-400'>
                        25 Entries
                      </div>
                      <div className='text-xs text-neutral-400'>
                        Premium Subscription
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* AI Pricing Tab */}
          {activeTab === 'pricing' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='space-y-8'
            >
              <div className='bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-3xl p-8'>
                <h2 className='text-3xl font-bold text-white mb-8 text-center'>
                  AI Innovation Pricing
                </h2>

                {/* Selected Feature EMI Options */}
                <div className='mb-8'>
                  <h3 className='text-xl font-bold text-white mb-4 text-center'>
                    Payment Plans for {selectedFeature.name}
                  </h3>
                  <div className='grid md:grid-cols-2 gap-6'>
                    {selectedFeature.emiOptions.map((emi, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className='bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-6 text-center'
                      >
                        <CreditCard className='w-8 h-8 text-blue-400 mx-auto mb-3' />
                        <div className='text-2xl font-bold text-white mb-2'>
                          {emi.months} Months
                        </div>
                        <div className='text-blue-400 font-bold text-xl mb-2'>
                          {formatPrice(emi.monthlyPayment)}/month
                        </div>
                        <div className='space-y-1 text-sm'>
                          <div className='text-neutral-300'>
                            Total: {formatPrice(emi.totalCost)}
                          </div>
                          <div className='text-amber-400'>
                            Interest: {emi.interest}
                          </div>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className='w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-500 text-white font-semibold py-2 rounded-lg'
                        >
                          Choose Plan
                        </motion.button>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Payment Features */}
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                  {[
                    {
                      title: 'AI Trial Free',
                      description: 'Try all AI features for 7 days',
                      icon: Brain,
                      color: 'text-green-400',
                    },
                    {
                      title: 'Flexible Terms',
                      description: 'Custom payment schedules available',
                      icon: Calendar,
                      color: 'text-blue-400',
                    },
                    {
                      title: 'AI Rewards',
                      description: 'Earn points for every AI interaction',
                      icon: Star,
                      color: 'text-purple-400',
                    },
                    {
                      title: 'Premium Support',
                      description: '24/7 AI expert assistance',
                      icon: Crown,
                      color: 'text-amber-400',
                    },
                  ].map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className='bg-neutral-800/30 rounded-xl p-6 text-center'
                    >
                      <feature.icon
                        className={`w-12 h-12 ${feature.color} mx-auto mb-4`}
                      />
                      <h3 className='text-lg font-bold text-white mb-2'>
                        {feature.title}
                      </h3>
                      <p className='text-neutral-300 text-sm'>
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
          className='text-center mt-16'
        >
          <div className='bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-12 max-w-4xl mx-auto'>
            <div className='flex items-center justify-center gap-2 mb-6'>
              <span className='text-4xl'>🤖</span>
              <Brain className='w-8 h-8 text-blue-400' />
              <span className='text-4xl'>✨</span>
            </div>
            <h3 className='text-3xl font-bold text-white mb-4'>
              Ready to Experience AI Innovation?
            </h3>
            <p className='text-xl text-neutral-300 mb-8'>
              Join 2.5M+ users leveraging cutting-edge AI technology for
              immigration success. Start your AI-powered journey today with
              exclusive rewards and flexible pricing.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2'
              >
                <Brain className='w-5 h-5' />
                Start Free AI Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='px-8 py-4 bg-neutral-800/50 text-white font-semibold rounded-xl hover:bg-neutral-700/50 transition-all duration-300 flex items-center justify-center gap-2'
              >
                <Phone className='w-5 h-5' />
                AI Expert Consultation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
