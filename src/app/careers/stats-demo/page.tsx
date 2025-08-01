import React from 'react'

import StatsSection from '../components/StatsSection'
import StatsEnhanced from '../components/StatsSection-Enhanced'

// Demo page to compare stats implementations
export default function StatsComparison() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Your Basic Stats Section */}
      <div className="mb-8">
        <div className="bg-gray-800 text-white p-4 text-center">
          <h2 className="text-2xl font-bold mb-2">Your Requested Stats Design</h2>
          <p className="text-gray-300">Simple, clean implementation</p>
        </div>
        <StatsSection />
      </div>

      {/* Enhanced Version */}
      <div className="mb-8">
        <div className="bg-purple-600 text-white p-4 text-center">
          <h2 className="text-2xl font-bold mb-2">Enhanced Version with Styling</h2>
          <p className="text-purple-200">Added padding, shadows, and transitions</p>
        </div>
        <StatsEnhanced />
      </div>

      {/* Current Professional Implementation */}
      <div className="bg-blue-600 text-white p-4 text-center">
        <h2 className="text-2xl font-bold mb-2">Current Professional Implementation</h2>
        <p className="text-blue-200">Icons, animations, and advanced styling</p>
      </div>
      
      {/* Current Implementation Section */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-6'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
            {[
              { value: '50+', label: 'Team Members', icon: '👥' },
              { value: '25K+', label: 'Happy Clients', icon: '🏆' },
              { value: '50+', label: 'Countries Served', icon: '🌍' },
              { value: '94%', label: 'Success Rate', icon: '⭐' },
            ].map((stat, index) => (
              <div key={index} className='text-center group hover:scale-105 transition-transform duration-300'>
                <div className='text-4xl mb-3'>{stat.icon}</div>
                <div className='text-3xl font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors'>
                  {stat.value}
                </div>
                <div className='text-gray-600'>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
