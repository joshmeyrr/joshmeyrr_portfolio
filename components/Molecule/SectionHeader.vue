<template>
	<div>
		<h1 class="text-center">{{ header }}</h1>
		<h2
			v-if="subheader"
			class="px-10 mt-4 text-xl font-normal text-center font-body"
		>
			{{ subheader }}
		</h2>
	</div>
</template>
<script>
export default {
	props: {
		header: String,
		subheader: String,
	},
}
</script>
<style lang="">
</style>
