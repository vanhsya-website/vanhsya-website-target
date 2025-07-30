'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Users, Globe, Award, CheckCircle, Clock } from 'lucide-react';

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const CountUp: React.FC<CountUpProps> = ({ end, duration = 2, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationId: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        
        // Easing function for smooth animation
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(end * easeOutCubic));

        if (progress < 1) {
          animationId = requestAnimationFrame(animate);
        }
      };

      animationId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationId);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

interface MetricCardProps {
  icon: React.ElementType;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description: string;
  color: string;
  delay?: number;
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  icon: Icon, 
  value, 
  suffix = '', 
  prefix = '', 
  label, 
  description, 
  color,
  delay = 0 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ 
        duration: 0.6, 
        delay: delay,
        type: 'spring',
        bounce: 0.3
      }}
      whileHover={{ 
        scale: 1.05, 
        y: -5,
        boxShadow: `0 20px 40px ${color}20`
      }}
      className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 group overflow-hidden"
    >
      {/* Background glow effect */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
        animate={{ 
          background: [
            `linear-gradient(135deg, ${color}10, transparent)`,
            `linear-gradient(135deg, ${color}20, transparent)`,
            `linear-gradient(135deg, ${color}10, transparent)`
          ]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Icon */}
      <motion.div
        className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${color} mb-4`}
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        <Icon className="w-6 h-6 text-white" />
      </motion.div>

      {/* Value */}
      <div className="mb-2">
        <motion.h3 
          className="text-3xl font-bold text-white mb-1"
          initial={{ scale: 0.5 }}
          animate={isInView ? { scale: 1 } : { scale: 0.5 }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
        >
          <CountUp end={value} suffix={suffix} prefix={prefix} duration={2.5} />
        </motion.h3>
        <h4 className="text-lg font-semibold text-slate-300 mb-1">{label}</h4>
        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
      </div>

      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-transparent"
        style={{
          background: `linear-gradient(45deg, ${color}, transparent, ${color}) border-box`,
          WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'exclude'
        }}
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: delay }}
      />
    </motion.div>
  );
};

const SuccessMetricsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const metrics = [
    {
      icon: TrendingUp,
      value: 99,
      suffix: '%',
      label: 'Success Rate',
      description: 'Visa approval rate with our AI-powered guidance system',
      color: 'from-emerald-500 to-green-600',
      delay: 0
    },
    {
      icon: Users,
      value: 50000,
      suffix: '+',
      label: 'Successful Migrants',
      description: 'People who achieved their migration dreams with VANHSYA',
      color: 'from-blue-500 to-cyan-600',
      delay: 0.1
    },
    {
      icon: Globe,
      value: 45,
      suffix: '+',
      label: 'Countries Covered',
      description: 'Global coverage for all major immigration destinations',
      color: 'from-purple-500 to-indigo-600',
      delay: 0.2
    },
    {
      icon: Award,
      value: 15,
      suffix: '+',
      label: 'Years Experience',
      description: 'Trusted expertise in international migration services',
      color: 'from-gold-500 to-yellow-600',
      delay: 0.3
    },
    {
      icon: CheckCircle,
      value: 98,
      suffix: '%',
      label: 'Client Satisfaction',
      description: 'Exceptional service quality and customer experience',
      color: 'from-rose-500 to-pink-600',
      delay: 0.4
    },
    {
      icon: Clock,
      value: 60,
      suffix: '%',
      label: 'Faster Processing',
      description: 'Reduced processing time with AI optimization',
      color: 'from-orange-500 to-red-600',
      delay: 0.5
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="success-metrics"
      className="py-20 bg-gradient-to-br from-slate-950 via-purple-950/30 to-slate-950 relative overflow-hidden"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/20 rounded-full"
            animate={{
              x: [0, Math.random() * 100, 0],
              y: [0, Math.random() * 100, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 0.5,
              ease: 'easeInOut'
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-gold-400 to-purple-400 bg-clip-text text-transparent"
            animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Proven Success Metrics
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our AI-powered platform delivers exceptional results, helping thousands achieve their migration dreams with industry-leading success rates.
          </motion.p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              {...metric}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 20px 40px rgba(139, 92, 246, 0.3)' 
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            onClick={() => {
              document.getElementById('ai-tools')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Experience Our AI Tools
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessMetricsSection;
