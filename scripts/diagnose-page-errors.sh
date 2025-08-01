#!/bin/bash

echo "🔧 VANHSYA Website - Page Error Fix Script"
echo "========================================"
echo ""

# Function to check if a file has circular dependency issues
check_circular_dependency() {
    local page_path="$1"
    local premium_path="${page_path%.*}-premium.tsx"
    
    if [ -f "$page_path" ] && [ -f "$premium_path" ]; then
        # Check if page.tsx only contains export redirect
        if grep -q "export { default } from './page-premium'" "$page_path"; then
            # Check if page-premium.tsx imports from page
            if grep -q "import.*from.*'./page'" "$premium_path"; then
                echo "⚠️  CIRCULAR DEPENDENCY: $page_path <-> $premium_path"
                return 0
            fi
        fi
    fi
    return 1
}

echo "🔍 Scanning for circular dependencies..."
echo ""

# Common problematic pages
PROBLEMATIC_PAGES=(
    "src/app/services/page.tsx"
    "src/app/countries/page.tsx"
    "src/app/countries/canada/page.tsx"
    "src/app/ai-showcase/page.tsx"
    "src/app/team/page.tsx"
    "src/app/success-stories/page.tsx"
    "src/app/consultation/page.tsx"
    "src/app/portal/page.tsx"
    "src/app/ai-universe/page.tsx"
    "src/app/ai-intelligence/page.tsx"
    "src/app/blog/page.tsx"
    "src/app/tools/page.tsx"
)

FOUND_ISSUES=()

for page in "${PROBLEMATIC_PAGES[@]}"; do
    if check_circular_dependency "$page"; then
        FOUND_ISSUES+=("$page")
    fi
done

echo ""
echo "📊 Found ${#FOUND_ISSUES[@]} pages with circular dependency issues"
echo ""

if [ ${#FOUND_ISSUES[@]} -gt 0 ]; then
    echo "🚨 Pages needing fixes:"
    for issue in "${FOUND_ISSUES[@]}"; do
        echo "   - $issue"
    done
    echo ""
    echo "💡 To fix these issues, the premium pages should contain"
    echo "   the actual content instead of importing from the base page."
fi

echo ""
echo "🏥 Next steps:"
echo "1. Fix circular dependencies in premium pages"
echo "2. Ensure all components export properly"
echo "3. Add proper error boundaries"
echo "4. Test all pages individually"
