<template>
  <div id="app">
    <!-- 公共头部 -->
    <Header />
    <!-- 路由渲染 -->
    <router-view />
    <!-- 公共底部 -->
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<style>
/* 全局样式 */
</style>
