<script lang="ts">
	import ListProjects from '$lib/components/projects/ListProjects.svelte';

	import { onMount } from 'svelte';

	export let data;

	const importantProjects = data.projects.filter((x) => x.important);

	let animateFlag = false;

	onMount(() => (animateFlag = true));

	import * as config from '$lib/config';
	import SvelteSeo from 'svelte-seo';
</script>

<SvelteSeo {...config.baseSeoConfig} />

<div>
	<section>
		<h1 class="text-5xl font-bold">Hi, I'm Miklós</h1>
		<p>
			a fullstack developer, recently graduated at <a href="https://www.bme.hu/?language=en">BUTE</a
			>
		</p>
	</section>

	{#if importantProjects}
		<ListProjects compact projects={importantProjects}>
			<h2 slot="title" class="text-4xl font-semibold mb-4 tracking-wide">Recent Projects</h2>
			<a slot="nav-button" href="/projects" class="text-xl font-medium">View all my projects</a>
		</ListProjects>
	{/if}
</div>

<style lang="postcss">
	div {
		@apply grid gap-8;
	}
</style>
