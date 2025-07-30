import ScamDetectorAI from '@/components/ScamDetectorAI';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VANHSYA ScamShield AI | Advanced Migration Scam Detection',
  description: 'Protect yourself from migration fraud with VANHSYA\'s revolutionary AI-powered scam detection system. 99.7% accuracy, real-time threat intelligence, and instant verification.',
  keywords: 'migration scam detection, visa fraud protection, AI scam detector, immigration scam alerts, VANHSYA security',
  openGraph: {
    title: 'VANHSYA ScamShield AI | Advanced Migration Scam Detection',
    description: 'World\'s most advanced AI-powered scam detection system for migration and visa applications.',
    images: ['/images/og-scam-detector.jpg'],
  },
};

export default function ScamDetectorPage() {
  return <ScamDetectorAI />;
}
