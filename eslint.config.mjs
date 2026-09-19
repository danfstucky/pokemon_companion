import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  {
    ignores: ['build/', 'config/', 'dist/', 'src/data/', '*.js', '*.cjs', '*.mjs'],
  },
  {
    files: ['**/*.{js,jsx}'],
    ...js.configs.recommended,
  },
  {
    files: ['**/*.{js,jsx}'],
    ...react.configs.flat.recommended,
  },
  {
    files: ['**/*.{js,jsx}'],
    ...react.configs.flat['jsx-runtime'],
  },
  prettierRecommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      'no-console': 'warn',
      'react/prop-types': 'off',
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
    },
  },
  {
    files: ['tests/**/*.{js,jsx}'],
    languageOptions: {
      globals: {
        ...globals.jest,
        vi: 'readonly',
      },
    },
  },
];
