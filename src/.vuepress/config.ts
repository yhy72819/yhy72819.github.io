import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "电脑新手",
  description: "记录编程新人的学习过程",
  head: [
    ['link', {rel: 'icon', href: '/assets/icon/greenhand.ico'}]],
  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
