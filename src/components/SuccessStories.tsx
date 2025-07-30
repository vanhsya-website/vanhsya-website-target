'use client';

import Link from 'next/link';

import { successStories } from '@/lib/data/successStories';

export default function SuccessStories() {
  // Show only featured stories for homepage
  const stories = successStories.filter(story => story.featured);

  if (!stories.length) {
    return (
      <section
        id='success-stories'
        className='py-24 bg-gray-900 text-gray-50 text-center'
      >
        <div className='max-w-4xl mx-auto px-6'>
          <h2 className='text-3xl md:text-4xl font-semibold mb-4'>
            Be the First Success Story
          </h2>
          <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
            Your journey could inspire thousands. Start with VANHSYA today and
            write the first chapter of our success stories.
          </p>
          <Link
            href='/consultation'
            className='inline-block rounded-full bg-white text-gray-900 px-8 py-4 text-lg font-medium hover:bg-gray-100 transition-colors'
          >
            Start Your Journey
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section id='success-stories' className='py-24 bg-gray-900'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-semibold text-white'>
            Client Success Stories
          </h2>
          <p className='mt-3 text-gray-300 max-w-xl mx-auto'>
            Real experiences from real people who achieved their migration
            dreams with VANHSYA.
          </p>
        </div>

        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {stories.map(story => (
            <article
              key={story.id}
              className='bg-gray-800/60 backdrop-blur rounded-2xl p-6 text-gray-200'
            >
              <div className='flex items-center justify-between mb-4'>
                <span className='text-yellow-400 text-sm'>
                  {'★'.repeat(story.rating)}
                </span>
                <span className='text-xs bg-purple-600 text-white px-2 py-1 rounded-full'>
                  {story.outcome}
                </span>
              </div>

              <p className='italic mb-6 leading-relaxed'>"{story.quote}"</p>

              <div className='border-t border-gray-700 pt-4'>
                <h3 className='font-semibold text-white'>{story.name}</h3>
                <p className='text-sm opacity-80'>
                  {story.profession}, {story.age}
                </p>
                <p className='text-sm opacity-80'>
                  {story.countryFrom} → {story.countryTo}
                </p>
                <p className='text-sm opacity-80'>
                  {story.visaType} • {story.timelineMonths} months
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className='mt-12 text-center'>
          <Link
            href='/success-stories'
            className='inline-block border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white px-6 py-3 rounded-full transition-colors'
          >
            View All Success Stories
          </Link>
        </div>
      </div>
    </section>
  );
}
