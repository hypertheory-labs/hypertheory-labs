// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Hypertheory Labs",
  tagline: "Training and Resources for Software Developers",
  url: "https://hypertheory-labs.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  stylesheets: [
    {
      href: "https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css",
    },
  ],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "hypertheory-labs", // Usually your GitHub org/user name.
  projectName: "hypertheory-labs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "workshops",
        path: "workshops",
        routeBasePath: "workshops",
        // sidebarPath: require.resolve("./sidebarsCommunity.js"),
        // ... other options
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "labs",
        path: "labs",
        routeBasePath: "labs",
        // sidebarPath: require.resolve("./sidebarsCommunity.js"),
        // ... other options
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Hypertheory Labs",
        logo: {
          alt: "Hypertheory Labs Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Learn",
          },
          {
            to: "/workshops",
            label: "Workshops",
            position: "left",
          },
          {
            to: "/labs",
            label: "Labs",
            position: "left",
          },
          { to: "/blog", label: "Blog", position: "left" },
          // {
          //   to: "/staff",
          //   label: "Staff",
          //   position: "right",
          // },
          {
            href: "https://github.com/hypertheory-labs/hypertheory-labs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Sections",
            items: [
              {
                label: "Learn",
                to: "/docs/intro",
              },
              {
                label: "Workshops",
                to: "/workshops",
              },
              {
                label: "Labs",
                to: "/labs",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/NWksZJAh",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/hypertheorylabs",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/hypertheory-labs",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Hypertheory, Inc. and Content Authors. `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
