const DEV = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

module.exports = {
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  extends: [
    '@qompium/eslint-config-q-base',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    '@typescript-eslint/indent': ['error', 2, {
      'ignoredNodes': ['TSTypeParameterInstantiation'], // https://github.com/typescript-eslint/typescript-eslint/issues/455
      'SwitchCase': 1
    }],
    '@typescript-eslint/naming-convention': ['error', {
      "selector": "interface",
      "format": ["PascalCase"],
      "custom": {
        "regex": "^I[A-Z]",
        "match": false
      }
    }],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { 'args': 'after-used', 'argsIgnorePattern': '^_' }],
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-curly-spacing': ['error', { "when": "never", "children": { "when": "always" } }],
    'react/jsx-curly-newline': ['error', { 'multiline': "require", 'singleline': "consistent" }],
    'react/jsx-filename-extension': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'ignore',
      },
    ],
    'react/prop-types': 'off', // Need to use this because of React.FC
    'react/destructuring-assignment': 'off',
    'react/display-name': ['warn'],
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'indent': 'off',
    'consistent-return': ['warn'],
    'object-curly-spacing': ['error', 'always'],
    'no-console': [DEV ? 'off' : 'error'],
    'no-use-before-define': 'off',
    'no-unused-expressions': 'off',
    'no-underscore-dangle': ['error', { 'allow': ['_root', '_retry'] }],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc', // for reduce accumulators
          'accumulator', // for reduce accumulators
          'staticContext', // for ReactRouter context,
          'draft', //for immer.js
          'state', // for react toolkit
          'config', // for Axios interceptors
          'request' // for Axios interceptors
        ],
      },
    ],
  },
};
