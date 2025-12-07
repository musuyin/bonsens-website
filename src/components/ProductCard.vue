<script setup lang="ts">
import type { Product } from '@/types/product';
import { useI18n } from 'vue-i18n';

const props = defineProps<{
  product: Product
}>();

const { locale } = useI18n();

const productName = props.product.name[locale.value] || props.product.name.en;
const productDescription = props.product.description[locale.value] || props.product.description.en;
</script>

<template>
  <div class="product-card">
    <div class="product-image">
      <img
        v-if="product.images && product.images.length > 0"
        :src="product.images[0]"
        :alt="productName"
      >
      <div v-else class="placeholder-image">No Image</div>
    </div>

    <div class="product-info">
      <h3 class="product-name">{{ productName }}</h3>
      <p class="product-description">{{ productDescription }}</p>

      <div class="product-meta">
        <span class="price-range">${{ product.priceRange[0] }} - ${{ product.priceRange[1] }}</span>
        <span class="moq">MOQ: {{ product.moq }}</span>
      </div>

      <div class="product-tags">
        <span v-if="product.isNewArrival" class="tag new">New</span>
        <span v-if="product.isBestSeller" class="tag best">Best Seller</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: white;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

.product-image {
  height: 200px;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.placeholder-image {
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  height: 100%;
}

.product-info {
  padding: 1rem;
}

.product-name {
  font-size: 1.1rem;
  margin: 0 0 0.5rem 0;
  color: #333;
}

.product-description {
  color: #666;
  font-size: 0.9rem;
  margin: 0 0 1rem 0;
  line-height: 1.4;
}

.product-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.price-range {
  font-weight: bold;
  color: #e74c3c;
}

.moq {
  color: #7f8c8d;
}

.product-tags {
  display: flex;
  gap: 0.5rem;
}

.tag {
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
}

.tag.new {
  background-color: #3498db;
  color: white;
}

.tag.best {
  background-color: #f39c12;
  color: white;
}
</style>