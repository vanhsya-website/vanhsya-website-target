'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaAward, 
  FaGlobe, 
  FaUsers, 
  FaHandshake, 
  FaShieldAlt, 
  FaRocket,
  FaLightbulb,
  FaHeart,
  FaStar,
  FaCheckCircle,
  FaQuoteLeft
} from 'react-icons/fa';
import { 
  SparklesIcon,
  GlobeAmericasIcon,
  UserGroupIcon,
  LightBulbIcon,
  HeartIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';
import Footer from '@/components/Footer';

const values = [
  {
    icon: SparklesIcon,
    title: "Innovation & Excellence",
    description: "We leverage cutting-edge AI technology and innovative solutions to revolutionize the immigration experience.",
    color: "text-purple-400"
  },
  {
    icon: FaShieldAlt,
    title: "Trust & Transparency",
    description: "Complete transparency in our processes and pricing, building lasting relationships based on trust and integrity.",
    color: "text-blue-400"
  },
  {
    icon: HeartIcon,
    title: "Client-Centered Care",
    description: "Your dreams become our mission. We provide personalized attention and genuine care throughout your journey.",
    color: "text-pink-400"
  },
  {
    icon: GlobeAmericasIcon,
    title: "Global Expertise",
    description: "Deep knowledge of immigration laws across 50+ countries with local insights and global perspective.",
    color: "text-green-400"
  }
];

const stats = [
  { 
    number: "99.6%", 
    label: "Success Rate", 
    description: "Highest success rate across all visa categories",
    icon: FaStar,
    color: "text-yellow-400"
  },
  { 
    number: "50K+", 
    label: "Visas Approved", 
    description: "Life-changing migrations successfully completed",
    icon: FaCheckCircle,
    color: "text-green-400"
  },
  { 
    number: "195", 
    label: "Countries", 
    description: "Global reach with expert immigration knowledge",
    icon: FaGlobe,
    color: "text-blue-400"
  },
  { 
    number: "24/7", 
    label: "AI Support", 
    description: "Round-the-clock intelligent assistance available",
    icon: FaRocket,
    color: "text-purple-400"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <SparklesIcon className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-medium">Leading the New Migration Era</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transforming Lives Through 
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}Smart Migration
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              At VANHSYA, we're revolutionizing global migration with AI-powered solutions, 
              expert guidance, and unwavering commitment to your success. Join 50,000+ dreamers 
              who've turned their migration aspirations into reality.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-2">
                  <HeartIcon className="w-5 h-5" />
                  Our Story
                </div>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
              >
                <div className="flex items-center gap-2">
                  <UserGroupIcon className="w-5 h-5" />
                  Meet Our Team
                </div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="font-semibold text-gray-900 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-purple-100 rounded-full px-4 py-2 mb-6">
              <HeartIcon className="w-5 h-5 text-purple-600" />
              <span className="text-purple-700 font-medium">Our Core Values</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Drives Us Every Day
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our values are the foundation of everything we do, ensuring that every interaction 
              reflects our commitment to excellence and integrity.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group hover:-translate-y-2"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-6 group-hover:scale-110 transition-transform`}>
                  <value.icon className={`w-8 h-8 ${value.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Migration Journey?
            </h2>
            <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
              Join thousands of successful migrants who chose VANHSYA as their trusted partner. 
              Your new life abroad is just one consultation away.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-purple-600 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-2">
                  <FaRocket className="w-5 h-5" />
                  Book Free Consultation
                </div>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-purple-700 text-white font-bold rounded-xl border border-purple-500 hover:bg-purple-800 transition-all"
              >
                <div className="flex items-center gap-2">
                  <SparklesIcon className="w-5 h-5" />
                  Explore AI Tools
                </div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
