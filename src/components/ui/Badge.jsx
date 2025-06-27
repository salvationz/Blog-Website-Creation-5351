import React from 'react';
import { useTheme } from './ThemeProvider.jsx';
import SafeIcon from '../common/SafeIcon.jsx';

const Badge = ({ 
  variant = 'primary', 
  size = 'md',
  icon,
  children, 
  className = '',
  ...props 
}) => {
  const { components } = useTheme();

  const variants = {
    primary: 'bg-primary-100 text-primary-800',
    secondary: 'bg-secondary-100 text-secondary-800',
    accent: 'bg-accent-100 text-accent-800',
    success: 'bg-success-100 text-success-800',
    warning: 'bg-warning-100 text-warning-800',
    error: 'bg-error-100 text-error-800',
    gray: 'bg-gray-100 text-gray-800',
    dark: 'bg-gray-800 text-white',
    outline: 'border border-gray-300 text-gray-700 bg-transparent',
    gradient: 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
  };

  const sizes = {
    xs: 'px-2 py-0.5 text-xs',
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
    xl: 'px-5 py-2 text-lg'
  };

  const iconSizes = {
    xs: 'w-3 h-3',
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
    xl: 'w-6 h-6'
  };

  const baseClasses = `
    inline-flex items-center font-medium rounded-full
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `;

  return (
    <span className={baseClasses} {...props}>
      {icon && (
        <SafeIcon 
          icon={icon} 
          className={`${iconSizes[size]} ${children ? 'mr-1' : ''}`} 
        />
      )}
      {children}
    </span>
  );
};

export default Badge;