'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  Globe,
  Shield,
  Heart,
  Users,
  Award,
  ArrowRight,
  CheckCircle,
  Star,
  Calendar,
  Building,
  TrendingUp,
  Target,
  Brain,
  Sparkles,
  Clock,
  MapPin,
  Phone,
  Mail,
  Bot,
  Cpu,
  Network,
  Layers,
  UserPlus,
  Trophy,
  Zap,
} from 'lucide-react';

// Company stats
const companyStats = {
  founded: '2020',
  clients: '0',
  countries: '8+',
  successRate: '94.2%',
  teamMembers: '50+',
  offices: '12',
  awards: '15+',
  experience: '5+ years',
};

// Core values with AI theme
const coreValues = [
  {
    icon: Brain,
    title: 'AI-Powered Innovation',
    description: 'Leveraging artificial intelligence to revolutionize immigration processes and deliver exceptional outcomes.',
    color: 'from-purple-500 to-indigo-600',
    features: ['Machine Learning', 'Predictive Analytics', 'Smart Automation'],
  },
  {
    icon: Shield,
    title: 'Trust & Transparency',
    description: 'Complete transparency in processes, pricing, and progress with 100% secure data protection.',
    color: 'from-blue-500 to-cyan-600',
    features: ['End-to-end Encryption', 'GDPR Compliant', 'Transparent Pricing'],
  },
  {
    icon: Heart,
    title: 'Client-Centered Excellence',
    description: 'Your dreams drive our mission with personalized attention and genuine care throughout your journey.',
    color: 'from-pink-500 to-rose-600',
    features: ['24/7 Support', 'Personal Consultants', 'Success Guarantee'],
  },
  {
    icon: Globe,
    title: 'Global Expertise',
    description: 'Comprehensive knowledge of international immigration laws and requirements across 50+ countries.',
    color: 'from-emerald-500 to-teal-600',
    features: ['Multi-country Expertise', 'Local Partnerships', 'Real-time Updates'],
  },
];

// Team leadership
const leadership = [
  {
    name: 'Sarah Chen',
    role: 'CEO & Founder',
    image: '/images/team/ceo.jpg',
    bio: 'Former immigration attorney with 15+ years experience. Led digital transformation in immigration services.',
    achievements: ['Harvard Law Graduate', 'Immigration Expert', 'Tech Innovator'],
    social: { linkedin: '#', twitter: '#' },
  },
  {
    name: 'Michael Rodriguez',
    role: 'CTO & Co-Founder',
    image: '/images/team/cto.jpg',
    bio: 'AI/ML expert who previously worked at Google. Pioneering the future of immigration technology.',
    achievements: ['Stanford PhD', 'AI Research', 'Patent Holder'],
    social: { linkedin: '#', github: '#' },
  },
  {
    name: 'Dr. Priya Patel',
    role: 'Head of Immigration Services',
    image: '/images/team/head-immigration.jpg',
    bio: 'Licensed immigration consultant with expertise in complex cases across multiple jurisdictions.',
    achievements: ['Immigration Expert', 'Case Success Leader', 'Client Advocate'],
    social: { linkedin: '#' },
  },
];

// Company milestones
const milestones = [
  {
    year: '2020',
    title: 'Company Founded',
    description: 'VANHSYA established with vision to revolutionize immigration services through AI technology.',
    icon: Sparkles,
  },
  {
    year: '2021',
    title: 'AI Platform Launch',
    description: 'Launched first AI-powered immigration assessment platform with predictive analytics.',
    icon: Brain,
  },
  {
    year: '2022',
    title: 'Global Expansion',
    description: 'Expanded operations to 8+ countries with local partnerships and expert consultants.',
    icon: Globe,
  },
  {
    year: '2023',
    title: 'Award Recognition',
    description: 'Received multiple industry awards for innovation in immigration technology and client service.',
    icon: Trophy,
  },
  {
    year: '2024',
    title: 'Market Leader',
    description: 'Achieved 94.2% success rate and recognized as leading AI-powered immigration consultancy.',
    icon: Target,
  },
  {
    year: '2025',
    title: 'Future Vision',
    description: 'Expanding AI capabilities and launching next-generation immigration ecosystem.',
    icon: Zap,
  },
];

export default function AboutPage() {
  const [activeValue, setActiveValue] = useState(0);
  const [selectedMember, setSelectedMember] = useState<any>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.2 });
  const teamInView = useInView(teamRef, { once: true, amount: 0.2 });
  const timelineInView = useInView(timelineRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  // Auto-rotate core values
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveValue(prev => (prev + 1) % coreValues.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className='min-h-screen bg-gradient-to-b from-black via-neutral-950 to-neutral-900 text-white overflow-hidden'
    >
      {/* AI Neural Network Background */}
      <motion.div
        style={{ y: backgroundY }}
        className='fixed inset-0 pointer-events-none'
      >
        {/* Cosmic gradient */}
        <div className='absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/30' />
        
        {/* Neural network particles */}
        <div className='absolute inset-0'>
          {Array.from({ length: 80 }, (_, i) => (
            <motion.div
              key={i}
              className='absolute w-1 h-1 bg-gradient-to-r from-purple-400/30 to-cyan-400/30 rounded-full'
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

        {/* Floating geometric shapes */}
        {Array.from({ length: 15 }, (_, i) => (
          <motion.div
            key={i}
            className='absolute w-4 h-4 border border-purple-400/20 rotate-45'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              rotate: [45, 225, 45],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>

      {/* Navigation */}
      <nav className='fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-purple-500/10'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <Link href='/' className='flex items-center gap-2'>
              <div className='w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center'>
                <Bot className='w-6 h-6 text-white' />
              </div>
              <span className='text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent'>
                VANHSYA
              </span>
            </Link>
            
            <div className='hidden md:flex items-center gap-6'>
              <Link href='/' className='text-white/80 hover:text-white transition-colors'>
                Home
              </Link>
              <Link href='/services' className='text-white/80 hover:text-white transition-colors'>
                Services
              </Link>
              <Link href='/countries' className='text-white/80 hover:text-white transition-colors'>
                Countries
              </Link>
              <Link href='/contact' className='text-white/80 hover:text-white transition-colors'>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className='relative z-10'>
        {/* Hero Section */}
        <section ref={heroRef} className='min-h-screen flex items-center justify-center relative pt-16'>
          <motion.div
            style={{ y: heroY }}
            className='container mx-auto px-4 sm:px-6 lg:px-8'
          >
            <div className='text-center max-w-6xl mx-auto'>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, type: 'spring' }}
                className='inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 backdrop-blur-xl mb-8'
              >
                <Brain className='w-6 h-6 text-purple-400' />
                <span className='text-purple-300 font-medium'>About VANHSYA</span>
                <Sparkles className='w-6 h-6 text-cyan-400' />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                className='text-5xl md:text-7xl lg:text-8xl font-bold mb-8'
              >
                <span className='bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-pulse'>
                  Pioneering
                </span>
                <br />
                <span className='text-white'>
                  AI Immigration
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className='text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-4xl mx-auto'
              >
                We're revolutionizing global immigration with cutting-edge AI technology, making your dream of living 
                and working abroad not just possible, but predictable.
              </motion.p>

              {/* Company Stats */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
                className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-12'
              >
                <div className='text-center'>
                  <div className='text-3xl md:text-4xl font-bold text-purple-400 mb-2'>
                    {companyStats.clients}
                  </div>
                  <div className='text-white/60 text-sm'>Clients Served</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl md:text-4xl font-bold text-cyan-400 mb-2'>
                    {companyStats.successRate}
                  </div>
                  <div className='text-white/60 text-sm'>Success Rate</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl md:text-4xl font-bold text-purple-400 mb-2'>
                    {companyStats.countries}
                  </div>
                  <div className='text-white/60 text-sm'>Countries</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl md:text-4xl font-bold text-cyan-400 mb-2'>
                    {companyStats.experience}
                  </div>
                  <div className='text-white/60 text-sm'>Experience</div>
                </div>
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
                  className='px-8 py-4 bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 rounded-full text-white font-bold text-lg shadow-2xl border border-purple-400/30'
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
                    <Users className='w-6 h-6' />
                    Meet Our Team
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Core Values Section */}
        <section ref={valuesRef} className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-center mb-20'
            >
              <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='text-white'>Our </span>
                <span className='bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent'>
                  Core Values
                </span>
              </h2>
              <p className='text-xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
                Built on innovation, driven by excellence, and powered by artificial intelligence.
              </p>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  onHoverStart={() => setActiveValue(index)}
                  className={`group cursor-pointer ${activeValue === index ? 'scale-105' : ''} transition-all duration-500`}
                >
                  <div className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border rounded-3xl p-8 h-full transition-all duration-500 ${
                    activeValue === index ? 'border-purple-500/50 shadow-lg shadow-purple-500/25' : 'border-white/10 hover:border-purple-500/30'
                  }`}>
                    <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon className='w-8 h-8 text-white' />
                    </div>
                    <h3 className='text-xl font-bold text-white mb-4'>{value.title}</h3>
                    <p className='text-white/70 leading-relaxed mb-6'>{value.description}</p>
                    
                    <div className='space-y-2'>
                      {value.features.map((feature, idx) => (
                        <div key={idx} className='flex items-center gap-2 text-sm text-white/60'>
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

        {/* Leadership Team Section */}
        <section ref={teamRef} className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-center mb-20'
            >
              <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent'>
                  Leadership
                </span>
                <br />
                <span className='text-white'>Team</span>
              </h2>
              <p className='text-xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
                Meet the visionaries behind VANHSYA's AI-powered immigration revolution.
              </p>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {leadership.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={teamInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className='group cursor-pointer'
                  onClick={() => setSelectedMember(member)}
                >
                  <div className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition-all duration-500'>
                    <div className='w-24 h-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center'>
                      <Users className='w-12 h-12 text-white' />
                    </div>
                    <h3 className='text-xl font-bold text-white mb-2 text-center'>{member.name}</h3>
                    <p className='text-purple-400 text-center mb-4'>{member.role}</p>
                    <p className='text-white/70 text-sm leading-relaxed mb-6'>{member.bio}</p>
                    
                    <div className='space-y-2'>
                      {member.achievements.map((achievement, idx) => (
                        <div key={idx} className='flex items-center gap-2 text-sm text-white/60'>
                          <Star className='w-4 h-4 text-yellow-400' />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section ref={timelineRef} className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={timelineInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-center mb-20'
            >
              <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='text-white'>Our </span>
                <span className='bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent'>
                  Journey
                </span>
              </h2>
              <p className='text-xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
                From startup to industry leader - our commitment to innovation never stops.
              </p>
            </motion.div>

            <div className='space-y-12'>
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex items-center gap-12 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
                >
                  <div className='flex-1'>
                    <div className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition-all duration-500'>
                      <div className='flex items-center gap-4 mb-4'>
                        <span className='text-3xl font-bold text-purple-400'>{milestone.year}</span>
                        <h3 className='text-2xl font-bold text-white'>{milestone.title}</h3>
                      </div>
                      <p className='text-white/80 leading-relaxed'>{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className='w-24 h-24 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full flex items-center justify-center border border-purple-500/30'>
                    <milestone.icon className='w-12 h-12 text-purple-400' />
                  </div>
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
                  <span className='text-white'>Ready to </span>
                  <span className='bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent'>
                    Transform
                  </span>
                  <br />
                  <span className='text-white'>Your Future?</span>
                </h2>
                <p className='text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed'>
                  Join thousands who've trusted VANHSYA with their immigration dreams. 
                  Experience the power of AI-driven immigration solutions.
                </p>

                <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-12'>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(147, 51, 234, 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    className='px-10 py-5 bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 rounded-full text-white font-bold text-xl shadow-2xl border border-purple-400/30'
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
                      Book Consultation
                    </span>
                  </motion.button>
                </div>

                <div className='flex flex-wrap justify-center gap-8 text-white/60'>
                  <div className='flex items-center gap-2'>
                    <Phone className='w-5 h-5' />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Mail className='w-5 h-5' />
                    <span>hello@vanhsya.com</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Shield className='w-5 h-5' />
                    <span>100% Secure & Confidential</span>
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
