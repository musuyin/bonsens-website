<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { PRODUCTS } from '@/data/products';
import type { Product } from '@/types/product';

const route = useRoute();
const category = computed(() => route.params.category as string);

const filteredProducts = computed(() => {
  return PRODUCTS.filter(product => product.category === category.value);
});
</script>

<template>
  <div class="category">
    <h1>{{ $t(`categories.${category}`) }}</h1>
    <div class="products-grid">
      <div v-for="product in filteredProducts" :key="product.id" class="product-card">
        <!-- 产品卡片内容 -->
        <h3>{{ product.name[$i18n.locale] || product.name.en }}</h3>
        <p>{{ product.description[$i18n.locale] || product.description.en }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.category {
  padding: 2rem;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.product-card {
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
</style>