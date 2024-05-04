<script lang="ts">
	export let images: string[] = [];
	export let description: string = '';

	const cols = images.length > 3 ? 3 : images.length;
</script>

<section class="my-8">
	<div
		style=" grid-template-columns: repeat({cols}, minmax(0, 1fr));"
		class="grid grid-cols-3 gap-8 size-full"
	>
		{#each images as image, i}
			<img src={image} alt={`Image ${i + 1}`} class="object-cover size-full" />
		{/each}
	</div>
	<div class="flex flex-row justify-center items-center">
		<span class="text-center mt-2">{description}</span>
	</div>
</section>
