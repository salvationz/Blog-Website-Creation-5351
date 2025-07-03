import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider.jsx';

const Section = ({ 
  variant = 'default',
  padding = 'lg',
  container = '7xl',
  background,
  className = '',
  children,
  ...props 
}) => {
  const { layout, animations } = useTheme();

  const variants = {
    default: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-gray-900 text-white',
    primary: 'bg-primary-50',
    gradient: 'bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white',
    hero: 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden',
    transparent: 'bg-transparent'
  };

  const paddings = {
    none: '',
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-20',
    xl: 'py-24',
    hero: 'py-20 md:py-24 lg:py-32'
  };

  const containers = {
    none: '',
    sm: 'max-w-sm mx-auto px-4',
    md: 'max-w-md mx-auto px-4',
    lg: 'max-w-lg mx-auto px-4',
    xl: 'max-w-xl mx-auto px-4',
    '2xl': 'max-w-2xl mx-auto px-4',
    '3xl': 'max-w-3xl mx-auto px-4',
    '4xl': 'max-w-4xl mx-auto px-4',
    '5xl': 'max-w-5xl mx-auto px-4',
    '6xl': 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8',
    '7xl': 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    full: 'w-full px-4 sm:px-6 lg:px-8',
    screen: 'max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8'
  };

  const baseClasses = `
    ${variants[variant]}
    ${paddings[padding]}
    ${background || ''}
    ${className}
  `;

  return (
    <section className={baseClasses} {...props}>
      {variant === 'hero' && (
        <>
          <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
          <div className="absolute inset-0 bg-black opacity-20"></div>
        </>
      )}
      <div className={`relative ${containers[container]}`}>
        {children}
      </div>
    </section>
  );
};

// Section sub-components
Section.Header = ({ 
  title, 
  subtitle, 
  description,
  centered = true,
  className = '',
  ...props 
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={`${centered ? 'text-center' : ''} mb-16 ${className}`}
    {...props}
  >
    {subtitle && (
      <p className="text-primary-600 font-semibold text-sm uppercase tracking-wide mb-2">
        {subtitle}
      </p>
    )}
    {title && (
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
    )}
    {description && (
      <p className={`text-xl text-gray-600 leading-relaxed ${centered ? 'max-w-3xl mx-auto' : ''}`}>
        {description}
      </p>
    )}
  </motion.div>
);

Section.Content = ({ children, className = '', ...props }) => (
  <div className={`${className}`} {...props}>
    {children}
  </div>
);

export default Section;