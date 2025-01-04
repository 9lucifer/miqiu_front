<template>
    <header class="navbar">
      <nav>
        <ul>
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/categories">分类</router-link></li>
          <li><router-link to="/about">关于我们</router-link></li>
          <li><router-link to="/contact">联系我们</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  /* 导航栏固定在顶部 */
  .navbar {
    position: fixed; /* 固定在屏幕 */
    top: 0;          /* 距离顶部为 0 */
    left: 0;         /* 距离左侧为 0 */
    width: 100%;     /* 占据全屏宽度 */
    background-color: #333;
    color: white;
    padding: 1rem;
    z-index: 1000;   /* 确保导航栏在所有内容之上 */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* 添加阴影，提升视觉层次感 */
  }
  
  /* 列表样式 */
  .navbar ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 1rem;
  }
  
  /* 列表项 */
  .navbar li {
    display: inline;
  }
  
  /* 链接样式 */
  .navbar a {
    color: white;
    text-decoration: none;
  }
  
  .navbar a:hover {
    color: #ffa500;
  }
  
  /* 给页面内容添加顶部留白，避免被导航栏遮挡 */
  body {
    margin: 0;
  }
  
  .main-content {
    margin-top: 4rem; /* 根据导航栏的高度调整留白空间 */
  }
  </style>
  