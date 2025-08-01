import { NextResponse } from 'next/server';

import { successStories } from '@/lib/data/successStories';

// Configure for static export
export const dynamic = 'force-static';
export const revalidate = false;

export async function GET() {
  try {
    // Transform success stories to match the expected testimonial format
    const testimonials = successStories.map(story => ({
      id: story.id,
      name: story.name,
      countryFrom: story.countryFrom,
      countryTo: story.countryTo,
      service: story.service,
      months: story.timelineMonths,
      quote: story.quote,
    }));

    return NextResponse.json(testimonials, { status: 200 });
  } catch {
    // Error fetching testimonials
    return NextResponse.json(
      { success: false, error: 'Failed to fetch testimonials' },
      { status: 500 }
    );
  }
}
