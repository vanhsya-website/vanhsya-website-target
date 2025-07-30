'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VanhsyaTheme } from '@/styles/theme';
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  Brain, 
  Scan, 
  Eye, 
  Users,
  Globe,
  Search,
  Upload,
  Award,
  TrendingUp,
  Activity
} from 'lucide-react';

interface ScamAlert {
  id: string;
  type: 'high' | 'medium' | 'low';
  title: string;
  description: string;
  confidence: number;
  indicators: string[];
}

interface CompanyVerification {
  name: string;
  status: 'verified' | 'suspicious' | 'fraudulent';
  score: number;
  details: {
    registration: boolean;
    license: boolean;
    reviews: number;
    complaints: number;
    operatingYears: number;
  };
}

const ScamDetectorAI: React.FC = () => {
  const [activeTab, setActiveTab] = useState('scanner');
  const [isScanning, setIsScanning] = useState(false);
  const [scanResults, setScanResults] = useState<ScamAlert[]>([]);
  const [companyData, setCompanyData] = useState<CompanyVerification | null>(null);
  const [inputValue, setInputValue] = useState('');

  // Sample scam alerts data
  const recentAlerts: ScamAlert[] = [
    {
      id: '1',
      type: 'high',
      title: 'Fake Visa Guarantee Scheme',
      description: 'Multiple reports of companies promising 100% visa guarantees with upfront payments',
      confidence: 96,
      indicators: ['Unrealistic promises', 'Upfront payment demands', 'No official registration']
    },
    {
      id: '2',
      type: 'medium',
      title: 'Suspicious Document Services',
      description: 'Companies offering fake educational certificates for visa applications',
      confidence: 87,
      indicators: ['Document forgery', 'Quick delivery promises', 'No verification process']
    },
    {
      id: '3',
      type: 'high',
      title: 'Job Offer Scams',
      description: 'Fraudulent job offers requiring payment for visa processing',
      confidence: 94,
      indicators: ['Payment for job offers', 'No company verification', 'Urgent responses required']
    }
  ];

  const startScan = async () => {
    setIsScanning(true);
    setScanResults([]);
    
    // Simulate AI scanning process
    setTimeout(() => {
      const mockResults: ScamAlert[] = [
        {
          id: 'scan1',
          type: Math.random() > 0.7 ? 'high' : Math.random() > 0.4 ? 'medium' : 'low',
          title: 'Domain Analysis Complete',
          description: 'Website security and legitimacy verification completed',
          confidence: Math.floor(Math.random() * 20) + 80,
          indicators: ['SSL Certificate', 'Domain Age', 'Registration Details']
        },
        {
          id: 'scan2',
          type: 'low',
          title: 'Company Registration Check',
          description: 'Business registration and licensing verification',
          confidence: Math.floor(Math.random() * 15) + 85,
          indicators: ['Official Registration', 'License Verification', 'Address Confirmation']
        }
      ];
      
      setScanResults(mockResults);
      setIsScanning(false);
      
      // Mock company data
      setCompanyData({
        name: inputValue || 'Sample Migration Company',
        status: Math.random() > 0.7 ? 'verified' : Math.random() > 0.4 ? 'suspicious' : 'fraudulent',
        score: Math.floor(Math.random() * 30) + 70,
        details: {
          registration: Math.random() > 0.2,
          license: Math.random() > 0.3,
          reviews: Math.floor(Math.random() * 500) + 50,
          complaints: Math.floor(Math.random() * 10),
          operatingYears: Math.floor(Math.random() * 15) + 1
        }
      });
    }, 3000);
  };

  const getStatusColor = (type: string) => {
    switch (type) {
      case 'high': return 'from-red-500 to-red-600';
      case 'medium': return 'from-yellow-500 to-orange-600';
      case 'low': return 'from-green-500 to-green-600';
      case 'verified': return 'from-green-500 to-emerald-600';
      case 'suspicious': return 'from-yellow-500 to-orange-600';
      case 'fraudulent': return 'from-red-500 to-red-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified': return <CheckCircle className="w-5 h-5" />;
      case 'suspicious': return <AlertTriangle className="w-5 h-5" />;
      case 'fraudulent': return <XCircle className="w-5 h-5" />;
      default: return <Shield className="w-5 h-5" />;
    }
  };

  const tabs = [
    { id: 'scanner', label: 'AI Scanner', icon: <Scan className="w-4 h-4" /> },
    { id: 'alerts', label: 'Scam Alerts', icon: <AlertTriangle className="w-4 h-4" /> },
    { id: 'database', label: 'Verified Companies', icon: <Shield className="w-4 h-4" /> },
    { id: 'education', label: 'Scam Education', icon: <Brain className="w-4 h-4" /> }
  ];

  return (
    <div className={`min-h-screen ${VanhsyaTheme.backgrounds.main} pt-24 pb-16`}>
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <motion.div
              className={`p-4 bg-gradient-to-r ${VanhsyaTheme.gradients.primary} rounded-2xl ${VanhsyaTheme.effects.glow}`}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Shield className="w-10 h-10 text-white" />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-3 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl"
            >
              <Brain className="w-8 h-8 text-white" />
            </motion.div>
          </div>
          
          <h1 className={`text-5xl md:text-6xl font-bold ${VanhsyaTheme.text.gradient} mb-6`}>
            VANHSYA ScamShield AI
          </h1>
          <p className={`text-xl ${VanhsyaTheme.text.secondary} max-w-4xl mx-auto mb-8`}>
            World's most advanced AI-powered scam detection system. Protect yourself from 
            migration fraud with real-time threat intelligence and instant verification.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className={`flex items-center gap-2 px-4 py-2 ${VanhsyaTheme.backgrounds.glass} rounded-xl`}>
              <Activity className="w-5 h-5 text-green-400" />
              <span className={VanhsyaTheme.text.primary}>99.7% Accuracy</span>
            </div>
            <div className={`flex items-center gap-2 px-4 py-2 ${VanhsyaTheme.backgrounds.glass} rounded-xl`}>
              <Users className="w-5 h-5 text-blue-400" />
              <span className={VanhsyaTheme.text.primary}>500K+ Protected</span>
            </div>
            <div className={`flex items-center gap-2 px-4 py-2 ${VanhsyaTheme.backgrounds.glass} rounded-xl`}>
              <Globe className="w-5 h-5 text-purple-400" />
              <span className={VanhsyaTheme.text.primary}>150+ Countries</span>
            </div>
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? `bg-gradient-to-r ${VanhsyaTheme.gradients.primary} text-white shadow-lg`
                  : `${VanhsyaTheme.backgrounds.glass} ${VanhsyaTheme.text.secondary} hover:bg-white/20`
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'scanner' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {/* Scanner Interface */}
              <div className={`${VanhsyaTheme.backgrounds.glass} rounded-2xl p-8 border border-white/20`}>
                <div className="text-center mb-8">
                  <h2 className={`text-3xl font-bold ${VanhsyaTheme.text.primary} mb-4`}>
                    AI-Powered Scam Detection
                  </h2>
                  <p className={VanhsyaTheme.text.secondary}>
                    Enter company name, website URL, or any suspicious information for instant verification
                  </p>
                </div>

                <div className="max-w-2xl mx-auto space-y-6">
                  <div className="relative">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Enter company name, website, email, or phone number..."
                      className={`w-full px-6 py-4 ${VanhsyaTheme.backgrounds.glass} border border-white/20 rounded-xl ${VanhsyaTheme.text.primary} placeholder-slate-400 focus:border-violet-500 focus:outline-none`}
                    />
                    <Search className="absolute right-4 top-4 w-6 h-6 text-slate-400" />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.button
                      onClick={startScan}
                      disabled={isScanning || !inputValue}
                      className={`flex-1 py-4 px-6 bg-gradient-to-r ${VanhsyaTheme.gradients.primary} hover:from-violet-700 hover:to-purple-700 ${VanhsyaTheme.text.primary} font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isScanning ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Scanning with AI...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-2">
                          <Scan className="w-5 h-5" />
                          Start AI Scan
                        </div>
                      )}
                    </motion.button>

                    <motion.button
                      className={`px-6 py-4 ${VanhsyaTheme.backgrounds.glass} hover:bg-white/20 ${VanhsyaTheme.text.primary} font-semibold rounded-xl transition-all duration-300 border border-white/20 hover:border-white/30`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-2">
                        <Upload className="w-5 h-5" />
                        Upload Document
                      </div>
                    </motion.button>
                  </div>
                </div>

                {/* Scan Results */}
                {scanResults.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-8 space-y-4"
                  >
                    <h3 className={`text-xl font-bold ${VanhsyaTheme.text.primary} mb-4`}>
                      AI Analysis Results
                    </h3>
                    
                    {scanResults.map((result, index) => (
                      <motion.div
                        key={result.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`p-4 ${VanhsyaTheme.backgrounds.glass} rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300`}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className={`p-2 bg-gradient-to-r ${getStatusColor(result.type)} rounded-lg`}>
                              {getStatusIcon(result.type)}
                            </div>
                            <div>
                              <h4 className={`font-semibold ${VanhsyaTheme.text.primary}`}>{result.title}</h4>
                              <p className={`text-sm ${VanhsyaTheme.text.secondary}`}>{result.description}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className={`text-sm ${VanhsyaTheme.text.secondary}`}>Confidence</div>
                            <div className={`font-bold ${VanhsyaTheme.text.primary}`}>{result.confidence}%</div>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {result.indicators.map((indicator, i) => (
                            <span
                              key={i}
                              className={`px-2 py-1 text-xs ${VanhsyaTheme.backgrounds.glass} ${VanhsyaTheme.text.secondary} rounded-md`}
                            >
                              {indicator}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {/* Company Verification Results */}
                {companyData && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8"
                  >
                    <h3 className={`text-xl font-bold ${VanhsyaTheme.text.primary} mb-4`}>
                      Company Verification Report
                    </h3>
                    
                    <div className={`p-6 ${VanhsyaTheme.backgrounds.glass} rounded-xl border border-white/20`}>
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h4 className={`text-lg font-bold ${VanhsyaTheme.text.primary}`}>{companyData.name}</h4>
                          <div className="flex items-center gap-2 mt-2">
                            <div className={`p-1 bg-gradient-to-r ${getStatusColor(companyData.status)} rounded`}>
                              {getStatusIcon(companyData.status)}
                            </div>
                            <span className={`font-medium ${companyData.status === 'verified' ? 'text-green-400' : companyData.status === 'suspicious' ? 'text-yellow-400' : 'text-red-400'}`}>
                              {companyData.status.toUpperCase()}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-3xl font-bold ${VanhsyaTheme.text.primary}`}>{companyData.score}/100</div>
                          <div className={`text-sm ${VanhsyaTheme.text.secondary}`}>Trust Score</div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        <div className="text-center">
                          <div className={`text-2xl ${companyData.details.registration ? 'text-green-400' : 'text-red-400'}`}>
                            {companyData.details.registration ? '✓' : '✗'}
                          </div>
                          <div className={`text-sm ${VanhsyaTheme.text.secondary}`}>Registration</div>
                        </div>
                        <div className="text-center">
                          <div className={`text-2xl ${companyData.details.license ? 'text-green-400' : 'text-red-400'}`}>
                            {companyData.details.license ? '✓' : '✗'}
                          </div>
                          <div className={`text-sm ${VanhsyaTheme.text.secondary}`}>License</div>
                        </div>
                        <div className="text-center">
                          <div className={`text-xl font-bold ${VanhsyaTheme.text.primary}`}>{companyData.details.reviews}</div>
                          <div className={`text-sm ${VanhsyaTheme.text.secondary}`}>Reviews</div>
                        </div>
                        <div className="text-center">
                          <div className={`text-xl font-bold ${companyData.details.complaints > 5 ? 'text-red-400' : 'text-green-400'}`}>
                            {companyData.details.complaints}
                          </div>
                          <div className={`text-sm ${VanhsyaTheme.text.secondary}`}>Complaints</div>
                        </div>
                        <div className="text-center">
                          <div className={`text-xl font-bold ${VanhsyaTheme.text.primary}`}>{companyData.details.operatingYears}</div>
                          <div className={`text-sm ${VanhsyaTheme.text.secondary}`}>Years</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}

          {activeTab === 'alerts' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className={`${VanhsyaTheme.backgrounds.glass} rounded-2xl p-8 border border-white/20`}>
                <h2 className={`text-2xl font-bold ${VanhsyaTheme.text.primary} mb-6`}>
                  Recent Scam Alerts
                </h2>
                
                <div className="space-y-4">
                  {recentAlerts.map((alert, index) => (
                    <motion.div
                      key={alert.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`p-6 ${VanhsyaTheme.backgrounds.glass} rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`p-3 bg-gradient-to-r ${getStatusColor(alert.type)} rounded-xl flex-shrink-0`}>
                          <AlertTriangle className="w-6 h-6 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className={`text-lg font-bold ${VanhsyaTheme.text.primary}`}>{alert.title}</h3>
                            <div className="flex items-center gap-2">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                alert.type === 'high' ? 'bg-red-500/20 text-red-300' :
                                alert.type === 'medium' ? 'bg-yellow-500/20 text-yellow-300' :
                                'bg-green-500/20 text-green-300'
                              }`}>
                                {alert.type.toUpperCase()} RISK
                              </span>
                              <span className={`text-sm ${VanhsyaTheme.text.secondary}`}>
                                {alert.confidence}% confidence
                              </span>
                            </div>
                          </div>
                          
                          <p className={`${VanhsyaTheme.text.secondary} mb-4`}>{alert.description}</p>
                          
                          <div className="flex flex-wrap gap-2">
                            {alert.indicators.map((indicator, i) => (
                              <span
                                key={i}
                                className={`px-3 py-1 text-xs ${VanhsyaTheme.backgrounds.glass} ${VanhsyaTheme.text.secondary} rounded-md`}
                              >
                                {indicator}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Protection Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {[
            { icon: Shield, value: '500K+', label: 'Users Protected', color: 'from-green-500 to-emerald-600' },
            { icon: Eye, value: '1.2M+', label: 'Scams Detected', color: 'from-blue-500 to-cyan-600' },
            { icon: Award, value: '99.7%', label: 'Accuracy Rate', color: 'from-purple-500 to-violet-600' },
            { icon: TrendingUp, value: '$50M+', label: 'Losses Prevented', color: 'from-orange-500 to-red-600' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              className={`${VanhsyaTheme.backgrounds.glass} rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 text-center`}
            >
              <div className={`p-4 bg-gradient-to-r ${stat.color} rounded-xl w-fit mx-auto mb-4`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className={`text-3xl font-bold ${VanhsyaTheme.text.primary} mb-2`}>{stat.value}</div>
              <div className={VanhsyaTheme.text.secondary}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ScamDetectorAI;
