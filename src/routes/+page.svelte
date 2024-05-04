<script lang="ts">
	import Grid from '$lib/components/grid';
	import ListProjects from '$lib/components/projects/ListProjects.svelte';

	import * as config from '$lib/config';
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';

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
		<p>a fullstack developer, recently graduated at BUTE</p>
	</section>

	<ListProjects compact projects={data.projects.filter((x) => x.important)}>
		<h2 slot="title" class="text-4xl font-medium">Recent Projects</h2>
		<a slot="nav-button" href="/projects" class="text-xl font-medium">View all my projects</a>
	</ListProjects>
</div>

<style lang="postcss">
	div {
		@apply grid gap-8;
	}
</style>
