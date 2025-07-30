'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Star,
  Users,
  CheckCircle,
  Award,
  Globe,
  TrendingUp,
} from 'lucide-react';

import BackNavigation from '@/components/BackNavigation';
import Footer from '@/components/Footer';

const ProgramsPage = () => {
  const [selectedTab, setSelectedTab] = useState('all');

  const programs = [
    {
      id: 1,
      title: 'Express Entry Program',
      category: 'permanent',
      description: 'Fast-track permanent residence program for skilled workers',
      successRate: '94%',
      processingTime: '6-8 months',
      eligibilityScore: '67+ CRS points',
      participants: '1,200+',
      features: [
        'Comprehensive profile assessment',
        'Document preparation assistance',
        'Language test preparation',
        'Job offer assistance',
      ],
    },
    {
      id: 2,
      title: 'Provincial Nominee Program',
      category: 'permanent',
      description: 'Province-specific immigration pathway',
      successRate: '91%',
      processingTime: '8-12 months',
      eligibilityScore: 'Province specific',
      participants: '800+',
      features: [
        'Province selection guidance',
        'Nomination certificate assistance',
        'Application submission support',
        'Settlement planning',
      ],
    },
    {
      id: 3,
      title: 'Student Visa Program',
      category: 'temporary',
      description: 'Study permit for international students',
      successRate: '88%',
      processingTime: '4-6 weeks',
      eligibilityScore: 'Letter of acceptance',
      participants: '2,100+',
      features: [
        'Institution selection',
        'Application preparation',
        'Financial documentation',
        'Study permit processing',
      ],
    },
    {
      id: 4,
      title: 'Work Permit Program',
      category: 'temporary',
      description: 'Temporary work authorization',
      successRate: '85%',
      processingTime: '2-4 weeks',
      eligibilityScore: 'Job offer required',
      participants: '950+',
      features: [
        'Job market analysis',
        'Work permit application',
        'LMIA support',
        'Employer liaison',
      ],
    },
  ];

  const filteredPrograms =
    selectedTab === 'all'
      ? programs
      : programs.filter(program => program.category === selectedTab);

  const tabVariants = {
    inactive: { opacity: 0.6, scale: 0.95 },
    active: { opacity: 1, scale: 1 },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100'>
      <BackNavigation />

      <main className='pt-32 pb-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center mb-16'
          >
            <h1 className='text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6'>
              Immigration Programs
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
              Comprehensive immigration solutions designed to help you achieve
              your Canadian dreams. Choose from our proven programs with
              exceptional success rates.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className='flex flex-wrap justify-center gap-4 mb-12'
          >
            {[
              { key: 'all', label: 'All Programs', icon: Globe },
              { key: 'permanent', label: 'Permanent Residence', icon: Award },
              { key: 'temporary', label: 'Temporary Status', icon: Users },
            ].map(({ key, label, icon: Icon }) => (
              <motion.button
                key={key}
                variants={tabVariants}
                animate={selectedTab === key ? 'active' : 'inactive'}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedTab(key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedTab === key
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-blue-50 shadow-md'
                }`}
              >
                <Icon size={18} />
                {label}
              </motion.button>
            ))}
          </motion.div>

          {/* Programs Grid */}
          <motion.div
            className='grid md:grid-cols-2 gap-8'
            initial='hidden'
            animate='visible'
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {filteredPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                variants={cardVariants}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100'
              >
                <div className='flex justify-between items-start mb-6'>
                  <div>
                    <h3 className='text-2xl font-bold text-gray-800 mb-2'>
                      {program.title}
                    </h3>
                    <p className='text-gray-600 leading-relaxed'>
                      {program.description}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      program.category === 'permanent'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {program.category === 'permanent'
                      ? 'Permanent'
                      : 'Temporary'}
                  </span>
                </div>

                {/* Stats Row */}
                <div className='grid grid-cols-2 gap-4 mb-6'>
                  <div className='bg-green-50 rounded-lg p-4 text-center'>
                    <div className='flex items-center justify-center gap-2 mb-1'>
                      <Star className='text-green-600' size={18} />
                      <span className='text-2xl font-bold text-green-600'>
                        {program.successRate}
                      </span>
                    </div>
                    <p className='text-sm text-gray-600'>Success Rate</p>
                  </div>

                  <div className='bg-blue-50 rounded-lg p-4 text-center'>
                    <div className='flex items-center justify-center gap-2 mb-1'>
                      <Users className='text-blue-600' size={18} />
                      <span className='text-lg font-bold text-blue-600'>
                        {program.participants}
                      </span>
                    </div>
                    <p className='text-sm text-gray-600'>Participants</p>
                  </div>
                </div>

                {/* Program Details */}
                <div className='space-y-3 mb-6'>
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>Processing Time:</span>
                    <span className='font-semibold text-gray-800'>
                      {program.processingTime}
                    </span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-600'>Eligibility:</span>
                    <span className='font-semibold text-gray-800'>
                      {program.eligibilityScore}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className='space-y-2 mb-6'>
                  <h4 className='font-semibold text-gray-800 mb-3'>
                    Program Features:
                  </h4>
                  {program.features.map((feature, idx) => (
                    <div key={idx} className='flex items-center gap-2'>
                      <CheckCircle
                        className='text-green-500 flex-shrink-0'
                        size={16}
                      />
                      <span className='text-gray-600 text-sm'>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className='w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg'
                >
                  Learn More & Apply
                </motion.button>
              </motion.div>
            ))}
          </motion.div>

          {/* Success Metrics Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className='mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white'
          >
            <div className='text-center mb-8'>
              <h2 className='text-3xl font-bold mb-4'>Our Program Success</h2>
              <p className='text-blue-100 max-w-2xl mx-auto'>
                Proven results across all our immigration programs with
                industry-leading success rates
              </p>
            </div>

            <div className='grid md:grid-cols-4 gap-6'>
              {[
                {
                  metric: '5,000+',
                  label: 'Successful Applications',
                  icon: CheckCircle,
                },
                {
                  metric: '91%',
                  label: 'Average Success Rate',
                  icon: TrendingUp,
                },
                { metric: '120+', label: 'Countries Served', icon: Globe },
                { metric: '15+', label: 'Years Experience', icon: Award },
              ].map(({ metric, label, icon: Icon }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  className='text-center'
                >
                  <Icon className='mx-auto mb-3 text-white' size={32} />
                  <div className='text-3xl font-bold mb-1'>{metric}</div>
                  <div className='text-blue-100 text-sm'>{label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className='text-center mt-16'
          >
            <h2 className='text-3xl font-bold text-gray-800 mb-4'>
              Ready to Start Your Journey?
            </h2>
            <p className='text-gray-600 mb-8 max-w-2xl mx-auto'>
              Get personalized guidance from our immigration experts and choose
              the program that best fits your goals and qualifications.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='inline-block'
            >
              <button className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg'>
                Get Free Consultation
              </button>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProgramsPage;
