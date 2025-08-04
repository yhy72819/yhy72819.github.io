import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
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
  },
  {
    text: "关于我",
    icon: "fa-solid fa-user",
    link: "###",
    children:[
      {
        text: "过往经历",
        icon: "pen-to-square",
        link: "2",
      },
      {
        text: "当前研究",
        icon: "pen-to-square",
        link: "3",
      },
      {
        text: "未来展望",
        icon: "pen-to-square",
        link: "3",
      }
    ]
  },
  {
    text: "推荐链接",
    icon: "fa-solid fa-link",
    link: "4",
  },
]);