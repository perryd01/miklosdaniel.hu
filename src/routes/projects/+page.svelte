<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	console.log(data.projects);
</script>

<section>
	{#each data.projects as project}
		<a href={`projects/${project.slug}`}>
			<div>
				<h2>{project.title}</h2>
				<p>{project.slug}</p>
			</div>
		</a>
	{/each}
</section>
