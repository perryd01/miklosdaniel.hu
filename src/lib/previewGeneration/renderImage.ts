import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { html as toReactNode } from 'satori-html';

const interFromGoogle = async () => {
	const headers = {
		'User-Agent':
			'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36'
	};

	async function f(link: string) {
		const res = await fetch(link, {
			headers
		});
		return await res.arrayBuffer();
	}

	const links = [
		'https://fonts.gstatic.com/l/font?kit=UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuOKfMZhzWLSossP6VgG8K7R-GlAIiBAUObd6RWRGM6CJ-oA1xV5tzFelEo5XIQn26wTkEEqLxjokTAP2KYBLKHpY-0LfoqLEa26M8oKo06UhanS7I7-d5JD516YHUWxoHIHQs23vNjoP4CBzGICJpxgJc6nJ4HIk6tMp0py3mtM2FfjNvLgxIbO9dcVYN4UOJy33n6s7zAIqzmG4nwbq9kIqZYR2HhQixony0nczuzQjemeS-Z3tBDIDzE846qchlSgW02E3hN4aVH62WzatCH0rbhp6FvsI-tW0bos&skey=c491285d6722e4fa&v=v13',
		'https://fonts.gstatic.com/l/font?kit=UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZhzWLSossP6VgG8K7R-GlAIiBAUObd6RWRGM6CJ-oA1xV5tzFelEo5XIQn26wTkEEqLxjokTAP2KYBLKHpY-0LfoqLEa26M8oKo06UhanS7I7-d5JD516YHUWxoHIHQs23vNjoP4CBzGICJpxgJc6nJ4HIk6tMp0py3mtM2FfjNvLgxIbO9dcVYN4UOJy33n6s7zAIqzmG4nwbq9kIqZYR2HhQixony0nczuzQjemeS-Z3tBDIDzE846qchlSgW02E3hN4aVH62WzatCH0rbhp6FvsI-tW0bos&skey=c491285d6722e4fa&v=v13'
	];

	return Promise.all(links.map(f));
};

export async function componentToPng(
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	component: any,
	props: Record<string, unknown>,
	height: number,
	width: number
) {
	const interFonts = await interFromGoogle();

	const result = component.render(props);
	const markup = toReactNode(`${result.html}<style>${result.css.code}</style>`);
	const svg = await satori(markup, {
		fonts: [
			{
				name: 'Inter Regular',
				data: interFonts[0],
				style: 'normal'
			},
			{
				name: 'Inter Bold',
				data: interFonts[1],
				style: 'normal'
			}
		],
		height,
		width
	});

	const resvg = new Resvg(svg, {
		fitTo: {
			mode: 'width',
			value: +width
		}
	});

	const png = resvg.render();

	return new Response(png.asPng(), {
		headers: {
			'content-type': 'image/png'
		}
	});
}
