// src/app/page.tsx
'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Premium Components with Optimized Loading
const PremiumNavigation = dynamic(() => import('@/components/PremiumNavigation'), { 
  ssr: false,
  loading: () => <div className="h-20 bg-neutral-950/95 backdrop-blur-xl animate-pulse" />
});

const PremiumHero = dynamic(() => import('@/components/PremiumHero'), { 
  ssr: false,
  loading: () => <PremiumHeroSkeleton />
});

const SmoothServices = dynamic(() => import('@/components/SmoothServices'), { 
  ssr: false,
  loading: () => <div className="h-96 bg-gradient-to-b from-neutral-900 to-neutral-950 animate-pulse" />
});

const InteractiveCountryExplorer = dynamic(() => import('@/components/InteractiveCountryExplorer'), { 
  ssr: false,
  loading: () => <div className="h-96 bg-gradient-to-b from-neutral-950 to-neutral-900 animate-pulse" />
});

const SmoothAnimatedTimeline = dynamic(() => import('@/components/SmoothAnimatedTimeline'), { 
  ssr: false,
  loading: () => <div className="h-96 bg-gradient-to-b from-neutral-900 to-neutral-950 animate-pulse" />
});

const PremiumTestimonialsSection = dynamic(() => import('@/components/PremiumTestimonialsSection'), { 
  ssr: false,
  loading: () => <div className="h-96 bg-gradient-to-b from-neutral-950 to-neutral-900 animate-pulse" />
});

const VanhsyaDifference = dynamic(() => import('@/components/VanhsyaDifference'), { 
  ssr: false,
  loading: () => <div className="h-96 bg-gradient-to-b from-neutral-900 to-neutral-950 animate-pulse" />
});

const ContactSection = dynamic(() => import('@/components/ContactSection'), { 
  ssr: false,
  loading: () => <div className="h-96 bg-gradient-to-b from-neutral-950 to-neutral-900 animate-pulse" />
});

const Footer = dynamic(() => import('@/components/Footer'), { 
  ssr: false,
  loading: () => <div className="h-96 bg-neutral-950 animate-pulse" />
});

// Enhanced Loading Components
const PremiumLoadingSkeleton = ({ className = '' }: { className?: string }) => (
  <div className={`animate-pulse bg-gradient-to-r from-purple-600/20 via-indigo-600/10 to-cyan-600/20 rounded-lg ${className}`} />
);

const PremiumHeroSkeleton = () => (
  <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-purple-950/30 to-neutral-900 flex items-center justify-center relative overflow-hidden">
    {/* Animated Background Pattern */}
    <div className="absolute inset-0 opacity-10">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${Math.random() * 3 + 2}s`
          }}
        />
      ))}
    </div>
    
    <div className="container mx-auto px-4 z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <PremiumLoadingSkeleton className="h-8 w-64" />
          <PremiumLoadingSkeleton className="h-20 w-full" />
          <PremiumLoadingSkeleton className="h-32 w-4/5" />
          <div className="flex gap-6">
            <PremiumLoadingSkeleton className="h-14 w-40" />
            <PremiumLoadingSkeleton className="h-14 w-40" />
          </div>
          <div className="grid grid-cols-3 gap-4 pt-8">
            <PremiumLoadingSkeleton className="h-16 w-full" />
            <PremiumLoadingSkeleton className="h-16 w-full" />
            <PremiumLoadingSkeleton className="h-16 w-full" />
          </div>
        </div>
        <div className="space-y-6">
          <PremiumLoadingSkeleton className="h-80 w-full rounded-3xl" />
          <div className="grid grid-cols-2 gap-4">
            <PremiumLoadingSkeleton className="h-24 w-full rounded-xl" />
            <PremiumLoadingSkeleton className="h-24 w-full rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function Home() {
  return (
    <>
      {/* Root Layout Container */}
      <div className="relative bg-neutral-950 text-white overflow-hidden min-h-screen">
        {/* Premium Navigation - Fixed Header */}
        <header className="relative z-50">
          <PremiumNavigation />
        </header>

        {/* Main Content Sections */}
        <main className="relative">
          {/* Hero Section - Full Viewport */}
          <section className="relative min-h-screen">
            <PremiumHero />
          </section>

          {/* Services Section */}
          <section className="relative z-10">
            <SmoothServices />
          </section>

          {/* Country Explorer Section */}
          <section className="relative z-10">
            <InteractiveCountryExplorer />
          </section>

          {/* Timeline Section */}
          <section className="relative z-10">
            <SmoothAnimatedTimeline />
          </section>

          {/* Testimonials Section */}
          <section className="relative z-10">
            <PremiumTestimonialsSection />
          </section>

          {/* Difference Section */}
          <section className="relative z-10">
            <VanhsyaDifference />
          </section>

          {/* Contact Section */}
          <section id="contact" className="relative z-10">
            <ContactSection />
          </section>
        </main>

        {/* Footer */}
        <footer className="relative z-10">
          <Footer />
        </footer>

        {/* Global Background Effects */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-neutral-950 to-neutral-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-900/5 via-transparent to-transparent" />
        </div>
      </div>
    </>
  );
}
