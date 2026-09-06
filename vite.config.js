import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Repo is "nguyenhau442001.github.io" — a GitHub Pages USER page served at
// the root https://nguyenhau442001.github.io/, so base must be '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
