<script lang="ts">
	import type { ProjectLinks } from '$lib/types';

	export let links: ProjectLinks | undefined;

	import { Earth, Github } from 'lucide-svelte';

	const elements = [
		{
			name: 'GitHub',
			Icon: Github,
			link: links?.github
		},
		{
			name: 'Website',
			Icon: Earth,
			link: links?.website
		}
	];
</script>

<section class="links">
	<ul>
		{#each elements as { name, Icon, link }}
			{#if link}
				<li>
					<a href={link} target="_blank" rel="noopener noreferrer">
						<Icon />
						<span>{name}</span>
					</a>
				</li>
			{/if}
		{/each}
	</ul>
</section>

<style lang="postcss">
	.links {
		@apply my-8;
	}

	.links ul {
		@apply flex flex-row gap-4 justify-center;
	}
	.links a {
		@apply flex flex-row items-center gap-2;
	}
</style>
