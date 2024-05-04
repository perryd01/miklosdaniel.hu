<script lang="ts">
	import clsx from 'clsx';

	export let col = 1;
	export let row = 1;

	export let href = '/projects/boo';
</script>

<a {href} style="--col:{col};--row:{row};" class={clsx('element')}>
	<slot />
</a>

<style lang="postcss">
	.element {
		@apply min-h-48 bg-gray-500 rounded-lg shadow-md overflow-hidden;
		grid-row: span var(--row, 1) / span var(--row, 1);
		grid-column: span var(--col, 1) / span var(--col, 1);
	}
</style>
