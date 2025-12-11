/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        // Die exakten Farben aus deinem React-Code
        'th-cyan': '#1baae0', 
        'th-dark': '#00182a',
        'th-grey': '#6d808f',
      },
      fontFamily: {
        // Der Name muss mit dem Google Font übereinstimmen
        sans: ['"Rethink Sans"', 'sans-serif'], 
      }
    },
	},
	plugins: [],
}