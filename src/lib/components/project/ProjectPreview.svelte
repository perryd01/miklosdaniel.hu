<script lang="ts">
	import type { IProject } from '$lib/model/Types';
	import Title from '../content/Title.svelte';

	export let project: IProject;
	const { link, tags, text, title } = project;
</script>

<a href={link} target="_blank" rel="noreferrer">
	<div class="p-4 rounded-xl bg-app-secondary text-white">
		<Title heading={3}>{title}</Title>
		<div class="mb-2 flex flex-row gap-4 items-center justify-start">
			{#each tags as tag}
				<span class="px-2 py-[2px] bg-app-yellow text-black rounded-xl">{tag}</span>
			{/each}
		</div>
		<p>{text}</p>
	</div>
</a>
