'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  TrendingUp,
  Users,
  Calendar,
  BarChart3,
  RefreshCw,
  Zap,
  Award,
  Activity,
} from 'lucide-react';

import { VanhsyaTheme } from '@/styles/theme';

interface CountryData {
  id: string;
  name: string;
  code: string;
  coordinates: [number, number];
  migrants: number;
  trend: 'up' | 'down' | 'stable';
  growthRate: number;
  popularCategories: string[];
  avgProcessingTime: number;
  successRate: number;
}

interface MigrationFlow {
  from: string;
  to: string;
  volume: number;
  trend: 'increasing' | 'decreasing' | 'stable';
}

const GlobalMigrationHeatmap: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(
    null
  );
  const [viewMode, setViewMode] = useState<'heatmap' | 'flows' | 'trends'>(
    'heatmap'
  );
  const [timeframe, setTimeframe] = useState<'24h' | '7d' | '30d' | '1y'>(
    '30d'
  );
  const [isLive, setIsLive] = useState(true);

  // Mock data for demonstration
  const countryData: CountryData[] = [
    {
      id: '1',
      name: 'Canada',
      code: 'CA',
      coordinates: [-106.3468, 56.1304],
      migrants: 45000,
      trend: 'up',
      growthRate: 23.5,
      popularCategories: ['Express Entry', 'PNP', 'Family Class'],
      avgProcessingTime: 6.2,
      successRate: 89.4,
    },
    {
      id: '2',
      name: 'Australia',
      code: 'AU',
      coordinates: [133.7751, -25.2744],
      migrants: 32000,
      trend: 'up',
      growthRate: 18.2,
      popularCategories: ['Skilled Worker', 'Student Visa', 'Business'],
      avgProcessingTime: 8.1,
      successRate: 84.7,
    },
    {
      id: '3',
      name: 'United Kingdom',
      code: 'GB',
      coordinates: [-3.436, 55.3781],
      migrants: 28000,
      trend: 'stable',
      growthRate: 2.1,
      popularCategories: ['Skilled Worker', 'Student', 'Global Talent'],
      avgProcessingTime: 12.3,
      successRate: 76.9,
    },
    {
      id: '4',
      name: 'Germany',
      code: 'DE',
      coordinates: [10.4515, 51.1657],
      migrants: 25000,
      trend: 'up',
      growthRate: 15.8,
      popularCategories: ['EU Blue Card', 'Job Seeker', 'Student'],
      avgProcessingTime: 10.7,
      successRate: 81.2,
    },
    {
      id: '5',
      name: 'USA',
      code: 'US',
      coordinates: [-95.7129, 37.0902],
      migrants: 38000,
      trend: 'down',
      growthRate: -5.3,
      popularCategories: ['H-1B', 'Green Card', 'Student'],
      avgProcessingTime: 18.5,
      successRate: 72.4,
    },
  ];

  const migrationFlows: MigrationFlow[] = [
    { from: 'India', to: 'Canada', volume: 15000, trend: 'increasing' },
    { from: 'Philippines', to: 'Canada', volume: 8000, trend: 'increasing' },
    { from: 'China', to: 'Australia', volume: 12000, trend: 'stable' },
    { from: 'India', to: 'Australia', volume: 10000, trend: 'increasing' },
    { from: 'Nigeria', to: 'UK', volume: 6000, trend: 'decreasing' },
  ];

  const [liveStats, setLiveStats] = useState({
    totalApplications: 156789,
    approvedToday: 1247,
    processing: 45623,
    avgWaitTime: 8.4,
  });

  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      setLiveStats(prev => ({
        totalApplications:
          prev.totalApplications + Math.floor(Math.random() * 10),
        approvedToday: prev.approvedToday + Math.floor(Math.random() * 5),
        processing: prev.processing + Math.floor(Math.random() * 20) - 10,
        avgWaitTime: prev.avgWaitTime + (Math.random() * 0.2 - 0.1),
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, [isLive]);

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up':
      case 'increasing':
        return 'text-green-400';
      case 'down':
      case 'decreasing':
        return 'text-red-400';
      default:
        return 'text-yellow-400';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
      case 'increasing':
        return '↗';
      case 'down':
      case 'decreasing':
        return '↘';
      default:
        return '→';
    }
  };

  return (
    <div
      className={`min-h-screen ${VanhsyaTheme.backgrounds.main} pt-24 pb-16`}
    >
      {/* Animated Background */}
      <div className='absolute inset-0 overflow-hidden'>
        <motion.div
          className='absolute -top-40 -right-40 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl'
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className='absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl'
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-center mb-12'
        >
          <div className='flex items-center justify-center gap-3 mb-6'>
            <motion.div
              className={`p-4 bg-gradient-to-r ${VanhsyaTheme.gradients.primary} rounded-2xl ${VanhsyaTheme.effects.glow}`}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <Globe className='w-10 h-10 text-white' />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className='p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl'
            >
              <Activity className='w-8 h-8 text-white' />
            </motion.div>
            {isLive && (
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, repeat: Infinity }}
                className='px-3 py-1 bg-red-500 text-white text-sm font-bold rounded-full'
              >
                LIVE
              </motion.div>
            )}
          </div>

          <h1
            className={`text-5xl md:text-6xl font-bold ${VanhsyaTheme.text.gradient} mb-6`}
          >
            Global Migration Heatmap
          </h1>
          <p
            className={`text-xl ${VanhsyaTheme.text.secondary} max-w-4xl mx-auto mb-8`}
          >
            Real-time migration trends, application flows, and success analytics
            across 150+ countries. Powered by VANHSYA's AI intelligence network.
          </p>
        </motion.div>

        {/* Live Stats Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-12'
        >
          {[
            {
              label: 'Total Applications',
              value: liveStats.totalApplications.toLocaleString(),
              icon: Users,
              color: 'from-violet-500 to-purple-600',
            },
            {
              label: 'Approved Today',
              value: liveStats.approvedToday.toLocaleString(),
              icon: Award,
              color: 'from-green-500 to-emerald-600',
            },
            {
              label: 'Processing',
              value: liveStats.processing.toLocaleString(),
              icon: RefreshCw,
              color: 'from-blue-500 to-cyan-600',
            },
            {
              label: 'Avg Wait Time',
              value: `${liveStats.avgWaitTime.toFixed(1)} months`,
              icon: Calendar,
              color: 'from-orange-500 to-red-600',
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className={`${VanhsyaTheme.backgrounds.glass} rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300`}
            >
              <div className='flex items-center justify-between mb-4'>
                <div
                  className={`p-3 bg-gradient-to-r ${stat.color} rounded-xl`}
                >
                  <stat.icon className='w-6 h-6 text-white' />
                </div>
                {isLive && (
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    <Zap className='w-4 h-4 text-green-400' />
                  </motion.div>
                )}
              </div>
              <div
                className={`text-3xl font-bold ${VanhsyaTheme.text.primary} mb-2`}
              >
                {stat.value}
              </div>
              <div className={VanhsyaTheme.text.secondary}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Control Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className={`${VanhsyaTheme.backgrounds.glass} rounded-2xl p-6 border border-white/20 mb-8`}
        >
          <div className='flex flex-wrap items-center justify-between gap-4'>
            <div className='flex items-center gap-4'>
              <h3 className={`text-lg font-bold ${VanhsyaTheme.text.primary}`}>
                View Mode:
              </h3>
              <div className='flex gap-2'>
                {[
                  { id: 'heatmap' as const, label: 'Heatmap', icon: BarChart3 },
                  {
                    id: 'flows' as const,
                    label: 'Migration Flows',
                    icon: TrendingUp,
                  },
                  { id: 'trends' as const, label: 'Trends', icon: Activity },
                ].map(mode => (
                  <button
                    key={mode.id}
                    onClick={() => setViewMode(mode.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                      viewMode === mode.id
                        ? `bg-gradient-to-r ${VanhsyaTheme.gradients.primary} text-white`
                        : `${VanhsyaTheme.backgrounds.glass} ${VanhsyaTheme.text.secondary} hover:bg-white/20`
                    }`}
                  >
                    <mode.icon className='w-4 h-4' />
                    {mode.label}
                  </button>
                ))}
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <h3 className={`text-lg font-bold ${VanhsyaTheme.text.primary}`}>
                Timeframe:
              </h3>
              <div className='flex gap-2'>
                {[
                  { id: '24h' as const, label: '24H' },
                  { id: '7d' as const, label: '7D' },
                  { id: '30d' as const, label: '30D' },
                  { id: '1y' as const, label: '1Y' },
                ].map(time => (
                  <button
                    key={time.id}
                    onClick={() => setTimeframe(time.id)}
                    className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
                      timeframe === time.id
                        ? `bg-gradient-to-r ${VanhsyaTheme.gradients.primary} text-white`
                        : `${VanhsyaTheme.backgrounds.glass} ${VanhsyaTheme.text.secondary} hover:bg-white/20`
                    }`}
                  >
                    {time.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Heatmap/Visualization */}
          <div className='lg:col-span-2'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className={`${VanhsyaTheme.backgrounds.glass} rounded-2xl p-8 border border-white/20 h-[600px]`}
            >
              <div className='flex items-center justify-between mb-6'>
                <h3
                  className={`text-2xl font-bold ${VanhsyaTheme.text.primary}`}
                >
                  {viewMode === 'heatmap' && 'Migration Density Map'}
                  {viewMode === 'flows' && 'Migration Flow Patterns'}
                  {viewMode === 'trends' && 'Trend Analysis'}
                </h3>
                <button
                  onClick={() => setIsLive(!isLive)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                    isLive
                      ? `bg-gradient-to-r from-green-500 to-emerald-600 text-white`
                      : `${VanhsyaTheme.backgrounds.glass} ${VanhsyaTheme.text.secondary} hover:bg-white/20`
                  }`}
                >
                  <Activity className='w-4 h-4' />
                  {isLive ? 'Live' : 'Paused'}
                </button>
              </div>

              {/* Mock World Map Visualization */}
              <div className='relative w-full h-full bg-gradient-to-br from-slate-800/50 to-indigo-900/50 rounded-xl overflow-hidden'>
                <div className='absolute inset-0 flex items-center justify-center'>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className='w-80 h-80 opacity-20'
                  >
                    <Globe className='w-full h-full text-violet-400' />
                  </motion.div>
                </div>

                {/* Country Hotspots */}
                {countryData.map((country, index) => (
                  <motion.div
                    key={country.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.2 }}
                    className='absolute cursor-pointer'
                    style={{
                      left: `${20 + index * 15}%`,
                      top: `${30 + index * 10}%`,
                    }}
                    onClick={() => setSelectedCountry(country)}
                  >
                    <motion.div
                      className={`w-4 h-4 rounded-full bg-gradient-to-r ${
                        country.trend === 'up'
                          ? 'from-green-500 to-emerald-600'
                          : country.trend === 'down'
                            ? 'from-red-500 to-red-600'
                            : 'from-yellow-500 to-orange-600'
                      }`}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                    <div
                      className={`absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs ${VanhsyaTheme.text.primary} font-medium whitespace-nowrap`}
                    >
                      {country.name}
                    </div>
                  </motion.div>
                ))}

                {/* Migration Flow Lines */}
                {viewMode === 'flows' &&
                  migrationFlows.map((flow, index) => (
                    <motion.div
                      key={index}
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: index * 0.5 }}
                      className='absolute'
                    >
                      <svg className='w-full h-full'>
                        <motion.line
                          x1={`${20 + index * 10}%`}
                          y1={`${40 + index * 5}%`}
                          x2={`${60 + index * 8}%`}
                          y2={`${20 + index * 8}%`}
                          stroke={`${flow.trend === 'increasing' ? '#10b981' : flow.trend === 'decreasing' ? '#ef4444' : '#f59e0b'}`}
                          strokeWidth='2'
                          strokeDasharray='5,5'
                          className='opacity-60'
                        />
                      </svg>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          </div>

          {/* Country Details Panel */}
          <div className='space-y-6'>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className={`${VanhsyaTheme.backgrounds.glass} rounded-2xl p-6 border border-white/20`}
            >
              <h3
                className={`text-xl font-bold ${VanhsyaTheme.text.primary} mb-4`}
              >
                {selectedCountry ? selectedCountry.name : 'Select a Country'}
              </h3>

              {selectedCountry ? (
                <div className='space-y-4'>
                  <div className='flex items-center justify-between'>
                    <span className={VanhsyaTheme.text.secondary}>
                      Total Migrants
                    </span>
                    <span className={`font-bold ${VanhsyaTheme.text.primary}`}>
                      {selectedCountry.migrants.toLocaleString()}
                    </span>
                  </div>

                  <div className='flex items-center justify-between'>
                    <span className={VanhsyaTheme.text.secondary}>
                      Growth Rate
                    </span>
                    <span
                      className={`font-bold ${getTrendColor(selectedCountry.trend)}`}
                    >
                      {getTrendIcon(selectedCountry.trend)}{' '}
                      {Math.abs(selectedCountry.growthRate)}%
                    </span>
                  </div>

                  <div className='flex items-center justify-between'>
                    <span className={VanhsyaTheme.text.secondary}>
                      Success Rate
                    </span>
                    <span className={`font-bold ${VanhsyaTheme.text.primary}`}>
                      {selectedCountry.successRate}%
                    </span>
                  </div>

                  <div className='flex items-center justify-between'>
                    <span className={VanhsyaTheme.text.secondary}>
                      Avg Processing
                    </span>
                    <span className={`font-bold ${VanhsyaTheme.text.primary}`}>
                      {selectedCountry.avgProcessingTime} months
                    </span>
                  </div>

                  <div>
                    <span
                      className={`${VanhsyaTheme.text.secondary} block mb-2`}
                    >
                      Popular Categories
                    </span>
                    <div className='flex flex-wrap gap-2'>
                      {selectedCountry.popularCategories.map(
                        (category, index) => (
                          <span
                            key={index}
                            className={`px-2 py-1 text-xs ${VanhsyaTheme.backgrounds.glass} ${VanhsyaTheme.text.secondary} rounded-md`}
                          >
                            {category}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <p className={VanhsyaTheme.text.secondary}>
                  Click on a country hotspot to view detailed migration
                  statistics and trends.
                </p>
              )}
            </motion.div>

            {/* Top Migration Flows */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className={`${VanhsyaTheme.backgrounds.glass} rounded-2xl p-6 border border-white/20`}
            >
              <h3
                className={`text-xl font-bold ${VanhsyaTheme.text.primary} mb-4`}
              >
                Top Migration Flows
              </h3>

              <div className='space-y-3'>
                {migrationFlows.slice(0, 5).map((flow, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    className={`flex items-center justify-between p-3 ${VanhsyaTheme.backgrounds.glass} rounded-xl`}
                  >
                    <div>
                      <div
                        className={`font-medium ${VanhsyaTheme.text.primary}`}
                      >
                        {flow.from} → {flow.to}
                      </div>
                      <div className={`text-sm ${VanhsyaTheme.text.secondary}`}>
                        {flow.volume.toLocaleString()} applications
                      </div>
                    </div>
                    <div
                      className={`text-sm font-medium ${getTrendColor(flow.trend)}`}
                    >
                      {getTrendIcon(flow.trend)}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalMigrationHeatmap;
