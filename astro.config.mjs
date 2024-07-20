import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	base: '/docs/',
	integrations: [
		starlight({
			title: 'Barmic Development',
			favicon: './src/assets/barmic-white.png',
			logo: {
				light: './src/assets/barmic-black.png',
				dark: './src/assets/barmic-white.png',
			},
			social: {
				github: 'https://github.com/cawtoz/BarmicDocs',
			},
			customCss: [
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'General',
					items: [
						{ label: 'Introduction', slug: 'introduction' },
						{ label: 'Instalation', slug: 'instalation' },
					],
				},
				{
					label: 'Sirius',
					badge: 'BoxPvP',
					items: [
						{ label: 'Introduction', slug: 'sirius/index' },
						{ label: 'Commands', slug: 'sirius/commands' },
					],
				},
				{
					label: 'Zenith',
					badge: 'Sync',
					items: [
						{ label: 'Introduction', slug: 'zenith/index' },
						{ label: 'Commands', slug: 'zenith/commands' },
					],
				},
			],
		}),
	],
});
