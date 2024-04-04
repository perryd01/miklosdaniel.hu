import { error } from '@sveltejs/kit';

export async function load() {
	try {
		const post = await import(`./contact.md`);

		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		error(404, `Could not find ${e}`);
	}
}
