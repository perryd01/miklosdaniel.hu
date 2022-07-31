<script lang="ts" context="module">
	export const load: Load = async ({}) => {
		const albums = await getAlbums();
		const albumItems = albums.items;
		return {
			props: {
				albumItems
			},
			stuff: {
				title: 'Photography'
			}
		};
	};
</script>

<script lang="ts">
	import type { IAlbumFields } from '$lib/@types/contentful';

	import Title from '$lib/components/content/Title.svelte';
	import { getAlbums } from '$lib/contentfulClient';
	import type { Load } from '@sveltejs/kit';
	import type { Entry } from 'contentful';
	export let albumItems: Entry<IAlbumFields>[];
</script>

<Title heading={1}>Photography</Title>
<div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
	{#each albumItems as album}
		<a href="/photography/{album.fields.slug}" class="p-4 overflow-clip">
			<div class="overflow-hidden">
				<img
					class="aspect-square object-cover hover:scale-110 transiton duration-200"
					src={album.fields.preview.fields.file
						? `https:${album.fields.preview.fields.file.url}`
						: 'placekitten.com/200/200'}
					alt={album.fields.title}
				/>
			</div>
			<h2 class="text-2xl">{album.fields.title}</h2>
		</a>
	{/each}
</div>
