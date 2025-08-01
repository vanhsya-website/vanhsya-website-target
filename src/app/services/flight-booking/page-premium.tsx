'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  Plane,
  MapPin,
  Calendar,
  Users,
  Shield,
  Star,
  Clock,
  ArrowRight,
  CheckCircle,
  Globe,
  Zap,
  Target,
  Brain,
  Bot,
  Sparkles,
  Network,
  Filter,
  CreditCard,
  Award,
  Building,
  TrendingUp,
  Phone,
  Mail,
  Search,
} from 'lucide-react';

// Flight booking stats
const flightStats = {
  bookingsCompleted: '0',
  averageSavings: '35%',
  aiOptimizations: '0',
  routesAvailable: '10K+',
  customerSatisfaction: '97.2%',
  avgBookingTime: '3 mins',
  partnersConnected: '500+',
  destinationsCovered: '2000+',
};

// Flight categories
const flightCategories = [
  {
    id: 'business',
    title: 'Business Class',
    icon: Building,
    description: 'Premium comfort for business travelers',
    color: 'from-amber-500 to-orange-600',
    features: [
      'Priority check-in & boarding',
      'Extra legroom & comfort',
      'Premium meals & service',
      'Lounge access included',
      'Flexible change policy',
    ],
    routes: [
      { from: 'Toronto', to: 'London', price: '$2,899', duration: '8h 45m' },
      { from: 'Vancouver', to: 'Tokyo', price: '$3,299', duration: '10h 30m' },
      { from: 'Mumbai', to: 'New York', price: '$2,599', duration: '15h 20m' },
    ],
    avgPrice: '$2,899',
    popularTimes: 'Mon-Thu',
  },
  {
    id: 'economy',
    title: 'Economy Class',
    icon: Users,
    description: 'Affordable travel without compromising quality',
    color: 'from-blue-500 to-indigo-600',
    features: [
      'Best value for money',
      'Standard baggage allowance',
      'In-flight entertainment',
      'Meal service on long flights',
      'Seat selection options',
    ],
    routes: [
      { from: 'Delhi', to: 'Sydney', price: '$899', duration: '12h 15m' },
      { from: 'London', to: 'Toronto', price: '$699', duration: '8h 30m' },
      { from: 'Dubai', to: 'Los Angeles', price: '$1,199', duration: '16h 45m' },
    ],
    avgPrice: '$899',
    popularTimes: 'Fri-Sun',
  },
  {
    id: 'first',
    title: 'First Class',
    icon: Award,
    description: 'Ultimate luxury and personalized service',
    color: 'from-purple-500 to-pink-600',
    features: [
      'Private suites & beds',
      'Gourmet dining experience',
      'Dedicated personal service',
      'Exclusive lounge access',
      'Limousine transfers',
    ],
    routes: [
      { from: 'London', to: 'Dubai', price: '$8,999', duration: '7h 30m' },
      { from: 'New York', to: 'Singapore', price: '$12,499', duration: '18h 50m' },
      { from: 'Paris', to: 'Hong Kong', price: '$9,799', duration: '12h 20m' },
    ],
    avgPrice: '$10,432',
    popularTimes: 'Any day',
  },
  {
    id: 'charter',
    title: 'Private Charter',
    icon: Star,
    description: 'Exclusive flights tailored to your schedule',
    color: 'from-emerald-500 to-teal-600',
    features: [
      'Flexible departure times',
      'Custom flight routes',
      'Privacy & exclusivity',
      'Luxury aircraft options',
      'Concierge services',
    ],
    routes: [
      { from: 'Any City', to: 'Any Destination', price: '$25,000+', duration: 'Variable' },
      { from: 'Private Terminal', to: 'Private Terminal', price: 'Custom', duration: 'On-demand' },
      { from: 'Your Schedule', to: 'Your Choice', price: 'Quote', duration: 'Flexible' },
    ],
    avgPrice: 'Custom',
    popularTimes: 'On-demand',
  },
];

// AI flight services
const aiFlightServices = [
  {
    icon: Brain,
    title: 'Smart Price Predictor',
    description: 'AI analyzes pricing trends to find the best booking time',
    color: 'from-purple-500 to-indigo-600',
  },
  {
    icon: Target,
    title: 'Route Optimizer',
    description: 'Find the most efficient routes with optimal connections',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: Zap,
    title: 'Instant Rebooking',
    description: 'AI automatically finds alternatives for disrupted flights',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Network,
    title: 'Travel Assistant',
    description: 'Personalized recommendations based on your preferences',
    color: 'from-orange-500 to-red-600',
  },
];

export default function FlightBookingPage() {
  const [selectedCategory, setSelectedCategory] = useState(flightCategories[0]);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const categoriesInView = useInView(categoriesRef, { once: true, amount: 0.2 });
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

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
        <div className='absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/30' />
        <div className='absolute inset-0'>
          {Array.from({ length: 60 }, (_, i) => (
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
          <motion.div
            style={{ y: heroY }}
            className='container mx-auto px-4 sm:px-6 lg:px-8'
          >
            <div className='text-center max-w-6xl mx-auto'>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, type: 'spring' }}
                className='inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-xl mb-8'
              >
                <Plane className='w-6 h-6 text-blue-400' />
                <span className='text-blue-300 font-medium'>AI-Powered Flight Booking</span>
                <Globe className='w-6 h-6 text-purple-400' />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                className='text-5xl md:text-7xl lg:text-8xl font-bold mb-8'
              >
                <span className='bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-pulse'>
                  Fly Smart
                </span>
                <br />
                <span className='text-white'>Book Smarter</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className='text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-4xl mx-auto'
              >
                Experience the future of flight booking with AI-powered price predictions, 
                smart routing, and personalized travel recommendations.
              </motion.p>

              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
                className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-12'
              >
                <div className='text-center'>
                  <div className='text-3xl md:text-4xl font-bold text-blue-400 mb-2'>
                    {flightStats.bookingsCompleted}
                  </div>
                  <div className='text-white/60 text-sm'>Bookings</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl md:text-4xl font-bold text-purple-400 mb-2'>
                    {flightStats.averageSavings}
                  </div>
                  <div className='text-white/60 text-sm'>Avg Savings</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl md:text-4xl font-bold text-blue-400 mb-2'>
                    {flightStats.routesAvailable}
                  </div>
                  <div className='text-white/60 text-sm'>Routes</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl md:text-4xl font-bold text-purple-400 mb-2'>
                    {flightStats.customerSatisfaction}
                  </div>
                  <div className='text-white/60 text-sm'>Satisfaction</div>
                </div>
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
                  className='px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-500 rounded-full text-white font-bold text-lg shadow-2xl border border-blue-400/30'
                >
                  <span className='flex items-center gap-2'>
                    <Search className='w-6 h-6' />
                    Search Flights
                    <ArrowRight className='w-6 h-6' />
                  </span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white font-medium text-lg hover:bg-white/20 transition-all'
                >
                  <span className='flex items-center gap-2'>
                    <Target className='w-6 h-6' />
                    Price Alerts
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Flight Categories */}
        <section ref={categoriesRef} className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={categoriesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-center mb-20'
            >
              <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='text-white'>Flight </span>
                <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                  Classes
                </span>
              </h2>
              <p className='text-xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
                Choose from economy to first class, or charter your own private flight.
              </p>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
              {flightCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={categoriesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`group cursor-pointer ${selectedCategory.id === category.id ? 'scale-105' : ''} transition-all duration-500`}
                >
                  <div className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border rounded-3xl p-8 h-full transition-all duration-500 ${
                    selectedCategory.id === category.id ? 'border-blue-500/50 shadow-lg shadow-blue-500/25' : 'border-white/10 hover:border-blue-500/30'
                  }`}>
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className='w-8 h-8 text-white' />
                    </div>
                    <h3 className='text-xl font-bold text-white mb-4'>{category.title}</h3>
                    <p className='text-white/70 leading-relaxed mb-4'>{category.description}</p>
                    <div className='text-blue-400 font-medium text-sm'>
                      From {category.avgPrice}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Selected Category Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12'
              >
                <div className='flex items-center gap-4 mb-8'>
                  <div className={`w-16 h-16 bg-gradient-to-r ${selectedCategory.color} rounded-2xl flex items-center justify-center`}>
                    <selectedCategory.icon className='w-8 h-8 text-white' />
                  </div>
                  <div>
                    <h3 className='text-3xl font-bold text-white mb-2'>{selectedCategory.title}</h3>
                    <p className='text-white/70'>{selectedCategory.description}</p>
                  </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                  <div>
                    <h4 className='text-white font-semibold mb-6 flex items-center gap-2'>
                      <Star className='w-5 h-5 text-blue-400' />
                      Features & Benefits
                    </h4>
                    <div className='space-y-3'>
                      {selectedCategory.features.map((feature, index) => (
                        <div key={index} className='flex items-center gap-3'>
                          <CheckCircle className='w-5 h-5 text-emerald-400 flex-shrink-0' />
                          <span className='text-white/80'>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className='text-white font-semibold mb-6 flex items-center gap-2'>
                      <Plane className='w-5 h-5 text-purple-400' />
                      Popular Routes
                    </h4>
                    <div className='space-y-4'>
                      {selectedCategory.routes.map((route, index) => (
                        <div key={index} className='bg-white/5 rounded-xl p-4'>
                          <div className='flex items-center justify-between mb-2'>
                            <div className='flex items-center gap-2'>
                              <MapPin className='w-4 h-4 text-blue-400' />
                              <span className='text-white font-medium'>{route.from} → {route.to}</span>
                            </div>
                            <span className='text-purple-400 font-semibold'>{route.price}</span>
                          </div>
                          <div className='text-white/60 text-sm flex items-center gap-2'>
                            <Clock className='w-4 h-4' />
                            {route.duration}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* AI Flight Services */}
        <section ref={servicesRef} className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-center mb-20'
            >
              <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                  AI Flight
                </span>
                <br />
                <span className='text-white'>Services</span>
              </h2>
              <p className='text-xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
                Advanced AI technology to optimize your flight booking experience.
              </p>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {aiFlightServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className='group'
                >
                  <div className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full hover:border-blue-500/30 transition-all duration-500'>
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className='w-8 h-8 text-white' />
                    </div>
                    <h3 className='text-xl font-bold text-white mb-4'>{service.title}</h3>
                    <p className='text-white/70 leading-relaxed'>{service.description}</p>
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
                  <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                    Take Off
                  </span>
                  <span className='text-white'>?</span>
                </h2>
                <p className='text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed'>
                  Book your next flight with AI-powered optimization and enjoy smart savings.
                </p>

                <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-12'>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    className='px-10 py-5 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-500 rounded-full text-white font-bold text-xl shadow-2xl border border-blue-400/30'
                  >
                    <span className='flex items-center gap-3'>
                      <Search className='w-6 h-6' />
                      Search Flights
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
                      24/7 Support
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
                    <span>flights@vanhsya.com</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Shield className='w-5 h-5' />
                    <span>Price Protection</span>
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
