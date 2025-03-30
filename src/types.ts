
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  discount: number;
  images: string[];
  colors: string[];
  sizes: string[];
  category: string;
  isNew: boolean;
  isFeatured: boolean;
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  color: string;
  size: string;
  price: number;
  quantity: number;
  image: string;
}
