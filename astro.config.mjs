// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		
		starlight({
			title: 'ASOP Digital',
			social: {
				github: 'https://github.com/ASOP-Digital',
				facebook: 'https://url.asop.asia/facebook.html',
				discord: 'https://url.asop.asia/discord.html',
				telegram: 'https://url.asop.asia/telegram.html',
				blueSky: 'https://url.asop.asia/bsky.html',

			},
			sidebar: [
				{
					label: 'Products',
					autogenerate: { directory: 'products' },
				},
				{
					label: 'devs',
					autogenerate: { directory: 'devs' },
				},
			],
			pagefind: false, // Disable Pagefind
		}),
	],
});

