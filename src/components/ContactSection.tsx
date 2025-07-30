'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock, 
  FaCalendarAlt, 
  FaArrowRight,
  FaCheckCircle,
  FaWhatsapp,
  FaComments
} from 'react-icons/fa';
import {
  Cpu,
  Database,
  Network,
  Code,
  Hexagon,
  Triangle,
  Zap,
  Globe,
  Award,
  Sparkles
} from 'lucide-react';

interface ContactMethod {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  value: string;
  href: string;
  color: string;
  available: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hoveredMethod, setHoveredMethod] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const sectionInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHoveredMethod(Math.floor(Math.random() * 4));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', country: '', service: '', message: '' });
    }, 2000);
  };

  const contactMethods: ContactMethod[] = [
    {
      icon: FaPhone,
      title: 'Call Us',
      description: 'Speak directly with our immigration experts',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
      color: 'bg-blue-500',
      available: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      description: 'Quick responses via WhatsApp messaging',
      value: '+1 (555) 123-4567',
      href: 'https://wa.me/15551234567',
      color: 'bg-green-500',
      available: '24/7 Quick Response'
    },
    {
      icon: FaEnvelope,
      title: 'Email Us',
      description: 'Send us your detailed inquiry',
      value: 'info@vanhsya.com',
      href: 'mailto:info@vanhsya.com',
      color: 'bg-purple-500',
      available: 'Response within 2 hours'
    },
    {
      icon: FaComments,
      title: 'Live Chat',
      description: 'Chat with our support team',
      value: 'Start Chat',
      href: '#chat',
      color: 'bg-orange-500',
      available: 'Available 24/7'
    }
  ];

  const services = [
    'Work Visa',
    'Study Visa',
    'Business Visa', 
    'Family Visa',
    'Tourist Visa',
    'Permanent Residency',
    'General Inquiry'
  ];

  const countries = [
    'Canada',
    'Australia', 
    'United States',
    'United Kingdom',
    'Germany',
    'New Zealand',
    'Other'
  ];

  if (isSubmitted) {
    return (
      <section className="section-padding bg-green-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCheckCircle className="text-3xl text-white" />
            </div>
            <h2 className="heading-md mb-4 text-green-800">
              Thank You for Your Interest!
            </h2>
            <p className="text-lg text-green-700 mb-6">
              Your consultation request has been received. One of our immigration experts will contact you within 24 hours to discuss your case in detail.
            </p>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-4">What happens next?</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-semibold text-sm">1</span>
                  </div>
                  <span className="text-gray-700">Initial consultation call (30 minutes, FREE)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-semibold text-sm">2</span>
                  </div>
                  <span className="text-gray-700">Case assessment and eligibility review</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-semibold text-sm">3</span>
                  </div>
                  <span className="text-gray-700">Customized immigration strategy proposal</span>
                </div>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsSubmitted(false)}
              className="btn-outline mt-6"
            >
              Submit Another Inquiry
            </motion.button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <motion.section 
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-slate-950 via-slate-900/95 to-slate-950 relative overflow-hidden"
      style={{ opacity }}
    >
      {/* Enhanced Dark Animated Background */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        {/* Dark Animated Grid */}
        <motion.div 
          className="absolute inset-0 bg-[linear-gradient(rgba(30,41,59,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(30,41,59,0.2)_1px,transparent_1px)] bg-[size:50px_50px]"
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Dark Circuit Pattern */}
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/15 via-slate-950 to-slate-950"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating Tech Elements */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{
              y: [0, -25, 0],
              x: [0, Math.random() * 10 - 5, 0],
              opacity: [0.03, 0.15, 0.03],
              rotate: [0, 360],
              scale: [0.7, 1, 0.7],
            }}
            transition={{
              duration: Math.random() * 10 + 8,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut"
            }}
          >
            {i % 6 === 0 && <Cpu className="w-4 h-4 text-slate-600/40" />}
            {i % 6 === 1 && <Database className="w-3 h-3 text-slate-600/40" />}
            {i % 6 === 2 && <Network className="w-5 h-5 text-slate-600/40" />}
            {i % 6 === 3 && <Code className="w-4 h-4 text-slate-600/40" />}
            {i % 6 === 4 && <Hexagon className="w-4 h-4 text-slate-600/40" />}
            {i % 6 === 5 && <Triangle className="w-3 h-3 text-slate-600/40" />}
          </motion.div>
        ))}

        {/* Mouse Follower - Dark */}
        <motion.div
          className="absolute w-4 h-4 pointer-events-none"
          animate={{
            x: mousePosition.x - 8,
            y: mousePosition.y - 8,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        >
          <motion.div
            className="w-full h-full bg-gradient-to-r from-slate-600/10 to-slate-500/10 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </motion.div>
      </motion.div>

      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 mb-6 rounded-full bg-gradient-to-r from-slate-800/40 via-slate-700/40 to-slate-800/40 border border-slate-600/50 backdrop-blur-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: sectionInView ? 1 : 0, 
              scale: sectionInView ? 1 : 0.8 
            }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(100, 116, 139, 0.2)"
            }}
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4 text-slate-400" />
            </motion.div>
            <span className="font-bold text-slate-200 text-sm">Premium Immigration Consultation</span>
            <motion.div
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <Award className="w-4 h-4 text-slate-400" />
            </motion.div>
          </motion.div>
          
          <motion.h2 
            className="heading-lg mb-6 text-slate-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 30 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Ready to Start Your <span className="text-transparent bg-gradient-to-r from-slate-400 via-slate-300 to-slate-500 bg-clip-text">Immigration Journey</span>?
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 20 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Get personalized guidance from our licensed immigration experts. Your first consultation is completely free, 
            with no hidden fees or obligations.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Enhanced Dark Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: sectionInView ? 1 : 0, x: sectionInView ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.h3 
              className="text-2xl font-semibold text-slate-200 mb-8"
              animate={{
                color: ["rgb(226, 232, 240)", "rgb(203, 213, 225)", "rgb(226, 232, 240)"]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Get in Touch
            </motion.h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.href}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ 
                    opacity: sectionInView ? 1 : 0, 
                    y: sectionInView ? 0 : 30,
                    scale: sectionInView ? 1 : 0.9
                  }}
                  transition={{ 
                    delay: 1 + index * 0.1, 
                    duration: 0.6,
                    type: "spring"
                  }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(71, 85, 105, 0.3)"
                  }}
                  onHoverStart={() => setHoveredMethod(index)}
                  onHoverEnd={() => setHoveredMethod(null)}
                  className="group p-6 bg-gradient-to-br from-slate-800/60 to-slate-700/40 border border-slate-600/50 rounded-xl backdrop-blur-xl transition-all duration-300 block relative overflow-hidden"
                >
                  {/* Floating particles for each method */}
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-slate-500/30 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.2, 0.6, 0.2],
                        scale: [1, 1.5, 1]
                      }}
                      transition={{
                        duration: Math.random() * 2 + 1.5,
                        repeat: Infinity,
                        delay: Math.random() * 1,
                      }}
                    />
                  ))}
                  
                  {/* Enhanced Dark Background Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-slate-700/20 to-slate-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      opacity: hoveredMethod === index ? [0, 0.3, 0] : 0,
                      scale: hoveredMethod === index ? [1, 1.1, 1] : 1
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  <motion.div 
                    className={`w-12 h-12 ${method.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform relative z-10`}
                    animate={{
                      rotate: hoveredMethod === index ? [0, 5, -5, 0] : 0,
                      scale: hoveredMethod === index ? [1, 1.2, 1] : 1
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <method.icon className="text-white text-xl" />
                  </motion.div>
                  
                  <motion.h4 
                    className="font-semibold text-slate-200 mb-2 relative z-10"
                    animate={{
                      color: hoveredMethod === index 
                        ? ["rgb(226, 232, 240)", "rgb(203, 213, 225)", "rgb(226, 232, 240)"]
                        : "rgb(226, 232, 240)"
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {method.title}
                  </motion.h4>
                  <motion.p 
                    className="text-slate-400 mb-2 text-sm relative z-10"
                    animate={{
                      opacity: hoveredMethod === index ? [0.8, 1, 0.8] : 0.8
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {method.description}
                  </motion.p>
                  <motion.p 
                    className="font-semibold text-slate-300 mb-2 relative z-10"
                    animate={{
                      color: hoveredMethod === index 
                        ? ["rgb(203, 213, 225)", "rgb(148, 163, 184)", "rgb(203, 213, 225)"]
                        : "rgb(203, 213, 225)"
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {method.value}
                  </motion.p>
                  <motion.p 
                    className="text-xs text-slate-500 relative z-10"
                    animate={{
                      opacity: hoveredMethod === index ? [0.6, 0.9, 0.6] : 0.6
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {method.available}
                  </motion.p>
                </motion.a>
              ))}
            </div>

            {/* Enhanced Dark Office Information */}
            <motion.div
              className="bg-gradient-to-br from-slate-800/40 to-slate-700/30 border border-slate-600/50 rounded-xl p-6 backdrop-blur-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: sectionInView ? 1 : 0, y: sectionInView ? 0 : 30 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 15px 30px rgba(71, 85, 105, 0.2)"
              }}
            >
              <motion.h4 
                className="font-semibold text-slate-200 mb-4"
                animate={{
                  color: ["rgb(226, 232, 240)", "rgb(203, 213, 225)", "rgb(226, 232, 240)"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Office Hours & Location
              </motion.h4>
              <div className="space-y-3">
                <motion.div 
                  className="flex items-center text-slate-400"
                  whileHover={{ x: 5, color: "rgb(203, 213, 225)" }}
                >
                  <div className="w-8 h-8 bg-slate-700/50 rounded-full flex items-center justify-center mr-3">
                    <FaClock className="text-slate-400 text-sm" />
                  </div>
                  <span>Monday - Friday: 9:00 AM - 6:00 PM EST</span>
                </motion.div>
                <motion.div 
                  className="flex items-center text-slate-400"
                  whileHover={{ x: 5, color: "rgb(203, 213, 225)" }}
                >
                  <div className="w-8 h-8 bg-slate-700/50 rounded-full flex items-center justify-center mr-3">
                    <FaCalendarAlt className="text-slate-400 text-sm" />
                  </div>
                  <span>Saturday: 10:00 AM - 4:00 PM EST</span>
                </motion.div>
                <motion.div 
                  className="flex items-center text-slate-400"
                  whileHover={{ x: 5, color: "rgb(203, 213, 225)" }}
                >
                  <div className="w-8 h-8 bg-slate-700/50 rounded-full flex items-center justify-center mr-3">
                    <FaMapMarkerAlt className="text-slate-400 text-sm" />
                  </div>
                  <span>123 Immigration Street, Toronto, ON M5V 3A8</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
                  <p className="text-gray-600 text-sm mb-2">{method.description}</p>
                  <p className="font-medium text-blue-600 mb-1">{method.value}</p>
                  <p className="text-xs text-gray-500">{method.available}</p>
                </motion.a>
              ))}
            </div>

            {/* Office Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-blue-50 rounded-xl p-6"
            >
              <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                <FaMapMarkerAlt className="mr-2 text-blue-600" />
                Our Office
              </h4>
              <div className="space-y-2 text-gray-600">
                <p>123 Immigration Plaza, Suite 500</p>
                <p>Toronto, ON M5V 3A1, Canada</p>
                <div className="flex items-center mt-4">
                  <FaClock className="mr-2 text-blue-600" />
                  <span>Monday - Friday: 9:00 AM - 6:00 PM EST</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Free Consultation Request</h3>
              <p className="text-gray-600 mb-6">Tell us about your immigration goals and we'll provide personalized guidance.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Destination Country
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select a country</option>
                      {countries.map((country) => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your situation
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Please describe your immigration goals, timeline, and any specific questions you have..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full btn-primary group ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <FaCalendarAlt className="mr-2" />
                      Request Free Consultation
                      <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </motion.button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy. We never share your information with third parties.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
