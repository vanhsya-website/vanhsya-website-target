#!/bin/bash

# 🔒 VANHSYA Safe Backup Script
# Automatically backs up critical files before dangerous operations

# Get current timestamp
DATE=$(date +%Y-%m-%d)
TIME=$(date +%H-%M-%S)
REASON=${1:-"Manual backup"}

# Create backup directory
BACKUP_DIR="safe_archive/$DATE/$TIME"
mkdir -p "$BACKUP_DIR"

# Critical files to always backup
CRITICAL_FILES=(
    "src/app/layout.tsx"
    "src/app/page.tsx"
    "src/components/Navigation.tsx"
    "src/components/Hero.tsx"
    "src/components/Footer.tsx"
    "src/components/VanhsyaDifference.tsx"
    "src/components/ContactSection.tsx"
    "package.json"
    "next.config.ts"
    "tailwind.config.ts"
    "tsconfig.json"
    ".env.example"
)

echo "🔒 Creating safety backup: $REASON"
echo "📂 Backup location: $BACKUP_DIR"
echo ""

# Backup each critical file
BACKED_UP=0
for file in "${CRITICAL_FILES[@]}"; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        cp "$file" "$BACKUP_DIR/${filename}.backup"
        echo "✅ Backed up: $file"
        BACKED_UP=$((BACKED_UP + 1))
    else
        echo "⚠️  Not found: $file"
    fi
done

# Create metadata file
cat > "$BACKUP_DIR/metadata.json" << EOF
{
    "timestamp": "$(date -Iseconds)",
    "reason": "$REASON",
    "files_backed_up": $BACKED_UP,
    "git_commit": "$(git rev-parse HEAD 2>/dev/null || echo 'Not a git repository')",
    "git_branch": "$(git branch --show-current 2>/dev/null || echo 'Unknown')",
    "backup_size": "$(du -sh $BACKUP_DIR 2>/dev/null | cut -f1)"
}
EOF

# Create reason file
echo "# Backup Reason: $REASON" > "$BACKUP_DIR/reason.md"
echo "" >> "$BACKUP_DIR/reason.md"
echo "**Created**: $(date)" >> "$BACKUP_DIR/reason.md"
echo "**Files**: $BACKED_UP critical files" >> "$BACKUP_DIR/reason.md"
echo "**Git Commit**: $(git rev-parse HEAD 2>/dev/null || echo 'Not available')" >> "$BACKUP_DIR/reason.md"
echo "" >> "$BACKUP_DIR/reason.md"
echo "## Files Backed Up:" >> "$BACKUP_DIR/reason.md"
for file in "${CRITICAL_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "- ✅ $file" >> "$BACKUP_DIR/reason.md"
    else
        echo "- ❌ $file (not found)" >> "$BACKUP_DIR/reason.md"
    fi
done

# Update emergency restore (keep last 3 backups)
EMERGENCY_DIR="safe_archive/emergency_restore"
mkdir -p "$EMERGENCY_DIR"

# Copy to emergency restore with timestamp
for file in "${CRITICAL_FILES[@]}"; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        cp "$file" "$EMERGENCY_DIR/${filename}.${TIME}.backup"
    fi
done

# Clean old emergency backups (keep only last 3)
find "$EMERGENCY_DIR" -name "*.backup" -type f | sort | head -n -9 | xargs rm -f 2>/dev/null

# Update log
echo "" >> "safe_archive/_log.md"
echo "### **$DATE $TIME - $REASON**" >> "safe_archive/_log.md"
echo "- **Files**: $BACKED_UP critical files backed up" >> "safe_archive/_log.md"
echo "- **Location**: \`$BACKUP_DIR\`" >> "safe_archive/_log.md"
echo "- **Git Commit**: $(git rev-parse --short HEAD 2>/dev/null || echo 'N/A')" >> "safe_archive/_log.md"
echo "- **Status**: ✅ Backup completed successfully" >> "safe_archive/_log.md"

echo ""
echo "📊 Backup Summary:"
echo "   📁 Files backed up: $BACKED_UP"
echo "   💾 Location: $BACKUP_DIR"
echo "   🚨 Emergency restore updated"
echo "   📝 Log updated"
echo ""
echo "✅ Backup completed successfully!"
echo ""
echo "🔄 To restore a file:"
echo "   cp $BACKUP_DIR/filename.backup src/path/to/filename"
echo ""
echo "🚨 Emergency restore (latest files):"
echo "   ls -la $EMERGENCY_DIR/"
