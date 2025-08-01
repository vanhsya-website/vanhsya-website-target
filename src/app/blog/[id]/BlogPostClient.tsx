'use client';

import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Eye,
  Heart,
  Share2,
  BookOpen,
  ExternalLink,
  ChevronRight,
  Star,
  CheckCircle,
  Info,
  Globe,
  FileText,
  Lightbulb,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import Footer from '@/components/Footer';
import {
  comprehensiveBlogPosts,
  migrationBlogCategories,
} from '@/lib/data/blogContent';

interface BlogPostClientProps {
  postId: string;
}

export default function BlogPostClient({ postId }: BlogPostClientProps) {
  // Find the post by ID
  const post = comprehensiveBlogPosts.find(p => p.id === postId);

  // Get related posts (same category, excluding current post)
  const relatedPosts = comprehensiveBlogPosts
    .filter(p => p.id !== postId && p.category === post?.category)
    .slice(0, 3);

  // Get category info
  const categoryInfo = migrationBlogCategories.find(
    cat => cat.id === post?.category
  );

  if (!post) {
    return (
      <div className='min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800'>
        <div className='pt-32 pb-20 px-6'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-4xl font-bold text-white mb-6'>
              Post Not Found
            </h1>
            <p className='text-gray-300 mb-8'>
              The blog post you're looking for doesn't exist.
            </p>
            <Link href='/blog'>
              <button className='bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors'>
                Back to Blog
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'country-guides':
        return <Globe className='w-5 h-5' />;
      case 'visa-processes':
        return <FileText className='w-5 h-5' />;
      case 'success-stories':
        return <Star className='w-5 h-5' />;
      case 'policy-updates':
        return <Info className='w-5 h-5' />;
      case 'tips-advice':
        return <Lightbulb className='w-5 h-5' />;
      default:
        return <BookOpen className='w-5 h-5' />;
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800'>
      {/* Back Navigation */}
      <section className='pt-24 px-6'>
        <div className='max-w-4xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className='mb-8'
          >
            <Link href='/blog'>
              <button className='flex items-center gap-2 text-purple-300 hover:text-white transition-colors'>
                <ArrowLeft size={20} />
                Back to Blog
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Article Header */}
      <section className='px-6 pb-12'>
        <div className='max-w-4xl mx-auto'>
          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='mb-6'
          >
            <div className='flex items-center gap-2'>
              {getCategoryIcon(post.category)}
              <span className='px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 text-sm font-medium rounded-full border border-purple-400/30'>
                {categoryInfo?.name}
              </span>
              {post.featured && (
                <span className='px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 text-sm font-medium rounded-full border border-yellow-400/30'>
                  ⭐ Featured
                </span>
              )}
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className='text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight'
          >
            {post.title}
          </motion.h1>

          {/* Meta Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className='flex flex-wrap items-center gap-6 text-gray-300 mb-8'
          >
            <div className='flex items-center gap-2'>
              <User size={16} />
              <span>{post.author}</span>
            </div>
            <div className='flex items-center gap-2'>
              <Calendar size={16} />
              <span>{formatDate(post.publishDate)}</span>
            </div>
            <div className='flex items-center gap-2'>
              <Clock size={16} />
              <span>{post.readTime}</span>
            </div>
            <div className='flex items-center gap-2'>
              <Eye size={16} />
              <span>{post.views.toLocaleString()} views</span>
            </div>
            <div className='flex items-center gap-2'>
              <Heart size={16} />
              <span>{post.likes} likes</span>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className='relative h-64 md:h-96 rounded-3xl overflow-hidden mb-12'
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className='object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent' />
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className='flex flex-wrap gap-2 mb-8'
          >
            {post.tags.map((tag) => (
              <span
                key={tag}
                className='px-3 py-1 bg-slate-800 text-gray-300 text-sm rounded-full border border-slate-600'
              >
                #{tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className='px-6 pb-12'>
        <div className='max-w-4xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className='prose prose-lg prose-invert max-w-none'
          >
            <div className='text-gray-200 leading-relaxed whitespace-pre-line'>
              {post.content}
            </div>
          </motion.div>

          {/* Share Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className='mt-12 pt-8 border-t border-gray-700'
          >
            <div className='flex items-center justify-between flex-wrap gap-4'>
              <div className='text-white'>
                <h3 className='text-lg font-semibold mb-2'>Share this article</h3>
                <div className='flex gap-3'>
                  <button className='p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors'>
                    <Share2 size={18} />
                  </button>
                  <button className='p-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors'>
                    <Heart size={18} />
                  </button>
                  <button className='p-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors'>
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className='px-6 pb-20'>
          <div className='max-w-6xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h2 className='text-3xl font-bold text-white mb-8 text-center'>
                Related Articles
              </h2>
              <div className='grid md:grid-cols-3 gap-8'>
                {relatedPosts.map((relatedPost, index) => (
                  <motion.div
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className='bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-purple-500/50 transition-all duration-300 group'
                  >
                    <div className='relative h-48 overflow-hidden'>
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className='object-cover group-hover:scale-105 transition-transform duration-300'
                      />
                      <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
                    </div>
                    <div className='p-6'>
                      <div className='flex items-center gap-2 mb-3'>
                        {getCategoryIcon(relatedPost.category)}
                        <span className='text-purple-300 text-sm'>
                          {migrationBlogCategories.find(cat => cat.id === relatedPost.category)?.name}
                        </span>
                      </div>
                      <h3 className='text-xl font-semibold text-white mb-3 line-clamp-2'>
                        {relatedPost.title}
                      </h3>
                      <p className='text-gray-300 mb-4 line-clamp-3'>
                        {relatedPost.excerpt}
                      </p>
                      <div className='flex items-center justify-between text-sm text-gray-400'>
                        <span>{relatedPost.readTime}</span>
                        <Link href={`/blog/${relatedPost.id}`}>
                          <span className='text-purple-400 hover:text-purple-300 flex items-center gap-1'>
                            Read More
                            <ChevronRight size={14} />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
