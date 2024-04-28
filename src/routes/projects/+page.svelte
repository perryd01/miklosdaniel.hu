<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { Dot } from 'lucide-svelte';
	import type { PageData } from './$types';
	import TechnologyTag from '$lib/components/projects/TechnologyTag.svelte';
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

				<div class="flex flex-row items-center date">
					<p>{project.readingTime.text}</p>
					<Dot />
					<p>Published at {formatDate(project.date)}</p>
				</div>
				<div class="tags">
					{#each project.categories || [] as tag}
						<TechnologyTag {tag} />
					{/each}
				</div>
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
		@apply mt-2;
	}

	.tags {
		@apply flex flex-wrap gap-2;
	}
	.tag {
		@apply p-1 bg-gray-800 text-gray-200 rounded-md;
	}
</style>
