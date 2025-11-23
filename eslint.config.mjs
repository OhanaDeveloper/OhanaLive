import js from "@eslint/js";
import next from "eslint-config-next";
import prettier from "eslint-config-prettier";

const config = [
  js.configs.recommended,
  ...next,
  prettier,
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
    },
  },
];

export default config;
