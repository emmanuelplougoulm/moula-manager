module.exports = {
  root: true,
  extends: [
    'custom',
    'prettier'
    // prettier should remain at the end of the array to avoid conflicts
  ],
  settings: {
    next: {
      rootDir: ['apps/*/']
    }
  }
};
