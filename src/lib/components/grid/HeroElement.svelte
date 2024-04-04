<script lang="ts">
	import type { ComponentProps } from 'svelte';
	import GridElement from './GridElement.svelte';
	import HeroText from './HeroText.svelte';

	type HeroELementProps = ComponentProps<GridElement>;

	$$props as HeroELementProps;

	const { col, row, href } = $$props;

	export let image =
		'https://images.unsplash.com/photo-1710170600723-9095d7d3a480?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
	export let title = 'boo';

	const isSmallTile = $$props.col <= 2;
</script>

<GridElement {col} {row} {href}>
	<div style="background-image: url({image});" class="element h-full relative">
		<div class="pl-4 pb-1 absolute bottom-0 left-0 select-none">
			<HeroText {isSmallTile} {title} />
		</div>
	</div>
</GridElement>

<style lang="postcss">
	.element {
		@apply bg-cover bg-center bg-no-repeat;
	}
</style>
