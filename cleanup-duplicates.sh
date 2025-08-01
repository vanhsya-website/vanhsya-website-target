#!/bin/bash

echo "🧹 VANHSYA Website - Comprehensive File Cleanup"
echo "=============================================="
echo ""

# Create backup before cleanup
BACKUP_DIR="safe_archive/cleanup-backup-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$BACKUP_DIR"
echo "📦 Creating backup at: $BACKUP_DIR"

# Function to safely remove files with backup
safe_remove() {
    local file="$1"
    local reason="$2"
    
    if [ -f "$file" ]; then
        echo "🗑️  Removing: $file ($reason)"
        # Create backup copy
        cp "$file" "$BACKUP_DIR/$(basename "$file")" 2>/dev/null
        rm "$file"
    fi
}

echo ""
echo "🔄 Phase 1: Removing Premium Page Variants"
echo "----------------------------------------"

# Remove premium page variants (backup, broken, temp, new)
safe_remove "src/app/countries/canada/page-premium-backup.tsx" "backup variant"
safe_remove "src/app/countries/canada/page-premium-broken.tsx" "broken variant"
safe_remove "src/app/countries/canada/page-premium-temp.tsx" "temporary variant"
safe_remove "src/app/countries/canada/page-premium-new.tsx" "new variant"

echo ""
echo "🔄 Phase 2: Removing Broken/Backup Files"
echo "---------------------------------------"

# Remove .broken files
find . -name "*.broken" -type f | while read -r file; do
    safe_remove "$file" "broken file"
done

# Clean up ContactSection broken file specifically
safe_remove "src/components/ContactSection.tsx.broken" "broken component"

echo ""
echo "🔄 Phase 3: Consolidating Config Files"
echo "------------------------------------"

# Keep next.config.js (has more comprehensive config), remove .ts version
safe_remove "next.config.ts" "duplicate config - keeping .js version"

# Keep postcss.config.js, remove .mjs version
safe_remove "postcss.config.mjs" "duplicate config - keeping .js version"

echo ""
echo "🔄 Phase 4: Cleaning Documentation Duplicates"
echo "--------------------------------------------"

# Remove duplicate markdown files from root (keep in docs/)
DOCS_DUPLICATES=(
    "AI_ANNOUNCEMENT_ENHANCEMENTS.md"
    "APPLE_TRANSFORMATION_COMPLETE.md"
    "BUSINESS_IMPACT_AUDIT.md"
    "CHAT_CONTACT_UPDATES.md"
    "COMPLETE_THEME_FIX_SUMMARY.md"
    "COMPREHENSIVE_AUDIT_REPORT.md"
    "COMPREHENSIVE_TESTING_REPORT.md"
    "COUNTRY_PAGE_ANALYSIS.md"
    "ENHANCEMENT_REQUIREMENTS.md"
    "EXECUTIVE_AUDIT_SUMMARY.md"
    "FINAL_IMPLEMENTATION_SUMMARY.md"
    "ISSUES_FIXED_REPORT.md"
    "LOGO_INTEGRATION_STATUS.md"
    "LOGO_VISIBILITY_FIXED.md"
    "REVOLUTIONARY_AI_ANIMATIONS.md"
    "SERVICES_ENHANCEMENT_COMPLETE.md"
    "SERVICES_PAGE_ENHANCED.md"
    "SERVICES_PAGE_FIXED.md"
    "TECHNICAL_DEEP_DIVE_AUDIT.md"
    "VANHSYA_BRAND_TRANSFORMATION.md"
)

for doc in "${DOCS_DUPLICATES[@]}"; do
    if [ -f "$doc" ] && [ -f "docs/$doc" ]; then
        safe_remove "$doc" "duplicate - keeping in docs/"
    fi
done

echo ""
echo "🔄 Phase 5: Removing Redundant Reports"
echo "------------------------------------"

# Remove old/redundant completion reports
REDUNDANT_REPORTS=(
    "TASK_7_COMPLETE.md"
    "PHASE_4_COMPLETE.md"
    "DEVELOPMENT_SETUP_COMPLETE.md"
    "COMPLETE_FIX_REPORT.md"
    "COMPLETE_ENHANCEMENT_REPORT.md"
    "CLEANUP_ANALYSIS.md"
    "CLEANUP_AUDIT_REPORT.md"
    "FINAL_CLEANUP_REPORT.md"
    "DEVICE_COMPATIBILITY_REPORT.md"
    "VIRAL_GROWTH_IMPLEMENTATION_REPORT.md"
    "WEBGL_IMPLEMENTATION.md"
    "PREMIUM_THEME_IMPLEMENTATION.md"
    "ENTERPRISE_IMPLEMENTATION.md"
    "OPTIMIZATION_ROADMAP.md"
    "PEN_DRIVE_COPY_CHECKLIST.md"
    "SENDGRID_SETUP.md"
    "HYDRATION_FIX.md"
    "TODO_SYSTEM.md"
    "TASK_TRACKING.md"
)

for report in "${REDUNDANT_REPORTS[@]}"; do
    safe_remove "$report" "redundant report"
done

echo ""
echo "🔄 Phase 6: Cleaning Backup Files"
echo "-------------------------------"

# Remove README backup
safe_remove "README.md.backup" "backup file"

echo ""
echo "🔄 Phase 7: Organizing Scripts"
echo "----------------------------"

# Move utility scripts to scripts/ directory
mkdir -p scripts/

if [ -f "backup-critical.sh" ]; then
    echo "📁 Moving backup-critical.sh to scripts/"
    mv "backup-critical.sh" "scripts/"
fi

if [ -f "restore-files.sh" ]; then
    echo "📁 Moving restore-files.sh to scripts/"
    mv "restore-files.sh" "scripts/"
fi

if [ -f "security-check.sh" ]; then
    echo "📁 Moving security-check.sh to scripts/"
    mv "security-check.sh" "scripts/"
fi

if [ -f "test-suite.sh" ]; then
    echo "📁 Moving test-suite.sh to scripts/"
    mv "test-suite.sh" "scripts/"
fi

if [ -f "fix_duplicates.sh" ]; then
    echo "📁 Moving fix_duplicates.sh to scripts/"
    mv "fix_duplicates.sh" "scripts/"
fi

echo ""
echo "🔄 Phase 8: Cleaning TypeScript Build Files"
echo "----------------------------------------"

# Remove TypeScript build info (will be regenerated)
safe_remove "tsconfig.tsbuildinfo" "build cache file"

echo ""
echo "✅ Cleanup Complete!"
echo "=================="
echo ""
echo "📊 Summary:"
echo "- Removed premium page variants (backup, broken, temp, new)"
echo "- Consolidated config files (kept .js versions)"
echo "- Moved documentation to docs/ folder only"
echo "- Removed redundant completion reports"
echo "- Organized utility scripts in scripts/ folder"
echo "- Cleaned build cache files"
echo ""
echo "💾 Backup created at: $BACKUP_DIR"
echo "🔍 To restore any file: cp $BACKUP_DIR/[filename] ."
echo ""
echo "🚀 Project is now cleaner and better organized!"
