<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = ({ error, status }) => {
		return {
			props: {
				title: `${status}: ${error?.message}`
			}
		};
	};
</script>

<script lang="ts">
	import Button from '$lib/components/content/Button.svelte';

	export let title: string;
</script>

<div class="flex flex-col items-center justify-center h-full gap-4">
	{title}
	<img src="/pepehands.png" alt="sadge emoji" />
	<Button>
		<a href="/">go back</a>
	</Button>
</div>
