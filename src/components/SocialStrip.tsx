'use client';

import React, { useState, useEffect } from 'react';
import { Instagram, Youtube, Linkedin, Facebook, Twitter } from 'lucide-react';

interface SocialPlatform {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  followers: string;
  handle: string;
  url: string;
  color: string;
  bgColor: string;
  isLive?: boolean;
}

interface SocialStripProps {
  className?: string;
}

// Mock API function to fetch real-time follower counts
const fetchFollowerCounts = async () => {
  // This would connect to actual social media APIs in production
  // For now, we'll simulate real-time updates
  return {
    instagram: Math.floor(Math.random() * 1000) + 15000, // 15K+ followers
    youtube: Math.floor(Math.random() * 500) + 8500, // 8.5K+ subscribers
    linkedin: Math.floor(Math.random() * 300) + 5200, // 5.2K+ connections
    facebook: Math.floor(Math.random() * 800) + 12000, // 12K+ followers
    twitter: Math.floor(Math.random() * 600) + 7800, // 7.8K+ followers
  };
};

export default function SocialStrip({ className = '' }: SocialStripProps) {
  const [followerCounts, setFollowerCounts] = useState({
    instagram: 15234,
    youtube: 8567,
    linkedin: 5298,
    facebook: 12456,
    twitter: 7934,
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initial load
    const loadFollowerCounts = async () => {
      try {
        const counts = await fetchFollowerCounts();
        setFollowerCounts(counts);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to fetch follower counts:', error);
        setIsLoading(false);
      }
    };

    loadFollowerCounts();

    // Update follower counts every 5 minutes for live effect
    const interval = setInterval(loadFollowerCounts, 300000);

    return () => clearInterval(interval);
  }, []);

  const platforms: SocialPlatform[] = [
    {
      name: 'Instagram',
      icon: Instagram,
      followers: isLoading
        ? '...'
        : `${(followerCounts.instagram / 1000).toFixed(1)}K`,
      handle: '@vanhsyaglobal',
      url: 'https://instagram.com/vanhsyaglobal',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50 hover:bg-pink-100',
      isLive: true,
    },
    {
      name: 'YouTube',
      icon: Youtube,
      followers: isLoading
        ? '...'
        : `${(followerCounts.youtube / 1000).toFixed(1)}K`,
      handle: 'Vanhsya Live',
      url: 'https://youtube.com/@vanhsyalive',
      color: 'text-red-600',
      bgColor: 'bg-red-50 hover:bg-red-100',
      isLive: true,
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      followers: isLoading
        ? '...'
        : `${(followerCounts.linkedin / 1000).toFixed(1)}K`,
      handle: 'VANHSYA',
      url: 'https://linkedin.com/company/vanhsya',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 hover:bg-blue-100',
      isLive: true,
    },
    {
      name: 'Facebook',
      icon: Facebook,
      followers: isLoading
        ? '...'
        : `${(followerCounts.facebook / 1000).toFixed(1)}K`,
      handle: 'Vanhsya Global Migration',
      url: 'https://facebook.com/vanhsyaglobalmigration',
      color: 'text-blue-700',
      bgColor: 'bg-blue-50 hover:bg-blue-100',
      isLive: true,
    },
    {
      name: 'Twitter',
      icon: Twitter,
      followers: isLoading
        ? '...'
        : `${(followerCounts.twitter / 1000).toFixed(1)}K`,
      handle: '@vanhsya_global',
      url: 'https://twitter.com/vanhsya_global',
      color: 'text-slate-700',
      bgColor: 'bg-slate-50 hover:bg-slate-100',
      isLive: true,
    },
  ];

  return (
    <section
      className={`bg-white rounded-2xl border border-gray-200 p-8 ${className}`}
    >
      <div className='text-center mb-8'>
        <div className='flex items-center justify-center gap-2 mb-3'>
          <div className='w-3 h-3 bg-green-400 rounded-full animate-pulse'></div>
          <h2 className='text-2xl font-bold text-gray-900'>
            Join Our Live Community
          </h2>
        </div>
        <p className='text-gray-600 max-w-2xl mx-auto'>
          Follow VANHSYA across social platforms for real-time immigration
          updates, success stories, and live expert sessions.
        </p>
      </div>

      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-5'>
        {platforms.map(platform => {
          const Icon = platform.icon;
          return (
            <div
              key={platform.name}
              className='group relative overflow-hidden rounded-xl border border-gray-200 bg-white hover:shadow-lg transition-all duration-300'
            >
              <div className='p-6'>
                <div className='flex items-center justify-between mb-4'>
                  <div
                    className={`w-12 h-12 rounded-xl ${platform.bgColor} flex items-center justify-center transition-colors relative`}
                  >
                    <Icon className={`w-6 h-6 ${platform.color}`} />
                    {platform.isLive && (
                      <div className='absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse'></div>
                    )}
                  </div>
                  <div className='text-right'>
                    <p className='text-2xl font-bold text-gray-900'>
                      {isLoading ? (
                        <div className='h-6 w-12 bg-gray-200 rounded animate-pulse'></div>
                      ) : (
                        platform.followers
                      )}
                    </p>
                    <p className='text-sm text-gray-500'>
                      {platform.name === 'YouTube'
                        ? 'Subscribers'
                        : 'Followers'}
                    </p>
                  </div>
                </div>

                <div className='mb-4'>
                  <h3 className='font-semibold text-gray-900 mb-1'>
                    {platform.name}
                  </h3>
                  <p className='text-sm text-gray-600'>{platform.handle}</p>
                </div>

                <a
                  href={platform.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg ${platform.bgColor} ${platform.color} font-medium text-sm transition-all group-hover:shadow-md relative overflow-hidden`}
                >
                  <span className='relative z-10'>
                    {platform.name === 'YouTube' ? 'Subscribe' : 'Follow'}
                  </span>
                  <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000'></div>
                </a>
              </div>

              {/* Live indicator for active platforms */}
              {platform.isLive && (
                <div className='absolute top-2 right-2'>
                  <span className='inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-700 font-medium border border-green-200'>
                    🔴 Live
                  </span>
                </div>
              )}

              {/* Hover effect overlay */}
              <div className='absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none' />
            </div>
          );
        })}
      </div>

      <div className='mt-8 text-center'>
        <p className='text-sm text-gray-500 mb-4'>
          🔔 Get instant notifications for immigration updates, live Q&A
          sessions, and success stories
        </p>
        <div className='flex flex-wrap gap-3 justify-center'>
          <span className='inline-flex items-center px-3 py-1 rounded-full text-xs bg-purple-50 text-purple-700 font-medium'>
            📈 Daily Success Stories
          </span>
          <span className='inline-flex items-center px-3 py-1 rounded-full text-xs bg-green-50 text-green-700 font-medium'>
            🎥 Live Immigration Sessions
          </span>
          <span className='inline-flex items-center px-3 py-1 rounded-full text-xs bg-blue-50 text-blue-700 font-medium'>
            📚 Expert Tips & Updates
          </span>
          <span className='inline-flex items-center px-3 py-1 rounded-full text-xs bg-red-50 text-red-700 font-medium'>
            🔔 Breaking Immigration News
          </span>
        </div>
      </div>
    </section>
  );
}
