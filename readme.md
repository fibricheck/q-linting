# @qompium/eslint-config

This project provides the ESLint configuration used within Qompium.

The configuration is published as 3 packages:

* `@qompium/eslint-config-q-base`: Collection of plugins/rules shared between all projects
* `@qompium/eslint-config-q-node`: Extending on the `-base` package with node specific plugins/rules 
* `@qompium/eslint-config-q-react`: Extending on the `-base` package with react specific plugins/rules

# Usage

## React projects

Add the following lines to your react project its `package.json`:
```json
{
  "devDependencies": {
    "@qompium/eslint-config-q-react": "^1.2.1",
    "eslint": "^7.3.1"
  },
  "scripts": {
    "lint": "eslint src/*"
  }
}
```

Add a `.eslintrc.js` file with the following content:
```js
module.exports = {
  extends: ['@qompium/eslint-config-q-react'],
  rules: {
    // Custom project rules come here, if required
  }
};
```
This will configure eslint to use the custom configuration.

## Node projects

Add the following lines to your node project its `package.json`:
```json
{
  "devDependencies": {
    "@qompium/eslint-config-q-node": "^1.2.1",
    "eslint": "^7.3.1"
  },
  "scripts": {
    "lint": "eslint src/*"
  }
}
```

Add a `.eslintrc.js` file with the following content:
```js
module.exports = {
  extends: ['@qompium/eslint-config-q-node'],
  rules: {
    // Custom project rules come here, if required
  }
};
```
This will configure eslint to use the custom configuration.

### Linting test files
Most projects include a `tests/` folder also including `.ts` files. These files are not part of the transpiled package/application so are not included in the `tsconfig.json` file. To include these files in the linting process a `tsconfig.eslint.json` file should be created with the following content:
```json
{
  "extends": "./tsconfig.json",
  "include": [
    "src/**/*.ts",
    "test/**/*.ts"
  ]
}
```

and the following lines should be included in `.eslintrc.js`:
```
  parserOptions: {
    project: './tsconfig.eslint.json'
  },
```

The `package.json` script can be updated as well:
```
  "lint": "eslint src/*  tests/*"
```

## VS Code integration

Install the `dbaeumer.vscode-eslint` to integrate eslint into VS Code. You'll be able to see eslint errors in the code as you edit files and run suggested actions on those warnings.

Add:
```json
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
```
to your VS Code settings to fix all automatically fixable errors as you save the file you're editing.

# Setup

This is a monorepo manged with Lerna. Install monorepo dependencies by running:
```
yarn install
```

Install the sub package dependencies by running:
``` 
yarn lerna bootstrap
```

# Publishing
The versions included in this project are all set to `0.0.0` to indicate they will be overridden by Lerna. Lerna links the packages together and publish them with the same version number.