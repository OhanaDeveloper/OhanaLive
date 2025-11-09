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
