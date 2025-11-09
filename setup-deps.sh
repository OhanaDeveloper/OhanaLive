#!/bin/bash
# =========================================================
# Dependency + ESLint/Prettier Setup Script
# For Next.js 15 + TypeScript + Tailwind + Framer Motion + R3F
# =========================================================

echo "🚧 Installing core dependencies..."

# Core libraries for interactivity, state, and API handling
npm install framer-motion @react-three/fiber @react-three/drei three \
             zustand @tanstack/react-query clsx lucide-react

echo "✅ Core dependencies installed."

echo "🧹 Installing dev dependencies (ESLint, Prettier, etc.)..."
npm install -D eslint prettier eslint-config-next eslint-plugin-tailwindcss \
              eslint-config-prettier eslint-plugin-prettier \
              typescript @types/node @types/react @types/react-dom

echo "✅ Dev dependencies installed."

# ---------------------------------------------------------
# ESLint Configuration
# ---------------------------------------------------------
echo "🧠 Writing ESLint configuration..."

cat > eslint.config.mjs <<'EOF'
import js from "@eslint/js";
import next from "eslint-config-next";
import prettier from "eslint-config-prettier";
import tailwind from "eslint-plugin-tailwindcss";

export default [
  js.configs.recommended,
  next,
  prettier,
  {
    plugins: { tailwind },
    rules: {
      "tailwindcss/classnames-order": "warn",
      "tailwindcss/no-custom-classname": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }],
      "prettier/prettier": ["warn"],
    },
    settings: {
      tailwindcss: { callees: ["clsx", "classnames", "ctl"] },
    },
  },
];
EOF

echo "✅ ESLint config created (eslint.config.mjs)."

# ---------------------------------------------------------
# Prettier Configuration
# ---------------------------------------------------------
echo "🧾 Creating Prettier configuration..."

cat > .prettierrc.json <<'EOF'
{
  "semi": false,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "endOfLine": "lf",
  "plugins": ["prettier-plugin-tailwindcss"]
}
EOF

echo "✅ Prettier config created (.prettierrc.json)."

# ---------------------------------------------------------
# Optional Tailwind Plugin for Prettier
# ---------------------------------------------------------
echo "🎨 Installing Prettier Tailwind plugin..."
npm install -D prettier-plugin-tailwindcss

echo "✅ Prettier Tailwind plugin installed."

# ---------------------------------------------------------
# Success Summary
# ---------------------------------------------------------
echo ""
echo "🎉 Dependencies and configs ready!"
echo ""
echo "Next steps:"
echo "1️⃣  Verify everything works: npm run dev"
echo "2️⃣  Add Navigation, Background, and Layout components."
echo "3️⃣  Commit and push to Vercel for auto-deploy."
echo ""
echo "🧩 Done — your environment is now standardized and production-ready."
