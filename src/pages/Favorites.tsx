
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Trash2, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Favorites: React.FC = () => {
  // Sample favorite items data
  const [favorites, setFavorites] = useState([
    {
      id: '1',
      name: 'Graphic Print T-Shirt',
      price: 39.99,
      image: '/images/products/tshirt-1.jpg',
      category: 'men'
    },
    {
      id: '2',
      name: 'Urban Hoodie',
      price: 79.99,
      image: '/images/products/hoodie-1.jpg',
      category: 'men'
    },
    {
      id: '3',
      name: 'Designer Dress',
      price: 129.99,
      image: '/images/products/dress-1.jpg',
      category: 'women'
    }
  ]);

  const removeFromFavorites = (id: string) => {
    setFavorites(favorites.filter(item => item.id !== id));
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold font-display mb-4">Your Favorites</h1>
        <p className="text-gray-600 mb-8">Items you've saved for later.</p>

        {favorites.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="mx-auto h-16 w-16 text-gray-300 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Your favorites list is empty</h2>
            <p className="text-gray-600 mb-8">Save items you love to come back to them later.</p>
            <Button asChild className="bg-hype-pink hover:bg-hype-purple">
              <Link to="/shop">Explore Products</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favorites.map((item) => (
              <div key={item.id} className="card-hover bg-white rounded-lg shadow overflow-hidden">
                <div className="relative h-60 overflow-hidden">
                  <Link to={`/product/${item.id}`}>
                    <img 
                      src={item.image || 'https://via.placeholder.com/300'} 
                      alt={item.name}
                      className="w-full h-full object-cover image-hover"
                    />
                  </Link>
                </div>
                <div className="p-4">
                  <Link 
                    to={`/product/${item.id}`} 
                    className="block elegant-hover inline-block mb-1"
                  >
                    <h3 className="font-medium text-lg">{item.name}</h3>
                  </Link>
                  <p className="text-hype-pink font-semibold mb-4">${item.price.toFixed(2)}</p>
                  
                  <div className="flex justify-between">
                    <Button className="bg-hype-blue hover:bg-hype-blue/90 text-sm">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => removeFromFavorites(item.id)}
                      className="text-red-500 hover:bg-red-50 hover:text-red-600"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Favorites;
