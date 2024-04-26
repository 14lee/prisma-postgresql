// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@nuxt/eslint',
    '@nuxtjs/color-mode',
    '@nuxt/ui',
    '@nuxt/content'
  ],
  colorMode: {
      preference: 'system', // default value of $colorMode.preference
      fallback: 'light', // fallback value if not system preference found
      classSuffix: '-theme-mode',
      storageKey: 'nuxt-color-mode'
  },
  eslint: {
    config: {
      stylistic: true
    }
  },
  devtools: { enabled: true }
})
