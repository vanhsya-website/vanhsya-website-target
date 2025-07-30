'use client';

import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useRef, useEffect } from 'react';
import {
  Users,
  Globe,
  Award,
  Clock,
  TrendingUp,
  Shield,
  CheckCircle,
  Star,
} from 'lucide-react';

interface Stat {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  description: string;
  color: string;
  gradient: string;
}

interface EnterpriseStatsProps {
  className?: string;
}

const AnimatedCounter: React.FC<{
  value: number;
  suffix: string;
  duration?: number;
}> = ({ value, suffix, duration = 2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000 });
  const displayValue = useTransform(springValue, latest => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  return (
    <span ref={ref} className='tabular-nums'>
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
};

const EnterpriseStats: React.FC<EnterpriseStatsProps> = ({
  className = '',
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const stats: Stat[] = [
    {
      icon: Users,
      value: 50000,
      suffix: '+',
      label: 'Successful Clients',
      description: 'Immigrants who achieved their dreams with our guidance',
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Globe,
      value: 195,
      suffix: '+',
      label: 'Countries Covered',
      description: 'Comprehensive immigration services worldwide',
      color: 'green',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Award,
      value: 99.8,
      suffix: '%',
      label: 'Success Rate',
      description: 'Industry-leading approval rate for applications',
      color: 'purple',
      gradient: 'from-purple-500 to-violet-500',
    },
    {
      icon: Clock,
      value: 60,
      suffix: '%',
      label: 'Faster Processing',
      description: 'Reduced processing time with automated workflows',
      color: 'orange',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: TrendingUp,
      value: 15,
      suffix: '+',
      label: 'Years Experience',
      description: 'Decades of expertise in immigration law',
      color: 'teal',
      gradient: 'from-teal-500 to-blue-500',
    },
    {
      icon: Shield,
      value: 100,
      suffix: '%',
      label: 'Secure Platform',
      description: 'Bank-grade security for your sensitive data',
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
    hidden: { opacity: 0, y: 40, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  };

  return (
    <section ref={ref} className={`py-24 lg:py-32 bg-white ${className}`}>
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
              <TrendingUp className='w-4 h-4' />
              Our Impact
            </motion.div>

            <h2 className='text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-6'>
              Trusted by{' '}
              <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                Thousands
              </span>
            </h2>

            <p className='text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed'>
              Our numbers speak for themselves. Join a community of successful
              immigrants who have transformed their lives with VANHSYA's expert
              guidance and innovative solutions.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20'
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className='group relative'
              >
                <div className='relative h-full bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-200 hover:border-slate-300 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-900/10 hover:-translate-y-2'>
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                  ></div>

                  {/* Icon */}
                  <div className='relative z-10 flex items-center justify-between mb-6'>
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${stat.gradient} rounded-2xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      <stat.icon className='w-7 h-7 text-white' />
                    </div>

                    {/* Decorative Element */}
                    <div className='w-16 h-1 bg-gradient-to-r from-slate-200 to-transparent rounded-full'></div>
                  </div>

                  {/* Content */}
                  <div className='relative z-10'>
                    {/* Number */}
                    <div className='text-4xl lg:text-5xl font-bold text-slate-900 mb-2 leading-none'>
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                      />
                    </div>

                    {/* Label */}
                    <h3 className='text-xl font-semibold text-slate-800 mb-3'>
                      {stat.label}
                    </h3>

                    {/* Description */}
                    <p className='text-slate-600 leading-relaxed'>
                      {stat.description}
                    </p>
                  </div>

                  {/* Hover Effect Border */}
                  <div className='absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-slate-200 transition-colors duration-300'></div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonials Section */}
          <motion.div variants={itemVariants} className='relative'>
            <div className='bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-12 lg:p-16 relative overflow-hidden'>
              {/* Background Effects */}
              <div className='absolute inset-0'>
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10"></div>

                {/* Floating Elements */}
                <div className='absolute top-10 right-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl'></div>
                <div className='absolute bottom-10 left-10 w-16 h-16 bg-purple-500/10 rounded-full blur-lg'></div>
              </div>

              {/* Content */}
              <div className='relative z-10 max-w-4xl mx-auto text-center'>
                <motion.div
                  className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 font-medium text-sm mb-8'
                  whileHover={{ scale: 1.05 }}
                >
                  <Star className='w-4 h-4' />
                  Client Testimonials
                </motion.div>

                <h3 className='text-3xl lg:text-4xl font-bold text-white mb-8'>
                  What Our Clients Say
                </h3>

                {/* Testimonials Grid */}
                <div className='grid md:grid-cols-3 gap-8'>
                  {[
                    {
                      name: 'Sarah Chen',
                      country: 'Canada',
                      text: 'VANHSYA made my Canadian PR journey seamless. Their AI tools predicted exactly what I needed.',
                      rating: 5,
                    },
                    {
                      name: 'Ahmad Hassan',
                      country: 'Australia',
                      text: "The fastest and most professional service I've experienced. Highly recommend!",
                      rating: 5,
                    },
                    {
                      name: 'Maria Rodriguez',
                      country: 'USA',
                      text: 'Their expert team guided me through every step. I got my visa in record time.',
                      rating: 5,
                    },
                  ].map((testimonial, index) => (
                    <motion.div
                      key={index}
                      className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20'
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{
                        scale: 1.02,
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      }}
                    >
                      {/* Stars */}
                      <div className='flex justify-center gap-1 mb-4'>
                        {[...Array(testimonial.rating)].map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            className='w-4 h-4 text-yellow-400 fill-current'
                          />
                        ))}
                      </div>

                      {/* Text */}
                      <p className='text-white/90 text-sm mb-4 leading-relaxed'>
                        "{testimonial.text}"
                      </p>

                      {/* Author */}
                      <div className='text-center'>
                        <div className='text-white font-medium text-sm'>
                          {testimonial.name}
                        </div>
                        <div className='text-blue-300 text-xs'>
                          Moved to {testimonial.country}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <motion.div
                  className='mt-12'
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <motion.button
                    className='px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read More Success Stories
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div variants={itemVariants} className='mt-20'>
            <div className='text-center mb-12'>
              <h3 className='text-2xl font-bold text-slate-900 mb-4'>
                Recognized & Trusted Worldwide
              </h3>
              <p className='text-slate-600 max-w-2xl mx-auto'>
                Our commitment to excellence has earned recognition from leading
                organizations and certifications.
              </p>
            </div>

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
              {[
                { name: 'ISO 27001', description: 'Security Certified' },
                { name: 'ICCRC', description: 'Licensed Consultants' },
                { name: 'SOC 2', description: 'Compliance Verified' },
                { name: 'GDPR', description: 'Privacy Protected' },
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  className='text-center group'
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 1.0 + index * 0.1 }}
                >
                  <div className='inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-2xl mb-4 group-hover:bg-slate-200 transition-colors'>
                    <CheckCircle className='w-8 h-8 text-slate-600' />
                  </div>
                  <div className='text-slate-900 font-semibold text-lg'>
                    {cert.name}
                  </div>
                  <div className='text-slate-600 text-sm'>
                    {cert.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnterpriseStats;
