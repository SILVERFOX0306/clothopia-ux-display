
import React from 'react';
import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import CategoryGrid from '@/components/home/CategoryGrid';
import Newsletter from '@/components/home/Newsletter';
import Layout from '@/components/layout/Layout';

const Index: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedProducts />
      <CategoryGrid />
      <Newsletter />
    </Layout>
  );
};

export default Index;
