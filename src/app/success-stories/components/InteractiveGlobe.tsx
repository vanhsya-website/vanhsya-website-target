'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Star, Users, Flag, ChevronRight } from 'lucide-react';

interface SuccessPin {
  id: number;
  country: string;
  city: string;
  flag: string;
  position: { x: number; y: number };
  stories: number;
  successRate: string;
  description: string;
  color: string;
}

export default function InteractiveGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const [selectedPin, setSelectedPin] = useState<SuccessPin | null>(null);
  const [hoveredPin, setHoveredPin] = useState<number | null>(null);

  const successPins: SuccessPin[] = [
    {
      id: 1,
      country: "United Arab Emirates",
      city: "Dubai",
      flag: "🇦🇪",
      position: { x: 65, y: 45 },
      stories: 1847,
      successRate: "98.9%",
      description: "Golden visa successes and business transformations",
      color: "from-amber-500 to-orange-500"
    },
    {
      id: 2,
      country: "India",
      city: "Mumbai",
      flag: "🇮🇳",
      position: { x: 72, y: 52 },
      stories: 2341,
      successRate: "97.6%",
      description: "H-1B approvals and skilled worker pathways",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 3,
      country: "Singapore",
      city: "Singapore",
      flag: "🇸🇬",
      position: { x: 78, y: 58 },
      stories: 1023,
      successRate: "99.2%",
      description: "Tech talent and investment visas",
      color: "from-red-500 to-pink-500"
    },
    {
      id: 4,
      country: "United Kingdom",
      city: "London",
      flag: "🇬🇧",
      position: { x: 48, y: 38 },
      stories: 1654,
      successRate: "96.8%",
      description: "Skilled worker and student visa successes",
      color: "from-blue-500 to-indigo-500"
    },
    {
      id: 5,
      country: "Australia",
      city: "Sydney",
      flag: "🇦🇺",
      position: { x: 85, y: 75 },
      stories: 1432,
      successRate: "98.1%",
      description: "Permanent residency and skilled migration",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 6,
      country: "Canada",
      city: "Toronto",
      flag: "🇨🇦",
      position: { x: 25, y: 35 },
      stories: 1876,
      successRate: "97.4%",
      description: "Express Entry and provincial nominations",
      color: "from-purple-500 to-violet-500"
    },
    {
      id: 7,
      country: "Germany",
      city: "Berlin",
      flag: "🇩🇪",
      position: { x: 52, y: 37 },
      stories: 987,
      successRate: "95.7%",
      description: "EU Blue Card and skilled worker programs",
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: 8,
      country: "United States",
      city: "New York",
      flag: "🇺🇸",
      position: { x: 28, y: 42 },
      stories: 2156,
      successRate: "96.3%",
      description: "Work visas and family reunifications",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  useEffect(() => {
    const globe = globeRef.current;
    if (!globe) return;

    let animationId: number;
    let angle = 0;

    const animate = () => {
      angle += 0.002; // Slow rotation
      globe.style.transform = `rotateY(${angle}rad) rotateX(0.1rad)`;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="relative max-w-7xl mx-auto">
      {/* Globe Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1.5 }}
        className="relative mx-auto"
        style={{ 
          width: '600px', 
          height: '600px',
          perspective: '1000px'
        }}
      >
        {/* Globe Base */}
        <div
          ref={globeRef}
          className="relative w-full h-full rounded-full bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 shadow-2xl"
          style={{
            background: `
              radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(139, 69, 197, 0.2) 0%, transparent 50%),
              linear-gradient(45deg, #1e293b 0%, #334155 50%, #475569 100%)
            `,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Globe Grid Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <circle cx="50%" cy="50%" r="45%" fill="url(#grid)" />
            
            {/* Latitude lines */}
            {[...Array(8)].map((_, i) => (
              <ellipse
                key={i}
                cx="50%"
                cy="50%"
                rx="45%"
                ry={`${10 + i * 8}%`}
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="0.5"
              />
            ))}
            
            {/* Longitude lines */}
            {[...Array(12)].map((_, i) => (
              <ellipse
                key={i}
                cx="50%"
                cy="50%"
                rx={`${45 * Math.cos(i * Math.PI / 12)}%`}
                ry="45%"
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="0.5"
                transform={`rotate(${i * 15} 300 300)`}
              />
            ))}
          </svg>

          {/* Animated Path Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
                <stop offset="50%" stopColor="rgba(59, 130, 246, 0.8)" />
                <stop offset="100%" stopColor="rgba(139, 69, 197, 0)" />
              </linearGradient>
            </defs>
            
            {/* Connection paths between success pins */}
            {successPins.slice(0, 4).map((pin, index) => {
              const nextPin = successPins[(index + 1) % 4];
              return (
                <motion.path
                  key={index}
                  d={`M ${pin.position.x * 6} ${pin.position.y * 6} Q ${(pin.position.x + nextPin.position.x) * 3} ${(pin.position.y + nextPin.position.y) * 2} ${nextPin.position.x * 6} ${nextPin.position.y * 6}`}
                  stroke="url(#pathGradient)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                  transition={{ duration: 2, delay: index * 0.5 }}
                />
              );
            })}
          </svg>

          {/* Success Pins */}
          {successPins.map((pin, index) => (
            <motion.div
              key={pin.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="absolute cursor-pointer group"
              style={{
                left: `${pin.position.x}%`,
                top: `${pin.position.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
              onClick={() => setSelectedPin(pin)}
              onMouseEnter={() => setHoveredPin(pin.id)}
              onMouseLeave={() => setHoveredPin(null)}
            >
              {/* Pin Pulse Rings */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute inset-0 rounded-full border-2 bg-gradient-to-r ${pin.color} opacity-20`}
                  animate={{
                    scale: [1, 2.5, 1],
                    opacity: [0.6, 0, 0.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 1,
                  }}
                  style={{
                    width: `${20 + i * 10}px`,
                    height: `${20 + i * 10}px`,
                    left: `${-10 - i * 5}px`,
                    top: `${-10 - i * 5}px`,
                  }}
                />
              ))}

              {/* Main Pin */}
              <motion.div
                whileHover={{ scale: 1.3, y: -5 }}
                className={`relative w-6 h-6 rounded-full bg-gradient-to-r ${pin.color} shadow-2xl border-2 border-white flex items-center justify-center z-10`}
              >
                <MapPin className="w-3 h-3 text-white" />
              </motion.div>

              {/* Country Flag */}
              <motion.div
                initial={{ scale: 0, y: 10 }}
                animate={{ scale: hoveredPin === pin.id ? 1 : 0, y: hoveredPin === pin.id ? -15 : 10 }}
                transition={{ duration: 0.3 }}
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full"
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 shadow-lg border">
                  <span className="text-2xl">{pin.flag}</span>
                </div>
              </motion.div>

              {/* Hover Tooltip */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ 
                  opacity: hoveredPin === pin.id ? 1 : 0, 
                  scale: hoveredPin === pin.id ? 1 : 0.8,
                  y: hoveredPin === pin.id ? -40 : 10
                }}
                transition={{ duration: 0.3 }}
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full pointer-events-none"
              >
                <div className="bg-slate-800/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-2xl border border-white/20 min-w-48">
                  <div className="text-white font-bold text-sm mb-1">{pin.city}, {pin.country}</div>
                  <div className="text-gray-300 text-xs mb-2">{pin.description}</div>
                  <div className="flex justify-between text-xs">
                    <span className="text-green-400">{pin.successRate}</span>
                    <span className="text-blue-400">{pin.stories} stories</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}

          {/* Globe Highlight */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
          
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-full shadow-2xl" style={{
            boxShadow: `
              0 0 50px rgba(59, 130, 246, 0.3),
              inset 0 0 50px rgba(139, 69, 197, 0.2)
            `
          }} />
        </div>

        {/* Floating Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex gap-8"
        >
          {[
            { label: "Active Countries", value: "50+", icon: Flag },
            { label: "Success Stories", value: "12K+", icon: Users },
            { label: "Success Rate", value: "98.7%", icon: Star },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="text-center p-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300"
            >
              <stat.icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Selected Pin Details */}
      {selectedPin && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="relative p-8 bg-gradient-to-br from-white/10 to-white/20 backdrop-blur-xl rounded-3xl border border-white/30 overflow-hidden">
            {/* Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${selectedPin.color} opacity-10 rounded-3xl`} />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl">{selectedPin.flag}</div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {selectedPin.city}, {selectedPin.country}
                  </h3>
                  <p className="text-lg text-gray-300">{selectedPin.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-3xl font-bold text-green-400 mb-1">{selectedPin.successRate}</div>
                  <div className="text-gray-300">Success Rate</div>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-3xl font-bold text-blue-400 mb-1">{selectedPin.stories}</div>
                  <div className="text-gray-300">Success Stories</div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedPin(null)}
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Explore Stories from {selectedPin.country}</span>
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
