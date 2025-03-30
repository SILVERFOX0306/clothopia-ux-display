
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

export const cartItems: CartItem[] = [
  {
    id: "ci1",
    productId: "p1",
    name: "Urban Tech Jacket",
    color: "black",
    size: "M",
    price: 129.99,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop"
  },
  {
    id: "ci2",
    productId: "p5",
    name: "HYPESHOW Logo Hoodie",
    color: "navy",
    size: "L",
    price: 69.99,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1565693413579-8ff3fdc1b03a?q=80&w=1915&auto=format&fit=crop"
  },
  {
    id: "ci3",
    productId: "p7",
    name: "Minimalist Watch",
    color: "black",
    size: "One Size",
    price: 119.99,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?q=80&w=1942&auto=format&fit=crop"
  }
];
