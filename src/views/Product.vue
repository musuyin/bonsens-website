<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { PRODUCTS } from '@/data/products';
import type { Product } from '@/types/product';

const route = useRoute();
const { locale } = useI18n();

// 查找产品
const productId = route.params.id as string;
const product = ref<Product | null>(null);

// 安全查找（避免未定义）
const found = PRODUCTS.find(p => p.id === productId);
if (found) {
  product.value = found;
} else {
  // 产品未找到
  console.warn(`Product not found: ${productId}`);
}

// 多语言字段计算
const productName = computed(() =>
  product.value ? product.value.name[locale.value] || product.value.name.en : ''
);

const productDescription = computed(() =>
  product.value ? product.value.description[locale.value] || product.value.description.en : ''
);
</script>

<template>
  <div class="product-detail" v-if="product">
    <h1>{{ productName }}</h1>

    <div class="product-info">
      <div class="product-images">
        <!-- 产品图片轮播 -->
        <img
          v-for="(image, index) in product.images"
          :key="index"
          :src="image"
          :alt="`${productName} ${index + 1}`"
          class="product-image"
        >
      </div>

      <div class="product-details">
        <p><strong>{{ $t('product.sku') }}:</strong> {{ product.sku }}</p>
        <p><strong>{{ $t('product.priceRange') }}:</strong> ${{ product.priceRange[0] }} - ${{ product.priceRange[1] }}</p>
        <p><strong>{{ $t('product.moq') }}:</strong> {{ product.moq }}</p>
        <p><strong>{{ $t('product.description') }}:</strong> {{ productDescription }}</p>
      </div>
    </div>
  </div>

  <div class="not-found" v-else>
    <h1>404 - Product Not Found</h1>
    <p>The product you are looking for does not exist.</p>
  </div>
</template>

<style scoped>
.product-detail {
  padding: 2rem;
}

.product-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 1rem;
}

.product-images {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.product-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.product-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.not-found {
  padding: 2rem;
  text-align: center;
}
</style>
