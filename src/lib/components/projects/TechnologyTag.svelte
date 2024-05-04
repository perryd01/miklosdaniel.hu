<script lang="ts">
	export let tag: string = '';

	const colors: Record<string, string> = {
		svelte: '#f44336',
		golang: '#00ADD8',
		vlang: '#536b8a',
		react: '#00d8ff',
		'next.js': '#000000',
		figma: '#ffffff'
	};

	function hex2rgb(hex: string) {
		const r = parseInt(hex.slice(1, 3), 16);
		const g = parseInt(hex.slice(3, 5), 16);
		const b = parseInt(hex.slice(5, 7), 16);

		return { r, g, b };
	}

	function getContrastColor({ r, g, b, a }) {
		const brightness = r * 0.299 + g * 0.587 + b * 0.114 + (1 - a) * 255;
		return brightness > 186 ? '#000000' : '#FFFFFF';
	}

	function stringToColor(text) {
		// Convert the text into a numerical value
		let hash = 0;
		for (let i = 0; i < text.length; i++) {
			hash = text.charCodeAt(i) + ((hash << 5) - hash);
		}

		// Generate a color based on the numerical value
		const color =
			'#' +
			(hash & 0xffffff) // Ensure it's a 6-digit hex
				.toString(16) // Convert to hexadecimal
				.padStart(6, '0'); // Pad with zeros if needed
		return color;
	}

	const backgroundColor = colors[tag] || stringToColor(tag);
	const { r, g, b } = hex2rgb(backgroundColor);
	const textColor = getContrastColor({ r, g, b, a: 1 });
</script>

<div>
	<span class="tag" style="background-color: {backgroundColor}; color: {textColor};">{tag}</span>
</div>

<style lang="postcss">
	.tag {
		@apply p-1 rounded-md font-medium;
	}
</style>
