import { themes as prismThemes } from "prism-react-renderer"
import type { Config } from "@docusaurus/types"
import type * as Preset from "@docusaurus/preset-classic"

const config: Config = {
  title: "PassNAT 文档中心",
  tagline: "你想知道的都在这里",
  favicon: "img/favicon.ico",
  staticDirectories: ["static", "public"],

  // Set the production url of your site here
  url: "https://doc.passnat.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Star-Flex", // Usually your GitHub org/user name.
  projectName: "passnat-doc", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"]
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/Star-Flex/passnat-doc/tree/main"
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
        },
        theme: {
          customCss: "./src/css/custom.css"
        },
        sitemap: {
          lastmod: "date",
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
          createSitemapItems: async (params) => {
            const { defaultCreateSitemapItems, ...rest } = params
            const items = await defaultCreateSitemapItems(rest)
            return items.filter((item) => !item.url.includes("/page/"))
          }
        }
      } satisfies Preset.Options
    ]
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "PassNAT",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg"
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "文档"
        },
        {
          to: "/aipage",
          label: "AI对话",
          position: "left"
        },
        {
          to: "https://dashboard.passnat.com",
          label: "控制台",
          position: "left"
        },
        {
          href: "https://github.com/star-flex/passnat-doc",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro"
            }
          ]
        },
        {
          title: "Community",
          items: [
            // {
            //   label: "Stack Overflow",
            //   href: "https://stackoverflow.com/questions/tagged/docusaurus",
            // },
            {
              label: "QQ Group",
              href: "https://qm.qq.com/q/2KNMIOn4UM"
            }
          ]
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/star-flex/passnat-doc"
            }
          ]
        }
      ],
      copyright: `<div style="display: flex; flex-direction: column; align-items : center;">
        <div>Copyright © ${new Date().getFullYear()} PassNat, Inc. Built with Docusaurus.</div>
        <a href="https://beian.miit.gov.cn" target="_blank">浙 ICP 备2022019220号 -3</a>
      </div>`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    }
  } satisfies Preset.ThemeConfig
}

export default config
