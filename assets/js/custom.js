document.addEventListener("DOMContentLoaded", function() {
    const nav = document.getElementById("site-nav");
    if(nav) {
        nav.classList.add("no-greedy"); // 给 nav 添加自定义类
    }
});
