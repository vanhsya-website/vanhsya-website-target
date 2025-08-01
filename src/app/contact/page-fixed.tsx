'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Loader2,
  ChevronDown,
  MessageSquare,
  User,
  Globe,
  Shield,
  Users,
  AlertCircle,
  X,
  ArrowRight,
  HelpCircle,
} from 'lucide-react';

// Floating particles background component
function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;
    }> = [];

    // Create particles
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        color: Math.random() > 0.5 ? '#8b5cf6' : '#3b82f6'
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-60"
      style={{ zIndex: 1 }}
    />
  );
}

// VANHSYA Logo with animated signal waves
function VanhsyaLogoWithWaves() {
  return (
    <motion.div 
      className="relative flex items-center gap-4"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Signal waves */}
      <div className="relative">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 border-2 border-violet-400/30 rounded-full"
            animate={{
              scale: [1, 2, 3],
              opacity: [0.8, 0.3, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeOut"
            }}
            style={{
              width: '60px',
              height: '60px',
              left: '-15px',
              top: '-15px'
            }}
          />
        ))}
        
        {/* Logo circle */}
        <motion.div
          className="w-8 h-8 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full flex items-center justify-center relative z-10"
          animate={{
            boxShadow: [
              '0 0 20px rgba(139, 92, 246, 0.5)',
              '0 0 40px rgba(139, 92, 246, 0.8)',
              '0 0 20px rgba(139, 92, 246, 0.5)'
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <MessageCircle className="h-4 w-4 text-white" />
        </motion.div>
      </div>
      
      {/* VANHSYA Text */}
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold bg-gradient-to-r from-violet-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          VANHSYA
        </h1>
        <p className="text-white/60 text-sm -mt-1">Immigration Services</p>
      </motion.div>
    </motion.div>
  );
}

// Contact Form Component
function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.subject) {
      newErrors.subject = 'Please select a subject';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setShowSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setTimeout(() => setShowSuccess(false), 5000);
    } catch {
      // Handle error silently or show error message to user
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="space-y-8">
      {/* Success Toast */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-emerald-500/20 border border-emerald-400/30 rounded-2xl p-4 flex items-center gap-3"
          >
            <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
            <div>
              <p className="text-emerald-300 font-medium">Message sent successfully!</p>
              <p className="text-emerald-300/80 text-sm">We'll get back to you within 24 hours.</p>
            </div>
            <button
              onClick={() => setShowSuccess(false)}
              className="text-emerald-300 hover:text-emerald-200 transition-colors ml-auto"
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-white/90 text-sm font-semibold mb-3">
              Full Name *
            </label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="text"
              id="fullName"
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              className={`w-full px-4 py-4 bg-white/10 backdrop-blur-sm border-2 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300 font-medium ${
                errors.fullName 
                  ? 'border-red-400 focus:ring-red-400/30 bg-red-500/10' 
                  : 'border-white/20 focus:border-violet-400 focus:ring-violet-400/30 hover:border-white/30'
              }`}
              placeholder="Enter your full name"
            />
            {errors.fullName && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm mt-2 flex items-center gap-2 font-medium"
              >
                <AlertCircle className="h-4 w-4" />
                {errors.fullName}
              </motion.p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-white/90 text-sm font-semibold mb-3">
              Email Address *
            </label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`w-full px-4 py-4 bg-white/10 backdrop-blur-sm border-2 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300 font-medium ${
                errors.email 
                  ? 'border-red-400 focus:ring-red-400/30 bg-red-500/10' 
                  : 'border-white/20 focus:border-violet-400 focus:ring-violet-400/30 hover:border-white/30'
              }`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm mt-2 flex items-center gap-2 font-medium"
              >
                <AlertCircle className="h-4 w-4" />
                {errors.email}
              </motion.p>
            )}
          </div>
        </div>

        {/* Phone and Subject Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-white/90 text-sm font-semibold mb-3">
              Phone Number *
            </label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className={`w-full px-4 py-4 bg-white/10 backdrop-blur-sm border-2 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300 font-medium ${
                errors.phone 
                  ? 'border-red-400 focus:ring-red-400/30 bg-red-500/10' 
                  : 'border-white/20 focus:border-violet-400 focus:ring-violet-400/30 hover:border-white/30'
              }`}
              placeholder="+1 (555) 123-4567"
            />
            {errors.phone && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm mt-2 flex items-center gap-2 font-medium"
              >
                <AlertCircle className="h-4 w-4" />
                {errors.phone}
              </motion.p>
            )}
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-white/90 text-sm font-semibold mb-3">
              Inquiry Type *
            </label>
            <motion.select
              whileFocus={{ scale: 1.01 }}
              id="subject"
              value={formData.subject}
              onChange={(e) => handleInputChange('subject', e.target.value)}
              className={`w-full px-4 py-4 bg-white/10 backdrop-blur-sm border-2 rounded-2xl text-white focus:outline-none focus:ring-2 transition-all duration-300 font-medium ${
                errors.subject 
                  ? 'border-red-400 focus:ring-red-400/30 bg-red-500/10' 
                  : 'border-white/20 focus:border-violet-400 focus:ring-violet-400/30 hover:border-white/30'
              }`}
            >
              <option value="" className="bg-slate-800 text-white">Select inquiry type</option>
              <option value="general" className="bg-slate-800 text-white">General Information</option>
              <option value="visa-consultation" className="bg-slate-800 text-white">Visa Consultation</option>
              <option value="work-permit" className="bg-slate-800 text-white">Work Permit</option>
              <option value="permanent-residence" className="bg-slate-800 text-white">Permanent Residence</option>
              <option value="family-sponsorship" className="bg-slate-800 text-white">Family Sponsorship</option>
              <option value="business-immigration" className="bg-slate-800 text-white">Business Immigration</option>
              <option value="student-visa" className="bg-slate-800 text-white">Student Visa</option>
              <option value="urgent-assistance" className="bg-slate-800 text-white">Urgent Assistance</option>
            </motion.select>
            {errors.subject && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm mt-2 flex items-center gap-2 font-medium"
              >
                <AlertCircle className="h-4 w-4" />
                {errors.subject}
              </motion.p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-white/90 text-sm font-semibold mb-3">
            Message *
          </label>
          <motion.textarea
            whileFocus={{ scale: 1.01 }}
            id="message"
            rows={6}
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            className={`w-full px-4 py-4 bg-white/10 backdrop-blur-sm border-2 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300 resize-none font-medium ${
              errors.message 
                ? 'border-red-400 focus:ring-red-400/30 bg-red-500/10' 
                : 'border-white/20 focus:border-violet-400 focus:ring-violet-400/30 hover:border-white/30'
            }`}
            placeholder="Please describe your immigration needs, timeline, and any specific questions you have. The more details you provide, the better we can assist you."
          />
          {errors.message && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm mt-2 flex items-center gap-2 font-medium"
            >
              <AlertCircle className="h-4 w-4" />
              {errors.message}
            </motion.p>
          )}
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isLoading}
          whileHover={{ scale: isLoading ? 1 : 1.02 }}
          whileTap={{ scale: isLoading ? 1 : 0.98 }}
          className={`w-full py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
            isLoading
              ? 'bg-violet-500/50 cursor-not-allowed'
              : 'bg-gradient-to-r from-violet-500 to-blue-600 hover:from-violet-400 hover:to-blue-500 shadow-[0_8px_32px_rgba(139,69,255,0.3)] hover:shadow-[0_12px_40px_rgba(139,69,255,0.4)]'
          } text-white`}
        >
          {isLoading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Sending Message...
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              Send Message
            </>
          )}
        </motion.button>

        {/* Privacy Note */}
        <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
          <p className="text-white/70 text-sm leading-relaxed">
            <strong className="text-white/90">Privacy Note:</strong> Your information is secure and will only be used to respond to your inquiry. We follow strict confidentiality protocols and never share your details with third parties.
          </p>
        </div>
      </form>
    </div>
  );
}

// Contact Details Component
function ContactDetails() {
  const contactMethods = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+971 4 441 7173',
      action: 'Call Now',
      href: 'tel:+97144417173',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@vanhsya.com',
      action: 'Send Email',
      href: 'mailto:info@vanhsya.com',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MessageSquare,
      label: 'WhatsApp',
      value: '+971 55 123 4567',
      action: 'Chat on WhatsApp',
      href: 'https://wa.me/971551234567',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: MessageCircle,
      label: 'Telegram',
      value: '@VanhsyaSupport',
      action: 'Message on Telegram',
      href: 'https://t.me/VanhsyaSupport',
      gradient: 'from-violet-500 to-purple-500'
    }
  ];

  return (
    <div className="space-y-6">
      {contactMethods.map((method, index) => (
        <motion.div
          key={method.label}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group"
        >
          <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className={`h-12 w-12 bg-gradient-to-r ${method.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}>
              <method.icon className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white/60 text-sm font-medium">{method.label}</p>
              <p className="text-white font-semibold">{method.value}</p>
            </div>
          </div>
          <motion.a
            href={method.href}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`block w-full mt-2 py-3 px-4 bg-gradient-to-r ${method.gradient} text-white font-semibold rounded-xl text-center transition-all duration-300 hover:shadow-lg`}
          >
            {method.action}
          </motion.a>
        </motion.div>
      ))}
      
      {/* Business Hours */}
      <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
            <Clock className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white">Business Hours</h3>
        </div>
        <div className="space-y-2 text-white/80">
          <div className="flex justify-between">
            <span>Monday - Friday</span>
            <span className="font-semibold">9:00 AM - 6:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span>Saturday</span>
            <span className="font-semibold">10:00 AM - 4:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span>Sunday</span>
            <span className="font-semibold">Closed</span>
          </div>
        </div>
        <div className="mt-4 p-3 bg-emerald-500/20 rounded-xl border border-emerald-400/30">
          <p className="text-emerald-300 text-sm">
            <strong>Emergency Support:</strong> Available 24/7 for urgent immigration matters
          </p>
        </div>
      </div>
    </div>
  );
}

// FAQ Component
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does the visa process take?",
      answer: "Processing times vary by visa type and country. Tourist visas typically take 2-5 business days, while work permits can take 2-8 weeks. We provide detailed timelines during consultation."
    },
    {
      question: "What documents do I need for immigration?",
      answer: "Required documents vary by immigration type but commonly include passport, photos, financial statements, medical certificates, and educational credentials. We provide a complete checklist for your specific case."
    },
    {
      question: "Do you offer express processing services?",
      answer: "Yes, we offer priority processing for urgent cases. Express services are available for most visa types with expedited government processing and dedicated case management."
    },
    {
      question: "What are your success rates?",
      answer: "We maintain a 95%+ success rate across all visa categories. Our experienced team ensures thorough preparation and compliance with all immigration requirements."
    },
    {
      question: "Can you help with visa rejections?",
      answer: "Absolutely. We specialize in analyzing rejection reasons, addressing concerns, and resubmitting stronger applications. Many clients succeed on their second attempt with our guidance."
    }
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full p-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
          >
            <span className="text-white font-medium">{faq.question}</span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="h-5 w-5 text-white/60" />
            </motion.div>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-4 pt-0 text-white/70 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Floating Particles Background */}
      <FloatingParticles />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* VANHSYA Logo with Signal Waves */}
              <div className="flex justify-center mb-12">
                <VanhsyaLogoWithWaves />
              </div>

              {/* Pulsing background effect */}
              <motion.div
                animate={{ 
                  scale: [1, 1.02, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-3xl"
              />
              
              <div className="relative bg-black/20 backdrop-blur-sm rounded-3xl p-12 lg:p-16 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="mb-8"
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/20 rounded-full text-violet-300 text-sm font-medium mb-6">
                    <MessageCircle className="h-4 w-4" />
                    <span>Professional Immigration Services</span>
                  </div>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 bg-gradient-to-r from-white via-violet-200 to-blue-200 bg-clip-text text-transparent leading-tight"
                >
                  Let's Get in Touch
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed max-w-4xl mx-auto"
                >
                  Ready to start your immigration journey? Connect with our expert team for personalized guidance and professional support every step of the way.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="flex flex-wrap items-center justify-center gap-8 text-sm text-white/60"
                >
                  <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full">
                    <Users className="h-5 w-5 text-emerald-400" />
                    <span className="font-medium">Expert Team</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full">
                    <Shield className="h-5 w-5 text-blue-400" />
                    <span className="font-medium">Trusted Service</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full">
                    <Globe className="h-5 w-5 text-violet-400" />
                    <span className="font-medium">Global Reach</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500/20 to-blue-500/20 rounded-full text-violet-300 text-sm font-medium mb-6">
                <MessageCircle className="h-4 w-4" />
                <span>Get Professional Assistance</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white via-violet-200 to-blue-200 bg-clip-text text-transparent">
                Start Your Immigration Journey
              </h2>
              <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
                Connect with our expert immigration consultants for personalized guidance, professional documentation, and step-by-step support throughout your application process.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              
              {/* Contact Form - Main Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:col-span-8"
              >
                <div className="bg-black/30 backdrop-blur-md rounded-3xl p-8 lg:p-10 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="h-12 w-12 bg-gradient-to-r from-violet-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <Send className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Send us a Message</h3>
                      <p className="text-white/60">Fill out the form below and we'll get back to you within 24 hours</p>
                    </div>
                  </div>
                  <ContactForm />
                </div>
              </motion.div>

              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="lg:col-span-4 space-y-8"
              >
                {/* Contact Details */}
                <div className="bg-black/30 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Contact Information</h3>
                  </div>
                  <ContactDetails />
                </div>

                {/* Quick Action Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-3xl p-8 cursor-pointer transition-all duration-300 shadow-[0_8px_32px_rgba(16,185,129,0.3)] hover:shadow-[0_12px_40px_rgba(16,185,129,0.4)]"
                >
                  <div className="text-center">
                    <div className="h-16 w-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <User className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Urgent Consultation</h3>
                    <p className="text-white/80 text-sm mb-4">
                      Need immediate assistance? Book a priority consultation with our senior immigration officer.
                    </p>
                    <div className="inline-flex items-center gap-2 text-white font-medium">
                      <span>Talk to Case Officer</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </motion.div>

                {/* FAQ Section */}
                <div className="bg-black/30 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <HelpCircle className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Frequently Asked</h3>
                  </div>
                  <FAQ />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Office Locations Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full text-emerald-300 text-sm font-medium mb-6">
                <MapPin className="h-4 w-4" />
                <span>Visit Our Office</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white via-emerald-200 to-teal-200 bg-clip-text text-transparent">
                Our Global Presence
              </h2>
              <p className="text-lg text-white/70 max-w-3xl mx-auto">
                Visit our state-of-the-art offices for in-person consultations and comprehensive immigration services.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-black/30 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Office Details */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                      <div className="h-10 w-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      Dubai Headquarters
                    </h3>
                    <div className="space-y-4 text-white/80">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-emerald-400 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-white">DMCC Business Centre</p>
                          <p>Level 1, Jewellery & Gemplex 3</p>
                          <p>Dubai Multi Commodities Centre</p>
                          <p>Dubai, United Arab Emirates</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-blue-400" />
                        <span>+971 4 441 7173</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-violet-400" />
                        <span>dubai@vanhsya.com</span>
                      </div>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <h4 className="text-lg font-bold text-white mb-4">Office Amenities</h4>
                    <div className="grid grid-cols-2 gap-3 text-sm text-white/80">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-emerald-400 rounded-full"></div>
                        <span>Free Parking</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-blue-400 rounded-full"></div>
                        <span>WiFi Available</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-violet-400 rounded-full"></div>
                        <span>Private Consultation Rooms</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 bg-orange-400 rounded-full"></div>
                        <span>Document Processing Center</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="relative">
                  <div className="bg-white/10 rounded-2xl p-4 border border-white/20">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.516054844825!2d55.1373!3d25.067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b8b8b8b8b8b%3A0x1b1b1b1b1b1b1b1b!2sDMCC%20Business%20Centre!5e0!3m2!1sen!2sae!4v1635000000000!5m2!1sen!2sae"
                      width="100%"
                      height="300"
                      style={{ border: 0, borderRadius: '12px' }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="grayscale hover:grayscale-0 transition-all duration-300"
                    ></iframe>
                  </div>
                  
                  {/* Quick Directions */}
                  <div className="mt-6 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-6">
                    <h4 className="text-white font-bold mb-3">Getting Here</h4>
                    <div className="space-y-2 text-white/90 text-sm">
                      <p>• 5 minutes from Dubai Metro (DMCC Station)</p>
                      <p>• 15 minutes from Dubai International Airport</p>
                      <p>• Valet parking available</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Spacer */}
        <div className="h-20" />
      </div>
    </div>
  );
}
