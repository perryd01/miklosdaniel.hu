<script lang="ts">
	import clsx from 'clsx';
	let className: string | undefined = '';
	export { className as class };
</script>

<div class={clsx(className, 'p-4 ')}>
	<main class="">
		<slot />
	</main>
</div>
