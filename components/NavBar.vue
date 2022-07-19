<template>
	<div class="px-8 py-4">
		<div class="relative z-50 flex items-center justify-between">
			<nuxt-link class="text-secondary" to="/" @click.native="closeNav()">
				<nuxt-img
					format="webp"
					sizes="sm:100vw md:50vw lg:1200px"
					class="w-auto h-14"
					src="/logo.png"
					alt="Logo"
				/>
			</nuxt-link>
			<div class="" @click="toggleNav()">
				<AtomHamburgerIcon :is-nav-active="isNavActive" />
			</div>
		</div>
		<transition name="fade">
			<div
				v-if="isNavActive"
				class="
					fixed
					top-0
					left-0
					z-40
					flex
					items-center
					justify-center
					w-screen
					h-screen
					bg-primary
				"
				@click="closeNav()"
			>
				<ul
					class="
						flex flex-col
						items-center
						gap-8
						text-2xl
						font-black
						uppercase
						nav-link-parent
					"
				>
					<li class="nav-link" @click="closeNav()">
						<nuxt-link class="text-secondary" to="/"> Home </nuxt-link>
					</li>
					<li class="nav-link" @click="closeNav()">
						<nuxt-link class="text-secondary" to="/connect"> Connect </nuxt-link>
					</li>
					<li class="nav-link" @click="closeNav()">
						<nuxt-link class="text-secondary" to="/library">
							Component Library
						</nuxt-link>
					</li>
				</ul>
			</div>
		</transition>
	</div>
</template>
<script>
export default {
	data() {
		return {
			isNavActive: false,
		}
	},
	watch: {
		isNavActive() {
			if (this.isNavActive) {
				document.documentElement.style.overflow = 'hidden'
				return
			}

			document.documentElement.style.overflow = 'auto'
		},
	},
	methods: {
		toggleNav() {
			this.isNavActive = !this.isNavActive
		},
		closeNav() {
			this.isNavActive = false
		},
	},
}
</script>
<style lang="scss">
@for $i from 1 to 4 {
	.nav-link-parent li:nth-child(#{$i}) {
		animation-delay: $i * 200ms;
	}
}

.nav-link {
	transform: translateY(1rem);
	opacity: 0;
	animation: link-fade 1s both ease-in-out;
}

@keyframes link-fade {
	from {
		opacity: 0;
		transform: translateY(2rem);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
</style>
