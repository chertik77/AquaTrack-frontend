import { fixupPluginRules } from '@eslint/compat'
import js from '@eslint/js'
import next from '@next/eslint-plugin-next'
import tsParser from '@typescript-eslint/parser'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import tseslint from 'typescript-eslint'

import tailwind from 'eslint-plugin-tailwindcss'

/**  @type {import('eslint').Linter.Config}*/
export default [
  { ignores: ['.next/**'] },
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { parser: tsParser } },
  js.configs.recommended,
  react.configs.flat.recommended,
  ...tseslint.configs.recommended,
  ...tailwind.configs['flat/recommended'],
  {
    plugins: {
      '@typescript-eslint': tseslint,
      'react-hooks': fixupPluginRules(reactHooks),
      '@next/next': fixupPluginRules(next)
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...next.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...next.configs['core-web-vitals'].rules,
      'react/react-in-jsx-scope': 'off',
      'react/display-name': 'off'
    }
  }
]
