/**
 * Input Component - คอมโพเนนต์ input field ที่ใช้งานทั่วไปในแอปพลิเคชัน
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Input = forwardRef(({
  type = 'text',
  label,
  id,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  error,
  helperText,
  disabled = false,
  required = false,
  fullWidth = true,
  size = 'md',
  className = '',
  ...props
}, ref) => {
  // กำหนดคลาสพื้นฐานสำหรับ input
  const baseInputClasses = 'rounded-md border bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0';
  
  // กำหนดคลาสตาม size
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-2.5 text-lg',
  };
  
  // กำหนดคลาสเมื่อมี error
  const errorClasses = error
    ? 'border-red-500 focus:border-red-500 focus:ring-red-500 dark:border-red-500'
    : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-primary-500';
  
  // กำหนดคลาสเมื่อ disabled
  const disabledClasses = disabled ? 'cursor-not-allowed opacity-60 bg-gray-100 dark:bg-gray-700' : '';
  
  // กำหนดคลาสตามความกว้าง
  const widthClasses = fullWidth ? 'w-full' : '';
  
  // รวมคลาสทั้งหมดสำหรับ input
  const inputClasses = [
    baseInputClasses,
    sizeClasses[size],
    errorClasses,
    disabledClasses,
    widthClasses,
    className,
  ].join(' ');
  
  // กำหนดคลาสสำหรับ label
  const labelClasses = [
    'block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1',
    disabled ? 'opacity-60' : '',
  ].join(' ');
  
  // กำหนดคลาสสำหรับข้อความช่วยเหลือหรือข้อความ error
  const helperTextClasses = [
    'mt-1 text-sm',
    error ? 'text-red-600 dark:text-red-400' : 'text-gray-500 dark:text-gray-400',
  ].join(' ');
  
  return (
    <div className={fullWidth ? 'w-full' : ''}>
      {label && (
        <label htmlFor={id} className={labelClasses}>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        ref={ref}
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={inputClasses}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={helperText || error ? `${id}-helper-text` : undefined}
        data-testid="input"
        {...props}
      />
      {(helperText || error) && (
        <p id={`${id}-helper-text`} className={helperTextClasses}>
          {error || helperText}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  helperText: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
};

export default Input;