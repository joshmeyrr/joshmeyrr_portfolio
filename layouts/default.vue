<template>
	<div class="min-h-screen">
		<div
			class="fixed z-50 flex justify-center w-full transition-all"
			:class="{ 'bg-dark shadow-custom': scrollPosition > 50 }"
		>
			<NavBar class="w-full container-site" />
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
