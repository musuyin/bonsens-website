<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import ProductCard from '@/components/ProductCard.vue';
import { PRODUCTS } from '@/data/products';
import type { Product } from '@/types/product';

// 导入背景图片
import beltBg from '@/assets/bg/category-bg-belt.png';
import necklaceBg from '@/assets/bg/category-bg-necklace.png';
import braceletBg from '@/assets/bg/category-bg-bracelet.webp';

const { t } = useI18n();
const router = useRouter();

// 定义分类信息，包括各自的背景图片
const categories = computed(() => [
  {
    id: 'belts',
    name: t('categories.belts'),
    background: beltBg
  },
  {
    id: 'necklaces',
    name: t('categories.necklaces'),
    background: necklaceBg
  },
  {
    id: 'bracelets',
    name: t('categories.bracelets'),
    background: braceletBg
  }
]);

// 为每个分类获取3-4个代表性商品
const getCategoryProducts = (categoryId: string): Product[] => {
  return PRODUCTS.filter(product => product.category === categoryId).slice(0, 4);
};

// 跳转到指定分类页面
const goToCategory = (categoryId: string) => {
  router.push(`/category/${categoryId}`);
};
</script>

<template>
  <section class="categories-section">
    <div v-for="category in categories" :key="category.id" class="category-group">
      <!-- 分类标题背景图 -->
      <div
        class="category-header"
        @click="goToCategory(category.id)"
        :style="{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${category.background})` }"
      >
        <div class="header-content">
          <h3>{{ category.name }}</h3>
          <button class="view-all-btn">{{ t('product.viewDetails') }}</button>
        </div>
      </div>

      <!-- 分类中的商品 -->
      <div class="products-container">
        <div class="products-grid">
          <ProductCard
            v-for="product in getCategoryProducts(category.id)"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.categories-section {
  width: 100%;
  overflow-x: hidden;
}

.category-group {
  margin-bottom: 3rem;
}

.category-group:first-child .category-header {
  margin-top: 2rem;
}

.category-header {
  width: 100vw;
  max-width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding: 3rem 2rem;
  margin-bottom: 1.5rem;
  color: white;
  cursor: pointer;
  background-size: cover;
  background-position: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  min-height: 200px;
  position: relative;
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.category-header:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.header-content {
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.category-header h3 {
  font-size: 2rem;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
}

.view-all-btn {
  background-color: rgba(255, 255, 255, 0.2);
  border: 1px solid white;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.1rem;
  backdrop-filter: blur(5px);
  transition: background-color 0.3s;
}

.view-all-btn:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

.products-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  box-sizing: border-box;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .products-container {
    padding: 0 1rem;
  }

  .category-header {
    padding: 1.5rem 1rem;
    min-height: auto;
  }

  .header-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .category-header h3 {
    font-size: 1.5rem;
  }

  .view-all-btn {
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }

  .products-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}
</style>
