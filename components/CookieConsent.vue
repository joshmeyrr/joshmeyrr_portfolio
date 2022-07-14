<template>
	<div
		v-if="isOpen"
		class="
			fixed
			bottom-0
			left-0
			items-center
			justify-center
			w-full
			py-4
			px-8
			bg-dark
			shadow-custom
			lg:flex
			bg-primary-light
			cookie
		"
	>
		<div class="flex items-center justify-center gap-8">
			<p class="max-w-sm">We use basic cookies to optimize performance.</p>
			<div class="flex justify-between">
				<!-- <button
					class="ml-2 bg-yellow text-primary btn button md:ml-0"
					@click="accept"
				>
					Yes
				</button> -->
				<button class="ml-8 text-cta" @click="deny">
					<font-awesome-icon
						class="w-8 h-auto text-cta"
						icon="fa-solid fa-rectangle-xmark"
					/>
				</button>
			</div>
		</div>
	</div>
</template>
<script>
import { bootstrap } from 'vue-gtag'
export default {
	data() {
		return {
			isOpen: false,
		}
	},
	created() {
		if (!this.getGDPR() === true) {
			this.isOpen = true
		}
	},
	methods: {
		getGDPR() {
			if (process.browser) {
				return localStorage.getItem('GDPR:accepted', true)
			}
		},
		deny() {
			if (process.browser) {
				this.isOpen = false
				localStorage.setItem('GDPR:accepted', false)
			}
		},
		accept() {
			if (process.browser) {
				bootstrap().then((gtag) => {
					this.isOpen = false
					localStorage.setItem('GDPR:accepted', true)
					location.reload()
				})
			}
		},
	},
}
</script>
<style lang="scss">
.cookie {
	z-index: 99;
}
</style>
