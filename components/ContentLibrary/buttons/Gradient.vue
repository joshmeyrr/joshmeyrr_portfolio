<template>
	<div class="flex items-center justify-center w-card-width">
		<button
			class="px-6 py-4 text-4xl font-black tracking-widest uppercase rounded  font-header bg-secondary button-border"
		>
			welcome
		</button>
	</div>
</template>
<script>
export default {}
</script>
<style scoped lang="css">
@property --angle {
	syntax: '<angle>';
	initial-value: 0deg;
	inherits: false;
}
@keyframes rotate {
	to {
		--angle: 360deg;
	}
}
.button-border {
	--angle: 0deg;
	border: 10px solid;
	border-image: linear-gradient(var(--angle), #f69e7b, #743ad5) 1;
	animation: 5s rotate linear infinite;
}
</style>
