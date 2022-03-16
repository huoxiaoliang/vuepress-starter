module.exports = {
  // 站点配置

  lang: "zh-US",
  title: "Creatar3D开发教程",
  description: "Creatar3D开发教程",
  head: [["link", { rel: "icon", href: "/images/logo.png" }]],
  markdown: {
    lineNumbers: true,
  },
  // 主题和它的配置
  theme: "@vuepress/theme-default",
  themeConfig: {
    logo: "/images/logo.png",
    // nav: [
    //   {
    //     text: "指南",
    //     link: "/guide/相机Camera及视角控制.md",
    //   },
    // ],
    // 可折叠的侧边栏
    sidebar: {
      "/guide/": [
        {
          title: "1. 使用入门",
          collapsable: true,
          path: "framework",
          children: [
            { title: "框架介绍", path: "framework" },
            { title: "快速上手", path: "getStarted" },
          ],
        },
        // ["/handbook/framework", "1. 框架指南"],
        // {
        //   title: "2. 功能特性",
        //   collapsable: true,
        //   children: [
        //     { title: "内置功能", path: "/handbook/" },
        //     { title: "展望未来", path: "/handbook/" },
        //   ],
        // },
      ],
    },
    sidebarDepth: 0, // 设置为 0 将禁用标题链接,页面也可以在使用 YAML front matter 时覆盖此值：sidebarDepth: 2
    lastUpdated: "最后一次更新：", // string | boolean
    smoothScroll: true,
  },
  plugins: [
    "@vuepress/back-to-top",
    [
      "@vuepress/plugin-search",
      {
        locales: {
          "/": {
            placeholder: "Search",
          },
          "/zh/": {
            placeholder: "搜索",
          },
        },
      },
    ],
  ],
};
