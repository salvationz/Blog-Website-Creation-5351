/**
 * Container Component - คอมโพเนนต์สำหรับกำหนดความกว้างและการจัดวางเนื้อหา
 */

import React from 'react';
import PropTypes from 'prop-types';

const Container = ({
  children,
  size = 'default',
  padding = true,
  centered = false,
  className = '',
  ...props
}) => {
  // กำหนดคลาสพื้นฐาน
  const baseClasses = 'mx-auto';
  
  // กำหนดคลาสตาม size
  const sizeClasses = {
    sm: 'max-w-3xl',
    default: 'max-w-6xl',
    lg: 'max-w-7xl',
    xl: 'max-w-screen-2xl',
    full: 'max-w-full',
  };
  
  // กำหนดคลาสสำหรับ padding
  const paddingClasses = padding ? 'px-4 sm:px-6 lg:px-8' : '';
  
  // กำหนดคลาสสำหรับการจัดวาง
  const alignmentClasses = centered ? 'flex flex-col items-center' : '';
  
  // รวมคลาสทั้งหมด
  const containerClasses = [
    baseClasses,
    sizeClasses[size],
    paddingClasses,
    alignmentClasses,
    className,
  ].join(' ');
  
  return (
    <div className={containerClasses} data-testid="container" {...props}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['sm', 'default', 'lg', 'xl', 'full']),
  padding: PropTypes.bool,
  centered: PropTypes.bool,
  className: PropTypes.string,
};

export default Container;