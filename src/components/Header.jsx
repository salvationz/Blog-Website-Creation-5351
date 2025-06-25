import React,{useState} from 'react';
import {Link,useLocation} from 'react-router-dom';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import SearchModal from './SearchModal';

const {FiMenu,FiX,FiSearch,FiUser,FiShield} = FiIcons;

const Header=()=> {
  const [isMenuOpen,setIsMenuOpen]=useState(false);
  const [isSearchOpen,setIsSearchOpen]=useState(false);
  const location=useLocation();

  const navigation=[
    {name: 'Home',href: '/'},
    {name: 'Technology',href: '/category/technology'},
    {name: 'Design',href: '/category/design'},
    {name: 'Business',href: '/category/business'},
    {name: 'About',href: '/about'},
    {name: 'Contact',href: '/contact'},
  ];

  const isActive=(href)=> location.pathname===href;

  const handleSearchOpen=()=> {
    setIsSearchOpen(true);
  };

  const handleSearchClose=()=> {
    setIsSearchOpen(false);
  };

  const handleLinkClick=()=> {
    setIsMenuOpen(false);
    // Scroll to top when clicking navigation links
    window.scrollTo({top: 0,behavior: 'smooth'});
  };

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
              <motion.div
                whileHover={{scale: 1.05}}
                className="text-2xl font-bold text-primary-600"
              >
                TechBlog
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item)=> (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={handleLinkClick}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-primary-600 border-b-2 border-primary-600'
                      : 'text-gray-600 hover:text-primary-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Search, Login, Admin Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.button
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                onClick={handleSearchOpen}
                className="p-2 text-gray-600 hover:text-primary-600 transition-colors"
                aria-label="Search"
              >
                <SafeIcon icon={FiSearch} className="w-5 h-5" />
              </motion.button>
              
              <Link to="/login">
                <motion.button
                  whileHover={{scale: 1.1}}
                  whileTap={{scale: 0.9}}
                  className="p-2 text-gray-600 hover:text-primary-600 transition-colors"
                  aria-label="Login"
                >
                  <SafeIcon icon={FiUser} className="w-5 h-5" />
                </motion.button>
              </Link>

              <Link to="/admin">
                <motion.button
                  whileHover={{scale: 1.1}}
                  whileTap={{scale: 0.9}}
                  className="p-2 text-gray-600 hover:text-red-600 transition-colors"
                  aria-label="Admin"
                >
                  <SafeIcon icon={FiShield} className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={()=> setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-primary-600"
              aria-label="Toggle menu"
            >
              <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{opacity: 0,y: -10}}
              animate={{opacity: 1,y: 0}}
              exit={{opacity: 0,y: -10}}
              className="md:hidden py-4 border-t"
            >
              <nav className="flex flex-col space-y-2">
                {navigation.map((item)=> (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={handleLinkClick}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive(item.href)
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Search Button */}
                <button
                  onClick={()=> {
                    setIsMenuOpen(false);
                    handleSearchOpen();
                  }}
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
                >
                  <SafeIcon icon={FiSearch} className="w-4 h-4 mr-2" />
                  Search
                </button>
                
                {/* Mobile Login Button */}
                <Link
                  to="/login"
                  onClick={handleLinkClick}
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
                >
                  <SafeIcon icon={FiUser} className="w-4 h-4 mr-2" />
                  Login
                </Link>

                {/* Mobile Admin Button */}
                <Link
                  to="/admin"
                  onClick={handleLinkClick}
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-red-600 hover:bg-gray-50 rounded-md transition-colors"
                >
                  <SafeIcon icon={FiShield} className="w-4 h-4 mr-2" />
                  Admin Panel
                </Link>
              </nav>
            </motion.div>
          )}
        </div>
      </header>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={handleSearchClose} />
    </>
  );
};

export default Header;