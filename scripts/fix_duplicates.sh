#!/bin/bash

# Files with duplicate Navigation components
files=(
"src/app/referral/page.tsx"
"src/app/contact/page.tsx"
"src/app/tools/eligibility-calculator/page.tsx"
"src/app/tools/eligibility-bot/page.tsx"
"src/app/tools/scam-detector/page.tsx"
"src/app/tools/document-checklist/page.tsx"
"src/app/tools/document-generator/page.tsx"
"src/app/tools/page.tsx"
"src/app/portal/page.tsx"
"src/app/privacy/page.tsx"
"src/app/sitemap-page/page.tsx"
"src/app/my-journey/page.tsx"
"src/app/complete-landing/page.tsx"
"src/app/ai-tools-showcase/page.tsx"
"src/app/faq/page.tsx"
"src/app/resources/page.tsx"
"src/app/terms/page.tsx"
"src/app/consultation/page.tsx"
"src/app/about/page.tsx"
"src/app/blog/[id]/page.tsx"
"src/app/blog/page.tsx"
"src/app/programs/page.tsx"
"src/app/earnings-wallet/page.tsx"
"src/app/ai-tools/eligibility-calculator/page.tsx"
"src/app/ai-tools/chatbot/page.tsx"
"src/app/ai-tools/eligibility/page.tsx"
"src/app/ai-tools/migration-assistant/page.tsx"
"src/app/ai-tools/checklist-assistant/page.tsx"
"src/app/ai-tools/document-wizard/page.tsx"
"src/app/ai-tools/scam-detector/page.tsx"
"src/app/ai-tools/page.tsx"
"src/app/ai-innovations/page.tsx"
"src/app/emi-payment/page.tsx"
"src/app/success-stories/page.tsx"
"src/app/countries/[slug]/page.tsx"
"src/app/why-choose-us/page.tsx"
"src/app/services/tourist-visa/page.tsx"
"src/app/services/permanent-residence/page.tsx"
"src/app/services/family-visa/page.tsx"
"src/app/services/work-visa/page.tsx"
"src/app/services/business-visa/page.tsx"
"src/app/services/page.tsx"
"src/app/services/study-visa/page.tsx"
"src/app/lucky-draw/page.tsx"
)

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "Fixing $file..."
        # Remove Navigation import line
        sed -i '' '/^import Navigation from/d' "$file"
        # Remove <Navigation /> component usage
        sed -i '' '/<Navigation \/>/d' "$file"
        # Remove <Navigation> ... </Navigation> component usage  
        sed -i '' '/<Navigation>/,/<\/Navigation>/d' "$file"
        echo "Fixed $file"
    fi
done

echo "All duplicate Navigation components removed!"
