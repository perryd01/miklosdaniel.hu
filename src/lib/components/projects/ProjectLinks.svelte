<script lang="ts">
	import type { ProjectLinks } from '$lib/types';

	export let links: ProjectLinks | undefined;

	import { Earth, Github } from 'lucide-svelte';
</script>

<section class="links">
	<ul>
		{#if links?.github}
			<li>
				<a href={links?.github} target="_blank" rel="noopener noreferrer" alt="asd">
					<Github />
					<span>GitHub</span></a
				>
			</li>
		{/if}
		{#if links?.website}
			<li>
				<a href={links?.website} target="_blank" rel="noopener noreferrer">
					<Earth />
					<span>Website</span>
				</a>
			</li>
		{/if}
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
