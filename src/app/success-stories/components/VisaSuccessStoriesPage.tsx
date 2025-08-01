'use client'

import React from 'react'
import { motion } from 'framer-motion'

// Simplified success stories component without Three.js dependencies
const VisaSuccessStoriesPage: React.FC = () => {
  return (
    <div className="relative w-full h-64 bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 rounded-xl overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-2">
            Visa Success Stories
          </h3>
          <p className="text-emerald-200">
            Dreams achieved worldwide
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default VisaSuccessStoriesPage
