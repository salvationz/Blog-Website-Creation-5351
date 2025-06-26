import React from 'react';
import { motion } from 'framer-motion';
import CoursesCRM from '../components/CoursesCRM';

const CoursesCRMPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 dark:bg-gray-900"
    >
      <CoursesCRM />
    </motion.div>
  );
};

export default CoursesCRMPage;