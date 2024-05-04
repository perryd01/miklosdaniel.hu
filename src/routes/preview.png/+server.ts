import { componentToPng } from '$lib/previewGeneration/renderImage';
import Image from '$lib/previewGeneration/BaseImage.svelte';

export const prerender = true;

export const GET = async () => {
	const width = 1200;
	const height = 600;
	return componentToPng(Image, { width, height, satori: true }, height, width);
};
