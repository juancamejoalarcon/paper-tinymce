import { resolve } from 'path'
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  plugins: [svelte({emitCss: false}), cssInjectedByJsPlugin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
    copyPublicDir: false,
    outDir: '.',
    lib: {
      entry: resolve(__dirname, 'src/PaperTinymce.ts'),
      name: 'Paper TinyMCE',
      fileName: (format, entryName) => {
        if (format === 'umd') {
          return 'paper-tinymce.umd.js'
        } else {
          return 'paper-tinymce.js'
        }
      },
    },
  },
})

