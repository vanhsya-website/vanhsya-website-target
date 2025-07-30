'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Globe, 
  Briefcase, 
  Bot,
  FileText,
  Phone,
  Scale,
  ArrowRight,
  CheckCircle,
  Zap,
  Target,
  Gift,
  MessageSquare
} from 'lucide-react';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function SiteMapPage() {
  const sections = [
    {
      title: "Main Pages",
      description: "Core pages of the VANHSYA website",
      icon: Home,
      color: "bg-blue-50 border-blue-200 text-blue-600",
      pages: [
        { name: "Home", href: "/", description: "Landing page with overview of all services" },
        { name: "About Us", href: "/about", description: "Company history, mission, and team information" },
        { name: "Why Choose Us", href: "/why-choose-us", description: "Reasons to choose VANHSYA for immigration" },
        { name: "Team", href: "/team", description: "Meet our immigration experts and consultants" }
      ]
    },
    {
      title: "Immigration Services", 
      description: "Comprehensive visa and immigration services",
      icon: Briefcase,
      color: "bg-green-50 border-green-200 text-green-600",
      pages: [
        { name: "All Services", href: "/services", description: "Complete overview of immigration services" },
        { name: "Work Visa", href: "/services/work-visa", description: "Professional work permits and employment visas" },
        { name: "Study Visa", href: "/services/study-visa", description: "Student visas and education permits" },
        { name: "Tourist Visa", href: "/services/tourist-visa", description: "Travel and tourism visa services" },
        { name: "Family Visa", href: "/services/family-visa", description: "Family reunification and spouse visas" },
        { name: "Business Visa", href: "/services/business-visa", description: "Business and investor visa programs" },
        { name: "Permanent Residence", href: "/services/permanent-residence", description: "PR and citizenship pathways" },
        { name: "Flight Booking", href: "/services/flight-booking", description: "Travel booking and accommodation" }
      ]
    },
    {
      title: "Countries & Destinations",
      description: "Immigration opportunities by country",
      icon: Globe,
      color: "bg-purple-50 border-purple-200 text-purple-600",
      pages: [
        { name: "All Countries", href: "/countries", description: "Overview of all destination countries" },
        { name: "Canada", href: "/countries/canada", description: "Immigration to Canada - Express Entry, PNP" },
        { name: "Australia", href: "/countries/australia", description: "Australian PR and skilled migration" },
        { name: "USA", href: "/countries/usa", description: "US visas and green card programs" },
        { name: "United Kingdom", href: "/countries/uk", description: "UK visas and settlement programs" },
        { name: "Germany", href: "/countries/germany", description: "German work permits and EU Blue Card" },
        { name: "New Zealand", href: "/countries/new-zealand", description: "New Zealand residence and work visas" },
        { name: "UAE", href: "/countries/uae", description: "UAE golden visa and residence permits" },
        { name: "Singapore", href: "/countries/singapore", description: "Singapore PR and employment passes" }
      ]
    },
    {
      title: "AI-Powered Tools",
      description: "Intelligent immigration assistance tools",
      icon: Bot,
      color: "bg-orange-50 border-orange-200 text-orange-600",
      pages: [
        { name: "All AI Tools", href: "/ai-tools", description: "Complete suite of AI immigration tools" },
        { name: "AI Chatbot", href: "/ai-tools/chatbot", description: "24/7 AI immigration assistant" },
        { name: "Eligibility Calculator", href: "/ai-tools/eligibility", description: "Check your immigration eligibility" },
        { name: "Document Wizard", href: "/ai-tools/document-wizard", description: "AI-powered document preparation" },
        { name: "Checklist Assistant", href: "/ai-tools/checklist-assistant", description: "Personalized application checklists" },
        { name: "Scam Detector", href: "/ai-tools/scam-detector", description: "Protect against immigration fraud" },
        { name: "Migration Assistant", href: "/ai-tools/migration-assistant", description: "Complete migration planning tool" }
      ]
    },
    {
      title: "Programs & Rewards",
      description: "Special programs and client benefits",
      icon: Gift,
      color: "bg-pink-50 border-pink-200 text-pink-600",
      pages: [
        { name: "All Programs", href: "/programs", description: "Overview of reward programs" },
        { name: "Referral Program", href: "/referral-program", description: "Earn rewards for referrals" },
        { name: "Lucky Draw", href: "/lucky-draw", description: "Monthly prize draws for clients" },
        { name: "Lottery Voucher", href: "/lottery-voucher", description: "Special lottery participation vouchers" },
        { name: "AI Innovations", href: "/ai-innovations", description: "Latest AI technology features" }
      ]
    },
    {
      title: "Resources & Support",
      description: "Information and support resources", 
      icon: FileText,
      color: "bg-teal-50 border-teal-200 text-teal-600",
      pages: [
        { name: "Blog", href: "/blog", description: "Immigration news, tips, and guides" },
        { name: "Resources", href: "/resources", description: "Guides, templates, and helpful materials" },
        { name: "Success Stories", href: "/success-stories", description: "Client success stories and testimonials" },
        { name: "FAQ", href: "/faq", description: "Frequently asked questions" },
        { name: "Tools", href: "/tools", description: "Various immigration calculation tools" }
      ]
    },
    {
      title: "Contact & Support",
      description: "Get in touch and book consultations",
      icon: Phone,
      color: "bg-indigo-50 border-indigo-200 text-indigo-600",
      pages: [
        { name: "Contact Us", href: "/contact", description: "Multiple ways to get in touch" },
        { name: "Consultation", href: "/consultation", description: "Book a consultation with experts" },
        { name: "Client Portal", href: "/portal", description: "Secure client login and dashboard" },
        { name: "Dashboard", href: "/dashboard", description: "Real-time analytics and monitoring" }
      ]
    },
    {
      title: "Legal & Policies",
      description: "Terms, privacy, and legal information",
      icon: Scale,
      color: "bg-slate-50 border-slate-200 text-slate-600",
      pages: [
        { name: "Privacy Policy", href: "/privacy", description: "How we protect your personal data" },
        { name: "Terms of Service", href: "/terms", description: "Terms and conditions of service" }
      ]
    }
  ];

  const stats = [
    { number: "67", label: "Total Pages" },
    { number: "8", label: "Main Sections" },
    { number: "15+", label: "AI Tools" },
    { number: "9", label: "Countries" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-2xl">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <span className="text-sm font-medium text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
                Complete Website Map
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
              All VANHSYA <span className="text-blue-600">Pages</span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Explore every page and service available on the VANHSYA platform. 
              From immigration services to AI tools, find everything you need for your global mobility journey.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-3xl md:text-4xl font-bold text-blue-600 mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sections Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8">
            {sections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: sectionIndex * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-2xl ${section.color.split(' ')[0]} ${section.color.split(' ')[1]}`}>
                    <section.icon className={`w-6 h-6 ${section.color.split(' ')[2]}`} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-800">{section.title}</h2>
                    <p className="text-slate-600">{section.description}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {section.pages.map((page) => (
                    <Link
                      key={page.href}
                      href={page.href}
                      className="group p-4 rounded-2xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                          {page.name}
                        </h3>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-sm text-slate-600 group-hover:text-slate-700">
                        {page.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Your Immigration Journey
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Ready to explore your options? Start with our most popular tools and services.
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                href="/ai-tools/eligibility"
                className="p-4 bg-white/20 rounded-2xl hover:bg-white/30 transition-colors"
              >
                <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                <div className="font-semibold">Check Eligibility</div>
              </Link>
              <Link
                href="/consultation"
                className="p-4 bg-white/20 rounded-2xl hover:bg-white/30 transition-colors"
              >
                <MessageSquare className="w-8 h-8 mx-auto mb-2" />
                <div className="font-semibold">Book Consultation</div>
              </Link>
              <Link
                href="/services"
                className="p-4 bg-white/20 rounded-2xl hover:bg-white/30 transition-colors"
              >
                <Zap className="w-8 h-8 mx-auto mb-2" />
                <div className="font-semibold">View Services</div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
