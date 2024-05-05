<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { Dot } from 'lucide-svelte';
	import TechnologyTag from '$lib/components/projects/TechnologyTag.svelte';
	import type { Project } from '$lib/types';
	export let projects: Project[] = [];

	export let compact = false;
</script>

<section>
	<slot name="title" />
	<ul class:md:grid-cols-2={compact} class="projects">
		{#each projects as project}
			<li class="project">
				<a href={`/projects/${project.slug}`} class="title line-clamp-3">{project.title}</a>

				<div class="flex flex-row items-center date">
					<p>{project.readingTime.text}</p>
					<Dot />
					<p>Published at {formatDate(project.date)}</p>
				</div>
				{#if project.categories}
					<div class="tags">
						{#each project.categories.sort((a, b) => a.localeCompare(b)) || [] as tag}
							<TechnologyTag {tag} />
						{/each}
					</div>
				{/if}
				<p class="description line-clamp-2">{project.description}</p>
			</li>
		{/each}
	</ul>
	<slot name="nav-button" />
</section>

<style lang="postcss">
	section {
		@apply grid gap-2;
	}
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
		@apply flex flex-wrap gap-2 mt-2;
	}
</style>
