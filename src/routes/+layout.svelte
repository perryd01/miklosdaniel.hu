<script>
	import '../app.css';

	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
</script>

<div class="flex flex-col justify-between font-inter min-h-screen gap-8 text-white">
	<Header
		paths={[
			{
				label: 'Projects',
				href: '/projects'
			}
		]}
		class="px-4"
	/>
	<main class="grow max-w-screen-lg mx-auto w-full px-4">
		<slot />
	</main>
	<Footer />
</div>

<div class="bg"></div>

<style lang="postcss">
	.bg {
		@apply fixed inset-0 h-screen w-full bg-black bg-[radial-gradient(#999,transparent_1px)] md:bg-[radial-gradient(#ffffff,transparent_1px)] md:[background-size:16px_16px] [background-size:20px_20px] -z-50;
	}
</style>
