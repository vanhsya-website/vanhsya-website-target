'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import {
  GraduationCap, Briefcase, Plane, Building2, Home, 
  ArrowRight, CheckCircle, Star, Clock, Users, Globe,
  Bot, Brain, Zap, Shield, Target, Award
} from 'lucide-react';

// Services data
const services = [
  {
    id: 'study-visa',
    title: 'Study Visa',
    icon: GraduationCap,
    description: 'AI-powered study visa guidance for global education opportunities',
    features: ['University Selection', 'Document Preparation', 'Interview Training', 'Scholarship Guidance'],
    successRate: '98.5%',
    avgTime: '4-8 weeks',
    color: 'from-blue-500 to-cyan-500',
    href: '/services/study-visa'
  },
  {
    id: 'work-visa',
    title: 'Work Visa',
    icon: Briefcase,
    description: 'Professional immigration solutions for career advancement worldwide',
    features: ['Job Market Analysis', 'Skill Assessment', 'Employer Matching', 'Legal Support'],
    successRate: '96.8%',
    avgTime: '6-12 weeks',
    color: 'from-purple-500 to-pink-500',
    href: '/services/work-visa'
  },
  {
    id: 'tourist-visa',
    title: 'Tourist Visa',
    icon: Plane,
    description: 'Hassle-free tourist visa processing for memorable travel experiences',
    features: ['Itinerary Planning', 'Document Verification', 'Embassy Support', 'Travel Insurance'],
    successRate: '99.2%',
    avgTime: '1-3 weeks',
    color: 'from-green-500 to-emerald-500',
    href: '/services/tourist-visa'
  },
  {
    id: 'business-visa',
    title: 'Business Visa',
    icon: Building2,
    description: 'Strategic business immigration for entrepreneurs and investors',
    features: ['Investment Planning', 'Business Setup', 'Legal Framework', 'Market Entry'],
    successRate: '94.7%',
    avgTime: '8-16 weeks',
    color: 'from-orange-500 to-red-500',
    href: '/services/business-visa'
  },
  {
    id: 'permanent-residence',
    title: 'Permanent Residence',
    icon: Home,
    description: 'Complete PR solutions for establishing your new life abroad',
    features: ['Points Calculator', 'Profile Optimization', 'Application Tracking', 'Settlement Support'],
    successRate: '97.3%',
    avgTime: '12-24 months',
    color: 'from-indigo-500 to-purple-500',
    href: '/services/permanent-residence'
  },
  {
    id: 'flight-booking',
    title: 'Flight Booking',
    icon: Plane,
    description: 'Smart flight booking with visa-compliant travel arrangements',
    features: ['Best Price Guarantee', 'Flexible Booking', 'Travel Insurance', '24/7 Support'],
    successRate: '99.9%',
    avgTime: 'Instant',
    color: 'from-cyan-500 to-blue-500',
    href: '/services/flight-booking'
  }
];

const whyChooseUs = [
  {
    icon: Bot,
    title: 'AI-Powered Intelligence',
    description: 'Advanced algorithms analyze your profile for optimal pathways'
  },
  {
    icon: Shield,
    title: '99% Success Rate',
    description: 'Proven track record with thousands of successful applications'
  },
  {
    icon: Clock,
    title: 'Faster Processing',
    description: 'Streamlined processes reduce waiting times by 60%'
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: '24/7 dedicated support from immigration specialists'
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Partnerships with institutions and agencies worldwide'
  },
  {
    icon: Award,
    title: 'Certified Excellence',
    description: 'Industry-leading certifications and accreditations'
  }
];

export default function ServicesPagePremium() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const whyChooseRef = useRef<HTMLDivElement>(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 });
  const whyChooseInView = useInView(whyChooseRef, { once: true, amount: 0.2 });

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
          {Array.from({ length: 100 }, (_, i) => (
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
              <Link href="/services" className="text-white hover:text-blue-400 transition-colors">Services</Link>
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
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-xl mb-8">
                <Brain className="w-6 h-6 text-blue-400" />
                <span className="text-blue-300 font-medium">AI-Powered Immigration Services</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                <span className="text-white">Premium </span>
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Services
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-12">
                Experience next-generation immigration services powered by AI intelligence. 
                We've successfully processed <span className="text-blue-400 font-semibold">50,000+ applications</span> with industry-leading success rates.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
                  <div className="text-3xl font-bold text-green-400 mb-2">98.5%</div>
                  <div className="text-white/60">Success Rate</div>
                </div>
                <div className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
                  <div className="text-3xl font-bold text-blue-400 mb-2">50K+</div>
                  <div className="text-white/60">Applications</div>
                </div>
                <div className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
                  <div className="text-3xl font-bold text-purple-400 mb-2">60%</div>
                  <div className="text-white/60">Faster Processing</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section ref={servicesRef} className="py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-white">Our </span>
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Services
                </span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Comprehensive immigration solutions tailored to your unique needs and goals
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="group"
                >
                  <Link href={service.href}>
                    <div className="h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300">
                      {/* Service Icon */}
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Service Info */}
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-white/70 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-white/60">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center p-3 bg-white/5 rounded-xl">
                          <div className="text-lg font-bold text-green-400 mb-1">{service.successRate}</div>
                          <div className="text-white/60 text-xs">Success Rate</div>
                        </div>
                        <div className="text-center p-3 bg-white/5 rounded-xl">
                          <div className="text-lg font-bold text-blue-400 mb-1">{service.avgTime}</div>
                          <div className="text-white/60 text-xs">Avg Time</div>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-between">
                        <span className="text-blue-400 font-medium group-hover:text-white transition-colors">
                          Learn More
                        </span>
                        <ArrowRight className="w-5 h-5 text-blue-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section ref={whyChooseRef} className="py-32 bg-gradient-to-b from-transparent to-black/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={whyChooseInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-white">Why Choose </span>
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  VANHSYA
                </span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Leading innovation in immigration services with AI-powered solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={whyChooseInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                  className="text-center p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-blue-500/30 transition-all"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <reason.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{reason.title}</h3>
                  <p className="text-white/70 leading-relaxed">{reason.description}</p>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">Ready to Start Your </span>
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Journey
                </span>
                <span className="text-white">?</span>
              </h2>
              
              <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
                Get personalized guidance from our AI-powered platform and expert team. 
                Your immigration success story starts here.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link href="/consultation">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 rounded-full text-white font-bold text-xl shadow-2xl"
                  >
                    <span className="flex items-center gap-3">
                      <Brain className="w-6 h-6" />
                      Get Free Consultation
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
