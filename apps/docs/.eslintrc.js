module.exports = {
  root: true,
  extends: ['custom', 'plugin:storybook/recommended'],
  rules: {
    'storybook/no-uninstalled-addons': ['warn', { packageJsonLocation: './apps/docs/package.json' }]
  }
};
