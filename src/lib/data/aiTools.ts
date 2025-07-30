export interface AITool {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  badge?: 'NEW' | 'HOT' | 'PREMIUM' | 'FREE' | 'LIVE' | 'POPULAR' | '24/7';
  icon: string; // lucide icon name
  href: string;
  features: string[];
  api?: string[];
  pricing?: string;
  processingTime?: string;
}

export const aiTools: AITool[] = [
  {
    slug: 'eligibility-calculator',
    name: 'Eligibility Calculator',
    tagline: 'Real-time visa score & program match',
    description:
      'AI-powered points assessment across multiple countries and visa programs with instant results.',
    badge: 'PREMIUM',
    icon: 'calculator',
    href: '/ai-tools/eligibility-calculator',
    features: [
      'Smart questionnaire with 50+ factors',
      'Multi-country analysis (Canada, Australia, UK, USA)',
      'Success probability with confidence intervals',
      'Next steps guidance with timeline',
      'Save and compare multiple profiles',
    ],
    api: ['/api/eligibility-calculate'],
    pricing: 'Free trial, $29/full report',
    processingTime: 'Instant results',
  },
  {
    slug: 'document-wizard',
    name: 'Document Wizard',
    tagline: 'No missing docs, ever',
    description:
      'Intelligent checklist generator and document validation system with AI-powered recommendations.',
    badge: 'POPULAR',
    icon: 'file-text',
    href: '/ai-tools/document-wizard',
    features: [
      'Dynamic checklists based on your profile',
      'Upload management with cloud storage',
      'Deadline tracking with smart reminders',
      'Expert tips for each document type',
      'Translation and notarization guidance',
    ],
    api: ['/api/document-analyze', '/api/generate-checklist'],
    pricing: 'Free basic, $19/month premium',
    processingTime: 'Instant analysis',
  },
  {
    slug: 'scam-detector',
    name: 'ScamShield AI Detector',
    tagline: 'Protect yourself from fraud',
    description:
      'Advanced fraud detection for immigration agencies, offers, and suspicious communications.',
    badge: 'HOT',
    icon: 'shield-check',
    href: '/ai-tools/scam-detector',
    features: [
      'URL and website scanning',
      'Email content analysis',
      'Company verification database',
      'Red flag pattern detection',
      'Community reporting system',
    ],
    api: ['/api/verify-legitimacy'],
    pricing: 'Free',
    processingTime: 'Real-time scanning',
  },
  {
    slug: 'checklist-assistant',
    name: 'Checklist Assistant',
    tagline: 'Stay organized from start to finish',
    description:
      'Smart task manager with AI-powered reminders and progress tracking for your migration journey.',
    icon: 'check-square',
    href: '/ai-tools/checklist-assistant',
    features: [
      'Smart reminders based on deadlines',
      'Priority sorting with AI recommendations',
      'Timeline optimization',
      'Progress tracking with milestones',
      'Integration with calendar apps',
    ],
    api: ['/api/generate-checklist'],
    pricing: 'Free',
    processingTime: 'Instant setup',
  },
  {
    slug: 'migration-assistant',
    name: 'AI Migration Assistant',
    tagline: 'Quantum-powered consultation',
    description:
      'Conversational AI consultant providing tailored advice for your specific migration scenario.',
    badge: 'NEW',
    icon: 'bot',
    href: '/ai-tools/migration-assistant',
    features: [
      'Contextual answers to complex questions',
      'Program recommendations based on profile',
      'Document guidance with examples',
      'Seamless handoff to human experts',
      'Multi-language support',
    ],
    api: ['/api/chat'],
    pricing: 'Free basic, $49/month unlimited',
    processingTime: 'Real-time responses',
  },
  {
    slug: 'chatbot',
    name: '24/7 AI Chatbot',
    tagline: 'Instant answers, anytime',
    description:
      'Round-the-clock support chatbot for quick questions and immediate assistance.',
    badge: '24/7',
    icon: 'message-square',
    href: '/ai-tools/chatbot',
    features: [
      'Multi-language support (15+ languages)',
      'Knowledge base search across 1000+ FAQs',
      'Escalation to human agents',
      'Integration with WhatsApp and Telegram',
      'Voice message support',
    ],
    api: ['/api/chat'],
    pricing: 'Free',
    processingTime: 'Instant responses',
  },
  {
    slug: 'migration-heatmap',
    name: 'Migration Heatmap',
    tagline: 'Real-time global trends',
    description:
      'Interactive visualization of migration trends, success rates, and processing times worldwide.',
    badge: 'LIVE',
    icon: 'globe',
    href: '/ai-tools/migration-heatmap',
    features: [
      'Interactive world map with live data',
      'Country comparison tools',
      'Historical trend analysis',
      'Processing time predictions',
      'Success rate statistics',
    ],
    pricing: 'Free',
    processingTime: 'Real-time data',
  },
  {
    slug: 'ai-consultation',
    name: 'AI Consultation Booking',
    tagline: 'Book with the right expert',
    description:
      'AI-powered matching system to connect you with the perfect immigration consultant for your needs.',
    icon: 'calendar',
    href: '/consultation',
    features: [
      'Expert matching based on your case',
      'Calendar sync with availability',
      'Secure payment processing',
      'Preparation materials sent in advance',
      'Follow-up reminder system',
    ],
    pricing: 'Free first 30 minutes',
    processingTime: 'Same-day booking available',
  },
];
