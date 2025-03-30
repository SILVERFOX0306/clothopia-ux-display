
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[70vh] md:h-[80vh] bg-black flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1905&auto=format&fit=crop"
          alt="Hero"
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
            The New <span className="hypeshow-gradient">Summer</span> Collection
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-md">
            Express yourself with our latest styles that define the season.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-hype-pink hover:bg-hype-purple text-white"
              asChild
            >
              <Link to="/shop">Shop Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent hover:bg-white/10 text-white border-white"
              asChild
            >
              <Link to="/collections/featured">View Collections</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
