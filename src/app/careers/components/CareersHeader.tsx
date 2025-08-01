import React from 'react';

const CareersHeader = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-blue-500 text-white text-center p-16 space-y-6">
      <h1 className="text-5xl font-bold leading-tight">
        Build the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Immigration</span>
      </h1>
      <p className="text-xl">Join our mission to transform the immigration industry with AI-powered solutions. Help millions of people achieve their dreams of living in their ideal country.</p>
      <div className="space-x-4">
        <a href="#open-positions" className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">View Open Positions</a>
        <a href="mailto:careers@vanhsya.com" className="text-white border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">careers@vanhsya.com</a>
      </div>
    </section>
  );
}

export default CareersHeader;
