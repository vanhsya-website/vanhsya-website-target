'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Eye, 
  Volume2, 
  Type, 
  Keyboard, 
  CheckCircle,
  Shield,
  Heart,
  Globe
} from 'lucide-react';

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Accessibility
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {' '}Commitment
              </span>
            </h1>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
              We are committed to ensuring digital accessibility for people with disabilities. 
              We continually improve the user experience for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Eye,
                title: "Visual Accessibility",
                description: "High contrast modes and screen reader support"
              },
              {
                icon: Volume2,
                title: "Audio Support",
                description: "Text-to-speech and audio descriptions"
              },
              {
                icon: Type,
                title: "Text Scaling",
                description: "Adjustable font sizes and readable fonts"
              },
              {
                icon: Keyboard,
                title: "Keyboard Navigation",
                description: "Full keyboard accessibility support"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-purple-200">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Accessibility Standards
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              We strive to meet WCAG 2.1 AA standards and continuously improve our accessibility features.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "WCAG 2.1 AA Compliance",
                description: "Following Web Content Accessibility Guidelines"
              },
              {
                icon: Shield,
                title: "Regular Testing",
                description: "Continuous accessibility audits and improvements"
              },
              {
                icon: Heart,
                title: "User Feedback",
                description: "We listen to our users and improve based on feedback"
              }
            ].map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center"
              >
                <standard.icon className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">{standard.title}</h3>
                <p className="text-purple-200">{standard.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20 text-center"
          >
            <Globe className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">
              Need Accessibility Support?
            </h2>
            <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
              If you encounter any accessibility barriers or need assistance, please contact us. 
              We're here to help and continuously improve.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              Contact Our Team
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}