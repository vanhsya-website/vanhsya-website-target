'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Clock, 
  Globe, 
  FileCheck, 
  Users,
  Zap,
  Target,
  TrendingUp,
  Award
} from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI Profile Analysis',
    description: 'Advanced machine learning algorithms analyze your background, skills, and goals to identify optimal immigration pathways.',
    features: ['Smart eligibility assessment', 'Personalized recommendations', 'Success probability calculation'],
    color: 'from-purple-500 to-violet-600',
    bgGlow: 'bg-purple-500/10',
    delay: 0.1,
  },
  {
    icon: FileCheck,
    title: 'Document Intelligence',
    description: 'AI-powered document verification ensures completeness and accuracy, preventing costly delays and rejections.',
    features: ['Automated verification', 'Missing document alerts', 'Format compliance check'],
    color: 'from-blue-500 to-indigo-600',
    bgGlow: 'bg-blue-500/10',
    delay: 0.2,
  },
  {
    icon: Target,
    title: 'Country Matching',
    description: 'Intelligent matching system connects you with the best countries based on your profile and preferences.',
    features: ['195+ country database', 'Real-time policy updates', 'Custom scoring algorithm'],
    color: 'from-emerald-500 to-teal-600',
    bgGlow: 'bg-emerald-500/10',
    delay: 0.3,
  },
  {
    icon: Clock,
    title: 'Timeline Optimization',
    description: 'Predictive analytics provide accurate timelines and suggest strategies to accelerate your application.',
    features: ['Processing time prediction', 'Deadline management', 'Strategic planning'],
    color: 'from-amber-500 to-orange-600',
    bgGlow: 'bg-amber-500/10',
    delay: 0.4,
  },
  {
    icon: Shield,
    title: 'Compliance Guardian',
    description: 'Continuous monitoring ensures your application meets all current regulations and requirements.',
    features: ['Real-time law updates', 'Compliance verification', 'Risk assessment'],
    color: 'from-red-500 to-rose-600',
    bgGlow: 'bg-red-500/10',
    delay: 0.5,
  },
  {
    icon: TrendingUp,
    title: 'Success Analytics',
    description: 'Data-driven insights and success metrics help optimize your application for maximum approval chances.',
    features: ['Success rate tracking', 'Performance analytics', 'Optimization suggestions'],
    color: 'from-pink-500 to-purple-600',
    bgGlow: 'bg-pink-500/10',
    delay: 0.6,
  },
];

export default function SmoothServices() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <section 
      ref={containerRef}
      className="relative py-24 lg:py-32 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0"
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-600/3 to-blue-600/3 rounded-full blur-3xl" />
      </motion.div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      <motion.div 
        style={{ opacity, scale }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 font-medium text-sm mb-6"
          >
            <Zap className="w-4 h-4" />
            AI-Powered Services
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Intelligent Immigration
            <span className="block bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Technology Suite
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-neutral-300 leading-relaxed"
          >
            Experience the future of immigration with our cutting-edge AI platform. 
            Every service is designed to maximize your success and minimize processing time.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: service.delay,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Card Background */}
              <div className="relative h-full bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-8 overflow-hidden">
                
                {/* Glow Effect */}
                <div className={`absolute inset-0 ${service.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-purple-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                     style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'xor' }} />
                
                {/* Icon */}
                <div className="relative z-10 mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-100 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-neutral-400 mb-6 leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ 
                          duration: 0.5, 
                          delay: service.delay + 0.1 + (featureIndex * 0.1) 
                        }}
                        className="flex items-center gap-3"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} shadow-sm`} />
                        <span className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Hover Arrow */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-neutral-900/80 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-12 relative overflow-hidden">
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5 rounded-2xl" />
            
            {/* Content */}
            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 font-medium text-sm mb-6">
                <Award className="w-4 h-4" />
                Industry Leading Technology
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Experience the Future of Immigration?
              </h3>
              
              <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
                Join thousands of successful immigrants who chose our AI-powered platform. 
                Start your journey with a comprehensive assessment today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Free Assessment
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-neutral-800/60 backdrop-blur-sm text-white font-semibold rounded-xl border border-neutral-700 hover:border-purple-500/50 transition-all duration-300"
                >
                  Schedule Consultation
                </motion.button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-8 border-t border-neutral-800/50">
                {[
                  { icon: Users, value: '50K+', label: 'Happy Clients' },
                  { icon: Globe, value: '195+', label: 'Countries' },
                  { icon: Award, value: '99.8%', label: 'Success Rate' },
                  { icon: Clock, value: '60%', label: 'Faster Process' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1.0 + (index * 0.1) }}
                    className="text-center"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/10 rounded-xl mb-3">
                      <stat.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-neutral-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
