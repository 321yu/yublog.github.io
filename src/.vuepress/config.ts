import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  // 基础路径, 也就是 D:\yublog\my-docs\  ；就是你github仓库根目录。克隆到其他电脑，绝对路径会变化，但是相对路径就是他
  base: "/",
  // 项目构建输出，我们不用管， yml 脚本才会看
  dest: 'src/.vuepress/dist',  // 强制指定

  // 本地化，中文、英文、俄语等（如果有）（中英文切换会做这件事）
  locales: {
    /* 以键值对的方式来组织数据，左边的键就表示目录，右边的值就表示是哪个本地化（语言）  */
    // 默认根目录的博客是英文
    "/": {
      lang: "en-US",
      title: "Blog Demo",
      description: "A blog demo for vuepress-theme-hope",
    },
    // 默认 /zh/ 目录下是中文， 很麻烦
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
