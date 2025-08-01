'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Brain, Play, Globe, Shield, Sparkles, ChevronDown } from 'lucide-react';

export default function VisaHero() {
  const heroControls = useAnimation();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // WebGL-style particle animation
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147, 51, 234, ${particle.opacity})`;
        ctx.fill();

        // Draw connections
        particles.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(147, 51, 234, ${(100 - distance) / 100 * 0.1})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    heroControls.start({
      scale: [1, 1.05, 1],
      rotate: [0, 360],
      transition: {
        scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
      },
    });
  }, [heroControls]);

  const words = ["Let", "Our", "AI", "Discover", "Your", "Ideal", "Visa", "Path"];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* WebGL-style Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 50% 50%, rgba(139, 69, 197, 0.1) 0%, transparent 50%)' }}
      />

      {/* Cosmic Background Effects */}
      <div className="absolute inset-0">
        {/* Floating Symbols */}
        {['🌍', '✈️', '🛂', '📋', '🎯', '💼'].map((symbol, index) => (
          <motion.div
            key={index}
            className="absolute text-4xl opacity-10"
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 1.5,
            }}
            style={{
              left: `${10 + index * 15}%`,
              top: `${20 + (index % 2) * 60}%`,
            }}
          >
            {symbol}
          </motion.div>
        ))}

        {/* Curve Trails */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <linearGradient id="trailGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(139, 69, 197, 0.6)" />
              <stop offset="50%" stopColor="rgba(59, 130, 246, 0.4)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 0,300 Q 400,100 800,300 T 1600,300"
            stroke="url(#trailGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M 0,600 Q 600,400 1200,600 T 2400,600"
            stroke="url(#trailGradient)"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Central AI Orb */}
        <motion.div
          animate={heroControls}
          className="inline-block mb-12"
        >
          <div className="relative">
            {/* Outer Glow Rings */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 rounded-full border border-purple-400/20"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.8, 0, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 1,
                }}
                style={{
                  width: `${120 + i * 40}px`,
                  height: `${120 + i * 40}px`,
                  left: `${-20 - i * 20}px`,
                  top: `${-20 - i * 20}px`,
                }}
              />
            ))}
            
            {/* Main Orb */}
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-violet-600 p-1 shadow-2xl shadow-purple-500/50">
              <div className="w-full h-full rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
                {/* Inner Pulse */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/30 to-blue-400/30"
                  animate={{
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Brain Icon */}
                <Brain className="w-16 h-16 text-white relative z-10" />
                
                {/* Scanning Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: [-150, 150],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Animated Headline */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                className={`text-5xl md:text-7xl font-bold ${
                  word === 'AI' 
                    ? 'bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent'
                    : 'text-white'
                }`}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
        >
          Based on{" "}
          <span className="text-purple-400 font-semibold">10,000+ success cases</span>{" "}
          across{" "}
          <span className="text-blue-400 font-semibold">45 countries</span>.{" "}
          Built with expert knowledge.
        </motion.p>

        {/* Button Group */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          {/* Primary CTA */}
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(139, 69, 197, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold rounded-2xl transition-all duration-300 flex items-center gap-3 text-lg shadow-2xl overflow-hidden"
          >
            {/* Button Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="relative z-10"
            >
              <Globe className="w-6 h-6" />
            </motion.div>
            <span className="relative z-10">Start Smart Assessment</span>
          </motion.button>

          {/* Secondary CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 text-white font-medium rounded-2xl transition-all duration-300 flex items-center gap-3 text-lg hover:bg-white/20"
          >
            <Play className="w-6 h-6 group-hover:text-purple-400 transition-colors" />
            <span>Watch How It Works</span>
          </motion.button>
        </motion.div>

        {/* Floating Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4 }}
          className="flex flex-wrap justify-center gap-8 mb-20"
        >
          {[
            { icon: Brain, label: "AI-Powered", color: "text-purple-400" },
            { icon: Shield, label: "Verified by Experts", color: "text-green-400" },
            { icon: Sparkles, label: "Confidential", color: "text-blue-400" },
            { icon: Globe, label: "No Human Bias", color: "text-pink-400" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.6 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-md rounded-full border border-white/10 hover:border-white/30 transition-all duration-300"
            >
              <item.icon className={`w-5 h-5 ${item.color}`} />
              <span className="text-white/80 text-sm font-medium">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="flex flex-col items-center gap-4"
        >
          <span className="text-white/60 text-sm font-medium">Start your journey</span>
          <motion.div
            animate={{
              y: [0, 10, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
          >
            <ChevronDown className="w-6 h-6 text-white/80" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
