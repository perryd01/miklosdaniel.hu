<script lang="ts">
	import type { Project } from '$lib/types';
	import { formatDate } from '$lib/utils';
	import { Dot } from 'lucide-svelte';
	import { urlShort } from '$lib/config';
	export let project: Project;
</script>

<div class="cnt">
	<div class="text-3xl">
		{urlShort}
	</div>
	<div class="title">
		{project.title}
	</div>
	<div class="flex flex-row items-center">
		{project.readingTime.text}
		<Dot size="48" />
		{formatDate(project.date)}
	</div>
</div>

<style lang="postcss">
	.cnt {
		background: #222;
		color: white;
		font-size: 36px;
		font-family: 'Inter Regular';
		@apply flex size-full align-middle justify-center flex-col px-32 gap-4;
	}

	.title {
		@apply text-6xl;
		font-family: 'Inter Bold';
	}
</style>
