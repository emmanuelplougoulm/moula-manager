/// <reference types="vitest" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import SvgLoader from 'vite-svg-loader';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom'
  },
  plugins: [vue(), SvgLoader()]
});
