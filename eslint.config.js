const js = require('@eslint/js'),
  reactHooks = require('eslint-plugin-react-hooks'),
  prettier = require('eslint-plugin-prettier'),
  prettierConfig = require('eslint-config-prettier'),
  globals = require('globals');

module.exports = [
  // ESLint recommended
  js.configs.recommended,

  // Prettier config (disables conflicting rules)
  prettierConfig,

  // Main configuration
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.commonjs,
        ...globals.es2015,
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      prettier: prettier,
    },
    rules: {
      // React Hooks rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Custom overrides
      'prettier/prettier': 'error',
      'no-unused-vars': 'warn',
      'no-empty': 'warn',
    },
  },
];
