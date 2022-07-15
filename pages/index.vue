<template>
	<div class="flex flex-col items-center justify-center">
		<div class="relative flex items-center justify-center w-full max-w-lg px-4">
			<!-- card -->
			<OrganismLinkCard />
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
</style>
