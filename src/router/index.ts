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
  history: createWebHistory(),
  routes
});

export default router;
