import { Metadata } from 'next';

import GlobalMigrationHeatmap from '@/components/GlobalMigrationHeatmap';

export const metadata: Metadata = {
  title: 'Global Migration Heatmap - Real-time Migration Analytics | VANHSYA',
  description:
    "Explore real-time global migration trends with VANHSYA's interactive heatmap. Track migration flows, success rates, and processing times across 150+ countries with AI-powered analytics.",
  keywords:
    'global migration, migration heatmap, migration trends, immigration analytics, visa statistics, VANHSYA migration data',
  openGraph: {
    title: 'Global Migration Heatmap - Real-time Migration Analytics | VANHSYA',
    description:
      "Explore real-time global migration trends with VANHSYA's interactive heatmap. Track migration flows, success rates, and processing times across 150+ countries with AI-powered analytics.",
    type: 'website',
    url: 'https://vanhsya.com/migration-heatmap',
    images: [
      {
        url: '/images/og-migration-heatmap.jpg',
        width: 1200,
        height: 630,
        alt: 'VANHSYA Global Migration Heatmap',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global Migration Heatmap - Real-time Migration Analytics | VANHSYA',
    description:
      "Explore real-time global migration trends with VANHSYA's interactive heatmap. Track migration flows, success rates, and processing times across 150+ countries with AI-powered analytics.",
    images: ['/images/og-migration-heatmap.jpg'],
  },
};

export default function MigrationHeatmapPage() {
  return <GlobalMigrationHeatmap />;
}
