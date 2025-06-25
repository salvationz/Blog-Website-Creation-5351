// Component theme definitions - Fixed imports
import { colors, gradients, shadows } from './colors.js';
import { typography } from './typography.js';
import { animations } from './animations.js';

export const components = {
  // Button variants
  buttons: {
    primary: `
      bg-primary-600 hover:bg-primary-700 focus:bg-primary-700 
      text-white font-semibold px-6 py-3 rounded-lg
      transition-colors duration-200 ease-in-out
      focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:outline-none
      hover:-translate-y-1 hover:shadow-lg transition-all duration-200
      shadow-md
    `,
    secondary: `
      bg-secondary-600 hover:bg-secondary-700 focus:bg-secondary-700 
      text-white font-semibold px-6 py-3 rounded-lg
      transition-colors duration-200 ease-in-out
      focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:outline-none
      hover:-translate-y-1 hover:shadow-lg transition-all duration-200
      shadow-md
    `,
    outline: `
      border-2 border-primary-600 text-primary-600 hover:bg-primary-600 
      hover:text-white font-semibold px-6 py-3 rounded-lg
      transition-all duration-200 ease-in-out
      focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:outline-none
    `,
    ghost: `
      text-primary-600 hover:bg-primary-50 font-semibold px-6 py-3 rounded-lg
      transition-colors duration-200 ease-in-out
      focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:outline-none
    `,
    gradient: `
      bg-gradient-to-r from-primary-600 to-primary-700
      text-white font-semibold px-6 py-3 rounded-lg
      transition-all duration-200 ease-in-out
      focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:outline-none
      hover:-translate-y-1 hover:shadow-lg transition-all duration-200
      shadow-lg
    `
  },

  // Card variants
  cards: {
    default: `
      bg-white rounded-xl shadow-md border border-gray-200
      transition-shadow duration-200 ease-in-out hover:shadow-lg
    `,
    elevated: `
      bg-white rounded-xl shadow-lg border border-gray-200
      transition-shadow duration-200 ease-in-out hover:shadow-xl
    `,
    gradient: `
      bg-gradient-to-br from-white to-gray-50
      rounded-xl shadow-md border border-gray-200
      transition-shadow duration-200 ease-in-out hover:shadow-lg
    `,
    dark: `
      bg-gray-800 text-white rounded-xl shadow-lg border border-gray-700
      transition-shadow duration-200 ease-in-out hover:shadow-xl
    `,
    glass: `
      bg-white/10 backdrop-blur-lg rounded-xl border border-white/20
      transition-all duration-200 ease-in-out hover:bg-white/20
    `
  },

  // Input variants
  inputs: {
    default: `
      w-full px-4 py-3 border border-gray-300 rounded-lg
      focus:ring-2 focus:ring-primary-500 focus:border-transparent
      transition-all duration-200 ease-in-out placeholder-gray-400
    `,
    large: `
      w-full px-6 py-4 text-lg border border-gray-300 rounded-lg
      focus:ring-2 focus:ring-primary-500 focus:border-transparent
      transition-all duration-200 ease-in-out placeholder-gray-400
    `,
    small: `
      w-full px-3 py-2 text-sm border border-gray-300 rounded-md
      focus:ring-2 focus:ring-primary-500 focus:border-transparent
      transition-all duration-200 ease-in-out placeholder-gray-400
    `,
    error: `
      w-full px-4 py-3 border-2 border-error-500 rounded-lg
      focus:ring-2 focus:ring-error-500 focus:border-transparent
      transition-all duration-200 ease-in-out placeholder-gray-400
    `
  },

  // Badge variants
  badges: {
    primary: 'px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full',
    secondary: 'px-3 py-1 bg-secondary-100 text-secondary-800 text-sm font-medium rounded-full',
    success: 'px-3 py-1 bg-success-100 text-success-800 text-sm font-medium rounded-full',
    warning: 'px-3 py-1 bg-warning-100 text-warning-800 text-sm font-medium rounded-full',
    error: 'px-3 py-1 bg-error-100 text-error-800 text-sm font-medium rounded-full',
    gray: 'px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full'
  },

  // Navigation variants
  navigation: {
    link: `
      px-3 py-2 text-sm font-medium transition-colors duration-200 ease-in-out
      text-gray-600 hover:text-primary-600
    `,
    activeLink: `
      px-3 py-2 text-sm font-medium
      text-primary-600 border-b-2 border-primary-600
    `,
    mobileLink: `
      px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ease-in-out
      text-gray-600 hover:text-primary-600 hover:bg-gray-50
    `,
    activeMobileLink: `
      px-3 py-2 text-sm font-medium rounded-md
      text-primary-600 bg-primary-50
    `
  }
};