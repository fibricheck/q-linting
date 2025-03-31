import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import eslintPlugin from 'eslint-plugin-eslint-plugin'
import nodePlugin from 'eslint-plugin-n'

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"] },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: {...globals.browser, ...globals.node} } },
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
  
  eslintPlugin.configs['flat/recommended'],
  {
    rules: { 'eslint-plugin/require-meta-docs-description': 'error' }
  },

  nodePlugin.configs['flat/recommended'], 
  {
    rules: {
      'n/exports-style': ["error", "exports"]
    }
  }, 
  
]);