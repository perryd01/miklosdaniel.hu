import { dev } from '$app/environment';
import SvelteSeo from 'svelte-seo';

import type { ComponentProps } from 'svelte';

export const title = 'miklosdaniel.hu';
export const description = `Fullstack Developer with a passion for web technologies.`;
export const url = dev ? 'http://localhost:5173' : 'https://miklosdaniel.hu';
export const urlShort = url.replace('https://', '').replace('http://', '');
export const image = `${url}/preview.png`;

export const baseSeoConfig = {
	title,
	description,
	openGraph: {
		title,
		description,
		images: [{ url: `${url}/preview.png`, width: 1200, height: 630 }],
		type: 'website',
		locale: 'en_US'
	},
	twitter: {
		card: 'summary_large_image',
		site: '@daniel_miklos',
		title: title,
		description: description,
		image: `${url}/preview.png`
	}
} as ComponentProps<SvelteSeo>;
