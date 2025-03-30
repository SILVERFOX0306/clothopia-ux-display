
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

export const products: Product[] = [
  {
    id: "p1",
    name: "Urban Tech Jacket",
    description: "A versatile jacket that combines style and functionality. Water-resistant fabric with multiple pockets and adjustable hood.",
    price: 129.99,
    originalPrice: 159.99,
    discount: 19,
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591047139709-0ddcaaa7df77?q=80&w=1936&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591047139456-029613bb8af6?q=80&w=1936&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591047138953-20c446440170?q=80&w=1936&auto=format&fit=crop"
    ],
    colors: ["black", "navy", "olive"],
    sizes: ["S", "M", "L", "XL"],
    category: "men",
    isNew: false,
    isFeatured: true
  },
  {
    id: "p2",
    name: "Classic Denim Jacket",
    description: "A timeless denim jacket crafted from premium quality denim. Features a button-up front, adjustable waist tabs, and multiple pockets.",
    price: 89.99,
    originalPrice: 0,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=1887&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?q=80&w=1887&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=1170&auto=format&fit=crop"
    ],
    colors: ["blue", "black", "light-blue"],
    sizes: ["XS", "S", "M", "L", "XL"],
    category: "women",
    isNew: true,
    isFeatured: true
  },
  {
    id: "p3",
    name: "Oversized Graphic Tee",
    description: "A comfortable oversized tee featuring unique graphic prints. Made from 100% organic cotton for all-day comfort.",
    price: 34.99,
    originalPrice: 44.99,
    discount: 22,
    images: [
      "https://images.unsplash.com/photo-1503341733017-1901578f9f1e?q=80&w=1887&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1887&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578681041175-9717c638e1f6?q=80&w=1885&auto=format&fit=crop"
    ],
    colors: ["white", "black", "gray"],
    sizes: ["S", "M", "L", "XL"],
    category: "men",
    isNew: false,
    isFeatured: false
  },
  {
    id: "p4",
    name: "High-Waist Cargo Pants",
    description: "Stylish high-waist cargo pants with multiple utility pockets. Features an adjustable waistband and tapered legs.",
    price: 79.99,
    originalPrice: 0,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1542574271-7f3b92e6c821?q=80&w=1887&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593726853757-7cb27979be36?q=80&w=1887&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605462863648-ad869217d2b7?q=80&w=1887&auto=format&fit=crop"
    ],
    colors: ["beige", "black", "olive", "brown"],
    sizes: ["XS", "S", "M", "L"],
    category: "women",
    isNew: true,
    isFeatured: true
  },
  {
    id: "p5",
    name: "HYPESHOW Logo Hoodie",
    description: "A premium heavyweight hoodie featuring our iconic logo. Brushed fleece interior for exceptional softness and warmth.",
    price: 69.99,
    originalPrice: 0,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1565693413579-8ff3fdc1b03a?q=80&w=1915&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1572495641004-78c9012f2cca?q=80&w=1937&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578681994506-b8bdf7852308?q=80&w=1885&auto=format&fit=crop"
    ],
    colors: ["black", "gray", "navy", "red"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    category: "men",
    isNew: false,
    isFeatured: true
  },
  {
    id: "p6",
    name: "Slim Fit Ripped Jeans",
    description: "Modern slim fit jeans with stylish ripped details. Made from premium stretch denim for comfort and durability.",
    price: 64.99,
    originalPrice: 79.99,
    discount: 19,
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1887&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?q=80&w=1887&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?q=80&w=1915&auto=format&fit=crop"
    ],
    colors: ["blue", "black", "light-blue"],
    sizes: ["28", "30", "32", "34", "36"],
    category: "men",
    isNew: false,
    isFeatured: false
  },
  {
    id: "p7",
    name: "Minimalist Watch",
    description: "A sleek minimalist watch with a clean dial and premium leather strap. Water-resistant up to 30 meters.",
    price: 119.99,
    originalPrice: 149.99,
    discount: 20,
    images: [
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0?q=80&w=1942&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1885&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533139143976-30918502365b?q=80&w=1887&auto=format&fit=crop"
    ],
    colors: ["black", "brown", "tan"],
    sizes: ["One Size"],
    category: "accessories",
    isNew: false,
    isFeatured: true
  },
  {
    id: "p8",
    name: "Cropped Puffer Jacket",
    description: "A trendy cropped puffer jacket that provides warmth without the bulk. Features a high collar and side pockets.",
    price: 99.99,
    originalPrice: 0,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1604644401890-0bd678c83788?q=80&w=1740&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1622168802155-701f6e571878?q=80&w=1896&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591794062780-48d8b7f8e5b3?q=80&w=1974&auto=format&fit=crop"
    ],
    colors: ["black", "red", "silver"],
    sizes: ["XS", "S", "M", "L"],
    category: "women",
    isNew: true,
    isFeatured: false
  },
  {
    id: "p9",
    name: "Canvas Sneakers",
    description: "Classic canvas sneakers with a vulcanized rubber sole. Perfect for casual everyday wear and excellent comfort.",
    price: 54.99,
    originalPrice: 0,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1796&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=1965&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595341504604-2618df5dac0a?q=80&w=1898&auto=format&fit=crop"
    ],
    colors: ["white", "black", "red", "blue"],
    sizes: ["7", "8", "9", "10", "11", "12"],
    category: "footwear",
    isNew: false,
    isFeatured: true
  },
  {
    id: "p10",
    name: "Bucket Hat",
    description: "A trendy bucket hat made from durable cotton twill. Provides protection from the sun with a stylish edge.",
    price: 29.99,
    originalPrice: 0,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1534215754734-18e55d13e346?q=80&w=1908&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1622445272461-c6580cab8755?q=80&w=1937&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517941823-815bea90d291?q=80&w=1886&auto=format&fit=crop"
    ],
    colors: ["black", "beige", "blue"],
    sizes: ["One Size"],
    category: "accessories",
    isNew: false,
    isFeatured: false
  },
  {
    id: "p11",
    name: "Slip Dress",
    description: "An elegant slip dress made from silky smooth fabric. Features adjustable straps and a flattering cut.",
    price: 49.99,
    originalPrice: 69.99,
    discount: 29,
    images: [
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=1964&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534534573898-db5148bc8b0c?q=80&w=1887&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1604772659841-a1612db7000f?q=80&w=1880&auto=format&fit=crop"
    ],
    colors: ["black", "navy", "burgundy"],
    sizes: ["XS", "S", "M", "L"],
    category: "women",
    isNew: false,
    isFeatured: false
  },
  {
    id: "p12",
    name: "Performance Running Shoes",
    description: "Lightweight running shoes designed for optimal performance. Features responsive cushioning and breathable mesh upper.",
    price: 129.99,
    originalPrice: 0,
    discount: 0,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1770&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1950&auto=format&fit=crop"
    ],
    colors: ["black", "gray", "blue", "red"],
    sizes: ["7", "8", "9", "10", "11", "12"],
    category: "footwear",
    isNew: true,
    isFeatured: true
  },
];

export const featuredProducts = products.filter(product => product.isFeatured);
