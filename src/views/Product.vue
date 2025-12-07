<script setup lang="ts">
import {  computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { PRODUCTS } from '@/data/products';

const route = useRoute();
const router = useRouter();
const { locale } = useI18n();

// 查找产品
const product = computed(() => {
  const productId = route.params.id as string;
  return PRODUCTS.find(p => p.id === productId);
});

// 监听路由变化，确保正确更新产品信息
watch(
  () => route.params.id,
  () => {
    if (!product.value) {
      // 如果找不到产品，重定向到404页面或者首页
      // 这里我们暂时显示错误信息
    }
  }
);

// 多语言字段计算
const productName = computed(() =>
  product.value ? (product.value.name[locale.value] || product.value.name.en) : ''
);

const productDescription = computed(() =>
  product.value ? (product.value.description[locale.value] || product.value.description.en) : ''
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
    <button @click="router.push('/')">Back to Home</button>
  </div>
</template>

<style scoped>
.product-detail {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
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
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.product-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.product-details p {
  margin: 0;
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}

.product-details p:last-child {
  border-bottom: none;
}

.not-found {
  padding: 2rem;
  text-align: center;
}

.not-found button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
}

.not-found button:hover {
  background-color: #2980b9;
}

@media (max-width: 768px) {
  .product-info {
    grid-template-columns: 1fr;
  }

  .product-detail {
    padding: 1rem;
  }
}
</style>
