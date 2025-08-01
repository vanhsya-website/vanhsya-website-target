'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  Scale,
  Shield,
  AlertTriangle,
  CheckCircle,
  CreditCard,
  Gavel,
  Building,
  Mail,
  Download,
  Calendar,
  ChevronDown,
  ChevronRight,
  Info,
  UserCheck,
  RefreshCw,
  Lock,
  BookOpen,
  Sparkles,
  Globe,
  Eye,
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
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.4 + 0.1,
        color: Math.random() > 0.5 ? '#8b5cf6' : '#3b82f6',
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

// Table of Contents Component
interface TOCItem {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}

function TableOfContents({ sections, activeSection }: { sections: TOCItem[]; activeSection: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      className="fixed right-8 top-1/2 transform -translate-y-1/2 z-30 hidden lg:block"
    >
      <div className="bg-black/20 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-4 flex items-center justify-between text-white hover:bg-white/10 transition-colors"
        >
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            <span className="text-sm font-medium">Contents</span>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronRight className="h-4 w-4" />
          </motion.div>
        </button>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden bg-black/30"
            >
              <div className="p-2 space-y-1">
                {sections.map((section) => {
                  const Icon = section.icon;
                  const isActive = activeSection === section.id;
                  return (
                    <button
                      key={section.id}
                      onClick={() => {
                        document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`w-full p-2 rounded-lg flex items-center gap-2 text-left transition-all duration-200 ${
                        isActive 
                          ? 'bg-violet-500/30 text-white border border-violet-400/50' 
                          : 'text-white/70 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Icon className="h-3 w-3 flex-shrink-0" />
                      <span className="text-xs font-medium truncate">{section.title}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// AI Summary Component
function AISummary() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <div className="bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-3xl p-8 border border-violet-400/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white">AI Summary</h3>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="ml-auto p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="h-4 w-4 text-white" />
            </motion.div>
          </button>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-white/10">
                <div className="space-y-3 text-white/80">
                  <p className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">
                      <strong>Usage Rights:</strong> You must be 18+ to use VANHSYA services, provide accurate information, and are responsible for account security.
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">
                      <strong>Service Terms:</strong> All intellectual property belongs to VANHSYA, payments are contract-based with refunds only for failed services.
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">
                      <strong>Legal Framework:</strong> Terms are governed by Dubai (DMCC) law, VANHSYA may terminate access for violations, and liability is limited for third-party delays.
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

const TermsOfUsePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');

  const sections: TOCItem[] = useMemo(() => [
    { id: 'eligibility', title: 'Eligibility', icon: UserCheck },
    { id: 'services', title: 'Services', icon: Globe },
    { id: 'account', title: 'Account Responsibilities', icon: Shield },
    { id: 'intellectual', title: 'Intellectual Property', icon: Lock },
    { id: 'fees', title: 'Fees & Refunds', icon: CreditCard },
    { id: 'liability', title: 'Limitation of Liability', icon: AlertTriangle },
    { id: 'termination', title: 'Termination', icon: RefreshCw },
    { id: 'disputes', title: 'Disputes', icon: Gavel },
    { id: 'changes', title: 'Changes', icon: Calendar },
  ], []);

  // Track active section for TOC
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  const handleDownloadPDF = () => {
    // Mock PDF download functionality
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'VANHSYA-Terms-of-Use.pdf';
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-blue-900 relative overflow-hidden">
      {/* Floating Particles Background */}
      <FloatingParticles />
      
      {/* Table of Contents */}
      <TableOfContents sections={sections} activeSection={activeSection} />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
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
                  scale: [1, 1.02, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-3xl"
              />
              
              <div className="relative bg-black/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-flex items-center gap-3 bg-violet-500/20 backdrop-blur-sm rounded-2xl px-6 py-3 mb-8 border border-violet-400/30"
                >
                  <Scale className="h-5 w-5 text-violet-400" />
                  <span className="text-violet-300 font-medium">Legal Agreement</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-white via-violet-200 to-blue-200 bg-clip-text text-transparent"
                >
                  Terms of Use
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-xl md:text-2xl text-white/70 mb-8 leading-relaxed max-w-3xl mx-auto"
                >
                  Please read these terms and conditions carefully before using our platform.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="flex items-center justify-center gap-6 text-sm text-white/50"
                >
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Last Updated: July 30, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    <span>Version 2.1</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            
            {/* AI Summary */}
            <AISummary />

            {/* Eligibility Section */}
            <motion.div
              id="eligibility"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600">
                  <UserCheck className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Eligibility</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-white/80 leading-relaxed mb-4">
                  To use VANHSYA Global Migration services, you must meet the following eligibility criteria:
                </p>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>You must be at least 18 years of age or the age of majority in your jurisdiction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>If representing a legal entity, you must have the authority to bind that entity to these terms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>You must not be prohibited from using our services under applicable laws</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>You must have the legal capacity to enter into binding agreements</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Services Section */}
            <motion.div
              id="services"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-600">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Services</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-white/80 leading-relaxed mb-4">
                  VANHSYA provides comprehensive immigration and global migration services including:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-400/20">
                    <h4 className="text-white font-semibold mb-2">Permitted Uses</h4>
                    <ul className="space-y-1 text-white/70 text-sm">
                      <li>• Immigration consultation tools</li>
                      <li>• Document preparation portals</li>
                      <li>• Case tracking systems</li>
                      <li>• Educational resources</li>
                    </ul>
                  </div>
                  <div className="bg-red-500/10 rounded-xl p-4 border border-red-400/20">
                    <h4 className="text-white font-semibold mb-2">Prohibited Activities</h4>
                    <ul className="space-y-1 text-white/70 text-sm">
                      <li>• Fraudulent information submission</li>
                      <li>• System manipulation or hacking</li>
                      <li>• Reselling services without authorization</li>
                      <li>• Violating immigration laws</li>
                    </ul>
                  </div>
                </div>
                <p className="text-white/70 text-sm">
                  Any misuse of our services may result in immediate termination of access and potential legal action.
                </p>
              </div>
            </motion.div>

            {/* Account Responsibilities Section */}
            <motion.div
              id="account"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-500 to-violet-600">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Account Responsibilities</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-white/80 leading-relaxed mb-4">
                  As a user of VANHSYA services, you are responsible for:
                </p>
                <div className="space-y-4">
                  <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-400/20">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <Info className="h-4 w-4" />
                      Information Accuracy
                    </h4>
                    <p className="text-white/70 text-sm">
                      Providing complete, accurate, and up-to-date information for all immigration applications and consultations.
                    </p>
                  </div>
                  <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-400/20">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <Lock className="h-4 w-4" />
                      Account Security
                    </h4>
                    <p className="text-white/70 text-sm">
                      Maintaining the confidentiality of your login credentials and notifying us immediately of any unauthorized access.
                    </p>
                  </div>
                  <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-400/20">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Document Authenticity
                    </h4>
                    <p className="text-white/70 text-sm">
                      Ensuring all uploaded documents are genuine, unaltered, and legally obtained.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Intellectual Property Section */}
            <motion.div
              id="intellectual"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600">
                  <Lock className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Intellectual Property</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-white/80 leading-relaxed mb-6">
                  All intellectual property rights in VANHSYA services are exclusively owned by VANHSYA Global Migration, including:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center bg-orange-500/10 rounded-xl p-6 border border-orange-400/20">
                    <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Logos & Branding</h4>
                    <p className="text-white/70 text-sm">VANHSYA trademarks, logos, and brand elements</p>
                  </div>
                  <div className="text-center bg-orange-500/10 rounded-xl p-6 border border-orange-400/20">
                    <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                      <Globe className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">Platform Design</h4>
                    <p className="text-white/70 text-sm">User interfaces, designs, and proprietary algorithms</p>
                  </div>
                  <div className="text-center bg-orange-500/10 rounded-xl p-6 border border-orange-400/20">
                    <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">AI Tools</h4>
                    <p className="text-white/70 text-sm">Proprietary AI-powered immigration assessment tools</p>
                  </div>
                </div>
                <p className="text-white/70 text-sm mt-6">
                  Users are granted a limited, non-exclusive license to use our services for personal immigration purposes only.
                </p>
              </div>
            </motion.div>

            {/* Fees & Refunds Section */}
            <motion.div
              id="fees"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600">
                  <CreditCard className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Fees & Refunds</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                    <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                      <CreditCard className="h-5 w-5" />
                      Payment Terms
                    </h4>
                    <ul className="space-y-2 text-white/70 text-sm">
                      <li>• Payments are contract-based and due upon service initiation</li>
                      <li>• All fees are quoted in USD unless otherwise specified</li>
                      <li>• Government and third-party fees are additional</li>
                      <li>• Payment plans available for qualifying services</li>
                    </ul>
                  </div>
                  <div className="bg-emerald-500/10 rounded-xl p-6 border border-emerald-400/20">
                    <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                      <RefreshCw className="h-5 w-5" />
                      Refund Policy
                    </h4>
                    <ul className="space-y-2 text-white/70 text-sm">
                      <li>• Refunds provided only for failed service delivery</li>
                      <li>• No refunds for government application rejections</li>
                      <li>• Processing fees are non-refundable</li>
                      <li>• Refund requests must be submitted within 30 days</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-yellow-500/10 rounded-xl border border-yellow-400/20">
                  <p className="text-yellow-200 text-sm flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Important:</strong> Refunds are only applicable when VANHSYA fails to deliver contracted services. 
                      Immigration application outcomes are subject to government decisions beyond our control.
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Limitation of Liability Section */}
            <motion.div
              id="liability"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-600">
                  <AlertTriangle className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Limitation of Liability</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-white/80 leading-relaxed mb-6">
                  VANHSYA's liability is limited in the following circumstances:
                </p>
                <div className="space-y-4">
                  <div className="bg-yellow-500/10 rounded-xl p-4 border border-yellow-400/20">
                    <h4 className="text-white font-semibold mb-2">Third-Party Delays</h4>
                    <p className="text-white/70 text-sm">
                      VANHSYA is not responsible for delays caused by government embassies, immigration offices, 
                      or other third-party entities beyond our direct control.
                    </p>
                  </div>
                  <div className="bg-yellow-500/10 rounded-xl p-4 border border-yellow-400/20">
                    <h4 className="text-white font-semibold mb-2">Application Outcomes</h4>
                    <p className="text-white/70 text-sm">
                      We cannot guarantee approval of any immigration application as final decisions rest with relevant authorities.
                    </p>
                  </div>
                  <div className="bg-yellow-500/10 rounded-xl p-4 border border-yellow-400/20">
                    <h4 className="text-white font-semibold mb-2">Maximum Liability</h4>
                    <p className="text-white/70 text-sm">
                      Our total liability shall not exceed the amount paid for the specific service in question.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Termination Section */}
            <motion.div
              id="termination"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-red-500 to-pink-600">
                  <RefreshCw className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Termination</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-white/80 leading-relaxed mb-4">
                  VANHSYA reserves the right to suspend or terminate access to our services under the following conditions:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-red-500/10 rounded-xl p-4 border border-red-400/20">
                    <h4 className="text-white font-semibold mb-2">Immediate Termination</h4>
                    <ul className="space-y-1 text-white/70 text-sm">
                      <li>• Violation of terms of use</li>
                      <li>• Fraudulent activity</li>
                      <li>• Abuse of platform or staff</li>
                      <li>• Non-payment of fees</li>
                    </ul>
                  </div>
                  <div className="bg-red-500/10 rounded-xl p-4 border border-red-400/20">
                    <h4 className="text-white font-semibold mb-2">User-Initiated Termination</h4>
                    <ul className="space-y-1 text-white/70 text-sm">
                      <li>• 30-day written notice required</li>
                      <li>• Outstanding fees must be settled</li>
                      <li>• Data will be retained per privacy policy</li>
                      <li>• Ongoing cases may continue separately</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Disputes Section */}
            <motion.div
              id="disputes"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600">
                  <Gavel className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Disputes</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <div className="bg-indigo-500/10 rounded-xl p-6 border border-indigo-400/20 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Building className="h-6 w-6 text-indigo-400" />
                    <h4 className="text-white font-semibold">Governing Law</h4>
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    These terms are governed by and construed in accordance with the laws of Dubai, United Arab Emirates, 
                    specifically under the Dubai Multi Commodities Centre (DMCC) jurisdiction.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-indigo-500/10 rounded-xl p-4 border border-indigo-400/20">
                    <h4 className="text-white font-semibold mb-2">Dispute Resolution Process</h4>
                    <ol className="space-y-1 text-white/70 text-sm list-decimal list-inside">
                      <li>Direct negotiation (30 days)</li>
                      <li>Mediation through DMCC</li>
                      <li>Binding arbitration if necessary</li>
                      <li>Court proceedings as last resort</li>
                    </ol>
                  </div>
                  <div className="bg-indigo-500/10 rounded-xl p-4 border border-indigo-400/20">
                    <h4 className="text-white font-semibold mb-2">Jurisdiction</h4>
                    <p className="text-white/70 text-sm">
                      All legal proceedings shall be conducted in Dubai, UAE. 
                      By using our services, you consent to this exclusive jurisdiction.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Changes Section */}
            <motion.div
              id="changes"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-600">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Changes to Terms</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-white/80 leading-relaxed mb-6">
                  VANHSYA reserves the right to modify these terms at any time. We will notify users of significant changes through:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center bg-teal-500/10 rounded-xl p-4 border border-teal-400/20">
                    <Mail className="h-8 w-8 mx-auto mb-2 text-teal-400" />
                    <h4 className="text-white font-semibold mb-1">Email Notification</h4>
                    <p className="text-white/70 text-xs">Direct email to registered users</p>
                  </div>
                  <div className="text-center bg-teal-500/10 rounded-xl p-4 border border-teal-400/20">
                    <Globe className="h-8 w-8 mx-auto mb-2 text-teal-400" />
                    <h4 className="text-white font-semibold mb-1">Website Notice</h4>
                    <p className="text-white/70 text-xs">Prominent banner on our platform</p>
                  </div>
                  <div className="text-center bg-teal-500/10 rounded-xl p-4 border border-teal-400/20">
                    <Calendar className="h-8 w-8 mx-auto mb-2 text-teal-400" />
                    <h4 className="text-white font-semibold mb-1">30-Day Notice</h4>
                    <p className="text-white/70 text-xs">Advance notice for major changes</p>
                  </div>
                </div>
                <div className="bg-teal-500/10 rounded-xl p-4 border border-teal-400/20">
                  <h4 className="text-white font-semibold mb-2">Version History</h4>
                  <div className="space-y-2 text-white/70 text-sm">
                    <div className="flex justify-between">
                      <span>Version 2.1 - Current</span>
                      <span>July 30, 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Version 2.0</span>
                      <span>January 15, 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Version 1.5</span>
                      <span>September 8, 2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Glowing Divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent shadow-[0_0_20px_rgba(139,92,246,0.5)] mx-8"
            />

            {/* Contact Legal Team Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-3xl p-12 border border-violet-400/20 text-center"
            >
              <div className="max-w-2xl mx-auto">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center"
                >
                  <Mail className="h-8 w-8 text-white" />
                </motion.div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Questions About These Terms?
                </h2>
                
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  Our legal team is available to clarify any aspects of these terms of use. 
                  We're committed to transparency and clear communication.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <motion.a
                    href="mailto:legal@vanhsya.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold rounded-2xl hover:from-violet-400 hover:to-purple-500 transition-all duration-300 shadow-[0_8px_32px_rgba(139,92,246,0.3)] hover:shadow-[0_12px_40px_rgba(139,92,246,0.4)]"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    legal@vanhsya.com
                  </motion.a>
                  
                  <motion.button
                    onClick={handleDownloadPDF}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/30"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download Terms as PDF
                  </motion.button>
                </div>
                
                <p className="text-white/50 text-sm mt-8">
                  We typically respond to legal inquiries within 2-3 business days
                </p>
              </div>
            </motion.div>

            {/* Footer Information */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center pt-12 border-t border-white/10"
            >
              <div className="space-y-2 text-white/50 text-sm">
                <p>VANHSYA Global Migration DMCC</p>
                <p>Dubai Multi Commodities Centre, United Arab Emirates</p>
                <p className="flex items-center justify-center gap-2 mt-4">
                  <Calendar className="h-4 w-4" />
                  <span>Last Updated: July 30, 2025 | Version 2.1</span>
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer Spacing */}
        <div className="h-20" />
      </div>
    </div>
  );
};

export default TermsOfUsePage;
