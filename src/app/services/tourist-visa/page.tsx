'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Plane,
  Clock,
  Globe,
  CreditCard,
  ArrowRight,
  CheckCircle2,
  Zap,
  Users,
  Phone,
  FileText,
  Award,
} from 'lucide-react';
import Link from 'next/link';

import Footer from '@/components/Footer';

// Tourist Visa Service Features
const keyFeatures = [
  {
    id: 1,
    title: 'Fast Processing',
    description:
      'Get your visa approved in record time with our streamlined process.',
    icon: Zap,
    color: 'from-purple-600 to-indigo-600',
    details: [
      'Priority application handling',
      'Real-time status updates',
      'Dedicated support team',
      'Express processing options',
    ],
    stats: { value: '72hrs', label: 'Average Processing' },
  },
  {
    id: 2,
    title: 'Global Coverage',
    description: 'Tourist visas for over 200 countries worldwide.',
    icon: Globe,
    color: 'from-cyan-600 to-blue-600',
    details: [
      'Visa options for popular destinations',
      'Expert advice for unique travel plans',
      'Comprehensive documentation support',
      'Country-specific requirements',
    ],
    stats: { value: '200+', label: 'Countries Covered' },
  },
  {
    id: 3,
    title: 'Affordable Pricing',
    description: 'Transparent pricing with no hidden fees.',
    icon: CreditCard,
    color: 'from-emerald-600 to-teal-600',
    details: [
      'Competitive rates',
      'Flexible payment options',
      'Money-back guarantee',
      'No surprise fees',
    ],
    stats: { value: '100%', label: 'Price Transparency' },
  },
];

// Popular Destinations
const popularDestinations = [
  { name: 'United States', flag: '��🇸', processing: '3-5 days', price: '$160' },
  {
    name: 'United Kingdom',
    flag: '🇬🇧',
    processing: '2-3 weeks',
    price: '$130',
  },
  { name: 'Canada', flag: '🇨🇦', processing: '1-2 weeks', price: '$100' },
  { name: 'Australia', flag: '🇦🇺', processing: '1-4 weeks', price: '$145' },
  { name: 'Schengen', flag: '🇪🇺', processing: '10-15 days', price: '$80' },
  { name: 'Japan', flag: '🇯🇵', processing: '5-7 days', price: '$0' },
];

export default function TouristVisaPage() {
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % keyFeatures.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='min-h-screen bg-neutral-950 text-white overflow-hidden'>
      {/* Animated Background */}
      <div className='fixed inset-0 pointer-events-none'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-neutral-950 to-neutral-950' />
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent' />

        {/* Floating Elements */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute rounded-full bg-gradient-to-r from-purple-400/20 to-cyan-400/20'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 4}px`,
              height: `${Math.random() * 6 + 4}px`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Header Section */}
      <section className='relative min-h-screen flex items-center justify-center pt-20'>
        <div className='container mx-auto px-4 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='max-w-5xl mx-auto'
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className='inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full border border-purple-500/30 mb-8'
            >
              <Plane className='w-5 h-5 text-purple-400' />
              <span className='text-sm font-medium'>Tourist Visa Services</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className='text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent'
            >
              Explore the World
              <span className='block text-5xl md:text-7xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent'>
                with Ease
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className='text-xl md:text-2xl text-neutral-300 mb-12 max-w-3xl mx-auto leading-relaxed'
            >
              Your gateway to hassle-free tourist visa applications. Experience
              seamless travel with our AI-powered visa processing platform.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-16'
            >
              <Link href='/consultation-booking'>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 20px 40px rgba(139, 92, 246, 0.3)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  className='group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl font-semibold text-lg overflow-hidden'
                >
                  <div className='absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity' />
                  <div className='relative flex items-center gap-3'>
                    <span>Apply Now</span>
                    <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                  </div>
                </motion.button>
              </Link>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='px-8 py-4 border border-neutral-600 rounded-2xl font-semibold text-lg hover:border-purple-400 transition-colors'
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto'
            >
              {[
                { icon: Award, value: '99.2%', label: 'Success Rate' },
                { icon: Users, value: '50K+', label: 'Happy Travelers' },
                { icon: Globe, value: '200+', label: 'Countries' },
                { icon: Clock, value: '24/7', label: 'Support' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className='text-center p-6 rounded-2xl bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 border border-neutral-700/50 backdrop-blur-sm'
                >
                  <stat.icon className='w-8 h-8 text-purple-400 mx-auto mb-3' />
                  <div className='text-2xl font-bold text-white mb-1'>
                    {stat.value}
                  </div>
                  <div className='text-sm text-neutral-400'>{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className='relative py-32'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center mb-20'
          >
            <h2 className='text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent'>
              Why Choose VANHSYA
            </h2>
            <p className='text-xl text-neutral-400 max-w-3xl mx-auto'>
              Experience revolutionary tourist visa services with cutting-edge
              technology and unmatched expertise
            </p>
          </motion.div>

          <div className='grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                onMouseEnter={() => setActiveFeature(index)}
                className={`group relative p-8 rounded-3xl border transition-all duration-500 cursor-pointer ${
                  activeFeature === index
                    ? 'border-purple-500/50 bg-gradient-to-br from-neutral-900/90 to-neutral-800/50 shadow-2xl shadow-purple-500/10'
                    : 'border-neutral-700/50 bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 hover:border-purple-500/30'
                }`}
              >
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <motion.div
                  animate={
                    activeFeature === index
                      ? { scale: 1.1, rotateY: 180 }
                      : { scale: 1, rotateY: 0 }
                  }
                  transition={{ duration: 0.5 }}
                  className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-purple-500/20`}
                >
                  <feature.icon className='w-8 h-8 text-white' />
                </motion.div>

                <div className='relative'>
                  <h3 className='text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors'>
                    {feature.title}
                  </h3>
                  <p className='text-neutral-400 mb-6 leading-relaxed'>
                    {feature.description}
                  </p>

                  <ul className='space-y-3 mb-6'>
                    {feature.details.map((detail, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 + idx * 0.1 }}
                        className='flex items-center gap-3 text-neutral-300 text-sm'
                      >
                        <CheckCircle2 className='w-4 h-4 text-green-400 flex-shrink-0' />
                        {detail}
                      </motion.li>
                    ))}
                  </ul>

                  <div className='flex items-center justify-between pt-6 border-t border-neutral-700/50'>
                    <div>
                      <div className='text-2xl font-bold text-white'>
                        {feature.stats.value}
                      </div>
                      <div className='text-sm text-neutral-500'>
                        {feature.stats.label}
                      </div>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className='p-2 rounded-lg bg-neutral-800/50 group-hover:bg-purple-600/20 transition-colors'
                    >
                      <ArrowRight className='w-5 h-5 text-neutral-400 group-hover:text-purple-400' />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section className='relative py-32 bg-gradient-to-br from-neutral-900/50 to-neutral-800/30'>
        <div className='container mx-auto px-4'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center mb-20'
          >
            <h2 className='text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent'>
              Popular Destinations
            </h2>
            <p className='text-xl text-neutral-400 max-w-3xl mx-auto'>
              Discover visa requirements and processing times for the world's
              most sought-after travel destinations
            </p>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
            {popularDestinations.map((destination, index) => (
              <motion.div
                key={destination.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className='group p-6 rounded-2xl bg-gradient-to-br from-neutral-900/80 to-neutral-800/50 border border-neutral-700/50 hover:border-purple-500/30 transition-all duration-300'
              >
                <div className='flex items-center gap-4 mb-4'>
                  <span className='text-3xl'>{destination.flag}</span>
                  <div>
                    <h3 className='text-lg font-semibold text-white group-hover:text-purple-300 transition-colors'>
                      {destination.name}
                    </h3>
                    <p className='text-sm text-neutral-400'>Tourist Visa</p>
                  </div>
                </div>

                <div className='space-y-3'>
                  <div className='flex justify-between items-center'>
                    <span className='text-neutral-400 text-sm'>
                      Processing Time
                    </span>
                    <span className='text-white font-medium'>
                      {destination.processing}
                    </span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-neutral-400 text-sm'>
                      Starting Price
                    </span>
                    <span className='text-green-400 font-bold'>
                      {destination.price}
                    </span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='w-full mt-6 py-3 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 border border-purple-500/30 rounded-xl text-white font-medium hover:from-purple-600/30 hover:to-indigo-600/30 transition-all duration-300'
                >
                  Apply Now
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className='relative py-32'>
        <div className='container mx-auto px-4 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='max-w-4xl mx-auto'
          >
            <h2 className='text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent'>
              Start Your Journey Today
            </h2>
            <p className='text-xl text-neutral-400 mb-12 max-w-2xl mx-auto'>
              Don't let visa complexities hold back your travel dreams. Our
              expert team is ready to make your tourist visa application
              seamless and successful.
            </p>

            <div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
              <Link href='/consultation-booking'>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 20px 40px rgba(139, 92, 246, 0.3)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  className='group px-10 py-5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl font-bold text-lg text-white hover:from-purple-500 hover:to-indigo-500 transition-all duration-300'
                >
                  <div className='flex items-center gap-3'>
                    <span>Apply Now</span>
                    <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
                  </div>
                </motion.button>
              </Link>

              <Link href='/contact'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='px-10 py-5 border-2 border-neutral-600 rounded-2xl font-bold text-lg text-white hover:border-purple-400 hover:text-purple-400 transition-all duration-300'
                >
                  Get Expert Consultation
                </motion.button>
              </Link>
            </div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className='mt-16 p-8 rounded-2xl bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 border border-neutral-700/50 max-w-2xl mx-auto'
            >
              <div className='flex flex-col md:flex-row items-center justify-center gap-8'>
                <div className='flex items-center gap-3'>
                  <Phone className='w-5 h-5 text-purple-400' />
                  <span className='text-neutral-300'>+1 (555) 123-4567</span>
                </div>
                <div className='flex items-center gap-3'>
                  <FileText className='w-5 h-5 text-cyan-400' />
                  <span className='text-neutral-300'>
                    24/7 Support Available
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
