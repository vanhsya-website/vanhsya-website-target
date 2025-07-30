// TODO: Add comprehensive site-wide SEO optimization
// TODO: Implement proper error boundaries for better UX
// TODO: Add analytics tracking (Google Analytics, Hotjar)
// SEO: Add structured data (JSON-LD) for organization
// PERFORMANCE: Implement service worker for offline support
// ACCESSIBILITY: Add skip navigation and ARIA landmarks

import { Inter, Space_Grotesk } from 'next/font/google';

import './globals.css';
import { Metadata, Viewport } from 'next';

import PageTransition from '@/components/PageTransition';
import { CurrencyProvider } from '@/components/CurrencySelector';
import ContactSupport from '@/components/ContactSupport';
import ChatWidget from '@/components/ChatWidget';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.vanhsyaglobal.com'),
  title:
    'VANHSYA Global Migration - Expert Migration & Visa Services Worldwide',
  description:
    'VANHSYA Global Migration - Your trusted migration partner. Expert guidance for work, study, family, and business visas with transparent pricing and verified success rates.',
  keywords:
    'migration, visa, work visa, study visa, migration services, visa consultation, immigration lawyer, family visa, business visa, permanent residence, global migration, visa processing, immigration consultant',
  authors: [{ name: 'VANHSYA Global Migration' }],
  robots: 'index, follow',
  openGraph: {
    title:
      'VANHSYA Global Migration - Expert Migration & Visa Services Worldwide',
    description:
      'VANHSYA Global Migration - Your trusted migration partner. Where your journey begins — safely, securely, and supported. Real migration. Real guidance. Real results.',
    url: 'https://www.vanhsyaglobal.com/',
    siteName: 'VANHSYA Global Migration',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VANHSYA Global Migration - Your trusted migration partner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VANHSYA Global Migration - Expert Migration Services',
    description:
      'VANHSYA Global Migration - Your trusted migration partner. Professional guidance for worldwide migration.',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.vanhsyaglobal.com/',
  },
  verification: {
    google: 'your-google-verification-code-here',
  },
  // Enhanced mobile support
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'VANHSYA Global',
  },
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
  },
};

// Enhanced viewport configuration for all devices
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-space-grotesk',
  display: 'swap',
  preload: true,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        {/* Enhanced mobile support */}
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='VANHSYA Global' />

        {/* Touch icons for all devices */}
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />

        {/* Preload critical resources */}
        <link
          rel='preload'
          href='/images/logo.png'
          as='image'
          type='image/png'
        />

        {/* DNS prefetch for performance */}
        <link rel='dns-prefetch' href='//fonts.googleapis.com' />
        <link rel='dns-prefetch' href='//www.google-analytics.com' />
      </head>
      <body className='font-sans antialiased bg-white text-slate-900 scroll-smooth overflow-x-hidden'>
        <CurrencyProvider>
          <PageTransition>
            <main className='min-h-screen'>{children}</main>
          </PageTransition>
          <ChatWidget />
          <ContactSupport variant='floating' />
        </CurrencyProvider>
      </body>
    </html>
  );
}
