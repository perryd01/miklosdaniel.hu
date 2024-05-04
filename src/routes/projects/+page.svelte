<script lang="ts">
	import type { PageData } from './$types';
	import ListProjects from '$lib/components/projects/ListProjects.svelte';
	export let data: PageData;
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<ListProjects projects={data.projects} />
