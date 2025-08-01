'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Gift,
  Users,
  TrendingUp,
  Star,
  Copy,
  Check,
  Crown,
  Award,
  Sparkles,
  Trophy,
} from 'lucide-react';

interface ReferralTier {
  name: string;
  referrals: number;
  reward: string;
  color: string;
  benefits: string[];
  icon: React.ComponentType<{className?: string}>;
}

export default function ReferralProgramPage() {
  const [copySuccess, setCopySuccess] = useState(false);
  const [referralCode] = useState('VANHSYA-REF-2025-VIP');

  const referralTiers: ReferralTier[] = [
    {
      name: 'Bronze',
      referrals: 3,
      reward: '₹15,000 Discount',
      color: 'from-orange-600 to-yellow-600',
      benefits: ['15% fee reduction', 'Priority support', 'Bonus consultation'],
      icon: Award,
    },
    {
      name: 'Silver',
      referrals: 5,
      reward: '₹35,000 Discount',
      color: 'from-gray-400 to-gray-600',
      benefits: [
        '35% fee reduction',
        'VIP support',
        'Document review',
        'Fast tracking',
      ],
      icon: Star,
    },
    {
      name: 'Gold',
      referrals: 8,
      reward: '₹65,000 Discount',
      color: 'from-yellow-400 to-yellow-600',
      benefits: [
        '65% fee reduction',
        'Premium support',
        'Personal consultant',
        'Express processing',
      ],
      icon: Crown,
    },
    {
      name: 'Platinum',
      referrals: 10,
      reward: 'FREE Migration Package',
      color: 'from-purple-400 to-pink-600',
      benefits: [
        '100% FREE migration',
        'Dedicated team',
        'Settlement support',
        'Lifetime assistance',
      ],
      icon: Trophy,
    },
  ];

  const copyReferralCode = () => {
    navigator.clipboard.writeText(referralCode);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950'>
      {/* Background Effects */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-yellow-500/5' />
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-1 h-1 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <div className='inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-yellow-500/20 to-pink-500/20 border border-yellow-400/30 rounded-full text-yellow-300 text-sm font-medium mb-8'>
            <Gift className='w-5 h-5' />
            <span>Earn While You Help Others Migrate</span>
          </div>

          <h1 className='text-5xl md:text-7xl font-black mb-6'>
            <span className='bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent'>
              VANHSYA
            </span>
            <br />
            <span className='text-white'>Referral Program</span>
          </h1>

          <p className='text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed'>
            Share VANHSYA with friends and family. Get rewarded for every
            successful migration. From discounts to completely FREE migration
            packages!
          </p>
        </motion.div>

        {/* Referral Code Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='mb-16'
        >
          <div className='max-w-2xl mx-auto'>
            <div className='bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30'>
              <div className='text-center mb-6'>
                <h3 className='text-2xl font-bold text-white mb-2'>
                  Your Personal Referral Code
                </h3>
                <p className='text-slate-300'>
                  Share this code with friends to start earning rewards
                </p>
              </div>

              <div className='flex items-center justify-center space-x-4'>
                <div className='flex-1 bg-slate-800/50 rounded-xl p-4 border border-slate-700'>
                  <div className='text-center'>
                    <div className='text-2xl font-mono font-bold text-yellow-400 mb-2'>
                      {referralCode}
                    </div>
                    <div className='text-sm text-slate-400'>
                      Valid until Dec 2025
                    </div>
                  </div>
                </div>

                <motion.button
                  onClick={copyReferralCode}
                  className='flex items-center space-x-2 px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {copySuccess ? (
                    <Check className='w-5 h-5' />
                  ) : (
                    <Copy className='w-5 h-5' />
                  )}
                  <span>{copySuccess ? 'Copied!' : 'Copy'}</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Reward Tiers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='mb-16'
        >
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold text-white mb-4'>
              Referral Tiers & Rewards
            </h2>
            <p className='text-xl text-slate-300'>
              The more you refer, the bigger your rewards get!
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {referralTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='relative group'
              >
                <div
                  className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${tier.color} p-1`}
                >
                  <div className='bg-slate-900/90 backdrop-blur-xl rounded-3xl p-6 h-full'>
                    <div className='text-center mb-6'>
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${tier.color} mb-4`}
                      >
                        <tier.icon className='w-8 h-8 text-white' />
                      </div>
                      <h3 className='text-2xl font-bold text-white mb-2'>
                        {tier.name}
                      </h3>
                      <div className='text-sm text-slate-400 mb-3'>
                        {tier.referrals} Referrals
                      </div>
                      <div
                        className={`text-xl font-bold bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`}
                      >
                        {tier.reward}
                      </div>
                    </div>

                    <div className='space-y-3'>
                      {tier.benefits.map((benefit, idx) => (
                        <div key={idx} className='flex items-center space-x-3'>
                          <Check className='w-4 h-4 text-green-400 flex-shrink-0' />
                          <span className='text-sm text-slate-300'>
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='mb-16'
        >
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold text-white mb-4'>How It Works</h2>
            <p className='text-xl text-slate-300'>
              Simple steps to start earning amazing rewards
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              {
                step: '1',
                title: 'Share Your Code',
                description:
                  'Share your unique referral code with friends, family, and colleagues who need migration services.',
                icon: Users,
                color: 'from-blue-500 to-purple-500',
              },
              {
                step: '2',
                title: 'They Get Started',
                description:
                  'When they use your code and book any VANHSYA service, you both get exclusive benefits.',
                icon: Sparkles,
                color: 'from-purple-500 to-pink-500',
              },
              {
                step: '3',
                title: 'Earn Rewards',
                description:
                  'Get instant rewards and climb tiers for bigger discounts. Even get FREE migration packages!',
                icon: Trophy,
                color: 'from-pink-500 to-yellow-500',
              },
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className='text-center'
              >
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${step.color} mb-6`}
                >
                  <step.icon className='w-10 h-10 text-white' />
                </div>
                <h3 className='text-2xl font-bold text-white mb-4'>
                  Step {step.step}: {step.title}
                </h3>
                <p className='text-slate-300 leading-relaxed'>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='text-center'
        >
          <div className='max-w-3xl mx-auto'>
            <h2 className='text-4xl font-bold text-white mb-6'>
              Start Earning Today!
            </h2>
            <p className='text-xl text-slate-300 mb-8'>
              Join thousands of VANHSYA ambassadors who have already earned
              amazing rewards. Your migration could be completely FREE!
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <motion.button
                className='px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl text-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Gift className='w-6 h-6' />
                <span>Start Referring Now</span>
              </motion.button>

              <motion.button
                className='px-8 py-4 border-2 border-purple-400 text-purple-400 font-bold rounded-xl text-lg hover:bg-purple-400 hover:text-white transition-all flex items-center justify-center space-x-2'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <TrendingUp className='w-6 h-6' />
                <span>View My Progress</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
