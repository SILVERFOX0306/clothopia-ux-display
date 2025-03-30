
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/common/ProductCard';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { Filter, SlidersHorizontal, X } from 'lucide-react';

const Shop: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  
  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);
  
  // Filter products based on category and other filters
  const filteredProducts = products.filter(product => {
    const categoryMatch = !category || product.category === category;
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    const colorMatch = selectedColors.length === 0 || product.colors.some(color => selectedColors.includes(color));
    const sizeMatch = selectedSizes.length === 0 || product.sizes.some(size => selectedSizes.includes(size));
    
    return categoryMatch && priceMatch && colorMatch && sizeMatch;
  });
  
  // Available colors and sizes
  const colors = ["black", "white", "gray", "red", "blue", "green", "yellow", "purple", "pink"];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  
  const toggleColor = (color: string) => {
    setSelectedColors(prev => 
      prev.includes(color) 
        ? prev.filter(c => c !== color) 
        : [...prev, color]
    );
  };
  
  const toggleSize = (size: string) => {
    setSelectedSizes(prev => 
      prev.includes(size) 
        ? prev.filter(s => s !== size) 
        : [...prev, size]
    );
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile Filter Button */}
          <div className="md:hidden flex justify-between items-center mb-4">
            <h1 className="text-2xl font-display font-bold">
              {category ? `${category.charAt(0).toUpperCase() + category.slice(1)}` : 'All Products'}
            </h1>
            <Button onClick={toggleFilter} variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" /> Filters
            </Button>
          </div>
          
          {/* Sidebar Filters - Desktop */}
          <div className="hidden md:block w-64 space-y-6">
            <h1 className="text-2xl font-display font-bold">
              {category ? `${category.charAt(0).toUpperCase() + category.slice(1)}` : 'All Products'}
            </h1>
            
            <div>
              <h3 className="font-medium mb-3">Price Range</h3>
              <Slider
                defaultValue={[0, 200]}
                max={200}
                step={5}
                value={priceRange}
                onValueChange={(value) => setPriceRange(value)}
                className="mb-2"
              />
              <div className="flex items-center justify-between text-sm">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="font-medium mb-3">Colors</h3>
              <div className="flex flex-wrap gap-2">
                {colors.map((color) => (
                  <div
                    key={color}
                    className={`w-6 h-6 rounded-full cursor-pointer border transition-transform ${
                      selectedColors.includes(color) ? 'ring-2 ring-hype-blue ring-offset-2 scale-110' : ''
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => toggleColor(color)}
                  />
                ))}
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="font-medium mb-3">Sizes</h3>
              <div className="space-y-2">
                {sizes.map((size) => (
                  <div key={size} className="flex items-center space-x-2">
                    <Checkbox
                      id={`size-${size}`}
                      checked={selectedSizes.includes(size)}
                      onCheckedChange={() => toggleSize(size)}
                    />
                    <label
                      htmlFor={`size-${size}`}
                      className="text-sm cursor-pointer"
                    >
                      {size}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Mobile Filters - Slide in from left */}
          {isFilterOpen && (
            <div className="md:hidden fixed inset-0 bg-white z-50 p-4 overflow-y-auto animate-fade-in">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Filters</h2>
                <Button variant="ghost" size="icon" onClick={toggleFilter}>
                  <X className="w-5 h-5" />
                </Button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Price Range</h3>
                  <Slider
                    defaultValue={[0, 200]}
                    max={200}
                    step={5}
                    value={priceRange}
                    onValueChange={(value) => setPriceRange(value)}
                    className="mb-2"
                  />
                  <div className="flex items-center justify-between text-sm">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="font-medium mb-3">Colors</h3>
                  <div className="flex flex-wrap gap-2">
                    {colors.map((color) => (
                      <div
                        key={color}
                        className={`w-8 h-8 rounded-full cursor-pointer border transition-transform ${
                          selectedColors.includes(color) ? 'ring-2 ring-hype-blue ring-offset-2 scale-110' : ''
                        }`}
                        style={{ backgroundColor: color }}
                        onClick={() => toggleColor(color)}
                      />
                    ))}
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="font-medium mb-3">Sizes</h3>
                  <div className="space-y-2">
                    {sizes.map((size) => (
                      <div key={size} className="flex items-center space-x-2">
                        <Checkbox
                          id={`mobile-size-${size}`}
                          checked={selectedSizes.includes(size)}
                          onCheckedChange={() => toggleSize(size)}
                        />
                        <label
                          htmlFor={`mobile-size-${size}`}
                          className="text-sm cursor-pointer"
                        >
                          {size}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 mt-4">
                  <Button 
                    className="w-full bg-hype-blue hover:bg-hype-blue/90"
                    onClick={toggleFilter}
                  >
                    Apply Filters
                  </Button>
                </div>
              </div>
            </div>
          )}
          
          {/* Products Grid */}
          <div className="flex-1">
            <div className="hidden md:flex justify-between items-center mb-6">
              <p className="text-gray-600">{filteredProducts.length} products</p>
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-gray-500" />
                <select className="border rounded-md text-sm p-1.5">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                </select>
              </div>
            </div>
            
            {filteredProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-gray-500 mb-6">Try adjusting your filters to find what you're looking for.</p>
                <Button 
                  onClick={() => {
                    setPriceRange([0, 200]);
                    setSelectedColors([]);
                    setSelectedSizes([]);
                  }}
                  variant="outline"
                >
                  Clear All Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
