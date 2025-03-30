
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[80vh] bg-black flex items-center">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source 
            src="https://player.vimeo.com/external/517090061.sd.mp4?s=ae49de3527da18c766ae4f9596fd894d6a4d3431&profile_id=164&oauth2_token_id=57447761" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
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
