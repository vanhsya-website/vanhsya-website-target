'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Search, Tag } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState } from 'react';

const blogPosts = [
  {
    id: 1,
    title: "Complete Guide to Canada Express Entry 2024",
    excerpt: "Everything you need to know about Canada's Express Entry system, including CRS score requirements, draw updates, and application tips.",
    author: "Immigration Expert",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Canada",
    tags: ["Express Entry", "Canada", "Immigration"],
    featured: true,
    image: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=600&h=400&fit=crop"
  },
  {
    id: 2,
    title: "Australia PR vs Canada PR: Which is Better?",
    excerpt: "Comprehensive comparison of permanent residency programs in Australia and Canada, including processing times, costs, and benefits.",
    author: "Migration Specialist",
    date: "2024-01-12",
    readTime: "12 min read", 
    category: "Comparison",
    tags: ["Australia", "Canada", "PR"],
    featured: true,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=face"
  },
  {
    id: 3,
    title: "Top 10 In-Demand Jobs for Immigration in 2024",
    excerpt: "Discover the most sought-after professions that can fast-track your immigration process to popular destinations.",
    author: "Career Advisor",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Career",
    tags: ["Jobs", "Skills", "Immigration"],
    featured: false,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop"
  },
  {
    id: 4,
    title: "Student Visa Success Stories: Real Experiences",
    excerpt: "Inspiring stories from students who successfully obtained visas and are now studying in their dream countries.",
    author: "Student Counselor",
    date: "2024-01-08",
    readTime: "10 min read",
    category: "Success Stories",
    tags: ["Student Visa", "Success", "Education"],
    featured: false,
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop"
  },
  {
    id: 5,
    title: "German EU Blue Card: Complete Application Guide",
    excerpt: "Step-by-step guide to applying for Germany's EU Blue Card, including eligibility requirements and processing timeline.",
    author: "Europe Specialist",
    date: "2024-01-05",
    readTime: "7 min read",
    category: "Germany",
    tags: ["Germany", "EU Blue Card", "Work Visa"],
    featured: false,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop"
  },
  {
    id: 6,
    title: "Common Immigration Mistakes to Avoid",
    excerpt: "Learn about the most common mistakes applicants make during the immigration process and how to avoid them.",
    author: "Legal Advisor",
    date: "2024-01-03",
    readTime: "5 min read",
    category: "Tips",
    tags: ["Mistakes", "Tips", "Application"],
    featured: false,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop"
  }
];

const categories = ["All", "Canada", "Australia", "USA", "UK", "Germany", "Success Stories", "Tips", "Career"];

const popularTags = [
  "Express Entry", "Australia PR", "Student Visa", "Work Visa", "Family Visa",
  "Investment Immigration", "IELTS", "Language Test", "Document Checklist"
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-padding pt-32 bg-gradient-to-br from-purple-600 via-blue-600 to-pink-500">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="heading-xl text-white mb-6">
              Immigration <span className="text-gradient-cyan">Blog & Resources</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Stay updated with the latest immigration news, guides, tips, and success stories from our experts.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles, guides, and tips..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container-max">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'bg-white/70 backdrop-blur-sm text-gray-700 hover:bg-white/90'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === "All" && featuredPosts.length > 0 && (
        <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="heading-lg text-gradient mb-12 text-center">Featured Articles</h2>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="modern-card group cursor-pointer hover:scale-[1.02] transition-transform"
                  >
                    <div className="aspect-video bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl mb-6 flex items-center justify-center">
                      <span className="text-white text-lg font-medium">Featured Article</span>
                    </div>
                    
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-full">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-sm flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                    </div>
                    
                    <h3 className="heading-sm mb-3 text-gray-800 group-hover:text-purple-600 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                      
                      <Link 
                        href={`/blog/${post.id}`}
                        className="text-purple-600 hover:text-purple-700 font-medium flex items-center gap-1"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Regular Posts Grid */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="modern-card group cursor-pointer hover:scale-[1.02] transition-transform"
              >
                <div className="aspect-video bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">Blog Article</span>
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-xs">
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold mb-2 text-gray-800 group-hover:text-purple-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{post.author}</span>
                  <span>{post.readTime}</span>
                </div>
                
                <Link 
                  href={`/blog/${post.id}`}
                  className="absolute inset-0 z-10"
                  aria-label={`Read ${post.title}`}
                />
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search or category filter.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Sidebar with Popular Tags */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="modern-card max-w-4xl mx-auto"
          >
            <h3 className="heading-md text-gradient mb-6 text-center">Popular Topics</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {popularTags.map((tag, index) => (
                <motion.button
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm hover:from-purple-200 hover:to-pink-200 transition-colors flex items-center gap-1"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="modern-card max-w-2xl mx-auto">
              <h2 className="heading-md text-gradient mb-4">
                Stay Updated with Immigration News
              </h2>
              <p className="text-modern mb-6">
                Get the latest immigration updates, tips, and guides delivered to your inbox weekly.
              </p>
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="btn-primary">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
