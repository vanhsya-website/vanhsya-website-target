export interface SuccessStory {
  id: string;
  name: string;
  countryFrom: string;
  countryTo: string;
  service: string;
  visaType: string;
  timelineMonths: number;
  quote: string;
  fullStory: string;
  avatar?: string;
  profession: string;
  age: number;
  outcome: 'Visa Approved' | 'PR Granted' | 'Citizenship' | 'Work Permit';
  challenges: string[];
  vanhsyaHelp: string[];
  rating: 1 | 2 | 3 | 4 | 5;
  dateApproved: string;
  featured: boolean;
}

export const successStories: SuccessStory[] = [
  {
    id: 'story-001',
    name: 'Priya Sharma',
    countryFrom: 'India',
    countryTo: 'Canada',
    service: 'Express Entry',
    visaType: 'Federal Skilled Worker',
    timelineMonths: 8,
    quote:
      'VANHSYA made my Canadian dream a reality. Their AI tools helped me optimize my profile and I got my PR in just 8 months!',
    fullStory:
      'As a software engineer from Mumbai, I had been dreaming of moving to Canada for years. The immigration process seemed overwhelming until I found VANHSYA. Their AI eligibility calculator immediately showed me I had strong chances, and their document wizard ensured I never missed a single requirement. The team guided me through every step, from improving my IELTS scores to optimizing my Express Entry profile. When I got that golden email confirming my PR approval, I knew choosing VANHSYA was the best decision I ever made.',
    profession: 'Software Engineer',
    age: 29,
    outcome: 'PR Granted',
    challenges: [
      'Complex Express Entry point system',
      'Document requirements clarity',
      'IELTS score improvement needed',
    ],
    vanhsyaHelp: [
      'AI eligibility calculator optimization',
      'IELTS preparation guidance',
      'Complete document management',
      'Profile optimization strategies',
    ],
    rating: 5,
    dateApproved: '2024-08-15',
    featured: true,
  },
  {
    id: 'story-002',
    name: 'David Chen',
    countryFrom: 'China',
    countryTo: 'Australia',
    service: 'Skilled Migration',
    visaType: 'Skilled Independent Visa (189)',
    timelineMonths: 12,
    quote:
      "The points system was confusing, but VANHSYA's AI tools made everything clear. I'm now living my dream in Sydney!",
    fullStory:
      "Moving from Beijing to Sydney seemed impossible with the complex Australian points system. VANHSYA's migration assistant explained everything in simple terms and helped me understand exactly what I needed to improve my score. Their document wizard caught several missing documents that could have delayed my application by months. The team even helped me find the right skills assessment authority for my accounting background. Twelve months later, I'm enjoying the Sydney sunshine and building my career in one of the world's most livable cities.",
    profession: 'Chartered Accountant',
    age: 35,
    outcome: 'Visa Approved',
    challenges: [
      'Understanding Australian points system',
      'Skills assessment requirements',
      'State nomination complexities',
    ],
    vanhsyaHelp: [
      'Points system explanation and optimization',
      'Skills assessment guidance',
      'State nomination strategy',
      'Complete application management',
    ],
    rating: 5,
    dateApproved: '2024-06-22',
    featured: true,
  },
  {
    id: 'story-003',
    name: 'Maria Rodriguez',
    countryFrom: 'Mexico',
    countryTo: 'United States',
    service: 'Work Visa',
    visaType: 'H-1B Specialty Occupation',
    timelineMonths: 6,
    quote:
      "VANHSYA found me the perfect job match and handled my H-1B process flawlessly. I'm now working at my dream company in Silicon Valley!",
    fullStory:
      "As a data scientist from Mexico City, I wanted to work in Silicon Valley but didn't know where to start with the H-1B process. VANHSYA not only explained the complex requirements but also connected me with potential employers through their network. Their team prepared my petition meticulously, and I was selected in the H-1B lottery on my first try. Six months later, I started my dream job at a leading tech company. VANHSYA's expertise and connections made all the difference.",
    profession: 'Data Scientist',
    age: 31,
    outcome: 'Work Permit',
    challenges: [
      'H-1B lottery system uncertainty',
      'Finding sponsoring employers',
      'Complex petition documentation',
    ],
    vanhsyaHelp: [
      'Employer network connections',
      'H-1B petition preparation',
      'Interview coaching',
      'Visa interview preparation',
    ],
    rating: 5,
    dateApproved: '2024-04-10',
    featured: true,
  },
  {
    id: 'story-004',
    name: 'Ahmed Hassan',
    countryFrom: 'Egypt',
    countryTo: 'United Kingdom',
    service: 'Study Visa',
    visaType: 'Student Visa (Tier 4)',
    timelineMonths: 4,
    quote:
      'From Cairo to Cambridge! VANHSYA helped me secure admission to my dream university and navigate the visa process seamlessly.',
    fullStory:
      "My goal was to pursue a Master's in Engineering at Cambridge University. The application process for both university admission and student visa seemed overwhelming. VANHSYA's education consultants helped me craft compelling personal statements and prepare for interviews. Their document wizard ensured all my certificates were properly formatted and translated. When I received my Cambridge acceptance letter and visa approval, I knew my investment in VANHSYA's services was worth every penny. I'm now studying at one of the world's top universities.",
    profession: 'Graduate Student',
    age: 26,
    outcome: 'Visa Approved',
    challenges: [
      'University admission competition',
      'Financial documentation requirements',
      'Interview preparation',
    ],
    vanhsyaHelp: [
      'University selection guidance',
      'Personal statement development',
      'Financial planning assistance',
      'Visa interview coaching',
    ],
    rating: 5,
    dateApproved: '2024-07-18',
    featured: false,
  },
  {
    id: 'story-005',
    name: 'Sarah Johnson',
    countryFrom: 'South Africa',
    countryTo: 'New Zealand',
    service: 'Family Visa',
    visaType: 'Partnership Visa',
    timelineMonths: 10,
    quote:
      'Reuniting with my partner in New Zealand felt impossible until VANHSYA took over. Their expertise in relationship visas is unmatched!',
    fullStory:
      "Being separated from my partner who lived in Auckland was heartbreaking. The New Zealand partnership visa requirements seemed overwhelming, especially proving the genuineness of our relationship. VANHSYA's family visa specialists guided us through every requirement, helped us organize our evidence chronologically, and even provided relationship interview coaching. Their attention to detail and emotional support during this stressful time was incredible. Ten months later, I'm finally reunited with my love in beautiful New Zealand.",
    profession: 'Marketing Manager',
    age: 28,
    outcome: 'Visa Approved',
    challenges: [
      'Proving genuine relationship',
      'Complex evidence requirements',
      'Interview anxiety',
    ],
    vanhsyaHelp: [
      'Relationship evidence organization',
      'Interview preparation coaching',
      'Emotional support throughout process',
      'Regular application updates',
    ],
    rating: 5,
    dateApproved: '2024-05-03',
    featured: false,
  },
];

export const getStoriesByCountry = (country: string) => {
  return successStories.filter(
    story => story.countryTo.toLowerCase() === country.toLowerCase()
  );
};

export const getFeaturedStories = () => {
  return successStories.filter(story => story.featured);
};

export const getStoriesByService = (service: string) => {
  return successStories.filter(story =>
    story.service.toLowerCase().includes(service.toLowerCase())
  );
};
