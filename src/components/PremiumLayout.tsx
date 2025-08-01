'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Bot, ArrowLeft, Home } from 'lucide-react';

interface PremiumLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  showBackButton?: boolean;
  backUrl?: string;
}

export default function PremiumLayout({ 
  children, 
  title = "VANHSYA Premium", 
  subtitle = "AI-Powered Immigration Solutions",
  showBackButton = true,
  backUrl = "/"
}: PremiumLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-950 to-neutral-900 text-white">
      {/* AI Neural Network Background */}
      <div className="fixed inset-0 pointer-events-none">
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

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-blue-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                VANHSYA
              </span>
            </Link>
            
            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
              <Link href="/services" className="text-white/80 hover:text-white transition-colors">Services</Link>
              <Link href="/countries" className="text-white/80 hover:text-white transition-colors">Countries</Link>
              <Link href="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-10">
        {/* Header Section */}
        <section className="pt-24 pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              {showBackButton && (
                <div className="flex justify-center mb-6">
                  <Link href={backUrl}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-all"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </motion.button>
                  </Link>
                </div>
              )}

              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-xl mb-6">
                <Bot className="w-5 h-5 text-blue-400" />
                <span className="text-blue-300 font-medium">Premium Experience</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {title}
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-8">
                {subtitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12"
            >
              {children}
            </motion.div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-12"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Need Expert Guidance?
              </h3>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                Our AI-powered platform combined with expert consultation ensures your immigration success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/consultation">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 rounded-full text-white font-bold shadow-2xl"
                  >
                    Get Free Consultation
                  </motion.button>
                </Link>
                <Link href="/">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-all"
                  >
                    <span className="flex items-center gap-2">
                      <Home className="w-5 h-5" />
                      Return Home
                    </span>
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
