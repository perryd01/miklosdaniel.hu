<script lang="ts">
	import type { PageData } from './$types';
	import ListProjects from '$lib/components/projects/ListProjects.svelte';
	export let data: PageData;

	import SvelteSeo from 'svelte-seo';
	import * as config from '$lib/config';
</script>

<SvelteSeo
	{...config.baseSeoConfig}
	title={'Projects'}
	description="A list of projects I've worked on"
/>

<ListProjects projects={data.projects} />
