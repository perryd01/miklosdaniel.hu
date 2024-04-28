import * as config from '$lib/config';
import type { Project } from '$lib/types';

export async function GET({ fetch }) {
	const response = await fetch('api/projects');
	const projects: Project[] = await response.json();

	const headers = { 'Content-Type': 'application/xml' };

	const xml = `
    <rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
        <channel>
            <title>${config.title}</title>
            <description>${config.description}</description>
            <link>${config.url}</link>
            <atom:link href="${config.url}/rss.xml" rel="self" type="application/rss+xml"/>
            ${projects
							.map(
								(p) => `
                    <item>
                        <title>${p.title}</title>
                        <description>${p.description}</description>
                        <link>${config.url}/projects/${p.slug}</link>
                        <guid isPermaLink="true">${config.url}/${p.slug}</guid>
                        <pubDate>${new Date(p.date).toUTCString()}</pubDate>
                    </item>
                `
							)
							.join('')}
        </channel>
    </rss>
`.trim();

	return new Response(xml, { headers });
}
