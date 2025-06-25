import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiClock, FiUser, FiArrowRight, FiTag } = FiIcons;

const Category = () => {
  const { category } = useParams();

  // Mock posts data for different categories
  const categoryPosts = {
    technology: [
      {
        id: 1,
        title: "The Future of Web Development: Trends to Watch in 2024",
        excerpt: "Explore the cutting-edge technologies and methodologies that are shaping the future of web development.",
        image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        author: "Sarah Johnson",
        date: "Dec 15, 2024",
        readTime: "8 min read"
      },
      {
        id: 2,
        title: "Mastering React Hooks: Advanced Patterns and Best Practices",
        excerpt: "Deep dive into advanced React Hooks patterns that will elevate your component architecture.",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        author: "Michael Chen",
        date: "Dec 12, 2024",
        readTime: "12 min read"
      }
    ],
    design: [
      {
        id: 3,
        title: "Design Systems That Scale: Building for the Future",
        excerpt: "Learn how to create design systems that grow with your product and team.",
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        author: "Emma Rodriguez",
        date: "Dec 10, 2024",
        readTime: "10 min read"
      }
    ],
    business: [
      {
        id: 4,
        title: "The Psychology of User Experience: What Drives Engagement",
        excerpt: "Understand the psychological principles that make interfaces intuitive and engaging.",
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        author: "David Park",
        date: "Dec 8, 2024",
        readTime: "15 min read"
      }
    ]
  };

  const posts = categoryPosts[category] || [];
  const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);

  const categoryInfo = {
    technology: {
      description: "Latest trends in web development, AI, and software engineering",
      color: "bg-blue-500"
    },
    design: {
      description: "UI/UX design principles, tools, and creative inspiration",
      color: "bg-purple-500"
    },
    business: {
      description: "Entrepreneurship, marketing strategies, and industry insights",
      color: "bg-green-500"
    }
  };

  const info = categoryInfo[category] || { description: "Explore our content", color: "bg-gray-500" };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Category Header */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className={`inline-flex items-center px-4 py-2 ${info.color} rounded-full text-white text-sm font-medium mb-6`}>
              <SafeIcon icon={FiTag} className="w-4 h-4 mr-2" />
              {categoryTitle}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {categoryTitle} Articles
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {info.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {posts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <SafeIcon icon={FiUser} className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <SafeIcon icon={FiClock} className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>

                    <Link
                      to={`/post/${post.id}`}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group"
                    >
                      Read More
                      <SafeIcon 
                        icon={FiArrowRight} 
                        className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" 
                      />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiTag} className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No Articles Yet</h3>
              <p className="text-gray-600 mb-6">
                We're working on adding more content to this category. Check back soon!
              </p>
              <Link
                to="/"
                className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
              >
                <SafeIcon icon={FiArrowRight} className="w-5 h-5 mr-2 rotate-180" />
                Back to Home
              </Link>
            </motion.div>
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default Category;