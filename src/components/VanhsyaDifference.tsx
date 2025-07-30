"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  Eye, 
  DollarSign, 
  Shield, 
  Users, 
  CheckCircle, 
  TrendingUp,
  Crown,
  Zap,
  Globe,
  Award,
  Sparkles,
  Target,
  Brain,
  Lock,
  Cpu,
  Database,
  Network,
  Code,
  Hexagon,
  Triangle,
  Orbit
} from 'lucide-react';

interface DifferencePoint {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight: string;
  color: string;
  stats: string;
}

export default function VanhsyaDifference() {
  const sectionRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll();
  const sectionInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHoveredIndex(Math.floor(Math.random() * differences.length));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const differences: DifferencePoint[] = [
    {
      icon: <Crown className="w-8 h-8" />,
      title: "World's Most Advanced AI Platform",
      description: "Revolutionary AI-powered migration system with machine learning algorithms that analyze millions of data points for guaranteed success.",
      highlight: "99.8% approval rate with AI optimization",
      color: "from-yellow-500 to-orange-500",
      stats: "10M+ Data Points"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "100% Quantum Transparency",
      description: "Revolutionary real-time tracking with blockchain verification - see every application step, officer response, and decision in real-time.",
      highlight: "Live blockchain-verified tracking system",
      color: "from-blue-500 to-indigo-500",
      stats: "Real-Time Updates"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "AI Quantum Shield Protection",
      description: "The world's most advanced AI fraud detection system protecting against 500+ scam patterns and fake agencies.",
      highlight: "500+ AI fraud patterns detected instantly",
      color: "from-red-500 to-orange-500",
      stats: "99.99% Security"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Revolutionary Wallet System", 
      description: "Breakthrough milestone-based payment system with cryptocurrency-grade security - pay only when goals are achieved.",
      highlight: "Zero upfront costs, pay only for results",
      color: "from-green-500 to-emerald-500",
      stats: "100% Guaranteed"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Quantum AI Success Engine",
      description: "Advanced machine learning algorithms that predict success probability and optimize your application for maximum approval chances.",
      highlight: "AI-powered success optimization technology",
      color: "from-purple-500 to-pink-500",
      stats: "AI Optimized"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Quantum Network",
      description: "Direct access to 75+ countries' immigration systems with verified government partnerships and real-time embassy connections.",
      highlight: "75+ countries, 200+ verified pathways",
      color: "from-cyan-500 to-blue-500",
      stats: "75+ Countries"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Zero-Agent Revolutionary System",
      description: "Direct access to licensed consultants and government channels - completely eliminating middlemen and commission-driven agents.",
      highlight: "Direct government channel access only",
      color: "from-indigo-500 to-purple-500",
      stats: "Zero Middlemen"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quantum Verified Success Stories",
      description: "Every testimonial is blockchain-verified, DNA-authenticated, and satellite-location confirmed - the industry's first unbreakable verification system.",
      highlight: "Blockchain + DNA verified testimonials",
      color: "from-pink-500 to-red-500",
      stats: "100% Verified"
    }
  ];

  return (
    <motion.section 
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900/95 to-slate-950"
      style={{ opacity }}
    >
      {/* Enhanced Animated Background */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        {/* Dark Animated Grid */}
        <motion.div 
          className="absolute inset-0 bg-[linear-gradient(rgba(30,41,59,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(30,41,59,0.3)_1px,transparent_1px)] bg-[size:60px_60px]"
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Dark Circuit Pattern */}
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/20 via-slate-950 to-slate-950"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Enhanced Floating Tech Elements */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 15 - 7.5, 0],
              opacity: [0.05, 0.2, 0.05],
              rotate: [0, 360],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 12 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          >
            {i % 6 === 0 && <Cpu className="w-5 h-5 text-slate-600/30" />}
            {i % 6 === 1 && <Database className="w-4 h-4 text-slate-600/30" />}
            {i % 6 === 2 && <Network className="w-6 h-6 text-slate-600/30" />}
            {i % 6 === 3 && <Code className="w-5 h-5 text-slate-600/30" />}
            {i % 6 === 4 && <Hexagon className="w-5 h-5 text-slate-600/30" />}
            {i % 6 === 5 && <Triangle className="w-4 h-4 text-slate-600/30" />}
          </motion.div>
        ))}

        {/* Dark Data Streams */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`stream-${i}`}
            className="absolute w-px"
            style={{
              left: `${Math.random() * 100}%`,
              height: '250px',
              background: `linear-gradient(to bottom, 
                transparent, 
                ${i % 3 === 0 ? 'rgba(71, 85, 105, 0.3)' : 
                  i % 3 === 1 ? 'rgba(100, 116, 139, 0.3)' : 'rgba(51, 65, 85, 0.3)'}, 
                transparent)`
            }}
            animate={{
              y: [-250, typeof window !== 'undefined' ? window.innerHeight + 250 : 1000],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "linear"
            }}
          />
        ))}

        {/* Dark Orbital Rings */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={`orbit-${i}`}
            className="absolute border border-slate-700/20 rounded-full"
            style={{
              width: `${400 + i * 300}px`,
              height: `${400 + i * 300}px`,
              left: '50%',
              top: '50%',
              marginLeft: `-${200 + i * 150}px`,
              marginTop: `-${200 + i * 150}px`,
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 30 + i * 15,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <motion.div
              className="absolute w-2 h-2 bg-slate-600/40 rounded-full"
              style={{ left: '50%', top: '0%', marginLeft: '-4px' }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        ))}

        {/* Mouse Follower - Darker */}
        <motion.div
          className="absolute w-6 h-6 pointer-events-none"
          animate={{
            x: mousePosition.x - 12,
            y: mousePosition.y - 12,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        >
          <motion.div
            className="w-full h-full bg-gradient-to-r from-slate-600/20 to-slate-500/20 rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </motion.div>
      </motion.div>
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-cyan-400/30 to-blue-400/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-red-400/25 to-pink-400/15 rounded-full blur-3xl"
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      </div>

      <div className="relative px-6 mx-auto max-w-7xl sm:px-8">
        {/* Enhanced Revolutionary Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 mb-6 rounded-full bg-gradient-to-r from-slate-800/40 via-slate-700/40 to-slate-800/40 border border-slate-600/50 backdrop-blur-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: sectionInView ? 1 : 0, 
              scale: sectionInView ? 1 : 0.8 
            }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(100, 116, 139, 0.3)"
            }}
            animate={{
              boxShadow: [
                "0 0 0 rgba(100, 116, 139, 0)",
                "0 5px 15px rgba(100, 116, 139, 0.2)",
                "0 0 0 rgba(100, 116, 139, 0)"
              ]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-5 h-5 text-slate-400" />
            </motion.div>
            <span className="font-bold text-slate-200">The VANHSYA Revolutionary Difference</span>
            <motion.div
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <Crown className="w-5 h-5 text-slate-400" />
            </motion.div>
          </motion.div>
          
          <motion.h2 
            className="mb-8 text-5xl font-black text-white md:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 30 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.span
              animate={{
                textShadow: [
                  "0 0 0 rgba(0,0,0,0)",
                  "0 0 20px rgba(148, 163, 184, 0.3)",
                  "0 0 0 rgba(0,0,0,0)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Why VANHSYA is the
            </motion.span>
            <motion.span 
              className="block text-transparent bg-gradient-to-r from-slate-400 via-slate-300 to-slate-500 bg-clip-text bg-[length:200%_200%]"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Most Powerful Platform
            </motion.span>
            <motion.span 
              className="block text-3xl font-bold text-slate-300 md:text-4xl lg:text-5xl mt-4"
              animate={{
                color: ["rgb(203, 213, 225)", "rgb(148, 163, 184)", "rgb(203, 213, 225)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Ever Created
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="max-w-4xl mx-auto text-xl text-slate-400 md:text-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 20 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            animate={{
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Experience the revolutionary features that make VANHSYA the world's most advanced 
            migration platform. These breakthrough innovations have never existed before in history.
          </motion.p>
        </motion.div>

        {/* Enhanced Revolutionary Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {differences.map((difference, index) => (
            <motion.div
              key={difference.title}
              className="group relative overflow-hidden"
              initial={{ opacity: 0, y: 80, scale: 0.9 }}
              animate={{ 
                opacity: sectionInView ? 1 : 0, 
                y: sectionInView ? 0 : 80,
                scale: sectionInView ? 1 : 0.9
              }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.03,
                y: -10,
                rotateY: 5,
                transition: { type: "spring", stiffness: 300 }
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              {/* Enhanced Dark Glass Card */}
              <motion.div 
                className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-900/60 to-slate-800/40 border border-slate-700/50 backdrop-blur-xl shadow-2xl h-full overflow-hidden"
                animate={{
                  boxShadow: hoveredIndex === index 
                    ? ["0 10px 30px rgba(0,0,0,0.3)", "0 25px 50px rgba(100, 116, 139, 0.2)", "0 10px 30px rgba(0,0,0,0.3)"]
                    : "0 10px 30px rgba(0,0,0,0.3)"
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {/* Enhanced Dynamic Background Gradient */}
                <motion.div 
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${difference.color} opacity-0 group-hover:opacity-10`}
                  animate={{
                    opacity: hoveredIndex === index ? [0, 0.15, 0] : 0,
                    scale: hoveredIndex === index ? [1, 1.1, 1] : 1
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                {/* Floating Background Particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-slate-600/30 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -15, 0],
                      opacity: [0.2, 0.6, 0.2],
                      scale: [1, 1.5, 1]
                    }}
                    transition={{
                      duration: Math.random() * 3 + 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
                
                {/* Enhanced Premium Icon with Advanced Animation */}
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${difference.color} mb-6 relative z-10`}
                  animate={{
                    rotate: hoveredIndex === index ? [0, 10, -10, 0] : 0,
                    scale: hoveredIndex === index ? [1, 1.2, 1] : 1,
                    boxShadow: hoveredIndex === index 
                      ? ["0 10px 20px rgba(0,0,0,0.2)", "0 20px 40px rgba(100, 116, 139, 0.4)", "0 10px 20px rgba(0,0,0,0.2)"]
                      : "0 10px 20px rgba(0,0,0,0.2)"
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-white">
                    {difference.icon}
                  </span>
                </motion.div>

                {/* Enhanced Stats Badge */}
                <motion.div
                  className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-slate-700/80 to-slate-600/80 rounded-full backdrop-blur-md border border-slate-500/30"
                  initial={{ opacity: 0, scale: 0, rotateX: 90 }}
                  animate={{ 
                    opacity: sectionInView ? 1 : 0, 
                    scale: sectionInView ? 1 : 0,
                    rotateX: sectionInView ? 0 : 90
                  }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                  animate={{
                    scale: hoveredIndex === index ? [1, 1.1, 1] : 1,
                    boxShadow: hoveredIndex === index 
                      ? ["0 0 0 rgba(0,0,0,0)", "0 5px 15px rgba(100, 116, 139, 0.3)", "0 0 0 rgba(0,0,0,0)"]
                      : "0 0 0 rgba(0,0,0,0)"
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <span className="text-xs font-bold text-slate-200">{difference.stats}</span>
                </motion.div>

                {/* Enhanced Dark Content */}
                <div className="relative z-10">
                  <motion.h3 
                    className="mb-4 text-2xl font-black text-slate-200 group-hover:text-slate-100 transition-colors duration-300"
                    animate={{
                      color: hoveredIndex === index 
                        ? ["rgb(226, 232, 240)", "rgb(203, 213, 225)", "rgb(226, 232, 240)"]
                        : "rgb(226, 232, 240)"
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {difference.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="mb-4 text-slate-400 leading-relaxed text-lg"
                    animate={{
                      opacity: hoveredIndex === index ? [0.8, 1, 0.8] : 0.8
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {difference.description}
                  </motion.p>

                  {/* Enhanced Dark Premium Highlight */}
                  <motion.div
                    className="p-4 rounded-xl bg-gradient-to-r from-slate-800/50 to-slate-700/30 border border-slate-600/50 backdrop-blur-md"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 10px 25px rgba(71, 85, 105, 0.3)"
                    }}
                    animate={{
                      background: hoveredIndex === index 
                        ? ["linear-gradient(to right, rgba(30, 41, 59, 0.5), rgba(51, 65, 85, 0.3))", 
                           "linear-gradient(to right, rgba(51, 65, 85, 0.4), rgba(71, 85, 105, 0.2))", 
                           "linear-gradient(to right, rgba(30, 41, 59, 0.5), rgba(51, 65, 85, 0.3))"]
                        : "linear-gradient(to right, rgba(30, 41, 59, 0.5), rgba(51, 65, 85, 0.3))"
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <motion.div
                        animate={{ 
                          rotate: hoveredIndex === index ? [0, 360] : 0 
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Target className="w-4 h-4 text-slate-400" />
                      </motion.div>
                      <span className="text-sm font-bold text-slate-400">Revolutionary Feature</span>
                    </div>
                    <motion.p 
                      className="font-bold text-slate-200"
                      animate={{
                        color: hoveredIndex === index 
                          ? ["rgb(226, 232, 240)", "rgb(203, 213, 225)", "rgb(226, 232, 240)"]
                          : "rgb(226, 232, 240)"
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {difference.highlight}
                    </motion.p>
                  </motion.div>
                </div>

                {/* Enhanced Dark Hover Effects */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-slate-600/50 transition-all duration-500"
                  animate={{
                    borderColor: hoveredIndex === index 
                      ? ["transparent", "rgba(100, 116, 139, 0.5)", "transparent"]
                      : "transparent"
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                {/* Enhanced Dark Floating Particles Effect */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <>
                        {[...Array(10)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute rounded-full"
                            style={{
                              width: Math.random() * 3 + 1,
                              height: Math.random() * 3 + 1,
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                              backgroundColor: i % 3 === 0 ? '#64748b' : i % 3 === 1 ? '#94a3b8' : '#71859'
                            }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ 
                              opacity: [0, 1, 0], 
                              scale: [0, 1, 0],
                              y: [0, -30, -60],
                              x: [0, (Math.random() - 0.5) * 40, (Math.random() - 0.5) * 80],
                            }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{
                              duration: 2,
                              delay: i * 0.1,
                              ease: "easeOut"
                            }}
                          />
                        ))}
                        
                        {/* Energy rings for dark theme */}
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={`ring-${i}`}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ 
                              opacity: [0, 0.4, 0], 
                              scale: [0.5, 1.5, 2],
                            }}
                            exit={{ opacity: 0, scale: 0 }}
                            className="absolute border border-slate-600/30 rounded-full"
                            style={{
                              width: '80px',
                              height: '80px',
                              left: '50%',
                              top: '50%',
                              marginLeft: '-40px',
                              marginTop: '-40px',
                            }}
                            transition={{
                              duration: 1.5,
                              delay: i * 0.2,
                              ease: "easeOut"
                            }}
                          />
                        ))}
                      </>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Dark Revolutionary Call to Action */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center gap-4 px-12 py-6 text-xl font-bold text-slate-200 transition-all duration-500 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-2xl shadow-2xl border border-slate-600/50 backdrop-blur-md"
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              boxShadow: "0 25px 50px rgba(71, 85, 105, 0.4)",
              borderColor: "rgba(100, 116, 139, 0.8)"
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 10px 30px rgba(0,0,0,0.3)",
                "0 20px 40px rgba(71, 85, 105, 0.3)",
                "0 10px 30px rgba(0,0,0,0.3)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Zap className="w-6 h-6 text-slate-400" />
            </motion.div>
            <motion.span
              animate={{
                color: ["rgb(226, 232, 240)", "rgb(203, 213, 225)", "rgb(226, 232, 240)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Experience the Revolution Now
            </motion.span>
            <motion.div
              animate={{ 
                rotate: [0, -5, 5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <Crown className="w-6 h-6 text-slate-400" />
            </motion.div>
          </motion.div>
          
          <motion.p 
            className="mt-6 text-lg text-slate-500"
            animate={{
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Join 100,000+ successful migrants who chose the most powerful platform in history
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}
