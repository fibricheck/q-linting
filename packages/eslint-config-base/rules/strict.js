export default {
  meta: {
    name: 'eslint-plugin-fibricheck-base/strict'
  },
  rules: {
    // babel inserts `'use strict';` for us
    strict: ["error", "never"],
  },
};
