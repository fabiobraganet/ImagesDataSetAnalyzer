import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
  },
  server: {
    port: 3001,
    strictPort: true, 
    hmr: {
      overlay: false, 
    },
  },
});
