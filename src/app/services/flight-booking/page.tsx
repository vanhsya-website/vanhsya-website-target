'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Plane,
  Calendar,
  MapPin,
  Users,
  Star,
  Clock,
  Shield,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

const FlightBookingPage: React.FC = () => {
  const [searchForm, setSearchForm] = useState({
    from: '',
    to: '',
    departDate: '',
    returnDate: '',
    passengers: 1,
    tripType: 'round-trip',
  });

  const [activeTab, setActiveTab] = useState('search');

  const handleInputChange = (field: string, value: string | number) => {
    setSearchForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveTab('results');
  };

  const flightResults = [
    {
      id: 1,
      airline: 'Emirates',
      price: '$1,250',
      duration: '14h 30m',
      stops: '1 stop',
      departure: '08:45',
      arrival: '23:15',
      rating: 4.8,
    },
    {
      id: 2,
      airline: 'Qatar Airways',
      price: '$1,180',
      duration: '16h 45m',
      stops: '1 stop',
      departure: '22:30',
      arrival: '15:15+1',
      rating: 4.9,
    },
    {
      id: 3,
      airline: 'Air Canada',
      price: '$1,320',
      duration: '13h 20m',
      stops: 'Direct',
      departure: '11:20',
      arrival: '14:40',
      rating: 4.6,
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50'>
      {/* Header */}
      <div className='relative overflow-hidden bg-gradient-to-r from-blue-600 to-sky-600 text-white py-20'>
        <div className='absolute inset-0 bg-black/10'></div>
        <div className='relative max-w-6xl mx-auto px-4 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='mb-8'
          >
            <div className='w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6'>
              <Plane className='w-10 h-10' />
            </div>
            <h1 className='text-5xl font-bold mb-4'>Flight Booking Service</h1>
            <p className='text-xl opacity-90 max-w-2xl mx-auto'>
              Find and book the best flights for your immigration journey with
              our expert assistance
            </p>
          </motion.div>
        </div>
      </div>

      <div className='max-w-6xl mx-auto px-4 -mt-10 relative z-10'>
        {/* Search Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='bg-white rounded-2xl shadow-xl p-8 mb-12'
        >
          <div className='flex mb-6'>
            <button
              onClick={() => setActiveTab('search')}
              className={`px-6 py-3 rounded-lg font-semibold mr-4 transition-colors ${
                activeTab === 'search'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Search Flights
            </button>
            <button
              onClick={() => setActiveTab('results')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === 'results'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Flight Results
            </button>
          </div>

          {activeTab === 'search' && (
            <form onSubmit={handleSearch} className='space-y-6'>
              {/* Trip Type */}
              <div className='flex space-x-4'>
                <label className='flex items-center'>
                  <input
                    type='radio'
                    name='tripType'
                    value='round-trip'
                    checked={searchForm.tripType === 'round-trip'}
                    onChange={e =>
                      handleInputChange('tripType', e.target.value)
                    }
                    className='mr-2'
                  />
                  Round Trip
                </label>
                <label className='flex items-center'>
                  <input
                    type='radio'
                    name='tripType'
                    value='one-way'
                    checked={searchForm.tripType === 'one-way'}
                    onChange={e =>
                      handleInputChange('tripType', e.target.value)
                    }
                    className='mr-2'
                  />
                  One Way
                </label>
              </div>

              {/* Flight Search Fields */}
              <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    From
                  </label>
                  <div className='relative'>
                    <MapPin className='absolute left-3 top-3 w-5 h-5 text-gray-400' />
                    <input
                      type='text'
                      value={searchForm.from}
                      onChange={e => handleInputChange('from', e.target.value)}
                      placeholder='Departure city'
                      className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    />
                  </div>
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    To
                  </label>
                  <div className='relative'>
                    <MapPin className='absolute left-3 top-3 w-5 h-5 text-gray-400' />
                    <input
                      type='text'
                      value={searchForm.to}
                      onChange={e => handleInputChange('to', e.target.value)}
                      placeholder='Destination city'
                      className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    />
                  </div>
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Departure
                  </label>
                  <div className='relative'>
                    <Calendar className='absolute left-3 top-3 w-5 h-5 text-gray-400' />
                    <input
                      type='date'
                      value={searchForm.departDate}
                      onChange={e =>
                        handleInputChange('departDate', e.target.value)
                      }
                      className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    />
                  </div>
                </div>

                {searchForm.tripType === 'round-trip' && (
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Return
                    </label>
                    <div className='relative'>
                      <Calendar className='absolute left-3 top-3 w-5 h-5 text-gray-400' />
                      <input
                        type='date'
                        value={searchForm.returnDate}
                        onChange={e =>
                          handleInputChange('returnDate', e.target.value)
                        }
                        className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className='flex items-center justify-between'>
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Passengers
                  </label>
                  <div className='relative'>
                    <Users className='absolute left-3 top-3 w-5 h-5 text-gray-400' />
                    <select
                      value={searchForm.passengers}
                      onChange={e =>
                        handleInputChange(
                          'passengers',
                          parseInt(e.target.value)
                        )
                      }
                      className='pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    >
                      {[1, 2, 3, 4, 5, 6].map(num => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Passenger' : 'Passengers'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <motion.button
                  type='submit'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2'
                >
                  <span>Search Flights</span>
                  <ArrowRight className='w-5 h-5' />
                </motion.button>
              </div>
            </form>
          )}

          {activeTab === 'results' && (
            <div className='space-y-4'>
              <div className='flex items-center justify-between mb-6'>
                <h3 className='text-xl font-bold text-gray-800'>
                  Available Flights
                </h3>
                <p className='text-gray-600'>
                  {flightResults.length} flights found
                </p>
              </div>

              {flightResults.map(flight => (
                <motion.div
                  key={flight.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow'
                >
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-6'>
                      <div>
                        <h4 className='font-semibold text-lg'>
                          {flight.airline}
                        </h4>
                        <div className='flex items-center space-x-1'>
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(flight.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                          <span className='text-sm text-gray-600 ml-1'>
                            {flight.rating}
                          </span>
                        </div>
                      </div>

                      <div className='text-center'>
                        <p className='font-semibold'>{flight.departure}</p>
                        <p className='text-sm text-gray-600'>Departure</p>
                      </div>

                      <div className='text-center'>
                        <div className='flex items-center space-x-2'>
                          <Clock className='w-4 h-4 text-gray-400' />
                          <span className='text-sm'>{flight.duration}</span>
                        </div>
                        <p className='text-sm text-gray-600'>{flight.stops}</p>
                      </div>

                      <div className='text-center'>
                        <p className='font-semibold'>{flight.arrival}</p>
                        <p className='text-sm text-gray-600'>Arrival</p>
                      </div>
                    </div>

                    <div className='text-right'>
                      <p className='text-2xl font-bold text-blue-600'>
                        {flight.price}
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors mt-2'
                      >
                        Select Flight
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Features */}
        <div className='grid md:grid-cols-3 gap-8 mb-12'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className='bg-white rounded-xl shadow-lg p-6 text-center'
          >
            <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
              <Shield className='w-8 h-8 text-blue-600' />
            </div>
            <h3 className='text-xl font-bold text-gray-800 mb-2'>
              Secure Booking
            </h3>
            <p className='text-gray-600'>
              Safe and secure flight booking with industry-standard encryption
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className='bg-white rounded-xl shadow-lg p-6 text-center'
          >
            <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
              <CheckCircle className='w-8 h-8 text-green-600' />
            </div>
            <h3 className='text-xl font-bold text-gray-800 mb-2'>
              Best Prices
            </h3>
            <p className='text-gray-600'>
              Compare prices from multiple airlines to get the best deals
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className='bg-white rounded-xl shadow-lg p-6 text-center'
          >
            <div className='w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4'>
              <Clock className='w-8 h-8 text-purple-600' />
            </div>
            <h3 className='text-xl font-bold text-gray-800 mb-2'>
              24/7 Support
            </h3>
            <p className='text-gray-600'>
              Round-the-clock customer support for all your travel needs
            </p>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className='bg-white rounded-2xl shadow-xl p-8 mb-12'
        >
          <h2 className='text-3xl font-bold text-gray-800 text-center mb-8'>
            Why Choose VANHSYA Flight Booking?
          </h2>
          <div className='grid md:grid-cols-2 gap-8'>
            <div className='space-y-4'>
              <div className='flex items-start space-x-3'>
                <CheckCircle className='w-6 h-6 text-green-600 mt-1' />
                <div>
                  <h4 className='font-semibold text-gray-800'>
                    Immigration-Specific Routes
                  </h4>
                  <p className='text-gray-600'>
                    Specialized in routes for immigration and visa travel
                  </p>
                </div>
              </div>
              <div className='flex items-start space-x-3'>
                <CheckCircle className='w-6 h-6 text-green-600 mt-1' />
                <div>
                  <h4 className='font-semibold text-gray-800'>
                    Flexible Booking
                  </h4>
                  <p className='text-gray-600'>
                    Easy date changes and cancellation policies
                  </p>
                </div>
              </div>
              <div className='flex items-start space-x-3'>
                <CheckCircle className='w-6 h-6 text-green-600 mt-1' />
                <div>
                  <h4 className='font-semibold text-gray-800'>
                    Expert Assistance
                  </h4>
                  <p className='text-gray-600'>
                    Travel experts to help with visa-related flight requirements
                  </p>
                </div>
              </div>
            </div>
            <div className='space-y-4'>
              <div className='flex items-start space-x-3'>
                <CheckCircle className='w-6 h-6 text-green-600 mt-1' />
                <div>
                  <h4 className='font-semibold text-gray-800'>
                    Group Discounts
                  </h4>
                  <p className='text-gray-600'>
                    Special rates for families and group immigrations
                  </p>
                </div>
              </div>
              <div className='flex items-start space-x-3'>
                <CheckCircle className='w-6 h-6 text-green-600 mt-1' />
                <div>
                  <h4 className='font-semibold text-gray-800'>
                    Comprehensive Support
                  </h4>
                  <p className='text-gray-600'>
                    End-to-end support from booking to arrival
                  </p>
                </div>
              </div>
              <div className='flex items-start space-x-3'>
                <CheckCircle className='w-6 h-6 text-green-600 mt-1' />
                <div>
                  <h4 className='font-semibold text-gray-800'>
                    Insurance Options
                  </h4>
                  <p className='text-gray-600'>
                    Travel insurance and protection plans available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className='text-center pb-12'
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='bg-gradient-to-r from-blue-600 to-sky-600 text-white px-12 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all'
          >
            Start Your Journey Today
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default FlightBookingPage;
