'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import {
  MapPin, Users, DollarSign, GraduationCap, Briefcase, Home,
  ArrowRight, CheckCircle, Star, Clock, Award, Globe,
  Bot, Brain, Zap, Shield, Target, TrendingUp
} from 'lucide-react';

// Canada immigration programs
const programs = [
  {
    id: 'express-entry',
    title: 'Express Entry',
    description: 'Federal economic immigration program for skilled workers',
    requirements: ['CLB 7+', 'Bachelor\'s Degree', '1+ Years Experience', 'Age 25-35'],
    processingTime: '6-8 months',
    minScore: '470+ CRS',
    successRate: '98.5%',
    color: 'from-red-500 to-red-600'
  },
  {
    id: 'pnp',
    title: 'Provincial Nominee Program',
    description: 'Province-specific immigration programs',
    requirements: ['Job Offer', 'Provincial Nomination', 'Language Proficiency', 'Work Experience'],
    processingTime: '8-12 months',
    minScore: '400+ CRS',
    successRate: '96.8%',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'family-sponsorship',
    title: 'Family Sponsorship',
    description: 'Sponsor eligible family members to Canada',
    requirements: ['Canadian Citizen/PR', 'Financial Support', 'Relationship Proof', 'Undertaking'],
    processingTime: '12-24 months',
    minScore: 'N/A',
    successRate: '94.2%',
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'caregiver',
    title: 'Caregiver Program',
    description: 'Immigration pathway for caregivers',
    requirements: ['Education Credential', '1 Year Training', 'Language Requirement', 'Job Offer'],
    processingTime: '6-10 months',
    minScore: 'CLB 5+',
    successRate: '92.7%',
    color: 'from-purple-500 to-purple-600'
  }
];

// Canadian provinces data
const provinces = [
  { name: 'Ontario', programs: ['OINP', 'Express Entry'], slots: '9,000+', flag: '🏛️' },
  { name: 'British Columbia', programs: ['BC PNP', 'Tech Pilot'], slots: '8,500+', flag: '🏔️' },
  { name: 'Alberta', programs: ['AINP', 'Rural Renewal'], slots: '6,250+', flag: '🌾' },
  { name: 'Saskatchewan', programs: ['SINP', 'Entrepreneur'], slots: '5,000+', flag: '🌾' },
  { name: 'Manitoba', programs: ['MPNP', 'Skilled Worker'], slots: '5,000+', flag: '🌾' },
  { name: 'Quebec', programs: ['QSW', 'Entrepreneur'], slots: '43,500+', flag: '⚜️' }
];

// Benefits of immigrating to Canada
const benefits = [
  {
    icon: Shield,
    title: 'Universal Healthcare',
    description: 'Comprehensive healthcare coverage for all residents'
  },
  {
    icon: GraduationCap,
    title: 'World-Class Education',
    description: 'Free public education and top-ranked universities'
  },
  {
    icon: DollarSign,
    title: 'Strong Economy',
    description: 'Stable economy with high employment rates'
  },
  {
    icon: Users,
    title: 'Multicultural Society',
    description: 'Welcoming and diverse communities'
  },
  {
    icon: Globe,
    title: 'Global Mobility',
    description: 'Canadian passport provides visa-free travel to 185+ countries'
  },
  {
    icon: Award,
    title: 'Quality of Life',
    description: 'Consistently ranked among the best countries to live'
  }
];

export default function CanadaPagePremium() {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const programsRef = useRef<HTMLDivElement>(null);
  const provincesRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const programsInView = useInView(programsRef, { once: true, amount: 0.2 });
  const provincesInView = useInView(provincesRef, { once: true, amount: 0.2 });
  const benefitsInView = useInView(benefitsRef, { once: true, amount: 0.2 });

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-950 to-neutral-900 text-white">
      {/* Canadian Flag Animation Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-red-900/30" />
        
        {/* Animated Maple Leaves */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute text-6xl opacity-10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                rotate: [0, 360],
                y: [0, -50, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            >
              🍁
            </motion.div>
          ))}
        </div>

        {/* Grid Pattern */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(220, 38, 127, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(220, 38, 127, 0.3) 1px, transparent 1px)
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
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-red-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-white rounded-lg flex items-center justify-center text-2xl">
                🍁
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent">
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
        {/* Hero Section */}
        <section ref={heroRef} className="min-h-screen flex items-center justify-center pt-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className="text-center max-w-5xl mx-auto"
            >
              {/* Canadian Flag Animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.2 }}
                className="relative w-32 h-32 mx-auto mb-8"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                  }}
                  transition={{ 
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="w-32 h-32 rounded-full bg-gradient-to-r from-red-500 via-white to-red-500 flex items-center justify-center shadow-2xl text-6xl"
                >
                  🍁
                </motion.div>
                
                {/* Pulsing rings */}
                {[1, 2, 3].map((ring) => (
                  <motion.div
                    key={ring}
                    className="absolute border border-red-400/30 rounded-full"
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
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                <span className="text-white">Immigrate to </span>
                <span className="bg-gradient-to-r from-red-400 via-white to-red-400 bg-clip-text text-transparent">
                  Canada
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-12">
                Discover your pathway to Canadian permanent residence with our AI-powered analysis. 
                <span className="text-red-400 font-semibold"> Join 400,000+ newcomers</span> who chose Canada in 2024.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                <div className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
                  <div className="text-3xl font-bold text-red-400 mb-2">465K</div>
                  <div className="text-white/60">Immigration Target 2025</div>
                </div>
                <div className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
                  <div className="text-3xl font-bold text-white mb-2">6-8</div>
                  <div className="text-white/60">Months Processing</div>
                </div>
                <div className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
                  <div className="text-3xl font-bold text-green-400 mb-2">98.5%</div>
                  <div className="text-white/60">Success Rate</div>
                </div>
                <div className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
                  <div className="text-3xl font-bold text-blue-400 mb-2">80+</div>
                  <div className="text-white/60">Immigration Programs</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Immigration Programs */}
        <section ref={programsRef} className="py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={programsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-white">Immigration </span>
                <span className="bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent">
                  Programs
                </span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Multiple pathways to Canadian permanent residence tailored to your profile
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programs.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={programsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-red-500/30 transition-all duration-300"
                >
                  {/* Program Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${program.color} flex items-center justify-center text-white font-bold text-2xl`}>
                      🍁
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{program.title}</h3>
                      <p className="text-white/60">{program.description}</p>
                    </div>
                  </div>

                  {/* Requirements */}
                  <div className="space-y-2 mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Requirements:</h4>
                    {program.requirements.map((req, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-white/70">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-sm">{req}</span>
                      </div>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-white/5 rounded-xl">
                      <div className="text-sm font-bold text-green-400 mb-1">{program.successRate}</div>
                      <div className="text-white/60 text-xs">Success</div>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded-xl">
                      <div className="text-sm font-bold text-blue-400 mb-1">{program.processingTime}</div>
                      <div className="text-white/60 text-xs">Timeline</div>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded-xl">
                      <div className="text-sm font-bold text-purple-400 mb-1">{program.minScore}</div>
                      <div className="text-white/60 text-xs">Min Score</div>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-red-500/20 to-white/20 border border-red-500/30 rounded-xl text-white font-medium hover:from-red-500/30 hover:to-white/30 transition-all">
                    Check Eligibility
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Provinces Section */}
        <section ref={provincesRef} className="py-32 bg-gradient-to-b from-transparent to-black/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={provincesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-white">Provincial </span>
                <span className="bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent">
                  Opportunities
                </span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Explore province-specific immigration programs and opportunities
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {provinces.map((province, index) => (
                <motion.div
                  key={province.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={provincesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                  className="p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-red-500/30 transition-all"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{province.flag}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{province.name}</h3>
                    <div className="text-red-400 font-semibold mb-4">{province.slots} slots annually</div>
                    <div className="space-y-2">
                      {province.programs.map((program, idx) => (
                        <div key={idx} className="px-3 py-2 bg-white/5 rounded-lg text-white/80 text-sm">
                          {program}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section ref={benefitsRef} className="py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-white">Why Choose </span>
                <span className="bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent">
                  Canada
                </span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Discover the benefits of making Canada your new home
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                  className="text-center p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-red-500/30 transition-all"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-red-500 to-white rounded-2xl flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-white/70 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-12 md:p-16"
            >
              <div className="text-6xl mb-6">🍁</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">Ready for </span>
                <span className="bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent">
                  Canada
                </span>
                <span className="text-white">?</span>
              </h2>
              
              <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
                Start your Canadian immigration journey today with our AI-powered assessment. 
                Get personalized recommendations for your optimal pathway to Canada.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link href="/ai-tools/eligibility-checker">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(220, 38, 127, 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 bg-gradient-to-r from-red-600 via-white to-red-600 rounded-full text-red-800 font-bold text-xl shadow-2xl"
                  >
                    <span className="flex items-center gap-3">
                      <Brain className="w-6 h-6" />
                      Check Canada Eligibility
                      <ArrowRight className="w-6 h-6" />
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
