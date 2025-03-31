import js from "@eslint/js";
import * as importPlugin from "eslint-plugin-import";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks/cjs/eslint-plugin-react-hooks.development.js";
import * as reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        React: "readonly",
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: reactPlugin,
      import: importPlugin,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        node: true,
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,

      // Import rules
      "import/no-unresolved": "error",
      "import/default": "warn",
      "import/export": "error",
      "import/no-duplicates": "warn",

      // React Refresh rules
      "react-refresh/only-export-components": [
        "off",
        { allowConstantExport: true },
      ],

      // React rules
      "react/no-unknown-property": [
        "error",
        {
          ignore: [
            "class",
            "css",
            "tw",
            "args",
            "position",
            "intensity",
            "rotation",
            "vertexShader",
            "fragmentShader",
            "uniforms",
            "side",
            "cmdk-input-wrapper",
          ],
        },
      ],
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/jsx-no-target-blank": "warn",
      "react/jsx-key": ["warn", { checkFragmentShorthand: true }],
      "react/no-unescaped-entities": "off",

      // React Hooks rules
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
];