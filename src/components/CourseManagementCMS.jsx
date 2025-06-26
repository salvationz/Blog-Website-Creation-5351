import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {
  FiPlus, FiEdit3, FiTrash2, FiEye, FiSave, FiX, FiUpload, FiImage, FiVideo,
  FiFileText, FiUsers, FiStar, FiClock, FiBookOpen, FiDollarSign, FiTag,
  FiCalendar, FiCheckCircle, FiAlertCircle, FiSettings, FiCopy, FiDownload,
  FiSearch, FiFilter, FiMoreVertical, FiPlay, FiPause, FiArchive, FiRefreshCw,
  FiBarChart3, FiTrendingUp, FiTarget, FiAward, FiMessageSquare, FiHeart,
  FiShare2, FiExternalLink, FiGlobe, FiCode, FiPenTool, FiBriefcase, FiZap
} = FiIcons;

const CourseManagementCMS = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: 'Complete React Development Bootcamp',
      subtitle: 'Master React from basics to advanced concepts',
      description: 'Build production-ready React applications from scratch. Learn hooks, state management, routing, testing, and deployment.',
      category: 'technology',
      level: 'intermediate',
      price: 149,
      originalPrice: 199,
      duration: '12 weeks',
      lessons: 45,
      students: 2847,
      rating: 4.8,
      reviews: 342,
      status: 'published',
      instructor: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      tags: ['React', 'JavaScript', 'Frontend'],
      createdAt: '2024-01-15',
      updatedAt: '2024-12-15',
      enrollment: {
        total: 2847,
        active: 2156,
        completed: 691,
        dropped: 0
      },
      revenue: {
        total: 424203,
        monthly: 35890,
        projected: 450000
      },
      engagement: {
        avgProgress: 67,
        completionRate: 24.3,
        satisfaction: 4.8
      }
    },
    {
      id: 2,
      title: 'UI/UX Design Fundamentals',
      subtitle: 'Create stunning user interfaces and experiences',
      description: 'Learn design principles, user research, wireframing, prototyping, and design systems.',
      category: 'design',
      level: 'beginner',
      price: 99,
      originalPrice: 149,
      duration: '8 weeks',
      lessons: 32,
      students: 1924,
      rating: 4.9,
      reviews: 287,
      status: 'published',
      instructor: 'Emma Rodriguez',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      tags: ['UI Design', 'UX Design', 'Figma'],
      createdAt: '2024-02-01',
      updatedAt: '2024-12-14',
      enrollment: {
        total: 1924,
        active: 1534,
        completed: 390,
        dropped: 0
      },
      revenue: {
        total: 190476,
        monthly: 24750,
        projected: 220000
      },
      engagement: {
        avgProgress: 73,
        completionRate: 20.3,
        satisfaction: 4.9
      }
    },
    {
      id: 3,
      title: 'Digital Marketing Strategy',
      subtitle: 'Master modern digital marketing techniques',
      description: 'Learn SEO, social media marketing, content strategy, email marketing, and analytics.',
      category: 'business',
      level: 'intermediate',
      price: 129,
      originalPrice: 179,
      duration: '10 weeks',
      lessons: 38,
      students: 1456,
      rating: 4.7,
      reviews: 198,
      status: 'draft',
      instructor: 'Michael Chen',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      tags: ['Marketing', 'SEO', 'Analytics'],
      createdAt: '2024-03-10',
      updatedAt: '2024-12-10',
      enrollment: {
        total: 1456,
        active: 1098,
        completed: 358,
        dropped: 0
      },
      revenue: {
        total: 187824,
        monthly: 18900,
        projected: 200000
      },
      engagement: {
        avgProgress: 61,
        completionRate: 24.6,
        satisfaction: 4.7
      }
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');
  const [sortBy, setSortBy] = useState('updatedAt');
  const [viewMode, setViewMode] = useState('grid');
  const [showAnalytics, setShowAnalytics] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    description: '',
    category: 'technology',
    level: 'beginner',
    price: '',
    originalPrice: '',
    duration: '',
    lessons: '',
    instructor: '',
    image: '',
    tags: '',
    status: 'draft'
  });

  const categories = [
    { value: 'technology', label: 'Technology', icon: FiCode, color: 'bg-blue-500' },
    { value: 'design', label: 'Design', icon: FiPenTool, color: 'bg-purple-500' },
    { value: 'business', label: 'Business', icon: FiBriefcase, color: 'bg-green-500' }
  ];

  const levels = [
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' }
  ];

  const statusOptions = [
    { value: 'draft', label: 'Draft', color: 'bg-gray-100 text-gray-800' },
    { value: 'published', label: 'Published', color: 'bg-green-100 text-green-800' },
    { value: 'archived', label: 'Archived', color: 'bg-red-100 text-red-800' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const courseData = {
      ...formData,
      price: parseFloat(formData.price),
      originalPrice: formData.originalPrice ? parseFloat(formData.originalPrice) : null,
      lessons: parseInt(formData.lessons),
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      students: editingCourse ? editingCourse.students : 0,
      rating: editingCourse ? editingCourse.rating : 0,
      reviews: editingCourse ? editingCourse.reviews : 0,
      updatedAt: new Date().toISOString().split('T')[0],
      enrollment: editingCourse ? editingCourse.enrollment : {
        total: 0,
        active: 0,
        completed: 0,
        dropped: 0
      },
      revenue: editingCourse ? editingCourse.revenue : {
        total: 0,
        monthly: 0,
        projected: 0
      },
      engagement: editingCourse ? editingCourse.engagement : {
        avgProgress: 0,
        completionRate: 0,
        satisfaction: 0
      }
    };

    if (editingCourse) {
      setCourses(prev => prev.map(course => 
        course.id === editingCourse.id ? { ...course, ...courseData } : course
      ));
    } else {
      const newCourse = {
        ...courseData,
        id: Date.now(),
        createdAt: new Date().toISOString().split('T')[0]
      };
      setCourses(prev => [...prev, newCourse]);
    }

    setShowModal(false);
    setEditingCourse(null);
    setFormData({
      title: '',
      subtitle: '',
      description: '',
      category: 'technology',
      level: 'beginner',
      price: '',
      originalPrice: '',
      duration: '',
      lessons: '',
      instructor: '',
      image: '',
      tags: '',
      status: 'draft'
    });
  };

  const handleEdit = (course) => {
    setEditingCourse(course);
    setFormData({
      title: course.title,
      subtitle: course.subtitle,
      description: course.description,
      category: course.category,
      level: course.level,
      price: course.price.toString(),
      originalPrice: course.originalPrice?.toString() || '',
      duration: course.duration,
      lessons: course.lessons.toString(),
      instructor: course.instructor,
      image: course.image,
      tags: course.tags.join(', '),
      status: course.status
    });
    setShowModal(true);
  };

  const handleDelete = (courseId) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      setCourses(prev => prev.filter(course => course.id !== courseId));
    }
  };

  const handleDuplicate = (course) => {
    const duplicatedCourse = {
      ...course,
      id: Date.now(),
      title: `${course.title} (Copy)`,
      students: 0,
      rating: 0,
      reviews: 0,
      status: 'draft',
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0],
      enrollment: { total: 0, active: 0, completed: 0, dropped: 0 },
      revenue: { total: 0, monthly: 0, projected: 0 },
      engagement: { avgProgress: 0, completionRate: 0, satisfaction: 0 }
    };
    setCourses(prev => [...prev, duplicatedCourse]);
  };

  const handleBulkAction = (action) => {
    if (selectedCourses.length === 0) return;

    switch (action) {
      case 'delete':
        if (window.confirm(`Are you sure you want to delete ${selectedCourses.length} courses?`)) {
          setCourses(prev => prev.filter(course => !selectedCourses.includes(course.id)));
          setSelectedCourses([]);
        }
        break;
      case 'publish':
        setCourses(prev => prev.map(course => 
          selectedCourses.includes(course.id) ? { ...course, status: 'published' } : course
        ));
        setSelectedCourses([]);
        break;
      case 'archive':
        setCourses(prev => prev.map(course => 
          selectedCourses.includes(course.id) ? { ...course, status: 'archived' } : course
        ));
        setSelectedCourses([]);
        break;
    }
  };

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesStatus = filterStatus === 'all' || course.status === filterStatus;
    const matchesCategory = filterCategory === 'all' || course.category === filterCategory;
    
    return matchesSearch && matchesStatus && matchesCategory;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'title':
        return a.title.localeCompare(b.title);
      case 'students':
        return b.students - a.students;
      case 'revenue':
        return b.revenue.total - a.revenue.total;
      case 'rating':
        return b.rating - a.rating;
      default:
        return new Date(b.updatedAt) - new Date(a.updatedAt);
    }
  });

  // Calculate overall statistics
  const totalStudents = courses.reduce((sum, course) => sum + course.students, 0);
  const totalRevenue = courses.reduce((sum, course) => sum + course.revenue.total, 0);
  const avgRating = courses.reduce((sum, course) => sum + course.rating, 0) / courses.length;
  const publishedCourses = courses.filter(course => course.status === 'published').length;

  const CourseModal = () => (
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setShowModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {editingCourse ? 'Edit Course' : 'Create New Course'}
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <SafeIcon icon={FiX} className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Basic Information */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Basic Information</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Course Title *
                          </label>
                          <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            placeholder="Enter course title"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Subtitle
                          </label>
                          <input
                            type="text"
                            name="subtitle"
                            value={formData.subtitle}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            placeholder="Brief course subtitle"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Description *
                          </label>
                          <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            required
                            rows={4}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                            placeholder="Detailed course description"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Category *
                            </label>
                            <select
                              name="category"
                              value={formData.category}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            >
                              {categories.map(category => (
                                <option key={category.value} value={category.value}>
                                  {category.label}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Level *
                            </label>
                            <select
                              name="level"
                              value={formData.level}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            >
                              {levels.map(level => (
                                <option key={level.value} value={level.value}>
                                  {level.label}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Course Image */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Course Image</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Image URL
                          </label>
                          <input
                            type="url"
                            name="image"
                            value={formData.image}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            placeholder="https://example.com/image.jpg"
                          />
                        </div>

                        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
                          <SafeIcon icon={FiUpload} className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                          <p className="text-gray-600 dark:text-gray-400 mb-2">Upload course image</p>
                          <p className="text-sm text-gray-500">PNG, JPG up to 5MB</p>
                          <button
                            type="button"
                            className="mt-4 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                          >
                            Choose File
                          </button>
                        </div>

                        {formData.image && (
                          <div className="mt-4">
                            <img
                              src={formData.image}
                              alt="Course preview"
                              className="w-full h-32 object-cover rounded-lg"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    {/* Course Details */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Course Details</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Instructor *
                          </label>
                          <input
                            type="text"
                            name="instructor"
                            value={formData.instructor}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            placeholder="Instructor name"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Duration *
                            </label>
                            <input
                              type="text"
                              name="duration"
                              value={formData.duration}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                              placeholder="e.g., 8 weeks"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Lessons *
                            </label>
                            <input
                              type="number"
                              name="lessons"
                              value={formData.lessons}
                              onChange={handleInputChange}
                              required
                              min="1"
                              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                              placeholder="Number of lessons"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Price ($) *
                            </label>
                            <input
                              type="number"
                              name="price"
                              value={formData.price}
                              onChange={handleInputChange}
                              required
                              min="0"
                              step="0.01"
                              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                              placeholder="99.99"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Original Price ($)
                            </label>
                            <input
                              type="number"
                              name="originalPrice"
                              value={formData.originalPrice}
                              onChange={handleInputChange}
                              min="0"
                              step="0.01"
                              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                              placeholder="149.99"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Tags
                          </label>
                          <input
                            type="text"
                            name="tags"
                            value={formData.tags}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            placeholder="React, JavaScript, Frontend (comma separated)"
                          />
                          <p className="text-sm text-gray-500 mt-1">Separate tags with commas</p>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Status *
                          </label>
                          <select
                            name="status"
                            value={formData.status}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          >
                            {statusOptions.map(status => (
                              <option key={status.value} value={status.value}>
                                {status.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form Actions */}
                <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors flex items-center space-x-2"
                  >
                    <SafeIcon icon={FiSave} className="w-4 h-4" />
                    <span>{editingCourse ? 'Update Course' : 'Create Course'}</span>
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  const AnalyticsModal = () => (
    <AnimatePresence>
      {showAnalytics && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setShowAnalytics(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Analytics Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Course Analytics</h2>
              <button
                onClick={() => setShowAnalytics(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <SafeIcon icon={FiX} className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            {/* Analytics Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
              {/* Overview Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">Total Revenue</p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">
                        ${totalRevenue.toLocaleString()}
                      </p>
                    </div>
                    <SafeIcon icon={FiDollarSign} className="w-8 h-8 text-blue-500" />
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-600 dark:text-green-400 text-sm font-medium">Total Students</p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">
                        {totalStudents.toLocaleString()}
                      </p>
                    </div>
                    <SafeIcon icon={FiUsers} className="w-8 h-8 text-green-500" />
                  </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-600 dark:text-purple-400 text-sm font-medium">Avg Rating</p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">
                        {avgRating.toFixed(1)}
                      </p>
                    </div>
                    <SafeIcon icon={FiStar} className="w-8 h-8 text-purple-500" />
                  </div>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-orange-600 dark:text-orange-400 text-sm font-medium">Published</p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">
                        {publishedCourses}
                      </p>
                    </div>
                    <SafeIcon icon={FiCheckCircle} className="w-8 h-8 text-orange-500" />
                  </div>
                </div>
              </div>

              {/* Course Performance Table */}
              <div className="bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Course Performance</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead className="bg-gray-50 dark:bg-gray-600">
                      <tr>
                        <th className="text-left py-3 px-6 font-medium text-gray-700 dark:text-gray-300">Course</th>
                        <th className="text-left py-3 px-6 font-medium text-gray-700 dark:text-gray-300">Students</th>
                        <th className="text-left py-3 px-6 font-medium text-gray-700 dark:text-gray-300">Revenue</th>
                        <th className="text-left py-3 px-6 font-medium text-gray-700 dark:text-gray-300">Completion</th>
                        <th className="text-left py-3 px-6 font-medium text-gray-700 dark:text-gray-300">Rating</th>
                        <th className="text-left py-3 px-6 font-medium text-gray-700 dark:text-gray-300">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {courses.map((course) => (
                        <tr key={course.id} className="border-b border-gray-100 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600/50">
                          <td className="py-4 px-6">
                            <div className="flex items-center space-x-3">
                              <img src={course.image} alt={course.title} className="w-12 h-8 object-cover rounded" />
                              <div>
                                <p className="font-medium text-gray-900 dark:text-white">{course.title}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{course.instructor}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <div>
                              <p className="font-medium text-gray-900 dark:text-white">{course.students.toLocaleString()}</p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                {course.enrollment.active} active
                              </p>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <div>
                              <p className="font-medium text-gray-900 dark:text-white">
                                ${course.revenue.total.toLocaleString()}
                              </p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                ${course.revenue.monthly} monthly
                              </p>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <div>
                              <p className="font-medium text-gray-900 dark:text-white">
                                {course.engagement.completionRate}%
                              </p>
                              <div className="w-20 bg-gray-200 dark:bg-gray-600 rounded-full h-2 mt-1">
                                <div
                                  className="bg-green-500 h-2 rounded-full"
                                  style={{ width: `${course.engagement.completionRate}%` }}
                                ></div>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex items-center space-x-1">
                              <SafeIcon icon={FiStar} className="w-4 h-4 text-yellow-500" />
                              <span className="font-medium text-gray-900 dark:text-white">{course.rating}</span>
                              <span className="text-sm text-gray-500 dark:text-gray-400">({course.reviews})</span>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              statusOptions.find(s => s.value === course.status)?.color || 'bg-gray-100 text-gray-800'
                            }`}>
                              {statusOptions.find(s => s.value === course.status)?.label}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Course Management</h2>
          <p className="text-gray-600 dark:text-gray-400">Create and manage your online courses</p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={() => setShowAnalytics(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
          >
            <SafeIcon icon={FiBarChart3} className="w-4 h-4" />
            <span>Analytics</span>
          </button>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
          >
            <SafeIcon icon={FiPlus} className="w-4 h-4" />
            <span>New Course</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          {
            title: 'Total Courses',
            value: courses.length,
            icon: FiBookOpen,
            color: 'bg-blue-500',
            change: '+12%'
          },
          {
            title: 'Published',
            value: publishedCourses,
            icon: FiCheckCircle,
            color: 'bg-green-500',
            change: '+8%'
          },
          {
            title: 'Total Students',
            value: totalStudents.toLocaleString(),
            icon: FiUsers,
            color: 'bg-purple-500',
            change: '+25%'
          },
          {
            title: 'Revenue',
            value: `$${totalRevenue.toLocaleString()}`,
            icon: FiDollarSign,
            color: 'bg-orange-500',
            change: '+18%'
          }
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{stat.value}</p>
                <p className="text-sm text-green-600 dark:text-green-400 mt-1">{stat.change}</p>
              </div>
              <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                <SafeIcon icon={stat.icon} className="w-6 h-6 text-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Filters and Search */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center space-x-4">
            {/* Status Filter */}
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="all">All Status</option>
              {statusOptions.map(status => (
                <option key={status.value} value={status.value}>
                  {status.label}
                </option>
              ))}
            </select>

            {/* Category Filter */}
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="updatedAt">Last Updated</option>
              <option value="title">Title</option>
              <option value="students">Students</option>
              <option value="revenue">Revenue</option>
              <option value="rating">Rating</option>
            </select>

            {/* Bulk Actions */}
            {selectedCourses.length > 0 && (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {selectedCourses.length} selected
                </span>
                <button
                  onClick={() => handleBulkAction('publish')}
                  className="px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                >
                  Publish
                </button>
                <button
                  onClick={() => handleBulkAction('archive')}
                  className="px-3 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors text-sm"
                >
                  Archive
                </button>
                <button
                  onClick={() => handleBulkAction('delete')}
                  className="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Courses Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="text-left py-3 px-6">
                  <input
                    type="checkbox"
                    checked={selectedCourses.length === filteredCourses.length && filteredCourses.length > 0}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedCourses(filteredCourses.map(c => c.id));
                      } else {
                        setSelectedCourses([]);
                      }
                    }}
                    className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  />
                </th>
                <th className="text-left py-3 px-6 font-medium text-gray-700 dark:text-gray-300">Course</th>
                <th className="text-left py-3 px-6 font-medium text-gray-700 dark:text-gray-300">Category</th>
                <th className="text-left py-3 px-6 font-medium text-gray-700 dark:text-gray-300">Status</th>
                <th className="text-left py-3 px-6 font-medium text-gray-700 dark:text-gray-300">Students</th>
                <th className="text-left py-3 px-6 font-medium text-gray-700 dark:text-gray-300">Revenue</th>
                <th className="text-left py-3 px-6 font-medium text-gray-700 dark:text-gray-300">Rating</th>
                <th className="text-left py-3 px-6 font-medium text-gray-700 dark:text-gray-300">Updated</th>
                <th className="text-left py-3 px-6 font-medium text-gray-700 dark:text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCourses.map((course) => (
                <tr key={course.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="py-4 px-6">
                    <input
                      type="checkbox"
                      checked={selectedCourses.includes(course.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedCourses([...selectedCourses, course.id]);
                        } else {
                          setSelectedCourses(selectedCourses.filter(id => id !== course.id));
                        }
                      }}
                      className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    />
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-4">
                      <img src={course.image} alt={course.title} className="w-16 h-12 object-cover rounded-lg" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{course.title}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{course.instructor}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <SafeIcon icon={FiClock} className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-500">{course.duration}</span>
                          <SafeIcon icon={FiBookOpen} className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-500">{course.lessons} lessons</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      course.category === 'technology' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400' :
                      course.category === 'design' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400' :
                      'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400'
                    }`}>
                      {course.category}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      statusOptions.find(s => s.value === course.status)?.color || 'bg-gray-100 text-gray-800'
                    }`}>
                      {statusOptions.find(s => s.value === course.status)?.label}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {course.students.toLocaleString()}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {course.enrollment.active} active
                      </p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        ${course.revenue.total.toLocaleString()}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        ${course.revenue.monthly}/mo
                      </p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiStar} className="w-4 h-4 text-yellow-500" />
                      <span className="text-gray-700 dark:text-gray-300">{course.rating}</span>
                      <span className="text-xs text-gray-500">({course.reviews})</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-700 dark:text-gray-300">
                    {course.updatedAt}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleEdit(course)}
                        className="p-2 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg transition-colors"
                        title="Edit course"
                      >
                        <SafeIcon icon={FiEdit3} className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDuplicate(course)}
                        className="p-2 text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/30 rounded-lg transition-colors"
                        title="Duplicate course"
                      >
                        <SafeIcon icon={FiCopy} className="w-4 h-4" />
                      </button>
                      <button
                        className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                        title="View course"
                      >
                        <SafeIcon icon={FiEye} className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(course.id)}
                        className="p-2 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors"
                        title="Delete course"
                      >
                        <SafeIcon icon={FiTrash2} className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <SafeIcon icon={FiBookOpen} className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No courses found</h3>
            <p className="text-gray-500 dark:text-gray-400">
              {searchQuery || filterStatus !== 'all' || filterCategory !== 'all'
                ? 'Try adjusting your filters'
                : 'Get started by creating your first course'}
            </p>
          </div>
        )}
      </div>

      {/* Course Creation/Edit Modal */}
      <CourseModal />

      {/* Analytics Modal */}
      <AnalyticsModal />
    </div>
  );
};

export default CourseManagementCMS;