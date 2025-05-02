// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  	site: 'https://docs.asop.asia',
	integrations: [
		
		
		starlight({
			title: 'ASOP Digital',
			disable404Route: false,

			social: [
				{icon: 'github', label: 'GitHub', href: "https://github.com/ASOP-Digital"},
				{icon: 'facebook', label: 'Facebook', href: "url.asop.asia/facebook.html"},
				{icon: 'discord', label: 'Discord', href: "url.asop.asia/discord.html"},
				{icon: 'telegram', label: 'Telegram', href: "url.asop.asia/telegram.html"},
				{icon: 'blueSky', label: 'Blue Sky', href: "url.asop.asia/bsky.html"},
			],
			defaultLocale: 'en',
			favicon: '/favicon.png',
			sidebar: [
				{
					label: 'Products',
					autogenerate: { directory: 'products' },
				},
				{
					label: 'Services',
					autogenerate: { directory: 'services' },
				},
				
				{
					label: 'Free Resources',
					autogenerate: { directory: 'FREE RESOURCES' },
				},

				{
					label: 'Frequently Asked Questions',
					autogenerate: { directory: 'Faq' },
				},
				{
					label: 'developer docs',
					autogenerate: { directory: 'devs' },
				},
			],
			pagefind: false, // Disable Pagefind / Search 
		}),
	],
});
