'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import {
  Shield, AlertTriangle, CheckCircle, X, Eye, Search, ArrowRight, Clock,
  Globe, Zap, Target, Brain, Bot, Network, TrendingUp, Award, Phone, Mail,
  ExternalLink, FileText, Users, DollarSign, MapPin, Calendar, Sparkles,
} from 'lucide-react';

// Scam types
const scamTypes = [
  {
    id: 'visa-fraud',
    title: 'Visa Fraud',
    icon: Shield,
    description: 'Fake visa promises and fraudulent agencies',
    color: 'from-red-500 to-red-600',
    indicators: ['Guaranteed visa approval', 'Upfront payment demands', 'No official documentation', 'Pressure tactics'],
    prevalence: 'High',
    riskLevel: 'Critical',
  },
  {
    id: 'job-scams',
    title: 'Job Scams',
    icon: Users,
    description: 'Fake employment offers abroad',
    color: 'from-orange-500 to-orange-600',
    indicators: ['Too good to be true salary', 'No interview process', 'Request for personal documents', 'Advance fee requests'],
    prevalence: 'Very High',
    riskLevel: 'High',
  },
  {
    id: 'investment-fraud',
    title: 'Investment Fraud',
    icon: DollarSign,
    description: 'Fake investment immigration schemes',
    color: 'from-yellow-500 to-yellow-600',
    indicators: ['Unrealistic returns', 'Unregistered companies', 'High-pressure sales', 'No proper documentation'],
    prevalence: 'Medium',
    riskLevel: 'Critical',
  },
  {
    id: 'document-forgery',
    title: 'Document Forgery',
    icon: FileText,
    description: 'Fake documents and certifications',
    color: 'from-purple-500 to-purple-600',
    indicators: ['Poor quality printing', 'Spelling errors', 'Invalid seals', 'Suspicious pricing'],
    prevalence: 'High',
    riskLevel: 'High',
  },
  {
    id: 'education-scams',
    title: 'Education Scams',
    icon: TrendingUp,
    description: 'Fake universities and degree mills',
    color: 'from-blue-500 to-blue-600',
    indicators: ['Unaccredited institutions', 'Instant degrees', 'No campus verification', 'Unrealistic promises'],
    prevalence: 'Medium',
    riskLevel: 'High',
  },
  {
    id: 'romance-scams',
    title: 'Romance Scams',
    icon: Target,
    description: 'Marriage visa fraud schemes',
    color: 'from-pink-500 to-pink-600',
    indicators: ['Quick relationship progression', 'Money requests', 'Avoided video calls', 'Inconsistent stories'],
    prevalence: 'Growing',
    riskLevel: 'High',
  },
];

// AI Detection Features
const aiFeatures = [
  {
    icon: Brain,
    title: 'Pattern Recognition',
    description: 'Neural networks identify common scam patterns and red flags',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Network,
    title: 'Website Analysis',
    description: 'Deep scan of websites for authenticity and credibility',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Globe,
    title: 'Database Cross-check',
    description: 'Verify against global databases of known scammers',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: Eye,
    title: 'Document Verification',
    description: 'AI-powered document authenticity and forgery detection',
    color: 'from-orange-500 to-orange-600',
  },
];

// Scam stats
const scamStats = {
  detected: '0',
  accuracy: '96.8%',
  avgResponseTime: '< 5 seconds',
  databases: '50+',
  patterns: '10K+',
  savedUsers: '25K+',
};

// Risk assessment levels
const riskLevels: Record<string, { color: string; bg: string; border: string }> = {
  low: { color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30' },
  medium: { color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/30' },
  high: { color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/30' },
  critical: { color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/30' },
};

interface ScanResult {
  url: string;
  riskLevel: string;
  score: number;
  indicators: string[];
}

export default function ScamDetectorPage() {
  const [selectedScam, setSelectedScam] = useState(scamTypes[0]);
  const [scanUrl, setScanUrl] = useState('');
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const typesRef = useRef<HTMLDivElement>(null);
  const detectorRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const typesInView = useInView(typesRef, { once: true, amount: 0.2 });
  const detectorInView = useInView(detectorRef, { once: true, amount: 0.2 });
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  const handleScan = () => {
    if (!scanUrl) return;
    
    // Simulate AI scanning
    setTimeout(() => {
      const riskScore = Math.random();
      setScanResult({
        url: scanUrl,
        riskLevel: riskScore > 0.7 ? 'critical' : riskScore > 0.5 ? 'high' : riskScore > 0.3 ? 'medium' : 'low',
        score: Math.round(riskScore * 100),
        indicators: [
          'Suspicious domain registration',
          'No SSL certificate',
          'Missing contact information',
          'Poor website quality'
        ].slice(0, Math.floor(riskScore * 4) + 1)
      });
    }, 2000);
  };

  return (
    <div ref={containerRef} className='min-h-screen bg-gradient-to-b from-black via-neutral-950 to-neutral-900 text-white overflow-hidden'>
      {/* Security Neural Network Background */}
      <motion.div style={{ y: backgroundY }} className='fixed inset-0 pointer-events-none'>
        <div className='absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-orange-900/30' />
        <div className='absolute inset-0'>
          {Array.from({ length: 100 }, (_, i) => (
            <motion.div
              key={i}
              className='absolute w-1 h-1 bg-gradient-to-r from-red-400/30 to-orange-400/30 rounded-full'
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
        {/* Warning Icons Animation */}
        <div className='absolute inset-0'>
          {Array.from({ length: 15 }, (_, i) => (
            <motion.div
              key={`warning-${i}`}
              className='absolute text-4xl opacity-10'
              style={{
                left: `${3 + (i * 6.5)}%`,
                top: `${8 + (i * 5.5)}%`,
              }}
              animate={{
                y: [-25, 25, -25],
                rotate: [0, 15, -15, 0],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: 6 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              {i % 3 === 0 ? '⚠️' : i % 3 === 1 ? '🛡️' : '🔍'}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Navigation */}
      <nav className='fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-red-500/10'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <Link href='/' className='flex items-center gap-2'>
              <div className='w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center'>
                <Bot className='w-6 h-6 text-white' />
              </div>
              <span className='text-xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent'>
                VANHSYA
              </span>
            </Link>
            
            <div className='hidden md:flex items-center gap-6'>
              <Link href='/' className='text-white/80 hover:text-white transition-colors'>Home</Link>
              <Link href='/services' className='text-white/80 hover:text-white transition-colors'>Services</Link>
              <Link href='/ai-tools' className='text-white/80 hover:text-white transition-colors'>AI Tools</Link>
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
                className='inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 backdrop-blur-xl mb-8'
              >
                <Shield className='w-6 h-6 text-red-400' />
                <span className='text-red-300 font-medium'>AI Scam Detector</span>
                <span className='text-4xl'>🛡️</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                className='text-5xl md:text-7xl lg:text-8xl font-bold mb-8'
              >
                <span className='bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-pulse'>
                  Scam
                </span>
                <br />
                <span className='text-white'>Guardian</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className='text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-4xl mx-auto'
              >
                AI-powered protection against immigration scams and fraud. 
                Detect fake agencies, verify documents, and stay safe in your immigration journey.
              </motion.p>

              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
                className='grid grid-cols-2 md:grid-cols-3 gap-8 mb-12'
              >
                {Object.entries(scamStats).slice(0, 6).map(([key, value], index) => (
                  <div key={key} className='text-center'>
                    <div className={`text-3xl md:text-4xl font-bold mb-2 ${
                      index % 3 === 0 ? 'text-red-400' : 
                      index % 3 === 1 ? 'text-orange-400' : 'text-yellow-400'
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
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(239, 68, 68, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className='px-8 py-4 bg-gradient-to-r from-red-600 via-orange-500 to-red-600 rounded-full text-white font-bold text-lg shadow-2xl border border-red-400/30'
                >
                  <span className='flex items-center gap-2'>
                    <Search className='w-6 h-6' />
                    Scan for Scams
                    <ArrowRight className='w-6 h-6' />
                  </span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white font-medium text-lg hover:bg-white/20 transition-all'
                >
                  <span className='flex items-center gap-2'>
                    <Brain className='w-6 h-6' />
                    Learn Scam Types
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Scam Types */}
        <section ref={typesRef} className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={typesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-center mb-20'
            >
              <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='text-white'>Common </span>
                <span className='bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent'>
                  Scam Types
                </span>
              </h2>
              <p className='text-xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
                Learn to identify and protect yourself from immigration-related fraud.
              </p>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {scamTypes.map((scam, index) => (
                <motion.div
                  key={scam.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={typesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className='group cursor-pointer'
                  onClick={() => setSelectedScam(scam)}
                >
                  <div className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border rounded-3xl p-8 h-full transition-all duration-500 ${
                    selectedScam.id === scam.id ? 'border-red-500/50 shadow-lg shadow-red-500/20' : 'border-white/10 hover:border-red-500/30'
                  }`}>
                    <div className={`w-16 h-16 bg-gradient-to-r ${scam.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <scam.icon className='w-8 h-8 text-white' />
                    </div>
                    <h3 className='text-xl font-bold text-white mb-4'>{scam.title}</h3>
                    <p className='text-white/70 leading-relaxed mb-4'>{scam.description}</p>
                    <div className='flex justify-between items-center'>
                      <div className='text-red-400 font-medium text-sm'>
                        Prevalence: {scam.prevalence}
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        riskLevels[scam.riskLevel.toLowerCase()]?.color || 'text-gray-400'
                      } ${
                        riskLevels[scam.riskLevel.toLowerCase()]?.bg || 'bg-gray-500/10'
                      } ${
                        riskLevels[scam.riskLevel.toLowerCase()]?.border || 'border-gray-500/30'
                      } border`}>
                        {scam.riskLevel}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Selected Scam Details */}
            <motion.div
              key={selectedScam.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='mt-16 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8'
            >
              <h3 className='text-2xl font-bold text-white mb-6'>{selectedScam.title} - Warning Signs</h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div>
                  <h4 className='text-lg font-semibold text-white mb-4 flex items-center gap-2'>
                    <AlertTriangle className='w-5 h-5 text-orange-400' />
                    Red Flag Indicators
                  </h4>
                  <div className='space-y-3'>
                    {selectedScam.indicators.map((indicator, index) => (
                      <div key={indicator} className='flex items-start gap-3 p-3 bg-red-500/10 rounded-xl border border-red-500/20'>
                        <X className='w-5 h-5 text-red-400 flex-shrink-0 mt-0.5' />
                        <span className='text-white/80'>{indicator}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className='text-lg font-semibold text-white mb-4 flex items-center gap-2'>
                    <Shield className='w-5 h-5 text-emerald-400' />
                    Protection Tips
                  </h4>
                  <div className='space-y-3'>
                    <div className='flex items-start gap-3 p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20'>
                      <CheckCircle className='w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5' />
                      <span className='text-white/80'>Verify agency credentials with official sources</span>
                    </div>
                    <div className='flex items-start gap-3 p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20'>
                      <CheckCircle className='w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5' />
                      <span className='text-white/80'>Never pay large sums upfront</span>
                    </div>
                    <div className='flex items-start gap-3 p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20'>
                      <CheckCircle className='w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5' />
                      <span className='text-white/80'>Get all promises in writing</span>
                    </div>
                    <div className='flex items-start gap-3 p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20'>
                      <CheckCircle className='w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5' />
                      <span className='text-white/80'>Research thoroughly before committing</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* AI Scam Detector Tool */}
        <section ref={detectorRef} className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={detectorInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-center mb-20'
            >
              <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent'>
                  AI Scam
                </span>
                <br />
                <span className='text-white'>Detector</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={detectorInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className='max-w-4xl mx-auto'
            >
              <div className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12'>
                <div className='text-center mb-8'>
                  <h3 className='text-2xl font-bold text-white mb-4'>Scan Website or Agency</h3>
                  <p className='text-white/70'>Enter a website URL or agency name to check for potential scams</p>
                </div>

                {/* Scan Input */}
                <div className='flex gap-4 mb-8'>
                  <input
                    type='text'
                    value={scanUrl}
                    onChange={(e) => setScanUrl(e.target.value)}
                    placeholder='Enter website URL or agency name...'
                    className='flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-red-500/50 backdrop-blur-xl'
                  />
                  <motion.button
                    onClick={handleScan}
                    disabled={!scanUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed'
                  >
                    <span className='flex items-center gap-2'>
                      <Search className='w-5 h-5' />
                      Scan
                    </span>
                  </motion.button>
                </div>

                {/* Scan Result */}
                {scanResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='bg-white/5 rounded-2xl p-6 border border-white/10'
                  >
                    <div className='flex items-center justify-between mb-4'>
                      <h4 className='text-lg font-semibold text-white'>Scan Results</h4>
                      <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                        riskLevels[scanResult.riskLevel]?.color || 'text-gray-400'
                      } ${
                        riskLevels[scanResult.riskLevel]?.bg || 'bg-gray-500/10'
                      } ${
                        riskLevels[scanResult.riskLevel]?.border || 'border-gray-500/30'
                      } border`}>
                        {scanResult.riskLevel.toUpperCase()} RISK
                      </div>
                    </div>
                    
                    <div className='text-white/70 mb-4'>
                      <strong>URL:</strong> {scanResult.url}
                    </div>
                    
                    <div className='mb-4'>
                      <div className='text-white/70 mb-2'>Risk Score: {scanResult.score}%</div>
                      <div className='w-full bg-white/10 rounded-full h-2'>
                        <div 
                          className={`h-2 rounded-full transition-all duration-1000 ${
                            scanResult.riskLevel === 'critical' ? 'bg-red-500' :
                            scanResult.riskLevel === 'high' ? 'bg-orange-500' :
                            scanResult.riskLevel === 'medium' ? 'bg-yellow-500' : 'bg-emerald-500'
                          }`}
                          style={{ width: `${Math.min(scanResult.score, 100)}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <h5 className='text-white font-medium mb-3'>Detected Issues:</h5>
                      <div className='space-y-2'>
                        {scanResult.indicators.map((indicator, index) => (
                          <div key={index} className='flex items-center gap-2 text-sm text-white/70'>
                            <AlertTriangle className='w-4 h-4 text-orange-400' />
                            {indicator}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* AI Features */}
        <section ref={featuresRef} className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-center mb-20'
            >
              <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent'>
                  AI Detection
                </span>
                <br />
                <span className='text-white'>Features</span>
              </h2>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {aiFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className='group'
                >
                  <div className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full hover:border-red-500/30 transition-all duration-500'>
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className='w-8 h-8 text-white' />
                    </div>
                    <h3 className='text-xl font-bold text-white mb-4'>{feature.title}</h3>
                    <p className='text-white/70 leading-relaxed'>{feature.description}</p>
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
                  <span className='text-white'>Stay </span>
                  <span className='bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent'>
                    Protected
                  </span>
                </h2>
                <p className='text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed'>
                  Use our AI Scam Detector to verify agencies, websites, and protect yourself from immigration fraud.
                </p>

                <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-12'>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(239, 68, 68, 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    className='px-10 py-5 bg-gradient-to-r from-red-600 via-orange-500 to-red-600 rounded-full text-white font-bold text-xl shadow-2xl'
                  >
                    <span className='flex items-center gap-3'>
                      <Search className='w-6 h-6' />
                      Start Scanning
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
                      Report Scam
                    </span>
                  </motion.button>
                </div>

                <div className='flex flex-wrap justify-center gap-8 text-white/60'>
                  <div className='flex items-center gap-2'>
                    <Shield className='w-5 h-5' />
                    <span>AI-powered protection</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Zap className='w-5 h-5' />
                    <span>Real-time scanning</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <CheckCircle className='w-5 h-5' />
                    <span>96.8% accuracy</span>
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
