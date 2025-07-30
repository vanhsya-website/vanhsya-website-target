'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Play, Heart, MessageCircle, Share, TrendingUp, Zap } from 'lucide-react';

interface TikTokVideo {
  id: string;
  thumbnail: string;
  title: string;
  description: string;
  views: number;
  likes: number;
  duration: string;
  date: string;
  url: string;
  hashtags: string[];
  isLive?: boolean;
  trend?: 'viral' | 'trending' | 'rising';
}

// Mock API function
const fetchTikTokPosts = async (): Promise<TikTokVideo[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return [
    {
      id: '1',
      thumbnail: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=400&h=600&fit=crop',
      title: '🇨🇦 Express Entry Tips!',
      description: '5 tips to increase your CRS score! Save this for later 💾 #CanadaImmigration #ExpressEntry #CRS',
      views: 245800,
      likes: 15600,
      duration: '0:58',
      date: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      url: 'https://tiktok.com/@vanhsya_global/video/express_entry_tips',
      hashtags: ['#CanadaImmigration', '#ExpressEntry', '#CRS'],
      isLive: true,
      trend: 'rising'
    },
    {
      id: '2',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face',
      title: 'Australia PR Success Dance! 🎉',
      description: 'When you get your PR invitation after 2 years of waiting! Congratulations Priya! 🇦🇺✨',
      views: 892400,
      likes: 67800,
      duration: '0:15',
      date: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
      url: 'https://tiktok.com/@vanhsya_global/video/australia_pr_celebration',
      hashtags: ['#AustraliaPR', '#ImmigrationSuccess', '#Celebration'],
      trend: 'viral'
    },
    {
      id: '3',
      thumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=600&fit=crop',
      title: 'IELTS 8.5 Study Hack! 📚',
      description: 'This study method helped me get 8.5 in IELTS! Try it and thank me later 🙌 #IELTS #StudyTips',
      views: 156200,
      likes: 12400,
      duration: '1:23',
      date: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
      url: 'https://tiktok.com/@vanhsya_global/video/ielts_study_hack',
      hashtags: ['#IELTS', '#StudyTips', '#EnglishTest'],
      trend: 'rising'
    },
    {
      id: '4',
      thumbnail: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=600&fit=crop',
      title: 'UK Visa Requirements 2025',
      description: 'Everything changed! New UK visa requirements you MUST know 🇬🇧 #UKVisa #Immigration2025',
      views: 78900,
      likes: 5600,
      duration: '2:10',
      date: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
      url: 'https://tiktok.com/@vanhsya_global/video/uk_visa_2025',
      hashtags: ['#UKVisa', '#Immigration2025', '#Breaking'],
      isLive: true
    },
    {
      id: '5',
      thumbnail: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=600&fit=crop',
      title: 'Document Prep Made Easy! 📋',
      description: 'POV: Your immigration documents are perfectly organized 💯 Use our AI wizard! #DocumentPrep',
      views: 234500,
      likes: 18900,
      duration: '0:45',
      date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      url: 'https://tiktok.com/@vanhsya_global/video/document_organization',
      hashtags: ['#DocumentPrep', '#ImmigrationTips', '#Organization']
    },
    {
      id: '6',
      thumbnail: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=400&h=600&fit=crop',
      title: 'Express Entry Draw Results! 📊',
      description: 'Latest Express Entry draw: 3,500 invitations, CRS 496! What this means for you 👇',
      views: 445600,
      likes: 32100,
      duration: '1:05',
      date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      url: 'https://tiktok.com/@vanhsya_global/video/express_entry_draw',
      hashtags: ['#ExpressEntry', '#CanadaImmigration', '#DrawResults'],
      trend: 'trending'
    }
  ];
};

export default function TikTokFeed() {
  const [videos, setVideos] = useState<TikTokVideo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadVideos = async () => {
      try {
        setLoading(true);
        const fetchedVideos = await fetchTikTokPosts();
        setVideos(fetchedVideos);
      } catch (error) {
        console.error('Error loading TikTok videos:', error);
        // Fallback to static data if API fails
        setVideos([]);
      } finally {
        setLoading(false);
      }
    };

    loadVideos();

    // Auto-refresh every 10 minutes
    const interval = setInterval(loadVideos, 10 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const formatViews = (views: number): string => {
    if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M`;
    if (views >= 1000) return `${(views / 1000).toFixed(1)}K`;
    return views.toString();
  };

  const formatTimeAgo = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    return `${Math.floor(diffInSeconds / 86400)}d ago`;
  };

  const getTrendIcon = (trend?: string) => {
    switch (trend) {
      case 'viral':
        return <Zap className="w-3 h-3 text-yellow-400" />;
      case 'trending':
        return <TrendingUp className="w-3 h-3 text-red-400" />;
      case 'rising':
        return <TrendingUp className="w-3 h-3 text-blue-400" />;
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-6 h-6 bg-black rounded-lg flex items-center justify-center">
          <div className="w-3 h-3 bg-white rounded-sm"></div>
        </div>
        <h3 className="text-lg font-semibold">@vanhsya_global</h3>
        <div className="flex items-center gap-1 text-sm text-green-600">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          Live
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {videos.map((video) => (
          <div
            key={video.id}
            className="relative group cursor-pointer bg-gray-900 rounded-lg overflow-hidden aspect-[9/16] hover:scale-105 transition-transform duration-200"
            onClick={() => window.open(video.url, '_blank')}
          >
            {/* Video Thumbnail */}
            <Image
              src={video.thumbnail}
              alt={video.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 33vw"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
              </div>
            </div>

            {/* Live/Trend Badge */}
            {(video.isLive || video.trend) && (
              <div className="absolute top-2 left-2 flex items-center gap-1">
                {video.isLive && (
                  <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                    LIVE
                  </div>
                )}
                {video.trend && (
                  <div className="bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    {getTrendIcon(video.trend)}
                    {video.trend.toUpperCase()}
                  </div>
                )}
              </div>
            )}

            {/* Duration */}
            <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
              {video.duration}
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
              <h4 className="text-white font-medium text-sm mb-1 line-clamp-2">
                {video.title}
              </h4>
              
              {/* Stats */}
              <div className="flex items-center gap-3 text-white/80 text-xs">
                <div className="flex items-center gap-1">
                  <Heart className="w-3 h-3" />
                  {formatViews(video.likes)}
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-3 h-3" />
                  {Math.floor(video.likes * 0.1)}
                </div>
                <div className="flex items-center gap-1">
                  <Share className="w-3 h-3" />
                  {Math.floor(video.likes * 0.05)}
                </div>
              </div>

              {/* Views */}
              <div className="text-white/60 text-xs mt-1">
                {formatViews(video.views)} views • {formatTimeAgo(video.date)}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More */}
      <div className="text-center pt-4">
        <button 
          className="text-blue-600 hover:text-blue-700 font-medium text-sm"
          onClick={() => window.open('https://tiktok.com/@vanhsya_global', '_blank')}
        >
          View all videos on TikTok →
        </button>
      </div>
    </div>
  );
}
