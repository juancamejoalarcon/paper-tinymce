import path from 'path';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),
  vite: {
    resolve: {
      alias: {
        // these are the aliases and paths to them
        '@': path.resolve('./src'),
      }
    }
  }
}