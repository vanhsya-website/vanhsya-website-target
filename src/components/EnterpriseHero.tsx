'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Shield, Award, Users, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';

interface EnterpriseHeroProps {
  onCTAClick?: () => void;
}

const EnterpriseHero: React.FC<EnterpriseHeroProps> = ({ onCTAClick }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const stats = [
    { icon: Users, value: '50K+', label: 'Successful Applications' },
    { icon: Globe, value: '195+', label: 'Countries Covered' },
    { icon: Shield, value: '99.8%', label: 'Success Rate' },
    { icon: Award, value: '15+', label: 'Years Experience' }
  ];

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="animate-pulse">
          <div className="h-8 bg-slate-700 rounded w-64 mb-4"></div>
          <div className="h-4 bg-slate-700 rounded w-96"></div>
        </div>
      </div>
    );
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/80 to-indigo-900/90"></div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-7xl mx-auto"
        >
          {/* Main Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Text Content */}
            <motion.div variants={fadeInUp} className="space-y-8">
              {/* Trust Badge */}
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm"
              >
                <Shield className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-200 font-medium">
                  Trusted by 50,000+ immigrants worldwide
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.div variants={fadeInUp} className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                  Your Global{' '}
                  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 bg-clip-text text-transparent">
                    Immigration
                  </span>{' '}
                  Partner
                </h1>
                <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed max-w-2xl">
                  Transform your immigration journey with AI-powered guidance, expert consultation, and seamless application management across 195+ countries.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  onClick={onCTAClick}
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 active:scale-95"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start Your Journey
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-xl opacity-0 transition-opacity group-hover:opacity-100"></div>
                </motion.button>

                <motion.button
                  onClick={() => setIsVideoPlaying(true)}
                  className="group px-8 py-4 border border-slate-600 rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:bg-white/5 hover:border-white/20 backdrop-blur-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center gap-2">
                    <Play className="w-5 h-5 transition-transform group-hover:scale-110" />
                    Watch Demo
                  </span>
                </motion.button>
              </motion.div>

              {/* Social Proof */}
              <motion.div variants={fadeInUp} className="pt-8">
                <p className="text-sm text-slate-400 mb-4">Trusted by leading organizations</p>
                <div className="flex flex-wrap items-center gap-8 opacity-60">
                  {['Microsoft', 'Google', 'Amazon', 'Meta', 'Apple'].map((company, index) => (
                    <div key={index} className="text-slate-300 font-medium text-lg">
                      {company}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Visual Content */}
            <motion.div variants={fadeInUp} className="relative">
              {/* Main Dashboard Preview */}
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 backdrop-blur-xl border border-slate-700/50 shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-slate-400 text-sm">VANHSYA Dashboard</div>
                </div>

                {/* Dashboard Content */}
                <div className="space-y-6">
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">Application Progress</span>
                      <span className="text-blue-400">87%</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                        initial={{ width: 0 }}
                        animate={{ width: '87%' }}
                        transition={{ duration: 2, delay: 1 }}
                      ></motion.div>
                    </div>
                  </div>

                  {/* Status Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                      <div className="text-blue-400 text-sm font-medium">Documents</div>
                      <div className="text-white text-xl font-bold">24/28</div>
                    </div>
                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                      <div className="text-green-400 text-sm font-medium">Verified</div>
                      <div className="text-white text-xl font-bold">18/24</div>
                    </div>
                  </div>

                  {/* Recent Activity */}
                  <div className="space-y-3">
                    <div className="text-slate-300 text-sm font-medium">Recent Activity</div>
                    <div className="space-y-2">
                      {[
                        { status: 'completed', text: 'Medical exam scheduled' },
                        { status: 'in-progress', text: 'Background check in progress' },
                        { status: 'pending', text: 'Interview pending' }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3 text-sm">
                          <div className={`w-2 h-2 rounded-full ${
                            item.status === 'completed' ? 'bg-green-500' :
                            item.status === 'in-progress' ? 'bg-yellow-500' : 'bg-slate-500'
                          }`}></div>
                          <span className="text-slate-300">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-4 backdrop-blur-xl shadow-xl">
                <div className="text-white text-sm font-medium">Success Rate</div>
                <div className="text-white text-2xl font-bold">99.8%</div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-teal-600 to-blue-600 rounded-xl p-4 backdrop-blur-xl shadow-xl">
                <div className="text-white text-sm font-medium">Processing Time</div>
                <div className="text-white text-2xl font-bold">30% Faster</div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div variants={fadeInUp} className="mt-20 pt-12 border-t border-slate-700/50">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/10 rounded-xl mb-4 group-hover:bg-blue-500/20 transition-colors">
                    <stat.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setIsVideoPlaying(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-black rounded-2xl overflow-hidden max-w-4xl w-full aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            >
              ×
            </button>
            <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
              <div className="text-center">
                <Play className="w-16 h-16 text-white/50 mx-auto mb-4" />
                <p className="text-white/70">Demo video would play here</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default EnterpriseHero;
