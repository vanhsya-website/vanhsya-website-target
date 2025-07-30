'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CalculatorIcon,
  UserIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  GlobeAmericasIcon,
  CurrencyDollarIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  SparklesIcon,
  TrophyIcon,
} from '@heroicons/react/24/outline';

interface CalculatorForm {
  age: number;
  education: string;
  experience: number;
  language: string;
  languageScore: number;
  occupation: string;
  targetCountry: string;
  maritalStatus: string;
  spouseEducation: string;
  spouseLanguage: string;
  hasJobOffer: boolean;
  salary: number;
  familySize: number;
  funds: number;
}

interface CalculationResult {
  totalScore: number;
  category: string;
  likelihood: number;
  breakdown: {
    age: number;
    education: number;
    experience: number;
    language: number;
    spouse: number;
    jobOffer: number;
    funds: number;
  };
  recommendations: string[];
  nextSteps: string[];
  estimatedTime: string;
  estimatedCost: number;
  visaTypes: string[];
}

const educationOptions = [
  { value: 'high-school', label: 'High School', points: 5 },
  { value: 'diploma', label: 'Diploma/Certificate', points: 15 },
  { value: 'bachelors', label: "Bachelor's Degree", points: 21 },
  { value: 'masters', label: "Master's Degree", points: 23 },
  { value: 'phd', label: 'PhD/Doctorate', points: 25 },
];

const languageOptions = [
  { value: 'basic', label: 'Basic', points: 0 },
  { value: 'intermediate', label: 'Intermediate', points: 10 },
  { value: 'advanced', label: 'Advanced', points: 16 },
  { value: 'native', label: 'Native/Professional', points: 20 },
];

const occupationOptions = [
  { value: 'management', label: 'Management', points: 15 },
  { value: 'professional', label: 'Professional', points: 20 },
  { value: 'technical', label: 'Technical/Trades', points: 18 },
  { value: 'healthcare', label: 'Healthcare', points: 25 },
  { value: 'education', label: 'Education', points: 22 },
  { value: 'it', label: 'Information Technology', points: 23 },
  { value: 'engineering', label: 'Engineering', points: 24 },
  { value: 'other', label: 'Other', points: 10 },
];

const countryOptions = [
  { value: 'australia', label: 'Australia', maxPoints: 100 },
  { value: 'canada', label: 'Canada', maxPoints: 100 },
  { value: 'newzealand', label: 'New Zealand', maxPoints: 100 },
  { value: 'uk', label: 'United Kingdom', maxPoints: 100 },
  { value: 'germany', label: 'Germany', maxPoints: 100 },
];

export default function ImmigrationCalculator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [form, setForm] = useState<CalculatorForm>({
    age: 25,
    education: '',
    experience: 0,
    language: '',
    languageScore: 0,
    occupation: '',
    targetCountry: '',
    maritalStatus: 'single',
    spouseEducation: '',
    spouseLanguage: '',
    hasJobOffer: false,
    salary: 0,
    familySize: 1,
    funds: 0,
  });

  const [result, setResult] = useState<CalculationResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const steps = [
    { title: 'Personal Info', icon: UserIcon },
    { title: 'Education', icon: AcademicCapIcon },
    { title: 'Work Experience', icon: BriefcaseIcon },
    { title: 'Language Skills', icon: GlobeAmericasIcon },
    { title: 'Additional Factors', icon: SparklesIcon },
    { title: 'Results', icon: TrophyIcon },
  ];

  const calculateScore = useMemo((): CalculationResult | null => {
    if (
      !form.targetCountry ||
      !form.education ||
      !form.language ||
      !form.occupation
    ) {
      return null;
    }

    // Age points (Australia/Canada system)
    let agePoints = 0;
    if (form.age >= 18 && form.age <= 24) agePoints = 25;
    else if (form.age >= 25 && form.age <= 32) agePoints = 30;
    else if (form.age >= 33 && form.age <= 39) agePoints = 25;
    else if (form.age >= 40 && form.age <= 44) agePoints = 15;
    else if (form.age >= 45 && form.age <= 49) agePoints = 0;

    // Education points
    const educationPoints =
      educationOptions.find(e => e.value === form.education)?.points || 0;

    // Experience points
    let experiencePoints = 0;
    if (form.experience >= 1) experiencePoints = 5;
    if (form.experience >= 3) experiencePoints = 10;
    if (form.experience >= 5) experiencePoints = 15;
    if (form.experience >= 8) experiencePoints = 20;

    // Language points
    const languagePoints =
      languageOptions.find(l => l.value === form.language)?.points || 0;

    // Occupation points
    const occupationPoints =
      occupationOptions.find(o => o.value === form.occupation)?.points || 0;

    // Spouse points
    let spousePoints = 0;
    if (form.maritalStatus === 'married') {
      const spouseEducationPoints =
        educationOptions.find(e => e.value === form.spouseEducation)?.points ||
        0;
      const spouseLanguagePoints =
        languageOptions.find(l => l.value === form.spouseLanguage)?.points || 0;
      spousePoints = Math.min(
        10,
        (spouseEducationPoints + spouseLanguagePoints) / 4
      );
    }

    // Job offer points
    const jobOfferPoints = form.hasJobOffer ? 10 : 0;

    // Funds points (simplified)
    const fundsPoints = form.funds >= 20000 ? 5 : 0;

    const totalScore =
      agePoints +
      educationPoints +
      experiencePoints +
      languagePoints +
      occupationPoints +
      spousePoints +
      jobOfferPoints +
      fundsPoints;

    // Determine category and likelihood
    let category = '';
    let likelihood = 0;
    if (totalScore >= 80) {
      category = 'Excellent';
      likelihood = 95;
    } else if (totalScore >= 67) {
      category = 'Very Good';
      likelihood = 85;
    } else if (totalScore >= 50) {
      category = 'Good';
      likelihood = 65;
    } else if (totalScore >= 35) {
      category = 'Fair';
      likelihood = 35;
    } else {
      category = 'Needs Improvement';
      likelihood = 15;
    }

    // Generate recommendations
    const recommendations = [];
    if (agePoints < 20)
      recommendations.push('Consider applying sooner as age affects points');
    if (educationPoints < 20)
      recommendations.push('Consider upgrading your education credentials');
    if (experiencePoints < 15)
      recommendations.push('Gain more work experience in your field');
    if (languagePoints < 16)
      recommendations.push('Improve your language test scores');
    if (!form.hasJobOffer)
      recommendations.push('A job offer can significantly boost your score');
    if (form.funds < 20000)
      recommendations.push('Ensure you meet the minimum fund requirements');

    // Generate next steps
    const nextSteps = [
      'Get your educational credentials assessed',
      'Take an official language test (IELTS/CELPIP/TEF)',
      'Gather all required documents',
      'Create your online profile',
      'Submit your application',
    ];

    // Estimate processing time and cost
    const estimatedTime = form.hasJobOffer ? '6-8 months' : '12-18 months';
    const estimatedCost = 3500 + (form.familySize - 1) * 500;

    // Determine suitable visa types
    const visaTypes = [];
    if (form.targetCountry === 'australia') {
      if (totalScore >= 65) visaTypes.push('Skilled Independent (189)');
      if (form.hasJobOffer) visaTypes.push('Employer Sponsored (186/482)');
      visaTypes.push('State Nominated (190)');
    } else if (form.targetCountry === 'canada') {
      if (totalScore >= 67) visaTypes.push('Federal Skilled Worker');
      visaTypes.push('Provincial Nominee Program');
      if (form.hasJobOffer) visaTypes.push('Canadian Experience Class');
    }

    return {
      totalScore,
      category,
      likelihood,
      breakdown: {
        age: agePoints,
        education: educationPoints,
        experience: experiencePoints,
        language: languagePoints,
        spouse: spousePoints,
        jobOffer: jobOfferPoints,
        funds: fundsPoints,
      },
      recommendations,
      nextSteps,
      estimatedTime,
      estimatedCost,
      visaTypes,
    };
  }, [form]);

  const handleCalculate = async () => {
    setIsCalculating(true);
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate calculation time
    setResult(calculateScore);
    setIsCalculating(false);
    setCurrentStep(5);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 bg-green-100';
    if (score >= 67) return 'text-blue-600 bg-blue-100';
    if (score >= 50) return 'text-yellow-600 bg-yellow-100';
    if (score >= 35) return 'text-orange-600 bg-orange-100';
    return 'text-red-600 bg-red-100';
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className='space-y-6'>
            <h3 className='text-xl font-bold text-gray-800'>
              Personal Information
            </h3>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Age
                </label>
                <input
                  type='number'
                  min='18'
                  max='65'
                  value={form.age}
                  onChange={e =>
                    setForm({ ...form, age: parseInt(e.target.value) })
                  }
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Target Country
                </label>
                <select
                  value={form.targetCountry}
                  onChange={e =>
                    setForm({ ...form, targetCountry: e.target.value })
                  }
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                >
                  <option value=''>Select Country</option>
                  {countryOptions.map(country => (
                    <option key={country.value} value={country.value}>
                      {country.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Marital Status
                </label>
                <select
                  value={form.maritalStatus}
                  onChange={e =>
                    setForm({ ...form, maritalStatus: e.target.value })
                  }
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                >
                  <option value='single'>Single</option>
                  <option value='married'>Married</option>
                  <option value='defacto'>De Facto</option>
                </select>
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Family Size
                </label>
                <input
                  type='number'
                  min='1'
                  max='10'
                  value={form.familySize}
                  onChange={e =>
                    setForm({ ...form, familySize: parseInt(e.target.value) })
                  }
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                />
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className='space-y-6'>
            <h3 className='text-xl font-bold text-gray-800'>
              Education Background
            </h3>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Highest Education Level
              </label>
              <div className='grid grid-cols-1 gap-3'>
                {educationOptions.map(option => (
                  <label
                    key={option.value}
                    className='flex items-center p-4 border border-gray-300 rounded-lg hover:border-purple-400 cursor-pointer'
                  >
                    <input
                      type='radio'
                      name='education'
                      value={option.value}
                      checked={form.education === option.value}
                      onChange={e =>
                        setForm({ ...form, education: e.target.value })
                      }
                      className='mr-3 text-purple-600'
                    />
                    <div className='flex-1'>
                      <div className='font-medium text-gray-800'>
                        {option.label}
                      </div>
                      <div className='text-sm text-gray-600'>
                        {option.points} points
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {form.maritalStatus === 'married' && (
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Spouse's Education Level
                </label>
                <select
                  value={form.spouseEducation}
                  onChange={e =>
                    setForm({ ...form, spouseEducation: e.target.value })
                  }
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                >
                  <option value=''>Select Education Level</option>
                  {educationOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        );

      case 2:
        return (
          <div className='space-y-6'>
            <h3 className='text-xl font-bold text-gray-800'>Work Experience</h3>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Years of Experience
                </label>
                <input
                  type='number'
                  min='0'
                  max='30'
                  value={form.experience}
                  onChange={e =>
                    setForm({ ...form, experience: parseInt(e.target.value) })
                  }
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                />
              </div>

              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Occupation Category
                </label>
                <select
                  value={form.occupation}
                  onChange={e =>
                    setForm({ ...form, occupation: e.target.value })
                  }
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                >
                  <option value=''>Select Occupation</option>
                  {occupationOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Do you have a job offer?
                </label>
                <div className='flex gap-4'>
                  <label className='flex items-center'>
                    <input
                      type='radio'
                      name='jobOffer'
                      checked={form.hasJobOffer === true}
                      onChange={() => setForm({ ...form, hasJobOffer: true })}
                      className='mr-2 text-purple-600'
                    />
                    Yes
                  </label>
                  <label className='flex items-center'>
                    <input
                      type='radio'
                      name='jobOffer'
                      checked={form.hasJobOffer === false}
                      onChange={() => setForm({ ...form, hasJobOffer: false })}
                      className='mr-2 text-purple-600'
                    />
                    No
                  </label>
                </div>
              </div>

              {form.hasJobOffer && (
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Annual Salary (USD)
                  </label>
                  <input
                    type='number'
                    min='0'
                    value={form.salary}
                    onChange={e =>
                      setForm({ ...form, salary: parseInt(e.target.value) })
                    }
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                  />
                </div>
              )}
            </div>
          </div>
        );

      case 3:
        return (
          <div className='space-y-6'>
            <h3 className='text-xl font-bold text-gray-800'>
              Language Proficiency
            </h3>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                English Proficiency
              </label>
              <div className='grid grid-cols-1 gap-3'>
                {languageOptions.map(option => (
                  <label
                    key={option.value}
                    className='flex items-center p-4 border border-gray-300 rounded-lg hover:border-purple-400 cursor-pointer'
                  >
                    <input
                      type='radio'
                      name='language'
                      value={option.value}
                      checked={form.language === option.value}
                      onChange={e =>
                        setForm({ ...form, language: e.target.value })
                      }
                      className='mr-3 text-purple-600'
                    />
                    <div className='flex-1'>
                      <div className='font-medium text-gray-800'>
                        {option.label}
                      </div>
                      <div className='text-sm text-gray-600'>
                        {option.points} points
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {form.maritalStatus === 'married' && (
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Spouse's Language Proficiency
                </label>
                <select
                  value={form.spouseLanguage}
                  onChange={e =>
                    setForm({ ...form, spouseLanguage: e.target.value })
                  }
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                >
                  <option value=''>Select Level</option>
                  {languageOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        );

      case 4:
        return (
          <div className='space-y-6'>
            <h3 className='text-xl font-bold text-gray-800'>
              Financial Information
            </h3>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>
                Available Funds (USD)
              </label>
              <input
                type='number'
                min='0'
                value={form.funds}
                onChange={e =>
                  setForm({ ...form, funds: parseInt(e.target.value) })
                }
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                placeholder='Settlement funds required'
              />
              <p className='mt-2 text-sm text-gray-600'>
                Minimum recommended: $20,000 for single applicant, additional
                $5,000 per family member
              </p>
            </div>

            <div className='bg-blue-50 border border-blue-200 rounded-lg p-4'>
              <h4 className='font-medium text-blue-800 mb-2'>
                Ready to Calculate?
              </h4>
              <p className='text-blue-700 text-sm'>
                Once you proceed, we'll analyze your information and provide a
                detailed assessment of your immigration prospects.
              </p>
            </div>
          </div>
        );

      case 5:
        return (
          <div className='space-y-6'>
            <AnimatePresence>
              {isCalculating ? (
                <motion.div
                  key='calculating'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className='text-center py-12'
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    className='w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full mx-auto mb-4'
                  />
                  <h3 className='text-xl font-bold text-gray-800 mb-2'>
                    Calculating Your Score...
                  </h3>
                  <p className='text-gray-600'>
                    Analyzing your profile against immigration requirements
                  </p>
                </motion.div>
              ) : (
                result && (
                  <motion.div
                    key='results'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='space-y-6'
                  >
                    {/* Overall Score */}
                    <div className='text-center bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8'>
                      <div
                        className={`inline-flex items-center justify-center w-24 h-24 rounded-full text-3xl font-bold mb-4 ${getScoreColor(result.totalScore)}`}
                      >
                        {result.totalScore}
                      </div>
                      <h3 className='text-2xl font-bold text-gray-800 mb-2'>
                        {result.category}
                      </h3>
                      <p className='text-gray-600 mb-4'>
                        Your immigration assessment score
                      </p>
                      <div className='flex items-center justify-center gap-2 text-lg'>
                        <span className='text-gray-600'>
                          Success Likelihood:
                        </span>
                        <span
                          className={`font-bold ${result.likelihood >= 70 ? 'text-green-600' : result.likelihood >= 50 ? 'text-yellow-600' : 'text-red-600'}`}
                        >
                          {result.likelihood}%
                        </span>
                      </div>
                    </div>

                    {/* Score Breakdown */}
                    <div className='bg-white border border-gray-200 rounded-xl p-6'>
                      <h4 className='font-bold text-gray-800 mb-4'>
                        Score Breakdown
                      </h4>
                      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                        {Object.entries(result.breakdown).map(
                          ([key, value]) => (
                            <div key={key} className='text-center'>
                              <div className='text-2xl font-bold text-purple-600'>
                                {value}
                              </div>
                              <div className='text-sm text-gray-600 capitalize'>
                                {key.replace(/([A-Z])/g, ' $1')}
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    {/* Recommendations */}
                    {result.recommendations.length > 0 && (
                      <div className='bg-yellow-50 border border-yellow-200 rounded-xl p-6'>
                        <h4 className='font-bold text-yellow-800 mb-3 flex items-center gap-2'>
                          <ExclamationTriangleIcon className='w-5 h-5' />
                          Recommendations to Improve Your Score
                        </h4>
                        <ul className='space-y-2'>
                          {result.recommendations.map((rec, index) => (
                            <li
                              key={index}
                              className='text-yellow-700 flex items-start gap-2'
                            >
                              <span className='text-yellow-600 mt-1'>•</span>
                              {rec}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Next Steps */}
                    <div className='bg-green-50 border border-green-200 rounded-xl p-6'>
                      <h4 className='font-bold text-green-800 mb-3 flex items-center gap-2'>
                        <CheckCircleIcon className='w-5 h-5' />
                        Your Next Steps
                      </h4>
                      <div className='space-y-3'>
                        {result.nextSteps.map((step, index) => (
                          <div key={index} className='flex items-start gap-3'>
                            <div className='w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold'>
                              {index + 1}
                            </div>
                            <span className='text-green-700'>{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Timeline and Cost */}
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                      <div className='bg-blue-50 border border-blue-200 rounded-lg p-4 text-center'>
                        <ClockIcon className='w-8 h-8 text-blue-600 mx-auto mb-2' />
                        <div className='font-bold text-blue-800'>
                          Processing Time
                        </div>
                        <div className='text-blue-700'>
                          {result.estimatedTime}
                        </div>
                      </div>

                      <div className='bg-purple-50 border border-purple-200 rounded-lg p-4 text-center'>
                        <CurrencyDollarIcon className='w-8 h-8 text-purple-600 mx-auto mb-2' />
                        <div className='font-bold text-purple-800'>
                          Estimated Cost
                        </div>
                        <div className='text-purple-700'>
                          ${result.estimatedCost.toLocaleString()}
                        </div>
                      </div>

                      <div className='bg-green-50 border border-green-200 rounded-lg p-4 text-center'>
                        <TrophyIcon className='w-8 h-8 text-green-600 mx-auto mb-2' />
                        <div className='font-bold text-green-800'>
                          Visa Options
                        </div>
                        <div className='text-green-700'>
                          {result.visaTypes.length} Available
                        </div>
                      </div>
                    </div>

                    {/* Available Visa Types */}
                    {result.visaTypes.length > 0 && (
                      <div className='bg-gray-50 rounded-xl p-6'>
                        <h4 className='font-bold text-gray-800 mb-3'>
                          Suitable Visa Types
                        </h4>
                        <div className='space-y-2'>
                          {result.visaTypes.map((visa, index) => (
                            <div
                              key={index}
                              className='flex items-center gap-2 p-3 bg-white rounded-lg'
                            >
                              <CheckCircleIcon className='w-5 h-5 text-green-600' />
                              <span className='text-gray-700'>{visa}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className='flex flex-wrap gap-4 pt-4'>
                      <button className='px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors'>
                        Book Consultation
                      </button>
                      <button className='px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors'>
                        Download Report
                      </button>
                      <button
                        onClick={() => {
                          setCurrentStep(0);
                          setResult(null);
                        }}
                        className='px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors'
                      >
                        Start Over
                      </button>
                    </div>
                  </motion.div>
                )
              )}
            </AnimatePresence>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className='bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden'
      >
        {/* Header */}
        <div className='bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-6 text-white'>
          <div className='flex items-center gap-3 mb-2'>
            <CalculatorIcon className='w-8 h-8' />
            <h2 className='text-2xl font-bold'>
              Immigration Points Calculator
            </h2>
          </div>
          <p className='text-purple-100'>
            Calculate your immigration score and discover your pathway to
            success
          </p>
        </div>

        {/* Progress Bar */}
        <div className='px-8 py-4 bg-gray-50 border-b'>
          <div className='flex items-center justify-between mb-2'>
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className='flex items-center'>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      currentStep >= index
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-200 text-gray-400'
                    }`}
                  >
                    <Icon className='w-5 h-5' />
                  </div>
                  <div className='ml-2 hidden sm:block'>
                    <div
                      className={`text-sm font-medium ${
                        currentStep >= index
                          ? 'text-purple-600'
                          : 'text-gray-400'
                      }`}
                    >
                      {step.title}
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-8 h-0.5 mx-4 ${
                        currentStep > index ? 'bg-purple-600' : 'bg-gray-200'
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className='p-8 min-h-[500px]'>{renderStep()}</div>

        {/* Navigation */}
        {currentStep < 5 && (
          <div className='px-8 py-4 bg-gray-50 border-t flex justify-between'>
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className='px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed'
            >
              Previous
            </button>

            {currentStep === 4 ? (
              <button
                onClick={handleCalculate}
                disabled={!calculateScore}
                className='px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed'
              >
                Calculate Score
              </button>
            ) : (
              <button
                onClick={nextStep}
                className='px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700'
              >
                Next
              </button>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
}
