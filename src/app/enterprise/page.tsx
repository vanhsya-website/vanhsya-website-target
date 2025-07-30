'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import EnterpriseNavigation from '@/components/EnterpriseNavigation';
import EnterpriseHero from '@/components/EnterpriseHero';
import EnterpriseFeatures from '@/components/EnterpriseFeatures';
import EnterpriseStats from '@/components/EnterpriseStats';

// Dynamic imports for better performance
const Footer = dynamic(() => import('@/components/Footer'), {
  ssr: false,
  loading: () => <div className='h-96 bg-slate-900 animate-pulse' />,
});

// Loading components
const LoadingSkeleton = ({ className = '' }: { className?: string }) => (
  <div className={`animate-pulse bg-slate-200 rounded ${className}`} />
);

const HeroSkeleton = () => (
  <div className='min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center'>
    <div className='container mx-auto px-4'>
      <div className='grid lg:grid-cols-2 gap-12 items-center'>
        <div className='space-y-6'>
          <LoadingSkeleton className='h-6 w-48' />
          <LoadingSkeleton className='h-16 w-full' />
          <LoadingSkeleton className='h-24 w-3/4' />
          <div className='flex gap-4'>
            <LoadingSkeleton className='h-12 w-32' />
            <LoadingSkeleton className='h-12 w-32' />
          </div>
        </div>
        <div className='space-y-4'>
          <LoadingSkeleton className='h-64 w-full rounded-2xl' />
        </div>
      </div>
    </div>
  </div>
);

const FeaturesSkeleton = () => (
  <div className='py-24 bg-slate-50'>
    <div className='container mx-auto px-4'>
      <div className='text-center mb-20'>
        <LoadingSkeleton className='h-6 w-32 mx-auto mb-4' />
        <LoadingSkeleton className='h-12 w-96 mx-auto mb-6' />
        <LoadingSkeleton className='h-6 w-2/3 mx-auto' />
      </div>
      <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
        {[...Array(6)].map((_, i) => (
          <div key={i} className='bg-white rounded-2xl p-8'>
            <LoadingSkeleton className='h-16 w-16 rounded-2xl mb-6' />
            <LoadingSkeleton className='h-6 w-3/4 mb-4' />
            <LoadingSkeleton className='h-20 w-full mb-6' />
            <div className='space-y-2'>
              {[...Array(4)].map((_, j) => (
                <LoadingSkeleton key={j} className='h-4 w-full' />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const StatsSkeleton = () => (
  <div className='py-24 bg-white'>
    <div className='container mx-auto px-4'>
      <div className='text-center mb-20'>
        <LoadingSkeleton className='h-6 w-32 mx-auto mb-4' />
        <LoadingSkeleton className='h-12 w-64 mx-auto mb-6' />
        <LoadingSkeleton className='h-6 w-2/3 mx-auto' />
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {[...Array(6)].map((_, i) => (
          <div key={i} className='bg-slate-50 rounded-2xl p-8'>
            <div className='flex items-center justify-between mb-6'>
              <LoadingSkeleton className='h-14 w-14 rounded-2xl' />
              <LoadingSkeleton className='h-1 w-16' />
            </div>
            <LoadingSkeleton className='h-12 w-24 mb-2' />
            <LoadingSkeleton className='h-6 w-32 mb-3' />
            <LoadingSkeleton className='h-16 w-full' />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function EnterprisePage() {
  const handleCTAClick = () => {
    // Scroll to contact section or open consultation modal
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='min-h-screen bg-white'>
      {/* Navigation */}
      <Suspense fallback={<div className='h-20 bg-slate-900 animate-pulse' />}>
        <EnterpriseNavigation />
      </Suspense>

      {/* Hero Section */}
      <Suspense fallback={<HeroSkeleton />}>
        <EnterpriseHero onCTAClick={handleCTAClick} />
      </Suspense>

      {/* Features Section */}
      <Suspense fallback={<FeaturesSkeleton />}>
        <EnterpriseFeatures />
      </Suspense>

      {/* Stats Section */}
      <Suspense fallback={<StatsSkeleton />}>
        <EnterpriseStats />
      </Suspense>

      {/* Footer */}
      <Suspense fallback={<div className='h-96 bg-slate-900 animate-pulse' />}>
        <Footer />
      </Suspense>
    </div>
  );
}
