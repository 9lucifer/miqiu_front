<template>
    <div id="app">
      <!-- 页面内容 -->
      <div class="main-content">
        <p>这是页面的主要内容。</p>
        <p>向下滚动查看效果。</p>
        <p>更多内容...</p>
      </div>
  
      <!-- 页脚 -->
      <footer class="footer">
        <p>© 2025 My Blog. All Rights Reserved.</p>
      </footer>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  /* 页面主内容 */
  .main-content {
    min-height: calc(100vh - 4rem); /* 减去 footer 高度 */
    padding-bottom: 1rem; /* 留白，防止内容贴着 footer */
    box-sizing: border-box;
  }
  
  /* 固定底部的 footer */
  .footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 1rem;
    position: fixed; /* 固定在底部 */
    bottom: 0; /* 距离屏幕底部 0 */
    left: 0; /* 确保从屏幕左侧开始 */
    width: 100%; /* 占满整个屏幕宽度 */
    z-index: 1000; /* 保证层级较高 */
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
  }
  
  /* 页面整体布局样式 */
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }
  
  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* 页面最小高度为视口高度 */
  }
  </style>
  