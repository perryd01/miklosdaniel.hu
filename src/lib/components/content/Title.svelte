<script lang="ts">
	export let heading: 1 | 2 | 3;
</script>

{#if heading === 1}
	<h1 class="text-4xl font-bold my-2"><slot /></h1>
{/if}

{#if heading === 2}
	<h2 class="text-2xl font-medium my-2"><slot /></h2>
{/if}

{#if heading === 3}
	<h3 class="text-xl my-2"><slot /></h3>
{/if}
