// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://projectenv.io',
	integrations: [
		starlight({
			title: 'Project-Env',
			logo: {
				src: './src/assets/logo.png',
			},
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/Project-Env',
				},
			],
			sidebar: [
				{ slug: 'getting-started' },
				{ slug: 'cli' },
				{
					label: 'Integrations',
					items: [
						{ slug: 'integrations/intellij-plugin' },
						{ slug: 'integrations/github-action' },
						{ slug: 'integrations/jenkins-plugin' },
					],
				},
			],
			head: [
				{
					tag: 'script',
					attrs: {
						defer: true,
						'data-domain': 'projectenv.io',
						src: 'https://plausible.io/js/plausible.js',
					},
				},
			],
		}),
	],
});
