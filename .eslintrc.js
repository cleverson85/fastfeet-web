module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
    'react-hooks'
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension':[
      'warn',
      { extensions: ['.jsx', '.js'] }
    ],
    'import/prefer-default-export': 'off',
    'no-console': ["error", { allow: ['tron'] }],
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    "no-unused-vars": 'off',
    "react/jsx-one-expression-per-line": 'off',
    "global-require": 'off',
    'no-param-reassign': 'off',
    'react-native/no-raw-text': 'off',
    'react/prefer-stateless-function': 'off',
    'react/prop-types': 'off',
    "no-underscore-dangle": 'off',
    camelcase: 'off',
    'react/jsx-props-no-spreading': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'jsx-a11y/label-has-associated-control': 'off'
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: 'src'
      },
    },
  },
};
