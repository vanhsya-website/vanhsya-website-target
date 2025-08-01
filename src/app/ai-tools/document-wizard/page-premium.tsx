'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import {
  FileText, Scan, Upload, Download, CheckCircle, Star, Clock, ArrowRight,
  Shield, Globe, Zap, Target, Brain, Bot, Network, TrendingUp, Award, Phone, Mail,
  FileCheck, FileX, AlertTriangle, Info, Settings, Camera, Sparkles, RefreshCw, Scale,
} from 'lucide-react';

// Document categories
const documentCategories = [
  {
    id: 'passport',
    title: 'Passport Documents',
    icon: FileText,
    description: 'Passport validation and verification',
    color: 'from-blue-500 to-blue-600',
    documents: ['Passport Copy', 'Passport Photo Page', 'Visa Pages', 'Entry/Exit Stamps'],
    aiFeatures: ['Auto-detection', 'Quality check', 'Expiry validation', 'MRZ reading'],
  },
  {
    id: 'education',
    title: 'Educational Certificates',
    icon: FileCheck,
    description: 'Academic document verification',
    color: 'from-purple-500 to-purple-600',
    documents: ['Degree Certificates', 'Transcripts', 'Diplomas', 'Professional Licenses'],
    aiFeatures: ['Institution verification', 'Grade analysis', 'Authenticity check', 'Format validation'],
  },
  {
    id: 'employment',
    title: 'Employment Records',
    icon: TrendingUp,
    description: 'Work history and experience docs',
    color: 'from-emerald-500 to-emerald-600',
    documents: ['Employment Letters', 'Pay Stubs', 'Tax Returns', 'Reference Letters'],
    aiFeatures: ['Salary verification', 'Duration calculation', 'Job role analysis', 'Company validation'],
  },
  {
    id: 'financial',
    title: 'Financial Documents',
    icon: Award,
    description: 'Banking and financial records',
    color: 'from-orange-500 to-orange-600',
    documents: ['Bank Statements', 'Investment Records', 'Tax Documents', 'Asset Proof'],
    aiFeatures: ['Balance verification', 'Transaction analysis', 'Income assessment', 'Asset valuation'],
  },
  {
    id: 'personal',
    title: 'Personal Documents',
    icon: Shield,
    description: 'Identity and personal records',
    color: 'from-rose-500 to-rose-600',
    documents: ['Birth Certificates', 'Marriage Certificates', 'Police Clearance', 'Medical Records'],
    aiFeatures: ['Identity verification', 'Relationship validation', 'Health assessment', 'Background check'],
  },
  {
    id: 'legal',
    title: 'Legal Documents',
    icon: Scale,
    description: 'Legal and certification docs',
    color: 'from-indigo-500 to-indigo-600',
    documents: ['Affidavits', 'Power of Attorney', 'Court Orders', 'Legal Certificates'],
    aiFeatures: ['Legal validation', 'Notarization check', 'Jurisdiction verification', 'Compliance review'],
  },
];

// AI processing steps
const processingSteps = [
  {
    step: 1,
    title: 'Document Upload',
    description: 'Secure upload with OCR scanning',
    icon: Upload,
    color: 'from-blue-500 to-blue-600',
  },
  {
    step: 2,
    title: 'AI Analysis',
    description: 'Neural network document analysis',
    icon: Brain,
    color: 'from-purple-500 to-purple-600',
  },
  {
    step: 3,
    title: 'Verification',
    description: 'Multi-layer authenticity checks',
    icon: Shield,
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    step: 4,
    title: 'Quality Report',
    description: 'Detailed analysis and recommendations',
    icon: FileCheck,
    color: 'from-orange-500 to-orange-600',
  },
];

// Document stats
const documentStats = {
  processed: '0',
  accuracy: '99.2%',
  avgTime: '< 30 seconds',
  languages: '150+',
  countries: '195',
  formats: '50+',
};

export default function DocumentWizardPage() {
  const [selectedCategory, setSelectedCategory] = useState(documentCategories[0]);
  const [uploadProgress, setUploadProgress] = useState(0);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const wizardRef = useRef<HTMLDivElement>(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const categoriesInView = useInView(categoriesRef, { once: true, amount: 0.2 });
  const stepsInView = useInView(stepsRef, { once: true, amount: 0.2 });
  const wizardInView = useInView(wizardRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <div ref={containerRef} className='min-h-screen bg-gradient-to-b from-black via-neutral-950 to-neutral-900 text-white overflow-hidden'>
      {/* Neural Network Background */}
      <motion.div style={{ y: backgroundY }} className='fixed inset-0 pointer-events-none'>
        <div className='absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/30' />
        <div className='absolute inset-0'>
          {Array.from({ length: 80 }, (_, i) => (
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
        {/* Document Icons Animation */}
        <div className='absolute inset-0'>
          {Array.from({ length: 12 }, (_, i) => (
            <motion.div
              key={`doc-${i}`}
              className='absolute text-4xl opacity-10'
              style={{
                left: `${5 + (i * 8)}%`,
                top: `${10 + (i * 6)}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                rotate: [0, 10, -10, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            >
              📄
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
                className='inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-xl mb-8'
              >
                <FileText className='w-6 h-6 text-blue-400' />
                <span className='text-blue-300 font-medium'>AI Document Wizard</span>
                <span className='text-4xl'>📄</span>
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
                <span className='text-white'>Documents</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className='text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-4xl mx-auto'
              >
                AI-powered document verification and processing for immigration applications. 
                Upload, analyze, and validate all your documents with neural network precision.
              </motion.p>

              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
                className='grid grid-cols-2 md:grid-cols-3 gap-8 mb-12'
              >
                {Object.entries(documentStats).slice(0, 6).map(([key, value], index) => (
                  <div key={key} className='text-center'>
                    <div className={`text-3xl md:text-4xl font-bold mb-2 ${
                      index % 3 === 0 ? 'text-blue-400' : 
                      index % 3 === 1 ? 'text-purple-400' : 'text-emerald-400'
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
                    <Upload className='w-6 h-6' />
                    Upload Documents
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
                    Demo Scanner
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Document Categories */}
        <section ref={categoriesRef} className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={categoriesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-center mb-20'
            >
              <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='text-white'>Document </span>
                <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                  Categories
                </span>
              </h2>
              <p className='text-xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
                AI-powered verification for all immigration document types.
              </p>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {documentCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={categoriesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className='group cursor-pointer'
                  onClick={() => setSelectedCategory(category)}
                >
                  <div className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border rounded-3xl p-8 h-full transition-all duration-500 ${
                    selectedCategory.id === category.id ? 'border-blue-500/50 shadow-lg shadow-blue-500/20' : 'border-white/10 hover:border-blue-500/30'
                  }`}>
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className='w-8 h-8 text-white' />
                    </div>
                    <h3 className='text-xl font-bold text-white mb-4'>{category.title}</h3>
                    <p className='text-white/70 leading-relaxed mb-4'>{category.description}</p>
                    <div className='text-blue-400 font-medium text-sm'>
                      {category.documents.length} document types
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Selected Category Details */}
            <motion.div
              key={selectedCategory.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='mt-16 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8'
            >
              <h3 className='text-2xl font-bold text-white mb-6'>{selectedCategory.title} - AI Features</h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div>
                  <h4 className='text-lg font-semibold text-white mb-4'>Supported Documents</h4>
                  <div className='grid grid-cols-2 gap-3'>
                    {selectedCategory.documents.map((doc, index) => (
                      <div key={doc} className='bg-white/5 rounded-xl p-3 border border-white/10 text-sm text-white/80'>
                        {doc}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className='text-lg font-semibold text-white mb-4'>AI Capabilities</h4>
                  <div className='space-y-3'>
                    {selectedCategory.aiFeatures.map((feature, index) => (
                      <div key={feature} className='flex items-center gap-3'>
                        <CheckCircle className='w-5 h-5 text-emerald-400' />
                        <span className='text-white/80'>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Processing Steps */}
        <section ref={stepsRef} className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={stepsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-center mb-20'
            >
              <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                  AI Processing
                </span>
                <br />
                <span className='text-white'>Workflow</span>
              </h2>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {processingSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 50 }}
                  animate={stepsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className='group relative'
                >
                  <div className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full hover:border-blue-500/30 transition-all duration-500'>
                    <div className='flex items-center justify-between mb-6'>
                      <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <step.icon className='w-6 h-6 text-white' />
                      </div>
                      <div className='text-2xl font-bold text-blue-400'>
                        {step.step}
                      </div>
                    </div>
                    <h3 className='text-xl font-bold text-white mb-4'>{step.title}</h3>
                    <p className='text-white/70 leading-relaxed'>{step.description}</p>
                  </div>
                  
                  {/* Connection Line */}
                  {index < processingSteps.length - 1 && (
                    <div className='hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-400/50 to-purple-400/50' />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Document Wizard */}
        <section ref={wizardRef} className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={wizardInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-center mb-20'
            >
              <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                  Try Document
                </span>
                <br />
                <span className='text-white'>Wizard</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={wizardInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className='max-w-4xl mx-auto'
            >
              <div className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12'>
                <div className='text-center mb-8'>
                  <h3 className='text-2xl font-bold text-white mb-4'>Upload Your Documents</h3>
                  <p className='text-white/70'>Drag and drop or click to upload documents for AI analysis</p>
                </div>

                {/* Upload Area */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className='border-2 border-dashed border-blue-500/30 rounded-2xl p-12 mb-8 bg-gradient-to-br from-blue-500/5 to-purple-500/5 hover:border-blue-500/50 transition-all duration-300 cursor-pointer'
                >
                  <div className='text-center'>
                    <Upload className='w-16 h-16 text-blue-400 mx-auto mb-4' />
                    <h4 className='text-xl font-semibold text-white mb-2'>Upload Documents</h4>
                    <p className='text-white/60 mb-4'>Supports PDF, JPG, PNG, DOCX (Max 50MB per file)</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className='px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white font-medium'
                    >
                      Choose Files
                    </motion.button>
                  </div>
                </motion.div>

                {/* Processing Status */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                  <div className='bg-white/5 rounded-2xl p-6 border border-white/10'>
                    <div className='flex items-center gap-3 mb-3'>
                      <Scan className='w-6 h-6 text-blue-400' />
                      <span className='font-semibold text-white'>OCR Scanning</span>
                    </div>
                    <div className='text-sm text-white/70'>Extract text and data from documents</div>
                  </div>
                  
                  <div className='bg-white/5 rounded-2xl p-6 border border-white/10'>
                    <div className='flex items-center gap-3 mb-3'>
                      <Brain className='w-6 h-6 text-purple-400' />
                      <span className='font-semibold text-white'>AI Analysis</span>
                    </div>
                    <div className='text-sm text-white/70'>Neural network document verification</div>
                  </div>
                  
                  <div className='bg-white/5 rounded-2xl p-6 border border-white/10'>
                    <div className='flex items-center gap-3 mb-3'>
                      <FileCheck className='w-6 h-6 text-emerald-400' />
                      <span className='font-semibold text-white'>Quality Report</span>
                    </div>
                    <div className='text-sm text-white/70'>Detailed analysis and recommendations</div>
                  </div>
                </div>
              </div>
            </motion.div>
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
                  <span className='text-white'>Ready to Process </span>
                  <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                    Documents
                  </span>
                  <span className='text-white'>?</span>
                </h2>
                <p className='text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed'>
                  Start using our AI Document Wizard for instant document verification and analysis.
                </p>

                <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-12'>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    className='px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 rounded-full text-white font-bold text-xl shadow-2xl'
                  >
                    <span className='flex items-center gap-3'>
                      <Upload className='w-6 h-6' />
                      Start Processing
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
                      Get Support
                    </span>
                  </motion.button>
                </div>

                <div className='flex flex-wrap justify-center gap-8 text-white/60'>
                  <div className='flex items-center gap-2'>
                    <Shield className='w-5 h-5' />
                    <span>Bank-grade security</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Zap className='w-5 h-5' />
                    <span>Instant processing</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <CheckCircle className='w-5 h-5' />
                    <span>99.2% accuracy</span>
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
