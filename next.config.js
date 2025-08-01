/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Enable modern image formats
    formats: ['image/webp', 'image/avif'],

    // Configure remote image patterns (modern approach)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.vanhsya.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.vanhsya.com',
        port: '',
        pathname: '/**',
      },
    ],

    // Enable image optimization
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Minimize layout shift
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },

  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['@heroicons/react', 'react-icons'],
  },

  // Production optimizations
  compress: true,
  poweredByHeader: false,
  
  // Static export configuration for deployment
  output: 'export',
  trailingSlash: true,
  
  images: {
    unoptimized: true,
    // Enable modern image formats
    formats: ['image/webp', 'image/avif'],

    // Configure remote image patterns (modern approach)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.vanhsya.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.vanhsya.com',
        port: '',
        pathname: '/**',
      },
    ],

    // Enable image optimization
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Minimize layout shift
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },

  // Optimize bundle
  webpack: (config, { isServer }) => {
    // Optimize for production
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }

    return config;
  },
};

module.exports = nextConfig;
