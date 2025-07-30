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
  DollarSign,
  Star,
  TrendingUp,
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
  Home,
  ArrowLeft,
  Menu,
  X
} from 'lucide-react';

const canadaStats = {
  population: '38.2M',
  gdpPerCapita: '$52,051',
  lifeQuality: '9.2/10',
  languages: ['English', 'French'],
  currency: 'CAD',
  timezone: 'UTC-3.5 to UTC-8',
  capital: 'Ottawa',
  immigrantsPerYear: '400,000+',
  averageSalary: '$65,000',
  unemploymentRate: '5.8%',
  costOfLiving: 'Moderate',
  successRate: '98.7%'
};

const immigrationPrograms = [
  {
    id: 'express-entry',
    name: 'Express Entry',
    category: 'Federal',
    type: 'work',
    description: 'Canada\'s flagship immigration program for skilled workers seeking permanent residence through a points-based system.',
    processingTime: '6-8 months',
    successRate: 98.7,
    minPoints: 440,
    price: 'From $2,499',
    eligibility: [
      'Bachelor\'s degree or equivalent',
      'IELTS 6.5+ (CLB 7)',
      '3+ years skilled work experience',
      'Age 25-35 (optimal)',
      'Valid job offer (preferred)'
    ],
    benefits: [
      'Fastest pathway to PR',
      'No job offer required',
      'Bring spouse and children',
      'Access to healthcare',
      'Path to citizenship in 3 years'
    ],
    steps: [
      'Language test (IELTS/CELPIP)',
      'Educational Credential Assessment',
      'Create Express Entry profile',
      'Receive Invitation to Apply',
      'Submit complete application'
    ],
    icon: Zap,
    color: 'from-emerald-500 to-green-600',
    bgGlow: 'bg-emerald-500/10',
    popular: true
  },
  {
    id: 'pnp',
    name: 'Provincial Nominee Program',
    category: 'Provincial',
    type: 'work',
    description: 'Province-specific programs targeting candidates with skills needed in particular regions of Canada.',
    processingTime: '12-18 months',
    successRate: 96.5,
    minPoints: 600,
    price: 'From $3,299',
    eligibility: [
      'Relevant education/experience',
      'Language proficiency',
      'Connection to province',
      'Job offer (some programs)',
      'Intention to live in province'
    ],
    benefits: [
      '600 additional CRS points',
      'Province-specific opportunities',
      'Lower competition',
      'Regional job market access',
      'Community support networks'
    ],
    steps: [
      'Research provincial programs',
      'Submit provincial application',
      'Receive provincial nomination',
      'Apply through Express Entry',
      'Complete federal process'
    ],
    icon: Globe,
    color: 'from-blue-500 to-cyan-600',
    bgGlow: 'bg-blue-500/10'
  },
  {
    id: 'startup-visa',
    name: 'Start-up Visa Program',
    category: 'Business',
    type: 'business',
    description: 'For entrepreneurs with innovative business ideas and support from designated Canadian organizations.',
    processingTime: '12-16 months',
    successRate: 94.2,
    minPoints: null,
    price: 'From $4,999',
    eligibility: [
      'Qualifying business idea',
      'Letter of support from designated organization',
      'Sufficient settlement funds',
      'Language proficiency (CLB 5+)',
      'No criminal record'
    ],
    benefits: [
      'Immediate work permit',
      'Path to permanent residence',
      'Access to Canadian market',
      'Investor network access',
      'Family accompaniment'
    ],
    steps: [
      'Develop business proposal',
      'Secure designated organization support',
      'Submit application',
      'Receive work permit',
      'Establish business in Canada'
    ],
    icon: Building,
    color: 'from-purple-500 to-violet-600',
    bgGlow: 'bg-purple-500/10'
  },
  {
    id: 'family-sponsorship',
    name: 'Family Sponsorship',
    category: 'Family',
    type: 'family',
    description: 'Reunite with Canadian citizens or permanent residents who can sponsor eligible family members.',
    processingTime: '8-12 months',
    successRate: 99.1,
    minPoints: null,
    price: 'From $2,199',
    eligibility: [
      'Eligible relationship to sponsor',
      'Sponsor meets income requirements',
      'Sponsor is Canadian citizen/PR',
      'No criminal record',
      'Medical examinations'
    ],
    benefits: [
      'Direct path to permanent residence',
      'No points requirement',
      'Family reunification',
      'Sponsor support',
      'Access to settlement services'
    ],
    steps: [
      'Confirm eligibility',
      'Gather required documents',
      'Submit sponsorship application',
      'Principal applicant applies',
      'Complete landing process'
    ],
    icon: Heart,
    color: 'from-rose-500 to-pink-600',
    bgGlow: 'bg-rose-500/10'
  },
  {
    id: 'study-permit',
    name: 'Study Permit',
    category: 'Education',
    type: 'study',
    description: 'Study at designated learning institutions and gain valuable Canadian education and work experience.',
    processingTime: '4-12 weeks',
    successRate: 97.8,
    minPoints: null,
    price: 'From $1,899',
    eligibility: [
      'Acceptance at designated institution',
      'Proof of financial support',
      'Language proficiency',
      'No criminal record',
      'Medical exam (if required)'
    ],
    benefits: [
      'World-class education',
      'Work while studying (20h/week)',
      'Post-graduation work permit',
      'Path to permanent residence',
      'Spouse work permit eligible'
    ],
    steps: [
      'Apply to Canadian institution',
      'Receive letter of acceptance',
      'Apply for study permit',
      'Prepare for arrival',
      'Maintain status while studying'
    ],
    icon: GraduationCap,
    color: 'from-amber-500 to-orange-600',
    bgGlow: 'bg-amber-500/10'
  }
];

const provinces = [
  { name: 'Ontario', capital: 'Toronto', population: '14.8M', flag: '🏢', opportunities: 'Tech, Finance, Manufacturing' },
  { name: 'Quebec', capital: 'Quebec City', population: '8.5M', flag: '🇫🇷', opportunities: 'Aerospace, Mining, Agriculture' },
  { name: 'British Columbia', capital: 'Victoria', population: '5.2M', flag: '🏔️', opportunities: 'Tech, Film, Tourism' },
  { name: 'Alberta', capital: 'Edmonton', population: '4.4M', flag: '⛽', opportunities: 'Energy, Agriculture, Tech' },
  { name: 'Manitoba', capital: 'Winnipeg', population: '1.4M', flag: '🌾', opportunities: 'Agriculture, Manufacturing' },
  { name: 'Saskatchewan', capital: 'Regina', population: '1.2M', flag: '🚜', opportunities: 'Mining, Agriculture' }
];

const livingCosts = [
  { category: 'Housing (1BR)', cost: '$1,200-2,500', description: 'Monthly rent varies by city' },
  { category: 'Groceries', cost: '$300-500', description: 'Monthly for one person' },
  { category: 'Transportation', cost: '$120-150', description: 'Monthly public transit' },
  { category: 'Utilities', cost: '$100-150', description: 'Monthly (electricity, heating)' },
  { category: 'Internet', cost: '$60-80', description: 'Monthly high-speed' },
  { category: 'Healthcare', cost: 'Free', description: 'Universal healthcare system' }
];

const benefits = [
  {
    title: 'Universal Healthcare',
    description: 'Free medical care for all residents',
    icon: Shield,
    color: 'text-green-400'
  },
  {
    title: 'Quality Education',
    description: 'World-renowned universities and schools',
    icon: GraduationCap,
    color: 'text-blue-400'
  },
  {
    title: 'Social Safety Net',
    description: 'Employment insurance and social assistance',
    icon: Users,
    color: 'text-purple-400'
  },
  {
    title: 'Multicultural Society',
    description: 'Welcoming and diverse communities',
    icon: Globe,
    color: 'text-amber-400'
  },
  {
    title: 'Beautiful Nature',
    description: 'Stunning landscapes and outdoor recreation',
    icon: Star,
    color: 'text-emerald-400'
  },
  {
    title: 'Strong Economy',
    description: 'Stable job market and growth opportunities',
    icon: TrendingUp,
    color: 'text-cyan-400'
  }
];

export default function CanadaPage() {
  const [selectedProgram, setSelectedProgram] = useState(immigrationPrograms[0]);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
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
              <span className="text-2xl">🇨🇦</span>
              <h1 className="text-xl font-bold text-white hidden sm:block">Canada</h1>
            </div>

            {/* Right side - Menu */}
            <div className="flex items-center gap-4">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300"
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
            className="overflow-hidden"
          >
            <div className="py-4 space-y-4 border-t border-white/10">
              <div className="flex flex-col gap-2">
                <span className="text-sm text-slate-300">Quick Links</span>
                <Link href="/countries" className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 text-white">
                  All Countries
                </Link>
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
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-red-600/10 to-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-red-500/10 to-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-red-600/5 to-red-500/5 rounded-full blur-3xl" />
      </motion.div>

      {/* Floating Maple Leaves */}
      <motion.div 
        style={{ y: floatingY }}
        className="absolute inset-0 overflow-hidden"
      >
        {Array.from({ length: 12 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-20"
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
              duration: 6 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="text-red-400 text-2xl">🍁</span>
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500/10 to-white/10 border border-red-500/20 text-red-300 font-medium text-sm mb-6"
          >
            <span className="text-2xl">🇨🇦</span>
            Immigration to Canada
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Welcome to
            <span className="block bg-gradient-to-r from-red-400 via-red-300 to-white bg-clip-text text-transparent">
              Your Canadian Dream
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-neutral-300 leading-relaxed mb-8"
          >
            Discover why over 400,000 people choose Canada every year. From world-class healthcare 
            to excellent education and diverse opportunities, your new life awaits in the Great White North.
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
          >
            {[
              { label: 'Success Rate', value: '98.7%', icon: Award, color: 'text-green-400' },
              { label: 'Processing Time', value: '6-8 months', icon: Clock, color: 'text-blue-400' },
              { label: 'New Immigrants', value: '400K+/year', icon: Users, color: 'text-purple-400' },
              { label: 'Quality of Life', value: '9.2/10', icon: Star, color: 'text-amber-400' }
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
              className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Calculator className="w-5 h-5" />
              Check Your Eligibility
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-neutral-800/50 text-white font-semibold rounded-xl hover:bg-neutral-700/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Book Free Consultation
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
            { id: 'programs', label: 'Immigration Programs', icon: FileText },
            { id: 'provinces', label: 'Provinces', icon: MapPin },
            { id: 'living', label: 'Cost of Living', icon: DollarSign },
            { id: 'benefits', label: 'Benefits', icon: Shield }
          ].map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg'
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
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Canada at a Glance</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(canadaStats).map(([key, value]) => (
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

              {/* Why Choose Canada */}
              <div className="bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-3xl p-8">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Canada?</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-neutral-800/30 rounded-xl p-6"
                    >
                      <benefit.icon className={`w-12 h-12 ${benefit.color} mb-4`} />
                      <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                      <p className="text-neutral-300">{benefit.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Immigration Programs Tab */}
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
                        ? 'bg-gradient-to-r from-red-600/20 to-red-500/20 border-red-500/50 text-white'
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
                        <div className="text-red-400 font-medium">{selectedProgram.category} Program</div>
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
                      {selectedProgram.minPoints && (
                        <div className="bg-neutral-800/30 rounded-xl p-4">
                          <div className="text-purple-400 font-semibold text-lg">{selectedProgram.minPoints}</div>
                          <div className="text-xs text-neutral-400">Min Points Required</div>
                        </div>
                      )}
                      <div className="bg-neutral-800/30 rounded-xl p-4">
                        <div className="text-amber-400 font-semibold text-lg">{selectedProgram.price}</div>
                        <div className="text-xs text-neutral-400">Our Service Fee</div>
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
                        <h4 className="text-xl font-bold text-white">Program Benefits</h4>
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
                              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-red-500 to-red-400 flex items-center justify-center text-white text-sm font-bold">
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

          {/* Provinces Tab */}
          {activeTab === 'provinces' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-3xl p-8"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Canadian Provinces & Territories</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {provinces.map((province, index) => (
                  <motion.div
                    key={province.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-neutral-800/30 rounded-xl p-6 hover:bg-neutral-800/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{province.flag}</span>
                      <div>
                        <h3 className="text-lg font-bold text-white">{province.name}</h3>
                        <p className="text-neutral-400 text-sm">Capital: {province.capital}</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-neutral-300">
                        <Users className="w-4 h-4 text-blue-400" />
                        Population: {province.population}
                      </div>
                      <div className="flex items-start gap-2 text-neutral-300">
                        <Briefcase className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>{province.opportunities}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Cost of Living Tab */}
          {activeTab === 'living' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-3xl p-8"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Cost of Living in Canada</h2>
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
                      <div className="text-green-400 font-bold text-lg">{cost.cost}</div>
                    </div>
                    <p className="text-neutral-400">{cost.description}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-gradient-to-r from-green-600/10 to-emerald-600/10 border border-green-500/20 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-green-400" />
                  <h3 className="text-xl font-bold text-white">Healthcare Benefit</h3>
                </div>
                <p className="text-neutral-300">
                  Canada's universal healthcare system means residents pay no fees for most medical services, 
                  including doctor visits, hospital stays, and emergency care. This can save thousands of dollars annually.
                </p>
              </div>
            </motion.div>
          )}

          {/* Benefits Tab */}
          {activeTab === 'benefits' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-3xl p-8">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Life in Canada</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-neutral-800/30 rounded-xl p-6"
                    >
                      <benefit.icon className={`w-12 h-12 ${benefit.color} mb-4`} />
                      <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                      <p className="text-neutral-300">{benefit.description}</p>
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
          <div className="bg-gradient-to-r from-red-600/10 to-red-500/10 backdrop-blur-xl border border-red-500/20 rounded-3xl p-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-4xl">🇨🇦</span>
              <Star className="w-8 h-8 text-amber-400" />
              <span className="text-4xl">🍁</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Make Canada Your New Home?
            </h3>
            <p className="text-xl text-neutral-300 mb-8">
              Join over 400,000 people who successfully immigrate to Canada each year. 
              Your Canadian journey starts with a simple conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Calculator className="w-5 h-5" />
                Free Eligibility Assessment
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-neutral-800/50 text-white font-semibold rounded-xl hover:bg-neutral-700/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Speak with Expert: +1 (555) 123-4567
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
