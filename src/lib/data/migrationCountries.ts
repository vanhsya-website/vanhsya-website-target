export interface MigrationCountryData {
  id: string;
  name: string;
  flag: string;
  tagline: string;
  description: string;
  region: string;
  marketingHighlights: string[];
  availablePrograms: string[];
  servicesAvailable: boolean;
  comingSoon?: boolean;

  // Nationality-specific data
  nationalityData: {
    [nationality: string]: {
      successRate: string;
      embassyDifficulty: 'Easy' | 'Medium' | 'Hard' | 'No Interview';
      processingTime: string;
      minInvestment: string;
      popularPrograms: string[];
      requirements: {
        language: string;
        education: string;
        experience: string;
        funds: string;
      };
    };
  };

  // General info
  generalInfo: {
    averageProcessingTime: string;
    investmentRange: string;
    qualityOfLife: number; // 1-10
    economyRank: number;
  };
}

export const migrationCountries: MigrationCountryData[] = [
  {
    id: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    tagline: "World's Top Immigration Destination",
    description:
      'Canada offers multiple pathways for skilled workers, students, and families with excellent quality of life.',
    region: 'North America',
    servicesAvailable: true,
    marketingHighlights: [
      'Free Healthcare & Education',
      'Path to Citizenship in 3 Years',
      'Express Entry System',
      'High Quality of Life',
      'Multicultural Society',
    ],
    availablePrograms: ['Skilled Worker', 'Student', 'Investment', 'Family'],
    nationalityData: {
      india: {
        successRate: '80% Success Rate',
        embassyDifficulty: 'Medium',
        processingTime: '6-8 months',
        minInvestment: '$10,000',
        popularPrograms: ['Express Entry', 'PNP', 'Student Visa'],
        requirements: {
          language: 'IELTS 6.0+ / CELPIP',
          education: "Bachelor's degree or higher",
          experience: '1+ years skilled work',
          funds: 'CAD 12,960-25,230',
        },
      },
      pakistan: {
        successRate: '70% Success Rate',
        embassyDifficulty: 'Hard',
        processingTime: '8-12 months',
        minInvestment: '$10,000',
        popularPrograms: ['Express Entry', 'PNP'],
        requirements: {
          language: 'IELTS 6.5+ / CELPIP',
          education: "Bachelor's degree or higher",
          experience: '2+ years skilled work',
          funds: 'CAD 12,960-25,230',
        },
      },
      bangladesh: {
        successRate: '75% Success Rate',
        embassyDifficulty: 'Medium',
        processingTime: '6-10 months',
        minInvestment: '$10,000',
        popularPrograms: ['Express Entry', 'Student Visa'],
        requirements: {
          language: 'IELTS 6.0+ / CELPIP',
          education: "Bachelor's degree or higher",
          experience: '1+ years skilled work',
          funds: 'CAD 12,960-25,230',
        },
      },
    },
    generalInfo: {
      averageProcessingTime: '6-12 months',
      investmentRange: '$8,000-15,000',
      qualityOfLife: 9,
      economyRank: 10,
    },
  },
  {
    id: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    tagline: 'Where Career Meets Lifestyle',
    description:
      'Australia offers excellent work-life balance with high salaries and world-class living standards.',
    region: 'Oceania',
    servicesAvailable: true,
    marketingHighlights: [
      'High Salary Packages',
      'Year-Round Pleasant Climate',
      'World-Class Education',
      'SkillSelect System',
      'Points-Based Immigration',
    ],
    availablePrograms: ['Skilled Worker', 'Student', 'Investment', 'Family'],
    nationalityData: {
      india: {
        successRate: '70% Success Rate',
        embassyDifficulty: 'Medium',
        processingTime: '8-12 months',
        minInvestment: '$5,000',
        popularPrograms: ['Skilled Independent (189)', 'State Nominated (190)'],
        requirements: {
          language: 'IELTS 6.0+ / PTE',
          education: "Bachelor's degree assessed by skills authority",
          experience: '2+ years relevant work',
          funds: 'AUD 21,061-31,590',
        },
      },
      pakistan: {
        successRate: '60% Success Rate',
        embassyDifficulty: 'Hard',
        processingTime: '10-15 months',
        minInvestment: '$5,000',
        popularPrograms: ['State Nominated (190)', 'Regional (491)'],
        requirements: {
          language: 'IELTS 6.5+ / PTE',
          education: "Bachelor's degree assessed",
          experience: '3+ years relevant work',
          funds: 'AUD 21,061-31,590',
        },
      },
      bangladesh: {
        successRate: '65% Success Rate',
        embassyDifficulty: 'Medium',
        processingTime: '8-14 months',
        minInvestment: '$5,000',
        popularPrograms: ['Skilled Independent (189)', 'Student Visa'],
        requirements: {
          language: 'IELTS 6.0+ / PTE',
          education: "Bachelor's degree assessed",
          experience: '2+ years relevant work',
          funds: 'AUD 21,061-31,590',
        },
      },
    },
    generalInfo: {
      averageProcessingTime: '8-15 months',
      investmentRange: '$10,000-18,000',
      qualityOfLife: 9,
      economyRank: 13,
    },
  },
  {
    id: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    tagline: "Europe's Economic Powerhouse",
    description:
      'Germany offers excellent career opportunities in Europe with strong job security and social benefits.',
    region: 'Europe',
    servicesAvailable: true,
    marketingHighlights: [
      'EU Blue Card Pathway',
      'Strong Economy & Job Market',
      'Free Education & Healthcare',
      'Central European Location',
      'High Job Security',
    ],
    availablePrograms: [
      'Skilled Worker',
      'Student',
      'Investment',
      'EU Blue Card',
    ],
    nationalityData: {
      india: {
        successRate: '70% Success Rate',
        embassyDifficulty: 'Medium',
        processingTime: '3-6 months',
        minInvestment: '$8,000',
        popularPrograms: ['EU Blue Card', 'Job Seeker Visa', 'Student Visa'],
        requirements: {
          language: 'German A1/B1 or English B2',
          education: 'University degree recognized in Germany',
          experience: '2+ years professional experience',
          funds: '€11,208 per year',
        },
      },
      pakistan: {
        successRate: '60% Success Rate',
        embassyDifficulty: 'Hard',
        processingTime: '4-8 months',
        minInvestment: '$8,000',
        popularPrograms: ['Skilled Immigration Act', 'Student Visa'],
        requirements: {
          language: 'German B1 or English B2',
          education: 'Recognized university degree',
          experience: '3+ years professional experience',
          funds: '€11,208 per year',
        },
      },
    },
    generalInfo: {
      averageProcessingTime: '3-8 months',
      investmentRange: '$6,000-12,000',
      qualityOfLife: 8,
      economyRank: 4,
    },
  },
  {
    id: 'uae',
    name: 'UAE',
    flag: '🇦🇪',
    tagline: 'Gateway to the Middle East',
    description:
      'UAE offers tax-free income, modern lifestyle, and excellent business opportunities in the heart of the Middle East.',
    region: 'Middle East',
    servicesAvailable: true,
    marketingHighlights: [
      'Tax-Free Income',
      'Golden Visa Program',
      'Strategic Business Location',
      'Modern Infrastructure',
      'Multicultural Environment',
    ],
    availablePrograms: [
      'Skilled Worker',
      'Investment',
      'Golden Visa',
      'Freelancer',
    ],
    nationalityData: {
      india: {
        successRate: '90% Success Rate',
        embassyDifficulty: 'Easy',
        processingTime: '2-4 weeks',
        minInvestment: '$4,000',
        popularPrograms: ['Employment Visa', 'Golden Visa', 'Investor Visa'],
        requirements: {
          language: 'English proficiency',
          education: "Bachelor's degree or equivalent",
          experience: 'Relevant work experience',
          funds: 'AED 15,000-50,000',
        },
      },
      pakistan: {
        successRate: '85% Success Rate',
        embassyDifficulty: 'Easy',
        processingTime: '3-6 weeks',
        minInvestment: '$4,000',
        popularPrograms: ['Employment Visa', 'Investor Visa'],
        requirements: {
          language: 'English proficiency',
          education: "Bachelor's degree or equivalent",
          experience: 'Relevant work experience',
          funds: 'AED 15,000-50,000',
        },
      },
      bangladesh: {
        successRate: '80% Success Rate',
        embassyDifficulty: 'Easy',
        processingTime: '2-5 weeks',
        minInvestment: '$3,000',
        popularPrograms: ['Employment Visa', 'Trade License'],
        requirements: {
          language: 'English proficiency',
          education: 'High school or higher',
          experience: 'Any level accepted',
          funds: 'AED 10,000-30,000',
        },
      },
      philippines: {
        successRate: '85% Success Rate',
        embassyDifficulty: 'Easy',
        processingTime: '2-4 weeks',
        minInvestment: '$3,000',
        popularPrograms: ['Employment Visa', 'Domestic Worker'],
        requirements: {
          language: 'English proficiency',
          education: 'High school minimum',
          experience: 'Relevant work experience',
          funds: 'AED 8,000-25,000',
        },
      },
    },
    generalInfo: {
      averageProcessingTime: '2-6 weeks',
      investmentRange: '$2,000-8,000',
      qualityOfLife: 8,
      economyRank: 31,
    },
  },
  {
    id: 'portugal',
    name: 'Portugal',
    flag: '🇵🇹',
    tagline: "Europe's Hidden Gem",
    description:
      'Portugal offers affordable European living with excellent climate and growing tech sector.',
    region: 'Europe',
    servicesAvailable: true,
    marketingHighlights: [
      'Affordable European Living',
      'D7 Visa Program',
      'Golden Visa Investment',
      'Excellent Climate',
      'Growing Tech Hub',
    ],
    availablePrograms: ['Investment', 'Student', 'Work', 'D7 Visa'],
    nationalityData: {
      india: {
        successRate: '80% Success Rate',
        embassyDifficulty: 'Medium',
        processingTime: '6-12 months',
        minInvestment: '$200,000',
        popularPrograms: ['Golden Visa', 'D7 Visa', 'Tech Visa'],
        requirements: {
          language: 'Basic Portuguese (A2) or English',
          education: 'Varies by program',
          experience: 'Relevant work experience',
          funds: '€5,000-280,000',
        },
      },
    },
    generalInfo: {
      averageProcessingTime: '6-12 months',
      investmentRange: '$4,000-10,000',
      qualityOfLife: 8,
      economyRank: 47,
    },
  },
];

export const nationalities = [
  { code: 'india', name: 'India', flag: '🇮🇳' },
  { code: 'pakistan', name: 'Pakistan', flag: '🇵🇰' },
  { code: 'bangladesh', name: 'Bangladesh', flag: '🇧🇩' },
  { code: 'nepal', name: 'Nepal', flag: '🇳🇵' },
  { code: 'sri-lanka', name: 'Sri Lanka', flag: '🇱🇰' },
  { code: 'philippines', name: 'Philippines', flag: '🇵🇭' },
  { code: 'indonesia', name: 'Indonesia', flag: '🇮🇩' },
  { code: 'thailand', name: 'Thailand', flag: '🇹🇭' },
  { code: 'vietnam', name: 'Vietnam', flag: '🇻🇳' },
  { code: 'nigeria', name: 'Nigeria', flag: '🇳🇬' },
  { code: 'ghana', name: 'Ghana', flag: '🇬🇭' },
  { code: 'kenya', name: 'Kenya', flag: '🇰🇪' },
  { code: 'egypt', name: 'Egypt', flag: '🇪🇬' },
  { code: 'morocco', name: 'Morocco', flag: '🇲🇦' },
  { code: 'iran', name: 'Iran', flag: '🇮🇷' },
  { code: 'afghanistan', name: 'Afghanistan', flag: '🇦🇫' },
  { code: 'turkey', name: 'Turkey', flag: '🇹🇷' },
  { code: 'ukraine', name: 'Ukraine', flag: '🇺🇦' },
  { code: 'russia', name: 'Russia', flag: '🇷🇺' },
  { code: 'uzbekistan', name: 'Uzbekistan', flag: '��🇿' },
  { code: 'china', name: 'China', flag: '��🇳' },
  { code: 'myanmar', name: 'Myanmar', flag: '🇲🇲' },
  { code: 'ethiopia', name: 'Ethiopia', flag: '🇪🇹' },
  { code: 'south-africa', name: 'South Africa', flag: '🇿🇦' },
  { code: 'brazil', name: 'Brazil', flag: '🇧🇷' },
];

export const migrationGoals = [
  {
    code: 'skilled-professional',
    name: 'Professional/IT Jobs',
    icon: '💼',
    description: 'Software, engineering, finance, management roles',
  },
  {
    code: 'skilled-trades',
    name: 'Skilled Trades',
    icon: '🔧',
    description: 'Electrician, plumber, carpenter, technician',
  },
  {
    code: 'healthcare-worker',
    name: 'Healthcare Worker',
    icon: '⚕️',
    description: 'Nurse, care assistant, medical technician',
  },
  {
    code: 'study-then-work',
    name: 'Study Then Work',
    icon: '🎓',
    description: 'Get degree abroad then find job',
  },
  {
    code: 'business-investor',
    name: 'Start Business',
    icon: '💰',
    description: 'Invest and run business abroad',
  },
  {
    code: 'family-joining',
    name: 'Join Family',
    icon: '👨‍👩‍👧‍👦',
    description: 'Spouse, parent, or family member abroad',
  },
];
