/*
  JavaScript 文件 —— 让网页有"交互能力"
  比如：点击菜单按钮弹出导航、表单提交等
*/

// 切换手机端导航菜单的显示/隐藏
function toggleMenu() {
  // 找到导航链接列表
  var navLinks = document.querySelector('.nav-links');
  // 如果有 show 这个 class 就去掉，没有就加上
  // 这就实现了"点一下显示，再点一下隐藏"
  navLinks.classList.toggle('show');
}

// 点击页面其他地方时，自动收起手机端菜单
document.addEventListener('click', function(event) {
  var navLinks = document.querySelector('.nav-links');
  var menuBtn = document.querySelector('.menu-toggle');

  // 如果点击的不是菜单按钮，也不是菜单内部，就收起菜单
  if (!menuBtn.contains(event.target) && !navLinks.contains(event.target)) {
    navLinks.classList.remove('show');
  }
});

/*
  以后如果需要更多功能（比如：表单验证、动画效果），
  都可以在这个文件里添加。
*/
