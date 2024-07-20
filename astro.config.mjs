import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	base: '/docs/',
	integrations: [
		starlight({
			title: 'My Docs',
			title: 'Barmic Development',
			favicon: './src/assets/barmic-white.png',
			logo: {
				light: './src/assets/barmic-black.png',
				dark: './src/assets/barmic-white.png',
			},
			social: {
				github: 'https://github.com/withastro/starlight',
				github: 'https://github.com/cawtoz/BarmicDocs',
			},
			customCss: [
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
