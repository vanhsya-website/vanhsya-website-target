'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Activity,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertTriangle,
  Zap,
  Target,
  FileText,
  Bot,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
  Play,
  Pause,
  Eye,
  ThumbsUp,
  MapPin,
  Timer,
  DollarSign,
} from 'lucide-react';

import { VanhsyaTheme } from '@/styles/theme';

interface MetricData {
  id: string;
  label: string;
  value: number | string;
  change: number;
  trend: 'up' | 'down' | 'stable';
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  prefix?: string;
  suffix?: string;
  format?: 'number' | 'currency' | 'percentage' | 'time';
}

interface AlertData {
  id: string;
  type: 'success' | 'warning' | 'error' | 'info';
  message: string;
  timestamp: Date;
  action?: string;
}

interface ActivityData {
  id: string;
  user: string;
  action: string;
  country: string;
  timestamp: Date;
  status: 'completed' | 'pending' | 'processing';
}

const RealTimeDashboard: React.FC = () => {
  const [isLive, setIsLive] = useState(true);
  const [activeTab, setActiveTab] = useState<
    'overview' | 'analytics' | 'alerts' | 'activity'
  >('overview');
  const [metrics, setMetrics] = useState<MetricData[]>([]);
  const [alerts, setAlerts] = useState<AlertData[]>([]);
  const [activities, setActivities] = useState<ActivityData[]>([]);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  // Initialize data
  useEffect(() => {
    const initialMetrics: MetricData[] = [
      {
        id: '1',
        label: 'Active Applications',
        value: 15742,
        change: 12.5,
        trend: 'up',
        icon: FileText,
        color: 'from-blue-500 to-cyan-600',
        format: 'number',
      },
      {
        id: '2',
        label: 'Success Rate',
        value: 89.7,
        change: 2.3,
        trend: 'up',
        icon: Target,
        color: 'from-green-500 to-emerald-600',
        suffix: '%',
        format: 'percentage',
      },
      {
        id: '3',
        label: 'Avg Processing Time',
        value: 6.8,
        change: -0.7,
        trend: 'down',
        icon: Timer,
        color: 'from-orange-500 to-red-600',
        suffix: ' months',
        format: 'time',
      },
      {
        id: '4',
        label: 'Revenue Today',
        value: 47850,
        change: 18.9,
        trend: 'up',
        icon: DollarSign,
        color: 'from-purple-500 to-pink-600',
        prefix: '$',
        format: 'currency',
      },
      {
        id: '5',
        label: 'AI Consultations',
        value: 234,
        change: 45.2,
        trend: 'up',
        icon: Bot,
        color: 'from-violet-500 to-purple-600',
        format: 'number',
      },
      {
        id: '6',
        label: 'Client Satisfaction',
        value: 96.4,
        change: 1.8,
        trend: 'up',
        icon: ThumbsUp,
        color: 'from-indigo-500 to-blue-600',
        suffix: '%',
        format: 'percentage',
      },
    ];

    const initialAlerts: AlertData[] = [
      {
        id: '1',
        type: 'success',
        message:
          'Canada Express Entry draw completed - 4,750 invitations issued',
        timestamp: new Date(Date.now() - 5 * 60 * 1000),
        action: 'View Details',
      },
      {
        id: '2',
        type: 'warning',
        message: 'UK Skilled Worker visa processing delays reported',
        timestamp: new Date(Date.now() - 15 * 60 * 1000),
        action: 'Check Status',
      },
      {
        id: '3',
        type: 'info',
        message: 'New Australia PR pathway announced for healthcare workers',
        timestamp: new Date(Date.now() - 30 * 60 * 1000),
        action: 'Learn More',
      },
      {
        id: '4',
        type: 'error',
        message: 'System maintenance scheduled for tomorrow 2:00 AM EST',
        timestamp: new Date(Date.now() - 45 * 60 * 1000),
        action: 'Schedule',
      },
    ];

    const initialActivities: ActivityData[] = [
      {
        id: '1',
        user: 'Sarah Chen',
        action: 'Submitted Express Entry application',
        country: 'Canada',
        timestamp: new Date(Date.now() - 2 * 60 * 1000),
        status: 'completed',
      },
      {
        id: '2',
        user: 'Michael Rodriguez',
        action: 'Booked AI consultation session',
        country: 'Australia',
        timestamp: new Date(Date.now() - 5 * 60 * 1000),
        status: 'processing',
      },
      {
        id: '3',
        user: 'Dr. Priya Sharma',
        action: 'Document verification in progress',
        country: 'UK',
        timestamp: new Date(Date.now() - 8 * 60 * 1000),
        status: 'pending',
      },
      {
        id: '4',
        user: 'James Wilson',
        action: 'Received PNP nomination',
        country: 'Canada',
        timestamp: new Date(Date.now() - 12 * 60 * 1000),
        status: 'completed',
      },
    ];

    setMetrics(initialMetrics);
    setAlerts(initialAlerts);
    setActivities(initialActivities);
  }, []);

  // Real-time data updates
  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      setMetrics(prev =>
        prev.map(metric => ({
          ...metric,
          value:
            typeof metric.value === 'number'
              ? metric.value + (Math.random() * 10 - 5)
              : metric.value,
          change: metric.change + (Math.random() * 2 - 1),
        }))
      );

      setLastUpdate(new Date());

      // Occasionally add new activities
      if (Math.random() < 0.3) {
        const newActivity: ActivityData = {
          id: Date.now().toString(),
          user: ['Alex Johnson', 'Maria Garcia', 'David Kim', 'Lisa Zhang'][
            Math.floor(Math.random() * 4)
          ],
          action: [
            'Started eligibility assessment',
            'Uploaded documents',
            'Scheduled consultation',
            'Received approval',
          ][Math.floor(Math.random() * 4)],
          country: ['Canada', 'Australia', 'UK', 'Germany'][
            Math.floor(Math.random() * 4)
          ],
          timestamp: new Date(),
          status: (['completed', 'pending', 'processing'] as const)[
            Math.floor(Math.random() * 3)
          ],
        };

        setActivities(prev => [newActivity, ...prev.slice(0, 9)]);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isLive]);

  const formatValue = (metric: MetricData) => {
    const value =
      typeof metric.value === 'number'
        ? Math.round(metric.value * 10) / 10
        : metric.value;

    switch (metric.format) {
      case 'currency':
        return `${metric.prefix || ''}${typeof value === 'number' ? value.toLocaleString() : value}${metric.suffix || ''}`;
      case 'percentage':
        return `${value}${metric.suffix || ''}`;
      case 'time':
        return `${value}${metric.suffix || ''}`;
      default:
        return `${metric.prefix || ''}${typeof value === 'number' ? value.toLocaleString() : value}${metric.suffix || ''}`;
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return ArrowUpRight;
      case 'down':
        return ArrowDownRight;
      default:
        return Activity;
    }
  };

  const getTrendColor = (trend: string, change: number) => {
    if (trend === 'up' && change > 0) return 'text-green-400';
    if (trend === 'down' && change < 0) return 'text-red-400';
    return 'text-yellow-400';
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'success':
        return CheckCircle;
      case 'warning':
        return AlertTriangle;
      case 'error':
        return AlertTriangle;
      default:
        return Activity;
    }
  };

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'border-green-500/30 bg-green-500/10 text-green-400';
      case 'warning':
        return 'border-yellow-500/30 bg-yellow-500/10 text-yellow-400';
      case 'error':
        return 'border-red-500/30 bg-red-500/10 text-red-400';
      default:
        return 'border-blue-500/30 bg-blue-500/10 text-blue-400';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 text-green-400';
      case 'processing':
        return 'bg-blue-500/20 text-blue-400';
      case 'pending':
        return 'bg-yellow-500/20 text-yellow-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'alerts', label: 'Alerts', icon: AlertTriangle },
    { id: 'activity', label: 'Activity', icon: Activity },
  ];

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
          className='flex flex-col md:flex-row md:items-center md:justify-between mb-12'
        >
          <div>
            <div className='flex items-center gap-3 mb-4'>
              <motion.div
                className={`p-4 bg-gradient-to-r ${VanhsyaTheme.gradients.primary} rounded-2xl ${VanhsyaTheme.effects.glow}`}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <Activity className='w-10 h-10 text-white' />
              </motion.div>
              {isLive && (
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className='flex items-center gap-2 px-3 py-1 bg-red-500 text-white text-sm font-bold rounded-full'
                >
                  <div className='w-2 h-2 bg-white rounded-full'></div>
                  LIVE
                </motion.div>
              )}
            </div>

            <h1
              className={`text-5xl md:text-6xl font-bold ${VanhsyaTheme.text.gradient} mb-4`}
            >
              Real-Time Dashboard
            </h1>
            <p className={`text-xl ${VanhsyaTheme.text.secondary} max-w-3xl`}>
              Monitor live immigration analytics, client activities, and system
              performance across all VANHSYA services in real-time.
            </p>
          </div>

          <div className='flex items-center gap-4 mt-6 md:mt-0'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsLive(!isLive)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                isLive
                  ? `bg-gradient-to-r from-red-500 to-red-600 text-white hover:shadow-lg`
                  : `${VanhsyaTheme.backgrounds.glass} ${VanhsyaTheme.text.primary} border border-white/20 hover:bg-white/20`
              }`}
            >
              {isLive ? (
                <Pause className='w-5 h-5' />
              ) : (
                <Play className='w-5 h-5' />
              )}
              {isLive ? 'Pause' : 'Resume'} Live Updates
            </motion.button>

            <div
              className={`flex items-center gap-2 px-4 py-3 ${VanhsyaTheme.backgrounds.glass} rounded-xl border border-white/20`}
            >
              <Clock className='w-5 h-5 text-violet-400' />
              <span className={`text-sm ${VanhsyaTheme.text.secondary}`}>
                Last update: {lastUpdate.toLocaleTimeString()}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`${VanhsyaTheme.backgrounds.glass} rounded-2xl p-2 border border-white/20 mb-8`}
        >
          <div className='flex gap-2'>
            {tabs.map(tab => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  setActiveTab(
                    tab.id as 'overview' | 'analytics' | 'alerts' | 'activity'
                  )
                }
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? `bg-gradient-to-r ${VanhsyaTheme.gradients.primary} text-white`
                    : `${VanhsyaTheme.text.secondary} hover:bg-white/20`
                }`}
              >
                <tab.icon className='w-5 h-5' />
                {tab.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode='wait'>
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <motion.div
              key='overview'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className='space-y-8'
            >
              {/* Metrics Grid */}
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`${VanhsyaTheme.backgrounds.glass} rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300`}
                  >
                    <div className='flex items-center justify-between mb-4'>
                      <div
                        className={`p-3 bg-gradient-to-r ${metric.color} rounded-xl`}
                      >
                        <metric.icon className='w-6 h-6 text-white' />
                      </div>
                      {isLive && (
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.3,
                          }}
                        >
                          <Zap className='w-4 h-4 text-green-400' />
                        </motion.div>
                      )}
                    </div>

                    <div
                      className={`text-3xl font-bold ${VanhsyaTheme.text.primary} mb-2`}
                    >
                      {formatValue(metric)}
                    </div>

                    <div className='flex items-center justify-between'>
                      <span
                        className={`text-sm ${VanhsyaTheme.text.secondary}`}
                      >
                        {metric.label}
                      </span>
                      <div
                        className={`flex items-center gap-1 text-sm font-medium ${getTrendColor(metric.trend, metric.change)}`}
                      >
                        {React.createElement(getTrendIcon(metric.trend), {
                          className: 'w-4 h-4',
                        })}
                        {Math.abs(metric.change).toFixed(1)}%
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Recent Activity Preview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className={`${VanhsyaTheme.backgrounds.glass} rounded-2xl p-6 border border-white/20`}
              >
                <div className='flex items-center justify-between mb-6'>
                  <h3
                    className={`text-2xl font-bold ${VanhsyaTheme.text.primary}`}
                  >
                    Recent Activity
                  </h3>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveTab('activity')}
                    className={`flex items-center gap-2 px-4 py-2 ${VanhsyaTheme.backgrounds.glass} border border-white/20 ${VanhsyaTheme.text.primary} rounded-xl hover:bg-white/20 transition-all duration-300`}
                  >
                    <Eye className='w-4 h-4' />
                    View All
                  </motion.button>
                </div>

                <div className='space-y-3'>
                  {activities.slice(0, 4).map((activity, index) => (
                    <motion.div
                      key={activity.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className={`flex items-center justify-between p-4 ${VanhsyaTheme.backgrounds.glass} rounded-xl border border-white/20`}
                    >
                      <div className='flex items-center gap-4'>
                        <div
                          className={`w-10 h-10 bg-gradient-to-r ${VanhsyaTheme.gradients.primary} rounded-full flex items-center justify-center text-white font-bold`}
                        >
                          {activity.user
                            .split(' ')
                            .map(n => n[0])
                            .join('')}
                        </div>
                        <div>
                          <div
                            className={`font-semibold ${VanhsyaTheme.text.primary}`}
                          >
                            {activity.user}
                          </div>
                          <div
                            className={`text-sm ${VanhsyaTheme.text.secondary}`}
                          >
                            {activity.action} • {activity.country}
                          </div>
                        </div>
                      </div>
                      <div className='flex items-center gap-3'>
                        <span
                          className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(activity.status)}`}
                        >
                          {activity.status}
                        </span>
                        <span
                          className={`text-xs ${VanhsyaTheme.text.secondary}`}
                        >
                          {activity.timestamp.toLocaleTimeString()}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <motion.div
              key='analytics'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className='grid grid-cols-1 lg:grid-cols-2 gap-8'
            >
              <div
                className={`${VanhsyaTheme.backgrounds.glass} rounded-2xl p-6 border border-white/20`}
              >
                <h3
                  className={`text-2xl font-bold ${VanhsyaTheme.text.primary} mb-6`}
                >
                  Migration Trends
                </h3>
                <div className='space-y-4'>
                  {['Canada', 'Australia', 'UK', 'Germany'].map(
                    (country, index) => (
                      <div
                        key={country}
                        className='flex items-center justify-between'
                      >
                        <span className={VanhsyaTheme.text.primary}>
                          {country}
                        </span>
                        <div className='flex items-center gap-2'>
                          <div className='w-32 h-2 bg-gray-700 rounded-full overflow-hidden'>
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${65 + index * 10}%` }}
                              transition={{ delay: index * 0.2, duration: 1 }}
                              className={`h-full bg-gradient-to-r ${VanhsyaTheme.gradients.primary}`}
                            />
                          </div>
                          <span
                            className={`text-sm ${VanhsyaTheme.text.secondary}`}
                          >
                            {65 + index * 10}%
                          </span>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div
                className={`${VanhsyaTheme.backgrounds.glass} rounded-2xl p-6 border border-white/20`}
              >
                <h3
                  className={`text-2xl font-bold ${VanhsyaTheme.text.primary} mb-6`}
                >
                  Success Rates by Program
                </h3>
                <div className='space-y-4'>
                  {[
                    { program: 'Express Entry', rate: 94 },
                    { program: 'PNP', rate: 89 },
                    { program: 'Family Class', rate: 96 },
                    { program: 'Business', rate: 87 },
                  ].map((item, index) => (
                    <div
                      key={item.program}
                      className='flex items-center justify-between'
                    >
                      <span className={VanhsyaTheme.text.primary}>
                        {item.program}
                      </span>
                      <div className='flex items-center gap-2'>
                        <div className='w-24 h-2 bg-gray-700 rounded-full overflow-hidden'>
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${item.rate}%` }}
                            transition={{ delay: index * 0.2, duration: 1 }}
                            className={`h-full bg-gradient-to-r ${VanhsyaTheme.gradients.primary}`}
                          />
                        </div>
                        <span
                          className={`text-sm font-semibold ${VanhsyaTheme.text.primary}`}
                        >
                          {item.rate}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Alerts Tab */}
          {activeTab === 'alerts' && (
            <motion.div
              key='alerts'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className='space-y-4'
            >
              {alerts.map((alert, index) => (
                <motion.div
                  key={alert.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-6 rounded-2xl border ${getAlertColor(alert.type)}`}
                >
                  <div className='flex items-start justify-between'>
                    <div className='flex items-start gap-4'>
                      {React.createElement(getAlertIcon(alert.type), {
                        className: 'w-6 h-6 mt-1',
                      })}
                      <div>
                        <p className='font-semibold mb-2'>{alert.message}</p>
                        <p className='text-sm opacity-80'>
                          {alert.timestamp.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    {alert.action && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-all'
                      >
                        {alert.action}
                      </motion.button>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Activity Tab */}
          {activeTab === 'activity' && (
            <motion.div
              key='activity'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className='space-y-4'
            >
              {activities.map((activity, index) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center justify-between p-6 ${VanhsyaTheme.backgrounds.glass} rounded-2xl border border-white/20`}
                >
                  <div className='flex items-center gap-4'>
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${VanhsyaTheme.gradients.primary} rounded-full flex items-center justify-center text-white font-bold`}
                    >
                      {activity.user
                        .split(' ')
                        .map(n => n[0])
                        .join('')}
                    </div>
                    <div>
                      <div
                        className={`font-semibold ${VanhsyaTheme.text.primary} mb-1`}
                      >
                        {activity.user}
                      </div>
                      <div
                        className={`text-sm ${VanhsyaTheme.text.secondary} mb-1`}
                      >
                        {activity.action}
                      </div>
                      <div className='flex items-center gap-2 text-xs'>
                        <MapPin className='w-3 h-3 text-violet-400' />
                        <span className={VanhsyaTheme.text.secondary}>
                          {activity.country}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center gap-4'>
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(activity.status)}`}
                    >
                      {activity.status}
                    </span>
                    <span className={`text-sm ${VanhsyaTheme.text.secondary}`}>
                      {activity.timestamp.toLocaleString()}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RealTimeDashboard;
