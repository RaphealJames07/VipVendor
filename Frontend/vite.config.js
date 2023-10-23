// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy API requests to the backend server
      '/e-gadget': {
        target: 'https://e-gadget.onrender.com', // Backend server URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/e-gadget/, ''),
      },
    },
  },
});