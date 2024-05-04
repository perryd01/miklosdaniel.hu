<script lang="ts">
	import ListProjects from '$lib/components/projects/ListProjects.svelte';

	import * as config from '$lib/config';
	import { Construction } from 'lucide-svelte';
	import { onMount } from 'svelte';

	export let data;

	let animateFlag = false;

	onMount(() => (animateFlag = true));
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<div>
	<section>
		<h1 class="text-5xl font-bold">Hi, I'm Miklós</h1>
		<p>
			a fullstack developer, recently graduated at <a href="https://www.bme.hu/?language=en">BUTE</a
			>
		</p>
	</section>

	<section class="flex flex-wrap gap-2">
		<Construction />
		I'm currently working on refactoring this website, so make sure to check back later for updates.
		<Construction />
	</section>

	{#if data.projects}
		<ListProjects compact projects={data.projects.filter((x) => x.important)}>
			<h2 slot="title" class="text-4xl font-medium">Recent Projects</h2>
			<a slot="nav-button" href="/projects" class="text-xl font-medium">View all my projects</a>
		</ListProjects>
	{/if}
</div>

<style lang="postcss">
	div {
		@apply grid gap-8;
	}
</style>
