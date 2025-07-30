'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { 
  MapPin, 
  Users, 
  TrendingUp, 
  Award, 
  ArrowRight,
  CheckCircle,
  Globe,
  Zap,
  Shield,
  MessageSquare,
  Calculator,
  Search,
  Filter
} from 'lucide-react';

const serviceCategories = [
  {
    id: 'all',
    label: 'All Services',
    count: 25
  },
  {
    id: 'work',
    label: 'Work Visas',
    count: 8
  },
  {
    id: 'study',
    label: 'Study Visas',
    count: 6
  },
  {
    id: 'family',
    label: 'Family Visas',
    count: 5
  },
  {
    id: 'business',
    label: 'Business Visas',
    count: 6
  }
];

const services = [
  {
    id: 1,
    category: 'work',
    title: 'Express Entry Program',
    description: 'Fast-track your Canadian immigration through the federal Express Entry system with AI-powered profile optimization.',
    countries: ['Canada'],
    processingTime: '6-8 months',
    successRate: 98.7,
    price: 'From $2,499',
    features: [
      'Comprehensive Ranking System (CRS) optimization',
      'Province nomination strategy',
      'Document preparation and review',
      'Post-landing settlement support'
    ],
    icon: Zap,
    color: 'from-emerald-500 to-green-600',
    bgGlow: 'bg-emerald-500/10',
    popular: true
  },
  {
    id: 2,
    category: 'work',
    title: 'Provincial Nominee Program',
    description: 'Leverage provincial nominations to enhance your immigration prospects with targeted regional strategies.',
    countries: ['Canada'],
    processingTime: '12-18 months',
    successRate: 96.5,
    price: 'From $3,299',
    features: [
      'Province-specific application strategy',
      'Labor market impact assessment',
      'Employer liaison services',
      'Regional settlement guidance'
    ],
    icon: Globe,
    color: 'from-blue-500 to-cyan-600',
    bgGlow: 'bg-blue-500/10'
  },
  {
    id: 3,
    category: 'work',
    title: 'Skilled Worker Visa',
    description: 'Secure work authorization in your target country with expert guidance on skills assessment and documentation.',
    countries: ['Australia', 'UK', 'Germany'],
    processingTime: '8-12 months',
    successRate: 94.2,
    price: 'From $2,799',
    features: [
      'Skills assessment coordination',
      'Points calculation optimization',
      'Occupation list guidance',
      'Job market insights'
    ],
    icon: Award,
    color: 'from-purple-500 to-violet-600',
    bgGlow: 'bg-purple-500/10'
  },
  {
    id: 4,
    category: 'study',
    title: 'Student Visa Program',
    description: 'Pursue your educational dreams abroad with comprehensive student visa support and academic guidance.',
    countries: ['Canada', 'Australia', 'UK', 'USA'],
    processingTime: '4-8 weeks',
    successRate: 97.8,
    price: 'From $1,899',
    features: [
      'University selection guidance',
      'Statement of purpose review',
      'Financial documentation support',
      'Post-graduation work permit advice'
    ],
    icon: Shield,
    color: 'from-amber-500 to-orange-600',
    bgGlow: 'bg-amber-500/10'
  },
  {
    id: 5,
    category: 'family',
    title: 'Family Sponsorship',
    description: 'Reunite with your loved ones through family sponsorship programs with expert relationship documentation.',
    countries: ['Canada', 'Australia', 'UK'],
    processingTime: '8-14 months',
    successRate: 99.1,
    price: 'From $2,199',
    features: [
      'Relationship evidence compilation',
      'Sponsorship eligibility assessment',
      'Financial requirement planning',
      'Interview preparation'
    ],
    icon: Users,
    color: 'from-rose-500 to-pink-600',
    bgGlow: 'bg-rose-500/10'
  },
  {
    id: 6,
    category: 'business',
    title: 'Investor & Entrepreneur Visa',
    description: 'Launch your business venture abroad with specialized investor and entrepreneur visa programs.',
    countries: ['Canada', 'Australia', 'UK', 'USA'],
    processingTime: '12-24 months',
    successRate: 89.3,
    price: 'From $4,999',
    features: [
      'Business plan development',
      'Investment requirement guidance',
      'Due diligence support',
      'Business establishment assistance'
    ],
    icon: TrendingUp,
    color: 'from-indigo-500 to-blue-600',
    bgGlow: 'bg-indigo-500/10'
  }
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const filteredServices = services.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-gradient-to-b from-neutral-950 to-neutral-900 text-white"
    >
      {/* Animated Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-emerald-600/10 to-cyan-600/10 rounded-full blur-3xl" />
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 15 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative z-10">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 text-purple-300 font-medium text-sm mb-6"
          >
            <Globe className="w-4 h-4" />
            Premium Services
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Immigration Services
            <span className="block bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Designed for Success
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-neutral-300 leading-relaxed mb-8"
          >
            Comprehensive immigration solutions powered by AI technology and expert guidance. 
            Choose from our range of specialized services tailored to your unique journey.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative max-w-lg mx-auto mb-8"
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gradient-to-r from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-2xl text-white placeholder-neutral-400 focus:outline-none focus:border-purple-500/50 transition-all duration-300"
            />
          </motion.div>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {serviceCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-gradient-to-r from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 text-neutral-300 hover:border-neutral-700/50 hover:text-white'
              }`}
            >
              <Filter className="w-4 h-4" />
              {category.label}
              <span className="bg-neutral-800/50 px-2 py-1 rounded-full text-xs">
                {category.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className={`absolute inset-0 rounded-3xl ${service.bgGlow} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-3xl p-8 hover:border-neutral-700/50 transition-all duration-500">
                {/* Service Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-neutral-400 mt-1">
                        <MapPin className="w-3 h-3" />
                        {service.countries.join(', ')}
                      </div>
                    </div>
                  </div>
                  {service.popular && (
                    <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-full px-3 py-1 text-xs text-amber-400 font-medium">
                      Most Popular
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-neutral-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-green-400 font-semibold">{service.successRate}%</div>
                    <div className="text-xs text-neutral-400">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-blue-400 font-semibold">{service.processingTime}</div>
                    <div className="text-xs text-neutral-400">Processing</div>
                  </div>
                  <div className="text-center">
                    <div className="text-purple-400 font-semibold">{service.price}</div>
                    <div className="text-xs text-neutral-400">Starting Price</div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.2 + featureIndex * 0.1 }}
                      className="flex items-center gap-3 text-sm text-neutral-400"
                    >
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {feature}
                    </motion.div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 bg-gradient-to-r ${service.color} text-white font-semibold py-3 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-neutral-800/50 text-neutral-300 font-medium rounded-xl hover:bg-neutral-700/50 hover:text-white transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600/10 to-indigo-600/10 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-xl text-neutral-300 mb-8">
              Our immigration experts can create a personalized pathway tailored to your unique situation and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                Free Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-neutral-800/50 text-white font-semibold rounded-xl hover:bg-neutral-700/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Calculator className="w-5 h-5" />
                Assessment Tool
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
