import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "文章",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "笔记",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "静态网站笔记", icon: "pen-to-square", link: "1" },
        ],
      }, 
    ]
  }
]);