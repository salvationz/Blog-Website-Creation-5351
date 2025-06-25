import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider.jsx';

const Card = ({ 
  variant = 'default', 
  padding = 'md',
  children, 
  className = '',
  hover = true,
  ...props 
}) => {
  const { components, animations } = useTheme();

  const variants = {
    default: 'bg-white border border-gray-200 shadow-md hover:shadow-lg',
    elevated: 'bg-white border border-gray-200 shadow-lg hover:shadow-xl',
    gradient: 'bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-md hover:shadow-lg',
    dark: 'bg-gray-800 border border-gray-700 shadow-lg hover:shadow-xl text-white',
    glass: 'bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20',
    flat: 'bg-white border border-gray-200',
    outline: 'bg-transparent border-2 border-gray-200 hover:border-primary-300',
    primary: 'bg-primary-50 border border-primary-200 hover:bg-primary-100',
    success: 'bg-success-50 border border-success-200 hover:bg-success-100',
    warning: 'bg-warning-50 border border-warning-200 hover:bg-warning-100',
    error: 'bg-error-50 border border-error-200 hover:bg-error-100'
  };

  const paddings = {
    none: '',
    xs: 'p-3',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  };

  const baseClasses = `
    rounded-xl transition-all duration-200 ease-in-out
    ${variants[variant]}
    ${paddings[padding]}
    ${className}
  `;

  const MotionCard = hover ? motion.div : 'div';
  const motionProps = hover ? {
    whileHover: { y: -2 },
    transition: { duration: 0.2 }
  } : {};

  return (
    <MotionCard
      className={baseClasses}
      {...motionProps}
      {...props}
    >
      {children}
    </MotionCard>
  );
};

// Card sub-components
Card.Header = ({ children, className = '', ...props }) => (
  <div className={`mb-4 ${className}`} {...props}>
    {children}
  </div>
);

Card.Body = ({ children, className = '', ...props }) => (
  <div className={`${className}`} {...props}>
    {children}
  </div>
);

Card.Footer = ({ children, className = '', ...props }) => (
  <div className={`mt-4 pt-4 border-t border-gray-200 ${className}`} {...props}>
    {children}
  </div>
);

Card.Title = ({ children, className = '', ...props }) => (
  <h3 className={`text-xl font-bold text-gray-900 mb-2 ${className}`} {...props}>
    {children}
  </h3>
);

Card.Description = ({ children, className = '', ...props }) => (
  <p className={`text-gray-600 leading-relaxed ${className}`} {...props}>
    {children}
  </p>
);

export default Card;