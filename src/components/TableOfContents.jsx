import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiList, FiChevronRight, FiChevronDown, FiX } = FiIcons;

const TableOfContents = ({ content }) => {
  const [headings, setHeadings] = useState([]);
  const [activeHeading, setActiveHeading] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Extract headings from markdown content
  useEffect(() => {
    const extractHeadings = () => {
      const headingRegex = /^(#{1,6})\s+(.+)$/gm;
      const matches = [];
      let match;

      while ((match = headingRegex.exec(content)) !== null) {
        const level = match[1].length;
        const text = match[2].trim();
        const id = text
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, '')
          .replace(/\s+/g, '-')
          .trim();

        matches.push({
          level,
          text,
          id,
          element: null
        });
      }

      setHeadings(matches);
    };

    if (content) {
      extractHeadings();
    }
  }, [content]);

  // Track active heading based on scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -35% 0px',
        threshold: 0
      }
    );

    // Observe all heading elements
    const headingElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headingElements.forEach((el) => observer.observe(el));

    return () => {
      headingElements.forEach((el) => observer.unobserve(el));
    };
  }, [headings]);

  const scrollToHeading = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Offset for sticky header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    if (isMobile) {
      setIsOpen(false);
    }
  };

  const getIndentClass = (level) => {
    switch (level) {
      case 1: return 'ml-0';
      case 2: return 'ml-2';
      case 3: return 'ml-4';
      case 4: return 'ml-6';
      case 5: return 'ml-8';
      case 6: return 'ml-10';
      default: return 'ml-0';
    }
  };

  const getTextSize = (level) => {
    switch (level) {
      case 1: return 'text-base font-bold';
      case 2: return 'text-sm font-semibold';
      case 3: return 'text-sm font-medium';
      default: return 'text-sm';
    }
  };

  if (headings.length === 0) return null;

  // Mobile floating button
  if (isMobile) {
    return (
      <>
        {/* Floating TOC Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-20 left-4 z-40 p-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full shadow-lg transition-colors"
          aria-label="Table of Contents"
        >
          <SafeIcon icon={FiList} className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        </motion.button>

        {/* Mobile TOC Modal */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black bg-opacity-50"
              onClick={() => setIsOpen(false)}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-0 left-0 right-0 bg-white dark:bg-gray-800 rounded-t-xl p-6 max-h-[70vh] overflow-hidden border-t border-gray-200 dark:border-gray-700"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Table of Contents</h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                  >
                    <SafeIcon icon={FiX} className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  </button>
                </div>
                <div className="overflow-y-auto max-h-[50vh] space-y-1">
                  {headings.map((heading, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => scrollToHeading(heading.id)}
                      className={`
                        w-full text-left p-3 rounded-lg transition-colors
                        ${getIndentClass(heading.level)}
                        ${activeHeading === heading.id
                          ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 border-l-4 border-primary-500 dark:border-primary-400'
                          : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                        }
                      `}
                    >
                      <span className={getTextSize(heading.level)}>
                        {heading.text}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  // Desktop sticky TOC
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="hidden lg:block sticky top-24 w-64 h-fit"
    >
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-6">
        <div className="flex items-center space-x-2 mb-4">
          <SafeIcon icon={FiList} className="w-5 h-5 text-primary-600 dark:text-primary-400" />
          <h3 className="font-bold text-gray-900 dark:text-white">Table of Contents</h3>
        </div>
        <nav className="space-y-1 max-h-96 overflow-y-auto">
          {headings.map((heading, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => scrollToHeading(heading.id)}
              className={`
                w-full text-left p-2 rounded-lg transition-all duration-200 group
                ${getIndentClass(heading.level)}
                ${activeHeading === heading.id
                  ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 border-l-4 border-primary-500 dark:border-primary-400'
                  : 'hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }
              `}
            >
              <div className="flex items-center space-x-2">
                <SafeIcon
                  icon={FiChevronRight}
                  className={`
                    w-3 h-3 transition-transform duration-200
                    ${activeHeading === heading.id
                      ? 'rotate-90 text-primary-600 dark:text-primary-400'
                      : 'text-gray-400 dark:text-gray-500'
                    }
                    group-hover:text-primary-500 dark:group-hover:text-primary-400
                  `}
                />
                <span className={`${getTextSize(heading.level)} line-clamp-2`}>
                  {heading.text}
                </span>
              </div>
            </motion.button>
          ))}
        </nav>
        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {headings.length} sections
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TableOfContents;