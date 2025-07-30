import { Service, PricingStructure } from '@/types';

// Pricing helper function
const createPricing = (inr: number): PricingStructure => ({
  INR: inr,
  USD: Math.round(inr / 83),
  EUR: Math.round(inr / 90),
  GBP: Math.round(inr / 105),
  AED: Math.round(inr / 23),
  CAD: Math.round(inr / 61),
  AUD: Math.round(inr / 54),
  SGD: Math.round(inr / 61),
});

export const SERVICES: Service[] = [
  {
    id: 'study-visa',
    name: 'Study Visa Services',
    description: 'Complete assistance for student visa applications worldwide',
    icon: '🎓',
    image: '/images/services/study-visa.jpg',
    gallery: [
      '/images/gallery/university-campus.jpg',
      '/images/gallery/graduation-ceremony.jpg',
      '/images/gallery/student-life.jpg',
    ],
    features: [
      'University selection and application guidance',
      'Document preparation and verification',
      'Visa application filing and tracking',
      'Interview preparation and coaching',
      'Pre-departure briefing',
      'Post-arrival support services',
      'Scholarship identification and application',
      'Course credit evaluation',
      'Student accommodation assistance',
      'Health insurance guidance',
    ],
    pricing: createPricing(150000),
    countries: ['CA', 'AU', 'GB', 'US', 'DE', 'NZ', 'SG'],
    processing_time: '4-12 weeks',
    success_rate: 92,
  },
  {
    id: 'work-visa',
    name: 'Work Visa Services',
    description: 'Professional work visa processing for skilled workers',
    icon: '💼',
    image: '/images/services/work-visa.jpg',
    gallery: [
      '/images/gallery/office-professional.jpg',
      '/images/gallery/business-meeting.jpg',
      '/images/gallery/workplace-diversity.jpg',
    ],
    features: [
      'Job market analysis and opportunities',
      'Resume and profile optimization',
      'Employer sponsorship assistance',
      'Work permit application processing',
      'Skills assessment coordination',
      'Labor market impact assessment',
      'Family visa applications',
      'Work authorization documentation',
      'Professional licensing guidance',
      'Career transition support',
    ],
    pricing: createPricing(200000),
    countries: ['CA', 'AU', 'GB', 'US', 'DE', 'NZ', 'SG', 'AE'],
    processing_time: '2-8 weeks',
    success_rate: 89,
  },
  {
    id: 'business-visa',
    name: 'Business & Investment Visa',
    description: 'Business immigration and investor visa programs',
    icon: '🏢',
    image: '/images/services/business-visa.jpg',
    gallery: [
      '/images/gallery/business-handshake.jpg',
      '/images/gallery/investment-meeting.jpg',
      '/images/gallery/corporate-office.jpg',
    ],
    features: [
      'Business plan development and review',
      'Investment visa pathway analysis',
      'Corporate structure guidance',
      'Market entry strategy consultation',
      'Due diligence support',
      'Regulatory compliance assistance',
      'Banking and financial setup',
      'Local partnership facilitation',
      'Business registration support',
      'Ongoing business advisory services',
    ],
    pricing: createPricing(300000),
    countries: ['CA', 'AU', 'GB', 'US', 'SG', 'AE'],
    processing_time: '3-12 weeks',
    success_rate: 85,
  },
  {
    id: 'family-visa',
    name: 'Family Reunion Visa',
    description: 'Family sponsorship and reunion visa services',
    icon: '👨‍👩‍👧‍👦',
    image: '/images/services/family-visa.jpg',
    gallery: [
      '/images/gallery/happy-family.jpg',
      '/images/gallery/family-reunion.jpg',
      '/images/gallery/family-celebration.jpg',
    ],
    features: [
      'Relationship documentation assistance',
      'Sponsorship eligibility assessment',
      'Application preparation and filing',
      'Medical examination coordination',
      'Police clearance facilitation',
      'Interview preparation support',
      'Family reunification planning',
      'Settlement services coordination',
      'Translation and notarization services',
      'Ongoing case monitoring',
    ],
    pricing: createPricing(120000),
    countries: ['CA', 'AU', 'GB', 'US', 'NZ'],
    processing_time: '6-18 months',
    success_rate: 94,
  },
  {
    id: 'tourist-visa',
    name: 'Tourist & Visitor Visa',
    description: 'Tourism and temporary visitor visa assistance',
    icon: '✈️',
    image: '/images/services/tourist-visa.jpg',
    gallery: [
      '/images/gallery/tourist-destination.jpg',
      '/images/gallery/travel-adventure.jpg',
      '/images/gallery/vacation-moments.jpg',
    ],
    features: [
      'Travel itinerary planning assistance',
      'Visa application preparation',
      'Supporting documentation guidance',
      'Travel insurance recommendations',
      'Accommodation booking assistance',
      'Local attraction recommendations',
      'Currency and banking guidance',
      'Emergency contact setup',
      'Travel safety briefing',
      '24/7 travel support hotline',
    ],
    pricing: createPricing(25000),
    countries: ['US', 'GB', 'CA', 'AU', 'DE', 'FR', 'IT', 'JP', 'SG', 'AE'],
    processing_time: '1-4 weeks',
    success_rate: 96,
  },
  {
    id: 'permanent-residence',
    name: 'Permanent Residence',
    description: 'Permanent residency and citizenship pathways',
    icon: '🏠',
    image: '/images/services/permanent-residence.jpg',
    gallery: [
      '/images/gallery/new-home.jpg',
      '/images/gallery/citizenship-ceremony.jpg',
      '/images/gallery/permanent-resident-card.jpg',
    ],
    features: [
      'Permanent residence pathway assessment',
      'Points-based system evaluation',
      'Provincial nomination program guidance',
      'Express entry profile optimization',
      'Citizenship test preparation',
      'Residency obligation consultation',
      'Document authentication services',
      'Legal representation if required',
      'Settlement service connections',
      'Long-term immigration planning',
    ],
    pricing: createPricing(400000),
    countries: ['CA', 'AU', 'NZ', 'US'],
    processing_time: '6-24 months',
    success_rate: 87,
  },
];

// Helper function to get service by ID
export const getServiceById = (id: string): Service | undefined => {
  return SERVICES.find(service => service.id === id);
};

// Helper function to get services by category
export const getServicesByCategory = (category: string): Service[] => {
  return SERVICES.filter(service =>
    service.features.some(feature =>
      feature.toLowerCase().includes(category.toLowerCase())
    )
  );
};

// Helper function to get popular services
export const getPopularServices = (): Service[] => {
  return SERVICES.filter(service => service.success_rate >= 90);
};

export default SERVICES;
