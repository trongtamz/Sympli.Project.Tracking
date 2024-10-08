import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  define: {
    global: 'window',
  },
  server: {
    open: true,
    host: 'localhost',
    port: 3000,
  },
});
