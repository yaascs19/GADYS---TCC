import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@react-oauth/google'],
  },
  server: {
    host: true,
    middlewareMode: false,
    fs: {
      allow: ['..'],
    },
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false
      }
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    }
  }
})