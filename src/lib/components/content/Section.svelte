<script lang="ts">
	import clsx from 'clsx';
	export let isFirst = false;
</script>

<div class={clsx(isFirst ? 'mb-8' : 'my-8')}>
	<slot />
</div>
