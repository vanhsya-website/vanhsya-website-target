'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

interface OrbitingFlagData {
  country: string
  flag: string
  successCount: number
  angle: number
  distance: number
  speed: number
}

const flagData: OrbitingFlagData[] = [
  { country: 'CANADA', flag: '🇨🇦', successCount: 47, angle: 0, distance: 250, speed: 0.8 },
  { country: 'UK', flag: '🇬🇧', successCount: 32, angle: 60, distance: 250, speed: 0.8 },
  { country: 'SINGAPORE', flag: '🇸🇬', successCount: 18, angle: 120, distance: 250, speed: 0.8 },
  { country: 'AUSTRALIA', flag: '🇦🇺', successCount: 29, angle: 180, distance: 250, speed: 0.8 },
  { country: 'UAE', flag: '🇦🇪', successCount: 22, angle: 240, distance: 250, speed: 0.8 },
  { country: 'USA', flag: '🇺🇸', successCount: 41, angle: 300, distance: 250, speed: 0.8 },
]

export const EnhancedSpaceOrbitSystem: React.FC = () => {
  const [rotation, setRotation] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.3 })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const orbitRotation = useTransform(scrollYProgress, [0, 1], [0, 360])

  useEffect(() => {
    if (!isInView) return
    
    const interval = setInterval(() => {
      setRotation((prev) => prev + 0.3)
    }, 50)

    return () => clearInterval(interval)
  }, [isInView])

  return (
    <motion.div 
      ref={containerRef}
      className="relative w-full h-[1000px] bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 overflow-hidden flex items-center justify-center"
      style={{ y: backgroundY }}
    >
      {/* Enhanced Starfield Background */}
      <div className="absolute inset-0">
        {Array.from({ length: 300 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${0.5 + Math.random() * 2}px`,
              height: `${0.5 + Math.random() * 2}px`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Cosmic Nebula Effects with Scroll */}
      <motion.div className="absolute inset-0 opacity-50" style={{ y: backgroundY }}>
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500 rounded-full filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            delay: 3,
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-[350px] h-[350px] bg-indigo-500 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            delay: 6,
          }}
        />
      </motion.div>

      {/* Central VANHSYA Logo System */}
      <div className="relative z-10 flex items-center justify-center">
        <motion.div
          animate={{ 
            rotate: isInView ? rotation * 0.1 : 0,
          }}
          style={{ 
            rotate: orbitRotation,
          }}
          className="relative"
        >
          {/* Central Cosmic VANHSYA Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ 
              scale: isInView ? 1 : 0.8,
              rotate: isInView ? 0 : -180,
            }}
            transition={{ 
              duration: 2,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            className="relative w-48 h-48 flex items-center justify-center"
          >
            {/* Cosmic Logo Background with the uploaded image */}
            <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-purple-400/30 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 to-blue-900/80 backdrop-blur-sm" />
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('data:image/svg+xml;base64,${btoa(`
                    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <radialGradient id="cosmic" cx="50%" cy="50%">
                          <stop offset="0%" style="stop-color:#8B5CF6"/>
                          <stop offset="50%" style="stop-color:#3B82F6"/>
                          <stop offset="100%" style="stop-color:#1E40AF"/>
                        </radialGradient>
                        <filter id="glow">
                          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                          <feMerge> 
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                      </defs>
                      <!-- Diamond Shape -->
                      <path d="M200 50 L320 200 L200 350 L80 200 Z" fill="url(#cosmic)" filter="url(#glow)" stroke="#FFD700" stroke-width="3"/>
                      <!-- Inner Diamond -->
                      <path d="M200 100 L270 200 L200 300 L130 200 Z" fill="none" stroke="#FFD700" stroke-width="2" opacity="0.8"/>
                      <!-- Center Circle -->
                      <circle cx="200" cy="200" r="30" fill="url(#cosmic)" stroke="#FFD700" stroke-width="2"/>
                      <!-- Wing Elements -->
                      <path d="M80 200 Q120 150 160 180 Q120 250 80 200" fill="#FFD700" opacity="0.7"/>
                      <path d="M320 200 Q280 150 240 180 Q280 250 320 200" fill="#FFD700" opacity="0.7"/>
                    </svg>
                  `)}`
                }}
              />
              
              {/* Logo Text Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-white font-black text-lg tracking-widest mb-1 drop-shadow-lg">
                    VANHSYA
                  </div>
                  <div className="text-purple-200 text-xs font-semibold tracking-wide">
                    COSMIC AI
                  </div>
                </div>
              </div>
            </div>

            {/* Pulsing Energy Rings */}
            <motion.div
              className="absolute inset-0 w-48 h-48 border-2 border-purple-400/20 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
            
            <motion.div
              className="absolute inset-0 w-56 h-56 -translate-x-4 -translate-y-4 border border-blue-400/15 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: 1,
              }}
            />

            {/* Orbital Ring Guides */}
            <div className="absolute inset-0 w-[600px] h-[600px] -translate-x-72 -translate-y-72 border border-purple-400/10 rounded-full" />
            <div className="absolute inset-0 w-[700px] h-[700px] -translate-x-80 -translate-y-80 border border-blue-400/10 rounded-full" />
          </motion.div>
        </motion.div>

        {/* Enhanced Orbiting Country Flags */}
        {flagData.map((flag) => {
          const currentAngle = (rotation * flag.speed + flag.angle) * (Math.PI / 180)
          const x = Math.cos(currentAngle) * flag.distance
          const y = Math.sin(currentAngle) * flag.distance

          return (
            <motion.div
              key={flag.country}
              className="absolute z-20"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: isInView ? 1 : 0,
                opacity: isInView ? 1 : 0,
              }}
              transition={{ 
                duration: 1.5,
                delay: 0.5 + (flag.angle / 60) * 0.2,
                type: "spring",
                stiffness: 150,
              }}
              whileHover={{ scale: 1.3, zIndex: 30 }}
            >
              {/* Enhanced Flag Sphere */}
              <div className="relative group cursor-pointer">
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-md rounded-full border-2 border-white/40 flex items-center justify-center shadow-2xl relative overflow-hidden"
                  whileHover={{ 
                    boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)",
                    borderColor: "rgba(59, 130, 246, 0.8)",
                  }}
                >
                  <span className="text-3xl relative z-10">{flag.flag}</span>
                  
                  {/* Inner Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
                
                {/* Enhanced Particle Trail */}
                <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
                  <motion.div 
                    className="w-3 h-3 bg-blue-400 rounded-full"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div 
                    className="w-2 h-2 bg-blue-300 rounded-full"
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  />
                  <motion.div 
                    className="w-1 h-1 bg-blue-200 rounded-full"
                    animate={{ opacity: [0.2, 0.6, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                  />
                </div>

                {/* Enhanced Country Info Card */}
                <motion.div 
                  className="absolute top-24 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
                  initial={{ y: 10, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                >
                  <div className="bg-black/90 backdrop-blur-lg rounded-xl px-4 py-3 border border-white/20 shadow-2xl min-w-[140px]">
                    <div className="text-white text-sm font-bold text-center mb-1">{flag.country}</div>
                    <div className="text-blue-400 text-xs text-center font-semibold">{flag.successCount}K+ Dreams</div>
                    <div className="text-purple-300 text-xs text-center mt-1">Fulfilled</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Enhanced Central Title with Scroll Animation */}
      <motion.div 
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '20%']) }}
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="text-center z-30 mt-[450px]"
        >
          <h2 className="text-7xl font-black text-white mb-6 tracking-wider drop-shadow-2xl">
            DREAMS IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">ORBIT</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Watch as global success stories orbit around VANHSYA's cosmic methodology, 
            each flag representing thousands of dreams fulfilled across six continents
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
