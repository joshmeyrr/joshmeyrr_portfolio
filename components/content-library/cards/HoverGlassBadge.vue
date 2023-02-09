<template>
	<div class="card">
		<div class="card__badge">
			<h2 class="card__badge-header">@JOSHMEYRR</h2>
			<ul class="card__badge-content">
				<li class="card__badge-content-item">
					<i class="card__badge-content-item-check fa-solid fa-circle-check"></i
					><span class="card__badge-content-item-description">Brand Design</span>
				</li>
				<li class="card__badge-content-item">
					<i class="card__badge-content-item-check fa-solid fa-circle-check"></i
					><span class="card__badge-content-item-description">Web Development</span>
				</li>
				<li class="card__badge-content-item">
					<i class="card__badge-content-item-check fa-solid fa-circle-check"></i
					><span class="card__badge-content-item-description"
						>Digital Creations</span
					>
				</li>
			</ul>
			<ul class="card__badge-stars">
				<li>
					<font-awesome-icon class="w-8 h-auto" icon="fa-solid fa-star" />
				</li>
				<li>
					<font-awesome-icon class="w-8 h-auto" icon="fa-solid fa-star" />
				</li>
				<li>
					<font-awesome-icon class="w-8 h-auto" icon="fa-solid fa-star" />
				</li>
				<li>
					<font-awesome-icon class="w-8 h-auto" icon="fa-solid fa-star" />
				</li>
				<li>
					<font-awesome-icon class="w-8 h-auto" icon="fa-solid fa-star" />
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {}
</script>
<style scoped lang="scss">
.card {
	height: 25rem;
	width: 20rem;
	// background-image: url('~/static/components/image.png');
	background-size: cover;
	border-radius: 0.5rem;
	transition: all 1s ease-in-out;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	filter: grayscale(100%);
	overflow: hidden;

	&:hover {
		@apply shadow-custom;
		filter: none;
		.card__badge {
			transform: translateY(0);

			&-stars {
				li {
					opacity: 1;
					transform: translateX(0);
				}
			}
		}
	}
}

@for $i from 1 to 6 {
	.card__badge-stars li:nth-child(#{$i}) {
		transition-delay: $i * 200ms;
	}
}

.card__badge {
	@apply text-secondary bg-glass shadow-material;
	font-size: 1rem;
	padding: 1rem;
	width: 90%;
	border-radius: 0.5rem;
	backdrop-filter: blur(20px);
	margin-top: 1rem;
	transform: translateX(26rem);
	transition: all 0.5s ease-in;

	&-content {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		margin-top: 0.5rem;
		text-transform: uppercase;
		font-weight: 900;
		&-item {
			display: flex;
			align-items: center;
			&-check {
				@apply text-secondary;
			}
			&-description {
				margin-left: 0.5rem;
			}
		}
	}
	&-stars {
		@apply text-cta;
		display: flex;
		margin-top: 0.5rem;
		font-size: 2rem;
		gap: 0.5rem;

		li {
			transform: translateX(2rem);
			opacity: 0;
			transition: all 0.25s ease-in;
		}
	}
}
</style>
