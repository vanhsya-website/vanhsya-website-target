import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const event = searchParams.get('event');

  // Basic analytics endpoint
  return NextResponse.json({
    success: true,
    event: event || 'page_view',
    timestamp: new Date().toISOString(),
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  // Process analytics data
  console.log('Analytics event:', body);

  return NextResponse.json({
    success: true,
    message: 'Event logged successfully',
  });
}
