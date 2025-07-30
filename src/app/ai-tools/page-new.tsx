'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  SparklesIcon, 
  CpuChipIcon, 
  DocumentTextIcon, 
  CalculatorIcon,
  GlobeAmericasIcon,
  CheckCircleIcon,
  BeakerIcon,
  RocketLaunchIcon,
  StarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const aiTools = [
  {
    id: 'vanhologram',
    name: 'VanHologram Consultant',
    description: 'AI-powered personal immigration consultant',
    icon: SparklesIcon,
    href: '/ai-tools/vanhologram',
    status: 'featured',
    features: ['Real-time advice', '24/7 availability', 'Personalized guidance'],
    color: 'from-purple-600 to-blue-600'
  },
  {
    id: 'document-wizard',
    name: 'Document Analyzer',
    description: 'Intelligent document validation and processing',
    icon: DocumentTextIcon,
    href: '/ai-tools/document-wizard',
    status: 'active',
    features: ['Auto-validation', 'Error detection', 'Format optimization'],
    color: 'from-green-600 to-emerald-600'
  },
  {
    id: 'immigration-calculator',
    name: 'Immigration Calculator',
    description: 'Calculate your immigration score instantly',
    icon: CalculatorIcon,
    href: '/ai-tools/immigration-calculator',
    status: 'active',
    features: ['Instant scoring', 'Multiple countries', 'Success prediction'],
    color: 'from-blue-600 to-cyan-600'
  },
  {
    id: 'country-comparison',
    name: 'Country Comparison',
    description: 'AI-driven country matching system',
    icon: GlobeAmericasIcon,
    href: '/ai-tools/country-comparison',
    status: 'active',
    features: ['Smart matching', 'Comparative analysis', 'Success rates'],
    color: 'from-indigo-600 to-purple-600'
  },
  {
    id: 'eligibility-bot',
    name: 'Eligibility Checker',
    description: 'Smart eligibility assessment tool',
    icon: CheckCircleIcon,
    href: '/ai-tools/eligibility-bot',
    status: 'active',
    features: ['Quick assessment', 'Detailed analysis', 'Action plans'],
    color: 'from-orange-600 to-red-600'
  },
  {
    id: 'immigration-dna',
    name: 'ImmigrationDNA',
    description: 'Advanced profile matching algorithm',
    icon: BeakerIcon,
    href: '/ai-tools/immigration-dna',
    status: 'beta',
    features: ['DNA analysis', 'Pattern matching', 'Future predictions'],
    color: 'from-pink-600 to-rose-600'
  }
];

export default function AIToolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 pt-24">
      {/* Compact Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              <SparklesIcon className="w-4 h-4" />
              AI-Powered Tools
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Immigration <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">AI Tools</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-6">
              Experience cutting-edge AI technology designed to streamline your immigration process with precision and speed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Compact Tools Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiTools.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -3 }}
                className="group"
              >
                <Link href={tool.href} className="block">
                  <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 h-full">
                    {/* Compact Header */}
                    <div className={`p-5 bg-gradient-to-r ${tool.color} text-white`}>
                      <div className="flex items-center justify-between mb-3">
                        <tool.icon className="w-6 h-6" />
                        {tool.status === 'featured' && (
                          <span className="px-2 py-1 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-md">
                            ⭐
                          </span>
                        )}
                        {tool.status === 'beta' && (
                          <span className="px-2 py-1 bg-orange-400 text-orange-900 text-xs font-bold rounded-md">
                            BETA
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold mb-1">{tool.name}</h3>
                      <p className="text-white/90 text-sm">{tool.description}</p>
                    </div>

                    {/* Compact Body */}
                    <div className="p-5">
                      <div className="space-y-2 mb-4">
                        {tool.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-purple-600 font-semibold text-sm group-hover:gap-3 transition-all">
                        <span>Try Tool</span>
                        <ArrowRightIcon className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compact Stats */}
      <section className="py-12 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: 'AI Models', value: '50+', icon: CpuChipIcon },
              { label: 'Success Rate', value: '99.8%', icon: StarIcon },
              { label: 'Countries', value: '195+', icon: GlobeAmericasIcon },
              { label: 'Tools', value: '12+', icon: SparklesIcon }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="p-4"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-2xl font-black text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compact CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-black mb-4">
              Ready to Try Our AI Tools?
            </h2>
            <p className="text-lg mb-6 text-purple-100">
              Join thousands who've accelerated their immigration journey with AI.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-purple-600 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-2">
                <RocketLaunchIcon className="w-5 h-5" />
                Get Started Free
              </div>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
