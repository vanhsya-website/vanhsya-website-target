'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Crown, CheckCircle, Award } from 'lucide-react';

import Footer from '@/components/Footer';

const LuckyDrawPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 35,
    seconds: 42,
  });

  const [selectedCurrency, setSelectedCurrency] = useState('AED');
  const [showCurrencyDetails, setShowCurrencyDetails] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const currencies = {
    AED: { symbol: 'AED', rate: 1, flag: '🇦🇪' },
    USD: { symbol: '$', rate: 0.27, flag: '🇺🇸' },
    EUR: { symbol: '€', rate: 0.25, flag: '🇪🇺' },
    GBP: { symbol: '£', rate: 0.22, flag: '🇬🇧' },
    INR: { symbol: '₹', rate: 22.5, flag: '🇮🇳' },
    CAD: { symbol: 'C$', rate: 0.37, flag: '🇨🇦' },
    AUD: { symbol: 'A$', rate: 0.41, flag: '🇦🇺' },
  };

  const formatPrice = (aedPrice: number) => {
    const rate = currencies[selectedCurrency as keyof typeof currencies].rate;
    const symbol =
      currencies[selectedCurrency as keyof typeof currencies].symbol;
    const convertedPrice = aedPrice * rate;
    return `${symbol}${convertedPrice.toLocaleString()}`;
  };

  const prizes = [
    {
      rank: 1,
      title: 'Grand Prize Winner',
      description: 'Complete Premium Migration Package + VIP Consultation',
      value: 25000,
      color: 'from-yellow-400 to-orange-500',
      icon: Crown,
      benefits: [
        'Complete visa processing for family of 4',
        'Premium document preparation',
        'VIP consultation sessions',
        'Priority application processing',
        'Airport assistance & settlement support',
      ],
    },
    {
      rank: 2,
      title: 'Second Prize',
      description: 'Premium Individual Migration Package',
      value: 15000,
      color: 'from-purple-500 to-violet-600',
      icon: Trophy,
      benefits: [
        'Individual visa processing',
        'Document preparation',
        'Expert consultation',
        'Application tracking',
        'Settlement guidance',
      ],
    },
    {
      rank: 3,
      title: 'Third Prize',
      description: 'Professional Consultation Package',
      value: 8000,
      color: 'from-blue-500 to-indigo-600',
      icon: Award,
      benefits: [
        'Professional assessment',
        'Document review',
        'Strategy consultation',
        'Application guidance',
        'Support services',
      ],
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-violet-900 relative'>
      {/* Enhanced Animated Background */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-0 left-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-violet-500/25 rounded-full blur-3xl animate-pulse'></div>
      </div>

      {/* Hero Section */}
      <section className='pt-32 pb-20 relative z-10'>
        <div className='max-w-6xl mx-auto px-6 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='text-6xl md:text-8xl font-black bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-6'>
              🎁 MEGA LUCKY DRAW
            </h1>
            <p className='text-2xl text-purple-300 font-bold mb-8'>
              Win Life-Changing Immigration Services Worth Up To{' '}
              {formatPrice(25000)}!
            </p>

            {/* Countdown Timer */}
            <div className='grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-12'>
              {Object.entries(timeLeft).map(([unit, value]) => (
                <motion.div
                  key={unit}
                  className='p-6 bg-white/10 backdrop-blur-sm border border-purple-300/30 rounded-2xl'
                  whileHover={{ scale: 1.05 }}
                >
                  <div className='text-4xl font-black text-white'>{value}</div>
                  <div className='text-purple-300 font-bold uppercase'>
                    {unit}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Prize Structure */}
      <section className='py-20 relative z-10'>
        <div className='max-w-7xl mx-auto px-6'>
          <motion.div
            className='text-center mb-16'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className='text-5xl font-black bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent mb-6'>
              🏆 Prize Structure & Winners
            </h2>
            <p className='text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed'>
              Life-changing immigration services worth thousands of AED -
              Professional packages designed for your success
            </p>
          </motion.div>

          {/* Main Prizes */}
          <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16'>
            {prizes.map((prize, index) => (
              <motion.div
                key={index}
                className='relative group'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className='relative p-8 bg-white/95 border-2 border-purple-200 rounded-3xl backdrop-blur-sm shadow-xl overflow-hidden min-h-[500px] flex flex-col'>
                  {/* Rank Badge */}
                  <div
                    className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r ${prize.color} rounded-full flex items-center justify-center text-white font-black text-xl shadow-2xl border-4 border-white`}
                  >
                    #{prize.rank}
                  </div>

                  {/* Prize Icon */}
                  <div className='text-center mb-6'>
                    <motion.div
                      className={`w-24 h-24 mx-auto bg-gradient-to-r ${prize.color} rounded-3xl flex items-center justify-center shadow-xl`}
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <prize.icon className='w-12 h-12 text-white' />
                    </motion.div>
                  </div>

                  <h3 className='text-2xl font-black text-slate-800 mb-3 text-center'>
                    {prize.title}
                  </h3>
                  <p className='text-slate-600 text-center mb-6 leading-relaxed'>
                    {prize.description}
                  </p>

                  <div className='text-center mb-8'>
                    <div className='text-5xl font-black bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent mb-2'>
                      {formatPrice(prize.value)}
                    </div>
                    <span className='text-slate-500 text-lg font-bold'>
                      Total Package Value
                    </span>
                  </div>

                  <div className='space-y-4 flex-grow'>
                    {prize.benefits.map((benefit, i) => (
                      <div
                        key={i}
                        className='flex items-start gap-3 text-slate-700'
                      >
                        <CheckCircle className='w-5 h-5 text-green-500 flex-shrink-0 mt-1' />
                        <span className='font-medium leading-relaxed'>
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Participate */}
      <section className='py-20 bg-gradient-to-br from-purple-900/50 via-violet-900/30 to-indigo-900/50 relative'>
        <div className='max-w-6xl mx-auto px-6 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className='text-5xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-8'>
              🎯 How to Participate
            </h2>
            <div className='grid md:grid-cols-3 gap-8'>
              <div className='p-8 bg-white/10 backdrop-blur-sm border border-purple-300/30 rounded-2xl'>
                <div className='text-4xl mb-4'>📞</div>
                <h3 className='text-2xl font-bold text-white mb-4'>
                  Step 1: Contact Us
                </h3>
                <p className='text-purple-300'>
                  Schedule a free consultation with our expert team
                </p>
              </div>
              <div className='p-8 bg-white/10 backdrop-blur-sm border border-purple-300/30 rounded-2xl'>
                <div className='text-4xl mb-4'>📋</div>
                <h3 className='text-2xl font-bold text-white mb-4'>
                  Step 2: Assessment
                </h3>
                <p className='text-purple-300'>
                  Complete your profile and get automatic entry
                </p>
              </div>
              <div className='p-8 bg-white/10 backdrop-blur-sm border border-purple-300/30 rounded-2xl'>
                <div className='text-4xl mb-4'>🎉</div>
                <h3 className='text-2xl font-bold text-white mb-4'>
                  Step 3: Win!
                </h3>
                <p className='text-purple-300'>
                  Winners announced live on our social channels
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='py-20 relative z-10'>
        <div className='max-w-4xl mx-auto px-6 text-center'>
          <motion.div
            className='p-12 bg-gradient-to-br from-purple-600/20 via-violet-600/20 to-indigo-600/20 border-2 border-purple-300/30 rounded-3xl backdrop-blur-sm'
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className='text-4xl font-black text-white mb-6'>
              🚀 Don't Miss This Life-Changing Opportunity!
            </h2>
            <p className='text-xl text-purple-300 mb-8'>
              Join thousands of participants and take your first step towards a
              new life abroad.
            </p>
            <motion.button
              className='px-12 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 font-black text-xl rounded-2xl shadow-2xl'
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              🎁 ENTER LUCKY DRAW NOW
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Currency Selector */}
      <motion.div
        className='fixed bottom-6 right-6 z-50'
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.button
          onClick={() => setShowCurrencyDetails(!showCurrencyDetails)}
          className='w-14 h-14 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-full shadow-2xl border-2 border-white/20 backdrop-blur-sm flex items-center justify-center font-bold'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {currencies[selectedCurrency as keyof typeof currencies].flag}
        </motion.button>

        <AnimatePresence>
          {showCurrencyDetails && (
            <motion.div
              className='absolute bottom-16 right-0 p-4 bg-white/95 backdrop-blur-sm border-2 border-purple-200 rounded-2xl shadow-2xl min-w-[200px]'
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
            >
              <div className='text-sm font-bold text-slate-700 mb-3'>
                Select Currency:
              </div>
              <div className='grid grid-cols-2 gap-2'>
                {Object.entries(currencies).map(([code, currency]) => (
                  <button
                    key={code}
                    onClick={() => {
                      setSelectedCurrency(code);
                      setShowCurrencyDetails(false);
                    }}
                    className={`p-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${
                      selectedCurrency === code
                        ? 'bg-purple-600 text-white'
                        : 'hover:bg-purple-50 text-slate-600'
                    }`}
                  >
                    <span>{currency.flag}</span>
                    <span>{code}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <Footer />
    </div>
  );
};

export default LuckyDrawPage;
