'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TestimonialData {
  id: number
  name: string
  role: string
  country: string
  flag: string
  story: string
  fullStory: string
  image: string
  visa: string
  timeline: string
  achievement: string
}

const testimonials: TestimonialData[] = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Dream Achiever",
    country: "Canada",
    flag: "🇨🇦",
    story: "From rejected applications to Canadian PR in 8 months. VANHSYA's AI changed everything.",
    fullStory: "After three rejection letters, I was devastated. VANHSYA's AI analyzed my profile and identified critical gaps in my application strategy. Within 8 months, I received my Canadian PR and landed my dream job in Toronto's tech sector.",
    image: "/testimonials/priya.jpg",
    visa: "Canadian PR",
    timeline: "8 months",
    achievement: "Software Engineer at Shopify"
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Life Transformed",
    country: "Australia",
    flag: "🇦🇺",
    story: "Skilled Migration to Australia seemed impossible. VANHSYA made it effortless.",
    fullStory: "As a chef from Malaysia, I thought my chances were slim. VANHSYA's comprehensive approach helped me navigate the complex points system and secure my 189 visa. Now I run three restaurants in Melbourne.",
    image: "/testimonials/marcus.jpg",
    visa: "Australia 189",
    timeline: "12 months",
    achievement: "Restaurant Owner"
  },
  {
    id: 3,
    name: "Sarah Williams",
    role: "Journey Starter",
    country: "United Kingdom",
    flag: "🇬🇧",
    story: "UK Skilled Worker visa in record time. The AI guidance was phenomenal.",
    fullStory: "Moving from South Africa to the UK felt overwhelming. VANHSYA's step-by-step guidance and AI-powered application optimization helped me secure my visa and relocate to London within 6 months.",
    image: "/testimonials/sarah.jpg",
    visa: "UK Skilled Worker",
    timeline: "6 months",
    achievement: "Financial Analyst at HSBC"
  },
  {
    id: 4,
    name: "Ahmed Al-Rashid",
    role: "Pioneer Spirit",
    country: "UAE",
    flag: "🇦🇪",
    story: "Golden Visa to UAE - a dream turned reality through VANHSYA's expertise.",
    fullStory: "The UAE Golden Visa seemed exclusive to the ultra-wealthy. VANHSYA identified my qualifications as a renewable energy specialist and guided me through the investor pathway. Now I lead sustainability projects in Dubai.",
    image: "/testimonials/ahmed.jpg",
    visa: "UAE Golden Visa",
    timeline: "4 months",
    achievement: "Sustainability Director"
  },
  {
    id: 5,
    name: "Elena Rodriguez",
    role: "Be the First One",
    country: "Singapore",
    flag: "🇸🇬",
    story: "Singapore Employment Pass - the gateway to Asia's financial hub.",
    fullStory: "Transitioning from Mexico to Singapore's competitive market required precision. VANHSYA's AI matched my fintech background with opportunities and secured my EP. I now work for one of Asia's leading digital banks.",
    image: "/testimonials/elena.jpg",
    visa: "Singapore EP",
    timeline: "5 months",
    achievement: "Product Manager at DBS"
  },
  {
    id: 6,
    name: "David Kim",
    role: "Breakthrough Moment",
    country: "United States",
    flag: "🇺🇸",
    story: "H-1B to Green Card - VANHSYA navigated the complex US immigration maze.",
    fullStory: "The US immigration system is notoriously complex. After multiple H-1B lottery failures, VANHSYA identified alternative pathways through the EB-2 NIW category. I received my Green Card and now lead AI research at Google.",
    image: "/testimonials/david.jpg",
    visa: "US Green Card",
    timeline: "18 months",
    achievement: "AI Research Lead at Google"
  }
]

export const CinematicTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedStory, setSelectedStory] = useState<TestimonialData | null>(null)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 overflow-hidden">
      {/* Animated Starfield Background */}
      <div className="absolute inset-0">
        {Array.from({ length: 100 }).map((_, i) => (
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

      {/* Aurora Effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-indigo-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-7xl font-bold text-white mb-6 tracking-wider">
            SUCCESS <span className="text-blue-400">CONSTELLATION</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Every star represents a life transformed, a dream realized, a future unlocked through VANHSYA's revolutionary approach
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100, rotateY: 20 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -100, rotateY: -20 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Story Content */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <span className="text-4xl">{currentTestimonial.flag}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{currentTestimonial.name}</h3>
                      <p className="text-blue-400 font-semibold">{currentTestimonial.role}</p>
                      <p className="text-gray-300">{currentTestimonial.country}</p>
                    </div>
                  </div>
                  
                  <blockquote className="text-lg text-gray-200 italic leading-relaxed">
                    "{currentTestimonial.story}"
                  </blockquote>

                  <div className="flex flex-wrap gap-4">
                    <div className="bg-blue-500/20 px-4 py-2 rounded-full">
                      <span className="text-blue-300 text-sm font-semibold">{currentTestimonial.visa}</span>
                    </div>
                    <div className="bg-green-500/20 px-4 py-2 rounded-full">
                      <span className="text-green-300 text-sm font-semibold">{currentTestimonial.timeline}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedStory(currentTestimonial)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Read Full Journey
                  </button>
                </div>

                {/* Visual Elements */}
                <div className="relative">
                  <div className="relative w-80 h-80 mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-spin-slow opacity-20" />
                    <div className="absolute inset-4 bg-gradient-to-br from-white/20 to-transparent rounded-full backdrop-blur-sm border border-white/30 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-4xl font-bold mb-2">{currentTestimonial.timeline}</div>
                        <div className="text-sm opacity-80">Timeline</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    SUCCESS
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation & Controls */}
          <div className="flex justify-center items-center mt-12 space-x-6">
            <button
              onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full border border-white/20 text-white transition-all duration-300"
            >
              ←
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-blue-400 scale-125' : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full border border-white/20 text-white transition-all duration-300"
            >
              {isPlaying ? '⏸' : '▶'}
            </button>

            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full border border-white/20 text-white transition-all duration-300"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Full Story Modal */}
      <AnimatePresence>
        {selectedStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedStory(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 max-w-2xl border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-6">
                <span className="text-5xl mb-4 block">{selectedStory.flag}</span>
                <h3 className="text-3xl font-bold text-white mb-2">{selectedStory.name}</h3>
                <p className="text-blue-400 font-semibold text-lg">{selectedStory.role}</p>
                <p className="text-gray-300">{selectedStory.achievement}</p>
              </div>

              <div className="space-y-6">
                <p className="text-gray-200 leading-relaxed text-lg">
                  {selectedStory.fullStory}
                </p>

                <div className="flex justify-center space-x-4">
                  <div className="bg-blue-500/20 px-6 py-3 rounded-full">
                    <span className="text-blue-300 font-semibold">{selectedStory.visa}</span>
                  </div>
                  <div className="bg-green-500/20 px-6 py-3 rounded-full">
                    <span className="text-green-300 font-semibold">{selectedStory.timeline}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedStory(null)}
                className="mt-8 w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-full font-semibold transition-all duration-300"
              >
                Close Journey
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
