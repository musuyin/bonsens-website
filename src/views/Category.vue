<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import ProductCard from '@/components/ProductCard.vue';
import { PRODUCTS } from '@/data/products';
//import type { Product } from '@/types/product';

const route = useRoute();
const { t } = useI18n();
const category = computed(() => route.params.category as string);

const filteredProducts = computed(() => {
  return PRODUCTS.filter(product => product.category === category.value);
});

const categoryName = computed(() => {
  return t(`categories.${category.value}`) || category.value;
});
</script>

<template>
  <div class="category">
    <h1>{{ categoryName }}</h1>
    <div class="products-grid">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<style scoped>
.category {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.category h1 {
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}
</style>