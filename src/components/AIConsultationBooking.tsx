'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Zap,
  Brain,
  Video,
  FileText,
  Bot,
  Target,
} from 'lucide-react';

import { VanhsyaTheme } from '@/styles/theme';

interface ConsultationSlot {
  id: string;
  date: string;
  time: string;
  available: boolean;
  consultant: string;
  expertise: string[];
  price: number;
  duration: number;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  destination: string;
  visaType: string;
  urgency: 'normal' | 'urgent' | 'emergency';
  message: string;
  preferredSlot?: ConsultationSlot;
}

const AIConsultationBooking: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    destination: '',
    visaType: '',
    urgency: 'normal',
    message: '',
  });
  const [availableSlots, setAvailableSlots] = useState<ConsultationSlot[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<ConsultationSlot | null>(
    null
  );
  const [isProcessing, setIsProcessing] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState<string>('');

  // Mock consultation slots
  useEffect(() => {
    const mockSlots: ConsultationSlot[] = [
      {
        id: '1',
        date: '2024-01-15',
        time: '10:00 AM',
        available: true,
        consultant: 'Sarah Chen',
        expertise: ['Express Entry', 'PNP', 'Study Permits'],
        price: 150,
        duration: 60,
      },
      {
        id: '2',
        date: '2024-01-15',
        time: '2:00 PM',
        available: true,
        consultant: 'Michael Rodriguez',
        expertise: ['Business Immigration', 'Investment Visas'],
        price: 200,
        duration: 90,
      },
      {
        id: '3',
        date: '2024-01-16',
        time: '11:00 AM',
        available: true,
        consultant: 'Dr. Priya Sharma',
        expertise: ['Medical Professionals', 'UK Immigration'],
        price: 175,
        duration: 75,
      },
      {
        id: '4',
        date: '2024-01-16',
        time: '3:00 PM',
        available: false,
        consultant: 'James Wilson',
        expertise: ['Australian PR', 'Skilled Migration'],
        price: 160,
        duration: 60,
      },
      {
        id: '5',
        date: '2024-01-17',
        time: '9:00 AM',
        available: true,
        consultant: 'Emily Thompson',
        expertise: ['Family Sponsorship', 'Refugee Claims'],
        price: 140,
        duration: 60,
      },
    ];
    setAvailableSlots(mockSlots);
  }, []);

  // AI Analysis simulation
  useEffect(() => {
    if (formData.destination && formData.visaType && formData.country) {
      const timeout = setTimeout(() => {
        setAiAnalysis(
          `Based on your profile (${formData.country} → ${formData.destination}, ${formData.visaType}), our AI recommends focusing on documentation requirements and timeline optimization. Success probability: 87%`
        );
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [formData.destination, formData.visaType, formData.country]);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSlotSelect = (slot: ConsultationSlot) => {
    setSelectedSlot(slot);
    setFormData(prev => ({ ...prev, preferredSlot: slot }));
  };

  const handleSubmit = async () => {
    setIsProcessing(true);
    // Simulate booking process
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsProcessing(false);
    setCurrentStep(5); // Success step
  };

  const steps = [
    { id: 1, title: 'Personal Details', icon: User },
    { id: 2, title: 'Immigration Goals', icon: Target },
    { id: 3, title: 'AI Analysis', icon: Brain },
    { id: 4, title: 'Book Consultation', icon: Calendar },
    { id: 5, title: 'Confirmation', icon: CheckCircle },
  ];

  const urgencyColors = {
    normal: 'from-blue-500 to-cyan-600',
    urgent: 'from-orange-500 to-red-600',
    emergency: 'from-red-600 to-pink-700',
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

      <div className='relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
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
              <Bot className='w-10 h-10 text-white' />
            </motion.div>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className='p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl'
            >
              <Sparkles className='w-8 h-8 text-white' />
            </motion.div>
          </div>

          <h1
            className={`text-5xl md:text-6xl font-bold ${VanhsyaTheme.text.gradient} mb-6`}
          >
            AI-Powered Consultation
          </h1>
          <p
            className={`text-xl ${VanhsyaTheme.text.secondary} max-w-4xl mx-auto mb-8`}
          >
            Get personalized immigration advice from our AI-enhanced expert
            consultants. Book your consultation and receive instant AI analysis
            of your case.
          </p>
        </motion.div>

        {/* Progress Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className='mb-12'
        >
          <div className='flex items-center justify-center'>
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className={`flex flex-col items-center ${
                    currentStep >= step.id ? 'opacity-100' : 'opacity-50'
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                      currentStep >= step.id
                        ? `bg-gradient-to-r ${VanhsyaTheme.gradients.primary} text-white`
                        : `${VanhsyaTheme.backgrounds.glass} ${VanhsyaTheme.text.secondary}`
                    }`}
                  >
                    {currentStep > step.id ? (
                      <CheckCircle className='w-6 h-6' />
                    ) : (
                      <step.icon className='w-6 h-6' />
                    )}
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      currentStep >= step.id
                        ? VanhsyaTheme.text.primary
                        : VanhsyaTheme.text.secondary
                    }`}
                  >
                    {step.title}
                  </span>
                </motion.div>
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: currentStep > step.id ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-1 mx-4 ${
                      currentStep > step.id
                        ? `bg-gradient-to-r ${VanhsyaTheme.gradients.primary}`
                        : 'bg-gray-600'
                    } rounded-full`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* Form Content */}
        <div className='max-w-4xl mx-auto'>
          <AnimatePresence mode='wait'>
            {/* Step 1: Personal Details */}
            {currentStep === 1 && (
              <motion.div
                key='step1'
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className={`${VanhsyaTheme.backgrounds.glass} rounded-2xl p-8 border border-white/20`}
              >
                <h2
                  className={`text-3xl font-bold ${VanhsyaTheme.text.primary} mb-8`}
                >
                  Personal Information
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label
                      className={`block text-sm font-medium ${VanhsyaTheme.text.primary} mb-2`}
                    >
                      Full Name *
                    </label>
                    <input
                      type='text'
                      value={formData.fullName}
                      onChange={e =>
                        handleInputChange('fullName', e.target.value)
                      }
                      className={`w-full p-4 ${VanhsyaTheme.backgrounds.glass} border border-white/20 rounded-xl ${VanhsyaTheme.text.primary} placeholder-gray-400 focus:outline-none focus:border-violet-500 transition-colors`}
                      placeholder='Enter your full name'
                    />
                  </div>

                  <div>
                    <label
                      className={`block text-sm font-medium ${VanhsyaTheme.text.primary} mb-2`}
                    >
                      Email Address *
                    </label>
                    <input
                      type='email'
                      value={formData.email}
                      onChange={e => handleInputChange('email', e.target.value)}
                      className={`w-full p-4 ${VanhsyaTheme.backgrounds.glass} border border-white/20 rounded-xl ${VanhsyaTheme.text.primary} placeholder-gray-400 focus:outline-none focus:border-violet-500 transition-colors`}
                      placeholder='your.email@example.com'
                    />
                  </div>

                  <div>
                    <label
                      className={`block text-sm font-medium ${VanhsyaTheme.text.primary} mb-2`}
                    >
                      Phone Number *
                    </label>
                    <input
                      type='tel'
                      value={formData.phone}
                      onChange={e => handleInputChange('phone', e.target.value)}
                      className={`w-full p-4 ${VanhsyaTheme.backgrounds.glass} border border-white/20 rounded-xl ${VanhsyaTheme.text.primary} placeholder-gray-400 focus:outline-none focus:border-violet-500 transition-colors`}
                      placeholder='+1 (555) 123-4567'
                    />
                  </div>

                  <div>
                    <label
                      className={`block text-sm font-medium ${VanhsyaTheme.text.primary} mb-2`}
                    >
                      Current Country *
                    </label>
                    <select
                      value={formData.country}
                      onChange={e =>
                        handleInputChange('country', e.target.value)
                      }
                      className={`w-full p-4 ${VanhsyaTheme.backgrounds.glass} border border-white/20 rounded-xl ${VanhsyaTheme.text.primary} focus:outline-none focus:border-violet-500 transition-colors`}
                    >
                      <option value=''>Select your country</option>
                      <option value='India'>India</option>
                      <option value='China'>China</option>
                      <option value='Philippines'>Philippines</option>
                      <option value='Nigeria'>Nigeria</option>
                      <option value='Pakistan'>Pakistan</option>
                      <option value='Other'>Other</option>
                    </select>
                  </div>
                </div>

                <div className='flex justify-end mt-8'>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleNext}
                    disabled={
                      !formData.fullName ||
                      !formData.email ||
                      !formData.phone ||
                      !formData.country
                    }
                    className={`flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${VanhsyaTheme.gradients.primary} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    Continue
                    <ArrowRight className='w-5 h-5' />
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Immigration Goals */}
            {currentStep === 2 && (
              <motion.div
                key='step2'
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className={`${VanhsyaTheme.backgrounds.glass} rounded-2xl p-8 border border-white/20`}
              >
                <h2
                  className={`text-3xl font-bold ${VanhsyaTheme.text.primary} mb-8`}
                >
                  Immigration Goals
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                  <div>
                    <label
                      className={`block text-sm font-medium ${VanhsyaTheme.text.primary} mb-2`}
                    >
                      Destination Country *
                    </label>
                    <select
                      value={formData.destination}
                      onChange={e =>
                        handleInputChange('destination', e.target.value)
                      }
                      className={`w-full p-4 ${VanhsyaTheme.backgrounds.glass} border border-white/20 rounded-xl ${VanhsyaTheme.text.primary} focus:outline-none focus:border-violet-500 transition-colors`}
                    >
                      <option value=''>Select destination</option>
                      <option value='Canada'>Canada</option>
                      <option value='Australia'>Australia</option>
                      <option value='United Kingdom'>United Kingdom</option>
                      <option value='Germany'>Germany</option>
                      <option value='USA'>United States</option>
                      <option value='New Zealand'>New Zealand</option>
                    </select>
                  </div>

                  <div>
                    <label
                      className={`block text-sm font-medium ${VanhsyaTheme.text.primary} mb-2`}
                    >
                      Visa Type *
                    </label>
                    <select
                      value={formData.visaType}
                      onChange={e =>
                        handleInputChange('visaType', e.target.value)
                      }
                      className={`w-full p-4 ${VanhsyaTheme.backgrounds.glass} border border-white/20 rounded-xl ${VanhsyaTheme.text.primary} focus:outline-none focus:border-violet-500 transition-colors`}
                    >
                      <option value=''>Select visa type</option>
                      <option value='Skilled Worker'>Skilled Worker</option>
                      <option value='Business/Investment'>
                        Business/Investment
                      </option>
                      <option value='Family Sponsorship'>
                        Family Sponsorship
                      </option>
                      <option value='Student Visa'>Student Visa</option>
                      <option value='Express Entry'>Express Entry</option>
                      <option value='Provincial Nominee'>
                        Provincial Nominee
                      </option>
                    </select>
                  </div>
                </div>

                <div className='mb-6'>
                  <label
                    className={`block text-sm font-medium ${VanhsyaTheme.text.primary} mb-2`}
                  >
                    Urgency Level
                  </label>
                  <div className='grid grid-cols-3 gap-4'>
                    {[
                      {
                        value: 'normal',
                        label: 'Normal',
                        desc: 'Standard processing',
                      },
                      {
                        value: 'urgent',
                        label: 'Urgent',
                        desc: 'Need faster processing',
                      },
                      {
                        value: 'emergency',
                        label: 'Emergency',
                        desc: 'Immediate attention',
                      },
                    ].map(option => (
                      <motion.button
                        key={option.value}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() =>
                          handleInputChange('urgency', option.value)
                        }
                        className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                          formData.urgency === option.value
                            ? `border-violet-500 bg-gradient-to-r ${urgencyColors[option.value as keyof typeof urgencyColors]} text-white`
                            : `border-white/20 ${VanhsyaTheme.backgrounds.glass} ${VanhsyaTheme.text.primary} hover:border-white/40`
                        }`}
                      >
                        <div className='font-semibold'>{option.label}</div>
                        <div className='text-sm opacity-80'>{option.desc}</div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                <div className='mb-8'>
                  <label
                    className={`block text-sm font-medium ${VanhsyaTheme.text.primary} mb-2`}
                  >
                    Additional Information
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={e => handleInputChange('message', e.target.value)}
                    rows={4}
                    className={`w-full p-4 ${VanhsyaTheme.backgrounds.glass} border border-white/20 rounded-xl ${VanhsyaTheme.text.primary} placeholder-gray-400 focus:outline-none focus:border-violet-500 transition-colors resize-none`}
                    placeholder='Tell us more about your specific situation, timeline, or any concerns...'
                  />
                </div>

                <div className='flex justify-between'>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleBack}
                    className={`px-8 py-4 ${VanhsyaTheme.backgrounds.glass} border border-white/20 ${VanhsyaTheme.text.primary} font-semibold rounded-xl hover:bg-white/20 transition-all duration-300`}
                  >
                    Back
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleNext}
                    disabled={!formData.destination || !formData.visaType}
                    className={`flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${VanhsyaTheme.gradients.primary} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    Continue
                    <ArrowRight className='w-5 h-5' />
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* Step 3: AI Analysis */}
            {currentStep === 3 && (
              <motion.div
                key='step3'
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className={`${VanhsyaTheme.backgrounds.glass} rounded-2xl p-8 border border-white/20`}
              >
                <h2
                  className={`text-3xl font-bold ${VanhsyaTheme.text.primary} mb-8`}
                >
                  AI Case Analysis
                </h2>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                  {/* AI Analysis Results */}
                  <div className='space-y-6'>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`${VanhsyaTheme.backgrounds.glass} rounded-xl p-6 border border-white/20`}
                    >
                      <div className='flex items-center gap-3 mb-4'>
                        <Brain className='w-6 h-6 text-violet-400' />
                        <h3
                          className={`text-xl font-bold ${VanhsyaTheme.text.primary}`}
                        >
                          AI Recommendation
                        </h3>
                      </div>
                      {aiAnalysis ? (
                        <p className={VanhsyaTheme.text.secondary}>
                          {aiAnalysis}
                        </p>
                      ) : (
                        <div className='flex items-center gap-2'>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: 'linear',
                            }}
                          >
                            <Zap className='w-5 h-5 text-violet-400' />
                          </motion.div>
                          <span className={VanhsyaTheme.text.secondary}>
                            Analyzing your case...
                          </span>
                        </div>
                      )}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className='grid grid-cols-2 gap-4'
                    >
                      <div
                        className={`${VanhsyaTheme.backgrounds.glass} rounded-xl p-4 border border-white/20`}
                      >
                        <div className='flex items-center gap-2 mb-2'>
                          <Target className='w-5 h-5 text-green-400' />
                          <span
                            className={`font-semibold ${VanhsyaTheme.text.primary}`}
                          >
                            Success Rate
                          </span>
                        </div>
                        <div className='text-2xl font-bold text-green-400'>
                          87%
                        </div>
                      </div>
                      <div
                        className={`${VanhsyaTheme.backgrounds.glass} rounded-xl p-4 border border-white/20`}
                      >
                        <div className='flex items-center gap-2 mb-2'>
                          <Clock className='w-5 h-5 text-blue-400' />
                          <span
                            className={`font-semibold ${VanhsyaTheme.text.primary}`}
                          >
                            Est. Timeline
                          </span>
                        </div>
                        <div className='text-2xl font-bold text-blue-400'>
                          6-8 mo
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Recommended Actions */}
                  <div>
                    <h3
                      className={`text-xl font-bold ${VanhsyaTheme.text.primary} mb-4`}
                    >
                      Recommended Next Steps
                    </h3>
                    <div className='space-y-3'>
                      {[
                        'Complete language proficiency test',
                        'Gather education credentials',
                        'Obtain work experience letters',
                        'Prepare financial documentation',
                        'Schedule consultation for strategy',
                      ].map((step, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          className={`flex items-center gap-3 p-3 ${VanhsyaTheme.backgrounds.glass} rounded-lg border border-white/20`}
                        >
                          <CheckCircle className='w-5 h-5 text-green-400 flex-shrink-0' />
                          <span className={VanhsyaTheme.text.primary}>
                            {step}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className='flex justify-between mt-8'>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleBack}
                    className={`px-8 py-4 ${VanhsyaTheme.backgrounds.glass} border border-white/20 ${VanhsyaTheme.text.primary} font-semibold rounded-xl hover:bg-white/20 transition-all duration-300`}
                  >
                    Back
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleNext}
                    className={`flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${VanhsyaTheme.gradients.primary} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300`}
                  >
                    Book Consultation
                    <ArrowRight className='w-5 h-5' />
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Book Consultation */}
            {currentStep === 4 && (
              <motion.div
                key='step4'
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className={`${VanhsyaTheme.backgrounds.glass} rounded-2xl p-8 border border-white/20`}
              >
                <h2
                  className={`text-3xl font-bold ${VanhsyaTheme.text.primary} mb-8`}
                >
                  Choose Your Consultation Slot
                </h2>

                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8'>
                  {availableSlots.map(slot => (
                    <motion.div
                      key={slot.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: slot.available ? 1.02 : 1 }}
                      className={`cursor-pointer transition-all duration-300 ${
                        !slot.available
                          ? 'opacity-50 cursor-not-allowed'
                          : selectedSlot?.id === slot.id
                            ? `border-2 border-violet-500 ${VanhsyaTheme.effects.glow}`
                            : 'border border-white/20 hover:border-white/40'
                      } ${VanhsyaTheme.backgrounds.glass} rounded-xl p-6`}
                      onClick={() => slot.available && handleSlotSelect(slot)}
                    >
                      <div className='flex items-center justify-between mb-4'>
                        <div className='flex items-center gap-2'>
                          <Calendar className='w-5 h-5 text-violet-400' />
                          <span
                            className={`font-semibold ${VanhsyaTheme.text.primary}`}
                          >
                            {new Date(slot.date).toLocaleDateString('en-US', {
                              weekday: 'short',
                              month: 'short',
                              day: 'numeric',
                            })}
                          </span>
                        </div>
                        <div className='flex items-center gap-2'>
                          <Clock className='w-4 h-4 text-blue-400' />
                          <span className={VanhsyaTheme.text.secondary}>
                            {slot.time}
                          </span>
                        </div>
                      </div>

                      <div
                        className={`font-bold ${VanhsyaTheme.text.primary} mb-2`}
                      >
                        {slot.consultant}
                      </div>

                      <div className='flex flex-wrap gap-1 mb-4'>
                        {slot.expertise.slice(0, 2).map((exp, index) => (
                          <span
                            key={index}
                            className='px-2 py-1 text-xs bg-violet-500/20 text-violet-300 rounded-md'
                          >
                            {exp}
                          </span>
                        ))}
                        {slot.expertise.length > 2 && (
                          <span className='px-2 py-1 text-xs bg-gray-500/20 text-gray-300 rounded-md'>
                            +{slot.expertise.length - 2} more
                          </span>
                        )}
                      </div>

                      <div className='flex items-center justify-between'>
                        <div>
                          <span
                            className={`text-2xl font-bold ${VanhsyaTheme.text.primary}`}
                          >
                            ${slot.price}
                          </span>
                          <span
                            className={`text-sm ${VanhsyaTheme.text.secondary} ml-1`}
                          >
                            / {slot.duration}min
                          </span>
                        </div>
                        {!slot.available && (
                          <span className='text-sm text-red-400 font-medium'>
                            Booked
                          </span>
                        )}
                        {selectedSlot?.id === slot.id && (
                          <CheckCircle className='w-6 h-6 text-green-400' />
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className='flex justify-between'>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleBack}
                    className={`px-8 py-4 ${VanhsyaTheme.backgrounds.glass} border border-white/20 ${VanhsyaTheme.text.primary} font-semibold rounded-xl hover:bg-white/20 transition-all duration-300`}
                  >
                    Back
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSubmit}
                    disabled={!selectedSlot || isProcessing}
                    className={`flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${VanhsyaTheme.gradients.primary} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {isProcessing ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                        >
                          <Zap className='w-5 h-5' />
                        </motion.div>
                        Processing...
                      </>
                    ) : (
                      <>
                        Confirm Booking
                        <ArrowRight className='w-5 h-5' />
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* Step 5: Confirmation */}
            {currentStep === 5 && (
              <motion.div
                key='step5'
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`${VanhsyaTheme.backgrounds.glass} rounded-2xl p-8 border border-white/20 text-center`}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className='mb-8'
                >
                  <div
                    className={`w-24 h-24 mx-auto bg-gradient-to-r ${VanhsyaTheme.gradients.primary} rounded-full flex items-center justify-center mb-6`}
                  >
                    <CheckCircle className='w-12 h-12 text-white' />
                  </div>
                  <h2
                    className={`text-4xl font-bold ${VanhsyaTheme.text.primary} mb-4`}
                  >
                    Booking Confirmed!
                  </h2>
                  <p className={`text-xl ${VanhsyaTheme.text.secondary} mb-8`}>
                    Your consultation has been successfully booked. You'll
                    receive a confirmation email shortly.
                  </p>
                </motion.div>

                {selectedSlot && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className={`${VanhsyaTheme.backgrounds.glass} rounded-xl p-6 border border-white/20 mb-8`}
                  >
                    <h3
                      className={`text-xl font-bold ${VanhsyaTheme.text.primary} mb-4`}
                    >
                      Consultation Details
                    </h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-left'>
                      <div>
                        <span
                          className={`${VanhsyaTheme.text.secondary} block`}
                        >
                          Consultant
                        </span>
                        <span
                          className={`font-semibold ${VanhsyaTheme.text.primary}`}
                        >
                          {selectedSlot.consultant}
                        </span>
                      </div>
                      <div>
                        <span
                          className={`${VanhsyaTheme.text.secondary} block`}
                        >
                          Date & Time
                        </span>
                        <span
                          className={`font-semibold ${VanhsyaTheme.text.primary}`}
                        >
                          {new Date(selectedSlot.date).toLocaleDateString()} at{' '}
                          {selectedSlot.time}
                        </span>
                      </div>
                      <div>
                        <span
                          className={`${VanhsyaTheme.text.secondary} block`}
                        >
                          Duration
                        </span>
                        <span
                          className={`font-semibold ${VanhsyaTheme.text.primary}`}
                        >
                          {selectedSlot.duration} minutes
                        </span>
                      </div>
                      <div>
                        <span
                          className={`${VanhsyaTheme.text.secondary} block`}
                        >
                          Total Cost
                        </span>
                        <span
                          className={`font-semibold ${VanhsyaTheme.text.primary}`}
                        >
                          ${selectedSlot.price}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${VanhsyaTheme.gradients.primary} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300`}
                  >
                    <Video className='w-5 h-5' />
                    Join Video Call
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-2 px-8 py-4 ${VanhsyaTheme.backgrounds.glass} border border-white/20 ${VanhsyaTheme.text.primary} font-semibold rounded-xl hover:bg-white/20 transition-all duration-300`}
                  >
                    <FileText className='w-5 h-5' />
                    Download Receipt
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AIConsultationBooking;
