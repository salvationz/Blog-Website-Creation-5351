import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { ThemeSwitch } from './ThemeToggle';

const { FiTwitter, FiFacebook, FiInstagram, FiLinkedin, FiMail, FiHeart } = FiIcons;

const Footer = () => {
  const location = useLocation();
  
  // Don't render the footer in admin panel
  if (location.pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-white">TechBlog</h3>
            <p className="text-gray-400 dark:text-gray-500 mb-6 max-w-md">
              Discover the latest insights in technology, design, and business. Join our community of
              forward-thinking professionals and stay ahead of the curve.
            </p>
            <div className="flex space-x-4">
              {[FiTwitter, FiFacebook, FiInstagram, FiLinkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 bg-gray-800 dark:bg-gray-900 rounded-full hover:bg-primary-600 dark:hover:bg-primary-700 transition-colors duration-200"
                >
                  <SafeIcon icon={Icon} className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Contact', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Categories</h4>
            <ul className="space-y-2">
              {['Technology', 'Design', 'Business', 'Lifestyle', 'Travel'].map((category) => (
                <li key={category}>
                  <Link
                    to={`/category/${category.toLowerCase()}`}
                    className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors duration-200"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-2 text-white">Stay Updated</h4>
              <p className="text-gray-400 dark:text-gray-500">
                Get the latest posts delivered right to your inbox.
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow md:w-64 px-4 py-2 bg-gray-800 dark:bg-gray-900 border border-gray-700 dark:border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-600 text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200"
              />
              <button className="px-6 py-2 bg-primary-600 hover:bg-primary-700 rounded-r-md transition-colors duration-200 flex items-center">
                <SafeIcon icon={FiMail} className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Theme Toggle & Copyright */}
        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <p className="text-gray-400 dark:text-gray-500 flex items-center">
                Made with <SafeIcon icon={FiHeart} className="w-4 h-4 mx-1 text-red-500" /> by TechBlog Team
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <span className="text-sm font-medium text-gray-400 dark:text-gray-500">Theme:</span>
                <ThemeSwitch showLabels={false} size="sm" />
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-500 dark:text-gray-600 text-sm">
              © 2024 TechBlog. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;