'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useTransform, useAnimation } from 'framer-motion';
import Link from 'next/link';
import {
  Brain, Database, Target, Lightbulb, Search, CheckCircle, ArrowRight,
  Globe, Shield, Sparkles, ChevronDown, Play, Users, Award, TrendingUp,
  Zap, Network, Eye, Bot, Star, Clock, DollarSign, FileText, Calendar,
  Mail, Phone, ExternalLink, ChevronLeft, ChevronRight, Filter, BarChart3
} from 'lucide-react';

// Enhanced pathway steps data
const pathwaySteps = [
  {
    id: 1,
    icon: Search,
    title: "AI Profile Analysis",
    subtitle: "Deep Learning Scan",
    description: "Advanced neural networks analyze over 150+ personal, professional, and educational data points to create your unique immigration DNA profile.",
    color: "from-blue-500 to-cyan-500",
    details: ["Educational Background", "Work Experience Analysis", "Language Proficiency Mapping", "Financial Assessment", "Family Situation Review"],
    accuracy: "99.2%",
    processingTime: "< 30 seconds",
    delay: 0.1,
    bgGradient: "bg-gradient-to-br from-blue-500/10 to-cyan-500/10"
  },
  {
    id: 2,
    icon: Database,
    title: "Pattern Recognition Engine",
    subtitle: "Success Pattern Matching",
    description: "Cross-references your profile against 500,000+ successful visa applications using machine learning to identify optimal pathways and hidden opportunities.",
    color: "from-purple-500 to-pink-500",
    details: ["Success Rate Correlation", "Timeline Predictions", "Document Optimization", "Cost Minimization", "Risk Mitigation"],
    accuracy: "98.7%",
    processingTime: "< 45 seconds",
    delay: 0.2,
    bgGradient: "bg-gradient-to-br from-purple-500/10 to-pink-500/10"
  },
  {
    id: 3,
    icon: Brain,
    title: "Multi-Dimensional Analysis",
    subtitle: "Quantum Processing Logic",
    description: "Simultaneously processes multiple immigration pathways, considering global policy changes, seasonal variations, and country-specific requirements in real-time.",
    color: "from-green-500 to-emerald-500",
    details: ["Multi-Country Analysis", "Policy Compliance Check", "Alternative Route Discovery", "Legal Framework Mapping", "Optimization Algorithms"],
    accuracy: "99.8%",
    processingTime: "< 60 seconds",
    delay: 0.3,
    bgGradient: "bg-gradient-to-br from-green-500/10 to-emerald-500/10"
  },
  {
    id: 4,
    icon: Target,
    title: "Strategic Pathway Optimization",
    subtitle: "Precision Route Planning",
    description: "Creates a personalized, step-by-step roadmap with timeline optimization, cost-benefit analysis, and success probability calculations for maximum efficiency.",
    color: "from-orange-500 to-red-500",
    details: ["Timeline Optimization", "Cost-Benefit Analysis", "Success Probability Modeling", "Contingency Planning", "Strategic Sequencing"],
    accuracy: "97.5%",
    processingTime: "< 90 seconds",
    delay: 0.4,
    bgGradient: "bg-gradient-to-br from-orange-500/10 to-red-500/10"
  },
  {
    id: 5,
    icon: Lightbulb,
    title: "Intelligent Insights Generation",
    subtitle: "Personalized Recommendations",
    description: "Generates actionable insights, identifies improvement opportunities, and provides personalized guidance tailored to your specific situation and goals.",
    color: "from-yellow-500 to-orange-500",
    details: ["Personalized Action Items", "Improvement Suggestions", "Timeline Guidance", "Document Templates", "Interview Preparation"],
    accuracy: "96.8%",
    processingTime: "< 15 seconds",
    delay: 0.5,
    bgGradient: "bg-gradient-to-br from-yellow-500/10 to-orange-500/10"
  },
  {
    id: 6,
    icon: CheckCircle,
    title: "Continuous Learning System",
    subtitle: "Self-Evolving Intelligence",
    description: "Continuously learns from new data, policy updates, and successful applications to improve accuracy and discover new opportunities for future clients.",
    color: "from-indigo-500 to-purple-500",
    details: ["Real-time Policy Updates", "Success Rate Tracking", "Algorithm Enhancement", "Knowledge Base Expansion", "Predictive Improvements"],
    accuracy: "99.9%",
    processingTime: "Continuous",
    delay: 0.6,
    bgGradient: "bg-gradient-to-br from-indigo-500/10 to-purple-500/10"
  }
];

// Enhanced visa matrix data
const visaMatrixData = [
  {
    country: "Canada",
    programs: ["Express Entry", "PNP", "Family Sponsorship"],
    successRate: "98.5%",
    avgTimeline: "6-18 months",
    difficulty: "Medium",
    color: "from-red-500 to-red-600"
  },
  {
    country: "Australia",
    programs: ["SkillSelect", "Employer Nomination", "Business Innovation"],
    successRate: "96.8%",
    avgTimeline: "8-24 months",
    difficulty: "Medium-High",
    color: "from-blue-500 to-blue-600"
  },
  {
    country: "United States",
    programs: ["EB-1", "EB-2", "EB-3", "Family-based"],
    successRate: "94.2%",
    avgTimeline: "12-36 months",
    difficulty: "High",
    color: "from-blue-600 to-red-600"
  },
  {
    country: "United Kingdom",
    programs: ["Skilled Worker", "Global Talent", "Innovator"],
    successRate: "92.7%",
    avgTimeline: "3-12 months",
    difficulty: "Medium",
    color: "from-blue-800 to-red-800"
  },
  {
    country: "Germany",
    programs: ["EU Blue Card", "Job Seeker", "Skilled Immigration"],
    successRate: "95.3%",
    avgTimeline: "4-16 months",
    difficulty: "Medium",
    color: "from-gray-800 to-red-600"
  },
  {
    country: "Singapore",
    programs: ["Employment Pass", "Tech.Pass", "PTS"],
    successRate: "89.6%",
    avgTimeline: "2-8 months",
    difficulty: "High",
    color: "from-red-500 to-white"
  }
];

// Success stories carousel data
const successStories = [
  {
    name: "Priya Sharma",
    country: "Canada",
    program: "Express Entry",
    timeline: "8 months",
    image: "/images/success-priya.jpg",
    quote: "The AI predicted my CRS score improvement strategy perfectly. Got my PR 4 months faster than expected!",
    beforeScore: "445",
    afterScore: "478",
    improvement: "+33 points"
  },
  {
    name: "David Chen",
    country: "Australia",
    program: "SkillSelect",
    timeline: "12 months",
    image: "/images/success-david.jpg",
    quote: "The pathway optimization saved me $15,000 and identified requirements I would have missed completely.",
    beforeScore: "65",
    afterScore: "80",
    improvement: "+15 points"
  },
  {
    name: "Sarah Johnson",
    country: "Germany",
    program: "EU Blue Card",
    timeline: "6 months",
    image: "/images/success-sarah.jpg",
    quote: "AI found a qualification recognition pathway I didn't know existed. Now working as a software engineer in Berlin!",
    beforeScore: "N/A",
    afterScore: "Approved",
    improvement: "100% Success"
  }
];

export default function SmartPathwayPagePremium() {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentStory, setCurrentStory] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const matrixRef = useRef<HTMLDivElement>(null);
  const storiesRef = useRef<HTMLDivElement>(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const stepsInView = useInView(stepsRef, { once: true, amount: 0.2 });
  const matrixInView = useInView(matrixRef, { once: true, amount: 0.2 });
  const storiesInView = useInView(storiesRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  // Auto-advance steps
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % pathwaySteps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Auto-advance stories
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % successStories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const startAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => setIsAnalyzing(false), 6000);
  };

  return (
    <div ref={containerRef} className='min-h-screen bg-gradient-to-b from-black via-neutral-950 to-neutral-900 text-white overflow-hidden'>
      {/* Enhanced AI Neural Network Background */}
      <motion.div style={{ y: backgroundY }} className='fixed inset-0 pointer-events-none'>
        <div className='absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/30' />
        
        {/* Animated Grid */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Enhanced Floating Particles */}
        <div className='absolute inset-0'>
          {Array.from({ length: 200 }, (_, i) => (
            <motion.div
              key={i}
              className='absolute w-1 h-1 bg-gradient-to-r from-blue-400/40 to-purple-400/40 rounded-full'
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [0.5, 2, 0.5],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 6,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        {/* Neural Network Connections */}
        <svg className='absolute inset-0 w-full h-full'>
          {Array.from({ length: 50 }, (_, i) => (
            <motion.line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="url(#gradient)"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 2,
              }}
            />
          ))}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.6"/>
            </linearGradient>
          </defs>
        </svg>
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
        {/* Enhanced Hero Section */}
        <section ref={heroRef} className='min-h-screen flex items-center justify-center relative pt-16'>
          <motion.div style={{ y: heroY }} className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center max-w-6xl mx-auto'>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, type: 'spring' }}
                className='inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-xl mb-8'
              >
                <Brain className='w-6 h-6 text-blue-400' />
                <span className='text-blue-300 font-medium'>AI-Powered Immigration Intelligence</span>
                <span className='text-4xl'>🧠</span>
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
                <span className='text-white'>Pathway</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className='text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-4xl mx-auto'
              >
                Experience the future of immigration consulting with our revolutionary AI system that analyzes 
                <span className='text-blue-400 font-semibold'> 500,000+ successful cases</span> to find your optimal pathway.
              </motion.p>

              {/* Live Analysis Demo */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
                className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 mb-12 max-w-4xl mx-auto'
              >
                <h3 className='text-2xl font-bold mb-6 text-center'>
                  <span className='text-white'>Live AI </span>
                  <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>Analysis</span>
                </h3>
                
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
                  <div className='text-center'>
                    <div className='text-3xl font-bold text-blue-400 mb-2'>99.8%</div>
                    <div className='text-white/60'>Accuracy Rate</div>
                  </div>
                  <div className='text-center'>
                    <div className='text-3xl font-bold text-purple-400 mb-2'>&lt; 60s</div>
                    <div className='text-white/60'>Analysis Time</div>
                  </div>
                  <div className='text-center'>
                    <div className='text-3xl font-bold text-cyan-400 mb-2'>500K+</div>
                    <div className='text-white/60'>Cases Analyzed</div>
                  </div>
                </div>

                <motion.button
                  onClick={startAnalysis}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className='w-full px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 rounded-2xl text-white font-bold text-lg shadow-2xl border border-blue-400/30'
                >
                  <span className='flex items-center justify-center gap-3'>
                    <Brain className='w-6 h-6' />
                    {isAnalyzing ? 'Analyzing Your Profile...' : 'Start AI Analysis'}
                    <ArrowRight className='w-6 h-6' />
                  </span>
                </motion.button>

                {/* Analysis Progress */}
                <AnimatePresence>
                  {isAnalyzing && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className='mt-6 space-y-4'
                    >
                      {pathwaySteps.slice(0, 3).map((step, index) => (
                        <motion.div
                          key={step.id}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.8 }}
                          className='flex items-center gap-3 p-3 bg-white/5 rounded-xl'
                        >
                          <step.icon className='w-5 h-5 text-blue-400' />
                          <span className='text-white/80'>{step.title}</span>
                          <div className='ml-auto text-green-400'>✓</div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 1 }}
                className='flex flex-col sm:flex-row gap-6 justify-center items-center'
              >
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
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white font-medium text-lg hover:bg-white/20 transition-all'
                >
                  <span className='flex items-center gap-2'>
                    <ExternalLink className='w-6 h-6' />
                    View Success Stories
                  </span>
                </motion.button>
              </motion.div>

              {/* Scroll Indicator */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
              >
                <ChevronDown className='w-8 h-8 text-white/50' />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Enhanced AI Process Steps */}
        <section ref={stepsRef} className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={stepsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-center mb-20'
            >
              <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='text-white'>How Our AI </span>
                <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                  Processes
                </span>
              </h2>
              <p className='text-xl text-white/70 max-w-3xl mx-auto'>
                Watch our advanced AI system analyze and optimize your immigration pathway in real-time
              </p>
            </motion.div>

            {/* Interactive Step Display */}
            <div className='max-w-6xl mx-auto'>
              {/* Step Navigation */}
              <div className='flex justify-center mb-12'>
                <div className='flex gap-2 p-2 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10'>
                  {pathwaySteps.map((step, index) => (
                    <button
                      key={step.id}
                      onClick={() => setCurrentStep(index)}
                      className={`px-4 py-2 rounded-xl transition-all ${
                        currentStep === index 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                          : 'text-white/60 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <step.icon className='w-5 h-5 mx-auto mb-1' />
                      <div className='text-xs'>Step {step.id}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Current Step Display */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12'
                >
                  <div className='grid md:grid-cols-2 gap-12 items-center'>
                    {/* Step Info */}
                    <div>
                      <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r ${pathwaySteps[currentStep].color}/20 border border-white/20 mb-6`}>
                        {React.createElement(pathwaySteps[currentStep].icon, { className: 'w-6 h-6 text-white' })}
                        <span className='text-white font-medium'>{pathwaySteps[currentStep].subtitle}</span>
                      </div>
                      
                      <h3 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                        {pathwaySteps[currentStep].title}
                      </h3>
                      
                      <p className='text-lg text-white/80 mb-8 leading-relaxed'>
                        {pathwaySteps[currentStep].description}
                      </p>

                      {/* Metrics */}
                      <div className='grid grid-cols-2 gap-6 mb-8'>
                        <div className='text-center p-4 bg-white/5 rounded-2xl'>
                          <div className='text-2xl font-bold text-green-400 mb-1'>
                            {pathwaySteps[currentStep].accuracy}
                          </div>
                          <div className='text-white/60 text-sm'>Accuracy</div>
                        </div>
                        <div className='text-center p-4 bg-white/5 rounded-2xl'>
                          <div className='text-2xl font-bold text-blue-400 mb-1'>
                            {pathwaySteps[currentStep].processingTime}
                          </div>
                          <div className='text-white/60 text-sm'>Processing</div>
                        </div>
                      </div>

                      {/* Details */}
                      <div className='space-y-3'>
                        {pathwaySteps[currentStep].details.map((detail, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className='flex items-center gap-3 text-white/70'
                          >
                            <CheckCircle className='w-5 h-5 text-green-400' />
                            {detail}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Visual Animation */}
                    <div className='relative'>
                      <div className={`relative h-80 rounded-2xl ${pathwaySteps[currentStep].bgGradient} border border-white/10 overflow-hidden`}>
                        {/* Animated Background */}
                        <div className='absolute inset-0'>
                          {Array.from({ length: 30 }, (_, i) => (
                            <motion.div
                              key={i}
                              className='absolute w-2 h-2 bg-white/20 rounded-full'
                              animate={{
                                x: [0, Math.random() * 200 - 100],
                                y: [0, Math.random() * 200 - 100],
                                opacity: [0.2, 0.8, 0.2],
                              }}
                              transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                              }}
                              style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                              }}
                            />
                          ))}
                        </div>

                        {/* Center Icon */}
                        <div className='absolute inset-0 flex items-center justify-center'>
                          <motion.div
                            animate={{ 
                              scale: [1, 1.2, 1],
                              rotate: [0, 360],
                            }}
                            transition={{ 
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${pathwaySteps[currentStep].color} flex items-center justify-center shadow-2xl`}
                          >
                            {React.createElement(pathwaySteps[currentStep].icon, { className: 'w-10 h-10 text-white' })}
                          </motion.div>
                        </div>

                        {/* Progress Rings */}
                        <div className='absolute inset-0 flex items-center justify-center'>
                          {[1, 2, 3].map((ring) => (
                            <motion.div
                              key={ring}
                              className='absolute border border-white/20 rounded-full'
                              style={{ 
                                width: `${ring * 80}px`, 
                                height: `${ring * 80}px` 
                              }}
                              animate={{ 
                                scale: [1, 1.1, 1],
                                opacity: [0.3, 0.1, 0.3],
                              }}
                              transition={{ 
                                duration: 2,
                                repeat: Infinity,
                                delay: ring * 0.3,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Enhanced Visa Matrix */}
        <section ref={matrixRef} className='py-32 relative bg-gradient-to-b from-transparent to-black/50'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={matrixInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-center mb-20'
            >
              <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='text-white'>Global Visa </span>
                <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                  Matrix
                </span>
              </h2>
              <p className='text-xl text-white/70 max-w-3xl mx-auto'>
                Real-time analysis of immigration opportunities across major destinations
              </p>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto'>
              {visaMatrixData.map((country, index) => (
                <motion.div
                  key={country.country}
                  initial={{ opacity: 0, y: 20 }}
                  animate={matrixInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 group'
                >
                  {/* Country Header */}
                  <div className='flex items-center gap-3 mb-6'>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${country.color} flex items-center justify-center text-white font-bold text-lg`}>
                      {country.country.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h3 className='text-xl font-bold text-white group-hover:text-blue-400 transition-colors'>
                        {country.country}
                      </h3>
                      <p className='text-white/60 text-sm'>{country.programs.length} Programs</p>
                    </div>
                  </div>

                  {/* Programs */}
                  <div className='space-y-2 mb-6'>
                    {country.programs.map((program, idx) => (
                      <div key={idx} className='px-3 py-2 bg-white/5 rounded-lg text-white/80 text-sm'>
                        {program}
                      </div>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className='grid grid-cols-2 gap-4 mb-6'>
                    <div className='text-center'>
                      <div className='text-2xl font-bold text-green-400 mb-1'>{country.successRate}</div>
                      <div className='text-white/60 text-xs'>Success Rate</div>
                    </div>
                    <div className='text-center'>
                      <div className='text-lg font-bold text-blue-400 mb-1'>{country.avgTimeline}</div>
                      <div className='text-white/60 text-xs'>Timeline</div>
                    </div>
                  </div>

                  {/* Difficulty */}
                  <div className='flex items-center justify-between'>
                    <span className='text-white/60 text-sm'>Difficulty:</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      country.difficulty === 'Low' ? 'bg-green-500/20 text-green-400' :
                      country.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      country.difficulty === 'Medium-High' ? 'bg-orange-500/20 text-orange-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {country.difficulty}
                    </span>
                  </div>

                  {/* Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='w-full mt-6 px-4 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-xl text-white font-medium hover:from-blue-500/30 hover:to-purple-500/30 transition-all'
                  >
                    Analyze Pathway
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Success Stories Carousel */}
        <section ref={storiesRef} className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={storiesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-center mb-20'
            >
              <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='text-white'>Success </span>
                <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                  Stories
                </span>
              </h2>
              <p className='text-xl text-white/70 max-w-3xl mx-auto'>
                Real results from our AI-powered immigration analysis
              </p>
            </motion.div>

            <div className='max-w-4xl mx-auto'>
              {/* Story Navigation */}
              <div className='flex justify-center gap-2 mb-8'>
                {successStories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStory(index)}
                    title={`View story ${index + 1}`}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentStory === index ? 'bg-blue-500' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>

              {/* Story Display */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStory}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12'
                >
                  <div className='grid md:grid-cols-3 gap-8 items-center'>
                    {/* Profile */}
                    <div className='text-center'>
                      <div className='w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl'>
                        {successStories[currentStory].name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <h3 className='text-xl font-bold text-white mb-2'>
                        {successStories[currentStory].name}
                      </h3>
                      <p className='text-blue-400 font-medium mb-2'>
                        {successStories[currentStory].country} • {successStories[currentStory].program}
                      </p>
                      <div className='text-white/60 text-sm'>
                        Completed in {successStories[currentStory].timeline}
                      </div>
                    </div>

                    {/* Quote */}
                    <div className='md:col-span-2'>
                      <div className='text-4xl text-blue-400 mb-4'>"</div>
                      <p className='text-lg text-white/90 mb-6 italic leading-relaxed'>
                        {successStories[currentStory].quote}
                      </p>
                      
                      {/* Improvement Metrics */}
                      <div className='grid grid-cols-3 gap-6'>
                        <div className='text-center p-4 bg-white/5 rounded-xl'>
                          <div className='text-xl font-bold text-red-400 mb-1'>
                            {successStories[currentStory].beforeScore}
                          </div>
                          <div className='text-white/60 text-xs'>Before</div>
                        </div>
                        <div className='text-center p-4 bg-white/5 rounded-xl'>
                          <div className='text-xl font-bold text-green-400 mb-1'>
                            {successStories[currentStory].afterScore}
                          </div>
                          <div className='text-white/60 text-xs'>After</div>
                        </div>
                        <div className='text-center p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl'>
                          <div className='text-xl font-bold text-blue-400 mb-1'>
                            {successStories[currentStory].improvement}
                          </div>
                          <div className='text-white/60 text-xs'>Improvement</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <div className='flex justify-center gap-4 mt-8'>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCurrentStory((prev) => prev === 0 ? successStories.length - 1 : prev - 1)}
                  className='p-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white hover:bg-white/20 transition-all'
                >
                  <ChevronLeft className='w-6 h-6' />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCurrentStory((prev) => (prev + 1) % successStories.length)}
                  className='p-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white hover:bg-white/20 transition-all'
                >
                  <ChevronRight className='w-6 h-6' />
                </motion.button>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
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
                  <span className='text-white'>Ready for Your </span>
                  <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                    AI Analysis
                  </span>
                  <span className='text-white'>?</span>
                </h2>
                <p className='text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed'>
                  Join thousands who have discovered their optimal immigration pathway using our revolutionary AI system. 
                  Get your personalized analysis in under 60 seconds.
                </p>

                <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-12'>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    className='px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 rounded-full text-white font-bold text-xl shadow-2xl'
                  >
                    <span className='flex items-center gap-3'>
                      <Brain className='w-6 h-6' />
                      Start AI Analysis
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
                      Book Consultation
                    </span>
                  </motion.button>
                </div>

                <div className='flex flex-wrap justify-center gap-8 text-white/60'>
                  <div className='flex items-center gap-2'>
                    <Shield className='w-5 h-5' />
                    <span>99.8% Accuracy</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Clock className='w-5 h-5' />
                    <span>60 Second Analysis</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Users className='w-5 h-5' />
                    <span>500K+ Success Cases</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Award className='w-5 h-5' />
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
