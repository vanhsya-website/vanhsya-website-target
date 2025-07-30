'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import {
  Calculator,
  Brain,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  FileText,
  Phone,
  ChevronDown,
  ChevronUp,
  Gift,
  CreditCard,
  Coins,
  Trophy,
  UserPlus,
  BarChart3,
  Target,
  Globe,
  DollarSign,
  Award,
  TrendingUp,
  Clock,
  Home,
  ArrowLeft,
  Menu,
  X,
} from 'lucide-react';

import { generateFloatingElements } from '@/utils/deterministicRandom';

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

const calculatorStats = {
  totalCalculations: '5M+',
  aiAccuracy: '99.8%',
  averageScore: '425 points',
  successPrediction: '94.7%',
  countriesAnalyzed: '25+',
  visaTypesSupported: '150+',
  responseTime: '0.2 seconds',
  satisfactionRate: '99.2%',
};

const calculatorFeatures = [
  {
    id: 'crs-calculator',
    name: 'CRS Score Calculator',
    category: 'Scoring',
    type: 'canada',
    description:
      'Advanced Comprehensive Ranking System calculator for Canada Express Entry with real-time scoring and optimization suggestions.',
    processingTime: '0.2 seconds',
    accuracyRate: 99.8,
    basePrice: 49,
    emiOptions: [
      { months: 3, monthlyPayment: 18, totalCost: 54, interest: '5%' },
      { months: 6, monthlyPayment: 10, totalCost: 60, interest: '8%' },
    ],
    features: [
      'Real-time CRS scoring',
      'Factor-wise breakdown',
      'Improvement suggestions',
      'Draw prediction analysis',
      'Provincial nomination impact',
    ],
    benefits: [
      'Instant score calculation',
      'Optimization recommendations',
      'Draw prediction accuracy',
      'Factor improvement tips',
      'Success probability analysis',
    ],
    technologies: [
      'AI Prediction Models',
      'Real-time Processing',
      'Machine Learning',
      'Statistical Analysis',
    ],
    icon: Calculator,
    color: 'from-blue-600 to-cyan-600',
  },
  {
    id: 'points-system',
    name: 'Universal Points Calculator',
    category: 'Assessment',
    type: 'multi-country',
    description:
      'Multi-country immigration points calculator supporting Australia SkillSelect, New Zealand EOI, and other points-based systems.',
    processingTime: '0.3 seconds',
    accuracyRate: 99.5,
    basePrice: 69,
    emiOptions: [
      { months: 3, monthlyPayment: 25, totalCost: 75, interest: '5%' },
      { months: 6, monthlyPayment: 14, totalCost: 84, interest: '8%' },
    ],
    features: [
      'Multi-country support',
      'Points breakdown analysis',
      'Eligibility assessment',
      'Pathway recommendations',
      'Success rate predictions',
    ],
    benefits: [
      'Compare multiple countries',
      'Detailed point analysis',
      'Pathway optimization',
      'Success probability',
      'Expert recommendations',
    ],
    technologies: [
      'Multi-Algorithm Processing',
      'Comparative Analysis',
      'Predictive Modeling',
      'Data Validation',
    ],
    icon: Globe,
    color: 'from-green-600 to-emerald-600',
  },
  {
    id: 'eligibility-predictor',
    name: 'AI Eligibility Predictor',
    category: 'Prediction',
    type: 'ai-powered',
    description:
      'Revolutionary AI-powered eligibility predictor that analyzes your profile against 150+ visa programs across 25+ countries.',
    processingTime: '0.5 seconds',
    accuracyRate: 96.8,
    basePrice: 99,
    emiOptions: [
      { months: 3, monthlyPayment: 35, totalCost: 105, interest: '5%' },
      { months: 6, monthlyPayment: 20, totalCost: 120, interest: '8%' },
    ],
    features: [
      'AI-powered predictions',
      'Multi-visa analysis',
      'Success probability',
      'Alternative pathways',
      'Personalized roadmaps',
    ],
    benefits: [
      'Smart visa matching',
      'Accurate predictions',
      'Multiple options',
      'Personalized guidance',
      'Success optimization',
    ],
    technologies: [
      'Neural Networks',
      'Deep Learning',
      'Pattern Recognition',
      'Predictive Analytics',
    ],
    icon: Brain,
    color: 'from-purple-600 to-pink-600',
  },
  {
    id: 'financial-calculator',
    name: 'Immigration Cost Calculator',
    category: 'Financial',
    type: 'budgeting',
    description:
      'Comprehensive financial calculator for immigration costs including government fees, living expenses, and settlement funds.',
    processingTime: '0.1 seconds',
    accuracyRate: 99.9,
    basePrice: 39,
    emiOptions: [
      { months: 3, monthlyPayment: 14, totalCost: 42, interest: '5%' },
      { months: 6, monthlyPayment: 8, totalCost: 48, interest: '8%' },
    ],
    features: [
      'Complete cost breakdown',
      'Currency conversions',
      'Living cost estimates',
      'Budget planning tools',
      'Payment timeline',
    ],
    benefits: [
      'Accurate budgeting',
      'No hidden costs',
      'Payment planning',
      'Cost optimization',
      'Financial readiness',
    ],
    technologies: [
      'Real-time Exchange Rates',
      'Cost Database',
      'Financial Modeling',
      'Budget Optimization',
    ],
    icon: DollarSign,
    color: 'from-yellow-600 to-orange-600',
  },
  {
    id: 'timeline-calculator',
    name: 'Processing Time Calculator',
    category: 'Timeline',
    type: 'scheduling',
    description:
      'Smart timeline calculator that predicts processing times based on current trends, visa type, and application complexity.',
    processingTime: '0.2 seconds',
    accuracyRate: 94.2,
    basePrice: 29,
    emiOptions: [
      { months: 3, monthlyPayment: 11, totalCost: 33, interest: '5%' },
      { months: 6, monthlyPayment: 6, totalCost: 36, interest: '8%' },
    ],
    features: [
      'Processing time predictions',
      'Milestone tracking',
      'Delay alerts',
      'Rush processing options',
      'Timeline optimization',
    ],
    benefits: [
      'Accurate timelines',
      'Better planning',
      'Proactive alerts',
      'Time optimization',
      'Milestone tracking',
    ],
    technologies: [
      'Time Series Analysis',
      'Trend Prediction',
      'Statistical Modeling',
      'Data Analytics',
    ],
    icon: Clock,
    color: 'from-indigo-600 to-purple-600',
  },
];

const coreCapabilities = [
  {
    id: 'real-time-scoring',
    name: 'Real-time Scoring Engine',
    description:
      'Instant immigration score calculation with live updates as you input data.',
    accuracy: '99.8%',
    speed: '0.1s',
    icon: Zap,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    id: 'multi-country-support',
    name: 'Multi-Country Analysis',
    description:
      'Compare immigration options across 25+ countries simultaneously.',
    coverage: '25+ countries',
    programs: '150+ visa types',
    icon: Globe,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'ai-predictions',
    name: 'AI Success Predictions',
    description:
      'Advanced machine learning models predict your immigration success probability.',
    accuracy: '96.8%',
    dataPoints: '1000+',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'pathway-optimization',
    name: 'Pathway Optimization',
    description:
      'Smart recommendations to improve your immigration profile and increase success rates.',
    improvement: 'Up to 40%',
    suggestions: '25+ factors',
    icon: Target,
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'comprehensive-analysis',
    name: 'Comprehensive Analysis',
    description:
      'Detailed breakdown of all immigration factors with personalized recommendations.',
    factors: '50+ analyzed',
    depth: 'Expert-level',
    icon: BarChart3,
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: 'financial-planning',
    name: 'Financial Planning Tools',
    description:
      'Complete financial planning with cost calculators and budget optimization.',
    currencies: '8 supported',
    accuracy: '99.9%',
    icon: CreditCard,
    color: 'from-emerald-500 to-teal-500',
  },
];

// Referral Programs
const referralPrograms = [
  {
    id: 'calculator-champion',
    name: 'Calculator Champion Program',
    description:
      'Earn rewards for every successful immigration score calculation referral',
    baseReward: 25,
    bonusReward: 50,
    requirements: '3 successful calculations',
    features: [
      'Instant reward credits',
      'Performance bonuses',
      'VIP calculator access',
      'Priority support',
    ],
  },
  {
    id: 'score-optimizer',
    name: 'Score Optimizer Network',
    description:
      'Premium rewards for referring users who improve their scores significantly',
    baseReward: 40,
    bonusReward: 100,
    requirements: '20+ point improvement',
    features: [
      'Performance tracking',
      'Optimization bonuses',
      'Advanced analytics',
      'Expert consultations',
    ],
  },
  {
    id: 'pathway-partner',
    name: 'Pathway Partner Elite',
    description:
      'Exclusive program for immigration pathway advisors and consultants',
    baseReward: 75,
    bonusReward: 200,
    requirements: 'Professional verification',
    features: [
      'Professional dashboard',
      'Client management tools',
      'Advanced commissions',
      'Co-marketing opportunities',
    ],
  },
];

// Lucky Draws
const luckyDraws = [
  {
    id: 'score-boost-draw',
    name: 'Score Boost Mega Draw',
    description: 'Win professional consultation and score improvement services',
    prizeValue: 2000,
    drawDate: '2025-02-15',
    ticketsAvailable: 5000,
    entryRequirement: 'Complete 3 calculations',
  },
  {
    id: 'pathway-planning-lottery',
    name: 'Pathway Planning Lottery',
    description:
      'Complete immigration pathway consultation and documentation review',
    prizeValue: 5000,
    drawDate: '2025-03-01',
    ticketsAvailable: 2500,
    entryRequirement: 'Refer 2 successful users',
  },
  {
    id: 'golden-calculator-sweepstakes',
    name: 'Golden Calculator Sweepstakes',
    description:
      'Lifetime access to premium calculator suite plus personal consultant',
    prizeValue: 10000,
    drawDate: '2025-03-31',
    ticketsAvailable: 1000,
    entryRequirement: 'Premium subscription + 5 referrals',
  },
];

export default function ImmigrationCalculatorPremiumPage() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [activeFeature, setActiveFeature] = useState('crs-calculator');
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({});
  const [selectedReferralProgram, setSelectedReferralProgram] = useState(
    'calculator-champion'
  );
  const [selectedLuckyDraw, setSelectedLuckyDraw] =
    useState('score-boost-draw');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Generate deterministic floating elements to prevent hydration mismatch
  const floatingElements = generateFloatingElements(
    50,
    'immigration-calculator-bg'
  );

  const heroRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const capabilitiesRef = useRef<HTMLElement>(null);
  const calculatorRef = useRef<HTMLElement>(null);

  const isHeroInView = useInView(heroRef);
  const isFeaturesInView = useInView(featuresRef);
  const isCapabilitiesInView = useInView(capabilitiesRef);
  const isCalculatorInView = useInView(calculatorRef);

  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const formatPrice = (price: number): string => {
    const currency = currencies.find(c => c.code === selectedCurrency);
    if (!currency) return `$${price}`;

    const convertedPrice = (price * currency.rate).toFixed(0);
    return `${currency.symbol}${convertedPrice}`;
  };

  const selectedFeatureData = calculatorFeatures.find(
    f => f.id === activeFeature
  );

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
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
              <Calculator className='w-6 h-6 text-purple-400' />
              <h1 className='text-xl font-bold text-white hidden sm:block'>
                Immigration Calculator
              </h1>
            </div>

            {/* Right side - Language/Currency and Menu */}
            <div className='flex items-center gap-4'>
              {/* Language and Currency Selector - Desktop */}
              <div className='hidden md:flex gap-2'>
                <select
                  value={selectedLanguage}
                  onChange={e => setSelectedLanguage(e.target.value)}
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
                  value={selectedCurrency}
                  onChange={e => setSelectedCurrency(e.target.value)}
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
                  value={selectedLanguage}
                  onChange={e => setSelectedLanguage(e.target.value)}
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
                  value={selectedCurrency}
                  onChange={e => setSelectedCurrency(e.target.value)}
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
      {/* Floating Background Elements */}
      <div className='fixed inset-0 overflow-hidden pointer-events-none'>
        <motion.div style={{ y: backgroundY }} className='absolute inset-0'>
          {floatingElements.map(element => (
            <motion.div
              key={element.id}
              className='absolute w-2 h-2 bg-purple-400/10 rounded-full'
              style={{
                left: `${element.left}%`,
                top: `${element.top}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: element.duration,
                repeat: Infinity,
                delay: element.delay,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Language and Currency Selector */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className='fixed top-4 right-4 z-50 flex gap-2'
      >
        <select
          value={selectedLanguage}
          onChange={e => setSelectedLanguage(e.target.value)}
          className='px-3 py-1 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500'
        >
          {languages.map(lang => (
            <option key={lang.code} value={lang.code} className='bg-slate-800'>
              {lang.flag} {lang.name}
            </option>
          ))}
        </select>
        <select
          value={selectedCurrency}
          onChange={e => setSelectedCurrency(e.target.value)}
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
      </motion.div>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className='relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-16'
      >
        {/* Added pt-16 for nav */}
        <div className='absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-3xl' />

        <motion.div
          style={{ y: textY }}
          className='relative z-10 text-center max-w-6xl mx-auto'
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: isHeroInView ? 1 : 0,
              scale: isHeroInView ? 1 : 0.5,
            }}
            transition={{ duration: 0.8 }}
            className='mb-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-purple-500/30'
          >
            <Calculator className='w-5 h-5 text-purple-400' />
            <span className='text-purple-300 font-medium'>
              AI-Powered Immigration Calculator Suite
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: isHeroInView ? 1 : 0,
              y: isHeroInView ? 0 : 30,
            }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-4xl md:text-6xl lg:text-7xl font-bold mb-8'
          >
            Immigration{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400'>
              Calculator AI
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: isHeroInView ? 1 : 0,
              y: isHeroInView ? 0 : 30,
            }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-4xl mx-auto'
          >
            Experience revolutionary AI technology that calculates immigration
            scores, predicts success rates, and optimizes your pathway to
            permanent residency across 25+ countries with 99.8% accuracy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: isHeroInView ? 1 : 0,
              y: isHeroInView ? 0 : 30,
            }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-12'
          >
            {Object.entries(calculatorStats).map(([key, value], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: isHeroInView ? 1 : 0,
                  scale: isHeroInView ? 1 : 0.8,
                }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className='text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10'
              >
                <div className='text-2xl md:text-3xl font-bold text-purple-400 mb-2'>
                  {value}
                </div>
                <div className='text-sm text-slate-400 capitalize'>
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: isHeroInView ? 1 : 0,
              y: isHeroInView ? 0 : 30,
            }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className='flex flex-col sm:flex-row gap-4 justify-center'
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                calculatorRef.current?.scrollIntoView({ behavior: 'smooth' })
              }
              className='px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center gap-2 justify-center group'
            >
              <Calculator className='w-5 h-5' />
              Start Calculating
              <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center gap-2 justify-center'
            >
              <Star className='w-5 h-5' />
              Watch Demo
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Calculator Features Section */}
      <section ref={featuresRef} className='py-24 px-4 relative'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: isFeaturesInView ? 1 : 0,
              y: isFeaturesInView ? 0 : 30,
            }}
            transition={{ duration: 0.8 }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              Advanced Calculator{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400'>
                Features
              </span>
            </h2>
            <p className='text-xl text-slate-300 max-w-3xl mx-auto'>
              Comprehensive suite of AI-powered immigration calculators designed
              to provide accurate scoring, predictions, and pathway optimization
              for your immigration journey.
            </p>
          </motion.div>

          {/* Feature Selector Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: isFeaturesInView ? 1 : 0,
              y: isFeaturesInView ? 0 : 30,
            }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='flex flex-wrap justify-center gap-4 mb-12'
          >
            {calculatorFeatures.map(feature => (
              <motion.button
                key={feature.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFeature(feature.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeFeature === feature.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'bg-white/10 backdrop-blur-sm border border-white/20 text-slate-300 hover:text-white hover:bg-white/20'
                }`}
              >
                <feature.icon className='w-4 h-4' />
                {feature.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Selected Feature Details */}
          {selectedFeatureData && (
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8'
            >
              <div className='grid lg:grid-cols-2 gap-8'>
                <div>
                  <div className='flex items-center gap-4 mb-6'>
                    <div
                      className={`p-4 rounded-xl bg-gradient-to-r ${selectedFeatureData.color}`}
                    >
                      <selectedFeatureData.icon className='w-8 h-8 text-white' />
                    </div>
                    <div>
                      <h3 className='text-2xl font-bold text-white mb-2'>
                        {selectedFeatureData.name}
                      </h3>
                      <div className='flex items-center gap-4 text-sm text-slate-400'>
                        <span className='px-2 py-1 bg-purple-600/20 rounded-lg'>
                          {selectedFeatureData.category}
                        </span>
                        <span>{selectedFeatureData.processingTime}</span>
                        <span>
                          {selectedFeatureData.accuracyRate}% accuracy
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className='text-slate-300 mb-6 leading-relaxed'>
                    {selectedFeatureData.description}
                  </p>

                  {/* Features, Benefits, Technologies Expandable Sections */}
                  {['features', 'benefits', 'technologies'].map(section => (
                    <div key={section} className='mb-4'>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        onClick={() =>
                          toggleSection(`${activeFeature}-${section}`)
                        }
                        className='w-full flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300'
                      >
                        <span className='font-semibold text-white capitalize'>
                          {section}
                        </span>
                        {expandedSections[`${activeFeature}-${section}`] ? (
                          <ChevronUp className='w-5 h-5 text-purple-400' />
                        ) : (
                          <ChevronDown className='w-5 h-5 text-purple-400' />
                        )}
                      </motion.button>

                      <motion.div
                        initial={false}
                        animate={{
                          height: expandedSections[
                            `${activeFeature}-${section}`
                          ]
                            ? 'auto'
                            : 0,
                          opacity: expandedSections[
                            `${activeFeature}-${section}`
                          ]
                            ? 1
                            : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className='overflow-hidden'
                      >
                        <div className='p-4 space-y-2'>
                          {(
                            selectedFeatureData[
                              section as keyof typeof selectedFeatureData
                            ] as string[]
                          )?.map((item: string, index: number) => (
                            <div
                              key={index}
                              className='flex items-center gap-2 text-slate-300'
                            >
                              <CheckCircle className='w-4 h-4 text-green-400 flex-shrink-0' />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </div>

                <div className='space-y-6'>
                  {/* Pricing Card */}
                  <div className='bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6'>
                    <h4 className='text-xl font-bold text-white mb-4'>
                      Pricing & EMI Options
                    </h4>
                    <div className='mb-4'>
                      <div className='text-3xl font-bold text-purple-400 mb-2'>
                        {formatPrice(selectedFeatureData.basePrice)}
                      </div>
                      <div className='text-slate-400'>One-time payment</div>
                    </div>

                    <div className='space-y-3'>
                      <h5 className='font-semibold text-white'>EMI Options:</h5>
                      {selectedFeatureData.emiOptions.map((emi, index) => (
                        <div
                          key={index}
                          className='flex justify-between items-center p-3 bg-white/5 rounded-lg'
                        >
                          <div>
                            <div className='text-white font-medium'>
                              {emi.months} months
                            </div>
                            <div className='text-slate-400 text-sm'>
                              {emi.interest} interest
                            </div>
                          </div>
                          <div className='text-right'>
                            <div className='text-purple-400 font-bold'>
                              {formatPrice(emi.monthlyPayment)}/month
                            </div>
                            <div className='text-slate-400 text-sm'>
                              Total: {formatPrice(emi.totalCost)}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className='w-full mt-6 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center gap-2 justify-center'
                    >
                      <CreditCard className='w-5 h-5' />
                      Get Access Now
                    </motion.button>
                  </div>

                  {/* Stats Card */}
                  <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6'>
                    <h4 className='text-xl font-bold text-white mb-4'>
                      Performance Stats
                    </h4>
                    <div className='grid grid-cols-2 gap-4'>
                      <div className='text-center'>
                        <div className='text-2xl font-bold text-green-400'>
                          {selectedFeatureData.accuracyRate}%
                        </div>
                        <div className='text-slate-400 text-sm'>
                          Accuracy Rate
                        </div>
                      </div>
                      <div className='text-center'>
                        <div className='text-2xl font-bold text-blue-400'>
                          {selectedFeatureData.processingTime}
                        </div>
                        <div className='text-slate-400 text-sm'>
                          Response Time
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section ref={capabilitiesRef} className='py-24 px-4 relative'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: isCapabilitiesInView ? 1 : 0,
              y: isCapabilitiesInView ? 0 : 30,
            }}
            transition={{ duration: 0.8 }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              Core{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400'>
                Capabilities
              </span>
            </h2>
            <p className='text-xl text-slate-300 max-w-3xl mx-auto'>
              Powered by advanced AI algorithms and machine learning models that
              deliver unparalleled accuracy in immigration calculations and
              predictions.
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {coreCapabilities.map((capability, index) => (
              <motion.div
                key={capability.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: isCapabilitiesInView ? 1 : 0,
                  y: isCapabilitiesInView ? 0 : 30,
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300'
              >
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${capability.color} mb-6`}
                >
                  <capability.icon className='w-8 h-8 text-white' />
                </div>

                <h3 className='text-xl font-bold text-white mb-3'>
                  {capability.name}
                </h3>
                <p className='text-slate-300 mb-4 leading-relaxed'>
                  {capability.description}
                </p>

                <div className='flex gap-4 text-sm'>
                  {capability.accuracy && (
                    <div className='flex items-center gap-1 text-green-400'>
                      <CheckCircle className='w-4 h-4' />
                      {capability.accuracy}
                    </div>
                  )}
                  {capability.speed && (
                    <div className='flex items-center gap-1 text-blue-400'>
                      <Zap className='w-4 h-4' />
                      {capability.speed}
                    </div>
                  )}
                  {capability.coverage && (
                    <div className='flex items-center gap-1 text-purple-400'>
                      <Globe className='w-4 h-4' />
                      {capability.coverage}
                    </div>
                  )}
                  {capability.programs && (
                    <div className='flex items-center gap-1 text-cyan-400'>
                      <FileText className='w-4 h-4' />
                      {capability.programs}
                    </div>
                  )}
                  {capability.dataPoints && (
                    <div className='flex items-center gap-1 text-yellow-400'>
                      <BarChart3 className='w-4 h-4' />
                      {capability.dataPoints}
                    </div>
                  )}
                  {capability.improvement && (
                    <div className='flex items-center gap-1 text-orange-400'>
                      <TrendingUp className='w-4 h-4' />
                      {capability.improvement}
                    </div>
                  )}
                  {capability.suggestions && (
                    <div className='flex items-center gap-1 text-pink-400'>
                      <Target className='w-4 h-4' />
                      {capability.suggestions}
                    </div>
                  )}
                  {capability.factors && (
                    <div className='flex items-center gap-1 text-indigo-400'>
                      <Brain className='w-4 h-4' />
                      {capability.factors}
                    </div>
                  )}
                  {capability.depth && (
                    <div className='flex items-center gap-1 text-emerald-400'>
                      <Award className='w-4 h-4' />
                      {capability.depth}
                    </div>
                  )}
                  {capability.currencies && (
                    <div className='flex items-center gap-1 text-teal-400'>
                      <Coins className='w-4 h-4' />
                      {capability.currencies}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Calculator Demo Section */}
      <section ref={calculatorRef} className='py-24 px-4 relative'>
        <div className='max-w-4xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: isCalculatorInView ? 1 : 0,
              y: isCalculatorInView ? 0 : 30,
            }}
            transition={{ duration: 0.8 }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              Try Our{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400'>
                AI Calculator
              </span>
            </h2>
            <p className='text-xl text-slate-300 max-w-3xl mx-auto'>
              Experience the power of our AI-driven immigration calculator. Get
              instant results with professional-grade accuracy in seconds.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: isCalculatorInView ? 1 : 0,
              y: isCalculatorInView ? 0 : 30,
            }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8'
          >
            <div className='grid md:grid-cols-2 gap-8'>
              {/* Input Form */}
              <div className='space-y-6'>
                <h3 className='text-2xl font-bold text-white mb-6'>
                  Quick Assessment
                </h3>

                <div>
                  <label className='block text-white mb-2'>Age</label>
                  <select className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500'>
                    <option value=''>Select age range</option>
                    <option value='18-24'>18-24 years</option>
                    <option value='25-32'>25-32 years</option>
                    <option value='33-39'>33-39 years</option>
                    <option value='40-44'>40-44 years</option>
                    <option value='45+'>45+ years</option>
                  </select>
                </div>

                <div>
                  <label className='block text-white mb-2'>
                    Education Level
                  </label>
                  <select className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500'>
                    <option value=''>Select education</option>
                    <option value='high-school'>High School</option>
                    <option value='diploma'>Diploma/Certificate</option>
                    <option value='bachelor'>Bachelor's Degree</option>
                    <option value='master'>Master's Degree</option>
                    <option value='phd'>PhD/Doctorate</option>
                  </select>
                </div>

                <div>
                  <label className='block text-white mb-2'>
                    Work Experience
                  </label>
                  <select className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500'>
                    <option value=''>Select experience</option>
                    <option value='0-1'>0-1 years</option>
                    <option value='2-3'>2-3 years</option>
                    <option value='4-5'>4-5 years</option>
                    <option value='6+'>6+ years</option>
                  </select>
                </div>

                <div>
                  <label className='block text-white mb-2'>
                    Language Test Score
                  </label>
                  <select className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500'>
                    <option value=''>Select score range</option>
                    <option value='beginner'>Beginner (CLB 4-5)</option>
                    <option value='intermediate'>Intermediate (CLB 6-7)</option>
                    <option value='advanced'>Advanced (CLB 8-9)</option>
                    <option value='superior'>Superior (CLB 10+)</option>
                  </select>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center gap-2 justify-center'
                >
                  <Calculator className='w-5 h-5' />
                  Calculate Score
                  <ArrowRight className='w-5 h-5' />
                </motion.button>
              </div>

              {/* Results Preview */}
              <div className='space-y-6'>
                <h3 className='text-2xl font-bold text-white mb-6'>
                  Instant Results
                </h3>

                <div className='bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6'>
                  <div className='text-center mb-6'>
                    <div className='text-4xl font-bold text-purple-400 mb-2'>
                      425
                    </div>
                    <div className='text-white font-medium'>
                      Estimated CRS Score
                    </div>
                    <div className='text-slate-400 text-sm'>
                      Out of 1200 points
                    </div>
                  </div>

                  <div className='space-y-4'>
                    <div className='flex justify-between items-center'>
                      <span className='text-slate-300'>Age</span>
                      <span className='text-purple-400 font-medium'>
                        100 pts
                      </span>
                    </div>
                    <div className='flex justify-between items-center'>
                      <span className='text-slate-300'>Education</span>
                      <span className='text-purple-400 font-medium'>
                        120 pts
                      </span>
                    </div>
                    <div className='flex justify-between items-center'>
                      <span className='text-slate-300'>Language</span>
                      <span className='text-purple-400 font-medium'>
                        135 pts
                      </span>
                    </div>
                    <div className='flex justify-between items-center'>
                      <span className='text-slate-300'>Experience</span>
                      <span className='text-purple-400 font-medium'>
                        70 pts
                      </span>
                    </div>
                  </div>
                </div>

                <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6'>
                  <h4 className='text-white font-bold mb-4'>
                    Success Probability
                  </h4>
                  <div className='space-y-3'>
                    <div className='flex justify-between items-center'>
                      <span className='text-slate-300'>
                        Canada Express Entry
                      </span>
                      <span className='text-green-400 font-medium'>85%</span>
                    </div>
                    <div className='flex justify-between items-center'>
                      <span className='text-slate-300'>
                        Australia SkillSelect
                      </span>
                      <span className='text-yellow-400 font-medium'>72%</span>
                    </div>
                    <div className='flex justify-between items-center'>
                      <span className='text-slate-300'>New Zealand EOI</span>
                      <span className='text-blue-400 font-medium'>68%</span>
                    </div>
                  </div>
                </div>

                <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4'>
                  <div className='flex items-center gap-2 text-green-400'>
                    <CheckCircle className='w-5 h-5' />
                    <span className='font-medium'>
                      Eligible for Multiple Programs
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Referral Programs Section */}
      <section className='py-24 px-4 relative'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              Calculator{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400'>
                Referral Programs
              </span>
            </h2>
            <p className='text-xl text-slate-300 max-w-3xl mx-auto'>
              Earn rewards for sharing our AI-powered immigration calculators
              and helping others on their immigration journey.
            </p>
          </motion.div>

          <div className='grid md:grid-cols-3 gap-8 mb-12'>
            {referralPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedReferralProgram(program.id)}
                className={`cursor-pointer p-6 rounded-xl border transition-all duration-300 ${
                  selectedReferralProgram === program.id
                    ? 'bg-gradient-to-br from-purple-600/20 to-blue-600/20 border-purple-500/50'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <div className='flex items-center gap-3 mb-4'>
                  <UserPlus className='w-8 h-8 text-purple-400' />
                  <h3 className='text-xl font-bold text-white'>
                    {program.name}
                  </h3>
                </div>

                <p className='text-slate-300 mb-6'>{program.description}</p>

                <div className='space-y-3'>
                  <div className='flex justify-between items-center'>
                    <span className='text-slate-400'>Base Reward</span>
                    <span className='text-green-400 font-bold'>
                      {formatPrice(program.baseReward)}
                    </span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-slate-400'>Bonus Reward</span>
                    <span className='text-purple-400 font-bold'>
                      {formatPrice(program.bonusReward)}
                    </span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-slate-400'>Requirements</span>
                    <span className='text-blue-400 font-medium text-sm'>
                      {program.requirements}
                    </span>
                  </div>
                </div>

                <div className='mt-6 pt-4 border-t border-white/10'>
                  <div className='text-sm text-slate-400 mb-2'>Features:</div>
                  {program.features.slice(0, 2).map((feature, idx) => (
                    <div
                      key={idx}
                      className='flex items-center gap-2 text-sm text-slate-300'
                    >
                      <CheckCircle className='w-3 h-3 text-green-400' />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center'
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center gap-2 mx-auto'
            >
              <Gift className='w-5 h-5' />
              Join Referral Program
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Lucky Draws Section */}
      <section className='py-24 px-4 relative'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              Calculator{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400'>
                Lucky Draws
              </span>
            </h2>
            <p className='text-xl text-slate-300 max-w-3xl mx-auto'>
              Participate in exclusive lucky draws and win amazing prizes
              including free consultations, premium calculator access, and
              complete immigration services.
            </p>
          </motion.div>

          <div className='grid md:grid-cols-3 gap-8 mb-12'>
            {luckyDraws.map((draw, index) => (
              <motion.div
                key={draw.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedLuckyDraw(draw.id)}
                className={`cursor-pointer p-6 rounded-xl border transition-all duration-300 ${
                  selectedLuckyDraw === draw.id
                    ? 'bg-gradient-to-br from-yellow-600/20 to-orange-600/20 border-yellow-500/50'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <div className='flex items-center gap-3 mb-4'>
                  <Trophy className='w-8 h-8 text-yellow-400' />
                  <h3 className='text-xl font-bold text-white'>{draw.name}</h3>
                </div>

                <p className='text-slate-300 mb-6'>{draw.description}</p>

                <div className='space-y-3'>
                  <div className='flex justify-between items-center'>
                    <span className='text-slate-400'>Prize Value</span>
                    <span className='text-yellow-400 font-bold'>
                      {formatPrice(draw.prizeValue)}
                    </span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-slate-400'>Draw Date</span>
                    <span className='text-blue-400 font-medium'>
                      {draw.drawDate}
                    </span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-slate-400'>Tickets Left</span>
                    <span className='text-green-400 font-medium'>
                      {draw.ticketsAvailable.toLocaleString()}
                    </span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-slate-400'>Entry Requirement</span>
                    <span className='text-purple-400 font-medium text-sm'>
                      {draw.entryRequirement}
                    </span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='w-full mt-6 px-4 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-semibold rounded-xl hover:from-yellow-700 hover:to-orange-700 transition-all duration-300 flex items-center gap-2 justify-center'
                >
                  <Gift className='w-4 h-4' />
                  Enter Draw
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className='py-24 px-4 relative'>
        <div className='max-w-4xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              Ready to Calculate Your{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400'>
                Immigration Score?
              </span>
            </h2>
            <p className='text-xl text-slate-300 mb-12 max-w-3xl mx-auto'>
              Join 5M+ users leveraging cutting-edge AI technology for
              immigration calculation success. Start your accurate assessment
              journey today.
            </p>

            <div className='flex flex-col sm:flex-row gap-6 justify-center'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center gap-2 justify-center group'
              >
                <Calculator className='w-5 h-5' />
                Start Free Calculation
                <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center gap-2 justify-center'
              >
                <Phone className='w-5 h-5' />
                Book Expert Consultation
              </motion.button>
            </div>

            <div className='mt-12 grid grid-cols-2 md:grid-cols-4 gap-6'>
              {Object.entries(calculatorStats)
                .slice(0, 4)
                .map(([key, value], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className='text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10'
                  >
                    <div className='text-2xl md:text-3xl font-bold text-purple-400 mb-2'>
                      {value}
                    </div>
                    <div className='text-sm text-slate-400 capitalize'>
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
