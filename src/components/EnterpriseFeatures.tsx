'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Brain,
  Shield,
  Users,
  Clock,
  Globe,
  CheckCircle,
  ArrowRight,
  Zap,
  Award,
  TrendingUp,
  Lock,
} from 'lucide-react';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  benefits: string[];
  color: string;
  gradient: string;
}

interface EnterpriseFeaturesProps {
  className?: string;
}

const EnterpriseFeatures: React.FC<EnterpriseFeaturesProps> = ({
  className = '',
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features: Feature[] = [
    {
      icon: Brain,
      title: 'AI-Powered Guidance',
      description:
        'Advanced artificial intelligence analyzes your profile and provides personalized immigration strategies.',
      benefits: [
        'Smart eligibility assessment',
        'Personalized pathway recommendations',
        'Real-time document verification',
        '24/7 intelligent support',
      ],
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Shield,
      title: 'Secure & Compliant',
      description:
        'Bank-grade security ensures your sensitive information is protected throughout the process.',
      benefits: [
        'End-to-end encryption',
        'GDPR & SOC2 compliant',
        'Secure document storage',
        'Privacy-first approach',
      ],
      color: 'green',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Users,
      title: 'Expert Support Team',
      description:
        'Licensed immigration consultants and lawyers provide professional guidance at every step.',
      benefits: [
        'RCIC certified consultants',
        'Multi-language support',
        'Dedicated case managers',
        'Legal representation',
      ],
      color: 'purple',
      gradient: 'from-purple-500 to-violet-500',
    },
    {
      icon: Clock,
      title: 'Faster Processing',
      description:
        'Streamlined workflows and automated systems reduce processing time by up to 60%.',
      benefits: [
        '60% faster than traditional methods',
        'Automated document preparation',
        'Real-time status tracking',
        'Priority queue access',
      ],
      color: 'orange',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description:
        'Comprehensive immigration services for 195+ countries and territories worldwide.',
      benefits: [
        '195+ destination countries',
        'All visa categories covered',
        'Local expertise everywhere',
        'Cultural adaptation support',
      ],
      color: 'teal',
      gradient: 'from-teal-500 to-blue-500',
    },
    {
      icon: TrendingUp,
      title: 'Success Tracking',
      description:
        'Advanced analytics and tracking ensure optimal outcomes for your immigration journey.',
      benefits: [
        '99.8% success rate',
        'Real-time progress monitoring',
        'Predictive analytics',
        'Performance optimization',
      ],
      color: 'pink',
      gradient: 'from-pink-500 to-rose-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section ref={ref} className={`py-24 lg:py-32 bg-slate-50 ${className}`}>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          className='max-w-7xl mx-auto'
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className='text-center mb-20'>
            <motion.div
              className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-6'
              whileHover={{ scale: 1.05 }}
            >
              <Zap className='w-4 h-4' />
              Enterprise Features
            </motion.div>

            <h2 className='text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6'>
              Why Choose{' '}
              <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                VANHSYA
              </span>
            </h2>

            <p className='text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed'>
              Experience the future of immigration services with our
              comprehensive platform that combines cutting-edge technology with
              human expertise to deliver exceptional results.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            className='grid lg:grid-cols-2 xl:grid-cols-3 gap-8'
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className='group relative'
              >
                <div className='relative h-full bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-2xl hover:shadow-slate-900/10 transition-all duration-500 hover:-translate-y-2'>
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                  ></div>

                  {/* Icon */}
                  <motion.div
                    variants={iconVariants}
                    className={`relative z-10 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className='w-8 h-8 text-white' />
                  </motion.div>

                  {/* Content */}
                  <div className='relative z-10'>
                    <h3 className='text-2xl font-bold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors'>
                      {feature.title}
                    </h3>

                    <p className='text-slate-600 mb-6 leading-relaxed'>
                      {feature.description}
                    </p>

                    {/* Benefits List */}
                    <ul className='space-y-3 mb-6'>
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <motion.li
                          key={benefitIndex}
                          className='flex items-start gap-3'
                          initial={{ opacity: 0, x: -20 }}
                          animate={
                            isInView
                              ? { opacity: 1, x: 0 }
                              : { opacity: 0, x: -20 }
                          }
                          transition={{
                            delay: 0.3 + index * 0.1 + benefitIndex * 0.05,
                          }}
                        >
                          <CheckCircle
                            className={`w-5 h-5 text-${feature.color}-500 flex-shrink-0 mt-0.5`}
                          />
                          <span className='text-slate-700 text-sm'>
                            {benefit}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Action Link */}
                    <motion.div
                      className='flex items-center gap-2 text-slate-400 group-hover:text-slate-600 transition-colors cursor-pointer'
                      whileHover={{ x: 4 }}
                    >
                      <span className='text-sm font-medium'>Learn more</span>
                      <ArrowRight className='w-4 h-4' />
                    </motion.div>
                  </div>

                  {/* Hover Effect */}
                  <div className='absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-slate-200 transition-colors duration-300'></div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA Section */}
          <motion.div variants={itemVariants} className='mt-20 text-center'>
            <div className='bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-12 lg:p-16 relative overflow-hidden'>
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10"></div>

              {/* Content */}
              <div className='relative z-10 max-w-4xl mx-auto'>
                <motion.div
                  className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 font-medium text-sm mb-6'
                  whileHover={{ scale: 1.05 }}
                >
                  <Award className='w-4 h-4' />
                  Ready to get started?
                </motion.div>

                <h3 className='text-3xl lg:text-4xl font-bold text-white mb-6'>
                  Experience the VANHSYA Difference Today
                </h3>

                <p className='text-xl text-slate-300 mb-8 max-w-2xl mx-auto'>
                  Join thousands of successful immigrants who chose VANHSYA for
                  their journey. Start with a free consultation and discover
                  your possibilities.
                </p>

                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                  <motion.button
                    className='px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Free Consultation
                  </motion.button>

                  <motion.button
                    className='px-8 py-4 border border-slate-600 text-white font-semibold rounded-xl hover:bg-white/5 transition-all duration-300'
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Success Stories
                  </motion.button>
                </div>

                {/* Trust Indicators */}
                <div className='mt-12 pt-8 border-t border-slate-700/50'>
                  <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
                    {[
                      { icon: Users, label: '50K+ Clients', value: 'Served' },
                      {
                        icon: Globe,
                        label: '195+ Countries',
                        value: 'Covered',
                      },
                      { icon: Award, label: '99.8% Success', value: 'Rate' },
                      { icon: Lock, label: 'Bank-Grade', value: 'Security' },
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        className='text-center'
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                          isInView
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 20 }
                        }
                        transition={{ delay: 0.8 + index * 0.1 }}
                      >
                        <div className='inline-flex items-center justify-center w-12 h-12 bg-blue-500/10 rounded-xl mb-3'>
                          <stat.icon className='w-6 h-6 text-blue-400' />
                        </div>
                        <div className='text-white font-bold text-lg'>
                          {stat.label}
                        </div>
                        <div className='text-slate-400 text-sm'>
                          {stat.value}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnterpriseFeatures;
