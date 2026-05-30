import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
plugins: [react()],
base: '/FUTURE_FS_01/',

build: {
outDir: 'dist',
sourcemap: false,
minify: 'terser',
},

server: {
port: 3000,
open: true,
},
})
