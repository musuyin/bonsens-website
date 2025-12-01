export interface Product {
  id: string;
  sku: string;
  category: 'belts' | 'necklaces' | 'bracelets';
  name: Record<string, string>;  // 多语言名称，如 { en: 'Gold Chain Belt', zh: '金链腰带' }
  description: Record<string, string>; // 多语言描述
  priceRange: [number, number];  // 如 [120, 180] 表示 $120–$180
  moq: number;                   // 最小起订量，如 50
  images: string[];              // 相对路径数组，如 ['/images/belts/gold-1.jpg', ...]
  isNewArrival: boolean;
  isBestSeller: boolean;
}
