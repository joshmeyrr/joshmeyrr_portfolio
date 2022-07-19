<template>
	<div class="min-h-screen">
		<div class="flex justify-center" :class="{ 'bg-dark shadow-custom': true }">
			<NavBar class="fixed z-50 w-full container-site" />
		</div>
		<Nuxt class="container-site" />
		<Footer class="container-site" />

		<CookieConsent />
	</div>
</template>
<script>
export default {
	data() {
		return {
			scrollPosition: null,
		}
	},
	methods: {
		updateScroll() {
			this.scrollPosition = window.scrollY
		},
	},
	mounted() {
		window.addEventListener('scroll', this.updateScroll)
	},
}
</script>

<style></style>
