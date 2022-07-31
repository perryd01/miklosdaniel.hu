<script lang="ts" context="module">
	export const load: Load = async ({ params }) => {
		const album = await getOneAlbum(params.slug);
		return {
			props: {
				album
			},
			stuff: {
				title: album.fields.title
			}
		};
	};
</script>

<script lang="ts">
	import Title from '$lib/components/content/Title.svelte';
	import type { Load } from '@sveltejs/kit';
	import { getOneAlbum } from '$lib/contentfulClient';
	import type { Entry } from 'contentful';
	import type { IAlbumFields } from '$lib/@types/contentful';

	export let album: Entry<IAlbumFields>;
</script>

<Title heading={1}>{album.fields.title}</Title>
<!-- <svelte:component this={Slider} {album} /> -->
{#if album.fields.description}
	<p class="text-xl my-4">{album.fields.description}</p>
{/if}
<div class="flex flex-col items-center gap-16">
	{#each album.fields.photos as photo}
		<img
			class="max-h-[600px] aspect-auto"
			src={`https:${photo.fields.file.url}`}
			alt={album.fields.title}
		/>
	{/each}
</div>
