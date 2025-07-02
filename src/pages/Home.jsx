import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import FeaturedPosts from '../components/FeaturedPosts';
import CategorySection from '../components/CategorySection';
import Newsletter from '../components/Newsletter';
import { useSelector, useDispatch } from 'react-redux'
import {fetchBlogPosts, selectBlogPosts} from '../store/slices/blogSlice';

const Home = () => {

  const dispatch = useDispatch();
  const blogPosts = useSelector(selectBlogPosts);
  const [posts, setPosts] = useState([]);

  const mockPosts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Explore the cutting-edge technologies and methodologies that are shaping the future of web development.",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      author: "Sarah Johnson",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      category: "Technology"
    },
    {
      id: 2,
      title: "Mastering React Hooks: Advanced Patterns and Best Practices",
      excerpt: "Deep dive into advanced React Hooks patterns that will elevate your component architecture.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      author: "Michael Chen",
      date: "Dec 12, 2024",
      readTime: "12 min read",
      category: "Technology"
    },
    {
      id: 3,
      title: "Design Systems That Scale: Building for the Future",
      excerpt: "Learn how to create design systems that grow with your product and team.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      author: "Emma Rodriguez",
      date: "Dec 10, 2024",
      readTime: "10 min read",
      category: "Design"
    },
    {
      id: 4,
      title: "The Psychology of User Experience: What Drives Engagement",
      excerpt: "Understand the psychological principles that make interfaces intuitive and engaging.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      author: "David Park",
      date: "Dec 8, 2024",
      readTime: "15 min read",
      category: "Business"
    }
  ];

  useEffect(() => {
    dispatch(fetchBlogPosts());
  }, []);

  useEffect(() => {
    if (blogPosts.results && blogPosts.results.length > 0) {
      setPosts(blogPosts.results.slice(0, 7));
    }
  },[blogPosts]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 dark:bg-gray-900"
    >
      { posts.length > 0 ? (
        <>
          <Hero featuredPost={posts[0]} />
          <FeaturedPosts posts={posts.slice(1)} />
          <CategorySection />
          <Newsletter />
        </>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <p className="text-gray-500 dark:text-gray-400">Loading posts...</p>
        </div>
      )}
    </motion.div>
  );
};

export default Home;