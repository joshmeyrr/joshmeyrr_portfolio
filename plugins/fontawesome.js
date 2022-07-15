import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
	fas,
	faSquarePhoneFlip,
	faEnvelopeCircleCheck,
	faCoffee,
	faObjectGroup,
	faRectangleXmark,
	faStar,
	faBars,
	faX
} from '@fortawesome/free-solid-svg-icons'
import {
	faFacebook,
	faInstagramSquare,
	faGithub,
	faLinkedin,
	faTwitter
} from '@fortawesome/free-brands-svg-icons'

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(
	fas,
	faFacebook,
	faInstagramSquare,
	faGithub,
	faLinkedin,
	faSquarePhoneFlip,
	faEnvelopeCircleCheck,
	faTwitter,
	faCoffee,
	faObjectGroup,
	faRectangleXmark,
	faStar,
	faBars,
	faX
)

// Register the component globally
Vue.component('FontAwesomeIcon', FontAwesomeIcon)
