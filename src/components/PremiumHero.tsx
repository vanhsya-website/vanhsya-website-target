'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { generateFloatingElements } from '@/utils/deterministicRandom';

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

export default function PremiumHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);
  const [floatingElements, setFloatingElements] = useState<FloatingElement[]>([]);
  
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.95]);
  const contentY = useTransform(scrollY, [0, 400], [0, -100]);
  const logoY = useTransform(scrollY, [0, 400], [0, -150]);

  // Initialize floating elements
  useEffect(() => {
    setMounted(true);
    const deterministicElements = generateFloatingElements(25, 'premium-hero-elements');
    const elements: FloatingElement[] = deterministicElements.map((element) => ({
      id: element.id,
      x: element.left * (typeof window !== 'undefined' ? window.innerWidth : 1920) / 100,
      y: element.top * (typeof window !== 'undefined' ? window.innerHeight : 1080) / 100,
      vx: (element.left / 100 - 0.5) * 0.5,
      vy: (element.top / 100 - 0.5) * 0.5,
      size: element.delay * 4 + 1,
      opacity: element.opacity,
    }));
    setFloatingElements(elements);
  }, []);

  // Animate floating elements
  useEffect(() => {
    if (!mounted || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw floating elements
      setFloatingElements(prev => 
        prev.map(element => {
          let newX = element.x + element.vx;
          let newY = element.y + element.vy;
          let newVx = element.vx;
          let newVy = element.vy;

          // Bounce off edges
          if (newX <= 0 || newX >= canvas.width) {
            newVx = -element.vx;
            newX = Math.max(0, Math.min(canvas.width, newX));
          }
          if (newY <= 0 || newY >= canvas.height) {
            newVy = -element.vy;
            newY = Math.max(0, Math.min(canvas.height, newY));
          }

          // Draw element
          ctx.beginPath();
          ctx.arc(newX, newY, element.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(168, 85, 247, ${element.opacity})`;
          ctx.fill();

          // Draw connections to nearby elements
          prev.forEach(other => {
            if (other.id !== element.id) {
              const dx = newX - other.x;
              const dy = newY - other.y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < 150) {
                ctx.beginPath();
                ctx.moveTo(newX, newY);
                ctx.lineTo(other.x, other.y);
                ctx.strokeStyle = `rgba(168, 85, 247, ${0.1 * (1 - distance / 150)})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
              }
            }
          });

          return {
            ...element,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
          };
        })
      );

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [mounted]);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-purple-950/20 to-indigo-950 flex items-center justify-center">
        <div className="animate-pulse">
          <div className="w-64 h-16 bg-purple-900/30 rounded-lg"></div>
        </div>
      </div>
    );
  }

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-neutral-950 via-purple-950/20 to-indigo-950"
    >
      {/* Animated Background Canvas */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-40"
        style={{ mixBlendMode: 'screen' }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-amber-500/5 blur-[150px] rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-1/3 h-1/3 bg-indigo-600/8 blur-[100px] rounded-full" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Main Content */}
      <motion.div 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"
      >
        <div className="w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Column - Text Content */}
            <motion.div 
              style={{ y: contentY }}
              className="space-y-8 text-center lg:text-left"
            >
              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm"
              >
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="text-purple-200 font-medium">
                  AI-Powered Immigration Platform
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="text-white">Transform Your</span>
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
                    Global Journey
                  </span>
                  <br />
                  <span className="text-white">With AI</span>
                </h1>
                
                <p className="text-xl sm:text-2xl text-neutral-300 leading-relaxed max-w-2xl lg:max-w-none">
                  Experience the future of immigration with our advanced AI platform. 
                  Streamlined processes, expert guidance, and guaranteed results across 195+ countries.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link 
                  href="/assessment"
                  className="group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl opacity-100 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative px-8 py-4 text-white font-semibold text-lg transition-transform group-hover:scale-105">
                    Start Free Assessment
                  </div>
                </Link>
                
                <Link 
                  href="/demo"
                  className="group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-neutral-800/60 backdrop-blur-sm rounded-xl border border-neutral-700 group-hover:border-purple-500/50 transition-colors" />
                  <div className="relative px-8 py-4 text-white font-semibold text-lg flex items-center gap-2 transition-transform group-hover:scale-105">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                    </svg>
                    Watch Demo
                  </div>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-800/50"
              >
                {[
                  { value: '99.8%', label: 'Success Rate' },
                  { value: '50K+', label: 'Clients Served' },
                  { value: '195+', label: 'Countries' },
                ].map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="text-2xl lg:text-3xl font-bold text-purple-400 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-neutral-500">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Logo & Visual */}
            <motion.div 
              style={{ y: logoY }}
              className="relative flex items-center justify-center"
            >
              {/* 3D Logo Container */}
              <div className="relative w-[400px] h-[400px] lg:w-[500px] lg:h-[500px]">
                {/* Rotating Ring Background */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-purple-500/20"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 rounded-full border border-amber-500/20"
                />
                
                {/* Main Logo */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 1.2, delay: 0.6 }}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ perspective: '1000px' }}
                >
                  <motion.div
                    animate={{ 
                      rotateY: [0, 5, 0, -5, 0],
                      scale: [1, 1.02, 1, 1.02, 1]
                    }}
                    transition={{ 
                      duration: 8, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="relative"
                  >
                    <Image
                      src="/images/logo-transparent.png"
                      alt="VANHSYA - AI-Powered Immigration"
                      width={300}
                      height={300}
                      className="drop-shadow-2xl"
                      style={{
                        filter: 'drop-shadow(0 0 30px rgba(168, 85, 247, 0.3))',
                      }}
                    />
                  </motion.div>
                </motion.div>
                
                {/* Floating Particles Around Logo */}
                {Array.from({ length: 8 }, (_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-purple-400 rounded-full"
                    style={{
                      top: '50%',
                      left: '50%',
                    }}
                    animate={{
                      x: [
                        0,
                        Math.cos((i * Math.PI * 2) / 8) * 180,
                        Math.cos((i * Math.PI * 2) / 8) * 200,
                        Math.cos((i * Math.PI * 2) / 8) * 180,
                        0
                      ],
                      y: [
                        0,
                        Math.sin((i * Math.PI * 2) / 8) * 180,
                        Math.sin((i * Math.PI * 2) / 8) * 200,
                        Math.sin((i * Math.PI * 2) / 8) * 180,
                        0
                      ],
                      opacity: [0, 1, 0.5, 1, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                ))}
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 rounded-full blur-3xl" />
              </div>
              
              {/* Country Badges */}
              {[
                { name: 'Canada', flag: '🇨🇦', position: 'top-10 right-10', delay: 1.4 },
                { name: 'Australia', flag: '🇦🇺', position: 'bottom-20 right-20', delay: 1.6 },
                { name: 'UK', flag: '🇬🇧', position: 'bottom-10 left-10', delay: 1.8 },
                { name: 'Germany', flag: '🇩🇪', position: 'top-20 left-20', delay: 2.0 },
              ].map((country) => (
                <motion.div
                  key={country.name}
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: country.delay }}
                  className={`absolute ${country.position} bg-neutral-900/80 backdrop-blur-sm rounded-xl p-4 border border-neutral-700/50 z-10`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{country.flag}</span>
                    <div>
                      <div className="text-white font-semibold text-sm">{country.name}</div>
                      <div className="text-purple-400 text-xs">Available</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
      >
        <p className="text-neutral-500 text-sm mb-4">Discover More</p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-purple-500/30 rounded-full flex justify-center"
        >
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-purple-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
