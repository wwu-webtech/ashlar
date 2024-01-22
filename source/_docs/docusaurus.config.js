// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ashlar',
  tagline: 'Western Washington University\'s theme and component library',
  url: 'https://ashlar.wwu.edu',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Western Washington University', // Usually your GitHub org/user name.
  projectName: 'ashlar', // Usually your repo name.
  deploymentBranch: 'main',
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
          showReadingTime: false,
          path: 'changelog',
          routeBasePath: 'changelog',
          postsPerPage: 10,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'Update History',
        },
        theme: {
          customCss: [            
            require.resolve('../../dist/css/font-families.css'),
            require.resolve('../../dist/css/material-icons.css'),
            require.resolve('../../build/css/ashlar-base.css'),
            require.resolve('../../build/css/components/docusaurus.css'),
            
            require.resolve('../../build/css/components/accordion.css'),
            require.resolve('../../build/css/components/alerts.css'),
            require.resolve('../../build/css/components/announcement.css'),
            require.resolve('../../build/css/components/banner.css'),
            require.resolve('../../build/css/components/colors.css'),
            require.resolve('../../build/css/components/countdown.css'),
            require.resolve('../../build/css/components/donut-chart.css'),
            require.resolve('../../build/css/components/image-link.css'),
            require.resolve('../../build/css/components/image-with-description.css'),
            require.resolve('../../build/css/components/my-western-menu.css'),
            require.resolve('../../build/css/components/pullquote.css'),
            require.resolve('../../build/css/components/testimonial.css'),
            require.resolve('../../build/css/components/schedule.css'),
            require.resolve('../../build/css/components/search.css'),
            require.resolve('../../build/css/components/social-media-icons.css'),
            require.resolve('../../build/css/components/statistic.css'),
            require.resolve('../../build/css/components/switcher.css'),
            require.resolve('../../build/css/components/pre-header.css'),
            require.resolve('../../build/css/components/wwu-header.css'),
            require.resolve('../../build/css/components/wwu-footer.css'),
          ],
        },
      }),
    ],
  ],
  
  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    /*algolia: {
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
    },*/
    /*announcementBar: {
      id: 'support_us',
      content:
      'Ashlar 5.0 is now under review!',
      backgroundColor: '#007ac8',
      textColor: '#fff',
      isCloseable: false,
    },*/
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
          /*{
            type: 'search',
            position: 'right',
          },*/
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
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  };
  
  module.exports = config;
  