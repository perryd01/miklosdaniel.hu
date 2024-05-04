<script lang="ts">
	import clsx from 'clsx';

	type HeaderPaths = {
		label: string;
		href: string;
	};

	export let paths: HeaderPaths[] = [
		{
			label: 'Projects',
			href: '/projects'
		},
		{
			label: 'Contact',
			href: '/contact'
		}
	];

	let className = '';
	export { className as class };
</script>

<div class="sticky top-0 px-4 pt-8 z-50">
	<header
		class={clsx(
			'flex flex-row items-center justify-between text-xl py-2 backdrop-blur-sm rounded-lg shadow-sm bg-black/20 font-medium',
			className
		)}
	>
		<a href="/" class="flex flex-row gap-2 items-center">
			<figure>
				<img class="w-12 h-12" src="/profile.png" alt="Profile" />
			</figure>
			<h1>miklosdaniel.hu</h1>
		</a>
		<nav>
			<ul class="flex flex-row gap-4">
				{#each paths as { label, href }}
					<li>
						<a {href}>{label}</a>
					</li>
				{/each}
			</ul>
		</nav>
	</header>
</div>

<style>
</style>
