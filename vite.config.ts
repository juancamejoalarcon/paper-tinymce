import { resolve } from 'path'
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import nodePolyfills from 'vite-plugin-node-stdlib-browser';


const paperTinymceLib = {
  entry: resolve(__dirname, 'src/PaperTinymce.ts'),
  name: 'Paper TinyMCE',
  fileName: (format, entryName) => {
    if (format === 'umd') return 'paper-tinymce.umd.js'
    else return 'paper-tinymce.js'
  },
}

const viewerLib = {
  entry: resolve(__dirname, 'src/PaperTinymceViewer.ts'),
  name: 'Paper TinyMCE Viewer',
  fileName: (format, entryName) => {
    if (format === 'umd') return 'paper-tinymce-viewer.umd.js'
    else return 'paper-tinymce-viewer.js'
  },
}

const lib = process.env.LIB === 'viewer' ? viewerLib : paperTinymceLib

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  plugins: [svelte({emitCss: false}), cssInjectedByJsPlugin(), nodePolyfills()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
    copyPublicDir: false,
    outDir: '.',
    lib,
  },
})

