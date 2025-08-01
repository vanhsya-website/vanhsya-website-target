import React from 'react'

import JobListings from '../components/JobListings'
import JobListingsEnhanced from '../components/JobListings-Enhanced'

// Demo page to compare job listings implementations
export default function JobListingsComparison() {
  return (
    <div className="min-h-screen">
      {/* Your Basic Job Listings */}
      <div className="mb-8">
        <div className="bg-purple-600 text-white p-4 text-center">
          <h2 className="text-2xl font-bold mb-2">Your Requested Job Listings Design</h2>
          <p className="text-purple-200">Simple job cards with basic layout</p>
        </div>
        <JobListings />
      </div>

      {/* Enhanced Simple Version */}
      <div className="mb-8">
        <div className="bg-blue-600 text-white p-4 text-center">
          <h2 className="text-2xl font-bold mb-2">Enhanced Simple Version</h2>
          <p className="text-blue-200">Multiple jobs with realistic data and emojis</p>
        </div>
        <JobListingsEnhanced />
      </div>

      {/* Current Professional Implementation Preview */}
      <div className="bg-gray-800 text-white p-4 text-center">
        <h2 className="text-2xl font-bold mb-2">Current Professional Implementation</h2>
        <p className="text-gray-300">Advanced filtering, detailed descriptions, animations, and comprehensive job data</p>
      </div>
      
      {/* Simplified preview of current implementation */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-6'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl font-bold text-gray-900 mb-4'>Open Positions</h2>
            <p className='text-xl text-gray-600'>Join our team and help shape the future of immigration technology</p>
          </div>

          {/* Department Filters */}
          <div className='flex flex-wrap gap-4 mb-8 justify-center'>
            <div className='flex flex-wrap gap-2'>
              <span className='text-sm font-medium text-gray-700'>Department:</span>
              {['All', 'AI & Machine Learning', 'Client Services', 'Engineering', 'Design'].map(dept => (
                <button
                  key={dept}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    dept === 'All' 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Sample Professional Job Cards */}
          <div className='space-y-6'>
            {[
              {
                title: 'Senior AI Engineer',
                department: 'AI & Machine Learning',
                location: 'Remote / Toronto',
                type: 'Full-time',
                salary: '$120,000 - $160,000',
                description: 'Lead the development of our revolutionary AI-powered immigration platform. Build and optimize machine learning models for document analysis, eligibility prediction, and intelligent consultation systems.',
                featured: true
              },
              {
                title: 'Immigration Consultant',
                department: 'Client Services',
                location: 'Vancouver / Remote',
                type: 'Full-time',
                salary: '$70,000 - $90,000',
                description: 'Provide expert immigration guidance to clients while working with our AI tools to deliver exceptional service. Help shape the future of immigration consulting.',
                featured: false
              }
            ].map((job, index) => (
              <div
                key={index}
                className={`bg-white border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all ${
                  job.featured ? 'border-purple-200 bg-purple-50' : 'border-gray-200'
                }`}
              >
                <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4'>
                  <div className='flex-1'>
                    <div className='flex items-center gap-3 mb-2'>
                      <h3 className='text-xl font-bold text-gray-900'>{job.title}</h3>
                      {job.featured && (
                        <span className='px-3 py-1 bg-purple-600 text-white text-xs font-medium rounded-full flex items-center gap-1'>
                          ✨ Featured
                        </span>
                      )}
                    </div>
                    <p className='text-gray-600 mb-4'>{job.description}</p>
                    <div className='flex flex-wrap gap-4 text-sm text-gray-500'>
                      <div className='flex items-center gap-1'>
                        🏢 {job.department}
                      </div>
                      <div className='flex items-center gap-1'>
                        📍 {job.location}
                      </div>
                      <div className='flex items-center gap-1'>
                        ⏰ {job.type}
                      </div>
                      <div className='flex items-center gap-1'>
                        💰 {job.salary}
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col sm:flex-row gap-3'>
                    <a
                      href={`mailto:careers@vanhsya.com?subject=Application for ${job.title}`}
                      className='px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-all flex items-center gap-2'
                    >
                      ✉️ Apply Now
                    </a>
                    <button className='px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all'>
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='text-center py-12'>
            <p className='text-gray-600 mb-4'>Don&apos;t see the perfect role?</p>
            <a
              href='mailto:careers@vanhsya.com'
              className='inline-block px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all'
            >
              Send Your Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
