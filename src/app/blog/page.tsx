'use client';

// TODO: Create 15+ high-quality blog posts with SEO optimization
// TODO: Implement real blog search and filtering functionality
// TODO: Add blog post reading time estimation
// TODO: Connect to CMS (Contentful/Strapi) for dynamic content
// CONTENT: Write immigration success stories and case studies
// SEO: Add proper meta tags and structured data for each post
// FEATURE: Add newsletter subscription and social sharing

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Filter,
  Clock,
  User,
  Eye,
  Heart,
  ArrowRight,
  Calendar,
  TrendingUp,
  Star,
  BookOpen,
  Globe,
  FileText,
  Lightbulb,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import Footer from '@/components/Footer';
import {
  migrationBlogCategories,
  comprehensiveBlogPosts,
  featuredPosts,
} from '@/lib/data/blogContent';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('recent'); // recent, popular, featured

  const filteredPosts = useMemo(() => {
    let posts = comprehensiveBlogPosts;

    // Filter by category
    if (selectedCategory !== 'all') {
      posts = posts.filter(post => post.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      posts = posts.filter(
        post =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.tags.some(tag =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    // Sort posts
    switch (sortBy) {
      case 'popular':
        return posts.sort((a, b) => b.views - a.views);
      case 'featured':
        return posts.sort((a, b) => Number(b.featured) - Number(a.featured));
      default:
        return posts.sort(
          (a, b) =>
            new Date(b.publishDate).getTime() -
            new Date(a.publishDate).getTime()
        );
    }
  }, [selectedCategory, searchTerm, sortBy]);

  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'country-guides':
        return <Globe className='w-5 h-5' />;
      case 'visa-processes':
        return <FileText className='w-5 h-5' />;
      case 'success-stories':
        return <Star className='w-5 h-5' />;
      case 'policy-updates':
        return <TrendingUp className='w-5 h-5' />;
      case 'tips-advice':
        return <Lightbulb className='w-5 h-5' />;
      default:
        return <BookOpen className='w-5 h-5' />;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800'>
      {/* Hero Section */}
      <section className='relative pt-32 pb-20 px-6'>
        <div className='max-w-7xl mx-auto'>
          {/* Hero Content */}
          <div className='text-center mb-16'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className='mb-6'
            >
              <span className='px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 text-sm font-medium rounded-full border border-purple-400/30'>
                📚 Migration Knowledge Hub
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className='text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6'
            >
              Migration
              <span className='bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent'>
                {' '}
                Blog & Guides
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className='text-xl text-gray-300 max-w-4xl mx-auto mb-12'
            >
              Comprehensive guides, expert insights, and success stories to help
              you navigate your migration journey with confidence.
            </motion.p>

            {/* Search and Filter Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className='max-w-4xl mx-auto'
            >
              <div className='flex flex-col md:flex-row gap-4 mb-8'>
                {/* Search Bar */}
                <div className='relative flex-1'>
                  <Search
                    className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400'
                    size={20}
                  />
                  <input
                    type='text'
                    placeholder='Search articles, guides, and tips...'
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className='w-full pl-12 pr-4 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
                  />
                </div>

                {/* Sort Dropdown */}
                <div className='relative'>
                  <select
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value)}
                    className='appearance-none bg-white/10 border border-white/20 text-white px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 min-w-[160px]'
                  >
                    <option value='recent' className='bg-slate-800'>
                      Most Recent
                    </option>
                    <option value='popular' className='bg-slate-800'>
                      Most Popular
                    </option>
                    <option value='featured' className='bg-slate-800'>
                      Featured
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

          {/* Featured Posts Section */}
          {featuredPosts.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className='mb-16'
            >
              <div className='flex items-center gap-3 mb-8'>
                <Star className='w-6 h-6 text-yellow-400' />
                <h2 className='text-3xl font-bold text-white'>
                  Featured Articles
                </h2>
                <div className='flex-1 h-px bg-gradient-to-r from-yellow-400/50 to-transparent'></div>
              </div>

              <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                {featuredPosts.slice(0, 2).map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className='bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden group hover:scale-[1.02] transition-all duration-300'
                  >
                    <div className='relative h-64 overflow-hidden'>
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className='object-cover group-hover:scale-110 transition-transform duration-500'
                      />
                      <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
                      <div className='absolute top-4 left-4'>
                        <span className='px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-full'>
                          Featured
                        </span>
                      </div>
                      <div className='absolute bottom-4 left-4 right-4'>
                        <div className='flex items-center gap-4 text-white/80 text-sm'>
                          <div className='flex items-center gap-1'>
                            <Eye size={16} />
                            {post.views.toLocaleString()}
                          </div>
                          <div className='flex items-center gap-1'>
                            <Heart size={16} />
                            {post.likes}
                          </div>
                          <div className='flex items-center gap-1'>
                            <Clock size={16} />
                            {post.readTime}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='p-8'>
                      <div className='flex items-center gap-2 mb-4'>
                        {getCategoryIcon(post.category)}
                        <span className='text-purple-300 text-sm font-medium'>
                          {
                            migrationBlogCategories.find(
                              cat => cat.id === post.category
                            )?.name
                          }
                        </span>
                      </div>

                      <h3 className='text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors'>
                        {post.title}
                      </h3>

                      <p className='text-gray-300 mb-6 line-clamp-3'>
                        {post.excerpt}
                      </p>

                      <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                          <div className='w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center'>
                            <User size={16} className='text-white' />
                          </div>
                          <div>
                            <p className='text-white text-sm font-medium'>
                              {post.author}
                            </p>
                            <p className='text-gray-400 text-xs'>
                              {formatDate(post.publishDate)}
                            </p>
                          </div>
                        </div>

                        <Link href={`/blog/${post.id}`}>
                          <button className='flex items-center gap-2 text-purple-300 hover:text-white transition-colors'>
                            Read More
                            <ArrowRight size={16} />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.section>
          )}

          {/* Category Filter Tabs */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className='mb-12'
          >
            <div className='flex flex-wrap gap-4 justify-center'>
              {migrationBlogCategories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg scale-105'
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

          {/* Blog Posts Grid */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <div className='flex items-center justify-between mb-8'>
              <h2 className='text-2xl font-bold text-white'>
                {selectedCategory === 'all'
                  ? 'All Articles'
                  : migrationBlogCategories.find(
                      cat => cat.id === selectedCategory
                    )?.name}
              </h2>
              <span className='text-gray-400'>
                {filteredPosts.length} article
                {filteredPosts.length !== 1 ? 's' : ''} found
              </span>
            </div>

            {filteredPosts.length === 0 ? (
              <div className='text-center py-20'>
                <Search className='w-16 h-16 text-gray-400 mx-auto mb-6' />
                <h3 className='text-2xl font-bold text-white mb-4'>
                  No articles found
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
                  className='bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors'
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className='bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden group hover:scale-[1.02] transition-all duration-300'
                  >
                    <div className='relative h-48 overflow-hidden'>
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className='object-cover group-hover:scale-110 transition-transform duration-500'
                      />
                      <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
                      {post.featured && (
                        <div className='absolute top-3 left-3'>
                          <span className='px-2 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-medium rounded-full'>
                            Featured
                          </span>
                        </div>
                      )}
                    </div>

                    <div className='p-6'>
                      <div className='flex items-center gap-2 mb-3'>
                        {getCategoryIcon(post.category)}
                        <span className='text-purple-300 text-sm font-medium'>
                          {
                            migrationBlogCategories.find(
                              cat => cat.id === post.category
                            )?.name
                          }
                        </span>
                      </div>

                      <h3 className='text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors line-clamp-2'>
                        {post.title}
                      </h3>

                      <p className='text-gray-300 text-sm mb-4 line-clamp-3'>
                        {post.excerpt}
                      </p>

                      <div className='flex flex-wrap gap-2 mb-4'>
                        {post.tags.slice(0, 3).map(tag => (
                          <span
                            key={tag}
                            className='px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full'
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className='flex items-center justify-between text-sm text-gray-400 mb-4'>
                        <div className='flex items-center gap-4'>
                          <div className='flex items-center gap-1'>
                            <Eye size={14} />
                            {post.views.toLocaleString()}
                          </div>
                          <div className='flex items-center gap-1'>
                            <Clock size={14} />
                            {post.readTime}
                          </div>
                        </div>
                        <div className='flex items-center gap-1'>
                          <Calendar size={14} />
                          {formatDate(post.publishDate)}
                        </div>
                      </div>

                      <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                          <div className='w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center'>
                            <User size={12} className='text-white' />
                          </div>
                          <span className='text-gray-300 text-sm'>
                            {post.author}
                          </span>
                        </div>

                        <Link href={`/blog/${post.id}`}>
                          <button className='flex items-center gap-2 text-purple-300 hover:text-white transition-colors text-sm font-medium'>
                            Read More
                            <ArrowRight size={14} />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </motion.section>

          {/* Newsletter Subscription */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className='mt-20'
          >
            <div className='bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 text-center'>
              <h2 className='text-3xl font-bold text-white mb-4'>
                Stay Updated with Migration Insights
              </h2>
              <p className='text-gray-300 mb-8 max-w-2xl mx-auto'>
                Get the latest immigration updates, expert tips, and success
                stories delivered to your inbox every week.
              </p>

              <div className='flex flex-col md:flex-row gap-4 max-w-md mx-auto'>
                <input
                  type='email'
                  placeholder='Enter your email address'
                  className='flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500'
                />
                <button className='bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all'>
                  Subscribe
                </button>
              </div>

              <p className='text-gray-400 text-sm mt-4'>
                Join 25,000+ subscribers. Unsubscribe anytime.
              </p>
            </div>
          </motion.section>
        </div>
      </section>

      <Footer />
    </div>
  );
}
