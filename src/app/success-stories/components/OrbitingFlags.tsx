'use client'

import React from 'react'
import { motion } from 'framer-motion'

// Simplified placeholder component without Three.js dependencies
const OrbitingFlags: React.FC = () => {
  return (
    <div className="relative w-full h-64 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 rounded-xl overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-2">
            Global Success
          </h3>
          <p className="text-blue-200">
            Connecting dreams worldwide
          </p>
        </motion.div>
      </div>
      
      {/* Animated orbiting elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-white rounded-full opacity-60"
          style={{
            left: '50%',
            top: '50%',
            transformOrigin: '0 60px',
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  )
}

export default OrbitingFlags
