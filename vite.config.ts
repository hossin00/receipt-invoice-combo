import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  base: '/receipt-invoice-combo/',
  build: { outDir: 'dist' }
})
