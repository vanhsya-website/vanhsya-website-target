'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertTriangle, Award, Globe, User, FileText, GraduationCap, Briefcase, Home } from 'lucide-react';

interface Question {
  id: string;
  question: string;
  type: 'single' | 'multiple' | 'range' | 'text';
  options?: string[];
  category: 'personal' | 'education' | 'experience' | 'financial' | 'language';
}

interface Assessment {
  overall: number;
  categories: {
    personal: number;
    education: number;
    experience: number;
    financial: number;
    language: number;
  };
  recommendations: string[];
  eligiblePrograms: string[];
}

const questions: Question[] = [
  {
    id: 'age',
    question: 'What is your age?',
    type: 'range',
    category: 'personal'
  },
  {
    id: 'education',
    question: 'What is your highest level of education?',
    type: 'single',
    options: ['High School', 'Bachelor\'s Degree', 'Master\'s Degree', 'PhD/Doctorate', 'Professional Certification'],
    category: 'education'
  },
  {
    id: 'experience',
    question: 'How many years of work experience do you have?',
    type: 'range',
    category: 'experience'
  },
  {
    id: 'language',
    question: 'What is your English proficiency level?',
    type: 'single',
    options: ['Beginner', 'Intermediate', 'Advanced', 'Native/Fluent'],
    category: 'language'
  },
  {
    id: 'savings',
    question: 'What is your current savings amount (USD)?',
    type: 'single',
    options: ['Less than $10,000', '$10,000 - $25,000', '$25,000 - $50,000', '$50,000 - $100,000', 'More than $100,000'],
    category: 'financial'
  },
  {
    id: 'occupation',
    question: 'What is your current occupation?',
    type: 'single',
    options: ['Student', 'Software Engineer', 'Healthcare Professional', 'Teacher/Professor', 'Business Professional', 'Skilled Tradesperson', 'Other'],
    category: 'experience'
  }
];

const EligibilityCheckerPage: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | number>>({});
  const [isComplete, setIsComplete] = useState(false);
  const [assessment, setAssessment] = useState<Assessment | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAnswer = (questionId: string, answer: string | number) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      completeAssessment();
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const completeAssessment = () => {
    setLoading(true);
    
    // Simulate AI processing
    setTimeout(() => {
      const mockAssessment: Assessment = {
        overall: 78,
        categories: {
          personal: 85,
          education: 90,
          experience: 75,
          financial: 60,
          language: 80
        },
        recommendations: [
          'Consider improving your IELTS/TOEFL scores for better eligibility',
          'Explore skilled worker programs in Canada and Australia',
          'Consider increasing your savings for investment visa programs',
          'Look into professional certification programs to boost your profile'
        ],
        eligiblePrograms: [
          'Canada Express Entry System',
          'Australia Skilled Independent Visa',
          'UK Skilled Worker Visa',
          'Germany EU Blue Card'
        ]
      };
      
      setAssessment(mockAssessment);
      setIsComplete(true);
      setLoading(false);
    }, 2000);
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setIsComplete(false);
    setAssessment(null);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'personal': return <User className="w-6 h-6" />;
      case 'education': return <GraduationCap className="w-6 h-6" />;
      case 'experience': return <Briefcase className="w-6 h-6" />;
      case 'financial': return <Home className="w-6 h-6" />;
      case 'language': return <Globe className="w-6 h-6" />;
      default: return <FileText className="w-6 h-6" />;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBg = (score: number) => {
    if (score >= 80) return 'bg-green-100';
    if (score >= 60) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 flex items-center justify-center">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-300"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Analyzing Your Profile</h2>
          <p className="text-gray-600">Our AI is evaluating your eligibility...</p>
        </motion.div>
      </div>
    );
  }

  if (isComplete && assessment) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 py-8">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl"></div>
        </div>
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
                className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <Award className="w-12 h-12 text-blue-600" />
              </motion.div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Your Eligibility Assessment</h1>
              <div className={`text-6xl font-bold ${getScoreColor(assessment.overall)} mb-2`}>
                {assessment.overall}%
              </div>
              <p className="text-gray-600">Overall Immigration Eligibility Score</p>
            </div>

            {/* Category Breakdown */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {Object.entries(assessment.categories).map(([category, score]) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className={`p-4 rounded-xl ${getScoreBg(score)}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      {getCategoryIcon(category)}
                      <span className="font-semibold capitalize">{category}</span>
                    </div>
                    <span className={`font-bold ${getScoreColor(score)}`}>{score}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${score}%` }}
                      transition={{ delay: 0.5, duration: 1 }}
                      className={`h-2 rounded-full ${score >= 80 ? 'bg-green-500' : score >= 60 ? 'bg-yellow-500' : 'bg-red-500'}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Eligible Programs */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
                Eligible Immigration Programs
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {assessment.eligiblePrograms.map((program, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="bg-green-50 border border-green-200 rounded-lg p-4"
                  >
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="font-semibold">{program}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Recommendations */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 text-orange-600 mr-2" />
                Improvement Recommendations
              </h3>
              <div className="space-y-3">
                {assessment.recommendations.map((rec, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="bg-orange-50 border border-orange-200 rounded-lg p-4"
                  >
                    <div className="flex items-start space-x-2">
                      <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5" />
                      <span>{rec}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={resetAssessment}
                className="px-8 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Retake Assessment
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Detailed Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const currentAnswer = answers[question.id];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 py-8">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-sm font-medium text-gray-600">
                {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              />
            </div>
          </div>

          {/* Question */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  {getCategoryIcon(question.category)}
                  <h2 className="text-2xl font-bold text-gray-800">{question.question}</h2>
                </div>

                {question.type === 'single' && question.options && (
                  <div className="space-y-3">
                    {question.options.map((option, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleAnswer(question.id, option)}
                        className={`w-full p-4 text-left rounded-xl border-2 transition-colors ${
                          currentAnswer === option
                            ? 'border-blue-600 bg-blue-50 text-blue-700'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {option}
                      </motion.button>
                    ))}
                  </div>
                )}

                {question.type === 'range' && (
                  <div className="space-y-4">
                    <input
                      type="range"
                      min={question.id === 'age' ? 18 : 0}
                      max={question.id === 'age' ? 65 : 20}
                      value={currentAnswer || (question.id === 'age' ? 25 : 0)}
                      onChange={(e) => handleAnswer(question.id, parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="text-center">
                      <span className="text-2xl font-bold text-blue-600">
                        {currentAnswer || (question.id === 'age' ? 25 : 0)}
                        {question.id === 'age' ? ' years' : ' years'}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                currentQuestion === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Previous
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextQuestion}
              disabled={!currentAnswer}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                !currentAnswer
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {currentQuestion === questions.length - 1 ? 'Complete Assessment' : 'Next'}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EligibilityCheckerPage;
