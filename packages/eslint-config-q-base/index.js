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
  plugins: ['@typescript-eslint', 'eslint-comments'],
  rules: {
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/no-dynamic-require': 'off',
    "eslint-comments/no-unused-disable": "error",
    'operator-linebreak': ['error', 'after'],
    'global-require': 'off',
    'max-len': ['error', {
      'code': 150,
      'ignoreUrls': true,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true
    }],
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'never'
    }],
    'function-paren-newline': ['error', 'multiline-arguments'],
    'object-curly-newline': ['error', { 'consistent': true }],
    'linebreak-style': 'off',
    'no-restricted-globals': 'off',
    'no-await-in-loop': 'off',
    'no-return-await': 'off',
    'no-continue': 'off',
    'no-use-before-define': 'off',
    'no-unused-vars': 'off',
    'no-shadow': 'off',
    'no-unsafe-optional-chaining': 'off',
    'no-nonoctal-decimal-escape': 'off',
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
    "no-useless-constructor": "off",
    "no-void": ["error", { "allowAsStatement": true }],
    "@typescript-eslint/no-useless-constructor": ["error"],
    '@typescript-eslint/no-use-before-define': ['error', { "functions": false, "classes": false, "variables": true }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { 'args': 'after-used', 'argsIgnorePattern': '^_', 'varsIgnorePattern': '^_' }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
          'multiline': {
              'delimiter': 'semi',
              'requireLast': true
          },
          'singleline': {
              'delimiter': 'semi',
              'requireLast': true
          }
      }
    ],
  },
};
