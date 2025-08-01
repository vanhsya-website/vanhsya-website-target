import React from 'react'

import ValuesSection from '../components/ValuesSection'
import ValuesEnhanced from '../components/ValuesSection-Enhanced'

// Demo page to compare values section implementations
export default function ValuesComparison() {
  return (
    <div className="min-h-screen">
      {/* Your Basic Values Section */}
      <div className="mb-8">
        <div className="bg-purple-600 text-white p-4 text-center">
          <h2 className="text-2xl font-bold mb-2">Your Requested Values Design</h2>
          <p className="text-purple-200">Simple, clean, minimal implementation</p>
        </div>
        <ValuesSection />
      </div>

      {/* Enhanced Simple Version */}
      <div className="mb-8">
        <div className="bg-blue-600 text-white p-4 text-center">
          <h2 className="text-2xl font-bold mb-2">Enhanced Simple Version</h2>
          <p className="text-blue-200">Clean design with value cards added</p>
        </div>
        <ValuesEnhanced />
      </div>

      {/* Current Professional Implementation Preview */}
      <div className="bg-gray-800 text-white p-4 text-center">
        <h2 className="text-2xl font-bold mb-2">Current Professional Implementation</h2>
        <p className="text-gray-300">Advanced animations, gradient backgrounds, and comprehensive content</p>
      </div>
      
      {/* Simplified version of current implementation */}
      <section className='py-20 bg-gradient-to-br from-purple-50 to-blue-50'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>
              Our Values & Culture
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              We&apos;re building more than just a company – we&apos;re creating
              a movement that empowers people to achieve their immigration
              dreams through innovative technology.
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto'>
            {[
              {
                title: 'Human-Centered Innovation',
                description: 'We put people first in everything we build, ensuring our AI serves humanity.',
              },
              {
                title: 'Global Impact',
                description: 'We believe in breaking down barriers and connecting people across borders.',
              },
              {
                title: 'Continuous Learning',
                description: 'We foster a culture of curiosity, growth, and intellectual humility.',
              },
              {
                title: 'Transparency & Trust',
                description: 'We operate with openness, honesty, and integrity in all our relationships.',
              },
            ].map((value, index) => (
              <div
                key={index}
                className='bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300'
              >
                <h3 className='text-xl font-bold text-gray-900 mb-3'>
                  {value.title}
                </h3>
                <p className='text-gray-600'>{value.description}</p>
              </div>
            ))}
          </div>

          {/* Benefits Preview */}
          <div className='text-center mb-12'>
            <h3 className='text-3xl font-bold text-gray-900 mb-4'>
              Why You&apos;ll Love Working Here
            </h3>
          </div>

          <div className='grid md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
            {[
              { title: 'Health & Wellness', icon: '❤️', description: 'Comprehensive health, dental, and vision coverage plus wellness programs' },
              { title: 'Remote-First Culture', icon: '🌍', description: 'Work from anywhere with flexible hours and autonomous teams' },
              { title: 'Learning & Development', icon: '🎓', description: 'Annual learning budget, conferences, and professional development opportunities' },
            ].map((benefit, index) => (
              <div
                key={index}
                className='bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center hover:scale-105 transition-transform duration-300'
              >
                <div className='text-4xl mb-4'>{benefit.icon}</div>
                <h4 className='text-lg font-semibold text-gray-900 mb-2'>
                  {benefit.title}
                </h4>
                <p className='text-gray-600'>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
