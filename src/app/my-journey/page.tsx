'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  Star,
  Award,
  Trophy,
  Target,
  Calendar,
  Clock,
  DollarSign,
  Users,
  Zap,
  Gift,
  Heart,
  Crown,
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

import BackNavigation from '@/components/BackNavigation';
import Footer from '@/components/Footer';
import SocialShare from '@/components/SocialShare';
import { useCurrency } from '@/components/CurrencySelector';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  unlocked: boolean;
  progress?: number;
  maxProgress?: number;
  reward: number;
  tier: 'bronze' | 'silver' | 'gold' | 'diamond';
}

interface JourneyStep {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'upcoming';
  date?: string;
  reward?: number;
  milestone?: boolean;
}

export default function VanhsyaJourney() {
  const { formatPrice } = useCurrency();
  const [activeSection, setActiveSection] = useState<
    'overview' | 'achievements' | 'referrals' | 'rewards'
  >('overview');

  const journeySteps: JourneyStep[] = [
    {
      id: 'registration',
      title: 'Welcome to VANHSYA',
      description: 'Account created and profile setup completed',
      status: 'completed',
      date: '2024-01-15',
      reward: 100,
    },
    {
      id: 'eligibility',
      title: 'Eligibility Assessment',
      description: 'AI-powered assessment for Canada Express Entry',
      status: 'completed',
      date: '2024-01-16',
      reward: 150,
    },
    {
      id: 'consultation',
      title: 'Expert Consultation',
      description: 'Free consultation with certified migration expert',
      status: 'current',
      milestone: true,
    },
    {
      id: 'documents',
      title: 'Document Preparation',
      description: 'Prepare and verify all required documents',
      status: 'upcoming',
    },
    {
      id: 'application',
      title: 'Application Submission',
      description: 'Submit your visa application with expert guidance',
      status: 'upcoming',
      milestone: true,
    },
    {
      id: 'tracking',
      title: 'Application Tracking',
      description: 'Monitor your application status and updates',
      status: 'upcoming',
    },
    {
      id: 'success',
      title: 'Visa Approval',
      description: 'Celebrate your successful migration journey',
      status: 'upcoming',
      milestone: true,
      reward: 1000,
    },
  ];

  const achievements: Achievement[] = [
    {
      id: 'first-share',
      title: 'Social Butterfly',
      description: 'Shared VANHSYA on social media',
      icon: Heart,
      unlocked: true,
      reward: 50,
      tier: 'bronze',
    },
    {
      id: 'referral-master',
      title: 'Referral Champion',
      description: 'Successfully referred 5 friends',
      icon: Users,
      unlocked: true,
      progress: 5,
      maxProgress: 5,
      reward: 250,
      tier: 'gold',
    },
    {
      id: 'streak-keeper',
      title: 'Daily Visitor',
      description: 'Maintained a 7-day login streak',
      icon: Calendar,
      unlocked: false,
      progress: 4,
      maxProgress: 7,
      reward: 100,
      tier: 'silver',
    },
    {
      id: 'ai-explorer',
      title: 'AI Tool Master',
      description: 'Used all 6 AI tools successfully',
      icon: Zap,
      unlocked: false,
      progress: 3,
      maxProgress: 6,
      reward: 300,
      tier: 'diamond',
    },
  ];

  const userStats = {
    totalEarnings: 1840,
    pendingRewards: 320,
    referralCount: 5,
    completedSteps: 2,
    totalSteps: 7,
    memberSince: '2024-01-15',
    currentTier: 'Silver',
    sharesCount: 12,
    achievementsUnlocked: 2,
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'bronze':
        return 'from-orange-500 to-yellow-500';
      case 'silver':
        return 'from-gray-400 to-gray-600';
      case 'gold':
        return 'from-yellow-400 to-yellow-600';
      case 'diamond':
        return 'from-blue-400 to-cyan-400';
      default:
        return 'from-gray-400 to-gray-600';
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900'>
      <BackNavigation
        currentPage='My VANHSYA Journey'
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
            <div className='inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full border border-purple-400/30 mb-6'>
              <Crown className='w-6 h-6 text-purple-400' />
              <span className='text-purple-300 font-medium'>
                Your Migration Journey
              </span>
            </div>

            <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
              Welcome to Your
              <span className='bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent'>
                {' '}
                VANHSYA Journey
              </span>
            </h1>

            <p className='text-xl text-gray-300 max-w-3xl mx-auto mb-8'>
              Track your progress, celebrate achievements, and earn rewards as
              you navigate your migration journey with the world's most advanced
              AI-powered platform.
            </p>

            {/* Progress Overview */}
            <div className='max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20'>
              <div className='grid md:grid-cols-4 gap-6'>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-green-400 mb-1'>
                    {formatPrice(userStats.totalEarnings)}
                  </div>
                  <div className='text-sm text-gray-400'>Total Earnings</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-blue-400 mb-1'>
                    {userStats.referralCount}
                  </div>
                  <div className='text-sm text-gray-400'>
                    Successful Referrals
                  </div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-purple-400 mb-1'>
                    {userStats.completedSteps}/{userStats.totalSteps}
                  </div>
                  <div className='text-sm text-gray-400'>Journey Progress</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold text-pink-400 mb-1'>
                    {userStats.achievementsUnlocked}
                  </div>
                  <div className='text-sm text-gray-400'>Achievements</div>
                </div>
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
              { id: 'overview', label: 'Journey Overview', icon: Target },
              { id: 'achievements', label: 'Achievements', icon: Trophy },
              { id: 'referrals', label: 'Referrals', icon: Users },
              { id: 'rewards', label: 'Rewards', icon: Gift },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() =>
                  setActiveSection(
                    tab.id as
                      | 'overview'
                      | 'achievements'
                      | 'referrals'
                      | 'rewards'
                  )
                }
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                  activeSection === tab.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
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

      {/* Overview Section */}
      {activeSection === 'overview' && (
        <section className='py-12 px-6'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-3xl font-bold text-white text-center mb-12'>
              Your Migration Timeline
            </h2>

            <div className='relative'>
              {/* Timeline Line */}
              <div className='absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500'></div>

              <div className='space-y-8'>
                {journeySteps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className='relative flex items-start gap-6'
                  >
                    {/* Timeline Node */}
                    <div
                      className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center border-4 ${
                        step.status === 'completed'
                          ? 'bg-green-500 border-green-400'
                          : step.status === 'current'
                            ? 'bg-blue-500 border-blue-400'
                            : 'bg-gray-600 border-gray-500'
                      }`}
                    >
                      {step.status === 'completed' ? (
                        <CheckCircle className='w-8 h-8 text-white' />
                      ) : step.status === 'current' ? (
                        <Clock className='w-8 h-8 text-white' />
                      ) : (
                        <div className='w-3 h-3 bg-white rounded-full'></div>
                      )}
                    </div>

                    {/* Content */}
                    <div
                      className={`flex-1 p-6 rounded-2xl border ${
                        step.status === 'completed'
                          ? 'bg-green-500/10 border-green-500/30'
                          : step.status === 'current'
                            ? 'bg-blue-500/10 border-blue-500/30'
                            : 'bg-white/10 border-white/20'
                      }`}
                    >
                      <div className='flex items-center justify-between mb-3'>
                        <div>
                          <h3 className='text-xl font-bold text-white mb-1'>
                            {step.title}
                          </h3>
                          <p className='text-gray-300'>{step.description}</p>
                        </div>

                        {step.milestone && (
                          <div className='p-2 bg-yellow-500/20 rounded-full'>
                            <Star className='w-6 h-6 text-yellow-400' />
                          </div>
                        )}
                      </div>

                      <div className='flex items-center justify-between'>
                        {step.date && (
                          <div className='text-sm text-gray-400'>
                            Completed on{' '}
                            {new Date(step.date).toLocaleDateString()}
                          </div>
                        )}
                        {step.reward && (
                          <div className='flex items-center gap-1 px-3 py-1 bg-green-500/20 rounded-full'>
                            <DollarSign className='w-4 h-4 text-green-400' />
                            <span className='text-green-400 font-medium'>
                              +{formatPrice(step.reward)}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Achievements Section */}
      {activeSection === 'achievements' && (
        <section className='py-12 px-6'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-3xl font-bold text-white text-center mb-12'>
              Your Achievements
            </h2>

            <div className='grid md:grid-cols-2 gap-6'>
              {achievements.map(achievement => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`p-6 rounded-2xl border relative overflow-hidden ${
                    achievement.unlocked
                      ? 'bg-white/15 border-green-500/30'
                      : 'bg-white/10 border-white/20'
                  }`}
                >
                  {achievement.unlocked && (
                    <div className='absolute top-4 right-4'>
                      <CheckCircle className='w-6 h-6 text-green-400' />
                    </div>
                  )}

                  <div className='flex items-start gap-4 mb-4'>
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${getTierColor(achievement.tier)}`}
                    >
                      <achievement.icon className='w-6 h-6 text-white' />
                    </div>
                    <div className='flex-1'>
                      <h3 className='text-lg font-bold text-white mb-1'>
                        {achievement.title}
                      </h3>
                      <p className='text-gray-300 text-sm'>
                        {achievement.description}
                      </p>
                    </div>
                  </div>

                  {achievement.progress !== undefined &&
                    achievement.maxProgress && (
                      <div className='mb-4'>
                        <div className='flex justify-between text-sm text-gray-400 mb-2'>
                          <span>Progress</span>
                          <span>
                            {achievement.progress}/{achievement.maxProgress}
                          </span>
                        </div>
                        <div className='w-full bg-gray-700 rounded-full h-2'>
                          <div
                            className='bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full transition-all'
                            style={{
                              width: `${(achievement.progress / achievement.maxProgress) * 100}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    )}

                  <div className='flex items-center justify-between'>
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getTierColor(achievement.tier)}`}
                    >
                      {achievement.tier.toUpperCase()}
                    </div>
                    <div className='flex items-center gap-1'>
                      <Award className='w-4 h-4 text-yellow-400' />
                      <span className='text-yellow-400 font-medium'>
                        +{formatPrice(achievement.reward)}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Social Share Section */}
      <section className='py-12 px-6'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-3xl font-bold text-white text-center mb-8'>
            Share Your Success Story
          </h2>
          <SocialShare
            title="I'm on an amazing migration journey with VANHSYA! 🚀"
            description="Join me in using the world's #1 AI-powered migration platform. Get expert guidance, earn rewards, and make your dreams come true!"
            hashtags={[
              'VANHSYASuccess',
              'Migration',
              'Dreams',
              'AI',
              'Success',
            ]}
            onShare={(_platform, _reward) => {
              // Shared reward earned
            }}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
