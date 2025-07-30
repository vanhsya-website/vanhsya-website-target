'use client';

import React, { useState, useEffect } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from 'framer-motion';
import {
  SparklesIcon,
  GlobeAmericasIcon,
  UserGroupIcon,
  TrophyIcon,
  ArrowRightIcon,
  PlayIcon,
  CheckCircleIcon,
  StarIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

import { generateFloatingElements } from '@/utils/deterministicRandom';

interface CountryCard {
  name: string;
  flag: string;
  successRate: number;
  processing: string;
  popular: boolean;
}

interface StatCard {
  value: string;
  label: string;
  icon: React.ComponentType<any>;
  color: string;
}

interface TestimonialCard {
  name: string;
  country: string;
  quote: string;
  image: string;
  rating: number;
}

const countries: CountryCard[] = [
  {
    name: 'Canada',
    flag: '🇨🇦',
    successRate: 94,
    processing: '6-8 months',
    popular: true,
  },
  {
    name: 'Australia',
    flag: '🇦🇺',
    successRate: 91,
    processing: '8-12 months',
    popular: true,
  },
  {
    name: 'New Zealand',
    flag: '🇳🇿',
    successRate: 88,
    processing: '6-10 months',
    popular: false,
  },
  {
    name: 'Germany',
    flag: '🇩🇪',
    successRate: 85,
    processing: '4-6 months',
    popular: true,
  },
  {
    name: 'UK',
    flag: '🇬🇧',
    successRate: 82,
    processing: '3-5 months',
    popular: false,
  },
  {
    name: 'Netherlands',
    flag: '🇳🇱',
    successRate: 87,
    processing: '5-7 months',
    popular: false,
  },
];

const stats: StatCard[] = [
  {
    value: '25K+',
    label: 'Successful Cases',
    icon: TrophyIcon,
    color: 'text-yellow-600 bg-yellow-100',
  },
  {
    value: '50+',
    label: 'Countries',
    icon: GlobeAmericasIcon,
    color: 'text-blue-600 bg-blue-100',
  },
  {
    value: '15+',
    label: 'Years Experience',
    icon: StarIcon,
    color: 'text-purple-600 bg-purple-100',
  },
  {
    value: '24/7',
    label: 'Support',
    icon: UserGroupIcon,
    color: 'text-green-600 bg-green-100',
  },
];

const testimonials: TestimonialCard[] = [
  {
    name: 'Priya Sharma',
    country: 'Canada',
    quote:
      'VANHSYA made my Canadian dream come true. Their AI-powered guidance was incredible!',
    image: '/api/placeholder/60/60',
    rating: 5,
  },
  {
    name: 'Ahmed Hassan',
    country: 'Australia',
    quote:
      "The most professional immigration service I've ever experienced. Highly recommended!",
    image: '/api/placeholder/60/60',
    rating: 5,
  },
  {
    name: 'Maria Rodriguez',
    country: 'Germany',
    quote:
      'From start to finish, VANHSYA was with me every step. Amazing team and results!',
    image: '/api/placeholder/60/60',
    rating: 5,
  },
];

const features = [
  'AI-Powered Document Analysis',
  'Real-Time Application Tracking',
  'Expert Legal Consultation',
  'Success Rate Prediction',
  'Multilingual Support',
  'Priority Processing',
];

export default function HeroEnhanced() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [activeCountry, setActiveCountry] = useState<string | null>(null);
  const { scrollY } = useScroll();

  // Generate deterministic floating elements to prevent hydration mismatch
  const floatingElements = generateFloatingElements(
    20,
    'hero-premium-particles'
  );

  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0.5]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className='relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
      {/* Animated Background Elements */}
      <div className='absolute inset-0'>
        <motion.div
          style={{ y: y1 }}
          className='absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl'
        />
        <motion.div
          style={{ y: y2 }}
          className='absolute top-40 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl'
        />
        <motion.div
          style={{ y: y1 }}
          className='absolute bottom-20 left-1/2 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl'
        />
      </div>

      {/* Floating Particles */}
      <div className='absolute inset-0'>
        {floatingElements.map(element => (
          <motion.div
            key={element.id}
            className='absolute w-1 h-1 bg-white/20 rounded-full'
            initial={{
              x: `${element.left}%`,
              y: `${element.top}%`,
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              delay: element.delay,
            }}
          />
        ))}
      </div>

      <div className='relative z-10 container mx-auto px-6 py-8'>
        {/* Navigation Enhancement */}
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className='flex items-center justify-between mb-16'
        >
          <div className='flex items-center gap-3'>
            <div className='w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center'>
              <SparklesIcon className='w-6 h-6 text-white' />
            </div>
            <span className='text-2xl font-bold text-white'>VANHSYA</span>
          </div>

          <div className='hidden md:flex items-center gap-8 text-white/80'>
            <Link
              href='/services'
              className='hover:text-white transition-colors'
            >
              Services
            </Link>
            <Link
              href='/countries'
              className='hover:text-white transition-colors'
            >
              Countries
            </Link>
            <Link
              href='/ai-tools'
              className='hover:text-white transition-colors'
            >
              AI Tools
            </Link>
            <Link
              href='/success-stories'
              className='hover:text-white transition-colors'
            >
              Success Stories
            </Link>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full hover:bg-white/20 transition-all'
          >
            Get Started
          </motion.button>
        </motion.nav>

        <div className='grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]'>
          {/* Left Column - Main Content */}
          <motion.div style={{ opacity }} className='space-y-8'>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className='inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90'
            >
              <SparklesIcon className='w-4 h-4' />
              <span className='text-sm font-medium'>
                AI-Powered Immigration Solutions
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className='space-y-4'
            >
              <h1 className='text-5xl lg:text-7xl font-bold leading-tight'>
                <span className='text-white'>Your </span>
                <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
                  Dream Country
                </span>
                <span className='text-white'> Awaits</span>
              </h1>

              <p className='text-xl text-white/80 leading-relaxed max-w-lg'>
                Experience the future of immigration with our AI-powered
                platform. From document analysis to success prediction - we make
                your journey seamless.
              </p>
            </motion.div>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className='grid grid-cols-2 gap-3'
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className='flex items-center gap-2 text-white/90'
                >
                  <CheckCircleIcon className='w-5 h-5 text-green-400' />
                  <span className='text-sm'>{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className='flex flex-col sm:flex-row gap-4'
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 10px 30px rgba(147, 51, 234, 0.3)',
                }}
                whileTap={{ scale: 0.95 }}
                className='px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full flex items-center gap-2 group'
              >
                Start Your Journey
                <ArrowRightIcon className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsVideoPlaying(true)}
                className='px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full flex items-center gap-2 hover:bg-white/20 transition-all'
              >
                <PlayIcon className='w-5 h-5' />
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className='grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8'
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className='text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10'
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 ${stat.color}`}
                    >
                      <Icon className='w-6 h-6' />
                    </div>
                    <div className='text-2xl font-bold text-white'>
                      {stat.value}
                    </div>
                    <div className='text-sm text-white/60'>{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Column - Interactive Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className='space-y-8'
          >
            {/* Country Cards */}
            <div className='space-y-4'>
              <h3 className='text-xl font-semibold text-white mb-6'>
                Popular Destinations
              </h3>
              <div className='grid grid-cols-2 gap-4'>
                {countries.map((country, index) => (
                  <motion.div
                    key={country.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    onHoverStart={() => setActiveCountry(country.name)}
                    onHoverEnd={() => setActiveCountry(null)}
                    className='relative p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl cursor-pointer group overflow-hidden'
                  >
                    {country.popular && (
                      <div className='absolute top-2 right-2 px-2 py-1 bg-yellow-500 text-black text-xs font-bold rounded-full'>
                        Popular
                      </div>
                    )}

                    <div className='text-3xl mb-2'>{country.flag}</div>
                    <div className='text-white font-semibold'>
                      {country.name}
                    </div>
                    <div className='text-white/60 text-sm'>
                      {country.processing}
                    </div>

                    <div className='mt-3 flex items-center gap-2'>
                      <div className='flex-1 bg-white/20 rounded-full h-2'>
                        <motion.div
                          className='h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full'
                          initial={{ width: 0 }}
                          animate={{
                            width:
                              activeCountry === country.name
                                ? `${country.successRate}%`
                                : '0%',
                          }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                        />
                      </div>
                      <span className='text-white/80 text-sm font-medium'>
                        {country.successRate}%
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Testimonial Carousel */}
            <div className='relative p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl'>
              <h3 className='text-lg font-semibold text-white mb-4'>
                Client Success Stories
              </h3>

              <AnimatePresence mode='wait'>
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className='space-y-4'
                >
                  <div className='flex items-center gap-3'>
                    <div className='w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold'>
                      {testimonials[currentTestimonial].name.charAt(0)}
                    </div>
                    <div>
                      <div className='text-white font-medium'>
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className='text-white/60 text-sm'>
                        Migrated to {testimonials[currentTestimonial].country}
                      </div>
                    </div>
                  </div>

                  <p className='text-white/90 text-sm leading-relaxed'>
                    "{testimonials[currentTestimonial].quote}"
                  </p>

                  <div className='flex items-center gap-1'>
                    {[...Array(testimonials[currentTestimonial].rating)].map(
                      (_, i) => (
                        <StarIcon
                          key={i}
                          className='w-4 h-4 text-yellow-400 fill-current'
                        />
                      )
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Testimonial Indicators */}
              <div className='flex justify-center gap-2 mt-4'>
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentTestimonial === index ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Quick Calculator Preview */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className='p-6 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-white/20 rounded-xl cursor-pointer'
            >
              <div className='flex items-center justify-between mb-4'>
                <h3 className='text-lg font-semibold text-white'>
                  Quick Assessment
                </h3>
                <ArrowRightIcon className='w-5 h-5 text-white/60' />
              </div>
              <p className='text-white/80 text-sm mb-4'>
                Get your immigration score in under 5 minutes
              </p>
              <Link
                href='/ai-tools/immigration-calculator'
                className='inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-all'
              >
                Start Calculator
                <ArrowRightIcon className='w-4 h-4' />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={scrollToNextSection}
          className='absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-colors'
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className='flex flex-col items-center gap-2'
          >
            <span className='text-sm'>Explore More</span>
            <ChevronDownIcon className='w-6 h-6' />
          </motion.div>
        </motion.button>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm'
            onClick={() => setIsVideoPlaying(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className='relative w-full max-w-4xl mx-4 aspect-video bg-gray-900 rounded-xl overflow-hidden'
              onClick={e => e.stopPropagation()}
            >
              <div className='absolute inset-0 flex items-center justify-center text-white'>
                <div className='text-center'>
                  <PlayIcon className='w-16 h-16 mx-auto mb-4 opacity-60' />
                  <p className='text-lg'>Demo video would play here</p>
                  <button
                    onClick={() => setIsVideoPlaying(false)}
                    className='mt-4 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors'
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
