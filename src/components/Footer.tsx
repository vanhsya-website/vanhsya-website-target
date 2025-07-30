'use client';

import React from 'react';
import { motion } from 'framer-motion';
import VanhsyaLogo from './VanhsyaLogo';
import { 
  Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin,
  Sparkles, Globe, Shield, Award, Crown, Star, Rocket, Heart,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: '#1877F2' },
    { icon: Twitter, href: '#', label: 'Twitter', color: '#1DA1F2' },
    { icon: Instagram, href: '#', label: 'Instagram', color: '#E4405F' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: '#0A66C2' },
    { icon: Youtube, href: '#', label: 'YouTube', color: '#FF0000' }
  ];

  const quickLinks = [
    { name: 'About VANHSYA', href: '/about', icon: Crown },
    { name: 'Our Services', href: '/services', icon: Sparkles },
    { name: 'Success Stories', href: '/success-stories', icon: Star },
    { name: 'AI Tools', href: '/ai-tools', icon: Rocket },
    { name: 'Blog & Resources', href: '/blog', icon: Globe },
    { name: 'Contact Us', href: '/contact', icon: Mail }
  ];

  const countries = [
    { name: 'Canada Immigration', href: '/countries/canada', flag: '🇨🇦' },
    { name: 'Australia Visa', href: '/countries/australia', flag: '🇦🇺' },
    { name: 'USA Green Card', href: '/countries/usa', flag: '🇺🇸' },
    { name: 'UK Opportunities', href: '/countries/uk', flag: '🇬🇧' },
    { name: 'New Zealand', href: '/countries/new-zealand', flag: '🇳🇿' },
    { name: 'Germany Migration', href: '/countries/germany', flag: '🇩🇪' }
  ];

  const aiServices = [
    { name: 'AI Migration Assistant', href: '/ai-tools/migration-assistant', icon: '🤖' },
    { name: 'Document Wizard', href: '/ai-tools/document-wizard', icon: '📄' },
    { name: 'Eligibility Calculator', href: '/ai-tools/eligibility-calculator', icon: '🧮' },
    { name: 'AI Chatbot Support', href: '/ai-tools/chatbot', icon: '💬' },
    { name: 'Checklist Assistant', href: '/ai-tools/checklist-assistant', icon: '✅' },
    { name: 'Scam Shield Verifier', href: '/ai-tools/scam-shield', icon: '🛡️' }
  ];

  const awards = [
    { icon: Crown, text: "World's #1 AI Platform" },
    { icon: Star, text: "99.8% Success Rate" },
    { icon: Award, text: "50K+ Happy Clients" },
    { icon: Shield, text: "Military-Grade Security" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const socialVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative z-10 max-w-7xl mx-auto px-6 py-20"
      >
        {/* Awards Section */}
        <motion.div 
          variants={itemVariants}
          className="mb-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center p-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: 'rgba(59, 130, 246, 0.1)',
                  boxShadow: '0 10px 40px rgba(59, 130, 246, 0.3)'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-3"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <award.icon className="w-6 h-6 text-white" />
                </motion.div>
                <span className="text-sm font-semibold text-blue-300 text-center">{award.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <VanhsyaLogo size={64} animated={true} />
              <div>
                <motion.h2 
                  className="text-3xl font-black bg-gradient-to-r from-purple-400 to-gold-400 bg-clip-text text-transparent"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  style={{ backgroundSize: '200% 100%' }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  VANHSYA
                </motion.h2>
                <div className="text-purple-300 font-semibold">AI Migration Platform</div>
              </div>
            </div>
            
            <p className="text-slate-300 mb-6 leading-relaxed">
              The world's most powerful AI-driven migration platform. Experience quantum processing, 
              99.8% success rate, and revolutionary service that redefines possibility in global migration.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              {[
                { icon: Phone, text: '+1-800-VANHSYA', href: 'tel:+18008264792' },
                { icon: Mail, text: 'support@vanhsya.com', href: 'mailto:support@vanhsya.com' },
                { icon: MapPin, text: 'Global HQ, Toronto, Canada', href: '#' }
              ].map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <contact.icon className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span>{contact.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-400" />
              Quick Links
            </h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="flex text-slate-300 hover:text-blue-400 transition-colors group items-center gap-2"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Countries */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-400" />
              Countries
            </h3>
            <div className="space-y-3">
              {countries.map((country, index) => (
                <motion.a
                  key={index}
                  href={country.href}
                  className="flex text-slate-300 hover:text-blue-400 transition-colors group items-center gap-2"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {country.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* AI Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-400" />
              AI Services
            </h3>
            <div className="space-y-3">
              {aiServices.map((service, index) => (
                <motion.a
                  key={index}
                  href={service.href}
                  className="flex text-slate-300 hover:text-blue-400 transition-colors group items-center gap-2"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {service.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div 
          variants={itemVariants}
          className="mt-16 p-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl border border-blue-500/30 backdrop-blur-sm"
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Stay Updated with AI Migration Insights</h3>
            <p className="text-blue-200">Get the latest updates, success stories, and migration opportunities directly to your inbox.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 transition-colors"
            />
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl flex items-center gap-2 justify-center group relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative flex items-center gap-2">
                Subscribe
                <Rocket className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </div>
        </motion.div>

        {/* Social Media & Bottom Section */}
        <motion.div 
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-slate-700/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="text-slate-300 font-semibold">Follow Us:</span>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    variants={socialVariants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: index * 0.1 }}
                    className="w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center hover:bg-slate-700/50 transition-all group"
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: social.color + '20',
                      boxShadow: `0 0 20px ${social.color}40`
                    }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-slate-400 flex items-center gap-2">
                Made with <Heart className="w-4 h-4 text-red-500" /> by VANHSYA Team
              </p>
              <p className="text-slate-500 text-sm mt-1">
                © 2024 VANHSYA. All rights reserved. | Privacy Policy | Terms of Service
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
