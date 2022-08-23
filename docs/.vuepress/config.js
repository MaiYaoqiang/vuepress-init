const path = require('path')
const {getSidebarList} = require('./utils/index')
const sidebar = getSidebarList(path.join(__dirname, '../pageList'))

module.exports = {
  base: "/vuepress-init/",
  dest: path.join(__dirname,'../../build'),
  title: 'vuepress-init',
  head: [
    ['link', {rel: 'icon', href: '/favicon.ico'}]
  ],
  themeConfig: {
    nav: [
      {text: '帮助', link: 'https://www.vuepress.cn/'},
    ],
    sidebar: {
      '/': sidebar
    },
    displayAllHeaders: true,
    // logo: '/favicon.ico',
    smoothScroll: true,
    sidebarDepth: 5,
  },
  markdown: {
    lineNumbers: true,
  },

  /* //repo
   repo: 'https://address.com',
   repoLabel: '查看源码',
   editLinks: true,
   editLinkText: '帮助我们改善此页面！',
   docsDir: 'docs',*/
}
