# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

石家庄时煜源创科技有限公司的静态官网，纯 HTML/CSS/JS，无构建工具、无框架、无后端。

## 本地预览

直接在浏览器中打开 `index.html` 即可。无需安装依赖，无需启动服务器。

```bash
# Windows 快速打开
start index.html
```

## 项目结构

```
├── index.html          # 首页
├── products.html       # 产品服务
├── about.html          # 关于我们
├── blog.html           # 新闻动态
├── contact.html        # 联系我们 + 在线留言表单
├── css/style.css       # 全站统一样式（暗色科技风主题）
├── js/main.js          # 交互逻辑（手机端菜单切换）
└── images/
    ├── logo-bg.jpg     # 首页横幅背景图
    └── logo-text.css   # logo 文字样式
```

## 架构要点

- **单 CSS 文件控制全站样式**：`css/style.css` 包含所有页面样式，修改样式只需改这一个文件
- **响应式断点**：768px 以下切换为移动端布局（网格从多列变单列，导航变汉堡菜单）
- **页面共享组件**：导航栏和页脚在每个 HTML 页面中重复（非模板引擎），修改时需同步更新所有 5 个 HTML 文件
- **固定导航栏**：`position: fixed`，页面内容需 `padding-top` 避免被遮挡
- **动画效果**：CSS `@keyframes` 实现网格背景移动、文字发光、数据扫描线等效果

## 已知占位/未完成项

- `contact.html` 的表单提交只有 `alert` 提示，无后端接收（需要后端服务支持）

## 修改规范

- 新增页面时复制已有 HTML 文件的结构（header + main + footer），确保导航栏 `class="active"` 指向正确
- 联系信息真实数据：电话 15732165171，邮箱 383200247@qq.com，地址 河北省石家庄市高新区丘头镇徐村南昌路322号
- 修改共享部分（导航/页脚）时，必须同步更新全部 5 个 HTML 文件
