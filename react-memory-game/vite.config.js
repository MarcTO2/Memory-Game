// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Add this section to the config
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',
  },
})
