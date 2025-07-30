'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import {
  MapPin,
  Users,
  Award,
  ArrowRight,
  Globe,
  Clock,
  Star,
  Search,
  Calendar,
  Building,
  GraduationCap,
  Briefcase,
  Heart,
} from 'lucide-react';

const regions = [
  { id: 'all', label: 'All Countries', count: 195 },
  { id: 'north-america', label: 'North America', count: 3 },
  { id: 'europe', label: 'Europe', count: 44 },
  { id: 'oceania', label: 'Oceania', count: 14 },
  { id: 'asia', label: 'Asia', count: 49 },
  { id: 'africa', label: 'Africa', count: 54 },
];

const immigrationTypes = [
  { id: 'work', label: 'Work Visas', icon: Briefcase, color: 'text-blue-400' },
  {
    id: 'study',
    label: 'Study Visas',
    icon: GraduationCap,
    color: 'text-green-400',
  },
  { id: 'family', label: 'Family Visas', icon: Heart, color: 'text-pink-400' },
  {
    id: 'business',
    label: 'Business Visas',
    icon: Building,
    color: 'text-purple-400',
  },
];

const countries = [
  {
    id: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    region: 'north-america',
    capital: 'Ottawa',
    population: '38.2M',
    gdpPerCapita: '$52,051',
    lifeQuality: 9.2,
    languages: ['English', 'French'],
    currency: 'CAD',
    timezone: 'UTC-5 to UTC-8',
    image: '/images/countries/canada-hero.jpg',
    description:
      'Known for its high quality of life, universal healthcare, and welcoming immigration policies.',
    highlights: [
      'Universal Healthcare System',
      'Path to Permanent Residency',
      'Multicultural Society',
      'Strong Social Safety Net',
      'Beautiful Natural Landscapes',
    ],
    programs: [
      {
        name: 'Express Entry',
        type: 'work',
        processingTime: '6-8 months',
        successRate: 98.7,
        minPoints: 440,
      },
      {
        name: 'Provincial Nominee',
        type: 'work',
        processingTime: '12-18 months',
        successRate: 96.5,
        minPoints: 600,
      },
      {
        name: 'Study Permit',
        type: 'study',
        processingTime: '4-12 weeks',
        successRate: 97.8,
        minPoints: null,
      },
      {
        name: 'Family Sponsorship',
        type: 'family',
        processingTime: '8-12 months',
        successRate: 99.1,
        minPoints: null,
      },
    ],
    stats: {
      immigrantsPerYear: '400,000+',
      averageSalary: '$65,000',
      unemploymentRate: '5.8%',
      costOfLiving: 'Moderate',
    },
    color: 'from-red-500 to-red-600',
    bgGlow: 'bg-red-500/10',
    popular: true,
  },
  {
    id: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    region: 'oceania',
    capital: 'Canberra',
    population: '25.7M',
    gdpPerCapita: '$55,060',
    lifeQuality: 9.4,
    languages: ['English'],
    currency: 'AUD',
    timezone: 'UTC+8 to UTC+11',
    image: '/images/countries/australia-hero.jpg',
    description:
      'Offers exceptional work-life balance, beautiful climate, and strong economic opportunities.',
    highlights: [
      'Excellent Work-Life Balance',
      'High Salary Standards',
      'Beautiful Climate Year-Round',
      'Strong Education System',
      'Safe Living Environment',
    ],
    programs: [
      {
        name: 'Skilled Independent',
        type: 'work',
        processingTime: '8-12 months',
        successRate: 97.2,
        minPoints: 65,
      },
      {
        name: 'Employer Nominated',
        type: 'work',
        processingTime: '6-10 months',
        successRate: 98.5,
        minPoints: null,
      },
      {
        name: 'Student Visa',
        type: 'study',
        processingTime: '4-8 weeks',
        successRate: 96.9,
        minPoints: null,
      },
      {
        name: 'Partner Visa',
        type: 'family',
        processingTime: '12-24 months',
        successRate: 95.4,
        minPoints: null,
      },
    ],
    stats: {
      immigrantsPerYear: '190,000+',
      averageSalary: '$85,000',
      unemploymentRate: '4.2%',
      costOfLiving: 'High',
    },
    color: 'from-green-500 to-emerald-600',
    bgGlow: 'bg-green-500/10',
    popular: true,
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    region: 'europe',
    capital: 'London',
    population: '67.5M',
    gdpPerCapita: '$46,344',
    lifeQuality: 8.9,
    languages: ['English'],
    currency: 'GBP',
    timezone: 'UTC+0',
    image: '/images/countries/uk-hero.jpg',
    description:
      'Rich history, world-renowned universities, and gateway to European opportunities.',
    highlights: [
      'World-Class Universities',
      'NHS Healthcare System',
      'Rich Cultural Heritage',
      'Financial Global Hub',
      'European Gateway',
    ],
    programs: [
      {
        name: 'Skilled Worker',
        type: 'work',
        processingTime: '3-8 months',
        successRate: 96.5,
        minPoints: 70,
      },
      {
        name: 'Global Talent',
        type: 'work',
        processingTime: '3-5 months',
        successRate: 94.8,
        minPoints: null,
      },
      {
        name: 'Student Visa',
        type: 'study',
        processingTime: '3-8 weeks',
        successRate: 98.2,
        minPoints: null,
      },
      {
        name: 'Family Visa',
        type: 'family',
        processingTime: '6-12 months',
        successRate: 97.1,
        minPoints: null,
      },
    ],
    stats: {
      immigrantsPerYear: '300,000+',
      averageSalary: '$55,000',
      unemploymentRate: '3.8%',
      costOfLiving: 'High',
    },
    color: 'from-blue-600 to-indigo-700',
    bgGlow: 'bg-blue-500/10',
  },
  {
    id: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    region: 'europe',
    capital: 'Berlin',
    population: '83.2M',
    gdpPerCapita: '$50,206',
    lifeQuality: 9.1,
    languages: ['German', 'English'],
    currency: 'EUR',
    timezone: 'UTC+1',
    image: '/images/countries/germany-hero.jpg',
    description:
      "Europe's economic powerhouse with excellent engineering opportunities and social benefits.",
    highlights: [
      'Strong Economy & Job Market',
      'Excellent Social Benefits',
      'Work-Life Balance Culture',
      'Innovation & Technology Hub',
      'Central European Location',
    ],
    programs: [
      {
        name: 'EU Blue Card',
        type: 'work',
        processingTime: '2-4 months',
        successRate: 95.8,
        minPoints: null,
      },
      {
        name: 'Skilled Workers',
        type: 'work',
        processingTime: '3-6 months',
        successRate: 93.4,
        minPoints: null,
      },
      {
        name: 'Student Visa',
        type: 'study',
        processingTime: '4-8 weeks',
        successRate: 97.5,
        minPoints: null,
      },
      {
        name: 'Family Reunion',
        type: 'family',
        processingTime: '6-12 months',
        successRate: 96.8,
        minPoints: null,
      },
    ],
    stats: {
      immigrantsPerYear: '250,000+',
      averageSalary: '$60,000',
      unemploymentRate: '3.1%',
      costOfLiving: 'Moderate',
    },
    color: 'from-amber-500 to-orange-600',
    bgGlow: 'bg-amber-500/10',
  },
  {
    id: 'new-zealand',
    name: 'New Zealand',
    flag: '🇳🇿',
    region: 'oceania',
    capital: 'Wellington',
    population: '5.1M',
    gdpPerCapita: '$48,781',
    lifeQuality: 9.3,
    languages: ['English', 'Māori'],
    currency: 'NZD',
    timezone: 'UTC+12',
    image: '/images/countries/nz-hero.jpg',
    description:
      'Stunning natural beauty, peaceful society, and excellent quality of life.',
    highlights: [
      'Pristine Natural Environment',
      'Safe & Peaceful Society',
      'Adventure Sports Capital',
      'Progressive Social Policies',
      'Welcoming Community',
    ],
    programs: [
      {
        name: 'Skilled Migrant',
        type: 'work',
        processingTime: '12-18 months',
        successRate: 94.2,
        minPoints: 100,
      },
      {
        name: 'Work to Residence',
        type: 'work',
        processingTime: '6-12 months',
        successRate: 96.1,
        minPoints: null,
      },
      {
        name: 'Student Visa',
        type: 'study',
        processingTime: '4-6 weeks',
        successRate: 98.7,
        minPoints: null,
      },
      {
        name: 'Partnership Visa',
        type: 'family',
        processingTime: '12-20 months',
        successRate: 97.9,
        minPoints: null,
      },
    ],
    stats: {
      immigrantsPerYear: '50,000+',
      averageSalary: '$65,000',
      unemploymentRate: '3.4%',
      costOfLiving: 'Moderate-High',
    },
    color: 'from-teal-500 to-cyan-600',
    bgGlow: 'bg-teal-500/10',
  },
  {
    id: 'usa',
    name: 'United States',
    flag: '🇺🇸',
    region: 'north-america',
    capital: 'Washington, D.C.',
    population: '331M',
    gdpPerCapita: '$70,248',
    lifeQuality: 8.7,
    languages: ['English'],
    currency: 'USD',
    timezone: 'UTC-5 to UTC-10',
    image: '/images/countries/usa-hero.jpg',
    description:
      'Land of opportunities with diverse economy, innovation centers, and career advancement.',
    highlights: [
      "World's Largest Economy",
      'Innovation & Technology Hub',
      'Diverse Career Opportunities',
      'Top Universities',
      'Entrepreneurial Culture',
    ],
    programs: [
      {
        name: 'H-1B Work Visa',
        type: 'work',
        processingTime: '3-6 months',
        successRate: 87.3,
        minPoints: null,
      },
      {
        name: 'EB-5 Investor',
        type: 'business',
        processingTime: '24-36 months',
        successRate: 92.1,
        minPoints: null,
      },
      {
        name: 'F-1 Student',
        type: 'study',
        processingTime: '2-4 weeks',
        successRate: 89.7,
        minPoints: null,
      },
      {
        name: 'Family Based',
        type: 'family',
        processingTime: '12-24 months',
        successRate: 94.5,
        minPoints: null,
      },
    ],
    stats: {
      immigrantsPerYear: '1,000,000+',
      averageSalary: '$95,000',
      unemploymentRate: '3.7%',
      costOfLiving: 'High',
    },
    color: 'from-blue-700 to-red-600',
    bgGlow: 'bg-blue-700/10',
  },
];

export default function CountriesPage() {
  const [activeRegion, setActiveRegion] = useState('all');
  const [activeType, setActiveType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const floatingY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const filteredCountries = countries.filter(country => {
    const matchesRegion =
      activeRegion === 'all' || country.region === activeRegion;
    const matchesSearch =
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType =
      activeType === 'all' ||
      country.programs.some(program => program.type === activeType);
    return matchesRegion && matchesSearch && matchesType;
  });

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
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-full blur-3xl' />
      </motion.div>

      {/* Floating World Map Elements */}
      <motion.div
        style={{ y: floatingY }}
        className='absolute inset-0 overflow-hidden'
      >
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className='absolute opacity-10'
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Globe className='w-6 h-6 text-purple-400' />
          </motion.div>
        ))}
      </motion.div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative z-10'>
        {/* Hero Section */}
        <div className='text-center max-w-5xl mx-auto mb-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 text-purple-300 font-medium text-sm mb-6'
          >
            <Globe className='w-4 h-4' />
            195+ Countries Available
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6'
          >
            Explore Global
            <span className='block bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent'>
              Immigration Opportunities
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='text-xl text-neutral-300 leading-relaxed mb-8'
          >
            Discover your ideal destination from our comprehensive database of
            countries. Compare immigration programs, success rates, and living
            standards to make informed decisions.
          </motion.p>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className='max-w-2xl mx-auto space-y-6'
          >
            {/* Search Bar */}
            <div className='relative'>
              <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400' />
              <input
                type='text'
                placeholder='Search countries...'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className='w-full pl-12 pr-4 py-4 bg-gradient-to-r from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-2xl text-white placeholder-neutral-400 focus:outline-none focus:border-purple-500/50 transition-all duration-300'
              />
            </div>

            {/* Region Filter */}
            <div className='flex flex-wrap justify-center gap-3'>
              {regions.map(region => (
                <motion.button
                  key={region.id}
                  onClick={() => setActiveRegion(region.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeRegion === region.id
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                      : 'bg-neutral-800/50 text-neutral-300 hover:bg-neutral-700/50 hover:text-white'
                  }`}
                >
                  {region.label} ({region.count})
                </motion.button>
              ))}
            </div>

            {/* Immigration Type Filter */}
            <div className='flex flex-wrap justify-center gap-3'>
              <motion.button
                onClick={() => setActiveType('all')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeType === 'all'
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                    : 'bg-neutral-800/50 text-neutral-300 hover:bg-neutral-700/50 hover:text-white'
                }`}
              >
                All Types
              </motion.button>
              {immigrationTypes.map(type => (
                <motion.button
                  key={type.id}
                  onClick={() => setActiveType(type.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeType === type.id
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                      : 'bg-neutral-800/50 text-neutral-300 hover:bg-neutral-700/50 hover:text-white'
                  }`}
                >
                  <type.icon
                    className={`w-4 h-4 ${activeType === type.id ? 'text-white' : type.color}`}
                  />
                  {type.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Countries Grid */}
        <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16'>
          {filteredCountries.map((country, index) => (
            <motion.div
              key={country.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.02, y: -5 }}
              className='relative group cursor-pointer'
              onClick={() =>
                setSelectedCountry(
                  selectedCountry === country.id ? null : country.id
                )
              }
            >
              <div
                className={`absolute inset-0 rounded-3xl ${country.bgGlow} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className='relative bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-3xl overflow-hidden hover:border-neutral-700/50 transition-all duration-500'>
                {/* Country Header */}
                <div className='relative h-48 bg-gradient-to-br from-neutral-800 to-neutral-900 overflow-hidden'>
                  {/* Placeholder for country image */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${country.color} opacity-20`}
                  />
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='text-6xl mb-4'>{country.flag}</div>
                  </div>

                  {/* Popular Badge */}
                  {country.popular && (
                    <div className='absolute top-4 right-4 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-full px-3 py-1 text-xs text-amber-400 font-medium'>
                      <Star className='w-3 h-3 inline mr-1' />
                      Popular
                    </div>
                  )}

                  {/* Quick Stats Overlay */}
                  <div className='absolute bottom-4 left-4 right-4'>
                    <div className='flex items-center justify-between text-white text-sm'>
                      <div className='flex items-center gap-2'>
                        <MapPin className='w-4 h-4' />
                        {country.capital}
                      </div>
                      <div className='flex items-center gap-2'>
                        <Users className='w-4 h-4' />
                        {country.population}
                      </div>
                    </div>
                  </div>
                </div>

                <div className='p-6'>
                  {/* Country Info */}
                  <div className='mb-4'>
                    <h3 className='text-2xl font-bold text-white mb-2'>
                      {country.name}
                    </h3>
                    <p className='text-neutral-300 text-sm leading-relaxed'>
                      {country.description}
                    </p>
                  </div>

                  {/* Key Stats */}
                  <div className='grid grid-cols-2 gap-4 mb-6'>
                    <div className='bg-neutral-800/30 rounded-xl p-3'>
                      <div className='text-xs text-neutral-400 mb-1'>
                        GDP per Capita
                      </div>
                      <div className='text-green-400 font-semibold'>
                        {country.gdpPerCapita}
                      </div>
                    </div>
                    <div className='bg-neutral-800/30 rounded-xl p-3'>
                      <div className='text-xs text-neutral-400 mb-1'>
                        Quality of Life
                      </div>
                      <div className='text-purple-400 font-semibold'>
                        {country.lifeQuality}/10
                      </div>
                    </div>
                  </div>

                  {/* Top Programs */}
                  <div className='mb-6'>
                    <h4 className='text-white font-semibold mb-3'>
                      Popular Programs
                    </h4>
                    <div className='space-y-2'>
                      {country.programs
                        .slice(0, 2)
                        .map((program, programIndex) => (
                          <div
                            key={programIndex}
                            className='flex items-center justify-between text-sm'
                          >
                            <div className='flex items-center gap-2'>
                              {immigrationTypes.find(t => t.id === program.type)
                                ?.icon && (
                                <div
                                  className={
                                    immigrationTypes.find(
                                      t => t.id === program.type
                                    )?.color
                                  }
                                >
                                  {React.createElement(
                                    immigrationTypes.find(
                                      t => t.id === program.type
                                    )!.icon,
                                    { className: 'w-4 h-4' }
                                  )}
                                </div>
                              )}
                              <span className='text-neutral-300'>
                                {program.name}
                              </span>
                            </div>
                            <div className='text-green-400 font-medium'>
                              {program.successRate}%
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link href={`/countries/${country.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full bg-gradient-to-r ${country.color} text-white font-semibold py-3 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}
                    >
                      Explore {country.name}
                      <ArrowRight className='w-4 h-4' />
                    </motion.button>
                  </Link>
                </div>

                {/* Expanded Details */}
                {selectedCountry === country.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className='border-t border-neutral-700/50 p-6'
                  >
                    <div className='space-y-4'>
                      {/* All Programs */}
                      <div>
                        <h5 className='text-white font-semibold mb-3'>
                          All Immigration Programs
                        </h5>
                        <div className='space-y-3'>
                          {country.programs.map((program, programIndex) => (
                            <div
                              key={programIndex}
                              className='bg-neutral-800/30 rounded-xl p-4'
                            >
                              <div className='flex items-center justify-between mb-2'>
                                <div className='flex items-center gap-2'>
                                  {immigrationTypes.find(
                                    t => t.id === program.type
                                  )?.icon && (
                                    <div
                                      className={
                                        immigrationTypes.find(
                                          t => t.id === program.type
                                        )?.color
                                      }
                                    >
                                      {React.createElement(
                                        immigrationTypes.find(
                                          t => t.id === program.type
                                        )!.icon,
                                        { className: 'w-4 h-4' }
                                      )}
                                    </div>
                                  )}
                                  <span className='text-white font-medium'>
                                    {program.name}
                                  </span>
                                </div>
                                <div className='text-green-400 font-semibold'>
                                  {program.successRate}%
                                </div>
                              </div>
                              <div className='grid grid-cols-2 gap-4 text-xs'>
                                <div className='flex items-center gap-1 text-neutral-400'>
                                  <Clock className='w-3 h-3' />
                                  {program.processingTime}
                                </div>
                                {program.minPoints && (
                                  <div className='flex items-center gap-1 text-neutral-400'>
                                    <Award className='w-3 h-3' />
                                    {program.minPoints} min points
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Country Stats */}
                      <div>
                        <h5 className='text-white font-semibold mb-3'>
                          Living Standards
                        </h5>
                        <div className='grid grid-cols-2 gap-3 text-sm'>
                          <div className='bg-neutral-800/30 rounded-lg p-3'>
                            <div className='text-neutral-400 mb-1'>
                              Avg. Salary
                            </div>
                            <div className='text-white font-medium'>
                              {country.stats.averageSalary}
                            </div>
                          </div>
                          <div className='bg-neutral-800/30 rounded-lg p-3'>
                            <div className='text-neutral-400 mb-1'>
                              Unemployment
                            </div>
                            <div className='text-white font-medium'>
                              {country.stats.unemploymentRate}
                            </div>
                          </div>
                          <div className='bg-neutral-800/30 rounded-lg p-3'>
                            <div className='text-neutral-400 mb-1'>
                              Cost of Living
                            </div>
                            <div className='text-white font-medium'>
                              {country.stats.costOfLiving}
                            </div>
                          </div>
                          <div className='bg-neutral-800/30 rounded-lg p-3'>
                            <div className='text-neutral-400 mb-1'>
                              Immigrants/Year
                            </div>
                            <div className='text-white font-medium'>
                              {country.stats.immigrantsPerYear}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className='text-center'
        >
          <div className='bg-gradient-to-r from-purple-600/10 to-indigo-600/10 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-12 max-w-4xl mx-auto'>
            <h3 className='text-3xl font-bold text-white mb-4'>
              Ready to Start Your Immigration Journey?
            </h3>
            <p className='text-xl text-neutral-300 mb-8'>
              Get personalized recommendations based on your profile, skills,
              and preferences. Our AI-powered assessment will match you with the
              best immigration pathways.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2'
              >
                <Search className='w-5 h-5' />
                Find My Best Match
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='px-8 py-4 bg-neutral-800/50 text-white font-semibold rounded-xl hover:bg-neutral-700/50 transition-all duration-300 flex items-center justify-center gap-2'
              >
                <Calendar className='w-5 h-5' />
                Book Consultation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
