import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  dest: 'src/.vuepress/dist',  // 强制指定

  locales: {
    // 英文版
    "/en": {
      lang: "en-US",
      title: "Meow Isle'blog",
      description: "Welcome to Meow Isle Cottage.",
    },
    // 中文版
    "/": {
      lang: "zh-CN",
      title: "Meow Isle'blog",
      description: "Welcome to Meow Isle Cottage.",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
