import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {
  FiClock, FiUser, FiArrowRight, FiTag, FiSearch, FiFilter, FiCalendar,
  FiTrendingUp, FiHeart, FiShare2, FiBookmark, FiEye, FiMessageCircle,
  FiGrid, FiList, FiSliders, FiX, FiStar, FiZap, FiTarget, FiAward,
  FiThumbsUp, FiExternalLink, FiRss, FiBell, FiChevronDown, FiChevronUp,
  FiRefreshCw, FiDownload, FiMail, FiLinkedin, FiTwitter, FiFacebook
} = FiIcons;

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('latest');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTag, setSelectedTag] = useState('all');
  const [readingTime, setReadingTime] = useState('all');
  const [likedPosts, setLikedPosts] = useState(new Set());
  const [bookmarkedPosts, setBookmarkedPosts] = useState(new Set());
  const [showNewsletterModal, setShowNewsletterModal] = useState(false);

  const categories = [
    { id: 'all', name: 'All Posts', count: 24, icon: FiGrid, color: 'bg-gray-500' },
    { id: 'technology', name: 'Technology', count: 12, icon: FiZap, color: 'bg-blue-500' },
    { id: 'design', name: 'Design', count: 8, icon: FiTarget, color: 'bg-purple-500' },
    { id: 'business', name: 'Business', count: 4, icon: FiTrendingUp, color: 'bg-green-500' }
  ];

  const tags = [
    'all', 'React', 'JavaScript', 'UI/UX', 'Frontend', 'Backend', 'AI', 'Machine Learning',
    'Productivity', 'Career', 'Startup', 'Marketing', 'SEO', 'Mobile', 'Web Development'
  ];

  const readingTimes = [
    { id: 'all', name: 'Any Length' },
    { id: 'quick', name: 'Quick Read (< 5 min)' },
    { id: 'medium', name: 'Medium (5-10 min)' },
    { id: 'long', name: 'Long Read (10+ min)' }
  ];

  const posts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Explore the cutting-edge technologies and methodologies that are shaping the future of web development, from AI integration to progressive web apps.",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      author: {
        name: "Sarah Johnson",
        avatar: "SJ",
        bio: "Senior Frontend Developer at Google"
      },
      date: "Dec 15, 2024",
      readTime: "8 min read",
      category: "technology",
      tags: ["Web Development", "AI", "Frontend", "React"],
      views: 1247,
      likes: 89,
      comments: 23,
      featured: true,
      trending: true,
      readTimeMinutes: 8
    },
    {
      id: 2,
      title: "Mastering React Hooks: Advanced Patterns and Best Practices",
      excerpt: "Deep dive into advanced React Hooks patterns that will elevate your component architecture and make your code more maintainable.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      author: {
        name: "Michael Chen",
        avatar: "MC",
        bio: "React Core Team Member"
      },
      date: "Dec 12, 2024",
      readTime: "12 min read",
      category: "technology",
      tags: ["React", "JavaScript", "Frontend", "Hooks"],
      views: 892,
      likes: 67,
      comments: 18,
      featured: true,
      trending: false,
      readTimeMinutes: 12
    },
    {
      id: 3,
      title: "Design Systems That Scale: Building for the Future",
      excerpt: "Learn how to create design systems that grow with your product and team, ensuring consistency across all touchpoints.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      author: {
        name: "Emma Rodriguez",
        avatar: "ER",
        bio: "Design Systems Lead at Airbnb"
      },
      date: "Dec 10, 2024",
      readTime: "10 min read",
      category: "design",
      tags: ["UI/UX", "Design Systems", "Scalability"],
      views: 654,
      likes: 45,
      comments: 12,
      featured: true,
      trending: true,
      readTimeMinutes: 10
    },
    {
      id: 4,
      title: "The Psychology of User Experience: What Drives Engagement",
      excerpt: "Understand the psychological principles that make interfaces intuitive and engaging for users.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      author: {
        name: "David Park",
        avatar: "DP",
        bio: "UX Research Director"
      },
      date: "Dec 8, 2024",
      readTime: "15 min read",
      category: "business",
      tags: ["Psychology", "UX", "User Experience"],
      views: 543,
      likes: 34,
      comments: 8,
      featured: false,
      trending: false,
      readTimeMinutes: 15
    },
    {
      id: 5,
      title: "Modern CSS Techniques: Grid, Flexbox, and Beyond",
      excerpt: "Master the latest CSS techniques to create responsive and beautiful layouts that work across all devices.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      author: {
        name: "Lisa Chang",
        avatar: "LC",
        bio: "CSS Expert & Speaker"
      },
      date: "Dec 5, 2024",
      readTime: "9 min read",
      category: "design",
      tags: ["CSS", "Grid", "Flexbox", "Layout"],
      views: 789,
      likes: 56,
      comments: 15,
      featured: false,
      trending: true,
      readTimeMinutes: 9
    },
    {
      id: 6,
      title: "Building Scalable APIs with Node.js and Express",
      excerpt: "Learn how to build robust and scalable APIs that can handle high traffic loads and complex business logic.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      author: {
        name: "Alex Thompson",
        avatar: "AT",
        bio: "Backend Engineer at Netflix"
      },
      date: "Dec 3, 2024",
      readTime: "14 min read",
      category: "technology",
      tags: ["Node.js", "Express", "API", "Backend"],
      views: 432,
      likes: 28,
      comments: 6,
      featured: false,
      trending: false,
      readTimeMinutes: 14
    },
    {
      id: 7,
      title: "AI-Powered Development: Tools That Will Change Everything",
      excerpt: "Discover the AI tools that are revolutionizing how we write code and build applications.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      author: {
        name: "Ryan Kim",
        avatar: "RK",
        bio: "AI Researcher & Developer"
      },
      date: "Dec 1, 2024",
      readTime: "6 min read",
      category: "technology",
      tags: ["AI", "Machine Learning", "Productivity"],
      views: 1156,
      likes: 98,
      comments: 31,
      featured: false,
      trending: true,
      readTimeMinutes: 6
    },
    {
      id: 8,
      title: "Remote Work Best Practices for Developers",
      excerpt: "Essential tips and tools for maintaining productivity and work-life balance while working remotely.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      author: {
        name: "Jennifer Lee",
        avatar: "JL",
        bio: "Remote Work Consultant"
      },
      date: "Nov 28, 2024",
      readTime: "7 min read",
      category: "business",
      tags: ["Career", "Productivity", "Remote Work"],
      views: 678,
      likes: 42,
      comments: 19,
      featured: false,
      trending: false,
      readTimeMinutes: 7
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesTag = selectedTag === 'all' || post.tags.some(tag => 
      tag.toLowerCase().includes(selectedTag.toLowerCase())
    );
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesReadingTime = readingTime === 'all' ||
      (readingTime === 'quick' && post.readTimeMinutes < 5) ||
      (readingTime === 'medium' && post.readTimeMinutes >= 5 && post.readTimeMinutes <= 10) ||
      (readingTime === 'long' && post.readTimeMinutes > 10);
    
    return matchesCategory && matchesTag && matchesSearch && matchesReadingTime;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.views - a.views;
      case 'liked':
        return b.likes - a.likes;
      case 'commented':
        return b.comments - a.comments;
      default: // latest
        return new Date(b.date) - new Date(a.date);
    }
  });

  const featuredPosts = posts.filter(post => post.featured);
  const trendingPosts = posts.filter(post => post.trending);

  const toggleLike = (postId) => {
    setLikedPosts(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(postId)) {
        newLiked.delete(postId);
      } else {
        newLiked.add(postId);
      }
      return newLiked;
    });
  };

  const toggleBookmark = (postId) => {
    setBookmarkedPosts(prev => {
      const newBookmarked = new Set(prev);
      if (newBookmarked.has(postId)) {
        newBookmarked.delete(postId);
      } else {
        newBookmarked.add(postId);
      }
      return newBookmarked;
    });
  };

  const clearAllFilters = () => {
    setSelectedCategory('all');
    setSelectedTag('all');
    setReadingTime('all');
    setSearchQuery('');
  };

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
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const BlogCard = ({ post, featured = false, large = false }) => (
    <motion.article
      variants={itemVariants}
      whileHover={{ y: -8 }}
      className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group relative ${
        large ? 'md:col-span-2' : ''
      } ${featured ? 'ring-2 ring-primary-200 dark:ring-primary-800' : ''}`}
    >
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {post.trending && (
          <span className="flex items-center space-x-1 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full shadow-lg">
            <SafeIcon icon={FiTrendingUp} className="w-3 h-3" />
            <span>TRENDING</span>
          </span>
        )}
        {featured && (
          <span className="flex items-center space-x-1 px-3 py-1 bg-purple-500 text-white text-xs font-bold rounded-full shadow-lg">
            <SafeIcon icon={FiStar} className="w-3 h-3" />
            <span>FEATURED</span>
          </span>
        )}
      </div>

      {/* Action buttons */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => toggleLike(post.id)}
          className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
            likedPosts.has(post.id)
              ? 'bg-red-500 text-white'
              : 'bg-white/20 text-white hover:bg-white/30'
          }`}
        >
          <SafeIcon icon={FiHeart} className="w-4 h-4" />
        </button>
        <button
          onClick={() => toggleBookmark(post.id)}
          className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
            bookmarkedPosts.has(post.id)
              ? 'bg-yellow-500 text-white'
              : 'bg-white/20 text-white hover:bg-white/30'
          }`}
        >
          <SafeIcon icon={FiBookmark} className="w-4 h-4" />
        </button>
        <button className="p-2 bg-white/20 text-white hover:bg-white/30 rounded-full backdrop-blur-sm transition-colors">
          <SafeIcon icon={FiShare2} className="w-4 h-4" />
        </button>
      </div>

      <div className="relative overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
            large ? 'h-64' : 'h-48'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Category Badge */}
        <div className="absolute bottom-4 left-4">
          <span className={`px-3 py-1 text-white text-sm font-medium rounded-full shadow-lg ${
            categories.find(cat => cat.id === post.category)?.color || 'bg-gray-500'
          }`}>
            {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
          </span>
        </div>

        {/* Read More Arrow */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <SafeIcon icon={FiArrowRight} className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Author & Meta */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">{post.author.avatar}</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900 dark:text-white">{post.author.name}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{post.author.bio}</p>
          </div>
          <div className="flex items-center space-x-3 text-xs text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-1">
              <SafeIcon icon={FiCalendar} className="w-3 h-3" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <SafeIcon icon={FiClock} className="w-3 h-3" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Title */}
        <h3 className={`font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200 ${
          large ? 'text-2xl' : 'text-xl'
        }`}>
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              onClick={() => setSelectedTag(tag)}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Stats & Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-1">
              <SafeIcon icon={FiEye} className="w-4 h-4" />
              <span>{post.views}</span>
            </div>
            <div className="flex items-center space-x-1">
              <SafeIcon icon={FiHeart} className="w-4 h-4" />
              <span>{post.likes + (likedPosts.has(post.id) ? 1 : 0)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <SafeIcon icon={FiMessageCircle} className="w-4 h-4" />
              <span>{post.comments}</span>
            </div>
          </div>

          <Link to={`/post/${post.id}`}>
            <button className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium group">
              Read More
              <SafeIcon icon={FiArrowRight} className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </motion.article>
  );

  const BlogListItem = ({ post }) => (
    <motion.article
      variants={itemVariants}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group"
    >
      <div className="flex">
        <div className="relative w-64 h-40 flex-shrink-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            {post.trending && (
              <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                TRENDING
              </span>
            )}
          </div>
        </div>
        
        <div className="flex-1 p-6">
          <div className="flex justify-between h-full">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-3">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  categories.find(cat => cat.id === post.category)?.color || 'bg-gray-500'
                } text-white`}>
                  {post.category}
                </span>
                <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 transition-colors">
                {post.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                {post.excerpt}
              </p>
              
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{post.author.avatar}</span>
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {post.author.name}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-1">
                {post.tags.slice(0, 4).map((tag, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col justify-between items-end ml-6">
              <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-1">
                  <SafeIcon icon={FiEye} className="w-4 h-4" />
                  <span>{post.views}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <SafeIcon icon={FiHeart} className="w-4 h-4" />
                  <span>{post.likes}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 mt-4">
                <button
                  onClick={() => toggleLike(post.id)}
                  className={`p-2 rounded-full transition-colors ${
                    likedPosts.has(post.id)
                      ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'
                      : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400 hover:bg-red-100 hover:text-red-600'
                  }`}
                >
                  <SafeIcon icon={FiHeart} className="w-4 h-4" />
                </button>
                <button
                  onClick={() => toggleBookmark(post.id)}
                  className={`p-2 rounded-full transition-colors ${
                    bookmarkedPosts.has(post.id)
                      ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400'
                      : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400 hover:bg-yellow-100 hover:text-yellow-600'
                  }`}
                >
                  <SafeIcon icon={FiBookmark} className="w-4 h-4" />
                </button>
              </div>
              
              <Link
                to={`/post/${post.id}`}
                className="mt-4 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors font-medium"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );

  // Newsletter Modal
  const NewsletterModal = () => (
    <AnimatePresence>
      {showNewsletterModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setShowNewsletterModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiMail} className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Stay Updated!</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Get the latest articles and insights delivered to your inbox.
              </p>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 rounded-lg transition-colors">
                  Subscribe Now
                </button>
                <button
                  onClick={() => setShowNewsletterModal(false)}
                  className="w-full text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  Maybe later
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Auto-show newsletter modal after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNewsletterModal(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-all duration-300"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Discover Amazing
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Stories & Insights
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Explore cutting-edge articles on technology, design, and business. 
              Stay ahead with insights from industry experts and thought leaders.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowNewsletterModal(true)}
                className="flex items-center space-x-2 px-8 py-4 bg-white text-primary-600 font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
              >
                <SafeIcon icon={FiBell} className="w-5 h-5" />
                <span>Subscribe to Newsletter</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                className="flex items-center space-x-2 px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
              >
                <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
                <span>Start Reading</span>
              </motion.button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              {[
                { number: '50+', label: 'Articles' },
                { number: '10K+', label: 'Readers' },
                { number: '5+', label: 'Categories' },
                { number: '4.8★', label: 'Rating' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-primary-200">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-white dark:bg-gray-800 -mt-10 relative z-10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Articles
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Don't miss our most popular and trending articles, handpicked by our editorial team.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {featuredPosts.map((post, index) => (
              <BlogCard 
                key={post.id} 
                post={post} 
                featured={true}
                large={index === 0}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* All Posts Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              All Articles
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Browse through our complete collection of articles and find exactly what you're looking for.
            </p>
          </motion.div>

          {/* Enhanced Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-12 shadow-lg"
          >
            {/* Search Bar */}
            <div className="relative mb-6">
              <SafeIcon icon={FiSearch} className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles, authors, or topics..."
                className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Filter Controls */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 mb-6">
              {/* Filter Toggle for Mobile */}
              <div className="lg:hidden">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg"
                >
                  <SafeIcon icon={FiFilter} className="w-4 h-4" />
                  <span>Filters</span>
                  <SafeIcon icon={showFilters ? FiChevronUp : FiChevronDown} className="w-4 h-4" />
                </button>
              </div>

              {/* View Mode & Sort */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'grid' ? 'bg-white dark:bg-gray-600 shadow-sm' : ''
                    }`}
                  >
                    <SafeIcon icon={FiGrid} className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'list' ? 'bg-white dark:bg-gray-600 shadow-sm' : ''
                    }`}
                  >
                    <SafeIcon icon={FiList} className="w-4 h-4" />
                  </button>
                </div>
                
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="latest">Latest</option>
                  <option value="popular">Most Popular</option>
                  <option value="liked">Most Liked</option>
                  <option value="commented">Most Commented</option>
                </select>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 mb-6">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    selectedCategory === category.id
                      ? `${category.color} text-white`
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  <SafeIcon icon={category.icon} className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="text-xs opacity-75">({category.count})</span>
                </button>
              ))}
            </div>

            {/* Advanced Filters */}
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${showFilters ? 'block' : 'hidden lg:grid'}`}>
              {/* Tag Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tags</label>
                <select
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  {tags.map((tag) => (
                    <option key={tag} value={tag}>
                      {tag === 'all' ? 'All Tags' : `#${tag}`}
                    </option>
                  ))}
                </select>
              </div>

              {/* Reading Time Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Reading Time</label>
                <select
                  value={readingTime}
                  onChange={(e) => setReadingTime(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  {readingTimes.map((time) => (
                    <option key={time.id} value={time.id}>
                      {time.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Clear Filters */}
              <div className="flex items-end">
                <button
                  onClick={clearAllFilters}
                  className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500 rounded-lg transition-colors font-medium"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          </motion.div>

          {/* Results Count */}
          <div className="mb-8 flex items-center justify-between">
            <p className="text-gray-600 dark:text-gray-400">
              Showing {filteredPosts.length} of {posts.length} articles
            </p>
            {(searchQuery || selectedCategory !== 'all' || selectedTag !== 'all' || readingTime !== 'all') && (
              <button
                onClick={clearAllFilters}
                className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
              >
                Clear all filters
              </button>
            )}
          </div>

          {/* Posts Grid/List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
          >
            {filteredPosts.map((post) => (
              viewMode === 'grid' ? (
                <BlogCard key={post.id} post={post} />
              ) : (
                <BlogListItem key={post.id} post={post} />
              )
            ))}
          </motion.div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <SafeIcon icon={FiSearch} className="w-12 h-12 text-gray-400 dark:text-gray-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">No Articles Found</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
                We couldn't find any articles matching your criteria. Try adjusting your filters or search terms.
              </p>
              <button
                onClick={clearAllFilters}
                className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
              >
                Clear All Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Trending Now
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Don't miss what everyone's reading. These articles are making waves in the community.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {trendingPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center space-x-2 mb-3">
                  <SafeIcon icon={FiTrendingUp} className="w-4 h-4 text-red-500" />
                  <span className="text-xs font-bold text-red-500 uppercase tracking-wide">Trending</span>
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {post.title}
                </h4>
                <div className="flex items-center space-x-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
                  <span>{post.author.name}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiEye} className="w-3 h-3" />
                      <span>{post.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiHeart} className="w-3 h-3" />
                      <span>{post.likes}</span>
                    </div>
                  </div>
                  <Link to={`/post/${post.id}`} >
                    <button className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300">
                      <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Modal */}
      <NewsletterModal />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-40">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowNewsletterModal(true)}
          className="w-14 h-14 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg flex items-center justify-center"
        >
          <SafeIcon icon={FiMail} className="w-6 h-6" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg flex items-center justify-center"
        >
          <SafeIcon icon={FiRss} className="w-6 h-6" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Blog;