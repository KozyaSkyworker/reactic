import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import { fixupConfigRules } from '@eslint/compat';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  {
    languageOptions: { globals: globals.browser },
  },
  {
    ignores: ['node_modules', 'build'],
  },
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules({
    ...pluginReactConfig,
    rules: {
      // ...
      'react/jsx-uses-react': 0,
      'react/react-in-jsx-scope': 0,
      // 'no-unused-vars': 0,
      '@typescript-eslint/no-unused-vars': 1,
    },
  }),
];
