import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCode, FiPenTool, FiBriefcase, FiTrendingUp, FiGlobe, FiCamera } = FiIcons;

const CategorySection = () => {
  const categories = [
    {
      name: 'Technology',
      description: 'Latest trends in web development, AI, and software engineering',
      icon: FiCode,
      color: 'bg-blue-500',
      count: 24,
      slug: 'technology'
    },
    {
      name: 'Design',
      description: 'UI/UX design principles, tools, and creative inspiration',
      icon: FiPenTool,
      color: 'bg-purple-500',
      count: 18,
      slug: 'design'
    },
    {
      name: 'Business',
      description: 'Entrepreneurship, marketing strategies, and industry insights',
      icon: FiBriefcase,
      color: 'bg-green-500',
      count: 15,
      slug: 'business'
    },
    {
      name: 'Growth',
      description: 'Personal development, productivity, and career advancement',
      icon: FiTrendingUp,
      color: 'bg-orange-500',
      count: 12,
      slug: 'growth'
    },
    {
      name: 'Travel',
      description: 'Travel guides, experiences, and cultural discoveries',
      icon: FiGlobe,
      color: 'bg-indigo-500',
      count: 9,
      slug: 'travel'
    },
    {
      name: 'Photography',
      description: 'Photography techniques, gear reviews, and visual storytelling',
      icon: FiCamera,
      color: 'bg-pink-500',
      count: 7,
      slug: 'photography'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dive into topics that matter to you and discover content tailored to your interests.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((category) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to={`/category/${category.slug}`}
                onClick={handleLinkClick}
                className="block p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 ${category.color} rounded-lg mr-4`}>
                    <SafeIcon icon={category.icon} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
                    <span className="text-sm text-gray-500">{category.count} articles</span>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {category.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CategorySection;