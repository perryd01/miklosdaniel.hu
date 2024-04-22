<script lang="ts">
	import Grid from '$lib/components/grid';

	import * as config from '$lib/config';

	export let data;

	const projects = data.projects.sort((a, b) => {
		if (a.order < b.order) return -1;
		if (a.order > b.order) return 1;
		return 0;
	});
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>
