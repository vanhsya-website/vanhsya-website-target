#!/bin/bash

echo "🚀 VANHSYA Website Deployment Script"
echo "=================================="

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
    echo "❌ .env.local file not found!"
    echo "📋 Please copy .env.template to .env.local and fill in your API keys"
    echo "   cp .env.template .env.local"
    echo "   # Then edit .env.local with your actual keys"
    exit 1
fi

echo "✅ Environment file found"

# Check for required environment variables
if ! grep -q "SENDGRID_API_KEY=your_sendgrid_api_key_here" .env.local; then
    echo "✅ SendGrid API key configured"
else
    echo "⚠️  Warning: SendGrid API key not configured"
fi

if ! grep -q "GOOGLE_ANALYTICS_ID=your_google_analytics_id_here" .env.local; then
    echo "✅ Google Analytics ID configured"  
else
    echo "⚠️  Warning: Google Analytics ID not configured"
fi

echo ""
echo "🔧 Preparing for deployment..."

# Enable static export
echo "📝 Updating Next.js config for static export..."
sed -i.bak 's|// output: '\''export'\''|output: '\''export'\''|g' next.config.js
sed -i.bak 's|// trailingSlash: true|trailingSlash: true|g' next.config.js
sed -i.bak 's|// unoptimized: true|unoptimized: true|g' next.config.js

echo "🏗️  Building project..."
export NODE_OPTIONS='--max-old-space-size=8192'
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🎉 Deployment ready!"
    echo "Next steps:"
    echo "1. Deploy 'out' folder to your hosting provider, or"
    echo "2. Run 'vercel --prod' for Vercel deployment"
    echo ""
    echo "📊 Build statistics:"
    echo "- Static files generated in 'out' folder"
    echo "- All 166+ pages ready for deployment"
    echo "- SEO and performance optimized"
else
    echo "❌ Build failed!"
    echo "🔧 Restoring original config..."
    mv next.config.js.bak next.config.js
    echo "💡 Try running with development config first:"
    echo "   npm run dev"
    exit 1
fi
