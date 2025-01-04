import { createRouter, createWebHistory } from 'vue-router'

// 导入页面组件
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Categories from '../views/Categories.vue'

// 定义路由规则
const routes = [
  { path: '/', component: Home },           // 首页
  { path: '/about', component: About },     // 关于我们
  { path: '/contact', component: Contact }, // 联系我们
  { path: '/categories', component: Categories } // 分类页面
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(), // 使用 HTML5 模式
  routes
})

export default router
