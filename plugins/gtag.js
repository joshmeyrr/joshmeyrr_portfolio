import Vue from 'vue'
import VueGtag from 'vue-gtag'

// const getGDPR = localStorage.getItem('GDPR:accepted')

Vue.use(VueGtag, {
	// config: { id: 'G-EDYH2TPVTD' },
	bootstrap: true,
	enabled: true
})

// Vue.use(VueGtag, {
//     config: { id: 'G-5TXNEP3D5S' },
//     // bootstrap: false,
//     // enabled: true,
//     bootstrap: getGDPR === 'true',
//     enabled: getGDPR === 'true',
// });
