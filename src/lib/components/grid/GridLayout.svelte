<script lang="ts">
	export let columns = 1;
	export let gap = 4;
</script>

<div class="grid-layout" style="--gap:{gap * 0.25}rem;--columns:{columns};">
	<slot />
</div>

<style lang="postcss">
	.grid-layout {
		@apply grid gap-1;
		gap: var(--gap, 0.5rem);
		grid-template-columns: repeat(var(--columns), minmax(0, 1fr));
	}
</style>
