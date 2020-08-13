module.exports = {
  env: {
    es6: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
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
    'react-hooks',
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {extensions: [ '.jsx', '.js'] }
    ],
    'import/prefer-default-export': 'off',
    'react/state-in-constructor': 'off',
    'react-hooks/rules-of-hooks':'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/static-property-placement': 'off',
    'react/jsx-props-no-spreading':'off'
  },
};
