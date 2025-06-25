import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import FeaturedPosts from '../components/FeaturedPosts';
import CategorySection from '../components/CategorySection';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 dark:bg-gray-900"
    >
      <Hero />
      <FeaturedPosts />
      <CategorySection />
      <Newsletter />
    </motion.div>
  );
};

export default Home;