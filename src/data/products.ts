import type { Product } from '@/types/product';

export const PRODUCTS: Product[] = [
  {
    id: 'necklace-001',
    sku: 'BNS-NK-2025-DIAMOND',
    category: 'necklaces',
    name: {
      en: 'Diamond Pendant Necklace',
      zh: '钻石吊坠项链'
    },
    description: {
      en: 'Elegant 18K gold with natural diamond.',
      zh: '18K金镶嵌天然钻石，优雅经典。'
    },
    priceRange: [200, 300],
    moq: 30,
    images: [
      '/products/necklaces/diamond-pendant-1.webp'
    ],
    isNewArrival: true,
    isBestSeller: false
  },
  {
    id: 'bracelet-001',
    sku: 'BNS-BR-2025-GOLD',
    category: 'bracelets',
    name: {
      en: 'Gold Bracelet',
      zh: '金手链'
    },
    description: {
      en: 'Beautiful 18K gold bracelet with intricate design.',
      zh: '精美的18K金手链，工艺复杂。'
    },
    priceRange: [150, 250],
    moq: 20,
    images: [
      '/products/bracelets/gold-bracelet-1.webp',
    ],
    isNewArrival: false,
    isBestSeller: true
  },
  {
    id: 'belt-001',
    sku: 'BNS-BT-2025-SILVER',
    category: 'belts',
    name: {
      en: 'Leather Belt',
      zh: '皮革腰带'
    },
    description: {
      en: 'Stylish leather belt for formal occasions.',
      zh: '适用于正式场合的时尚皮革腰带。'
    },
    priceRange: [100, 180],
    moq: 50,
    images: [
      '/products/belts/belt-1.webp',
    ],
    isNewArrival: true,
    isBestSeller: true
  }
];
