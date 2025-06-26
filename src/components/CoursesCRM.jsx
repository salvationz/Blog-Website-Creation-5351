import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import CourseManagementCMS from './CourseManagementCMS';
import StudentManagement from './StudentManagement';
import CourseAnalytics from './CourseAnalytics';

const {
  FiBookOpen, FiUsers, FiBarChart3, FiDollarSign, FiTrendingUp, FiTarget,
  FiAward, FiClock, FiMail, FiPhone, FiCalendar, FiSettings, FiHome,
  FiMessageSquare, FiFileText, FiPieChart, FiActivity, FiGlobe, FiZap
} = FiIcons;

const CoursesCRM = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [notifications, setNotifications] = useState(3);

  // Mock CRM data
  const [crmStats] = useState({
    totalRevenue: 847293,
    monthlyRevenue: 142890,
    totalStudents: 5847,
    activeStudents: 4234,
    totalCourses: 24,
    publishedCourses: 18,
    avgRating: 4.7,
    completionRate: 68.5,
    conversionRate: 12.8,
    churnRate: 3.2
  });

  const [recentActivities] = useState([
    { 
      id: 1, 
      type: 'enrollment', 
      message: 'New enrollment in React Development Bootcamp',
      user: 'Alice Johnson',
      time: '2 min ago',
      icon: FiUsers,
      color: 'text-green-600'
    },
    { 
      id: 2, 
      type: 'completion', 
      message: 'Course completion: UI/UX Design Fundamentals',
      user: 'Bob Smith',
      time: '15 min ago',
      icon: FiAward,
      color: 'text-purple-600'
    },
    { 
      id: 3, 
      type: 'revenue', 
      message: 'Payment received: $149',
      user: 'Carol Davis',
      time: '1 hour ago',
      icon: FiDollarSign,
      color: 'text-blue-600'
    },
    { 
      id: 4, 
      type: 'review', 
      message: 'New 5-star review for Digital Marketing',
      user: 'David Wilson',
      time: '2 hours ago',
      icon: FiMessageSquare,
      color: 'text-yellow-600'
    }
  ]);

  const [upcomingTasks] = useState([
    {
      id: 1,
      title: 'Update React course content',
      priority: 'high',
      dueDate: '2024-12-20',
      assignee: 'Sarah Johnson'
    },
    {
      id: 2,
      title: 'Review student feedback',
      priority: 'medium',
      dueDate: '2024-12-22',
      assignee: 'Michael Chen'
    },
    {
      id: 3,
      title: 'Prepare marketing campaign',
      priority: 'high',
      dueDate: '2024-12-25',
      assignee: 'Emma Rodriguez'
    }
  ]);

  const sidebarItems = [
    { id: 'dashboard', icon: FiHome, label: 'Dashboard' },
    { id: 'courses', icon: FiBookOpen, label: 'Course Management' },
    { id: 'students', icon: FiUsers, label: 'Student Management' },
    { id: 'analytics', icon: FiBarChart3, label: 'Analytics & Reports' },
    { id: 'revenue', icon: FiDollarSign, label: 'Revenue Tracking' },
    { id: 'communications', icon: FiMail, label: 'Communications' },
    { id: 'settings', icon: FiSettings, label: 'CRM Settings' }
  ];

  const StatCard = ({ title, value, change, icon, color, prefix = '', suffix = '' }) => (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all duration-300"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
            {prefix}{typeof value === 'number' ? value.toLocaleString() : value}{suffix}
          </p>
          {change && (
            <div className={`flex items-center mt-2 text-sm ${
              change >= 0 
                ? 'text-green-600 dark:text-green-400' 
                : 'text-red-600 dark:text-red-400'
            }`}>
              <SafeIcon 
                icon={change >= 0 ? FiTrendingUp : FiTrendingUp} 
                className="w-4 h-4 mr-1" 
              />
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
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Welcome to Course CRM</h2>
        <p className="text-primary-100">
          Manage your online education business with powerful tools and insights.
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Revenue"
          value={crmStats.totalRevenue}
          change={15.2}
          icon={FiDollarSign}
          color="bg-green-500"
          prefix="$"
        />
        <StatCard
          title="Active Students"
          value={crmStats.activeStudents}
          change={8.3}
          icon={FiUsers}
          color="bg-blue-500"
        />
        <StatCard
          title="Course Completion"
          value={crmStats.completionRate}
          change={5.7}
          icon={FiTarget}
          color="bg-purple-500"
          suffix="%"
        />
        <StatCard
          title="Average Rating"
          value={crmStats.avgRating}
          change={2.1}
          icon={FiAward}
          color="bg-orange-500"
        />
      </div>

      {/* Dashboard Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Revenue Overview</h3>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg">
                7 days
              </button>
              <button className="px-3 py-1 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                30 days
              </button>
            </div>
          </div>
          <div className="h-64 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <SafeIcon icon={FiBarChart3} className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-2" />
              <p className="text-gray-500 dark:text-gray-400">Revenue chart visualization</p>
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activities</h3>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  activity.type === 'enrollment' ? 'bg-green-100 dark:bg-green-900/30' :
                  activity.type === 'completion' ? 'bg-purple-100 dark:bg-purple-900/30' :
                  activity.type === 'revenue' ? 'bg-blue-100 dark:bg-blue-900/30' :
                  'bg-yellow-100 dark:bg-yellow-900/30'
                }`}>
                  <SafeIcon 
                    icon={activity.icon} 
                    className={`w-4 h-4 ${activity.color} dark:${activity.color.replace('600', '400')}`} 
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900 dark:text-gray-100">{activity.message}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{activity.user} • {activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions & Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: FiBookOpen, label: 'Create Course', color: 'bg-blue-500' },
              { icon: FiUsers, label: 'Add Student', color: 'bg-green-500' },
              { icon: FiMail, label: 'Send Email', color: 'bg-purple-500' },
              { icon: FiBarChart3, label: 'View Reports', color: 'bg-orange-500' }
            ].map((action, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-col items-center p-4 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center mb-2`}>
                  <SafeIcon icon={action.icon} className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{action.label}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Upcoming Tasks */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Upcoming Tasks</h3>
          <div className="space-y-4">
            {upcomingTasks.map((task) => (
              <div key={task.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 dark:text-white">{task.title}</h4>
                  <div className="flex items-center space-x-3 mt-1 text-xs text-gray-500 dark:text-gray-400">
                    <span>{task.assignee}</span>
                    <span>•</span>
                    <span>{task.dueDate}</span>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  task.priority === 'high' 
                    ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                    : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                }`}>
                  {task.priority}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderRevenue = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Revenue Tracking</h2>
        <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
          Export Report
        </button>
      </div>

      {/* Revenue Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard
          title="Total Revenue"
          value={crmStats.totalRevenue}
          change={15.2}
          icon={FiDollarSign}
          color="bg-green-500"
          prefix="$"
        />
        <StatCard
          title="Monthly Revenue"
          value={crmStats.monthlyRevenue}
          change={23.1}
          icon={FiTrendingUp}
          color="bg-blue-500"
          prefix="$"
        />
        <StatCard
          title="Conversion Rate"
          value={crmStats.conversionRate}
          change={8.7}
          icon={FiTarget}
          color="bg-purple-500"
          suffix="%"
        />
        <StatCard
          title="Churn Rate"
          value={crmStats.churnRate}
          change={-12.3}
          icon={FiActivity}
          color="bg-orange-500"
          suffix="%"
        />
      </div>

      {/* Revenue Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Monthly Revenue Trend</h3>
          <div className="h-80 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <SafeIcon icon={FiPieChart} className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-2" />
              <p className="text-gray-500 dark:text-gray-400">Revenue trend chart</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Revenue by Course</h3>
          <div className="h-80 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <SafeIcon icon={FiBarChart3} className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-2" />
              <p className="text-gray-500 dark:text-gray-400">Course revenue breakdown</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCommunications = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Communications Center</h2>
        <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
          Compose Message
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Email Templates */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Email Templates</h3>
          <div className="space-y-3">
            {[
              'Welcome Email',
              'Course Completion',
              'Payment Reminder',
              'Course Update'
            ].map((template, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="text-gray-700 dark:text-gray-300">{template}</span>
                <button className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300">
                  Edit
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Messages */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Messages</h3>
          <div className="space-y-4">
            {[
              { 
                subject: 'Course enrollment confirmation',
                recipient: 'alice.johnson@email.com',
                time: '2 hours ago',
                status: 'delivered'
              },
              { 
                subject: 'Payment receipt',
                recipient: 'bob.smith@email.com',
                time: '4 hours ago',
                status: 'opened'
              },
              { 
                subject: 'Course completion certificate',
                recipient: 'carol.davis@email.com',
                time: '1 day ago',
                status: 'clicked'
              }
            ].map((message, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 dark:text-white">{message.subject}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{message.recipient} • {message.time}</p>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  message.status === 'delivered' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                  message.status === 'opened' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                  'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
                }`}>
                  {message.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">CRM Settings</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* General Settings */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">General Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Default Currency
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                <option>USD ($)</option>
                <option>EUR (€)</option>
                <option>GBP (£)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Time Zone
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                <option>UTC-8 (PST)</option>
                <option>UTC-5 (EST)</option>
                <option>UTC+0 (GMT)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Notifications</h3>
          <div className="space-y-4">
            {[
              'New enrollments',
              'Course completions',
              'Payment received',
              'Low course ratings'
            ].map((setting, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-700 dark:text-gray-300">{setting}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboard();
      case 'courses':
        return <CourseManagementCMS />;
      case 'students':
        return <StudentManagement />;
      case 'analytics':
        return <CourseAnalytics />;
      case 'revenue':
        return renderRevenue();
      case 'communications':
        return renderCommunications();
      case 'settings':
        return renderSettings();
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
            <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-purple-600 rounded-lg flex items-center justify-center">
              <SafeIcon icon={FiZap} className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">Course CRM</span>
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
                  ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-800'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <SafeIcon icon={item.icon} className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white capitalize">
                {activeTab === 'dashboard' ? 'CRM Dashboard' : activeTab.replace(/([A-Z])/g, ' $1').trim()}
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                {activeTab === 'dashboard' ? 'Overview of your course business' : 
                 activeTab === 'courses' ? 'Manage your course catalog' :
                 activeTab === 'students' ? 'Track and manage your students' :
                 activeTab === 'analytics' ? 'Analyze performance and growth' :
                 activeTab === 'revenue' ? 'Monitor revenue and financial metrics' :
                 activeTab === 'communications' ? 'Manage student communications' :
                 'Configure CRM settings'}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <button className="relative p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                <SafeIcon icon={FiMail} className="w-5 h-5" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </button>

              {/* Quick Add */}
              <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors">
                <SafeIcon icon={FiBookOpen} className="w-4 h-4" />
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

export default CoursesCRM;