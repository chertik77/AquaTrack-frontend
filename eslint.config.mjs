import { fixupPluginRules } from '@eslint/compat'
import js from '@eslint/js'
import next from '@next/eslint-plugin-next'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'
import tseslint from 'typescript-eslint'

import tailwind from 'eslint-plugin-tailwindcss'

/**  @type {import('eslint').Linter.Config}*/
export default [
  { ignores: ['.next/**'] },
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  js.configs.recommended,
  react.configs.flat.recommended,
  ...tseslint.configs.recommended,
  ...tailwind.configs['flat/recommended'],
  {
    plugins: {
      'react-hooks': fixupPluginRules(reactHooks),
      '@next/next': fixupPluginRules(next)
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...next.configs.recommended.rules,
      ...next.configs['core-web-vitals'].rules,
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-require-imports': 'off'
    }
  }
]
