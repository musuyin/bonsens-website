<template>
  <div class="banner-container">
    <div
      class="banner-slider"
      @mouseenter="pauseAutoPlay"
      @mouseleave="resumeAutoPlay"
    >
      <!-- 图片/视频轮播项 -->
      <div
        v-for="(item, index) in bannerItems"
        :key="index"
        class="banner-slide"
        :class="{ active: index === currentIndex }"
      >
        <!-- 图片 Banner -->
        <picture v-if="item.type === 'image'" class="responsive-banner">
          <!-- 桌面端 WebP -->
          <source
            media="(min-width: 768px)"
            :srcset="item.desktopWebp"
            type="image/webp"
          />
          <!-- 移动端 WebP -->
          <source
            media="(max-width: 767px)"
            :srcset="item.mobileWebp"
            type="image/webp"
          />
          <!-- 桌面端 JPG -->
          <source
            media="(min-width: 768px)"
            :srcset="item.desktopImage"
            type="image/jpeg"
          />
          <!-- 移动端 JPG -->
          <source
            media="(max-width: 767px)"
            :srcset="item.mobileImage"
            type="image/jpeg"
          />
          <!-- 默认图片 -->
          <img
            :src="isMobile ? item.mobileImage : item.desktopImage"
            :alt="item.alt || 'Banner image'"
            class="banner-image"
          />
        </picture>

        <!-- 视频 Banner -->
        <div v-else-if="item.type === 'video'" class="video-banner">
          <video
            :src="isMobile ? item.mobileVideo : item.desktopVideo"
            autoplay
            muted
            loop
            playsinline
            class="banner-video"
          ></video>
        </div>
      </div>

      <!-- 左右导航按钮 -->
      <button
        class="banner-nav prev"
        @click="prevSlide"
        aria-label="Previous slide"
      >
        &#10094;
      </button>
      <button
        class="banner-nav next"
        @click="nextSlide"
        aria-label="Next slide"
      >
        &#10095;
      </button>

      <!-- 指示器 -->
      <div class="banner-indicators">
        <button
          v-for="(_, index) in bannerItems"
          :key="index"
          class="indicator"
          :class="{ active: index === currentIndex }"
          @click="goToSlide(index)"
          :aria-label="`Go to slide ${index + 1}`"
        ></button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
//import { useI18n } from 'vue-i18n';

// Banner 项目配置
interface BannerItem {
  type: 'image' | 'video';
  desktopImage?: string;
  mobileImage?: string;
  desktopWebp?: string;
  mobileWebp?: string;
  desktopVideo?: string;
  mobileVideo?: string;
  alt?: string;
}

// Banner 配置项
const bannerItems = ref<BannerItem[]>([
  {
    type: 'video',
    desktopVideo: '/banners/desktop/hero.mp4',
    mobileVideo: '/banners/mobile/hero.mp4'
  },
  {
    type: 'image',
    desktopImage: '/banners/desktop/hero-1.jpg',
    mobileImage: '/banners/mobile/hero-1.jpg',
    desktopWebp: '/banners/desktop/hero-1.webp',
    mobileWebp: '/banners/mobile/hero-1.webp',
    alt: 'Hero Banner 1'
  }
]);

// 当前活动索引
const currentIndex = ref(0);

// 是否为移动设备
const isMobile = ref(window.innerWidth < 768);

// 自动播放间隔时间（毫秒）
const autoPlayInterval = ref(5000);

// 自动播放定时器
let autoPlayTimer: number | null = null;

// 处理窗口大小变化
const handleResize = () => {
  isMobile.value = window.innerWidth < 768;
};

// 监听窗口大小变化
onMounted(() => {
  window.addEventListener('resize', handleResize);

  // 初始化检查
  handleResize();

  // 启动自动播放
  startAutoPlay();
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);

  // 清除定时器
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer);
  }
});

// 启动自动播放
const startAutoPlay = () => {
  autoPlayTimer = setInterval(() => {
    nextSlide();
  }, autoPlayInterval.value) as unknown as number;
};

// 暂停自动播放
const pauseAutoPlay = () => {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer);
    autoPlayTimer = null;
  }
};

// 恢复自动播放
const resumeAutoPlay = () => {
  if (!autoPlayTimer) {
    startAutoPlay();
  }
};

// 上一张
const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + bannerItems.value.length) % bannerItems.value.length;
};

// 下一张
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % bannerItems.value.length;
};

// 跳转到指定幻灯片
const goToSlide = (index: number) => {
  currentIndex.value = index;
};

// Banner 描述文本
//const { t } = useI18n();
</script>

<style scoped>
.banner-container {
  width: 100%;
  position: relative;
  overflow: hidden;
}

.banner-slider {
  position: relative;
  width: 100%;
  height: 100%;
}

.banner-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.banner-slide.active {
  opacity: 1;
  position: relative;
}

.responsive-banner {
  width: 100%;
  display: block;
  height: 100%;
}

.video-banner {
  width: 100%;
  height: 100%;
}

.banner-image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.banner-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  vertical-align: middle;
}

.banner-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 16px;
  cursor: pointer;
  font-size: 18px;
  transition: background 0.3s;
  z-index: 10;
}

.banner-nav:hover {
  background: rgba(0, 0, 0, 0.8);
}

.banner-nav.prev {
  left: 0;
}

.banner-nav.next {
  right: 0;
}

.banner-indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: background 0.3s;
}

.indicator.active,
.indicator:hover {
  background: white;
}

/* 移动端竖屏样式 */
@media (max-width: 767px) {
  .banner-container {
    width: 100vw;
    max-width: 100vw;
  }

  .banner-image,
  .banner-video {
    aspect-ratio: 3/4; /* 移动端推荐比例 */
    object-fit: cover;
    max-height: 80vh;
  }
}

@media (min-width: 768px) {
  .banner-image,
  .banner-video {
    aspect-ratio: 16/9; /* 桌面端推荐比例 */
    object-fit: cover;
    max-height: 80vh;
  }
}
</style>