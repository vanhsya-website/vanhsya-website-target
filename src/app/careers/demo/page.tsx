import React from 'react'

import CareersHeader from '../components/CareersHeader'
import CareersPage from '../components/CareersPage'

// Demo page to compare header implementations
export default function CareersComparison() {
  return (
    <div className="min-h-screen">
      {/* Your Requested Simple Header */}
      <div className="mb-8">
        <div className="bg-gray-100 p-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Your Requested Header Design</h2>
          <p className="text-gray-600">Simple, clean implementation</p>
        </div>
        <CareersHeader />
      </div>

      {/* Current Professional Implementation */}
      <div className="bg-gray-100 p-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Current Professional Implementation</h2>
        <p className="text-gray-600">Advanced animations, floating particles, responsive design</p>
      </div>
      <CareersPage />
    </div>
  )
}
