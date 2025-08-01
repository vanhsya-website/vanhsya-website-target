'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Cookie,
  Shield,
  Settings,
  Eye,
  Database,
  Globe,
  ChevronDown,
  ToggleLeft,
  ToggleRight,
  Save,
  Info,
  Lock,
  BarChart3,
  Target,
  BookOpen,
  Check,
  X
} from 'lucide-react'

import BackNavigation from '@/components/BackNavigation'
import Footer from '@/components/Footer'

// Cookie Types
interface CookieCategory {
  id: string
  name: string
  description: string
  essential: boolean
  enabled: boolean
  icon: React.ComponentType<{ className?: string }>
  examples: string[]
}

// Hero Banner Component
const CookiesHero: React.FC = () => {
  return (
    <section className="relative min-h-[50vh] bg-gradient-to-br from-neutral-950 via-amber-950 to-orange-950 overflow-hidden">
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
          {/* Cookie Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg rounded-full px-6 py-2 mb-8 border border-white/20"
          >
            <Cookie className="w-5 h-5 text-amber-400" />
            <span className="text-white/90 font-medium">GDPR Compliant</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Cookie{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-400">
              Policy
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Transparency in how we use cookies to enhance your experience on VANHSYA Global Migration. 
            Your privacy choices matter to us.
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto"
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 border border-white/10">
              <div className="text-2xl font-bold text-amber-400 mb-1">Essential</div>
              <div className="text-sm text-neutral-300">Always Active</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 border border-white/10">
              <div className="text-2xl font-bold text-orange-400 mb-1">Optional</div>
              <div className="text-sm text-neutral-300">Your Choice</div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-4 border border-white/10">
              <div className="text-2xl font-bold text-red-400 mb-1">Control</div>
              <div className="text-sm text-neutral-300">Full Transparency</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Cookie Settings Component
const CookieSettings: React.FC = () => {
  const [cookieCategories, setCookieCategories] = useState<CookieCategory[]>([
    {
      id: 'essential',
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function and cannot be switched off.',
      essential: true,
      enabled: true,
      icon: Shield,
      examples: ['Session cookies', 'Security tokens', 'Load balancing']
    },
    {
      id: 'functional',
      name: 'Functional Cookies',
      description: 'These cookies enable enhanced functionality and personalization.',
      essential: false,
      enabled: true,
      icon: Settings,
      examples: ['Language preferences', 'Region settings', 'Accessibility options']
    },
    {
      id: 'analytics',
      name: 'Analytics Cookies',
      description: 'These cookies help us understand how visitors interact with our website.',
      essential: false,
      enabled: false,
      icon: BarChart3,
      examples: ['Google Analytics', 'Page views', 'User behavior tracking']
    },
    {
      id: 'marketing',
      name: 'Marketing Cookies',
      description: 'These cookies are used to track visitors across websites for advertising purposes.',
      essential: false,
      enabled: false,
      icon: Target,
      examples: ['Ad targeting', 'Retargeting pixels', 'Social media tracking']
    }
  ])

  const toggleCategory = (categoryId: string) => {
    setCookieCategories(prev => 
      prev.map(category => 
        category.id === categoryId && !category.essential
          ? { ...category, enabled: !category.enabled }
          : category
      )
    )
  }

  const acceptAll = () => {
    setCookieCategories(prev => 
      prev.map(category => ({ ...category, enabled: true }))
    )
  }

  const rejectOptional = () => {
    setCookieCategories(prev => 
      prev.map(category => ({
        ...category,
        enabled: category.essential
      }))
    )
  }

  const savePreferences = () => {
    // Save cookie preferences
    // In a real application, this would save to localStorage or send to server
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
    >
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <Settings className="w-6 h-6 text-amber-400" />
        Cookie Preferences
      </h3>

      <div className="space-y-6">
        {cookieCategories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 + index * 0.1 }}
            className="bg-white/5 rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl ${category.essential ? 'bg-green-500/20' : 'bg-amber-500/20'}`}>
                  <category.icon className={`w-6 h-6 ${category.essential ? 'text-green-400' : 'text-amber-400'}`} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    {category.name}
                    {category.essential && (
                      <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full">
                        Required
                      </span>
                    )}
                  </h4>
                  <p className="text-neutral-300 text-sm mt-1">{category.description}</p>
                </div>
              </div>
              
              <button
                onClick={() => toggleCategory(category.id)}
                disabled={category.essential}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  category.essential 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:bg-white/10'
                }`}
              >
                {category.enabled ? (
                  <ToggleRight className="w-8 h-8 text-green-400" />
                ) : (
                  <ToggleLeft className="w-8 h-8 text-neutral-400" />
                )}
              </button>
            </div>

            <div className="mt-4">
              <p className="text-xs text-neutral-400 mb-2">Examples:</p>
              <div className="flex flex-wrap gap-2">
                {category.examples.map((example, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-white/10 text-neutral-300 px-2 py-1 rounded-full"
                  >
                    {example}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 mt-8">
        <motion.button
          onClick={acceptAll}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex-1 min-w-[150px] bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold py-3 px-6 rounded-xl hover:from-green-400 hover:to-emerald-400 transition-all duration-300 flex items-center justify-center gap-2"
        >
          <Check className="w-5 h-5" />
          Accept All
        </motion.button>

        <motion.button
          onClick={rejectOptional}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex-1 min-w-[150px] bg-gradient-to-r from-neutral-600 to-neutral-700 text-white font-bold py-3 px-6 rounded-xl hover:from-neutral-500 hover:to-neutral-600 transition-all duration-300 flex items-center justify-center gap-2"
        >
          <X className="w-5 h-5" />
          Essential Only
        </motion.button>

        <motion.button
          onClick={savePreferences}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex-1 min-w-[150px] bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold py-3 px-6 rounded-xl hover:from-amber-400 hover:to-orange-400 transition-all duration-300 flex items-center justify-center gap-2"
        >
          <Save className="w-5 h-5" />
          Save Preferences
        </motion.button>
      </div>
    </motion.div>
  )
}

// Table of Contents Component
const TableOfContents: React.FC = () => {
  const sections = [
    { id: 'what-are-cookies', title: 'What Are Cookies?', icon: Cookie },
    { id: 'cookie-types', title: 'Types of Cookies', icon: Database },
    { id: 'how-we-use', title: 'How We Use Cookies', icon: Eye },
    { id: 'third-party', title: 'Third-Party Cookies', icon: Globe },
    { id: 'cookie-settings', title: 'Cookie Settings', icon: Settings },
    { id: 'your-rights', title: 'Your Rights', icon: Shield }
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
        <BookOpen className="w-5 h-5 text-amber-400" />
        Quick Navigation
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
            <section.icon className="w-4 h-4 text-amber-400 group-hover:text-amber-300 transition-colors" />
            <span className="text-neutral-300 group-hover:text-white transition-colors text-sm">
              {section.title}
            </span>
          </motion.button>
        ))}
      </nav>
    </motion.div>
  )
}

// Main Cookies Policy Page Component
export default function CookiesPolicyPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section)
  }

  const sections = [
    {
      id: 'what-are-cookies',
      title: 'What Are Cookies?',
      icon: Cookie,
      content: `Cookies are small text files that are placed on your computer or mobile device when you visit 
      a website. They are widely used to make websites work more efficiently and provide information to website owners. 
      Cookies contain information that is transferred to your computer's hard drive and help us recognize your browser 
      and capture certain information. At VANHSYA Global Migration, we use cookies to enhance your browsing experience 
      and provide personalized services.`
    },
    {
      id: 'cookie-types',
      title: 'Types of Cookies We Use',
      icon: Database,
      content: `We use four main types of cookies: (1) Essential cookies that are necessary for the website to function 
      properly, (2) Functional cookies that enhance functionality and personalization, (3) Analytics cookies that help 
      us understand website usage patterns, and (4) Marketing cookies for advertising and retargeting purposes. Each 
      type serves a specific purpose in improving your experience on our website.`
    },
    {
      id: 'how-we-use',
      title: 'How We Use Cookies',
      icon: Eye,
      content: `VANHSYA Global Migration uses cookies to: (1) Remember your preferences and settings, (2) Provide 
      personalized content and immigration advice, (3) Analyze website traffic and user behavior, (4) Improve our 
      services and user experience, (5) Ensure website security and prevent fraud, (6) Enable social media features, 
      and (7) Deliver relevant advertisements. All cookie usage complies with international privacy regulations 
      including GDPR and CCPA.`
    },
    {
      id: 'third-party',
      title: 'Third-Party Cookies',
      icon: Globe,
      content: `Some cookies on our website are set by third-party services we use, including Google Analytics for 
      website analysis, social media platforms for sharing functionality, advertising networks for targeted ads, 
      and customer support tools for live chat. These third parties have their own privacy policies governing their 
      use of cookies. We carefully select our partners and ensure they maintain high privacy standards.`
    },
    {
      id: 'your-rights',
      title: 'Your Cookie Rights',
      icon: Shield,
      content: `You have the right to: (1) Accept or decline non-essential cookies, (2) Change your cookie preferences 
      at any time, (3) Delete cookies from your browser, (4) Browse our website with essential cookies only, 
      (5) Request information about cookies we use, and (6) Withdraw consent for optional cookies. You can manage 
      your preferences using our cookie settings panel or through your browser settings.`
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-black">
      {/* Navigation */}
      <BackNavigation />
      
      {/* Hero Section */}
      <CookiesHero />

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
                    <div className="p-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl">
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

            {/* Cookie Settings Panel */}
            <div id="cookie-settings">
              <CookieSettings />
            </div>

            {/* Cookie Management Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Info className="w-6 h-6 text-amber-400" />
                Browser Cookie Management
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Desktop Browsers</h4>
                  <div className="space-y-2 text-neutral-300 text-sm">
                    <p><strong>Chrome:</strong> Settings → Privacy → Cookies</p>
                    <p><strong>Firefox:</strong> Options → Privacy → Cookies</p>
                    <p><strong>Safari:</strong> Preferences → Privacy</p>
                    <p><strong>Edge:</strong> Settings → Privacy → Cookies</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">Mobile Browsers</h4>
                  <div className="space-y-2 text-neutral-300 text-sm">
                    <p><strong>iOS Safari:</strong> Settings → Safari → Privacy</p>
                    <p><strong>Android Chrome:</strong> Menu → Settings → Privacy</p>
                    <p><strong>Samsung Internet:</strong> Settings → Privacy</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-amber-500/20 rounded-xl border border-amber-400/30">
                <p className="text-amber-300 text-sm">
                  <strong>Note:</strong> Disabling cookies may affect website functionality and your user experience. 
                  Essential cookies are required for basic website operations.
                </p>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.8 }}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Lock className="w-6 h-6 text-amber-400" />
                Questions About Cookies?
              </h3>
              
              <p className="text-neutral-300 mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact our 
                Data Protection Officer:
              </p>
              
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="space-y-2 text-neutral-300">
                  <p><strong className="text-white">Email:</strong> privacy@vanhsya.com</p>
                  <p><strong className="text-white">Phone:</strong> +971 4 441 7173</p>
                  <p><strong className="text-white">Address:</strong> DMCC Business Centre, Dubai, UAE</p>
                </div>
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
