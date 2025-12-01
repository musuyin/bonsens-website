<script setup lang="ts">
// import ResponsiveBanner from '@/components/Banner.vue';
</script>

<template>
  <div class="home">
<!--    <ResponsiveBanner />-->
    <!-- 主打系列产品入口 -->
    <section class="featured-products">
      <h2>{{ $t('common.bestSellers') }}</h2>
      <!-- 这里会显示畅销产品 -->
    </section>

    <section class="featured-products">
      <h2>{{ $t('common.newArrivals') }}</h2>
      <!-- 这里会显示新产品 -->
    </section>

    <!-- 公司实力展示 -->
    <section class="company-strength">
      <h2>{{ $t('common.companyStrength') }}</h2>
      <!-- 公司实力静态图片区 -->
    </section>
  </div>
</template>

<style scoped>
.featured-products,
.company-strength {
  padding: 2rem;
}

.featured-products h2,
.company-strength h2 {
  margin-bottom: 1rem;
  text-align: center;
}
</style>