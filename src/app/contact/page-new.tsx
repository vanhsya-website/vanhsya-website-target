'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Loader2,
  MessageSquare,
  User,
  Globe,
  Shield,
  Users,
  AlertCircle,
  ArrowRight,
} from 'lucide-react';

const contactMethods = [
  {
    icon: Phone,
    label: 'Direct Phone',
    value: '+971 4 441 7173',
    action: 'Call Now',
    href: 'tel:+97144417173',
    gradient: 'from-emerald-500 to-green-600',
    description: 'Speak with our consultants',
    available: '24/7 Support',
  },
  {
    icon: Mail,
    label: 'Email Support',
    value: 'info@vanhsya.com',
    action: 'Send Email',
    href: 'mailto:info@vanhsya.com',
    gradient: 'from-blue-500 to-cyan-600',
    description: 'Get detailed information',
    available: 'Response within 2 hours',
  },
  {
    icon: MessageSquare,
    label: 'WhatsApp Chat',
    value: '+971 55 123 4567',
    action: 'Chat on WhatsApp',
    href: 'https://wa.me/971551234567',
    gradient: 'from-green-500 to-emerald-600',
    description: 'Quick questions & updates',
    available: 'Instant messaging',
  },
  {
    icon: MessageCircle,
    label: 'Live Chat',
    value: 'chat.vanhsya.com',
    action: 'Start Chat',
    href: '#',
    gradient: 'from-purple-500 to-violet-600',
    description: 'Real-time assistance',
    available: 'Mon-Fri 9AM-6PM',
  },
];

// Contact Form Component
function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.subject) {
      newErrors.subject = 'Please select a subject';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setShowSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setTimeout(() => setShowSuccess(false), 5000);
    } catch {
      // Handle error silently or show error message to user
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">Send us a Message</h3>
        <p className="text-neutral-400">
          Fill out the form below and we'll get back to you within 24 hours
        </p>
      </div>

      {/* Success Message */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center gap-3"
        >
          <CheckCircle className="h-5 w-5 text-emerald-400" />
          <p className="text-emerald-400 font-medium">
            Message sent successfully! We'll get back to you soon.
          </p>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-neutral-300 text-sm font-medium mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              className={`w-full px-4 py-3 bg-neutral-800/50 border rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                errors.fullName 
                  ? 'border-red-500 focus:ring-red-500/30' 
                  : 'border-neutral-700 focus:border-purple-500 focus:ring-purple-500/30'
              }`}
              placeholder="Enter your full name"
            />
            {errors.fullName && (
              <p className="text-red-400 text-sm mt-2 flex items-center gap-2">
                <AlertCircle className="h-4 w-4" />
                {errors.fullName}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-neutral-300 text-sm font-medium mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`w-full px-4 py-3 bg-neutral-800/50 border rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                errors.email 
                  ? 'border-red-500 focus:ring-red-500/30' 
                  : 'border-neutral-700 focus:border-purple-500 focus:ring-purple-500/30'
              }`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-2 flex items-center gap-2">
                <AlertCircle className="h-4 w-4" />
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-neutral-300 text-sm font-medium mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className={`w-full px-4 py-3 bg-neutral-800/50 border rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                errors.phone 
                  ? 'border-red-500 focus:ring-red-500/30' 
                  : 'border-neutral-700 focus:border-purple-500 focus:ring-purple-500/30'
              }`}
              placeholder="+1 (555) 123-4567"
            />
            {errors.phone && (
              <p className="text-red-400 text-sm mt-2 flex items-center gap-2">
                <AlertCircle className="h-4 w-4" />
                {errors.phone}
              </p>
            )}
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-neutral-300 text-sm font-medium mb-2">
              Inquiry Type *
            </label>
            <select
              id="subject"
              value={formData.subject}
              onChange={(e) => handleInputChange('subject', e.target.value)}
              className={`w-full px-4 py-3 bg-neutral-800/50 border rounded-xl text-white focus:outline-none focus:ring-2 transition-all duration-300 ${
                errors.subject 
                  ? 'border-red-500 focus:ring-red-500/30' 
                  : 'border-neutral-700 focus:border-purple-500 focus:ring-purple-500/30'
              }`}
            >
              <option value="" className="bg-neutral-800">Select inquiry type</option>
              <option value="general" className="bg-neutral-800">General Information</option>
              <option value="visa-consultation" className="bg-neutral-800">Visa Consultation</option>
              <option value="work-permit" className="bg-neutral-800">Work Permit</option>
              <option value="permanent-residence" className="bg-neutral-800">Permanent Residence</option>
              <option value="family-sponsorship" className="bg-neutral-800">Family Sponsorship</option>
              <option value="business-immigration" className="bg-neutral-800">Business Immigration</option>
              <option value="student-visa" className="bg-neutral-800">Student Visa</option>
              <option value="urgent-assistance" className="bg-neutral-800">Urgent Assistance</option>
            </select>
            {errors.subject && (
              <p className="text-red-400 text-sm mt-2 flex items-center gap-2">
                <AlertCircle className="h-4 w-4" />
                {errors.subject}
              </p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-neutral-300 text-sm font-medium mb-2">
            Message *
          </label>
          <textarea
            id="message"
            rows={6}
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            className={`w-full px-4 py-3 bg-neutral-800/50 border rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
              errors.message 
                ? 'border-red-500 focus:ring-red-500/30' 
                : 'border-neutral-700 focus:border-purple-500 focus:ring-purple-500/30'
            }`}
            placeholder="Please describe your immigration needs, timeline, and any specific questions you have. The more details you provide, the better we can assist you."
          />
          {errors.message && (
            <p className="text-red-400 text-sm mt-2 flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isLoading}
          whileHover={{ scale: isLoading ? 1 : 1.02 }}
          whileTap={{ scale: isLoading ? 1 : 0.98 }}
          className={`w-full py-4 px-8 rounded-xl font-medium text-white transition-all duration-300 flex items-center justify-center gap-3 ${
            isLoading
              ? 'bg-purple-500/50 cursor-not-allowed'
              : 'bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 shadow-lg hover:shadow-purple-500/25'
          }`}
        >
          {isLoading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Sending Message...
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              Send Message
            </>
          )}
        </motion.button>

        {/* Privacy Note */}
        <div className="bg-neutral-800/30 rounded-xl p-4 border border-neutral-700/50">
          <p className="text-neutral-400 text-sm leading-relaxed">
            <strong className="text-neutral-300">Privacy Note:</strong> Your information is secure and will only be used to respond to your inquiry. We follow strict confidentiality protocols and never share your details with third parties.
          </p>
        </div>
      </form>
    </div>
  );
}

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div
      ref={containerRef}
      className='min-h-screen bg-gradient-to-b from-neutral-950 to-neutral-900 text-white'
    >
      {/* Animated Background */}
      <motion.div
        style={{ y: backgroundY }}
        className='absolute inset-0 overflow-hidden'
      >
        <div className='absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 rounded-full blur-3xl' />
        <div className='absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-emerald-600/10 to-cyan-600/10 rounded-full blur-3xl' />
      </motion.div>

      {/* Floating Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        {Array.from({ length: 15 }, (_, i) => (
          <motion.div
            key={i}
            className='absolute w-2 h-2 bg-purple-400/20 rounded-full'
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative z-10'>
        {/* Hero Section */}
        <div className='text-center max-w-4xl mx-auto mb-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 text-purple-300 font-medium text-sm mb-6'
          >
            <MessageCircle className='w-4 h-4' />
            Contact Us
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6'
          >
            Get in Touch
            <span className='block bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent'>
              Let's Start Your Journey
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='text-xl text-neutral-300 leading-relaxed mb-8'
          >
            Ready to start your immigration journey? Connect with our expert team for personalized guidance and professional support every step of the way.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className='flex flex-wrap justify-center gap-6 mb-12'
          >
            <div className='flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-full'>
              <Users className='w-4 h-4 text-emerald-400' />
              <span className='text-neutral-300 text-sm'>Expert Team</span>
            </div>
            <div className='flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-full'>
              <Shield className='w-4 h-4 text-blue-400' />
              <span className='text-neutral-300 text-sm'>Trusted Service</span>
            </div>
            <div className='flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-full'>
              <Globe className='w-4 h-4 text-violet-400' />
              <span className='text-neutral-300 text-sm'>Global Reach</span>
            </div>
          </motion.div>
        </div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className='group bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-6 hover:border-neutral-700/50 transition-all duration-300'
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${method.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <method.icon className='w-6 h-6 text-white' />
              </div>
              <h3 className='text-white font-semibold mb-2'>{method.label}</h3>
              <p className='text-neutral-400 text-sm mb-3'>{method.description}</p>
              <p className='text-white font-medium mb-2'>{method.value}</p>
              <div className='flex items-center justify-between'>
                <span className='text-xs text-neutral-500'>{method.available}</span>
                <ArrowRight className='w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300' />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <ContactForm />
          </motion.div>

          {/* Office Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className='space-y-8'
          >
            {/* Office Details */}
            <div className='bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-8'>
              <h3 className='text-2xl font-bold text-white mb-6'>Visit Our Office</h3>
              
              <div className='space-y-6'>
                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0'>
                    <MapPin className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    <h4 className='text-white font-semibold mb-2'>DMCC Business Centre</h4>
                    <p className='text-neutral-400'>
                      Cluster I, Jumeirah Lakes Towers<br />
                      Dubai, United Arab Emirates<br />
                      P.O. Box 4117
                    </p>
                  </div>
                </div>

                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0'>
                    <Clock className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    <h4 className='text-white font-semibold mb-2'>Business Hours</h4>
                    <div className='text-neutral-400 space-y-1'>
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                      <p className='text-emerald-400 text-sm mt-2'>24/7 Emergency Support Available</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Features */}
              <div className='mt-8 pt-6 border-t border-neutral-700/50'>
                <h4 className='text-white font-semibold mb-4'>Office Amenities</h4>
                <div className='grid grid-cols-2 gap-3 text-sm text-neutral-400'>
                  <div className='flex items-center gap-2'>
                    <div className='h-2 w-2 bg-emerald-400 rounded-full'></div>
                    <span>Free Parking</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <div className='h-2 w-2 bg-blue-400 rounded-full'></div>
                    <span>WiFi Available</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <div className='h-2 w-2 bg-violet-400 rounded-full'></div>
                    <span>Private Rooms</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <div className='h-2 w-2 bg-orange-400 rounded-full'></div>
                    <span>Document Center</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className='bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-6'>
              <h3 className='text-xl font-bold text-white mb-4'>Find Us</h3>
              <div className='relative'>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.516054844825!2d55.1373!3d25.067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b8b8b8b8b8b%3A0x1b1b1b1b1b1b1b1b!2sDMCC%20Business%20Centre!5e0!3m2!1sen!2sae!4v1635000000000!5m2!1sen!2sae"
                  width="100%"
                  height="250"
                  title="VANHSYA Office Location Map"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="border-0 rounded-xl grayscale hover:grayscale-0 transition-all duration-300"
                ></iframe>
              </div>
              
              {/* Quick Directions */}
              <div className="mt-4 bg-gradient-to-r from-emerald-500/10 to-teal-600/10 border border-emerald-500/20 rounded-xl p-4">
                <h4 className="text-emerald-400 font-semibold mb-2">Getting Here</h4>
                <div className="space-y-1 text-neutral-400 text-sm">
                  <p>• 5 minutes from DMCC Metro Station</p>
                  <p>• 15 minutes from Dubai International Airport</p>
                  <p>• Valet parking available</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
