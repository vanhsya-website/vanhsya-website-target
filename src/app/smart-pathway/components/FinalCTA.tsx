'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { 
  Rocket, 
  Brain, 
  Globe, 
  ArrowRight, 
  Sparkles, 
  Clock, 
  Shield, 
  Zap,
  Star,
  CheckCircle
} from 'lucide-react';

export default function FinalCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Star Field Animation
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars: Array<{
      x: number;
      y: number;
      size: number;
      alpha: number;
      speed: number;
    }> = [];

    // Create stars
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.5 + 0.1,
      });
    }

    function animateStars() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        // Update position
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = -5;
          star.x = Math.random() * canvas.width;
        }

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();

        // Add sparkle effect
        if (Math.random() > 0.99) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(147, 51, 234, ${star.alpha * 0.5})`;
          ctx.fill();
        }
      });

      requestAnimationFrame(animateStars);
    }

    animateStars();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    }
  };

  const benefits = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced algorithms analyze your profile",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Clock,
      title: "Instant Results",
      description: "Get your assessment in under 3 minutes",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "100% Confidential",
      description: "Your data is encrypted and secure",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Globe,
      title: "45+ Countries",
      description: "Comprehensive global coverage",
      color: "from-orange-500 to-red-500"
    }
  ];

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
    >
      {/* Star Field Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ 
          background: 'radial-gradient(ellipse at center, rgba(139, 69, 197, 0.15) 0%, rgba(0, 0, 0, 0.8) 70%)'
        }}
      />

      {/* Interactive Mouse Trail */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl" />
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1200,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 800,
              opacity: 0
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.6, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {i % 4 === 0 && <Star className="w-6 h-6 text-yellow-400" />}
            {i % 4 === 1 && <Sparkles className="w-5 h-5 text-purple-400" />}
            {i % 4 === 2 && <Zap className="w-4 h-4 text-blue-400" />}
            {i % 4 === 3 && <Globe className="w-5 h-5 text-green-400" />}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={variants}
          initial="hidden"
          animate={controls}
          className="max-w-6xl mx-auto text-center"
        >
          {/* Main Headline */}
          <motion.div variants={variants} className="mb-12">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600/30 to-blue-600/30 backdrop-blur-sm rounded-full border border-purple-500/50 mb-8"
            >
              <Rocket className="w-6 h-6 text-purple-400" />
              <span className="text-purple-300 font-medium">Your Journey Starts Here</span>
            </motion.div>

            <motion.h1 
              variants={variants}
              className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
            >
              <span className="text-white">Ready to</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Transform
              </span>
              <br />
              <span className="text-white">Your Future?</span>
            </motion.h1>

            <motion.p 
              variants={variants}
              className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              Join thousands who have already discovered their path with our AI. 
              Your dream destination is just{" "}
              <span className="text-purple-400 font-bold">3 minutes away</span>.
            </motion.p>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div 
            variants={variants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={variants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(139, 69, 197, 0.3)",
                }}
                className="group relative p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-500 overflow-hidden"
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />
                
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${benefit.color} shadow-lg mb-4`}
                >
                  <benefit.icon className="w-6 h-6 text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {benefit.description}
                  </p>
                </div>

                {/* Hover Line Animation */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-400 to-blue-400"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Main CTA Section */}
          <motion.div 
            variants={variants}
            className="relative"
          >
            {/* Main CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-block"
            >
              <motion.button
                initial={{ boxShadow: "0 0 0 rgba(139, 69, 197, 0)" }}
                whileHover={{ 
                  boxShadow: "0 20px 60px rgba(139, 69, 197, 0.4)",
                }}
                transition={{ duration: 0.3 }}
                className="relative px-12 py-6 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold rounded-2xl text-2xl shadow-2xl overflow-hidden transition-all duration-500 flex items-center gap-4"
              >
                {/* Button Background Animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                />
                
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="relative z-10"
                >
                  <Brain className="w-8 h-8" />
                </motion.div>
                <span className="relative z-10">Start Your AI Assessment</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <ArrowRight className="w-8 h-8" />
                </motion.div>

                {/* Expanding Trail Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%', skewX: -15 }}
                  whileHover={{ 
                    x: '100%',
                    transition: { duration: 0.6, ease: "easeInOut" }
                  }}
                />
              </motion.button>

              {/* Pulsing Ring */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-purple-400/50"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Secondary Actions */}
            <motion.div 
              variants={variants}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 hover:border-white/50 text-white font-medium rounded-xl transition-all duration-300 hover:bg-white/20"
              >
                <Globe className="w-5 h-5 group-hover:animate-spin" />
                <span>Explore Success Stories</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 hover:border-white/50 text-white font-medium rounded-xl transition-all duration-300 hover:bg-white/20"
              >
                <Shield className="w-5 h-5 group-hover:text-green-400 transition-colors" />
                <span>Privacy & Security</span>
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              variants={variants}
              className="mt-16 flex flex-wrap items-center justify-center gap-8"
            >
              {[
                { icon: CheckCircle, text: "10,000+ Success Stories", color: "text-green-400" },
                { icon: Shield, text: "Bank-Level Security", color: "text-blue-400" },
                { icon: Zap, text: "Instant Results", color: "text-yellow-400" },
                { icon: Brain, text: "AI-Powered", color: "text-purple-400" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 1.5 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-white/30 transition-all duration-300"
                >
                  <item.icon className={`w-4 h-4 ${item.color}`} />
                  <span className="text-white/80 text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Final Quote */}
            <motion.div 
              variants={variants}
              className="mt-16 max-w-3xl mx-auto"
            >
              <blockquote className="text-xl text-gray-300 italic leading-relaxed">
                "The future belongs to those who{" "}
                <span className="text-purple-400 font-semibold">take action today</span>. 
                Don't let another day pass wondering about your possibilities."
              </blockquote>
              <div className="mt-4 text-purple-300 font-medium">
                — VANHSYA AI Immigration Assistant
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
