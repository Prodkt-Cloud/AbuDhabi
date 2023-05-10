/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const prodktDesignSystem = require('./src/styles/tailwind-variables.cjs');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	presets: [
		require('./src/styles/tailwind-variables.cjs'),
		require('Prodkt-Themes')
		],
	  darkMode: 'media', // or 'class'
	  theme: {
		fontFamily: {
		  sans: ['abu-dhabi', 'sans-serif'],
		  serif: ['Merriweather', 'serif'],
		},
		extend: { prodktDesignSystem },
	  },
		corePlugins: {
		  aspectRatio: true,
		},safelist: [
			{
			  pattern: /.*/,
			},
		  ],
		plugins: [
			require('Prodkt-Themes', '@tailwindcss/container-queries', '@tailwindcss/aspect-ratio', '@tailwindcss/line-clamp', '@tailwindcss/typography', '@tailwindcss/forms')],
	}