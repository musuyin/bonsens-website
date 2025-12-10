<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { PRODUCTS } from '@/data/products';
import { computed } from 'vue';

const props = defineProps<{
  productId?: string;
}>();

const { t, locale } = useI18n();

// 获取指定ID的商品或默认第一个商品
const featuredProduct = computed(() => {
  if (props.productId) {
    return PRODUCTS.find(product => product.id === props.productId);
  }
  // 如果没有指定ID，默认使用第一个商品
  return PRODUCTS[0];
});

const productName = computed(() => {
  if (!featuredProduct.value) return '';
  return featuredProduct.value.name[locale.value] || featuredProduct.value.name.en;
});

const productDescription = computed(() => {
  if (!featuredProduct.value) return '';
  return featuredProduct.value.description[locale.value] || featuredProduct.value.description.en;
});

const productFeatures = computed(() => {
  if (!featuredProduct.value?.features) return [];
  return featuredProduct.value.features[locale.value] || featuredProduct.value.features.en || [];
});
</script>

<template>
  <div class="featured-product-showcase" v-if="featuredProduct">
    <div class="content-wrapper">
      <div class="text-content">
        <h2 class="product-title">{{ t('common.treasure') }}</h2>
        <p class="product-description">{{ productDescription }}</p>

        <ul class="features-list" v-if="productFeatures.length > 0">
          <li v-for="(feature, index) in productFeatures" :key="index" class="feature-item">
            {{ feature }}
          </li>
        </ul>

        <button class="cta-button">SHOP NOW!</button>
      </div>

      <div class="image-content">
        <div class="image-wrapper">
          <img :src="featuredProduct.images[0]" :alt="productName" class="product-image" v-if="featuredProduct.images.length > 0">
          <div class="image-placeholder" v-else>
            <div class="placeholder-text">{{ t('product.images') }}</div>
          </div>
          <div class="product-info-below-image">
            <div class="price-tag-below">
              {{ productName }}
              <br>
              ${{ featuredProduct.priceRange[0] }}-${{ featuredProduct.priceRange[1] }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.featured-product-showcase {
  background-image: url('./../assets/bg/featured-bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 4rem 2rem;
  color: #000;
}

.content-wrapper {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.85);
  padding: 2rem;
  border-radius: 12px;
}

.text-content {
  flex: 1;
  min-width: 300px;
}

.image-content {
  flex: 1;
  min-width: 300px;
  display: flex;
  justify-content: center;
}

.image-wrapper {
  position: relative;
  display: inline-block;
  width: 100%;
}

.product-image {
  width: 100%;
  max-width: 500px;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 12px;
}

.product-info-below-image {
  text-align: center;
  margin-top: 1.5rem;
}

.price-tag-below {
  background: rgba(255, 255, 255, 0.9);
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: bold;
  display: inline-block;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  color: #000;
}

.product-title {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: #000;
}

.product-description {
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.9;
  color: #000;
}

.features-list {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.feature-item {
  padding: 0.5rem 0;
  display: flex;
  align-items: flex-start;
  color: #000;
}

.cta-button {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.image-placeholder {
  width: 100%;
  max-width: 500px;
  aspect-ratio: 1/1;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder-text {
  font-size: 1.25rem;
  opacity: 0.7;
  color: #000;
}

@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column;
  }

  .product-title {
    font-size: 2rem;
  }

  .product-image,
  .image-placeholder {
    max-width: 100%;
  }

}
</style>
