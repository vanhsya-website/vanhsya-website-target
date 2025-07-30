'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AppleHero() {
  return (
    <section className='section-spacing bg-neutral-50'>
      <div className='container-section text-center'>
        <p className='eyebrow mb-4'>Welcome to VANHSYA</p>
        <h1>Your Migration Journey Starts Here</h1>
        <p className='lead mt-6'>
          Empowering your global migration with AI-powered guidance, expert
          consultation, and seamless service delivery.
        </p>
        <div className='mt-10 flex flex-col sm:flex-row gap-4 justify-center'>
          <Link href='/get-started' className='btn-primary'>
            Start Your Journey
          </Link>
          <Link href='/ai-tools' className='btn-secondary'>
            Explore AI Tools
          </Link>
        </div>
      </div>
    </section>
  );
}
