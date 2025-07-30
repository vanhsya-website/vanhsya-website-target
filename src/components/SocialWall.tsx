'use client';

import React, { useState } from 'react';
import { X, ExternalLink, Heart, MessageCircle, Share } from 'lucide-react';
import Image from 'next/image';

interface SocialPost {
  id: string;
  platform: 'instagram' | 'youtube' | 'linkedin' | 'facebook' | 'twitter';
  image: string;
  title: string;
  description: string;
  likes: number;
  comments: number;
  date: string;
  url: string;
  author: string;
  isLive?: boolean;
  hashtags?: string[];
}

interface SocialWallProps {
  className?: string;
}

// Modal Component
interface LightboxModalProps {
  post: SocialPost | null;
  onClose: () => void;
}

function LightboxModal({ post, onClose }: LightboxModalProps) {
  if (!post) return null;

  const platformColors = {
    instagram: 'from-pink-500 to-purple-600',
    youtube: 'from-red-500 to-red-600',
    linkedin: 'from-blue-500 to-blue-600',
    facebook: 'from-blue-600 to-blue-700',
    twitter: 'from-slate-600 to-slate-700'
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-auto">
        {/* Header */}
        <div className={`bg-gradient-to-r ${platformColors[post.platform]} p-6 text-white`}>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold">{post.title}</h3>
              <p className="text-white/80 capitalize">{post.platform} • {post.author}</p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="relative aspect-square mb-6 rounded-xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            {post.description}
          </p>

          {/* Engagement Stats */}
          <div className="flex items-center gap-6 mb-6 text-gray-500">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              <span className="text-sm">{post.likes.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm">{post.comments.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <Share className="w-4 h-4" />
              <span className="text-sm">Share</span>
            </div>
          </div>

          {/* CTA */}
          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full bg-gradient-to-r ${platformColors[post.platform]} text-white font-semibold py-3 px-6 rounded-xl transition-all hover:shadow-lg flex items-center justify-center gap-2`}
          >
            View on {post.platform.charAt(0).toUpperCase() + post.platform.slice(1)}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function SocialWall({ className = '' }: SocialWallProps) {
  const [selectedPost, setSelectedPost] = useState<SocialPost | null>(null);

  const formatTimeAgo = (dateString: string): string => {
    const now = new Date();
    const postDate = new Date(dateString);
    const diffInMinutes = Math.floor((now.getTime() - postDate.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) {
      return 'Just now';
    } else if (diffInMinutes < 60) {
      return `${diffInMinutes}m ago`;
    } else if (diffInMinutes < 1440) {
      return `${Math.floor(diffInMinutes / 60)}h ago`;
    } else {
      return `${Math.floor(diffInMinutes / 1440)}d ago`;
    }
  };

  // Mock data - replace with actual social media feed API integration
  const posts: SocialPost[] = [
    {
      id: '1',
      platform: 'instagram',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      title: 'Australia PR Success Story 🇦🇺',
      description: '🎉 Incredible news! Our client Priya just received her Australia PR invitation with 85 points! From document preparation to application submission, VANHSYA guided every step. Your dream migration is possible! 💫 #AustraliaPR #SuccessStory #VANHSYA',
      likes: 1247,
      comments: 89,
      date: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(), // 3 hours ago
      url: 'https://instagram.com/p/vanhsyaglobal_post1',
      author: '@vanhsyaglobal',
      isLive: true,
      hashtags: ['#AustraliaPR', '#SuccessStory', '#VANHSYA']
    },
    {
      id: '2',
      platform: 'youtube',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop',
      title: 'LIVE: Express Entry Draw Analysis',
      description: 'Join our immigration expert for live analysis of the latest Express Entry draw! 3,500 invitations issued with CRS 496. What does this mean for your application? Ask your questions in the chat! 🔴 LIVE NOW',
      likes: 2156,
      comments: 234,
      date: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(), // 1 hour ago
      url: 'https://youtube.com/watch?v=vanhsyalive_stream1',
      author: 'Vanhsya Live',
      isLive: true,
      hashtags: ['#ExpressEntry', '#LiveStream', '#ImmigrationNews']
    },
    {
      id: '3',
      platform: 'linkedin',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=400&fit=crop',
      title: 'UK Skilled Worker Visa Changes 2025',
      description: 'Important update: UK government announces new Skilled Worker visa requirements effective March 2025. Key changes include updated salary thresholds and skill level requirements. Our team has prepared a comprehensive guide to help you navigate these changes. Read our latest article for complete details.',
      likes: 567,
      comments: 45,
      date: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(), // 6 hours ago
      url: 'https://linkedin.com/posts/vanhsya_ukworkervisa2025',
      author: 'VANHSYA',
      hashtags: ['#UKVisa', '#SkilledWorker', '#Immigration2025']
    },
    {
      id: '4',
      platform: 'facebook',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      title: 'Canada Immigration Webinar',
      description: '📢 FREE Webinar Alert! "Canada Immigration Pathways 2025" - Join our expert panel discussion on Express Entry, PNP, and other immigration programs. Register now for exclusive insights and Q&A session. Limited seats available! 🇨🇦',
      likes: 892,
      comments: 156,
      date: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(), // 12 hours ago
      url: 'https://facebook.com/vanhsyaglobalmigration/posts/webinar2025',
      author: 'Vanhsya Global Migration',
      hashtags: ['#CanadaImmigration', '#Webinar', '#ExpressEntry']
    },
    {
      id: '5',
      platform: 'twitter',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=400&fit=crop',
      title: 'Breaking: New Zealand Skilled Migrant Changes',
      description: '🚨 BREAKING: New Zealand announces changes to Skilled Migrant Category. Key updates: - Updated skill shortage lists - New points system - Revised English requirements. Full analysis coming up! Stay tuned 🇳🇿 #NZImmigration #Breaking',
      likes: 445,
      comments: 67,
      date: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
      url: 'https://twitter.com/vanhsya_global/status/nz_update_2025',
      author: '@vanhsya_global',
      isLive: true,
      hashtags: ['#NZImmigration', '#Breaking', '#SkilledMigrant']
    },
    {
      id: '6',
      platform: 'instagram',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=400&fit=crop',
      title: 'Document Checklist Made Easy 📋',
      description: '✅ Immigration document prep doesn\'t have to be overwhelming! Our AI-powered Document Wizard guides you step-by-step. Check out this client\'s organized document folder - ready for submission! 💪 Link in bio for free access. #DocumentPrep #AIWizard',
      likes: 678,
      comments: 98,
      date: new Date(Date.now() - 18 * 60 * 60 * 1000).toISOString(), // 18 hours ago
      url: 'https://instagram.com/p/vanhsyaglobal_documents',
      author: '@vanhsyaglobal',
      hashtags: ['#DocumentPrep', '#AIWizard', '#ImmigrationTips']
    },
    {
      id: '7',
      platform: 'youtube',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      title: 'Client Interview: From India to Australia',
      description: 'Inspiring journey! Watch Rajesh share his complete migration story - from initial consultation to landing in Melbourne. Learn about the challenges he faced and how VANHSYA\'s support made the difference. Must-watch for aspiring migrants! 🎬',
      likes: 1834,
      comments: 167,
      date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
      url: 'https://youtube.com/watch?v=vanhsyalive_story_rajesh',
      author: 'Vanhsya Live',
      hashtags: ['#SuccessStory', '#ClientInterview', '#AustraliaImmigration']
    },
    {
      id: '8',
      platform: 'linkedin',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop',
      title: 'Immigration Industry Insights 2025',
      description: 'As we enter 2025, immigration policies continue to evolve globally. Our latest industry report analyzes trends across major destinations: Canada, Australia, UK, USA, and New Zealand. Key findings: increased digital processing, skills-based selection, and family reunification focus.',
      likes: 789,
      comments: 123,
      date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
      url: 'https://linkedin.com/posts/vanhsya_industry_report_2025',
      author: 'VANHSYA',
      hashtags: ['#ImmigrationTrends', '#Industry2025', '#GlobalMigration']
    }
  ];

  const platformIcons = {
    instagram: '📸',
    youtube: '🎥',
    linkedin: '💼',
    facebook: '👥',
    twitter: '�'
  };

  return (
    <>
      <section className={`bg-white rounded-2xl border border-gray-200 p-8 ${className}`}>
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <h2 className="text-2xl font-bold text-gray-900">Live Social Feed</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Latest updates, success stories, and immigration insights from VANHSYA's official social media channels. Updated in real-time.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="group cursor-pointer rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              onClick={() => setSelectedPost(post)}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Platform Badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-800">
                    {platformIcons[post.platform]} {post.platform.charAt(0).toUpperCase() + post.platform.slice(1)}
                    {post.isLive && <span className="ml-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>}
                  </span>
                </div>

                {/* Overlay Content */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-semibold text-sm mb-1 line-clamp-2">{post.title}</h3>
                  <p className="text-xs text-white/80">{post.author}</p>
                </div>
              </div>

              {/* Footer */}
              <div className="p-4">
                <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                  {post.description}
                </p>

                {/* Hashtags */}
                {post.hashtags && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {post.hashtags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      {post.likes.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3 h-3" />
                      {post.comments}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {post.isLive && (
                      <span className="flex items-center gap-1 text-red-500 font-medium">
                        🔴 Live
                      </span>
                    )}
                    <span>{formatTimeAgo(post.date)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-xl transition-colors">
            Load More Posts
          </button>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal 
        post={selectedPost} 
        onClose={() => setSelectedPost(null)} 
      />
    </>
  );
}
