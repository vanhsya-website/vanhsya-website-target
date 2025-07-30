import { Metadata } from 'next';

import AIMigrationIntelligence from '@/components/AIMigrationIntelligence';

export const metadata: Metadata = {
  title:
    'AI Migration Intelligence | VANHSYA - Revolutionary Migration Analytics',
  description:
    "Experience the world's most advanced AI-powered migration intelligence platform. Real-time insights, predictive analytics, and success optimization for your migration journey.",
  keywords:
    'AI migration, predictive analytics, migration intelligence, VANHSYA AI, migration success, visa analytics',
  openGraph: {
    title: 'AI Migration Intelligence | VANHSYA',
    description:
      'Revolutionary AI-powered migration intelligence platform with real-time insights and predictive analytics.',
    images: ['/images/og-ai-intelligence.jpg'],
  },
};

export default function AIMigrationIntelligencePage() {
  return <AIMigrationIntelligence />;
}
