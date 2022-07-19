<template>
	<article>
		<ul>
			<li v-for="link of article.toc" :key="link.id">
				<NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
			</li>
		</ul>
		<nuxt-content :document="article" />
	</article>
</template>
<script>
export default {
	async asyncData({ $content, params }) {
		const article = await $content('articles', params.slug).fetch()

		return { article }
	},
}
</script>
<style lang="scss">
</style>
