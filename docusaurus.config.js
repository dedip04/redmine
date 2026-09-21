// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dedi Prastiyo',
  tagline: 'DevOps Engineer Enthusiast',
  favicon: 'img/favicon.ico',

  // GitHub Pages
  url: 'https://dedip04.github.io',
  baseUrl: '/redmine/',

  organizationName: 'dedip04',
  projectName: 'redmine',

  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',

          // Disable temporarily until Git history is ready
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
        },

        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/dedi-social-card.svg',

    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Dedi Prastiyo',

      logo: {
        alt: 'Dedi Prastiyo',
        src: 'img/logo.svg',
      },

      items: [
        {
          to: '/',
          label: 'Home',
          position: 'left',
        },

        {
          type: 'docSidebar',
          sidebarId: 'devopsSidebar',
          position: 'left',
          label: 'DevOps Lab',
        },

        {
          to: '/docs/projects/overview',
          label: 'Projects',
          position: 'left',
        },

        {
          href: 'https://github.com/dedip04',
          label: 'GitHub',
          position: 'right',
        },

        {
          href: 'https://www.linkedin.com/in/dedi-prastiyo/',
          label: 'LinkedIn',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',

      links: [
        {
          title: 'DevOps Lab',

          items: [
            {
              label: 'Linux',
              to: '/docs/linux/linux-basics',
            },
            {
              label: 'Docker',
              to: '/docs/docker/docker-compose',
            },
            {
              label: 'Monitoring',
              to: '/docs/monitoring/prometheus',
            },
          ],
        },

        {
          title: 'Projects',

          items: [
            {
              label: 'Docker Compose',
              to: '/docs/projects/docker-compose',
            },
            {
              label: 'Prometheus Monitoring',
              to: '/docs/projects/prometheus-monitoring',
            },
          ],
        },

        {
          title: 'Connect',

          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/dedip04',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/dedi-prastiyo/',
            },
          ],
        },
      ],

      copyright: `© ${new Date().getFullYear()} Dedi Prastiyo. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;