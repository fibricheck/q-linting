import globals from "globals";
import tseslint from "typescript-eslint";

import bestPracticesConfig from "./base/best-practices";
import errorsConfig from "./base/errors";
import es6Config from "./base/es6";
import importsConfig from "./base/imports";
import nodeConfig from "./base/node";
import strictConfig from "./base/strict";
import styleConfig from "./base/style";
import variablesConfig from "./base/variables";

export default tseslint.config(
  bestPracticesConfig,
  errorsConfig,
  es6Config,
  importsConfig,
  nodeConfig,
  strictConfig,
  styleConfig,
  variablesConfig,
  tseslint.configs.recommended,
  {
    extends: [tseslint.configs.recommended],
    rules: {
      "@typescript-eslint/no-useless-constructor": ["error"],
      "@typescript-eslint/no-use-before-define": [
        "error",
        { functions: false, classes: false, variables: true },
      ],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "after-used",
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-shadow": ["error"],
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/member-delimiter-style": [
        "error",
        {
          multiline: {
            delimiter: "semi",
            requireLast: true,
          },
          singleline: {
            delimiter: "semi",
            requireLast: true,
          },
        },
      ],
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2015,
        ...globals.jest,
      },
    },
    rules: {
      "import/extensions": "off",
      "import/no-unresolved": "off",
      "import/prefer-default-export": "off",
      "import/no-dynamic-require": "off",
      "eslint-comments/no-unused-disable": "error",
      "operator-linebreak": ["error", "after"],
      "global-require": "off",
      "max-len": [
        "error",
        {
          code: 150,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        },
      ],
      "arrow-parens": ["error", "as-needed"],
      "comma-dangle": [
        "error",
        {
          arrays: "always-multiline",
          objects: "always-multiline",
          imports: "always-multiline",
          exports: "always-multiline",
          functions: "never",
        },
      ],
      "function-paren-newline": ["error", "multiline-arguments"],
      "object-curly-newline": ["error", { consistent: true }],
      "linebreak-style": "off",
      "no-restricted-globals": "off",
      "no-await-in-loop": "off",
      "no-return-await": "off",
      "no-continue": "off",
      "no-use-before-define": "off",
      "no-unused-vars": "off",
      "no-shadow": "off",
      "no-unsafe-optional-chaining": "off",
      "no-nonoctal-decimal-escape": "off",
      "no-restricted-syntax": [
        "error",
        {
          selector: "ForInStatement",
          message:
            "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
        },
        {
          selector: "LabeledStatement",
          message:
            "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
        },
        {
          selector: "WithStatement",
          message:
            "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
        },
      ],
      "no-useless-constructor": "off",
      "no-void": ["error", { allowAsStatement: true }],
    },
  }
);
