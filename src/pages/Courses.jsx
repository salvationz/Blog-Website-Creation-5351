import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {
  FiCode, FiPenTool, FiBriefcase, FiClock, FiUsers, FiStar, FiPlay,
  FiBookOpen, FiAward, FiTrendingUp, FiFilter, FiSearch, FiChevronRight,
  FiMonitor, FiSmartphone, FiGlobe, FiDatabase, FiLayers, FiTarget,
  FiCheck, FiHeart, FiShare2, FiCalendar, FiGift, FiZap, FiShield,
  FiX, FiSliders, FiGrid, FiList, FiDownload, FiVideo, FiFileText,
  FiChevronDown, FiChevronUp, FiTag
} = FiIcons;

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [selectedRating, setSelectedRating] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('popular');
  const [likedCourses, setLikedCourses] = useState(new Set());

  const categories = [
    { id: 'all', name: 'All Courses', icon: FiBookOpen, color: 'text-gray-600', count: 24 },
    { id: 'technology', name: 'Technology', icon: FiCode, color: 'text-blue-600', count: 12 },
    { id: 'design', name: 'Design', icon: FiPenTool, color: 'text-purple-600', count: 8 },
    { id: 'business', name: 'Business', icon: FiBriefcase, color: 'text-green-600', count: 4 }
  ];

  const levels = [
    { id: 'all', name: 'All Levels' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' }
  ];

  const durations = [
    { id: 'all', name: 'Any Duration' },
    { id: 'short', name: '< 6 weeks' },
    { id: 'medium', name: '6-12 weeks' },
    { id: 'long', name: '> 12 weeks' }
  ];

  const priceRanges = [
    { id: 'all', name: 'Any Price' },
    { id: 'free', name: 'Free' },
    { id: 'under100', name: 'Under $100' },
    { id: '100to200', name: '$100 - $200' },
    { id: 'over200', name: 'Over $200' }
  ];

  const ratings = [
    { id: 'all', name: 'Any Rating' },
    { id: '4.5', name: '4.5+ Stars' },
    { id: '4.0', name: '4.0+ Stars' },
    { id: '3.5', name: '3.5+ Stars' }
  ];

  const sortOptions = [
    { id: 'popular', name: 'Most Popular' },
    { id: 'rating', name: 'Highest Rated' },
    { id: 'price_low', name: 'Price: Low to High' },
    { id: 'price_high', name: 'Price: High to Low' },
    { id: 'newest', name: 'Newest First' }
  ];

  const courses = [
    {
      id: 1,
      title: 'Complete React Development Bootcamp',
      subtitle: 'Master React from basics to advanced concepts',
      description: 'Build production-ready React applications from scratch. Learn hooks, state management, routing, testing, and deployment.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'technology',
      level: 'intermediate',
      price: 149,
      originalPrice: 199,
      duration: '12 weeks',
      durationWeeks: 12,
      lessons: 45,
      students: 2847,
      rating: 4.8,
      reviews: 342,
      instructor: {
        name: 'Sarah Johnson',
        avatar: 'SJ',
        rating: 4.9,
        students: 15000
      },
      tags: ['React', 'JavaScript', 'Frontend', 'Web Development'],
      features: ['Lifetime Access', 'Certificate', 'Live Support', '30+ Projects'],
      featured: true,
      bestseller: true,
      new: false,
      difficulty: 3,
      lastUpdated: '2024-12-01'
    },
    {
      id: 2,
      title: 'UI/UX Design Fundamentals',
      subtitle: 'Create stunning user interfaces and experiences',
      description: 'Master the principles of user interface and user experience design. Learn design thinking, user research, wireframing, and prototyping.',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'design',
      level: 'beginner',
      price: 99,
      originalPrice: 149,
      duration: '8 weeks',
      durationWeeks: 8,
      lessons: 32,
      students: 1924,
      rating: 4.9,
      reviews: 287,
      instructor: {
        name: 'Emma Rodriguez',
        avatar: 'ER',
        rating: 4.8,
        students: 8500
      },
      tags: ['UI Design', 'UX Design', 'Figma', 'Prototyping'],
      features: ['Portfolio Development', 'Figma License', 'Mentorship', 'Job Guarantee'],
      featured: true,
      bestseller: false,
      new: true,
      difficulty: 2,
      lastUpdated: '2024-11-15'
    },
    {
      id: 3,
      title: 'Digital Marketing Mastery',
      subtitle: 'Complete digital marketing strategy course',
      description: 'Master SEO, social media marketing, content strategy, email marketing, PPC advertising, and analytics.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'business',
      level: 'intermediate',
      price: 129,
      originalPrice: 179,
      duration: '10 weeks',
      durationWeeks: 10,
      lessons: 38,
      students: 3156,
      rating: 4.7,
      reviews: 421,
      instructor: {
        name: 'David Park',
        avatar: 'DP',
        rating: 4.7,
        students: 12000
      },
      tags: ['Digital Marketing', 'SEO', 'Social Media', 'Analytics'],
      features: ['Marketing Tools', 'Case Studies', 'Templates', 'Certification'],
      featured: false,
      bestseller: true,
      new: false,
      difficulty: 3,
      lastUpdated: '2024-12-10'
    },
    {
      id: 4,
      title: 'Python for Data Science',
      subtitle: 'Master Python programming for data analysis',
      description: 'Learn Python programming from scratch and apply it to data science projects with pandas, numpy, and matplotlib.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'technology',
      level: 'beginner',
      price: 89,
      originalPrice: 129,
      duration: '6 weeks',
      durationWeeks: 6,
      lessons: 28,
      students: 1567,
      rating: 4.6,
      reviews: 203,
      instructor: {
        name: 'Alex Chen',
        avatar: 'AC',
        rating: 4.7,
        students: 9500
      },
      tags: ['Python', 'Data Science', 'Analytics', 'Programming'],
      features: ['Hands-on Projects', 'Data Sets', 'Career Support', 'Community'],
      featured: false,
      bestseller: false,
      new: true,
      difficulty: 2,
      lastUpdated: '2024-11-20'
    },
    {
      id: 5,
      title: 'Advanced JavaScript Concepts',
      subtitle: 'Deep dive into modern JavaScript',
      description: 'Master advanced JavaScript concepts including closures, prototypes, async programming, and ES6+ features.',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'technology',
      level: 'advanced',
      price: 179,
      originalPrice: 249,
      duration: '8 weeks',
      durationWeeks: 8,
      lessons: 35,
      students: 892,
      rating: 4.9,
      reviews: 156,
      instructor: {
        name: 'Michael Torres',
        avatar: 'MT',
        rating: 4.9,
        students: 6700
      },
      tags: ['JavaScript', 'ES6+', 'Async Programming', 'Advanced'],
      features: ['Code Reviews', 'Live Sessions', 'Advanced Projects', 'Expert Support'],
      featured: true,
      bestseller: false,
      new: false,
      difficulty: 4,
      lastUpdated: '2024-10-15'
    },
    {
      id: 6,
      title: 'Graphic Design Essentials',
      subtitle: 'Master visual design principles',
      description: 'Learn graphic design fundamentals, typography, color theory, and create stunning visual designs.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      category: 'design',
      level: 'beginner',
      price: 79,
      originalPrice: 119,
      duration: '6 weeks',
      durationWeeks: 6,
      lessons: 24,
      students: 2341,
      rating: 4.5,
      reviews: 298,
      instructor: {
        name: 'Lisa Wang',
        avatar: 'LW',
        rating: 4.6,
        students: 11200
      },
      tags: ['Graphic Design', 'Typography', 'Adobe', 'Visual Design'],
      features: ['Design Software', 'Portfolio Review', 'Templates', 'Feedback'],
      featured: false,
      bestseller: false,
      new: false,
      difficulty: 1,
      lastUpdated: '2024-09-20'
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    const matchesDuration = selectedDuration === 'all' ||
      (selectedDuration === 'short' && course.durationWeeks < 6) ||
      (selectedDuration === 'medium' && course.durationWeeks >= 6 && course.durationWeeks <= 12) ||
      (selectedDuration === 'long' && course.durationWeeks > 12);
    const matchesPrice = selectedPriceRange === 'all' ||
      (selectedPriceRange === 'free' && course.price === 0) ||
      (selectedPriceRange === 'under100' && course.price < 100) ||
      (selectedPriceRange === '100to200' && course.price >= 100 && course.price <= 200) ||
      (selectedPriceRange === 'over200' && course.price > 200);
    const matchesRating = selectedRating === 'all' || course.rating >= parseFloat(selectedRating);
    const matchesSearch = searchQuery === '' ||
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      course.instructor.name.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesLevel && matchesDuration && matchesPrice && matchesRating && matchesSearch;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price_low':
        return a.price - b.price;
      case 'price_high':
        return b.price - a.price;
      case 'newest':
        return new Date(b.lastUpdated) - new Date(a.lastUpdated);
      default: // popular
        return b.students - a.students;
    }
  });

  const featuredCourses = courses.filter(course => course.featured);

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

  const clearAllFilters = () => {
    setSelectedCategory('all');
    setSelectedLevel('all');
    setSelectedDuration('all');
    setSelectedPriceRange('all');
    setSelectedRating('all');
    setSearchQuery('');
  };

  const toggleLike = (courseId) => {
    setLikedCourses(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(courseId)) {
        newLiked.delete(courseId);
      } else {
        newLiked.add(courseId);
      }
      return newLiked;
    });
  };

  const CourseCard = ({ course, featured = false, large = false }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8 }}
      className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group relative ${
        large ? 'lg:col-span-2' : ''
      } ${featured ? 'border-2 border-primary-200 dark:border-primary-800' : ''}`}
    >
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {course.bestseller && (
          <span className="px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
            BESTSELLER
          </span>
        )}
        {course.new && (
          <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg">
            NEW
          </span>
        )}
        {featured && (
          <span className="px-3 py-1 bg-purple-500 text-white text-xs font-bold rounded-full shadow-lg">
            FEATURED
          </span>
        )}
      </div>

      {/* Discount Badge */}
      {course.originalPrice && (
        <div className="absolute top-4 right-4 z-10">
          <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded">
            {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% OFF
          </span>
        </div>
      )}

      <div className="relative overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
            large ? 'h-64' : 'h-48'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Category Badge */}
        <div className="absolute bottom-4 left-4">
          <span className={`px-3 py-1 text-white text-sm font-medium rounded-full shadow-lg ${
            course.category === 'technology' ? 'bg-blue-500' :
            course.category === 'design' ? 'bg-purple-500' : 'bg-green-500'
          }`}>
            {course.category.charAt(0).toUpperCase() + course.category.slice(1)}
          </span>
        </div>

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
            <SafeIcon icon={FiPlay} className="w-8 h-8 text-white ml-1" />
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Course Meta */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-1">
              <SafeIcon icon={FiClock} className="w-4 h-4" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <SafeIcon icon={FiBookOpen} className="w-4 h-4" />
              <span>{course.lessons} lessons</span>
            </div>
            <span className={`px-2 py-1 text-xs rounded-full ${
              course.level === 'beginner' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400' :
              course.level === 'intermediate' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400' :
              'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400'
            }`}>
              {course.level}
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <SafeIcon icon={FiStar} className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{course.rating}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">({course.reviews})</span>
          </div>
        </div>

        {/* Title and Subtitle */}
        <h3 className={`font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200 ${
          large ? 'text-2xl' : 'text-xl'
        }`}>
          {course.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm font-medium">
          {course.subtitle}
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 leading-relaxed">
          {course.description}
        </p>

        {/* Instructor */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">{course.instructor.avatar}</span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">{course.instructor.name}</p>
              <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-1">
                  <SafeIcon icon={FiStar} className="w-3 h-3 text-yellow-500" />
                  <span>{course.instructor.rating}</span>
                </div>
                <span>•</span>
                <span>{course.instructor.students.toLocaleString()} students</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-1 mb-4">
          {course.features.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full flex items-center"
            >
              <SafeIcon icon={FiCheck} className="w-3 h-3 mr-1 text-green-500" />
              {feature}
            </span>
          ))}
        </div>

        {/* Price and Actions */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">${course.price}</span>
            {course.originalPrice && (
              <span className="text-lg text-gray-500 dark:text-gray-400 line-through">${course.originalPrice}</span>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => toggleLike(course.id)}
              className={`p-2 rounded-full transition-colors ${
                likedCourses.has(course.id)
                  ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'
                  : 'text-gray-500 hover:text-red-500 transition-colors'
              }`}
            >
              <SafeIcon icon={FiHeart} className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-blue-500 transition-colors">
              <SafeIcon icon={FiShare2} className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <Link
            to={`/course/${course.id}`}
            className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors font-medium"
          >
            <span>Enroll Now</span>
            <SafeIcon icon={FiChevronRight} className="w-4 h-4" />
          </Link>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-1">
              <SafeIcon icon={FiUsers} className="w-4 h-4" />
              <span>{course.students.toLocaleString()} enrolled</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const CourseListItem = ({ course }) => (
    <motion.div
      variants={itemVariants}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group"
    >
      <div className="flex">
        <div className="relative w-80 h-48 flex-shrink-0">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1">
            {course.bestseller && (
              <span className="px-2 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                BESTSELLER
              </span>
            )}
            {course.new && (
              <span className="px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                NEW
              </span>
            )}
          </div>
        </div>

        <div className="flex-1 p-6">
          <div className="flex justify-between h-full">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  course.category === 'technology' ? 'bg-blue-100 text-blue-800' :
                  course.category === 'design' ? 'bg-purple-100 text-purple-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {course.category}
                </span>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  course.level === 'beginner' ? 'bg-green-100 text-green-800' :
                  course.level === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {course.level}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 transition-colors">
                {course.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                {course.description}
              </p>

              <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                <div className="flex items-center space-x-1">
                  <SafeIcon icon={FiClock} className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <SafeIcon icon={FiBookOpen} className="w-4 h-4" />
                  <span>{course.lessons} lessons</span>
                </div>
                <div className="flex items-center space-x-1">
                  <SafeIcon icon={FiUsers} className="w-4 h-4" />
                  <span>{course.students.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{course.instructor.avatar}</span>
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {course.instructor.name}
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-between items-end ml-6">
              <div className="flex items-center space-x-1 mb-2">
                <SafeIcon icon={FiStar} className="w-4 h-4 text-yellow-500" />
                <span className="font-medium">{course.rating}</span>
                <span className="text-sm text-gray-500">({course.reviews})</span>
              </div>

              <div className="text-right mb-4">
                <div className="text-2xl font-bold text-primary-600">${course.price}</div>
                {course.originalPrice && (
                  <div className="text-sm text-gray-500 line-through">${course.originalPrice}</div>
                )}
              </div>

              <Link
                to={`/course/${course.id}`}
                className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors font-medium"
              >
                View Course
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-all duration-300"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Master New Skills
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Transform Your Career
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Learn from industry experts with hands-on projects, lifetime access, and career support. 
              Join thousands of students who've advanced their careers with our courses.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-primary-600 font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
              >
                Browse All Courses
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
              >
                Start Free Trial
              </motion.button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {[
                { icon: FiUsers, number: '50K+', label: 'Students' },
                { icon: FiBookOpen, number: '200+', label: 'Expert Courses' },
                { icon: FiStar, number: '4.8/5', label: 'Average Rating' },
                { icon: FiAward, number: '95%', label: 'Success Rate' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <SafeIcon icon={stat.icon} className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-primary-200">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Courses */}
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
              Featured Courses
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our most popular and comprehensive courses, designed by industry experts to help you master in-demand skills.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {featuredCourses.map((course, index) => (
              <CourseCard
                key={course.id}
                course={course}
                featured={true}
                large={index === 0}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* All Courses Section with Enhanced Filters */}
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
              All Courses
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Browse our complete catalog and find the perfect course for your learning goals.
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
                placeholder="Search courses, skills, or instructors..."
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
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Main Filters */}
            <div className={`grid grid-cols-1 lg:grid-cols-5 gap-4 ${showFilters ? 'block' : 'hidden lg:grid'}`}>
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* Level Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Level</label>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  {levels.map((level) => (
                    <option key={level.id} value={level.id}>
                      {level.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Duration Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Duration</label>
                <select
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  {durations.map((duration) => (
                    <option key={duration.id} value={duration.id}>
                      {duration.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Price</label>
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  {priceRanges.map((range) => (
                    <option key={range.id} value={range.id}>
                      {range.name}
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
                  Clear All
                </button>
              </div>
            </div>
          </motion.div>

          {/* Results Count */}
          <div className="mb-8 flex items-center justify-between">
            <p className="text-gray-600 dark:text-gray-400">
              Showing {filteredCourses.length} of {courses.length} courses
            </p>
            {(searchQuery || selectedCategory !== 'all' || selectedLevel !== 'all' || selectedDuration !== 'all' || selectedPriceRange !== 'all' || selectedRating !== 'all') && (
              <button
                onClick={clearAllFilters}
                className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
              >
                Clear all filters
              </button>
            )}
          </div>

          {/* Course Grid/List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
          >
            {filteredCourses.map((course) => (
              viewMode === 'grid' ? (
                <CourseCard key={course.id} course={course} />
              ) : (
                <CourseListItem key={course.id} course={course} />
              )
            ))}
          </motion.div>

          {/* No Results */}
          {filteredCourses.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <SafeIcon icon={FiSearch} className="w-12 h-12 text-gray-400 dark:text-gray-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">No Courses Found</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
                We couldn't find any courses matching your criteria. Try adjusting your filters or search terms.
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

      {/* Why Choose Us */}
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
              Why Choose Our Courses?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're committed to providing the best online learning experience with proven results.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: FiAward,
                title: 'Expert Instructors',
                description: 'Learn from industry professionals with years of real-world experience.',
                color: 'bg-blue-500'
              },
              {
                icon: FiZap,
                title: 'Hands-on Projects',
                description: 'Build a portfolio with real-world projects that showcase your skills.',
                color: 'bg-purple-500'
              },
              {
                icon: FiShield,
                title: 'Lifetime Access',
                description: 'Keep learning at your own pace with unlimited access to course materials.',
                color: 'bg-green-500'
              },
              {
                icon: FiUsers,
                title: 'Community Support',
                description: 'Connect with fellow learners and get help when you need it.',
                color: 'bg-orange-500'
              },
              {
                icon: FiTarget,
                title: 'Career Support',
                description: 'Get guidance on job searching, interviews, and career advancement.',
                color: 'bg-red-500'
              },
              {
                icon: FiGift,
                title: 'Certificate',
                description: 'Earn a certificate of completion to showcase your new skills.',
                color: 'bg-indigo-500'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <SafeIcon icon={feature.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Courses;