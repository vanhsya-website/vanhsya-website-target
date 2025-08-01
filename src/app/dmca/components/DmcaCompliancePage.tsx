'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Shield,
  Scale,
  FileText,
  AlertTriangle,
  Mail,
  Phone,
  Clock,
  ChevronDown,
  Send,
  User,
  MapPin,
  Building,
  Gavel,
  BookOpen,
  Lock,
  Globe
} from 'lucide-react'

import BackNavigation from '@/components/BackNavigation'
import Footer from '@/components/Footer'

// Hero Banner Component
const DmcaHero: React.FC = () => {
  return (
    <section className="relative min-h-[50vh] bg-gradient-to-br from-neutral-950 via-red-950 to-orange-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* DMCA Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg rounded-full px-6 py-2 mb-8 border border-white/20"
          >
            <Scale className="w-5 h-5 text-orange-400" />
            <span className="text-white/90 font-medium">DMCA Protected</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            DMCA{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-pink-400">
              Compliance
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Digital Millennium Copyright Act compliance and intellectual property protection. 
            Your content rights matter to us.
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto"
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 border border-white/10">
              <div className="text-2xl font-bold text-orange-400 mb-1">24h</div>
              <div className="text-sm text-neutral-300">Response Time</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 border border-white/10">
              <div className="text-2xl font-bold text-red-400 mb-1">100%</div>
              <div className="text-sm text-neutral-300">Compliance Rate</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 border border-white/10">
              <div className="text-2xl font-bold text-pink-400 mb-1">Legal</div>
              <div className="text-sm text-neutral-300">Protection</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Table of Contents Component
const TableOfContents: React.FC = () => {
  const sections = [
    { id: 'overview', title: 'DMCA Overview', icon: Shield },
    { id: 'notice-procedure', title: 'Notice & Takedown', icon: FileText },
    { id: 'counter-notice', title: 'Counter-Notice Process', icon: Scale },
    { id: 'safe-harbor', title: 'Safe Harbor Provisions', icon: Lock },
    { id: 'contact-info', title: 'Contact Information', icon: Mail },
    { id: 'legal-disclaimer', title: 'Legal Disclaimer', icon: Gavel }
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8, duration: 0.8 }}
      className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 sticky top-8"
    >
      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        <BookOpen className="w-5 h-5 text-orange-400" />
        Table of Contents
      </h3>
      <nav className="space-y-3">
        {sections.map((section, index) => (
          <motion.button
            key={section.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 + index * 0.1 }}
            onClick={() => scrollToSection(section.id)}
            className="w-full text-left flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
          >
            <section.icon className="w-4 h-4 text-orange-400 group-hover:text-orange-300 transition-colors" />
            <span className="text-neutral-300 group-hover:text-white transition-colors text-sm">
              {section.title}
            </span>
          </motion.button>
        ))}
      </nav>
    </motion.div>
  )
}

// DMCA Notice Form Component
const DmcaNoticeForm: React.FC = () => {
  const [formData, setFormData] = useState({
    complainantName: '',
    complainantEmail: '',
    complainantAddress: '',
    copyrightWork: '',
    infringingURL: '',
    statement: '',
    signature: '',
    date: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    // Form data would be sent to DMCA processing endpoint
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
    >
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <Send className="w-6 h-6 text-orange-400" />
        Submit DMCA Takedown Notice
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-2">
              <User className="w-4 h-4 inline mr-2" />
              Full Name *
            </label>
            <input
              type="text"
              required
              value={formData.complainantName}
              onChange={(e) => setFormData({...formData, complainantName: e.target.value})}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
              placeholder="Your legal name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-neutral-300 mb-2">
              <Mail className="w-4 h-4 inline mr-2" />
              Email Address *
            </label>
            <input
              type="email"
              required
              value={formData.complainantEmail}
              onChange={(e) => setFormData({...formData, complainantEmail: e.target.value})}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-300 mb-2">
            <MapPin className="w-4 h-4 inline mr-2" />
            Physical Address *
          </label>
          <textarea
            required
            value={formData.complainantAddress}
            onChange={(e) => setFormData({...formData, complainantAddress: e.target.value})}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
            rows={3}
            placeholder="Your complete physical address"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-300 mb-2">
            <FileText className="w-4 h-4 inline mr-2" />
            Description of Copyrighted Work *
          </label>
          <textarea
            required
            value={formData.copyrightWork}
            onChange={(e) => setFormData({...formData, copyrightWork: e.target.value})}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
            rows={4}
            placeholder="Detailed description of the copyrighted work that has been infringed"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-300 mb-2">
            <Globe className="w-4 h-4 inline mr-2" />
            Infringing Material URL *
          </label>
          <input
            type="url"
            required
            value={formData.infringingURL}
            onChange={(e) => setFormData({...formData, infringingURL: e.target.value})}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
            placeholder="https://www.vanhsya.com/page-with-infringing-content"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-300 mb-2">
            <Scale className="w-4 h-4 inline mr-2" />
            Good Faith Statement *
          </label>
          <textarea
            required
            value={formData.statement}
            onChange={(e) => setFormData({...formData, statement: e.target.value})}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
            rows={3}
            placeholder="I have a good faith belief that the use of the material is not authorized by the copyright owner..."
          />
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-4 px-8 rounded-xl hover:from-orange-400 hover:to-red-400 transition-all duration-300 flex items-center justify-center gap-2"
        >
          <Send className="w-5 h-5" />
          Submit DMCA Notice
        </motion.button>
      </form>
    </motion.div>
  )
}

// Main DMCA Compliance Page Component
export default function DmcaCompliancePage() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section)
  }

  const sections = [
    {
      id: 'overview',
      title: 'DMCA Overview',
      icon: Shield,
      content: `The Digital Millennium Copyright Act (DMCA) is a United States copyright law that protects 
      online service providers from liability for copyright infringement committed by their users, provided 
      they follow specific procedures for removing infringing content when notified. VANHSYA Global Migration 
      respects intellectual property rights and complies with the DMCA.`
    },
    {
      id: 'notice-procedure',
      title: 'Notice & Takedown Procedure',
      icon: FileText,
      content: `If you believe that your copyrighted work has been copied and is accessible on our website 
      in a way that constitutes copyright infringement, please provide our designated agent with the following 
      information in writing: (1) Identification of the copyrighted work, (2) Identification of the allegedly 
      infringing material, (3) Your contact information, (4) A statement of good faith belief, (5) A statement 
      of accuracy and authorization to act on behalf of the copyright owner, (6) Your physical or electronic signature.`
    },
    {
      id: 'counter-notice',
      title: 'Counter-Notice Process',
      icon: Scale,
      content: `If you believe that material you posted was removed or disabled by mistake or misidentification, 
      you may file a counter-notification. The counter-notice must include: (1) Your physical or electronic signature, 
      (2) Identification of the material and its location before removal, (3) A statement under penalty of perjury 
      that you have a good faith belief the material was removed by mistake, (4) Your contact information and consent 
      to jurisdiction in the federal district court.`
    },
    {
      id: 'safe-harbor',
      title: 'Safe Harbor Provisions',
      icon: Lock,
      content: `VANHSYA Global Migration operates under the DMCA's Safe Harbor provisions. We do not monitor 
      user-generated content proactively but respond promptly to valid takedown notices. We maintain a policy 
      of terminating repeat infringers' access to our services. Our compliance includes: (1) Designated agent 
      registration, (2) Notice and takedown procedures, (3) Repeat infringer policy, (4) No actual knowledge standard.`
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-black">
      {/* Navigation */}
      <BackNavigation />
      
      {/* Hero Section */}
      <DmcaHero />

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents - Sidebar */}
          <div className="lg:col-span-1">
            <TableOfContents />
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-8">
            {/* Content Sections */}
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-8 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                  </div>
                  <motion.div
                    animate={{ rotate: activeSection === section.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6 text-neutral-400" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {activeSection === section.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8">
                        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                          <p className="text-neutral-300 leading-relaxed">
                            {section.content}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}

            {/* DMCA Notice Form */}
            <DmcaNoticeForm />

            {/* Contact Information */}
            <motion.div
              id="contact-info"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Mail className="w-6 h-6 text-orange-400" />
                DMCA Designated Agent
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-orange-400" />
                    <div>
                      <p className="text-sm text-neutral-400">Designated Agent</p>
                      <p className="text-white font-medium">Legal Department</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-orange-400" />
                    <div>
                      <p className="text-sm text-neutral-400">Email</p>
                      <p className="text-white font-medium">dmca@vanhsya.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-orange-400" />
                    <div>
                      <p className="text-sm text-neutral-400">Phone</p>
                      <p className="text-white font-medium">+971 4 441 7173</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Building className="w-5 h-5 text-orange-400 mt-1" />
                    <div>
                      <p className="text-sm text-neutral-400">Mailing Address</p>
                      <p className="text-white font-medium">
                        VANHSYA Global Migration<br />
                        DMCA Agent<br />
                        Level 1, Jewellery & Gemplex 3<br />
                        Dubai Multi Commodities Centre<br />
                        Dubai, UAE
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-orange-400" />
                    <div>
                      <p className="text-sm text-neutral-400">Response Time</p>
                      <p className="text-white font-medium">24-48 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Legal Disclaimer */}
            <motion.div
              id="legal-disclaimer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.8 }}
              className="bg-gradient-to-br from-red-950/20 to-orange-950/20 backdrop-blur-lg rounded-3xl p-8 border border-red-500/20"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-red-400" />
                Important Legal Notice
              </h3>
              
              <div className="space-y-4 text-neutral-300">
                <p>
                  <strong className="text-red-400">False Claims Warning:</strong> Under Section 512(f) of the DMCA, 
                  any person who knowingly materially misrepresents that material is infringing may be subject to liability.
                </p>
                
                <p>
                  <strong className="text-orange-400">Legal Advice:</strong> This page provides general information about 
                  DMCA procedures and should not be considered legal advice. Consult with an attorney for specific legal matters.
                </p>
                
                <p>
                  <strong className="text-yellow-400">Processing Time:</strong> We typically process valid DMCA notices 
                  within 24-48 hours. Complex cases may require additional time for review.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
