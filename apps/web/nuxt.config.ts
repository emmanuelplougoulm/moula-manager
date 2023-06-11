import svgLoader from 'vite-svg-loader';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/fonts.css', '~/assets/css/theme-variables.css', '~/assets/css/global.css'],
  modules: ['@pinia/nuxt', '@nuxtjs/i18n'],
  i18n: {
    defaultLocale: 'fr',
    langDir: 'locales',
    locales: [
      {
        code: 'en',
        file: 'en.json'
      },
      {
        code: 'fr',
        file: 'fr.json'
      }
    ],
    lazy: true
  },
  imports: {
    dirs: ['./stores']
  },
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate']
  },
  vite: {
    plugins: [svgLoader()]
  }
});
