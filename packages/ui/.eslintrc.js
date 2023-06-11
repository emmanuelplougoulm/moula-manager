module.exports = {
  root: true,
  extends: [
    'custom',
    'plugin:nuxt/recommended',
    'plugin:vue/recommended',
    'plugin:vue/strongly-recommended'
  ],
  rules: {
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': 'off',
    'vue/no-v-model-argument': 'off'
  }
};
