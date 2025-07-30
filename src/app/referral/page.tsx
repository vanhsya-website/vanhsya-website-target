'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Trophy,
  Copy,
  Check,
  Wallet,
  Crown,
  Facebook,
  Instagram,
  MessageCircle,
} from 'lucide-react';

import BackNavigation from '@/components/BackNavigation';
import Footer from '@/components/Footer';
import { useCurrency } from '@/components/CurrencySelector';

interface ReferralStats {
  totalReferrals: number;
  successfulReferrals: number;
  totalEarnings: number;
  pendingEarnings: number;
  currentTier: string;
  nextTierTarget: number;
}

const referralPrograms = [
  {
    service: 'Express Entry Canada',
    commission: 'Premium Commission Available',
    guarantee: '99% Success Rate Guaranteed',
    description:
      'Refer friends for Canada immigration with our expert guidance',
  },
  {
    service: 'Australia Skilled Migration',
    commission: 'Attractive Commission Structure',
    guarantee: '95% Success Rate Guaranteed',
    description: 'Help others achieve their Australian dream',
  },
  {
    service: 'UK Work Visa',
    commission: 'Competitive Rewards',
    guarantee: '92% Success Rate Guaranteed',
    description: 'Connect professionals with UK opportunities',
  },
  {
    service: 'Study Visa Programs',
    commission: 'Educational Incentives',
    guarantee: '98% Success Rate Guaranteed',
    description: 'Support students in their educational journey abroad',
  },
];

const tierBenefits = {
  Bronze: {
    commission: 'Standard Commission',
    minReferrals: 0,
    color: 'from-orange-400 to-orange-600',
    benefits: [
      'Basic commission structure',
      'Access to referral dashboard',
      'Monthly rewards',
    ],
  },
  Silver: {
    commission: 'Enhanced Commission',
    minReferrals: 5,
    color: 'from-gray-400 to-gray-600',
    benefits: [
      'Higher commission rates',
      'Priority support',
      'Quarterly bonuses',
    ],
  },
  Gold: {
    commission: 'Premium Commission',
    minReferrals: 15,
    color: 'from-yellow-400 to-yellow-600',
    benefits: [
      'Premium commission structure',
      'VIP support line',
      'Annual rewards',
    ],
  },
  Platinum: {
    commission: 'Elite Commission',
    minReferrals: 30,
    color: 'from-purple-400 to-purple-600',
    benefits: [
      'Elite commission rates',
      'Dedicated account manager',
      'Exclusive events',
    ],
  },
  Diamond: {
    commission: 'VIP Commission',
    minReferrals: 50,
    color: 'from-blue-400 to-cyan-400',
    benefits: [
      'Maximum commission structure',
      'Personal consultant',
      'Luxury rewards',
    ],
  },
};

export default function ReferralPage() {
  const { formatPrice } = useCurrency();
  const [copied, setCopied] = useState(false);

  const [userStats] = useState<ReferralStats>({
    totalReferrals: 12,
    successfulReferrals: 8,
    totalEarnings: 1840,
    pendingEarnings: 320,
    currentTier: 'Silver',
    nextTierTarget: 15,
  });

  const referralCode = 'VANHSYA-USER123';
  const referralLink = `https://vanhsya.com/register?ref=${referralCode}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900'>
      <BackNavigation
        currentPage='Partner Program'
        customBackUrl='/'
        customBackLabel='Home'
      />

      {/* Hero Section */}
      <section className='px-6 pt-32 pb-12'>
        <div className='mx-auto text-center max-w-7xl'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className='inline-flex items-center gap-3 px-6 py-3 mb-6 border rounded-full bg-gradient-to-r from-green-400/20 to-blue-500/20 border-green-400/30'>
              <Users className='w-6 h-6 text-green-400' />
              <span className='font-medium text-green-300'>
                VANHSYA Partner Program
              </span>
            </div>

            <h1 className='mb-6 text-4xl font-bold text-white md:text-6xl'>
              Join Our Elite
              <span className='text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text'>
                {' '}
                Partner Network
              </span>
            </h1>

            <p className='max-w-3xl mx-auto mb-8 text-xl text-gray-300'>
              Become a VANHSYA partner and help people achieve their migration
              dreams while earning substantial rewards. Join our exclusive
              network of trusted advisors and build a sustainable income stream.
            </p>

            <div className='flex flex-wrap justify-center gap-4 mb-8'>
              <div className='flex items-center gap-2 px-4 py-2 rounded-full bg-white/10'>
                <Trophy className='w-5 h-5 text-yellow-400' />
                <span className='text-white'>Guaranteed Success Rates</span>
              </div>
              <div className='flex items-center gap-2 px-4 py-2 rounded-full bg-white/10'>
                <Wallet className='w-5 h-5 text-green-400' />
                <span className='text-white'>Attractive Commissions</span>
              </div>
              <div className='flex items-center gap-2 px-4 py-2 rounded-full bg-white/10'>
                <Crown className='w-5 h-5 text-purple-400' />
                <span className='text-white'>Premium Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Guarantees Section */}
      <section className='px-6 py-12'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='mb-12 text-3xl font-bold text-center text-white'>
            Our Service Guarantees & Partner Opportunities
          </h2>

          <div className='grid gap-6 md:grid-cols-2'>
            {referralPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className='p-6 transition-all duration-300 border bg-white/10 backdrop-blur-sm rounded-2xl border-white/20 hover:bg-white/15'
              >
                <h3 className='mb-3 text-xl font-bold text-white'>
                  {program.service}
                </h3>
                <p className='mb-4 text-sm text-gray-300'>
                  {program.description}
                </p>

                <div className='space-y-3'>
                  <div className='flex items-center justify-between p-3 border bg-green-500/20 rounded-xl border-green-500/30'>
                    <span className='font-medium text-green-400'>
                      Success Guarantee
                    </span>
                    <span className='text-sm text-green-300'>
                      {program.guarantee}
                    </span>
                  </div>

                  <div className='flex items-center justify-between p-3 border bg-blue-500/20 rounded-xl border-blue-500/30'>
                    <span className='font-medium text-blue-400'>
                      Partner Rewards
                    </span>
                    <span className='text-sm text-blue-300'>
                      {program.commission}
                    </span>
                  </div>
                </div>

                <button className='w-full py-3 mt-4 font-medium text-white transition-all bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl hover:from-blue-600 hover:to-purple-600'>
                  Get Commission Details
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Status Dashboard */}
      <section className='px-6 py-12'>
        <div className='max-w-4xl mx-auto'>
          <div className='p-8 border bg-white/10 backdrop-blur-sm rounded-2xl border-white/20'>
            <div className='mb-8 text-center'>
              <h2 className='mb-2 text-3xl font-bold text-white'>
                Your Partner Dashboard
              </h2>
              <p className='text-gray-400'>Track your progress and earnings</p>
            </div>

            <div className='grid gap-6 mb-8 md:grid-cols-3'>
              <div className='text-center'>
                <div className='mb-1 text-3xl font-bold text-blue-400'>
                  {userStats.totalReferrals}
                </div>
                <div className='text-sm text-gray-400'>Total Referrals</div>
              </div>
              <div className='text-center'>
                <div className='mb-1 text-3xl font-bold text-green-400'>
                  {userStats.successfulReferrals}
                </div>
                <div className='text-sm text-gray-400'>Successful Cases</div>
              </div>
              <div className='text-center'>
                <div className='mb-1 text-3xl font-bold text-purple-400'>
                  {formatPrice(userStats.totalEarnings)}
                </div>
                <div className='text-sm text-gray-400'>Total Earnings</div>
              </div>
            </div>

            <div className='p-6 mb-6 bg-black/30 rounded-xl'>
              <h3 className='mb-4 text-lg font-bold text-white'>
                Your Partner Link
              </h3>
              <div className='flex items-center gap-3'>
                <div className='flex-1 p-3 font-mono text-sm text-white rounded-lg bg-white/10'>
                  {referralLink}
                </div>
                <button
                  onClick={copyToClipboard}
                  className='flex items-center gap-2 px-4 py-3 text-white transition-all bg-blue-500 rounded-lg hover:bg-blue-600'
                >
                  {copied ? (
                    <Check className='w-4 h-4' />
                  ) : (
                    <Copy className='w-4 h-4' />
                  )}
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>

            <div className='grid gap-4 md:grid-cols-3'>
              <button className='flex items-center gap-3 px-4 py-3 text-white transition-all bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl hover:from-blue-700 hover:to-blue-800'>
                <Facebook className='w-5 h-5' />
                <span className='font-medium'>Share on Facebook</span>
              </button>
              <button className='flex items-center gap-3 px-4 py-3 text-white transition-all bg-gradient-to-r from-pink-500 to-rose-600 rounded-xl hover:from-pink-600 hover:to-rose-700'>
                <Instagram className='w-5 h-5' />
                <span className='font-medium'>Share on Instagram</span>
              </button>
              <button className='flex items-center gap-3 px-4 py-3 text-white transition-all bg-gradient-to-r from-green-500 to-green-600 rounded-xl hover:from-green-600 hover:to-green-700'>
                <MessageCircle className='w-5 h-5' />
                <span className='font-medium'>Share on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Tiers */}
      <section className='px-6 py-12'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='mb-12 text-3xl font-bold text-center text-white'>
            Partner Tier Benefits
          </h2>

          <div className='grid gap-4 md:grid-cols-3 lg:grid-cols-5'>
            {Object.entries(tierBenefits).map(([tier, benefits]) => (
              <motion.div
                key={tier}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`relative p-6 rounded-2xl border ${
                  userStats.currentTier === tier
                    ? 'bg-white/15 border-2 border-yellow-400'
                    : 'bg-white/10 border-white/20'
                } text-center`}
              >
                {userStats.currentTier === tier && (
                  <div className='absolute transform -translate-x-1/2 -top-3 left-1/2'>
                    <div className='px-3 py-1 text-xs font-bold text-black bg-yellow-400 rounded-full'>
                      CURRENT
                    </div>
                  </div>
                )}

                <div
                  className={`w-16 h-16 bg-gradient-to-r ${benefits.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                >
                  <Crown className='w-8 h-8 text-white' />
                </div>

                <h3 className='mb-2 text-lg font-bold text-white'>{tier}</h3>
                <p className='mb-4 text-sm text-gray-400'>
                  {benefits.minReferrals}+ referrals
                </p>

                <div className='space-y-2'>
                  <div className='text-sm font-medium text-blue-400'>
                    {benefits.commission}
                  </div>
                  {benefits.benefits.map((benefit, idx) => (
                    <div key={idx} className='text-xs text-gray-300'>
                      {benefit}
                    </div>
                  ))}
                </div>

                <button className='w-full py-2 mt-4 text-sm text-white transition-all rounded-lg bg-white/10 hover:bg-white/20'>
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='px-6 py-12'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='mb-6 text-3xl font-bold text-white'>
            Ready to Start Earning?
          </h2>
          <p className='mb-8 text-xl text-gray-300'>
            Join our exclusive partner program and start building your income
            while helping others achieve their dreams.
          </p>

          <div className='flex flex-wrap justify-center gap-4'>
            <button className='px-8 py-4 font-bold text-white transition-all bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-xl hover:from-green-600 hover:via-blue-600 hover:to-purple-600'>
              Apply for Partnership
            </button>
            <button className='px-8 py-4 font-medium text-white transition-all border bg-white/10 border-white/20 rounded-xl hover:bg-white/20'>
              Contact for Details
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
