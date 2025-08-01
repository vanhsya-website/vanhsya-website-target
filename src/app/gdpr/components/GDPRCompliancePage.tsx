'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield,
  Eye,
  Edit3,
  Trash2,
  Ban,
  Download,
  Lock,
  Database,
  Server,
  Key,
  FileText,
  User,
  Mail,
  MapPin,
  BarChart3,
  Cookie,
  Settings,
  Info,
  CheckCircle,
  ArrowRight,
  Calendar,
} from 'lucide-react';

// Floating particles background component
function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

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
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        color: Math.random() > 0.5 ? '#3b82f6' : '#8b5cf6',
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around edges
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}

const GDPRCompliancePage: React.FC = () => {
  const [showCookieModal, setShowCookieModal] = useState(false);

  const userRights = [
    {
      icon: Eye,
      title: 'Right to Access',
      description: 'Request a copy of all personal data we hold about you, including how it\'s processed and shared.',
      color: 'from-blue-500 to-cyan-500',
      shadowColor: 'shadow-blue-500/30',
    },
    {
      icon: Edit3,
      title: 'Right to Rectification',
      description: 'Correct any inaccurate or incomplete personal information in our systems.',
      color: 'from-green-500 to-emerald-500',
      shadowColor: 'shadow-green-500/30',
    },
    {
      icon: Trash2,
      title: 'Right to Erasure',
      description: 'Request deletion of your personal data when there\'s no compelling reason to continue processing.',
      color: 'from-red-500 to-pink-500',
      shadowColor: 'shadow-red-500/30',
    },
    {
      icon: Ban,
      title: 'Right to Object',
      description: 'Object to processing of your personal data for direct marketing or legitimate interests.',
      color: 'from-orange-500 to-amber-500',
      shadowColor: 'shadow-orange-500/30',
    },
    {
      icon: Download,
      title: 'Right to Portability',
      description: 'Receive your personal data in a structured, machine-readable format to transfer to another service.',
      color: 'from-purple-500 to-violet-500',
      shadowColor: 'shadow-purple-500/30',
    },
    {
      icon: Shield,
      title: 'Right to Restrict Processing',
      description: 'Limit how we process your personal data in specific circumstances while maintaining storage.',
      color: 'from-indigo-500 to-blue-500',
      shadowColor: 'shadow-indigo-500/30',
    },
  ];

  const dataTypes = [
    {
      icon: User,
      type: 'Personal Information',
      details: 'Name, age, nationality, profession',
      reason: 'Required for immigration application processing and identity verification',
    },
    {
      icon: Mail,
      type: 'Contact Details',
      details: 'Email address, phone number, mailing address',
      reason: 'Essential for communication throughout your immigration journey',
    },
    {
      icon: FileText,
      type: 'Documents & Files',
      details: 'Passports, certificates, employment records, photos',
      reason: 'Mandatory documentation for visa and immigration applications',
    },
    {
      icon: MapPin,
      type: 'Location Data',
      details: 'Country of residence, intended destination',
      reason: 'Determines applicable immigration laws and processing requirements',
    },
    {
      icon: Calendar,
      type: 'Application Data',
      details: 'Case status, appointment dates, payment records',
      reason: 'Tracks progress and maintains accurate service delivery',
    },
    {
      icon: BarChart3,
      type: 'Analytics & Usage',
      details: 'Website interactions, service preferences, device info',
      reason: 'Improves user experience and optimizes our services',
    },
  ];

  const securityMeasures = [
    {
      icon: Database,
      title: 'Encrypted Storage',
      description: 'All data encrypted using AES-256 encryption standards with Supabase infrastructure',
    },
    {
      icon: Lock,
      title: 'Access Controls',
      description: 'Multi-factor authentication and role-based access for all team members',
    },
    {
      icon: Server,
      title: 'Secure Infrastructure',
      description: 'EU-based servers with SOC 2 Type II certification and regular security audits',
    },
    {
      icon: Key,
      title: 'Data Minimization',
      description: 'We collect only necessary data and automatically purge expired information',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Floating Particles Background */}
      <FloatingParticles />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Section 1 - Hero Title */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Pulsing background effect */}
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl"
              />
              
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                >
                  Your Data, Your Rights
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed"
                >
                  VANHSYA is fully compliant with the European Union GDPR regulation,
                  ensuring your privacy and data protection rights are respected at every step.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="flex items-center justify-center gap-3 text-green-400"
                >
                  <CheckCircle className="h-6 w-6" />
                  <span className="text-lg font-medium">GDPR Compliant Since 2018</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 2 - User Rights Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Your Rights Under GDPR
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                As a data subject, you have comprehensive rights over your personal information. 
                Here's how we ensure you can exercise them effectively.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {userRights.map((right, index) => {
                const Icon = right.icon;
                return (
                  <motion.div
                    key={right.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`group relative overflow-hidden bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-[0_16px_48px_rgba(0,0,0,0.4)] ${right.shadowColor}`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${right.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${right.color} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white/90 transition-colors duration-300">
                        {right.title}
                      </h3>
                      
                      <p className="text-white/70 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                        {right.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Glowing Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_20px_rgba(59,130,246,0.5)] mx-8"
        />

        {/* Section 3 - Data We Collect */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Data We Collect
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Transparency is at the heart of our data practices. Here's exactly what we collect and why it's necessary for your immigration journey.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dataTypes.map((data, index) => {
                const Icon = data.icon;
                return (
                  <motion.div
                    key={data.type}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg mr-4">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white">{data.type}</h3>
                    </div>
                    
                    <p className="text-white/60 text-sm mb-3">{data.details}</p>
                    <p className="text-white/80 text-sm leading-relaxed">{data.reason}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 4 - How It's Stored */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                How We Protect Your Data
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Your information is safeguarded by enterprise-grade security measures and industry-leading encryption standards.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityMeasures.map((measure, index) => {
                const Icon = measure.icon;
                return (
                  <motion.div
                    key={measure.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                    <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300">
                      <div className="flex items-center mb-6">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.8 }}
                          className="p-4 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg mr-4"
                        >
                          <Icon className="h-8 w-8 text-white" />
                        </motion.div>
                        <h3 className="text-2xl font-bold text-white">{measure.title}</h3>
                      </div>
                      <p className="text-white/70 leading-relaxed">{measure.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 5 - User Controls */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Take Control of Your Data
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Exercise your rights with just a few clicks. We've made it simple to access, download, or delete your personal information.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 border border-blue-400/30 hover:border-blue-300/50 transition-all duration-300 shadow-[0_8px_32px_rgba(59,130,246,0.3)] hover:shadow-[0_16px_48px_rgba(59,130,246,0.4)]"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 text-center">
                  <Eye className="h-12 w-12 text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-white mb-2">Request My Data</h3>
                  <p className="text-blue-100 text-sm">Get a complete copy of your personal information</p>
                  <ArrowRight className="h-5 w-5 text-white mx-auto mt-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.button>

              <motion.button
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 border border-green-400/30 hover:border-green-300/50 transition-all duration-300 shadow-[0_8px_32px_rgba(34,197,94,0.3)] hover:shadow-[0_16px_48px_rgba(34,197,94,0.4)]"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 text-center">
                  <Download className="h-12 w-12 text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-white mb-2">Download My Info</h3>
                  <p className="text-green-100 text-sm">Export your data in a portable format</p>
                  <ArrowRight className="h-5 w-5 text-white mx-auto mt-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.button>

              <motion.button
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl p-8 border border-red-400/30 hover:border-red-300/50 transition-all duration-300 shadow-[0_8px_32px_rgba(239,68,68,0.3)] hover:shadow-[0_16px_48px_rgba(239,68,68,0.4)]"
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 text-center">
                  <Trash2 className="h-12 w-12 text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-white mb-2">Delete My Info</h3>
                  <p className="text-red-100 text-sm">Remove your personal data from our systems</p>
                  <ArrowRight className="h-5 w-5 text-white mx-auto mt-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.button>
            </div>
          </div>
        </section>

        {/* Section 6 - Cookies & Trackers */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
            >
              <div className="text-center mb-8">
                <Cookie className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Cookies & Analytics
                </h2>
              </div>
              
              <p className="text-white/70 text-lg leading-relaxed mb-8 text-center">
                We use essential cookies for website functionality and optional analytics cookies to improve our services. 
                You have full control over non-essential cookies and can manage your preferences at any time.
              </p>
              
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowCookieModal(true)}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-2xl hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 shadow-[0_8px_32px_rgba(245,158,11,0.3)] hover:shadow-[0_12px_40px_rgba(245,158,11,0.4)]"
                >
                  <Settings className="h-5 w-5 mr-2" />
                  Manage Cookie Preferences
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 7 - Contact */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] text-center"
            >
              <Info className="h-16 w-16 text-blue-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Questions About Your Data?
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Our privacy team is here to help. Contact us for any questions about your data rights, 
                our privacy practices, or to file a complaint.
              </p>
              
              <motion.a
                href="mailto:privacy@vanhsya.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-400 hover:to-purple-500 transition-all duration-300 shadow-[0_8px_32px_rgba(59,130,246,0.3)] hover:shadow-[0_12px_40px_rgba(59,130,246,0.4)]"
              >
                <Mail className="h-5 w-5 mr-2" />
                privacy@vanhsya.com
              </motion.a>
              
              <p className="text-white/50 text-sm mt-6">
                We respond to all privacy inquiries within 30 days as required by GDPR
              </p>
            </motion.div>
          </div>
        </section>

        {/* Footer Spacing */}
        <div className="h-20" />
      </div>

      {/* Cookie Preferences Modal */}
      <AnimatePresence>
        {showCookieModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setShowCookieModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 max-w-md w-full"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Cookie Preferences</h3>
              <p className="text-white/70 mb-6">
                This is a mock modal. In production, this would connect to your cookie management system.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setShowCookieModal(false)}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:from-green-400 hover:to-emerald-400 transition-all duration-300"
                >
                  Accept All
                </button>
                <button
                  onClick={() => setShowCookieModal(false)}
                  className="flex-1 px-4 py-2 bg-white/20 text-white rounded-xl hover:bg-white/30 transition-all duration-300"
                >
                  Essential Only
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GDPRCompliancePage;
