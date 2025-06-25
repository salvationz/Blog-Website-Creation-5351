import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon.jsx';
import Section from './Section.jsx';
import Button from './Button.jsx';
import { useTheme } from './ThemeProvider.jsx';

const {FiArrowRight,FiClock,FiUser}=FiIcons;

const Hero=()=> {
  const { animations } = useTheme();
  
  const featuredPost={
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the cutting-edge technologies and methodologies that are shaping the future of web development.",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    author: "Sarah Johnson",
    date: "Dec 15,2024",
    readTime: "8 min read",
    category: "Technology"
  };

  const handleLinkClick=()=> {
    window.scrollTo({top: 0,behavior: 'smooth'});
  };

  return (
    <Section variant="hero" padding="hero" container="7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary-600/20 rounded-full text-primary-200 text-sm font-medium backdrop-blur-sm border border-primary-400/30">
            Featured Article
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {featuredPost.title}
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
            {featuredPost.excerpt}
          </p>
          
          <div className="flex items-center space-x-6 text-gray-400">
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiUser} className="w-5 h-5" />
              <span className="font-medium">{featuredPost.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiClock} className="w-5 h-5" />
              <span>{featuredPost.readTime}</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="gradient"
              size="lg"
              icon={FiArrowRight}
              iconPosition="right"
              onClick={handleLinkClick}
              className="group"
            >
              <Link to={`/post/${featuredPost.id}`} className="flex items-center">
                Read Full Article
              </Link>
            </Button>
            
            <Button
              variant="glass"
              size="lg"
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
              Explore More
            </Button>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
            <img 
              src={featuredPost.image} 
              alt={featuredPost.title}
              className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute bottom-6 left-6 right-6 z-20">
              <span className="inline-block px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full mb-3">
                {featuredPost.category}
              </span>
              <p className="text-white/90 text-sm font-medium">{featuredPost.date}</p>
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-6 right-6 w-16 h-16 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center">
              <SafeIcon icon={FiArrowRight} className="w-6 h-6 text-white" />
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-8 -left-8 w-96 h-96 bg-gradient-to-tr from-accent-400/20 to-primary-400/20 rounded-full blur-3xl -z-10"></div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Hero;