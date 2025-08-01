'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  Brain,
  Bot,
  Sparkles,
  Zap,
  Target,
  Network,
  Shield,
  Star,
  Clock,
  ArrowRight,
  CheckCircle,
  Globe,
  Search,
  FileText,
  Award,
  Building,
  TrendingUp,
  Phone,
  Mail,
  Code,
  Cpu,
  Database,
  Eye,
  MessageCircle,
  Wand2,
  Users,
  BarChart,
} from 'lucide-react';

// AI tools stats
const aiToolsStats = {
  toolsCreated: '0',
  accuracyRate: '99.2%',
  timesSaved: '0 hrs',
  modelsDeployed: '15+',
  usersSatisfied: '0',
  processingSpeed: '2.3s',
  dataProcessed: '10TB+',
  automationTasks: '500+',
};

// AI tool categories
const aiToolCategories = [
  {
    id: 'document',
    title: 'Document Processing',
    icon: FileText,
    description: 'AI-powered document analysis and automation',
    color: 'from-blue-500 to-cyan-600',
    tools: [
      { name: 'Document Scanner', description: 'OCR and text extraction', accuracy: '99.1%' },
      { name: 'Form Filler', description: 'Auto-complete forms intelligently', accuracy: '97.8%' },
      { name: 'Translation AI', description: 'Multi-language document translation', accuracy: '98.5%' },
    ],
    features: [
      'Optical Character Recognition (OCR)',
      'Intelligent form auto-completion',
      'Multi-language translation',
      'Document classification',
      'Data extraction and validation',
    ],
    useCase: 'Visa applications, legal documents, contracts',
    timesSaved: '85%',
  },
  {
    id: 'chatbot',
    title: 'AI Chatbots',
    icon: MessageCircle,
    description: 'Intelligent conversational AI assistants',
    color: 'from-emerald-500 to-teal-600',
    tools: [
      { name: 'Immigration Bot', description: 'Visa and immigration guidance', accuracy: '96.2%' },
      { name: 'Support Agent', description: '24/7 customer service AI', accuracy: '94.7%' },
      { name: 'Legal Assistant', description: 'Legal advice and guidance', accuracy: '97.1%' },
    ],
    features: [
      'Natural language processing',
      'Multi-language support',
      'Context-aware responses',
      'Integration with databases',
      'Sentiment analysis',
    ],
    useCase: 'Customer support, guidance, consultation',
    timesSaved: '78%',
  },
  {
    id: 'prediction',
    title: 'Predictive Analytics',
    icon: TrendingUp,
    description: 'AI-driven insights and forecasting',
    color: 'from-purple-500 to-indigo-600',
    tools: [
      { name: 'Success Predictor', description: 'Visa approval probability', accuracy: '92.4%' },
      { name: 'Timeline Forecaster', description: 'Processing time predictions', accuracy: '89.6%' },
      { name: 'Risk Analyzer', description: 'Application risk assessment', accuracy: '94.3%' },
    ],
    features: [
      'Machine learning algorithms',
      'Historical data analysis',
      'Real-time predictions',
      'Risk assessment models',
      'Performance optimization',
    ],
    useCase: 'Application planning, risk management',
    timesSaved: '65%',
  },
  {
    id: 'vision',
    title: 'Computer Vision',
    icon: Eye,
    description: 'AI-powered image and video analysis',
    color: 'from-orange-500 to-red-600',
    tools: [
      { name: 'Photo Validator', description: 'ID and passport photo verification', accuracy: '99.7%' },
      { name: 'Document Detector', description: 'Fraud detection in documents', accuracy: '98.2%' },
      { name: 'Face Matcher', description: 'Biometric identity verification', accuracy: '99.4%' },
    ],
    features: [
      'Image recognition and analysis',
      'Fraud detection algorithms',
      'Biometric verification',
      'Quality assessment',
      'Format compliance checking',
    ],
    useCase: 'Identity verification, document validation',
    timesSaved: '92%',
  },
];

// AI service offerings
const aiServiceOfferings = [
  {
    icon: Brain,
    title: 'Custom AI Development',
    description: 'Tailored AI solutions for your specific immigration needs',
    color: 'from-purple-500 to-indigo-600',
    deliverables: ['Custom model training', 'API integration', 'Performance optimization'],
  },
  {
    icon: Network,
    title: 'AI Model Training',
    description: 'Train and fine-tune AI models with your data',
    color: 'from-blue-500 to-cyan-600',
    deliverables: ['Data preprocessing', 'Model architecture', 'Accuracy optimization'],
  },
  {
    icon: Zap,
    title: 'Process Automation',
    description: 'Automate repetitive tasks with intelligent workflows',
    color: 'from-emerald-500 to-teal-600',
    deliverables: ['Workflow design', 'Integration setup', 'Monitoring dashboard'],
  },
  {
    icon: Shield,
    title: 'AI Security & Compliance',
    description: 'Secure AI implementations with regulatory compliance',
    color: 'from-orange-500 to-red-600',
    deliverables: ['Security audit', 'Compliance framework', 'Privacy protection'],
  },
];

export default function AIToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState(aiToolCategories[0]);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const categoriesInView = useInView(categoriesRef, { once: true, amount: 0.2 });
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <div
      ref={containerRef}
      className='min-h-screen bg-gradient-to-b from-black via-neutral-950 to-neutral-900 text-white overflow-hidden'
    >
      {/* AI Neural Network Background */}
      <motion.div
        style={{ y: backgroundY }}
        className='fixed inset-0 pointer-events-none'
      >
        <div className='absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/30' />
        <div className='absolute inset-0'>
          {Array.from({ length: 80 }, (_, i) => (
            <motion.div
              key={i}
              className='absolute w-1 h-1 bg-gradient-to-r from-purple-400/40 to-cyan-400/40 rounded-full'
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 2, 0.5],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        {/* Neural network lines */}
        <svg className='absolute inset-0 w-full h-full opacity-10'>
          {Array.from({ length: 20 }, (_, i) => (
            <motion.line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="url(#gradient)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 2,
              }}
            />
          ))}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Navigation */}
      <nav className='fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-purple-500/10'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <Link href='/' className='flex items-center gap-2'>
              <div className='w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center'>
                <Bot className='w-6 h-6 text-white' />
              </div>
              <span className='text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent'>
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
          <motion.div
            style={{ y: heroY }}
            className='container mx-auto px-4 sm:px-6 lg:px-8'
          >
            <div className='text-center max-w-6xl mx-auto'>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, type: 'spring' }}
                className='inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 backdrop-blur-xl mb-8'
              >
                <Brain className='w-6 h-6 text-purple-400' />
                <span className='text-purple-300 font-medium'>Advanced AI Tools</span>
                <Sparkles className='w-6 h-6 text-cyan-400' />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                className='text-5xl md:text-7xl lg:text-8xl font-bold mb-8'
              >
                <span className='bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-pulse'>
                  AI-Powered
                </span>
                <br />
                <span className='text-white'>Intelligence</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className='text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-4xl mx-auto'
              >
                Revolutionize your immigration journey with cutting-edge AI tools designed to 
                automate processes, predict outcomes, and enhance decision-making.
              </motion.p>

              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
                className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-12'
              >
                <div className='text-center'>
                  <div className='text-3xl md:text-4xl font-bold text-purple-400 mb-2'>
                    {aiToolsStats.toolsCreated}
                  </div>
                  <div className='text-white/60 text-sm'>AI Tools</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl md:text-4xl font-bold text-cyan-400 mb-2'>
                    {aiToolsStats.accuracyRate}
                  </div>
                  <div className='text-white/60 text-sm'>Accuracy</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl md:text-4xl font-bold text-purple-400 mb-2'>
                    {aiToolsStats.modelsDeployed}
                  </div>
                  <div className='text-white/60 text-sm'>AI Models</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl md:text-4xl font-bold text-cyan-400 mb-2'>
                    {aiToolsStats.processingSpeed}
                  </div>
                  <div className='text-white/60 text-sm'>Avg Speed</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
                className='flex flex-col sm:flex-row gap-6 justify-center items-center'
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(147, 51, 234, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className='px-8 py-4 bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 rounded-full text-white font-bold text-lg shadow-2xl border border-purple-400/30'
                >
                  <span className='flex items-center gap-2'>
                    <Wand2 className='w-6 h-6' />
                    Try AI Tools
                    <ArrowRight className='w-6 h-6' />
                  </span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white font-medium text-lg hover:bg-white/20 transition-all'
                >
                  <span className='flex items-center gap-2'>
                    <Code className='w-6 h-6' />
                    View API
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* AI Tool Categories */}
        <section ref={categoriesRef} className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={categoriesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-center mb-20'
            >
              <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='text-white'>AI Tool </span>
                <span className='bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent'>
                  Categories
                </span>
              </h2>
              <p className='text-xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
                Comprehensive AI solutions for every aspect of immigration and document processing.
              </p>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
              {aiToolCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={categoriesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`group cursor-pointer ${selectedCategory.id === category.id ? 'scale-105' : ''} transition-all duration-500`}
                >
                  <div className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border rounded-3xl p-8 h-full transition-all duration-500 ${
                    selectedCategory.id === category.id ? 'border-purple-500/50 shadow-lg shadow-purple-500/25' : 'border-white/10 hover:border-purple-500/30'
                  }`}>
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className='w-8 h-8 text-white' />
                    </div>
                    <h3 className='text-xl font-bold text-white mb-4'>{category.title}</h3>
                    <p className='text-white/70 leading-relaxed mb-4'>{category.description}</p>
                    <div className='text-emerald-400 font-medium text-sm'>
                      Saves {category.timesSaved} time
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Selected Category Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12'
              >
                <div className='flex items-center gap-4 mb-8'>
                  <div className={`w-16 h-16 bg-gradient-to-r ${selectedCategory.color} rounded-2xl flex items-center justify-center`}>
                    <selectedCategory.icon className='w-8 h-8 text-white' />
                  </div>
                  <div>
                    <h3 className='text-3xl font-bold text-white mb-2'>{selectedCategory.title}</h3>
                    <p className='text-white/70'>{selectedCategory.description}</p>
                  </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
                  <div>
                    <h4 className='text-white font-semibold mb-6 flex items-center gap-2'>
                      <Cpu className='w-5 h-5 text-purple-400' />
                      Available Tools
                    </h4>
                    <div className='space-y-4'>
                      {selectedCategory.tools.map((tool, index) => (
                        <div key={index} className='bg-white/5 rounded-xl p-4'>
                          <div className='flex items-center justify-between mb-2'>
                            <h5 className='text-white font-medium'>{tool.name}</h5>
                            <span className='text-cyan-400 text-sm'>{tool.accuracy}</span>
                          </div>
                          <p className='text-white/60 text-sm'>{tool.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className='text-white font-semibold mb-6 flex items-center gap-2'>
                      <Star className='w-5 h-5 text-cyan-400' />
                      Key Features
                    </h4>
                    <div className='space-y-3'>
                      {selectedCategory.features.map((feature, index) => (
                        <div key={index} className='flex items-center gap-3'>
                          <CheckCircle className='w-5 h-5 text-emerald-400 flex-shrink-0' />
                          <span className='text-white/80'>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className='bg-white/5 rounded-xl p-6'>
                  <h4 className='text-white font-semibold mb-3 flex items-center gap-2'>
                    <Building className='w-5 h-5 text-purple-400' />
                    Use Cases
                  </h4>
                  <p className='text-white/70'>{selectedCategory.useCase}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* AI Service Offerings */}
        <section ref={servicesRef} className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-center mb-20'
            >
              <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent'>
                  AI
                </span>
                <br />
                <span className='text-white'>Services</span>
              </h2>
              <p className='text-xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
                Professional AI development and implementation services.
              </p>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {aiServiceOfferings.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className='group'
                >
                  <div className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full hover:border-purple-500/30 transition-all duration-500'>
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className='w-8 h-8 text-white' />
                    </div>
                    <h3 className='text-xl font-bold text-white mb-4'>{service.title}</h3>
                    <p className='text-white/70 leading-relaxed mb-6'>{service.description}</p>
                    
                    <div>
                      <h4 className='text-white font-medium mb-3'>Deliverables:</h4>
                      <div className='space-y-2'>
                        {service.deliverables.map((item, idx) => (
                          <div key={idx} className='flex items-center gap-2'>
                            <CheckCircle className='w-4 h-4 text-emerald-400' />
                            <span className='text-white/60 text-sm'>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
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
                  <span className='text-white'>Ready to Embrace </span>
                  <span className='bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent'>
                    AI Power
                  </span>
                  <span className='text-white'>?</span>
                </h2>
                <p className='text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed'>
                  Transform your immigration process with our advanced AI tools and services.
                </p>

                <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-12'>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(147, 51, 234, 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    className='px-10 py-5 bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 rounded-full text-white font-bold text-xl shadow-2xl border border-purple-400/30'
                  >
                    <span className='flex items-center gap-3'>
                      <Wand2 className='w-6 h-6' />
                      Start with AI
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
                      AI Consultation
                    </span>
                  </motion.button>
                </div>

                <div className='flex flex-wrap justify-center gap-8 text-white/60'>
                  <div className='flex items-center gap-2'>
                    <Phone className='w-5 h-5' />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Mail className='w-5 h-5' />
                    <span>ai@vanhsya.com</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Shield className='w-5 h-5' />
                    <span>Enterprise Ready</span>
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
