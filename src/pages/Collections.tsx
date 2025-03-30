
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Collections: React.FC = () => {
  // Sample collection data
  const collections = [
    {
      id: 'summer-essentials',
      name: 'Summer Essentials',
      description: 'Beat the heat with our curated summer collection',
      image: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=2070&auto=format&fit=crop',
      background: 'bg-gradient-to-br from-hype-blue to-hype-teal'
    },
    {
      id: 'streetwear',
      name: 'Streetwear Edition',
      description: 'Urban styles for the modern trendsetter',
      image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2070&auto=format&fit=crop',
      background: 'bg-gradient-to-br from-hype-pink to-hype-purple'
    },
    {
      id: 'minimalist',
      name: 'Minimalist Collection',
      description: 'Simple, elegant designs for everyday wear',
      image: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?q=80&w=2071&auto=format&fit=crop',
      background: 'bg-gradient-to-br from-hype-yellow to-hype-pink'
    },
    {
      id: 'limited-edition',
      name: 'Limited Edition',
      description: 'Exclusive pieces available for a limited time',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop',
      background: 'bg-black text-white'
    }
  ];

  return (
    <Layout>
      <div className="py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">Our Collections</h1>
          <p className="text-gray-600">
            Discover our carefully curated collections, each with its own unique style and story.
            Explore the latest trends and timeless classics to find your perfect look.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection) => (
            <Link 
              to={`/collections/${collection.id}`} 
              key={collection.id}
              className="collection-card aspect-[4/3] card-hover"
            >
              <div className="image-hover-container h-full">
                <img 
                  src={collection.image} 
                  alt={collection.name} 
                  className="image-hover"
                />
              </div>
              <div className="collection-content">
                <h2 className="text-3xl font-bold font-display mb-2">{collection.name}</h2>
                <p className="mb-4 text-white/90">{collection.description}</p>
                <Button 
                  variant="outline" 
                  className="bg-white/20 backdrop-blur-sm border-white text-white hover:bg-white hover:text-black"
                >
                  Explore Collection <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Collections;
