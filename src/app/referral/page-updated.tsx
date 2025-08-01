'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
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
  Star,
  TrendingUp,
  Gift,
  Target,
  Award,
  Share2,
  DollarSign,
  UserPlus,
  Handshake,
  Zap,
  ArrowRight,
  Phone,
  Mail,
} from 'lucide-react';

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
    description: 'Refer friends for Canada immigration with our expert guidance',
    icon: '🇨🇦',
    color: 'from-red-500 to-red-600',
  },
  {
    service: 'Australia Skilled Migration',
    commission: 'Attractive Commission Structure',
    guarantee: '95% Success Rate Guaranteed',
    description: 'Help others achieve their Australian dream',
    icon: '🇦🇺',
    color: 'from-blue-500 to-blue-600',
  },
  {
    service: 'UK Work Visa',
    commission: 'Competitive Rewards',
    guarantee: '92% Success Rate Guaranteed',
    description: 'Connect professionals with UK opportunities',
    icon: '🇬🇧',
    color: 'from-blue-600 to-indigo-600',
  },
  {
    service: 'Study Visa Programs',
    commission: 'Educational Incentives',
    guarantee: '98% Success Rate Guaranteed',
    description: 'Support students in their educational journey abroad',
    icon: '🎓',
    color: 'from-emerald-500 to-emerald-600',
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

const benefits = [
  {
    icon: DollarSign,
    title: 'Attractive Commissions',
    description: 'Earn substantial rewards for every successful referral with our competitive commission structure.',
  },
  {
    icon: Trophy,
    title: 'Guaranteed Success',
    description: 'Industry-leading success rates ensure your referrals achieve their immigration goals.',
  },
  {
    icon: UserPlus,
    title: 'Easy Referral Process',
    description: 'Simple, streamlined process to refer clients with comprehensive tracking and support.',
  },
  {
    icon: Handshake,
    title: 'Dedicated Support',
    description: 'Personal account managers and priority support for all our trusted partners.',
  },
];

const socialPlatforms = [
  { name: 'Facebook', icon: Facebook, color: 'from-blue-600 to-blue-700' },
  { name: 'Instagram', icon: Instagram, color: 'from-pink-500 to-rose-600' },
  { name: 'WhatsApp', icon: MessageCircle, color: 'from-green-500 to-green-600' },
];

export default function ReferralPage() {
  const [copied, setCopied] = useState(false);
  const [selectedTier, setSelectedTier] = useState('Silver');
  
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);

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
        {Array.from({ length: 12 }, (_, i) => (
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
            <Users className='w-4 h-4' />
            Partner Program
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6'
          >
            Join Our Elite
            <span className='block bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent'>
              Partner Network
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='text-xl text-neutral-300 leading-relaxed mb-8'
          >
            Become a VANHSYA partner and help people achieve their migration dreams while earning substantial rewards. Join our exclusive network of trusted advisors and build a sustainable income stream.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className='flex flex-wrap justify-center gap-4 mb-8'
          >
            <div className='flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50'>
              <Trophy className='w-5 h-5 text-yellow-400' />
              <span className='text-white'>Guaranteed Success Rates</span>
            </div>
            <div className='flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50'>
              <Wallet className='w-5 h-5 text-emerald-400' />
              <span className='text-white'>Attractive Commissions</span>
            </div>
            <div className='flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50'>
              <Crown className='w-5 h-5 text-purple-400' />
              <span className='text-white'>Premium Support</span>
            </div>
          </motion.div>
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className='bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-6 text-center hover:border-neutral-700/50 transition-all duration-300'
            >
              <div className='w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl flex items-center justify-center mx-auto mb-4'>
                <benefit.icon className='w-6 h-6 text-white' />
              </div>
              <h3 className='text-white font-semibold mb-2'>{benefit.title}</h3>
              <p className='text-neutral-400 text-sm leading-relaxed'>{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Current Status Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className='max-w-4xl mx-auto mb-16'
        >
          <div className='bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-8'>
            <div className='text-center mb-8'>
              <h2 className='text-3xl font-bold text-white mb-2'>Your Partner Dashboard</h2>
              <p className='text-neutral-400'>Track your progress and earnings</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
              <div className='text-center'>
                <div className='text-3xl font-bold text-blue-400 mb-1'>{userStats.totalReferrals}</div>
                <div className='text-sm text-neutral-400'>Total Referrals</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-emerald-400 mb-1'>{userStats.successfulReferrals}</div>
                <div className='text-sm text-neutral-400'>Successful Cases</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-purple-400 mb-1'>${userStats.totalEarnings}</div>
                <div className='text-sm text-neutral-400'>Total Earnings</div>
              </div>
            </div>

            <div className='bg-neutral-800/30 rounded-xl p-6 mb-6'>
              <h3 className='text-lg font-bold text-white mb-4'>Your Partner Link</h3>
              <div className='flex items-center gap-3'>
                <div className='flex-1 p-3 font-mono text-sm text-white rounded-lg bg-neutral-800/50'>
                  {referralLink}
                </div>
                <motion.button
                  onClick={copyToClipboard}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className='flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white rounded-lg transition-all duration-300'
                >
                  {copied ? <Check className='w-4 h-4' /> : <Copy className='w-4 h-4' />}
                  {copied ? 'Copied!' : 'Copy'}
                </motion.button>
              </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
              {socialPlatforms.map((platform, index) => (
                <motion.button
                  key={platform.name}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-3 px-4 py-3 bg-gradient-to-r ${platform.color} text-white font-medium rounded-xl transition-all duration-300`}
                >
                  <platform.icon className='w-5 h-5' />
                  <span>Share on {platform.name}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Service Guarantees Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className='mb-16'
        >
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-white mb-4'>Service Guarantees & Partner Opportunities</h2>
            <p className='text-neutral-400 max-w-2xl mx-auto'>
              Partner with us on our most successful immigration programs and earn attractive commissions with guaranteed success rates.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {referralPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className='bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-6 hover:border-neutral-700/50 transition-all duration-300'
              >
                <div className='flex items-center gap-3 mb-4'>
                  <span className='text-2xl'>{program.icon}</span>
                  <h3 className='text-xl font-bold text-white'>{program.service}</h3>
                </div>

                <p className='text-neutral-300 mb-4 leading-relaxed'>{program.description}</p>

                <div className='space-y-3 mb-6'>
                  <div className='flex items-center justify-between p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl'>
                    <span className='font-medium text-emerald-400'>Success Guarantee</span>
                    <span className='text-sm text-emerald-300'>{program.guarantee}</span>
                  </div>

                  <div className='flex items-center justify-between p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl'>
                    <span className='font-medium text-purple-400'>Partner Rewards</span>
                    <span className='text-sm text-purple-300'>{program.commission}</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className='w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white font-medium rounded-xl transition-all duration-300'
                >
                  <span>Get Commission Details</span>
                  <ArrowRight className='w-4 h-4' />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partner Tiers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.4 }}
          className='mb-16'
        >
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-white mb-4'>Partner Tier Benefits</h2>
            <p className='text-neutral-400 max-w-2xl mx-auto'>
              Progress through our tier system to unlock exclusive benefits and higher commission rates.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4'>
            {Object.entries(tierBenefits).map(([tier, benefits]) => (
              <motion.div
                key={tier}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border rounded-2xl p-6 text-center transition-all duration-300 ${
                  userStats.currentTier === tier
                    ? 'border-2 border-yellow-400/50 bg-yellow-400/5'
                    : 'border-neutral-800/50 hover:border-neutral-700/50'
                }`}
              >
                {userStats.currentTier === tier && (
                  <div className='absolute -top-3 left-1/2 transform -translate-x-1/2'>
                    <div className='px-3 py-1 text-xs font-bold text-black bg-yellow-400 rounded-full'>
                      CURRENT
                    </div>
                  </div>
                )}

                <div className={`w-16 h-16 bg-gradient-to-r ${benefits.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <Crown className='w-8 h-8 text-white' />
                </div>

                <h3 className='text-lg font-bold text-white mb-2'>{tier}</h3>
                <p className='text-sm text-neutral-400 mb-4'>{benefits.minReferrals}+ referrals</p>

                <div className='space-y-2 mb-4'>
                  <div className='text-sm font-medium text-purple-400'>{benefits.commission}</div>
                  {benefits.benefits.map((benefit, idx) => (
                    <div key={idx} className='text-xs text-neutral-300'>{benefit}</div>
                  ))}
                </div>

                <button className='w-full py-2 text-sm text-white bg-neutral-800/30 hover:bg-neutral-700/30 rounded-lg transition-all duration-300'>
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.6 }}
          className='text-center max-w-4xl mx-auto'
        >
          <div className='bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-8'>
            <h2 className='text-3xl font-bold text-white mb-4'>Ready to Start Earning?</h2>
            <p className='text-xl text-neutral-300 mb-8 leading-relaxed'>
              Join our exclusive partner program and start building your income while helping others achieve their dreams.
            </p>

            <div className='flex flex-wrap justify-center gap-4 mb-8'>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className='flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:via-violet-500 hover:to-indigo-500 text-white font-bold rounded-xl transition-all duration-300'
              >
                <Zap className='w-5 h-5' />
                Apply for Partnership
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className='flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 hover:border-neutral-700/50 text-white font-medium rounded-xl transition-all duration-300'
              >
                <Phone className='w-5 h-5' />
                Contact for Details
              </motion.button>
            </div>

            <div className='flex flex-wrap justify-center gap-6 text-sm text-neutral-400'>
              <div className='flex items-center gap-2'>
                <Phone className='w-4 h-4' />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className='flex items-center gap-2'>
                <Mail className='w-4 h-4' />
                <span>partners@vanhsya.com</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
