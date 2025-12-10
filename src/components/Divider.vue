<template>
  <div class="divider-container">
    <div class="divider-line"></div>
  </div>
</template>

<script setup lang="ts">
// 分隔线组件，支持多种颜色
</script>

<style scoped>
.divider-container {
  display: flex;
  justify-content: center;
  padding: 4rem 0;
  width: 100%;
}

.divider-line {
  height: 4px;
  width: 100%;
  max-width: 600px;
  background: linear-gradient(to right, #ff7e5f, #feb47b, #86a8e7, #91eae4);
  border-radius: 2px;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .divider-container {
    padding: 3rem 0;
  }

  .divider-line {
    max-width: 90%;
  }
}

/* 大屏幕适配 */
@media (min-width: 1200px) {
  .divider-line {
    max-width: 800px;
  }
}
</style>
