import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
	base: '/',

	plugins: [
		tailwindcss(), react(),
	],

	build: {
		outDir: './dist',
	},

	publicDir: './src/public',

	server: {
		allowedHosts: [
			'puv.puv.pm',
			'puv.pm'
		],
		port: 80
	},
});