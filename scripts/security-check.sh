#!/bin/bash

# 🔒 VANHSYA Security Check Script
# This script checks for potential security issues with environment variables

echo "🔒 VANHSYA Security Check - Environment Variables"
echo "=================================================="
echo ""

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
    echo "⚠️  WARNING: .env.local file is missing!"
    echo "   Create it by copying .env.example:"
    echo "   cp .env.example .env.local"
    echo ""
fi

# Check if .env.local is in .gitignore
if grep -q ".env.local" .gitignore; then
    echo "✅ .env.local is properly ignored by git"
else
    echo "🚨 DANGER: .env.local is NOT in .gitignore!"
    echo "   Add it immediately to prevent secret exposure"
fi

# Check for potential secrets in code
echo ""
echo "🔍 Scanning for potential secret exposure in code..."

# Check for hardcoded secrets (common patterns)
SECRET_PATTERNS=(
    "api[_-]?key.*=.*['\"][a-zA-Z0-9]{20,}['\"]"
    "secret.*=.*['\"][a-zA-Z0-9]{20,}['\"]"
    "token.*=.*['\"][a-zA-Z0-9]{20,}['\"]"
    "password.*=.*['\"][^'\"]{6,}['\"]"
    "sk_live_[a-zA-Z0-9]+"
    "pk_live_[a-zA-Z0-9]+"
)

FOUND_ISSUES=0

for pattern in "${SECRET_PATTERNS[@]}"; do
    matches=$(grep -r -E "$pattern" src/ 2>/dev/null || true)
    if [ ! -z "$matches" ]; then
        echo "🚨 POTENTIAL SECRET FOUND:"
        echo "$matches"
        FOUND_ISSUES=1
    fi
done

# Check for NEXT_PUBLIC_ secrets (they get exposed to client)
client_secrets=$(grep -r "NEXT_PUBLIC_.*SECRET\|NEXT_PUBLIC_.*KEY\|NEXT_PUBLIC_.*TOKEN" src/ 2>/dev/null | grep -v "your_" || true)
if [ ! -z "$client_secrets" ]; then
    echo "🚨 CLIENT-SIDE SECRET EXPOSURE:"
    echo "$client_secrets"
    echo "   ⚠️  NEXT_PUBLIC_ variables are visible to users!"
    FOUND_ISSUES=1
fi

if [ $FOUND_ISSUES -eq 0 ]; then
    echo "✅ No obvious secrets found in code"
fi

echo ""
echo "🔍 Environment Variable Usage Summary:"
echo "======================================"

# List all environment variables used in code
echo "Variables found in codebase:"
grep -r "process\.env\." src/ 2>/dev/null | sed 's/.*process\.env\.\([A-Z_]*\).*/\1/' | sort | uniq | head -10

echo ""
echo "✅ Security check complete!"
echo ""
echo "🛡️  Security Best Practices:"
echo "  1. Never commit .env.local or .env.production"
echo "  2. Use NEXT_PUBLIC_ only for non-sensitive config"
echo "  3. Rotate secrets regularly"
echo "  4. Use environment-specific values"
echo "  5. Validate all environment variables on startup"
