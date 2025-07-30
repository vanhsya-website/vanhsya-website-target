'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  Zap,
  Target,
  TrendingUp,
  Globe,
  Users,
  Award,
  Sparkles,
  Eye,
  BarChart3,
  Calendar,
  AlertCircle,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

interface IntelligenceMetric {
  id: string;
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'stable';
  icon: React.ReactNode;
  color: string;
}

interface PredictiveInsight {
  id: string;
  type: 'opportunity' | 'risk' | 'trend';
  title: string;
  description: string;
  confidence: number;
  timeframe: string;
  impact: 'high' | 'medium' | 'low';
}

const AIMigrationIntelligence: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Simulate real-time data updates
  const [metrics, setMetrics] = useState<IntelligenceMetric[]>([
    {
      id: '1',
      title: 'Global Success Rate',
      value: '97.8%',
      change: '+2.3%',
      trend: 'up',
      icon: <Target className='w-5 h-5' />,
      color: 'from-emerald-500 to-green-600',
    },
    {
      id: '2',
      title: 'Processing Speed',
      value: '12.3 days',
      change: '-5.2 days',
      trend: 'up',
      icon: <Zap className='w-5 h-5' />,
      color: 'from-blue-500 to-cyan-600',
    },
    {
      id: '3',
      title: 'Client Satisfaction',
      value: '9.7/10',
      change: '+0.4',
      trend: 'up',
      icon: <Award className='w-5 h-5' />,
      color: 'from-purple-500 to-violet-600',
    },
    {
      id: '4',
      title: 'Active Cases',
      value: '15,247',
      change: '+1,203',
      trend: 'up',
      icon: <Users className='w-5 h-5' />,
      color: 'from-orange-500 to-red-600',
    },
  ]);

  const [insights, setInsights] = useState<PredictiveInsight[]>([
    {
      id: '1',
      type: 'opportunity',
      title: 'Canada Express Entry Surge',
      description:
        'AI predicts a 45% increase in Canada Express Entry invitations next quarter',
      confidence: 94,
      timeframe: 'Next 3 months',
      impact: 'high',
    },
    {
      id: '2',
      type: 'trend',
      title: 'Tech Visa Demand Rising',
      description:
        'Technology sector visa applications showing 67% growth trajectory',
      confidence: 89,
      timeframe: 'Next 6 months',
      impact: 'high',
    },
    {
      id: '3',
      type: 'risk',
      title: 'Document Verification Delays',
      description:
        'Potential processing delays in European embassy chains detected',
      confidence: 76,
      timeframe: 'Next 2 weeks',
      impact: 'medium',
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate real-time metric updates
      setMetrics(prev =>
        prev.map(metric => ({
          ...metric,
          value:
            metric.id === '4'
              ? `${15247 + Math.floor(Math.random() * 100)}`
              : metric.value,
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const startAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      // Add new insight after analysis
      const newInsight: PredictiveInsight = {
        id: Date.now().toString(),
        type: 'opportunity',
        title: 'New Pathway Detected',
        description:
          'AI identified an emerging fast-track route for healthcare professionals',
        confidence: 92,
        timeframe: 'Available now',
        impact: 'high',
      };
      setInsights(prev => [newInsight, ...prev.slice(0, 2)]);
    }, 3000);
  };

  const tabs = [
    {
      id: 'overview',
      label: 'Intelligence Overview',
      icon: <Eye className='w-4 h-4' />,
    },
    {
      id: 'analytics',
      label: 'Predictive Analytics',
      icon: <BarChart3 className='w-4 h-4' />,
    },
    {
      id: 'global',
      label: 'Global Trends',
      icon: <Globe className='w-4 h-4' />,
    },
    {
      id: 'timeline',
      label: 'Success Timeline',
      icon: <Calendar className='w-4 h-4' />,
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 pt-24 pb-16'>
      {/* Animated Background */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse' />
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000' />
        <div className='absolute top-1/2 left-1/2 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-2000' />
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-center mb-12'
        >
          <div className='flex items-center justify-center gap-3 mb-4'>
            <div className='p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl'>
              <Brain className='w-8 h-8 text-white' />
            </div>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className='p-2 bg-gradient-to-r from-red-500 to-pink-600 rounded-full'
            >
              <Sparkles className='w-6 h-6 text-white' />
            </motion.div>
          </div>

          <h1 className='text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 bg-clip-text text-transparent mb-4'>
            AI Migration Intelligence
          </h1>
          <p className='text-xl text-slate-300 max-w-3xl mx-auto'>
            The world's most advanced AI-powered migration intelligence
            platform. Real-time insights, predictive analytics, and success
            optimization.
          </p>

          <motion.button
            onClick={startAnalysis}
            disabled={isAnalyzing}
            className='mt-6 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 disabled:opacity-50'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isAnalyzing ? (
              <div className='flex items-center gap-2'>
                <div className='w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin' />
                Analyzing...
              </div>
            ) : (
              <div className='flex items-center gap-2'>
                <Brain className='w-5 h-5' />
                Run AI Analysis
              </div>
            )}
          </motion.button>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className='flex flex-wrap justify-center gap-2 mb-8'
        >
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Intelligence Overview */}
        <AnimatePresence mode='wait'>
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className='space-y-8'
            >
              {/* Real-time Metrics */}
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className='bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300'
                  >
                    <div className='flex items-center justify-between mb-4'>
                      <div
                        className={`p-3 bg-gradient-to-r ${metric.color} rounded-xl`}
                      >
                        {metric.icon}
                      </div>
                      <div
                        className={`flex items-center gap-1 text-sm ${
                          metric.trend === 'up'
                            ? 'text-green-400'
                            : 'text-red-400'
                        }`}
                      >
                        <TrendingUp className='w-4 h-4' />
                        {metric.change}
                      </div>
                    </div>
                    <h3 className='text-3xl font-bold text-white mb-2'>
                      {metric.value}
                    </h3>
                    <p className='text-slate-300'>{metric.title}</p>
                  </motion.div>
                ))}
              </div>

              {/* Predictive Insights */}
              <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20'>
                <div className='flex items-center gap-3 mb-6'>
                  <Target className='w-6 h-6 text-blue-400' />
                  <h2 className='text-2xl font-bold text-white'>
                    Predictive Insights
                  </h2>
                  <div className='px-3 py-1 bg-red-500/20 text-red-300 text-sm rounded-full'>
                    AI Powered
                  </div>
                </div>

                <div className='space-y-4'>
                  {insights.map((insight, index) => (
                    <motion.div
                      key={insight.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className='flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300'
                    >
                      <div
                        className={`p-2 rounded-lg ${
                          insight.type === 'opportunity'
                            ? 'bg-green-500/20 text-green-400'
                            : insight.type === 'trend'
                              ? 'bg-blue-500/20 text-blue-400'
                              : 'bg-yellow-500/20 text-yellow-400'
                        }`}
                      >
                        {insight.type === 'opportunity' ? (
                          <CheckCircle className='w-5 h-5' />
                        ) : insight.type === 'trend' ? (
                          <TrendingUp className='w-5 h-5' />
                        ) : (
                          <AlertCircle className='w-5 h-5' />
                        )}
                      </div>

                      <div className='flex-1'>
                        <div className='flex items-center justify-between mb-2'>
                          <h3 className='font-semibold text-white'>
                            {insight.title}
                          </h3>
                          <div className='flex items-center gap-2'>
                            <div className='text-sm text-slate-400'>
                              {insight.confidence}% confidence
                            </div>
                            <div
                              className={`px-2 py-1 rounded text-xs ${
                                insight.impact === 'high'
                                  ? 'bg-red-500/20 text-red-300'
                                  : insight.impact === 'medium'
                                    ? 'bg-yellow-500/20 text-yellow-300'
                                    : 'bg-green-500/20 text-green-300'
                              }`}
                            >
                              {insight.impact.toUpperCase()}
                            </div>
                          </div>
                        </div>
                        <p className='text-slate-300 mb-2'>
                          {insight.description}
                        </p>
                        <div className='flex items-center justify-between'>
                          <span className='text-sm text-slate-400'>
                            {insight.timeframe}
                          </span>
                          <button className='flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm'>
                            View Details <ArrowRight className='w-4 h-4' />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className='mt-12 text-center'
        >
          <div className='bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20'>
            <h3 className='text-2xl font-bold text-white mb-4'>
              Experience the Future of Migration
            </h3>
            <p className='text-slate-300 mb-6 max-w-2xl mx-auto'>
              Join thousands of clients who trust VANHSYA's AI-powered
              intelligence to navigate their migration journey with
              unprecedented success rates.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button className='px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300'>
                Start Your Journey
              </button>
              <button className='px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 border border-white/20'>
                Schedule Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIMigrationIntelligence;
