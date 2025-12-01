import { createI18n } from 'vue-i18n';

// 从 locales 目录导入语言包
import en from '@/locales/en.json';
import zh from '@/locales/zh.json';
import de from '@/locales/de.json';

const messages = {
  en,
  zh,
  de
};

const i18n = createI18n({
  legacy: false, // 使用 Composition API 模式
  locale: 'en', // 默认语言
  fallbackLocale: 'en', // 回退语言
  messages
});

export default i18n;
