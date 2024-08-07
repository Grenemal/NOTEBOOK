import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'
import { generateSitemap as sitemap } from 'sitemap-ts'
import { description, docsVersion, github, keywords, name, site } from './meta'
import { genFeed } from './plugins/genFeed'
import { pwa } from './plugins/pwa'
import sidebar from './sidebar'
import socialLinks from './link'
import algolia from './algolia'

export default withPwa(defineConfig({
  pwa,
  outDir: '../dist',
  title: name,
  description,
  appearance: 'dark',
  lastUpdated: true,
  useWebFonts: false,
  markdown: {
    lineNumbers: true,
  },
  locales: {
    root: { label: '简体中文', lang: 'zh-CN' },
  },
  themeConfig: {
    logo: './Fluolab-logo.svg',
    outline: 'deep',
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    returnToTopLabel: '返回顶部',
    outlineTitle: '导航栏',
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '归档',
    editLink: {
      pattern: `${github}/tree/main/docs/:path`,
      text: '在 GitHub 上编辑此页',
    },
    lastUpdatedText: '最后一次更新于',
    footer: {
      message: `用心去做高质量的专业前端内容网站，欢迎 <a target="_blank" style="color: var(--vp-c-brand)" href="${github}">star ⭐</a> 让更多人发现`,
      copyright: `<a target="_blank" href="${github}/blob/main/LICENSE">MIT License</a> | 版权所有 © 2022-${new Date().getFullYear()} <a target="_blank" href="${github}">Fluolab contributors</a>`,
    },
    nav: [
      {
        text: '🏆 往年回顾',
        items: [
          { text: '🔥 24 年资讯', link: '/fluoweekly/2024' },
          { text: '⭐ 23 年资讯', link: '/fluoweekly/2023' },
        ],
      },
      {
        text: '🔥 荧光入门',
        items: [
          { text: '🔥 发光基础', link: '/fluobasic/fluophore/' },
          { text: '🔥 显微镜基础', link: '/fluobasic/microscopy/' },
          { text: '📋 成像基础', link: '/fluobasic/imagings/' },
          { text: '💻 荧光wiki', link: '/fluowiki/' },
        ],
      },
      {
        text: '工具导航',
        items: [
          { text: '⭐ 实用工具', link: '/fluotools/utility/' },
          { text: '💻 化学工具', link: '/fluotools/chemistry/' },
          { text: '🔧 AI工具', link: '/fluotools/AItools/' },
        ],
      },
      {
        text: '资讯阅读',
        items: [
          { text: '✏️ 快讯', link: '/fluoreading/rapid/' },
          { text: '🌱 深度阅读', link: '/fluoreading/deep/' },
        ],
      },
      {
        text: `v${docsVersion}`,
        items: [
          { text: '🧱 参与贡献', link: '/contributing' },
          { text: '🎉 更新日志', link: `${github}/releases` },
        ],
      },
    ],
    // algolia搜索
    search: {
      provider: 'algolia',
      options: algolia,
    },
    sidebar,
    socialLinks,
  },
  head: [
    ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],
    ['meta', { name: 'keywords', content: keywords }],
    ['meta', { name: 'author', content: 'Choi Yang' }],
    ['meta', { property: 'og:type', content: 'article' }],
    ['meta', { name: 'application-name', content: name }],
    ['meta', { name: 'apple-mobile-web-app-title', content: name }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }],

    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['link', { rel: 'mask-icon', href: '/Fluolab-logo.svg', color: '#06f' }],
    ['meta', { name: 'theme-color', content: '#06f' }],

    ['link', { rel: 'apple-touch-icon', sizes: '120x120', href: '/images/icons/apple-touch-icon.png' }],

    // webfont
    ['link', { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }],
    ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: 'https://fonts.gstatic.com' }],
    // og
    ['meta', { property: 'og:description', content: description }],
    ['meta', { property: 'og:url', content: site }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    // analytics
    ['script', { 'async': '', 'defer': '', 'data-website-id': `${process.env.UMAMI_WEBSITE_ID || ''}`, 'src': `${process.env.UMAMI_ENDPOINT || ''}` }],
  ],
  async buildEnd(siteConfig) {
    await sitemap({ hostname: 'https://Fluolab.cn/' })
    await genFeed(siteConfig)
  },
}))
