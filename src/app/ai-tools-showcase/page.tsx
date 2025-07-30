'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, Zap, FileText, Calculator, 
  MessageCircle, Shield, Globe, Users,
  CheckCircle, Star, ArrowRight, Clock,
  Target, TrendingUp, Lightbulb, Award
} from 'lucide-react';
import BackNavigation from '@/components/BackNavigation';
import Footer from '@/components/Footer';
import { useCurrency } from '@/components/CurrencySelector';

import { LucideIcon } from 'lucide-react';

interface AITool {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  category: 'assessment' | 'document' | 'chat' | 'verification' | 'planning';
  features: string[];
  pricing: 'free' | 'premium' | 'freemium';
  rating: number;
  users: string;
  launchUrl: string;
  earnCredits?: number;
}

const aiTools: AITool[] = [
  {
    id: 'eligibility-calculator',
    name: 'AI Eligibility Calculator',
    description: 'Get instant visa eligibility assessment for 50+ countries using advanced AI algorithms',
    icon: Calculator,
    category: 'assessment',
    features: [
      'Real-time eligibility scoring',
      'Multiple country comparison',
      'Personalized recommendations',
      'Success probability analysis'
    ],
    pricing: 'free',
    rating: 4.8,
    users: '25K+',
    launchUrl: '/ai-tools/eligibility-calculator',
    earnCredits: 50
  },
  {
    id: 'document-wizard',
    name: 'Smart Document Wizard',
    description: 'AI-powered document preparation and verification system for immigration applications',
    icon: FileText,
    category: 'document',
    features: [
      'Document requirements checker',
      'Auto-fill assistance',
      'Error detection & correction',
      'Format standardization'
    ],
    pricing: 'freemium',
    rating: 4.9,
    users: '18K+',
    launchUrl: '/ai-tools/document-wizard',
    earnCredits: 75
  },
  {
    id: 'visa-chatbot',
    name: 'Expert Visa Chatbot',
    description: '24/7 AI assistant trained on immigration laws and procedures for instant guidance',
    icon: MessageCircle,
    category: 'chat',
    features: [
      'Natural language processing',
      'Multi-language support',
      'Law database integration',
      'Personalized responses'
    ],
    pricing: 'free',
    rating: 4.7,
    users: '42K+',
    launchUrl: '/ai-tools/visa-chatbot',
    earnCredits: 25
  },
  {
    id: 'scam-shield',
    name: 'ScamShield Verifier',
    description: 'Protect yourself from immigration scams with AI-powered verification technology',
    icon: Shield,
    category: 'verification',
    features: [
      'Agency verification',
      'Document authenticity check',
      'Scam pattern detection',
      'Risk assessment scoring'
    ],
    pricing: 'free',
    rating: 4.9,
    users: '15K+',
    launchUrl: '/ai-tools/scam-shield',
    earnCredits: 100
  },
  {
    id: 'pathway-planner',
    name: 'Migration Pathway Planner',
    description: 'AI-driven personalized migration strategy with timeline and milestone tracking',
    icon: Target,
    category: 'planning',
    features: [
      'Custom pathway generation',
      'Timeline optimization',
      'Progress tracking',
      'Alternative route suggestions'
    ],
    pricing: 'premium',
    rating: 4.8,
    users: '12K+',
    launchUrl: '/ai-tools/pathway-planner',
    earnCredits: 150
  },
  {
    id: 'job-match',
    name: 'AI Job Matcher',
    description: 'Find the best immigration-friendly jobs based on your skills and target country',
    icon: TrendingUp,
    category: 'assessment',
    features: [
      'Skill-job alignment analysis',
      'Salary predictions',
      'Employer sponsorship likelihood',
      'Market demand insights'
    ],
    pricing: 'freemium',
    rating: 4.6,
    users: '22K+',
    launchUrl: '/ai-tools/job-matcher',
    earnCredits: 80
  }
];

const categories = [
  { id: 'all', name: 'All Tools', icon: Brain },
  { id: 'assessment', name: 'Assessment', icon: Calculator },
  { id: 'document', name: 'Documents', icon: FileText },
  { id: 'chat', name: 'Chat & Support', icon: MessageCircle },
  { id: 'verification', name: 'Verification', icon: Shield },
  { id: 'planning', name: 'Planning', icon: Target }
];

export default function AIToolsPage() {
  const { formatPrice } = useCurrency();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = aiTools.filter(tool => {
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getPricingBadge = (pricing: string) => {
    switch (pricing) {
      case 'free':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'premium':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'freemium':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const totalUsers = aiTools.reduce((total, tool) => {
    const userCount = parseInt(tool.users.replace(/[^0-9]/g, '')) * 
                     (tool.users.includes('K') ? 1000 : 1);
    return total + userCount;
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <BackNavigation 
        currentPage="AI Tools"
        customBackUrl="/"
        customBackLabel="Home"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full border border-blue-400/30 mb-6">
              <Brain className="w-6 h-6 text-blue-400" />
              <span className="text-blue-300 font-medium">AI-Powered Migration Tools</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Smart AI Tools for
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> Smarter Migration</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Leverage cutting-edge artificial intelligence to streamline your migration journey. From eligibility assessment to document preparation, our AI tools make complex processes simple and accurate.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">{formatPrice(totalUsers / 1000)}K+</div>
                <div className="text-sm text-gray-400">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">{aiTools.length}</div>
                <div className="text-sm text-gray-400">AI Tools</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400">98%</div>
                <div className="text-sm text-gray-400">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">24/7</div>
                <div className="text-sm text-gray-400">Availability</div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search AI tools..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <Brain className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-6 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* AI Tools Grid */}
      <section className="px-6 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all">
                      <tool.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                        {tool.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-yellow-400 font-medium">{tool.rating}</span>
                        </div>
                        <span className="text-sm text-gray-400">•</span>
                        <span className="text-sm text-gray-400">{tool.users} users</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getPricingBadge(tool.pricing)}`}>
                    {tool.pricing.toUpperCase()}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {tool.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {tool.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                  {tool.features.length > 3 && (
                    <div className="text-xs text-gray-400">+{tool.features.length - 3} more features</div>
                  )}
                </div>

                {/* Earn Credits Badge */}
                {tool.earnCredits && (
                  <div className="flex items-center gap-2 mb-4 p-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl border border-green-500/30">
                    <Award className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-green-400 font-medium">
                      Earn {formatPrice(tool.earnCredits)} credits for using this tool!
                    </span>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button 
                    onClick={() => window.open(tool.launchUrl, '_blank')}
                    className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Launch Tool</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  {tool.pricing !== 'free' && (
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                      <Clock className="w-3 h-3" />
                      <span>Free trial available</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Benefits Section */}
      <section className="py-12 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose AI-Powered Migration Tools?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Lightning Fast</h3>
              <p className="text-gray-300">Get instant results that would typically take hours or days of manual research and calculation.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI-Powered Accuracy</h3>
              <p className="text-gray-300">Benefit from machine learning algorithms trained on thousands of successful migration cases.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Global Coverage</h3>
              <p className="text-gray-300">Access comprehensive information for 50+ countries with real-time updates on immigration policies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Experience the Future of Migration?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of successful migrants who trusted our AI tools for their journey.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold rounded-xl hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all flex items-center gap-3">
              Start Free Assessment
              <Lightbulb className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-white/10 border border-white/20 text-white font-medium rounded-xl hover:bg-white/20 transition-all flex items-center gap-3">
              View All Tools
              <Users className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
