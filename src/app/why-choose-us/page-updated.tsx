'use client';

import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import {
  Users,
  Heart,
  Globe,
  Award,
  Shield,
  ArrowRight,
  Star,
  Clock,
  CheckCircle,
  TrendingUp,
  Target,
  Zap,
  Phone,
  Mail,
} from 'lucide-react';
import Link from 'next/link';

export default function WhyChooseUsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const reasons = [
    {
      icon: Award,
      title: '98% Success Rate',
      description: 'Industry-leading success rate with comprehensive case management and expert guidance throughout your journey.',
      stats: '98% Success Rate',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: Clock,
      title: 'Fastest Processing',
      description: 'Average processing time 40% faster than industry standard with dedicated case managers and streamlined processes.',
      stats: '40% Faster Processing',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Shield,
      title: '100% Transparency',
      description: 'Complete transparency in fees, processes, and timelines. No hidden charges ever, just honest and clear communication.',
      stats: 'Zero Hidden Fees',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Licensed immigration consultants and lawyers with 15+ years of experience in global immigration law.',
      stats: '15+ Years Experience',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Offices in 8 countries with local expertise for 50+ destinations worldwide, ensuring comprehensive support.',
      stats: '50+ Destinations',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: Heart,
      title: 'Personalized Care',
      description: 'One-on-one support throughout your journey with dedicated case managers providing 24/7 assistance.',
      stats: '24/7 Support',
      color: 'from-pink-500 to-pink-600',
    },
  ];

  const achievements = [
    { number: '0', label: 'Successful Applications', icon: CheckCircle, color: 'text-emerald-400' },
    { number: '50+', label: 'Countries Served', icon: Globe, color: 'text-blue-400' },
    { number: '98%', label: 'Success Rate', icon: TrendingUp, color: 'text-purple-400' },
    { number: '15+', label: 'Years Experience', icon: Award, color: 'text-orange-400' },
    { number: '24/7', label: 'Support Available', icon: Clock, color: 'text-cyan-400' },
    { number: '8', label: 'Office Locations', icon: Target, color: 'text-pink-400' },
  ];

  const features = [
    {
      title: 'Expert Legal Team',
      description: 'Licensed immigration lawyers and consultants with deep expertise',
      icon: Users,
    },
    {
      title: 'Guaranteed Results',
      description: 'Industry-leading success rates with money-back guarantee',
      icon: Shield,
    },
    {
      title: 'Global Network',
      description: 'Offices worldwide to support your immigration journey',
      icon: Globe,
    },
    {
      title: 'Personalized Service',
      description: 'Dedicated case managers for one-on-one support',
      icon: Heart,
    },
  ];

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
            <Star className='w-4 h-4' />
            Trusted by Thousands
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6'
          >
            Why Choose
            <span className='block bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent'>
              VANHSYA
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='text-xl text-neutral-300 leading-relaxed mb-8'
          >
            Experience the difference with our industry-leading immigration services. We're committed to helping you achieve your global mobility dreams with unmatched expertise and personalized care.
          </motion.p>
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16'
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className='bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-6 text-center hover:border-neutral-700/50 transition-all duration-300'
            >
              <div className='flex justify-center mb-3'>
                <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
              </div>
              <div className={`text-2xl md:text-3xl font-bold ${achievement.color} mb-2`}>
                {achievement.number}
              </div>
              <div className='text-neutral-400 text-sm font-medium'>
                {achievement.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className='bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-6 text-center hover:border-neutral-700/50 transition-all duration-300'
            >
              <div className='w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl flex items-center justify-center mx-auto mb-4'>
                <feature.icon className='w-6 h-6 text-white' />
              </div>
              <h3 className='text-white font-semibold mb-2'>{feature.title}</h3>
              <p className='text-neutral-400 text-sm leading-relaxed'>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose Us Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className='mb-16'
        >
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              What Sets Us Apart
            </h2>
            <p className='text-neutral-400 max-w-2xl mx-auto leading-relaxed'>
              We're not just another immigration consultancy. Here's what makes VANHSYA the preferred choice for global migration.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className='bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-6 hover:border-neutral-700/50 transition-all duration-300'
              >
                <div className='flex items-center justify-between mb-6'>
                  <div className={`w-12 h-12 bg-gradient-to-r ${reason.color} rounded-xl flex items-center justify-center`}>
                    <reason.icon className='w-6 h-6 text-white' />
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full font-medium bg-gradient-to-r ${reason.color} text-white`}>
                    {reason.stats}
                  </span>
                </div>

                <h3 className='text-xl font-bold text-white mb-3'>
                  {reason.title}
                </h3>
                <p className='text-neutral-300 leading-relaxed'>
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Client Testimonials - Empty Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className='mb-16'
        >
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              What Our Clients Say
            </h2>
            <p className='text-neutral-400 max-w-2xl mx-auto leading-relaxed'>
              Client testimonials will be added here after successful service delivery and client satisfaction.
            </p>
          </div>

          <div className='bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-12 text-center'>
            <div className='w-16 h-16 bg-gradient-to-r from-neutral-800 to-neutral-700 rounded-full flex items-center justify-center mx-auto mb-6'>
              <Star className='w-8 h-8 text-neutral-400' />
            </div>
            <h3 className='text-2xl font-bold text-white mb-4'>Coming Soon</h3>
            <p className='text-neutral-400 max-w-lg mx-auto leading-relaxed'>
              We're committed to delivering exceptional service. Client testimonials and success stories will be featured here as we build our track record of successful immigration cases.
            </p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.4 }}
          className='text-center max-w-4xl mx-auto'
        >
          <div className='bg-gradient-to-br from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-8'>
            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
              Ready to Start Your Journey?
            </h2>
            <p className='text-xl text-neutral-300 mb-8 leading-relaxed'>
              Join our growing community of satisfied clients who chose VANHSYA for their immigration needs. Let's make your global mobility dream a reality.
            </p>

            <div className='flex flex-wrap justify-center gap-4 mb-8'>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className='flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:via-violet-500 hover:to-indigo-500 text-white font-bold rounded-xl transition-all duration-300'
              >
                <Zap className='w-5 h-5' />
                Free Consultation
                <ArrowRight className='w-5 h-5' />
              </motion.button>
              <Link href='/contact'>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className='flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neutral-900/60 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 hover:border-neutral-700/50 text-white font-medium rounded-xl transition-all duration-300'
                >
                  <Phone className='w-5 h-5' />
                  Contact Us
                </motion.button>
              </Link>
            </div>

            <div className='flex flex-wrap justify-center gap-6 text-sm text-neutral-400'>
              <div className='flex items-center gap-2'>
                <Phone className='w-4 h-4' />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className='flex items-center gap-2'>
                <Mail className='w-4 h-4' />
                <span>info@vanhsya.com</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
