module.exports = {
  extends: ['@qompium/eslint-config-q-base'],
  rules: {
    // For the node service we use the console to log.
    // We should switch to a good logging library.
    // But in the meantime we keep this rule disabled.
    'no-console': 'off',
  },
};
