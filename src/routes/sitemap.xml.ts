const host = 'https://miklosdaniel.hu';

export async function GET() {
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
        </urlset>
        `.trim()
	};
}
