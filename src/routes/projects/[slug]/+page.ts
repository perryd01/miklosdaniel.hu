import { error } from '@sveltejs/kit';
import type { Project } from '$lib/types';

export async function load({ params }) {
	try {
		const post = await import(`../../../content/projects/${params.slug}.md`);

		return {
			content: post.default,
			meta: post.metadata as Project,
			slug: params.slug
		};
	} catch (e) {
		error(404, `Could not find ${params.slug}`);
	}
}
