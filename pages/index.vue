<template>
	<div class="flex flex-col items-center justify-center">
		<div class="relative flex items-center justify-center w-full max-w-lg px-4">
			<!-- card -->
			<div
				class="relative z-10 w-full p-4 rounded bg-glass blur-glass shadow-custom"
			>
				<!-- <h2>Here is the card</h2> -->
				<ul class="flex flex-col gap-2 fade-links">
					<li class="fade-in-link">
						<a
							class="flex items-center gap-2 btn"
							href="mailto:joshmeyrr@gmail.com"
						>
							<font-awesome-icon
								class="w-8 h-auto text-cta"
								icon="fa-solid fa-envelope-circle-check"
							/><span>email</span>
						</a>
					</li>
					<li class="fade-in-link">
						<a
							class="flex items-center gap-2 btn"
							href="https://github.com/joshmeyrr"
							target="_blank"
						>
							<font-awesome-icon
								class="w-8 h-auto text-cta"
								icon="fa-brands fa-github"
							/><span>github</span>
						</a>
					</li>
					<li class="fade-in-link">
						<a
							class="flex items-center gap-2 btn"
							href="https://twitter.com/joshmeyrr"
							target="_blank"
						>
							<font-awesome-icon
								class="w-8 h-auto text-cta"
								icon="fa-brands fa-twitter"
							/><span>twitter</span>
						</a>
					</li>
					<li class="fade-in-link">
						<a
							class="flex items-center gap-2 btn"
							href="https://partner.canva.com/kj3D5n"
							target="_blank"
						>
							<font-awesome-icon
								class="w-8 h-auto text-cta"
								icon="fa-solid fa-object-group"
							/><span>canva pro free trial</span>
						</a>
					</li>
					<li class="fade-in-link">
						<a
							class="flex items-center gap-2 btn bg-cta"
							href="https://www.buymeacoffee.com/joshmeyrr"
							target="_blank"
						>
							<font-awesome-icon
								class="w-8 h-auto text-primary"
								icon="fa-solid fa-coffee"
							/><span class="text-dark">buy me a coffee</span>
						</a>
					</li>
				</ul>
			</div>
			<nuxt-img
				format="webp"
				sizes="sm:100vw md:50vw lg:1200px"
				class="absolute object-cover w-auto image-size"
				src="/bg-transparent.png"
				alt="Logo"
			/>
		</div>
	</div>
</template>

<script>
export default {
	name: 'IndexPage',
}
</script>
<style lang="scss">
@for $i from 1 to 6 {
	.fade-links li:nth-child(#{$i}) {
		animation-delay: $i * 200ms;
	}
}

.blur-glass {
	backdrop-filter: blur(5px);
}

.image-size {
	height: 25rem;
}

.fade-in-link {
	transform: translateY(0.25rem);
	opacity: 0;
	// visibility: hidden;
	animation: fade-in 0.5s both ease-in-out;
}

@keyframes fade-in {
	from {
		transform: translateY(0.25rem);
		opacity: 0;
		// visibility: visible;
	}

	to {
		transform: translateY(0);
		opacity: 1;
		// visibility: visible;
	}
}
</style>
