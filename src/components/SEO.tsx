import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
  noIndex?: boolean;
  structuredData?: object;
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  ogImage = '/images/og-image.jpg',
  canonical,
  noIndex = false,
}: SEOProps): Metadata {
  const fullTitle = title.includes('VANHSYA')
    ? title
    : `${title} | VANHSYA Global Migration`;
  const baseUrl = 'https://www.vanhsyaglobal.com';

  return {
    title: fullTitle,
    description,
    keywords: [
      ...keywords,
      'migration',
      'visa',
      'work visa',
      'study visa',
      'VANHSYA',
    ].join(', '),
    authors: [{ name: 'VANHSYA Global Migration' }],
    creator: 'VANHSYA Global Migration',
    publisher: 'VANHSYA Global Migration',
    robots: noIndex ? 'noindex,nofollow' : 'index,follow',
    alternates: {
      canonical: canonical || `${baseUrl}/`,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical || `${baseUrl}/`,
      siteName: 'VANHSYA Global Migration',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      creator: '@vanhsya_global',
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
      yahoo: 'your-yahoo-verification-code',
    },
    category: 'Migration Services',
  };
}

export const defaultSEO: SEOProps = {
  title: 'VANHSYA Global Migration - Your trusted migration partner',
  description:
    'VANHSYA Global Migration - Your trusted migration partner. Expert guidance for work, study, family, and business visas with transparent pricing and verified success rates.',
  keywords: [
    'migration',
    'visa',
    'work visa',
    'study visa',
    'migration services',
    'visa consultation',
    'immigration lawyer',
    'family visa',
    'business visa',
    'permanent residence',
    'global migration',
    'visa processing',
    'immigration consultant',
    'VANHSYA',
    'migration partner',
    'trusted migration',
    'visa application',
    'immigration services',
  ],
};

// Page-specific SEO configurations
export const pageSEO = {
  home: {
    title: 'VANHSYA Global Migration - Your trusted migration partner',
    description:
      'VANHSYA Global Migration - Your trusted migration partner. Expert guidance for work, study, family, and business visas with transparent pricing and verified success rates.',
    keywords: [
      'migration',
      'visa',
      'work visa',
      'study visa',
      'migration services',
      'trusted migration partner',
    ],
  },
  services: {
    title: 'Migration Services - Visa Consultation & Application Assistance',
    description:
      'Comprehensive immigration services including visa consultation, application assistance, document preparation, and legal support. Specialized in Canada, Australia, USA, UK immigration.',
    keywords: [
      'immigration services',
      'visa consultation',
      'application assistance',
      'document preparation',
      'legal support',
    ],
  },
  countries: {
    title: 'Immigration Destinations - Compare Countries & Visa Options',
    description:
      'Compare immigration opportunities in Canada, Australia, USA, UK, Germany & New Zealand. Detailed information on visa types, requirements, and processing times.',
    keywords: [
      'immigration destinations',
      'country comparison',
      'visa options',
      'immigration requirements',
      'processing times',
    ],
  },
  blog: {
    title: 'Immigration Blog - Latest News, Tips & Updates',
    description:
      'Stay updated with latest immigration news, policy changes, application tips, and success stories. Expert insights on visa processes and immigration strategies.',
    keywords: [
      'immigration blog',
      'immigration news',
      'visa tips',
      'policy updates',
      'immigration advice',
    ],
  },
  contact: {
    title: 'Contact Us - Free Immigration Consultation',
    description:
      'Get free immigration consultation from certified experts. Contact Vanhsya Immigration Services for personalized visa guidance and application support.',
    keywords: [
      'contact immigration consultant',
      'free consultation',
      'immigration advice',
      'visa guidance',
    ],
  },
  about: {
    title: 'About Vanhsya - Leading Immigration Consultancy',
    description:
      'Learn about Vanhsya Immigration Services - your trusted partner since 2015. Certified consultants, 98% success rate, 5000+ satisfied clients worldwide.',
    keywords: [
      'about vanhsya',
      'immigration consultancy',
      'certified consultants',
      'success rate',
      'client testimonials',
    ],
  },
  eligibilityBot: {
    title: 'Immigration Eligibility Assessment - Free Online Tool',
    description:
      'Take our free immigration eligibility assessment to discover your best visa options. AI-powered tool analyzes your profile for Canada, Australia, USA & more.',
    keywords: [
      'eligibility assessment',
      'immigration quiz',
      'visa eligibility',
      'free assessment',
      'immigration tool',
    ],
  },
  documentGenerator: {
    title: 'Immigration Document Generator - Professional Templates',
    description:
      'Generate professional immigration documents instantly. Cover letters, SOPs, employment letters & more. Ensure your documents meet all requirements.',
    keywords: [
      'document generator',
      'immigration documents',
      'SOP template',
      'cover letter',
      'employment verification',
    ],
  },
  scamDetector: {
    title: 'Immigration Scam Detector - Protect Yourself from Fraud',
    description:
      'Protect yourself from immigration fraud. Check companies, websites & communications against our scam database. Get real-time risk assessments.',
    keywords: [
      'scam detector',
      'immigration fraud',
      'fraud protection',
      'scam prevention',
      'visa scam',
    ],
  },
  portal: {
    title: 'Client Portal - Track Your Immigration Application',
    description:
      'Secure client portal to track your immigration application progress. Access documents, updates, and communicate with your consultant.',
    keywords: [
      'client portal',
      'application tracking',
      'document access',
      'secure portal',
      'application status',
    ],
  },
};

// Structured Data Schema
export const generateStructuredData = (
  type: 'Organization' | 'Service' | 'Article' | 'FAQPage',
  data: any
) => {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': type,
  };

  switch (type) {
    case 'Organization':
      return {
        ...baseSchema,
        name: 'Vanhsya Immigration Services',
        url: 'https://vanhsya.com',
        logo: 'https://vanhsya.com/images/logo.png',
        description:
          'Professional immigration services for global destinations',
        address: {
          '@type': 'PostalAddress',
          streetAddress: data.address || '123 Immigration Street',
          addressLocality: data.city || 'Toronto',
          addressRegion: data.region || 'ON',
          postalCode: data.postalCode || 'M5V 3A8',
          addressCountry: 'CA',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: data.phone || '+1-800-VANHSYA',
          contactType: 'customer service',
          availableLanguage: ['English', 'French', 'Spanish', 'Hindi'],
        },
        sameAs: [
          'https://facebook.com/vanhsya',
          'https://twitter.com/vanhsya',
          'https://linkedin.com/company/vanhsya',
          'https://instagram.com/vanhsya',
        ],
      };

    case 'Service':
      return {
        ...baseSchema,
        name: data.name,
        provider: {
          '@type': 'Organization',
          name: 'Vanhsya Immigration Services',
        },
        description: data.description,
        serviceType: 'Immigration Services',
        areaServed: [
          'Canada',
          'Australia',
          'USA',
          'UK',
          'Germany',
          'New Zealand',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Immigration Services',
          itemListElement: data.services?.map(
            (service: any, index: number) => ({
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: service.name,
                description: service.description,
              },
            })
          ),
        },
      };

    case 'Article':
      return {
        ...baseSchema,
        headline: data.title,
        description: data.description,
        author: {
          '@type': 'Organization',
          name: 'Vanhsya Immigration Services',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Vanhsya Immigration Services',
          logo: {
            '@type': 'ImageObject',
            url: 'https://vanhsya.com/images/logo.png',
          },
        },
        datePublished: data.publishDate,
        dateModified: data.modifiedDate || data.publishDate,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': data.url,
        },
      };

    case 'FAQPage':
      return {
        ...baseSchema,
        mainEntity: data.faqs?.map((faq: any) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      };

    default:
      return baseSchema;
  }
};

// Helper function to inject structured data
export const StructuredData = ({ schema }: { schema: object }) => (
  <script
    type='application/ld+json'
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
  />
);
