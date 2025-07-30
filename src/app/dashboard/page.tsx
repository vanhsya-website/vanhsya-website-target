import { Metadata } from 'next';

import RealTimeDashboard from '@/components/RealTimeDashboard';

export const metadata: Metadata = {
  title: 'Real-Time Dashboard - Live Immigration Analytics | VANHSYA',
  description:
    "Monitor live immigration analytics, client activities, and system performance with VANHSYA's real-time dashboard. Track success rates, processing times, and migration trends in real-time.",
  keywords:
    'real-time dashboard, immigration analytics, live monitoring, VANHSYA dashboard, migration analytics, visa tracking',
  openGraph: {
    title: 'Real-Time Dashboard - Live Immigration Analytics | VANHSYA',
    description:
      "Monitor live immigration analytics, client activities, and system performance with VANHSYA's real-time dashboard. Track success rates, processing times, and migration trends in real-time.",
    type: 'website',
    url: 'https://vanhsya.com/dashboard',
    images: [
      {
        url: '/images/og-dashboard.jpg',
        width: 1200,
        height: 630,
        alt: 'VANHSYA Real-Time Dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real-Time Dashboard - Live Immigration Analytics | VANHSYA',
    description:
      "Monitor live immigration analytics, client activities, and system performance with VANHSYA's real-time dashboard. Track success rates, processing times, and migration trends in real-time.",
    images: ['/images/og-dashboard.jpg'],
  },
};

export default function DashboardPage() {
  return <RealTimeDashboard />;
}
