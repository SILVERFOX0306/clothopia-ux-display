
import React from 'react';
import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import CategoryGrid from '@/components/home/CategoryGrid';
import Newsletter from '@/components/home/Newsletter';
import Layout from '@/components/layout/Layout';

const Index: React.FC = () => {
  return (
    <Layout fullWidth>
      <Hero />
      <div className="container mx-auto px-4">
        <FeaturedProducts />
        <CategoryGrid />
        <Newsletter />
      </div>
    </Layout>
  );
};

export default Index;
