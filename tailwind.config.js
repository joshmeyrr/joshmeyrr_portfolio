module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	important: true,
	theme: {
		extend: {
			boxShadow: {
				custom: '0px 0px 11px 3px #F69E7B'
			}
		},
		colors: {
			primary: '#EEDAD1',
			secondary: '#383E56',
			cta: '#F69E7B',
			dark: '#262A3A',
			glass: 'rgba(255, 255, 255, 0.15)'
		},
		fontFamily: {
			header: ['brandon-grotesque', 'sans-serif'],
			body: ['Open Sans', 'sans-serif']
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
}
