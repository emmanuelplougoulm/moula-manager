module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    es2021: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['sonarjs', 'no-secrets', 'security'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:sonarjs/recommended',
    'plugin:security/recommended',
    'turbo',
    'prettier'
    // // prettier should remain at the end of the array to avoid conflicts
  ]
};
