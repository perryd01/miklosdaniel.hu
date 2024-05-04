<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { Dot } from 'lucide-svelte';
	import type { PageData } from './$types';
	import TechnologyTag from '$lib/components/projects/TechnologyTag.svelte';
	import ListProjects from '$lib/components/projects/ListProjects.svelte';
	export let data: PageData;
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<ListProjects projects={data.projects} />
