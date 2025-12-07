<script setup lang="ts">
//import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

const router = useRouter();
const { locale, availableLocales } = useI18n();

const switchLanguage = (lang: string) => {
  locale.value = lang;
};

const navigateTo = (path: string) => {
  router.push(path);
};
</script>

<template>
  <header class="site-header">
    <div class="header-content">
      <h1 class="logo" @click="navigateTo('/')">
        <img src="/logo/logo.jpg" alt="BONSENS Logo" class="logo-image" />
      </h1>

      <nav class="navigation">
        <ul>
          <li><a @click="navigateTo('/')" class="nav-link">{{ $t('common.home') }}</a></li>
          <li><a @click="navigateTo('/category/necklaces')" class="nav-link">{{ $t('categories.necklaces') }}</a></li>
          <li><a @click="navigateTo('/category/bracelets')" class="nav-link">{{ $t('categories.bracelets') }}</a></li>
          <li><a @click="navigateTo('/category/belts')" class="nav-link">{{ $t('categories.belts') }}</a></li>
        </ul>
      </nav>

      <div class="language-switcher">
        <select v-model="locale" @change="switchLanguage(locale)">
          <option v-for="lang in availableLocales" :key="lang" :value="lang">
            {{ $t('common.language') }}: {{ lang.toUpperCase() }}
          </option>
        </select>
      </div>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
}

.logo {
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  color: #333;
  white-space: nowrap;
  flex-shrink: 0;
}

.logo-image {
  height: 80px;
  width: auto;
}

.spacer {
  flex-grow: 1;
}

.navigation ul {
  display: flex;
  list-style: none;
  gap: 1rem;
  margin: 0;
  padding: 0;
}

.nav-link {
  cursor: pointer;
  color: #333;
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.3s;
  white-space: nowrap;
}

.nav-link:hover {
  background-color: #f5f5f5;
}

.language-switcher select {
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  white-space: nowrap;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .header-content {
    padding: 0.5rem 1rem;
    flex-wrap: nowrap;
  }

  .logo-image {
    height: 40px;
  }

  .navigation ul {
    flex-wrap: nowrap;
    justify-content: center;
    gap: 0.5rem;
  }

  .nav-link {
    padding: 0.25rem;
    font-size: 0.9rem;
  }

  .language-switcher select {
    padding: 0.2rem;
    font-size: 0.7rem;
  }

  .language-switcher {
    margin-top: 0;
  }
}
</style>