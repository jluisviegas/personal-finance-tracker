/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{jsx, js}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '1080px',
			xl: '1440px',
		},
		extend: {},
	},
	plugins: [],
};
