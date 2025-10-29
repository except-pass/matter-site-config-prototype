import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/matter-site-config-prototype/',
  server: {
    port: 4000,
    host: true
  }
})