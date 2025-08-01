'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// AI Feature Data
const aiFeatures = [
  {
    id: 1,
    name: 'Smart Visa Matching',
    icon: '🎯',
    description: 'AI analyzes your profile and matches you with the perfect visa pathway across 60+ countries.',
    details: 'Our advanced machine learning algorithms process over 200 data points including education, experience, language skills, and personal preferences to identify optimal visa opportunities. Real-time success probability calculations help you make informed decisions.',
    color: '#3B82F6',
    angle: 0
  },
  {
    id: 2,
    name: 'Document Intelligence',
    icon: '📄',
    description: 'Automated document verification and requirement checklist generation for flawless applications.',
    details: 'AI-powered document scanner validates authenticity, checks completeness, and identifies missing requirements. Intelligent form-filling reduces errors by 95% and speeds up application preparation.',
    color: '#8B5CF6',
    angle: 36
  },
  {
    id: 3,
    name: 'Interview Preparation',
    icon: '🎤',
    description: 'AI-driven mock interviews with real-time feedback and confidence building exercises.',
    details: 'Practice with our AI interviewer that simulates real visa interview scenarios. Get instant feedback on your responses, body language analysis, and personalized improvement suggestions.',
    color: '#06B6D4',
    angle: 72
  },
  {
    id: 4,
    name: 'Timeline Optimization',
    icon: '⏰',
    description: 'Predictive analytics for optimal application timing and processing duration estimates.',
    details: 'Machine learning models analyze historical data to predict processing times, recommend optimal submission dates, and send proactive notifications for time-sensitive requirements.',
    color: '#10B981',
    angle: 108
  },
  {
    id: 5,
    name: 'Risk Assessment',
    icon: '🛡️',
    description: 'Advanced risk analysis and mitigation strategies for visa application success.',
    details: 'AI evaluates potential red flags in your application and provides specific recommendations to address concerns before submission. Proactive risk management increases approval rates.',
    color: '#F59E0B',
    angle: 144
  },
  {
    id: 6,
    name: 'Language Proficiency',
    icon: '🗣️',
    description: 'AI-powered language assessment and improvement recommendations for visa requirements.',
    details: 'Comprehensive language evaluation using speech recognition and natural language processing. Personalized learning paths help you achieve required proficiency scores.',
    color: '#EF4444',
    angle: 180
  },
  {
    id: 7,
    name: 'Settlement Planning',
    icon: '🏠',
    description: 'Intelligent destination recommendations based on career goals and lifestyle preferences.',
    details: 'AI analyzes job markets, cost of living, climate preferences, and cultural factors to recommend ideal settlement locations. Career pathway mapping for long-term success.',
    color: '#8B5CF6',
    angle: 216
  },
  {
    id: 8,
    name: 'Legal Compliance',
    icon: '⚖️',
    description: 'Real-time immigration law updates and compliance monitoring for changing regulations.',
    details: 'AI monitors global immigration policy changes and automatically updates application strategies. Ensures 100% compliance with latest regulations across all jurisdictions.',
    color: '#6366F1',
    angle: 252
  },
  {
    id: 9,
    name: 'Success Prediction',
    icon: '📊',
    description: 'Machine learning models predict application success probability with 95% accuracy.',
    details: 'Advanced predictive analytics provide real-time success probability scores. Continuous model refinement based on actual outcomes ensures highest accuracy in the industry.',
    color: '#EC4899',
    angle: 288
  },
  {
    id: 10,
    name: 'Personal AI Assistant',
    icon: '🤖',
    description: '24/7 AI chatbot providing instant answers and personalized guidance throughout your journey.',
    details: 'Conversational AI trained on immigration expertise provides instant support. Natural language processing understands complex queries and provides human-like responses.',
    color: '#14B8A6',
    angle: 324
  }
]

// Home Page Style Background Stars
const SimpleStars: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/50 to-transparent" />
      
      {/* Simple animated stars */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 h-0.5 bg-neutral-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
      
      {/* Subtle background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/5 rounded-full filter blur-3xl" />
    </div>
  )
}

// Home Page Style AI Orbit Component
const SimpleAIOrbit: React.FC<{ onFeatureClick: (feature: typeof aiFeatures[0]) => void }> = ({ onFeatureClick }) => {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => prev + 0.3)
    }, 100)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center">
      {/* Central VANHSYA Logo - Home Page Style */}
      <motion.div
        className="relative w-40 h-40 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 shadow-2xl border border-neutral-700/50 flex items-center justify-center backdrop-blur-sm"
        animate={{ rotate: rotation * 0.1 }}
        transition={{ duration: 0, ease: "linear" }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="text-center text-white">
          <div className="text-xl font-bold mb-1">VANHSYA</div>
          <div className="text-xs text-neutral-400 font-medium">AI POWERED</div>
        </div>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
      </motion.div>

      {/* AI Features in Grid Layout - Home Page Style */}
      {aiFeatures.slice(0, 6).map((feature, index) => {
        const angle = (rotation + index * 60) * (Math.PI / 180)
        const radius = 220
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius

        return (
          <motion.div
            key={feature.id}
            className="absolute cursor-pointer group"
            style={{
              transform: `translate(${x}px, ${y}px)`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.1, y: -5 }}
            onClick={() => onFeatureClick(feature)}
          >
            {/* Feature Card - Home Page Style */}
            <div className="relative bg-neutral-800/80 backdrop-blur-sm rounded-xl p-4 border border-neutral-700/50 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-neutral-600">
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-3 mx-auto"
                style={{ backgroundColor: feature.color + '20', border: `1px solid ${feature.color}40` }}
              >
                {feature.icon}
              </div>
              
              <h4 className="text-white text-sm font-semibold text-center mb-2 line-clamp-2">
                {feature.name}
              </h4>
              
              <p className="text-neutral-400 text-xs text-center line-clamp-2">
                Click to explore
              </p>
              
              {/* Subtle glow effect */}
              <div 
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{ boxShadow: `0 0 20px ${feature.color}` }}
              />
            </div>
          </motion.div>
        )
      })}

      {/* Orbital Ring - Home Page Style */}
      <div className="absolute w-[480px] h-[480px] border border-neutral-700/30 rounded-full" />
      <div className="absolute w-[520px] h-[520px] border border-neutral-800/20 rounded-full" />
    </div>
  )
}

// Home Page Style Feature Modal Component
const FeatureModal: React.FC<{
  feature: typeof aiFeatures[0] | null
  isOpen: boolean
  onClose: () => void
}> = ({ feature, isOpen, onClose }) => {
  if (!feature) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-8 max-w-2xl w-full border border-neutral-700/50 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-8">
              <div 
                className="w-20 h-20 rounded-xl mx-auto mb-6 flex items-center justify-center text-4xl shadow-lg border border-neutral-700/50"
                style={{ backgroundColor: feature.color + '20', borderColor: feature.color + '40' }}
              >
                {feature.icon}
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">{feature.name}</h3>
              <p className="text-lg text-neutral-400 leading-relaxed">{feature.description}</p>
            </div>

            <div className="bg-neutral-800/50 rounded-xl p-6 mb-8 border border-neutral-700/30">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="mr-3">🔬</span>
                How It Works
              </h4>
              <p className="text-neutral-300 leading-relaxed">{feature.details}</p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20 text-center">
                <div className="text-2xl mb-2">🤖</div>
                <span className="text-blue-400 font-semibold text-sm">AI-Powered</span>
              </div>
              <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20 text-center">
                <div className="text-2xl mb-2">⚡</div>
                <span className="text-green-400 font-semibold text-sm">Real-time</span>
              </div>
              <div className="bg-purple-500/10 p-4 rounded-lg border border-purple-500/20 text-center">
                <div className="text-2xl mb-2">🎯</div>
                <span className="text-purple-400 font-semibold text-sm">Personalized</span>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <motion.button
                onClick={onClose}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Feature
              </motion.button>
              <motion.button
                onClick={onClose}
                className="bg-neutral-700 hover:bg-neutral-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 border border-neutral-600"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Main AIUniversePage Component
export default function AIUniversePage() {
  const [selectedFeature, setSelectedFeature] = useState<typeof aiFeatures[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleFeatureClick = (feature: typeof aiFeatures[0]) => {
    setSelectedFeature(feature)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedFeature(null), 300)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
      {/* Simple Star Background */}
      <SimpleStars />
      
      {/* Hero Header with Home Page Style */}
      <section className="relative z-10 container-section section-spacing">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="px-4 py-2 bg-neutral-800/50 rounded-full border border-neutral-700/50 backdrop-blur-sm">
              <span className="text-sm font-medium text-neutral-300">
                🤖 AI-Powered Immigration Solutions
              </span>
            </div>
          </motion.div>
          
          <h1 className="text-white mb-6 font-bold">
            Discover VANHSYA's
            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              AI Universe
            </span>
          </h1>
          
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-8">
            Experience cutting-edge artificial intelligence features that revolutionize your immigration journey with personalized guidance and intelligent automation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Start AI Assessment
            </motion.button>
            
            <motion.button 
              className="bg-neutral-800 hover:bg-neutral-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 border border-neutral-700"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Watch Demo
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* AI Features Section with Home Page Style */}
      <section className="relative z-10 section-spacing">
        <div className="container-section">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-white mb-4 font-bold">
              Intelligent Features
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Explore our AI-powered tools designed to simplify and accelerate your immigration process
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <SimpleAIOrbit onFeatureClick={handleFeatureClick} />
          </motion.div>
        </div>
      </section>

      {/* Feature Modal */}
      <FeatureModal
        feature={selectedFeature}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      {/* CTA Section with Home Page Style */}
      <section className="relative z-10 section-spacing bg-gradient-to-r from-neutral-900 to-neutral-800">
        <div className="container-section">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-white mb-6 font-bold">
              Ready to Experience
              <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                AI-Powered Immigration?
              </span>
            </h3>
            
            <p className="text-lg text-neutral-400 mb-8 max-w-2xl mx-auto">
              Join thousands who have successfully navigated their immigration journey with VANHSYA's intelligent platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Your Journey
              </motion.button>
              
              <motion.button 
                className="bg-transparent border-2 border-neutral-600 hover:border-neutral-500 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:bg-neutral-800/50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
