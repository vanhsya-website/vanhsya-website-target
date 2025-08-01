'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Shield,
  Lock,
  Eye,
  Database,
  UserCheck,
  Globe,
  Download,
  Mail,
  Phone,
  MapPin,
  Clock,
  ChevronDown,
  Check,
  AlertTriangle,
  Info,
  Settings,
  Trash2,
  Edit,
  Share,
  Cookie,
  Users,
  Building
} from 'lucide-react'

import BackNavigation from '@/components/BackNavigation'
import Footer from '@/components/Footer'

// Hero Banner Component
const PrivacyHero: React.FC = () => {
  return (
    <section className="relative min-h-[50vh] bg-gradient-to-br from-neutral-950 via-blue-950 to-purple-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
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
          {/* Privacy Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg rounded-full px-6 py-2 mb-8 border border-white/20"
          >
            <Shield className="w-5 h-5 text-green-400" />
            <span className="text-white/90 font-medium">GDPR Compliant</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Your Privacy,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Our Priority
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            We believe in transparency, security, and your fundamental right to privacy. 
            Learn how we protect your data with industry-leading standards.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">256-bit</div>
              <div className="text-neutral-400">SSL Encryption</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-neutral-400">Data Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">0</div>
              <div className="text-neutral-400">Data Breaches</div>
            </div>
          </motion.div>

          {/* Last Updated */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-12 text-neutral-400 text-sm"
          >
            Last updated: January 30, 2025
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Collapsible Section Component
interface CollapsibleSectionProps {
  title: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
  defaultOpen?: boolean
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ 
  title, 
  icon: Icon, 
  children, 
  defaultOpen = false 
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-xl border border-neutral-200 overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-8 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors duration-300"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-neutral-900">{title}</h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-6 h-6 text-neutral-600" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-8 border-t border-neutral-200">
              <div className="pt-6 prose prose-lg prose-neutral max-w-none">
                {children}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// Privacy Rights Card Component
interface PrivacyRightProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  action: string
}

const PrivacyRightCard: React.FC<PrivacyRightProps> = ({ icon: Icon, title, description, action }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-gradient-to-br from-white to-neutral-50 rounded-xl p-6 border border-neutral-200 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h4 className="text-lg font-bold text-neutral-900 mb-2">{title}</h4>
      <p className="text-neutral-600 mb-4 leading-relaxed">{description}</p>
      <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors duration-200">
        {action} →
      </button>
    </motion.div>
  )
}

// Main Privacy Policy Component
export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <BackNavigation />
      
      {/* Hero Section */}
      <PrivacyHero />

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-neutral-900 mb-6">
              Comprehensive Privacy Protection
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              At VANHSYA, we understand that your personal information is valuable and sensitive. 
              This policy explains how we collect, use, protect, and respect your data in accordance 
              with GDPR and international privacy standards.
            </p>
          </motion.div>

          {/* Privacy Sections */}
          <div className="space-y-8 mb-16">
            
            {/* Data We Collect */}
            <CollapsibleSection
              title="Data We Collect"
              icon={Database}
              defaultOpen={true}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    Personal Information
                  </h4>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• Full name and contact details</li>
                    <li>• Email address and phone number</li>
                    <li>• Passport and identification documents</li>
                    <li>• Educational and professional background</li>
                    <li>• Immigration history and preferences</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-green-600" />
                    Technical Data
                  </h4>
                  <ul className="space-y-2 text-neutral-700">
                    <li>• IP address and browser information</li>
                    <li>• Device type and operating system</li>
                    <li>• Website usage patterns and analytics</li>
                    <li>• Cookie preferences and settings</li>
                    <li>• Security logs and access records</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-blue-900 mb-1">Data Minimization Principle</h5>
                    <p className="text-blue-800 text-sm">
                      We only collect data that is necessary for providing our immigration services. 
                      We never collect sensitive personal data without explicit consent.
                    </p>
                  </div>
                </div>
              </div>
            </CollapsibleSection>

            {/* How We Use Your Data */}
            <CollapsibleSection
              title="How We Use Your Data"
              icon={Settings}
            >
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-neutral-900 mb-3">Primary Purposes</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <h5 className="font-semibold text-green-900 mb-2">Service Delivery</h5>
                      <p className="text-green-800 text-sm">
                        Processing visa applications, providing consultation, and delivering 
                        immigration services as requested.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h5 className="font-semibold text-blue-900 mb-2">Communication</h5>
                      <p className="text-blue-800 text-sm">
                        Sending updates, notifications, and important information about 
                        your application status and services.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                      <h5 className="font-semibold text-purple-900 mb-2">Legal Compliance</h5>
                      <p className="text-purple-800 text-sm">
                        Meeting regulatory requirements and maintaining records as 
                        required by immigration authorities.
                      </p>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                      <h5 className="font-semibold text-orange-900 mb-2">Service Improvement</h5>
                      <p className="text-orange-800 text-sm">
                        Analyzing usage patterns to enhance our services and 
                        develop new features that benefit our clients.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-red-900 mb-1">What We Never Do</h5>
                      <ul className="text-red-800 text-sm space-y-1">
                        <li>• Sell your personal data to third parties</li>
                        <li>• Use your data for unauthorized marketing</li>
                        <li>• Share sensitive information without consent</li>
                        <li>• Store data longer than necessary</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CollapsibleSection>

            {/* Cookie Policy */}
            <CollapsibleSection
              title="Cookie Policy"
              icon={Cookie}
            >
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-neutral-900 mb-3">Types of Cookies We Use</h4>
                  <div className="space-y-4">
                    <div className="border border-neutral-200 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <h5 className="font-semibold text-neutral-900">Essential Cookies</h5>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Required</span>
                      </div>
                      <p className="text-neutral-700 text-sm">
                        Necessary for the website to function properly. These cookies enable core functionality 
                        such as security, network management, and accessibility.
                      </p>
                    </div>
                    
                    <div className="border border-neutral-200 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <h5 className="font-semibold text-neutral-900">Analytics Cookies</h5>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Optional</span>
                      </div>
                      <p className="text-neutral-700 text-sm">
                        Help us understand how visitors interact with our website by collecting and 
                        reporting information anonymously.
                      </p>
                    </div>
                    
                    <div className="border border-neutral-200 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <h5 className="font-semibold text-neutral-900">Functional Cookies</h5>
                        <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">Optional</span>
                      </div>
                      <p className="text-neutral-700 text-sm">
                        Enable enhanced functionality and personalization, such as remembering your 
                        preferences and providing customized content.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-neutral-100 rounded-lg p-4">
                  <h5 className="font-semibold text-neutral-900 mb-2">Managing Cookie Preferences</h5>
                  <p className="text-neutral-700 text-sm mb-3">
                    You can control cookie settings through your browser or our cookie preference center.
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                    Manage Cookie Preferences
                  </button>
                </div>
              </div>
            </CollapsibleSection>

            {/* Your Rights */}
            <CollapsibleSection
              title="Your Rights Under GDPR"
              icon={UserCheck}
            >
              <div className="space-y-6">
                <p className="text-neutral-700">
                  Under the General Data Protection Regulation (GDPR), you have several rights 
                  regarding your personal data. These rights are designed to give you control 
                  over your information and ensure transparency in how it's used.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <PrivacyRightCard
                    icon={Eye}
                    title="Right to Access"
                    description="Request a copy of all personal data we hold about you, including how it's used and who it's shared with."
                    action="Request Your Data"
                  />
                  
                  <PrivacyRightCard
                    icon={Edit}
                    title="Right to Rectification"
                    description="Request correction of inaccurate or incomplete personal data in our records."
                    action="Update Your Information"
                  />
                  
                  <PrivacyRightCard
                    icon={Trash2}
                    title="Right to Erasure"
                    description="Request deletion of your personal data when it's no longer needed or if you withdraw consent."
                    action="Request Deletion"
                  />
                  
                  <PrivacyRightCard
                    icon={Lock}
                    title="Right to Restrict Processing"
                    description="Request that we limit how we use your personal data in certain circumstances."
                    action="Restrict Processing"
                  />
                  
                  <PrivacyRightCard
                    icon={Download}
                    title="Right to Data Portability"
                    description="Receive your personal data in a structured, machine-readable format for transfer to another service."
                    action="Export Your Data"
                  />
                  
                  <PrivacyRightCard
                    icon={Share}
                    title="Right to Object"
                    description="Object to processing of your personal data for direct marketing or other specific purposes."
                    action="Submit Objection"
                  />
                </div>

                <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                  <h5 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Exercise Your Rights
                  </h5>
                  <p className="text-green-800 mb-4">
                    We will respond to your requests within 30 days. In some cases, we may need to 
                    verify your identity to protect your data security.
                  </p>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
                    Submit a Privacy Request
                  </button>
                </div>
              </div>
            </CollapsibleSection>

            {/* Data Security */}
            <CollapsibleSection
              title="Data Security & Protection"
              icon={Shield}
            >
              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                    <Lock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="font-bold text-blue-900 mb-2">Encryption</h4>
                    <p className="text-blue-800 text-sm">
                      All data is encrypted in transit and at rest using industry-standard AES-256 encryption.
                    </p>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
                    <Building className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h4 className="font-bold text-green-900 mb-2">Secure Infrastructure</h4>
                    <p className="text-green-800 text-sm">
                      Data is stored in certified, SOC 2 compliant data centers with 24/7 monitoring.
                    </p>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-200">
                    <UserCheck className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <h4 className="font-bold text-purple-900 mb-2">Access Control</h4>
                    <p className="text-purple-800 text-sm">
                      Strict access controls ensure only authorized personnel can access your data.
                    </p>
                  </div>
                </div>

                <div className="bg-neutral-100 rounded-lg p-6">
                  <h5 className="font-semibold text-neutral-900 mb-3">Security Measures</h5>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-neutral-700">
                        <Check className="w-4 h-4 text-green-600" />
                        Regular security audits and penetration testing
                      </li>
                      <li className="flex items-center gap-2 text-neutral-700">
                        <Check className="w-4 h-4 text-green-600" />
                        Multi-factor authentication for all systems
                      </li>
                      <li className="flex items-center gap-2 text-neutral-700">
                        <Check className="w-4 h-4 text-green-600" />
                        Automated threat detection and response
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-neutral-700">
                        <Check className="w-4 h-4 text-green-600" />
                        Regular staff training on data protection
                      </li>
                      <li className="flex items-center gap-2 text-neutral-700">
                        <Check className="w-4 h-4 text-green-600" />
                        Incident response and breach notification procedures
                      </li>
                      <li className="flex items-center gap-2 text-neutral-700">
                        <Check className="w-4 h-4 text-green-600" />
                        Regular data backups and disaster recovery testing
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CollapsibleSection>

            {/* Contact & Support */}
            <CollapsibleSection
              title="Contact Our Privacy Team"
              icon={Mail}
            >
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-900 mb-4">Privacy Officer</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-blue-600" />
                        <span className="text-neutral-700">privacy@vanhsyaglobal.com</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-green-600" />
                        <span className="text-neutral-700">+1 (555) 123-4567</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-purple-600" />
                        <span className="text-neutral-700">123 Business Ave, Suite 100<br />Privacy Department</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-900 mb-4">Response Times</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-200">
                        <span className="text-green-800 font-medium">Privacy Requests</span>
                        <span className="text-green-600 font-bold">30 days</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <span className="text-blue-800 font-medium">General Inquiries</span>
                        <span className="text-blue-600 font-bold">48 hours</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg border border-red-200">
                        <span className="text-red-800 font-medium">Data Breaches</span>
                        <span className="text-red-600 font-bold">24 hours</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CollapsibleSection>

          </div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white"
          >
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">
              Questions About Your Privacy?
            </h3>
            <p className="text-xl mb-8 text-blue-100">
              Our privacy team is here to help. Contact us for any questions about how we handle your data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors duration-200">
                Contact Privacy Team
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors duration-200">
                Download Privacy Policy
              </button>
            </div>
          </motion.div>

        </div>
      </div>

      <Footer />
    </div>
  )
}
