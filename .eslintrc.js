module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['airbnb-typescript/base', 'prettier'],
  plugins: ['prettier', '@typescript-eslint'],
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
  },
}
