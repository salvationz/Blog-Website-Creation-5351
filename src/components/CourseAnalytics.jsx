import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import Chart from './Chart';

const {
  FiBarChart3, FiTrendingUp, FiTrendingDown, FiUsers, FiDollarSign,
  FiClock, FiStar, FiTarget, FiAward, FiCalendar, FiRefreshCw,
  FiDownload, FiEye, FiPlay, FiBookOpen, FiMessageSquare
} = FiIcons;

const CourseAnalytics = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('7d');
  const [selectedCourse, setSelectedCourse] = useState('all');

  // Mock analytics data
  const analyticsData = {
    overview: {
      totalRevenue: 847293,
      totalStudents: 5847,
      avgRating: 4.7,
      completionRate: 68.5,
      monthlyGrowth: 12.5,
      activeStudents: 4234
    },
    coursePerformance: [
      {
        id: 1,
        title: 'React Development Bootcamp',
        students: 2847,
        revenue: 424203,
        rating: 4.8,
        completionRate: 72.3,
        avgProgress: 67,
        satisfaction: 4.8
      },
      {
        id: 2,
        title: 'UI/UX Design Fundamentals',
        students: 1924,
        revenue: 190476,
        rating: 4.9,
        completionRate: 78.1,
        avgProgress: 73,
        satisfaction: 4.9
      },
      {
        id: 3,
        title: 'Digital Marketing Strategy',
        students: 1076,
        revenue: 138788,
        rating: 4.6,
        completionRate: 54.2,
        avgProgress: 45,
        satisfaction: 4.6
      }
    ],
    revenueData: [
      { date: '2024-12-01', value: 12500 },
      { date: '2024-12-02', value: 14200 },
      { date: '2024-12-03', value: 11800 },
      { date: '2024-12-04', value: 16900 },
      { date: '2024-12-05', value: 18400 },
      { date: '2024-12-06', value: 15600 },
      { date: '2024-12-07', value: 19200 }
    ],
    studentGrowth: [
      { date: '2024-12-01', value: 45 },
      { date: '2024-12-02', value: 52 },
      { date: '2024-12-03', value: 38 },
      { date: '2024-12-04', value: 67 },
      { date: '2024-12-05', value: 71 },
      { date: '2024-12-06', value: 58 },
      { date: '2024-12-07', value: 84 }
    ],
    engagementMetrics: {
      avgSessionTime: 42,
      weeklyActiveUsers: 3456,
      forumPosts: 892,
      videoCompletions: 78.5,
      exerciseSubmissions: 1234
    }
  };

  const periods = [
    { value: '1h', label: 'Last Hour' },
    { value: '24h', label: 'Last 24 Hours' },
    { value: '7d', label: 'Last 7 Days' },
    { value: '30d', label: 'Last 30 Days' },
    { value: '90d', label: 'Last 90 Days' }
  ];

  const MetricCard = ({ title, value, change, icon, color, suffix = '' }) => (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
            {typeof value === 'number' ? value.toLocaleString() : value}{suffix}
          </p>
          {change && (
            <div className={`flex items-center mt-2 text-sm ${
              change >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
            }`}>
              <SafeIcon icon={change >= 0 ? FiTrendingUp : FiTrendingDown} className="w-4 h-4 mr-1" />
              <span>{Math.abs(change)}% vs last period</span>
            </div>
          )}
        </div>
        <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center`}>
          <SafeIcon icon={icon} className="w-6 h-6 text-white" />
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Course Analytics</h2>
          <p className="text-gray-600 dark:text-gray-400">Track performance and student engagement</p>
        </div>
        <div className="flex items-center space-x-4">
          {/* Period Selector */}
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            {periods.map(period => (
              <option key={period.value} value={period.value}>
                {period.label}
              </option>
            ))}
          </select>

          {/* Export Button */}
          <button className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <SafeIcon icon={FiDownload} className="w-4 h-4" />
            <span>Export</span>
          </button>

          {/* Refresh Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            <SafeIcon icon={FiRefreshCw} className="w-4 h-4" />
            <span>Refresh</span>
          </motion.button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Revenue"
          value={analyticsData.overview.totalRevenue}
          change={analyticsData.overview.monthlyGrowth}
          icon={FiDollarSign}
          color="bg-green-500"
          suffix="$"
        />
        <MetricCard
          title="Total Students"
          value={analyticsData.overview.totalStudents}
          change={15}
          icon={FiUsers}
          color="bg-blue-500"
        />
        <MetricCard
          title="Average Rating"
          value={analyticsData.overview.avgRating}
          change={2.3}
          icon={FiStar}
          color="bg-yellow-500"
        />
        <MetricCard
          title="Completion Rate"
          value={analyticsData.overview.completionRate}
          change={-1.2}
          icon={FiTarget}
          color="bg-purple-500"
          suffix="%"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Revenue Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Revenue Trends</h3>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg">
                Revenue
              </button>
            </div>
          </div>
          <Chart
            type="line"
            data={analyticsData.revenueData}
            height={300}
          />
        </div>

        {/* Student Growth Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Student Growth</h3>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
                New Students
              </button>
            </div>
          </div>
          <Chart
            type="bar"
            data={analyticsData.studentGrowth}
            height={300}
          />
        </div>
      </div>

      {/* Course Performance Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Course Performance</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="text-left py-3 px-6 font-medium text-gray-700 dark:text-gray-300">Course</th>
                <th className="text-left py-3 px-6 font-medium text-gray-700 dark:text-gray-300">Students</th>
                <th className="text-left py-3 px-6 font-medium text-gray-700 dark:text-gray-300">Revenue</th>
                <th className="text-left py-3 px-6 font-medium text-gray-700 dark:text-gray-300">Rating</th>
                <th className="text-left py-3 px-6 font-medium text-gray-700 dark:text-gray-300">Completion</th>
                <th className="text-left py-3 px-6 font-medium text-gray-700 dark:text-gray-300">Progress</th>
              </tr>
            </thead>
            <tbody>
              {analyticsData.coursePerformance.map((course) => (
                <tr key={course.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="py-4 px-6">
                    <p className="font-medium text-gray-900 dark:text-white">{course.title}</p>
                  </td>
                  <td className="py-4 px-6 text-gray-700 dark:text-gray-300">
                    {course.students.toLocaleString()}
                  </td>
                  <td className="py-4 px-6 text-gray-700 dark:text-gray-300">
                    ${course.revenue.toLocaleString()}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiStar} className="w-4 h-4 text-yellow-500" />
                      <span className="text-gray-700 dark:text-gray-300">{course.rating}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${course.completionRate}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {course.completionRate}%
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                        <div
                          className="bg-primary-500 h-2 rounded-full"
                          style={{ width: `${course.avgProgress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {course.avgProgress}%
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Engagement Metrics */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Student Engagement</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-2">
              <SafeIcon icon={FiClock} className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {analyticsData.engagementMetrics.avgSessionTime}m
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Avg Session</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-2">
              <SafeIcon icon={FiUsers} className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {analyticsData.engagementMetrics.weeklyActiveUsers.toLocaleString()}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Weekly Active</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-2">
              <SafeIcon icon={FiMessageSquare} className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {analyticsData.engagementMetrics.forumPosts.toLocaleString()}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Forum Posts</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center mx-auto mb-2">
              <SafeIcon icon={FiPlay} className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {analyticsData.engagementMetrics.videoCompletions}%
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Video Complete</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mx-auto mb-2">
              <SafeIcon icon={FiBookOpen} className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {analyticsData.engagementMetrics.exerciseSubmissions.toLocaleString()}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Exercises</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseAnalytics;