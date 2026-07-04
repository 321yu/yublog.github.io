import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  dest: 'src/.vuepress/dist',  // 强制指定

  locales: {
    "/": {
      lang: "en-US",
      title: "Blog Demo",
      description: "A blog demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "喵屿'blog",
      description: "vuepress-theme-hope 的blog",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
