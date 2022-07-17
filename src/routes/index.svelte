<script lang="ts" context="module">
	export const load: Load = () => {
		return {
			stuff: {
				title: 'Home'
			}
		};
	};
</script>

<script lang="ts">
	import Section from '$lib/components/content/Section.svelte';
	import Title from '$lib/components/content/Title.svelte';
	import Icon from '$lib/components/icon/Icon.svelte';
	import content from '$lib/content/content.json';
	import type { Load } from '@sveltejs/kit';

	const languages = content.coding.languages.sort((a, b) => a.localeCompare(b));
	const socials = content.general.socials;
</script>

<Title heading={1}>Hello there.</Title>
<Section isFirst>
	<Title heading={2}>About me</Title>
	<p class="text-lg">
		{content.general.description.replace(`{AGE}`, (new Date().getFullYear() - 2000).toString())}
	</p>
</Section>
<Section>
	<Title heading={2}>Stuff I use</Title>
	<ul class="grid grid-cols-3 xl:grid-cols-5 gap-2">
		{#each languages as lang}
			<li
				class="px-2 font-medium py-1 text-center rounded-xl bg-app-yellow text-black inline-block "
			>
				{lang}
			</li>
		{/each}
	</ul>
</Section>
<Section>
	<Title heading={2}>Socials</Title>
	<div class="flex flex-row gap-3 text-4xl">
		<a target="_blank" rel="noreferrer" href={socials.github}><Icon type={'github'} /></a>
		<a target="_blank" rel="noreferrer" href={socials.instagram}><Icon type={'ig'} /></a>
		<a target="_blank" rel="noreferrer" href={socials.linkedin}><Icon type={'linkedin'} /></a>
		<a target="_blank" rel="noreferrer" href={socials.twitter}><Icon type={'twitter'} /></a>
	</div>
</Section>
