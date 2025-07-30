import { Metadata } from 'next';
import AIConsultationBooking from '@/components/AIConsultationBooking';

export const metadata: Metadata = {
  title: 'AI-Powered Consultation Booking - Expert Immigration Advice | VANHSYA',
  description: 'Book personalized immigration consultation with VANHSYA\'s AI-enhanced expert consultants. Get instant AI analysis, personalized recommendations, and expert guidance for your immigration journey.',
  keywords: 'immigration consultation, AI consultation, visa advice, immigration expert, consultation booking, VANHSYA consultation',
  openGraph: {
    title: 'AI-Powered Consultation Booking - Expert Immigration Advice | VANHSYA',
    description: 'Book personalized immigration consultation with VANHSYA\'s AI-enhanced expert consultants. Get instant AI analysis, personalized recommendations, and expert guidance for your immigration journey.',
    type: 'website',
    url: 'https://vanhsya.com/consultation-booking',
    images: [
      {
        url: '/images/og-consultation-booking.jpg',
        width: 1200,
        height: 630,
        alt: 'VANHSYA AI-Powered Consultation Booking',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-Powered Consultation Booking - Expert Immigration Advice | VANHSYA',
    description: 'Book personalized immigration consultation with VANHSYA\'s AI-enhanced expert consultants. Get instant AI analysis, personalized recommendations, and expert guidance for your immigration journey.',
    images: ['/images/og-consultation-booking.jpg'],
  },
};

export default function ConsultationBookingPage() {
  return <AIConsultationBooking />;
}
