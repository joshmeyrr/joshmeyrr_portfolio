<template>
	<div class="min-h-screen flex items-center flex-col px-4">
		<div class="w-full relative flex items-center justify-center mt-16 max-w-lg">
			<!-- card -->
			<div
				class="bg-glass w-full rounded blur-glass p-4 relative z-10 shadow-custom"
			>
				<!-- <h2>Here is the card</h2> -->
				<ul class="flex flex-col gap-2">
					<li>
						<a class="flex items-center gap-2 btn" href="mailto:joshmeyrr@gmail.com">
							<font-awesome-icon
								class="h-8 w-auto text-cta"
								icon="fa-solid fa-envelope-circle-check"
							/><span>email</span>
						</a>
					</li>
					<li>
						<a
							class="flex items-center gap-2 btn"
							href="https://github.com/joshmeyrr"
							target="_blank"
						>
							<font-awesome-icon
								class="h-8 w-auto text-cta"
								icon="fa-brands fa-github"
							/><span>github</span>
						</a>
					</li>
					<li>
						<a
							class="flex items-center gap-2 btn"
							href="https://twitter.com/joshmeyrr"
							target="_blank"
						>
							<font-awesome-icon
								class="h-8 w-auto text-cta"
								icon="fa-brands fa-twitter"
							/><span>twitter</span>
						</a>
					</li>
					<li>
						<a
							class="flex items-center gap-2 btn"
							href="https://partner.canva.com/kj3D5n"
							target="_blank"
						>
							<font-awesome-icon
								class="h-8 w-auto text-cta"
								icon="fa-solid fa-object-group"
							/><span>canva pro free trial</span>
						</a>
					</li>
					<li>
						<a
							class="flex items-center gap-2 btn bg-cta"
							href="https://www.buymeacoffee.com/joshmeyrr"
							target="_blank"
						>
							<font-awesome-icon
								class="h-8 w-auto text-primary"
								icon="fa-solid fa-coffee"
							/><span class="text-dark">buy me a coffee</span>
						</a>
					</li>
				</ul>
			</div>
			<nuxt-img
				format="webp"
				sizes="sm:100vw md:50vw lg:1200px"
				class="object-cover w-auto absolute"
				src="/background.png"
				alt="Logo"
			/>
		</div>
	</div>
</template>

    // "@fortawesome/fontawesome-svg-core": "^6.1.1",
    // "@fortawesome/free-brands-svg-icons": "^6.1.1",
    // "@fortawesome/free-solid-svg-icons": "^6.1.1",
    // "@fortawesome/vue-fontawesome": "^2.0.6",

<script>
export default {
	name: 'IndexPage',
}
</script>
<style lang="scss">
.blur-glass {
	backdrop-filter: blur(3px);
}
</style>
