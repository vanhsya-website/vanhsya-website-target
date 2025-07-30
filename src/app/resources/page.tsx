'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Filter,
  Download,
  ExternalLink,
  BookOpen,
  FileText,
  Calculator,
  CheckSquare,
  Users,
  Star,
  Eye,
  ChevronDown,
  ChevronUp,
  Play,
  Bookmark,
  Share2,
  Calendar,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import Footer from '@/components/Footer';

// Resource Types
interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'guide' | 'checklist' | 'calculator' | 'template' | 'video' | 'webinar';
  category: string;
  downloadUrl?: string;
  externalUrl?: string;
  image: string;
  downloads: number;
  rating: number;
  duration?: string;
  fileSize?: string;
  featured: boolean;
  lastUpdated: string;
  tags: string[];
}

const resourceCategories = [
  { id: 'all', name: 'All Resources', icon: '📚', count: 45 },
  {
    id: 'immigration-guides',
    name: 'Immigration Guides',
    icon: '🗺️',
    count: 12,
  },
  {
    id: 'document-checklists',
    name: 'Document Checklists',
    icon: '✅',
    count: 8,
  },
  { id: 'calculators', name: 'Calculators & Tools', icon: '🧮', count: 6 },
  { id: 'templates', name: 'Templates & Forms', icon: '📝', count: 10 },
  { id: 'video-guides', name: 'Video Guides', icon: '🎥', count: 5 },
  { id: 'webinars', name: 'Webinars & Sessions', icon: '🎓', count: 4 },
];

const featuredResources: Resource[] = [
  {
    id: 'canada-express-entry-guide',
    title: 'Complete Canada Express Entry Guide 2024',
    description:
      'Comprehensive 50-page guide covering all aspects of Canada Express Entry system including CRS calculator, document checklist, and timeline.',
    type: 'guide',
    category: 'immigration-guides',
    downloadUrl: '/downloads/canada-express-entry-guide.pdf',
    image: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=600',
    downloads: 15420,
    rating: 4.9,
    fileSize: '2.5 MB',
    featured: true,
    lastUpdated: '2024-01-15',
    tags: ['Canada', 'Express Entry', 'PR', 'CRS Score'],
  },
  {
    id: 'australia-skillselect-calculator',
    title: 'Australia SkillSelect Points Calculator',
    description:
      'Interactive calculator to determine your points for Australian skilled migration programs including 189, 190, and 491 visas.',
    type: 'calculator',
    category: 'calculators',
    externalUrl: '/tools/australia-points-calculator',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600',
    downloads: 8750,
    rating: 4.8,
    featured: true,
    lastUpdated: '2024-01-10',
    tags: ['Australia', 'Points Calculator', 'SkillSelect', 'PR'],
  },
  {
    id: 'document-checklist-master',
    title: 'Universal Immigration Document Checklist',
    description:
      'Master checklist covering all essential documents for major immigration destinations with country-specific variations.',
    type: 'checklist',
    category: 'document-checklists',
    downloadUrl: '/downloads/universal-document-checklist.pdf',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600',
    downloads: 12300,
    rating: 4.7,
    fileSize: '1.8 MB',
    featured: true,
    lastUpdated: '2024-01-08',
    tags: ['Documents', 'Checklist', 'Immigration', 'Requirements'],
  },
];

const allResources: Resource[] = [
  ...featuredResources,
  {
    id: 'ielts-preparation-guide',
    title: 'IELTS Preparation Complete Guide',
    description:
      'Comprehensive IELTS preparation guide with practice tests, tips, and strategies for achieving your target score.',
    type: 'guide',
    category: 'immigration-guides',
    downloadUrl: '/downloads/ielts-preparation-guide.pdf',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600',
    downloads: 9840,
    rating: 4.6,
    fileSize: '3.2 MB',
    featured: false,
    lastUpdated: '2024-01-05',
    tags: ['IELTS', 'Language Test', 'Preparation', 'English'],
  },
  {
    id: 'germany-job-seeker-visa',
    title: 'Germany Job Seeker Visa Video Guide',
    description:
      'Step-by-step video walkthrough of the Germany job seeker visa application process, requirements, and success tips.',
    type: 'video',
    category: 'video-guides',
    externalUrl: '/videos/germany-job-seeker-visa',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600',
    downloads: 5620,
    rating: 4.8,
    duration: '45 minutes',
    featured: false,
    lastUpdated: '2024-01-03',
    tags: ['Germany', 'Job Seeker Visa', 'Video Guide', 'Europe'],
  },
  {
    id: 'sop-template-collection',
    title: 'Statement of Purpose Template Collection',
    description:
      'Professional SOP templates for various visa categories including student, work, and permanent residence applications.',
    type: 'template',
    category: 'templates',
    downloadUrl: '/downloads/sop-template-collection.zip',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600',
    downloads: 7890,
    rating: 4.5,
    fileSize: '1.1 MB',
    featured: false,
    lastUpdated: '2024-01-01',
    tags: ['SOP', 'Templates', 'Statement of Purpose', 'Application'],
  },
];

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popular'); // popular, newest, rating
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const filteredResources = allResources
    .filter(resource => {
      const matchesCategory =
        selectedCategory === 'all' || resource.category === selectedCategory;
      const matchesSearch =
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.tags.some(tag =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return (
            new Date(b.lastUpdated).getTime() -
            new Date(a.lastUpdated).getTime()
          );
        case 'rating':
          return b.rating - a.rating;
        default:
          return b.downloads - a.downloads;
      }
    });

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'guide':
        return <BookOpen className='w-5 h-5' />;
      case 'checklist':
        return <CheckSquare className='w-5 h-5' />;
      case 'calculator':
        return <Calculator className='w-5 h-5' />;
      case 'template':
        return <FileText className='w-5 h-5' />;
      case 'video':
        return <Play className='w-5 h-5' />;
      case 'webinar':
        return <Users className='w-5 h-5' />;
      default:
        return <BookOpen className='w-5 h-5' />;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const faqs = [
    {
      question: 'Are all resources free to download?',
      answer:
        'Yes, all our basic immigration resources are completely free. Premium resources with advanced features may require a consultation booking.',
    },
    {
      question: 'How frequently are resources updated?',
      answer:
        'We update our resources regularly to reflect the latest immigration policies and requirements. Critical updates are made within 48 hours of policy changes.',
    },
    {
      question: 'Can I request specific resources or tools?',
      answer:
        "Absolutely! We welcome resource requests from our community. Contact us with your specific needs and we'll prioritize creating resources that help the most people.",
    },
    {
      question: 'Do these resources work for all countries?',
      answer:
        'Many resources are country-specific, while others are universal. Each resource clearly indicates which countries or programs it covers.',
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800'>
      {/* Hero Section */}
      <section className='relative pt-32 pb-20 px-6'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className='mb-6'
            >
              <span className='px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-300 text-sm font-medium rounded-full border border-green-400/30'>
                🎯 Free Immigration Resources
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className='text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6'
            >
              Immigration
              <span className='bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent'>
                {' '}
                Resources
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className='text-xl text-gray-300 max-w-4xl mx-auto mb-12'
            >
              Free guides, checklists, calculators, and tools to help you
              navigate your immigration journey successfully.
            </motion.p>

            {/* Search and Filter Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className='max-w-4xl mx-auto'
            >
              <div className='flex flex-col md:flex-row gap-4 mb-8'>
                <div className='relative flex-1'>
                  <Search
                    className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400'
                    size={20}
                  />
                  <input
                    type='text'
                    placeholder='Search resources, guides, and tools...'
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className='w-full pl-12 pr-4 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'
                  />
                </div>
                <div className='relative'>
                  <select
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value)}
                    className='appearance-none bg-white/10 border border-white/20 text-white px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-500 min-w-[160px]'
                  >
                    <option value='popular' className='bg-slate-800'>
                      Most Popular
                    </option>
                    <option value='newest' className='bg-slate-800'>
                      Newest
                    </option>
                    <option value='rating' className='bg-slate-800'>
                      Highest Rated
                    </option>
                  </select>
                  <Filter
                    className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none'
                    size={18}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Featured Resources */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className='mb-16'
          >
            <div className='flex items-center gap-3 mb-8'>
              <Star className='w-6 h-6 text-yellow-400' />
              <h2 className='text-3xl font-bold text-white'>
                Featured Resources
              </h2>
              <div className='flex-1 h-px bg-gradient-to-r from-yellow-400/50 to-transparent'></div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
              {featuredResources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className='bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden group hover:scale-[1.02] transition-all duration-300'
                >
                  <div className='relative h-48 overflow-hidden'>
                    <Image
                      src={resource.image}
                      alt={resource.title}
                      fill
                      className='object-cover group-hover:scale-110 transition-transform duration-500'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
                    <div className='absolute top-4 left-4'>
                      <span className='px-3 py-1 bg-gradient-to-r from-yellow-600 to-orange-600 text-white text-sm font-medium rounded-full'>
                        Featured
                      </span>
                    </div>
                    <div className='absolute bottom-4 left-4 right-4'>
                      <div className='flex items-center gap-4 text-white/80 text-sm'>
                        <div className='flex items-center gap-1'>
                          <Download size={16} />
                          {resource.downloads.toLocaleString()}
                        </div>
                        <div className='flex items-center gap-1'>
                          <Star size={16} />
                          {resource.rating}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='p-6'>
                    <div className='flex items-center gap-2 mb-4'>
                      {getResourceIcon(resource.type)}
                      <span className='text-green-300 text-sm font-medium capitalize'>
                        {resource.type}
                      </span>
                      {resource.fileSize && (
                        <span className='text-gray-400 text-xs'>
                          • {resource.fileSize}
                        </span>
                      )}
                      {resource.duration && (
                        <span className='text-gray-400 text-xs'>
                          • {resource.duration}
                        </span>
                      )}
                    </div>

                    <h3 className='text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors line-clamp-2'>
                      {resource.title}
                    </h3>

                    <p className='text-gray-300 text-sm mb-4 line-clamp-3'>
                      {resource.description}
                    </p>

                    <div className='flex flex-wrap gap-2 mb-4'>
                      {resource.tags.slice(0, 3).map(tag => (
                        <span
                          key={tag}
                          className='px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full'
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className='flex items-center justify-between'>
                      <div className='text-gray-400 text-xs'>
                        Updated {formatDate(resource.lastUpdated)}
                      </div>

                      <div className='flex gap-2'>
                        <button className='p-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-colors'>
                          <Bookmark size={16} className='text-gray-300' />
                        </button>
                        <button className='p-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-colors'>
                          <Share2 size={16} className='text-gray-300' />
                        </button>
                        <Link
                          href={
                            resource.downloadUrl || resource.externalUrl || '#'
                          }
                        >
                          <button className='flex items-center gap-2 bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-green-700 hover:to-blue-700 transition-all'>
                            {resource.downloadUrl ? (
                              <Download size={16} />
                            ) : (
                              <ExternalLink size={16} />
                            )}
                            {resource.downloadUrl ? 'Download' : 'Access'}
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Category Filter Tabs */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className='mb-12'
          >
            <div className='flex flex-wrap gap-4 justify-center'>
              {resourceCategories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg scale-105'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <span className='text-lg'>{category.icon}</span>
                  {category.name}
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      selectedCategory === category.id
                        ? 'bg-white/20 text-white'
                        : 'bg-gray-600 text-gray-300'
                    }`}
                  >
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </motion.section>

          {/* All Resources Grid */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className='flex items-center justify-between mb-8'>
              <h2 className='text-2xl font-bold text-white'>
                {selectedCategory === 'all'
                  ? 'All Resources'
                  : resourceCategories.find(cat => cat.id === selectedCategory)
                      ?.name}
              </h2>
              <span className='text-gray-400'>
                {filteredResources.length} resource
                {filteredResources.length !== 1 ? 's' : ''} found
              </span>
            </div>

            {filteredResources.length === 0 ? (
              <div className='text-center py-20'>
                <Search className='w-16 h-16 text-gray-400 mx-auto mb-6' />
                <h3 className='text-2xl font-bold text-white mb-4'>
                  No resources found
                </h3>
                <p className='text-gray-400 mb-8'>
                  Try adjusting your search terms or browse different
                  categories.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className='bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors'
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {filteredResources.map((resource, index) => (
                  <motion.div
                    key={resource.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.05 }}
                    className='bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden group hover:scale-[1.02] transition-all duration-300'
                  >
                    <div className='relative h-40 overflow-hidden'>
                      <Image
                        src={resource.image}
                        alt={resource.title}
                        fill
                        className='object-cover group-hover:scale-110 transition-transform duration-500'
                      />
                      <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
                      {resource.featured && (
                        <div className='absolute top-3 left-3'>
                          <span className='px-2 py-1 bg-gradient-to-r from-yellow-600 to-orange-600 text-white text-xs font-medium rounded-full'>
                            Featured
                          </span>
                        </div>
                      )}
                      <div className='absolute bottom-3 left-3 right-3'>
                        <div className='flex items-center gap-3 text-white/80 text-sm'>
                          <div className='flex items-center gap-1'>
                            <Download size={14} />
                            {resource.downloads.toLocaleString()}
                          </div>
                          <div className='flex items-center gap-1'>
                            <Star size={14} />
                            {resource.rating}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='p-5'>
                      <div className='flex items-center gap-2 mb-3'>
                        {getResourceIcon(resource.type)}
                        <span className='text-green-300 text-sm font-medium capitalize'>
                          {resource.type}
                        </span>
                        {resource.fileSize && (
                          <span className='text-gray-400 text-xs'>
                            • {resource.fileSize}
                          </span>
                        )}
                      </div>

                      <h3 className='text-lg font-bold text-white mb-2 group-hover:text-green-300 transition-colors line-clamp-2'>
                        {resource.title}
                      </h3>

                      <p className='text-gray-300 text-sm mb-3 line-clamp-2'>
                        {resource.description}
                      </p>

                      <div className='flex flex-wrap gap-1 mb-3'>
                        {resource.tags.slice(0, 2).map(tag => (
                          <span
                            key={tag}
                            className='px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full'
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className='flex items-center justify-between text-xs text-gray-400 mb-3'>
                        <div className='flex items-center gap-1'>
                          <Calendar size={12} />
                          {formatDate(resource.lastUpdated)}
                        </div>
                        <div className='flex items-center gap-1'>
                          <Eye size={12} />
                          {resource.downloads.toLocaleString()}
                        </div>
                      </div>

                      <div className='flex items-center justify-between'>
                        <div className='flex gap-2'>
                          <button className='p-1.5 bg-gray-700/50 hover:bg-gray-600/50 rounded transition-colors'>
                            <Bookmark size={14} className='text-gray-300' />
                          </button>
                          <button className='p-1.5 bg-gray-700/50 hover:bg-gray-600/50 rounded transition-colors'>
                            <Share2 size={14} className='text-gray-300' />
                          </button>
                        </div>

                        <Link
                          href={
                            resource.downloadUrl || resource.externalUrl || '#'
                          }
                        >
                          <button className='flex items-center gap-2 bg-gradient-to-r from-green-600 to-blue-600 text-white px-3 py-1.5 rounded-lg font-medium hover:from-green-700 hover:to-blue-700 transition-all text-sm'>
                            {resource.downloadUrl ? (
                              <Download size={14} />
                            ) : (
                              <ExternalLink size={14} />
                            )}
                            {resource.downloadUrl ? 'Download' : 'Access'}
                          </button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.section>

          {/* FAQ Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className='mt-20'
          >
            <h2 className='text-3xl font-bold text-white mb-8 text-center'>
              Frequently Asked Questions
            </h2>
            <div className='max-w-3xl mx-auto space-y-4'>
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className='bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden'
                >
                  <button
                    onClick={() =>
                      setExpandedFAQ(expandedFAQ === index ? null : index)
                    }
                    className='w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors'
                  >
                    <span className='text-white font-medium'>
                      {faq.question}
                    </span>
                    {expandedFAQ === index ? (
                      <ChevronUp className='w-5 h-5 text-gray-400' />
                    ) : (
                      <ChevronDown className='w-5 h-5 text-gray-400' />
                    )}
                  </button>
                  {expandedFAQ === index && (
                    <div className='px-6 pb-4'>
                      <p className='text-gray-300 text-sm leading-relaxed'>
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className='mt-20'
          >
            <div className='bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 text-center'>
              <h2 className='text-3xl font-bold text-white mb-4'>
                Need Personalized Guidance?
              </h2>
              <p className='text-gray-300 mb-8 max-w-2xl mx-auto'>
                While our resources provide comprehensive information, every
                immigration case is unique. Get personalized advice from our
                expert consultants.
              </p>

              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Link href='/consultation'>
                  <button className='bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-green-700 hover:to-blue-700 transition-all'>
                    Book Free Consultation
                  </button>
                </Link>
                <Link href='/contact'>
                  <button className='border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-all'>
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </motion.section>
        </div>
      </section>

      <Footer />
    </div>
  );
}
