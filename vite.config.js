import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 ADD THIS BASE OPTION!
export default defineConfig({
  base: "/Workflowz/",
  plugins: [react()],
})
