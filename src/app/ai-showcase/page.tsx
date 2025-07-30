'use client';

import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// Import components that don't use window
import Footer from '@/components/Footer';

// Dynamically import components that use window
const HeroEnhanced = dynamic(() => import('@/components/Hero-premium'), {
  ssr: false,
});
const NavigationEnhanced = dynamic(
  () => import('@/components/Navigation-Premium'),
  { ssr: false }
);
const AIConsultationBot = dynamic(
  () => import('@/components/ai/AIConsultationBot'),
  { ssr: false }
);
const DocumentAnalyzer = dynamic(
  () => import('@/components/ai/DocumentAnalyzer'),
  { ssr: false }
);
const CountryComparison = dynamic(
  () => import('@/components/tools/CountryComparison'),
  { ssr: false }
);
const ImmigrationCalculator = dynamic(
  () => import('@/components/tools/ImmigrationCalculator'),
  { ssr: false }
);

export default function AIShowcasePage() {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Enhanced Navigation */}
      <NavigationEnhanced />

      {/* Hero Section with Interactive Elements */}
      <section id='hero'>
        <HeroEnhanced />
      </section>

      {/* AI Tools Showcase */}
      <section id='ai-tools' className='py-20 bg-white'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>
              AI-Powered Immigration Tools
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Experience the future of immigration with our cutting-edge AI
              technology. From document analysis to success prediction - we make
              your journey seamless.
            </p>
          </div>

          {/* Immigration Calculator */}
          <div className='mb-20'>
            <div className='text-center mb-12'>
              <h3 className='text-3xl font-bold text-gray-900 mb-4'>
                Smart Immigration Calculator
              </h3>
              <p className='text-lg text-gray-600'>
                Get your immigration score in minutes with our AI-powered
                assessment tool
              </p>
            </div>
            <ImmigrationCalculator />
          </div>

          {/* Document Analyzer */}
          <div className='mb-20'>
            <div className='text-center mb-12'>
              <h3 className='text-3xl font-bold text-gray-900 mb-4'>
                AI Document Analyzer
              </h3>
              <p className='text-lg text-gray-600'>
                Upload your documents and get instant AI-powered validation and
                feedback
              </p>
            </div>
            <DocumentAnalyzer />
          </div>

          {/* Country Comparison Tool */}
          <div className='mb-20'>
            <div className='text-center mb-12'>
              <h3 className='text-3xl font-bold text-gray-900 mb-4'>
                Intelligent Country Comparison
              </h3>
              <p className='text-lg text-gray-600'>
                Compare immigration destinations with AI-driven insights and
                metrics
              </p>
            </div>
            <CountryComparison />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className='py-20 bg-gradient-to-br from-purple-50 to-blue-50'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>
              Why Choose VANHSYA AI
            </h2>
            <p className='text-xl text-gray-600'>
              Revolutionary features that set us apart in the immigration
              industry
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[
              {
                title: 'AI-Powered Analysis',
                description:
                  'Advanced algorithms analyze your profile and predict success rates with 95% accuracy',
                icon: '🤖',
                stats: '95% Accuracy',
              },
              {
                title: 'Real-Time Processing',
                description:
                  'Get instant feedback on documents, eligibility, and application status',
                icon: '⚡',
                stats: 'Instant Results',
              },
              {
                title: 'Smart Recommendations',
                description:
                  'Personalized pathway suggestions based on your unique profile and goals',
                icon: '🎯',
                stats: '94% Success Rate',
              },
              {
                title: 'Document Intelligence',
                description:
                  'AI validates documents, checks compliance, and identifies missing requirements',
                icon: '📄',
                stats: '100% Compliance',
              },
              {
                title: 'Global Coverage',
                description:
                  'Access to 50+ countries with real-time policy updates and requirements',
                icon: '🌍',
                stats: '50+ Countries',
              },
              {
                title: '24/7 AI Support',
                description:
                  'VanHologram AI consultant available round-the-clock for instant assistance',
                icon: '🔔',
                stats: '24/7 Available',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className='bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all'
              >
                <div className='text-4xl mb-4'>{feature.icon}</div>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>
                  {feature.title}
                </h3>
                <p className='text-gray-600 mb-4'>{feature.description}</p>
                <div className='text-purple-600 font-semibold'>
                  {feature.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>
              AI-Powered Success Stories
            </h2>
            <p className='text-xl text-gray-600'>
              Real clients, real results - powered by VANHSYA AI
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            {[
              {
                name: 'Priya Sharma',
                country: 'India → Canada',
                timeline: '6 months',
                score: '89/100',
                quote:
                  'The AI calculator predicted my success perfectly. Got my PR in exactly 6 months!',
                image: '🇮🇳',
              },
              {
                name: 'Ahmed Hassan',
                country: 'Egypt → Australia',
                timeline: '8 months',
                score: '92/100',
                quote:
                  'Document analyzer saved me months of back-and-forth. Everything was perfect!',
                image: '🇪🇬',
              },
              {
                name: 'Maria Rodriguez',
                country: 'Mexico → Germany',
                timeline: '5 months',
                score: '87/100',
                quote:
                  'Country comparison tool helped me choose the perfect destination for my family.',
                image: '🇲🇽',
              },
            ].map((story, index) => (
              <div
                key={index}
                className='bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100'
              >
                <div className='text-center mb-6'>
                  <div className='text-4xl mb-3'>{story.image}</div>
                  <div className='text-sm font-medium text-purple-600 mb-1'>
                    AI Score: {story.score}
                  </div>
                  <h3 className='text-xl font-bold text-gray-900'>
                    {story.name}
                  </h3>
                  <p className='text-gray-600'>{story.country}</p>
                  <p className='text-sm text-green-600 font-medium'>
                    ✓ Success in {story.timeline}
                  </p>
                </div>
                <blockquote className='text-gray-700 italic text-center'>
                  &ldquo;{story.quote}&rdquo;
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white'>
        <div className='container mx-auto px-6 text-center'>
          <h2 className='text-4xl font-bold mb-4'>
            Ready to Start Your AI-Powered Immigration Journey?
          </h2>
          <p className='text-xl mb-8 opacity-90'>
            Join 25,000+ successful immigrants who chose VANHSYA AI
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 transition-all'>
              Start Free Assessment
            </button>
            <button className='px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-purple-600 transition-all'>
              Book AI Consultation
            </button>
          </div>

          <div className='mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
            <div>
              <div className='text-3xl font-bold'>25K+</div>
              <div className='text-purple-100'>Successful Cases</div>
            </div>
            <div>
              <div className='text-3xl font-bold'>94%</div>
              <div className='text-purple-100'>Success Rate</div>
            </div>
            <div>
              <div className='text-3xl font-bold'>50+</div>
              <div className='text-purple-100'>Countries</div>
            </div>
            <div>
              <div className='text-3xl font-bold'>24/7</div>
              <div className='text-purple-100'>AI Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Consultation Bot */}
      <AIConsultationBot />

      {/* Footer */}
      <Footer />
    </div>
  );
}
