#!/bin/bash
# ==============================================
# Project Structure Setup Script (Next.js 15 + TS + Tailwind)
# Compatible with macOS and Linux
# ==============================================

echo "🚧 Setting up project structure..."

# Ensure we're in the project root
if [ ! -d "src" ]; then
  echo "❌ Error: Run this script from the root of your Next.js project."
  exit 1
fi

# Base directories
mkdir -p src/{app,components,lib,store,styles,types}

# App sections (note: parentheses in folder name must be quoted)
mkdir -p "src/app/(sections)" "src/app/api"
mkdir -p "src/app/(sections)/home" "src/app/(sections)/about" "src/app/(sections)/contact" "src/app/(sections)/projects"

# Create placeholder files for page components
touch "src/app/(sections)/home/page.tsx" "src/app/(sections)/home/.gitkeep"
touch "src/app/(sections)/about/page.tsx" "src/app/(sections)/about/.gitkeep"
touch "src/app/(sections)/contact/page.tsx" "src/app/(sections)/contact/.gitkeep"
touch "src/app/(sections)/projects/page.tsx" "src/app/(sections)/projects/.gitkeep"

# Components
mkdir -p src/components/{ui,layout,common}
touch src/components/ui/.gitkeep
touch src/components/layout/.gitkeep
touch src/components/common/.gitkeep

# Lib organization
mkdir -p src/lib/{api,utils,hooks}
touch src/lib/api/.gitkeep
touch src/lib/utils/.gitkeep
touch src/lib/hooks/.gitkeep

# Global directories
touch src/store/.gitkeep
touch src/styles/.gitkeep
touch src/types/.gitkeep

echo "✅ Base folder structure created."

# Optional: Initialize a .vscode settings file for WebStorm / VSCode consistency
mkdir -p .vscode
cat > .vscode/settings.json <<EOF
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "files.exclude": {
    "**/.next": true,
    "**/node_modules": true
  }
}
EOF

echo "🧩 Added .vscode/settings.json for consistent formatting."

# Success summary
echo ""
echo "🎉 Structure ready!"
echo "Next steps:"
echo "1️⃣  Run your dependency installs (Step 2)"
echo "2️⃣  Update tailwind.config.ts (Step 3)"
echo "3️⃣  Implement Navigation, Background, and Layout files (Steps 4–6)"
echo "4️⃣  Run 'npm run dev' and verify deployment"
echo ""
