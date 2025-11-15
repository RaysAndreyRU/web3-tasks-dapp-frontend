import { resolve } from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@src': resolve(__dirname, './src')
    }
  },
  build: {
    assetsInlineLimit: 0 // Ensures that all assets are not inlined and are emitted as separate files.
  },
  plugins: [react(), svgr(), tailwindcss()]
})
