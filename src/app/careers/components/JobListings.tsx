import React from 'react';

const JobListings = () => {
  return (
    <section id="open-positions" className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-purple-600 mb-8">Open Positions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Job Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-purple-600">Software Engineer</h3>
            <p className="text-gray-600 mt-2">Location: Dubai, UAE</p>
            <p className="text-gray-600 mt-2">Salary: Competitive</p>
            <a href="/apply" className="mt-4 inline-block text-white bg-purple-600 hover:bg-purple-700 py-2 px-6 rounded-lg">Apply Now</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobListings;
