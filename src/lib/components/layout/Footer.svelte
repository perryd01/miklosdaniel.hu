<script lang="ts">
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
	<p>
		v{__PACKAGE__.version}
	</p>
	<p class="text-xs">
		{`${String(bt.getFullYear()).slice(2)}${[month, day, hour, minute].join('')}`}
	</p>
</footer>

<style lang="postcss">
	footer {
		@apply max-w-screen-lg mx-auto w-full;
	}
</style>
