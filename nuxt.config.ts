// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@nuxt/eslint',
    '@nuxtjs/color-mode',
    '@nuxt/ui',
    '@nuxt/content',
    'nuxt-icon'
  ],
  css: ['~/assets/css/index.css'],
  colorMode: {
    classSuffix: '',
  },
  eslint: {
    config: {
      stylistic: true
    }
  },
  sourcemap: {
    server: true,
    client: true
  },
  devtools: { enabled: true }
})
