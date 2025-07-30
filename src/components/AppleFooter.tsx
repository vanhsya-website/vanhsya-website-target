// src/components/AppleFooter.tsx
'use client';

import Link from 'next/link';

export default function AppleFooter() {
  return (
    <footer className='bg-neutral-50 border-t border-neutral-200 mt-24 text-neutral-600'>
      <div className='max-w-7xl mx-auto px-6 py-16'>
        {/* Top link grid */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm'>
          <div>
            <h4 className='font-medium text-neutral-800 mb-3'>Services</h4>
            <ul className='space-y-2'>
              <li>
                <Link href='/services/work-visa'>Work Visa</Link>
              </li>
              <li>
                <Link href='/services/study-visa'>Study Visa</Link>
              </li>
              <li>
                <Link href='/services/business-visa'>Business Visa</Link>
              </li>
              <li>
                <Link href='/services/family-visa'>Family Visa</Link>
              </li>
              <li>
                <Link href='/services/tourist-visa'>Tourist Visa</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='font-medium text-neutral-800 mb-3'>AI Tools</h4>
            <ul className='space-y-2'>
              <li>
                <Link href='/ai-tools/eligibility-calculator'>
                  Eligibility Calculator
                </Link>
              </li>
              <li>
                <Link href='/ai-tools/document-wizard'>Document Wizard</Link>
              </li>
              <li>
                <Link href='/ai-tools/scam-detector'>Scam Detector</Link>
              </li>
              <li>
                <Link href='/ai-tools/checklist-assistant'>
                  Checklist Assistant
                </Link>
              </li>
              <li>
                <Link href='/ai-tools/chatbot'>AI Chatbot</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='font-medium text-neutral-800 mb-3'>Countries</h4>
            <ul className='space-y-2'>
              <li>
                <Link href='/countries/canada'>Canada</Link>
              </li>
              <li>
                <Link href='/countries/australia'>Australia</Link>
              </li>
              <li>
                <Link href='/countries/usa'>USA</Link>
              </li>
              <li>
                <Link href='/countries/uk'>UK</Link>
              </li>
              <li>
                <Link href='/countries/germany'>Germany</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='font-medium text-neutral-800 mb-3'>Company</h4>
            <ul className='space-y-2'>
              <li>
                <Link href='/about'>About</Link>
              </li>
              <li>
                <Link href='/success-stories'>Success Stories</Link>
              </li>
              <li>
                <Link href='/blog'>Blog</Link>
              </li>
              <li>
                <Link href='/contact'>Contact</Link>
              </li>
              <li>
                <Link href='/careers'>Careers</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='font-medium text-neutral-800 mb-3'>Legal</h4>
            <ul className='space-y-2'>
              <li>
                <Link href='/privacy'>Privacy Policy</Link>
              </li>
              <li>
                <Link href='/terms'>Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className='mt-12 pt-8 border-t border-neutral-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-neutral-400'>
          <p>&copy; {new Date().getFullYear()} VANHSYA. All rights reserved.</p>
          <div className='flex gap-4'>
            <Link href='/sitemap'>Sitemap</Link>
            <Link href='/accessibility'>Accessibility</Link>
            <Link href='/cookies'>Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
