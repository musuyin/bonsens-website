<script setup lang="ts">
import Banner from '@/components/Banner.vue';
import ProductCard from '@/components/ProductCard.vue';
import FeaturedProductShowcase from '@/components/FeaturedProductShowcase.vue';
import {useI18n} from 'vue-i18n';
import {PRODUCTS} from '@/data/products';
import {computed} from 'vue';

const {t} = useI18n();

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
      <Banner/>
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

    <!-- 特色商品展示区 -->
    <FeaturedProductShowcase product-id="necklace-001"/>
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
  position: relative;
  z-index: 0;
}

.featured-products {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
}

.featured-products h2 {
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


/* 移动端适配 - 每行显示两个产品卡片 */
@media (max-width: 768px) {
  .featured-products {
    padding: 1rem;
  }

  .products-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

}
</style>