const path = require('path')

const buildEslintCommand = filenames =>
  `next lint --fix --file ${filenames.map(f => path.relative(process.cwd(), f)).join(' --file ')}`

module.exports = {
  '*.{ts,tsx}': [
    'prettier --write',
    buildEslintCommand,
    'tsc-files --noEmit next-env.d.ts'
  ],
  '*.json': ['prettier --write']
}
