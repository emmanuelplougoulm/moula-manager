module.exports = {
  root: true,
  extends: ['custom', 'plugin:vue/vue3-strongly-recommended'],
  rules: {
    'vue/multi-word-component-names': 0,
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 20,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ]
  }
};
