import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		strictPort: true,
		port: 8000,
		open: true,
	},
	preview: {
		port: 8000,
		open: true,
	},
	build: {
		outDir: './build'
	},

})
