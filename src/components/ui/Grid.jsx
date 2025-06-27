import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider.jsx';

const Grid = ({ 
  cols = { base: 1, md: 2, lg: 3 },
  gap = 6,
  children,
  className = '',
  stagger = false,
  ...props 
}) => {
  const { animations } = useTheme();

  const getColsClass = (cols) => {
    if (typeof cols === 'number') {
      return `grid-cols-${cols}`;
    }
    
    const classes = [];
    if (cols.base) classes.push(`grid-cols-${cols.base}`);
    if (cols.sm) classes.push(`sm:grid-cols-${cols.sm}`);
    if (cols.md) classes.push(`md:grid-cols-${cols.md}`);
    if (cols.lg) classes.push(`lg:grid-cols-${cols.lg}`);
    if (cols.xl) classes.push(`xl:grid-cols-${cols.xl}`);
    if (cols['2xl']) classes.push(`2xl:grid-cols-${cols['2xl']}`);
    
    return classes.join(' ');
  };

  const gapClass = `gap-${gap}`;
  const colsClass = getColsClass(cols);
  
  const baseClasses = `
    grid ${colsClass} ${gapClass} ${className}
  `;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger ? 0.1 : 0
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  if (stagger) {
    return (
      <motion.div
        className={baseClasses}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        {...props}
      >
        {React.Children.map(children, (child, index) => (
          <motion.div key={index} variants={itemVariants}>
            {child}
          </motion.div>
        ))}
      </motion.div>
    );
  }

  return (
    <div className={baseClasses} {...props}>
      {children}
    </div>
  );
};

export default Grid;