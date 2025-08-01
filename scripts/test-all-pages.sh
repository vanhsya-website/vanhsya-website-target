#!/bin/bash

echo "🌐 VANHSYA Website - Complete Page Testing"
echo "========================================"
echo ""

# Base URL
BASE_URL="http://localhost:3000"

# List all the main pages we want to test
PAGES=(
    ""                          # Home page
    "/smart-pathway"            # Smart Pathway
    "/services"                 # Services
    "/countries"                # Countries
    "/consultation"             # Consultation
    "/ai-tools"                 # AI Tools
    "/team"                     # Team
    "/why-choose-us"            # Why Choose Us
    "/success-stories"          # Success Stories
    "/ai-showcase"              # AI Showcase
    "/ai-universe"              # AI Universe
    "/ai-intelligence"          # AI Intelligence
    "/ai-innovations"           # AI Innovations
    "/portal"                   # Portal
    "/referral"                 # Referral
    "/my-journey"               # My Journey
    "/lottery-voucher"          # Lottery Voucher
    "/lucky-draw"               # Lucky Draw
    "/earnings-wallet"          # Earnings Wallet
    "/emi-payment"              # EMI Payment
    "/referral-program"         # Referral Program
    "/programs"                 # Programs
    "/dmca"                     # DMCA
    "/dev-tasks"                # Dev Tasks
    "/responsive-test"          # Responsive Test
    
    # Country pages
    "/countries/canada"         # Canada
    "/countries/australia"      # Australia
    "/countries/usa"            # USA
    "/countries/uk"             # UK
    "/countries/germany"        # Germany
    "/countries/singapore"      # Singapore
    "/countries/new-zealand"    # New Zealand
    "/countries/uae"            # UAE
    
    # Service pages
    "/services/study-visa"      # Study Visa
    "/services/work-visa"       # Work Visa
    "/services/tourist-visa"    # Tourist Visa
    "/services/business-visa"   # Business Visa
    "/services/permanent-residence" # Permanent Residence
    "/services/flight-booking"  # Flight Booking
    
    # AI Tools
    "/ai-tools/eligibility-checker"  # Eligibility Checker
    "/ai-tools/scam-detector"        # Scam Detector
    
    # Tools
    "/tools/document-generator"      # Document Generator
    "/tools/scam-detector"           # Scam Detector
    
    # Portal pages
    "/portal/dashboard"              # Portal Dashboard
)

echo "📊 Testing ${#PAGES[@]} pages..."
echo ""

# Function to test a single page
test_page() {
    local page="$1"
    local url="${BASE_URL}${page}"
    local page_name="${page:-"Home"}"
    
    echo "🔗 Testing: $page_name"
    echo "   URL: $url"
    echo ""
}

# Test all pages
for page in "${PAGES[@]}"; do
    test_page "$page"
done

echo "✅ Page list generated!"
echo ""
echo "🌐 To test these pages manually:"
echo "1. Make sure dev server is running: npm run dev"
echo "2. Open each URL in the browser"
echo "3. Check for any errors in the console"
echo "4. Verify all components load correctly"
echo ""
echo "🔍 Key things to check:"
echo "- Page loads without errors"
echo "- Navigation works correctly"
echo "- Animations and interactions function"
echo "- Premium features are visible"
echo "- Responsive design on mobile"
echo "- AI components render properly"
