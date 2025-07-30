'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Image from 'next/image';
import { 
  MapPin, 
  Clock, 
  Users, 
  TrendingUp, 
  Award, 
  ArrowRight,
  CheckCircle,
  DollarSign,
  Globe
} from 'lucide-react';

const countries = [
  {
    id: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    image: '/images/countries/canada.jpg',
    tagline: 'Your Northern Opportunity',
    description: 'World-class healthcare, excellent education system, and welcoming immigration policies make Canada a top destination.',
    programs: [
      { name: 'Express Entry', processingTime: '6-8 months', successRate: 98.7 },
      { name: 'Provincial Nominee', processingTime: '12-18 months', successRate: 96.5 },
      { name: 'Start-up Visa', processingTime: '12-16 months', successRate: 94.2 },
      { name: 'Family Sponsorship', processingTime: '8-12 months', successRate: 99.1 }
    ],
    stats: {
      population: '38.2M',
      gdpPerCapita: '$52,051',
      lifeQuality: '9.2/10',
      languages: 'English, French'
    },
    highlights: [
      'Universal Healthcare',
      'Path to Citizenship',
      'High Quality of Life',
      'Multicultural Society',
      'Strong Economy'
    ],
    color: 'from-red-500 to-red-600',
    bgGlow: 'bg-red-500/10',
  },
  {
    id: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    image: '/images/countries/australia.jpg',
    tagline: 'Land Down Under Dreams',
    description: 'Stunning landscapes, vibrant cities, and a relaxed lifestyle combined with excellent career opportunities.',
    programs: [
      { name: 'Skilled Independent', processingTime: '8-12 months', successRate: 97.2 },
      { name: 'Employer Nominated', processingTime: '6-10 months', successRate: 98.5 },
      { name: 'Business Innovation', processingTime: '12-18 months', successRate: 92.8 },
      { name: 'Global Talent', processingTime: '4-8 months', successRate: 95.1 }
    ],
    stats: {
      population: '25.7M',
      gdpPerCapita: '$55,060',
      lifeQuality: '9.4/10',
      languages: 'English'
    },
    highlights: [
      'Work-Life Balance',
      'Beautiful Climate',
      'High Salaries',
      'Quality Education',
      'Safe Environment'
    ],
    color: 'from-green-500 to-emerald-600',
    bgGlow: 'bg-green-500/10',
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    image: '/images/countries/uk.jpg',
    tagline: 'Gateway to Europe',
    description: 'Rich history, world-renowned universities, and a thriving economy with global business connections.',
    programs: [
      { name: 'Skilled Worker', processingTime: '3-8 months', successRate: 96.5 },
      { name: 'Global Talent', processingTime: '3-5 months', successRate: 94.8 },
      { name: 'Innovator Visa', processingTime: '6-9 months', successRate: 89.2 },
      { name: 'Graduate Route', processingTime: '2-4 months', successRate: 98.9 }
    ],
    stats: {
      population: '67.5M',
      gdpPerCapita: '$46,344',
      lifeQuality: '8.9/10',
      languages: 'English'
    },
    highlights: [
      'Historic Universities',
      'NHS Healthcare',
      'Cultural Heritage',
      'Financial Hub',
      'European Access'
    ],
    color: 'from-blue-600 to-indigo-700',
    bgGlow: 'bg-blue-500/10',
  },
  {
    id: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    image: '/images/countries/germany.jpg',
    tagline: 'Engineering Excellence',
    description: 'Europe\'s economic powerhouse with exceptional engineering opportunities and comprehensive social benefits.',
    programs: [
      { name: 'EU Blue Card', processingTime: '2-4 months', successRate: 95.8 },
      { name: 'Skilled Workers', processingTime: '3-6 months', successRate: 93.4 },
      { name: 'Job Seeker Visa', processingTime: '2-3 months', successRate: 87.6 },
      { name: 'Self Employment', processingTime: '4-8 months', successRate: 84.2 }
    ],
    stats: {
      population: '83.2M',
      gdpPerCapita: '$50,206',
      lifeQuality: '9.1/10',
      languages: 'German, English'
    },
    highlights: [
      'Strong Economy',
      'Excellent Benefits',
      'Work-Life Balance',
      'Innovation Hub',
      'Central Location'
    ],
    color: 'from-amber-500 to-orange-600',
    bgGlow: 'bg-amber-500/10',
  },
];

export default function InteractiveCountryExplorer() {
  const [activeCountry, setActiveCountry] = useState(countries[0]);
  const [selectedProgram, setSelectedProgram] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section 
      ref={containerRef}
      className="relative py-24 lg:py-32 bg-gradient-to-b from-neutral-950 to-neutral-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 6 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className={`w-16 h-16 border-2 border-purple-500/20 ${i % 2 === 0 ? 'rounded-full' : 'rotate-45'}`} />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 font-medium text-sm mb-6"
          >
            <Globe className="w-4 h-4" />
            Global Destinations
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Explore Your Next
            <span className="block bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Home Country
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-neutral-300 leading-relaxed"
          >
            Discover immigration opportunities across 195+ countries with real-time data, 
            success rates, and personalized pathway recommendations.
          </motion.p>
        </div>

        {/* Country Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {countries.map((country) => (
            <motion.button
              key={country.id}
              onClick={() => {
                setActiveCountry(country);
                setSelectedProgram(0);
              }}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl border transition-all duration-300 ${
                activeCountry.id === country.id
                  ? 'bg-gradient-to-r from-purple-600/20 to-indigo-600/20 border-purple-500/50 text-white'
                  : 'bg-neutral-900/60 border-neutral-800 text-neutral-300 hover:border-neutral-700 hover:bg-neutral-900/80'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-2xl">{country.flag}</span>
              <span className="font-semibold">{country.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Main Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCountry.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-start"
          >
            {/* Left Side - Country Info */}
            <div className="space-y-8">
              {/* Country Header */}
              <div className="bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl">{activeCountry.flag}</span>
                  <div>
                    <h3 className="text-3xl font-bold text-white">{activeCountry.name}</h3>
                    <p className="text-purple-400 text-lg">{activeCountry.tagline}</p>
                  </div>
                </div>
                
                <p className="text-neutral-300 text-lg leading-relaxed mb-6">
                  {activeCountry.description}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(activeCountry.stats).map(([key, value]) => (
                    <div key={key} className="bg-neutral-800/50 rounded-xl p-4">
                      <div className="text-sm text-neutral-400 capitalize mb-1">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                      <div className="text-white font-semibold">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-8">
                <h4 className="text-xl font-bold text-white mb-6">Why Choose {activeCountry.name}?</h4>
                <div className="grid grid-cols-1 gap-3">
                  {activeCountry.highlights.map((highlight, index) => (
                    <motion.div
                      key={highlight}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-neutral-300">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Immigration Programs */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-8">
                <h4 className="text-2xl font-bold text-white mb-6">Immigration Programs</h4>
                
                {/* Program Tabs */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {activeCountry.programs.map((program, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedProgram(index)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        selectedProgram === index
                          ? 'bg-purple-600 text-white'
                          : 'bg-neutral-800/60 text-neutral-400 hover:bg-neutral-800 hover:text-neutral-300'
                      }`}
                    >
                      {program.name}
                    </button>
                  ))}
                </div>

                {/* Selected Program Details */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedProgram}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="bg-neutral-800/30 rounded-xl p-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h5 className="text-xl font-bold text-white">
                        {activeCountry.programs[selectedProgram].name}
                      </h5>
                      <div className="flex items-center gap-2 text-green-400">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          {activeCountry.programs[selectedProgram].successRate}% Success
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6 mb-6">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-purple-400" />
                        <div>
                          <div className="text-xs text-neutral-400">Processing Time</div>
                          <div className="text-white font-medium">
                            {activeCountry.programs[selectedProgram].processingTime}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Award className="w-5 h-5 text-amber-400" />
                        <div>
                          <div className="text-xs text-neutral-400">Success Rate</div>
                          <div className="text-white font-medium">
                            {activeCountry.programs[selectedProgram].successRate}%
                          </div>
                        </div>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
                    >
                      Check Eligibility
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-xl p-6 text-left hover:border-purple-500/30 transition-all duration-300"
                >
                  <DollarSign className="w-8 h-8 text-green-400 mb-3" />
                  <h5 className="text-white font-semibold mb-2">Cost Calculator</h5>
                  <p className="text-neutral-400 text-sm">Estimate your total immigration costs</p>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-xl p-6 text-left hover:border-purple-500/30 transition-all duration-300"
                >
                  <MapPin className="w-8 h-8 text-blue-400 mb-3" />
                  <h5 className="text-white font-semibold mb-2">City Guide</h5>
                  <p className="text-neutral-400 text-sm">Explore cities and lifestyle options</p>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600/10 to-indigo-600/10 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Can't Find Your Dream Destination?
            </h3>
            <p className="text-neutral-300 mb-6">
              We cover 195+ countries with personalized immigration pathways for each destination.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
            >
              Explore All Countries
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
