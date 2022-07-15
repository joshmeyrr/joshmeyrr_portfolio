module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	important: true,
	theme: {
		extend: {
			boxShadow: {
				custom: '0px 0px 11px 3px #F69E7B',
				neumorphic: '7px 7px 14px #161922, -7px -7px 14px #5a638a',
				'neumorphic-inset':
					'inset 7px 7px 14px #161922, inset -7px -7px 14px #5a638a',
				material:
					'0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
			},
		},
		colors: {
			primary: '#EEDAD1',
			secondary: '#383E56',
			cta: '#F69E7B',
			dark: '#262A3A',
			glass: 'rgba(255, 255, 255, 0.15)',
			'instagram-heart': '#fb3958',
		},
		fontFamily: {
			header: ['brandon-grotesque', 'sans-serif'],
			body: ['Open Sans', 'sans-serif'],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
