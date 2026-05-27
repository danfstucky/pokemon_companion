module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2020: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:prettier/recommended",
  ],
  rules: {
    "no-console": "warn",
    "react/prop-types": "off",
    "prettier/prettier": ["error", { "endOfLine": "auto" }],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  overrides: [
    {
      files: ["tests/**/*.{js,jsx}"],
      env: {
        jest: true,
      },
      globals: {
        vi: "readonly",
      },
    },
  ],
}
