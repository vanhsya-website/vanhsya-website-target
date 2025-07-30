'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { 
  MapPin, 
  Users, 
  Award, 
  ArrowRight,
  CheckCircle,
  Globe,
  Clock,
  Star,
  Calendar,
  Building,
  GraduationCap,
  Briefcase,
  Heart,
  Shield,
  Zap,
  FileText,
  Phone,
  Calculator,
  ChevronDown,
  ChevronUp,
  Gift,
  CreditCard,
  Trophy,
  UserPlus,
  Percent,
  Wallet,
  Crown,
  Home,
  ArrowLeft,
  Menu,
  X
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
  { code: 'ru', name: 'Русский', flag: '🇷🇺' }
];

// Multi-currency support
const currencies = [
  { code: 'GBP', symbol: '£', name: 'British Pound', rate: 1.0 },
  { code: 'USD', symbol: '$', name: 'US Dollar', rate: 1.27 },
  { code: 'EUR', symbol: '€', name: 'Euro', rate: 1.17 },
  { code: 'INR', symbol: '₹', name: 'Indian Rupee', rate: 105.50 },
  { code: 'AED', symbol: 'د.إ', name: 'UAE Dirham', rate: 4.66 },
  { code: 'SAR', symbol: 'ر.س', name: 'Saudi Riyal', rate: 4.75 },
  { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar', rate: 1.71 },
  { code: 'AUD', symbol: 'A$', name: 'Australian Dollar', rate: 1.92 }
];

const ukStats = {
  population: '67.5M',
  gdpPerCapita: '£35,000',
  lifeQuality: '8.9/10',
  languages: ['English (Official)'],
  currency: 'GBP (£)',
  timezone: 'GMT/BST',
  capital: 'London',
  immigrantsPerYear: '300,000+',
  averageSalary: '£31,000',
  unemploymentRate: '3.7%',
  costOfLiving: 'High',
  successRate: '89.2%'
};

const immigrationPrograms = [
  {
    id: 'skilled-worker',
    name: 'Skilled Worker Visa',
    category: 'Work',
    type: 'work',
    description: 'The most popular route for skilled professionals with job offers from UK employers. Allows you to live and work in the UK for up to 5 years.',
    processingTime: '3-8 weeks',
    successRate: 92.3,
    basePrice: 1420,
    emiOptions: [
      { months: 3, monthlyPayment: 500, totalCost: 1500, interest: '5%' },
      { months: 6, monthlyPayment: 260, totalCost: 1560, interest: '8%' },
      { months: 12, monthlyPayment: 140, totalCost: 1680, interest: '15%' }
    ],
    eligibility: [
      'Job offer from UK employer',
      'Certificate of Sponsorship (CoS)',
      'English level B1 or above',
      'Minimum salary £25,600',
      'Valid passport'
    ],
    benefits: [
      'Live and work in UK for 5 years',
      'Bring spouse and children',
      'Apply for settlement after 5 years',
      'Access to NHS healthcare',
      'No restriction on job changes'
    ],
    steps: [
      'Secure job offer from licensed sponsor',
      'Obtain Certificate of Sponsorship',
      'Apply online with documents',
      'Attend biometrics appointment',
      'Receive visa decision'
    ],
    icon: Briefcase,
    color: 'from-blue-600 to-blue-500',
    bgGlow: 'bg-blue-500/10',
    popular: true
  },
  {
    id: 'global-talent',
    name: 'Global Talent Visa',
    category: 'Talent',
    type: 'work',
    description: 'For exceptional individuals in science, engineering, humanities, medicine, digital technology, arts and culture.',
    processingTime: '3-8 weeks',
    successRate: 85.7,
    basePrice: 623,
    emiOptions: [
      { months: 3, monthlyPayment: 220, totalCost: 660, interest: '5%' },
      { months: 6, monthlyPayment: 115, totalCost: 690, interest: '8%' }
    ],
    eligibility: [
      'Exceptional talent or promise',
      'Endorsement from approved body',
      'English level A1',
      'Maintenance funds £1,270',
      'No criminal record'
    ],
    benefits: [
      'Up to 5 years stay',
      'No job offer required',
      'Fast-track to settlement',
      'Bring family members',
      'Work flexibility'
    ],
    steps: [
      'Get endorsement from approved body',
      'Prepare application documents',
      'Apply online',
      'Biometrics appointment',
      'Visa decision'
    ],
    icon: Trophy,
    color: 'from-purple-600 to-purple-500',
    bgGlow: 'bg-purple-500/10'
  },
  {
    id: 'student-visa',
    name: 'Student Visa',
    category: 'Education',
    type: 'study',
    description: 'Study at UK universities and colleges. Access world-class education and potential pathway to work visas.',
    processingTime: '3-6 weeks',
    successRate: 94.8,
    basePrice: 363,
    emiOptions: [
      { months: 3, monthlyPayment: 130, totalCost: 390, interest: '5%' },
      { months: 6, monthlyPayment: 70, totalCost: 420, interest: '8%' }
    ],
    eligibility: [
      'Confirmation of Acceptance (CAS)',
      'Financial proof',
      'English level B2',
      'TB certificate (some countries)',
      'Academic qualifications'
    ],
    benefits: [
      'Study at top universities',
      'Part-time work allowed',
      'Graduate route available',
      'Cultural experience',
      'Pathway to settlement'
    ],
    steps: [
      'Apply to UK institution',
      'Receive CAS number',
      'Prepare financial documents',
      'Submit visa application',
      'Attend appointment'
    ],
    icon: GraduationCap,
    color: 'from-emerald-600 to-emerald-500',
    bgGlow: 'bg-emerald-500/10'
  },
  {
    id: 'graduate-visa',
    name: 'Graduate Visa',
    category: 'Post-Study',
    type: 'work',
    description: 'For recent UK graduates to stay and work for 2-3 years after completing their studies.',
    processingTime: '8 weeks',
    successRate: 96.1,
    basePrice: 700,
    emiOptions: [
      { months: 3, monthlyPayment: 250, totalCost: 750, interest: '5%' },
      { months: 6, monthlyPayment: 130, totalCost: 780, interest: '8%' }
    ],
    eligibility: [
      'Completed eligible UK qualification',
      'Current valid student visa',
      'Successful completion of course',
      'Apply before visa expires',
      'Maintenance funds'
    ],
    benefits: [
      '2 years for Bachelor/Masters',
      '3 years for PhD graduates',
      'No job offer required',
      'Work in any job',
      'Switch to other visa routes'
    ],
    steps: [
      'Complete UK qualification',
      'Check eligibility',
      'Apply online',
      'Pay application fee',
      'Receive decision'
    ],
    icon: Crown,
    color: 'from-amber-600 to-amber-500',
    bgGlow: 'bg-amber-500/10'
  },
  {
    id: 'family-visa',
    name: 'Family Visa',
    category: 'Family',
    type: 'family',
    description: 'Join family members who are British citizens or settled in the UK through spouse, partner, or family routes.',
    processingTime: '12-24 weeks',
    successRate: 91.4,
    basePrice: 1538,
    emiOptions: [
      { months: 6, monthlyPayment: 280, totalCost: 1680, interest: '8%' },
      { months: 12, monthlyPayment: 150, totalCost: 1800, interest: '15%' }
    ],
    eligibility: [
      'Relationship to UK citizen/resident',
      'English language requirement',
      'Financial requirement met',
      'Accommodation evidence',
      'Genuine relationship proof'
    ],
    benefits: [
      'Live with family in UK',
      '2.5 years initial visa',
      'Work and study rights',
      'Path to settlement',
      'NHS access'
    ],
    steps: [
      'Gather relationship evidence',
      'Meet financial requirements',
      'English language test',
      'Submit application',
      'Decision and travel'
    ],
    icon: Heart,
    color: 'from-rose-600 to-rose-500',
    bgGlow: 'bg-rose-500/10'
  }
];

const referralPrograms = [
  {
    id: 'friend-referral',
    title: 'Friend Referral Program',
    description: 'Refer friends and earn rewards for successful applications',
    reward: '£500',
    icon: UserPlus,
    color: 'from-green-500 to-emerald-500',
    features: [
      'Earn £500 for each successful referral',
      'No limit on referrals',
      'Instant tracking dashboard',
      'Monthly bonus rewards'
    ]
  },
  {
    id: 'family-plan',
    title: 'Family Package Deal',
    description: 'Special discounts for family applications',
    reward: '25% OFF',
    icon: Heart,
    color: 'from-pink-500 to-rose-500',
    features: [
      '25% discount on additional family members',
      'Priority processing',
      'Dedicated family consultant',
      'Payment plan options'
    ]
  },
  {
    id: 'loyalty-rewards',
    title: 'Loyalty Rewards',
    description: 'Earn points for every service and redeem rewards',
    reward: '10x Points',
    icon: Star,
    color: 'from-amber-500 to-orange-500',
    features: [
      'Earn 10 points per £1 spent',
      'Redeem for services or cash',
      'VIP customer status',
      'Exclusive member benefits'
    ]
  }
];

const luckyDraws = [
  {
    id: 'monthly-draw',
    title: 'Monthly Lucky Draw',
    description: 'Win amazing prizes every month',
    prize: '£10,000 Cash',
    entries: '15,847',
    deadline: '31st January 2025',
    icon: Gift,
    color: 'from-purple-500 to-violet-500'
  },
  {
    id: 'visa-fee-draw',
    title: 'Free Visa Application',
    description: 'Complete visa fee waiver',
    prize: 'Full Visa Fee',
    entries: '8,923',
    deadline: '15th February 2025',
    icon: Zap,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'uk-trip-draw',
    title: 'UK Exploration Trip',
    description: '7-day all-expenses UK tour',
    prize: '£5,000 Trip',
    entries: '12,456',
    deadline: '28th February 2025',
    icon: MapPin,
    color: 'from-red-500 to-pink-500'
  }
];

const livingCosts = [
  { category: 'Housing (1BR)', cost: 800, description: 'Monthly rent in city center' },
  { category: 'Groceries', cost: 300, description: 'Monthly for one person' },
  { category: 'Transportation', cost: 150, description: 'Monthly public transport' },
  { category: 'Utilities', cost: 120, description: 'Monthly (electricity, gas, water)' },
  { category: 'Internet', cost: 30, description: 'Monthly high-speed broadband' },
  { category: 'Dining Out', cost: 200, description: 'Monthly restaurant meals' }
];

const ukCities = [
  {
    name: 'London',
    population: '9.5M',
    avgSalary: '£45,000',
    costIndex: 100,
    description: 'Global financial hub with diverse opportunities',
    icon: Building
  },
  {
    name: 'Manchester',
    population: '2.7M',
    avgSalary: '£35,000',
    costIndex: 75,
    description: 'Growing tech and creative industries',
    icon: Zap
  },
  {
    name: 'Birmingham',
    population: '2.9M',
    avgSalary: '£32,000',
    costIndex: 70,
    description: 'Manufacturing and business center',
    icon: Briefcase
  },
  {
    name: 'Edinburgh',
    population: '540K',
    avgSalary: '£38,000',
    costIndex: 80,
    description: 'Cultural capital with historic charm',
    icon: Crown
  }
];

export default function UKPage() {
  const [selectedProgram, setSelectedProgram] = useState(immigrationPrograms[0]);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const floatingY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const formatPrice = (priceInGBP: number) => {
    const convertedPrice = priceInGBP * selectedCurrency.rate;
    return `${selectedCurrency.symbol}${convertedPrice.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
  };

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-gradient-to-b from-neutral-950 to-neutral-900 text-white"
    >
      {/* Navigation Header */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-md border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left side - Back and Home buttons */}
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 group">
                <Home className="w-4 h-4 text-red-400 group-hover:text-white" />
                <span className="text-white font-medium hidden sm:block">Home</span>
              </Link>
              <button 
                onClick={() => window.history.back()}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 group"
              >
                <ArrowLeft className="w-4 h-4 text-red-400 group-hover:text-white" />
                <span className="text-white font-medium hidden sm:block">Back</span>
              </button>
            </div>

            {/* Center - Page Title */}
            <div className="flex items-center gap-2">
              <span className="text-2xl">🇬🇧</span>
              <h1 className="text-xl font-bold text-white hidden sm:block">United Kingdom</h1>
            </div>

            {/* Right side - Language/Currency and Menu */}
            <div className="flex items-center gap-4">
              {/* Language and Currency Selector - Desktop */}
              <div className="hidden md:flex gap-2">
                <select
                  value={selectedLanguage.code}
                  onChange={(e) => {
                    const lang = languages.find(l => l.code === e.target.value);
                    if (lang) setSelectedLanguage(lang);
                  }}
                  className="px-3 py-1 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code} className="bg-slate-800">
                      {lang.flag} {lang.name}
                    </option>
                  ))}
                </select>
                <select
                  value={selectedCurrency.code}
                  onChange={(e) => {
                    const currency = currencies.find(c => c.code === e.target.value);
                    if (currency) setSelectedCurrency(currency);
                  }}
                  className="px-3 py-1 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  {currencies.map((currency) => (
                    <option key={currency.code} value={currency.code} className="bg-slate-800">
                      {currency.symbol} {currency.code}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300"
              >
                {isMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={false}
            animate={{
              height: isMenuOpen ? 'auto' : 0,
              opacity: isMenuOpen ? 1 : 0
            }}
            className="md:hidden overflow-hidden"
          >
            <div className="py-4 space-y-4 border-t border-white/10">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-slate-300">Language</label>
                <select
                  value={selectedLanguage.code}
                  onChange={(e) => {
                    const lang = languages.find(l => l.code === e.target.value);
                    if (lang) setSelectedLanguage(lang);
                  }}
                  className="px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code} className="bg-slate-800">
                      {lang.flag} {lang.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-slate-300">Currency</label>
                <select
                  value={selectedCurrency.code}
                  onChange={(e) => {
                    const currency = currencies.find(c => c.code === e.target.value);
                    if (currency) setSelectedCurrency(currency);
                  }}
                  className="px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  {currencies.map((currency) => (
                    <option key={currency.code} value={currency.code} className="bg-slate-800">
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
        className="absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-red-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-red-500/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-600/5 to-red-600/5 rounded-full blur-3xl" />
      </motion.div>

      {/* Floating Union Jack Elements */}
      <motion.div 
        style={{ y: floatingY }}
        className="absolute inset-0 overflow-hidden"
      >
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 45, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="text-blue-400 text-xl">🇬🇧</span>
          </motion.div>
        ))}
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative z-10">{/* Reduced pt from 32 to 20 to account for new nav */}
        {/* Hero Section */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-red-500/10 border border-blue-500/20 text-blue-300 font-medium text-sm mb-6"
          >
            <span className="text-2xl">🇬🇧</span>
            UK Immigration Excellence
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Your Gateway to
            <span className="block bg-gradient-to-r from-blue-400 via-red-400 to-blue-300 bg-clip-text text-transparent">
              United Kingdom Success
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-neutral-300 leading-relaxed mb-8"
          >
            Unlock opportunities in the UK with our premium immigration services. From skilled worker visas 
            to family reunification - we make your British dream a reality with exclusive rewards and flexible payment plans.
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
          >
            {[
              { label: 'Success Rate', value: '89.2%', icon: Award, color: 'text-green-400' },
              { label: 'Processing Time', value: '3-8 weeks', icon: Clock, color: 'text-blue-400' },
              { label: 'New Immigrants', value: '300K+/year', icon: Users, color: 'text-purple-400' },
              { label: 'Quality of Life', value: '8.9/10', icon: Star, color: 'text-amber-400' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-gradient-to-br from-neutral-900/60 to-neutral-900/30 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-4 text-center"
              >
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-neutral-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Calculator className="w-5 h-5" />
              Free UK Eligibility Check
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-neutral-800/50 text-white font-semibold rounded-xl hover:bg-neutral-700/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Gift className="w-5 h-5" />
              View Lucky Draws
            </motion.button>
          </motion.div>
        </div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {[
            { id: 'overview', label: 'Overview', icon: Globe },
            { id: 'programs', label: 'Visa Programs', icon: FileText },
            { id: 'referrals', label: 'Referral Rewards', icon: UserPlus },
            { id: 'lucky-draws', label: 'Lucky Draws', icon: Gift },
            { id: 'living', label: 'Cost & Cities', icon: Home },
            { id: 'payment', label: 'EMI Plans', icon: CreditCard }
          ].map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg'
                  : 'bg-gradient-to-r from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 text-neutral-300 hover:border-neutral-700/50 hover:text-white'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Country Stats */}
              <div className="bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-3xl p-8">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">United Kingdom at a Glance</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(ukStats).map(([key, value]) => (
                    <div key={key} className="bg-neutral-800/30 rounded-xl p-4">
                      <div className="text-sm text-neutral-400 capitalize mb-2">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                      <div className="text-white font-semibold text-lg">
                        {Array.isArray(value) ? value.join(', ') : value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* UK Cities */}
              <div className="bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-3xl p-8">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Major UK Cities</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {ukCities.map((city, index) => (
                    <motion.div
                      key={city.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="bg-neutral-800/30 rounded-xl p-6 hover:bg-neutral-800/50 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <city.icon className="w-8 h-8 text-blue-400" />
                        <div>
                          <h3 className="text-lg font-bold text-white">{city.name}</h3>
                          <p className="text-neutral-400 text-sm">Population: {city.population}</p>
                        </div>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-neutral-300">Average Salary:</span>
                          <span className="text-green-400 font-semibold">{formatPrice(parseInt(city.avgSalary.replace(/[^0-9]/g, '')))}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-neutral-300">Cost Index:</span>
                          <span className="text-amber-400 font-semibold">{city.costIndex}%</span>
                        </div>
                        <p className="text-neutral-400 mt-3">{city.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Visa Programs Tab */}
          {activeTab === 'programs' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {/* Program Selector */}
              <div className="grid lg:grid-cols-5 gap-4 mb-8">
                {immigrationPrograms.map((program) => (
                  <motion.button
                    key={program.id}
                    onClick={() => setSelectedProgram(program)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative p-4 rounded-xl border transition-all duration-300 ${
                      selectedProgram.id === program.id
                        ? 'bg-gradient-to-r from-blue-600/20 to-blue-500/20 border-blue-500/50 text-white'
                        : 'bg-neutral-900/60 border-neutral-800 text-neutral-300 hover:border-neutral-700 hover:bg-neutral-900/80'
                    }`}
                  >
                    {program.popular && (
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        Popular
                      </div>
                    )}
                    <program.icon className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-center">{program.name}</div>
                    <div className="text-xs text-neutral-400 text-center mt-1">{program.category}</div>
                  </motion.button>
                ))}
              </div>

              {/* Selected Program Details */}
              <div className="bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-3xl p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Program Info */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${selectedProgram.color} flex items-center justify-center`}>
                        <selectedProgram.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{selectedProgram.name}</h3>
                        <div className="text-blue-400 font-medium">{selectedProgram.category} Visa</div>
                      </div>
                    </div>

                    <p className="text-neutral-300 mb-6 leading-relaxed">{selectedProgram.description}</p>

                    {/* Key Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-neutral-800/30 rounded-xl p-4">
                        <div className="text-green-400 font-semibold text-lg">{selectedProgram.successRate}%</div>
                        <div className="text-xs text-neutral-400">Success Rate</div>
                      </div>
                      <div className="bg-neutral-800/30 rounded-xl p-4">
                        <div className="text-blue-400 font-semibold text-lg">{selectedProgram.processingTime}</div>
                        <div className="text-xs text-neutral-400">Processing Time</div>
                      </div>
                      <div className="bg-neutral-800/30 rounded-xl p-4">
                        <div className="text-purple-400 font-semibold text-lg">{formatPrice(selectedProgram.basePrice)}</div>
                        <div className="text-xs text-neutral-400">Base Fee</div>
                      </div>
                      <div className="bg-neutral-800/30 rounded-xl p-4">
                        <div className="text-amber-400 font-semibold text-lg">EMI Available</div>
                        <div className="text-xs text-neutral-400">Payment Plans</div>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full bg-gradient-to-r ${selectedProgram.color} text-white font-semibold py-3 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}
                    >
                      Apply for {selectedProgram.name}
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>

                  {/* Program Details */}
                  <div className="space-y-6">
                    {/* Eligibility */}
                    <div>
                      <button
                        onClick={() => toggleSection('eligibility')}
                        className="flex items-center justify-between w-full text-left mb-4"
                      >
                        <h4 className="text-xl font-bold text-white">Eligibility Requirements</h4>
                        {expandedSection === 'eligibility' ? (
                          <ChevronUp className="w-5 h-5 text-neutral-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-neutral-400" />
                        )}
                      </button>
                      {expandedSection === 'eligibility' && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-2"
                        >
                          {selectedProgram.eligibility.map((requirement, index) => (
                            <div key={index} className="flex items-center gap-3 text-neutral-300">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              {requirement}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </div>

                    {/* Benefits */}
                    <div>
                      <button
                        onClick={() => toggleSection('benefits')}
                        className="flex items-center justify-between w-full text-left mb-4"
                      >
                        <h4 className="text-xl font-bold text-white">Visa Benefits</h4>
                        {expandedSection === 'benefits' ? (
                          <ChevronUp className="w-5 h-5 text-neutral-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-neutral-400" />
                        )}
                      </button>
                      {expandedSection === 'benefits' && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-2"
                        >
                          {selectedProgram.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center gap-3 text-neutral-300">
                              <Star className="w-4 h-4 text-amber-400 flex-shrink-0" />
                              {benefit}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </div>

                    {/* Process Steps */}
                    <div>
                      <button
                        onClick={() => toggleSection('steps')}
                        className="flex items-center justify-between w-full text-left mb-4"
                      >
                        <h4 className="text-xl font-bold text-white">Application Process</h4>
                        {expandedSection === 'steps' ? (
                          <ChevronUp className="w-5 h-5 text-neutral-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-neutral-400" />
                        )}
                      </button>
                      {expandedSection === 'steps' && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-3"
                        >
                          {selectedProgram.steps.map((step, index) => (
                            <div key={index} className="flex items-center gap-3 text-neutral-300">
                              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 flex items-center justify-center text-white text-sm font-bold">
                                {index + 1}
                              </div>
                              {step}
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

          {/* Referral Rewards Tab */}
          {activeTab === 'referrals' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-3xl p-8">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Referral & Reward Programs</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {referralPrograms.map((program, index) => (
                    <motion.div
                      key={program.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className={`bg-gradient-to-r ${program.color} bg-opacity-10 border border-opacity-20 rounded-xl p-6 text-center`}
                    >
                      <program.icon className="w-12 h-12 text-white mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-white mb-2">{program.title}</h3>
                      <div className={`text-2xl font-bold mb-3 bg-gradient-to-r ${program.color} bg-clip-text text-transparent`}>
                        {program.reward}
                      </div>
                      <p className="text-neutral-300 mb-4">{program.description}</p>
                      <div className="space-y-2">
                        {program.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-neutral-300">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
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

          {/* Lucky Draws Tab */}
          {activeTab === 'lucky-draws' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-3xl p-8">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                  🎉 Lucky Draws & Contests 🎉
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {luckyDraws.map((draw, index) => (
                    <motion.div
                      key={draw.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className={`bg-gradient-to-r ${draw.color} bg-opacity-10 border border-opacity-30 rounded-xl p-6 relative overflow-hidden`}
                    >
                      <div className="absolute top-2 right-2">
                        <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          LIVE
                        </div>
                      </div>
                      
                      <draw.icon className="w-12 h-12 text-white mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-white mb-2 text-center">{draw.title}</h3>
                      <div className={`text-2xl font-bold mb-3 text-center bg-gradient-to-r ${draw.color} bg-clip-text text-transparent`}>
                        {draw.prize}
                      </div>
                      <p className="text-neutral-300 mb-4 text-center">{draw.description}</p>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-neutral-400">Entries:</span>
                          <span className="text-green-400 font-semibold">{draw.entries}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-neutral-400">Deadline:</span>
                          <span className="text-amber-400 font-semibold">{draw.deadline}</span>
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
                
                <div className="mt-8 p-6 bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-500/20 rounded-xl text-center">
                  <h3 className="text-xl font-bold text-white mb-2">How to Enter?</h3>
                  <p className="text-neutral-300 mb-4">
                    Every application, referral, or service purchase automatically enters you into our monthly draws!
                  </p>
                  <div className="flex justify-center gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">1 Entry</div>
                      <div className="text-xs text-neutral-400">Per Application</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-pink-400">5 Entries</div>
                      <div className="text-xs text-neutral-400">Per Referral</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-amber-400">10 Entries</div>
                      <div className="text-xs text-neutral-400">Premium Services</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Cost & Cities Tab */}
          {activeTab === 'living' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-3xl p-8"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Cost of Living in UK</h2>
              <div className="space-y-4">
                {livingCosts.map((cost, index) => (
                  <motion.div
                    key={cost.category}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-neutral-800/30 rounded-xl p-6"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-white">{cost.category}</h3>
                      <div className="text-green-400 font-bold text-lg">{formatPrice(cost.cost)}</div>
                    </div>
                    <p className="text-neutral-400">{cost.description}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-600/10 to-red-600/10 border border-blue-500/20 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-blue-400" />
                  <h3 className="text-xl font-bold text-white">NHS Healthcare</h3>
                </div>
                <p className="text-neutral-300">
                  UK residents enjoy free healthcare through the National Health Service (NHS), 
                  covering GP visits, hospital treatment, and emergency care.
                </p>
              </div>
            </motion.div>
          )}

          {/* EMI Plans Tab */}
          {activeTab === 'payment' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-3xl p-8">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Flexible Payment Plans</h2>
                
                {/* Selected Program EMI Options */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4 text-center">
                    EMI Options for {selectedProgram.name}
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {selectedProgram.emiOptions.map((emi, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className="bg-gradient-to-r from-green-600/10 to-emerald-600/10 border border-green-500/20 rounded-xl p-6 text-center"
                      >
                        <CreditCard className="w-8 h-8 text-green-400 mx-auto mb-3" />
                        <div className="text-2xl font-bold text-white mb-2">{emi.months} Months</div>
                        <div className="text-green-400 font-bold text-xl mb-2">
                          {formatPrice(emi.monthlyPayment)}/month
                        </div>
                        <div className="space-y-1 text-sm">
                          <div className="text-neutral-300">
                            Total: {formatPrice(emi.totalCost)}
                          </div>
                          <div className="text-amber-400">
                            Interest: {emi.interest}
                          </div>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full mt-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold py-2 rounded-lg"
                        >
                          Choose Plan
                        </motion.button>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Payment Features */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      title: 'Zero Down Payment',
                      description: 'Start your application without upfront costs',
                      icon: Wallet,
                      color: 'text-green-400'
                    },
                    {
                      title: 'Flexible Terms',
                      description: '3, 6, or 12-month payment options',
                      icon: Calendar,
                      color: 'text-blue-400'
                    },
                    {
                      title: 'Auto-Debit',
                      description: 'Hassle-free automatic payments',
                      icon: CreditCard,
                      color: 'text-purple-400'
                    },
                    {
                      title: 'Early Payment Discount',
                      description: '5% discount for full advance payment',
                      icon: Percent,
                      color: 'text-amber-400'
                    }
                  ].map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-neutral-800/30 rounded-xl p-6 text-center"
                    >
                      <feature.icon className={`w-12 h-12 ${feature.color} mx-auto mb-4`} />
                      <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-neutral-300 text-sm">{feature.description}</p>
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
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600/10 to-red-600/10 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-4xl">🇬🇧</span>
              <Crown className="w-8 h-8 text-amber-400" />
              <span className="text-4xl">👑</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Begin Your UK Journey?
            </h3>
            <p className="text-xl text-neutral-300 mb-8">
              Join thousands of successful immigrants who chose VANHSYA for their UK dreams. 
              Get exclusive rewards, flexible payment plans, and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Calculator className="w-5 h-5" />
                Start Free UK Assessment
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-neutral-800/50 text-white font-semibold rounded-xl hover:bg-neutral-700/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Book Consultation: +44 20 7123 4567
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
