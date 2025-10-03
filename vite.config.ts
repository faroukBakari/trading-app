import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    // middlewareMode: true, // Removed to avoid "cannot print server URLs in middleware mode" error
  },
  plugins: [
    vue(),
    vueDevTools(),
    {
      name: 'custom-404-logger',
      configureServer(devServer) {
        devServer.middlewares.use((req, res, next) => {
          res.on('finish', () => {
            if (res.statusCode === 404) {
              console.warn(`404: ${req.originalUrl}`);
            }
          });
          next();
        });
      }
    }
  ]
})
