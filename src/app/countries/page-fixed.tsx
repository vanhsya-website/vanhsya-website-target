'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  MapPin,
  DollarSign,
  Clock,
  CheckCircle,
  Star,
  TrendingUp,
} from 'lucide-react';
import Link from 'next/link';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const countries = [
  {
    name: 'Canada',
    flag: '🇨🇦',
    description:
      'World-class healthcare, excellent education system, and high quality of life',
    gradient: 'card-purple',
    stats: {
      programs: '80+',
      processing: '6-12 months',
      investment: '$13,310 CAD',
      success: '97%',
    },
    highlights: [
      'Express Entry System',
      'Provincial Nominee Program',
      'Free Healthcare',
      'Multicultural Society',
    ],
    href: '/countries/canada',
  },
  {
    name: 'Australia',
    flag: '🇦🇺',
    description:
      'Strong economy, beautiful landscapes, and excellent work-life balance',
    gradient: 'card-cyan',
    stats: {
      programs: '60+',
      processing: '8-16 months',
      investment: '$4,045 AUD',
      success: '94%',
    },
    highlights: [
      'SkillSelect System',
      'State Nomination',
      'Points-based Immigration',
      'World-class Universities',
    ],
    href: '/countries/australia',
  },
  {
    name: 'United States',
    flag: '🇺🇸',
    description: 'Global opportunities, diverse culture, and innovation hub',
    gradient: 'card-orange',
    stats: {
      programs: '50+',
      processing: '12-24 months',
      investment: '$1,140 USD',
      success: '89%',
    },
    highlights: [
      'EB-5 Investment Program',
      'H1-B Work Visas',
      'Diversity Lottery',
      'Innovation Ecosystem',
    ],
    href: '/countries/usa',
  },
];

const popularDestinations = [
  { country: 'Canada', percentage: '35%', trend: '+12%' },
  { country: 'Australia', percentage: '28%', trend: '+8%' },
  { country: 'USA', percentage: '18%', trend: '+5%' },
  { country: 'UK', percentage: '12%', trend: '+15%' },
  { country: 'Germany', percentage: '5%', trend: '+20%' },
  { country: 'Others', percentage: '2%', trend: '+10%' },
];

export default function CountriesPage() {
  return (
    <div className='min-h-screen hero-red-blue-enhanced'>
      <Navigation />

      {/* Enhanced Hero Section with Red-Blue Theme */}
      <section className='relative py-32 overflow-hidden'>
        {/* Animated Background Elements */}
        <div className='absolute inset-0'>
          <motion.div
            className='absolute w-96 h-96 rounded-full top-10 left-10 bg-gradient-to-br from-red-400/35 to-pink-400/25 blur-3xl'
            animate={{
              x: [0, 120, 0],
              y: [0, -60, 0],
              scale: [1, 1.4, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className='absolute w-80 h-80 rounded-full top-40 right-10 bg-gradient-to-br from-blue-400/35 to-sky-400/25 blur-3xl'
            animate={{
              x: [0, -90, 0],
              y: [0, 70, 0],
              scale: [1, 0.7, 1],
              rotate: [0, -120, 0],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center mb-16'
          >
            <h1 className='text-5xl md:text-7xl font-black text-white-enhanced mb-8'>
              Explore{' '}
              <span className='text-gradient-red-blue'>
                Immigration Destinations
              </span>
            </h1>
            <p className='text-xl md:text-2xl text-readable-dark max-w-4xl mx-auto leading-relaxed mb-12'>
              Discover the best countries for immigration based on your profile,
              career goals, and lifestyle preferences.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href='/tools/country-selector'
                className='btn-red-blue-primary px-8 py-4 rounded-2xl text-lg font-bold inline-flex items-center gap-3 transition-all duration-300'
              >
                <MapPin className='w-6 h-6' />
                Find Your Ideal Country
                <ArrowRight className='w-6 h-6 transition-transform group-hover:translate-x-1' />
              </Link>
            </motion.div>
          </motion.div>

          {/* Enhanced Popular Destinations Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='card-red-blue-theme rounded-3xl p-8 max-w-5xl mx-auto'
          >
            <h3 className='text-3xl font-black text-gradient-red-blue mb-8 text-center'>
              2024 Popular Destinations
            </h3>
            <div className='grid grid-cols-2 md:grid-cols-6 gap-6'>
              {popularDestinations.map((dest, index) => (
                <motion.div
                  key={dest.country}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className='text-center'
                >
                  <div className='text-2xl font-bold text-gradient-red-blue'>
                    {dest.percentage}
                  </div>
                  <div className='text-readable-light text-sm font-semibold'>
                    {dest.country}
                  </div>
                  <div className='text-green-500 text-xs font-medium'>
                    {dest.trend}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Countries Grid */}
      <section className='section-red-blue-light py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-black mb-6 text-gradient-red-blue'>
              Top Immigration Destinations
            </h2>
            <p className='text-xl text-readable-light max-w-3xl mx-auto'>
              Choose from our comprehensive range of immigration services
              designed to make your journey smooth and successful.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {countries.map((country, index) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                className='card-red-blue-theme rounded-3xl p-8 group cursor-pointer hover:scale-105 transition-all duration-300'
                whileHover={{ y: -8 }}
              >
                <div className='flex items-center gap-4 mb-6'>
                  <div className='text-4xl'>{country.flag}</div>
                  <div>
                    <h3 className='text-2xl font-bold text-gradient-red-blue mb-2'>
                      {country.name}
                    </h3>
                  </div>
                </div>

                <p className='text-readable-light mb-6 leading-relaxed'>
                  {country.description}
                </p>

                {/* Stats Grid */}
                <div className='grid grid-cols-2 gap-4 mb-6'>
                  <div className='text-center'>
                    <div className='text-xl font-bold text-gradient-red-blue'>
                      {country.stats.programs}
                    </div>
                    <div className='text-readable-light text-xs'>Programs</div>
                  </div>
                  <div className='text-center'>
                    <div className='text-xl font-bold text-gradient-red-blue'>
                      {country.stats.processing}
                    </div>
                    <div className='text-readable-light text-xs'>
                      Processing
                    </div>
                  </div>
                  <div className='text-center'>
                    <div className='text-xl font-bold text-gradient-red-blue'>
                      {country.stats.success}
                    </div>
                    <div className='text-readable-light text-xs'>
                      Success Rate
                    </div>
                  </div>
                  <div className='text-center'>
                    <div className='text-xl font-bold text-gradient-red-blue'>
                      {country.stats.investment}
                    </div>
                    <div className='text-readable-light text-xs'>
                      Min. Investment
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className='space-y-2 mb-6'>
                  {country.highlights.map((highlight, highlightIndex) => (
                    <motion.div
                      key={highlight}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.1 + highlightIndex * 0.05,
                      }}
                      viewport={{ once: true }}
                      className='flex items-center gap-2 text-readable-light text-sm'
                    >
                      <CheckCircle className='w-4 h-4 text-green-500' />
                      {highlight}
                    </motion.div>
                  ))}
                </div>

                <Link
                  href={country.href}
                  className='btn-red-blue-primary w-full py-3 text-center rounded-xl font-bold text-sm transition-all duration-300 inline-flex items-center justify-center gap-2'
                >
                  Learn More
                  <ArrowRight className='w-4 h-4 transition-transform group-hover:translate-x-1' />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
