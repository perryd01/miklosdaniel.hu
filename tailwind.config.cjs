/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				app: {
					yellow: '#e5ff00',
					background: '#1A202C',
					secondary: '#3B4A67',
					primary: '#F6AE2D'
				}
			}
		}
	},
	plugins: []
};
