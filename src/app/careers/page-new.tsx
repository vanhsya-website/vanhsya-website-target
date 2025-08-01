'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import {
  BriefcaseIcon,
  MapPinIcon,
  ClockIcon,
  UsersIcon,
  GlobeAmericasIcon,
  HeartIcon,
  AcademicCapIcon,
  RocketLaunchIcon,
  StarIcon,
  EnvelopeIcon,
  BuildingOfficeIcon,
  TrophyIcon,
  SparklesIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

const jobPositions = [
  {
    id: '1',
    title: 'Immigration Consultant',
    department: 'Client Services',
    location: 'Dubai, UAE / Remote',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Provide expert immigration guidance to clients while working with our AI tools to deliver exceptional service. Help shape the future of immigration consulting.',
    requirements: [
      'RCIC license or equivalent immigration credentials',
      '3+ years immigration consulting experience',
      'Knowledge of Canadian and international immigration law',
      'Excellent communication and client service skills',
      'Comfortable working with technology and AI tools',
      'Fluency in English and one additional language preferred',
    ],
    responsibilities: [
      'Provide immigration consultation to clients',
      'Work with AI tools to enhance service delivery',
      'Prepare and review immigration applications',
      'Conduct client assessments and strategy sessions',
      'Stay updated on immigration policy changes',
      'Provide feedback on AI system improvements',
    ],
    benefits: [
      'Competitive benefits package',
      'Health and wellness benefits',
      'Professional development opportunities',
      'Flexible working hours',
      'Technology and home office allowance',
      'Immigration law training and certification support',
    ],
    status: 'Coming Soon',
    featured: true,
  },
  {
    id: '2',
    title: 'Processing Manager',
    department: 'Operations',
    location: 'Dubai, UAE',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Lead and manage the immigration processing team, ensuring efficient and accurate handling of client applications while maintaining high service standards.',
    requirements: [
      'Bachelor\'s degree in Business Administration or related field',
      '5+ years experience in immigration processing or operations',
      'Strong leadership and team management skills',
      'Knowledge of immigration procedures and documentation',
      'Excellent organizational and analytical skills',
      'Experience with process improvement and quality assurance',
    ],
    responsibilities: [
      'Manage and supervise processing team',
      'Ensure quality and accuracy of all applications',
      'Develop and implement processing procedures',
      'Monitor team performance and productivity',
      'Coordinate with consultants and clients',
      'Maintain compliance with regulatory requirements',
    ],
    benefits: [
      'Leadership development opportunities',
      'Comprehensive benefits package',
      'Performance-based incentives',
      'Professional training programs',
      'Health and wellness coverage',
      'Career advancement paths',
    ],
    status: 'Coming Soon',
  },
  {
    id: '3',
    title: 'Case Officer',
    department: 'Case Management',
    location: 'Dubai, UAE / Remote',
    type: 'Full-time',
    experience: '2+ years',
    description: 'Manage individual client cases from start to finish, ensuring all documentation is complete and applications are processed efficiently and accurately.',
    requirements: [
      'Diploma or Bachelor\'s degree in relevant field',
      '2+ years experience in case management or client services',
      'Strong attention to detail and organizational skills',
      'Knowledge of immigration documentation',
      'Excellent written and verbal communication skills',
      'Proficiency in case management software',
    ],
    responsibilities: [
      'Manage client cases and documentation',
      'Ensure completeness and accuracy of applications',
      'Communicate with clients regarding case status',
      'Coordinate with government agencies',
      'Maintain detailed case records',
      'Support senior consultants as needed',
    ],
    benefits: [
      'Growth-oriented environment',
      'Training and certification support',
      'Flexible work arrangements',
      'Health benefits',
      'Career development programs',
      'Team building activities',
    ],
    status: 'Stay Tuned',
  },
  {
    id: '4',
    title: 'Senior Cross Sell Manager',
    department: 'Sales & Business Development',
    location: 'Dubai, UAE',
    type: 'Full-time',
    experience: '6+ years',
    description: 'Drive revenue growth through strategic cross-selling initiatives, identifying opportunities to expand services with existing clients and develop new business relationships.',
    requirements: [
      'Bachelor\'s degree in Business, Marketing, or related field',
      '6+ years experience in sales and business development',
      'Proven track record in cross-selling and upselling',
      'Strong relationship building and networking skills',
      'Knowledge of immigration services industry preferred',
      'Excellent presentation and negotiation skills',
    ],
    responsibilities: [
      'Develop and execute cross-selling strategies',
      'Identify opportunities with existing clients',
      'Build and maintain client relationships',
      'Collaborate with service delivery teams',
      'Analyze market trends and opportunities',
      'Achieve revenue and growth targets',
    ],
    benefits: [
      'Competitive package with incentives',
      'Leadership opportunities',
      'International business exposure',
      'Professional development budget',
      'Health and wellness programs',
      'Performance recognition programs',
    ],
    status: 'Stay Tuned',
  },
];

const companyStats = [
  { value: '0', label: 'Happy Clients', icon: TrophyIcon },
  { value: '25+', label: 'Expert Team', icon: UsersIcon },
  { value: '15+', label: 'Countries Served', icon: GlobeAmericasIcon },
  { value: '5+', label: 'Years Experience', icon: StarIcon },
];

const companyValues = [
  {
    title: 'Innovation First',
    description: 'We embrace cutting-edge technology to revolutionize immigration services.',
    icon: RocketLaunchIcon,
  },
  {
    title: 'Client Success',
    description: 'Your success is our mission. We are committed to achieving your immigration goals.',
    icon: HeartIcon,
  },
  {
    title: 'Global Impact',
    description: 'We believe in breaking down barriers and connecting people across borders.',
    icon: GlobeAmericasIcon,
  },
  {
    title: 'Continuous Learning',
    description: 'We foster a culture of curiosity, growth, and intellectual development.',
    icon: AcademicCapIcon,
  },
];

// Job Card Component
function JobCard({ job, index }: { job: typeof jobPositions[0]; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-6 hover:border-neutral-700/50 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl font-bold text-white">{job.title}</h3>
            {job.featured && (
              <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-violet-500 text-white text-xs font-medium rounded-full">
                Featured
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-neutral-400 mb-3">
            <div className="flex items-center gap-1">
              <BuildingOfficeIcon className="w-4 h-4" />
              <span>{job.department}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPinIcon className="w-4 h-4" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <ClockIcon className="w-4 h-4" />
              <span>{job.type}</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <span className={`px-4 py-2 rounded-full text-sm font-medium ${
            job.status === 'Coming Soon' 
              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
              : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
          }`}>
            {job.status}
          </span>
        </div>
      </div>

      <p className="text-neutral-300 mb-4 leading-relaxed">{job.description}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-neutral-400">
          <span>Experience: {job.experience}</span>
        </div>
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white rounded-xl transition-all duration-300"
        >
          <span>{isExpanded ? 'Show Less' : 'Learn More'}</span>
          <ArrowRightIcon className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
        </motion.button>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-6 pt-6 border-t border-neutral-700/50"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-white font-semibold mb-3">Requirements</h4>
              <ul className="space-y-2">
                {job.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-neutral-400">
                    <CheckCircleIcon className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Responsibilities</h4>
              <ul className="space-y-2">
                {job.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-neutral-400">
                    <CheckCircleIcon className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Benefits</h4>
              <ul className="space-y-2">
                {job.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-neutral-400">
                    <CheckCircleIcon className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-neutral-700/50">
            <motion.a
              href={`mailto:careers@vanhsya.com?subject=Application for ${job.title}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-medium rounded-xl transition-all duration-300"
            >
              <EnvelopeIcon className="w-5 h-5" />
              Apply for this Position
            </motion.a>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default function CareersPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div
      ref={containerRef}
      className='min-h-screen bg-gradient-to-b from-neutral-950 to-neutral-900 text-white'
    >
      {/* Animated Background */}
      <motion.div
        style={{ y: backgroundY }}
        className='absolute inset-0 overflow-hidden'
      >
        <div className='absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 rounded-full blur-3xl' />
        <div className='absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-emerald-600/10 to-cyan-600/10 rounded-full blur-3xl' />
      </motion.div>

      {/* Floating Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        {Array.from({ length: 15 }, (_, i) => (
          <motion.div
            key={i}
            className='absolute w-2 h-2 bg-purple-400/20 rounded-full'
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative z-10'>
        {/* Hero Section */}
        <div className='text-center max-w-4xl mx-auto mb-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 text-purple-300 font-medium text-sm mb-6'
          >
            <BriefcaseIcon className='w-4 h-4' />
            Join Our Team
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6'
          >
            Build the Future of
            <span className='block bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent'>
              Immigration Services
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='text-xl text-neutral-300 leading-relaxed mb-8'
          >
            Join our mission to transform the immigration industry with AI-powered solutions. Help millions of people achieve their dreams of living in their ideal country.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className='flex flex-wrap justify-center gap-6 mb-12'
          >
            <motion.a
              href='#positions'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white font-medium rounded-xl transition-all duration-300'
            >
              <BriefcaseIcon className='w-5 h-5' />
              View Open Positions
            </motion.a>
            <motion.a
              href='mailto:careers@vanhsya.com'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 hover:border-neutral-700/50 text-white font-medium rounded-xl transition-all duration-300'
            >
              <EnvelopeIcon className='w-5 h-5' />
              careers@vanhsya.com
            </motion.a>
          </motion.div>
        </div>

        {/* Company Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-16'
        >
          {companyStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className='text-center bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-6'
            >
              <div className='w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl flex items-center justify-center mx-auto mb-4'>
                <stat.icon className='w-6 h-6 text-white' />
              </div>
              <div className='text-3xl font-bold text-white mb-2'>{stat.value}</div>
              <div className='text-neutral-400 text-sm'>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className='mb-16'
        >
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>Our Values</h2>
            <p className='text-xl text-neutral-300'>
              The principles that guide everything we do
            </p>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className='bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-6 text-center hover:border-neutral-700/50 transition-all duration-300'
              >
                <div className='w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4'>
                  <value.icon className='w-6 h-6 text-white' />
                </div>
                <h3 className='text-xl font-bold text-white mb-3'>{value.title}</h3>
                <p className='text-neutral-400'>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Job Positions */}
        <motion.div
          id="positions"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>Open Positions</h2>
            <p className='text-xl text-neutral-300'>
              Find your next career opportunity with us
            </p>
          </div>

          <div className='space-y-6'>
            {jobPositions.map((job, index) => (
              <JobCard key={job.id} job={job} index={index} />
            ))}
          </div>

          {/* Contact for Other Opportunities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.4 }}
            className='mt-12 text-center bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-8'
          >
            <h3 className='text-2xl font-bold text-white mb-4'>Don't See Your Role?</h3>
            <p className='text-neutral-300 mb-6'>
              We're always looking for talented individuals to join our team. Send us your resume and tell us how you can contribute to our mission.
            </p>
            <motion.a
              href='mailto:careers@vanhsya.com?subject=General Application'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium rounded-xl transition-all duration-300'
            >
              <EnvelopeIcon className='w-5 h-5' />
              Send Your Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
