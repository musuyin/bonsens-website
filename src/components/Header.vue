<script setup lang="ts">
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
        <img src="./../assets/logo/logo.jpg" alt="BONSENS Logo" class="logo-image" />
        <span class="logo-text">BONSENS</span>
      </h1>


      <div class="spacer"></div>

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
            {{ lang.toUpperCase() }}
          </option>
        </select>
      </div>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 95%;
  box-sizing: border-box;
}

.logo {
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  color: #333;
  white-space: nowrap;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-image {
  height: 40px;
  width: auto;
}

.logo-text {
  font-size: 1.2rem;
  font-weight: bold;
}

.spacer {
  flex-grow: 1;
}

.navigation ul {
  display: flex;
  list-style: none;
  gap: 0.6rem;
  margin: 0;
  padding: 0;
}

.nav-link {
  cursor: pointer;
  color: #333;
  text-decoration: none;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  transition: background-color 0.3s;
  white-space: nowrap;
  font-size: 0.85rem;
}

.nav-link:hover {
  background-color: #f5f5f5;
}

.language-switcher select {
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  border: 1px solid #ddd;
  white-space: nowrap;
  font-size: 0.85rem;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .header-content {
    padding: 0.2rem 0.5rem;
    flex-wrap: nowrap;
  }

  .logo-image {
    height: 30px;
  }

  .logo-text {
    font-size: 1rem;
  }

  .navigation ul {
    flex-wrap: nowrap;
    justify-content: center;
    gap: 0.2rem;
  }

  .nav-link {
    padding: 0.15rem 0.25rem;
    font-size: 0.75rem;
  }

  .language-switcher select {
    padding: 0.15rem 0.25rem;
    font-size: 0.75rem;
  }

  .language-switcher {
    margin-top: 0;
  }
}
</style>