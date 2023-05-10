/** @type {import('tailwindcss').Config} */

const colorVariable = require('@mertasan/tailwindcss-variables/colorVariable')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	presets: [
	  require('Prodkt-Tokens-Radix')
	],
	theme: {
		fontFamily: {
		  sans: ['abu-dhabi', 'sans-serif'],
		  serif: ['Merriweather', 'serif'],
		},
		extend: {},
	},
	corePlugins: {
	  preflight: false,
	},
	plugins: [require("Prodkt-Tokens-Radix"), require('@mertasan/tailwindcss-variables')({
		colorVariables: true
	  }), require('./prodkt-colorVariables.cjs')({
		colorVariables: true
	  }), require('tailwind-css-variables')(
		{
		colors: 'color',
		screens: 'screen',
		fontFamily: 'font',
		fontSize: 'text',
		fontWeight: 'font',
		lineHeight: 'leading',
		letterSpacing: 'tracking',
		backgroundSize: 'bg',
		borderWidth: 'border',
		borderRadius: 'rounded',
		width: 'w',
		height: 'h',
		minWidth: 'min-w',
		minHeight: 'min-h',
		maxWidth: 'max-w',
		maxHeight: 'max-h',
		padding: 'p',
		margin: 'm',
		boxShadow: 'shadows',
		zIndex: 'z',
		opacity: 'opacity',
		},
		{
		  // options
		}
	  )],
}
