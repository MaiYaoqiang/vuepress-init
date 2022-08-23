const path = require('path')
const {getSidebarList} = require('./utils/index')
const sidebar = getSidebarList(path.join(__dirname, '../sidebarList'))

module.exports = {
  title: 'jjj-admin',
  head: [
    ['link', {rel: 'icon', href: '/favicon.ico'}]
  ],
  themeConfig: {
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
  }
}
