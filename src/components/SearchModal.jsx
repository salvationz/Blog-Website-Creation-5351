import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiSearch, FiX, FiClock, FiUser, FiArrowRight } = FiIcons;

const SearchModal = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Mock blog posts database
  const allPosts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Explore the cutting-edge technologies and methodologies that are shaping the future of web development.",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      author: "Sarah Johnson",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      category: "Technology",
      tags: ["Web Development", "Technology", "Trends", "AI", "WebAssembly"]
    },
    {
      id: 2,
      title: "Mastering React Hooks: Advanced Patterns and Best Practices",
      excerpt: "Deep dive into advanced React Hooks patterns that will elevate your component architecture.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      author: "Michael Chen",
      date: "Dec 12, 2024",
      readTime: "12 min read",
      category: "Technology",
      tags: ["React", "Hooks", "JavaScript", "Frontend"]
    },
    {
      id: 3,
      title: "Design Systems That Scale: Building for the Future",
      excerpt: "Learn how to create design systems that grow with your product and team.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      author: "Emma Rodriguez",
      date: "Dec 10, 2024",
      readTime: "10 min read",
      category: "Design",
      tags: ["Design Systems", "UI/UX", "Scalability", "Components"]
    },
    {
      id: 4,
      title: "The Psychology of User Experience: What Drives Engagement",
      excerpt: "Understand the psychological principles that make interfaces intuitive and engaging.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      author: "David Park",
      date: "Dec 8, 2024",
      readTime: "15 min read",
      category: "Business",
      tags: ["Psychology", "UX", "User Experience", "Engagement"]
    },
    {
      id: 5,
      title: "Modern CSS Techniques: Grid, Flexbox, and Beyond",
      excerpt: "Master the latest CSS techniques to create responsive and beautiful layouts.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      author: "Lisa Chang",
      date: "Dec 5, 2024",
      readTime: "9 min read",
      category: "Design",
      tags: ["CSS", "Grid", "Flexbox", "Layout", "Responsive"]
    },
    {
      id: 6,
      title: "Building Scalable APIs with Node.js and Express",
      excerpt: "Learn how to build robust and scalable APIs that can handle high traffic loads.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      author: "Alex Thompson",
      date: "Dec 3, 2024",
      readTime: "14 min read",
      category: "Technology",
      tags: ["Node.js", "Express", "API", "Backend", "Scalability"]
    }
  ];

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);

    // Simulate API delay
    const timer = setTimeout(() => {
      const results = allPosts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );

      setSearchResults(results);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleResultClick = () => {
    setSearchQuery('');
    setSearchResults([]);
    onClose();
    // Scroll to top when clicking search results
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-start justify-center pt-20"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-xl shadow-2xl w-full max-w-2xl mx-4 max-h-[80vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Header */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiSearch} className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles, authors, or topics..."
                  className="flex-1 text-lg outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <SafeIcon icon={FiX} className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Search Results */}
            <div className="max-h-96 overflow-y-auto">
              {isLoading ? (
                <div className="p-8 text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">Searching...</p>
                </div>
              ) : searchQuery.trim() === '' ? (
                <div className="p-8 text-center text-gray-500">
                  <SafeIcon icon={FiSearch} className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p>Start typing to search articles...</p>
                </div>
              ) : searchResults.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  <p>No results found for "{searchQuery}"</p>
                  <p className="text-sm mt-2">Try searching for different keywords</p>
                </div>
              ) : (
                <div className="p-4 space-y-4">
                  {searchResults.map((post) => (
                    <Link
                      key={post.id}
                      to={`/post/${post.id}`}
                      onClick={handleResultClick}
                      className="block p-4 hover:bg-gray-50 rounded-lg transition-colors group"
                    >
                      <div className="flex space-x-4">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-1">
                            {post.title}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                            <div className="flex items-center space-x-1">
                              <SafeIcon icon={FiUser} className="w-3 h-3" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <SafeIcon icon={FiClock} className="w-3 h-3" />
                              <span>{post.readTime}</span>
                            </div>
                            <span className="px-2 py-1 bg-primary-100 text-primary-600 rounded-full text-xs">
                              {post.category}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <SafeIcon icon={FiArrowRight} className="w-4 h-4 text-gray-400" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Search Tips */}
            {searchQuery.trim() === '' && (
              <div className="p-4 border-t border-gray-200 bg-gray-50">
                <div className="text-sm text-gray-600">
                  <p className="font-medium mb-2">Search tips:</p>
                  <ul className="space-y-1 text-xs">
                    <li>• Search by title, author, or category</li>
                    <li>• Use keywords like "React", "Design", "API"</li>
                    <li>• Press Escape to close</li>
                  </ul>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;