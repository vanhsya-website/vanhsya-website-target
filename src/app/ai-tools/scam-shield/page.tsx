'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, AlertTriangle, CheckCircle, FileText, Globe, Phone, DollarSign, Eye, AlertCircle } from 'lucide-react';

interface ScamCheckResult {
  riskLevel: 'low' | 'medium' | 'high' | 'extreme';
  score: number;
  flags: string[];
  recommendations: string[];
  description: string;
}

interface CheckItem {
  id: string;
  category: 'company' | 'contact' | 'financial' | 'documentation' | 'behavioral';
  question: string;
  options: { value: string; risk: number; label: string }[];
}

const checkItems: CheckItem[] = [
  {
    id: 'company_registration',
    category: 'company',
    question: 'Is the company registered with official immigration authorities?',
    options: [
      { value: 'verified', risk: 0, label: 'Yes, officially verified' },
      { value: 'claimed', risk: 3, label: 'They claim to be registered' },
      { value: 'unclear', risk: 7, label: 'Unclear or evasive answers' },
      { value: 'no', risk: 10, label: 'No or refusing to provide details' }
    ]
  },
  {
    id: 'upfront_payment',
    category: 'financial',
    question: 'Are they demanding large upfront payments?',
    options: [
      { value: 'none', risk: 0, label: 'No upfront payment required' },
      { value: 'reasonable', risk: 2, label: 'Small reasonable consultation fee' },
      { value: 'partial', risk: 5, label: 'Partial payment with clear milestones' },
      { value: 'full', risk: 10, label: 'Full payment upfront required' }
    ]
  },
  {
    id: 'success_guarantee',
    category: 'behavioral',
    question: 'Do they guarantee 100% visa success?',
    options: [
      { value: 'realistic', risk: 0, label: 'Provide realistic success rates with proof' },
      { value: 'confident', risk: 3, label: 'Very confident but acknowledge risks' },
      { value: 'guarantee', risk: 8, label: 'Guarantee success without conditions' },
      { value: 'impossible', risk: 10, label: 'Promise impossible outcomes' }
    ]
  },
  {
    id: 'urgency_pressure',
    category: 'behavioral',
    question: 'Are they creating artificial urgency or pressure?',
    options: [
      { value: 'none', risk: 0, label: 'No pressure, reasonable timelines' },
      { value: 'mild', risk: 2, label: 'Mild urgency for legitimate deadlines' },
      { value: 'moderate', risk: 6, label: 'Moderate pressure for quick decisions' },
      { value: 'extreme', risk: 10, label: 'Extreme pressure to decide immediately' }
    ]
  },
  {
    id: 'documentation_handling',
    category: 'documentation',
    question: 'How do they handle your documents?',
    options: [
      { value: 'transparent', risk: 0, label: 'Transparent process, you keep originals' },
      { value: 'copies', risk: 2, label: 'Request copies with clear purpose' },
      { value: 'originals', risk: 7, label: 'Demand original documents' },
      { value: 'suspicious', risk: 10, label: 'Ask for unnecessary personal information' }
    ]
  },
  {
    id: 'contact_methods',
    category: 'contact',
    question: 'What contact methods do they provide?',
    options: [
      { value: 'professional', risk: 0, label: 'Professional office, multiple contact methods' },
      { value: 'limited', risk: 3, label: 'Limited but verifiable contact info' },
      { value: 'phone_only', risk: 7, label: 'Only phone or WhatsApp contact' },
      { value: 'suspicious', risk: 10, label: 'Avoid direct contact, use intermediaries' }
    ]
  }
];

const ScamShieldPage: React.FC = () => {
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [currentStep, setCurrentStep] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [result, setResult] = useState<ScamCheckResult | null>(null);

  const handleResponse = (questionId: string, value: string) => {
    setResponses(prev => ({ ...prev, [questionId]: value }));
  };

  const calculateRisk = (): ScamCheckResult => {
    let totalRisk = 0;
    const flags: string[] = [];
    const recommendations: string[] = [];

    checkItems.forEach(item => {
      const response = responses[item.id];
      if (response) {
        const option = item.options.find(opt => opt.value === response);
        if (option) {
          totalRisk += option.risk;
          
          if (option.risk >= 7) {
            flags.push(`High risk: ${item.question}`);
          } else if (option.risk >= 4) {
            flags.push(`Medium risk: ${item.question}`);
          }
        }
      }
    });

    const maxPossibleRisk = checkItems.length * 10;
    const score = Math.round((totalRisk / maxPossibleRisk) * 100);

    let riskLevel: 'low' | 'medium' | 'high' | 'extreme';
    let description: string;

    if (score <= 20) {
      riskLevel = 'low';
      description = 'This appears to be a legitimate immigration service provider.';
      recommendations.push('Continue with normal due diligence');
      recommendations.push('Verify their registration independently');
    } else if (score <= 40) {
      riskLevel = 'medium';
      description = 'Some concerning signs detected. Proceed with enhanced caution.';
      recommendations.push('Request additional verification documents');
      recommendations.push('Seek second opinions from other consultants');
      recommendations.push('Never pay large amounts upfront');
    } else if (score <= 70) {
      riskLevel = 'high';
      description = 'Multiple red flags detected. High probability of fraudulent operation.';
      recommendations.push('Do not proceed with this provider');
      recommendations.push('Report to immigration authorities');
      recommendations.push('Seek help from verified immigration lawyers');
    } else {
      riskLevel = 'extreme';
      description = 'Extremely high risk of fraud. Avoid completely.';
      recommendations.push('Immediately stop all communications');
      recommendations.push('Report to police and immigration authorities');
      recommendations.push('If you paid money, contact your bank immediately');
      recommendations.push('Seek legal counsel');
    }

    return { riskLevel, score, flags, recommendations, description };
  };

  const nextStep = () => {
    if (currentStep < checkItems.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      const calculatedResult = calculateRisk();
      setResult(calculatedResult);
      setShowResults(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const resetCheck = () => {
    setResponses({});
    setCurrentStep(0);
    setShowResults(false);
    setResult(null);
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'low': return 'text-green-600';
      case 'medium': return 'text-yellow-600';
      case 'high': return 'text-orange-600';
      case 'extreme': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getRiskBg = (level: string) => {
    switch (level) {
      case 'low': return 'bg-green-100';
      case 'medium': return 'bg-yellow-100';
      case 'high': return 'bg-orange-100';
      case 'extreme': return 'bg-red-100';
      default: return 'bg-gray-100';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'company': return <Globe className="w-6 h-6" />;
      case 'contact': return <Phone className="w-6 h-6" />;
      case 'financial': return <DollarSign className="w-6 h-6" />;
      case 'documentation': return <FileText className="w-6 h-6" />;
      case 'behavioral': return <Eye className="w-6 h-6" />;
      default: return <AlertCircle className="w-6 h-6" />;
    }
  };

  if (showResults && result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className={`w-24 h-24 ${getRiskBg(result.riskLevel)} rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                <Shield className={`w-12 h-12 ${getRiskColor(result.riskLevel)}`} />
              </motion.div>
              
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Scam Risk Assessment</h1>
              <div className={`text-6xl font-bold ${getRiskColor(result.riskLevel)} mb-2`}>
                {result.score}%
              </div>
              <p className={`text-xl font-semibold ${getRiskColor(result.riskLevel)} mb-4`}>
                {result.riskLevel.toUpperCase()} RISK
              </p>
              <p className="text-gray-600 text-lg">{result.description}</p>
            </div>

            {/* Risk Flags */}
            {result.flags.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <AlertTriangle className="w-6 h-6 text-orange-600 mr-2" />
                  Risk Flags Detected
                </h3>
                <div className="space-y-3">
                  {result.flags.map((flag, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="bg-orange-50 border border-orange-200 rounded-lg p-4"
                    >
                      <div className="flex items-start space-x-2">
                        <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5" />
                        <span>{flag}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Recommendations */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 text-blue-600 mr-2" />
                Recommended Actions
              </h3>
              <div className="space-y-3">
                {result.recommendations.map((rec, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="bg-blue-50 border border-blue-200 rounded-lg p-4"
                  >
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                      <span>{rec}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Emergency Contacts */}
            {(result.riskLevel === 'high' || result.riskLevel === 'extreme') && (
              <div className="mb-8 bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-red-800 mb-4">Emergency Contact Information</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-red-800">Immigration Fraud Hotline:</p>
                    <p>1-866-347-2423</p>
                  </div>
                  <div>
                    <p className="font-semibold text-red-800">Local Police:</p>
                    <p>911 (Emergency)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-red-800">Consumer Protection:</p>
                    <p>1-877-382-4357</p>
                  </div>
                  <div>
                    <p className="font-semibold text-red-800">Legal Aid:</p>
                    <p>Contact local bar association</p>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={resetCheck}
                className="px-8 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Check Another Provider
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Verified Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  const currentItem = checkItems[currentStep];
  const currentResponse = responses[currentItem.id];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Shield className="w-8 h-8 text-blue-600" />
            </motion.div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Scam Shield Detector</h1>
            <p className="text-gray-600">Protect yourself from immigration fraud</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">
                Question {currentStep + 1} of {checkItems.length}
              </span>
              <span className="text-sm font-medium text-gray-600">
                {Math.round(((currentStep + 1) / checkItems.length) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${((currentStep + 1) / checkItems.length) * 100}%` }}
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              />
            </div>
          </div>

          {/* Question */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  {getCategoryIcon(currentItem.category)}
                  <h2 className="text-xl font-bold text-gray-800">{currentItem.question}</h2>
                </div>

                <div className="space-y-3">
                  {currentItem.options.map((option, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleResponse(currentItem.id, option.value)}
                      className={`w-full p-4 text-left rounded-xl border-2 transition-colors ${
                        currentResponse === option.value
                          ? 'border-blue-600 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option.label}</span>
                        {option.risk > 0 && (
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            option.risk >= 8 ? 'bg-red-100 text-red-800' :
                            option.risk >= 5 ? 'bg-orange-100 text-orange-800' :
                            option.risk >= 3 ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            Risk: {option.risk}/10
                          </span>
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                currentStep === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Previous
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextStep}
              disabled={!currentResponse}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                !currentResponse
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {currentStep === checkItems.length - 1 ? 'Get Risk Assessment' : 'Next'}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ScamShieldPage;
