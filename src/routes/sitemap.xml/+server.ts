import type { Project } from '$lib/types';
import * as config from '$lib/config';

export async function GET({ fetch }) {
	const response = await fetch('api/projects');
	const projects: Project[] = await response.json();

	const staticPaths = ['', '/projects', '/contact'];

	const url = config.url;

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${staticPaths.map((s) => `<url><loc>${url}${s}</loc></url>`).join('\n')}

        ${projects.map((p) => `<url><loc>${url}/projects/${p.slug}</loc></url>`).join('\n')}
    </urlset>
    `;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}
