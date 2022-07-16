<template>
	<div
		id="hamburger-6"
		class="cursor-pointer hamburger"
		:class="{ 'is-active': isNavActive }"
	>
		<span :class="{ 'bg-dark': isNavActive }" class="line"></span>
		<span :class="{ 'bg-dark': isNavActive }" class="line"></span>
		<span :class="{ 'bg-dark': isNavActive }" class="line"></span>
	</div>
</template>
<script>
export default {
	props: {
		isNavActive: Boolean,
	},
}
</script>
<style lang="scss">
.hamburger .line {
	@apply rounded bg-primary;
	width: 50px;
	height: 5px;
	display: block;
	margin: 8px auto;
	transition: all 0.5s ease-in-out;
}
#hamburger-6.is-active {
	transition: all 0.5s ease-in-out;
	transition-delay: 0.6s;
	transform: rotate(45deg);
}

#hamburger-6.is-active .line:nth-child(2) {
	width: 0px;
}

#hamburger-6.is-active .line:nth-child(1),
#hamburger-6.is-active .line:nth-child(3) {
	transition-delay: 0.5s;
}

#hamburger-6.is-active .line:nth-child(1) {
	transform: translateY(13px);
}

#hamburger-6.is-active .line:nth-child(3) {
	transform: translateY(-13px) rotate(90deg);
}
</style>
