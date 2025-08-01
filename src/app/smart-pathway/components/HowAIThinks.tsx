'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, Database, Target, Lightbulb, Search, CheckCircle, ArrowRight } from 'lucide-react';

export default function HowAIThinks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  const steps = [
    {
      icon: Search,
      title: "Data Collection",
      subtitle: "Gathering Information",
      description: "I analyze your profile, including education, work experience, language skills, and personal preferences to build a comprehensive understanding.",
      color: "from-blue-500 to-cyan-500",
      details: ["Education Background", "Work Experience", "Language Proficiency", "Financial Status", "Family Situation"],
      delay: 0.1
    },
    {
      icon: Database,
      title: "Pattern Recognition",
      subtitle: "Cross-Referencing",
      description: "I compare your profile against thousands of successful visa applications to identify patterns and opportunities you might have missed.",
      color: "from-purple-500 to-pink-500",
      details: ["Success Rate Analysis", "Timeline Predictions", "Document Requirements", "Cost Estimations", "Risk Assessment"],
      delay: 0.2
    },
    {
      icon: Brain,
      title: "Smart Analysis",
      subtitle: "Processing Logic",
      description: "Using advanced algorithms, I weigh multiple factors simultaneously - something human consultants might overlook or process slowly.",
      color: "from-green-500 to-emerald-500",
      details: ["Multi-factor Analysis", "Probability Calculations", "Alternative Pathways", "Legal Compliance", "Optimization Strategies"],
      delay: 0.3
    },
    {
      icon: Target,
      title: "Pathway Optimization",
      subtitle: "Strategic Planning",
      description: "I identify the most efficient route to your goals, considering time, cost, and success probability to create your personalized roadmap.",
      color: "from-orange-500 to-red-500",
      details: ["Timeline Optimization", "Cost-Benefit Analysis", "Success Probability", "Backup Plans", "Strategic Sequencing"],
      delay: 0.4
    },
    {
      icon: Lightbulb,
      title: "Insight Generation",
      subtitle: "Intelligent Recommendations",
      description: "I provide actionable insights and recommendations that are tailored specifically to your unique situation and goals.",
      color: "from-yellow-500 to-orange-500",
      details: ["Personalized Tips", "Action Items", "Timeline Guidance", "Document Preparation", "Interview Preparation"],
      delay: 0.5
    },
    {
      icon: CheckCircle,
      title: "Continuous Learning",
      subtitle: "Self-Improvement",
      description: "With each consultation, I learn and improve, staying updated with the latest immigration policies and success strategies.",
      color: "from-indigo-500 to-purple-500",
      details: ["Policy Updates", "Success Rate Tracking", "Algorithm Refinement", "Knowledge Expansion", "Accuracy Improvement"],
      delay: 0.6
    }
  ];

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 69, 197, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 69, 197, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Floating Neural Network Nodes */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/30 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
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
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-full border border-purple-500/30 mb-8"
          >
            <Brain className="w-6 h-6 text-purple-400" />
            <span className="text-purple-300 font-medium">AI Intelligence Process</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            How Our{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              AI Thinks
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Unlike traditional consultants who rely on experience alone, our AI processes 
            <span className="text-purple-400 font-semibold"> thousands of data points simultaneously</span>{" "}
            to find your optimal pathway.
          </p>
        </motion.div>

        {/* AI Process Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, rotateX: 30 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 100, rotateX: 30 }}
              transition={{ 
                duration: 0.8, 
                delay: step.delay,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                z: 50,
              }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl border border-white/20 hover:border-white/40 transition-all duration-500 overflow-hidden">
                {/* Glow Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                  whileHover={{ scale: 1.1 }}
                />

                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-2xl">
                  {index + 1}
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${step.color} shadow-2xl mb-6`}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-4">
                    <span className="text-sm font-medium text-purple-300 uppercase tracking-wider">
                      {step.subtitle}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-2 mb-4">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Detail Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {step.details.map((detail, detailIndex) => (
                      <motion.span
                        key={detailIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: step.delay + 0.1 + detailIndex * 0.05 
                        }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-xs text-white/80 hover:bg-white/20 transition-all duration-300"
                      >
                        {detail}
                      </motion.span>
                    ))}
                  </div>

                  {/* Progress Indicator */}
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: '100%' } : { width: 0 }}
                        transition={{ 
                          duration: 1.5, 
                          delay: step.delay + 0.5,
                          ease: "easeOut"
                        }}
                        className={`h-full bg-gradient-to-r ${step.color} rounded-full`}
                      />
                    </div>
                    <ArrowRight className="w-4 h-4 text-purple-400" />
                  </div>
                </div>

                {/* Hover Animation Lines */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute bg-gradient-to-r from-purple-400/20 via-purple-400/40 to-transparent h-px"
                      style={{
                        top: `${25 + i * 25}%`,
                        left: '-100%',
                        right: '-100%',
                      }}
                      animate={{
                        x: ['0%', '200%'],
                      }}
                      transition={{
                        duration: 1.5,
                        delay: i * 0.1,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                    />
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(139, 69, 197, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold rounded-2xl transition-all duration-300 flex items-center gap-3 text-lg shadow-2xl mx-auto"
          >
            <Brain className="w-6 h-6 group-hover:animate-pulse" />
            <span>Experience AI Analysis</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
