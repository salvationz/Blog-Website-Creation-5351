import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useTheme } from './ThemeProvider';

const { FiSun, FiMoon } = FiIcons;

const ThemeToggle = ({ size = 'md', variant = 'default', className = '' }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const variants = {
    default: 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700',
    primary: 'bg-primary-100 hover:bg-primary-200 dark:bg-primary-900 dark:hover:bg-primary-800',
    ghost: 'hover:bg-gray-100 dark:hover:bg-gray-800',
    floating: 'bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleDarkMode}
      className={`
        ${sizes[size]} 
        ${variants[variant]}
        rounded-full flex items-center justify-center
        transition-all duration-300 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
        dark:focus:ring-offset-gray-900
        ${className}
      `}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      <motion.div
        initial={false}
        animate={{
          scale: isDarkMode ? 0 : 1,
          rotate: isDarkMode ? 180 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="absolute"
      >
        <SafeIcon 
          icon={FiSun} 
          className="w-5 h-5 text-yellow-500"
        />
      </motion.div>
      
      <motion.div
        initial={false}
        animate={{
          scale: isDarkMode ? 1 : 0,
          rotate: isDarkMode ? 0 : -180,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="absolute"
      >
        <SafeIcon 
          icon={FiMoon} 
          className="w-5 h-5 text-blue-400"
        />
      </motion.div>
    </motion.button>
  );
};

// Advanced Toggle Switch Component
export const ThemeSwitch = ({ size = 'md', showLabels = false, className = '' }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  const sizes = {
    sm: { switch: 'w-10 h-6', thumb: 'w-4 h-4', translate: 'translate-x-4' },
    md: { switch: 'w-12 h-7', thumb: 'w-5 h-5', translate: 'translate-x-5' },
    lg: { switch: 'w-14 h-8', thumb: 'w-6 h-6', translate: 'translate-x-6' }
  };

  const currentSize = sizes[size];

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {showLabels && (
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Light
        </span>
      )}
      
      <button
        onClick={toggleDarkMode}
        className={`
          ${currentSize.switch}
          relative inline-flex items-center rounded-full
          transition-colors duration-300 ease-in-out
          focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
          dark:focus:ring-offset-gray-900
          ${isDarkMode 
            ? 'bg-primary-600 hover:bg-primary-700' 
            : 'bg-gray-300 hover:bg-gray-400'
          }
        `}
        aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      >
        <motion.div
          layout
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          className={`
            ${currentSize.thumb}
            ${isDarkMode ? currentSize.translate : 'translate-x-1'}
            inline-block rounded-full bg-white shadow-lg
            transform transition-transform duration-300 ease-in-out
            flex items-center justify-center
          `}
        >
          <motion.div
            initial={false}
            animate={{ rotate: isDarkMode ? 0 : 180 }}
            transition={{ duration: 0.3 }}
          >
            <SafeIcon 
              icon={isDarkMode ? FiMoon : FiSun} 
              className={`w-3 h-3 ${isDarkMode ? 'text-blue-500' : 'text-yellow-500'}`}
            />
          </motion.div>
        </motion.div>
      </button>

      {showLabels && (
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Dark
        </span>
      )}
    </div>
  );
};

// Floating Theme Toggle for Mobile/Tablet
export const FloatingThemeToggle = ({ position = 'bottom-right' }) => {
  const positions = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'top-right': 'top-6 right-6',
    'top-left': 'top-6 left-6'
  };

  return (
    <div className={`fixed ${positions[position]} z-50 lg:hidden`}>
      <ThemeToggle 
        variant="floating" 
        size="lg"
        className="backdrop-blur-sm"
      />
    </div>
  );
};

export default ThemeToggle;