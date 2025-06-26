import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import SearchModal from './SearchModal';
import ThemeToggle from './ThemeToggle';

const {
  FiMenu, FiX, FiSearch, FiUser, FiShield, FiChevronDown, FiCode, 
  FiPenTool, FiBriefcase, FiBookOpen, FiGraduationCap
} = FiIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Blog', 
      href: '/blog',
      hasDropdown: true,
      dropdownItems: [
        {
          name: 'All Posts',
          href: '/blog',
          description: 'Browse all articles',
          icon: FiBookOpen
        },
        {
          name: 'Technology',
          href: '/category/technology',
          description: 'Web development, AI, and software engineering',
          icon: FiCode
        },
        {
          name: 'Design',
          href: '/category/design',
          description: 'UI/UX design principles and creative inspiration',
          icon: FiPenTool
        },
        {
          name: 'Business',
          href: '/category/business',
          description: 'Entrepreneurship and marketing strategies',
          icon: FiBriefcase
        }
      ]
    },
    { name: 'Courses', href: '/courses' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (href) => location.pathname === href;

  const handleSearchOpen = () => {
    setIsSearchOpen(true);
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsBlogDropdownOpen(false);
    // Scroll to top when clicking navigation links
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDropdownToggle = () => {
    setIsBlogDropdownOpen(!isBlogDropdownOpen);
  };

  return (
    <>
      <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold text-primary-600 dark:text-primary-400"
              >
                TechBlog
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div className="relative">
                      <button
                        onClick={handleDropdownToggle}
                        onMouseEnter={() => setIsBlogDropdownOpen(true)}
                        className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                          isActive(item.href) || location.pathname.startsWith('/category')
                            ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-600 dark:border-primary-400'
                            : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                        }`}
                      >
                        <span>{item.name}</span>
                        <SafeIcon 
                          icon={FiChevronDown} 
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isBlogDropdownOpen ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>

                      {/* Desktop Dropdown */}
                      <AnimatePresence>
                        {isBlogDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-1 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50"
                            onMouseLeave={() => setIsBlogDropdownOpen(false)}
                          >
                            {item.dropdownItems.map((dropdownItem, index) => (
                              <Link
                                key={index}
                                to={dropdownItem.href}
                                onClick={handleLinkClick}
                                className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
                              >
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                  dropdownItem.name === 'Technology' ? 'bg-blue-100 dark:bg-blue-900/30' :
                                  dropdownItem.name === 'Design' ? 'bg-purple-100 dark:bg-purple-900/30' :
                                  dropdownItem.name === 'Business' ? 'bg-green-100 dark:bg-green-900/30' :
                                  'bg-gray-100 dark:bg-gray-700'
                                }`}>
                                  <SafeIcon 
                                    icon={dropdownItem.icon} 
                                    className={`w-5 h-5 ${
                                      dropdownItem.name === 'Technology' ? 'text-blue-600 dark:text-blue-400' :
                                      dropdownItem.name === 'Design' ? 'text-purple-600 dark:text-purple-400' :
                                      dropdownItem.name === 'Business' ? 'text-green-600 dark:text-green-400' :
                                      'text-gray-600 dark:text-gray-400'
                                    }`} 
                                  />
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                    {dropdownItem.name}
                                  </h4>
                                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-tight">
                                    {dropdownItem.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={handleLinkClick}
                      className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                        isActive(item.href)
                          ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-600 dark:border-primary-400'
                          : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Search, Theme Toggle, Login, Admin Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleSearchOpen}
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="Search"
              >
                <SafeIcon icon={FiSearch} className="w-5 h-5" />
              </motion.button>

              {/* Theme Toggle */}
              <ThemeToggle size="md" variant="ghost" />

              <Link to="/login">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  aria-label="Login"
                >
                  <SafeIcon icon={FiUser} className="w-5 h-5" />
                </motion.button>
              </Link>

              <Link to="/admin">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                  aria-label="Admin"
                >
                  <SafeIcon icon={FiShield} className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="Toggle menu"
            >
              <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <nav className="flex flex-col space-y-2">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.hasDropdown ? (
                        <div>
                          <button
                            onClick={() => setIsBlogDropdownOpen(!isBlogDropdownOpen)}
                            className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                              isActive(item.href) || location.pathname.startsWith('/category')
                                ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                                : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                            }`}
                          >
                            <span>{item.name}</span>
                            <SafeIcon 
                              icon={FiChevronDown} 
                              className={`w-4 h-4 transition-transform duration-200 ${
                                isBlogDropdownOpen ? 'rotate-180' : ''
                              }`} 
                            />
                          </button>

                          {/* Mobile Dropdown */}
                          <AnimatePresence>
                            {isBlogDropdownOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="ml-4 mt-2 space-y-1 overflow-hidden"
                              >
                                {item.dropdownItems.map((dropdownItem, index) => (
                                  <Link
                                    key={index}
                                    to={dropdownItem.href}
                                    onClick={handleLinkClick}
                                    className="flex items-center space-x-3 px-3 py-2 text-sm rounded-md transition-colors text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                                  >
                                    <SafeIcon 
                                      icon={dropdownItem.icon} 
                                      className={`w-4 h-4 ${
                                        dropdownItem.name === 'Technology' ? 'text-blue-500' :
                                        dropdownItem.name === 'Design' ? 'text-purple-500' :
                                        dropdownItem.name === 'Business' ? 'text-green-500' :
                                        'text-gray-500'
                                      }`} 
                                    />
                                    <span>{dropdownItem.name}</span>
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={item.href}
                          onClick={handleLinkClick}
                          className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                            isActive(item.href)
                              ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                              : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                          }`}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}

                  {/* Mobile Search Button */}
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleSearchOpen();
                    }}
                    className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
                  >
                    <SafeIcon icon={FiSearch} className="w-4 h-4 mr-2" />
                    Search
                  </button>

                  {/* Mobile Theme Toggle */}
                  <div className="flex items-center justify-between px-3 py-2">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      Theme
                    </span>
                    <ThemeToggle size="sm" variant="ghost" />
                  </div>

                  {/* Mobile Login Button */}
                  <Link
                    to="/login"
                    onClick={handleLinkClick}
                    className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
                  >
                    <SafeIcon icon={FiUser} className="w-4 h-4 mr-2" />
                    Login
                  </Link>

                  {/* Mobile Admin Button */}
                  <Link
                    to="/admin"
                    onClick={handleLinkClick}
                    className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
                  >
                    <SafeIcon icon={FiShield} className="w-4 h-4 mr-2" />
                    Admin Panel
                  </Link>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={handleSearchClose} />
    </>
  );
};

export default Header;