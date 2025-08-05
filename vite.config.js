import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // This works for any repository name
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})