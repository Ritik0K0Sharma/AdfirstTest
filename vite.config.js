// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()], 
   // Add React plugin
  server: {
    allowedHosts: ['.ngrok-free.app']
     // Allow ngrok access
  }
});

