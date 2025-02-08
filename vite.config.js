import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Mapendo-3D-portfio-website/', 
  build: {
    outDir: 'dist', 
    rollupOptions: {
      input: 'index.html' 
    }
  }
})
