<script lang="ts">
	import ProjectLinks from '$lib/components/projects/ProjectLinks.svelte';
	import { formatDate } from '$lib/utils';
	import { Dot } from 'lucide-svelte';

	export let data;

	import './style.css';
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="prz">
	<hgroup class="mb-8">
		<h1 class="text-center">{data.meta.title}</h1>
		<div class="flex flex-row items-center mt-2 justify-center">
			<p>{data.meta.readingTime.text}</p>
			<Dot />
			<p>Published at {formatDate(data.meta.date)}</p>
		</div>
		<ProjectLinks links={data.meta.links} />
	</hgroup>

	<div class="prz text-white mx-auto prose-headings:text-white">
		<svelte:component this={data.content} />
	</div>
</article>
