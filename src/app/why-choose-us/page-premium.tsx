'use client';

import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import {
  Award, Shield, Users, Globe, Heart, Star, CheckCircle, ArrowRight,
  Brain, Bot, Zap, Network, TrendingUp, Target, Clock, Building,
  Trophy, Sparkles, UserCheck, Crown, Cpu, Layers, Phone, Mail,
} from 'lucide-react';

// Why choose us reasons with AI theme
const reasons = [
  {
    icon: Brain,
    title: 'AI-Powered Intelligence',
    description: 'Revolutionary artificial intelligence technology that analyzes millions of immigration cases to provide personalized recommendations with 95% accuracy.',
    color: 'from-purple-500 to-purple-600',
    stats: ['95% Accuracy', '1M+ Cases Analyzed', 'Real-time Processing'],
    features: [
      'Machine Learning Algorithms',
      'Predictive Analytics',
      'Smart Document Processing',
      'Automated Case Assessment',
    ],
  },
  {
    icon: Shield,
    title: 'Unmatched Success Rate',
    description: 'With a 94.2% success rate, we deliver results that exceed industry standards through meticulous planning and expert guidance.',
    color: 'from-blue-500 to-blue-600',
    stats: ['94.2% Success Rate', '15,000+ Approvals', '99.8% Client Satisfaction'],
    features: [
      'Expert Legal Team',
      'Comprehensive Case Review',
      'Success Guarantee Program',
      'Post-approval Support',
    ],
  },
  {
    icon: Users,
    title: 'Certified Expert Team',
    description: 'Our team of RCIC-certified consultants and AI specialists brings decades of combined experience in immigration law and technology.',
    color: 'from-emerald-500 to-emerald-600',
    stats: ['50+ Experts', '25+ Years Experience', '20+ Countries'],
    features: [
      'RCIC Certified Consultants',
      'AI Technology Specialists',
      'Multi-language Support',
      '24/7 Expert Availability',
    ],
  },
  {
    icon: Globe,
    title: 'Global Reach & Local Expertise',
    description: 'With offices in 12+ countries and partnerships worldwide, we provide local insights with global standards of service.',
    color: 'from-cyan-500 to-cyan-600',
    stats: ['50+ Countries', '12 Global Offices', '25+ Languages'],
    features: [
      'Local Immigration Experts',
      'Cultural Integration Support',
      'Country-specific Guidance',
      'Global Network Access',
    ],
  },
  {
    icon: Zap,
    title: 'Lightning-Fast Processing',
    description: 'Our AI-powered systems reduce processing time by 70%, getting you results faster than traditional immigration consultancies.',
    color: 'from-orange-500 to-orange-600',
    stats: ['70% Faster', '24-hour Turnaround', 'Real-time Updates'],
    features: [
      'Automated Document Verification',
      'Smart Application Tracking',
      'Priority Processing Options',
      'Instant Status Updates',
    ],
  },
  {
    icon: Heart,
    title: 'Personalized Care & Support',
    description: 'Every client receives dedicated attention with personalized immigration strategies tailored to their unique circumstances and goals.',
    color: 'from-pink-500 to-pink-600',
    stats: ['1:1 Dedicated Support', '98% Client Retention', '24/7 Assistance'],
    features: [
      'Personal Immigration Consultant',
      'Customized Immigration Plan',
      'Family-focused Approach',
      'Emotional Support & Guidance',
    ],
  },
];

// Success metrics
const successMetrics = {
  clients: '0',
  successRate: '94.2%',
  countries: '50+',
  languages: '25+',
  offices: '12+',
  experience: '25+ Years',
};

// Client testimonials
const testimonials = [
  {
    name: 'Sarah Johnson',
    country: 'Canada',
    flag: '🇨🇦',
    role: 'Software Engineer',
    image: '/images/testimonials/sarah.jpg',
    quote: 'VANHSYA\'s AI system identified the perfect immigration pathway for me. Their expertise made my Canadian PR process seamless.',
    rating: 5,
    program: 'Express Entry',
  },
  {
    name: 'Ahmed Al-Hassan',
    country: 'UAE',
    flag: '🇦🇪',
    role: 'Business Owner',
    image: '/images/testimonials/ahmed.jpg',
    quote: 'The team understood my business needs perfectly. Their personalized approach helped me secure investor visa in just 3 months.',
    rating: 5,
    program: 'Investor Visa',
  },
  {
    name: 'Maria Rodriguez',
    country: 'Australia',
    flag: '🇦🇺',
    role: 'Healthcare Professional',
    image: '/images/testimonials/maria.jpg',
    quote: 'Outstanding service from start to finish. Their 24/7 support and AI-powered guidance made all the difference.',
    rating: 5,
    program: 'Skilled Migration',
  },
];

// Awards and certifications
const awards = [
  {
    icon: Trophy,
    title: 'Best Immigration Consultancy 2024',
    organization: 'Immigration Excellence Awards',
    year: '2024',
  },
  {
    icon: Crown,
    title: 'AI Innovation in Immigration',
    organization: 'Tech Innovation Awards',
    year: '2024',
  },
  {
    icon: Star,
    title: 'Client Service Excellence',
    organization: 'Customer Service Institute',
    year: '2023',
  },
  {
    icon: Award,
    title: 'RCIC Certified Partner',
    organization: 'Immigration Consultants Canada',
    year: 'Ongoing',
  },
];

export default function WhyChooseUsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const reasonsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const awardsRef = useRef<HTMLDivElement>(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const reasonsInView = useInView(reasonsRef, { once: true, amount: 0.2 });
  const testimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.2 });
  const awardsInView = useInView(awardsRef, { once: true, amount: 0.2 });

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
        <div className='absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/30' />
        <div className='absolute inset-0'>
          {Array.from({ length: 100 }, (_, i) => (
            <motion.div
              key={i}
              className='absolute w-1 h-1 bg-gradient-to-r from-purple-400/30 to-blue-400/30 rounded-full'
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
        {/* Excellence and achievement icons */}
        <div className='absolute inset-0'>
          {Array.from({ length: 16 }, (_, i) => (
            <motion.div
              key={`excellence-${i}`}
              className='absolute text-4xl opacity-10'
              style={{
                left: `${5 + (i * 6)}%`,
                top: `${10 + (i * 5)}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                rotate: [0, 10, -10, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              {i % 5 === 0 ? '🏆' : i % 5 === 1 ? '⭐' : i % 5 === 2 ? '🎯' : i % 5 === 3 ? '🚀' : '✨'}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Navigation */}
      <nav className='fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-purple-500/10'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <Link href='/' className='flex items-center gap-2'>
              <div className='w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center'>
                <Bot className='w-6 h-6 text-white' />
              </div>
              <span className='text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
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
                className='inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 backdrop-blur-xl mb-8'
              >
                <Trophy className='w-6 h-6 text-purple-400' />
                <span className='text-purple-300 font-medium'>Why Choose VANHSYA</span>
                <span className='text-4xl'>🏆</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                className='text-5xl md:text-7xl lg:text-8xl font-bold mb-8'
              >
                <span className='bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-pulse'>
                  Excellence
                </span>
                <br />
                <span className='text-white'>Redefined</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className='text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-4xl mx-auto'
              >
                Discover why thousands of clients worldwide trust VANHSYA as their premier AI-powered 
                immigration partner. Experience the perfect fusion of cutting-edge technology and human expertise.
              </motion.p>

              {/* Success Metrics */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
                className='grid grid-cols-2 md:grid-cols-3 gap-8 mb-12'
              >
                {Object.entries(successMetrics).map(([key, value], index) => (
                  <div key={key} className='text-center'>
                    <div className={`text-3xl md:text-4xl font-bold mb-2 ${
                      index % 3 === 0 ? 'text-purple-400' : 
                      index % 3 === 1 ? 'text-blue-400' : 'text-cyan-400'
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
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(147, 51, 234, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className='px-8 py-4 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 rounded-full text-white font-bold text-lg shadow-2xl border border-purple-400/30'
                >
                  <span className='flex items-center gap-2'>
                    <Brain className='w-6 h-6' />
                    Start Your Journey
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
                    Talk to Expert
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Reasons Section */}
        <section ref={reasonsRef} className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={reasonsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-center mb-20'
            >
              <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='text-white'>What Makes Us </span>
                <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
                  Extraordinary
                </span>
              </h2>
              <p className='text-xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
                Six compelling reasons why VANHSYA stands as the global leader in AI-powered immigration services.
              </p>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={reasonsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className='group'
                >
                  <div className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full hover:border-purple-500/30 transition-all duration-500'>
                    {/* Header */}
                    <div className='flex items-start gap-6 mb-6'>
                      <div className={`w-16 h-16 bg-gradient-to-r ${reason.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <reason.icon className='w-8 h-8 text-white' />
                      </div>
                      <div className='flex-1'>
                        <h3 className='text-2xl font-bold text-white mb-3'>{reason.title}</h3>
                        <p className='text-white/80 leading-relaxed'>{reason.description}</p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className='grid grid-cols-3 gap-4 mb-6'>
                      {reason.stats.map((stat, idx) => (
                        <div key={idx} className='text-center'>
                          <div className='text-lg font-bold text-purple-400'>{stat}</div>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <div className='space-y-3'>
                      {reason.features.map((feature, idx) => (
                        <div key={idx} className='flex items-center gap-3'>
                          <CheckCircle className='w-5 h-5 text-emerald-400 flex-shrink-0' />
                          <span className='text-white/70 text-sm'>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section ref={testimonialsRef} className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-center mb-20'
            >
              <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
                  Success Stories
                </span>
                <br />
                <span className='text-white'>Speak Volumes</span>
              </h2>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition-all duration-500'
                >
                  <div className='flex items-center gap-4 mb-6'>
                    <div className='w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center'>
                      <Users className='w-8 h-8 text-white' />
                    </div>
                    <div>
                      <h3 className='text-lg font-bold text-white'>{testimonial.name}</h3>
                      <p className='text-purple-400 text-sm'>{testimonial.role}</p>
                      <div className='flex items-center gap-2 mt-1'>
                        <span className='text-2xl'>{testimonial.flag}</span>
                        <span className='text-white/60 text-sm'>{testimonial.country}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className='flex gap-1 mb-4'>
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star key={i} className='w-4 h-4 text-yellow-400 fill-current' />
                    ))}
                  </div>
                  
                  <blockquote className='text-white/80 italic leading-relaxed mb-4'>
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className='px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm inline-block'>
                    {testimonial.program}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section ref={awardsRef} className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={awardsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-center mb-20'
            >
              <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='text-white'>Awards & </span>
                <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
                  Recognition
                </span>
              </h2>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {awards.map((award, index) => (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={awardsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-center hover:border-purple-500/30 transition-all duration-500'
                >
                  <div className='w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4'>
                    <award.icon className='w-8 h-8 text-white' />
                  </div>
                  <h3 className='text-lg font-bold text-white mb-2'>{award.title}</h3>
                  <p className='text-white/60 text-sm mb-2'>{award.organization}</p>
                  <span className='text-purple-400 font-semibold'>{award.year}</span>
                </motion.div>
              ))}
            </div>
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
                  <span className='text-white'>Ready to Experience </span>
                  <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
                    Excellence
                  </span>
                  <span className='text-white'>?</span>
                </h2>
                <p className='text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed'>
                  Join thousands of successful clients who chose VANHSYA for their immigration journey. 
                  Start your transformation today with our AI-powered solutions.
                </p>

                <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-12'>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(147, 51, 234, 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    className='px-10 py-5 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 rounded-full text-white font-bold text-xl shadow-2xl'
                  >
                    <span className='flex items-center gap-3'>
                      <Brain className='w-6 h-6' />
                      Start AI Assessment
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
                      Schedule Consultation
                    </span>
                  </motion.button>
                </div>

                <div className='flex flex-wrap justify-center gap-8 text-white/60'>
                  <div className='flex items-center gap-2'>
                    <Shield className='w-5 h-5' />
                    <span>100% Success Guarantee</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Clock className='w-5 h-5' />
                    <span>24/7 Expert Support</span>
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
