import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  // 右侧数组里边的侧边栏，都会在前边追加键值对的 /zh/ ，
  // 例如 文章 这一个子侧边栏，实际上就是  /zh/posts/ ， children: "structure" 意思是自动扫描 posts/目录下的文件结构来生成菜单，但它默认是不会给你加 1.、2.这种序号的。
  "/zh/": [
    "",
    // {
    //   text: "如何使用",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    {
      text: "学习笔记",
      icon: "book",
      prefix: "posts/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "踩坑记录",
      icon: "book",
      prefix: "posts/",
      children: "structure",
      collapsible: true,
    },
    "intro",
    // {
    //   text: "幻灯片",
    //   icon: "person-chalkboard",
    //   link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    // },
  ],
});
