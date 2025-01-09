import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/static/' : '/', // Use '/static/' only in production
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]', // Ensure assets are placed in the assets directory
      },
    },
  },
}));
