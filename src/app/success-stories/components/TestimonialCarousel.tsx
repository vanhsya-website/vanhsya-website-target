'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  Calendar,
  MapPin,
  Award,
  Heart,
  Play,
  Pause
} from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  location: string;
  country: string;
  flag: string;
  visaType: string;
  image: string;
  quote: string;
  fullStory: string;
  rating: number;
  timeline: string;
  outcome: string;
  year: string;
  category: string;
  bgGradient: string;
}

export default function TestimonialCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "Software Engineer",
      location: "San Francisco",
      country: "USA",
      flag: "🇺🇸",
      visaType: "H-1B → Green Card",
      image: "👩‍💻",
      quote: "VANHSYA's AI identified a pathway I never knew existed. The precision was incredible, and their predictions were 100% accurate.",
      fullStory: "Moving from Shanghai to Silicon Valley felt impossible until VANHSYA's AI analyzed my profile. They identified specific tech companies with high H-1B approval rates, guided me through the application process, and even predicted the exact timeline. Now I'm working at my dream company and have my Green Card!",
      rating: 5,
      timeline: "14 months",
      outcome: "Senior Software Engineer at Google",
      year: "2024",
      category: "Tech Professional",
      bgGradient: "from-blue-600 via-purple-600 to-cyan-600"
    },
    {
      id: 2,
      name: "Ahmed Al-Rashid",
      title: "Investment Banker",
      location: "Dubai",
      country: "UAE",
      flag: "🇦🇪",
      visaType: "Golden Visa",
      image: "👨‍💼",
      quote: "The AI understood the nuances of UAE's Golden Visa program better than any consultant. It was like having a crystal ball for my future.",
      fullStory: "As a finance professional from Lebanon, I thought the Golden Visa was out of reach. VANHSYA's AI analyzed my investment portfolio, identified qualifying pathways, and structured my application perfectly. The 10-year visa approval came through faster than expected.",
      rating: 5,
      timeline: "8 months",
      outcome: "Managing Director at Emirates NBD",
      year: "2024",
      category: "Business Executive",
      bgGradient: "from-amber-500 via-orange-600 to-red-600"
    },
    {
      id: 3,
      name: "Dr. Priya Patel",
      title: "Medical Researcher",
      location: "London",
      country: "UK",
      flag: "🇬🇧",
      visaType: "Global Talent Visa",
      image: "👩‍⚕️",
      quote: "Traditional consultants said my case was too complex. VANHSYA's AI found patterns in successful applications and crafted a winning strategy.",
      fullStory: "My research in personalized medicine was groundbreaking, but proving 'exceptional talent' seemed impossible. VANHSYA's AI analyzed thousands of successful Global Talent applications, identified the perfect evidence framework, and guided me through every step. Now I'm leading research at Imperial College London.",
      rating: 5,
      timeline: "6 months",
      outcome: "Lead Researcher at Imperial College",
      year: "2024",
      category: "Healthcare Professional",
      bgGradient: "from-emerald-500 via-teal-600 to-blue-600"
    },
    {
      id: 4,
      name: "Marcus Weber",
      title: "Startup Founder",
      location: "Berlin",
      country: "Germany",
      flag: "🇩🇪",
      visaType: "EU Blue Card",
      image: "👨‍💻",
      quote: "The AI's ability to navigate EU regulations was phenomenal. It felt like having a legal expert, business advisor, and fortune teller all in one.",
      fullStory: "Scaling my fintech startup across Europe required complex visa planning. VANHSYA's AI mapped out the entire EU Blue Card pathway, optimized my application timing, and even suggested the perfect German cities for my business expansion. The result? A thriving company and permanent residency.",
      rating: 5,
      timeline: "10 months",
      outcome: "CEO of €50M Fintech Company",
      year: "2023",
      category: "Entrepreneur",
      bgGradient: "from-purple-600 via-indigo-600 to-blue-600"
    },
    {
      id: 5,
      name: "Elena Rodriguez",
      title: "Creative Director",
      location: "Toronto",
      country: "Canada",
      flag: "🇨🇦",
      visaType: "Express Entry",
      image: "👩‍🎨",
      quote: "As a creative professional, I thought Express Entry was only for tech workers. VANHSYA's AI proved me wrong and opened doors I didn't know existed.",
      fullStory: "Coming from Mexico City with a background in advertising, I felt overlooked by traditional immigration programs. VANHSYA's AI analyzed my creative portfolio, identified qualifying NOC codes, and strategically positioned my application. The invitation came through the Federal Skilled Worker program.",
      rating: 5,
      timeline: "12 months",
      outcome: "Creative Director at Shopify",
      year: "2024",
      category: "Creative Professional",
      bgGradient: "from-pink-500 via-rose-600 to-orange-600"
    },
    {
      id: 6,
      name: "James & Lisa Kim",
      title: "Power Couple",
      location: "Sydney",
      country: "Australia",
      flag: "🇦🇺",
      visaType: "Partner Visa",
      image: "👫",
      quote: "The family visa process was emotional and stressful. VANHSYA's AI guided us through every step with precision and empathy.",
      fullStory: "Meeting my Australian partner in Seoul started our love story, but the visa process nearly ended it. VANHSYA's AI analyzed our relationship timeline, identified the strongest evidence points, and prepared us for every possible interview question. We're now happily married permanent residents.",
      rating: 5,
      timeline: "18 months",
      outcome: "Permanent Residents & Newlyweds",
      year: "2024",
      category: "Family Migration",
      bgGradient: "from-green-500 via-emerald-600 to-teal-600"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div ref={containerRef} className="relative max-w-7xl mx-auto">
      {/* Main Testimonial Display */}
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300, rotateY: 45 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            exit={{ opacity: 0, x: -300, rotateY: -45 }}
            transition={{ 
              duration: 0.8, 
              type: "spring", 
              stiffness: 100,
              damping: 20
            }}
            className="relative"
          >
            {/* Main Testimonial Card */}
            <div className="relative mx-auto max-w-5xl">
              <motion.div
                whileHover={{ scale: 1.02, y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative p-8 md:p-12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden shadow-2xl"
                style={{
                  background: `linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)`,
                }}
              >
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[currentIndex].bgGradient} opacity-10 rounded-3xl`} />
                
                {/* Neon Glow Effect */}
                <div className="absolute inset-0 rounded-3xl opacity-50">
                  <div className={`absolute inset-0 bg-gradient-to-r ${testimonials[currentIndex].bgGradient} blur-xl opacity-20`} />
                </div>

                {/* Quote Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br ${testimonials[currentIndex].bgGradient} rounded-full flex items-center justify-center shadow-2xl`}
                >
                  <Quote className="w-10 h-10 text-white" />
                </motion.div>

                <div className="relative z-10">
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    {/* Profile Section */}
                    <div className="lg:col-span-1 text-center lg:text-left">
                      {/* Avatar with Flag */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative w-40 h-40 mx-auto lg:mx-0 mb-6"
                      >
                        <div className={`w-full h-full bg-gradient-to-br ${testimonials[currentIndex].bgGradient} rounded-full flex items-center justify-center text-7xl shadow-2xl`}>
                          {testimonials[currentIndex].image}
                        </div>
                        
                        {/* Flag Badge */}
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.4, delay: 0.5 }}
                          className="absolute -bottom-2 -right-2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-white/20"
                        >
                          <span className="text-3xl">{testimonials[currentIndex].flag}</span>
                        </motion.div>
                      </motion.div>

                      {/* Basic Info */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <h3 className="text-3xl font-bold text-white mb-2">
                          {testimonials[currentIndex].name}
                        </h3>
                        <p className="text-xl text-gray-300 mb-2">
                          {testimonials[currentIndex].title}
                        </p>
                        <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-400 mb-4">
                          <MapPin className="w-4 h-4" />
                          <span>{testimonials[currentIndex].location}, {testimonials[currentIndex].country}</span>
                        </div>
                        
                        {/* Visa Type Badge */}
                        <div className={`inline-flex px-4 py-2 bg-gradient-to-r ${testimonials[currentIndex].bgGradient} bg-opacity-20 backdrop-blur-sm rounded-full border border-white/30`}>
                          <span className="text-white font-medium text-sm">
                            {testimonials[currentIndex].visaType}
                          </span>
                        </div>
                      </motion.div>
                    </div>

                    {/* Story Content */}
                    <div className="lg:col-span-2">
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                      >
                        {/* Rating */}
                        <div className="flex items-center gap-1 mb-6">
                          {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                            >
                              <Star className="w-7 h-7 text-yellow-400 fill-current" />
                            </motion.div>
                          ))}
                        </div>

                        {/* Quote */}
                        <blockquote className="text-2xl md:text-3xl text-white leading-relaxed mb-8 font-light italic">
                          "{testimonials[currentIndex].quote}"
                        </blockquote>

                        {/* Success Metrics */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          <div className="text-center p-4 bg-white/10 rounded-xl border border-white/20">
                            <Calendar className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                            <div className="text-sm text-gray-300">Timeline</div>
                            <div className="text-lg font-bold text-white">
                              {testimonials[currentIndex].timeline}
                            </div>
                          </div>
                          <div className="text-center p-4 bg-white/10 rounded-xl border border-white/20">
                            <Award className="w-6 h-6 text-green-400 mx-auto mb-2" />
                            <div className="text-sm text-gray-300">Year</div>
                            <div className="text-lg font-bold text-white">
                              {testimonials[currentIndex].year}
                            </div>
                          </div>
                          <div className="text-center p-4 bg-white/10 rounded-xl border border-white/20">
                            <Heart className="w-6 h-6 text-pink-400 mx-auto mb-2" />
                            <div className="text-sm text-gray-300">Category</div>
                            <div className="text-xs font-bold text-white">
                              {testimonials[currentIndex].category}
                            </div>
                          </div>
                        </div>

                        {/* Read Full Story Button */}
                        <motion.button
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedTestimonial(testimonials[currentIndex])}
                          className={`px-6 py-3 bg-gradient-to-r ${testimonials[currentIndex].bgGradient} hover:opacity-90 text-white font-bold rounded-xl transition-all duration-300 flex items-center gap-2`}
                        >
                          <span>Read Full Story</span>
                          <ChevronRight className="w-4 h-4" />
                        </motion.button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-12">
          {/* Previous Button */}
          <motion.button
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevTestimonial}
            className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-white/10 to-white/20 backdrop-blur-xl rounded-xl border border-white/30 hover:border-white/50 transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5 text-purple-400 group-hover:-translate-x-1 transition-transform" />
            <span className="text-white font-medium">Previous</span>
          </motion.button>

          {/* Dots Indicator & Auto-play Control */}
          <div className="flex items-center gap-6">
            {/* Auto-play Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className={`p-3 rounded-full transition-all duration-300 ${
                isAutoPlay 
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' 
                  : 'bg-white/10 border border-white/30 text-gray-400'
              }`}
            >
              {isAutoPlay ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </motion.button>

            {/* Dots */}
            <div className="flex items-center gap-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? `bg-gradient-to-r ${testimonials[currentIndex].bgGradient} scale-125`
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Next Button */}
          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextTestimonial}
            className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-white/10 to-white/20 backdrop-blur-xl rounded-xl border border-white/30 hover:border-white/50 transition-all duration-300"
          >
            <span className="text-white font-medium">Next</span>
            <ChevronRight className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </div>

      {/* Thumbnail Scroll */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-12 overflow-x-auto"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        <div className="flex gap-4 pb-4" style={{ width: 'max-content' }}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              whileHover={{ scale: 1.05, y: -5 }}
              onClick={() => goToTestimonial(index)}
              className={`cursor-pointer p-4 rounded-2xl border transition-all duration-300 flex-shrink-0 w-64 ${
                index === currentIndex
                  ? `bg-gradient-to-br ${testimonial.bgGradient} bg-opacity-20 border-white/50`
                  : 'bg-white/5 border-white/20 hover:border-white/40'
              }`}
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <div className="text-white font-bold text-sm">{testimonial.name}</div>
                  <div className="text-gray-400 text-xs">{testimonial.location}</div>
                </div>
              </div>
              <div className="text-gray-300 text-xs line-clamp-2">
                {testimonial.quote}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Full Story Modal */}
      <AnimatePresence>
        {selectedTestimonial && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedTestimonial(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              className="bg-slate-800/95 backdrop-blur-xl rounded-3xl max-w-4xl w-full max-h-[80vh] overflow-y-auto border border-white/20"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-20 h-20 bg-gradient-to-br ${selectedTestimonial.bgGradient} rounded-full flex items-center justify-center text-4xl`}>
                      {selectedTestimonial.image}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">
                        {selectedTestimonial.name}
                      </h2>
                      <p className="text-xl text-gray-300">{selectedTestimonial.title}</p>
                      <div className="flex items-center gap-2 text-gray-400 mt-1">
                        <MapPin className="w-4 h-4" />
                        {selectedTestimonial.location}, {selectedTestimonial.country}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedTestimonial(null)}
                    className="text-3xl text-gray-400 hover:text-white transition-colors"
                  >
                    ×
                  </button>
                </div>

                <div className="space-y-6">
                  <div className={`p-6 rounded-2xl bg-gradient-to-br ${selectedTestimonial.bgGradient} bg-opacity-10 border border-white/20`}>
                    <Quote className="text-3xl text-white/50 mb-4" />
                    <p className="text-xl text-white leading-relaxed">
                      {selectedTestimonial.fullStory}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                      <h3 className="text-white font-bold mb-3">Success Details</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-300">Timeline:</span>
                          <span className="text-blue-400 font-medium">{selectedTestimonial.timeline}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Visa Type:</span>
                          <span className="text-green-400 font-medium">{selectedTestimonial.visaType}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Year:</span>
                          <span className="text-purple-400 font-medium">{selectedTestimonial.year}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                      <h3 className="text-white font-bold mb-3">Current Status</h3>
                      <div className="p-3 bg-green-500/20 rounded-lg border border-green-500/30">
                        <p className="text-green-300 font-medium text-sm">
                          {selectedTestimonial.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
