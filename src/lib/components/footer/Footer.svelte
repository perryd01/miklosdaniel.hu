<script lang="ts">
	import content from '$lib/content/content.json';
	const githubLink = content.general.socials.github;
</script>

<footer class="p-2 flex flex-col items-center justify-center">
	<span class="text-base"
		>made by <a class="text-app-yellow" href={githubLink} target={'_blank'} rel="noreferrer"
			>perryd01</a
		></span
	>
	<span class="text-sm">using SvelteKit and TailwindCSS</span>
</footer>
