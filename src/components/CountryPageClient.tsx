'use client';

import { motion } from 'framer-motion';

import CountryPageTemplate from '@/components/CountryPageTemplate';

interface CountryPageClientProps {
  countryData: any;
}

export default function CountryPageClient({ countryData }: CountryPageClientProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <CountryPageTemplate countryData={countryData} />
    </motion.div>
  );
}
