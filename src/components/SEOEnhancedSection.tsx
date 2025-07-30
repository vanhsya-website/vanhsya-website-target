'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Globe, Award, CheckCircle } from 'lucide-react';

const SEOEnhancedSection: React.FC = () => {
  const metrics = [
    { icon: TrendingUp, value: '99.8%', label: 'Success Rate', color: 'from-green-500 to-emerald-500' },
    { icon: Users, value: '50K+', label: 'Happy Clients', color: 'from-blue-500 to-cyan-500' },
    { icon: Globe, value: '195+', label: 'Countries', color: 'from-purple-500 to-pink-500' },
    { icon: Award, value: '24/7', label: 'AI Support', color: 'from-yellow-500 to-orange-500' }
  ];

  const features = [
    'AI-Powered Migration Analysis',
    'Real-time Visa Processing Updates',
    'Fraud Protection with ScamShield',
    'Document Verification System',
    'Multi-language Support',
    'Expert Consultation Network'
  ];

  return (
    <section className="relative py-16 bg-gradient-to-b from-slate-950 to-indigo-950 overflow-hidden">
      {/* SEO-focused content */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Structured Data Headers for SEO */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            World's Most Advanced <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">AI Migration Platform</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Experience the future of global migration with VANHSYA's revolutionary AI technology. 
            Trusted by 50,000+ clients worldwide for visa applications, permanent residence, and immigration services.
          </motion.p>
        </div>

        {/* Key Metrics for Trust Signals */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 bg-slate-800/50 rounded-2xl border border-slate-700"
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <motion.div
                className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${metric.color} rounded-2xl flex items-center justify-center`}
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(59, 130, 246, 0.3)',
                    '0 0 40px rgba(59, 130, 246, 0.6)',
                    '0 0 20px rgba(59, 130, 246, 0.3)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <metric.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-3xl font-bold text-white mb-2">{metric.value}</h3>
              <p className="text-slate-400">{metric.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature List for SEO Keywords */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Why Choose VANHSYA AI Migration Platform?</h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3 text-slate-300"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Global Immigration Services</h3>
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
              <p className="text-slate-300 leading-relaxed mb-4">
                VANHSYA offers comprehensive immigration services for <strong>Canada Express Entry</strong>, 
                <strong> Australia Skilled Migration</strong>, <strong>USA Green Card</strong>, 
                <strong> UK Global Talent Visa</strong>, and <strong>195+ countries worldwide</strong>.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Our AI-powered platform provides <em>visa application assistance</em>, 
                <em> document preparation</em>, <em>eligibility assessment</em>, and 
                <em> fraud protection</em> with 99.8% success rate.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center mt-16"
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl text-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your AI-Powered Migration Journey Today
          </motion.button>
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{
            duration: 10,
            repeat: Infinity
          }}
        />
      </div>
    </section>
  );
};

export default SEOEnhancedSection;
