<script lang="ts">
	import { page } from '$app/stores';
	import clsx from 'clsx';
</script>

<header class="sticky h-20 p-4 flex flex-row justify-between items-center gap-4">
	<div class="h-full cursor-pointer">
		<a href="/">
			<img src="/avatar.png" alt="logo" class="h-full aspect-square flex-shrink-0" />
		</a>
	</div>
	<div class="flex flex-row gap-4 text-xl ">
		<a class={clsx('hidden sm:block', $page.url.pathname === '/' && 'text-app-yellow')} href="/"
			>home</a
		>
		<a class={clsx($page.url.pathname === '/coding' && 'text-app-yellow')} href="/coding">coding</a>
		<a class={clsx($page.url.pathname === '/photography' && 'text-app-yellow')} href="/photography"
			>photography</a
		>
	</div>
</header>
