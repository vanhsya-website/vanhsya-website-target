'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import {
  Calendar, Video, Phone, MapPin, Clock, ArrowRight, CheckCircle, Star, Shield,
  Globe, Zap, Target, Brain, Bot, Network, TrendingUp, Award, Mail, User,
  Users, GraduationCap, Briefcase, Heart, Building, Sparkles, UserCheck,
} from 'lucide-react';

// Consultation types
const consultationTypes = [
  {
    id: 'video',
    title: 'Video Consultation',
    icon: Video,
    description: 'Face-to-face consultation via secure video call',
    color: 'from-blue-500 to-blue-600',
    duration: '60 minutes',
    price: 'Free',
    features: ['Screen sharing', 'Document review', 'Recording available', 'Multi-language support'],
    popular: true,
  },
  {
    id: 'phone',
    title: 'Phone Consultation',
    icon: Phone,
    description: 'Direct phone consultation with expert advisor',
    color: 'from-emerald-500 to-emerald-600',
    duration: '45 minutes',
    price: 'Free',
    features: ['Immediate availability', 'Call recording', 'Follow-up email', 'Flexible timing'],
    popular: false,
  },
  {
    id: 'premium',
    title: 'Premium In-Person',
    icon: MapPin,
    description: 'Face-to-face meeting at our premium offices',
    color: 'from-purple-500 to-purple-600',
    duration: '90 minutes',
    price: '$99',
    features: ['Document verification', 'Comprehensive assessment', 'Immigration roadmap', 'Priority scheduling'],
    popular: false,
  },
];

// Expert consultants
const consultants = [
  {
    name: 'Sarah Chen',
    title: 'Senior Immigration Consultant',
    image: '/images/consultants/sarah.jpg',
    specialties: ['Express Entry', 'PNP', 'Business Immigration'],
    experience: '12+ years',
    languages: ['English', 'Mandarin', 'French'],
    rating: 4.9,
    consultations: '5000+',
  },
  {
    name: 'Michael Rodriguez',
    title: 'AI Immigration Specialist',
    image: '/images/consultants/michael.jpg',
    specialties: ['Student Visas', 'Work Permits', 'Family Sponsorship'],
    experience: '8+ years',
    languages: ['English', 'Spanish', 'Portuguese'],
    rating: 4.8,
    consultations: '3500+',
  },
  {
    name: 'Dr. Priya Patel',
    title: 'Immigration Law Expert',
    image: '/images/consultants/priya.jpg',
    specialties: ['Complex Cases', 'Appeals', 'Investor Immigration'],
    experience: '15+ years',
    languages: ['English', 'Hindi', 'Gujarati'],
    rating: 4.9,
    consultations: '6000+',
  },
];

// Available time slots
const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
  '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'
];

// Stats
const consultationStats = {
  consultations: '0',
  satisfaction: '98.5%',
  countries: '50+',
  languages: '20+',
  experts: '25+',
  avgRating: '4.9/5',
};

export default function ConsultationPage() {
  const [selectedType, setSelectedType] = useState(consultationTypes[0]);
  const [selectedConsultant, setSelectedConsultant] = useState(consultants[0]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [step, setStep] = useState(1);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const typesRef = useRef<HTMLDivElement>(null);
  const consultantsRef = useRef<HTMLDivElement>(null);
  const bookingRef = useRef<HTMLDivElement>(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const typesInView = useInView(typesRef, { once: true, amount: 0.2 });
  const consultantsInView = useInView(consultantsRef, { once: true, amount: 0.2 });
  const bookingInView = useInView(bookingRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <div ref={containerRef} className='min-h-screen bg-gradient-to-b from-black via-neutral-950 to-neutral-900 text-white overflow-hidden'>
      {/* AI Neural Network Background */}
      <motion.div style={{ y: backgroundY }} className='fixed inset-0 pointer-events-none'>
        <div className='absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/30' />
        <div className='absolute inset-0'>
          {Array.from({ length: 80 }, (_, i) => (
            <motion.div
              key={i}
              className='absolute w-1 h-1 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full'
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        {/* Calendar and consultation icons */}
        <div className='absolute inset-0'>
          {Array.from({ length: 12 }, (_, i) => (
            <motion.div
              key={`consultation-${i}`}
              className='absolute text-4xl opacity-10'
              style={{
                left: `${5 + (i * 8)}%`,
                top: `${10 + (i * 6)}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                rotate: [0, 10, -10, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            >
              {i % 3 === 0 ? '📅' : i % 3 === 1 ? '🎥' : '💬'}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Navigation */}
      <nav className='fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-blue-500/10'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <Link href='/' className='flex items-center gap-2'>
              <div className='w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center'>
                <Bot className='w-6 h-6 text-white' />
              </div>
              <span className='text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                VANHSYA
              </span>
            </Link>
            
            <div className='hidden md:flex items-center gap-6'>
              <Link href='/' className='text-white/80 hover:text-white transition-colors'>Home</Link>
              <Link href='/services' className='text-white/80 hover:text-white transition-colors'>Services</Link>
              <Link href='/countries' className='text-white/80 hover:text-white transition-colors'>Countries</Link>
              <Link href='/contact' className='text-white/80 hover:text-white transition-colors'>Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className='relative z-10'>
        {/* Hero Section */}
        <section ref={heroRef} className='min-h-screen flex items-center justify-center relative pt-16'>
          <motion.div style={{ y: heroY }} className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center max-w-6xl mx-auto'>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, type: 'spring' }}
                className='inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-xl mb-8'
              >
                <Calendar className='w-6 h-6 text-blue-400' />
                <span className='text-blue-300 font-medium'>Expert Consultation</span>
                <span className='text-4xl'>💬</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                className='text-5xl md:text-7xl lg:text-8xl font-bold mb-8'
              >
                <span className='bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-pulse'>
                  Expert
                </span>
                <br />
                <span className='text-white'>Consultation</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className='text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-4xl mx-auto'
              >
                Get personalized immigration guidance from certified experts. 
                Book your free consultation and start your journey with confidence.
              </motion.p>

              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
                className='grid grid-cols-2 md:grid-cols-3 gap-8 mb-12'
              >
                {Object.entries(consultationStats).slice(0, 6).map(([key, value], index) => (
                  <div key={key} className='text-center'>
                    <div className={`text-3xl md:text-4xl font-bold mb-2 ${
                      index % 3 === 0 ? 'text-blue-400' : 
                      index % 3 === 1 ? 'text-purple-400' : 'text-emerald-400'
                    }`}>
                      {value}
                    </div>
                    <div className='text-white/60 text-sm capitalize'>{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
                className='flex flex-col sm:flex-row gap-6 justify-center items-center'
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className='px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 rounded-full text-white font-bold text-lg shadow-2xl border border-blue-400/30'
                >
                  <span className='flex items-center gap-2'>
                    <Calendar className='w-6 h-6' />
                    Book Free Consultation
                    <ArrowRight className='w-6 h-6' />
                  </span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white font-medium text-lg hover:bg-white/20 transition-all'
                >
                  <span className='flex items-center gap-2'>
                    <Phone className='w-6 h-6' />
                    Call Now
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Consultation Types */}
        <section ref={typesRef} className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={typesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-center mb-20'
            >
              <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='text-white'>Consultation </span>
                <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                  Options
                </span>
              </h2>
              <p className='text-xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
                Choose the consultation format that works best for you.
              </p>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {consultationTypes.map((type, index) => (
                <motion.div
                  key={type.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={typesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className='group cursor-pointer relative'
                  onClick={() => setSelectedType(type)}
                >
                  {type.popular && (
                    <div className='absolute -top-4 left-1/2 transform -translate-x-1/2 z-10'>
                      <span className='bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold'>
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border rounded-3xl p-8 h-full transition-all duration-500 ${
                    selectedType.id === type.id ? 'border-blue-500/50 shadow-lg shadow-blue-500/20' : 'border-white/10 hover:border-blue-500/30'
                  }`}>
                    <div className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <type.icon className='w-8 h-8 text-white' />
                    </div>
                    <h3 className='text-xl font-bold text-white mb-4'>{type.title}</h3>
                    <p className='text-white/70 leading-relaxed mb-6'>{type.description}</p>
                    
                    <div className='space-y-3 mb-6'>
                      <div className='flex justify-between'>
                        <span className='text-white/60'>Duration:</span>
                        <span className='text-white'>{type.duration}</span>
                      </div>
                      <div className='flex justify-between'>
                        <span className='text-white/60'>Price:</span>
                        <span className='text-blue-400 font-bold'>{type.price}</span>
                      </div>
                    </div>

                    <div className='space-y-2'>
                      {type.features.map((feature, idx) => (
                        <div key={idx} className='flex items-center gap-2 text-sm text-white/70'>
                          <CheckCircle className='w-4 h-4 text-emerald-400' />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Expert Consultants */}
        <section ref={consultantsRef} className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={consultantsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-center mb-20'
            >
              <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                  Expert
                </span>
                <br />
                <span className='text-white'>Consultants</span>
              </h2>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {consultants.map((consultant, index) => (
                <motion.div
                  key={consultant.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={consultantsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className='group cursor-pointer'
                  onClick={() => setSelectedConsultant(consultant)}
                >
                  <div className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border rounded-3xl p-8 h-full transition-all duration-500 ${
                    selectedConsultant.name === consultant.name ? 'border-blue-500/50 shadow-lg shadow-blue-500/20' : 'border-white/10 hover:border-blue-500/30'
                  }`}>
                    <div className='w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center'>
                      <User className='w-12 h-12 text-white' />
                    </div>
                    
                    <h3 className='text-xl font-bold text-white mb-2 text-center'>{consultant.name}</h3>
                    <p className='text-blue-400 text-center mb-4'>{consultant.title}</p>
                    
                    <div className='space-y-3 mb-6'>
                      <div className='flex justify-between text-sm'>
                        <span className='text-white/60'>Experience:</span>
                        <span className='text-white'>{consultant.experience}</span>
                      </div>
                      <div className='flex justify-between text-sm'>
                        <span className='text-white/60'>Rating:</span>
                        <span className='text-yellow-400 flex items-center gap-1'>
                          <Star className='w-4 h-4 fill-current' />
                          {consultant.rating}
                        </span>
                      </div>
                      <div className='flex justify-between text-sm'>
                        <span className='text-white/60'>Consultations:</span>
                        <span className='text-emerald-400'>{consultant.consultations}</span>
                      </div>
                    </div>

                    <div className='mb-6'>
                      <h4 className='text-white font-semibold mb-2 text-sm'>Specialties:</h4>
                      <div className='flex flex-wrap gap-2'>
                        {consultant.specialties.map((specialty, idx) => (
                          <span key={idx} className='px-2 py-1 bg-blue-500/20 text-blue-400 rounded-lg text-xs'>
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className='text-white font-semibold mb-2 text-sm'>Languages:</h4>
                      <div className='flex flex-wrap gap-2'>
                        {consultant.languages.map((language, idx) => (
                          <span key={idx} className='px-2 py-1 bg-purple-500/20 text-purple-400 rounded-lg text-xs'>
                            {language}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Interface */}
        <section ref={bookingRef} className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={bookingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-center mb-20'
            >
              <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                  Book Your
                </span>
                <br />
                <span className='text-white'>Consultation</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={bookingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className='max-w-4xl mx-auto'
            >
              <div className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                  {/* Selected Options Summary */}
                  <div className='space-y-6'>
                    <h3 className='text-2xl font-bold text-white mb-6'>Consultation Summary</h3>
                    
                    <div className='bg-white/5 rounded-2xl p-6 border border-white/10'>
                      <h4 className='text-white font-semibold mb-3'>Consultation Type</h4>
                      <div className='flex items-center gap-3'>
                        <selectedType.icon className='w-6 h-6 text-blue-400' />
                        <div>
                          <div className='text-white font-medium'>{selectedType.title}</div>
                          <div className='text-white/60 text-sm'>{selectedType.duration} • {selectedType.price}</div>
                        </div>
                      </div>
                    </div>

                    <div className='bg-white/5 rounded-2xl p-6 border border-white/10'>
                      <h4 className='text-white font-semibold mb-3'>Consultant</h4>
                      <div className='flex items-center gap-3'>
                        <div className='w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center'>
                          <User className='w-6 h-6 text-white' />
                        </div>
                        <div>
                          <div className='text-white font-medium'>{selectedConsultant.name}</div>
                          <div className='text-white/60 text-sm'>{selectedConsultant.title}</div>
                        </div>
                      </div>
                    </div>

                    <div className='bg-white/5 rounded-2xl p-6 border border-white/10'>
                      <h4 className='text-white font-semibold mb-3'>What to Expect</h4>
                      <div className='space-y-2'>
                        <div className='flex items-center gap-2 text-sm text-white/70'>
                          <CheckCircle className='w-4 h-4 text-emerald-400' />
                          <span>Personalized immigration assessment</span>
                        </div>
                        <div className='flex items-center gap-2 text-sm text-white/70'>
                          <CheckCircle className='w-4 h-4 text-emerald-400' />
                          <span>Eligibility evaluation for target countries</span>
                        </div>
                        <div className='flex items-center gap-2 text-sm text-white/70'>
                          <CheckCircle className='w-4 h-4 text-emerald-400' />
                          <span>Detailed immigration pathway roadmap</span>
                        </div>
                        <div className='flex items-center gap-2 text-sm text-white/70'>
                          <CheckCircle className='w-4 h-4 text-emerald-400' />
                          <span>Timeline and cost breakdown</span>
                        </div>
                        <div className='flex items-center gap-2 text-sm text-white/70'>
                          <CheckCircle className='w-4 h-4 text-emerald-400' />
                          <span>Next steps and action plan</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Booking Form */}
                  <div className='space-y-6'>
                    <h3 className='text-2xl font-bold text-white mb-6'>Book Your Slot</h3>
                    
                    <div>
                      <label className='block text-white font-medium mb-3'>Select Date</label>
                      <input
                        type='date'
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50 backdrop-blur-xl'
                      />
                    </div>

                    <div>
                      <label className='block text-white font-medium mb-3'>Select Time</label>
                      <div className='grid grid-cols-2 gap-2'>
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                              selectedTime === time
                                ? 'bg-blue-500 text-white'
                                : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className='block text-white font-medium mb-3'>Your Details</label>
                      <div className='space-y-4'>
                        <input
                          type='text'
                          placeholder='Full Name'
                          className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-500/50 backdrop-blur-xl'
                        />
                        <input
                          type='email'
                          placeholder='Email Address'
                          className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-500/50 backdrop-blur-xl'
                        />
                        <input
                          type='tel'
                          placeholder='Phone Number'
                          className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-500/50 backdrop-blur-xl'
                        />
                        <textarea
                          placeholder='Tell us about your immigration goals...'
                          rows={4}
                          className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-500/50 backdrop-blur-xl resize-none'
                        />
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className='w-full px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 rounded-xl text-white font-bold text-lg shadow-2xl'
                    >
                      <span className='flex items-center justify-center gap-2'>
                        <Calendar className='w-6 h-6' />
                        Confirm Booking
                        <ArrowRight className='w-6 h-6' />
                      </span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className='text-center'
            >
              <div className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-12 md:p-16'>
                <h2 className='text-4xl md:text-5xl font-bold mb-6'>
                  <span className='text-white'>Ready to Start Your </span>
                  <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                    Immigration Journey
                  </span>
                  <span className='text-white'>?</span>
                </h2>
                <p className='text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed'>
                  Book your free consultation today and take the first step towards your global future.
                </p>

                <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-12'>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    className='px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 rounded-full text-white font-bold text-xl shadow-2xl'
                  >
                    <span className='flex items-center gap-3'>
                      <Calendar className='w-6 h-6' />
                      Schedule Now
                      <ArrowRight className='w-6 h-6' />
                    </span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='px-10 py-5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white font-medium text-xl hover:bg-white/20 transition-all'
                  >
                    <span className='flex items-center gap-3'>
                      <Phone className='w-6 h-6' />
                      Call Expert
                    </span>
                  </motion.button>
                </div>

                <div className='flex flex-wrap justify-center gap-8 text-white/60'>
                  <div className='flex items-center gap-2'>
                    <Shield className='w-5 h-5' />
                    <span>100% Confidential</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Clock className='w-5 h-5' />
                    <span>Available 24/7</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <CheckCircle className='w-5 h-5' />
                    <span>Free Initial Consultation</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
