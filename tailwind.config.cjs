const { withAnimations } = require('animated-tailwindcss')
/** @type {import('tailwindcss').Config} */
module.exports = withAnimations({
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {}
	},
	plugins: []
})
