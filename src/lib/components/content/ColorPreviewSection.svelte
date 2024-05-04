<script lang="ts">
	export let colors: {
		name: string;
		hex: string;
	}[] = [];

	export let size = 16;
</script>

<section class="flex justify-center flex-wrap gap-4">
	{#each colors as { name, hex }, i}
		<div class="flex flex-col items-center gap-2">
			<div
				class="rounded-full hover:scale-150 transition"
				style="background-color: {hex}; width: {4 * size}px; height: {4 * size}px"
			></div>
			<div>{name}</div>
			<div style="font-size: small;">{hex}</div>
		</div>
	{/each}
</section>
