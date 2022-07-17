<script lang="ts" context="module">
	export const load: Load = () => {
		return {
			stuff: {
				title: 'Coding'
			}
		};
	};
</script>

<script lang="ts">
	import Title from '$lib/components/content/Title.svelte';
	import ProjectPreview from '$lib/components/project/ProjectPreview.svelte';
	import content from '$lib/content/content.json';
	import type { Load } from '@sveltejs/kit';
	const projects = content.coding.projects
		.sort((a, b) => {
			if ((a.date || '') < (b.date || '')) {
				return -1;
			}
			if ((a.date || '') > (b.date || '')) {
				return 1;
			}
			return 0;
		})
		.reverse();
</script>

<Title heading={1}>Coding</Title>
<div class="grid md:grid-cols-2 gap-4">
	{#each projects as project}
		<ProjectPreview {project} />
	{/each}
</div>
