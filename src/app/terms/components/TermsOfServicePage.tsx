'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FileText,
  Scale,
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Globe,
  Users,
  CreditCard,
  Gavel,
  Building,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  Info,
  UserCheck,
  RefreshCw,
  Lock,
  BookOpen
} from 'lucide-react'

import BackNavigation from '@/components/BackNavigation'
import Footer from '@/components/Footer'

// Hero Section Component
const TermsHero: React.FC = () => {
  return (
    <section className="relative min-h-[50vh] bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
        {/* Legal Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
      </div>

      <div className="relative container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Legal Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg rounded-full px-6 py-2 mb-8 border border-white/20"
          >
            <Scale className="w-5 h-5 text-blue-400" />
            <span className="text-white/90 font-medium">Legally Binding Agreement</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Terms of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              Service
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Clear, fair, and comprehensive terms that protect both you and VANHSYA. 
            Please read these terms carefully before using our services.
          </motion.p>

          {/* Key Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="text-white font-semibold mb-1">Fair & Transparent</div>
              <div className="text-slate-300 text-sm">No hidden clauses or surprises</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <UserCheck className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="text-white font-semibold mb-1">Client Protection</div>
              <div className="text-slate-300 text-sm">Your rights and guarantees</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <Scale className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-white font-semibold mb-1">Legal Compliance</div>
              <div className="text-slate-300 text-sm">Fully compliant with regulations</div>
            </div>
          </motion.div>

          {/* Last Updated */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-12 text-slate-400 text-sm"
          >
            Last updated: January 30, 2025 | Effective Date: February 1, 2025
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
      className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-8 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-300"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-6 h-6 text-slate-600" />
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
            <div className="px-8 pb-8 border-t border-slate-200">
              <div className="pt-6 prose prose-lg prose-slate max-w-none">
                {children}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// Info Card Component
interface InfoCardProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  type?: 'success' | 'warning' | 'info' | 'error'
}

const InfoCard: React.FC<InfoCardProps> = ({ icon: Icon, title, description, type = 'info' }) => {
  const typeStyles = {
    success: 'bg-green-50 border-green-200 text-green-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    error: 'bg-red-50 border-red-200 text-red-800'
  }

  const iconStyles = {
    success: 'text-green-600',
    warning: 'text-yellow-600',
    info: 'text-blue-600',
    error: 'text-red-600'
  }

  return (
    <div className={`p-4 rounded-lg border ${typeStyles[type]}`}>
      <div className="flex items-start gap-3">
        <Icon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${iconStyles[type]}`} />
        <div>
          <h5 className="font-semibold mb-1">{title}</h5>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}

// Main Terms of Service Component
export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <BackNavigation />
      
      {/* Hero Section */}
      <TermsHero />

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
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Service Agreement Overview
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              These Terms of Service constitute a legally binding agreement between you and VANHSYA 
              regarding your use of our immigration services, website, and related offerings.
            </p>
          </motion.div>

          {/* Terms Sections */}
          <div className="space-y-8 mb-16">
            
            {/* Service Agreement */}
            <CollapsibleSection
              title="Service Agreement"
              icon={FileText}
              defaultOpen={true}
            >
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">Scope of Services</h4>
                  <p className="text-slate-700 mb-4">
                    VANHSYA provides comprehensive immigration consultation and document preparation services. 
                    Our services include but are not limited to:
                  </p>
                  <ul className="space-y-2 text-slate-700 ml-6">
                    <li>• Immigration consultation and pathway assessment</li>
                    <li>• Visa application preparation and document review</li>
                    <li>• Educational credential evaluation guidance</li>
                    <li>• Job search and employer liaison assistance</li>
                    <li>• Post-arrival settlement support services</li>
                    <li>• Legal compliance and regulatory guidance</li>
                  </ul>
                </div>

                <InfoCard
                  icon={Info}
                  title="Service Limitations"
                  description="VANHSYA is not a law firm and does not provide legal advice. We are immigration consultants providing guidance and document preparation services. For complex legal matters, we may refer you to qualified immigration lawyers."
                  type="info"
                />

                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">Service Delivery</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-100 rounded-lg">
                      <h5 className="font-semibold text-slate-900 mb-2">Consultation Services</h5>
                      <p className="text-slate-700 text-sm">
                        One-on-one consultations via video call, phone, or in-person meetings 
                        to assess your immigration options.
                      </p>
                    </div>
                    <div className="p-4 bg-slate-100 rounded-lg">
                      <h5 className="font-semibold text-slate-900 mb-2">Document Preparation</h5>
                      <p className="text-slate-700 text-sm">
                        Professional preparation and review of all required immigration 
                        documents and application forms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CollapsibleSection>

            {/* User Responsibilities */}
            <CollapsibleSection
              title="User Responsibilities"
              icon={Users}
            >
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">Client Obligations</h4>
                  <p className="text-slate-700 mb-4">
                    As a client of VANHSYA, you agree to fulfill the following responsibilities:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold text-slate-900">Accurate Information</h5>
                        <p className="text-slate-700 text-sm">
                          Provide complete, accurate, and truthful information for all assessments and applications.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold text-slate-900">Timely Communication</h5>
                        <p className="text-slate-700 text-sm">
                          Respond promptly to requests for information, documents, or clarifications.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold text-slate-900">Document Authenticity</h5>
                        <p className="text-slate-700 text-sm">
                          Ensure all provided documents are genuine, unaltered, and legally valid.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold text-slate-900">Payment Obligations</h5>
                        <p className="text-slate-700 text-sm">
                          Make payments according to agreed schedules and payment terms.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <InfoCard
                  icon={AlertTriangle}
                  title="Consequences of Non-Compliance"
                  description="Failure to meet client responsibilities may result in delays, additional fees, or termination of services. Providing false information may result in application rejection by immigration authorities."
                  type="warning"
                />

                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">Prohibited Activities</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-slate-700">
                      <XCircle className="w-4 h-4 text-red-600" />
                      <span>Providing false or misleading information</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <XCircle className="w-4 h-4 text-red-600" />
                      <span>Using our services for fraudulent purposes</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <XCircle className="w-4 h-4 text-red-600" />
                      <span>Sharing login credentials or account access</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <XCircle className="w-4 h-4 text-red-600" />
                      <span>Reverse engineering or copying our processes</span>
                    </div>
                  </div>
                </div>
              </div>
            </CollapsibleSection>

            {/* Refund Policy */}
            <CollapsibleSection
              title="Refund Policy"
              icon={CreditCard}
            >
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">Refund Eligibility</h4>
                  <p className="text-slate-700 mb-4">
                    We stand behind our services and offer fair refund policies based on the type of service and circumstances:
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h5 className="font-semibold text-slate-900 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Eligible for Refund
                    </h5>
                    <div className="space-y-3 ml-7">
                      <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                        <h6 className="font-medium text-green-900 mb-1">Service Not Rendered</h6>
                        <p className="text-green-800 text-sm">
                          Full refund if we haven't begun work on your case within 5 business days.
                        </p>
                      </div>
                      
                      <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                        <h6 className="font-medium text-green-900 mb-1">Cooling Off Period</h6>
                        <p className="text-green-800 text-sm">
                          48-hour cooling off period for consultation services (before consultation occurs).
                        </p>
                      </div>
                      
                      <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                        <h6 className="font-medium text-green-900 mb-1">Service Error</h6>
                        <p className="text-green-800 text-sm">
                          Partial or full refund if our error significantly impacts your application.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h5 className="font-semibold text-slate-900 flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-600" />
                      Not Eligible for Refund
                    </h5>
                    <div className="space-y-3 ml-7">
                      <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                        <h6 className="font-medium text-red-900 mb-1">Completed Services</h6>
                        <p className="text-red-800 text-sm">
                          No refund once consultation has occurred or documents have been prepared.
                        </p>
                      </div>
                      
                      <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                        <h6 className="font-medium text-red-900 mb-1">Government Decisions</h6>
                        <p className="text-red-800 text-sm">
                          No refund for visa rejections or delays caused by immigration authorities.
                        </p>
                      </div>
                      
                      <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                        <h6 className="font-medium text-red-900 mb-1">Client Non-Compliance</h6>
                        <p className="text-red-800 text-sm">
                          No refund if service issues result from client's failure to meet obligations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                  <h5 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                    <RefreshCw className="w-5 h-5" />
                    Refund Process
                  </h5>
                  <div className="text-blue-800 space-y-2">
                    <p>• Submit refund request in writing within 30 days of service completion</p>
                    <p>• Provide detailed reason for refund request with supporting documentation</p>
                    <p>• Allow 5-10 business days for review and processing</p>
                    <p>• Approved refunds processed within 14 business days to original payment method</p>
                  </div>
                </div>
              </div>
            </CollapsibleSection>

            {/* Dispute Resolution */}
            <CollapsibleSection
              title="Dispute Resolution"
              icon={Gavel}
            >
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">Resolution Process</h4>
                  <p className="text-slate-700 mb-4">
                    We are committed to resolving any disputes fairly and efficiently. Our multi-step 
                    resolution process ensures both parties have adequate opportunity to resolve matters amicably.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                    <div>
                      <h5 className="font-semibold text-slate-900 mb-2">Direct Communication</h5>
                      <p className="text-slate-700 mb-2">
                        Contact your assigned consultant or our client services team to discuss the issue.
                      </p>
                      <div className="text-sm text-slate-600">
                        <strong>Timeline:</strong> 2-3 business days for initial response
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                    <div>
                      <h5 className="font-semibold text-slate-900 mb-2">Management Review</h5>
                      <p className="text-slate-700 mb-2">
                        If unresolved, the matter is escalated to senior management for comprehensive review.
                      </p>
                      <div className="text-sm text-slate-600">
                        <strong>Timeline:</strong> 5-7 business days for review and response
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                    <div>
                      <h5 className="font-semibold text-slate-900 mb-2">Third-Party Mediation</h5>
                      <p className="text-slate-700 mb-2">
                        If still unresolved, we agree to binding mediation through a mutually agreed mediator.
                      </p>
                      <div className="text-sm text-slate-600">
                        <strong>Timeline:</strong> 30 days to complete mediation process
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                    <div>
                      <h5 className="font-semibold text-slate-900 mb-2">Legal Arbitration</h5>
                      <p className="text-slate-700 mb-2">
                        Final resort involves binding arbitration under the rules of the governing jurisdiction.
                      </p>
                      <div className="text-sm text-slate-600">
                        <strong>Timeline:</strong> As determined by arbitration rules
                      </div>
                    </div>
                  </div>
                </div>

                <InfoCard
                  icon={Shield}
                  title="Limitation of Liability"
                  description="VANHSYA's liability is limited to the amount paid for services. We are not liable for consequential damages, lost opportunities, or government decisions beyond our control."
                  type="info"
                />
              </div>
            </CollapsibleSection>

            {/* Governing Law */}
            <CollapsibleSection
              title="Governing Law"
              icon={Building}
            >
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">Jurisdiction and Applicable Law</h4>
                  <p className="text-slate-700 mb-4">
                    These Terms of Service are governed by and construed in accordance with the laws 
                    of [Your Jurisdiction], without regard to conflict of law principles.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-3">Legal Framework</h5>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-blue-600" />
                        <span className="text-slate-700">Immigration and Refugee Protection Act (Canada)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Scale className="w-4 h-4 text-blue-600" />
                        <span className="text-slate-700">Consumer Protection Laws</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Lock className="w-4 h-4 text-blue-600" />
                        <span className="text-slate-700">Privacy and Data Protection Acts</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-blue-600" />
                        <span className="text-slate-700">Professional Services Regulations</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-slate-900 mb-3">Regulatory Compliance</h5>
                    <div className="space-y-3">
                      <div className="p-3 bg-slate-100 rounded-lg">
                        <h6 className="font-medium text-slate-900 mb-1">ICCRC Membership</h6>
                        <p className="text-slate-700 text-sm">
                          Our consultants are registered with the Immigration Consultants of Canada Regulatory Council.
                        </p>
                      </div>
                      
                      <div className="p-3 bg-slate-100 rounded-lg">
                        <h6 className="font-medium text-slate-900 mb-1">Professional Standards</h6>
                        <p className="text-slate-700 text-sm">
                          We adhere to all professional standards and codes of conduct for immigration consultants.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-100 rounded-lg p-6">
                  <h5 className="font-semibold text-slate-900 mb-3">Contact Information for Legal Matters</h5>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <span className="text-slate-700">legal@vanhsyaglobal.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-green-600" />
                      <span className="text-slate-700">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-purple-600" />
                      <span className="text-slate-700">Legal Department</span>
                    </div>
                  </div>
                </div>
              </div>
            </CollapsibleSection>

            {/* Additional Terms */}
            <CollapsibleSection
              title="Additional Terms & Conditions"
              icon={BookOpen}
            >
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Intellectual Property</h4>
                    <ul className="space-y-2 text-slate-700">
                      <li>• All content, processes, and materials are proprietary to VANHSYA</li>
                      <li>• Clients may not reproduce or distribute our materials</li>
                      <li>• Feedback and suggestions become property of VANHSYA</li>
                      <li>• Trademark and copyright protections apply</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Privacy & Confidentiality</h4>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Strict confidentiality of all client information</li>
                      <li>• Secure handling and storage of sensitive documents</li>
                      <li>• Limited disclosure only as required by law</li>
                      <li>• Comprehensive privacy policy governs data use</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">Service Modifications</h4>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <div className="text-yellow-800">
                        <p className="font-medium mb-1">Terms Updates</p>
                        <p className="text-sm">
                          We reserve the right to modify these terms with 30 days notice. 
                          Continued use of services constitutes acceptance of updated terms.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">Force Majeure</h4>
                  <p className="text-slate-700 mb-3">
                    VANHSYA is not liable for delays or failures due to circumstances beyond our reasonable control, including:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-1 text-slate-700">
                      <li>• Government policy changes</li>
                      <li>• Natural disasters</li>
                      <li>• Pandemic-related restrictions</li>
                    </ul>
                    <ul className="space-y-1 text-slate-700">
                      <li>• Technical system failures</li>
                      <li>• Labor disputes</li>
                      <li>• International conflicts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CollapsibleSection>

          </div>

          {/* Agreement CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white"
          >
            <Scale className="w-16 h-16 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">
              Agreement Acknowledgment
            </h3>
            <p className="text-xl mb-8 text-blue-100">
              By using VANHSYA services, you acknowledge that you have read, understood, 
              and agree to be bound by these Terms of Service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors duration-200">
                Contact Legal Team
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors duration-200">
                Download Terms PDF
              </button>
            </div>
            <div className="mt-6 text-blue-200 text-sm">
              For questions about these terms, contact: legal@vanhsyaglobal.com
            </div>
          </motion.div>

        </div>
      </div>

      <Footer />
    </div>
  )
}
