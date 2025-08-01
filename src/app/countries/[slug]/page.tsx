import { notFound } from 'next/navigation';

import { countryData } from '@/data/countryData';
import BackNavigation from '@/components/BackNavigation';
import Footer from '@/components/Footer';
import CountryPageClient from '@/components/CountryPageClient';

// Generate static paths for all countries
export async function generateStaticParams() {
  const countries = Object.keys(countryData);
  return countries.map((slug) => ({
    slug,
  }));
}

interface CountryPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CountryPage({ params }: CountryPageProps) {
  const { slug } = await params;
  const country = countryData[slug as keyof typeof countryData];

  if (!country) {
    notFound();
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900'>
      <BackNavigation />
      <CountryPageClient countryData={country} />
      <Footer />
    </div>
  );
}
