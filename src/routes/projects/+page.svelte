<script lang="ts">
	import { formatDate } from '$lib/utils';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<section>
	<ul class="projects">
		{#each data.projects as project}
			<li class="project">
				<a href={`/projects/${project.slug}`} class="title">{project.title}</a>
				<p class="date">{formatDate(project.date)}</p>
				<p class="description">{project.description}</p>
			</li>
		{/each}
	</ul>
</section>

<style lang="postcss">
	.projects {
		@apply grid gap-8;
	}

	.title {
		@apply text-3xl capitalize;
	}

	.date {
		@apply text-lg text-gray-200;
	}

	.description {
		@apply mt-4;
	}
</style>
