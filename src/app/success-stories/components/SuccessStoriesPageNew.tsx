'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import { EnhancedSpaceOrbitSystem } from './EnhancedSpaceOrbitSystem'
import { CinematicTestimonials } from './CinematicTestimonials'

export default function SuccessStoriesPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const starsY = useTransform(scrollYProgress, [0, 1], ['0%', '200%'])

  return (
    <div ref={containerRef} className="min-h-screen bg-black overflow-x-hidden">
      {/* Hero Section with Enhanced Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Deep Space Background with Parallax */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950"
          style={{ y: backgroundY }}
        >
          {/* Enhanced Moving Stars with Parallax Layers */}
          <motion.div style={{ y: starsY }}>
            {Array.from({ length: 200 }).map((_, i) => (
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
                  opacity: [0.1, 1, 0.1],
                  scale: [0.5, 1.5, 0.5],
                }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </motion.div>

          {/* Secondary Star Layer */}
          <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '150%']) }}>
            {Array.from({ length: 100 }).map((_, i) => (
              <motion.div
                key={`star2-${i}`}
                className="absolute bg-blue-200 rounded-full opacity-60"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${0.5 + Math.random() * 1.5}px`,
                  height: `${0.5 + Math.random() * 1.5}px`,
                }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 6 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 4,
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Cosmic Nebula Effects with Enhanced Parallax */}
        <motion.div 
          className="absolute inset-0 opacity-60"
          style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '30%']) }}
        >
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-600 rounded-full filter blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: 2,
            }}
          />
          <motion.div
            className="absolute top-1/2 right-1/3 w-64 h-64 bg-indigo-600 rounded-full filter blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              delay: 4,
            }}
          />
        </motion.div>

        {/* Main Hero Content with Parallax */}
        <motion.div 
          className="relative z-10 text-center px-6 max-w-6xl mx-auto"
          style={{ y: textY }}
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, type: "spring", stiffness: 50 }}
          >
            <h1 className="text-8xl md:text-9xl font-black text-white mb-8 tracking-wider drop-shadow-2xl">
              SUCCESS
            </h1>
            <h2 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-8">
              CONSTELLATION
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Every dream that reaches for the stars finds its orbit through VANHSYA's revolutionary cosmic approach. 
            Witness the constellation of lives transformed across six continents.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button 
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">🚀</span>
              Launch Your Journey
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
            
            <motion.button 
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 border border-white/30 hover:border-white/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Stories
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Enhanced Floating Elements with Parallax */}
        <motion.div
          className="absolute top-20 left-20 text-4xl"
          style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '50%']) }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ✨
        </motion.div>

        <motion.div
          className="absolute top-40 right-32 text-3xl"
          style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '80%']) }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          🌟
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-40 text-2xl"
          style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '60%']) }}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        >
          💫
        </motion.div>
      </section>

      {/* Enhanced Space Orbit System */}
      <section className="relative">
        <EnhancedSpaceOrbitSystem />
      </section>

      {/* Cinematic Testimonials */}
      <section className="relative">
        <CinematicTestimonials />
      </section>

      {/* Final CTA Section with Scroll Effects */}
      <section className="relative py-20 bg-gradient-to-t from-black via-slate-950 to-blue-950">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-6xl font-bold text-white mb-8">
              Your Star Awaits in the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Constellation</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Join thousands who have transformed their migration dreams into reality. 
              Your success story is the next star in VANHSYA's cosmic constellation.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Begin Your Migration Journey
              </motion.button>
              
              <motion.button 
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 border border-white/30 hover:border-white/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Free Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
