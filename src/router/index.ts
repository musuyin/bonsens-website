import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Category from '@/views/Category.vue';
import Product from '@/views/Product.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category/:category',
    name: 'Category',
    component: Category,
    props: true
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory('/bonsens-website/'),
  routes,
  scrollBehavior() {
    // 总是滚动到页面顶部
    return { top: 0 };
  }
});

export default router;
