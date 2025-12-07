<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <div id="app">
    <Header />
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
  position: relative;
  background-color: #f8f9fa; /* 柔和的灰白色背景 */
}

main {
  flex: 1;
  width: 100%;
  position: relative;
  z-index: 1;
}
</style>
