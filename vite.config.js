import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "api": {
        target: "http://84.201.184.38:80",
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
})
