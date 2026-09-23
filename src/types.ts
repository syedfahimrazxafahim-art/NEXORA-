export interface ProductColorway {
  id: string;
  name: string;
  hex: string;
  image: string;
  sku: string;
}

export interface ProductSpec {
  weight: string;
  drop: string;
  outsole: string;
  cushioning: string;
}

export interface MaterialComposition {
  upper: string;
  lining: string;
  midsole: string;
  outsole: string;
  insole: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  category: 'Performance Basketball' | 'Speed Running' | 'Elite Training' | 'Lifestyle';
  gender: 'Men' | 'Women' | 'Unisex';
  sku: string;
  inStock: boolean;
  stockCount: number;
  rating: number;
  reviewCount: number;
  description: string;
  longDescription: string;
  primaryImage: string;
  gallery: string[];
  colorways: ProductColorway[];
  availableSizes: number[];
  specs: ProductSpec;
  materials: MaterialComposition;
  features: {
    title: string;
    description: string;
  }[];
  isNew?: boolean;
  isFeatured?: boolean;
  collection: 'Signature Line' | 'Performance' | 'Limited Edition' | 'Core';
}

export interface CartItem {
  product: Product;
  colorway: ProductColorway;
  size: number;
  quantity: number;
}
