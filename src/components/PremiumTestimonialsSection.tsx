'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { 
  Star, 
  Quote, 
  MapPin, 
  Calendar,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Play,
  Award,
  Users,
  TrendingUp
} from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya & Rajesh Sharma',
    country: 'Canada',
    flag: '🇨🇦',
    location: 'Toronto, Ontario',
    program: 'Express Entry',
    rating: 5,
    image: '/images/testimonials/priya-rajesh.jpg',
    quote: 'VANHSYA made our Canadian dream a reality. Their AI-powered documentation review caught details we missed, and their expert guidance made the entire process stress-free. We\'re now proud Canadian residents!',
    timeline: '8 months',
    background: 'IT Professionals from Mumbai',
    achievement: 'Permanent Residency',
    videoTestimonial: true,
    color: 'from-red-500 to-red-600',
    bgGlow: 'bg-red-500/10'
  },
  {
    id: 2,
    name: 'Michael & Sarah Johnson',
    country: 'Australia',
    flag: '🇦🇺',
    location: 'Melbourne, Victoria',
    program: 'Skilled Independent',
    rating: 5,
    image: '/images/testimonials/michael-sarah.jpg',
    quote: 'The most professional immigration service we\'ve ever encountered. VANHSYA\'s team guided us through every step of the Australian immigration process with precision and care. Highly recommended!',
    timeline: '10 months',
    background: 'Healthcare Professionals from UK',
    achievement: 'Permanent Residency',
    videoTestimonial: false,
    color: 'from-green-500 to-emerald-600',
    bgGlow: 'bg-green-500/10'
  },
  {
    id: 3,
    name: 'Dr. Ahmed Hassan',
    country: 'Germany',
    flag: '🇩🇪',
    location: 'Berlin, Germany',
    program: 'EU Blue Card',
    rating: 5,
    image: '/images/testimonials/ahmed-hassan.jpg',
    quote: 'Exceptional service from start to finish. VANHSYA\'s expertise in European immigration law and their personalized approach made my transition to Germany seamless. They truly care about their clients\' success.',
    timeline: '4 months',
    background: 'Medical Researcher from Egypt',
    achievement: 'EU Blue Card',
    videoTestimonial: true,
    color: 'from-amber-500 to-orange-600',
    bgGlow: 'bg-amber-500/10'
  },
  {
    id: 4,
    name: 'Lisa & David Chen',
    country: 'New Zealand',
    flag: '🇳🇿',
    location: 'Auckland, New Zealand',
    program: 'Skilled Migrant',
    rating: 5,
    image: '/images/testimonials/lisa-david.jpg',
    quote: 'VANHSYA exceeded all our expectations. Their technology-driven approach combined with human expertise created a perfect immigration experience. We\'re now living our dream life in New Zealand!',
    timeline: '12 months',
    background: 'Business Analysts from Singapore',
    achievement: 'Permanent Residency',
    videoTestimonial: false,
    color: 'from-blue-500 to-cyan-500',
    bgGlow: 'bg-blue-500/10'
  },
  {
    id: 5,
    name: 'Maria Rodriguez',
    country: 'United Kingdom',
    flag: '🇬🇧',
    location: 'London, England',
    program: 'Global Talent Visa',
    rating: 5,
    image: '/images/testimonials/maria-rodriguez.jpg',
    quote: 'As a tech entrepreneur, I needed specialized guidance for the UK Global Talent visa. VANHSYA\'s deep understanding of immigration policies and their strategic approach helped me secure my visa in record time.',
    timeline: '3 months',
    background: 'Tech Entrepreneur from Spain',
    achievement: 'Global Talent Visa',
    videoTestimonial: true,
    color: 'from-purple-500 to-violet-600',
    bgGlow: 'bg-purple-500/10'
  },
  {
    id: 6,
    name: 'Robert & Anna Thompson',
    country: 'Switzerland',
    flag: '🇨🇭',
    location: 'Zurich, Switzerland',
    program: 'Work Permit',
    rating: 5,
    image: '/images/testimonials/robert-anna.jpg',
    quote: 'Moving to Switzerland seemed impossible until we found VANHSYA. Their meticulous attention to detail and comprehensive support system made our relocation smooth and successful. Thank you for making our Swiss dream come true!',
    timeline: '6 months',
    background: 'Finance Professionals from USA',
    achievement: 'Work Permit & Residency',
    videoTestimonial: false,
    color: 'from-indigo-500 to-blue-600',
    bgGlow: 'bg-indigo-500/10'
  }
];

const stats = [
  { label: 'Success Stories', value: '25,000+', icon: Users },
  { label: 'Countries Served', value: '195+', icon: MapPin },
  { label: 'Success Rate', value: '99.1%', icon: TrendingUp },
  { label: 'Years Experience', value: '15+', icon: Award }
];

export default function PremiumTestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const floatingY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      ref={containerRef}
      className="relative py-24 lg:py-32 bg-gradient-to-b from-neutral-950 to-neutral-900 overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0"
      >
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-emerald-600/10 to-cyan-600/10 rounded-full blur-3xl" />
      </motion.div>

      {/* Floating Elements */}
      <motion.div 
        style={{ y: floatingY }}
        className="absolute inset-0 overflow-hidden"
      >
        {Array.from({ length: 12 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 text-purple-300 font-medium text-sm mb-6"
          >
            <Star className="w-4 h-4" />
            Success Stories
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Real Families,
            <span className="block bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Real Success Stories
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-neutral-300 leading-relaxed"
          >
            Join thousands of families who trusted VANHSYA with their immigration dreams 
            and are now living their best lives in their chosen countries.
          </motion.p>
        </div>

        {/* Success Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-gradient-to-br from-neutral-900/60 to-neutral-900/30 backdrop-blur-xl border border-neutral-800/50 rounded-2xl p-6"
              >
                <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-neutral-400 text-sm">{stat.label}</div>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Side - Testimonial Content */}
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-xl border border-neutral-800/50 rounded-3xl p-8 lg:p-10">
                {/* Country Badge */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{testimonials[currentSlide].flag}</span>
                  <div>
                    <div className="text-purple-400 font-semibold">
                      {testimonials[currentSlide].country}
                    </div>
                    <div className="text-neutral-400 text-sm flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {testimonials[currentSlide].location}
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="relative mb-8">
                  <Quote className="w-12 h-12 text-purple-500/30 absolute -top-2 -left-2" />
                  <p className="text-lg text-neutral-300 leading-relaxed pl-8">
                    {testimonials[currentSlide].quote}
                  </p>
                </div>

                {/* Client Info */}
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-white mb-2">
                    {testimonials[currentSlide].name}
                  </h4>
                  <p className="text-neutral-400 text-sm mb-2">
                    {testimonials[currentSlide].background}
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1 text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      {testimonials[currentSlide].achievement}
                    </div>
                    <div className="flex items-center gap-1 text-neutral-400">
                      <Calendar className="w-4 h-4" />
                      {testimonials[currentSlide].timeline}
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-6">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                  <span className="text-neutral-400 text-sm ml-2">5.0 Rating</span>
                </div>

                {/* Video Testimonial Button */}
                {testimonials[currentSlide].videoTestimonial && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    <Play className="w-4 h-4" />
                    Watch Video Story
                  </motion.button>
                )}
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="order-1 lg:order-2">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <div className="aspect-square bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-3xl overflow-hidden border border-neutral-800/50">
                  {/* Placeholder for client photo */}
                  <div className="w-full h-full bg-gradient-to-br from-purple-600/20 to-indigo-600/20 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-3xl font-bold mb-4 mx-auto">
                        {testimonials[currentSlide].name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="text-lg font-semibold">{testimonials[currentSlide].name}</div>
                      <div className="text-purple-400">{testimonials[currentSlide].program}</div>
                    </div>
                  </div>
                </div>
                
                {/* Glow Effect */}
                <div className={`absolute inset-0 rounded-3xl ${testimonials[currentSlide].bgGlow} blur-2xl opacity-20`} />
              </motion.div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-gradient-to-r from-neutral-800 to-neutral-700 text-white rounded-full flex items-center justify-center hover:from-purple-600 hover:to-indigo-600 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-gradient-to-r from-purple-500 to-indigo-500'
                      : 'bg-neutral-700 hover:bg-neutral-600'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-gradient-to-r from-neutral-800 to-neutral-700 text-white rounded-full flex items-center justify-center hover:from-purple-600 hover:to-indigo-600 transition-all duration-300"
            >
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-purple-600/10 to-indigo-600/10 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-neutral-300 mb-6">
              Join thousands of families who have successfully immigrated with VANHSYA. 
              Your journey to a new life starts with a single conversation.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
            >
              Start Your Journey Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
