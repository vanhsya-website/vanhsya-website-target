'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, MapPin, Calendar, Award, Users } from 'lucide-react';

export default function SuccessStories() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const [currentStory, setCurrentStory] = useState(0);

  const stories = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "Software Engineer",
      country: "From China to Silicon Valley",
      visaType: "H-1B → Green Card",
      image: "👩‍💻",
      rating: 5,
      story: "VANHSYA's AI identified a pathway I never knew existed. The step-by-step guidance was incredible, and their predictions were 100% accurate. I'm now living my dream in Silicon Valley!",
      timeline: "14 months",
      success: "Approved",
      year: "2024",
      details: {
        challenge: "Complex case with multiple employers",
        solution: "Strategic H-1B transfer pathway",
        outcome: "Green Card approved in record time"
      }
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      title: "Business Owner",
      country: "From Mexico to New York",
      visaType: "E-2 Investment Visa",
      image: "👨‍💼",
      rating: 5,
      story: "I was overwhelmed by investment visa requirements. VANHSYA's AI broke everything down and showed me exactly what I needed. My restaurant chain is now thriving across three states!",
      timeline: "18 months",
      success: "Approved",
      year: "2023",
      details: {
        challenge: "Understanding investment requirements",
        solution: "Structured business plan and documentation",
        outcome: "Successful business expansion"
      }
    },
    {
      id: 3,
      name: "Dr. Priya Patel",
      title: "Medical Researcher",
      country: "From India to Boston",
      visaType: "O-1 Extraordinary Ability",
      image: "👩‍⚕️",
      rating: 5,
      story: "Traditional consultants said my case was too complex. VANHSYA's AI found patterns in successful O-1 cases and crafted a winning strategy. Now I'm leading COVID research at Harvard!",
      timeline: "8 months",
      success: "Approved",
      year: "2024",
      details: {
        challenge: "Proving extraordinary ability",
        solution: "Evidence compilation strategy",
        outcome: "Leading research position"
      }
    },
    {
      id: 4,
      name: "Ahmed Al-Rashid",
      title: "PhD Student",
      country: "From UAE to MIT",
      visaType: "F-1 → STEM OPT",
      image: "👨‍🎓",
      rating: 5,
      story: "The AI helped me navigate the complex student visa process and plan my post-graduation pathway. The insights about STEM OPT timing were game-changing!",
      timeline: "6 months",
      success: "Approved",
      year: "2024",
      details: {
        challenge: "Complex academic timeline",
        solution: "Strategic STEM pathway planning",
        outcome: "Extended work authorization"
      }
    },
    {
      id: 5,
      name: "Elena Volkov",
      title: "Artist & Designer",
      country: "From Russia to Los Angeles",
      visaType: "O-1B Arts",
      image: "👩‍🎨",
      rating: 5,
      story: "As a creative professional, proving my case seemed impossible. VANHSYA's AI understood the arts industry and highlighted achievements I didn't even realize were significant!",
      timeline: "10 months",
      success: "Approved",
      year: "2023",
      details: {
        challenge: "Documenting artistic achievements",
        solution: "Creative portfolio strategy",
        outcome: "Thriving creative studio"
      }
    },
    {
      id: 6,
      name: "James & Lisa Kim",
      title: "Married Couple",
      country: "From South Korea to Seattle",
      visaType: "K-1 → Marriage-based Green Card",
      image: "👫",
      rating: 5,
      story: "The family visa process was emotional and stressful. VANHSYA's AI guided us through every step, predicted interview questions, and we're now happily married US residents!",
      timeline: "16 months",
      success: "Approved",
      year: "2024",
      details: {
        challenge: "Complex relationship documentation",
        solution: "Evidence timeline strategy",
        outcome: "Successful family reunification"
      }
    }
  ];

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const goToStory = (index: number) => {
    setCurrentStory(index);
  };

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Floating Success Symbols */}
        {['🎉', '🌟', '✨', '🏆', '🎯', '💫'].map((symbol, index) => (
          <motion.div
            key={index}
            className="absolute text-4xl opacity-10"
            animate={{
              y: [0, -40, 0],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 1.5,
            }}
            style={{
              left: `${5 + index * 15}%`,
              top: `${10 + (index % 3) * 30}%`,
            }}
          >
            {symbol}
          </motion.div>
        ))}

        {/* Glowing Orbs */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full opacity-5"
            style={{
              background: `radial-gradient(circle, ${
                i % 2 === 0 ? 'rgba(139, 69, 197, 0.3)' : 'rgba(59, 130, 246, 0.3)'
              } 0%, transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-full border border-green-500/30 mb-8"
          >
            <Award className="w-6 h-6 text-green-400" />
            <span className="text-green-300 font-medium">Real Success Stories</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">
              10,000+
            </span>{" "}
            Dreams Realized
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Real people, real stories, real success. Discover how our AI has helped individuals 
            from around the world achieve their{" "}
            <span className="text-green-400 font-semibold">immigration dreams</span>.
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStory}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              className="relative"
            >
              {/* Main Card */}
              <div className="relative p-8 md:p-12 bg-gradient-to-br from-white/10 to-white/20 backdrop-blur-xl rounded-3xl border border-white/30 overflow-hidden shadow-2xl">
                {/* Glassmorphism Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-blue-500/10 rounded-3xl" />
                
                {/* Neon Glow Effect */}
                <div className="absolute inset-0 rounded-3xl opacity-50">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-transparent to-blue-400/20 blur-xl" />
                </div>

                <div className="relative z-10">
                  {/* Quote Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-2xl"
                  >
                    <Quote className="w-8 h-8 text-white" />
                  </motion.div>

                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    {/* Profile Section */}
                    <div className="lg:col-span-1 text-center lg:text-left">
                      {/* Avatar */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="w-32 h-32 mx-auto lg:mx-0 mb-6 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-6xl shadow-2xl"
                      >
                        {stories[currentStory].image}
                      </motion.div>

                      {/* Basic Info */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {stories[currentStory].name}
                        </h3>
                        <p className="text-lg text-green-300 mb-2">
                          {stories[currentStory].title}
                        </p>
                        <p className="text-gray-300 mb-4 flex items-center justify-center lg:justify-start gap-2">
                          <MapPin className="w-4 h-4" />
                          {stories[currentStory].country}
                        </p>
                        
                        {/* Visa Type Badge */}
                        <div className="inline-flex px-4 py-2 bg-gradient-to-r from-green-600/30 to-blue-600/30 backdrop-blur-sm rounded-full border border-green-500/50">
                          <span className="text-green-300 font-medium text-sm">
                            {stories[currentStory].visaType}
                          </span>
                        </div>
                      </motion.div>
                    </div>

                    {/* Story Content */}
                    <div className="lg:col-span-2">
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                      >
                        {/* Rating */}
                        <div className="flex items-center gap-1 mb-6">
                          {[...Array(stories[currentStory].rating)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                            >
                              <Star className="w-6 h-6 text-yellow-400 fill-current" />
                            </motion.div>
                          ))}
                        </div>

                        {/* Story Text */}
                        <blockquote className="text-xl text-gray-200 leading-relaxed mb-8 italic">
                          "{stories[currentStory].story}"
                        </blockquote>

                        {/* Success Metrics */}
                        <div className="grid grid-cols-3 gap-4">
                          <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                            <Calendar className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                            <div className="text-sm text-gray-300">Timeline</div>
                            <div className="text-lg font-bold text-white">
                              {stories[currentStory].timeline}
                            </div>
                          </div>
                          <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                            <Award className="w-6 h-6 text-green-400 mx-auto mb-2" />
                            <div className="text-sm text-gray-300">Result</div>
                            <div className="text-lg font-bold text-green-400">
                              {stories[currentStory].success}
                            </div>
                          </div>
                          <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                            <Calendar className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                            <div className="text-sm text-gray-300">Year</div>
                            <div className="text-lg font-bold text-white">
                              {stories[currentStory].year}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Details Expansion */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mt-8 p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/20"
              >
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-green-400" />
                  Case Details
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <div className="text-sm text-red-300 font-medium mb-1">Challenge</div>
                    <div className="text-gray-300 text-sm">{stories[currentStory].details.challenge}</div>
                  </div>
                  <div>
                    <div className="text-sm text-blue-300 font-medium mb-1">AI Solution</div>
                    <div className="text-gray-300 text-sm">{stories[currentStory].details.solution}</div>
                  </div>
                  <div>
                    <div className="text-sm text-green-300 font-medium mb-1">Outcome</div>
                    <div className="text-gray-300 text-sm">{stories[currentStory].details.outcome}</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Previous Button */}
            <motion.button
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevStory}
              className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-white/10 to-white/20 backdrop-blur-xl rounded-xl border border-white/30 hover:border-white/50 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 text-purple-400 group-hover:-translate-x-1 transition-transform" />
              <span className="text-white font-medium">Previous</span>
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex items-center gap-3">
              {stories.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => goToStory(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentStory
                      ? 'bg-gradient-to-r from-green-400 to-blue-400 scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextStory}
              className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-white/10 to-white/20 backdrop-blur-xl rounded-xl border border-white/30 hover:border-white/50 transition-all duration-300"
            >
              <span className="text-white font-medium">Next</span>
              <ChevronRight className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { number: "10,000+", label: "Success Stories", icon: Users, color: "text-green-400" },
            { number: "94%", label: "Success Rate", icon: Award, color: "text-blue-400" },
            { number: "45", label: "Countries", icon: MapPin, color: "text-purple-400" },
            { number: "24/7", label: "AI Support", icon: Star, color: "text-yellow-400" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-gradient-to-br from-white/10 to-white/20 backdrop-blur-xl rounded-2xl border border-white/30 hover:border-white/50 transition-all duration-300"
            >
              <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold rounded-2xl transition-all duration-300 flex items-center gap-3 text-lg shadow-2xl mx-auto"
          >
            <Award className="w-6 h-6 group-hover:animate-bounce" />
            <span>Start Your Success Story</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
