import { componentToPng } from '$lib/previewGeneration/renderImage';
import Image from '$lib/previewGeneration/ProjectImage.svelte';
import { error } from '@sveltejs/kit';
import type { Project } from '$lib/types';

export const prerender = true;

export const GET = async ({ fetch, params }) => {
	const slug = params.slug;
	const response = await fetch('/api/projects');
	const projects: Project[] = await response.json();

	const selected = projects.find((project) => project.slug === slug);

	if (!selected) {
		return error(404, 'Not found');
	}

	const { title, date, readingTime } = selected;

	const width = 1200;
	const height = 600;
	return componentToPng(
		Image,
		{ project: selected, seed: title, width, height, satori: true },
		height,
		width
	);
};
