'use client';

import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { 
  MessageSquare, 
  FileText, 
  CheckCircle, 
  Plane, 
  Calendar,
  Clock,
  ArrowRight,
  Star,
  Shield,
  Zap
} from 'lucide-react';

const timelineSteps = [
  {
    id: 1,
    icon: MessageSquare,
    title: 'Free Consultation',
    subtitle: 'Your Journey Begins',
    description: 'Connect with our immigration experts for a comprehensive assessment of your profile and goals.',
    duration: '30 minutes',
    features: [
      'Profile evaluation',
      'Country recommendations',
      'Pathway analysis',
      'Documentation guidance'
    ],
    color: 'from-blue-500 to-cyan-500',
    bgGlow: 'bg-blue-500/10',
    delay: 0.1
  },
  {
    id: 2,
    icon: FileText,
    title: 'Documentation',
    subtitle: 'Building Your Case',
    description: 'Our AI-powered document review ensures 99.8% accuracy while our experts handle all paperwork.',
    duration: '2-4 weeks',
    features: [
      'AI document scanning',
      'Expert verification',
      'Translation services',
      'Compliance checking'
    ],
    color: 'from-purple-500 to-violet-500',
    bgGlow: 'bg-purple-500/10',
    delay: 0.2
  },
  {
    id: 3,
    icon: CheckCircle,
    title: 'Application',
    subtitle: 'Precision Submission',
    description: 'Strategic application submission with real-time tracking and government liaison support.',
    duration: '1-2 weeks',
    features: [
      'Strategic timing',
      'Real-time tracking',
      'Government liaison',
      'Status updates'
    ],
    color: 'from-emerald-500 to-green-500',
    bgGlow: 'bg-emerald-500/10',
    delay: 0.3
  },
  {
    id: 4,
    icon: Calendar,
    title: 'Processing',
    subtitle: 'Professional Monitoring',
    description: 'Continuous monitoring and proactive communication with immigration authorities on your behalf.',
    duration: '3-12 months',
    features: [
      'Status monitoring',
      'Authority communication',
      'Update notifications',
      'Timeline optimization'
    ],
    color: 'from-amber-500 to-orange-500',
    bgGlow: 'bg-amber-500/10',
    delay: 0.4
  },
  {
    id: 5,
    icon: Plane,
    title: 'Success & Beyond',
    subtitle: 'Welcome Home',
    description: 'Celebrate your approval and access lifetime settlement support for a smooth transition.',
    duration: 'Lifetime support',
    features: [
      'Approval celebration',
      'Settlement support',
      'Community network',
      'Ongoing assistance'
    ],
    color: 'from-rose-500 to-pink-500',
    bgGlow: 'bg-rose-500/10',
    delay: 0.5
  }
];

export default function SmoothAnimatedTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section 
      ref={containerRef}
      className="relative py-24 lg:py-32 bg-gradient-to-b from-neutral-900 to-neutral-950 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-r from-emerald-600/10 to-cyan-600/10 rounded-full blur-3xl" />
      </div>

      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-500/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-purple-300 font-medium text-sm mb-6"
          >
            <Zap className="w-4 h-4" />
            Proven Process
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Your Immigration
            <span className="block bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Success Timeline
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-neutral-300 leading-relaxed"
          >
            Experience our proven 5-step process that has helped 25,000+ families 
            achieve their immigration dreams with a 99.1% success rate.
          </motion.p>
        </div>

        {/* Success Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {[
            { label: 'Families Settled', value: '25,000+', icon: Star, color: 'text-amber-400' },
            { label: 'Success Rate', value: '99.1%', icon: Shield, color: 'text-green-400' },
            { label: 'Countries Covered', value: '195+', icon: Plane, color: 'text-blue-400' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="bg-gradient-to-br from-neutral-900/60 to-neutral-900/30 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-6 text-center"
            >
              <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-neutral-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Progress Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-neutral-800 transform md:-translate-x-0.5">
            <motion.div
              className="w-full bg-gradient-to-b from-purple-500 via-violet-500 to-indigo-500 origin-top"
              style={{ 
                scaleY: useTransform(scrollYProgress, [0.2, 0.8], [0, 1])
              }}
            />
          </div>

          {/* Timeline Steps */}
          <div className="space-y-20">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: step.delay }}
                className={`relative flex flex-col md:flex-row items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="relative flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg z-10 relative`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 w-16 h-16 rounded-full ${step.bgGlow} blur-xl opacity-50`} />
                </div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`flex-1 max-w-lg bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-8 hover:border-neutral-700/50 transition-all duration-300 ${
                    index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                      {step.id.toString().padStart(2, '0')}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-neutral-400 bg-neutral-800/50 px-2 py-1 rounded-full">
                      <Clock className="w-3 h-3" />
                      {step.duration}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-purple-400 font-medium mb-4">{step.subtitle}</p>
                  <p className="text-neutral-300 leading-relaxed mb-6">{step.description}</p>

                  {/* Features List */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {step.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: step.delay + 0.1 + featureIndex * 0.05 }}
                        className="flex items-center gap-2 text-sm text-neutral-400"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color}`} />
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${step.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>

                {/* Connector Lines for Desktop */}
                <div className="hidden md:block absolute top-8 w-8 h-0.5 bg-gradient-to-r from-neutral-700 to-neutral-600 z-0" 
                     style={{
                       left: index % 2 === 0 ? '4rem' : 'auto',
                       right: index % 2 === 1 ? '4rem' : 'auto'
                     }} 
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-purple-600/10 to-indigo-600/10 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-neutral-300 mb-6">
              Join thousands of families who trusted VANHSYA with their immigration dreams. 
              Your success story starts with a simple conversation.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
