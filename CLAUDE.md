# CLAUDE.md

# 石家庄时煜源创科技有限公司 官网

纯静态公司官网，暗色科技风，托管于 GitHub Pages。

## 项目结构

```
├── index.html          # 首页（Hero + 优势 + 服务 + 数据 + CTA）
├── products.html       # 产品服务（技术服务/软件开发/互联网销售 + 流程）
├── about.html          # 关于我们（公司简介 + 优势 + 业务范围 + 联系）
├── blog.html           # 新闻动态（分类筛选 + 文章列表 + 分页）
├── contact.html        # 联系我们（联系方式 + 在线留言 + 地图 + FAQ）
├── css/style.css       # 全站统一样式（暗色科技风 · 高级版）
├── js/main.js          # 交互 + 共享组件注入（导航栏/页脚动态加载）
└── images/
    └── logo-bg.jpg     # 背景图（可替换）
```

## 新架构要点

- **共享组件**：导航栏和页脚通过 JS 注入（`main.js`），改一处全站同步。
  每个页面只需放 `<div id="header-placeholder"></div>` 和 `<div id="footer-placeholder"></div>`
- **当前页高亮**：body 上设置 `data-page="index"`（或 products/about/blog/contact），JS 自动高亮对应导航项
- **滚动动画**：元素加 `class="animate-on-scroll"`，进入视口时自动淡入
- **响应式断点**：768px 以下切换移动端布局
- **表单**：提交后打开邮件客户端（mailto），内容自动填充

## 联系信息（真实数据）

- 电话：15732165171
- 邮箱：383200247@qq.com
- 地址：河北省石家庄市高新区丘头镇徐村南昌路322号
- 信用代码：91130101MAEPR5THX4

## 修改要点

1. 导航/页脚改 `js/main.js` 中的 `HEADER_HTML` / `FOOTER_HTML`
2. 新增页面：复制 `data-page="xxx"` 结构 + `header-placeholder` + `footer-placeholder`
3. 删除 `images/logo-text.css`（不再需要）
4. 背景图 `images/logo-bg.jpg` 可替换，引用在首页 hero 区（当前未使用，可随时加上）
