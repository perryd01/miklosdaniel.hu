import { getAlbums } from '$lib/contentfulClient';

const host = 'https://miklosdaniel.hu';

export async function GET() {
	const albums = await getAlbums();
	const links: string[] = albums.items.map((album) => album.fields.slug);
	return {
		headers: {
			'Content-Type': 'application/xml'
		},
		body: `
        <?xml version="1.0" encoding="UTF-8" ?>
        <urlset>
            <url>
                <loc>${host}/</loc>
            </url>
            <url>
                <loc>${host}/photography</loc>
            </url>
            <url>
                <loc>${host}/coding</loc>
            </url>
            ${links
							.map((l) => {
								return `<url><loc>${host}/photography/${l}</loc></url>`;
							})
							.join('')}
        </urlset>
        `.trim()
	};
}
