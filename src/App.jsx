import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import ThemeProvider from './components/ThemeProvider';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { FloatingThemeToggle } from './components/ThemeToggle';
import LoginPage from './components/LoginPage';
import AdminPanel from './components/AdminPanel';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import Contact from './pages/Contact';
import Category from './pages/Category';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col transition-all duration-300">
          <Header />
          <motion.main
            className="flex-grow bg-gray-50 dark:bg-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/course/:id" element={<CourseDetail />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/admin" element={<AdminPanel />} />
              <Route path="/analytics" element={<AnalyticsDashboard />} />
              <Route path="/post/:id" element={<BlogPost />} />
              <Route path="/category/:category" element={<Category />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.main>
          <Footer />
          <ScrollToTop />
          <FloatingThemeToggle position="bottom-left" />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;