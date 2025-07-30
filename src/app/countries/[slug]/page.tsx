'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import BackNavigation from '@/components/BackNavigation';
import Footer from '@/components/Footer';
import CountryPageTemplate from '@/components/CountryPageTemplate';
import { countryData } from '@/data/countryData';

export default function CountryPage() {
  const params = useParams();
  const slug = params?.slug as string;
  
  const country = countryData[slug as keyof typeof countryData];
  
  if (!country) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <BackNavigation />
        <div className="pt-32 pb-20 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Country Not Found</h1>
          <p>The country you're looking for doesn't exist.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <BackNavigation />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <CountryPageTemplate countryData={country} />
      </motion.div>
      <Footer />
    </div>
  );
}
