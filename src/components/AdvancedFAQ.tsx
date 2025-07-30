'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Filter,
  BookOpen,
  Users,
  Globe,
  FileText,
  Clock,
  Shield,
} from 'lucide-react';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  tags: string[];
  popularity: number;
}

interface Category {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const faqs: FAQ[] = [
  {
    id: '1',
    question: 'What documents do I need for a student visa application?',
    answer:
      'For a student visa application, you typically need: 1) Valid passport, 2) Letter of acceptance from an educational institution, 3) Proof of financial support, 4) Academic transcripts and certificates, 5) English language proficiency test results (IELTS/TOEFL), 6) Statement of Purpose, 7) Medical examination results, 8) Police clearance certificate, 9) Passport-sized photographs. Requirements may vary by country, and our experts will provide you with a complete checklist specific to your destination.',
    category: 'documentation',
    tags: ['student visa', 'documents', 'requirements'],
    popularity: 95,
  },
  {
    id: '2',
    question: 'How long does the visa processing take?',
    answer:
      'Visa processing times vary by country and visa type: Student visas: 2-8 weeks, Work visas: 4-12 weeks, Tourist visas: 1-4 weeks, Immigration visas: 6-24 months. Processing times can be affected by factors like application completeness, country-specific requirements, and seasonal demand. We provide regular updates on your application status and work to expedite the process wherever possible.',
    category: 'timeline',
    tags: ['processing time', 'visa', 'duration'],
    popularity: 92,
  },
  {
    id: '3',
    question: 'What is the success rate of Vanhsya?',
    answer:
      'Vanhsya maintains an impressive 98% success rate across all visa categories. Our high success rate is achieved through thorough case evaluation, meticulous document preparation, expert guidance throughout the process, and our deep understanding of immigration laws. We only take on cases we believe have a strong chance of approval, ensuring the best outcomes for our clients.',
    category: 'services',
    tags: ['success rate', 'statistics', 'results'],
    popularity: 88,
  },
  {
    id: '4',
    question: 'Can I apply for permanent residence directly?',
    answer:
      'Yes, you can apply for permanent residence directly in many countries through various programs: Express Entry (Canada), SkillSelect (Australia), Green Card Lottery (USA), Investment visas, Family sponsorship programs. Eligibility depends on factors like age, education, work experience, language proficiency, and financial resources. Our experts will assess your profile and recommend the best pathway for permanent residence.',
    category: 'immigration',
    tags: ['permanent residence', 'PR', 'eligibility'],
    popularity: 85,
  },
  {
    id: '5',
    question: 'What are the English language requirements?',
    answer:
      'English language requirements vary by country and visa type: IELTS (most common): Overall 6.0-7.5 bands, TOEFL: 80-100+ scores, PTE Academic: 50-65+ scores, CELPIP (Canada): CLB 7-9 levels. Some countries accept alternative tests or may waive requirements for certain nationalities. We provide guidance on which test to take and offer preparation resources to help you achieve the required scores.',
    category: 'visa',
    tags: ['IELTS', 'TOEFL', 'English', 'language test'],
    popularity: 90,
  },
  {
    id: '6',
    question: 'How much does the visa application cost?',
    answer:
      'Visa costs vary significantly by country and type: Government fees: $150-$3,000+, Our service fees: ₹25,000-₹4,00,000 (depending on complexity), Additional costs: Medical exams, police clearances, document translations, courier services. We provide transparent pricing with no hidden costs and offer payment plans for expensive applications. Contact us for a detailed cost breakdown for your specific case.',
    category: 'services',
    tags: ['cost', 'fees', 'pricing'],
    popularity: 87,
  },
  {
    id: '7',
    question: 'Can I bring my family with me?',
    answer:
      'Yes, most visa categories allow family accompaniment: Spouse and dependent children can usually accompany you, Family members need separate applications with additional documentation, Dependent age limits vary (typically under 18-22 years), Some visas have financial requirements for family inclusion. We handle family applications comprehensively, ensuring all members meet requirements and applications are submitted together for faster processing.',
    category: 'immigration',
    tags: ['family', 'spouse', 'dependents'],
    popularity: 83,
  },
  {
    id: '8',
    question: 'What if my visa application is rejected?',
    answer:
      'If your visa is rejected, we offer comprehensive support: Detailed analysis of rejection reasons, Appeal filing where applicable, Reapplication with strengthened documentation, Alternative visa pathway recommendations, Full refund if rejection is due to our error. Our low rejection rate means this is rare, but we stand by our clients throughout the entire process and work tirelessly to achieve positive outcomes.',
    category: 'support',
    tags: ['rejection', 'appeal', 'reapplication'],
    popularity: 75,
  },
  {
    id: '9',
    question: 'Do you provide post-landing services?',
    answer:
      "Yes, we offer comprehensive post-landing support: Airport pickup arrangements, Initial accommodation assistance, Bank account opening guidance, SIN/TFN number application help, Job search support and resume formatting, Healthcare registration assistance, Children's school enrollment help, Settlement orientation programs. Our support continues even after you reach your destination to ensure smooth integration into your new country.",
    category: 'services',
    tags: ['post-landing', 'settlement', 'support'],
    popularity: 78,
  },
  {
    id: '10',
    question: 'How do I track my application status?',
    answer:
      "We provide multiple ways to track your application: Personal client portal with real-time updates, Regular email and SMS notifications, Dedicated case manager for direct communication, Weekly status calls for complex cases, Government tracking number sharing, Document submission confirmations. You'll always know exactly where your application stands and what the next steps are.",
    category: 'support',
    tags: ['tracking', 'status', 'updates'],
    popularity: 80,
  },
  {
    id: '11',
    question: 'What is Express Entry and how does it work?',
    answer:
      "Express Entry is Canada's main immigration system for skilled workers, covering three programs: Federal Skilled Worker, Canadian Experience Class, Federal Skilled Trades. The process involves: Creating an online profile, Receiving a Comprehensive Ranking System (CRS) score, Entering the pool of candidates, Receiving an Invitation to Apply (ITA) in regular draws, Submitting complete application within 60 days. We help optimize your CRS score and guide you through each step.",
    category: 'immigration',
    tags: ['Express Entry', 'Canada', 'CRS', 'ITA'],
    popularity: 93,
  },
  {
    id: '12',
    question: 'Can I work while studying abroad?',
    answer:
      'Yes, most countries allow international students to work part-time: Canada: 20 hours/week during studies, full-time during breaks, Australia: 20 hours/week (no limit during breaks), UK: 20 hours/week for university students, USA: On-campus work allowed, off-campus with authorization, Germany: 120 full days or 240 half days per year. Work rights are usually included in your study permit. We help you understand work regulations and find opportunities.',
    category: 'visa',
    tags: ['student work', 'part-time', 'study permit'],
    popularity: 89,
  },
];

const AdvancedFAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const categories: Category[] = [
    {
      id: 'all',
      name: 'All Questions',
      icon: HelpCircle,
      color: 'text-gray-600',
    },
    {
      id: 'visa',
      name: 'Visa Process',
      icon: FileText,
      color: 'text-blue-600',
    },
    {
      id: 'immigration',
      name: 'Immigration',
      icon: Globe,
      color: 'text-green-600',
    },
    {
      id: 'documentation',
      name: 'Documentation',
      icon: BookOpen,
      color: 'text-purple-600',
    },
    { id: 'timeline', name: 'Timeline', icon: Clock, color: 'text-orange-600' },
    {
      id: 'services',
      name: 'Our Services',
      icon: Users,
      color: 'text-pink-600',
    },
    { id: 'support', name: 'Support', icon: Shield, color: 'text-indigo-600' },
  ];

  const filteredFAQs = useMemo(() => {
    return faqs
      .filter(faq => {
        const matchesCategory =
          selectedCategory === 'all' || faq.category === selectedCategory;
        const matchesSearch =
          searchTerm === '' ||
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.tags.some(tag =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          );
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => b.popularity - a.popularity);
  }, [selectedCategory, searchTerm]);

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className='bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20'>
      <div className='container mx-auto px-4 max-w-5xl'>
        {/* Header */}
        <div className='text-center mb-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full mb-6'
          >
            <HelpCircle className='w-5 h-5' />
            <span className='font-semibold'>Got Questions?</span>
          </motion.div>

          <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
            Frequently Asked Questions
          </h2>

          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Find answers to the most common questions about visas, immigration,
            and our services. Can't find what you're looking for? Contact our
            experts directly.
          </p>
        </div>

        {/* Search and Filter */}
        <div className='bg-white rounded-3xl shadow-xl p-8 mb-12 border border-gray-100'>
          <div className='flex flex-col lg:flex-row gap-6'>
            {/* Search */}
            <div className='flex-1 relative'>
              <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
              <input
                type='text'
                placeholder='Search questions, answers, or keywords...'
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className='w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all'
              />
            </div>

            {/* Category Filter */}
            <div className='flex items-center gap-2'>
              <Filter className='text-gray-400 w-5 h-5' />
              <select
                value={selectedCategory}
                onChange={e => setSelectedCategory(e.target.value)}
                className='px-4 py-4 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none bg-white min-w-[200px]'
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Pills */}
          <div className='flex flex-wrap gap-3 mt-6'>
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                  selectedCategory === category.id
                    ? 'bg-blue-100 text-blue-700 border-2 border-blue-300'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border-2 border-transparent'
                }`}
              >
                <category.icon className={`w-4 h-4 ${category.color}`} />
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        {searchTerm && (
          <div className='mb-6 text-center'>
            <p className='text-gray-600'>
              Found{' '}
              <span className='font-semibold text-blue-600'>
                {filteredFAQs.length}
              </span>{' '}
              result{filteredFAQs.length !== 1 ? 's' : ''} for "{searchTerm}"
            </p>
          </div>
        )}

        {/* FAQ List */}
        <div className='space-y-4'>
          <AnimatePresence>
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.05 }}
                className='bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden'
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className='w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-all'
                >
                  <div className='flex-1'>
                    <h3 className='text-lg font-semibold text-gray-800 mb-2'>
                      {faq.question}
                    </h3>
                    <div className='flex items-center gap-4 text-sm text-gray-500'>
                      <span className='px-3 py-1 bg-blue-100 text-blue-700 rounded-full'>
                        {categories.find(c => c.id === faq.category)?.name}
                      </span>
                      <span className='flex items-center gap-1'>
                        <Users className='w-4 h-4' />
                        {faq.popularity}% helpful
                      </span>
                    </div>
                  </div>
                  <div className='ml-4'>
                    {openFAQ === faq.id ? (
                      <ChevronUp className='w-6 h-6 text-gray-400' />
                    ) : (
                      <ChevronDown className='w-6 h-6 text-gray-400' />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openFAQ === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className='overflow-hidden'
                    >
                      <div className='px-6 pb-6'>
                        <div className='h-px bg-gray-200 mb-6'></div>
                        <div className='prose prose-gray max-w-none'>
                          <p className='text-gray-700 leading-relaxed whitespace-pre-line'>
                            {faq.answer}
                          </p>
                        </div>

                        {/* Tags */}
                        <div className='flex flex-wrap gap-2 mt-4'>
                          {faq.tags.map(tag => (
                            <span
                              key={tag}
                              className='px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm'
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* No Results */}
        {filteredFAQs.length === 0 && (
          <div className='text-center py-12'>
            <div className='w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6'>
              <Search className='w-12 h-12 text-gray-400' />
            </div>
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>
              No questions found
            </h3>
            <p className='text-gray-600 mb-6'>
              Try adjusting your search terms or browse different categories
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className='bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all'
            >
              Show All Questions
            </button>
          </div>
        )}

        {/* Contact CTA */}
        <div className='mt-16 text-center'>
          <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white'>
            <h3 className='text-2xl font-bold mb-4'>Still Have Questions?</h3>
            <p className='text-blue-100 mb-6 max-w-2xl mx-auto'>
              Our immigration experts are here to help! Get personalized answers
              to your specific questions with a free consultation.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button className='bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all'>
                Free Consultation
              </button>
              <button className='border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all'>
                Live Chat Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedFAQ;
