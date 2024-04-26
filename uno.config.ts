// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetUno,
  presetMini,
  presetTypography
 } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
    presetMini(),
    presetTypography(),
  ],
})
