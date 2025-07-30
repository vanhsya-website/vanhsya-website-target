'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BriefcaseIcon,
  MapPinIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UsersIcon,
  GlobeAmericasIcon,
  HeartIcon,
  AcademicCapIcon,
  RocketLaunchIcon,
  StarIcon,
  EnvelopeIcon,
  BuildingOfficeIcon,
  TrophyIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import NavigationEnhanced from '@/components/Navigation-Premium';
import Footer from '@/components/Footer';

// This page exports a careers section showcasing job opportunities at VANHSYA

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  featured?: boolean;
}

const jobPositions: JobPosition[] = [
  {
    id: '1',
    title: 'Senior AI Engineer',
    department: 'AI & Machine Learning',
    location: 'Remote / Toronto',
    type: 'Full-time',
    experience: '5+ years',
    salary: '$120,000 - $160,000',
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
    id: '2',
    title: 'Immigration Consultant',
    department: 'Client Services',
    location: 'Vancouver / Remote',
    type: 'Full-time',
    experience: '3+ years',
    salary: '$70,000 - $90,000',
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
    ]
  },
  {
    id: '3',
    title: 'Full-Stack Developer',
    department: 'Engineering',
    location: 'Remote Worldwide',
    type: 'Full-time',
    experience: '4+ years',
    salary: '$90,000 - $130,000',
    description: 'Build and maintain our cutting-edge web platform that serves thousands of immigration applicants. Work with modern technologies and contribute to a platform that changes lives.',
    requirements: [
      'Bachelor\'s degree in Computer Science or equivalent',
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
    ]
  },
  {
    id: '4',
    title: 'UX/UI Designer',
    department: 'Design',
    location: 'Remote / Toronto',
    type: 'Full-time',
    experience: '3+ years',
    salary: '$75,000 - $105,000',
    description: 'Design intuitive and beautiful user experiences that make immigration accessible to everyone. Create interfaces that combine AI power with human-centered design.',
    requirements: [
      'Bachelor\'s degree in Design, HCI, or related field',
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
    ]
  },
  {
    id: '5',
    title: 'Product Manager - AI Tools',
    department: 'Product',
    location: 'Toronto / Remote',
    type: 'Full-time',
    experience: '5+ years',
    salary: '$110,000 - $140,000',
    description: 'Lead the product strategy for our AI-powered immigration tools. Drive innovation and ensure our products deliver exceptional value to users worldwide.',
    requirements: [
      'MBA or equivalent experience in product management',
      '5+ years product management experience',
      'Experience with AI/ML products preferred',
      'Strong analytical and data-driven decision making',
      'Excellent communication and leadership skills',
      'Understanding of immigration industry is a plus'
    ],
    responsibilities: [
      'Define product vision and strategy for AI tools',
      'Manage product roadmap and prioritization',
      'Collaborate with engineering, design, and AI teams',
      'Analyze user feedback and product metrics',
      'Conduct market research and competitive analysis',
      'Present product updates to stakeholders'
    ],
    benefits: [
      'Leadership development opportunities',
      'Comprehensive benefits package',
      'Performance-based bonuses',
      'Flexible work environment',
      'Equity participation',
      'Professional coaching and mentorship'
    ]
  },
  {
    id: '6',
    title: 'Content Marketing Specialist',
    department: 'Marketing',
    location: 'Remote',
    type: 'Full-time',
    experience: '2+ years',
    salary: '$55,000 - $75,000',
    description: 'Create compelling content that educates and inspires our global audience. Help tell the VANHSYA story and build our brand in the immigration space.',
    requirements: [
      'Bachelor\'s degree in Marketing, Communications, or related',
      '2+ years content marketing experience',
      'Excellent writing and editing skills',
      'SEO and digital marketing knowledge',
      'Experience with content management systems',
      'Immigration industry knowledge preferred'
    ],
    responsibilities: [
      'Create blog posts, guides, and educational content',
      'Develop social media content and campaigns',
      'Collaborate with subject matter experts',
      'Optimize content for search engines',
      'Track and analyze content performance',
      'Support overall marketing initiatives'
    ],
    benefits: [
      'Creative and collaborative environment',
      'Professional writing and marketing training',
      'Flexible schedule and remote work',
      'Health and wellness benefits',
      'Performance bonuses',
      'Career growth opportunities'
    ]
  }
];

const benefits = [
  {
    icon: HeartIcon,
    title: 'Health & Wellness',
    description: 'Comprehensive health, dental, and vision coverage plus wellness programs'
  },
  {
    icon: GlobeAmericasIcon,
    title: 'Remote-First Culture',
    description: 'Work from anywhere with flexible hours and autonomous teams'
  },
  {
    icon: AcademicCapIcon,
    title: 'Learning & Development',
    description: 'Annual learning budget, conferences, and professional development opportunities'
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Competitive Compensation',
    description: 'Market-leading salaries, equity participation, and performance bonuses'
  },
  {
    icon: RocketLaunchIcon,
    title: 'Innovation Time',
    description: '20% time for personal projects and innovation initiatives'
  },
  {
    icon: UsersIcon,
    title: 'Inclusive Culture',
    description: 'Diverse, inclusive workplace with strong emphasis on work-life balance'
  }
];

const values = [
  {
    title: 'Human-Centered Innovation',
    description: 'We put people first in everything we build, ensuring our AI serves humanity.'
  },
  {
    title: 'Global Impact',
    description: 'We believe in breaking down barriers and connecting people across borders.'
  },
  {
    title: 'Continuous Learning',
    description: 'We foster a culture of curiosity, growth, and intellectual humility.'
  },
  {
    title: 'Transparency & Trust',
    description: 'We operate with openness, honesty, and integrity in all our relationships.'
  }
];

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [hideStatsBar, setHideStatsBar] = useState(false);

  const departments = ['All', ...new Set(jobPositions.map(job => job.department))];

  // Check if stats bar is hidden
  useEffect(() => {
    const handleScroll = () => {
      setHideStatsBar(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredJobs = jobPositions.filter(job => {
    const departmentMatch = selectedDepartment === 'All' || job.department === selectedDepartment;
    return departmentMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationEnhanced />
      
      {/* Hero Section */}
      <section className={`relative pb-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white transition-all duration-300 ${
        hideStatsBar ? 'pt-24' : 'pt-36'
      }`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Build the Future of 
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Immigration</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Join our mission to transform the immigration industry with AI-powered solutions. 
              Help millions of people achieve their dreams of living in their ideal country.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#positions"
                className="px-8 py-4 bg-white text-purple-900 font-semibold rounded-full hover:bg-gray-100 transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BriefcaseIcon className="w-5 h-5" />
                View Open Positions
              </motion.a>
              <motion.a
                href="mailto:careers@vanhsya.com"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-purple-900 transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <EnvelopeIcon className="w-5 h-5" />
                careers@vanhsya.com
              </motion.a>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              initial={{
                x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1200,
                y: typeof window !== 'undefined' ? window.innerHeight + 100 : 800,
              }}
              animate={{
                y: -100,
                x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1200,
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '50+', label: 'Team Members', icon: UsersIcon },
              { value: '25K+', label: 'Happy Clients', icon: TrophyIcon },
              { value: '50+', label: 'Countries Served', icon: GlobeAmericasIcon },
              { value: '94%', label: 'Success Rate', icon: StarIcon },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section id="culture" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values & Culture</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re building more than just a company – we&apos;re creating a movement that empowers 
              people to achieve their immigration dreams through innovative technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why You&apos;ll Love Working Here</h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center"
              >
                <benefit.icon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600">
              Join our team and help shape the future of immigration technology
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-700">Department:</span>
              {departments.map(dept => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedDepartment === dept
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            <AnimatePresence>
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all ${
                    job.featured ? 'border-purple-200 bg-purple-50' : 'border-gray-200'
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                        {job.featured && (
                          <span className="px-3 py-1 bg-purple-600 text-white text-xs font-medium rounded-full flex items-center gap-1">
                            <SparklesIcon className="w-3 h-3" />
                            Featured
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <BuildingOfficeIcon className="w-4 h-4" />
                          {job.department}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPinIcon className="w-4 h-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <ClockIcon className="w-4 h-4" />
                          {job.type}
                        </div>
                        <div className="flex items-center gap-1">
                          <CurrencyDollarIcon className="w-4 h-4" />
                          {job.salary}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <motion.a
                        href={`mailto:careers@vanhsya.com?subject=Application for ${job.title}&body=Dear Hiring Team,%0D%0A%0D%0AI am interested in applying for the ${job.title} position. Please find my resume attached.%0D%0A%0D%0ABest regards`}
                        className="px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-all flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <EnvelopeIcon className="w-4 h-4" />
                        Apply Now
                      </motion.a>
                      <button className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all">
                        Learn More
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No positions match your current filters.</p>
              <button
                onClick={() => {
                  setSelectedDepartment('All');
                }}
                className="mt-4 px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-all"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-4">Don&apos;t See the Perfect Role?</h2>
            <p className="text-xl mb-8 opacity-90">
              We&apos;re always looking for exceptional talent. Send us your resume and let&apos;s start a conversation about how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:careers@vanhsya.com?subject=General Application&body=Dear VANHSYA Team,%0D%0A%0D%0AI am interested in opportunities at VANHSYA. Please find my resume attached.%0D%0A%0D%0ABest regards"
                className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <EnvelopeIcon className="w-5 h-5" />
                Send Your Resume
              </motion.a>
              <div className="flex items-center gap-4 text-purple-200">
                <span>or reach out to:</span>
                <a 
                  href="mailto:careers@vanhsya.com" 
                  className="text-white font-semibold hover:underline"
                >
                  careers@vanhsya.com
                </a>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <h3 className="text-xl font-semibold mb-4">Stay Tuned for New Opportunities</h3>
              <p className="text-purple-100 mb-4">
                We&apos;re growing fast and regularly adding new positions. Follow us on social media 
                or subscribe to our newsletter to be the first to know about new openings.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm">LinkedIn: @vanhsya</span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm">Twitter: @vanhsya_ai</span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm">Newsletter: careers@vanhsya.com</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
