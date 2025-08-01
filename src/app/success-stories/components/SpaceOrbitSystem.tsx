'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface OrbitingFlagData {
  country: string
  flag: string
  successCount: number
  angle: number
  distance: number
}

const flagData: OrbitingFlagData[] = [
  { country: 'CANADA', flag: '🇨🇦', successCount: 47, angle: 0, distance: 200 },
  { country: 'UK', flag: '🇬🇧', successCount: 32, angle: 60, distance: 200 },
  { country: 'SINGAPORE', flag: '🇸🇬', successCount: 18, angle: 120, distance: 200 },
  { country: 'AUSTRALIA', flag: '🇦🇺', successCount: 29, angle: 180, distance: 200 },
  { country: 'UAE', flag: '🇦🇪', successCount: 22, angle: 240, distance: 200 },
  { country: 'USA', flag: '🇺🇸', successCount: 41, angle: 300, distance: 200 },
]

export const SpaceOrbitSystem: React.FC = () => {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 0.5)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[800px] bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 overflow-hidden flex items-center justify-center">
      {/* Starfield Background */}
      <div className="absolute inset-0">
        {Array.from({ length: 200 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Nebula Effects */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-indigo-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {/* Central VANHSYA Logo */}
      <div className="relative z-10 flex items-center justify-center">
        <motion.div
          animate={{ rotate: rotation * 0.2 }}
          className="relative"
        >
          {/* Central Core */}
          <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-700 rounded-full flex items-center justify-center shadow-2xl border-4 border-blue-400/30">
            <div className="text-white font-bold text-xl tracking-wider text-center">
              <div>VANHSYA</div>
              <div className="text-xs text-blue-200 mt-1">AI CORE</div>
            </div>
          </div>

          {/* Inner Glow Ring */}
          <div className="absolute inset-0 w-32 h-32 bg-blue-400/20 rounded-full animate-ping" />
          
          {/* Outer Orbital Ring */}
          <div className="absolute inset-0 w-80 h-80 -translate-x-24 -translate-y-24 border border-blue-400/30 rounded-full" />
          <div className="absolute inset-0 w-96 h-96 -translate-x-32 -translate-y-32 border border-purple-400/20 rounded-full" />
        </motion.div>

        {/* Orbiting Country Flags */}
        {flagData.map((flag) => {
          const currentAngle = (rotation + flag.angle) * (Math.PI / 180)
          const x = Math.cos(currentAngle) * flag.distance
          const y = Math.sin(currentAngle) * flag.distance

          return (
            <motion.div
              key={flag.country}
              className="absolute z-20"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
              whileHover={{ scale: 1.2 }}
            >
              {/* Flag Sphere */}
              <div className="relative group cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md rounded-full border border-white/30 flex items-center justify-center shadow-xl">
                  <span className="text-2xl">{flag.flag}</span>
                </div>
                
                {/* Particle Trail */}
                <div className="absolute -left-8 top-1/2 transform -translate-y-1/2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full opacity-60" />
                  <div className="w-1 h-1 bg-blue-300 rounded-full opacity-40 -ml-3 mt-1" />
                  <div className="w-0.5 h-0.5 bg-blue-200 rounded-full opacity-20 -ml-2 mt-1" />
                </div>

                {/* Country Label */}
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
                    <div className="text-white text-sm font-bold">{flag.country}</div>
                    <div className="text-blue-400 text-xs">{flag.successCount}K+ Dreams</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Central Title */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="text-center z-30 mt-80"
        >
          <h2 className="text-6xl font-bold text-white mb-4 tracking-wider">
            DREAMS IN <span className="text-blue-400">ORBIT</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Watch as global success stories orbit around VANHSYA's proven methodology
          </p>
        </motion.div>
      </div>
    </div>
  )
}
