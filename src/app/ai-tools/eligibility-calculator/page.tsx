'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, User, GraduationCap, Briefcase, Globe, Languages, DollarSign, ArrowRight, CheckCircle, Star, Brain } from 'lucide-react';
import Footer from '@/components/Footer';

interface FormData {
  age: number;
  education: string;
  workExperience: number;
  language: string;
  languageScore: number;
  country: string;
  maritalStatus: string;
  funds: number;
  jobOffer: boolean;
}

const EligibilityCalculatorPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    age: 25,
    education: '',
    workExperience: 0,
    language: '',
    languageScore: 0,
    country: '',
    maritalStatus: 'single',
    funds: 0,
    jobOffer: false
  });
  const [result, setResult] = useState<{
    points: number;
    totalPoints: number;
    eligible: boolean;
    eligibility: string;
    message: string;
    recommendation: string;
    breakdown: Record<string, number>;
    nextSteps: string[];
  } | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const totalSteps = 7;

  const educationLevels = [
    { value: 'high-school', label: 'High School', points: 5 },
    { value: 'diploma', label: 'Diploma/Certificate', points: 15 },
    { value: 'bachelor', label: "Bachelor's Degree", points: 23 },
    { value: 'master', label: "Master's Degree", points: 25 },
    { value: 'phd', label: 'PhD/Doctorate', points: 25 }
  ];

  const languageTests = [
    { value: 'ielts', label: 'IELTS', maxScore: 9 },
    { value: 'toefl', label: 'TOEFL', maxScore: 120 },
    { value: 'pte', label: 'PTE Academic', maxScore: 90 },
    { value: 'celpip', label: 'CELPIP', maxScore: 12 }
  ];

  const countries = [
    { value: 'canada', label: 'Canada', flag: '🇨🇦' },
    { value: 'australia', label: 'Australia', flag: '🇦🇺' },
    { value: 'newzealand', label: 'New Zealand', flag: '🇳🇿' },
    { value: 'uk', label: 'United Kingdom', flag: '🇬🇧' }
  ];

  const calculateScore = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      let totalPoints = 0;
      const breakdown: Record<string, number> = {};

      // Age points (Canada Express Entry style)
      if (formData.age >= 18 && formData.age <= 35) {
        breakdown.age = Math.max(0, 12 - Math.abs(29 - formData.age));
      } else if (formData.age <= 45) {
        breakdown.age = Math.max(0, 12 - (formData.age - 35) * 2);
      } else {
        breakdown.age = 0;
      }

      // Education points
      const educationPoints = educationLevels.find(e => e.value === formData.education)?.points || 0;
      breakdown.education = educationPoints;

      // Work experience points
      breakdown.workExperience = Math.min(formData.workExperience * 3, 15);

      // Language points (simplified)
      breakdown.language = Math.min(Math.floor(formData.languageScore * 2), 28);

      // Job offer bonus
      breakdown.jobOffer = formData.jobOffer ? 50 : 0;

      // Funds check
      breakdown.funds = formData.funds >= 15000 ? 5 : 0;

      totalPoints = Object.values(breakdown).reduce((sum: number, points: unknown) => sum + (points as number), 0);

      // Determine eligibility
      let eligibility = 'low';
      let recommendation = '';
      let nextSteps: string[] = [];

      if (totalPoints >= 75) {
        eligibility = 'excellent';
        recommendation = 'You have an excellent chance of success! Your profile is very competitive.';
        nextSteps = [
          'Prepare and submit your application',
          'Gather all required documents',
          'Book language test if scores can be improved',
          'Consider applying to multiple programs'
        ];
      } else if (totalPoints >= 60) {
        eligibility = 'good';
        recommendation = 'You have a good chance of success with some improvements.';
        nextSteps = [
          'Improve language test scores',
          'Gain additional work experience',
          'Consider upgrading education credentials',
          'Explore provincial nomination programs'
        ];
      } else if (totalPoints >= 40) {
        eligibility = 'moderate';
        recommendation = 'Your profile needs significant improvement to be competitive.';
        nextSteps = [
          'Significantly improve language scores',
          'Gain more relevant work experience',
          'Consider additional education/training',
          'Explore alternative immigration pathways'
        ];
      } else {
        eligibility = 'low';
        recommendation = 'Your current profile may face challenges. Consider major improvements.';
        nextSteps = [
          'Focus on improving language proficiency',
          'Gain relevant work experience',
          'Consider upgrading education',
          'Consult with immigration experts'
        ];
      }

      setResult({
        points: totalPoints,
        totalPoints,
        eligible: eligibility !== 'low',
        eligibility,
        message: recommendation,
        recommendation,
        breakdown,
        nextSteps
      });
      setIsCalculating(false);
    }, 2000);
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateScore();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getEligibilityColor = (level: string) => {
    switch (level) {
      case 'excellent': return 'text-green-400 bg-green-600/20 border-green-500/30';
      case 'good': return 'text-blue-400 bg-blue-600/20 border-blue-500/30';
      case 'moderate': return 'text-yellow-400 bg-yellow-600/20 border-yellow-500/30';
      default: return 'text-red-400 bg-red-600/20 border-red-500/30';
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <User className="w-16 h-16 mx-auto mb-4 text-purple-400" />
              <h3 className="mb-2 text-2xl font-bold text-white">Personal Information</h3>
              <p className="text-slate-300">Let's start with basic details about you</p>
            </div>
            <div>
              <label className="block mb-3 font-medium text-white">Age: {formData.age}</label>
              <input
                type="range"
                min="18"
                max="65"
                value={formData.age}
                onChange={(e) => setFormData({...formData, age: parseInt(e.target.value)})}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-white/20 slider"
              />
              <div className="flex justify-between mt-2 text-sm text-slate-400">
                <span>18</span>
                <span>65</span>
              </div>
            </div>
            <div>
              <label className="block mb-3 font-medium text-white">Marital Status</label>
              <div className="grid grid-cols-2 gap-4">
                {['single', 'married'].map((status) => (
                  <button
                    key={status}
                    onClick={() => setFormData({...formData, maritalStatus: status})}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      formData.maritalStatus === status
                        ? 'border-purple-500 bg-purple-600/20 text-white'
                        : 'border-white/20 bg-white/5 text-slate-300 hover:border-purple-500/50'
                    }`}
                  >
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <GraduationCap className="w-16 h-16 mx-auto mb-4 text-blue-400" />
              <h3 className="mb-2 text-2xl font-bold text-white">Education Level</h3>
              <p className="text-slate-300">What's your highest level of education?</p>
            </div>
            <div className="space-y-3">
              {educationLevels.map((level) => (
                <button
                  key={level.value}
                  onClick={() => setFormData({...formData, education: level.value})}
                  className={`w-full p-4 rounded-xl border-2 transition-all duration-300 flex justify-between items-center ${
                    formData.education === level.value
                      ? 'border-blue-500 bg-blue-600/20 text-white'
                      : 'border-white/20 bg-white/5 text-slate-300 hover:border-blue-500/50'
                  }`}
                >
                  <span>{level.label}</span>
                  <span className="px-2 py-1 text-sm rounded bg-white/10">{level.points} pts</span>
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Briefcase className="w-16 h-16 mx-auto mb-4 text-green-400" />
              <h3 className="mb-2 text-2xl font-bold text-white">Work Experience</h3>
              <p className="text-slate-300">How many years of skilled work experience do you have?</p>
            </div>
            <div>
              <label className="block mb-3 font-medium text-white">Years: {formData.workExperience}</label>
              <input
                type="range"
                min="0"
                max="10"
                value={formData.workExperience}
                onChange={(e) => setFormData({...formData, workExperience: parseInt(e.target.value)})}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-white/20 slider"
              />
              <div className="flex justify-between mt-2 text-sm text-slate-400">
                <span>0</span>
                <span>10+</span>
              </div>
            </div>
            <div>
              <label className="block mb-3 font-medium text-white">Do you have a job offer?</label>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: true, label: 'Yes' },
                  { value: false, label: 'No' }
                ].map((option) => (
                  <button
                    key={option.label}
                    onClick={() => setFormData({...formData, jobOffer: option.value})}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      formData.jobOffer === option.value
                        ? 'border-green-500 bg-green-600/20 text-white'
                        : 'border-white/20 bg-white/5 text-slate-300 hover:border-green-500/50'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Languages className="w-16 h-16 mx-auto mb-4 text-cyan-400" />
              <h3 className="mb-2 text-2xl font-bold text-white">Language Proficiency</h3>
              <p className="text-slate-300">What language test have you taken?</p>
            </div>
            <div className="space-y-3">
              {languageTests.map((test) => (
                <button
                  key={test.value}
                  onClick={() => setFormData({...formData, language: test.value})}
                  className={`w-full p-4 rounded-xl border-2 transition-all duration-300 flex justify-between items-center ${
                    formData.language === test.value
                      ? 'border-cyan-500 bg-cyan-600/20 text-white'
                      : 'border-white/20 bg-white/5 text-slate-300 hover:border-cyan-500/50'
                  }`}
                >
                  <span>{test.label}</span>
                  <span className="px-2 py-1 text-sm rounded bg-white/10">Max: {test.maxScore}</span>
                </button>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Star className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
              <h3 className="mb-2 text-2xl font-bold text-white">Language Score</h3>
              <p className="text-slate-300">What was your overall score?</p>
            </div>
            <div>
              <label className="block mb-3 font-medium text-white">
                Score: {formData.languageScore}
                {formData.language && ` / ${languageTests.find(t => t.value === formData.language)?.maxScore}`}
              </label>
              <input
                type="range"
                min="0"
                max={languageTests.find(t => t.value === formData.language)?.maxScore || 100}
                value={formData.languageScore}
                onChange={(e) => setFormData({...formData, languageScore: parseInt(e.target.value)})}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-white/20 slider"
              />
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Globe className="w-16 h-16 mx-auto mb-4 text-indigo-400" />
              <h3 className="mb-2 text-2xl font-bold text-white">Target Country</h3>
              <p className="text-slate-300">Which country are you planning to migrate to?</p>
            </div>
            <div className="space-y-3">
              {countries.map((country) => (
                <button
                  key={country.value}
                  onClick={() => setFormData({...formData, country: country.value})}
                  className={`w-full p-4 rounded-xl border-2 transition-all duration-300 flex items-center gap-3 ${
                    formData.country === country.value
                      ? 'border-indigo-500 bg-indigo-600/20 text-white'
                      : 'border-white/20 bg-white/5 text-slate-300 hover:border-indigo-500/50'
                  }`}
                >
                  <span className="text-2xl">{country.flag}</span>
                  <span>{country.label}</span>
                </button>
              ))}
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <DollarSign className="w-16 h-16 mx-auto mb-4 text-emerald-400" />
              <h3 className="mb-2 text-2xl font-bold text-white">Financial Resources</h3>
              <p className="text-slate-300">How much funds do you have available? (USD)</p>
            </div>
            <div>
              <label className="block mb-3 font-medium text-white">Amount: ${formData.funds.toLocaleString()}</label>
              <input
                type="range"
                min="0"
                max="100000"
                step="1000"
                value={formData.funds}
                onChange={(e) => setFormData({...formData, funds: parseInt(e.target.value)})}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-white/20 slider"
              />
              <div className="flex justify-between mt-2 text-sm text-slate-400">
                <span>$0</span>
                <span>$100k+</span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (result) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950">
        
        <section className="px-4 pt-32 pb-20">
          <div className="container max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12 text-center"
            >
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                <span className="text-white">Your Eligibility</span>
                <br />
                <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text">
                  Assessment Results
                </span>
              </h1>
            </motion.div>

            {/* Results Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="p-8 mb-8 border bg-white/5 backdrop-blur-xl border-white/10 rounded-3xl"
            >
              {/* Overall Score */}
              <div className="mb-8 text-center">
                <div className="inline-flex items-center justify-center w-32 h-32 mb-6 border-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-500/30">
                  <span className="text-4xl font-bold text-white">{result.totalPoints}</span>
                </div>
                <div className={`inline-block px-6 py-3 rounded-full border-2 ${getEligibilityColor(result.eligibility)}`}>
                  <span className="font-semibold capitalize">{result.eligibility} Chances</span>
                </div>
                <p className="mt-4 text-lg text-slate-300">{result.recommendation}</p>
              </div>

              {/* Score Breakdown */}
              <div className="grid gap-6 mb-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-xl font-semibold text-white">Score Breakdown</h3>
                  <div className="space-y-3">
                    {Object.entries(result.breakdown).map(([category, points]: [string, number]) => (
                      <div key={category} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                        <span className="capitalize text-slate-300">{category.replace(/([A-Z])/g, ' $1')}</span>
                        <span className="font-semibold text-white">{points} pts</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-semibold text-white">Next Steps</h3>
                  <div className="space-y-3">
                    {result.nextSteps.map((step: string, index: number) => (
                      <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-white/5">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-300">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white transition-all duration-300 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl hover:from-purple-700 hover:to-blue-700"
                >
                  Get Expert Consultation
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setResult(null);
                    setCurrentStep(1);
                  }}
                  className="px-8 py-4 font-semibold text-white transition-all duration-300 border bg-white/10 border-white/20 rounded-xl hover:bg-white/20"
                >
                  Retake Assessment
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950">
      
      {/* Hero Section */}
      <section className="px-4 pt-32 pb-20">
        <div className="container max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm text-purple-300 rounded-full bg-purple-600/20">
              <Calculator className="w-4 h-4" />
              AI-Powered Eligibility Calculator
            </div>
            <h1 className="mb-6 text-5xl font-bold md:text-6xl">
              <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text">
                Check Your
              </span>
              <br />
              <span className="text-white">Migration Eligibility</span>
            </h1>
            <p className="max-w-3xl mx-auto text-xl leading-relaxed text-slate-300">
              Get an instant assessment of your immigration eligibility with our AI-powered calculator. 
              Receive personalized recommendations to improve your chances of success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator Interface */}
      <section className="px-4 py-20">
        <div className="container max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="p-8 border bg-white/5 backdrop-blur-xl border-white/10 rounded-3xl"
          >
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-slate-300">
                  Step {currentStep} of {totalSteps}
                </span>
                <span className="text-sm font-medium text-slate-300">
                  {Math.round((currentStep / totalSteps) * 100)}%
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-white/10">
                <div
                  className="h-2 transition-all duration-500 rounded-full bg-gradient-to-r from-purple-600 to-blue-600"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                />
              </div>
            </div>

            {/* Current Step */}
            <div className="mb-8">
              {renderStep()}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="px-6 py-3 font-medium text-white transition-all duration-300 border bg-white/10 border-white/20 rounded-xl hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                className="flex items-center gap-2 px-6 py-3 font-medium text-white transition-all duration-300 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl hover:from-purple-700 hover:to-blue-700"
              >
                {currentStep === totalSteps ? (
                  isCalculating ? (
                    <>
                      <Brain className="w-5 h-5 animate-pulse" />
                      Calculating...
                    </>
                  ) : (
                    <>
                      Calculate
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )
                ) : (
                  <>
                    Next
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EligibilityCalculatorPage;
