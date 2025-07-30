'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Share2,
  Facebook,
  Twitter,
  Instagram,
  MessageCircle,
  Copy,
  Check,
  Star,
  Award,
  Heart,
  Eye,
  TrendingUp,
  Zap,
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

import { useCurrency } from '@/components/CurrencySelector';

interface ShareReward {
  platform: string;
  icon: LucideIcon;
  reward: number;
  color: string;
  gradient: string;
  description: string;
  cooldown?: number;
}

interface SocialShareProps {
  title?: string;
  description?: string;
  url?: string;
  hashtags?: string[];
  onShare?: (platform: string, reward: number) => void;
  showRewards?: boolean;
  compact?: boolean;
}

const shareRewards: ShareReward[] = [
  {
    platform: 'Facebook',
    icon: Facebook,
    reward: 50,
    color: 'blue',
    gradient: 'from-blue-500 to-blue-600',
    description: 'Share with your friends and family',
    cooldown: 24,
  },
  {
    platform: 'Twitter',
    icon: Twitter,
    reward: 30,
    color: 'sky',
    gradient: 'from-sky-400 to-sky-500',
    description: 'Tweet to your followers',
    cooldown: 12,
  },
  {
    platform: 'Instagram',
    icon: Instagram,
    reward: 75,
    color: 'pink',
    gradient: 'from-pink-500 to-purple-500',
    description: 'Share to your Instagram story',
    cooldown: 24,
  },
  {
    platform: 'WhatsApp',
    icon: MessageCircle,
    reward: 40,
    color: 'green',
    gradient: 'from-green-500 to-green-600',
    description: 'Share with WhatsApp contacts',
    cooldown: 6,
  },
];

export default function SocialShare({
  title = "Discover VANHSYA - World's #1 AI-Powered Migration Platform",
  description = 'Get expert visa consultation, AI-powered eligibility assessment, and step-by-step guidance for your dream migration. Join 100K+ successful migrants!',
  url = typeof window !== 'undefined'
    ? window.location.href
    : 'https://vanhsya.com',
  hashtags = ['VANHSYA', 'Migration', 'Visa', 'Immigration', 'AI', 'Success'],
  onShare,
  showRewards = true,
  compact = false,
}: SocialShareProps) {
  const { formatPrice } = useCurrency();
  const [copied, setCopied] = useState(false);
  const [sharedPlatforms, setSharedPlatforms] = useState<string[]>([]);
  const [showShareModal, setShowShareModal] = useState(false);
  const [earnedCredits, setEarnedCredits] = useState(0);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      if (onShare) onShare('copy', 10);
      setEarnedCredits(prev => prev + 10);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleShare = (platform: string, shareUrl: string, reward: number) => {
    // Open share URL
    window.open(shareUrl, '_blank', 'width=600,height=400');

    // Track share and reward
    if (!sharedPlatforms.includes(platform)) {
      setSharedPlatforms(prev => [...prev, platform]);
      setEarnedCredits(prev => prev + reward);
      if (onShare) onShare(platform, reward);
    }
  };

  const getShareUrl = (platform: string) => {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
    const encodedHashtags = encodeURIComponent(hashtags.join(' #'));

    switch (platform) {
      case 'Facebook':
        return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`;
      case 'Twitter':
        return `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}&hashtags=${encodedHashtags}`;
      case 'Instagram':
        // Instagram doesn't have direct URL sharing, so we'll copy to clipboard
        copyToClipboard();
        return '#';
      case 'WhatsApp':
        return `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`;
      default:
        return url;
    }
  };

  if (compact) {
    return (
      <div className='flex items-center gap-2'>
        <button
          onClick={() => setShowShareModal(true)}
          className='flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-xl text-blue-300 hover:bg-blue-500/30 transition-all'
        >
          <Share2 className='w-4 h-4' />
          <span className='text-sm font-medium'>Share & Earn</span>
        </button>

        <AnimatePresence>
          {showShareModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4'
              onClick={() => setShowShareModal(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className='bg-gray-900 rounded-2xl p-6 max-w-md w-full border border-gray-700'
                onClick={e => e.stopPropagation()}
              >
                <div className='text-center mb-6'>
                  <h3 className='text-xl font-bold text-white mb-2'>
                    Share & Earn Credits
                  </h3>
                  <p className='text-gray-400 text-sm'>
                    Earn credits by sharing VANHSYA with your network
                  </p>
                </div>

                <div className='grid grid-cols-2 gap-3'>
                  {shareRewards.map(reward => (
                    <button
                      key={reward.platform}
                      onClick={() => {
                        const shareUrl = getShareUrl(reward.platform);
                        if (shareUrl !== '#') {
                          handleShare(reward.platform, shareUrl, reward.reward);
                        }
                      }}
                      className={`flex items-center gap-3 p-3 bg-gradient-to-r ${reward.gradient} rounded-xl text-white hover:opacity-90 transition-all relative`}
                    >
                      <reward.icon className='w-5 h-5' />
                      <div className='flex-1 text-left'>
                        <div className='font-medium text-sm'>
                          {reward.platform}
                        </div>
                        <div className='text-xs opacity-80'>
                          +{formatPrice(reward.reward)}
                        </div>
                      </div>
                      {sharedPlatforms.includes(reward.platform) && (
                        <Check className='w-4 h-4 text-green-300' />
                      )}
                    </button>
                  ))}
                </div>

                <div className='mt-4 p-3 bg-white/10 rounded-xl'>
                  <div className='flex items-center justify-between'>
                    <span className='text-gray-300 text-sm'>Copy Link</span>
                    <button
                      onClick={copyToClipboard}
                      className='flex items-center gap-2 px-3 py-1 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-all'
                    >
                      {copied ? (
                        <Check className='w-4 h-4' />
                      ) : (
                        <Copy className='w-4 h-4' />
                      )}
                      <span className='text-xs'>
                        {copied ? 'Copied!' : 'Copy'}
                      </span>
                    </button>
                  </div>
                </div>

                {earnedCredits > 0 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className='mt-4 p-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-xl text-center'
                  >
                    <Award className='w-6 h-6 text-green-400 mx-auto mb-1' />
                    <div className='text-green-400 font-bold'>
                      +{formatPrice(earnedCredits)} Credits Earned!
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20'>
      <div className='flex items-center gap-3 mb-6'>
        <div className='p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl'>
          <Share2 className='w-6 h-6 text-blue-400' />
        </div>
        <div>
          <h3 className='text-xl font-bold text-white'>Share & Earn Credits</h3>
          <p className='text-gray-400 text-sm'>
            Spread the word and get rewarded
          </p>
        </div>
      </div>

      {showRewards && (
        <div className='mb-6'>
          <div className='grid md:grid-cols-2 gap-4'>
            {shareRewards.map(reward => (
              <motion.button
                key={reward.platform}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const shareUrl = getShareUrl(reward.platform);
                  if (shareUrl !== '#') {
                    handleShare(reward.platform, shareUrl, reward.reward);
                  }
                }}
                className={`relative flex items-center gap-4 p-4 bg-gradient-to-r ${reward.gradient} rounded-xl text-white hover:opacity-90 transition-all group overflow-hidden`}
              >
                <div className='absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity' />
                <reward.icon className='w-8 h-8 relative z-10' />
                <div className='flex-1 text-left relative z-10'>
                  <div className='font-bold text-lg'>{reward.platform}</div>
                  <div className='text-sm opacity-80'>{reward.description}</div>
                  <div className='flex items-center gap-2 mt-1'>
                    <Star className='w-4 h-4 text-yellow-300' />
                    <span className='font-medium'>
                      +{formatPrice(reward.reward)} credits
                    </span>
                  </div>
                </div>
                {sharedPlatforms.includes(reward.platform) && (
                  <div className='relative z-10 p-2 bg-white/20 rounded-full'>
                    <Check className='w-5 h-5 text-green-300' />
                  </div>
                )}
                <div className='absolute -right-6 -top-6 w-16 h-16 bg-white/10 rounded-full' />
              </motion.button>
            ))}
          </div>
        </div>
      )}

      {/* Copy Link Section */}
      <div className='bg-black/30 rounded-xl p-4'>
        <div className='flex items-center justify-between'>
          <div>
            <div className='text-white font-medium mb-1'>Direct Share Link</div>
            <div className='text-gray-400 text-sm'>Copy and share anywhere</div>
          </div>
          <button
            onClick={copyToClipboard}
            className='flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-all'
          >
            {copied ? (
              <Check className='w-4 h-4' />
            ) : (
              <Copy className='w-4 h-4' />
            )}
            <span className='font-medium'>
              {copied ? 'Copied!' : 'Copy Link'}
            </span>
          </button>
        </div>

        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className='mt-3 p-2 bg-green-500/20 border border-green-500/30 rounded-lg text-center'
          >
            <span className='text-green-400 font-medium text-sm'>
              +{formatPrice(10)} credits earned!
            </span>
          </motion.div>
        )}
      </div>

      {/* Performance Stats */}
      <div className='mt-6 grid grid-cols-3 gap-4'>
        <div className='text-center'>
          <div className='flex items-center justify-center gap-1 mb-1'>
            <Eye className='w-4 h-4 text-blue-400' />
            <span className='text-xl font-bold text-blue-400'>1.2M</span>
          </div>
          <div className='text-xs text-gray-400'>Total Views</div>
        </div>
        <div className='text-center'>
          <div className='flex items-center justify-center gap-1 mb-1'>
            <Heart className='w-4 h-4 text-pink-400' />
            <span className='text-xl font-bold text-pink-400'>98K</span>
          </div>
          <div className='text-xs text-gray-400'>Shares</div>
        </div>
        <div className='text-center'>
          <div className='flex items-center justify-center gap-1 mb-1'>
            <TrendingUp className='w-4 h-4 text-green-400' />
            <span className='text-xl font-bold text-green-400'>+23%</span>
          </div>
          <div className='text-xs text-gray-400'>This Week</div>
        </div>
      </div>

      {earnedCredits > 0 && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className='mt-6 p-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-xl text-center'
        >
          <div className='flex items-center justify-center gap-2 mb-2'>
            <Zap className='w-6 h-6 text-yellow-400' />
            <span className='text-xl font-bold text-white'>
              Total Credits Earned
            </span>
          </div>
          <div className='text-3xl font-bold text-green-400 mb-1'>
            +{formatPrice(earnedCredits)}
          </div>
          <div className='text-sm text-gray-400'>
            Keep sharing to earn more credits and unlock exclusive rewards!
          </div>
        </motion.div>
      )}
    </div>
  );
}
