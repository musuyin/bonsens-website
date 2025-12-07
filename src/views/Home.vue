<script setup lang="ts">
import Banner from '@/components/Banner.vue';
import ProductCard from '@/components/ProductCard.vue';
import { useI18n } from 'vue-i18n';
import { PRODUCTS } from '@/data/products';
import { computed } from 'vue';

const { t } = useI18n();

// 获取畅销产品和新品
const bestSellers = computed(() => {
  return PRODUCTS.filter(product => product.isBestSeller);
});

const newArrivals = computed(() => {
  return PRODUCTS.filter(product => product.isNewArrival);
});
</script>

<template>
  <div class="home">
    <!-- 响应式 Banner 区域 -->
    <div class="banner-section">
      <Banner />
    </div>

    <!-- 主打系列产品入口 -->
    <section class="featured-products">
      <h2>{{ t('common.bestSellers') }}</h2>
      <div class="products-grid">
        <ProductCard
          v-for="product in bestSellers"
          :key="product.id"
          :product="product"
        />
      </div>
    </section>

    <section class="featured-products">
      <h2>{{ t('common.newArrivals') }}</h2>
      <div class="products-grid">
        <ProductCard
          v-for="product in newArrivals"
          :key="product.id"
          :product="product"
        />
      </div>
    </section>

    <!-- 公司实力展示 -->
    <section class="company-strength">
      <h2>{{ t('common.companyStrength') }}</h2>
      <div class="strength-gallery">
        <!-- 这里放置公司实力相关的静态图片 -->
        <div class="strength-item">
          <div class="placeholder-image">工厂展示</div>
        </div>
        <div class="strength-item">
          <div class="placeholder-image">仓储能力</div>
        </div>
        <div class="strength-item">
          <div class="placeholder-image">展会参与</div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  width: 100%;
  overflow-x: hidden;
}

.banner-section {
  width: 100vw;
  max-width: 100vw;
  margin-left: calc(-50vw + 50%);
}

.featured-products,
.company-strength {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
}

.featured-products h2,
.company-strength h2 {
  margin-bottom: 1rem;
  text-align: center;
  font-size: 1.8rem;
  color: #333;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.strength-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 1rem;
}

.strength-item {
  text-align: center;
}

.placeholder-image {
  background-color: #f0f0f0;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: #666;
  font-weight: bold;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .featured-products,
  .company-strength {
    padding: 1rem;
  }

  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
  }

  .strength-gallery {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
</style>