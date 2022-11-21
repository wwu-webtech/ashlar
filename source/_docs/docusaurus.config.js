// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ashlar',
  tagline: 'Western Washington University\'s theme and component library',
  url: 'https://wwu.edu',
  baseUrl: '/ashlar/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Western Washington University', // Usually your GitHub org/user name.
  projectName: 'ashlar', // Usually your repo name.
  deploymentBranch: 'masons7/docusaurus',
  trailingSlash: false,
  
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'patterns',
          routeBasePath: 'patterns',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          path: 'changelog',
          routeBasePath: 'changelog',
        },
        theme: {
          customCss: [
            require.resolve('../../dist/css/font-families.css'),

            require.resolve('../../build/css/ashlar-base.css'),
            
            require.resolve('../../build/css/components/accordion.css'),
            require.resolve('../../build/css/components/announcement.css'),
            require.resolve('../../build/css/components/colors.css'),
          ],
        },
      }),
    ],
  ],
  
  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    algolia: {
      // The application ID provided by Algolia
      appId: 'W59HY4MAHN',

      // Public API key: it is safe to commit it
      apiKey: '25d38f2ae39b0a4ee28cdbb5a4b5fd1a',

      indexName: 'ashlar_docs',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      //externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      //... other Algolia params
    },
    announcementBar: {
      id: 'support_us',
      content:
      'This is a work in progress.',
      backgroundColor: '#007ac8',
      textColor: '#fff',
      isCloseable: false,
    },
    navbar: {
      title: 'Ashlar',
      items: [
        {
          type: 'doc',
          docId: 'overview',
          position: 'left',
          label: 'Patterns',
        },
        {
          to: '/changelog', 
          label: 'Changelog', 
          position: 'left'},
          {
            to: 'https://bitbucket.org/wwuweb/ashlar/',
            target: '_self',
            label: 'BitBucket',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Helpful Links',
            items: [
              {
                label: 'Western Washington University',
                to: 'https://wwu.edu',
                target: '_self',
              },              
              {
                label: 'Brand & Communication Guide',
                to: 'https://brand.wwu.edu',
                target: '_self',
              },              
            ],
          },
          {
            title: 'Get in Touch',
            items: [
              {
                label: 'web.help@wwu.edu',
                href: 'mailto:web.help@wwu.edu',
              },
            ],
          },
        ],
        logo: {
          alt: 'Western Washington University: Make Waves',
          src: 'img/logo.svg',
          className: 'logo',
        },
        copyright: `Copyright © ${new Date().getFullYear()} Western Washington University. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  };
  
  module.exports = config;
  