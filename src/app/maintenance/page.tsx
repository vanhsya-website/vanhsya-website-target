'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Settings, 
  Clock, 
  Wrench, 
  CheckCircle,
  ArrowRight,
  Home
} from 'lucide-react';

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative w-32 h-32 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center">
                <Settings className="w-12 h-12 text-purple-400 animate-spin" style={{ animationDuration: '3s' }} />
              </div>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Under
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {' '}Maintenance
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-purple-200 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            We're currently performing scheduled maintenance to improve your experience. 
            Our AI-powered immigration services will be back online shortly.
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            {[
              {
                icon: Wrench,
                title: "System Upgrades",
                description: "Enhancing our AI algorithms for better accuracy"
              },
              {
                icon: Clock,
                title: "Performance Optimization",
                description: "Improving response times and user experience"
              },
              {
                icon: CheckCircle,
                title: "Quality Assurance",
                description: "Ensuring all features work perfectly for you"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <feature.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-purple-200">{feature.description}</p>
              </div>
            ))}
          </motion.div>

          {/* Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Maintenance Progress</h3>
              <div className="w-full bg-white/20 rounded-full h-4 mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '75%' }}
                  transition={{ duration: 2, delay: 0.8 }}
                  className="bg-gradient-to-r from-purple-400 to-pink-400 h-4 rounded-full"
                ></motion.div>
              </div>
              <p className="text-purple-200">75% Complete - Expected completion in 30 minutes</p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="space-y-4"
          >
            <a
              href="/"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 mr-4"
            >
              <Home className="w-5 h-5 mr-2" />
              Return Home
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              Contact Support
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}