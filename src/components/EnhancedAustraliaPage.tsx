'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Clock,
  DollarSign,
  Users,
  FileText,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Globe,
  TrendingUp,
  Award,
  Briefcase,
  GraduationCap,
  Heart,
  Plane,
  Building,
  AlertCircle,
  Info,
  ExternalLink,
} from 'lucide-react';

import Navigation from '@/components/Navigation';
import BackNavigation from '@/components/BackNavigation';
import Footer from '@/components/Footer';
import { useCurrency } from '@/components/CurrencySelector';
import ContactSupport from '@/components/ContactSupport';

interface EnhancedCountryData {
  name: string;
  flag: string;
  description: string;
  capital: string;
  population: string;
  language: string;
  currency: string;
  heroGradient: string;
  primaryColor: string;
  immigrationTarget: string;
  successRate: string;
  averageProcessing: string;
  skillCategories?: any;
  programs: Array<{
    name: string;
    description: string;
    basePrice: number;
    processingTime: string;
    popularity: number;
    requirements: string[];
    success: string;
    icon: string;
  }>;
  provinces?: Array<{
    name: string;
    capital: string;
    population: string;
    programs: string[];
    highlights: string[];
    minPoints?: string;
    processing?: string;
    industries?: string[];
  }>;
  benefits: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  whyChoose: Array<{
    title: string;
    description: string;
  }>;
  stats: Array<{
    value: string;
    label: string;
  }>;
  costOfLiving?: any;
  occupationLists?: any;
  latestUpdates?: any;
}

interface EnhancedCountryPageProps {
  countryData: EnhancedCountryData;
}

export default function EnhancedAustraliaPage({
  countryData,
}: EnhancedCountryPageProps) {
  const { formatPrice } = useCurrency();
  const [selectedCategory, setSelectedCategory] = useState('skilled');
  const [selectedProvince, setSelectedProvince] = useState(0);

  const categoryIcons: { [key: string]: any } = {
    skilled: Briefcase,
    temporary: Clock,
    study: GraduationCap,
    family: Heart,
    business: Building,
    visitor: Plane,
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      Active: { bg: 'bg-green-100', text: 'text-green-800', icon: CheckCircle },
      'Coming Soon': {
        bg: 'bg-yellow-100',
        text: 'text-yellow-800',
        icon: Clock,
      },
      'Stay Tuned': { bg: 'bg-blue-100', text: 'text-blue-800', icon: Info },
      Limited: { bg: 'bg-red-100', text: 'text-red-800', icon: AlertCircle },
    };

    const config =
      statusConfig[status as keyof typeof statusConfig] ||
      statusConfig['Active'];
    const Icon = config.icon;

    return (
      <span
        className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text}`}
      >
        <Icon size={12} />
        {status}
      </span>
    );
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100'>
      <Navigation />
      <BackNavigation
        currentPage={`${countryData.name} Immigration`}
        customBackUrl='/countries'
        customBackLabel='Browse Countries'
      />

      {/* Enhanced Hero Section */}
      <section
        className={`section-padding pt-32 ${countryData.heroGradient} relative overflow-hidden`}
      >
        <div className='absolute inset-0 bg-black/5'></div>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className='flex items-center gap-4 mb-6'>
                <span className='text-7xl'>{countryData.flag}</span>
                <h1 className='text-5xl lg:text-7xl font-bold'>
                  <span className='text-white drop-shadow-lg'>
                    Immigrate to
                  </span>
                  <span className='block text-white drop-shadow-lg'>
                    {countryData.name}
                  </span>
                </h1>
              </div>

              <p className='text-xl text-white/90 mb-8 leading-relaxed drop-shadow'>
                {countryData.description}
              </p>

              <div className='flex flex-wrap gap-4'>
                <motion.a
                  href='#comprehensive-programs'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg flex items-center'
                >
                  Explore All Programs <ArrowRight className='w-4 h-4 ml-2' />
                </motion.a>
                <motion.a
                  href='#contact'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg flex items-center'
                >
                  Free Consultation <Phone className='w-4 h-4 ml-2' />
                </motion.a>
              </div>
            </motion.div>

            {/* Enhanced Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='grid grid-cols-2 gap-6'
            >
              {countryData.stats.slice(0, 4).map((stat, index) => (
                <div
                  key={index}
                  className='bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl'
                >
                  <div className='text-3xl font-bold text-gray-800 mb-2'>
                    {stat.value}
                  </div>
                  <div className='text-gray-600 text-sm'>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comprehensive Programs Section */}
      <section id='comprehensive-programs' className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl lg:text-5xl font-bold text-gray-800 mb-6'>
              Complete{' '}
              <span className='text-gradient-blue'>Migration Programs</span>
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Comprehensive guide to all Australian visa categories including
              skilled, temporary, family, business, and visitor options
            </p>
          </motion.div>

          {/* Program Categories Tabs */}
          {countryData.skillCategories && (
            <div className='flex flex-wrap justify-center gap-4 mb-12'>
              {Object.entries(countryData.skillCategories).map(
                ([key, category]: [string, any]) => {
                  const Icon = categoryIcons[key] || Briefcase;
                  return (
                    <motion.button
                      key={key}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedCategory(key)}
                      className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                        selectedCategory === key
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-600 hover:bg-blue-50'
                      }`}
                    >
                      <Icon size={20} />
                      {category.title}
                    </motion.button>
                  );
                }
              )}
            </div>
          )}

          {/* Selected Category Programs */}
          {countryData.skillCategories && (
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='mb-16'
            >
              <div className='bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8'>
                <h3 className='text-2xl font-bold text-gray-800 mb-4'>
                  {countryData.skillCategories[selectedCategory]?.title}
                </h3>
                <p className='text-gray-600 text-lg'>
                  {countryData.skillCategories[selectedCategory]?.description}
                </p>
              </div>

              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {countryData.skillCategories[selectedCategory]?.programs?.map(
                  (program: any, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100'
                    >
                      <div className='flex justify-between items-start mb-4'>
                        <div className='text-3xl'>{program.icon}</div>
                        {getStatusBadge(program.status)}
                      </div>

                      <h4 className='text-xl font-bold text-gray-800 mb-3'>
                        {program.name}
                      </h4>
                      <p className='text-gray-600 mb-4 text-sm leading-relaxed'>
                        {program.description}
                      </p>

                      <div className='space-y-2 mb-4'>
                        <div className='flex justify-between text-sm'>
                          <span className='text-gray-500'>Processing:</span>
                          <span className='font-semibold'>
                            {program.processingTime}
                          </span>
                        </div>
                        <div className='flex justify-between text-sm'>
                          <span className='text-gray-500'>Popularity:</span>
                          <div className='flex items-center gap-1'>
                            <Star className='w-4 h-4 text-yellow-400 fill-current' />
                            <span className='font-semibold'>
                              {program.popularity}%
                            </span>
                          </div>
                        </div>
                        <div className='flex justify-between text-sm'>
                          <span className='text-gray-500'>Success Rate:</span>
                          <span className='font-semibold'>
                            {program.success}
                          </span>
                        </div>
                        {program.basePrice > 0 && (
                          <div className='flex justify-between text-sm'>
                            <span className='text-gray-500'>
                              Government Fee:
                            </span>
                            <span className='font-semibold text-blue-600'>
                              AUD {program.basePrice}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className='mb-4'>
                        <h5 className='font-semibold text-gray-800 mb-2'>
                          Requirements:
                        </h5>
                        <ul className='space-y-1'>
                          {program.requirements
                            .slice(0, 3)
                            .map((req: string, idx: number) => (
                              <li
                                key={idx}
                                className='flex items-center gap-2 text-sm text-gray-600'
                              >
                                <CheckCircle className='w-4 h-4 text-green-500 flex-shrink-0' />
                                {req}
                              </li>
                            ))}
                        </ul>
                      </div>

                      <div className='mb-4'>
                        <p className='text-sm text-gray-500 mb-2'>
                          Eligibility:
                        </p>
                        <p className='text-sm font-medium text-gray-700'>
                          {program.eligibility}
                        </p>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                          program.status === 'Active'
                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                            : 'bg-gray-200 text-gray-600 cursor-not-allowed'
                        }`}
                        disabled={program.status !== 'Active'}
                      >
                        {program.status === 'Active'
                          ? 'Apply Now'
                          : program.status}
                        {program.status === 'Active' && (
                          <ExternalLink className='w-4 h-4' />
                        )}
                      </motion.button>
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>
          )}

          {/* Latest Updates Section */}
          {countryData.latestUpdates && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className='bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8'
            >
              <h3 className='text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3'>
                <TrendingUp className='text-green-600' />
                Latest Migration Updates
              </h3>
              <div className='grid md:grid-cols-3 gap-6'>
                {countryData.latestUpdates.map((update: any, index: number) => (
                  <div
                    key={index}
                    className='bg-white rounded-xl p-6 shadow-md'
                  >
                    <div className='text-sm text-blue-600 font-semibold mb-2'>
                      {update.date}
                    </div>
                    <h4 className='font-bold text-gray-800 mb-2'>
                      {update.title}
                    </h4>
                    <p className='text-gray-600 text-sm mb-3'>
                      {update.description}
                    </p>
                    <div className='text-xs text-green-600 font-medium'>
                      {update.impact}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Enhanced States/Provinces Section */}
      {countryData.provinces && (
        <section className='py-20 bg-gray-50'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='text-center mb-16'
            >
              <h2 className='text-4xl lg:text-5xl font-bold text-gray-800 mb-6'>
                States & <span className='text-gradient-blue'>Territories</span>
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Each Australian state offers unique opportunities and nomination
                programs
              </p>
            </motion.div>

            <div className='grid lg:grid-cols-2 gap-8'>
              {/* State Selection */}
              <div className='space-y-4'>
                {countryData.provinces.map((province, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedProvince(index)}
                    className={`w-full p-6 rounded-xl text-left transition-all duration-300 ${
                      selectedProvince === index
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white text-gray-800 hover:bg-blue-50 shadow-md'
                    }`}
                  >
                    <div className='flex justify-between items-center mb-2'>
                      <h3 className='text-xl font-bold'>{province.name}</h3>
                      <div className='text-sm opacity-75'>
                        {province.population}
                      </div>
                    </div>
                    <p
                      className={`text-sm ${selectedProvince === index ? 'text-blue-100' : 'text-gray-600'}`}
                    >
                      Capital: {province.capital}
                    </p>
                  </motion.button>
                ))}
              </div>

              {/* Selected State Details */}
              <motion.div
                key={selectedProvince}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className='bg-white rounded-2xl p-8 shadow-lg'
              >
                <h3 className='text-3xl font-bold text-gray-800 mb-6'>
                  {countryData.provinces[selectedProvince].name}
                </h3>

                <div className='grid grid-cols-2 gap-4 mb-6'>
                  <div className='bg-blue-50 rounded-lg p-4'>
                    <div className='text-blue-600 font-semibold'>
                      Population
                    </div>
                    <div className='text-2xl font-bold text-gray-800'>
                      {countryData.provinces[selectedProvince].population}
                    </div>
                  </div>
                  <div className='bg-green-50 rounded-lg p-4'>
                    <div className='text-green-600 font-semibold'>Capital</div>
                    <div className='text-2xl font-bold text-gray-800'>
                      {countryData.provinces[selectedProvince].capital}
                    </div>
                  </div>
                </div>

                {countryData.provinces[selectedProvince].minPoints && (
                  <div className='grid grid-cols-2 gap-4 mb-6'>
                    <div className='bg-yellow-50 rounded-lg p-4'>
                      <div className='text-yellow-600 font-semibold'>
                        Min Points
                      </div>
                      <div className='text-2xl font-bold text-gray-800'>
                        {countryData.provinces[selectedProvince].minPoints}
                      </div>
                    </div>
                    <div className='bg-purple-50 rounded-lg p-4'>
                      <div className='text-purple-600 font-semibold'>
                        Processing
                      </div>
                      <div className='text-lg font-bold text-gray-800'>
                        {countryData.provinces[selectedProvince].processing}
                      </div>
                    </div>
                  </div>
                )}

                <div className='mb-6'>
                  <h4 className='font-bold text-gray-800 mb-3'>
                    Available Programs:
                  </h4>
                  <div className='grid grid-cols-1 gap-2'>
                    {countryData.provinces[selectedProvince].programs.map(
                      (program, idx) => (
                        <div
                          key={idx}
                          className='flex items-center gap-2 text-sm text-gray-600'
                        >
                          <CheckCircle className='w-4 h-4 text-green-500 flex-shrink-0' />
                          {program}
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div className='mb-6'>
                  <h4 className='font-bold text-gray-800 mb-3'>
                    Key Highlights:
                  </h4>
                  <div className='grid grid-cols-1 gap-2'>
                    {countryData.provinces[selectedProvince].highlights.map(
                      (highlight, idx) => (
                        <div
                          key={idx}
                          className='flex items-center gap-2 text-sm text-gray-600'
                        >
                          <Star className='w-4 h-4 text-yellow-500 flex-shrink-0' />
                          {highlight}
                        </div>
                      )
                    )}
                  </div>
                </div>

                {countryData.provinces[selectedProvince].industries && (
                  <div>
                    <h4 className='font-bold text-gray-800 mb-3'>
                      Key Industries:
                    </h4>
                    <div className='flex flex-wrap gap-2'>
                      {countryData.provinces[selectedProvince].industries?.map(
                        (industry, idx) => (
                          <span
                            key={idx}
                            className='bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium'
                          >
                            {industry}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Cost of Living Section */}
      {countryData.costOfLiving && (
        <section className='py-20 bg-white'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='text-center mb-16'
            >
              <h2 className='text-4xl lg:text-5xl font-bold text-gray-800 mb-6'>
                Cost of <span className='text-gradient-blue'>Living</span>
              </h2>
              <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Comprehensive breakdown of living expenses across major
                Australian cities
              </p>
            </motion.div>

            <div className='grid lg:grid-cols-2 gap-8'>
              <div className='bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8'>
                <h3 className='text-2xl font-bold text-gray-800 mb-6'>
                  Housing Costs (Monthly Rent)
                </h3>
                <div className='space-y-4'>
                  {Object.entries(countryData.costOfLiving.housing).map(
                    ([city, cost]) => (
                      <div
                        key={city}
                        className='flex justify-between items-center p-4 bg-white rounded-lg'
                      >
                        <span className='font-medium text-gray-800 capitalize'>
                          {city}
                        </span>
                        <span className='font-bold text-blue-600'>
                          {String(cost)}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className='space-y-6'>
                <div className='bg-white rounded-xl p-6 shadow-lg border border-gray-100'>
                  <h4 className='font-bold text-gray-800 mb-4 flex items-center gap-2'>
                    <DollarSign className='text-green-600' />
                    Monthly Expenses
                  </h4>
                  <div className='space-y-3'>
                    <div className='flex justify-between'>
                      <span className='text-gray-600'>Utilities</span>
                      <span className='font-semibold'>
                        {countryData.costOfLiving.utilities}
                      </span>
                    </div>
                    <div className='flex justify-between'>
                      <span className='text-gray-600'>
                        Groceries (Family of 4)
                      </span>
                      <span className='font-semibold'>
                        {countryData.costOfLiving.groceries}
                      </span>
                    </div>
                    <div className='flex justify-between'>
                      <span className='text-gray-600'>Public Transport</span>
                      <span className='font-semibold'>
                        {countryData.costOfLiving.transport}
                      </span>
                    </div>
                    <div className='flex justify-between'>
                      <span className='text-gray-600'>Restaurant Meal</span>
                      <span className='font-semibold'>
                        {countryData.costOfLiving.dining}
                      </span>
                    </div>
                  </div>
                </div>

                <div className='bg-green-50 rounded-xl p-6'>
                  <h4 className='font-bold text-green-800 mb-2'>
                    💡 Cost-Saving Tips
                  </h4>
                  <ul className='text-sm text-green-700 space-y-1'>
                    <li>• Consider regional areas for lower housing costs</li>
                    <li>• Use public transport with weekly/monthly passes</li>
                    <li>• Shop at local markets for fresh produce</li>
                    <li>• Take advantage of student discounts if studying</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Enhanced Benefits Section */}
      <section className='py-20 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl lg:text-5xl font-bold text-gray-800 mb-6'>
              Why Choose <span className='text-gradient-blue'>Australia?</span>
            </h2>
          </motion.div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {countryData.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center'
              >
                <div className='text-4xl mb-4'>{benefit.icon}</div>
                <h3 className='text-xl font-bold text-gray-800 mb-3'>
                  {benefit.title}
                </h3>
                <p className='text-gray-600 text-sm leading-relaxed'>
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSupport />
      <Footer />
    </div>
  );
}
