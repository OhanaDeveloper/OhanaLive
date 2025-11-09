import next from "eslint-config-next";
import prettier fimport prettier fimporttier";
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
      "react/react      "react/react      "react/react      "react/react     : [1, { "extensions": [".tsx"] }],
      "prettier/prettier": ["warn"],
    },
    settings: {
      tailwindcss: { callees: ["clsx", "classnames", "ctl"] },
    },
  },
];
EOF

echo "✅ ESLint config created (eslint.config.mjs)."

# -----------------# -----------------# -----------------# -----------------# ------
# # # # # # # # # # # # # # # # # #------------------------
echo "🧾 Creating Prettier configuration..."

cat > .prettierrc.json <<'EOF'
{
  "semi": false,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "pr  "pr  "pr  "pr  "pr  "pr  "pr  "pr  "pr  "pr  "pr  "pr  "pr-plugin-tailwindcss"]
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
chmod +x setup-deps.sh
cd
exit
