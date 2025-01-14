import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/ANMnotes/",
  server: {
    headers: {
      'Permissions-Policy': ''  // Empty to avoid setting any restrictions
    }
  }
})
