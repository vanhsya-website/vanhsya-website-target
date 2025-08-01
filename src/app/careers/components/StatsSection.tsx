import React from 'react';

const StatsSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div className="stat-card">
          <h3 className="text-3xl font-bold text-purple-600">50+</h3>
          <p className="text-xl">Team Members</p>
        </div>
        <div className="stat-card">
          <h3 className="text-3xl font-bold text-purple-600">25K+</h3>
          <p className="text-xl">Happy Clients</p>
        </div>
        <div className="stat-card">
          <h3 className="text-3xl font-bold text-purple-600">50+</h3>
          <p className="text-xl">Countries Served</p>
        </div>
        <div className="stat-card">
          <h3 className="text-3xl font-bold text-purple-600">94%</h3>
          <p className="text-xl">Success Rate</p>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
