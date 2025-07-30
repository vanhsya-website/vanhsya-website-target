export interface Country {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  href: string;
  flag: string; // emoji or image path
  region: 'North America' | 'Europe' | 'Oceania' | 'Asia' | 'Other';
  popularPrograms: string[];
  keyBenefits: string[];
  requirements: {
    language: string[];
    education: string;
    experience: string;
    funds: string;
  };
  processingTime: string;
  successRate: string;
  costOfLiving: 'Low' | 'Medium' | 'High';
  qualityOfLife: number; // 1-10 scale
  badge?: 'POPULAR' | 'FASTEST' | 'BEST_VALUE' | 'RECOMMENDED';
  stats: {
    programs: string;
    processing: string;
    investment: string;
    success: string;
  };
  highlights: string[];
  gradient: string;
}

export const countries: Country[] = [
  {
    slug: 'canada',
    name: 'Canada',
    tagline: 'The land of opportunities and diversity',
    description:
      'Canada offers world-class healthcare, education, and countless opportunities for skilled immigrants through multiple immigration pathways.',
    href: '/countries/canada',
    flag: '🇨🇦',
    region: 'North America',
    badge: 'POPULAR',
    popularPrograms: [
      'Express Entry (Federal Skilled Worker)',
      'Provincial Nominee Program (PNP)',
      'Canadian Experience Class',
      'Start-up Visa Program',
      'Family Class Sponsorship',
    ],
    keyBenefits: [
      'Universal healthcare system',
      'High quality of life',
      'Multicultural society',
      'Strong economy and job market',
      'Path to citizenship in 3 years',
      'Excellent education system',
    ],
    requirements: {
      language: ['English', 'French'],
      education: "Bachelor's degree or equivalent",
      experience: '1+ years skilled work experience',
      funds: 'CAD $13,757 for single applicant',
    },
    processingTime: '6-8 months',
    successRate: '85%',
    costOfLiving: 'Medium',
    qualityOfLife: 9,
    stats: {
      programs: '80+',
      processing: '6-12 months',
      investment: '$13,310 CAD',
      success: '97%',
    },
    highlights: [
      'Express Entry System',
      'Provincial Nominee Program',
      'Free Healthcare',
      'Multicultural Society',
    ],
    gradient: 'from-red-500 to-red-600',
  },
  {
    slug: 'australia',
    name: 'Australia',
    tagline: 'Where career meets lifestyle',
    description:
      'Australia combines a strong economy with an unbeatable lifestyle, offering skilled migrants excellent opportunities Down Under.',
    href: '/countries/australia',
    flag: '🇦🇺',
    region: 'Oceania',
    badge: 'RECOMMENDED',
    popularPrograms: [
      'Skilled Independent Visa (189)',
      'Skilled Nominated Visa (190)',
      'Skilled Work Regional Visa (491)',
      'Business Innovation Visa (188)',
      'Partner Visa (820/801)',
    ],
    keyBenefits: [
      'High salaries and standard of living',
      'Year-round pleasant climate',
      'World-renowned education system',
      'Medicare universal healthcare',
      'Strong job market',
      'Cultural diversity and acceptance',
    ],
    requirements: {
      language: ['English'],
      education: "Bachelor's degree or equivalent",
      experience: '3+ years relevant work experience',
      funds: 'AUD $20,000+ depending on family size',
    },
    processingTime: '8-12 months',
    successRate: '82%',
    costOfLiving: 'High',
    qualityOfLife: 9,
    stats: {
      programs: '60+',
      processing: '8-16 months',
      investment: '$4,045 AUD',
      success: '94%',
    },
    highlights: [
      'SkillSelect System',
      'State Nomination',
      'Points-based Immigration',
      'World-class Universities',
    ],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    slug: 'uk',
    name: 'United Kingdom',
    tagline: 'Gateway to Europe and beyond',
    description:
      "The UK offers rich history, cultural diversity, and excellent career opportunities in one of the world's leading economies.",
    href: '/countries/uk',
    flag: '🇬🇧',
    region: 'Europe',
    popularPrograms: [
      'Skilled Worker Visa',
      'Global Talent Visa',
      'Innovator Founder Visa',
      'Youth Mobility Scheme',
      'Family Visa',
    ],
    keyBenefits: [
      'NHS free healthcare',
      'Rich cultural heritage',
      'Gateway to Europe',
      'World-class universities',
      'Strong financial sector',
      'English-speaking country',
    ],
    requirements: {
      language: ['English'],
      education: 'Degree level qualification',
      experience: 'Job offer required for most routes',
      funds: '£1,270 maintenance funds',
    },
    processingTime: '3-8 weeks',
    successRate: '78%',
    costOfLiving: 'High',
    qualityOfLife: 8,
    stats: {
      programs: '50+',
      processing: '3-8 weeks',
      investment: '£1,270',
      success: '78%',
    },
    highlights: [
      'Skilled Worker Visa',
      'Global Talent Route',
      'NHS Healthcare',
      'Gateway to Europe',
    ],
    gradient: 'from-blue-600 to-blue-700',
  },
  {
    slug: 'usa',
    name: 'United States',
    tagline: 'The land of the American Dream',
    description:
      'The USA offers unparalleled opportunities for career growth, innovation, and achieving the American Dream.',
    href: '/countries/usa',
    flag: '🇺🇸',
    region: 'North America',
    badge: 'FASTEST',
    popularPrograms: [
      'EB-1 (Extraordinary Ability)',
      'EB-2 NIW (National Interest Waiver)',
      'H-1B Work Visa',
      'L-1 Intracompany Transfer',
      'Family-based Immigration',
    ],
    keyBenefits: [
      "World's largest economy",
      'Innovation and entrepreneurship hub',
      'Diverse career opportunities',
      'Top universities and research',
      'Cultural melting pot',
      'Competitive salaries',
    ],
    requirements: {
      language: ['English'],
      education: "Bachelor's degree minimum",
      experience: 'Varies by visa category',
      funds: 'Varies by state and family size',
    },
    processingTime: '6 months - 2 years',
    successRate: '65%',
    costOfLiving: 'Medium',
    qualityOfLife: 8,
    stats: {
      programs: '40+',
      processing: '6-24 months',
      investment: '$15,000+',
      success: '65%',
    },
    highlights: [
      'H-1B Program',
      'EB-1 Fast Track',
      'Silicon Valley Tech Hub',
      'American Dream',
    ],
    gradient: 'from-blue-600 to-red-600',
  },
  {
    slug: 'new-zealand',
    name: 'New Zealand',
    tagline: 'Pure nature, pure opportunities',
    description:
      'New Zealand offers a perfect work-life balance with stunning natural beauty and a welcoming immigration policy.',
    href: '/countries/new-zealand',
    flag: '🇳🇿',
    region: 'Oceania',
    badge: 'BEST_VALUE',
    popularPrograms: [
      'Skilled Migrant Category',
      'Work to Residence Visa',
      'Investor Visa',
      'Partnership Visa',
      'Student Visa',
    ],
    keyBenefits: [
      'Stunning natural environment',
      'Work-life balance culture',
      'Free public healthcare',
      'Safe and peaceful society',
      'English-speaking country',
      'Fast-track to residency',
    ],
    requirements: {
      language: ['English'],
      education: 'Relevant qualification',
      experience: 'Skilled work experience required',
      funds: 'NZD $4,200 settlement funds',
    },
    processingTime: '6-9 months',
    successRate: '88%',
    costOfLiving: 'Medium',
    qualityOfLife: 9,
    stats: {
      programs: '25+',
      processing: '6-14 months',
      investment: '$2,310 NZD',
      success: '93%',
    },
    highlights: [
      'Skilled Migrant Category',
      'Work to Residence',
      'Natural Beauty',
      'Work-Life Balance',
    ],
    gradient: 'from-green-500 to-teal-500',
  },
  {
    slug: 'germany',
    name: 'Germany',
    tagline: "Europe's economic powerhouse",
    description:
      'Germany offers excellent career opportunities, high quality of life, and is the gateway to the European Union.',
    href: '/countries/germany',
    flag: '🇩🇪',
    region: 'Europe',
    popularPrograms: [
      'EU Blue Card',
      'Skilled Immigration Act',
      'Job Seeker Visa',
      'Student Visa',
      'Family Reunification',
    ],
    keyBenefits: [
      'Strong economy and job security',
      'Excellent social benefits',
      'Central location in Europe',
      'High-quality education',
      'Universal healthcare',
      'Rich cultural heritage',
    ],
    requirements: {
      language: ['German', 'English for some roles'],
      education: 'Recognized degree',
      experience: '2+ years relevant experience',
      funds: '€10,332 annual financial proof',
    },
    processingTime: '2-3 months',
    successRate: '92%',
    costOfLiving: 'Medium',
    qualityOfLife: 8,
    stats: {
      programs: '30+',
      processing: '2-4 months',
      investment: '€10,332',
      success: '92%',
    },
    highlights: [
      'EU Blue Card',
      'Job Seeker Visa',
      'Free Education',
      'Strong Economy',
    ],
    gradient: 'from-yellow-500 to-red-600',
  },
];
