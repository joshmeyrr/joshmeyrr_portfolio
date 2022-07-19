<template>
	<div class="flex flex-col items-center">
		<div
			class="
				image-overlay
				relative
				w-full
				h-[50vh]
				flex
				items-center
				justify-center
			"
		>
			<nuxt-img
				format="webp"
				sizes="sm:100vw md:50vw lg:1200px"
				class="object-cover w-full h-full"
				src="/components/image.png"
				alt="Logo"
			/>
			<MoleculeSectionHeader class="absolute z-10" :header="'@joshmeyrr'" />
		</div>
		<div class="px-4">
			<div
				class="
					flex flex-col
					md:flex-row
					mt-[-5rem]
					relative
					z-10
					rounded
					shadow-custom
					bg-dark
					md:max-w-[50rem]
					max-w-[20rem]
				"
			>
				<div class="w-full p-8 w/1-2">
					<h2>What can I do?</h2>
					<ul
						class="flex flex-col gap-4 mt-4 text-2xl font-black tracking-widest uppercase "
					>
						<li class="flex gap-4">
							<font-awesome-icon
								class="w-8 h-auto text-cta"
								icon="fa-solid fa-circle-check"
							/>
							<span>vue js</span>
						</li>
						<li class="flex gap-4">
							<font-awesome-icon
								class="w-8 h-auto text-cta"
								icon="fa-solid fa-circle-check"
							/>
							<span>React</span>
						</li>
						<li class="flex gap-4">
							<font-awesome-icon
								class="w-8 h-auto text-cta"
								icon="fa-solid fa-circle-check"
							/>
							<span>wordpress</span>
						</li>
						<li class="flex gap-4">
							<font-awesome-icon
								class="w-8 h-auto text-cta"
								icon="fa-solid fa-circle-check"
							/>
							<span>node</span>
						</li>
						<li class="flex gap-4">
							<font-awesome-icon
								class="w-8 h-auto text-cta"
								icon="fa-solid fa-circle-check"
							/>
							<span>Strapi</span>
						</li>
						<li class="flex gap-4">
							<font-awesome-icon
								class="w-8 h-auto text-cta"
								icon="fa-solid fa-circle-check"
							/>
							<span>PPC Ads</span>
						</li>
					</ul>
				</div>
				<div class="w-full p-8 w/1-2 bg-primary text-dark">
					<h2>Who am I?</h2>
					<p>
						My name is Josh, and I am a father, husband, and web developer. I love
						building web sites and web applications. I especially love working on the
						front end; playing with animations and the overall aesthetic.
					</p>
					<p class="mt-4">
						In my free time, I spend time with my son, wife, and our puppy Bacon. I
						also enjoy lifting weights, creating social media content, and expanding
						my d
					</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {}
</script>
<style lang="scss">
.image-overlay {
	&::after {
		content: '';
		position: absolute;
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.4);
		// z-index: 99;
	}
}
</style>
