import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {
  FiUsers, FiSearch, FiFilter, FiMoreVertical, FiEye, FiEdit3, FiTrash2,
  FiMail, FiPhone, FiCalendar, FiClock, FiBarChart3, FiTrendingUp,
  FiAward, FiBookOpen, FiDollarSign, FiDownload, FiRefreshCw, FiPlus,
  FiX, FiCheck, FiAlertCircle, FiStar, FiMessageSquare, FiTarget
} = FiIcons;

const StudentManagement = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice.johnson@email.com',
      avatar: 'AJ',
      enrolledCourses: 3,
      completedCourses: 1,
      totalSpent: 347,
      joinDate: '2024-01-15',
      lastActivity: '2024-12-15',
      status: 'active',
      progress: {
        overall: 67,
        currentCourse: 'React Development',
        lessonsCompleted: 24,
        totalLessons: 45
      },
      engagement: {
        avgSessionTime: 45,
        weeklyHours: 8,
        forumPosts: 12,
        satisfaction: 4.8
      }
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'bob.smith@email.com',
      avatar: 'BS',
      enrolledCourses: 2,
      completedCourses: 2,
      totalSpent: 248,
      joinDate: '2024-02-20',
      lastActivity: '2024-12-14',
      status: 'active',
      progress: {
        overall: 100,
        currentCourse: 'UI/UX Design',
        lessonsCompleted: 32,
        totalLessons: 32
      },
      engagement: {
        avgSessionTime: 52,
        weeklyHours: 6,
        forumPosts: 8,
        satisfaction: 4.9
      }
    },
    {
      id: 3,
      name: 'Carol Davis',
      email: 'carol.davis@email.com',
      avatar: 'CD',
      enrolledCourses: 1,
      completedCourses: 0,
      totalSpent: 99,
      joinDate: '2024-03-10',
      lastActivity: '2024-12-10',
      status: 'inactive',
      progress: {
        overall: 23,
        currentCourse: 'Digital Marketing',
        lessonsCompleted: 9,
        totalLessons: 38
      },
      engagement: {
        avgSessionTime: 28,
        weeklyHours: 2,
        forumPosts: 2,
        satisfaction: 4.2
      }
    }
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [showStudentModal, setShowStudentModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const statusOptions = [
    { value: 'all', label: 'All Students' },
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
    { value: 'completed', label: 'Completed Courses' }
  ];

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || 
      (filterStatus === 'completed' ? student.completedCourses > 0 : student.status === filterStatus);
    
    return matchesSearch && matchesStatus;
  });

  const totalStudents = students.length;
  const activeStudents = students.filter(s => s.status === 'active').length;
  const totalRevenue = students.reduce((sum, student) => sum + student.totalSpent, 0);
  const avgProgress = students.reduce((sum, student) => sum + student.progress.overall, 0) / students.length;

  const StudentDetailModal = () => (
    <AnimatePresence>
      {showStudentModal && selectedStudent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setShowStudentModal(false)}
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
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">{selectedStudent.avatar}</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedStudent.name}</h2>
                  <p className="text-gray-600 dark:text-gray-400">{selectedStudent.email}</p>
                </div>
              </div>
              <button
                onClick={() => setShowStudentModal(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <SafeIcon icon={FiX} className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Student Stats */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Progress Overview */}
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Learning Progress</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {selectedStudent.progress.currentCourse}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {selectedStudent.progress.lessonsCompleted}/{selectedStudent.progress.totalLessons} lessons
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                          <div
                            className="bg-primary-600 h-3 rounded-full transition-all duration-300"
                            style={{ width: `${selectedStudent.progress.overall}%` }}
                          ></div>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          {selectedStudent.progress.overall}% complete
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Engagement Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">Avg Session</p>
                          <p className="text-xl font-bold text-gray-900 dark:text-white">
                            {selectedStudent.engagement.avgSessionTime}m
                          </p>
                        </div>
                        <SafeIcon icon={FiClock} className="w-6 h-6 text-blue-500" />
                      </div>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-green-600 dark:text-green-400 text-sm font-medium">Weekly Hours</p>
                          <p className="text-xl font-bold text-gray-900 dark:text-white">
                            {selectedStudent.engagement.weeklyHours}h
                          </p>
                        </div>
                        <SafeIcon icon={FiBarChart3} className="w-6 h-6 text-green-500" />
                      </div>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-purple-600 dark:text-purple-400 text-sm font-medium">Forum Posts</p>
                          <p className="text-xl font-bold text-gray-900 dark:text-white">
                            {selectedStudent.engagement.forumPosts}
                          </p>
                        </div>
                        <SafeIcon icon={FiMessageSquare} className="w-6 h-6 text-purple-500" />
                      </div>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-yellow-600 dark:text-yellow-400 text-sm font-medium">Satisfaction</p>
                          <p className="text-xl font-bold text-gray-900 dark:text-white">
                            {selectedStudent.engagement.satisfaction}
                          </p>
                        </div>
                        <SafeIcon icon={FiStar} className="w-6 h-6 text-yellow-500" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Student Info */}
                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Student Info</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Join Date</p>
                        <p className="font-medium text-gray-900 dark:text-white">{selectedStudent.joinDate}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Last Activity</p>
                        <p className="font-medium text-gray-900 dark:text-white">{selectedStudent.lastActivity}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Total Spent</p>
                        <p className="font-medium text-gray-900 dark:text-white">${selectedStudent.totalSpent}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Courses</p>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {selectedStudent.enrolledCourses} enrolled, {selectedStudent.completedCourses} completed
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors">
                      <SafeIcon icon={FiMail} className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>
                    <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                      <SafeIcon icon={FiBarChart3} className="w-4 h-4" />
                      <span>View Analytics</span>
                    </button>
                  </div>
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
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Student Management</h2>
          <p className="text-gray-600 dark:text-gray-400">Track and manage your student community</p>
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
            <SafeIcon icon={FiDownload} className="w-4 h-4" />
            <span>Export</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors">
            <SafeIcon icon={FiPlus} className="w-4 h-4" />
            <span>Add Student</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          {
            title: 'Total Students',
            value: totalStudents,
            icon: FiUsers,
            color: 'bg-blue-500',
            change: '+12%'
          },
          {
            title: 'Active Students',
            value: activeStudents,
            icon: FiTrendingUp,
            color: 'bg-green-500',
            change: '+8%'
          },
          {
            title: 'Total Revenue',
            value: `$${totalRevenue.toLocaleString()}`,
            icon: FiDollarSign,
            color: 'bg-purple-500',
            change: '+25%'
          },
          {
            title: 'Avg Progress',
            value: `${Math.round(avgProgress)}%`,
            icon: FiTarget,
            color: 'bg-orange-500',
            change: '+5%'
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
              placeholder="Search students..."
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
              {statusOptions.map(status => (
                <option key={status.value} value={status.value}>
                  {status.label}
                </option>
              ))}
            </select>

            {/* Bulk Actions */}
            {selectedStudents.length > 0 && (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {selectedStudents.length} selected
                </span>
                <button className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                  Send Email
                </button>
                <button className="px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm">
                  Export
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Students Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="text-left py-3 px-6">
                  <input
                    type="checkbox"
                    checked={selectedStudents.length === filteredStudents.length && filteredStudents.length > 0}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedStudents(filteredStudents.map(s => s.id));
                      } else {
                        setSelectedStudents([]);
                      }
                    }}
                    className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  />
                </th>
                <th className="text-left py-3 px-6 font-medium text-gray-700 dark:text-gray-300">Student</th>
                <th className="text-left py-3 px-6 font-medium text-gray-700 dark:text-gray-300">Courses</th>
                <th className="text-left py-3 px-6 font-medium text-gray-700 dark:text-gray-300">Progress</th>
                <th className="text-left py-3 px-6 font-medium text-gray-700 dark:text-gray-300">Spent</th>
                <th className="text-left py-3 px-6 font-medium text-gray-700 dark:text-gray-300">Status</th>
                <th className="text-left py-3 px-6 font-medium text-gray-700 dark:text-gray-300">Last Activity</th>
                <th className="text-left py-3 px-6 font-medium text-gray-700 dark:text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="py-4 px-6">
                    <input
                      type="checkbox"
                      checked={selectedStudents.includes(student.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedStudents([...selectedStudents, student.id]);
                        } else {
                          setSelectedStudents(selectedStudents.filter(id => id !== student.id));
                        }
                      }}
                      className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    />
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">{student.avatar}</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{student.name}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{student.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {student.enrolledCourses} enrolled
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {student.completedCourses} completed
                      </p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {student.progress.overall}%
                      </p>
                      <div className="w-20 bg-gray-200 dark:bg-gray-600 rounded-full h-2 mt-1">
                        <div
                          className="bg-primary-600 h-2 rounded-full"
                          style={{ width: `${student.progress.overall}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">
                    ${student.totalSpent}
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      student.status === 'active' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                      'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                    }`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-gray-700 dark:text-gray-300">
                    {student.lastActivity}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => {
                          setSelectedStudent(student);
                          setShowStudentModal(true);
                        }}
                        className="p-2 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg transition-colors"
                        title="View details"
                      >
                        <SafeIcon icon={FiEye} className="w-4 h-4" />
                      </button>
                      <button
                        className="p-2 text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/30 rounded-lg transition-colors"
                        title="Send message"
                      >
                        <SafeIcon icon={FiMail} className="w-4 h-4" />
                      </button>
                      <button
                        className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                        title="More options"
                      >
                        <SafeIcon icon={FiMoreVertical} className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredStudents.length === 0 && (
          <div className="text-center py-12">
            <SafeIcon icon={FiUsers} className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No students found</h3>
            <p className="text-gray-500 dark:text-gray-400">
              {searchQuery || filterStatus !== 'all'
                ? 'Try adjusting your filters'
                : 'Start by adding your first student'}
            </p>
          </div>
        )}
      </div>

      {/* Student Detail Modal */}
      <StudentDetailModal />
    </div>
  );
};

export default StudentManagement;