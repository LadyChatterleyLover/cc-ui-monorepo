import type { UserConfig } from 'vitepress'

const base = process.env.BASE || '/'

const config: UserConfig = {
  title: 'cc-ui',
  description: '一个简单好用的vue3组件库',
  base,
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
    nav: [
      { text: '文档', link: '/' },
      {
        text: '组件',
        link: '/components/icon/',
        activeMatch: '^/components/',
      },
    ],
    sidebar: [
      {
        text: '指南',
        items: [{ text: '快速开始', link: '/quick-start/' }],
      },
      {
        text: '组件',
        items: [
          { text: 'Icon图标', link: '/components/icon/' },
          { text: 'Button按钮', link: '/components/button/' },
          { text: 'Message信息', link: '/components/message/' },
          { text: 'Tabs标签页', link: '/components/tabs/' },
          { text: 'Form表单', link: '/components/form/' },
        ],
      },
    ],
  },
}

module.exports = config
