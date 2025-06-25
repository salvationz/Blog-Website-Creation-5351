import React, { createContext, useContext, useState, useEffect } from 'react';
import { theme, cssVariables } from '../theme/index.js';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('default');
  const [isLoading, setIsLoading] = useState(true);

  // Apply theme to document
  const applyTheme = (darkMode) => {
    const root = document.documentElement;
    const body = document.body;
    
    // Add transition classes for smooth theme switching
    root.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    
    if (darkMode) {
      root.classList.add('dark');
      body.classList.add('dark');
      root.style.colorScheme = 'dark';
      
      // Set CSS custom properties for dark mode
      root.style.setProperty('--bg-primary', '#111827');
      root.style.setProperty('--bg-secondary', '#1f2937');
      root.style.setProperty('--text-primary', '#f9fafb');
      root.style.setProperty('--text-secondary', '#d1d5db');
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark');
      root.style.colorScheme = 'light';
      
      // Set CSS custom properties for light mode
      root.style.setProperty('--bg-primary', '#ffffff');
      root.style.setProperty('--bg-secondary', '#f9fafb');
      root.style.setProperty('--text-primary', '#111827');
      root.style.setProperty('--text-secondary', '#374151');
    }
    
    // Remove transitions after animation completes
    setTimeout(() => {
      root.style.transition = '';
      body.style.transition = '';
    }, 300);
  };

  useEffect(() => {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    let shouldUseDark = false;
    
    if (savedTheme === 'dark') {
      shouldUseDark = true;
    } else if (savedTheme === 'light') {
      shouldUseDark = false;
    } else {
      // No saved preference, use system preference
      shouldUseDark = prefersDark;
    }
    
    setIsDarkMode(shouldUseDark);
    applyTheme(shouldUseDark);

    // Inject CSS variables
    const styleElement = document.createElement('style');
    styleElement.id = 'theme-variables';
    styleElement.textContent = cssVariables;
    
    // Remove existing style element if it exists
    const existingStyle = document.getElementById('theme-variables');
    if (existingStyle) {
      document.head.removeChild(existingStyle);
    }
    
    document.head.appendChild(styleElement);
    setIsLoading(false);

    return () => {
      if (document.head.contains(styleElement)) {
        document.head.removeChild(styleElement);
      }
    };
  }, []);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      // Only auto-switch if user hasn't manually set a preference
      if (!localStorage.getItem('theme')) {
        setIsDarkMode(e.matches);
        applyTheme(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Apply theme whenever isDarkMode changes
  useEffect(() => {
    applyTheme(isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    // Save user preference
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };

  const setTheme = (themeName) => {
    setCurrentTheme(themeName);
    localStorage.setItem('currentTheme', themeName);
  };

  const value = {
    theme,
    isDarkMode,
    currentTheme,
    isLoading,
    toggleDarkMode,
    setTheme,
    colors: theme.colors,
    typography: theme.typography,
    spacing: theme.spacing,
    animations: theme.animations,
    components: theme.components
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;