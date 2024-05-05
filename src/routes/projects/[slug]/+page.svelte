<script lang="ts">
	import ProjectLinks from '$lib/components/projects/ProjectLinks.svelte';
	import { formatDate } from '$lib/utils';
	import { Dot } from 'lucide-svelte';
	import SvelteSeo from 'svelte-seo';

	export let data;

	import { url } from '$lib/config';

	import './style.css';
</script>

<SvelteSeo
	title={data.meta.title}
	description={data.meta.description}
	canonical={url + '/projects/' + data.slug}
	keywords={data.meta.categories?.join(', ')}
	openGraph={{
		title: data.meta.title,
		description: data.meta.description,
		images: [{ url: `${url}/projects/${data.slug}/preview.png`, width: 1200, height: 630 }],
		url: `${url}/projects/${data.slug}`,
		type: 'article',
		locale: 'en_US',
		article: {
			author: ['Miklos Daniel'],
			published_time: new Date(data.meta.date).toISOString(),
			tag: data.meta.categories
		}
	}}
	twitter={{
		card: 'summary_large_image',
		site: '@daniel_miklos',
		title: data.meta.title,
		description: data.meta.description,
		image: `${url}/projects/${data.slug}/preview.png`
	}}
/>

<!-- This is a hidden image to be used as a preview for social media -->
<img src="/projects/{data.slug}/preview.png" alt="Preview" class="hidden" />

<article class="prz">
	<hgroup class="mb-8">
		<h1 class="text-center">{data.meta.title}</h1>
		<div class="flex flex-row items-center mt-2 justify-center">
			<p>{data.meta.readingTime.text}</p>
			<Dot />
			<p>Published at <time datetime={data.meta.date}>{formatDate(data.meta.date)}</time></p>
		</div>
		<ProjectLinks links={data.meta.links} />
	</hgroup>

	<div class="prz text-white mx-auto prose-headings:text-white">
		<svelte:component this={data.content} />
	</div>
</article>
