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
    'airbnb-base',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
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
    'no-shadow': 'off',
    'indent': 'off',
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
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { 'args': 'after-used', 'argsIgnorePattern': '^_' }],
    'object-curly-spacing': ['error', 'always'],
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/no-dynamic-require': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'operator-linebreak': ['error', 'after'],
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
    'no-console': [DEV ? 'off' : 'error'],
    'global-require': 'off',
    'max-len': ['error', {
      'code': 150,
      'ignoreUrls': true,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true
    }],
    'no-restricted-globals': 'off',
    'no-continue': 'off',
    'no-use-before-define': 'off',
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
    'no-return-await': 'off',
    'object-curly-newline': ['error', { 'consistent': true }],
    'linebreak-style': 'off',
    'consistent-return': ['warn'],
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
