'use client';

import React from 'react';

import JobListings from '../components/JobListings';
import JobListingsEnhanced from '../components/JobListings-Enhanced';
import JobListingsWithModal from '../components/JobListings-WithModal';

export default function JobsModalDemoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Job Listings Modal Demo</h1>
          <p className="text-xl text-purple-100">
            Compare different implementations of job listings with modal functionality
          </p>
        </div>
      </div>

      {/* Demo Sections */}
      <div className="container mx-auto px-6 py-12">
        
        {/* Modal Version */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              🎯 Job Listings with Detailed Modal
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Features:</h3>
                <ul className="space-y-1">
                  <li>• Comprehensive job details modal</li>
                  <li>• Requirements, responsibilities, benefits</li>
                  <li>• Featured job highlighting</li>
                  <li>• Professional email application links</li>
                  <li>• Responsive modal design</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Best For:</h3>
                <ul className="space-y-1">
                  <li>• Detailed job information display</li>
                  <li>• Professional recruitment sites</li>
                  <li>• Companies with complex job descriptions</li>
                  <li>• Enhanced user experience</li>
                  <li>• Mobile-friendly job browsing</li>
                </ul>
              </div>
            </div>
          </div>
          <JobListingsWithModal />
        </div>

        {/* Comparison with Enhanced Version */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              📋 Enhanced Job Listings (No Modal)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Features:</h3>
                <ul className="space-y-1">
                  <li>• Direct email application</li>
                  <li>• Featured job badges</li>
                  <li>• Department categorization</li>
                  <li>• Hover effects and animations</li>
                  <li>• Emoji icons for visual appeal</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Best For:</h3>
                <ul className="space-y-1">
                  <li>• Quick job overview</li>
                  <li>• Simple application process</li>
                  <li>• Minimal user interaction</li>
                  <li>• Fast browsing experience</li>
                  <li>• External job detail pages</li>
                </ul>
              </div>
            </div>
          </div>
          <JobListingsEnhanced />
        </div>

        {/* Basic Version */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              📝 Simple Job Listings (Original Request)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Features:</h3>
                <ul className="space-y-1">
                  <li>• Clean, minimalist design</li>
                  <li>• Basic job information</li>
                  <li>• Simple card layout</li>
                  <li>• Direct application button</li>
                  <li>• Lightweight implementation</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Best For:</h3>
                <ul className="space-y-1">
                  <li>• Simple job boards</li>
                  <li>• Minimal design preference</li>
                  <li>• Fast loading times</li>
                  <li>• Basic functionality needs</li>
                  <li>• Starting point for customization</li>
                </ul>
              </div>
            </div>
          </div>
          <JobListings />
        </div>

        {/* Implementation Guide */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Implementation Notes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-purple-600 mb-3">Modal Version</h3>
              <p className="text-sm text-gray-600 mb-3">
                Perfect for detailed job information with professional modal interface.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• TypeScript interfaces</li>
                <li>• Responsive modal design</li>
                <li>• Accessibility features</li>
                <li>• Professional email templates</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-purple-600 mb-3">Enhanced Version</h3>
              <p className="text-sm text-gray-600 mb-3">
                Great balance of features and simplicity with visual enhancements.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Featured job highlighting</li>
                <li>• Department categorization</li>
                <li>• Visual icons and styling</li>
                <li>• Hover interactions</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-purple-600 mb-3">Simple Version</h3>
              <p className="text-sm text-gray-600 mb-3">
                Clean and minimal implementation based on your original request.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Lightweight code</li>
                <li>• Easy to customize</li>
                <li>• Fast performance</li>
                <li>• Minimal dependencies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
