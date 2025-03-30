
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl lg:text-5xl font-display font-bold">
              About <span className="hypeshow-gradient">HYPESHOW</span>
            </h1>
            <p className="text-lg text-gray-600">
              HYPESHOW was founded with a vision to revolutionize the streetwear industry 
              by combining high-quality craftsmanship with bold, innovative designs that 
              speak to the modern generation.
            </p>
            <p className="text-lg text-gray-600">
              Our mission is to create clothing that not only looks good but feels good, 
              and allows everyone to express their unique style with confidence.
            </p>
            <div className="pt-4">
              <Button asChild className="bg-hype-blue hover:bg-hype-blue/90">
                <Link to="/collections/featured">Explore Our Collections</Link>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1566831650747-6a6c7dd668a7?q=80&w=1974&auto=format&fit=crop"
              alt="HYPESHOW Team"
              className="w-full h-auto rounded-lg object-cover aspect-[4/3]"
            />
          </div>
        </div>
        
        {/* Our Story */}
        <div className="mb-20">
          <h2 className="text-3xl font-display font-bold mb-8 text-center">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">The Beginning</h3>
              <p className="text-gray-600">
                Founded in 2018 by a group of fashion designers and artists, HYPESHOW 
                started as a small studio in New York City with a commitment to creating 
                unique, statement pieces that challenge the status quo.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Our Growth</h3>
              <p className="text-gray-600">
                From our humble beginnings, we've grown into a global brand, connecting 
                with fashion enthusiasts across continents. Our commitment to quality and 
                innovation has remained unwavering through our journey.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Today</h3>
              <p className="text-gray-600">
                Today, HYPESHOW continues to push boundaries in fashion, collaborating with 
                artists, influencers, and other brands to create collections that resonate 
                with our diverse community around the world.
              </p>
            </div>
          </div>
        </div>
        
        {/* Our Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At the core of HYPESHOW are values that guide everything we do—from the materials we source to 
              the relationships we build with our customers and partners.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex">
              <div className="mr-4 h-12 w-12 flex items-center justify-center rounded-full bg-hype-yellow text-black flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Creativity</h3>
                <p className="text-gray-600">
                  We believe in the power of creative expression. Our designs are bold, 
                  innovative, and meant to inspire confidence and self-expression in those who 
                  wear them.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 h-12 w-12 flex items-center justify-center rounded-full bg-hype-pink text-white flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Quality</h3>
                <p className="text-gray-600">
                  We never compromise on quality. Every material is carefully selected, 
                  and every piece undergoes rigorous quality checks to ensure longevity and 
                  comfort.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 h-12 w-12 flex items-center justify-center rounded-full bg-hype-blue text-white flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Sustainability</h3>
                <p className="text-gray-600">
                  We're committed to reducing our environmental footprint. From using recycled 
                  materials to implementing eco-friendly practices in our production, we're 
                  working towards a more sustainable future.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 h-12 w-12 flex items-center justify-center rounded-full bg-hype-teal text-white flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p className="text-gray-600">
                  Our customers aren't just buyers; they're part of our community. We value 
                  their feedback, celebrate their style, and work to create an inclusive 
                  environment for fashion enthusiasts everywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-64 w-full overflow-hidden rounded-lg mb-4">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
                  alt="Sarah Johnson"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="font-bold">Sarah Johnson</h3>
              <p className="text-hype-blue">Founder & Creative Director</p>
            </div>
            
            <div className="text-center">
              <div className="h-64 w-full overflow-hidden rounded-lg mb-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
                  alt="David Chen"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="font-bold">David Chen</h3>
              <p className="text-hype-blue">Head of Design</p>
            </div>
            
            <div className="text-center">
              <div className="h-64 w-full overflow-hidden rounded-lg mb-4">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop"
                  alt="Emily Rodriguez"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="font-bold">Emily Rodriguez</h3>
              <p className="text-hype-blue">Marketing Director</p>
            </div>
            
            <div className="text-center">
              <div className="h-64 w-full overflow-hidden rounded-lg mb-4">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop"
                  alt="Michael Thompson"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="font-bold">Michael Thompson</h3>
              <p className="text-hype-blue">Operations Manager</p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-black text-white p-8 md:p-16 rounded-lg text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Join the HYPESHOW Movement</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Be part of our journey and express yourself through our exclusive collections. 
            Follow us on social media for updates, behind-the-scenes content, and more.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-hype-pink hover:bg-hype-purple">
              <Link to="/shop">Shop Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
