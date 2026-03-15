/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	safelist: [
		"col-span-1", "col-span-2", "col-span-3", "col-span-4",
		"col-span-5", "col-span-6", "col-span-7", "col-span-8",
		"row-span-1", "row-span-2", "row-span-3", "row-span-4",
		"row-span-5", "row-span-6", "row-span-7", "row-span-8",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#FDE68A",
					foreground: "#3F2D00",
				},
				accent: {
					DEFAULT: "#FCA5A5",
					foreground: "#4A1111",
				},
			},
		},
	},
	plugins: [],
	darkMode: 'class'
};
