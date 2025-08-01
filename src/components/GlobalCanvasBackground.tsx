'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
  pulse: number;
  pulseSpeed: number;
  life: number;
  maxLife: number;
}

interface Wave {
  x: number;
  y: number;
  amplitude: number;
  frequency: number;
  phase: number;
  speed: number;
  color: string;
  opacity: number;
}

export default function GlobalCanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const wavesRef = useRef<Wave[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set up canvas
    const setupCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setupCanvas();

    // Initialize particles
    const initializeParticles = () => {
      particlesRef.current = [];
      const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 1.5,
          speedY: (Math.random() - 0.5) * 1.5,
          opacity: Math.random() * 0.6 + 0.2,
          color: ['#8b5cf6', '#3b82f6', '#06b6d4', '#10b981', '#f59e0b'][Math.floor(Math.random() * 5)],
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          life: Math.random() * 1000 + 2000,
          maxLife: Math.random() * 1000 + 2000
        });
      }
    };

    // Initialize waves
    const initializeWaves = () => {
      wavesRef.current = [];
      for (let i = 0; i < 5; i++) {
        wavesRef.current.push({
          x: 0,
          y: canvas.height * (0.2 + i * 0.15),
          amplitude: Math.random() * 50 + 30,
          frequency: Math.random() * 0.01 + 0.005,
          phase: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.02 + 0.01,
          color: ['#8b5cf6', '#3b82f6', '#06b6d4', '#10b981'][Math.floor(Math.random() * 4)],
          opacity: Math.random() * 0.1 + 0.05
        });
      }
    };

    initializeParticles();
    initializeWaves();

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    // Resize handler
    const handleResize = () => {
      setupCanvas();
      initializeParticles();
      initializeWaves();
    };

    // Animation loop
    const animate = () => {
      timeRef.current += 0.016; // ~60fps
      
      // Clear canvas with gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(15, 23, 42, 0.95)'); // slate-900
      gradient.addColorStop(0.5, 'rgba(88, 28, 135, 0.85)'); // purple-900
      gradient.addColorStop(1, 'rgba(30, 58, 138, 0.95)'); // blue-900
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw animated waves
      wavesRef.current.forEach((wave) => {
        ctx.save();
        ctx.globalAlpha = wave.opacity;
        ctx.strokeStyle = wave.color;
        ctx.lineWidth = 2;
        ctx.beginPath();

        const waveY = wave.y + Math.sin(timeRef.current * wave.speed) * 20;
        
        for (let x = 0; x <= canvas.width; x += 5) {
          const y = waveY + Math.sin(x * wave.frequency + wave.phase + timeRef.current * wave.speed) * wave.amplitude;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        ctx.stroke();
        ctx.restore();

        // Update wave phase
        wave.phase += wave.speed;
      });

      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.pulse += particle.pulseSpeed;
        particle.life--;

        // Mouse interaction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const force = (100 - distance) / 100;
          particle.speedX -= (dx / distance) * force * 0.1;
          particle.speedY -= (dy / distance) * force * 0.1;
        }

        // Boundary check with wrapping
        if (particle.x < -50) particle.x = canvas.width + 50;
        if (particle.x > canvas.width + 50) particle.x = -50;
        if (particle.y < -50) particle.y = canvas.height + 50;
        if (particle.y > canvas.height + 50) particle.y = -50;

        // Reset particle if life ends
        if (particle.life <= 0) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.life = particle.maxLife;
          particle.speedX = (Math.random() - 0.5) * 1.5;
          particle.speedY = (Math.random() - 0.5) * 1.5;
        }

        // Apply friction
        particle.speedX *= 0.999;
        particle.speedY *= 0.999;

        // Pulsing effect
        const pulseSize = particle.size + Math.sin(particle.pulse) * 1;
        const pulseOpacity = particle.opacity + Math.sin(particle.pulse * 0.5) * 0.3;

        // Draw particle with glow
        ctx.save();
        ctx.globalAlpha = Math.max(0, pulseOpacity);
        
        // Outer glow
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 20;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, pulseSize * 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Inner core
        ctx.shadowBlur = 0;
        ctx.globalAlpha = Math.max(0, pulseOpacity * 0.8);
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      });

      // Draw connections between nearby particles
      particlesRef.current.forEach((particle, i) => {
        particlesRef.current.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.save();
            ctx.globalAlpha = (150 - distance) / 150 * 0.15;
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      // Add floating geometric shapes
      if (timeRef.current % 2 < 0.016) { // Every 2 seconds
        const shapes = ['circle', 'triangle', 'square'];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        const x = Math.random() * canvas.width;
        const y = canvas.height + 50;
        
        ctx.save();
        ctx.globalAlpha = 0.1;
        ctx.fillStyle = '#ffffff';
        ctx.translate(x, y - timeRef.current * 20);
        ctx.rotate(timeRef.current * 0.5);
        
        switch (shape) {
          case 'circle':
            ctx.beginPath();
            ctx.arc(0, 0, 20, 0, Math.PI * 2);
            ctx.fill();
            break;
          case 'triangle':
            ctx.beginPath();
            ctx.moveTo(0, -20);
            ctx.lineTo(-20, 20);
            ctx.lineTo(20, 20);
            ctx.closePath();
            ctx.fill();
            break;
          case 'square':
            ctx.fillRect(-15, -15, 30, 30);
            break;
        }
        ctx.restore();
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{
        zIndex: -1,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'transparent'
      }}
      aria-hidden="true"
    />
  );
}
