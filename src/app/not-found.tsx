'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, Search, ArrowLeft, Bot, Globe } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-950 to-neutral-900 text-white flex items-center justify-center">
      {/* AI Neural Network Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/30" />
        
        {/* Animated Grid */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-blue-400/40 to-purple-400/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [0.5, 2, 0.5],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 6,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
        {/* 404 Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="mb-8"
        >
          <div className="relative w-32 h-32 mx-auto">
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 flex items-center justify-center shadow-2xl"
            >
              <Search className="w-16 h-16 text-white" />
            </motion.div>
            
            {/* Pulsing rings */}
            {[1, 2, 3].map((ring) => (
              <motion.div
                key={ring}
                className="absolute border border-blue-400/30 rounded-full"
                style={{ 
                  width: `${ring * 60}px`, 
                  height: `${ring * 60}px`,
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.1, 0.5],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  delay: ring * 0.5,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              404
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          
          <p className="text-lg text-white/80 mb-8 leading-relaxed">
            The page you're looking for seems to have vanished into the digital cosmos. 
            Our AI is searching through infinite pathways to help you find your destination.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 rounded-full text-white font-bold text-lg shadow-2xl border border-blue-400/30"
            >
              <span className="flex items-center gap-3">
                <Home className="w-5 h-5" />
                Return Home
              </span>
            </motion.button>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white font-medium text-lg hover:bg-white/20 transition-all"
          >
            <span className="flex items-center gap-3">
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </span>
          </button>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { href: '/services', label: 'Services', icon: Bot },
            { href: '/countries', label: 'Countries', icon: Globe },
            { href: '/ai-tools', label: 'AI Tools', icon: Search },
            { href: '/consultation', label: 'Consultation', icon: Home },
          ].map((link, index) => (
            <Link key={link.href} href={link.href}>
              <motion.div
                whileHover={{ y: -5, scale: 1.05 }}
                className="p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-center hover:border-blue-500/30 transition-all group"
              >
                <link.icon className="w-6 h-6 mx-auto mb-2 text-blue-400 group-hover:text-white transition-colors" />
                <span className="text-white/80 group-hover:text-white transition-colors text-sm">
                  {link.label}
                </span>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-white/50 text-sm"
        >
          <p>Need help? Our AI-powered support is always here to assist you.</p>
        </motion.div>
      </div>
    </div>
  );
}
