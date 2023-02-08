import { resolve } from 'path'
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/paper-tinymce/dist/',
  plugins: [svelte()],
  build: {
    copyPublicDir: false,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/plugin/PaperTinyMCE.ts'),
      name: 'Paper TinyMCE',
      // the proper extensions will be added
      fileName: 'paper-tinymce',
    },
    // rollupOptions: {}
  },
})
