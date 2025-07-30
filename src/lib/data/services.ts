export interface Service {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  href: string;
  icon: string;
  pricing: {
    starting: string;
    government_fees?: string;
    our_fees?: string;
  };
  timeline: string;
  successRate: string;
  features: string[];
  requirements: string[];
  countries: string[];
  badge?: "POPULAR" | "PREMIUM" | "FAST_TRACK" | "GUARANTEED";
}

export const services: Service[] = [
  {
    slug: "work-visa",
    name: "Work Visa Services",
    tagline: "Build your career globally",
    description: "Professional work permits for skilled workers seeking employment opportunities in top destinations worldwide.",
    href: "/services/work-visa",
    icon: "briefcase",
    badge: "POPULAR",
    pricing: {
      starting: "From $999",
      government_fees: "$540-$1,500",
      our_fees: "$999-$2,999"
    },
    timeline: "2-6 months",
    successRate: "98%",
    countries: ["Canada", "Australia", "UK", "USA", "Germany", "New Zealand"],
    features: [
      "Express processing available",
      "Job placement assistance",
      "Resume optimization",
      "Interview preparation",
      "Post-landing settlement support",
      "Family visa coordination"
    ],
    requirements: [
      "Relevant work experience (2+ years)",
      "Language proficiency test results",
      "Educational credential assessment",
      "Job offer (for some programs)",
      "Medical examination",
      "Police clearance certificates"
    ]
  },
  {
    slug: "study-visa",
    name: "Study Visa Services", 
    tagline: "Unlock world-class education",
    description: "Student visas for pursuing higher education in prestigious universities and colleges globally.",
    href: "/services/study-visa",
    icon: "graduation-cap",
    badge: "GUARANTEED",
    pricing: {
      starting: "From $799",
      government_fees: "$150-$500",
      our_fees: "$799-$1,999"
    },
    timeline: "1-4 months",
    successRate: "99%",
    countries: ["Canada", "Australia", "UK", "USA", "Ireland", "New Zealand"],
    features: [
      "University selection guidance",
      "Scholarship application assistance",
      "Accommodation arrangement",
      "Academic counseling",
      "SOP and LOR preparation",
      "Post-graduation work permit guidance"
    ],
    requirements: [
      "Academic transcripts",
      "Language test scores (IELTS/TOEFL)",
      "Statement of Purpose",
      "Letters of recommendation", 
      "Financial proof",
      "Medical examination"
    ]
  },
  {
    slug: "tourist-visa",
    name: "Tourist Visa Services",
    tagline: "Explore the world hassle-free", 
    description: "Travel visas for leisure, business trips, and exploring new destinations with fast-track processing.",
    href: "/services/tourist-visa",
    icon: "plane",
    badge: "FAST_TRACK",
    pricing: {
      starting: "From $199",
      government_fees: "$50-$200",
      our_fees: "$199-$499"
    },
    timeline: "1-2 weeks",
    successRate: "97%",
    countries: ["USA", "UK", "Canada", "Australia", "Schengen", "Japan"],
    features: [
      "Fast track processing",
      "Group application discounts",
      "Travel insurance guidance",
      "Itinerary planning assistance",
      "Emergency travel document service",
      "Visa extension support"
    ],
    requirements: [
      "Valid passport (6+ months validity)",
      "Travel itinerary",
      "Hotel bookings",
      "Financial statements",
      "Employment verification",
      "Travel insurance"
    ]
  },
  {
    slug: "family-visa",
    name: "Family Visa Services",
    tagline: "Reunite with your loved ones",
    description: "Comprehensive family sponsorship and reunion programs to bring your family together.",
    href: "/services/family-visa",
    icon: "heart",
    badge: "PREMIUM",
    pricing: {
      starting: "From $1,299",
      government_fees: "$350-$1,000",
      our_fees: "$1,299-$3,999"
    },
    timeline: "3-12 months",
    successRate: "96%",
    countries: ["Canada", "Australia", "UK", "USA", "New Zealand"],
    features: [
      "Spouse visa applications",
      "Parent and grandparent sponsorship",
      "Child immigration services",
      "Family assessment preparation",
      "Relationship documentation",
      "Interview preparation"
    ],
    requirements: [
      "Proof of relationship",
      "Sponsor financial requirements",
      "Medical examinations",
      "Police clearances",
      "Undertaking of assistance",
      "Language requirements (varies)"
    ]
  },
  {
    slug: "permanent-residence",
    name: "Permanent Residency",
    tagline: "Secure your future permanently",
    description: "Secure your future with permanent residence status in your chosen destination country.",
    href: "/services/permanent-residence",
    icon: "home",
    badge: "PREMIUM",
    pricing: {
      starting: "From $1,999",
      government_fees: "$550-$4,000",
      our_fees: "$1,999-$7,999"
    },
    timeline: "6-18 months",
    successRate: "94%",
    countries: ["Canada", "Australia", "USA", "New Zealand", "Portugal"],
    features: [
      "Express Entry processing",
      "Investment program guidance",
      "Citizenship pathway planning",
      "Settlement services",
      "Points optimization",
      "Province/state nomination assistance"
    ],
    requirements: [
      "Age requirements (18-45 typically)",
      "Language proficiency",
      "Educational credentials",
      "Work experience",
      "Proof of funds",
      "Medical and background checks"
    ]
  },
  {
    slug: "business-visa",
    name: "Business Visa Services",
    tagline: "Expand your business globally",
    description: "Investor and entrepreneur visa programs to expand your business internationally.",
    href: "/services/business-visa", 
    icon: "building",
    pricing: {
      starting: "From $1,599",
      government_fees: "$500-$5,000",
      our_fees: "$1,599-$9,999"
    },
    timeline: "4-10 months",
    successRate: "95%",
    countries: ["Canada", "Australia", "UK", "USA", "Portugal", "Malta"],
    features: [
      "Investment visa guidance",
      "Entrepreneur program assistance",
      "Business plan development",
      "Market analysis reports",
      "Due diligence support",
      "Post-arrival business setup"
    ],
    requirements: [
      "Business experience",
      "Investment capital proof",
      "Business plan",
      "Market research",
      "Financial statements",
      "Language proficiency"
    ]
  }
];
