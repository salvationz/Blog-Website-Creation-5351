import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {
  FiUsers, FiFileText, FiBarChart3, FiSettings, FiBell, FiSearch, FiPlus, FiEdit3,
  FiTrash2, FiEye, FiDownload, FiUpload, FiCalendar, FiClock, FiTrendingUp,
  FiTrendingDown, FiActivity, FiGlobe, FiShield, FiDatabase, FiMonitor,
  FiMail, FiMessageSquare, FiHeart, FiShare2, FiBookmark, FiStar, FiFilter,
  FiRefreshCw, FiMoreVertical, FiLogOut, FiUser, FiHome, FiFolder, FiImage,
  FiVideo, FiMusic, FiCommand, FiZap
} = FiIcons;

const AdminDashboard = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [notifications, setNotifications] = useState(3);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);

  // Mock data
  const [stats] = useState({
    totalUsers: 12847,
    totalPosts: 2943,
    totalViews: 847293,
    totalRevenue: 94573
  });

  const [recentPosts] = useState([
    {
      id: 1,
      title: 'The Future of Web Development',
      author: 'Sarah Johnson',
      status: 'published',
      views: 1247,
      date: '2024-12-15',
      category: 'Technology'
    },
    {
      id: 2,
      title: 'React Hooks Advanced Patterns',
      author: 'Michael Chen',
      status: 'draft',
      views: 0,
      date: '2024-12-14',
      category: 'Programming'
    },
    {
      id: 3,
      title: 'Design Systems Best Practices',
      author: 'Emma Rodriguez',
      status: 'published',
      views: 892,
      date: '2024-12-13',
      category: 'Design'
    }
  ]);

  const [users] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Editor',
      status: 'active',
      lastLogin: '2024-12-15',
      posts: 12
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'Author',
      status: 'active',
      lastLogin: '2024-12-14',
      posts: 8
    },
    {
      id: 3,
      name: 'Bob Wilson',
      email: 'bob@example.com',
      role: 'Subscriber',
      status: 'inactive',
      lastLogin: '2024-12-10',
      posts: 0
    }
  ]);

  const sidebarItems = [
    { id: 'dashboard', icon: FiHome, label: 'Dashboard' },
    { id: 'posts', icon: FiFileText, label: 'Posts' },
    { id: 'users', icon: FiUsers, label: 'Users' },
    { id: 'media', icon: FiImage, label: 'Media' },
    { id: 'analytics', icon: FiBarChart3, label: 'Analytics' },
    { id: 'comments', icon: FiMessageSquare, label: 'Comments' },
    { id: 'settings', icon: FiSettings, label: 'Settings' }
  ];

  const StatCard = ({ icon, title, value, change, color }) => (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-300"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">{value.toLocaleString()}</p>
          {change && (
            <div className={`flex items-center mt-2 text-sm ${change >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
              <SafeIcon icon={change >= 0 ? FiTrendingUp : FiTrendingDown} className="w-4 h-4 mr-1" />
              <span>{Math.abs(change)}% vs last month</span>
            </div>
          )}
        </div>
        <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center`}>
          <SafeIcon icon={icon} className="w-6 h-6 text-white" />
        </div>
      </div>
    </motion.div>
  );

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={FiUsers}
          title="Total Users"
          value={stats.totalUsers}
          change={12}
          color="bg-blue-500"
        />
        <StatCard
          icon={FiFileText}
          title="Total Posts"
          value={stats.totalPosts}
          change={8}
          color="bg-green-500"
        />
        <StatCard
          icon={FiEye}
          title="Total Views"
          value={stats.totalViews}
          change={-3}
          color="bg-purple-500"
        />
        <StatCard
          icon={FiTrendingUp}
          title="Revenue"
          value={stats.totalRevenue}
          change={15}
          color="bg-orange-500"
        />
      </div>

      {/* Charts and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activity Chart */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Website Activity</h3>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">7 days</button>
              <button className="px-3 py-1 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">30 days</button>
            </div>
          </div>
          <div className="h-64 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <SafeIcon icon={FiActivity} className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-2" />
              <p className="text-gray-500 dark:text-gray-400">Chart visualization would go here</p>
              <p className="text-sm text-gray-400 dark:text-gray-500">Integration with chart library needed</p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { action: 'New user registered', time: '2 min ago', type: 'user' },
              { action: 'Post published', time: '15 min ago', type: 'post' },
              { action: 'Comment approved', time: '1 hour ago', type: 'comment' },
              { action: 'Media uploaded', time: '2 hours ago', type: 'media' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  activity.type === 'user' ? 'bg-blue-100 dark:bg-blue-900/30' :
                  activity.type === 'post' ? 'bg-green-100 dark:bg-green-900/30' :
                  activity.type === 'comment' ? 'bg-yellow-100 dark:bg-yellow-900/30' :
                  'bg-purple-100 dark:bg-purple-900/30'
                }`}>
                  <SafeIcon
                    icon={
                      activity.type === 'user' ? FiUser :
                      activity.type === 'post' ? FiFileText :
                      activity.type === 'comment' ? FiMessageSquare : FiImage
                    }
                    className={`w-4 h-4 ${
                      activity.type === 'user' ? 'text-blue-600 dark:text-blue-400' :
                      activity.type === 'post' ? 'text-green-600 dark:text-green-400' :
                      activity.type === 'comment' ? 'text-yellow-600 dark:text-yellow-400' :
                      'text-purple-600 dark:text-purple-400'
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900 dark:text-gray-100">{activity.action}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Posts</h3>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
            <SafeIcon icon={FiPlus} className="w-4 h-4" />
            <span>New Post</span>
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-4 font-medium text-gray-700 dark:text-gray-300">Title</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 dark:text-gray-300">Author</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 dark:text-gray-300">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 dark:text-gray-300">Views</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 dark:text-gray-300">Date</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700 dark:text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentPosts.map((post) => (
                <tr key={post.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="py-3 px-4">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{post.title}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{post.category}</p>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{post.author}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      post.status === 'published'
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400'
                        : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400'
                    }`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{post.views.toLocaleString()}</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{post.date}</td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <button className="p-1 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded">
                        <SafeIcon icon={FiEye} className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/30 rounded">
                        <SafeIcon icon={FiEdit3} className="w-4 h-4" />
                      </button>
                      <button className="p-1 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30 rounded">
                        <SafeIcon icon={FiTrash2} className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderPosts = () => (
    <div className="space-y-6">
      {/* Posts Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Posts Management</h2>
          <p className="text-gray-600 dark:text-gray-400">Manage all your content in one place</p>
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <SafeIcon icon={FiDownload} className="w-4 h-4" />
            <span>Export</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
            <SafeIcon icon={FiPlus} className="w-4 h-4" />
            <span>New Post</span>
          </button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search posts..."
                className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
              <option>All Status</option>
              <option>Published</option>
              <option>Draft</option>
              <option>Pending</option>
            </select>
            <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
              <option>All Categories</option>
              <option>Technology</option>
              <option>Design</option>
              <option>Business</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
              <SafeIcon icon={FiFilter} className="w-4 h-4" />
            </button>
            <button className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
              <SafeIcon icon={FiRefreshCw} className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Posts Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="text-left py-3 px-6 font-medium text-gray-700 dark:text-gray-300">
                  <input type="checkbox" className="rounded" />
                </th>
                <th className="text-left py-3 px-6 font-medium text-gray-700 dark:text-gray-300">Post</th>
                <th className="text-left py-3 px-6 font-medium text-gray-700 dark:text-gray-300">Author</th>
                <th className="text-left py-3 px-6 font-medium text-gray-700 dark:text-gray-300">Category</th>
                <th className="text-left py-3 px-6 font-medium text-gray-700 dark:text-gray-300">Status</th>
                <th className="text-left py-3 px-6 font-medium text-gray-700 dark:text-gray-300">Views</th>
                <th className="text-left py-3 px-6 font-medium text-gray-700 dark:text-gray-300">Date</th>
                <th className="text-left py-3 px-6 font-medium text-gray-700 dark:text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentPosts.map((post) => (
                <tr key={post.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="py-4 px-6">
                    <input type="checkbox" className="rounded" />
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gray-200 dark:bg-gray-600 rounded-lg flex items-center justify-center">
                        <SafeIcon icon={FiFileText} className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{post.title}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">ID: #{post.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-700 dark:text-gray-300">{post.author}</td>
                  <td className="py-4 px-6">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 text-xs rounded-full">
                      {post.category}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      post.status === 'published'
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400'
                        : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400'
                    }`}>
                      {post.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-gray-700 dark:text-gray-300">{post.views.toLocaleString()}</td>
                  <td className="py-4 px-6 text-gray-700 dark:text-gray-300">{post.date}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg transition-colors">
                        <SafeIcon icon={FiEye} className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/30 rounded-lg transition-colors">
                        <SafeIcon icon={FiEdit3} className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors">
                        <SafeIcon icon={FiTrash2} className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                        <SafeIcon icon={FiMoreVertical} className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderUsers = () => (
    <div className="space-y-6">
      {/* Users Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Users Management</h2>
          <p className="text-gray-600 dark:text-gray-400">Manage user accounts and permissions</p>
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <SafeIcon icon={FiDownload} className="w-4 h-4" />
            <span>Export Users</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
            <SafeIcon icon={FiPlus} className="w-4 h-4" />
            <span>Add User</span>
          </button>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="text-left py-3 px-6 font-medium text-gray-700 dark:text-gray-300">User</th>
                <th className="text-left py-3 px-6 font-medium text-gray-700 dark:text-gray-300">Role</th>
                <th className="text-left py-3 px-6 font-medium text-gray-700 dark:text-gray-300">Status</th>
                <th className="text-left py-3 px-6 font-medium text-gray-700 dark:text-gray-300">Posts</th>
                <th className="text-left py-3 px-6 font-medium text-gray-700 dark:text-gray-300">Last Login</th>
                <th className="text-left py-3 px-6 font-medium text-gray-700 dark:text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-medium text-sm">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{user.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      user.role === 'Admin' ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400' :
                      user.role === 'Editor' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400' :
                      user.role === 'Author' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400' :
                      'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      user.status === 'active'
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-gray-700 dark:text-gray-300">{user.posts}</td>
                  <td className="py-4 px-6 text-gray-700 dark:text-gray-300">{user.lastLogin}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg transition-colors">
                        <SafeIcon icon={FiEye} className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/30 rounded-lg transition-colors">
                        <SafeIcon icon={FiEdit3} className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors">
                        <SafeIcon icon={FiTrash2} className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboard();
      case 'posts':
        return renderPosts();
      case 'users':
        return renderUsers();
      case 'media':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-12 text-center">
            <SafeIcon icon={FiImage} className="w-16 h-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Media Library</h3>
            <p className="text-gray-600 dark:text-gray-400">Manage your images, videos, and other media files</p>
          </div>
        );
      case 'analytics':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-12 text-center">
            <SafeIcon icon={FiBarChart3} className="w-16 h-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Analytics Dashboard</h3>
            <p className="text-gray-600 dark:text-gray-400">View detailed analytics and insights</p>
          </div>
        );
      case 'comments':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-12 text-center">
            <SafeIcon icon={FiMessageSquare} className="w-16 h-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Comments Management</h3>
            <p className="text-gray-600 dark:text-gray-400">Moderate and manage user comments</p>
          </div>
        );
      case 'settings':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-12 text-center">
            <SafeIcon icon={FiSettings} className="w-16 h-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">System Settings</h3>
            <p className="text-gray-600 dark:text-gray-400">Configure your CMS settings and preferences</p>
          </div>
        );
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex transition-all duration-300">
      {/* Sidebar */}
      <div className="w-64 bg-white dark:bg-gray-800 shadow-sm border-r border-gray-200 dark:border-gray-700 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <SafeIcon icon={FiZap} className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">CMS Admin</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-left ${
                activeTab === item.id
                  ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <SafeIcon icon={item.icon} className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* User Section */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="w-full flex items-center space-x-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">
                  {user.username.charAt(0).toUpperCase()}
                </span>
              </div>
              <div className="flex-1 text-left">
                <p className="font-medium text-gray-900 dark:text-white">{user.username}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Administrator</p>
              </div>
            </button>

            <AnimatePresence>
              {showUserMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-full left-0 right-0 mb-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-2 z-50"
                >
                  <button
                    onClick={onLogout}
                    className="w-full flex items-center space-x-3 px-4 py-2 text-left text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                  >
                    <SafeIcon icon={FiLogOut} className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white capitalize">{activeTab}</h1>
              <p className="text-gray-600 dark:text-gray-400">Manage your content management system</p>
            </div>
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Quick search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              {/* Notifications */}
              <button className="relative p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                <SafeIcon icon={FiBell} className="w-5 h-5" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </button>

              {/* Quick Actions */}
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                <SafeIcon icon={FiPlus} className="w-4 h-4" />
                <span>Quick Add</span>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-6 overflow-auto">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;