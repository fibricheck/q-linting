module.exports = {
  extends: ['@qompium/eslint-config-q-base'],
  plugins: ["jest"],
  rules: {
    // For the node service we use the console to log.
    // We should switch to a good logging library.
    // But in the meantime we keep this rule disabled.
    'no-console': 'off',
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-disabled-tests.md
    'jest/no-disabled-tests': 'error',
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-duplicate-hooks.md
    'jest/no-duplicate-hooks': 'error',
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-focused-tests.md
    'jest/no-focused-tests': 'error',
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-identical-title.md
    'jest/no-identical-title': 'error',
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-standalone-expect.md
    'jest/no-standalone-expect': 'error',
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-hooks-on-top.md
    'jest/prefer-hooks-on-top': 'error',
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-spy-on.md
    'jest/prefer-spy-on': 'error',
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-strict-equal.md
    'jest/prefer-strict-equal': 'error',
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-be.md
    'jest/prefer-to-be': 'error',
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-contain.md
    'jest/prefer-to-contain': 'error',
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-have-length.md
    'jest/prefer-to-have-length': 'error',
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-describe-callback.md
    'jest/valid-describe-callback': 'error',
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-expect-in-promise.md
    'jest/valid-expect-in-promise': 'error',
    // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-title.md
    'jest/valid-title': [
      'error',
      {
        mustNotMatch: {
          it: [/^(Should|A request|Correctly).*/i.source, "Tests titles must not start with should, a request or correctly"],
        },
        mustMatch: {
          it: [/^[A-Z].*/.source, "Test titles must start with an uppercase letter"]
        },
      },
    ],
  },
};
