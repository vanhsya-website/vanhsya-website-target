'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import VisaHero from './components/VisaHero';
import HowAIThinks from './components/HowAIThinks';
import VisaMatrix from './components/VisaMatrix';
import SuccessStories from './components/SuccessStories';
import FinalCTA from './components/FinalCTA';

export default function SmartPathwayPage() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Global Ambient Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Cosmic Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/30"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
        
        {/* Aurora Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5 animate-pulse"></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        <VisaHero />
        <HowAIThinks />
        <VisaMatrix />
        <SuccessStories />
        <FinalCTA />
      </main>
    </div>
  );
}
