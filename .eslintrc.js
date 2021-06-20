module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['airbnb-typescript/base', 'prettier'],
  plugins: ['@typescript-eslint', 'prettier'],
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
  },
  env: {
    browser: true,
  },
  rules: {
    // eslint typescript plugin rules override
    '@typescript-eslint/no-throw-literal': 'warn',
    '@typescript-eslint/semi': 'off',

    // eslint import plugin rules
    'import/no-unresolved': 'off',
    'import/no-named-as-default': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'never',
      },
    ],
    'import/extensions': [
      'error',
      'never',
      {
        css: 'always',
        json: 'always',
        png: 'always',
        svg: 'always',
        jpg: 'always',
        jpeg: 'always',
      },
    ],
  },
}
