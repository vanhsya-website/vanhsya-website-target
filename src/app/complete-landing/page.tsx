'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import AIToolsShowcase from '@/components/AIToolsShowcase';
import WhyChooseVanhsya from '@/components/WhyChooseVanhsya';
import SuccessStories from '@/components/SuccessStories';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CountriesSection from '@/components/CountriesSection';
import FAQSection from '@/components/FAQSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { 
  Globe, 
  Award, 
  Shield, 
  Clock,
  Star,
  CheckCircle,
  ArrowRight,
  Bot,
  Heart,
  TrendingUp
} from 'lucide-react';

export default function CompleteLandingPage() {
  const features = [
    {
      icon: Award,
      title: "98% Success Rate",
      description: "Industry-leading success rate with proven track record",
      color: "text-green-600 bg-green-50"
    },
    {
      icon: Clock,
      title: "Fast Processing",
      description: "40% faster than industry average processing times",
      color: "text-blue-600 bg-blue-50"
    },
    {
      icon: Shield,
      title: "100% Secure",
      description: "Bank-level security and complete data protection",
      color: "text-purple-600 bg-purple-50"
    },
    {
      icon: Bot,
      title: "AI-Powered",
      description: "Advanced AI tools for personalized guidance",
      color: "text-orange-600 bg-orange-50"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Successful Applications", icon: CheckCircle },
    { number: "50+", label: "Countries Served", icon: Globe },
    { number: "98%", label: "Success Rate", icon: TrendingUp },
    { number: "24/7", label: "Support Available", icon: Heart }
  ];

  return (
    <div className="min-h-screen">
      
      {/* Enhanced Hero Section */}
      <Hero />

      {/* Quick Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-2xl mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Why Choose VANHSYA
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Experience the difference with our industry-leading immigration services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 text-center shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${feature.color}`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Countries Section */}
      <CountriesSection />

      {/* AI Tools Showcase */}
      <AIToolsShowcase />

      {/* Why Choose VANHSYA */}
      <WhyChooseVanhsya />

      {/* Success Stories */}
      <SuccessStories />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <div className="flex justify-center mb-6">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Immigration Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of satisfied clients who achieved their global mobility dreams with VANHSYA. 
              Get started with a free consultation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/consultation"
                className="px-8 py-4 bg-white text-blue-600 rounded-2xl font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                Start Free Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/ai-tools/eligibility"
                className="px-8 py-4 bg-white/20 text-white rounded-2xl font-semibold hover:bg-white/30 transition-colors"
              >
                Check Eligibility
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      <Footer />
    </div>
  );
}
