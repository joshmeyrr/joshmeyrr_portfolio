<template>
	<div>
		<MoleculeSectionHeader
			:header="'component library'"
			:subheader="'Hint: Tap on mobile to achieve hover effect.'"
		/>
		<div class="flex flex-wrap justify-center gap-8 py-16">
			<ContentLibraryCardsHoverActivate />
			<ContentLibraryCardsHoverGlassBadge />
			<ContentLibraryCardsImageBlur />
		</div>
	</div>
</template>
<script>
export default {}
</script>
<style lang=""></style>
