'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Play, X, Calendar, MapPin, Award } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  country: string;
  flag: string;
  rating: number;
  text: string;
  visaType: string;
  date: string;
  avatar: string;
  videoUrl?: string;
  achievement: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    country: 'Canada',
    flag: '🇨🇦',
    rating: 5,
    text: 'VANHSYA transformed my migration journey completely. Their AI platform made the impossible possible. Within 6 months, I had my Canadian PR!',
    visaType: 'Permanent Residence',
    date: '2024-03-15',
    avatar: '/images/avatars/sarah.jpg',
    videoUrl: 'https://vimeo.com/sarah-success',
    achievement: 'Express Entry Success',
  },
  {
    id: 2,
    name: 'Raj Patel',
    country: 'Australia',
    flag: '🇦🇺',
    rating: 5,
    text: "The most advanced migration platform I have ever seen. VANHSYA's AI assistant guided me through every step with precision.",
    visaType: 'Skilled Migration',
    date: '2024-02-28',
    avatar: '/images/avatars/raj.jpg',
    videoUrl: 'https://vimeo.com/raj-success',
    achievement: '189 Visa Approved',
  },
  {
    id: 3,
    name: 'Emily Chen',
    country: 'Germany',
    flag: '🇩🇪',
    rating: 5,
    text: 'Revolutionary technology that actually works! VANHSYA predicted every outcome and delivered exactly as promised.',
    visaType: 'EU Blue Card',
    date: '2024-01-20',
    avatar: '/images/avatars/emily.jpg',
    videoUrl: 'https://vimeo.com/emily-success',
    achievement: 'Tech Professional Visa',
  },
  {
    id: 4,
    name: 'David Wilson',
    country: 'United Kingdom',
    flag: '🇬🇧',
    rating: 5,
    text: 'VANHSYA is the future of migration. Their AI tools are years ahead of anything else available in the market.',
    visaType: 'Skilled Worker',
    date: '2024-04-10',
    avatar: '/images/avatars/david.jpg',
    videoUrl: 'https://vimeo.com/david-success',
    achievement: 'Global Talent Visa',
  },
  {
    id: 5,
    name: 'Maria Rodriguez',
    country: 'Spain',
    flag: '🇪🇸',
    rating: 5,
    text: 'The most comprehensive and intelligent migration platform ever created. VANHSYA made my European dream a reality.',
    visaType: 'Work Permit',
    date: '2024-03-08',
    avatar: '/images/avatars/maria.jpg',
    videoUrl: 'https://vimeo.com/maria-success',
    achievement: 'EU Entrepreneur Visa',
  },
  {
    id: 6,
    name: 'James Kim',
    country: 'New Zealand',
    flag: '🇳🇿',
    rating: 5,
    text: "VANHSYA's AI predicted my success rate to 99.2% and delivered exactly that. This is the migration platform of the future.",
    visaType: 'Resident Visa',
    date: '2024-02-14',
    avatar: '/images/avatars/james.jpg',
    videoUrl: 'https://vimeo.com/james-success',
    achievement: 'SMC Residence',
  },
];

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}

const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoUrl,
  title,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4'
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className='bg-slate-900 rounded-2xl border border-slate-700 max-w-4xl w-full max-h-[80vh] overflow-hidden'
          onClick={e => e.stopPropagation()}
        >
          <div className='flex items-center justify-between p-6 border-b border-slate-700'>
            <h3 className='text-xl font-bold text-white'>{title}</h3>
            <button
              onClick={onClose}
              className='p-2 hover:bg-slate-800 rounded-lg transition-colors'
            >
              <X className='w-5 h-5 text-slate-400' />
            </button>
          </div>

          <div className='aspect-video bg-slate-800 flex items-center justify-center'>
            <div className='text-center'>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className='w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full mx-auto mb-4'
              />
              <p className='text-slate-400'>Loading video testimonial...</p>
              <p className='text-xs text-slate-500 mt-2'>{videoUrl}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <motion.div
        key={i}
        animate={{
          scale: i < rating ? [1, 1.2, 1] : 1,
          rotate: i < rating ? [0, 10, 0] : 0,
        }}
        transition={{
          duration: 0.5,
          delay: i * 0.1,
          repeat: i < rating ? Infinity : 0,
          repeatDelay: 2,
        }}
      >
        <Star
          className={`w-5 h-5 ${
            i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'
          }`}
        />
      </motion.div>
    ));
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className='group relative'
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.div
          className='relative p-8 bg-gradient-to-br from-slate-900/60 to-slate-800/60 rounded-2xl border border-slate-700/50 backdrop-blur-sm overflow-hidden h-full'
          whileHover={{
            y: -8,
            scale: 1.02,
            transition: { duration: 0.3 },
          }}
        >
          {/* Video Play Button */}
          {testimonial.videoUrl && (
            <motion.button
              onClick={() => setShowVideo(true)}
              className='absolute top-4 right-4 flex items-center gap-2 px-3 py-2 bg-red-600/80 hover:bg-red-600 rounded-lg backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className='w-4 h-4 text-white' />
              <span className='text-sm text-white font-medium'>Watch</span>
            </motion.button>
          )}

          {/* Achievement Badge */}
          <motion.div
            className='absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-green-600 to-emerald-500 rounded-full text-xs font-bold text-white'
            animate={{
              boxShadow: [
                '0 0 0px rgba(34, 197, 94, 0.5)',
                '0 0 20px rgba(34, 197, 94, 0.8)',
                '0 0 0px rgba(34, 197, 94, 0.5)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Award className='w-3 h-3 inline mr-1' />
            {testimonial.achievement}
          </motion.div>

          {/* Header */}
          <div className='flex items-center space-x-4 mb-6 mt-8'>
            <motion.div
              className='relative'
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <div className='w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-2xl font-bold text-white'>
                {testimonial.name
                  .split(' ')
                  .map(n => n[0])
                  .join('')}
              </div>
              <motion.div
                className='absolute -top-1 -right-1 text-2xl'
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {testimonial.flag}
              </motion.div>
            </motion.div>

            <div>
              <h4 className='text-xl font-bold text-white mb-1'>
                {testimonial.name}
              </h4>
              <div className='flex items-center space-x-2 text-slate-400'>
                <MapPin className='w-4 h-4' />
                <span>{testimonial.country}</span>
              </div>
            </div>
          </div>

          {/* Star Rating */}
          <div className='flex items-center space-x-1 mb-4'>
            {renderStars(testimonial.rating)}
            <span className='ml-2 text-yellow-400 font-semibold'>
              {testimonial.rating}.0
            </span>
          </div>

          {/* Testimonial Text */}
          <motion.p
            className='text-slate-300 leading-relaxed mb-6 text-lg'
            animate={
              isHovered
                ? {
                    color: '#f1f5f9',
                  }
                : {}
            }
          >
            "{testimonial.text}"
          </motion.p>

          {/* Footer */}
          <div className='flex items-center justify-between text-slate-400 text-sm border-t border-slate-700 pt-4'>
            <div className='flex items-center space-x-2'>
              <Calendar className='w-4 h-4' />
              <span>{new Date(testimonial.date).toLocaleDateString()}</span>
            </div>
            <span className='bg-purple-600/20 text-purple-300 px-2 py-1 rounded-full text-xs'>
              {testimonial.visaType}
            </span>
          </div>

          {/* Hover glow effect */}
          <motion.div
            className='absolute inset-0 rounded-2xl border-2 border-purple-500/0 group-hover:border-purple-500/30 transition-all duration-300'
            animate={
              isHovered
                ? {
                    boxShadow: '0 0 30px rgba(168, 85, 247, 0.3)',
                  }
                : {
                    boxShadow: '0 0 0px rgba(168, 85, 247, 0)',
                  }
            }
          />
        </motion.div>
      </motion.div>

      {/* Video Modal */}
      {testimonial.videoUrl && (
        <VideoModal
          isOpen={showVideo}
          onClose={() => setShowVideo(false)}
          videoUrl={testimonial.videoUrl}
          title={`${testimonial.name}'s Success Story`}
        />
      )}
    </>
  );
};

const EnhancedTestimonials: React.FC = () => {
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className='relative py-24 bg-gradient-to-b from-slate-950 via-indigo-950/30 to-slate-950 overflow-hidden'>
      {/* Background Effects */}
      <div className='absolute inset-0'>
        <motion.div
          className='absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl'
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl'
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.1 }}
        className='relative z-10 max-w-7xl mx-auto px-6'
      >
        {/* Header */}
        <motion.div variants={itemVariants} className='text-center mb-16'>
          <motion.h2
            className='text-5xl md:text-6xl font-bold mb-6'
            style={{
              background:
                'linear-gradient(135deg, #fff 0%, #a855f7 50%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Success Stories That Inspire
          </motion.h2>
          <motion.p
            className='text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed'
            variants={itemVariants}
          >
            Real people, real results. Discover how VANHSYA's revolutionary AI
            platform has transformed thousands of migration journeys worldwide.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div variants={itemVariants} className='text-center mt-16'>
          <motion.button
            className='px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-2xl text-lg hover:shadow-2xl transition-all duration-300'
            whileHover={{
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(168, 85, 247, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Join 50,000+ Success Stories
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EnhancedTestimonials;
