<template>
  <div class="banner-wrapper">
    <picture>
      <!-- 桌面端 WebP -->
      <source
        media="(min-width: 768px)"
        srcset="/banners/desktop/hero.webp"
        type="image/webp"
      />
      <!-- 移动端 WebP -->
      <source
        media="(max-width: 767px)"
        srcset="/banners/mobile/hero.webp"
        type="image/webp"
      />
      <!-- 回退 JPG（桌面） -->
      <img
        src="/banners/desktop/hero.jpg"
        alt="Bonsens Jewelry Collection"
        class="banner-image"
      />
    </picture>
  </div>
</template>

<script setup lang="ts">
// 响应式 Banner 组件
</script>

<style scoped>
.banner-wrapper {
  width: 100%;
  overflow: hidden;
}

.banner-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}
</style>
