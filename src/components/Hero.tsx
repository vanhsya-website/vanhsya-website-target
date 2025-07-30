'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import VanhsyaLogo from './VanhsyaLogo';
import { Sparkles, Zap, Globe, Shield, Crown, Star, Rocket, Award, CheckCircle2, TrendingUp } from 'lucide-react';
import { generateFloatingElements } from '@/utils/deterministicRandom';

const Hero = () => {
  const { scrollY } = useScroll();
  const containerRef = useRef<HTMLElement>(null);
  const [currentStat, setCurrentStat] = useState(0);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, delay: number}>>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hideStatsBar, setHideStatsBar] = useState(false);

  // Generate deterministic floating elements to prevent hydration mismatch
  const floatingElements = generateFloatingElements(50, 'hero-particles');

  // Advanced 3D Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, -150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -250]);
  const y3 = useTransform(scrollY, [0, 500], [0, -350]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const rotateX = useTransform(scrollY, [0, 500], [0, 15]);
  const rotateY = useTransform(scrollY, [0, 500], [0, -5]);

  // Mouse parallax effect
  const mouseX = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 });
  const mouseY = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 });

  // Check if stats bar is hidden
  useEffect(() => {
    const handleScroll = () => {
      setHideStatsBar(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mouse movement for 3D effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX - window.innerWidth / 2) / window.innerWidth;
      const y = (clientY - window.innerHeight / 2) / window.innerHeight;
      
      setMousePosition({ x: x * 20, y: y * 20 });
      mouseX.set(x * 10);
      mouseY.set(y * 10);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Generate floating particles
  useEffect(() => {
    // Use deterministic particles to prevent hydration mismatch
    setParticles(floatingElements.map(element => ({
      id: element.id,
      x: element.left,
      y: element.top,
      delay: element.delay
    })));
  }, [floatingElements]);

  // Rotating stats
  const stats = [
    { value: '99.8%', label: 'Success Rate', icon: TrendingUp },
    { value: '50K+', label: 'Clients Served', icon: Award },
    { value: '195+', label: 'Countries', icon: Globe },
    { value: '24/7', label: 'AI Support', icon: Sparkles }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [stats.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  const badgeVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 20,
        delay: 1
      }
    }
  };

  return (
    <motion.section 
      ref={containerRef}
      style={{ 
        opacity, 
        scale,
        perspective: '1000px'
      }}
      className={`relative flex items-center justify-center min-h-screen overflow-hidden transition-all duration-500 ease-out ${
        hideStatsBar ? 'pt-16' : 'pt-24'
      }`}
    >
      {/* Enhanced 3D Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-violet-950">
        <motion.div 
          style={{ 
            y: y1,
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d'
          }}
          className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 via-violet-600/20 to-gold-600/20"
        />
        <motion.div 
          style={{ 
            y: y2,
            x: mouseX,
            rotateX: rotateX,
            rotateY: rotateY,
            transformStyle: 'preserve-3d'
          }}
          className="absolute inset-0 bg-gradient-to-bl from-purple-500/10 via-violet-500/10 to-gold-500/10"
        />
        <motion.div 
          style={{ 
            y: y3,
            x: mouseY,
            rotateX: rotateX,
            rotateY: rotateY,
            transformStyle: 'preserve-3d'
          }}
          className="absolute inset-0 bg-gradient-to-tl from-gold-500/5 via-purple-500/5 to-violet-500/5"
        />
        
        {/* 3D Grid Lines */}
        <motion.div 
          style={{ 
            y: y1,
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d'
          }}
          className="absolute inset-0 opacity-10"
        >
          {/* Horizontal lines */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`h-${i}`}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"
              style={{ top: `${i * 5}%` }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scaleX: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 4 + i * 0.2,
                repeat: Infinity,
                delay: i * 0.1
              }}
            />
          ))}
          {/* Vertical lines */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`v-${i}`}
              className="absolute w-px h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent"
              style={{ left: `${i * 5}%` }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scaleY: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 4 + i * 0.2,
                repeat: Infinity,
                delay: i * 0.1
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Enhanced 3D Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            transformStyle: 'preserve-3d'
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            z: [-50, 50, -50],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            rotateX: [0, 360, 720],
            rotateY: [0, 180, 360]
          }}
          transition={{
            duration: 8 + particle.id * 0.1,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        >
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 blur-sm" />
          <div className="absolute inset-0 w-1 h-1 m-auto bg-white rounded-full animate-pulse" />
        </motion.div>
      ))}

      {/* Enhanced 3D Cosmic Orbs */}
      <motion.div 
        className="absolute rounded-full top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-3xl"
        style={{
          y: y1,
          x: mouseX,
          transformStyle: 'preserve-3d'
        }}
        animate={{
          y: [-15, 15, -15],
          rotateX: [0, 360],
          rotateY: [0, 180],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute rounded-full bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-red-500/20 to-pink-500/20 blur-3xl"
        style={{
          y: y2,
          x: mouseY,
          transformStyle: 'preserve-3d'
        }}
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
          rotateX: [0, 180],
          rotateY: [0, 360]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* New 3D Floating Elements */}
      <motion.div
        className="absolute w-64 h-64 rounded-full top-1/3 right-1/4 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 blur-2xl"
        style={{
          y: y3,
          x: mousePosition.x,
          transformStyle: 'preserve-3d'
        }}
        animate={{
          rotateX: [0, 360],
          rotateY: [0, -360],
          scale: [0.8, 1.2, 0.8]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute w-48 h-48 rounded-full bottom-1/3 left-1/4 bg-gradient-to-tr from-purple-400/10 to-pink-500/10 blur-2xl"
        style={{
          y: y1,
          x: mousePosition.y,
          transformStyle: 'preserve-3d'
        }}
        animate={{
          rotateZ: [0, 360],
          rotateX: [0, 180],
          scale: [1, 0.7, 1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 px-6 mx-auto text-center max-w-7xl"
      >
        {/* Premium Badges */}
        <motion.div 
          variants={badgeVariants}
          className="flex justify-center mb-8"
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-6 py-3 border rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 backdrop-blur-sm"
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: 'rgba(59, 130, 246, 0.3)' 
            }}
            animate={{
              boxShadow: [
                '0 0 20px rgba(99, 102, 241, 0.3)',
                '0 0 40px rgba(99, 102, 241, 0.6)',
                '0 0 20px rgba(99, 102, 241, 0.3)'
              ]
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <Crown className="w-5 h-5 text-yellow-400" />
            <span className="font-semibold text-white">Leading the New Migration Era</span>
            <Star className="w-5 h-5 text-yellow-400" />
          </motion.div>
        </motion.div>

        {/* Main Headline */}
        <motion.div variants={itemVariants} className="mb-12 space-y-6">
          {/* Hero Logo */}
          <motion.div 
            className="flex justify-center mb-8"
            variants={itemVariants}
          >
            <VanhsyaLogo width={400} height={100} animated={true} className="w-96 h-24 md:w-[400px] md:h-[100px]" />
          </motion.div>
          
          <motion.h1 
            className="text-6xl font-black leading-tight text-transparent md:text-8xl bg-gradient-to-r from-purple-400 via-violet-400 to-gold-400 bg-clip-text"
            style={{
              backgroundSize: '200% 100%'
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            VANHSYA
            <br />
            <motion.span
              className="inline-block"
              animate={{ rotateY: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              NEW ERA
            </motion.span>
            <br />
            MIGRATION
          </motion.h1>
          
          <motion.p 
            className="max-w-4xl mx-auto text-xl leading-relaxed text-blue-100 md:text-2xl"
            variants={itemVariants}
          >
            Welcome to the <span className="font-bold text-gold-400">New Migration Era</span> powered by VANHSYA. 
            Revolutionary AI intelligence, <span className="font-bold text-green-400">99.8% success rate</span>, 
            and pioneering technology that transforms global migration forever.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col justify-center gap-6 mb-16 sm:flex-row"
        >
          <motion.button
            className="relative px-12 py-6 overflow-hidden text-lg font-bold text-white group bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10 flex items-center justify-center gap-3">
              <Rocket className="w-6 h-6" />
              Start Your Journey
              <Sparkles className="w-6 h-6" />
            </span>
          </motion.button>

          <motion.a
            href="/ai-intelligence"
            className="px-12 py-6 text-lg font-bold text-blue-400 transition-all border-2 border-blue-500 group rounded-2xl backdrop-blur-sm hover:bg-blue-500/10"
            whileHover={{ scale: 1.05, borderColor: '#60a5fa' }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center justify-center gap-3">
              <Shield className="w-6 h-6" />
              AI Intelligence Platform
              <Zap className="w-6 h-6" />
            </span>
          </motion.a>
        </motion.div>

        {/* Rotating Stats */}
        <motion.div 
          variants={itemVariants}
          className="mb-12"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStat}
              initial={{ y: 50, opacity: 0, rotateX: 90 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              exit={{ y: -50, opacity: 0, rotateX: -90 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-4 px-8 py-4 border bg-gradient-to-r from-indigo-600/30 to-purple-600/30 rounded-2xl border-indigo-500/50 backdrop-blur-sm"
            >
              {React.createElement(stats[currentStat].icon, { className: "w-8 h-8 text-blue-400" })}
              <div className="text-left">
                <div className="text-3xl font-black text-white">{stats[currentStat].value}</div>
                <div className="text-sm text-blue-300">{stats[currentStat].label}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Feature Grid */}
        <motion.div 
          variants={itemVariants}
          className="grid max-w-6xl grid-cols-1 gap-6 mx-auto md:grid-cols-3"
        >
          {[
            { icon: Sparkles, title: 'Quantum AI Processing', desc: '500+ Pattern Analysis' },
            { icon: Shield, title: 'Blockchain Security', desc: 'Military-Grade Protection' },
            { icon: Globe, title: 'Global Network', desc: '195+ Countries Connected' }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="relative p-6 border group bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border-slate-700/50 backdrop-blur-sm"
              whileHover={{ 
                scale: 1.05, 
                rotateY: 10,
                backgroundColor: 'rgba(59, 130, 246, 0.1)' 
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <motion.div
                className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="mb-2 text-xl font-bold text-white">{feature.title}</h3>
              <p className="text-blue-300">{feature.desc}</p>
              
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/10 to-blue-500/0"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-8 mt-16 opacity-70"
        >
          {['AI Certified', 'ISO 27001', 'SOC 2 Compliant', 'GDPR Ready'].map((cert, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 text-blue-300"
              whileHover={{ scale: 1.1, color: '#60a5fa' }}
            >
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-semibold">{cert}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute transform -translate-x-1/2 bottom-8 left-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex justify-center w-6 h-10 border-2 border-blue-400 rounded-full">
          <motion.div
            className="w-1 h-3 mt-2 bg-blue-400 rounded-full"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
