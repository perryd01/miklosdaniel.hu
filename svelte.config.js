import adapter from '@sveltejs/adapter-vercel';
import { mdsvex, escapeSvelte } from 'mdsvex';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import readingTime from 'mdsvex-reading-time';

import { getHighlighter } from 'shiki';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.svelte.md', '.md', '.svx'],
	remarkPlugins: [readingTime],
	rehypePlugins: [],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await getHighlighter({
				themes: ['poimandres'],
				langs: ['javascript', 'typescript', 'go', 'v', 'svelte']
			});
			await highlighter.loadLanguage('javascript', 'typescript');
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'poimandres' }));
			return `{@html \`${html}\` }`;
		}
	}
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svelte.md'],
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({})
	}
};

export default config;
