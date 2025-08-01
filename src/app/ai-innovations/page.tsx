'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Bot, 
  Brain, 
  Cpu, 
  Lightbulb, 
  Sparkles, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Target,
  Shield
} from 'lucide-react';

export default function AIInnovationsPage() {
  const innovations = [
    {
      title: 'Neural Immigration Predictor',
      description: 'Advanced AI that predicts success rates with 95% accuracy using deep learning',
      icon: Brain,
      features: ['Deep Learning Models', 'Real-time Analysis', 'Success Prediction'],
      status: 'live'
    },
    {
      title: 'Smart Document Analyzer',
      description: 'Instantly validates documents and identifies missing requirements',
      icon: Bot,
      features: ['OCR Technology', 'Compliance Check', 'Error Detection'],
      status: 'beta'
    },
    {
      title: 'AI Pathway Optimizer',
      description: 'Recommends the best immigration route based on your profile',
      icon: Target,
      features: ['Route Optimization', 'Custom Recommendations', 'Timeline Prediction'],
      status: 'coming-soon'
    },
    {
      title: 'Intelligent Consultation Bot',
      description: '24/7 AI assistant providing personalized immigration advice',
      icon: Lightbulb,
      features: ['24/7 Availability', 'Personalized Advice', 'Multi-language Support'],
      status: 'live'
    }
  ];

  const stats = [
    { label: 'AI Models Deployed', value: '25+', icon: Cpu },
    { label: 'Success Rate', value: '95%', icon: Star },
    { label: 'Processing Speed', value: '10x', icon: Zap },
    { label: 'Global Coverage', value: '50+', icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">VANHSYA</span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
              <Link href="/ai-tools" className="text-white/80 hover:text-white transition-colors">AI Tools</Link>
              <Link href="/services" className="text-white/80 hover:text-white transition-colors">Services</Link>
              <Link href="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 mb-8">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span className="text-blue-300 font-medium">AI Innovations</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              The Future of{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Immigration
              </span>
            </h1>
            
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12">
              Experience revolutionary AI technologies that transform how immigration works. 
              Our innovations make complex processes simple, fast, and accurate.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Innovations Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our AI Innovations</h2>
            <p className="text-xl text-white/70">
              Cutting-edge technologies that revolutionize the immigration experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {innovations.map((innovation, index) => (
              <motion.div
                key={innovation.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                      <innovation.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{innovation.title}</h3>
                      <div className={`text-xs font-medium px-2 py-1 rounded-full ${
                        innovation.status === 'live' ? 'bg-green-500/20 text-green-400' :
                        innovation.status === 'beta' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {innovation.status === 'live' ? 'LIVE' :
                         innovation.status === 'beta' ? 'BETA' : 'COMING SOON'}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-white/70 mb-6">{innovation.description}</p>

                <div className="space-y-2">
                  {innovation.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-white/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all flex items-center justify-center gap-2 group">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/20"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Experience AI Innovation?
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Join thousands who are already benefiting from our AI-powered immigration solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/ai-tools"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all"
              >
                Try AI Tools
              </Link>
              <Link 
                href="/contact"
                className="px-8 py-4 bg-white/10 border border-white/20 text-white font-medium rounded-xl hover:bg-white/20 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
