import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import Chart from './Chart';

const {
  FiTrendingUp, FiTrendingDown, FiUsers, FiEye, FiClock, FiHeart,
  FiShare2, FiBookmark, FiCalendar, FiFilter, FiDownload, FiRefreshCw,
  FiBarChart3, FiPieChart, FiActivity, FiGlobe, FiTarget, FiZap
} = FiIcons;

const AnalyticsDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('7d');
  const [selectedMetric, setSelectedMetric] = useState('pageviews');
  const [isLoading, setIsLoading] = useState(false);
  const [realTimeData, setRealTimeData] = useState({
    activeUsers: 47,
    pageViews: 1247,
    bounceRate: 42.3,
    avgSessionDuration: '3:42'
  });

  // Mock analytics data
  const [analyticsData] = useState({
    overview: {
      totalUsers: 12847,
      totalPageViews: 89432,
      avgSessionDuration: 245, // seconds
      bounceRate: 42.3,
      conversionRate: 3.8,
      newUsers: 8945,
      returningUsers: 3902
    },
    trends: {
      users: [
        { date: '2024-12-09', value: 1200 },
        { date: '2024-12-10', value: 1350 },
        { date: '2024-12-11', value: 1100 },
        { date: '2024-12-12', value: 1450 },
        { date: '2024-12-13', value: 1600 },
        { date: '2024-12-14', value: 1380 },
        { date: '2024-12-15', value: 1520 }
      ],
      pageviews: [
        { date: '2024-12-09', value: 8500 },
        { date: '2024-12-10', value: 9200 },
        { date: '2024-12-11', value: 7800 },
        { date: '2024-12-12', value: 10100 },
        { date: '2024-12-13', value: 11200 },
        { date: '2024-12-14', value: 9800 },
        { date: '2024-12-15', value: 10500 }
      ]
    },
    topPages: [
      { 
        path: '/post/1', 
        title: 'The Future of Web Development',
        views: 15420,
        uniqueViews: 12890,
        avgTimeOnPage: 285,
        bounceRate: 35.2
      },
      { 
        path: '/post/2', 
        title: 'Mastering React Hooks',
        views: 12340,
        uniqueViews: 10120,
        avgTimeOnPage: 320,
        bounceRate: 28.7
      },
      { 
        path: '/post/3', 
        title: 'Design Systems That Scale',
        views: 9870,
        uniqueViews: 8450,
        avgTimeOnPage: 295,
        bounceRate: 31.5
      }
    ],
    demographics: {
      countries: [
        { name: 'United States', users: 4521, percentage: 35.2 },
        { name: 'United Kingdom', users: 2134, percentage: 16.6 },
        { name: 'Germany', users: 1876, percentage: 14.6 },
        { name: 'Canada', users: 1234, percentage: 9.6 },
        { name: 'Australia', users: 987, percentage: 7.7 }
      ],
      devices: [
        { type: 'Desktop', users: 7208, percentage: 56.1 },
        { type: 'Mobile', users: 4321, percentage: 33.6 },
        { type: 'Tablet', users: 1318, percentage: 10.3 }
      ],
      browsers: [
        { name: 'Chrome', users: 8945, percentage: 69.6 },
        { name: 'Safari', users: 2134, percentage: 16.6 },
        { name: 'Firefox', users: 1234, percentage: 9.6 },
        { name: 'Edge', users: 534, percentage: 4.2 }
      ]
    },
    engagement: {
      likes: 2847,
      shares: 1234,
      bookmarks: 987,
      comments: 456,
      subscriptions: 234
    }
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeData(prev => ({
        ...prev,
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 10) - 5,
        pageViews: prev.pageViews + Math.floor(Math.random() * 20) - 10
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleRefresh = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const MetricCard = ({ title, value, change, icon, color, suffix = '' }) => (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">
            {typeof value === 'number' ? value.toLocaleString() : value}{suffix}
          </p>
          {change && (
            <div className={`flex items-center mt-2 text-sm ${
              change >= 0 ? 'text-green-600' : 'text-red-600'
            }`}>
              <SafeIcon 
                icon={change >= 0 ? FiTrendingUp : FiTrendingDown} 
                className="w-4 h-4 mr-1" 
              />
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

  const periods = [
    { value: '1h', label: 'Last Hour' },
    { value: '24h', label: 'Last 24 Hours' },
    { value: '7d', label: 'Last 7 Days' },
    { value: '30d', label: 'Last 30 Days' },
    { value: '90d', label: 'Last 90 Days' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
              <p className="text-gray-600 mt-1">Comprehensive insights into your blog performance</p>
            </div>
            <div className="flex items-center space-x-4">
              {/* Period Selector */}
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {periods.map(period => (
                  <option key={period.value} value={period.value}>
                    {period.label}
                  </option>
                ))}
              </select>
              
              {/* Export Button */}
              <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <SafeIcon icon={FiDownload} className="w-4 h-4" />
                <span>Export</span>
              </button>

              {/* Refresh Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleRefresh}
                disabled={isLoading}
                className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50"
              >
                <SafeIcon 
                  icon={FiRefreshCw} 
                  className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} 
                />
                <span>Refresh</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Real-time Stats */}
        <div className="mb-8 p-6 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl text-white">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold flex items-center">
              <SafeIcon icon={FiActivity} className="w-5 h-5 mr-2" />
              Real-time Activity
            </h2>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-primary-100">Live</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-2xl font-bold">{realTimeData.activeUsers}</p>
              <p className="text-primary-100 text-sm">Active Users</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">{realTimeData.pageViews.toLocaleString()}</p>
              <p className="text-primary-100 text-sm">Page Views Today</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">{realTimeData.bounceRate}%</p>
              <p className="text-primary-100 text-sm">Bounce Rate</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">{realTimeData.avgSessionDuration}</p>
              <p className="text-primary-100 text-sm">Avg. Session</p>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Total Users"
            value={analyticsData.overview.totalUsers}
            change={12}
            icon={FiUsers}
            color="bg-blue-500"
          />
          <MetricCard
            title="Page Views"
            value={analyticsData.overview.totalPageViews}
            change={8}
            icon={FiEye}
            color="bg-green-500"
          />
          <MetricCard
            title="Avg. Session Duration"
            value={formatDuration(analyticsData.overview.avgSessionDuration)}
            change={5}
            icon={FiClock}
            color="bg-purple-500"
          />
          <MetricCard
            title="Bounce Rate"
            value={analyticsData.overview.bounceRate}
            change={-3}
            icon={FiTarget}
            color="bg-orange-500"
            suffix="%"
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Traffic Trends */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Traffic Trends</h3>
              <div className="flex space-x-2">
                <button
                  onClick={() => setSelectedMetric('pageviews')}
                  className={`px-3 py-1 text-sm rounded-lg ${
                    selectedMetric === 'pageviews' 
                      ? 'bg-primary-100 text-primary-600' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Page Views
                </button>
                <button
                  onClick={() => setSelectedMetric('users')}
                  className={`px-3 py-1 text-sm rounded-lg ${
                    selectedMetric === 'users' 
                      ? 'bg-primary-100 text-primary-600' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Users
                </button>
              </div>
            </div>
            <Chart
              type="line"
              data={analyticsData.trends[selectedMetric]}
              height={300}
            />
          </div>

          {/* Device Breakdown */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Device Types</h3>
            <Chart
              type="doughnut"
              data={analyticsData.demographics.devices}
              height={300}
            />
          </div>
        </div>

        {/* Top Pages & Demographics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Top Pages */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Top Performing Pages</h3>
            <div className="space-y-4">
              {analyticsData.topPages.map((page, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 truncate">{page.title}</h4>
                    <p className="text-sm text-gray-500">{page.path}</p>
                    <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                      <span>Time: {formatDuration(page.avgTimeOnPage)}</span>
                      <span>Bounce: {page.bounceRate}%</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-900">{page.views.toLocaleString()}</p>
                    <p className="text-sm text-gray-500">views</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Geographic Distribution */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Top Countries</h3>
            <div className="space-y-4">
              {analyticsData.demographics.countries.map((country, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <SafeIcon icon={FiGlobe} className="w-4 h-4 text-gray-400" />
                    <span className="font-medium text-gray-900">{country.name}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary-600 h-2 rounded-full"
                        style={{ width: `${country.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900 w-12 text-right">
                      {country.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Engagement Metrics */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Engagement Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <SafeIcon icon={FiHeart} className="w-6 h-6 text-red-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">{analyticsData.engagement.likes.toLocaleString()}</p>
              <p className="text-sm text-gray-600">Likes</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <SafeIcon icon={FiShare2} className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">{analyticsData.engagement.shares.toLocaleString()}</p>
              <p className="text-sm text-gray-600">Shares</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <SafeIcon icon={FiBookmark} className="w-6 h-6 text-yellow-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">{analyticsData.engagement.bookmarks.toLocaleString()}</p>
              <p className="text-sm text-gray-600">Bookmarks</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <SafeIcon icon={FiZap} className="w-6 h-6 text-green-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">{analyticsData.engagement.comments.toLocaleString()}</p>
              <p className="text-sm text-gray-600">Comments</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <SafeIcon icon={FiUsers} className="w-6 h-6 text-purple-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">{analyticsData.engagement.subscriptions.toLocaleString()}</p>
              <p className="text-sm text-gray-600">Subscriptions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;