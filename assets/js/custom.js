(function () {
  // 当宽度 >= this threshold 时，强制把 hidden-links 的项移回 visible-links
  var MOBILE_BREAKPOINT = 768;

  function restoreVisibleLinks() {
    var nav = document.getElementById('site-nav');
    if (!nav) return;
    var visible = nav.querySelector('.visible-links');
    var hidden = nav.querySelector('.hidden-links');
    var toggleBtn = nav.querySelector('button');

    if (!visible || !hidden) return;

    if (window.innerWidth >= MOBILE_BREAKPOINT) {
      // 将 hidden-links 内所有 li 移回 visible-links（按原顺序 append）
      Array.from(hidden.children).forEach(function (li) {
        try { visible.appendChild(li); } catch (e) {}
      });

      // 隐藏隐藏容器和折叠按钮（CSS 已经处理，但这里双重保险）
      hidden.style.display = 'none';
      if (toggleBtn) toggleBtn.style.display = 'none';

      // 强制 visible 不换行
      visible.style.flexWrap = 'nowrap';
      visible.style.whiteSpace = 'nowrap';
    } else {
      // 小屏幕：恢复默认行为（让 greedy-nav 处理）
      if (toggleBtn) toggleBtn.style.display = '';
      hidden.style.display = '';
      visible.style.flexWrap = '';
      visible.style.whiteSpace = '';
    }
  }

  // 监听 DOMContentLoaded + load
  document.addEventListener('DOMContentLoaded', restoreVisibleLinks);
  window.addEventListener('load', restoreVisibleLinks);
  window.addEventListener('resize', function () {
    // 延时一点以便 greedy-js 先运行完（它通常在 resize 后运行）
    clearTimeout(window.__restoreMenuTimer);
    window.__restoreMenuTimer = setTimeout(restoreVisibleLinks, 160);
  });

  // 观察 nav DOM 的变化，greedy-nav 运行时会移动元素 —— 发现变化后再恢复（避免 race condition）
  document.addEventListener('DOMContentLoaded', function () {
    var nav = document.getElementById('site-nav');
    if (!nav) return;
    var observer = new MutationObserver(function () {
      // 小延时，等待 greedy-nav 移动完毕
      clearTimeout(window.__restoreMenuTimer2);
      window.__restoreMenuTimer2 = setTimeout(restoreVisibleLinks, 80);
    });
    observer.observe(nav, { childList: true, subtree: true });
  });
})();

