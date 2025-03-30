
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Collections: React.FC = () => {
  // Sample collection data
  const collections = [
    {
      id: 'summer-essentials',
      name: 'Summer Essentials',
      description: 'Beat the heat with our curated summer collection',
      image: '/images/collections/summer.jpg',
      background: 'bg-gradient-to-br from-hype-blue to-hype-teal'
    },
    {
      id: 'streetwear',
      name: 'Streetwear Edition',
      description: 'Urban styles for the modern trendsetter',
      image: '/images/collections/streetwear.jpg',
      background: 'bg-gradient-to-br from-hype-pink to-hype-purple'
    },
    {
      id: 'minimalist',
      name: 'Minimalist Collection',
      description: 'Simple, elegant designs for everyday wear',
      image: '/images/collections/minimalist.jpg',
      background: 'bg-gradient-to-br from-hype-yellow to-hype-pink'
    },
    {
      id: 'limited-edition',
      name: 'Limited Edition',
      description: 'Exclusive pieces available for a limited time',
      image: '/images/collections/limited.jpg',
      background: 'bg-black text-white'
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold font-display mb-8 text-center">Our Collections</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-center mb-12">
          Discover our carefully curated collections, each with its own unique style and story.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection) => (
            <Link 
              to={`/shop/${collection.id}`} 
              key={collection.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`${collection.background} aspect-video w-full flex items-center justify-center p-12`}>
                <div className="text-center">
                  <h2 className="text-3xl font-bold font-display mb-3">{collection.name}</h2>
                  <p className="mb-4 opacity-90">{collection.description}</p>
                  <Button className="bg-white text-black hover:bg-black hover:text-white transition-colors duration-300 group-hover:scale-105">
                    Shop Collection
                  </Button>
                </div>
              </div>
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Collections;
