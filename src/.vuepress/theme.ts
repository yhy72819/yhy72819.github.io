import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://computergreenhand.com",

  author: {
    name: "yhy72819",
    url: "https://computergreenhand.com",
  },

  logo: "https://computergreenhand.com/photos/logo.png",

  repo: "yhy72819/yhy72819.github.io",

  docsDir: "src",

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  footer: "默认页脚",
  displayFooter: true,

  // 博客相ß关
  blog: {
    name: "yhy72819",
    description: "一个学习编程的菜鸟",
    avatar: "/photos/avatar.jpg",
    intro: "/intro.html",
    medias: {
      GitHub: "https://github.com/yhy72819",
      Gmail: "https://yuanhuayun713@gmail.com",
      Wechat: "/wechat.jpg",
      VuePressThemeHope: {
        icon: "https://theme-hope-assets.vuejs.press/logo.svg",
        link: "https://theme-hope.vuejs.press",
      },
    },
  },

//加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": {
        hint: "Password: 1234",
        password: "1234",
      },
      "/website-notebook/website-writting-note.html": {
        hint: "",
        password: "12345678a",
      },
    },
  },

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  }, 

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 此处开启了很多功能用于演示，你应仅保留用到的功能。
  markdown: {
    figure: true,
    imgLazyload: true,
    imgMark: true,
    imgSize: true,
    mark: true,
    codeTabs: true,
    tabs: true,
    math: true,
    hint: true,
    alert: true,
    chartjs: false,
    echarts: false,
    mermaid: true,
    vuePlayground: false,
    sub: true,
    spoiler: true,
    sup: true,
    tasklist: true,
    include: true,
    attrs: false,
    footnote: true,
    align: true,
    flowchart: false,
    gfm: true,
    preview: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    vPre: true,
  },
  // 在这里配置主题提供的插件
  plugins: {
    blog: true,
    search: {
      maxSuggestions: 32,
      hotKeys: [],
      locales: {
        "/": {
          placeholder: "搜索"
        }
      }
    },

    // 启用之前需安装 @waline/client
    // 警告: 这是一个仅供演示的测试服务，在生产环境中请自行部署并使用自己的服务！
    comment: {
      provider: "Waline",
      serverURL: "https://comment.computergreenhand.com",
      comment: true,
      pageview: true,
      noCopyright: true,
      reaction: true,
      dark: "auto",
    },

    components: {
      components: ["Badge", "VPCard"],
    },

    icon: {
      assets: "fontawesome",
      prefix: "fa6-solid:",
    },

    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
