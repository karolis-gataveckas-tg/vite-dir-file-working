import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-refresh'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        dir: null,
        file: path.resolve('./dist', 'bundle.js'),
        format: 'iife',
      }
    }
  }
})
