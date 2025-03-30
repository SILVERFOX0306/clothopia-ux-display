
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
      className="product-card block rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
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
          className="absolute top-2 right-2 bg-white/70 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
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
      
      <div className="p-3 sm:p-4">
        <h3 className="font-medium text-sm sm:text-base line-clamp-1">{product.name}</h3>
        <div className="flex items-baseline mt-1 space-x-2">
          <span className="font-semibold text-sm sm:text-base">${product.price.toFixed(2)}</span>
          {product.originalPrice > 0 && (
            <span className="text-gray-500 line-through text-xs sm:text-sm">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
        
        <div className="flex mt-2 space-x-1">
          {product.colors.map((color, index) => (
            <div 
              key={index} 
              className="w-2 h-2 sm:w-3 sm:h-3 rounded-full" 
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
      
      {isHovered && (
        <div className="product-actions absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 p-2 sm:p-3 opacity-100 translate-y-0 transition-all duration-300">
          <Button className="w-full bg-white text-black hover:bg-hype-yellow hover:text-black text-xs sm:text-sm transition-colors">
            <ShoppingCart className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
            Add to Cart
          </Button>
        </div>
      )}
    </Link>
  );
};

export default ProductCard;
