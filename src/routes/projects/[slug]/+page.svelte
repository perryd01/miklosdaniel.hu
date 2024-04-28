<script lang="ts">
	import ProjectLinks from '$lib/components/projects/ProjectLinks.svelte';
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<hgroup class="mb-8">
		<h1 class="text-center">{data.meta.title}</h1>
		<p class="text-center mt-2">Published at {formatDate(data.meta.date)}</p>
		<ProjectLinks links={data.meta.links} />
	</hgroup>

	<div class="prose text-white mx-auto prose-headings:text-white">
		<svelte:component this={data.content} />
	</div>
</article>

<style lang="postcss">
	article {
		@apply text-white max-w-[50em] mx-auto;
	}

	h1 {
		@apply text-5xl font-bold;
	}

	h2 {
		@apply text-4xl font-bold text-white;
	}

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
