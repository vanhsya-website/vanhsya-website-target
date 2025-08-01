'use client'

import React, { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { 
  Globe, 
  Star, 
  ArrowRight, 
  Play, 
  Award,
  Heart,
  Quote,
  Sparkles,
  Plane,
  Users
} from 'lucide-react';

import InteractiveGlobe from './InteractiveGlobe';
import TestimonialCarousel from './TestimonialCarousel';

export default function SuccessStoriesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);

  useEffect(() => {
    // Advanced Particle System - Aurora/Fog Effect
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
      alpha: number;
      hue: number;
      life: number;
      maxLife: number;
    }> = [];

    const auroras: Array<{
      x: number;
      y: number;
      width: number;
      height: number;
      alpha: number;
      hue: number;
      direction: number;
    }> = [];

    // Create Aurora Effects
    for (let i = 0; i < 3; i++) {
      auroras.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.6,
        width: 300 + Math.random() * 400,
        height: 100 + Math.random() * 200,
        alpha: 0.1 + Math.random() * 0.1,
        hue: 240 + Math.random() * 60, // Purple to blue range
        direction: Math.random() * Math.PI * 2,
      });
    }

    // Create Floating Particles
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 0.5,
        alpha: Math.random() * 0.6 + 0.2,
        hue: 220 + Math.random() * 100,
        life: Math.random() * 100,
        maxLife: 100 + Math.random() * 100,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      
      // Clear with gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(15, 23, 42, 0.95)');
      gradient.addColorStop(0.5, 'rgba(30, 41, 59, 0.9)');
      gradient.addColorStop(1, 'rgba(15, 23, 42, 0.95)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw Aurora Effects
      auroras.forEach((aurora) => {
        aurora.x += Math.sin(aurora.direction) * 0.3;
        aurora.y += Math.cos(aurora.direction) * 0.2;
        
        if (aurora.x > canvas.width + aurora.width) aurora.x = -aurora.width;
        if (aurora.x < -aurora.width) aurora.x = canvas.width + aurora.width;
        if (aurora.y > canvas.height + aurora.height) aurora.y = -aurora.height;
        if (aurora.y < -aurora.height) aurora.y = canvas.height + aurora.height;

        const auroraGradient = ctx.createRadialGradient(
          aurora.x + aurora.width / 2, aurora.y + aurora.height / 2, 0,
          aurora.x + aurora.width / 2, aurora.y + aurora.height / 2, aurora.width
        );
        auroraGradient.addColorStop(0, `hsla(${aurora.hue}, 80%, 60%, ${aurora.alpha})`);
        auroraGradient.addColorStop(0.5, `hsla(${aurora.hue + 20}, 70%, 50%, ${aurora.alpha * 0.5})`);
        auroraGradient.addColorStop(1, 'transparent');

        ctx.fillStyle = auroraGradient;
        ctx.fillRect(aurora.x, aurora.y, aurora.width, aurora.height);
      });

      // Draw and update particles
      particles.forEach((particle, _index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        // Wrap around screen
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;

        // Fade based on life
        const lifeRatio = particle.life / particle.maxLife;
        const currentAlpha = particle.alpha * (1 - lifeRatio);

        // Reset particle if life is over
        if (particle.life >= particle.maxLife) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = 0;
          particle.alpha = Math.random() * 0.6 + 0.2;
        }

        // Draw particle with glow
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        const particleGradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        );
        particleGradient.addColorStop(0, `hsla(${particle.hue}, 70%, 70%, ${currentAlpha})`);
        particleGradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = particleGradient;
        ctx.fill();

        // Add sparkle effect randomly
        if (Math.random() > 0.995) {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 4, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${particle.hue}, 90%, 80%, ${currentAlpha * 0.3})`;
          ctx.fill();
        }
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

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden bg-slate-900">
      {/* Advanced Background Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        style={{ y: backgroundY, zIndex: 2 }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 100 - 50, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.2, 1],
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
              {i % 5 === 0 && <Star className="w-6 h-6 text-yellow-400/60" />}
              {i % 5 === 1 && <Sparkles className="w-5 h-5 text-purple-400/60" />}
              {i % 5 === 2 && <Heart className="w-4 h-4 text-pink-400/60" />}
              {i % 5 === 3 && <Plane className="w-5 h-5 text-blue-400/60" />}
              {i % 5 === 4 && <Globe className="w-6 h-6 text-green-400/60" />}
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="text-center max-w-6xl mx-auto"
          >
            {/* Emoji + Headline */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 100 }}
              className="mb-8"
            >
              <span className="text-8xl md:text-9xl block mb-4">🎉</span>
              <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                <span className="text-white">Dreams</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Unlocked
                </span>
                <br />
                <span className="text-white">Stories That</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Inspire
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              Real people. Real journeys. Real transformations.{" "}
              <span className="text-purple-400 font-semibold">
                Witness the power of AI-guided immigration success
              </span>{" "}
              from every corner of the globe.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto"
            >
              {[
                { number: "10,000+", label: "Success Stories", icon: Users, color: "text-green-400" },
                { number: "98.7%", label: "Success Rate", icon: Award, color: "text-blue-400" },
                { number: "50+", label: "Countries", icon: Globe, color: "text-purple-400" },
                { number: "24/7", label: "AI Support", icon: Star, color: "text-yellow-400" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.1, y: -10 }}
                  className="group relative p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500"
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3 group-hover:animate-pulse`} />
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
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
                
                <Users className="w-6 h-6 relative z-10 group-hover:animate-pulse" />
                <span className="relative z-10">Read More Stories</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 hover:border-white/50 text-white font-medium rounded-2xl transition-all duration-300 hover:bg-white/20"
              >
                <Play className="w-6 h-6 group-hover:text-purple-400 transition-colors" />
                <span>Start Your Journey</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-white/60 text-sm font-medium">Discover Their Stories</span>
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
            <ArrowRight className="w-6 h-6 text-white/80 rotate-90" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Interactive Globe Section */}
      <section className="relative py-32 overflow-hidden" style={{ zIndex: 3 }}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-full border border-blue-500/30 mb-8"
            >
              <Globe className="w-6 h-6 text-blue-400" />
              <span className="text-blue-300 font-medium">Global Success Network</span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              From Dreams to{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Destinations
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Every pin represents a life transformed, a dream realized, and a future unlocked.{" "}
              <span className="text-blue-400 font-semibold">Explore where our AI has guided successful journeys</span>{" "}
              across six continents.
            </p>
          </motion.div>

          {/* Interactive Globe Component */}
          <InteractiveGlobe />
        </div>
      </section>

      {/* Testimonial Carousel Section */}
      <section className="relative py-32 overflow-hidden" style={{ zIndex: 3 }}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-full border border-purple-500/30 mb-8"
            >
              <Quote className="w-6 h-6 text-purple-400" />
              <span className="text-purple-300 font-medium">Real Voices, Real Impact</span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Voices of{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Transformation
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Step into their shoes. Feel their journey. Experience the moment when{" "}
              <span className="text-purple-400 font-semibold">dreams become reality</span>{" "}
              through the power of AI-guided immigration.
            </p>
          </motion.div>

          {/* Testimonial Carousel Component */}
          <TestimonialCarousel />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32 overflow-hidden" style={{ zIndex: 3 }}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-center max-w-5xl mx-auto"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Your Success Story{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Starts Today
              </span>
            </h2>
            
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Join thousands who have transformed their lives with{" "}
              <span className="text-emerald-400 font-semibold">VANHSYA's AI-powered immigration guidance</span>.{" "}
              Your journey to global citizenship begins with a single click.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 60px rgba(16, 185, 129, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-12 py-6 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-bold rounded-2xl text-2xl shadow-2xl overflow-hidden transition-all duration-500 flex items-center gap-4"
              >
                {/* Button Background Animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <Sparkles className="w-8 h-8" />
                </motion.div>
                <span className="relative z-10">Begin Your Story</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <ArrowRight className="w-8 h-8" />
                </motion.div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 hover:border-white/50 text-white font-medium rounded-2xl transition-all duration-300 hover:bg-white/20 text-lg"
              >
                <Heart className="w-6 h-6 group-hover:text-pink-400 transition-colors" />
                <span>Share Your Story</span>
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-16 flex flex-wrap items-center justify-center gap-8"
            >
              {[
                { text: "10,000+ Dreams Realized", icon: Award },
                { text: "98.7% Success Rate", icon: Star },
                { text: "AI-Powered Precision", icon: Sparkles },
                { text: "Global Recognition", icon: Globe },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-white/30 transition-all duration-300"
                >
                  <item.icon className="w-4 h-4 text-emerald-400" />
                  <span className="text-white/80 text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
