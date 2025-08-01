'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import {
  MapPin, Users, DollarSign, GraduationCap, Briefcase, Home,
  ArrowRight, CheckCircle, Star, Clock, Award, Globe,
  Bot, Brain, Zap, Shield, Target, TrendingUp
} from 'lucide-react';

// UK immigration programs
const programs = [
  {
    id: 'skilled-worker',
    title: 'Skilled Worker Visa',
    description: 'Points-based system for skilled workers with job offers',
    requirements: ['Job Offer', 'English B1+', 'Salary £25,600+', 'Sponsorship License'],
    processingTime: '3-8 weeks',
    minScore: '70 points',
    successRate: '95.2%',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'global-talent',
    title: 'Global Talent Visa',
    description: 'For exceptional talent in science, engineering, humanities, medicine, digital technology, or arts',
    requirements: ['Exceptional Talent/Promise', 'Endorsement', 'English Proficiency', 'Financial Requirements'],
    processingTime: '8 weeks',
    minScore: 'Endorsement Required',
    successRate: '88.9%',
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 'student-visa',
    title: 'Student Visa',
    description: 'Study at UK universities and colleges',
    requirements: ['CAS', 'English B2+', 'Financial Proof', 'Genuine Student'],
    processingTime: '3 weeks',
    minScore: 'CAS Required',
    successRate: '97.1%',
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'innovator-founder',
    title: 'Innovator Founder Visa',
    description: 'For innovative business founders',
    requirements: ['Innovative Business', '£50,000 Investment', 'Endorsement', 'English B2+'],
    processingTime: '8 weeks',
    minScore: 'Endorsement Required',
    successRate: '82.4%',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    id: 'family-visa',
    title: 'Family Visa',
    description: 'Join family members in the UK',
    requirements: ['Relationship Evidence', '£18,600+ Income', 'English A1+', 'Accommodation'],
    processingTime: '12 weeks',
    minScore: 'Relationship Proof',
    successRate: '91.3%',
    color: 'from-pink-500 to-pink-600'
  },
  {
    id: 'ancestry-visa',
    title: 'UK Ancestry Visa',
    description: 'For Commonwealth citizens with UK ancestry',
    requirements: ['UK Ancestry', 'Commonwealth Citizen', '£1,890 Funds', 'Work Intention'],
    processingTime: '3 weeks',
    minScore: 'Ancestry Proof',
    successRate: '94.7%',
    color: 'from-indigo-500 to-indigo-600'
  }
];

// UK statistics
const ukStats = {
  population: '67.8M',
  gdpPerCapita: '£32,406',
  unemploymentRate: '3.8%',
  languagesSpoken: 'English',
  currency: 'GBP (£)',
  timeZone: 'GMT/BST',
  majorCities: ['London', 'Manchester', 'Birmingham', 'Edinburgh', 'Glasgow'],
  averageTemp: '2°C to 22°C',
  visaProcessingTime: '3-12 weeks',
  successRate: '92.8%'
};

// AI-powered features
const aiFeatures = [
  {
    icon: Brain,
    title: 'Eligibility Calculator',
    description: 'AI-powered points calculator for UK immigration'
  },
  {
    icon: Bot,
    title: 'Document Checker',
    description: 'Automated document verification and requirements'
  },
  {
    icon: Zap,
    title: 'Fast Processing',
    description: 'Expedited application review and submission'
  },
  {
    icon: Shield,
    title: 'Success Guarantee',
    description: '99.1% success rate with our AI optimization'
  }
];

export default function UKPremium() {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('programs');
  
  const heroRef = useRef<HTMLDivElement>(null);
  const programsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const programsInView = useInView(programsRef, { once: true, amount: 0.2 });
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Neural Network Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.15) 0%, transparent 50%),
                           radial-gradient(circle at 40% 80%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)`
        }} />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="pt-20 pb-16 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={heroInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center gap-2 mb-6"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">🇬🇧</span>
                </div>
                <div className="text-left">
                  <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    United Kingdom
                  </h1>
                  <p className="text-slate-300 text-lg">Gateway to Europe & Global Opportunities</p>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto"
              >
                Discover premium immigration pathways to the UK with our AI-powered guidance system. 
                From skilled worker visas to global talent programs, we'll help you navigate your journey to British residence.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  href="/consultation?country=uk"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 inline-flex items-center gap-2"
                >
                  <Bot className="w-5 h-5" />
                  Start AI Assessment
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/smart-pathway"
                  className="border border-blue-400/30 text-blue-400 px-8 py-4 rounded-xl font-semibold hover:bg-blue-400/10 transition-all duration-300 inline-flex items-center gap-2"
                >
                  <Brain className="w-5 h-5" />
                  Explore Smart Pathway
                </Link>
              </motion.div>
            </div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            >
              <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-3xl font-bold text-blue-400 mb-2">{ukStats.successRate}</div>
                <div className="text-slate-300 text-sm">Success Rate</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-3xl font-bold text-purple-400 mb-2">{ukStats.visaProcessingTime}</div>
                <div className="text-slate-300 text-sm">Processing Time</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{ukStats.gdpPerCapita}</div>
                <div className="text-slate-300 text-sm">GDP Per Capita</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-3xl font-bold text-green-400 mb-2">{ukStats.unemploymentRate}</div>
                <div className="text-slate-300 text-sm">Unemployment</div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Immigration Programs */}
        <motion.section
          ref={programsRef}
          initial={{ opacity: 0 }}
          animate={programsInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="py-16 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                UK Immigration Programs
              </h2>
              <p className="text-slate-300 text-lg max-w-3xl mx-auto">
                Explore comprehensive immigration pathways to the United Kingdom with detailed requirements and AI-powered guidance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={programsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProgram(selectedProgram === program.id ? null : program.id)}
                >
                  <div className="h-full p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
                    <div className={`w-full h-2 rounded-full bg-gradient-to-r ${program.color} mb-6`} />
                    
                    <h3 className="text-xl font-bold text-white mb-3">{program.title}</h3>
                    <p className="text-slate-300 mb-4 text-sm">{program.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400 text-sm">Processing Time:</span>
                        <span className="text-blue-400 font-semibold text-sm">{program.processingTime}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400 text-sm">Min Score:</span>
                        <span className="text-purple-400 font-semibold text-sm">{program.minScore}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400 text-sm">Success Rate:</span>
                        <span className="text-green-400 font-semibold text-sm">{program.successRate}</span>
                      </div>
                    </div>

                    {selectedProgram === program.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-t border-white/10 pt-4 mt-4"
                      >
                        <h4 className="text-white font-semibold mb-2">Requirements:</h4>
                        <ul className="space-y-1">
                          {program.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="text-slate-300 text-sm flex items-center gap-2">
                              <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* AI Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={programsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {aiFeatures.map((feature, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <feature.icon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                  <p className="text-slate-300 text-sm">{feature.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-500/20"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Start Your UK Immigration Journey?
              </h2>
              <p className="text-slate-300 mb-8 text-lg">
                Get personalized guidance from our AI-powered immigration experts and increase your chances of success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/consultation?country=uk"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 inline-flex items-center gap-2 justify-center"
                >
                  <Bot className="w-5 h-5" />
                  Get Expert Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/smart-pathway"
                  className="border border-blue-400/30 text-blue-400 px-8 py-4 rounded-xl font-semibold hover:bg-blue-400/10 transition-all duration-300 inline-flex items-center gap-2 justify-center"
                >
                  <Target className="w-5 h-5" />
                  Explore All Options
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
