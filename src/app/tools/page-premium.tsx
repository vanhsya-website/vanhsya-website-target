'use client';

import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import {
  Calculator, FileText, Clock, DollarSign, GraduationCap, Shield, 
  Brain, Bot, Zap, Network, Target, CheckCircle, ArrowRight, Star,
  Search, Cpu, Database, BarChart3, PieChart, TrendingUp, Award,
  Sparkles, Crown, Gem, Trophy, Rocket, Eye, Lightbulb, Compass,
  MapPin, Globe, Users, Calendar, Mail, Phone, Play, ChevronRight,
} from 'lucide-react';

// AI-powered tools with premium features
const tools = [
  {
    id: 'eligibility-calculator',
    title: 'AI Eligibility Calculator',
    description: 'Advanced neural network-powered assessment for accurate immigration eligibility prediction across 15+ countries.',
    icon: Calculator,
    color: 'from-blue-500 to-blue-600',
    category: 'assessment',
    difficulty: 'Easy',
    time: '5 minutes',
    accuracy: '99.8%',
    href: '/tools/eligibility-calculator',
    popular: true,
    premium: true,
    features: [
      'Multi-country comparison',
      'Real-time scoring',
      'Personalized recommendations',
      'Pathway optimization',
      'Success probability',
    ],
    aiFeatures: [
      'Neural network analysis',
      'Predictive modeling',
      'Dynamic scoring',
      'Pattern recognition',
    ],
  },
  {
    id: 'document-wizard',
    title: 'Smart Document Wizard',
    description: 'AI-driven document preparation and verification system with automated compliance checking.',
    icon: FileText,
    color: 'from-purple-500 to-purple-600',
    category: 'preparation',
    difficulty: 'Medium',
    time: '15 minutes',
    accuracy: '99.5%',
    href: '/ai-tools/document-wizard',
    popular: true,
    premium: true,
    features: [
      'Automated document generation',
      'Compliance verification',
      'Error detection',
      'Format optimization',
      'Quality assurance',
    ],
    aiFeatures: [
      'Document analysis',
      'Auto-correction',
      'Template matching',
      'Quality scoring',
    ],
  },
  {
    id: 'scam-detector',
    title: 'Immigration Scam Detector',
    description: 'Advanced AI system to identify and prevent immigration fraud with real-time threat analysis.',
    icon: Shield,
    color: 'from-emerald-500 to-emerald-600',
    category: 'security',
    difficulty: 'Easy',
    time: '3 minutes',
    accuracy: '98.9%',
    href: '/tools/scam-detector',
    popular: true,
    premium: true,
    features: [
      'Fraud pattern recognition',
      'Real-time alerts',
      'Risk assessment',
      'Safety recommendations',
      'Database cross-check',
    ],
    aiFeatures: [
      'Behavioral analysis',
      'Anomaly detection',
      'Risk modeling',
      'Threat intelligence',
    ],
  },
  {
    id: 'visa-tracker',
    title: 'Smart Visa Tracker',
    description: 'Intelligent application tracking with predictive timeline estimation and status updates.',
    icon: Clock,
    color: 'from-orange-500 to-orange-600',
    category: 'tracking',
    difficulty: 'Easy',
    time: '2 minutes',
    accuracy: '97.8%',
    href: '/tools/visa-tracker',
    popular: false,
    premium: true,
    features: [
      'Real-time status updates',
      'Timeline predictions',
      'Milestone tracking',
      'Alert notifications',
      'Progress analytics',
    ],
    aiFeatures: [
      'Predictive analytics',
      'Status recognition',
      'Timeline modeling',
      'Trend analysis',
    ],
  },
  {
    id: 'cost-calculator',
    title: 'Immigration Cost Calculator',
    description: 'Comprehensive cost analysis tool with dynamic pricing and hidden fee detection.',
    icon: DollarSign,
    color: 'from-cyan-500 to-cyan-600',
    category: 'planning',
    difficulty: 'Medium',
    time: '10 minutes',
    accuracy: '99.2%',
    href: '/tools/cost-calculator',
    popular: true,
    premium: false,
    features: [
      'Complete cost breakdown',
      'Hidden fee detection',
      'Currency conversion',
      'Budget planning',
      'Payment scheduling',
    ],
    aiFeatures: [
      'Dynamic pricing',
      'Cost optimization',
      'Market analysis',
      'Trend forecasting',
    ],
  },
  {
    id: 'education-analyzer',
    title: 'Education Credential Analyzer',
    description: 'AI-powered educational qualification assessment and equivalency determination.',
    icon: GraduationCap,
    color: 'from-pink-500 to-pink-600',
    category: 'assessment',
    difficulty: 'Medium',
    time: '12 minutes',
    accuracy: '98.7%',
    href: '/tools/education-analyzer',
    popular: false,
    premium: true,
    features: [
      'Credential evaluation',
      'Equivalency matching',
      'University recognition',
      'Grade conversion',
      'Certification validation',
    ],
    aiFeatures: [
      'Institution matching',
      'Grade equivalency',
      'Recognition analysis',
      'Validation scoring',
    ],
  },
];

// Tool categories
const categories = [
  { id: 'all', label: 'All Tools', icon: Globe, count: tools.length },
  { id: 'assessment', label: 'Assessment', icon: Calculator, count: tools.filter(t => t.category === 'assessment').length },
  { id: 'preparation', label: 'Document Prep', icon: FileText, count: tools.filter(t => t.category === 'preparation').length },
  { id: 'security', label: 'Security', icon: Shield, count: tools.filter(t => t.category === 'security').length },
  { id: 'tracking', label: 'Tracking', icon: Clock, count: tools.filter(t => t.category === 'tracking').length },
  { id: 'planning', label: 'Planning', icon: Target, count: tools.filter(t => t.category === 'planning').length },
];

// Usage statistics
const toolStats = {
  totalTools: '15+',
  activeUsers: '0',
  accuracy: '99.1%',
  countries: '15+',
  assessments: '50K+',
  satisfaction: '98.6%',
};

export default function ToolsPagePremium() {
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const categoriesInView = useInView(categoriesRef, { once: true, amount: 0.2 });
  const toolsInView = useInView(toolsRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  const filteredTools = selectedCategory === 'all' 
    ? tools 
    : tools.filter(tool => tool.category === selectedCategory);

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
        {/* Tool icons floating */}
        <div className='absolute inset-0'>
          {Array.from({ length: 20 }, (_, i) => (
            <motion.div
              key={`tool-${i}`}
              className='absolute text-4xl opacity-10'
              style={{
                left: `${5 + (i * 4.5)}%`,
                top: `${10 + (i * 3.5)}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                rotate: [0, 15, -15, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              {i % 6 === 0 ? '⚙️' : i % 6 === 1 ? '🧠' : i % 6 === 2 ? '🛡️' : i % 6 === 3 ? '📊' : i % 6 === 4 ? '🔍' : '⚡'}
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
                <Cpu className='w-6 h-6 text-blue-400' />
                <span className='text-blue-300 font-medium'>AI Immigration Tools</span>
                <span className='text-4xl'>🛠️</span>
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
                <span className='text-white'>Tools</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className='text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-4xl mx-auto'
              >
                Harness the power of artificial intelligence with our comprehensive suite of immigration tools. 
                From eligibility assessment to document preparation, we've got everything you need.
              </motion.p>

              {/* Tool Statistics */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
                className='grid grid-cols-2 md:grid-cols-3 gap-8 mb-12'
              >
                {Object.entries(toolStats).map(([key, value], index) => (
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
                    <Brain className='w-6 h-6' />
                    Start Assessment
                    <ArrowRight className='w-6 h-6' />
                  </span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white font-medium text-lg hover:bg-white/20 transition-all'
                >
                  <span className='flex items-center gap-2'>
                    <Play className='w-6 h-6' />
                    Watch Demo
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Categories Section */}
        <section ref={categoriesRef} className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={categoriesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-center mb-20'
            >
              <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='text-white'>Tool </span>
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

        {/* Tools Grid */}
        <section ref={toolsRef} className='pb-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
              {filteredTools.map((tool, index) => (
                <motion.div
                  key={tool.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={toolsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className='group'
                >
                  <div className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full hover:border-blue-500/30 transition-all duration-500 relative overflow-hidden'>
                    {/* Premium Badge */}
                    {tool.premium && (
                      <div className='absolute top-4 right-4'>
                        <span className='px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold rounded-full'>
                          AI PREMIUM
                        </span>
                      </div>
                    )}

                    {/* Popular Badge */}
                    {tool.popular && (
                      <div className='absolute top-4 left-4'>
                        <span className='px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/30'>
                          POPULAR
                        </span>
                      </div>
                    )}

                    {/* Header */}
                    <div className='flex items-start gap-4 mb-6 mt-8'>
                      <div className={`w-16 h-16 bg-gradient-to-r ${tool.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <tool.icon className='w-8 h-8 text-white' />
                      </div>
                      <div className='flex-1'>
                        <h3 className='text-xl font-bold text-white mb-2'>{tool.title}</h3>
                        <p className='text-white/70 text-sm leading-relaxed'>{tool.description}</p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className='grid grid-cols-3 gap-4 mb-6'>
                      <div className='text-center'>
                        <div className='text-blue-400 font-bold text-lg'>{tool.difficulty}</div>
                        <div className='text-white/60 text-xs'>Difficulty</div>
                      </div>
                      <div className='text-center'>
                        <div className='text-purple-400 font-bold text-lg'>{tool.time}</div>
                        <div className='text-white/60 text-xs'>Duration</div>
                      </div>
                      <div className='text-center'>
                        <div className='text-emerald-400 font-bold text-lg'>{tool.accuracy}</div>
                        <div className='text-white/60 text-xs'>Accuracy</div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className='mb-6'>
                      <h4 className='text-white font-semibold mb-3'>Key Features:</h4>
                      <div className='space-y-2'>
                        {tool.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className='flex items-center gap-2'>
                            <CheckCircle className='w-4 h-4 text-emerald-400 flex-shrink-0' />
                            <span className='text-white/70 text-sm'>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* AI Features */}
                    {tool.premium && (
                      <div className='mb-6'>
                        <h4 className='text-yellow-400 font-semibold mb-3 flex items-center gap-2'>
                          <Brain className='w-4 h-4' />
                          AI Features:
                        </h4>
                        <div className='space-y-2'>
                          {tool.aiFeatures.slice(0, 2).map((feature, idx) => (
                            <div key={idx} className='flex items-center gap-2'>
                              <Sparkles className='w-4 h-4 text-yellow-400 flex-shrink-0' />
                              <span className='text-white/70 text-sm'>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* CTA */}
                    <div className='flex gap-3'>
                      <Link href={tool.href} className='flex-1'>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`w-full px-4 py-3 rounded-xl text-white font-semibold text-sm transition-all ${
                            tool.premium 
                              ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                              : 'bg-gradient-to-r from-gray-600 to-gray-700'
                          }`}
                        >
                          {tool.premium ? 'Try AI Tool' : 'Use Tool'}
                        </motion.button>
                      </Link>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all'
                      >
                        <ChevronRight className='w-5 h-5' />
                      </motion.button>
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
                  <span className='text-white'>Ready to </span>
                  <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                    Power Up
                  </span>
                  <span className='text-white'> Your Journey?</span>
                </h2>
                <p className='text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed'>
                  Experience the future of immigration with our AI-powered tools. 
                  Get started with our most popular assessment tool for free.
                </p>

                <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-12'>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    className='px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 rounded-full text-white font-bold text-xl shadow-2xl'
                  >
                    <span className='flex items-center gap-3'>
                      <Brain className='w-6 h-6' />
                      Start AI Assessment
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
                      Book Demo
                    </span>
                  </motion.button>
                </div>

                <div className='flex flex-wrap justify-center gap-8 text-white/60'>
                  <div className='flex items-center gap-2'>
                    <Shield className='w-5 h-5' />
                    <span>99.1% Accuracy</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Users className='w-5 h-5' />
                    <span>0 Active Users</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <CheckCircle className='w-5 h-5' />
                    <span>AI-Powered Results</span>
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
