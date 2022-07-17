<script lang="ts" context="module">
	export const load: Load = ({}) => {
		return {
			stuff: {
				title: 'Photography'
			}
		};
	};
</script>

<script lang="ts">
	import Title from '$lib/components/content/Title.svelte';
	import NothingHere from '$lib/components/placeholder/NothingHere.svelte';
	import type { Load } from '@sveltejs/kit';
</script>

<Title heading={1}>Photography</Title>
<NothingHere />
