<script lang="ts">
	export let start = '#000000';
	export let end = '#ffffff';
</script>

<div style="--start:{start};--end:{end};" class="grad" />

<style lang="postcss">
	.grad {
		background: linear-gradient(90deg, var(--start), var(--end));
		background-size: 400% 400%;
		animation: gradient 5s ease infinite;
		@apply size-full;
	}

	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>
