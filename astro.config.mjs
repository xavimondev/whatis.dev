import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import svelte from '@astrojs/svelte'
import vercel from '@astrojs/vercel/static'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte()],
  adapter: vercel({
    analytics: true
  })
})
