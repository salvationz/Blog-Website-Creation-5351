import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {
  FiArrowLeft, FiClock, FiUsers, FiStar, FiPlay, FiBookOpen, FiAward,
  FiCheck, FiLock, FiDownload, FiShare2, FiHeart, FiMonitor, FiShield,
  FiChevronDown, FiChevronUp, FiCalendar, FiTarget, FiZap
} = FiIcons;

const CourseDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedModule, setExpandedModule] = useState(null);

  // Mock course data
  const course = {
    id: 1,
    title: 'Complete React Development Bootcamp',
    subtitle: 'Master React from basics to advanced concepts',
    description: 'Build production-ready React applications from scratch. Learn hooks, state management, routing, testing, and deployment.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    category: 'technology',
    level: 'intermediate',
    price: 149,
    originalPrice: 199,
    duration: '12 weeks',
    lessons: 45,
    students: 2847,
    rating: 4.8,
    reviews: 342,
    instructor: {
      name: 'Sarah Johnson',
      avatar: 'SJ',
      rating: 4.9,
      students: 15000,
      bio: 'Senior React Developer with 8+ years of experience at Google and Facebook. Expert in modern frontend architecture and React ecosystem.',
      credentials: ['Senior Software Engineer at Google', 'React Core Contributor', 'Conference Speaker']
    },
    tags: ['React', 'JavaScript', 'Frontend', 'Web Development'],
    features: [
      'Lifetime Access',
      'Certificate of Completion',
      'Live Support & Q&A',
      '30+ Real-world Projects',
      'Source Code Access',
      'Community Access',
      'Career Guidance',
      'Interview Preparation'
    ],
    curriculum: [
      {
        title: 'React Fundamentals',
        lessons: 8,
        duration: '2 weeks',
        topics: [
          'Introduction to React',
          'JSX Syntax and Components',
          'Props and State',
          'Event Handling',
          'First React Project'
        ]
      },
      {
        title: 'Advanced React Concepts',
        lessons: 12,
        duration: '3 weeks',
        topics: [
          'React Hooks Deep Dive',
          'Context API',
          'Error Boundaries',
          'Refs and Portals',
          'Advanced Patterns Exercise'
        ]
      },
      {
        title: 'State Management',
        lessons: 8,
        duration: '2 weeks',
        topics: [
          'Redux Toolkit Setup',
          'Zustand State Management',
          'React Query',
          'State Management Project'
        ]
      },
      {
        title: 'React Router & Navigation',
        lessons: 6,
        duration: '1.5 weeks',
        topics: [
          'Router Setup',
          'Dynamic Routes',
          'Protected Routes',
          'Navigation Project'
        ]
      },
      {
        title: 'Testing & Quality Assurance',
        lessons: 7,
        duration: '2 weeks',
        topics: [
          'Jest Testing Framework',
          'React Testing Library',
          'E2E Testing with Cypress',
          'Testing Best Practices'
        ]
      },
      {
        title: 'Performance & Optimization',
        lessons: 4,
        duration: '1.5 weeks',
        topics: [
          'React.memo and useMemo',
          'Code Splitting',
          'Lazy Loading',
          'Performance Optimization Project'
        ]
      }
    ],
    projects: [
      'Todo Application with Local Storage',
      'Weather Dashboard with API Integration',
      'E-commerce Platform with Shopping Cart',
      'Social Media Dashboard',
      'Real-time Chat Application',
      'Portfolio Website Generator'
    ]
  };

  const tabs = [
    { id: 'overview', name: 'Overview' },
    { id: 'curriculum', name: 'Curriculum' },
    { id: 'instructor', name: 'Instructor' },
    { id: 'reviews', name: 'Reviews' }
  ];

  const toggleModule = (moduleId) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Course Description */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">About This Course</h3>
        <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
          <p className="mb-4 leading-relaxed">{course.description}</p>
          <p className="mb-4 leading-relaxed">
            This comprehensive React bootcamp is designed to take you from a complete beginner to an advanced React developer. 
            You'll start with the fundamentals of React and gradually progress to advanced concepts and real-world application development.
          </p>
          <p className="mb-4 leading-relaxed">
            Throughout the course, you'll build multiple real-world projects that you can add to your portfolio and showcase to potential employers.
          </p>
        </div>
      </div>

      {/* What You'll Learn */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What You'll Learn</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'Build modern React applications from scratch',
            'Implement complex state management solutions',
            'Create responsive and accessible user interfaces',
            'Test React applications effectively',
            'Deploy applications to production',
            'Optimize React apps for performance',
            'Work with modern development tools and workflows',
            'Master React hooks and functional components'
          ].map((outcome, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mt-0.5">
                <SafeIcon icon={FiCheck} className="w-4 h-4 text-green-600 dark:text-green-400" />
              </div>
              <span className="text-gray-700 dark:text-gray-300">{outcome}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Course Projects */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Projects You'll Build</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {course.projects.map((project, index) => (
            <div key={index} className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <span className="font-medium text-gray-900 dark:text-white">{project}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Course Tags */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Skills You'll Gain</h3>
        <div className="flex flex-wrap gap-3">
          {course.tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-400 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCurriculum = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Course Curriculum</h3>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {course.lessons} lessons • {course.duration}
        </div>
      </div>

      <div className="space-y-4">
        {course.curriculum.map((module, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleModule(index)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{module.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {module.lessons} lessons • {module.duration}
                </p>
              </div>
              <SafeIcon
                icon={expandedModule === index ? FiChevronUp : FiChevronDown}
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
              />
            </button>

            {expandedModule === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="border-t border-gray-200 dark:border-gray-700"
              >
                <div className="p-6 pt-4">
                  <div className="space-y-3">
                    {module.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                              <SafeIcon icon={FiPlay} className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            </div>
                          </div>
                          <div>
                            <h5 className="font-medium text-gray-900 dark:text-white">{topic}</h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Video Lesson</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {topicIndex < 2 ? (
                            <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-xs font-medium rounded-full">
                              Free
                            </span>
                          ) : (
                            <SafeIcon icon={FiLock} className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderInstructor = () => (
    <div className="space-y-8">
      <div className="flex items-start space-x-6">
        <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center">
          <span className="text-white text-2xl font-bold">{course.instructor.avatar}</span>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{course.instructor.name}</h3>
          <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <div className="flex items-center space-x-1">
              <SafeIcon icon={FiUsers} className="w-4 h-4" />
              <span>{course.instructor.students.toLocaleString()} students</span>
            </div>
            <div className="flex items-center space-x-1">
              <SafeIcon icon={FiStar} className="w-4 h-4 text-yellow-500" />
              <span>{course.instructor.rating} rating</span>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">{course.instructor.bio}</p>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Credentials</h4>
            <div className="space-y-2">
              {course.instructor.credentials.map((credential, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <SafeIcon icon={FiAward} className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                  <span className="text-gray-700 dark:text-gray-300">{credential}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderReviews = () => (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Student Reviews</h3>
        <div className="flex items-center space-x-2">
          <SafeIcon icon={FiStar} className="w-5 h-5 text-yellow-500" />
          <span className="text-lg font-bold text-gray-900 dark:text-white">{course.rating}</span>
          <span className="text-gray-600 dark:text-gray-400">({course.reviews} reviews)</span>
        </div>
      </div>

      <div className="space-y-6">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">
                  {['JD', 'SM', 'AR', 'LK', 'MR'][index]}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {['John Doe', 'Sarah Miller', 'Alex Rodriguez', 'Lisa Kim', 'Michael Roberts'][index]}
                  </h4>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <SafeIcon key={i} icon={FiStar} className="w-4 h-4 text-yellow-500" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  {[
                    'Excellent course! The instructor explains everything clearly and the projects are very practical. I feel much more confident now.',
                    'This course exceeded my expectations. The content is up-to-date and the hands-on approach really helped me learn.',
                    'Great course structure and fantastic support from the instructor. Highly recommended for anyone looking to advance their skills.',
                    'The projects in this course are amazing. I was able to build a portfolio that helped me land my dream job!',
                    'Outstanding content and presentation. The instructor is clearly an expert and knows how to teach effectively.'
                  ][index]}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  {['2 weeks ago', '1 month ago', '3 weeks ago', '1 week ago', '2 months ago'][index]}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'curriculum':
        return renderCurriculum();
      case 'instructor':
        return renderInstructor();
      case 'reviews':
        return renderReviews();
      default:
        return renderOverview();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-all duration-300"
    >
      {/* Back Button */}
      <div className="bg-white dark:bg-gray-800 py-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/courses"
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <SafeIcon icon={FiArrowLeft} className="w-5 h-5 mr-2" />
            Back to Courses
          </Link>
        </div>
      </div>

      {/* Course Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                  course.category === 'technology' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400' :
                  course.category === 'design' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400' :
                  'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400'
                }`}>
                  {course.category.charAt(0).toUpperCase() + course.category.slice(1)}
                </span>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{course.title}</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">{course.subtitle}</p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-1">
                  <SafeIcon icon={FiStar} className="w-4 h-4 text-yellow-500" />
                  <span className="font-medium">{course.rating}</span>
                  <span>({course.reviews} reviews)</span>
                </div>
                <div className="flex items-center space-x-1">
                  <SafeIcon icon={FiUsers} className="w-4 h-4" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center space-x-1">
                  <SafeIcon icon={FiClock} className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <SafeIcon icon={FiBookOpen} className="w-4 h-4" />
                  <span>{course.lessons} lessons</span>
                </div>
              </div>
            </div>

            {/* Course Preview Card */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg border border-gray-200 dark:border-gray-600 overflow-hidden sticky top-8">
                <div className="relative">
                  <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <SafeIcon icon={FiPlay} className="w-8 h-8 text-white ml-1" />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">${course.price}</span>
                      {course.originalPrice && (
                        <span className="text-lg text-gray-500 dark:text-gray-400 line-through ml-2">
                          ${course.originalPrice}
                        </span>
                      )}
                    </div>
                    {course.originalPrice && (
                      <span className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400 text-sm font-medium rounded">
                        {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% OFF
                      </span>
                    )}
                  </div>

                  <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors mb-4">
                    Enroll Now
                  </button>

                  <button className="w-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 font-semibold py-3 px-4 rounded-lg transition-colors mb-6">
                    Add to Wishlist
                  </button>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-3">
                      <SafeIcon icon={FiMonitor} className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      <span className="text-gray-700 dark:text-gray-300">Access on desktop and mobile</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <SafeIcon icon={FiAward} className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      <span className="text-gray-700 dark:text-gray-300">Certificate of completion</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <SafeIcon icon={FiDownload} className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      <span className="text-gray-700 dark:text-gray-300">Downloadable resources</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <SafeIcon icon={FiShield} className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      <span className="text-gray-700 dark:text-gray-300">Lifetime access</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-3">
            {/* Tabs */}
            <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
              <nav className="flex space-x-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                        : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                    }`}
                  >
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {renderTabContent()}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Course Stats */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Course Stats</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Students</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Rating</span>
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiStar} className="w-4 h-4 text-yellow-500" />
                      <span className="font-semibold text-gray-900 dark:text-white">{course.rating}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Level</span>
                    <span className="font-semibold text-gray-900 dark:text-white capitalize">{course.level}</span>
                  </div>
                </div>
              </div>

              {/* Share */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Share This Course</h4>
                <div className="flex space-x-3">
                  <button className="flex-1 p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/50 rounded-lg transition-colors">
                    <SafeIcon icon={FiShare2} className="w-5 h-5 mx-auto" />
                  </button>
                  <button className="flex-1 p-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/50 rounded-lg transition-colors">
                    <SafeIcon icon={FiHeart} className="w-5 h-5 mx-auto" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseDetail;