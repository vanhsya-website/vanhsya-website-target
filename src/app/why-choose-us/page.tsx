'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Heart, 
  Globe, 
  Award, 
  Shield,
  ArrowRight,
  Star,
  Clock,
  Home
} from 'lucide-react';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function WhyChooseUsPage() {
  // Enhanced breadcrumb navigation
  const breadcrumbs = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'About', href: '/about' },
    { label: 'Why Choose VANHSYA', href: '/why-choose-us' }
  ];

  const reasons = [
    {
      icon: Award,
      title: "98% Success Rate",
      description: "Industry-leading success rate with over 10,000 successful visa applications processed.",
      stats: "10,000+ Successful Cases",
      color: "bg-green-50 border-green-200 text-green-600"
    },
    {
      icon: Clock,
      title: "Fastest Processing",
      description: "Average processing time 40% faster than industry standard with dedicated case managers.",
      stats: "40% Faster Processing",
      color: "bg-blue-50 border-blue-200 text-blue-600"
    },
    {
      icon: Shield,
      title: "100% Transparency",
      description: "Complete transparency in fees, processes, and timelines. No hidden charges ever.",
      stats: "Zero Hidden Fees",
      color: "bg-purple-50 border-purple-200 text-purple-600"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Licensed immigration consultants and lawyers with 15+ years of experience.",
      stats: "15+ Years Experience",
      color: "bg-orange-50 border-orange-200 text-orange-600"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Offices in 8 countries with local expertise for 50+ destinations worldwide.",
      stats: "50+ Destinations",
      color: "bg-teal-50 border-teal-200 text-teal-600"
    },
    {
      icon: Heart,
      title: "Personalized Care",
      description: "One-on-one support throughout your journey with dedicated case managers.",
      stats: "24/7 Support",
      color: "bg-pink-50 border-pink-200 text-pink-600"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      location: "Toronto, Canada",
      program: "Express Entry",
      quote: "VANHSYA made my Canadian PR dream come true. Their expertise and support were invaluable.",
      rating: 5,
      image: "/images/testimonials/sarah-chen.jpg"
    },
    {
      name: "Ahmed Al-Rashid",
      location: "Dubai, UAE",
      program: "Business Visa",
      quote: "Professional service from start to finish. They guided me through every step of the process.",
      rating: 5,
      image: "/images/testimonials/ahmed-rashid.jpg"
    },
    {
      name: "Emma Thompson", 
      location: "Sydney, Australia",
      program: "Skilled Migration",
      quote: "Exceptional service! They turned a complex process into a smooth journey.",
      rating: 5,
      image: "/images/testimonials/emma-thompson.jpg"
    }
  ];

  const achievements = [
    { number: "10,000+", label: "Successful Applications" },
    { number: "50+", label: "Countries Served" },
    { number: "98%", label: "Success Rate" },
    { number: "15+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" },
    { number: "8", label: "Office Locations" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      
      {/* Navigation Breadcrumbs */}
      <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center space-x-2 py-4">
            {breadcrumbs.map((crumb, index) => (
              <div key={crumb.href} className="flex items-center">
                {index > 0 && <span className="text-slate-400 mx-2">/</span>}
                {crumb.href && index < breadcrumbs.length - 1 ? (
                  <Link 
                    href={crumb.href}
                    className="flex items-center space-x-1 text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    {crumb.icon && <crumb.icon className="w-4 h-4" />}
                    <span>{crumb.label}</span>
                  </Link>
                ) : (
                  <span className="flex items-center space-x-1 text-blue-600 font-medium">
                    <span>{crumb.label}</span>
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-2xl">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <span className="text-sm font-medium text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
                Trusted by 10,000+ Clients
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
              Why Choose <span className="text-blue-600">VANHSYA</span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Experience the difference with our industry-leading immigration services. 
              We've helped thousands achieve their global mobility dreams with unmatched expertise and care.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main>

      {/* Achievements Stats */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          >
            {achievements.map((achievement, index) => (
              <div key={achievement.label} className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-3xl md:text-4xl font-bold text-blue-600 mb-2"
                >
                  {achievement.number}
                </motion.div>
                <div className="text-slate-600 font-medium">{achievement.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We're not just another immigration consultancy. Here's what makes VANHSYA the preferred choice for global migration.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 rounded-3xl border-2 ${reason.color} bg-white shadow-sm hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-2xl ${reason.color.split(' ')[0]} ${reason.color.split(' ')[1]}`}>
                    <reason.icon className={`w-6 h-6 ${reason.color.split(' ')[2]}`} />
                  </div>
                  <span className={`text-sm px-3 py-1 rounded-full font-medium ${reason.color}`}>
                    {reason.stats}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-3">{reason.title}</h3>
                <p className="text-slate-600 leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Real stories from real people who achieved their immigration goals with VANHSYA.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-200"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-slate-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">{testimonial.location}</div>
                    <div className="text-sm text-blue-600">{testimonial.program}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of satisfied clients who chose VANHSYA for their immigration needs. 
              Let's make your global mobility dream a reality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/consultation"
                className="px-8 py-4 bg-white text-blue-600 rounded-2xl font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-white/20 text-white rounded-2xl font-semibold hover:bg-white/30 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
}
