import React from 'react';

// Enhanced version with proper styling
const StatsSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="stat-card p-6 rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-3xl font-bold text-purple-600 mb-2">50+</h3>
            <p className="text-xl text-gray-700">Team Members</p>
          </div>
          <div className="stat-card p-6 rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-3xl font-bold text-purple-600 mb-2">25K+</h3>
            <p className="text-xl text-gray-700">Happy Clients</p>
          </div>
          <div className="stat-card p-6 rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-3xl font-bold text-purple-600 mb-2">50+</h3>
            <p className="text-xl text-gray-700">Countries Served</p>
          </div>
          <div className="stat-card p-6 rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-3xl font-bold text-purple-600 mb-2">94%</h3>
            <p className="text-xl text-gray-700">Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
