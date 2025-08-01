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
  Filter,
  TrendingUp,
} from 'lucide-react';

const regions = [
  { id: 'all', label: 'All Countries', count: 8 },
  { id: 'north-america', label: 'North America', count: 2 },
  { id: 'europe', label: 'Europe', count: 2 },
  { id: 'oceania', label: 'Oceania', count: 2 },
  { id: 'asia', label: 'Asia', count: 2 },
];

const immigrationTypes = [
  { id: 'work', label: 'Work Visas', icon: Briefcase, color: 'from-blue-500 to-cyan-600' },
  { id: 'study', label: 'Study Visas', icon: GraduationCap, color: 'from-green-500 to-emerald-600' },
  { id: 'family', label: 'Family Visas', icon: Heart, color: 'from-pink-500 to-rose-600' },
  { id: 'business', label: 'Business Visas', icon: Building, color: 'from-purple-500 to-violet-600' },
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
    description: 'Known for its high quality of life, universal healthcare, and welcoming immigration policies.',
    highlights: [
      'Universal Healthcare System',
      'Path to Permanent Residency',
      'Multicultural Society',
      'Strong Social Safety Net',
      'Beautiful Natural Landscapes',
    ],
    programs: [
      { name: 'Express Entry', type: 'work', processingTime: '6-8 months', successRate: 98.7 },
      { name: 'Provincial Nominee', type: 'work', processingTime: '12-18 months', successRate: 96.5 },
      { name: 'Study Permit', type: 'study', processingTime: '4-12 weeks', successRate: 97.8 },
      { name: 'Family Sponsorship', type: 'family', processingTime: '8-12 months', successRate: 99.1 },
    ],
    featured: true,
  },
  {
    id: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    region: 'oceania',
    capital: 'Canberra',
    population: '25.7M',
    gdpPerCapita: '$55,060',
    lifeQuality: 9.1,
    languages: ['English'],
    currency: 'AUD',
    timezone: 'UTC+8 to UTC+11',
    description: 'Offers excellent work-life balance, strong economy, and diverse immigration pathways.',
    highlights: [
      'High Standard of Living',
      'Points-Based Immigration',
      'Strong Job Market',
      'Excellent Climate',
      'Modern Infrastructure',
    ],
    programs: [
      { name: 'Skilled Independent', type: 'work', processingTime: '8-12 months', successRate: 94.2 },
      { name: 'Employer Nomination', type: 'work', processingTime: '6-10 months', successRate: 96.8 },
      { name: 'Student Visa', type: 'study', processingTime: '4-8 weeks', successRate: 95.5 },
      { name: 'Partner Visa', type: 'family', processingTime: '12-24 months', successRate: 98.3 },
    ],
    featured: true,
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    region: 'europe',
    capital: 'London',
    population: '67.5M',
    gdpPerCapita: '$47,334',
    lifeQuality: 8.9,
    languages: ['English'],
    currency: 'GBP',
    timezone: 'UTC+0',
    description: 'Rich history, world-class education, and strong business opportunities.',
    highlights: [
      'World-Class Education',
      'Global Financial Hub',
      'Rich Cultural Heritage',
      'NHS Healthcare',
      'Strategic Location',
    ],
    programs: [
      { name: 'Skilled Worker', type: 'work', processingTime: '3-8 weeks', successRate: 92.4 },
      { name: 'Global Talent', type: 'work', processingTime: '3-8 weeks', successRate: 95.1 },
      { name: 'Student Visa', type: 'study', processingTime: '3-6 weeks', successRate: 96.7 },
      { name: 'Family Visa', type: 'family', processingTime: '6-12 months', successRate: 97.2 },
    ],
  },
  {
    id: 'usa',
    name: 'United States',
    flag: '🇺🇸',
    region: 'north-america',
    capital: 'Washington D.C.',
    population: '331.9M',
    gdpPerCapita: '$70,248',
    lifeQuality: 8.8,
    languages: ['English'],
    currency: 'USD',
    timezone: 'UTC-5 to UTC-10',
    description: 'Land of opportunities with strong economy and innovation ecosystem.',
    highlights: [
      'World\'s Largest Economy',
      'Innovation Hub',
      'Diverse Career Opportunities',
      'Educational Excellence',
      'Cultural Diversity',
    ],
    programs: [
      { name: 'H-1B Specialty', type: 'work', processingTime: '2-6 months', successRate: 87.3 },
      { name: 'EB-1 Priority', type: 'work', processingTime: '8-15 months', successRate: 91.5 },
      { name: 'F-1 Student', type: 'study', processingTime: '2-8 weeks', successRate: 94.8 },
      { name: 'Family Based', type: 'family', processingTime: '12-24 months', successRate: 96.1 },
    ],
  },
  {
    id: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    region: 'europe',
    capital: 'Berlin',
    population: '83.2M',
    gdpPerCapita: '$51,860',
    lifeQuality: 9.0,
    languages: ['German'],
    currency: 'EUR',
    timezone: 'UTC+1',
    description: 'Strong economy, excellent work-life balance, and central European location.',
    highlights: [
      'Strongest EU Economy',
      'Excellent Work-Life Balance',
      'Free Higher Education',
      'Central European Location',
      'High Social Security',
    ],
    programs: [
      { name: 'EU Blue Card', type: 'work', processingTime: '2-4 months', successRate: 93.6 },
      { name: 'Skilled Immigration', type: 'work', processingTime: '3-6 months', successRate: 89.2 },
      { name: 'Student Visa', type: 'study', processingTime: '4-8 weeks', successRate: 95.8 },
      { name: 'Family Reunification', type: 'family', processingTime: '6-12 months', successRate: 97.5 },
    ],
  },
  {
    id: 'singapore',
    name: 'Singapore',
    flag: '🇸🇬',
    region: 'asia',
    capital: 'Singapore',
    population: '5.9M',
    gdpPerCapita: '$72,795',
    lifeQuality: 9.0,
    languages: ['English', 'Mandarin', 'Malay', 'Tamil'],
    currency: 'SGD',
    timezone: 'UTC+8',
    description: 'Global financial hub with excellent infrastructure and business-friendly environment.',
    highlights: [
      'Global Financial Hub',
      'Strategic Asian Location',
      'Excellent Infrastructure',
      'Low Tax Rates',
      'Multicultural Society',
    ],
    programs: [
      { name: 'Employment Pass', type: 'work', processingTime: '3-8 weeks', successRate: 91.7 },
      { name: 'Tech.Pass', type: 'work', processingTime: '4-8 weeks', successRate: 88.4 },
      { name: 'Student Pass', type: 'study', processingTime: '2-4 weeks', successRate: 96.2 },
      { name: 'Dependant Pass', type: 'family', processingTime: '4-8 weeks', successRate: 98.7 },
    ],
  },
  {
    id: 'uae',
    name: 'United Arab Emirates',
    flag: '🇦🇪',
    region: 'asia',
    capital: 'Abu Dhabi',
    population: '9.9M',
    gdpPerCapita: '$43,103',
    lifeQuality: 8.7,
    languages: ['Arabic', 'English'],
    currency: 'AED',
    timezone: 'UTC+4',
    description: 'Modern economy, tax-free income, and gateway between East and West.',
    highlights: [
      'Tax-Free Income',
      'Modern Infrastructure',
      'Strategic Location',
      'Business Hub',
      'High Quality of Life',
    ],
    programs: [
      { name: 'Employment Visa', type: 'work', processingTime: '2-4 weeks', successRate: 94.3 },
      { name: 'Golden Visa', type: 'work', processingTime: '4-8 weeks', successRate: 87.9 },
      { name: 'Student Visa', type: 'study', processingTime: '2-6 weeks', successRate: 97.1 },
      { name: 'Family Visa', type: 'family', processingTime: '3-6 weeks', successRate: 98.9 },
    ],
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
    description: 'Beautiful landscapes, work-life balance, and straightforward immigration system.',
    highlights: [
      'Stunning Natural Beauty',
      'Excellent Work-Life Balance',
      'Safe and Peaceful',
      'English-Speaking',
      'Outdoor Lifestyle',
    ],
    programs: [
      { name: 'Skilled Migrant', type: 'work', processingTime: '6-12 months', successRate: 92.8 },
      { name: 'Work to Residence', type: 'work', processingTime: '4-8 months', successRate: 89.6 },
      { name: 'Student Visa', type: 'study', processingTime: '4-8 weeks', successRate: 96.4 },
      { name: 'Partnership Visa', type: 'family', processingTime: '12-24 months', successRate: 97.8 },
    ],
  },
];

// Country Card Component
function CountryCard({ country, index }: { country: typeof countries[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-6 hover:border-neutral-700/50 transition-all duration-300 group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{country.flag}</span>
          <div>
            <h3 className="text-xl font-bold text-white">{country.name}</h3>
            <p className="text-neutral-400 text-sm">{country.capital} • {country.population}</p>
          </div>
        </div>
        {country.featured && (
          <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-violet-500 text-white text-xs font-medium rounded-full">
            Popular
          </span>
        )}
      </div>

      <p className="text-neutral-300 mb-4 leading-relaxed">{country.description}</p>

      {/* Key Stats */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-neutral-800/30 rounded-xl p-3">
          <div className="flex items-center gap-2 mb-1">
            <Star className="w-4 h-4 text-emerald-400" />
            <span className="text-xs text-neutral-400">Quality of Life</span>
          </div>
          <span className="text-white font-semibold">{country.lifeQuality}/10</span>
        </div>
        <div className="bg-neutral-800/30 rounded-xl p-3">
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp className="w-4 h-4 text-blue-400" />
            <span className="text-xs text-neutral-400">GDP per Capita</span>
          </div>
          <span className="text-white font-semibold">{country.gdpPerCapita}</span>
        </div>
      </div>

      {/* Immigration Programs */}
      <div className="mb-4">
        <h4 className="text-white font-semibold mb-3">Available Programs</h4>
        <div className="space-y-2">
          {country.programs.slice(0, 3).map((program, i) => (
            <div key={i} className="flex items-center justify-between text-sm">
              <span className="text-neutral-300">{program.name}</span>
              <span className="text-emerald-400 font-medium">{program.successRate}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <Link href={`/countries/${country.id}`}>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white font-medium rounded-xl transition-all duration-300"
        >
          <span>Explore {country.name}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </motion.button>
      </Link>
    </motion.div>
  );
}

export default function CountriesPage() {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const filteredCountries = countries.filter(country => {
    const matchesRegion = selectedRegion === 'all' || country.region === selectedRegion;
    const matchesSearch = country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         country.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRegion && matchesSearch;
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
            <Globe className='w-4 h-4' />
            Explore Destinations
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6'
          >
            Immigration Destinations
            <span className='block bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent'>
              Around the World
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='text-xl text-neutral-300 leading-relaxed mb-8'
          >
            Discover your ideal immigration destination with comprehensive information about visa programs, living standards, and opportunities in top countries worldwide.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className='relative max-w-lg mx-auto mb-8'
          >
            <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400' />
            <input
              type='text'
              placeholder='Search countries...'
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className='w-full pl-12 pr-4 py-4 bg-gradient-to-r from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-2xl text-white placeholder-neutral-400 focus:outline-none focus:border-purple-500/50 transition-all duration-300'
            />
          </motion.div>
        </div>

        {/* Immigration Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-12'
        >
          {immigrationTypes.map((type, index) => (
            <motion.div
              key={type.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className='bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-4 text-center hover:border-neutral-700/50 transition-all duration-300'
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${type.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                <type.icon className='w-6 h-6 text-white' />
              </div>
              <h3 className='text-white font-semibold text-sm'>{type.label}</h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Region Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className='flex flex-wrap justify-center gap-4 mb-16'
        >
          {regions.map(region => (
            <motion.button
              key={region.id}
              onClick={() => setSelectedRegion(region.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedRegion === region.id
                  ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white'
                  : 'bg-gradient-to-r from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 text-neutral-300 hover:border-neutral-700/50'
              }`}
            >
              <span>{region.label}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                selectedRegion === region.id ? 'bg-white/20' : 'bg-neutral-700/50'
              }`}>
                {region.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Countries Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className='text-center mb-8'>
            <h2 className='text-2xl font-bold text-white mb-2'>
              {filteredCountries.length} {filteredCountries.length === 1 ? 'Country' : 'Countries'} Available
            </h2>
            <p className='text-neutral-400'>
              {selectedRegion !== 'all' && `Showing ${regions.find(r => r.id === selectedRegion)?.label} destinations`}
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {filteredCountries.map((country, index) => (
              <CountryCard key={country.id} country={country} index={index} />
            ))}
          </div>

          {filteredCountries.length === 0 && (
            <div className='text-center py-12'>
              <div className='w-16 h-16 bg-gradient-to-r from-neutral-800 to-neutral-700 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Search className='w-8 h-8 text-neutral-400' />
              </div>
              <h3 className='text-xl font-bold text-white mb-2'>No Countries Found</h3>
              <p className='text-neutral-400'>Try adjusting your search or filter criteria</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
