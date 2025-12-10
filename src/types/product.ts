export interface Product {
    id: string;
    sku: string;
    category: 'belts' | 'necklaces' | 'bracelets';
    name: Record<string, string>;  // 多语言名称，如 { en: 'Gold Chain Belt', zh: '金链腰带' }
    description: Record<string, string>; // 多语言描述
    priceRange: [number, number];  // 如 [120, 180] 表示 $120–$180
    images: string[];              // 相对路径数组，如 ['/images/belts/gold-1.jpg', ...]
    isNewArrival: boolean; // 是否新品
    isBestSeller: boolean;
    features?: Record<string, string[]>; // 特色功能列表（仅特色商品使用）
}