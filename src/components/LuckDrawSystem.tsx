'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Sparkles, Zap, X } from 'lucide-react';

interface Prize {
  id: string;
  title: string;
  description: string;
  value: string;
  probability: number;
  icon: string;
  color: string;
}

const LuckDrawSystem = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [wonPrize, setWonPrize] = useState<Prize | null>(null);
  const [userEntries, setUserEntries] = useState(3);
  const [showRules, setShowRules] = useState(false);
  const [participants, setParticipants] = useState(15847);

  const prizes: Prize[] = [
    {
      id: '1',
      title: 'Free Visa Consultation',
      description: 'Complete visa consultation worth ₹15,000',
      value: '₹15,000',
      probability: 25,
      icon: '🎯',
      color: 'from-blue-500 to-purple-600',
    },
    {
      id: '2',
      title: 'Document Review',
      description: 'Professional document review service',
      value: '₹8,000',
      probability: 20,
      icon: '📋',
      color: 'from-green-500 to-blue-500',
    },
    {
      id: '3',
      title: 'IELTS Preparation',
      description: '1-month IELTS preparation course',
      value: '₹12,000',
      probability: 15,
      icon: '📚',
      color: 'from-orange-500 to-red-500',
    },
    {
      id: '4',
      title: 'Express Processing',
      description: 'Priority visa application processing',
      value: '₹25,000',
      probability: 10,
      icon: '⚡',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      id: '5',
      title: 'Travel Insurance',
      description: '6-month comprehensive travel insurance',
      value: '₹6,000',
      probability: 20,
      icon: '🛡️',
      color: 'from-teal-500 to-green-500',
    },
    {
      id: '6',
      title: 'Mega Prize',
      description: 'Complete immigration package',
      value: '₹1,00,000',
      probability: 5,
      icon: '🏆',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: '7',
      title: 'Better Luck',
      description: '10% discount on next service',
      value: '10%',
      probability: 5,
      icon: '🎫',
      color: 'from-gray-400 to-gray-600',
    },
  ];

  const getRandomPrize = (): Prize => {
    const random = Math.random() * 100;
    let cumulative = 0;

    for (const prize of prizes) {
      cumulative += prize.probability;
      if (random <= cumulative) {
        return prize;
      }
    }

    return prizes[prizes.length - 1]; // fallback
  };

  const spinWheel = () => {
    if (userEntries <= 0) return;

    setIsSpinning(true);
    setShowResult(false);

    // Simulate spinning delay
    setTimeout(() => {
      const prize = getRandomPrize();
      setWonPrize(prize);
      setIsSpinning(false);
      setShowResult(true);
      setUserEntries(prev => prev - 1);
      setParticipants(prev => prev + 1);
    }, 3000);
  };

  const closeResult = () => {
    setShowResult(false);
    setWonPrize(null);
  };

  return (
    <div className='bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20'>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <div className='text-center mb-12'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full mb-6'
          >
            <Sparkles className='w-5 h-5' />
            <span className='font-semibold'>Special Offer</span>
          </motion.div>

          <h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4'>
            Vanhsya Lucky Draw
          </h2>

          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Spin the wheel and win amazing prizes! Free consultations, express
            processing, and exclusive discounts await you.
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Wheel Section */}
          <div className='relative'>
            <div className='bg-white rounded-3xl shadow-2xl p-8 border border-gray-100'>
              {/* Stats */}
              <div className='grid grid-cols-3 gap-4 mb-8'>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-purple-600'>
                    {participants.toLocaleString()}
                  </div>
                  <div className='text-sm text-gray-600'>Participants</div>
                </div>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-green-600'>
                    {userEntries}
                  </div>
                  <div className='text-sm text-gray-600'>Your Entries</div>
                </div>
                <div className='text-center'>
                  <div className='text-2xl font-bold text-orange-600'>95%</div>
                  <div className='text-sm text-gray-600'>Win Rate</div>
                </div>
              </div>

              {/* Wheel */}
              <div className='relative mx-auto w-80 h-80 mb-8'>
                <motion.div
                  animate={
                    isSpinning
                      ? { rotate: 360 * 5 + Math.random() * 360 }
                      : { rotate: 0 }
                  }
                  transition={{ duration: 3, ease: 'easeOut' }}
                  className='w-full h-full rounded-full border-8 border-white shadow-2xl relative overflow-hidden'
                >
                  {prizes.slice(0, 6).map((prize, index) => {
                    const angle = (360 / 6) * index;
                    return (
                      <div
                        key={prize.id}
                        className={`absolute w-full h-full bg-gradient-to-r ${prize.color}`}
                        style={{
                          transform: `rotate(${angle}deg)`,
                          clipPath: 'polygon(50% 50%, 50% 0%, 100% 50%)',
                        }}
                      >
                        <div className='absolute top-8 right-8 text-white text-2xl'>
                          {prize.icon}
                        </div>
                      </div>
                    );
                  })}

                  {/* Center circle */}
                  <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-purple-600'>
                    <Gift className='w-8 h-8 text-purple-600' />
                  </div>
                </motion.div>

                {/* Pointer */}
                <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2'>
                  <div className='w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-red-500'></div>
                </div>
              </div>

              {/* Spin Button */}
              <div className='text-center'>
                <motion.button
                  onClick={spinWheel}
                  disabled={isSpinning || userEntries <= 0}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-4 rounded-full font-bold text-lg transition-all ${
                    isSpinning || userEntries <= 0
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg'
                  }`}
                >
                  {isSpinning ? (
                    <div className='flex items-center gap-2'>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      >
                        <Zap className='w-5 h-5' />
                      </motion.div>
                      Spinning...
                    </div>
                  ) : userEntries <= 0 ? (
                    'No Entries Left'
                  ) : (
                    'SPIN NOW!'
                  )}
                </motion.button>

                <p className='text-sm text-gray-500 mt-2'>
                  {userEntries > 0
                    ? `${userEntries} spins remaining`
                    : 'Share with friends to get more spins!'}
                </p>
              </div>
            </div>
          </div>

          {/* Prizes Section */}
          <div>
            <div className='bg-white rounded-3xl shadow-xl p-8 border border-gray-100'>
              <div className='flex items-center justify-between mb-6'>
                <h3 className='text-2xl font-bold text-gray-800'>
                  Available Prizes
                </h3>
                <button
                  onClick={() => setShowRules(true)}
                  className='text-purple-600 hover:text-purple-700 font-medium'
                >
                  View Rules
                </button>
              </div>

              <div className='space-y-4'>
                {prizes.slice(0, 5).map(prize => (
                  <motion.div
                    key={prize.id}
                    whileHover={{ scale: 1.02 }}
                    className='flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-purple-200 transition-all'
                  >
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${prize.color} flex items-center justify-center text-white text-xl`}
                    >
                      {prize.icon}
                    </div>
                    <div className='flex-1'>
                      <h4 className='font-semibold text-gray-800'>
                        {prize.title}
                      </h4>
                      <p className='text-sm text-gray-600'>
                        {prize.description}
                      </p>
                    </div>
                    <div className='text-right'>
                      <div className='font-bold text-purple-600'>
                        {prize.value}
                      </div>
                      <div className='text-xs text-gray-500'>
                        {prize.probability}% chance
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className='mt-8 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl'>
                <p className='text-sm text-gray-700 mb-3'>
                  <strong>How to get more spins:</strong>
                </p>
                <ul className='text-sm text-gray-600 space-y-1'>
                  <li>• Share on social media (+2 spins)</li>
                  <li>• Refer a friend (+3 spins)</li>
                  <li>• Book a consultation (+5 spins)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Result Modal */}
      <AnimatePresence>
        {showResult && wonPrize && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className='bg-white rounded-3xl p-8 max-w-md w-full relative'
            >
              <button
                onClick={closeResult}
                className='absolute top-4 right-4 text-gray-400 hover:text-gray-600'
              >
                <X className='w-6 h-6' />
              </button>

              <div className='text-center'>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className={`w-20 h-20 rounded-full bg-gradient-to-r ${wonPrize.color} flex items-center justify-center text-white text-3xl mx-auto mb-4`}
                >
                  {wonPrize.icon}
                </motion.div>

                <h3 className='text-2xl font-bold text-gray-800 mb-2'>
                  Congratulations! 🎉
                </h3>

                <p className='text-lg font-semibold text-purple-600 mb-2'>
                  You won: {wonPrize.title}
                </p>

                <p className='text-gray-600 mb-4'>{wonPrize.description}</p>

                <div className='text-3xl font-bold text-green-600 mb-6'>
                  Worth {wonPrize.value}
                </div>

                <button
                  onClick={closeResult}
                  className='bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all'
                >
                  Claim Prize
                </button>

                <p className='text-xs text-gray-500 mt-4'>
                  Check your email for redemption details
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Rules Modal */}
      <AnimatePresence>
        {showRules && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className='bg-white rounded-3xl p-8 max-w-lg w-full relative max-h-[80vh] overflow-y-auto'
            >
              <button
                onClick={() => setShowRules(false)}
                className='absolute top-4 right-4 text-gray-400 hover:text-gray-600'
              >
                <X className='w-6 h-6' />
              </button>

              <h3 className='text-2xl font-bold text-gray-800 mb-6'>
                Lucky Draw Rules
              </h3>

              <div className='space-y-4 text-sm text-gray-600'>
                <div>
                  <h4 className='font-semibold text-gray-800 mb-2'>
                    Eligibility:
                  </h4>
                  <ul className='space-y-1'>
                    <li>• Must be 18+ years old</li>
                    <li>• Valid email address required</li>
                    <li>• One account per person</li>
                  </ul>
                </div>

                <div>
                  <h4 className='font-semibold text-gray-800 mb-2'>
                    How to Play:
                  </h4>
                  <ul className='space-y-1'>
                    <li>• Click "SPIN NOW" to spin the wheel</li>
                    <li>• Each user gets 3 free spins daily</li>
                    <li>• Additional spins can be earned through activities</li>
                  </ul>
                </div>

                <div>
                  <h4 className='font-semibold text-gray-800 mb-2'>
                    Prize Redemption:
                  </h4>
                  <ul className='space-y-1'>
                    <li>• Prizes must be claimed within 30 days</li>
                    <li>• Valid ID proof required for high-value prizes</li>
                    <li>• Prizes are non-transferable</li>
                  </ul>
                </div>

                <div>
                  <h4 className='font-semibold text-gray-800 mb-2'>Terms:</h4>
                  <ul className='space-y-1'>
                    <li>• Vanhsya reserves the right to modify rules</li>
                    <li>• Employees and their families are not eligible</li>
                    <li>• Void where prohibited by law</li>
                  </ul>
                </div>
              </div>

              <button
                onClick={() => setShowRules(false)}
                className='bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all mt-6 w-full'
              >
                Got It!
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LuckDrawSystem;
