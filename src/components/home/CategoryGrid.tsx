
import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'men',
    name: 'Men',
    image: 'https://images.unsplash.com/photo-1554672408-17222f307f16?q=80&w=1470&auto=format&fit=crop',
    description: 'Stylish essentials for the modern man',
  },
  {
    id: 'women',
    name: 'Women',
    image: 'https://images.unsplash.com/photo-1583497217766-7b173d337ff9?q=80&w=1933&auto=format&fit=crop',
    description: 'Contemporary fashion for every occasion',
  },
  {
    id: 'accessories',
    name: 'Accessories',
    image: 'https://images.unsplash.com/photo-1595950653613-ab331c6fa148?q=80&w=1887&auto=format&fit=crop',
    description: 'Complete your look with our accessories',
  },
  {
    id: 'footwear',
    name: 'Footwear',
    image: 'https://images.unsplash.com/photo-1595909177455-7307f822ad6a?q=80&w=1974&auto=format&fit=crop',
    description: 'Step out in style with our latest footwear',
  },
];

const CategoryGrid: React.FC = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-6 md:mb-10">Shop By Category</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link 
              to={`/shop/${category.id}`} 
              key={category.id}
              className="group relative overflow-hidden rounded-lg aspect-[4/5] shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10" />
              <img 
                src={category.image} 
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 z-20 transform transition-transform duration-300 group-hover:translate-y-[-5px]">
                <h3 className="text-white text-xl md:text-2xl font-bold">{category.name}</h3>
                <p className="text-white/80 mt-2 text-sm md:text-base">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
