import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	define: {
		'process.env.VITE_BUILD_TIME': JSON.stringify(new Date().toISOString())
	}
});
