<script lang="ts">
	const img = ['sadge', 'monkas', 'pepehands'];
	const random = img[Math.floor(Math.random() * img.length)];
</script>

<div class="flex flex-col gap-16">
	<span>Nothing here yet.</span>
	<div class="relative w-full max-w-md">
		<img class="w-full aspect-auto" src={`/${random}.png`} alt="sadge emoji" />
	</div>
</div>
