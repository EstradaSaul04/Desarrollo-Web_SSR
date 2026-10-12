// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  server: {
    port: 5173,
    strictPort: true,
  },
  build: {
    manifest: true,
    outDir: 'public/dist',
    rollupOptions: {
      input: resolve(__dirname, 'src/main.js'),
    },
  },
});