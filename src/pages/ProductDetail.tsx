
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, Share2, ShoppingCart, Truck, Package, RotateCcw, ChevronRight } from 'lucide-react';
import { products, featuredProducts } from '@/data/products';
import ProductCard from '@/components/common/ProductCard';
import { toast } from 'sonner';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);
  
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  
  if (!product) {
    navigate('/404');
    return null;
  }
  
  const handleAddToCart = () => {
    if (!selectedColor) {
      toast.error("Please select a color");
      return;
    }
    
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }
    
    // Add to cart logic would go here
    toast.success(`${product.name} added to cart!`);
  };
  
  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      toast.success(`${product.name} added to wishlist!`);
    } else {
      toast.success(`${product.name} removed from wishlist!`);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm mb-8 space-x-1">
          <Link to="/" className="text-gray-500 hover:text-gray-800">Home</Link>
          <ChevronRight className="h-3 w-3 text-gray-500" />
          <Link to="/shop" className="text-gray-500 hover:text-gray-800">Shop</Link>
          <ChevronRight className="h-3 w-3 text-gray-500" />
          <Link to={`/shop/${product.category}`} className="text-gray-500 hover:text-gray-800 capitalize">{product.category}</Link>
          <ChevronRight className="h-3 w-3 text-gray-500" />
          <span className="text-gray-800 font-medium truncate">{product.name}</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src={product.images[activeImage]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button 
                  key={index}
                  className={`aspect-square rounded-md overflow-hidden border-2 ${
                    activeImage === index ? 'border-hype-blue' : 'border-transparent'
                  }`}
                  onClick={() => setActiveImage(index)}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} - view ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div className="space-y-6">
            {product.isNew && (
              <span className="inline-block bg-hype-blue text-white text-xs px-2.5 py-1 rounded">
                NEW ARRIVAL
              </span>
            )}
            
            <h1 className="text-3xl font-display font-bold">{product.name}</h1>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-baseline space-x-2">
                <span className="text-2xl font-semibold">${product.price.toFixed(2)}</span>
                {product.originalPrice > 0 && (
                  <span className="text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                )}
              </div>
              {product.discount > 0 && (
                <span className="bg-hype-pink text-white text-xs px-2.5 py-1 rounded">
                  SAVE {product.discount}%
                </span>
              )}
            </div>
            
            <Separator />
            
            {/* Color Selection */}
            <div>
              <h3 className="text-sm font-medium mb-3">Color: {selectedColor}</h3>
              <div className="flex space-x-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className={`w-8 h-8 rounded-full transition-transform ${
                      selectedColor === color ? 'ring-2 ring-hype-blue ring-offset-2 scale-110' : 'border-2 border-gray-300'
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                    aria-label={`Select ${color} color`}
                  />
                ))}
              </div>
            </div>
            
            {/* Size Selection */}
            <div>
              <div className="flex justify-between mb-3">
                <h3 className="text-sm font-medium">Size: {selectedSize}</h3>
                <button className="text-sm text-hype-blue underline">Size Guide</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`min-w-[3rem] h-10 border-2 rounded-md transition-colors ${
                      selectedSize === size
                        ? 'border-hype-blue bg-hype-blue/10 text-hype-blue font-medium'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Quantity and Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center border rounded-md">
                <button
                  className="w-10 h-10 flex items-center justify-center text-lg font-medium border-r"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <div className="w-12 h-10 flex items-center justify-center">
                  {quantity}
                </div>
                <button
                  className="w-10 h-10 flex items-center justify-center text-lg font-medium border-l"
                  onClick={() => setQuantity(Math.min(10, quantity + 1))}
                >
                  +
                </button>
              </div>
              
              <Button
                className="flex-1 bg-black hover:bg-gray-800 text-white h-10"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10"
                onClick={handleFavoriteToggle}
              >
                <Heart className={`h-5 w-5 ${isFavorite ? 'fill-hype-pink text-hype-pink' : ''}`} />
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10"
              >
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
            
            <Separator />
            
            {/* Product Features */}
            <div className="space-y-3">
              <div className="flex items-center">
                <Truck className="h-5 w-5 text-gray-600 mr-3" />
                <span>Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center">
                <Package className="h-5 w-5 text-gray-600 mr-3" />
                <span>In stock and ready to ship</span>
              </div>
              <div className="flex items-center">
                <RotateCcw className="h-5 w-5 text-gray-600 mr-3" />
                <span>Easy 30 day returns</span>
              </div>
            </div>
            
            {/* Product Description Tabs */}
            <Tabs defaultValue="description" className="mt-8">
              <TabsList className="w-full grid grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="sizing">Sizing</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="mt-4 text-gray-600">
                <p>{product.description}</p>
              </TabsContent>
              <TabsContent value="details" className="mt-4">
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>High-quality materials</li>
                  <li>Premium construction</li>
                  <li>Ethically sourced</li>
                  <li>Machine washable</li>
                  <li>Imported</li>
                </ul>
              </TabsContent>
              <TabsContent value="sizing" className="mt-4">
                <p className="text-gray-600 mb-2">This item follows standard sizing:</p>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="py-2 px-4 text-left">Size</th>
                        <th className="py-2 px-4 text-left">Chest (in)</th>
                        <th className="py-2 px-4 text-left">Waist (in)</th>
                        <th className="py-2 px-4 text-left">Length (in)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 px-4">S</td>
                        <td className="py-2 px-4">36-38</td>
                        <td className="py-2 px-4">30-32</td>
                        <td className="py-2 px-4">28</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-4">M</td>
                        <td className="py-2 px-4">38-40</td>
                        <td className="py-2 px-4">32-34</td>
                        <td className="py-2 px-4">29</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 px-4">L</td>
                        <td className="py-2 px-4">40-42</td>
                        <td className="py-2 px-4">34-36</td>
                        <td className="py-2 px-4">30</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4">XL</td>
                        <td className="py-2 px-4">42-44</td>
                        <td className="py-2 px-4">36-38</td>
                        <td className="py-2 px-4">31</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-display font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
