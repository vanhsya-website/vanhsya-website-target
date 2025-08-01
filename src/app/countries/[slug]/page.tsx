import { countryData } from '@/data/countryData';

import CountryPageClient from './CountryPageClient';

// Add static export configuration
export const dynamic = 'force-static';
export const revalidate = false;

// Generate static params for all countries
export function generateStaticParams() {
  return Object.keys(countryData).map((slug) => ({
    slug,
  }));
}

interface CountryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CountryPage({ params }: CountryPageProps) {
  const { slug } = await params;
  const country = countryData[slug as keyof typeof countryData];

  return <CountryPageClient slug={slug} country={country} />;
}
