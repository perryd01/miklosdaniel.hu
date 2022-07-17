<script>
	import Footer from '$lib/components/footer/Footer.svelte';
	import Header from '$lib/components/header/Header.svelte';
	import PageLayout from '$lib/components/layout/PageLayout.svelte';

	import '../app.css';

	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{`${$page.stuff.title} - miklosdaniel.hu`}</title>
</svelte:head>

<div class="bg-app-background text-white ">
	<div class="flex flex-col max-w-5xl mx-auto min-h-screen">
		<Header />
		<PageLayout class="flex flex-grow ">
			<slot />
		</PageLayout>
		<Footer />
	</div>
</div>
