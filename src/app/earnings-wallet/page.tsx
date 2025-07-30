'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Wallet,
  TrendingUp,
  Users,
  Share2,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Trophy,
  Target,
  Star,
  CheckCircle,
  Clock,
  CreditCard,
  Coins,
  PiggyBank,
  Zap,
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

import BackNavigation from '@/components/BackNavigation';
import Footer from '@/components/Footer';
import { useCurrency } from '@/components/CurrencySelector';

interface Transaction {
  id: string;
  type: 'earning' | 'spending' | 'withdrawal';
  amount: number;
  description: string;
  date: string;
  status: 'completed' | 'pending' | 'processing';
  category: string;
}

interface EarningMethod {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  amount: string;
  difficulty: 'easy' | 'medium' | 'hard';
  timeRequired: string;
  category: 'referral' | 'social' | 'review' | 'task';
}

interface WalletStats {
  totalBalance: number;
  totalEarned: number;
  pendingEarnings: number;
  totalWithdrawn: number;
  referralCount: number;
  currentStreak: number;
}

const mockTransactions: Transaction[] = [
  {
    id: '1',
    type: 'earning',
    amount: 250,
    description: 'Referral bonus - John Smith signed up',
    date: '2024-01-15',
    status: 'completed',
    category: 'Referral',
  },
  {
    id: '2',
    type: 'earning',
    amount: 50,
    description: 'Social media share task completed',
    date: '2024-01-14',
    status: 'completed',
    category: 'Social',
  },
  {
    id: '3',
    type: 'spending',
    amount: 500,
    description: 'EMI payment for Canada Express Entry',
    date: '2024-01-13',
    status: 'completed',
    category: 'Service Payment',
  },
  {
    id: '4',
    type: 'earning',
    amount: 100,
    description: 'Lucky draw participation reward',
    date: '2024-01-12',
    status: 'pending',
    category: 'Lucky Draw',
  },
];

const earningMethods: EarningMethod[] = [
  {
    id: 'referral',
    title: 'Refer Friends',
    description: 'Earn up to 15% commission on every successful referral',
    icon: Users,
    amount: '₹250-₹2,500',
    difficulty: 'easy',
    timeRequired: '2 minutes',
    category: 'referral',
  },
  {
    id: 'social-share',
    title: 'Social Media Sharing',
    description: 'Share our success stories and earn credits',
    icon: Share2,
    amount: '₹25-₹100',
    difficulty: 'easy',
    timeRequired: '1 minute',
    category: 'social',
  },
  {
    id: 'review',
    title: 'Write Reviews',
    description: 'Share your experience and help others',
    icon: Star,
    amount: '₹150-₹300',
    difficulty: 'medium',
    timeRequired: '5 minutes',
    category: 'review',
  },
  {
    id: 'daily-check',
    title: 'Daily Check-in',
    description: 'Visit daily and maintain your streak',
    icon: Calendar,
    amount: '₹10-₹50',
    difficulty: 'easy',
    timeRequired: '30 seconds',
    category: 'task',
  },
  {
    id: 'content-create',
    title: 'Create Content',
    description: 'Create migration-related content for our blog',
    icon: Trophy,
    amount: '₹500-₹2,000',
    difficulty: 'hard',
    timeRequired: '2 hours',
    category: 'task',
  },
  {
    id: 'quiz',
    title: 'Complete Quizzes',
    description: 'Test your migration knowledge',
    icon: Target,
    amount: '₹20-₹75',
    difficulty: 'medium',
    timeRequired: '10 minutes',
    category: 'task',
  },
];

export default function EarningsWalletPage() {
  const { formatPrice } = useCurrency();
  const [activeTab, setActiveTab] = useState<
    'overview' | 'earn' | 'transactions' | 'withdraw'
  >('overview');

  const walletStats: WalletStats = {
    totalBalance: 1250,
    totalEarned: 3450,
    pendingEarnings: 200,
    totalWithdrawn: 2000,
    referralCount: 12,
    currentStreak: 7,
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'text-green-400 bg-green-400/20';
      case 'medium':
        return 'text-yellow-400 bg-yellow-400/20';
      case 'hard':
        return 'text-red-400 bg-red-400/20';
      default:
        return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900'>
      <BackNavigation
        currentPage='Earnings & Wallet'
        customBackUrl='/'
        customBackLabel='Home'
      />

      {/* Hero Section */}
      <section className='pt-32 pb-12 px-6'>
        <div className='max-w-7xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className='inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-full border border-green-400/30 mb-6'>
              <Wallet className='w-6 h-6 text-green-400' />
              <span className='text-green-300 font-medium'>
                Smart Earnings System
              </span>
            </div>

            <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
              Earn While You
              <span className='bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent'>
                {' '}
                Migrate
              </span>
            </h1>

            <p className='text-xl text-gray-300 max-w-3xl mx-auto mb-8'>
              Turn your migration journey into an earning opportunity. Refer
              friends, complete tasks, and build your wallet to fund your own
              migration dreams.
            </p>

            {/* Wallet Balance Card */}
            <div className='max-w-md mx-auto bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20'>
              <div className='flex items-center justify-between mb-4'>
                <span className='text-gray-300'>Your Wallet Balance</span>
                <Wallet className='w-6 h-6 text-green-400' />
              </div>
              <div className='text-4xl font-bold text-white mb-2'>
                {formatPrice(walletStats.totalBalance)}
              </div>
              <div className='flex items-center gap-2 text-sm'>
                <ArrowUpRight className='w-4 h-4 text-green-400' />
                <span className='text-green-400'>
                  +{formatPrice(250)} this month
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className='px-6'>
        <div className='max-w-6xl mx-auto'>
          <div className='flex flex-wrap justify-center gap-2 mb-8'>
            {[
              { id: 'overview', label: 'Overview', icon: TrendingUp },
              { id: 'earn', label: 'Earn Money', icon: DollarSign },
              { id: 'transactions', label: 'Transactions', icon: CreditCard },
              { id: 'withdraw', label: 'Withdraw', icon: PiggyBank },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() =>
                  setActiveTab(
                    tab.id as 'overview' | 'earn' | 'transactions' | 'withdraw'
                  )
                }
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <tab.icon className='w-5 h-5' />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <section className='py-12 px-6'>
          <div className='max-w-6xl mx-auto'>
            <div className='grid md:grid-cols-3 gap-6 mb-12'>
              <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='p-3 bg-green-500/20 rounded-xl'>
                    <TrendingUp className='w-6 h-6 text-green-400' />
                  </div>
                  <div>
                    <div className='text-2xl font-bold text-white'>
                      {formatPrice(walletStats.totalEarned)}
                    </div>
                    <div className='text-sm text-gray-400'>Total Earned</div>
                  </div>
                </div>
                <div className='text-sm text-green-400'>
                  +12% from last month
                </div>
              </div>

              <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='p-3 bg-blue-500/20 rounded-xl'>
                    <Users className='w-6 h-6 text-blue-400' />
                  </div>
                  <div>
                    <div className='text-2xl font-bold text-white'>
                      {walletStats.referralCount}
                    </div>
                    <div className='text-sm text-gray-400'>
                      Successful Referrals
                    </div>
                  </div>
                </div>
                <div className='text-sm text-blue-400'>2 pending approvals</div>
              </div>

              <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='p-3 bg-purple-500/20 rounded-xl'>
                    <Calendar className='w-6 h-6 text-purple-400' />
                  </div>
                  <div>
                    <div className='text-2xl font-bold text-white'>
                      {walletStats.currentStreak}
                    </div>
                    <div className='text-sm text-gray-400'>Day Streak</div>
                  </div>
                </div>
                <div className='text-sm text-purple-400'>Keep it up! 🔥</div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className='grid md:grid-cols-2 gap-6'>
              <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6'>
                <h3 className='text-xl font-bold text-white mb-4'>
                  Quick Earnings
                </h3>
                <div className='space-y-4'>
                  {earningMethods.slice(0, 3).map(method => (
                    <div
                      key={method.id}
                      className='flex items-center justify-between p-4 bg-black/30 rounded-xl'
                    >
                      <div className='flex items-center gap-3'>
                        <method.icon className='w-5 h-5 text-blue-400' />
                        <div>
                          <div className='text-white font-medium'>
                            {method.title}
                          </div>
                          <div className='text-sm text-gray-400'>
                            {method.amount}
                          </div>
                        </div>
                      </div>
                      <button className='px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-all'>
                        Start
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6'>
                <h3 className='text-xl font-bold text-white mb-4'>
                  Recent Activity
                </h3>
                <div className='space-y-4'>
                  {mockTransactions.slice(0, 3).map(transaction => (
                    <div
                      key={transaction.id}
                      className='flex items-center justify-between'
                    >
                      <div className='flex items-center gap-3'>
                        <div
                          className={`p-2 rounded-lg ${
                            transaction.type === 'earning'
                              ? 'bg-green-500/20'
                              : 'bg-red-500/20'
                          }`}
                        >
                          {transaction.type === 'earning' ? (
                            <ArrowUpRight className='w-4 h-4 text-green-400' />
                          ) : (
                            <ArrowDownRight className='w-4 h-4 text-red-400' />
                          )}
                        </div>
                        <div>
                          <div className='text-white text-sm'>
                            {transaction.description}
                          </div>
                          <div className='text-xs text-gray-400'>
                            {transaction.date}
                          </div>
                        </div>
                      </div>
                      <div
                        className={`font-medium ${
                          transaction.type === 'earning'
                            ? 'text-green-400'
                            : 'text-red-400'
                        }`}
                      >
                        {transaction.type === 'earning' ? '+' : '-'}
                        {formatPrice(transaction.amount)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Earn Money Tab */}
      {activeTab === 'earn' && (
        <section className='py-12 px-6'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-3xl font-bold text-white text-center mb-12'>
              Multiple Ways to Earn
            </h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {earningMethods.map(method => (
                <motion.div
                  key={method.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300'
                >
                  <div className='flex items-center gap-3 mb-4'>
                    <div className='p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl'>
                      <method.icon className='w-6 h-6 text-blue-400' />
                    </div>
                    <div>
                      <h3 className='text-lg font-bold text-white'>
                        {method.title}
                      </h3>
                      <div className='text-sm text-gray-400'>
                        {method.timeRequired}
                      </div>
                    </div>
                  </div>

                  <p className='text-gray-300 mb-4'>{method.description}</p>

                  <div className='flex items-center justify-between mb-4'>
                    <div className='text-xl font-bold text-green-400'>
                      {method.amount}
                    </div>
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(method.difficulty)}`}
                    >
                      {method.difficulty.toUpperCase()}
                    </div>
                  </div>

                  <button className='w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all'>
                    Start Earning
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Transactions Tab */}
      {activeTab === 'transactions' && (
        <section className='py-12 px-6'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl font-bold text-white text-center mb-12'>
              Transaction History
            </h2>

            <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6'>
              <div className='space-y-4'>
                {mockTransactions.map(transaction => (
                  <div
                    key={transaction.id}
                    className='flex items-center justify-between p-4 bg-black/30 rounded-xl'
                  >
                    <div className='flex items-center gap-4'>
                      <div
                        className={`p-3 rounded-xl ${
                          transaction.type === 'earning'
                            ? 'bg-green-500/20'
                            : transaction.type === 'spending'
                              ? 'bg-red-500/20'
                              : 'bg-blue-500/20'
                        }`}
                      >
                        {transaction.type === 'earning' ? (
                          <ArrowUpRight className='w-5 h-5 text-green-400' />
                        ) : transaction.type === 'spending' ? (
                          <ArrowDownRight className='w-5 h-5 text-red-400' />
                        ) : (
                          <Clock className='w-5 h-5 text-blue-400' />
                        )}
                      </div>
                      <div>
                        <div className='text-white font-medium'>
                          {transaction.description}
                        </div>
                        <div className='text-sm text-gray-400'>
                          {transaction.category} • {transaction.date}
                        </div>
                      </div>
                    </div>

                    <div className='text-right'>
                      <div
                        className={`text-lg font-bold ${
                          transaction.type === 'earning'
                            ? 'text-green-400'
                            : 'text-red-400'
                        }`}
                      >
                        {transaction.type === 'earning' ? '+' : '-'}
                        {formatPrice(transaction.amount)}
                      </div>
                      <div
                        className={`text-xs px-2 py-1 rounded-full ${
                          transaction.status === 'completed'
                            ? 'bg-green-500/20 text-green-400'
                            : transaction.status === 'pending'
                              ? 'bg-yellow-500/20 text-yellow-400'
                              : 'bg-blue-500/20 text-blue-400'
                        }`}
                      >
                        {transaction.status.toUpperCase()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Withdraw Tab */}
      {activeTab === 'withdraw' && (
        <section className='py-12 px-6'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl font-bold text-white text-center mb-12'>
              Withdraw Earnings
            </h2>

            <div className='grid md:grid-cols-2 gap-8'>
              <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6'>
                <h3 className='text-xl font-bold text-white mb-6'>
                  Available Balance
                </h3>

                <div className='text-center mb-6'>
                  <div className='text-4xl font-bold text-green-400 mb-2'>
                    {formatPrice(walletStats.totalBalance)}
                  </div>
                  <div className='text-sm text-gray-400'>
                    Minimum withdrawal: {formatPrice(100)}
                  </div>
                </div>

                <div className='space-y-4'>
                  <div className='flex justify-between text-sm'>
                    <span className='text-gray-400'>
                      Available for withdrawal:
                    </span>
                    <span className='text-white'>
                      {formatPrice(
                        walletStats.totalBalance - walletStats.pendingEarnings
                      )}
                    </span>
                  </div>
                  <div className='flex justify-between text-sm'>
                    <span className='text-gray-400'>Pending earnings:</span>
                    <span className='text-yellow-400'>
                      {formatPrice(walletStats.pendingEarnings)}
                    </span>
                  </div>
                </div>
              </div>

              <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6'>
                <h3 className='text-xl font-bold text-white mb-6'>
                  Withdrawal Options
                </h3>

                <div className='space-y-4'>
                  <div className='p-4 bg-black/30 rounded-xl border border-green-500/30'>
                    <div className='flex items-center gap-3 mb-2'>
                      <CheckCircle className='w-5 h-5 text-green-400' />
                      <span className='font-medium text-white'>
                        Bank Transfer
                      </span>
                    </div>
                    <div className='text-sm text-gray-400'>
                      2-3 business days • No fees
                    </div>
                  </div>

                  <div className='p-4 bg-black/30 rounded-xl'>
                    <div className='flex items-center gap-3 mb-2'>
                      <Coins className='w-5 h-5 text-blue-400' />
                      <span className='font-medium text-white'>
                        UPI Transfer
                      </span>
                    </div>
                    <div className='text-sm text-gray-400'>
                      Instant • ₹5 processing fee
                    </div>
                  </div>

                  <div className='p-4 bg-black/30 rounded-xl'>
                    <div className='flex items-center gap-3 mb-2'>
                      <Zap className='w-5 h-5 text-purple-400' />
                      <span className='font-medium text-white'>
                        Use for Services
                      </span>
                    </div>
                    <div className='text-sm text-gray-400'>
                      Apply directly to service payments
                    </div>
                  </div>
                </div>

                <button className='w-full mt-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-medium rounded-xl hover:from-green-600 hover:to-blue-600 transition-all'>
                  Withdraw Now
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
