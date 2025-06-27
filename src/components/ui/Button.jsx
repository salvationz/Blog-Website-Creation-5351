import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../ThemeProvider.jsx';
import SafeIcon from '../../common/SafeIcon.jsx';

const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  icon, 
  iconPosition = 'left',
  loading = false,
  disabled = false,
  className = '',
  onClick,
  ...props 
}) => {
  const { components } = useTheme();

  const variants = {
    primary: 'bg-primary-600 hover:bg-primary-700 focus:bg-primary-700 text-white shadow-md hover:shadow-lg',
    secondary: 'bg-secondary-600 hover:bg-secondary-700 focus:bg-secondary-700 text-white shadow-md hover:shadow-lg',
    accent: 'bg-accent-600 hover:bg-accent-700 focus:bg-accent-700 text-white shadow-md hover:shadow-lg',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white bg-transparent',
    ghost: 'text-primary-600 hover:bg-primary-50 bg-transparent',
    gradient: 'bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white shadow-lg hover:shadow-xl',
    success: 'bg-success-600 hover:bg-success-700 focus:bg-success-700 text-white shadow-md hover:shadow-lg',
    warning: 'bg-warning-600 hover:bg-warning-700 focus:bg-warning-700 text-white shadow-md hover:shadow-lg',
    error: 'bg-error-600 hover:bg-error-700 focus:bg-error-700 text-white shadow-md hover:shadow-lg',
    glass: 'bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20'
  };

  const sizes = {
    xs: 'px-3 py-1.5 text-xs',
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  };

  const baseClasses = `
    inline-flex items-center justify-center font-semibold rounded-lg
    transition-all duration-200 ease-in-out
    focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:outline-none
    disabled:opacity-50 disabled:cursor-not-allowed
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `;

  const iconSize = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-7 h-7'
  };

  return (
    <motion.button
      whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
      className={baseClasses}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading && (
        <div className={`animate-spin rounded-full border-2 border-current border-t-transparent ${iconSize[size]} mr-2`} />
      )}
      
      {icon && iconPosition === 'left' && !loading && (
        <SafeIcon 
          icon={icon} 
          className={`${iconSize[size]} ${children ? 'mr-2' : ''}`} 
        />
      )}
      
      {children}
      
      {icon && iconPosition === 'right' && !loading && (
        <SafeIcon 
          icon={icon} 
          className={`${iconSize[size]} ${children ? 'ml-2' : ''}`} 
        />
      )}
    </motion.button>
  );
};

export default Button;