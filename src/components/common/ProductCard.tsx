
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  
  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };
  
  return (
    <Link 
      to={`/product/${product.id}`}
      className="product-card block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-[3/4]">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-105"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/70 backdrop-blur-sm rounded-full hover:bg-white"
          onClick={toggleFavorite}
        >
          <Heart 
            className={`h-5 w-5 ${isFavorite ? 'fill-hype-pink text-hype-pink' : 'text-gray-700'}`} 
          />
        </Button>
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-hype-blue text-white text-xs px-2 py-1 rounded">
            NEW
          </span>
        )}
        {product.discount > 0 && (
          <span className="absolute top-2 left-2 bg-hype-pink text-white text-xs px-2 py-1 rounded">
            {product.discount}% OFF
          </span>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-medium text-base">{product.name}</h3>
        <div className="flex items-baseline mt-1 space-x-2">
          <span className="font-semibold">${product.price.toFixed(2)}</span>
          {product.originalPrice > 0 && (
            <span className="text-gray-500 line-through text-sm">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
        
        <div className="flex mt-2 space-x-1">
          {product.colors.map((color, index) => (
            <div 
              key={index} 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
      
      {isHovered && (
        <div className="product-actions absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 p-3 opacity-100 translate-y-0 transition-all duration-300">
          <Button className="w-full bg-white text-black hover:bg-hype-yellow hover:text-black">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      )}
    </Link>
  );
};

export default ProductCard;
