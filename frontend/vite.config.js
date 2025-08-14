import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// Check if the app is running in production
const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    cors: {
      origin: isProduction
        ? 'https://www.example.com'
        : 'http://localhost:3000',
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: '*',
    },
    proxy: {
      '/api': {
        target: isProduction
          ? 'https://api.example.com'
          : 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Adjust path if needed
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Customize chunk splitting if needed
          vendor: ['react', 'react-dom'],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
  // NOTE: In Vite, this config file runs in Node.js, so process.env.NODE_ENV works here.
  // But in your frontend (React) code, process.env is NOT available because it runs in the browser.
  // For frontend checks, use `import.meta.env.MODE` or `import.meta.env.PROD` instead.
});
