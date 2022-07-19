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
		<div
			class="
				h-[25rem]
				w-[20rem]
				bg-dark
				rounded
				mt-[-5rem]
				shadow-custom
				relative
				z-10
			"
		></div>
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
