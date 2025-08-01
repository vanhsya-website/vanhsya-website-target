'use client';

import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import {
  Users, UserCheck, Star, Award, Mail, Phone, MapPin, Calendar, Globe,
  Bot, Brain, Target, TrendingUp, Shield, Sparkles, LinkedinIcon, 
  GraduationCap, Briefcase, Heart, Building, Zap, Network, ArrowRight,
} from 'lucide-react';

// Team members data
const teamMembers = [
  {
    name: 'Sarah Chen',
    role: 'CEO & Founder',
    specialization: 'Express Entry & Business Immigration',
    experience: '15+ Years',
    certifications: ['RCIC', 'CAPIC Member', 'ICCRC Certified'],
    languages: ['English', 'Mandarin', 'French', 'Spanish'],
    bio: 'Sarah is a Regulated Canadian Immigration Consultant with over 15 years of experience helping families and professionals achieve their Canadian immigration dreams. She has successfully guided over 5,000 clients through complex immigration processes.',
    achievements: [
      'Successfully processed 5,000+ immigration applications',
      'Founder of VANHSYA Immigration Services',
      'Expert in Express Entry and PNP programs',
      'Recognized immigration law specialist',
    ],
    education: 'Master in Immigration Law, University of Toronto',
    contact: {
      email: 'sarah@vanhsya.com',
      phone: '+1 (647) 555-0101',
      linkedin: 'sarah-chen-immigration',
    },
    rating: 4.9,
    consultations: '5000+',
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Senior Immigration Consultant',
    specialization: 'Student Visas & Work Permits',
    experience: '12+ Years',
    certifications: ['RCIC', 'CAPIC Member', 'Study Permit Specialist'],
    languages: ['English', 'Spanish', 'Portuguese', 'French'],
    bio: 'Michael specializes in student visas and work permits, helping international students transition from study to permanent residence in Canada. His expertise in educational immigration pathways has helped thousands of students.',
    achievements: [
      'Processed 3,500+ student visa applications',
      'Expert in Post-Graduation Work Permits',
      'Specialist in Provincial Nominee Programs',
      'Published immigration guidance articles',
    ],
    education: 'Bachelor in International Relations, McGill University',
    contact: {
      email: 'michael@vanhsya.com',
      phone: '+1 (647) 555-0102',
      linkedin: 'michael-rodriguez-immigration',
    },
    rating: 4.8,
    consultations: '3500+',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    name: 'Dr. Priya Patel',
    role: 'Immigration Law Expert',
    specialization: 'Complex Cases & Appeals',
    experience: '18+ Years',
    certifications: ['RCIC', 'Immigration Lawyer', 'Appeals Specialist'],
    languages: ['English', 'Hindi', 'Gujarati', 'French'],
    bio: 'Dr. Patel is an immigration lawyer with extensive experience in complex immigration cases and appeals. She has a proven track record of successfully handling challenging cases that other consultants found difficult.',
    achievements: [
      'Successfully appealed 500+ immigration cases',
      'Expert in investor and entrepreneur programs',
      'Published researcher in immigration law',
      'Frequent speaker at immigration conferences',
    ],
    education: 'PhD in Immigration Law, Harvard Law School',
    contact: {
      email: 'priya@vanhsya.com',
      phone: '+1 (647) 555-0103',
      linkedin: 'dr-priya-patel-law',
    },
    rating: 4.9,
    consultations: '6000+',
    color: 'from-purple-500 to-purple-600',
  },
  {
    name: 'James Thompson',
    role: 'AI Immigration Specialist',
    specialization: 'Technology & Innovation',
    experience: '8+ Years',
    certifications: ['RCIC', 'AI Specialist', 'Tech Immigration Expert'],
    languages: ['English', 'German', 'Dutch'],
    bio: 'James combines traditional immigration expertise with cutting-edge AI technology to provide faster, more accurate immigration assessments. He leads our AI-powered immigration tools development.',
    achievements: [
      'Developed AI-powered eligibility assessment tools',
      'Expert in tech worker immigration programs',
      'Innovation leader in immigration services',
      'Processed 2,500+ tech professional applications',
    ],
    education: 'Master in Computer Science & Immigration Studies',
    contact: {
      email: 'james@vanhsya.com',
      phone: '+1 (647) 555-0104',
      linkedin: 'james-thompson-ai-immigration',
    },
    rating: 4.7,
    consultations: '2500+',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    name: 'Maria Santos',
    role: 'Family Immigration Specialist',
    specialization: 'Family Reunification & Sponsorship',
    experience: '10+ Years',
    certifications: ['RCIC', 'Family Sponsorship Expert', 'Refugee Protection'],
    languages: ['English', 'Spanish', 'Portuguese', 'Italian'],
    bio: 'Maria specializes in family reunification and sponsorship cases, helping families stay together through the immigration process. Her compassionate approach and attention to detail have reunited thousands of families.',
    achievements: [
      'Successfully reunited 3,000+ families',
      'Expert in spouse and child sponsorship',
      'Specialist in parent and grandparent programs',
      'Advocate for family immigration rights',
    ],
    education: 'Master in Social Work & Immigration Studies',
    contact: {
      email: 'maria@vanhsya.com',
      phone: '+1 (647) 555-0105',
      linkedin: 'maria-santos-family-immigration',
    },
    rating: 4.8,
    consultations: '3000+',
    color: 'from-pink-500 to-pink-600',
  },
  {
    name: 'David Kim',
    role: 'Business Immigration Consultant',
    specialization: 'Investor & Entrepreneur Programs',
    experience: '14+ Years',
    certifications: ['RCIC', 'Business Immigration Expert', 'Investment Specialist'],
    languages: ['English', 'Korean', 'Mandarin', 'Japanese'],
    bio: 'David helps high-net-worth individuals and entrepreneurs immigrate to Canada through investor and business programs. His expertise in business immigration has attracted millions in investment to Canada.',
    achievements: [
      'Facilitated $500M+ in Canadian investments',
      'Expert in Start-up Visa Program',
      'Specialist in Self-employed Persons Program',
      'Business immigration thought leader',
    ],
    education: 'MBA & Immigration Law Certificate, UBC',
    contact: {
      email: 'david@vanhsya.com',
      phone: '+1 (647) 555-0106',
      linkedin: 'david-kim-business-immigration',
    },
    rating: 4.9,
    consultations: '2000+',
    color: 'from-orange-500 to-orange-600',
  },
];

// Team stats
const teamStats = {
  members: '25+',
  experience: '0',
  languages: '20+',
  countries: '50+',
  success: '98.5%',
  satisfaction: '4.9/5',
};

export default function TeamPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const teamInView = useInView(teamRef, { once: true, amount: 0.2 });
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });

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
          {Array.from({ length: 100 }, (_, i) => (
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
        {/* Team and professional icons */}
        <div className='absolute inset-0'>
          {Array.from({ length: 15 }, (_, i) => (
            <motion.div
              key={`team-${i}`}
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
              {i % 4 === 0 ? '👥' : i % 4 === 1 ? '🎓' : i % 4 === 2 ? '💼' : '⭐'}
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
                <Users className='w-6 h-6 text-blue-400' />
                <span className='text-blue-300 font-medium'>Expert Team</span>
                <span className='text-4xl'>👥</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                className='text-5xl md:text-7xl lg:text-8xl font-bold mb-8'
              >
                <span className='bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-pulse'>
                  Our Expert
                </span>
                <br />
                <span className='text-white'>Team</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className='text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-4xl mx-auto'
              >
                Meet our certified immigration consultants and specialists dedicated to making 
                your immigration dreams a reality with AI-powered precision and human expertise.
              </motion.p>

              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
                className='grid grid-cols-2 md:grid-cols-3 gap-8 mb-12'
              >
                {Object.entries(teamStats).map(([key, value], index) => (
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
                    Book Consultation
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
                    Meet the Team
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Team Members */}
        <section ref={teamRef} className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
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
              <p className='text-xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
                Our certified immigration consultants bring decades of combined experience 
                and cutting-edge AI technology to deliver exceptional results.
              </p>
            </motion.div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={teamInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className='group'
                >
                  <div className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full hover:border-blue-500/30 transition-all duration-500'>
                    {/* Header */}
                    <div className='flex items-start gap-6 mb-6'>
                      <div className={`w-20 h-20 bg-gradient-to-r ${member.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <UserCheck className='w-10 h-10 text-white' />
                      </div>
                      <div className='flex-1'>
                        <h3 className='text-2xl font-bold text-white mb-2'>{member.name}</h3>
                        <p className='text-blue-400 font-medium mb-2'>{member.role}</p>
                        <p className='text-white/70 text-sm'>{member.specialization}</p>
                      </div>
                      <div className='text-right'>
                        <div className='flex items-center gap-1 text-yellow-400 mb-1'>
                          <Star className='w-4 h-4 fill-current' />
                          <span className='text-white font-medium'>{member.rating}</span>
                        </div>
                        <div className='text-emerald-400 text-sm'>{member.consultations}</div>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className='text-white/80 leading-relaxed mb-6'>{member.bio}</p>

                    {/* Experience & Certifications */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                      <div>
                        <h4 className='text-white font-semibold mb-3 flex items-center gap-2'>
                          <GraduationCap className='w-5 h-5 text-blue-400' />
                          Experience
                        </h4>
                        <p className='text-blue-400 font-medium'>{member.experience}</p>
                        <p className='text-white/60 text-sm mt-1'>{member.education}</p>
                      </div>
                      <div>
                        <h4 className='text-white font-semibold mb-3 flex items-center gap-2'>
                          <Award className='w-5 h-5 text-purple-400' />
                          Certifications
                        </h4>
                        <div className='space-y-1'>
                          {member.certifications.map((cert, idx) => (
                            <div key={idx} className='flex items-center gap-2'>
                              <div className='w-2 h-2 bg-purple-400 rounded-full' />
                              <span className='text-white/70 text-sm'>{cert}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Languages */}
                    <div className='mb-6'>
                      <h4 className='text-white font-semibold mb-3 flex items-center gap-2'>
                        <Globe className='w-5 h-5 text-emerald-400' />
                        Languages
                      </h4>
                      <div className='flex flex-wrap gap-2'>
                        {member.languages.map((language, idx) => (
                          <span key={idx} className='px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm'>
                            {language}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className='mb-6'>
                      <h4 className='text-white font-semibold mb-3 flex items-center gap-2'>
                        <Target className='w-5 h-5 text-orange-400' />
                        Key Achievements
                      </h4>
                      <div className='space-y-2'>
                        {member.achievements.map((achievement, idx) => (
                          <div key={idx} className='flex items-start gap-2'>
                            <Sparkles className='w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0' />
                            <span className='text-white/70 text-sm'>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Contact */}
                    <div className='border-t border-white/10 pt-6'>
                      <h4 className='text-white font-semibold mb-3'>Contact</h4>
                      <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                        <a 
                          href={`mailto:${member.contact.email}`}
                          className='flex items-center gap-2 text-white/70 hover:text-blue-400 transition-colors'
                        >
                          <Mail className='w-4 h-4' />
                          <span className='text-sm truncate'>Email</span>
                        </a>
                        <a 
                          href={`tel:${member.contact.phone}`}
                          className='flex items-center gap-2 text-white/70 hover:text-emerald-400 transition-colors'
                        >
                          <Phone className='w-4 h-4' />
                          <span className='text-sm'>Call</span>
                        </a>
                        <a 
                          href={`https://linkedin.com/in/${member.contact.linkedin}`}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='flex items-center gap-2 text-white/70 hover:text-blue-400 transition-colors'
                        >
                          <LinkedinIcon className='w-4 h-4' />
                          <span className='text-sm'>LinkedIn</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Stats */}
        <section ref={statsRef} className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-center mb-16'
            >
              <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='text-white'>Why Choose </span>
                <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                  Our Team
                </span>
              </h2>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:border-blue-500/30 transition-all duration-500'
              >
                <div className='w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6'>
                  <Brain className='w-8 h-8 text-white' />
                </div>
                <h3 className='text-2xl font-bold text-white mb-4'>AI-Powered Expertise</h3>
                <p className='text-white/70 leading-relaxed'>
                  Our team combines traditional immigration expertise with cutting-edge AI technology 
                  to provide faster, more accurate assessments and personalized solutions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:border-purple-500/30 transition-all duration-500'
              >
                <div className='w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6'>
                  <Shield className='w-8 h-8 text-white' />
                </div>
                <h3 className='text-2xl font-bold text-white mb-4'>Certified Professionals</h3>
                <p className='text-white/70 leading-relaxed'>
                  All our consultants are RCIC certified and members of professional associations, 
                  ensuring you receive advice from qualified and regulated professionals.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:border-emerald-500/30 transition-all duration-500'
              >
                <div className='w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6'>
                  <TrendingUp className='w-8 h-8 text-white' />
                </div>
                <h3 className='text-2xl font-bold text-white mb-4'>Proven Success Rate</h3>
                <p className='text-white/70 leading-relaxed'>
                  With a 98.5% success rate and thousands of satisfied clients, our team has 
                  the experience and track record to handle even the most complex cases.
                </p>
              </motion.div>
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
                  <span className='text-white'>Ready to Work with </span>
                  <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                    Our Experts
                  </span>
                  <span className='text-white'>?</span>
                </h2>
                <p className='text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed'>
                  Schedule a consultation with one of our certified immigration consultants 
                  and take the first step towards your immigration success.
                </p>

                <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-12'>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    className='px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 rounded-full text-white font-bold text-xl shadow-2xl'
                  >
                    <span className='flex items-center gap-3'>
                      <Calendar className='w-6 h-6' />
                      Book Consultation
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
                      Call Now
                    </span>
                  </motion.button>
                </div>

                <div className='flex flex-wrap justify-center gap-8 text-white/60'>
                  <div className='flex items-center gap-2'>
                    <UserCheck className='w-5 h-5' />
                    <span>RCIC Certified</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Star className='w-5 h-5' />
                    <span>4.9/5 Rating</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Shield className='w-5 h-5' />
                    <span>100% Confidential</span>
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
