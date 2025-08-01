import React, { useState } from 'react';

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  salary: string;
  type: string;
  description: string;
  requirements?: string[];
  responsibilities?: string[];
  benefits?: string[];
  featured: boolean;
}

interface JobDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  job: Job | null;
}

const JobDetailsModal = ({ isOpen, onClose, job }: JobDetailsModalProps) => {
  if (!isOpen || !job) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-bold text-purple-600">{job.title}</h3>
              <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                <span>📍 {job.location}</span>
                <span>💼 {job.department}</span>
                <span>⏰ {job.type}</span>
                <span>💰 {job.salary}</span>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              ×
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {/* Job Description */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Job Description</h4>
            <p className="text-gray-700 leading-relaxed">{job.description}</p>
          </div>

          {/* Requirements */}
          {job.requirements && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Requirements</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Responsibilities */}
          {job.responsibilities && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Responsibilities</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {job.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Benefits */}
          {job.benefits && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Benefits & Perks</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {job.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 p-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`mailto:careers@vanhsya.com?subject=Application for ${job.title}&body=Dear Hiring Team,%0D%0A%0D%0AI am interested in applying for the ${job.title} position. Please find my resume attached.%0D%0A%0D%0ABest regards`}
              className="flex-1 text-center bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Apply Now
            </a>
            <button 
              onClick={onClose}
              className="flex-1 text-center border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const JobListings = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const jobs = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'AI & Machine Learning',
      location: 'Remote / Toronto',
      salary: '$120,000 - $160,000',
      type: 'Full-time',
      description: 'Lead the development of our revolutionary AI-powered immigration platform. Build and optimize machine learning models for document analysis, eligibility prediction, and intelligent consultation systems.',
      requirements: [
        'Masters in Computer Science, AI, or related field',
        '5+ years experience in machine learning and AI',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with NLP and computer vision',
        'Knowledge of cloud platforms (AWS, GCP, Azure)',
        'Strong problem-solving and analytical skills'
      ],
      responsibilities: [
        'Design and implement AI algorithms for immigration processes',
        'Develop machine learning models for document validation',
        'Optimize AI system performance and accuracy',
        'Collaborate with cross-functional teams',
        'Mentor junior AI engineers',
        'Research and implement cutting-edge AI techniques'
      ],
      benefits: [
        'Competitive salary and equity package',
        'Comprehensive health and dental coverage',
        'Flexible work arrangements',
        'Professional development budget',
        'Annual company retreats',
        'Immigration assistance for international hires'
      ],
      featured: true
    },
    {
      id: 2,
      title: 'Immigration Consultant',
      department: 'Client Services',
      location: 'Vancouver / Remote',
      salary: '$70,000 - $90,000',
      type: 'Full-time',
      description: 'Provide expert immigration guidance to clients while working with our AI tools to deliver exceptional service. Help shape the future of immigration consulting.',
      requirements: [
        'RCIC license or equivalent immigration credentials',
        '3+ years immigration consulting experience',
        'Knowledge of Canadian and international immigration law',
        'Excellent communication and client service skills',
        'Comfortable working with technology and AI tools',
        'Fluency in English and one additional language preferred'
      ],
      responsibilities: [
        'Provide immigration consultation to clients',
        'Work with AI tools to enhance service delivery',
        'Prepare and review immigration applications',
        'Conduct client assessments and strategy sessions',
        'Stay updated on immigration policy changes',
        'Provide feedback on AI system improvements'
      ],
      benefits: [
        'Competitive base salary plus commission',
        'Health and wellness benefits',
        'Professional development opportunities',
        'Flexible working hours',
        'Technology and home office allowance',
        'Immigration law training and certification support'
      ],
      featured: false
    },
    {
      id: 3,
      title: 'Full-Stack Developer',
      department: 'Engineering',
      location: 'Remote Worldwide',
      salary: '$90,000 - $130,000',
      type: 'Full-time',
      description: 'Build and maintain our cutting-edge web platform that serves thousands of immigration applicants. Work with modern technologies and contribute to a platform that changes lives.',
      requirements: [
        "Bachelor's degree in Computer Science or equivalent",
        '4+ years full-stack development experience',
        'Proficiency in React, Next.js, Node.js',
        'Experience with TypeScript and modern web technologies',
        'Knowledge of databases (PostgreSQL, MongoDB)',
        'Understanding of cloud architecture and DevOps'
      ],
      responsibilities: [
        'Develop and maintain web applications',
        'Implement responsive and accessible user interfaces',
        'Build robust APIs and backend services',
        'Optimize application performance and scalability',
        'Collaborate with designers and product managers',
        'Participate in code reviews and technical discussions'
      ],
      benefits: [
        'Remote-first culture with flexible hours',
        'Top-tier equipment and technology setup',
        'Learning and development stipend',
        'Health and wellness programs',
        'Equity participation',
        'Annual team building events'
      ],
      featured: false
    },
    {
      id: 4,
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Remote / Toronto',
      salary: '$75,000 - $105,000',
      type: 'Full-time',
      description: 'Design intuitive and beautiful user experiences that make immigration accessible to everyone. Create interfaces that combine AI power with human-centered design.',
      requirements: [
        "Bachelor's degree in Design, HCI, or related field",
        '3+ years UX/UI design experience',
        'Proficiency in Figma, Sketch, Adobe Creative Suite',
        'Strong portfolio demonstrating user-centered design',
        'Experience with design systems and accessibility',
        'Understanding of frontend development principles'
      ],
      responsibilities: [
        'Design user interfaces for web and mobile applications',
        'Conduct user research and usability testing',
        'Create wireframes, prototypes, and design specifications',
        'Collaborate with developers to implement designs',
        'Maintain and evolve design system',
        'Advocate for user needs throughout product development'
      ],
      benefits: [
        'Creative freedom and autonomy',
        'Latest design tools and software',
        'Conference and workshop attendance',
        'Flexible work arrangements',
        'Health and dental benefits',
        'Stock options and performance bonuses'
      ],
      featured: false
    }
  ];

  const openModal = (job: Job) => {
    setSelectedJob(job);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedJob(null);
  };

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
              
              <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                {job.description.substring(0, 100)}...
              </p>
              
              <div className="flex gap-3 mt-6">
                <button 
                  onClick={() => openModal(job)}
                  className="flex-1 text-center text-purple-600 border border-purple-600 hover:bg-purple-50 py-2 px-4 rounded-lg font-semibold transition-colors"
                >
                  View Details
                </button>
                <a 
                  href={`mailto:careers@vanhsya.com?subject=Application for ${job.title}`}
                  className="flex-1 text-center text-white bg-purple-600 hover:bg-purple-700 py-2 px-4 rounded-lg font-semibold transition-colors"
                >
                  Apply Now
                </a>
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

      <JobDetailsModal isOpen={isModalOpen} onClose={closeModal} job={selectedJob} />
    </section>
  );
}

export default JobListings;
