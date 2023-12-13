/* eslint-disable turbo/no-undeclared-env-vars */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/color-mode', '@pinia/nuxt'],
  css: ['~/assets/css/globals.css', '~/assets/css/theme.css'],
  runtimeConfig: {
    public: {
    }
  },
  devtools: { enabled: true },
})

