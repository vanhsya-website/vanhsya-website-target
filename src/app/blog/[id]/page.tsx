'use client';

import { useParams } from 'next/navigation';
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

export default function BlogPostPage() {
  const params = useParams();
  const postId = params.id as string;

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
            <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent'></div>
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className='prose prose-invert prose-lg max-w-none mb-12'
          >
            {/* Excerpt as Introduction */}
            <div className='text-xl text-gray-300 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-400/20 rounded-2xl p-6 mb-8'>
              <p className='italic font-medium'>{post.excerpt}</p>
            </div>

            {/* Main Content - Dynamic based on category */}
            {post.category === 'country-guides' && (
              <div className='space-y-8'>
                <section>
                  <h2 className='text-2xl font-bold text-white mb-4 flex items-center gap-2'>
                    <CheckCircle className='w-6 h-6 text-green-400' />
                    Overview & Eligibility
                  </h2>
                  <div className='bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6'>
                    <p className='text-gray-300 mb-4'>
                      This comprehensive guide covers everything you need to
                      know about immigration to this destination, including
                      eligibility requirements, application processes, and
                      timeline expectations.
                    </p>
                    <ul className='space-y-2'>
                      <li className='flex items-center gap-2 text-gray-300'>
                        <CheckCircle className='w-4 h-4 text-green-400' />
                        Detailed eligibility criteria
                      </li>
                      <li className='flex items-center gap-2 text-gray-300'>
                        <CheckCircle className='w-4 h-4 text-green-400' />
                        Step-by-step application process
                      </li>
                      <li className='flex items-center gap-2 text-gray-300'>
                        <CheckCircle className='w-4 h-4 text-green-400' />
                        Required documentation checklist
                      </li>
                      <li className='flex items-center gap-2 text-gray-300'>
                        <CheckCircle className='w-4 h-4 text-green-400' />
                        Processing timelines and fees
                      </li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className='text-2xl font-bold text-white mb-4'>
                    Key Requirements
                  </h2>
                  <div className='grid md:grid-cols-2 gap-6'>
                    <div className='bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-400/20 rounded-2xl p-6'>
                      <h3 className='text-lg font-semibold text-blue-300 mb-3'>
                        Education Requirements
                      </h3>
                      <p className='text-gray-300 text-sm'>
                        Minimum educational qualifications and credential
                        assessment requirements.
                      </p>
                    </div>
                    <div className='bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-400/20 rounded-2xl p-6'>
                      <h3 className='text-lg font-semibold text-green-300 mb-3'>
                        Language Proficiency
                      </h3>
                      <p className='text-gray-300 text-sm'>
                        Required language test scores and acceptable testing
                        agencies.
                      </p>
                    </div>
                    <div className='bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/20 rounded-2xl p-6'>
                      <h3 className='text-lg font-semibold text-purple-300 mb-3'>
                        Work Experience
                      </h3>
                      <p className='text-gray-300 text-sm'>
                        Minimum years of skilled work experience in eligible
                        occupations.
                      </p>
                    </div>
                    <div className='bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-400/20 rounded-2xl p-6'>
                      <h3 className='text-lg font-semibold text-orange-300 mb-3'>
                        Financial Requirements
                      </h3>
                      <p className='text-gray-300 text-sm'>
                        Proof of funds and settlement money requirements.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {post.category === 'visa-processes' && (
              <div className='space-y-8'>
                <section>
                  <h2 className='text-2xl font-bold text-white mb-4'>
                    Step-by-Step Process
                  </h2>
                  <div className='space-y-4'>
                    {[1, 2, 3, 4, 5].map(step => (
                      <div
                        key={step}
                        className='flex gap-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6'
                      >
                        <div className='flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm'>
                          {step}
                        </div>
                        <div>
                          <h3 className='text-lg font-semibold text-white mb-2'>
                            Step {step}: Application Preparation
                          </h3>
                          <p className='text-gray-300 text-sm'>
                            Detailed explanation of this step in the visa
                            application process, including required documents
                            and timeline.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {post.category === 'success-stories' && (
              <div className='space-y-8'>
                <section>
                  <h2 className='text-2xl font-bold text-white mb-4'>
                    The Journey
                  </h2>
                  <div className='bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-400/20 rounded-2xl p-6'>
                    <p className='text-gray-300 italic text-lg'>
                      "This success story showcases the determination and
                      strategic planning that led to a successful immigration
                      outcome. Learn from real experiences and practical
                      insights."
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className='text-2xl font-bold text-white mb-4'>
                    Key Learnings
                  </h2>
                  <div className='grid gap-4'>
                    {[
                      'Strategic Planning',
                      'Document Preparation',
                      'Timeline Management',
                      'Expert Guidance',
                    ].map((learning, index) => (
                      <div
                        key={index}
                        className='flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4'
                      >
                        <Star className='w-5 h-5 text-yellow-400' />
                        <span className='text-gray-300'>{learning}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {/* Common Content for all articles */}
            <section className='mt-12'>
              <h2 className='text-2xl font-bold text-white mb-6'>
                Expert Tips & Recommendations
              </h2>
              <div className='bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-400/20 rounded-2xl p-6'>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div>
                    <h3 className='text-lg font-semibold text-purple-300 mb-3'>
                      Do's
                    </h3>
                    <ul className='space-y-2'>
                      <li className='flex items-center gap-2 text-gray-300 text-sm'>
                        <CheckCircle className='w-4 h-4 text-green-400' />
                        Start preparation early
                      </li>
                      <li className='flex items-center gap-2 text-gray-300 text-sm'>
                        <CheckCircle className='w-4 h-4 text-green-400' />
                        Maintain accurate documentation
                      </li>
                      <li className='flex items-center gap-2 text-gray-300 text-sm'>
                        <CheckCircle className='w-4 h-4 text-green-400' />
                        Seek professional guidance
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-red-300 mb-3'>
                      Don'ts
                    </h3>
                    <ul className='space-y-2'>
                      <li className='flex items-center gap-2 text-gray-300 text-sm'>
                        <ExternalLink className='w-4 h-4 text-red-400' />
                        Rush the application process
                      </li>
                      <li className='flex items-center gap-2 text-gray-300 text-sm'>
                        <ExternalLink className='w-4 h-4 text-red-400' />
                        Submit incomplete documents
                      </li>
                      <li className='flex items-center gap-2 text-gray-300 text-sm'>
                        <ExternalLink className='w-4 h-4 text-red-400' />
                        Ignore policy updates
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className='mb-8'
          >
            <h3 className='text-lg font-semibold text-white mb-4'>Tags</h3>
            <div className='flex flex-wrap gap-3'>
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className='px-4 py-2 bg-gray-700/50 text-gray-300 text-sm rounded-full hover:bg-gray-600/50 transition-colors'
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Share Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className='border-t border-white/10 pt-8 mb-12'
          >
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-4'>
                <h3 className='text-lg font-semibold text-white'>
                  Share this article
                </h3>
                <button className='flex items-center gap-2 text-purple-300 hover:text-white transition-colors'>
                  <Share2 size={20} />
                  Share
                </button>
              </div>
              <div className='flex items-center gap-2'>
                <button className='flex items-center gap-2 text-red-300 hover:text-white transition-colors'>
                  <Heart size={20} />
                  Like ({post.likes})
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className='px-6 pb-20'>
          <div className='max-w-4xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h2 className='text-3xl font-bold text-white mb-8'>
                Related Articles
              </h2>
              <div className='grid md:grid-cols-3 gap-6'>
                {relatedPosts.map((relatedPost, index) => (
                  <motion.article
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className='bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden group hover:scale-[1.02] transition-all duration-300'
                  >
                    <div className='relative h-32 overflow-hidden'>
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className='object-cover group-hover:scale-110 transition-transform duration-500'
                      />
                    </div>
                    <div className='p-4'>
                      <h3 className='text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-purple-300 transition-colors'>
                        {relatedPost.title}
                      </h3>
                      <p className='text-gray-300 text-sm mb-3 line-clamp-2'>
                        {relatedPost.excerpt}
                      </p>
                      <Link href={`/blog/${relatedPost.id}`}>
                        <button className='flex items-center gap-2 text-purple-300 hover:text-white transition-colors text-sm'>
                          Read More
                          <ChevronRight size={16} />
                        </button>
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className='px-6 pb-20'>
        <div className='max-w-4xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className='bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 text-center'
          >
            <h2 className='text-3xl font-bold text-white mb-4'>
              Ready to Start Your Migration Journey?
            </h2>
            <p className='text-gray-300 mb-8 max-w-2xl mx-auto'>
              Get personalized guidance from our expert immigration consultants
              and turn your dreams into reality.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/consultation'>
                <button className='bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all'>
                  Book Free Consultation
                </button>
              </Link>
              <Link href='/resources'>
                <button className='border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-all'>
                  Explore Resources
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
