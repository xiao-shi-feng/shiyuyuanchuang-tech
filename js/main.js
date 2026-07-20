/**
 * 时煜源创科技 - 共享组件加载
 * 导航栏和页脚用 JS 动态注入，改一处全站同步
 */

// ============ 导航栏 HTML ============
const HEADER_HTML = `
<header class="header">
  <nav class="nav container">
    <a href="index.html" class="logo">
      <span class="logo-mark">
        <span class="logo-mark-sq"></span>
        <span class="logo-mark-inner"></span>
      </span>
      <span class="logo-text">时煜源创<small>科技</small></span>
    </a>
    <ul class="nav-links" id="navLinks">
      <li><a href="index.html" data-page="index">首页</a></li>
      <li><a href="products.html" data-page="products">产品服务</a></li>
      <li><a href="about.html" data-page="about">关于我们</a></li>
      <li><a href="blog.html" data-page="blog">新闻动态</a></li>
      <li><a href="contact.html" data-page="contact">联系我们</a></li>
    </ul>
    <button class="menu-toggle" id="menuToggle" aria-label="菜单">
      <span></span><span></span><span></span>
    </button>
  </nav>
</header>
`;

// ============ 页脚 HTML ============
const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-col footer-brand">
        <h4><span class="logo-icon">✦</span> 时煜源创科技</h4>
        <p>技术服务 · 软件开发 · 互联网销售</p>
        <div class="footer-social">
          <a href="mailto:383200247@qq.com" aria-label="邮箱">✉</a>
          <a href="tel:15732165171" aria-label="电话">📞</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>快速链接</h4>
        <ul>
          <li><a href="index.html">首页</a></li>
          <li><a href="products.html">产品服务</a></li>
          <li><a href="about.html">关于我们</a></li>
          <li><a href="blog.html">新闻动态</a></li>
          <li><a href="contact.html">联系我们</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>服务项目</h4>
        <ul>
          <li><a href="products.html#tech">技术服务</a></li>
          <li><a href="products.html#dev">软件开发</a></li>
          <li><a href="products.html#ecom">互联网销售</a></li>
          <li><a href="products.html#process">服务流程</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>联系我们</h4>
        <ul class="footer-contact">
          <li><span class="contact-emoji">📞</span> 15732165171</li>
          <li><span class="contact-emoji">✉</span> 383200247@qq.com</li>
          <li><span class="contact-emoji">📍</span> 河北省石家庄市高新区丘头镇徐村南昌路322号</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2026 石家庄时煜源创科技有限公司 冀ICP备XXXXXX号</p>
    </div>
  </div>
</footer>
`;

// ============ 注入组件 ============
document.addEventListener('DOMContentLoaded', function() {
  // 注入导航栏
  const headerPlaceholder = document.getElementById('header-placeholder');
  if (headerPlaceholder) {
    headerPlaceholder.outerHTML = HEADER_HTML;
  }

  // 注入页脚
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    footerPlaceholder.outerHTML = FOOTER_HTML;
  }

  // 高亮当前页面导航
  setTimeout(function() {
    const currentPage = document.body.getAttribute('data-page') || '';
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(function(link) {
      const page = link.getAttribute('data-page');
      if (page && currentPage && page === currentPage) {
        link.classList.add('active');
      }
    });
  }, 0);

  // 移动端菜单切换
  setTimeout(function() {
    const toggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    if (toggle && navLinks) {
      toggle.addEventListener('click', function() {
        navLinks.classList.toggle('show');
        toggle.classList.toggle('active');
      });
      // 点击链接后收起菜单
      navLinks.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
          navLinks.classList.remove('show');
          toggle.classList.remove('active');
        });
      });
      // 点击外部收起
      document.addEventListener('click', function(e) {
        if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
          navLinks.classList.remove('show');
          toggle.classList.remove('active');
        }
      });
    }
  }, 10);

  // 滚动动画
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  if (animateElements.length > 0) {
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    animateElements.forEach(function(el) { observer.observe(el); });
  }
});
