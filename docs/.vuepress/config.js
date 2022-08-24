import path from 'path'
import {getSidebarList} from './utils/index'

const sidebar = getSidebarList(path.join(__dirname, '../pageList'))
import {defaultTheme} from '@vuepress/theme-default'

module.exports = {
  base: process.env.NODE_ENV === 'production' ? "/vuepress-init/" : '/',
  title: 'vuepress-init',
  head: [
    ['link', {rel: 'icon', href: '/favicon.ico'}]
  ],
  theme: defaultTheme({
    navbar: [
      {text: '帮助', link: 'https://v2.vuepress.vuejs.org/zh/'},
    ],
    sidebar: sidebar,
  }),
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
