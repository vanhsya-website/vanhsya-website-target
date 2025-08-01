import { MetadataRoute } from 'next';

// Configure for static export compatibility
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/private/',
        '/admin/',
        '/api/',
        '/_next/',
        '/client-portal/private/',
      ],
    },
    sitemap: 'https://vanhsya.com/sitemap.xml',
  };
}
