'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  MapPin,
  Camera,
  Plane,
  Compass,
  Globe,
  Users,
  Award,
  ArrowRight,
  CheckCircle,
  Clock,
  Star,
  Calendar,
  Phone,
  Mail,
  Heart,
  Mountain,
  Waves,
  Sun,
  Building,
  Target,
  Zap,
  Brain,
  Bot,
  Sparkles,
  Shield,
  Network,
  DollarSign,
  FileText,
} from 'lucide-react';

// Tourist visa stats
const touristVisaStats = {
  totalApplications: '0',
  successRate: '96.8%',
  averageProcessing: '5-15 days',
  countriesSupported: '50+',
  fastTrackAvailable: 'Yes',
  multipleEntry: 'Available',
  averageDuration: '30-90 days',
  expeditedService: '24-48 hours',
};

// Popular tourist destinations
const touristDestinations = [
  {
    id: 'europe',
    name: 'Europe',
    flag: '🇪🇺',
    description: 'Historic cities, cultural heritage, and scenic landscapes',
    color: 'from-blue-500 to-indigo-600',
    countries: [
      {
        name: 'France',
        flag: '🇫🇷',
        duration: '90 days',
        processing: '5-10 days',
        requirements: [
          'Valid passport (6+ months)',
          'Proof of accommodation',
          'Travel insurance',
          'Financial statements',
        ],
        attractions: ['Eiffel Tower', 'Louvre Museum', 'Palace of Versailles', 'French Riviera'],
      },
      {
        name: 'Italy',
        flag: '🇮🇹',
        duration: '90 days',
        processing: '7-12 days',
        requirements: [
          'Schengen visa application',
          'Hotel bookings',
          'Return flight tickets',
          'Travel insurance €30,000',
        ],
        attractions: ['Colosseum', 'Vatican City', 'Venice Canals', 'Tuscany'],
      },
    ],
  },
  {
    id: 'asia',
    name: 'Asia',
    flag: '🌏',
    description: 'Ancient traditions, modern cities, and exotic experiences',
    color: 'from-emerald-500 to-teal-600',
    countries: [
      {
        name: 'Japan',
        flag: '🇯🇵',
        duration: '90 days',
        processing: '3-7 days',
        requirements: [
          'Valid passport',
          'Completed application form',
          'Recent photograph',
          'Flight itinerary',
        ],
        attractions: ['Mount Fuji', 'Tokyo Skyline', 'Kyoto Temples', 'Cherry Blossoms'],
      },
      {
        name: 'Thailand',
        flag: '🇹🇭',
        duration: '60 days',
        processing: '1-3 days',
        requirements: [
          'Passport validity 6 months',
          'Proof of onward travel',
          'Accommodation proof',
          'Financial evidence',
        ],
        attractions: ['Bangkok Temples', 'Phuket Beaches', 'Chiang Mai', 'Floating Markets'],
      },
    ],
  },
  {
    id: 'americas',
    name: 'Americas',
    flag: '🌎',
    description: 'Diverse landscapes from urban centers to natural wonders',
    color: 'from-orange-500 to-red-600',
    countries: [
      {
        name: 'United States',
        flag: '🇺🇸',
        duration: '180 days',
        processing: '3-5 days',
        requirements: [
          'ESTA authorization',
          'Valid passport',
          'Return ticket',
          'Proof of funds',
        ],
        attractions: ['Statue of Liberty', 'Grand Canyon', 'Times Square', 'Yellowstone'],
      },
      {
        name: 'Canada',
        flag: '🇨🇦',
        duration: '180 days',
        processing: '2-4 weeks',
        requirements: [
          'eTA or visitor visa',
          'Valid passport',
          'Purpose of visit letter',
          'Financial support proof',
        ],
        attractions: ['Niagara Falls', 'Banff National Park', 'CN Tower', 'Quebec City'],
      },
    ],
  },
  {
    id: 'oceania',
    name: 'Oceania',
    flag: '🇦🇺',
    description: 'Unique wildlife, pristine beaches, and adventure activities',
    color: 'from-purple-500 to-pink-600',
    countries: [
      {
        name: 'Australia',
        flag: '🇦🇺',
        duration: '90 days',
        processing: '7-14 days',
        requirements: [
          'Tourist visa (subclass 600)',
          'Health insurance',
          'Character requirements',
          'Genuine tourist intention',
        ],
        attractions: ['Sydney Opera House', 'Great Barrier Reef', 'Uluru', 'Melbourne'],
      },
    ],
  },
];

// AI-powered travel services
const aiTravelServices = [
  {
    icon: Brain,
    title: 'Smart Itinerary Planner',
    description: 'AI creates personalized travel plans based on your preferences and visa duration',
    color: 'from-purple-500 to-indigo-600',
  },
  {
    icon: Compass,
    title: 'Visa Requirement Checker',
    description: 'Intelligent system checks visa requirements and documents for any destination',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: Target,
    title: 'Travel Cost Optimizer',
    description: 'AI analyzes the best travel dates and routes for maximum savings',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Network,
    title: 'Local Experience Matcher',
    description: 'Connect with local guides and authentic experiences at your destination',
    color: 'from-orange-500 to-red-600',
  },
];

export default function TouristVisaPage() {
  const [selectedDestination, setSelectedDestination] = useState(touristDestinations[0]);
  const [selectedCountry, setSelectedCountry] = useState(0);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const destinationsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const destinationsInView = useInView(destinationsRef, { once: true, amount: 0.2 });
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  // Auto-rotate destinations
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedDestination(prev => {
        const currentIndex = touristDestinations.findIndex(d => d.id === prev.id);
        const nextIndex = (currentIndex + 1) % touristDestinations.length;
        return touristDestinations[nextIndex];
      });
    }, 10000);
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
        <div className='absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/30' />
        <div className='absolute inset-0'>
          {Array.from({ length: 60 }, (_, i) => (
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
                className='inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 backdrop-blur-xl mb-8'
              >
                <Camera className='w-6 h-6 text-purple-400' />
                <span className='text-purple-300 font-medium'>AI-Powered Tourist Visas</span>
                <Plane className='w-6 h-6 text-cyan-400' />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                className='text-5xl md:text-7xl lg:text-8xl font-bold mb-8'
              >
                <span className='bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-pulse'>
                  Global Travel
                </span>
                <br />
                <span className='text-white'>Made Simple</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className='text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-4xl mx-auto'
              >
                Explore the world with confidence using our AI-powered tourist visa solutions. 
                Smart planning, instant approvals, and unforgettable experiences await.
              </motion.p>

              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
                className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-12'
              >
                <div className='text-center'>
                  <div className='text-3xl md:text-4xl font-bold text-purple-400 mb-2'>
                    {touristVisaStats.totalApplications}
                  </div>
                  <div className='text-white/60 text-sm'>Visas Processed</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl md:text-4xl font-bold text-cyan-400 mb-2'>
                    {touristVisaStats.successRate}
                  </div>
                  <div className='text-white/60 text-sm'>Success Rate</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl md:text-4xl font-bold text-purple-400 mb-2'>
                    {touristVisaStats.countriesSupported}
                  </div>
                  <div className='text-white/60 text-sm'>Destinations</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl md:text-4xl font-bold text-cyan-400 mb-2'>
                    {touristVisaStats.expeditedService}
                  </div>
                  <div className='text-white/60 text-sm'>Fast Track</div>
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
                    <Compass className='w-6 h-6' />
                    Plan My Trip
                    <ArrowRight className='w-6 h-6' />
                  </span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white font-medium text-lg hover:bg-white/20 transition-all'
                >
                  <span className='flex items-center gap-2'>
                    <Globe className='w-6 h-6' />
                    Explore Destinations
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* AI Travel Services */}
        <section ref={servicesRef} className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-center mb-20'
            >
              <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent'>
                  Smart Travel
                </span>
                <br />
                <span className='text-white'>Solutions</span>
              </h2>
              <p className='text-xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
                Leverage AI technology to plan perfect trips and secure tourist visas effortlessly.
              </p>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {aiTravelServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className='group'
                >
                  <div className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full hover:border-purple-500/30 transition-all duration-500'>
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

        {/* Tourist Destinations */}
        <section ref={destinationsRef} className='py-32 relative'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={destinationsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className='text-center mb-20'
            >
              <h2 className='text-4xl md:text-6xl font-bold mb-6'>
                <span className='text-white'>Popular </span>
                <span className='bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent'>
                  Destinations
                </span>
              </h2>
              <p className='text-xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
                Discover amazing tourist destinations with simplified visa processes.
              </p>
            </motion.div>

            {/* Destination Tabs */}
            <div className='flex flex-wrap justify-center gap-4 mb-16'>
              {touristDestinations.map((destination, index) => (
                <motion.button
                  key={destination.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={destinationsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setSelectedDestination(destination)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedDestination.id === destination.id
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg'
                      : 'bg-white/10 backdrop-blur-xl border border-white/20 text-white/80 hover:bg-white/20'
                  }`}
                >
                  <span className='text-2xl'>{destination.flag}</span>
                  <span>{destination.name}</span>
                </motion.button>
              ))}
            </div>

            {/* Selected Destination Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedDestination.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className='bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12'
              >
                <div className='flex items-center gap-4 mb-8'>
                  <span className='text-6xl'>{selectedDestination.flag}</span>
                  <div>
                    <h3 className='text-3xl font-bold text-white mb-2'>{selectedDestination.name}</h3>
                    <p className='text-white/70'>{selectedDestination.description}</p>
                  </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                  {selectedDestination.countries.map((country, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className='bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300'
                    >
                      <div className='flex items-center gap-3 mb-4'>
                        <span className='text-3xl'>{country.flag}</span>
                        <h4 className='text-xl font-semibold text-white'>{country.name}</h4>
                      </div>

                      <div className='grid grid-cols-2 gap-4 mb-6'>
                        <div className='bg-white/5 rounded-xl p-3'>
                          <div className='flex items-center gap-2 mb-1'>
                            <Calendar className='w-4 h-4 text-cyan-400' />
                            <span className='text-white/70 text-sm'>Duration</span>
                          </div>
                          <span className='text-white font-medium'>{country.duration}</span>
                        </div>
                        <div className='bg-white/5 rounded-xl p-3'>
                          <div className='flex items-center gap-2 mb-1'>
                            <Clock className='w-4 h-4 text-purple-400' />
                            <span className='text-white/70 text-sm'>Processing</span>
                          </div>
                          <span className='text-white font-medium'>{country.processing}</span>
                        </div>
                      </div>

                      <div className='mb-6'>
                        <h5 className='text-white font-semibold mb-3 flex items-center gap-2'>
                          <FileText className='w-5 h-5 text-purple-400' />
                          Requirements
                        </h5>
                        <div className='space-y-2'>
                          {country.requirements.map((req, idx) => (
                            <div key={idx} className='flex items-center gap-2 text-sm text-white/70'>
                              <CheckCircle className='w-4 h-4 text-emerald-400 flex-shrink-0' />
                              <span>{req}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h5 className='text-white font-semibold mb-3 flex items-center gap-2'>
                          <Star className='w-5 h-5 text-yellow-400' />
                          Top Attractions
                        </h5>
                        <div className='grid grid-cols-2 gap-2'>
                          {country.attractions.map((attraction, idx) => (
                            <div key={idx} className='text-sm text-white/70 bg-white/5 rounded-lg px-3 py-2'>
                              {attraction}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
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
                  <span className='text-white'>Ready for Your </span>
                  <span className='bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent'>
                    Next Adventure
                  </span>
                  <span className='text-white'>?</span>
                </h2>
                <p className='text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed'>
                  Let our AI-powered platform create the perfect travel itinerary and handle your visa requirements seamlessly.
                </p>

                <div className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-12'>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(147, 51, 234, 0.5)' }}
                    whileTap={{ scale: 0.95 }}
                    className='px-10 py-5 bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 rounded-full text-white font-bold text-xl shadow-2xl border border-purple-400/30'
                  >
                    <span className='flex items-center gap-3'>
                      <Compass className='w-6 h-6' />
                      Start Planning
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
                      Travel Consultation
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
                    <span>travel@vanhsya.com</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Shield className='w-5 h-5' />
                    <span>24/7 Travel Support</span>
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
