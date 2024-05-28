/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				blue: {
					1: '#162154',
					2: '#375c9d',
					3: '#267fe0',
					4: "#f2f8ff",
				},
				cyan: {
					1: "#34d6ff",
				},
				gray: {
					1: '#2c262e',
					2: '#4d5054',
					3: '#d7d7d9',
				},
			},
		},
	},
	plugins: [],
}
