<script lang="ts">
	import { url, title, description } from '$lib/config';

	const bg = 'black';
</script>

<div class="cnt">
	<div class="title">
		{title}
	</div>
	<div class="flex flex-row items-center">
		{description}
	</div>
	<div class="text-3xl">
		{url}
	</div>
</div>

<style lang="postcss">
	.cnt {
		background: #222;
		color: white;
		font-size: 40px;
		font-family: 'Inter Regular';
		@apply flex size-full align-middle justify-center flex-col px-32 gap-2;
	}

	.title {
		@apply text-6xl;
		font-family: 'Inter Bold';
	}
</style>
