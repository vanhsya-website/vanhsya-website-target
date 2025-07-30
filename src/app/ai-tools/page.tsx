'use client';import { useState, useEffect, useRef } from 'react';import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';import Link from 'next/link';import {   Calculator,   FileText,   Shield,   Bot,   TrendingUp,   Brain,  Users,  Zap,  Globe,  Clock,  Sparkles,  ArrowRight,  Star,  Rocket,  Award,  Trophy,  Target,  CheckCircle2,  Lock,  Cpu,  Database,  Network,  Layers,  Code,  Settings,  BarChart3,  PieChart,  Activity,  Gauge,  Eye,  Fingerprint,  Orbit,  Hexagon,  Triangle} from 'lucide-react';const intelligentTools = [  {    id: 'neural-eligibility',    name: 'Neural Eligibility Engine',    description: 'Advanced neural network for real-time eligibility assessment',    icon: Brain,    href: '/ai-tools/neural-eligibility',    tier: 'Premium',    difficulty: 'Advanced',    xp: 850,    level: 12,    completionRate: 94,    features: ['Deep Learning Analysis', 'Multi-dimensional Scoring', 'Predictive Outcomes', 'Risk Assessment'],    techStack: ['TensorFlow', 'PyTorch', 'Neural Networks', 'ML Pipelines'],    gradient: 'bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700',    glowColor: 'shadow-blue-500/50',    users: '127K+',    accuracy: '99.7%',    processingTime: '0.3s',    category: 'Assessment'  },  {    id: 'quantum-documents',    name: 'Quantum Document Processor',    description: 'Quantum-enhanced document analysis and validation system',    icon: FileText,    href: '/ai-tools/quantum-documents',    tier: 'Enterprise',    difficulty: 'Expert',    xp: 1200,    level: 18,    completionRate: 97,    features: ['Quantum OCR', 'Blockchain Verification', 'Smart Contracts', 'Auto-certification'],    techStack: ['Quantum Computing', 'Blockchain', 'OCR AI', 'Smart Contracts'],    gradient: 'bg-gradient-to-br from-emerald-500 via-green-600 to-teal-700',    glowColor: 'shadow-emerald-500/50',    users: '89K+',    accuracy: '99.9%',    processingTime: '0.1s',    category: 'Verification'  },  {    id: 'fortress-security',    name: 'AI Fortress Security Suite',    description: 'Military-grade AI security with real-time threat detection',    icon: Shield,    href: '/ai-tools/fortress-security',    tier: 'Military',    difficulty: 'Expert',    xp: 1500,    level: 25,    completionRate: 99,    features: ['Threat Intelligence', 'Behavioral Analysis', 'Real-time Monitoring', 'Fraud Prevention'],    techStack: ['Cybersecurity AI', 'Behavioral Analytics', 'Threat Detection', 'Zero Trust'],    gradient: 'bg-gradient-to-br from-red-500 via-orange-600 to-amber-700',    glowColor: 'shadow-red-500/50',    users: '45K+',    accuracy: '99.99%',    processingTime: '0.05s',    category: 'Security'  },  {    id: 'cognitive-assistant',    name: 'Cognitive AI Assistant',    description: 'Next-generation conversational AI with emotional intelligence',    icon: Bot,    href: '/ai-tools/cognitive-assistant',    tier: 'Premium',    difficulty: 'Intermediate',    xp: 650,    level: 8,    completionRate: 91,    features: ['Natural Language', 'Emotional AI', 'Context Awareness', 'Multi-modal Input'],    techStack: ['GPT-4', 'NLP', 'Emotional AI', 'Voice Recognition'],    gradient: 'bg-gradient-to-br from-purple-500 via-pink-600 to-rose-700',    glowColor: 'shadow-purple-500/50',    users: '203K+',    accuracy: '98.2%',    processingTime: '0.2s',    category: 'Communication'  },  {    id: 'predictive-analytics',
    name: 'Predictive Analytics Engine',
    description: 'Advanced predictive modeling for immigration outcomes',
    icon: BarChart3,
    href: '/ai-tools/predictive-analytics',
    tier: 'Professional',
    difficulty: 'Advanced',
    xp: 950,
    level: 15,
    completionRate: 88,
    features: ['Predictive Modeling', 'Data Visualization', 'Trend Analysis', 'Success Probability'],
    techStack: ['Machine Learning', 'Big Data', 'Analytics', 'Visualization'],
    gradient: 'bg-gradient-to-br from-amber-500 via-yellow-600 to-orange-700',
    glowColor: 'shadow-amber-500/50',
    users: '156K+',
    accuracy: '97.8%',
    processingTime: '0.4s',
    category: 'Analytics'
  },
  {
    id: 'autonomous-navigator',
    name: 'Autonomous Migration Navigator',
    description: 'Self-learning AI that adapts to immigration policy changes',
    icon: Network,
    href: '/ai-tools/autonomous-navigator',
    tier: 'Beta',
    difficulty: 'Cutting Edge',
    xp: 2000,
    level: 30,
    completionRate: 85,
    features: ['Self-learning AI', 'Policy Adaptation', 'Autonomous Planning', 'Dynamic Routing'],
    techStack: ['AGI', 'Reinforcement Learning', 'Adaptive AI', 'Policy Engine'],
    gradient: 'bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700',
    glowColor: 'shadow-cyan-500/50',
    users: '67K+',
    accuracy: '96.5%',
    processingTime: '0.6s',
    category: 'Navigation'
  }
];

const gamificationStats = [
  { icon: Users, value: "687K+", label: "Active Engineers", change: "+12%" },
  { icon: Trophy, value: "99.7%", label: "Success Rate", change: "+0.3%" },
  { icon: Globe, value: "195+", label: "Countries", change: "+5" },
  { icon: Zap, value: "0.2s", label: "Avg Response", change: "-40%" }
];

const achievements = [
  { icon: Award, title: "AI Pioneer", description: "First to try 3 tools", progress: 100 },
  { icon: Target, title: "Precision Master", description: "Achieve 95%+ accuracy", progress: 78 },
  { icon: Star, title: "Power User", description: "Use tools 50+ times", progress: 45 },
  { icon: Trophy, title: "Expert Level", description: "Complete all tutorials", progress: 92 }
];

export default function IntelligentImmigrationSuite() {
  const [hoveredTool, setHoveredTool] = useState<number | null>(null);
  const [userLevel, setUserLevel] = useState(12);
  const [userXP, setUserXP] = useState(3750);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  
  const heroRef = useRef(null);
  const toolsRef = useRef(null);
  const featuresRef = useRef(null);
  
  const { scrollYProgress } = useScroll();
  const heroInView = useInView(heroRef, { once: false, amount: 0.3 });
  const toolsInView = useInView(toolsRef, { once: false, amount: 0.2 });
  const featuresInView = useInView(featuresRef, { once: false, amount: 0.3 });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.5]);

  const categories = ['All', 'Assessment', 'Verification', 'Security', 'Communication', 'Analytics', 'Navigation'];

  const filteredTools = selectedCategory === 'All' 
    ? intelligentTools 
    : intelligentTools.filter(tool => tool.category === selectedCategory);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setHoveredTool(Math.floor(Math.random() * intelligentTools.length));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getTierColor = (tier: string) => {
    switch(tier) {
      case 'Military': return 'from-red-600 to-orange-500';
      case 'Enterprise': return 'from-purple-600 to-indigo-500';
      case 'Premium': return 'from-blue-600 to-cyan-500';
      case 'Professional': return 'from-green-600 to-emerald-500';
      case 'Beta': return 'from-pink-600 to-rose-500';
      default: return 'from-gray-600 to-slate-500';
    }
  };

  const getDifficultyIcon = (difficulty: string) => {
    switch(difficulty) {
      case 'Expert': return <Lock className="w-4 h-4" />;
      case 'Advanced': return <Target className="w-4 h-4" />;
      case 'Intermediate': return <CheckCircle2 className="w-4 h-4" />;
      case 'Cutting Edge': return <Cpu className="w-4 h-4" />;
      default: return <Star className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950/40 to-indigo-950 text-white overflow-hidden">
      {/* Advanced Tech Background */}
      <motion.div 
        className="fixed inset-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        {/* Animated Grid Pattern */}
        <motion.div 
          className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Breathing Circuit Board Pattern */}
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Enhanced Floating Tech Elements */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.1, 0.8, 0.1],
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: Math.random() * 10 + 8,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          >
            {i % 6 === 0 && <Cpu className="w-6 h-6 text-blue-400/40" />}
            {i % 6 === 1 && <Database className="w-5 h-5 text-cyan-400/40" />}
            {i % 6 === 2 && <Network className="w-7 h-7 text-indigo-400/40" />}
            {i % 6 === 3 && <Code className="w-6 h-6 text-purple-400/40" />}
            {i % 6 === 4 && <Hexagon className="w-6 h-6 text-emerald-400/40" />}
            {i % 6 === 5 && <Triangle className="w-5 h-5 text-pink-400/40" />}
          </motion.div>
        ))}

        {/* Enhanced Data Streams */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`stream-${i}`}
            className="absolute w-px"
            style={{
              left: `${Math.random() * 100}%`,
              height: '300px',
              background: `linear-gradient(to bottom, 
                transparent, 
                ${i % 3 === 0 ? 'rgba(59, 130, 246, 0.6)' : 
                  i % 3 === 1 ? 'rgba(6, 182, 212, 0.6)' : 'rgba(147, 51, 234, 0.6)'}, 
                transparent)`
            }}
            animate={{
              y: [-300, typeof window !== 'undefined' ? window.innerHeight + 300 : 1200],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "linear"
            }}
          />
        ))}

        {/* Orbital Rings */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`orbit-${i}`}
            className="absolute border border-blue-400/20 rounded-full"
            style={{
              width: `${300 + i * 200}px`,
              height: `${300 + i * 200}px`,
              left: '50%',
              top: '50%',
              marginLeft: `-${150 + i * 100}px`,
              marginTop: `-${150 + i * 100}px`,
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 20 + i * 10,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <motion.div
              className="absolute w-2 h-2 bg-blue-400 rounded-full"
              style={{ left: '50%', top: '0%', marginLeft: '-4px' }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        ))}

        {/* Mouse Follower Particles */}
        <motion.div
          className="absolute w-4 h-4 pointer-events-none"
          animate={{
            x: mousePosition.x - 8,
            y: mousePosition.y - 8,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        >
          <motion.div
            className="w-full h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </motion.div>
      </motion.div>

      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center pt-20"
        style={{ 
          scale: heroScale,
          opacity: heroOpacity,
        }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 50 }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            className="text-center max-w-6xl mx-auto"
          >
            {/* User Progress Badge with Enhanced Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotateX: 90 }}
              animate={{ 
                opacity: heroInView ? 1 : 0, 
                scale: heroInView ? 1 : 0.5,
                rotateX: heroInView ? 0 : 90
              }}
              transition={{ delay: 0.2, duration: 0.8 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)"
              }}
              className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl border border-blue-500/30 mb-8 backdrop-blur-lg"
            >
              <motion.div 
                className="flex items-center gap-2"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Award className="w-6 h-6 text-blue-400" />
                <span className="text-lg font-bold">Level {userLevel}</span>
              </motion.div>
              <div className="w-px h-6 bg-blue-400/30" />
              <motion.div 
                className="flex items-center gap-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">{userXP.toLocaleString()} XP</span>
              </motion.div>
              <div className="w-px h-6 bg-blue-400/30" />
              <motion.span 
                className="text-sm font-medium text-blue-300"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Engineering Mode
              </motion.span>
            </motion.div>

            {/* Main Title with Staggered Letter Animation */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 30 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-8xl font-black mb-6"
            >
              <motion.span 
                className="bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent inline-block"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Intelligent Immigration
              </motion.span>
              <br />
              <motion.span 
                className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent inline-block"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                Technology Suite
              </motion.span>
            </motion.h1>

            {/* Tech Subtitle with Typewriter Effect */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 20 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Deploy enterprise-grade AI systems engineered for immigration excellence. 
              Experience cutting-edge technology with gamified progression and real-time analytics.
            </motion.p>

            {/* Gaming-style Stats Dashboard with Enhanced Animations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 30 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12"
            >
              {gamificationStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
                  animate={{ 
                    opacity: heroInView ? 1 : 0, 
                    scale: heroInView ? 1 : 0.5,
                    rotateY: heroInView ? 0 : 90
                  }}
                  transition={{ 
                    delay: 0.7 + index * 0.1, 
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotateY: 10,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)"
                  }}
                  className="relative p-6 rounded-2xl bg-gradient-to-br from-slate-900/80 to-blue-900/40 border border-blue-500/30 backdrop-blur-xl group cursor-pointer"
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                  />
                  <div className="relative">
                    <motion.div
                      animate={{ 
                        y: [0, -5, 0],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 2 + index * 0.5, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                    </motion.div>
                    <motion.div 
                      className="text-2xl font-bold text-white mb-1"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 1, repeat: Infinity, delay: index * 0.2 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-slate-400 mb-2">{stat.label}</div>
                    <motion.div 
                      className="text-xs text-green-400 font-semibold"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {stat.change}
                    </motion.div>
                  </div>
                  
                  {/* Particle burst on hover */}
                  <AnimatePresence>
                    {hoveredTool === index && (
                      <>
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ 
                              opacity: [0, 1, 0], 
                              scale: [0, 1, 0],
                              x: [0, (Math.random() - 0.5) * 50],
                              y: [0, (Math.random() - 0.5) * 50],
                            }}
                            exit={{ opacity: 0, scale: 0 }}
                            className="absolute w-1 h-1 bg-blue-400 rounded-full"
                            style={{
                              left: '50%',
                              top: '50%',
                            }}
                            transition={{
                              duration: 1,
                              delay: i * 0.1,
                            }}
                          />
                        ))}
                      </>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>

            {/* Achievement Showcase with Enhanced Animations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 30 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, rotateX: 90 }}
                  animate={{ 
                    opacity: heroInView ? 1 : 0, 
                    scale: heroInView ? 1 : 0.8,
                    rotateX: heroInView ? 0 : 90
                  }}
                  transition={{ 
                    delay: 0.9 + index * 0.1, 
                    duration: 0.6,
                    type: "spring"
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 5,
                    boxShadow: "0 15px 30px rgba(255, 255, 255, 0.1)"
                  }}
                  className="p-4 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-slate-600/50 group cursor-pointer"
                >
                  <motion.div
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 2 + index * 0.3, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <achievement.icon className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                  </motion.div>
                  <div className="text-sm font-bold text-white mb-1">{achievement.title}</div>
                  <div className="text-xs text-slate-400 mb-2">{achievement.description}</div>
                  <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                    <motion.div 
                      className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: heroInView ? `${achievement.progress}%` : 0 }}
                      transition={{ 
                        delay: 1 + index * 0.2, 
                        duration: 1.5,
                        ease: "easeOut"
                      }}
                    />
                  </div>
                  
                  {/* Progress pulse effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-xl opacity-0"
                    animate={{ opacity: [0, 0.3, 0] }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons with Enhanced Animations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 30 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)",
                  rotateY: 5
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl font-bold text-lg overflow-hidden"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ 
                    background: [
                      'linear-gradient(to right, rgb(37, 99, 235), rgb(99, 102, 241))',
                      'linear-gradient(to right, rgb(59, 130, 246), rgb(147, 51, 234))',
                      'linear-gradient(to right, rgb(37, 99, 235), rgb(99, 102, 241))'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <div className="relative flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Rocket className="w-6 h-6" />
                  </motion.div>
                  <span>Deploy AI Suite</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </div>
              </motion.button>

              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  borderColor: 'rgb(34, 211, 238)',
                  boxShadow: "0 15px 30px rgba(34, 211, 238, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 border border-blue-500 rounded-2xl font-bold text-lg hover:border-cyan-400 transition-colors relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative">View Demo</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Technology Categories Filter */}
      <section className="relative py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-slate-800/50 border border-slate-600/50 text-slate-300 hover:border-blue-500/50'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Intelligent Tools Grid */}
      <section ref={toolsRef} className="relative py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: toolsInView ? 1 : 0, y: toolsInView ? 0 : 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-6"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_200%]">
                AI Technology Arsenal
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-300 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: toolsInView ? 1 : 0 }}
              transition={{ delay: 0.3 }}
            >
              Deploy military-grade AI systems with enterprise-level security and real-time performance monitoring.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredTools.map((tool, index) => (
                <motion.div
                  key={tool.id}
                  layout
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ 
                    opacity: toolsInView ? 1 : 0, 
                    y: toolsInView ? 0 : 50,
                    scale: toolsInView ? 1 : 0.9
                  }}
                  exit={{ opacity: 0, y: -50, scale: 0.9 }}
                  transition={{ 
                    delay: index * 0.1,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    y: -20, 
                    scale: 1.03,
                    rotateY: 5,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  onHoverStart={() => setHoveredTool(index)}
                  onHoverEnd={() => setHoveredTool(null)}
                  className="group relative"
                >
                  <Link href={tool.href}>
                    <motion.div 
                      className={`relative h-full rounded-3xl overflow-hidden transition-all duration-700 ${tool.gradient} p-[2px]`}
                      animate={{
                        boxShadow: hoveredTool === index 
                          ? [`0 0 0 ${tool.glowColor}`, `0 25px 50px ${tool.glowColor}`, `0 0 0 ${tool.glowColor}`]
                          : '0 0 0 rgba(0,0,0,0)'
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {/* Enhanced Glowing border effect */}
                      <motion.div 
                        className={`absolute inset-0 rounded-3xl ${tool.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
                        animate={{
                          scale: hoveredTool === index ? [1, 1.1, 1] : 1,
                          opacity: hoveredTool === index ? [0.5, 1, 0.5] : 0
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      
                      <div className="relative h-full bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-3xl p-8">
                        {/* Header with Enhanced Animation */}
                        <div className="flex items-start justify-between mb-6">
                          <motion.div 
                            className={`p-4 rounded-2xl ${tool.gradient} shadow-2xl ${tool.glowColor}`}
                            animate={{
                              rotate: hoveredTool === index ? [0, 5, -5, 0] : 0,
                              scale: hoveredTool === index ? [1, 1.1, 1] : 1
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <tool.icon className="w-8 h-8 text-white" />
                          </motion.div>
                          
                          <div className="text-right">
                            <motion.div 
                              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${getTierColor(tool.tier)}`}
                              whileHover={{ scale: 1.05 }}
                              animate={{
                                boxShadow: hoveredTool === index 
                                  ? ['0 0 0 rgba(0,0,0,0)', '0 5px 15px rgba(255,255,255,0.3)', '0 0 0 rgba(0,0,0,0)']
                                  : '0 0 0 rgba(0,0,0,0)'
                              }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              {getDifficultyIcon(tool.difficulty)}
                              {tool.tier}
                            </motion.div>
                            <motion.div 
                              className="text-sm text-slate-400 mt-1"
                              animate={{ opacity: [0.7, 1, 0.7] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              Level {tool.level}
                            </motion.div>
                          </div>
                        </div>

                        {/* Content with Stagger Animation */}
                        <motion.h3 
                          className="text-2xl font-bold text-white mb-3"
                          animate={{
                            color: hoveredTool === index 
                              ? ['rgb(255, 255, 255)', 'rgb(96, 165, 250)', 'rgb(255, 255, 255)']
                              : 'rgb(255, 255, 255)'
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {tool.name}
                        </motion.h3>
                        <motion.p 
                          className="text-slate-300 mb-6 leading-relaxed"
                          animate={{ opacity: hoveredTool === index ? [0.7, 1, 0.7] : 0.7 }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {tool.description}
                        </motion.p>

                        {/* Gaming Stats with Pulse Animation */}
                        <motion.div 
                          className="grid grid-cols-2 gap-4 mb-6 p-4 rounded-xl bg-slate-800/50"
                          animate={{
                            background: hoveredTool === index 
                              ? ['rgba(30, 41, 59, 0.5)', 'rgba(59, 130, 246, 0.1)', 'rgba(30, 41, 59, 0.5)']
                              : 'rgba(30, 41, 59, 0.5)'
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <div className="text-center">
                            <div className="text-sm text-slate-400">XP Reward</div>
                            <motion.div 
                              className="text-lg font-bold text-yellow-400"
                              animate={{ 
                                scale: hoveredTool === index ? [1, 1.1, 1] : 1,
                                textShadow: hoveredTool === index 
                                  ? ['0 0 0 rgba(0,0,0,0)', '0 0 10px rgba(251, 191, 36, 0.8)', '0 0 0 rgba(0,0,0,0)']
                                  : '0 0 0 rgba(0,0,0,0)'
                              }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              +{tool.xp}
                            </motion.div>
                          </div>
                          <div className="text-center">
                            <div className="text-sm text-slate-400">Completion</div>
                            <motion.div 
                              className="text-lg font-bold text-green-400"
                              animate={{ 
                                scale: hoveredTool === index ? [1, 1.1, 1] : 1,
                                textShadow: hoveredTool === index 
                                  ? ['0 0 0 rgba(0,0,0,0)', '0 0 10px rgba(34, 197, 94, 0.8)', '0 0 0 rgba(0,0,0,0)']
                                  : '0 0 0 rgba(0,0,0,0)'
                              }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              {tool.completionRate}%
                            </motion.div>
                          </div>
                        </motion.div>

                        {/* Performance Metrics with Enhanced Animation */}
                        <motion.div 
                          className="flex items-center justify-between mb-6 text-sm"
                          animate={{
                            opacity: hoveredTool === index ? [0.8, 1, 0.8] : 0.8
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <motion.div 
                            className="flex items-center gap-2"
                            animate={{ scale: hoveredTool === index ? [1, 1.05, 1] : 1 }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <Users className="w-4 h-4 text-blue-400" />
                            <span className="text-slate-300">{tool.users}</span>
                          </motion.div>
                          <motion.div 
                            className="flex items-center gap-2"
                            animate={{ scale: hoveredTool === index ? [1, 1.05, 1] : 1 }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                          >
                            <Gauge className="w-4 h-4 text-green-400" />
                            <span className="text-slate-300">{tool.accuracy}</span>
                          </motion.div>
                          <motion.div 
                            className="flex items-center gap-2"
                            animate={{ scale: hoveredTool === index ? [1, 1.05, 1] : 1 }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                          >
                            <Zap className="w-4 h-4 text-yellow-400" />
                            <span className="text-slate-300">{tool.processingTime}</span>
                          </motion.div>
                        </motion.div>

                        {/* Tech Stack with Stagger Animation */}
                        <motion.div className="mb-6">
                          <div className="text-sm font-semibold text-slate-400 mb-2">Technology Stack</div>
                          <div className="flex flex-wrap gap-2">
                            {tool.techStack.map((tech, idx) => (
                              <motion.span 
                                key={idx}
                                className="px-2 py-1 bg-slate-700/50 rounded-md text-xs text-slate-300"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ 
                                  opacity: toolsInView ? 1 : 0, 
                                  scale: toolsInView ? 1 : 0.8 
                                }}
                                transition={{ 
                                  delay: index * 0.1 + idx * 0.05,
                                  duration: 0.3
                                }}
                                whileHover={{ 
                                  scale: 1.1,
                                  backgroundColor: 'rgba(59, 130, 246, 0.2)',
                                  color: 'rgb(96, 165, 250)'
                                }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>

                        {/* Features with Enhanced Stagger */}
                        <div className="space-y-2 mb-8">
                          {tool.features.map((feature, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ 
                                opacity: toolsInView ? 1 : 0, 
                                x: toolsInView ? 0 : -20 
                              }}
                              transition={{ 
                                delay: index * 0.1 + idx * 0.1,
                                duration: 0.5,
                                type: "spring"
                              }}
                              whileHover={{ x: 5, scale: 1.02 }}
                              className="flex items-center gap-3"
                            >
                              <motion.div
                                animate={{
                                  rotate: hoveredTool === index ? [0, 360] : 0,
                                  scale: hoveredTool === index ? [1, 1.2, 1] : 1
                                }}
                                transition={{ 
                                  duration: 2, 
                                  repeat: Infinity,
                                  delay: idx * 0.2
                                }}
                              >
                                <CheckCircle2 className="w-4 h-4 text-green-400" />
                              </motion.div>
                              <span className="text-sm text-slate-300">{feature}</span>
                            </motion.div>
                          ))}
                        </div>

                        {/* Enhanced Deploy Button */}
                        <motion.div
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                          }}
                          whileTap={{ scale: 0.95 }}
                          className={`w-full p-4 rounded-2xl ${tool.gradient} text-white font-bold text-center cursor-pointer shadow-lg transition-all duration-300 relative overflow-hidden`}
                        >
                          <motion.div
                            className="absolute inset-0 bg-white/20 opacity-0"
                            animate={{ 
                              opacity: hoveredTool === index ? [0, 0.3, 0] : 0,
                              scale: hoveredTool === index ? [0, 1, 1.5] : 0
                            }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                          <div className="relative flex items-center justify-center gap-3">
                            <motion.div
                              animate={{ 
                                rotate: hoveredTool === index ? [0, 360] : 0 
                              }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              <Settings className="w-5 h-5" />
                            </motion.div>
                            <span>Deploy System</span>
                            <motion.div
                              animate={{ 
                                x: hoveredTool === index ? [0, 5, 0] : 0 
                              }}
                              transition={{ duration: 1, repeat: Infinity }}
                            >
                              <ArrowRight className="w-5 h-5" />
                            </motion.div>
                          </div>
                        </motion.div>

                        {/* Enhanced Hover Particles */}
                        <AnimatePresence>
                          {hoveredTool === index && (
                            <>
                              {[...Array(12)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ opacity: 0, scale: 0 }}
                                  animate={{ 
                                    opacity: [0, 1, 0], 
                                    scale: [0, 1, 0],
                                    x: [0, (Math.random() - 0.5) * 100],
                                    y: [0, (Math.random() - 0.5) * 100],
                                  }}
                                  exit={{ opacity: 0, scale: 0 }}
                                  className="absolute rounded-full"
                                  style={{
                                    width: Math.random() * 4 + 1,
                                    height: Math.random() * 4 + 1,
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    backgroundColor: i % 3 === 0 ? '#60a5fa' : i % 3 === 1 ? '#34d399' : '#fbbf24'
                                  }}
                                  transition={{
                                    duration: 1.5,
                                    delay: i * 0.1,
                                    ease: "easeOut"
                                  }}
                                />
                              ))}
                              
                              {/* Energy rings */}
                              {[...Array(3)].map((_, i) => (
                                <motion.div
                                  key={`ring-${i}`}
                                  initial={{ opacity: 0, scale: 0.5 }}
                                  animate={{ 
                                    opacity: [0, 0.6, 0], 
                                    scale: [0.5, 2, 3],
                                  }}
                                  exit={{ opacity: 0, scale: 0 }}
                                  className="absolute border border-blue-400/30 rounded-full"
                                  style={{
                                    width: '100px',
                                    height: '100px',
                                    left: '50%',
                                    top: '50%',
                                    marginLeft: '-50px',
                                    marginTop: '-50px',
                                  }}
                                  transition={{
                                    duration: 2,
                                    delay: i * 0.3,
                                    ease: "easeOut"
                                  }}
                                />
                              ))}
                            </>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section ref={featuresRef} className="relative py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: featuresInView ? 1 : 0, y: featuresInView ? 0 : 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
              animate={{
                textShadow: featuresInView 
                  ? ['0 0 0 rgba(0,0,0,0)', '0 0 20px rgba(96, 165, 250, 0.5)', '0 0 0 rgba(0,0,0,0)']
                  : '0 0 0 rgba(0,0,0,0)'
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Enterprise <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Architecture</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-slate-300 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: featuresInView ? 1 : 0 }}
              transition={{ delay: 0.3 }}
            >
              Built on enterprise-grade infrastructure with military-level security and real-time monitoring.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Cpu,
                title: "Neural Processing",
                description: "Advanced neural networks with real-time inference capabilities and adaptive learning algorithms.",
                color: "from-blue-500 to-cyan-500",
                metrics: ["99.9% Uptime", "0.1s Response", "Infinite Scale"]
              },
              {
                icon: Fingerprint,
                title: "Quantum Security",
                description: "Military-grade encryption with quantum-resistant algorithms and zero-trust architecture.",
                color: "from-emerald-500 to-green-500",
                metrics: ["256-bit AES", "Zero Trust", "SOC 2 Type II"]
              },
              {
                icon: Activity,
                title: "Real-time Analytics",
                description: "Comprehensive monitoring with predictive analytics and automated optimization systems.",
                color: "from-purple-500 to-indigo-500",
                metrics: ["Live Monitoring", "Predictive AI", "Auto-scaling"]
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: 90 }}
                animate={{ 
                  opacity: featuresInView ? 1 : 0, 
                  y: featuresInView ? 0 : 50,
                  rotateX: featuresInView ? 0 : 90
                }}
                transition={{ 
                  delay: index * 0.2, 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 10,
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.2)"
                }}
                className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-900/80 to-slate-800/60 border border-slate-700/50 backdrop-blur-xl overflow-hidden group cursor-pointer"
              >
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  animate={{
                    opacity: [0, 0.05, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                
                {/* Floating particles */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 1, 0.3],
                      scale: [1, 1.5, 1]
                    }}
                    transition={{
                      duration: Math.random() * 3 + 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
                
                <div className="relative">
                  <motion.div 
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-2xl`}
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        '0 10px 30px rgba(0,0,0,0.3)',
                        '0 20px 60px rgba(59, 130, 246, 0.4)',
                        '0 10px 30px rgba(0,0,0,0.3)'
                      ]
                    }}
                    transition={{ 
                      duration: 3 + index * 0.5, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <motion.h3 
                    className="text-xl font-bold text-white mb-4 text-center"
                    animate={{
                      color: featuresInView 
                        ? ['rgb(255, 255, 255)', 'rgb(96, 165, 250)', 'rgb(255, 255, 255)']
                        : 'rgb(255, 255, 255)'
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {feature.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-slate-300 leading-relaxed mb-6 text-center"
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {feature.description}
                  </motion.p>
                  
                  <div className="space-y-2">
                    {feature.metrics.map((metric, idx) => (
                      <motion.div 
                        key={idx} 
                        className="flex items-center justify-center gap-2 text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ 
                          opacity: featuresInView ? 1 : 0, 
                          x: featuresInView ? 0 : -20 
                        }}
                        transition={{ 
                          delay: index * 0.2 + idx * 0.1,
                          duration: 0.5
                        }}
                        whileHover={{ scale: 1.05, x: 5 }}
                      >
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            delay: idx * 0.3
                          }}
                        >
                          <CheckCircle2 className="w-4 h-4 text-green-400" />
                        </motion.div>
                        <span className="text-slate-300">{metric}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Hover energy wave */}
                <motion.div
                  className="absolute inset-0 border border-blue-400/30 rounded-3xl opacity-0"
                  animate={{ 
                    opacity: [0, 0.6, 0],
                    scale: [0.8, 1.1, 1.3]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.7
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Ready to Deploy
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Next-Gen AI Systems?
              </span>
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              Join the elite network of 687,000+ engineers revolutionizing immigration technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="group px-12 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl font-bold text-lg text-white overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-center gap-3">
                  <Rocket className="w-6 h-6" />
                  <span>Initialize AI Suite</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 border border-blue-500 rounded-2xl font-bold text-lg text-white hover:border-cyan-400 transition-colors"
              >
                Access Documentation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
