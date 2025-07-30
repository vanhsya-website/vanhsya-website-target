'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  Calendar,
  Send,
  CheckCircle,
  Video,
  HeadphonesIcon,
  MessageSquare,
} from 'lucide-react';

const contactMethods = [
  {
    id: 'consultation',
    title: 'Free Consultation',
    description: 'Book a 30-minute consultation with our immigration experts',
    icon: Video,
    color: 'from-emerald-500 to-green-600',
    bgGlow: 'bg-emerald-500/10',
    action: 'Book Now',
    availability: 'Available 24/7',
    popular: true,
  },
  {
    id: 'phone',
    title: 'Phone Support',
    description: 'Speak directly with our certified immigration consultants',
    icon: Phone,
    color: 'from-blue-500 to-cyan-600',
    bgGlow: 'bg-blue-500/10',
    action: 'Call Now',
    availability: 'Mon-Fri 9AM-6PM',
  },
  {
    id: 'chat',
    title: 'Live Chat',
    description: 'Get instant answers from our AI-powered support system',
    icon: MessageCircle,
    color: 'from-purple-500 to-violet-600',
    bgGlow: 'bg-purple-500/10',
    action: 'Start Chat',
    availability: 'Available 24/7',
  },
  {
    id: 'email',
    title: 'Email Support',
    description: 'Send us detailed questions for comprehensive responses',
    icon: Mail,
    color: 'from-amber-500 to-orange-600',
    bgGlow: 'bg-amber-500/10',
    action: 'Send Email',
    availability: 'Response in 2 hours',
  },
];

const consultationTypes = [
  {
    id: 'assessment',
    title: 'Eligibility Assessment',
    duration: '30 minutes',
    price: 'Free',
    description: 'Comprehensive evaluation of your immigration prospects',
    features: [
      'Profile analysis',
      'Country recommendations',
      'Pathway options',
      'Timeline estimation',
    ],
    popular: true,
  },
  {
    id: 'strategy',
    title: 'Immigration Strategy',
    duration: '60 minutes',
    price: '$199',
    description: 'Detailed strategic planning for your immigration journey',
    features: [
      'Personalized roadmap',
      'Document checklist',
      'Timeline planning',
      'Cost breakdown',
    ],
  },
  {
    id: 'review',
    title: 'Application Review',
    duration: '45 minutes',
    price: '$149',
    description: 'Expert review of your immigration application',
    features: [
      'Document verification',
      'Compliance check',
      'Improvement suggestions',
      'Submission guidance',
    ],
  },
];

const officeLocations = [
  {
    city: 'Toronto',
    country: 'Canada',
    address: '100 King Street West, Suite 5700, Toronto, ON M5X 1C7',
    phone: '+1 (416) 123-4567',
    hours: 'Mon-Fri: 9AM-6PM EST',
  },
  {
    city: 'Melbourne',
    country: 'Australia',
    address: '525 Collins Street, Melbourne VIC 3000',
    phone: '+61 3 1234 5678',
    hours: 'Mon-Fri: 9AM-6PM AEST',
  },
  {
    city: 'London',
    country: 'United Kingdom',
    address: '1 Canary Wharf, London E14 5AB',
    phone: '+44 20 1234 5678',
    hours: 'Mon-Fri: 9AM-6PM GMT',
  },
];

export default function ContactPage() {
  const [selectedConsultation, setSelectedConsultation] =
    useState('assessment');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    service: '',
    message: '',
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

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
        {Array.from({ length: 12 }, (_, i) => (
          <motion.div
            key={i}
            className='absolute w-3 h-3 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 rounded-full'
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
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
            <HeadphonesIcon className='w-4 h-4' />
            Expert Support
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6'
          >
            Get Expert
            <span className='block bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent'>
              Immigration Guidance
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='text-xl text-neutral-300 leading-relaxed'
          >
            Connect with our certified immigration consultants for personalized
            guidance. Available 24/7 with multilingual support and AI-powered
            insights.
          </motion.p>
        </div>

        {/* Contact Methods */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
              className='relative group cursor-pointer'
            >
              <div
                className={`absolute inset-0 rounded-2xl ${method.bgGlow} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className='relative bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-6 hover:border-neutral-700/50 transition-all duration-500'>
                {method.popular && (
                  <div className='absolute -top-2 -right-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full'>
                    Popular
                  </div>
                )}

                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center mb-4`}
                >
                  <method.icon className='w-6 h-6 text-white' />
                </div>

                <h3 className='text-lg font-bold text-white mb-2'>
                  {method.title}
                </h3>
                <p className='text-neutral-400 text-sm mb-4'>
                  {method.description}
                </p>

                <div className='text-xs text-neutral-500 mb-4'>
                  {method.availability}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full bg-gradient-to-r ${method.color} text-white font-semibold py-2 rounded-lg hover:shadow-lg transition-all duration-300`}
                >
                  {method.action}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className='grid lg:grid-cols-2 gap-12 mb-16'>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className='bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-3xl p-8'>
              <h2 className='text-2xl font-bold text-white mb-6'>
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid md:grid-cols-2 gap-4'>
                  <div>
                    <label className='block text-sm font-medium text-neutral-300 mb-2'>
                      Full Name *
                    </label>
                    <input
                      type='text'
                      name='name'
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className='w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700/50 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:border-purple-500/50 transition-all duration-300'
                      placeholder='John Doe'
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-neutral-300 mb-2'>
                      Email Address *
                    </label>
                    <input
                      type='email'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className='w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700/50 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:border-purple-500/50 transition-all duration-300'
                      placeholder='john@example.com'
                    />
                  </div>
                </div>

                <div className='grid md:grid-cols-2 gap-4'>
                  <div>
                    <label className='block text-sm font-medium text-neutral-300 mb-2'>
                      Phone Number
                    </label>
                    <input
                      type='tel'
                      name='phone'
                      value={formData.phone}
                      onChange={handleInputChange}
                      className='w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700/50 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:border-purple-500/50 transition-all duration-300'
                      placeholder='+1 (555) 123-4567'
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-neutral-300 mb-2'>
                      Current Country
                    </label>
                    <select
                      name='country'
                      value={formData.country}
                      onChange={handleInputChange}
                      className='w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700/50 rounded-xl text-white focus:outline-none focus:border-purple-500/50 transition-all duration-300'
                    >
                      <option value=''>Select Country</option>
                      <option value='india'>India</option>
                      <option value='uk'>United Kingdom</option>
                      <option value='usa'>United States</option>
                      <option value='others'>Others</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className='block text-sm font-medium text-neutral-300 mb-2'>
                    Service of Interest
                  </label>
                  <select
                    name='service'
                    value={formData.service}
                    onChange={handleInputChange}
                    className='w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700/50 rounded-xl text-white focus:outline-none focus:border-purple-500/50 transition-all duration-300'
                  >
                    <option value=''>Select Service</option>
                    <option value='express-entry'>Express Entry</option>
                    <option value='pnp'>Provincial Nominee Program</option>
                    <option value='skilled-worker'>Skilled Worker Visa</option>
                    <option value='student'>Student Visa</option>
                    <option value='family'>Family Sponsorship</option>
                    <option value='business'>Business/Investor Visa</option>
                  </select>
                </div>

                <div>
                  <label className='block text-sm font-medium text-neutral-300 mb-2'>
                    Message *
                  </label>
                  <textarea
                    name='message'
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className='w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700/50 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:border-purple-500/50 transition-all duration-300 resize-none'
                    placeholder='Tell us about your immigration goals and any specific questions you have...'
                  />
                </div>

                <motion.button
                  type='submit'
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className='w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-4 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2'
                >
                  <Send className='w-5 h-5' />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Consultation Options */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className='space-y-6'
          >
            <div className='bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-3xl p-8'>
              <h2 className='text-2xl font-bold text-white mb-6'>
                Book a Consultation
              </h2>

              <div className='space-y-4'>
                {consultationTypes.map(consultation => (
                  <motion.div
                    key={consultation.id}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedConsultation(consultation.id)}
                    className={`cursor-pointer border rounded-2xl p-6 transition-all duration-300 ${
                      selectedConsultation === consultation.id
                        ? 'border-purple-500/50 bg-purple-500/10'
                        : 'border-neutral-700/50 hover:border-neutral-600/50'
                    }`}
                  >
                    <div className='flex items-start justify-between mb-4'>
                      <div>
                        <h3 className='text-lg font-bold text-white'>
                          {consultation.title}
                        </h3>
                        <div className='flex items-center gap-4 text-sm text-neutral-400 mt-1'>
                          <span className='flex items-center gap-1'>
                            <Clock className='w-3 h-3' />
                            {consultation.duration}
                          </span>
                          <span className='font-semibold text-green-400'>
                            {consultation.price}
                          </span>
                        </div>
                      </div>
                      {consultation.popular && (
                        <div className='bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-full px-2 py-1 text-xs text-amber-400'>
                          Popular
                        </div>
                      )}
                    </div>

                    <p className='text-neutral-300 mb-4'>
                      {consultation.description}
                    </p>

                    <div className='space-y-2'>
                      {consultation.features.map(feature => (
                        <div
                          key={feature}
                          className='flex items-center gap-2 text-sm text-neutral-400'
                        >
                          <CheckCircle className='w-3 h-3 text-green-400' />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className='w-full mt-6 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold py-4 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2'
              >
                <Calendar className='w-5 h-5' />
                Book Selected Consultation
              </motion.button>
            </div>

            {/* Quick Stats */}
            <div className='grid grid-cols-2 gap-4'>
              <div className='bg-gradient-to-br from-neutral-900/60 to-neutral-900/30 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-6 text-center'>
                <div className='text-2xl font-bold text-green-400 mb-1'>
                  24/7
                </div>
                <div className='text-sm text-neutral-400'>
                  Support Available
                </div>
              </div>
              <div className='bg-gradient-to-br from-neutral-900/60 to-neutral-900/30 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-6 text-center'>
                <div className='text-2xl font-bold text-blue-400 mb-1'>
                  &lt;2hrs
                </div>
                <div className='text-sm text-neutral-400'>Response Time</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Office Locations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className='mb-16'
        >
          <h2 className='text-3xl font-bold text-white text-center mb-12'>
            Our Global Offices
          </h2>

          <div className='grid md:grid-cols-3 gap-6'>
            {officeLocations.map(office => (
              <div
                key={office.city}
                className='bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-6'
              >
                <div className='flex items-center gap-3 mb-4'>
                  <MapPin className='w-6 h-6 text-purple-400' />
                  <div>
                    <h3 className='text-lg font-bold text-white'>
                      {office.city}
                    </h3>
                    <p className='text-neutral-400 text-sm'>{office.country}</p>
                  </div>
                </div>

                <div className='space-y-3 text-sm text-neutral-300'>
                  <p>{office.address}</p>
                  <div className='flex items-center gap-2'>
                    <Phone className='w-4 h-4 text-blue-400' />
                    {office.phone}
                  </div>
                  <div className='flex items-center gap-2'>
                    <Clock className='w-4 h-4 text-green-400' />
                    {office.hours}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className='text-center'
        >
          <div className='bg-gradient-to-r from-purple-600/10 to-indigo-600/10 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-12 max-w-4xl mx-auto'>
            <h3 className='text-3xl font-bold text-white mb-4'>
              Ready to Start Your Journey?
            </h3>
            <p className='text-xl text-neutral-300 mb-8'>
              Take the first step towards your immigration goals with a free
              consultation from our experts.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 mx-auto'
            >
              <MessageSquare className='w-5 h-5' />
              Start Free Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
