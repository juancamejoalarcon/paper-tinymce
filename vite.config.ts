import { resolve } from 'path'
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/paper-tinymce/dist/',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  plugins: [svelte()],
  build: {
    copyPublicDir: false,
    outDir: '.',
    lib: {
      entry: resolve(__dirname, 'src/plugin/PaperTinyMCE.ts'),
      name: 'Paper TinyMCE',
      fileName: (format, entryName) => {
        if (format === 'umd') {
          return 'paper-tinymce.umd.js'
        } else {
          return 'paper-tinymce.js'
        }
      },
    },
    // rollupOptions: {}
  },
})

