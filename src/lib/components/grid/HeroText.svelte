<script lang="ts">
	import clsx from 'clsx';

	export let title = '';
	export let isSmallTile = false;

	function getClassFromLength() {
		let cat = 4;

		if (isSmallTile) cat -= 1;
		if (title.length > 30) cat -= 1;
		if (title.length > 40) cat -= 1;

		switch (cat) {
			case 4:
				return 'text-4xl';
			case 3:
				return 'text-3xl';
			case 2:
				return 'text-2xl';
			case 1:
				return 'text-xl';

			default:
				return 'text-2xl';
		}
	}

	console.log(title, title.length);
</script>

<h1 class={clsx('font-bold text-white', getClassFromLength())}>{title}</h1>
