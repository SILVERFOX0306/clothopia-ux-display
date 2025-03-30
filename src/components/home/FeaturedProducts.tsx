
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../common/ProductCard';
import { featuredProducts } from '@/data/products';
import { Button } from '@/components/ui/button';

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-10">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-display font-bold">Featured Products</h2>
            <p className="text-gray-600 mt-2">Discover our most popular items this season</p>
          </div>
          <Link to="/shop" className="mt-2 md:mt-0">
            <Button variant="outline" className="border-hype-blue text-hype-blue hover:bg-hype-blue/10 transition-all duration-300">
              View All Products
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {featuredProducts.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
