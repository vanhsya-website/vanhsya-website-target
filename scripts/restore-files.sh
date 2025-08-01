#!/bin/bash

# 🔄 VANHSYA Quick Restore Script
# Restores files from the most recent backup

# Function to list available backups
list_backups() {
    echo "📂 Available backups:"
    find safe_archive -type d -name "[0-9][0-9]-[0-9][0-9]-[0-9][0-9]" | sort -r | head -10 | while read dir; do
        timestamp=$(basename "$dir")
        date_dir=$(basename "$(dirname "$dir")")
        reason_file="$dir/$timestamp/reason.md"
        if [ -f "$reason_file" ]; then
            reason=$(grep "Backup Reason:" "$reason_file" | cut -d: -f2 | xargs)
            echo "   $date_dir $timestamp - $reason"
        else
            echo "   $date_dir $timestamp"
        fi
    done
}

# Function to restore from emergency backup
emergency_restore() {
    local filename="$1"
    local emergency_dir="safe_archive/emergency_restore"
    
    if [ -z "$filename" ]; then
        echo "❌ Please specify a filename to restore"
        echo "📁 Available emergency files:"
        ls -1 "$emergency_dir"/*.backup 2>/dev/null | sed 's/.*\//   /' || echo "   No emergency backups found"
        return 1
    fi
    
    # Find the most recent backup of this file
    local latest_backup=$(ls -t "$emergency_dir"/${filename}.*.backup 2>/dev/null | head -1)
    
    if [ -z "$latest_backup" ]; then
        echo "❌ No emergency backup found for: $filename"
        return 1
    fi
    
    echo "🚨 Emergency restore for: $filename"
    echo "📁 From: $latest_backup"
    echo ""
    read -p "⚠️  Are you sure you want to restore? (y/N): " confirm
    
    if [[ $confirm =~ ^[Yy]$ ]]; then
        # Determine destination path
        local dest_path=""
        case "$filename" in
            "layout.tsx") dest_path="src/app/layout.tsx" ;;
            "page.tsx") dest_path="src/app/page.tsx" ;;
            "Navigation.tsx") dest_path="src/components/Navigation.tsx" ;;
            "Hero.tsx") dest_path="src/components/Hero.tsx" ;;
            "Footer.tsx") dest_path="src/components/Footer.tsx" ;;
            "VanhsyaDifference.tsx") dest_path="src/components/VanhsyaDifference.tsx" ;;
            "ContactSection.tsx") dest_path="src/components/ContactSection.tsx" ;;
            "package.json") dest_path="package.json" ;;
            "next.config.ts") dest_path="next.config.ts" ;;
            "tailwind.config.ts") dest_path="tailwind.config.ts" ;;
            "tsconfig.json") dest_path="tsconfig.json" ;;
            ".env.example") dest_path=".env.example" ;;
            *) dest_path="$filename" ;;
        esac
        
        # Create backup of current file before restore
        if [ -f "$dest_path" ]; then
            mkdir -p "safe_archive/pre_restore_backup"
            cp "$dest_path" "safe_archive/pre_restore_backup/${filename}.$(date +%H-%M-%S).backup"
            echo "💾 Current file backed up to: safe_archive/pre_restore_backup/"
        fi
        
        # Restore the file
        cp "$latest_backup" "$dest_path"
        echo "✅ File restored successfully!"
        echo "📍 Restored to: $dest_path"
        
        # Log the restore
        echo "" >> "safe_archive/_log.md"
        echo "### **$(date +%Y-%m-%d) $(date +%H:%M:%S) - EMERGENCY RESTORE: $filename**" >> "safe_archive/_log.md"
        echo "- **Source**: \`$latest_backup\`" >> "safe_archive/_log.md"
        echo "- **Destination**: \`$dest_path\`" >> "safe_archive/_log.md"
        echo "- **Status**: ✅ Emergency restore completed" >> "safe_archive/_log.md"
    else
        echo "❌ Restore cancelled"
    fi
}

# Function to restore from specific backup
restore_from_backup() {
    local backup_date="$1"
    local backup_time="$2"
    local filename="$3"
    
    if [ -z "$backup_date" ] || [ -z "$backup_time" ] || [ -z "$filename" ]; then
        echo "❌ Usage: restore_from_backup YYYY-MM-DD HH-MM-SS filename"
        return 1
    fi
    
    local backup_path="safe_archive/$backup_date/$backup_time/${filename}.backup"
    
    if [ ! -f "$backup_path" ]; then
        echo "❌ Backup not found: $backup_path"
        return 1
    fi
    
    echo "🔄 Restoring from specific backup:"
    echo "📁 File: $filename"
    echo "📅 Date: $backup_date $backup_time"
    echo "📍 From: $backup_path"
    echo ""
    read -p "⚠️  Continue with restore? (y/N): " confirm
    
    if [[ $confirm =~ ^[Yy]$ ]]; then
        emergency_restore "$filename"
    else
        echo "❌ Restore cancelled"
    fi
}

# Main script logic
case "$1" in
    "list")
        list_backups
        ;;
    "emergency")
        emergency_restore "$2"
        ;;
    "restore")
        restore_from_backup "$2" "$3" "$4"
        ;;
    *)
        echo "🔄 VANHSYA Quick Restore Script"
        echo ""
        echo "Usage:"
        echo "  ./restore-files.sh list                          # List available backups"
        echo "  ./restore-files.sh emergency filename            # Emergency restore latest"
        echo "  ./restore-files.sh restore date time filename    # Restore from specific backup"
        echo ""
        echo "Examples:"
        echo "  ./restore-files.sh emergency ContactSection.tsx"
        echo "  ./restore-files.sh restore 2024-01-15 14-30-22 Navigation.tsx"
        echo ""
        echo "📁 Critical files available for restore:"
        echo "   - layout.tsx"
        echo "   - page.tsx"
        echo "   - Navigation.tsx"
        echo "   - Hero.tsx"
        echo "   - Footer.tsx"
        echo "   - VanhsyaDifference.tsx"
        echo "   - ContactSection.tsx"
        echo "   - package.json"
        echo "   - next.config.ts"
        echo "   - tailwind.config.ts"
        echo "   - tsconfig.json"
        echo "   - .env.example"
        echo ""
        list_backups
        ;;
esac
