/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	presets: [
	  require('Prodkt-Themes')
	],
	theme: {
		fontFamily: {
		  sans: ['abu-dhabi', 'sans-serif'],
		  serif: ['Merriweather', 'serif'],
		},
		extend: {},
	},safelist: [
		{
		  pattern: /.*/,
		},
	  ],
	plugins: [require("Prodkt-Themes")],
}
