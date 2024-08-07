---
layout: home

title: Fluolab
titleTemplate: 逆水行舟，不进则退

hero:
  name: Fluolab
  text: "Front-end learning"
  tagline: |
    🔥 学如逆水行舟，不进则退！
  image:
    src: /it.svg
    alt: Fluolab
  actions:
    - theme: brand
      text: 开始阅读
      link: /guide
    - theme: alt
      text: 初入荧光
      link: /fluobasic/
    - theme: alt
      text: GitHub
      link: https://github.com/Grenemal/NOTEBOOK
features:
  - icon: 📋
    title: 初入荧光
    details: 学习荧光知识，从这里开始
    link: /fluobasic/
    linkText: 开始学习
  - icon: 💬
    title: 网站资源
    details: 好刀不离手，学习效率工具
    link: /tools/websource/
    linkText: 浪里淘沙
  - icon: 📓
    title: 实用工具
    details: 磨刀不误砍柴工
    link: /tools/utility/
    linkText: 开始学习
  - icon: 🚚
    title: 荧光Wiki
    details: 记录荧光基础知识
    link: /fluowiki/
    linkText: 开始查阅
  - icon: 💭
    title: 文献速读
    details: 快速了解行业资讯，最新进展
    link: /reading/rapid/
    linkText: 快速阅读
  - icon: 🔧
    title: 深入阅读
    details: 深度阅读才能带来深度理解
    link: /reading/deep/
    linkText: 深入阅读
  - icon: 🌱
    title: 青葱岁月
    details: 人生时光机，记录所有美好的时光。
    link: /memo/
    linkText: 记录当下
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme';
import { icons } from './socialIcons';

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/65065585?v=4',
    name: 'Grenemal',
    title: '逆水行舟，不进则退',
    desc: '荧光研究从业者<br/>Creator @ <a href="https://github.com/Grenemal/NOTEBOOK" target="_blank">Fluolab</a>',
    links: [
      { icon: 'github', link: 'https://github.com/Grenemal/NOTEBOOK' },

    ]
  },

]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      核心成员介绍
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>

<HomeContributors/>
