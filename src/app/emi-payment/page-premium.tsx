'use client';

import React from 'react';
import { motion } from 'framer-motion';

import PremiumLayout from '@/components/PremiumLayout';

import OriginalPage from './page';

export default function PremiumPage() {
  const pageName = 'emi-payment';
  const formattedTitle = pageName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="backdrop-blur-xl bg-gradient-to-br from-purple-600 to-cyan-500 p-8 rounded-2xl"
    >
      <PremiumLayout 
        title={formattedTitle !== 'App' ? formattedTitle : 'VANHSYA Global Migration'} 
        subtitle="Your gateway to global opportunities"
      >
        <OriginalPage />
      </PremiumLayout>
    </motion.div>
  );
}
