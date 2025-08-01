import React from 'react';

const JobListings = () => {
  const jobs = [
    {
      id: 1,
      title: "Senior AI Engineer",
      department: "AI & Machine Learning",
      location: "Remote / Toronto",
      salary: "$120,000 - $160,000",
      type: "Full-time",
      featured: true
    },
    {
      id: 2,
      title: "Immigration Consultant",
      department: "Client Services", 
      location: "Vancouver / Remote",
      salary: "$70,000 - $90,000",
      type: "Full-time",
      featured: false
    },
    {
      id: 3,
      title: "Full-Stack Developer",
      department: "Engineering",
      location: "Remote Worldwide",
      salary: "$90,000 - $130,000", 
      type: "Full-time",
      featured: false
    },
    {
      id: 4,
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote / Toronto",
      salary: "$75,000 - $105,000",
      type: "Full-time",
      featured: false
    },
    {
      id: 5,
      title: "Product Manager",
      department: "Product",
      location: "Toronto / Remote",
      salary: "$110,000 - $140,000",
      type: "Full-time", 
      featured: false
    },
    {
      id: 6,
      title: "Content Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      salary: "$55,000 - $75,000",
      type: "Full-time",
      featured: false
    }
  ];

  return (
    <section id="open-positions" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-purple-600 mb-4">Open Positions</h2>
          <p className="text-xl text-gray-600">Join our team and help shape the future of immigration technology</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <div key={job.id} className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${job.featured ? 'ring-2 ring-purple-200 border-purple-200' : ''}`}>
              {job.featured && (
                <div className="mb-3">
                  <span className="bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">Featured</span>
                </div>
              )}
              
              <h3 className="text-xl font-semibold text-purple-600 mb-3">{job.title}</h3>
              <div className="space-y-2 mb-4">
                <p className="text-gray-600">📍 {job.location}</p>
                <p className="text-gray-600">💼 {job.department}</p>
                <p className="text-gray-600">💰 {job.salary}</p>
                <p className="text-gray-600">⏰ {job.type}</p>
              </div>
              
              <div className="flex gap-3 mt-6">
                <a 
                  href={`mailto:careers@vanhsya.com?subject=Application for ${job.title}`}
                  className="flex-1 text-center text-white bg-purple-600 hover:bg-purple-700 py-2 px-4 rounded-lg font-semibold transition-colors"
                >
                  Apply Now
                </a>
                <button className="px-4 py-2 border border-purple-600 text-purple-600 hover:bg-purple-50 rounded-lg font-semibold transition-colors">
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Don't see the perfect role?</p>
          <a 
            href="mailto:careers@vanhsya.com"
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Send Your Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default JobListings;
