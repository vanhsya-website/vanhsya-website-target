import Link from 'next/link';
import {
  ArrowRight,
  MapPin,
  Clock,
  DollarSign,
  TrendingUp,
} from 'lucide-react';

import { Country } from '@/lib/data/countries';

interface CountryBlockProps {
  country: Country;
}

export default function CountryBlock({ country }: CountryBlockProps) {
  return (
    <Link
      href={country.href}
      className='group h-full flex flex-col bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all duration-300'
    >
      {/* Header with Flag and Badge */}
      <div className='flex items-center justify-between mb-4'>
        <div className='flex items-center gap-3'>
          <span className='text-3xl'>{country.flag}</span>
          <div>
            <h3 className='text-xl font-semibold text-neutral-800'>
              {country.name}
            </h3>
            <p className='text-sm text-neutral-600'>{country.tagline}</p>
          </div>
        </div>
        {country.badge && (
          <span className='text-xs px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 font-medium'>
            {country.badge}
          </span>
        )}
      </div>

      {/* Description */}
      <p className='text-neutral-700 mb-4 leading-relaxed flex-grow'>
        {country.description}
      </p>

      {/* Stats Grid */}
      <div className='grid grid-cols-2 gap-3 mb-4'>
        <div className='bg-neutral-50 rounded-lg p-3'>
          <div className='flex items-center gap-2 mb-1'>
            <MapPin className='w-4 h-4 text-neutral-500' />
            <span className='text-xs font-medium text-neutral-600'>
              Programs
            </span>
          </div>
          <div className='text-lg font-semibold text-neutral-800'>
            {country.stats.programs}
          </div>
        </div>
        <div className='bg-neutral-50 rounded-lg p-3'>
          <div className='flex items-center gap-2 mb-1'>
            <Clock className='w-4 h-4 text-neutral-500' />
            <span className='text-xs font-medium text-neutral-600'>
              Processing
            </span>
          </div>
          <div className='text-lg font-semibold text-neutral-800'>
            {country.stats.processing}
          </div>
        </div>
        <div className='bg-neutral-50 rounded-lg p-3'>
          <div className='flex items-center gap-2 mb-1'>
            <DollarSign className='w-4 h-4 text-neutral-500' />
            <span className='text-xs font-medium text-neutral-600'>
              Investment
            </span>
          </div>
          <div className='text-lg font-semibold text-neutral-800'>
            {country.stats.investment}
          </div>
        </div>
        <div className='bg-neutral-50 rounded-lg p-3'>
          <div className='flex items-center gap-2 mb-1'>
            <TrendingUp className='w-4 h-4 text-neutral-500' />
            <span className='text-xs font-medium text-neutral-600'>
              Success Rate
            </span>
          </div>
          <div className='text-lg font-semibold text-neutral-800'>
            {country.stats.success}
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div className='mb-4'>
        <h4 className='text-sm font-medium text-neutral-800 mb-2'>
          Key Highlights
        </h4>
        <div className='space-y-1'>
          {country.highlights.slice(0, 3).map((highlight, index) => (
            <div
              key={index}
              className='flex items-center gap-2 text-sm text-neutral-700'
            >
              <div className='w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0'></div>
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA - Always at bottom */}
      <div className='mt-auto pt-2'>
        <span className='text-purple-600 font-medium inline-flex items-center group-hover:text-purple-700'>
          Explore {country.name}
          <ArrowRight className='w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform' />
        </span>
      </div>
    </Link>
  );
}
