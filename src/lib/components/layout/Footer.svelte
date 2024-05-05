<script lang="ts">
	import { Dot } from 'lucide-svelte';

	const bt = new Date(__BUILDTIME__);

	const [month, day, hour, minute] = [
		bt.getMonth() + 1,
		bt.getDate(),
		bt.getHours(),
		bt.getMinutes()
	].map(padNumber);

	function padNumber(n: number) {
		return String(n).padStart(2, '0');
	}
</script>

<!-- svelte-ignore missing-declaration -->
<footer>
	<p>The blog was generated using Sveltekit, TailwindCSS and MDSvex.</p>
	<div class="flex flex-row gap-1 items-center">
		<span>
			v{__PACKAGE__.version}
		</span>
		<Dot size="24" />
		<span>
			build: {`${String(bt.getFullYear()).slice(2)}${[month, day, hour, minute].join('')}`}
		</span>
	</div>
</footer>

<style lang="postcss">
	footer {
		@apply max-w-screen-lg mx-auto w-full p-4;
	}
</style>
