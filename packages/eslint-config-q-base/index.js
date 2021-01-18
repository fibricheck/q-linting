module.exports = {
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }], // Allow unused vars with a leading underscore
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/no-dynamic-require': 'off',
    'operator-linebreak': ['error', 'after'],
    'global-require': 'off',
    'max-len': ['error', { 'code': 150 }],
    'no-restricted-globals': 'off',
    'no-continue': 'off',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'never'
    }],
    'function-paren-newline': ['error', 'multiline-arguments'],
    'no-await-in-loop': 'off',
    'no-use-before-define': ['error', { "functions": false, "classes": true, "variables": true }],
    'no-return-await': 'off',
    'object-curly-newline': ['error', { 'consistent': true }],
    'linebreak-style': 'off'
  },
};
