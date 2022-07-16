<template>
	<div class="card">
		<!-- <img class="card__media" src="/images/image.png" alt="" /> -->
		<nuxt-img
			format="webp"
			sizes="sm:100vw md:50vw lg:1200px"
			class="card__media"
			src="/components/image.png"
			alt="Logo"
		/>
		<div class="card__content">
			<div class="text-3xl font-black uppercase font-header">@JOSHMEYRR</div>
			<ul class="flex flex-col gap-2">
				<li class="font-black tracking-widest uppercase">
					<font-awesome-icon
						class="w-8 h-auto fa-icon"
						icon="fa-solid fa-envelope-circle-check"
					/><span>email</span>
				</li>
				<li class="font-black tracking-widest uppercase">
					<font-awesome-icon
						class="w-8 h-auto fa-icon"
						icon="fa-brands fa-github"
					/><span>github</span>
				</li>
				<li class="font-black tracking-widest uppercase">
					<font-awesome-icon
						class="w-8 h-auto fa-icon"
						icon="fa-brands fa-linkedin"
					/><span>linkedin</span>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {}
</script>
<style scoped lang="scss">
.fa-icon {
	transition: all 1s ease-in-out;
}
.card {
	@apply rounded shadow-neumorphic bg-secondary;
	height: 25rem;
	width: 20rem;
	display: flex;
	flex-direction: column;
	padding: 2rem;
	transition: all 0.5s ease-in-out;
	&__media {
		@apply rounded;
		height: 40%;
		width: 100%;
		object-fit: cover;
		filter: grayscale(100%);
		transition: all 0.5s ease-in-out;
	}
	&__content {
		color: gray;
		margin-top: 1rem;
		transition: all 0.5s ease-in-out;
		font-size: 1.5rem;
		ul {
			margin-top: 1rem;
			display: inline-block;
			li {
				display: flex;
				align-items: center;
				gap: 1rem;
				letter-spacing: 0.1rem;
			}
		}
	}
	&:hover {
		.card {
			&__media {
				@apply shadow-custom;
				filter: grayscale(0);
			}
			&__content {
				@apply text-primary;

				.fa-icon {
					@apply text-cta;
				}
			}
		}
	}
}
</style>
