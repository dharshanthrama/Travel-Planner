import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://indian-railway-irctc.p.rapidapi.com', // The external API base URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Rewrites '/api' to '' for the final URL
        secure: true,
      },
    },
  },
});
