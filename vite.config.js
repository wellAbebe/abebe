import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude:['**/*.PNG'],
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Listen on all network interfaces
    port: process.env.VITE_PORT ? Number(process.env.VITE_PORT) : 3000,  // Default to 3000 if VITE_PORT is undefined
  },
});
