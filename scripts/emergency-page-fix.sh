#!/bin/bash

echo "🚑 VANHSYA - Emergency Page Fix Script"
echo "===================================="
echo ""

# Function to create a basic page component
create_basic_page() {
    local page_path="$1"
    local page_name="$2"
    local page_title="$3"
    
    cat > "$page_path" << 'EOF'
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Home, Bot } from 'lucide-react';

export default function PAGE_NAME_Component() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-950 to-neutral-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-blue-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                VANHSYA
              </span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="relative z-10 pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                PAGE_TITLE
              </span>
            </h1>

            <p className="text-xl text-white/80 leading-relaxed mb-12">
              This page is currently under development. Our AI-powered platform is being enhanced to provide you with the best immigration experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 rounded-full text-white font-bold shadow-2xl"
                >
                  <span className="flex items-center gap-3">
                    <Home className="w-5 h-5" />
                    Return Home
                  </span>
                </motion.button>
              </Link>
              
              <button
                onClick={() => window.history.back()}
                className="px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-all"
              >
                <span className="flex items-center gap-3">
                  <ArrowLeft className="w-5 h-5" />
                  Go Back
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
EOF

    # Replace placeholders
    sed -i '' "s/PAGE_NAME_Component/${page_name}Component/g" "$page_path"
    sed -i '' "s/PAGE_TITLE/${page_title}/g" "$page_path"
    
    echo "✅ Created: $page_path"
}

# Pages that need basic implementations to stop errors
echo "🔨 Creating basic page implementations..."
echo ""

# Only create if they don't already have substantial content
# Check if each page is just a redirect, then create basic version

pages_to_fix=(
    "src/app/ai-showcase/page.tsx:AIShowcase:AI Showcase"
    "src/app/team/page.tsx:Team:Our Team" 
    "src/app/success-stories/page.tsx:SuccessStories:Success Stories"
    "src/app/consultation/page.tsx:Consultation:Consultation"
    "src/app/portal/page.tsx:Portal:Client Portal"
    "src/app/ai-universe/page.tsx:AIUniverse:AI Universe"
    "src/app/ai-intelligence/page.tsx:AIIntelligence:AI Intelligence"
    "src/app/blog/page.tsx:Blog:Blog"
    "src/app/tools/page.tsx:Tools:Tools"
)

for page_info in "${pages_to_fix[@]}"; do
    IFS=':' read -r page_path page_name page_title <<< "$page_info"
    
    if [ -f "$page_path" ]; then
        # Check if it's a problematic redirect or empty
        if grep -q "export.*from.*page-premium" "$page_path" || [ ! -s "$page_path" ]; then
            create_basic_page "$page_path" "$page_name" "$page_title"
        else
            echo "⏭️  Skipped: $page_path (already has content)"
        fi
    else
        create_basic_page "$page_path" "$page_name" "$page_title"
    fi
done

echo ""
echo "✅ Emergency page fixes completed!"
echo "🔄 Restart the dev server to see changes: npm run dev"
