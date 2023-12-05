// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/color-mode', '@pinia/nuxt', '@nuxt/ui'],
  css: ['~/assets/css/globals.css', '~/assets/css/theme.css'],
  devtools: { enabled: true }
})

